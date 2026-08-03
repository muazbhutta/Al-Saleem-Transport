'use client';

import { useTranslations } from 'next-intl';
import { MessageCircle } from 'lucide-react';
import { whatsappLink } from '@/lib/site';

/** Floating WhatsApp button, present on every page. */
export default function WhatsAppButton() {
  const t = useTranslations('common');
  const href = whatsappLink(
    'Assalamu alaikum Al-Saleem Transport, I need assistance with a booking.',
  );

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t('chatWhatsapp')}
      className="no-print group fixed bottom-5 end-5 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-white shadow-card transition-transform hover:scale-105 focus-visible:ring-2 focus-visible:ring-white"
    >
      <MessageCircle className="h-6 w-6" aria-hidden />
      <span className="hidden max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold transition-all group-hover:max-w-xs sm:inline sm:group-hover:ms-1">
        {t('chatWhatsapp')}
      </span>
    </a>
  );
}
