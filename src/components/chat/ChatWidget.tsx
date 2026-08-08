'use client';

import { useEffect, useRef, useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { MessageSquare, X, Send, Phone } from 'lucide-react';
import { whatsappLink } from '@/lib/site';

type Msg = { role: 'user' | 'model'; text: string };

type Labels = {
  title: string;
  welcome: string;
  placeholder: string;
  send: string;
  open: string;
  close: string;
  chips: string[];
  confirmBooking: string;
};

/** Localized chrome for the widget. Assistant replies come back in the
 *  user's own language from the model; these are just the UI labels. */
const LABELS: Record<string, Labels> = {
  en: {
    title: 'Al-Saleem Assistant',
    welcome: 'Assalamu alaikum! I can help plan your Ziyarat, suggest where to shop and when to go, and book your ride. How can I help?',
    placeholder: 'Type your message…',
    send: 'Send',
    open: 'Chat with us',
    close: 'Close chat',
    chips: ['Plan my Ziyarat', 'Where to shop', 'Book a ride', 'Best time to visit'],
    confirmBooking: 'Confirm booking on WhatsApp',
  },
  ar: {
    title: 'مساعد السليم',
    welcome: 'السلام عليكم! أساعدك في تخطيط زياراتك، واقتراح أماكن التسوّق وأفضل الأوقات، وحجز رحلتك. كيف أخدمك؟',
    placeholder: 'اكتب رسالتك…',
    send: 'إرسال',
    open: 'تحدّث معنا',
    close: 'إغلاق المحادثة',
    chips: ['خطّط زيارتي', 'أين أتسوّق', 'احجز رحلة', 'أفضل وقت للزيارة'],
    confirmBooking: 'أكّد الحجز عبر واتساب',
  },
  ur: {
    title: 'السلیم اسسٹنٹ',
    welcome: 'السلام علیکم! میں آپ کی زیارت کی منصوبہ بندی، خریداری اور بہترین اوقات کی تجاویز، اور سواری بک کرنے میں مدد کر سکتا ہوں۔ کیسے مدد کروں؟',
    placeholder: 'اپنا پیغام لکھیں…',
    send: 'بھیجیں',
    open: 'ہم سے بات کریں',
    close: 'بند کریں',
    chips: ['میری زیارت پلان کریں', 'کہاں خریداری', 'سواری بک کریں', 'بہترین وقت'],
    confirmBooking: 'واٹس ایپ پر بکنگ کنفرم کریں',
  },
  'ur-Latn': {
    title: 'Al-Saleem Assistant',
    welcome: 'Assalamu alaikum! Main aap ki Ziyarat plan karne, shopping aur behtareen auqaat batane, aur ride book karne mein madad kar sakta hoon. Kaise madad karun?',
    placeholder: 'Apna paigham likhein…',
    send: 'Bhejein',
    open: 'Hum se baat karein',
    close: 'Band karein',
    chips: ['Ziyarat plan karein', 'Kahan shopping', 'Ride book karein', 'Behtareen waqt'],
    confirmBooking: 'WhatsApp par booking confirm karein',
  },
  hi: {
    title: 'अल-सलीम असिस्टेंट',
    welcome: 'अस्सलामु अलैकुम! मैं आपकी ज़ियारत की योजना, ख़रीदारी और सही समय के सुझाव, और राइड बुकिंग में मदद कर सकता हूँ। कैसे मदद करूँ?',
    placeholder: 'अपना संदेश लिखें…',
    send: 'भेजें',
    open: 'हमसे बात करें',
    close: 'बंद करें',
    chips: ['ज़ियारत प्लान करें', 'कहाँ ख़रीदें', 'राइड बुक करें', 'जाने का सही समय'],
    confirmBooking: 'व्हाट्सएप पर बुकिंग पक्की करें',
  },
  id: {
    title: 'Asisten Al-Saleem',
    welcome: 'Assalamualaikum! Saya bisa membantu merencanakan Ziyarat, menyarankan tempat belanja dan waktu terbaik, serta memesan kendaraan. Ada yang bisa dibantu?',
    placeholder: 'Ketik pesan Anda…',
    send: 'Kirim',
    open: 'Chat dengan kami',
    close: 'Tutup',
    chips: ['Rencanakan Ziyarat', 'Tempat belanja', 'Pesan mobil', 'Waktu terbaik'],
    confirmBooking: 'Konfirmasi via WhatsApp',
  },
  ms: {
    title: 'Pembantu Al-Saleem',
    welcome: 'Assalamualaikum! Saya boleh bantu merancang Ziarah, cadangkan tempat beli-belah dan masa terbaik, serta menempah kenderaan. Apa yang boleh saya bantu?',
    placeholder: 'Taip mesej anda…',
    send: 'Hantar',
    open: 'Sembang dengan kami',
    close: 'Tutup',
    chips: ['Rancang Ziarah', 'Tempat beli-belah', 'Tempah perjalanan', 'Masa terbaik'],
    confirmBooking: 'Sahkan tempahan di WhatsApp',
  },
  tr: {
    title: 'Al-Saleem Asistanı',
    welcome: 'Selâmünaleyküm! Ziyaretinizi planlamada, nerede alışveriş yapılacağı ve en iyi zaman konusunda ve araç ayırtmada yardımcı olabilirim. Nasıl yardımcı olabilirim?',
    placeholder: 'Mesajınızı yazın…',
    send: 'Gönder',
    open: 'Bizimle sohbet edin',
    close: 'Kapat',
    chips: ['Ziyaretimi planla', 'Nerede alışveriş', 'Araç ayırt', 'En iyi zaman'],
    confirmBooking: 'WhatsApp’ta rezervasyonu onayla',
  },
  bn: {
    title: 'আল-সালীম সহকারী',
    welcome: 'আসসালামু আলাইকুম! আমি আপনার যিয়ারত পরিকল্পনা, কেনাকাটা ও সেরা সময়ের পরামর্শ, এবং রাইড বুকিংয়ে সাহায্য করতে পারি। কীভাবে সাহায্য করব?',
    placeholder: 'আপনার বার্তা লিখুন…',
    send: 'পাঠান',
    open: 'আমাদের সাথে চ্যাট করুন',
    close: 'বন্ধ করুন',
    chips: ['যিয়ারত পরিকল্পনা', 'কোথায় কেনাকাটা', 'রাইড বুক করুন', 'সেরা সময়'],
    confirmBooking: 'হোয়াটসঅ্যাপে বুকিং নিশ্চিত করুন',
  },
  fa: {
    title: 'دستیار السلیم',
    welcome: 'السلام علیکم! می‌توانم در برنامه‌ریزی زیارت، پیشنهاد محل خرید و بهترین زمان، و رزرو خودرو کمکتان کنم. چطور کمکتان کنم؟',
    placeholder: 'پیام خود را بنویسید…',
    send: 'ارسال',
    open: 'با ما گفت‌وگو کنید',
    close: 'بستن',
    chips: ['برنامه زیارت', 'کجا خرید کنم', 'رزرو خودرو', 'بهترین زمان'],
    confirmBooking: 'تأیید رزرو در واتساپ',
  },
  fr: {
    title: 'Assistant Al-Saleem',
    welcome: 'Assalamu alaikum ! Je peux vous aider à planifier votre Ziyarat, suggérer où faire du shopping et quand y aller, et réserver votre trajet. Comment puis-je vous aider ?',
    placeholder: 'Écrivez votre message…',
    send: 'Envoyer',
    open: 'Discutez avec nous',
    close: 'Fermer',
    chips: ['Planifier ma Ziyarat', 'Où faire du shopping', 'Réserver un trajet', 'Meilleur moment'],
    confirmBooking: 'Confirmer sur WhatsApp',
  },
};

/** Split a model reply into visible text + an optional <BOOKING> summary. */
function extractBooking(raw: string): { display: string; booking: string | null } {
  const m = raw.match(/<BOOKING>([\s\S]*?)<\/BOOKING>/i);
  if (!m) return { display: raw, booking: null };
  const display = raw.replace(/<BOOKING>[\s\S]*?<\/BOOKING>/i, '').replace(/<\/?BOOKING>/gi, '').trim();
  return { display, booking: m[1].trim() };
}

export default function ChatWidget() {
  const locale = useLocale();
  const tc = useTranslations('common');
  const L = LABELS[locale] ?? LABELS.en;

  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [booking, setBooking] = useState<string | null>(null);

  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const waHref = whatsappLink('Assalamu alaikum Al-Saleem Transport, I would like to book a ride.');
  const bookingHref = booking
    ? whatsappLink(`Assalamu alaikum Al-Saleem Transport, I would like to confirm this booking:\n${booking}`)
    : waHref;

  useEffect(() => {
    if (open) {
      scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
      inputRef.current?.focus();
    }
  }, [open, messages, loading]);

  async function send(override?: string) {
    const text = (override ?? input).trim();
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
        const { display, booking: b } = extractBooking(data.reply);
        if (b) setBooking(b);
        setMessages((m) => [...m, { role: 'model', text: display }]);
      }
    } catch {
      setError('Network error. Please try again or use WhatsApp.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {/* Launcher bubble — primary floating action, bottom-end corner. */}
      {!open && (
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label={L.open}
          className="no-print fixed bottom-5 end-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-navy text-cream-100 shadow-card ring-1 ring-gold/40 transition-transform hover:scale-105 focus-visible:ring-2 focus-visible:ring-gold"
        >
          <MessageSquare className="h-6 w-6" aria-hidden />
        </button>
      )}

      {open && (
        <>
          {/* Dim backdrop on mobile so the sheet reads as a modal (tap to close). */}
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label={L.close}
            className="no-print fixed inset-0 z-40 bg-navy-900/40 sm:hidden"
          />
          <div className="no-print fixed inset-x-0 bottom-0 z-50 flex h-[85dvh] flex-col overflow-hidden rounded-t-3xl bg-white shadow-card ring-1 ring-navy-100 sm:inset-x-auto sm:bottom-5 sm:end-5 sm:h-[70vh] sm:max-h-[560px] sm:w-[400px] sm:rounded-3xl">
            {/* Header */}
            <div className="flex items-center justify-between gap-2 bg-navy px-4 py-3.5 text-cream-100">
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
                className="-me-1 rounded-full p-2 text-cream-100/80 hover:bg-white/10 hover:text-cream-100 focus-visible:ring-2 focus-visible:ring-gold"
              >
                <X className="h-5 w-5" aria-hidden />
              </button>
            </div>

            {/* Messages */}
            <div
              ref={scrollRef}
              className="flex-1 space-y-3 overflow-y-auto overscroll-contain bg-cream/40 p-4 text-sm"
            >
              <Bubble role="model">{L.welcome}</Bubble>

              {/* Quick-action chips (only before the conversation starts) */}
              {messages.length === 0 && (
                <div className="flex flex-wrap gap-2 pt-1">
                  {L.chips.map((c) => (
                    <button
                      key={c}
                      type="button"
                      onClick={() => send(c)}
                      className="rounded-full border border-navy-200 bg-white px-3 py-1.5 text-xs font-medium text-navy-700 transition hover:border-gold hover:bg-cream/60"
                    >
                      {c}
                    </button>
                  ))}
                </div>
              )}

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

            {/* Structured booking handoff — appears once the assistant emits <BOOKING>. */}
            {booking && (
              <a
                href={bookingHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 border-t border-navy-100 bg-[#25D366] px-4 py-3 text-sm font-semibold text-white hover:brightness-95"
              >
                <Phone className="h-4 w-4" aria-hidden />
                {L.confirmBooking}
              </a>
            )}

            {/* Always-available WhatsApp path */}
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
              className="flex items-center gap-2 border-t border-navy-100 bg-white p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]"
            >
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={L.placeholder}
                enterKeyHint="send"
                className="min-w-0 flex-1 rounded-full border border-navy-200 bg-cream/40 px-4 py-3 text-base text-navy-800 placeholder:text-navy-300 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/40 sm:py-2.5 sm:text-sm"
              />
              <button
                type="submit"
                disabled={loading || !input.trim()}
                aria-label={L.send}
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-navy text-cream-100 transition hover:bg-navy-800 disabled:opacity-50 focus-visible:ring-2 focus-visible:ring-gold sm:h-10 sm:w-10"
              >
                <Send className="h-5 w-5 rtl:-scale-x-100" aria-hidden />
              </button>
            </form>
          </div>
        </>
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
          isUser ? 'bg-navy text-cream-100' : 'bg-white text-navy-700 ring-1 ring-navy-100'
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
