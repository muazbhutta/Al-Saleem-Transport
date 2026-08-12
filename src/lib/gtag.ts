/**
 * Google Ads conversion tracking.
 *
 * The base gtag.js tag is injected once in `src/app/[locale]/layout.tsx`, which
 * is the root layout for all 11 locales. This module is the only place that
 * fires conversion events.
 *
 * Everything here is defensive by design. If the env vars are unset (local dev,
 * preview deployments) or gtag.js has not finished loading, every call becomes
 * a silent no-op. Analytics must never throw, and must never delay or block a
 * contact click — the click is the thing that actually earns money.
 */

/**
 * Google tag ID, e.g. `AW-18381091753`.
 * Google Ads → Admin → Data sources → Google tag.
 */
export const GADS_ID = process.env.NEXT_PUBLIC_GADS_ID ?? '';

/**
 * Send-to label for the "Contact" (Click) conversion action, in the form
 * `AW-XXXXXXXXX/YYYYYYYYYYYYYYYY`.
 * Google Ads → Goals → Conversions → Contact → Tag setup → event snippet.
 */
export const CONTACT_LABEL = process.env.NEXT_PUBLIC_GADS_CONTACT_LABEL ?? '';

/** Which entry point the visitor used. Reported as `event_label`. */
export type ContactMethod = 'whatsapp' | 'call' | 'chat' | 'email';

type GtagEventParams = {
  send_to: string;
  event_label?: string;
};

/**
 * Minimal typing of the global `gtag` function — only the three call shapes
 * this site actually uses, so misuse is a compile error rather than a runtime
 * surprise.
 */
type Gtag = {
  (command: 'js', date: Date): void;
  (command: 'config', targetId: string): void;
  (command: 'event', eventName: 'conversion', params: GtagEventParams): void;
};

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: Gtag;
  }
}

/**
 * Report a Google Ads "Contact" conversion.
 *
 * Safe to call unconditionally: it returns immediately when tracking is not
 * configured or gtag.js is not present. Never awaits, never navigates — the
 * caller's own click behaviour (including `target="_blank"`) is untouched.
 */
export function trackContact(method: ContactMethod): void {
  if (typeof window === 'undefined' || !CONTACT_LABEL) return;

  try {
    window.gtag?.('event', 'conversion', {
      send_to: CONTACT_LABEL,
      event_label: method,
    });
  } catch {
    // A broken or blocked tag must never break a contact click.
  }
}
