'use client';

import { useEffect, useRef, useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { MessageSquare, X, Send, Phone } from 'lucide-react';
import { whatsappLink } from '@/lib/site';

type Msg = { role: 'user' | 'model'; text: string };

/** Localized chrome for the widget. Assistant replies come back in the
 *  user's own language from the model; these are just the UI labels. */
const LABELS: Record<
  string,
  { title: string; welcome: string; placeholder: string; send: string; open: string; close: string }
> = {
  en: {
    title: 'Al-Saleem Assistant',
    welcome: 'Assalamu alaikum! I can help with bookings, transfers and the Ziyarat guide. How can I help?',
    placeholder: 'Type your message…',
    send: 'Send',
    open: 'Chat with us',
    close: 'Close chat',
  },
  ar: {
    title: 'مساعد السليم',
    welcome: 'السلام عليكم! أساعدك في الحجوزات والتنقّلات ودليل الزيارة. كيف أخدمك؟',
    placeholder: 'اكتب رسالتك…',
    send: 'إرسال',
    open: 'تحدّث معنا',
    close: 'إغلاق المحادثة',
  },
  ur: {
    title: 'السلیم اسسٹنٹ',
    welcome: 'السلام علیکم! میں بکنگ، ٹرانسفر اور زیارت گائیڈ میں مدد کر سکتا ہوں۔ کیسے مدد کروں؟',
    placeholder: 'اپنا پیغام لکھیں…',
    send: 'بھیجیں',
    open: 'ہم سے بات کریں',
    close: 'بند کریں',
  },
  'ur-Latn': {
    title: 'Al-Saleem Assistant',
    welcome: 'Assalamu alaikum! Main booking, transfer aur Ziyarat guide mein madad kar sakta hoon. Kaise madad karun?',
    placeholder: 'Apna paigham likhein…',
    send: 'Bhejein',
    open: 'Hum se baat karein',
    close: 'Band karein',
  },
  hi: {
    title: 'अल-सलीम असिस्टेंट',
    welcome: 'अस्सलामु अलैकुम! मैं बुकिंग, ट्रांसफर और ज़ियारत गाइड में मदद कर सकता हूँ। कैसे मदद करूँ?',
    placeholder: 'अपना संदेश लिखें…',
    send: 'भेजें',
    open: 'हमसे बात करें',
    close: 'बंद करें',
  },
  id: {
    title: 'Asisten Al-Saleem',
    welcome: 'Assalamualaikum! Saya bisa membantu pemesanan, transfer, dan panduan Ziyarat. Ada yang bisa dibantu?',
    placeholder: 'Ketik pesan Anda…',
    send: 'Kirim',
    open: 'Chat dengan kami',
    close: 'Tutup',
  },
  ms: {
    title: 'Pembantu Al-Saleem',
    welcome: 'Assalamualaikum! Saya boleh bantu tempahan, pemindahan dan panduan Ziarah. Apa yang boleh saya bantu?',
    placeholder: 'Taip mesej anda…',
    send: 'Hantar',
    open: 'Sembang dengan kami',
    close: 'Tutup',
  },
  tr: {
    title: 'Al-Saleem Asistanı',
    welcome: 'Selâmünaleyküm! Rezervasyon, transfer ve Ziyaret rehberi konusunda yardımcı olabilirim. Nasıl yardımcı olabilirim?',
    placeholder: 'Mesajınızı yazın…',
    send: 'Gönder',
    open: 'Bizimle sohbet edin',
    close: 'Kapat',
  },
  bn: {
    title: 'আল-সালীম সহকারী',
    welcome: 'আসসালামু আলাইকুম! আমি বুকিং, ট্রান্সফার ও যিয়ারত গাইডে সাহায্য করতে পারি। কীভাবে সাহায্য করব?',
    placeholder: 'আপনার বার্তা লিখুন…',
    send: 'পাঠান',
    open: 'আমাদের সাথে চ্যাট করুন',
    close: 'বন্ধ করুন',
  },
  fa: {
    title: 'دستیار السلیم',
    welcome: 'السلام علیکم! می‌توانم در رزرو، جابه‌جایی و راهنمای زیارت کمک کنم. چطور کمکتان کنم؟',
    placeholder: 'پیام خود را بنویسید…',
    send: 'ارسال',
    open: 'با ما گفت‌وگو کنید',
    close: 'بستن',
  },
  fr: {
    title: 'Assistant Al-Saleem',
    welcome: 'Assalamu alaikum ! Je peux vous aider pour les réservations, les transferts et le guide de Ziyarat. Comment puis-je vous aider ?',
    placeholder: 'Écrivez votre message…',
    send: 'Envoyer',
    open: 'Discutez avec nous',
    close: 'Fermer',
  },
};

export default function ChatWidget() {
  const locale = useLocale();
  const tc = useTranslations('common');
  const L = LABELS[locale] ?? LABELS.en;

  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const waHref = whatsappLink('Assalamu alaikum Al-Saleem Transport, I would like to book a ride.');

  useEffect(() => {
    if (open) {
      scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
      inputRef.current?.focus();
    }
  }, [open, messages, loading]);

  async function send() {
    const text = input.trim();
    if (!text || loading) return;
    setError('');
    const next: Msg[] = [...messages, { role: 'user', text }];
    setMessages(next);
    setInput('');
    setLoading(true);
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: next }),
      });
      const data = await res.json();
      if (!res.ok || !data.reply) {
        setError(data.error || 'Something went wrong. Please try WhatsApp.');
      } else {
        setMessages((m) => [...m, { role: 'model', text: data.reply }]);
      }
    } catch {
      setError('Network error. Please try again or use WhatsApp.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {/* Launcher bubble — opposite corner to the WhatsApp button. */}
      {!open && (
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label={L.open}
          className="no-print fixed bottom-5 start-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-navy text-cream-100 shadow-card ring-1 ring-gold/40 transition-transform hover:scale-105 focus-visible:ring-2 focus-visible:ring-gold"
        >
          <MessageSquare className="h-6 w-6" aria-hidden />
        </button>
      )}

      {open && (
        <div className="no-print fixed bottom-5 start-5 z-50 flex h-[70vh] max-h-[560px] w-[92vw] max-w-sm flex-col overflow-hidden rounded-3xl bg-white shadow-card ring-1 ring-navy-100">
          {/* Header */}
          <div className="flex items-center justify-between gap-2 bg-navy px-4 py-3 text-cream-100">
            <div className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gold/20 text-gold-light">
                <MessageSquare className="h-5 w-5" aria-hidden />
              </span>
              <span className="font-semibold">{L.title}</span>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label={L.close}
              className="rounded-full p-1.5 text-cream-100/80 hover:bg-white/10 hover:text-cream-100 focus-visible:ring-2 focus-visible:ring-gold"
            >
              <X className="h-5 w-5" aria-hidden />
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto bg-cream/40 p-4 text-sm">
            <Bubble role="model">{L.welcome}</Bubble>
            {messages.map((m, i) => (
              <Bubble key={i} role={m.role}>
                {m.text}
              </Bubble>
            ))}
            {loading && (
              <Bubble role="model">
                <span className="inline-flex gap-1" aria-label="…">
                  <Dot /> <Dot /> <Dot />
                </span>
              </Bubble>
            )}
            {error && (
              <p role="alert" className="rounded-xl bg-maroon-50 px-3 py-2 text-xs text-maroon-600">
                {error}
              </p>
            )}
          </div>

          {/* WhatsApp handoff */}
          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 border-t border-navy-100 bg-white px-4 py-2.5 text-sm font-semibold text-[#128C7E] hover:bg-cream/60"
          >
            <Phone className="h-4 w-4" aria-hidden />
            {tc('chatWhatsapp')}
          </a>

          {/* Composer */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              send();
            }}
            className="flex items-center gap-2 border-t border-navy-100 bg-white p-3"
          >
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={L.placeholder}
              className="min-w-0 flex-1 rounded-full border border-navy-200 bg-cream/40 px-4 py-2.5 text-sm text-navy-800 placeholder:text-navy-300 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/40"
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              aria-label={L.send}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-navy text-cream-100 transition hover:bg-navy-800 disabled:opacity-50 focus-visible:ring-2 focus-visible:ring-gold"
            >
              <Send className="h-5 w-5 rtl:-scale-x-100" aria-hidden />
            </button>
          </form>
        </div>
      )}
    </>
  );
}

function Bubble({ role, children }: { role: 'user' | 'model'; children: React.ReactNode }) {
  const isUser = role === 'user';
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`max-w-[85%] whitespace-pre-wrap rounded-2xl px-3.5 py-2 leading-relaxed ${
          isUser
            ? 'bg-navy text-cream-100'
            : 'bg-white text-navy-700 ring-1 ring-navy-100'
        }`}
      >
        {children}
      </div>
    </div>
  );
}

function Dot() {
  return <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-navy-400" />;
}
