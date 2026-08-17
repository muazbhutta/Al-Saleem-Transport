'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { MessageCircle } from 'lucide-react';
import { whatsappLink } from '@/lib/site';
import { trackContact } from '@/lib/gtag';

/** Simple contact form that opens a pre-filled WhatsApp chat. */
export default function ContactForm() {
  const t = useTranslations('contact');
  const tb = useTranslations('booking');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const fieldClass =
    'w-full rounded-xl border border-emerald-800/20 bg-white px-4 py-3 text-sm text-ink placeholder:text-ink-faint focus:border-brass-500 focus:outline-none focus:ring-2 focus:ring-brass-500/40';

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const body = [
      t('waIntro'),
      '',
      `${tb('labelName')}: ${name}`,
      message,
    ]
      .filter(Boolean)
      .join('\n');
    trackContact('whatsapp');
    window.open(whatsappLink(body), '_blank', 'noopener,noreferrer');
  }

  return (
    <form onSubmit={submit} className="card flex h-full flex-col gap-4">
      <h2 className="text-xl">{t('formTitle')}</h2>
      <p className="text-sm text-ink-soft">{t('formSubtitle')}</p>
      <div>
        <label htmlFor="c-name" className="mb-1.5 block text-sm font-medium text-ink-soft">
          {tb('name')}
        </label>
        <input
          id="c-name"
          className={fieldClass}
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder={tb('namePlaceholder')}
        />
      </div>
      <div>
        <label htmlFor="c-msg" className="mb-1.5 block text-sm font-medium text-ink-soft">
          {t('message')}
        </label>
        <textarea
          id="c-msg"
          rows={4}
          className={fieldClass}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder={t('messagePlaceholder')}
        />
      </div>
      <button type="submit" className="btn-whatsapp w-full">
        <MessageCircle className="h-5 w-5" aria-hidden />
        {t('send')}
      </button>
    </form>
  );
}
