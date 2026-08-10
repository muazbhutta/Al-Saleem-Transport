import { NextResponse } from 'next/server';
import { assistantSystemPrompt } from '@/lib/assistant-prompt';

/**
 * Al-Saleem Transport assistant — server-side chat endpoint.
 *
 * Proxies the conversation to Google Gemini (gemini-2.5-flash) with our
 * scope-restricted system prompt. The API key is read from GEMINI_API_KEY at
 * runtime and never sent to the browser. Thinking is disabled for fast, cheap
 * (free-tier-friendly) replies.
 */

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const MODEL = 'gemini-2.5-flash';
const MAX_MESSAGES = 24; // keep the context window small
const MAX_LEN = 2000; // per-message character cap

type Msg = { role: 'user' | 'model'; text: string };

const wa = 'Please reach us on WhatsApp +966 50 068 9196.';

// Lightweight in-memory sliding-window rate limit per client IP. Best-effort
// only: on serverless it is per-instance (a KV store would be needed for strict
// global limits), but it blunts obvious abuse without extra dependencies.
const RATE_LIMIT = 15; // requests
const RATE_WINDOW_MS = 60_000; // per minute
const hits = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < RATE_WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  // Opportunistic cleanup so the map can't grow unbounded.
  if (hits.size > 5000) {
    for (const [k, v] of hits) if (v.every((t) => now - t >= RATE_WINDOW_MS)) hits.delete(k);
  }
  return recent.length > RATE_LIMIT;
}

export async function POST(req: Request) {
  // Handled, user-facing states (rate-limited, not configured, upstream busy)
  // return HTTP 200 with an `error` message. The chat widget shows the message,
  // and the browser doesn't log a red console error for an expected condition.
  const ip = (req.headers.get('x-forwarded-for') ?? '').split(',')[0].trim() || 'unknown';
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: `You're sending messages too quickly. Please wait a moment, or ${wa}` },
      { status: 200 },
    );
  }

  const key = process.env.GEMINI_API_KEY;
  if (!key) {
    return NextResponse.json(
      { error: `The assistant is not configured yet. ${wa}` },
      { status: 200 },
    );
  }

  let body: { messages?: Msg[] };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
  }

  const contents = (Array.isArray(body.messages) ? body.messages : [])
    .filter(
      (m): m is Msg =>
        !!m && (m.role === 'user' || m.role === 'model') && typeof m.text === 'string' && !!m.text.trim(),
    )
    .slice(-MAX_MESSAGES)
    .map((m) => ({ role: m.role, parts: [{ text: m.text.slice(0, MAX_LEN) }] }));

  if (contents.length === 0) {
    return NextResponse.json({ error: 'No message provided.' }, { status: 400 });
  }

  const payload = {
    systemInstruction: { parts: [{ text: assistantSystemPrompt() }] },
    contents,
    generationConfig: {
      temperature: 0.4,
      topP: 0.9,
      maxOutputTokens: 800,
      // Disable "thinking" so gemini-2.5-flash answers directly (faster/cheaper
      // and avoids empty replies when the token budget is small).
      thinkingConfig: { thinkingBudget: 0 },
    },
  };

  try {
    const res = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent?key=${key}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
        // Never cache a chat response.
        cache: 'no-store',
      },
    );

    if (!res.ok) {
      return NextResponse.json(
        { error: `The assistant is busy right now. Please try again in a moment, or ${wa}` },
        { status: 200 },
      );
    }

    const data = await res.json();
    const reply: string = (data?.candidates?.[0]?.content?.parts ?? [])
      .map((p: { text?: string }) => p?.text ?? '')
      .join('')
      .trim();

    if (!reply) {
      return NextResponse.json(
        { error: `Sorry, I couldn't answer that. ${wa}` },
        { status: 200 },
      );
    }

    return NextResponse.json({ reply });
  } catch {
    return NextResponse.json(
      { error: `Network error reaching the assistant. Please try again, or ${wa}` },
      { status: 200 },
    );
  }
}
