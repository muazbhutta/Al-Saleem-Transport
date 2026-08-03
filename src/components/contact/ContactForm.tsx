'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { MessageCircle } from 'lucide-react';
import { whatsappLink } from '@/lib/site';

/** Simple contact form that opens a pre-filled WhatsApp chat. */
export default function ContactForm() {
  const t = useTranslations('contact');
  const tb = useTranslations('booking');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const fieldClass =
    'w-full rounded-xl border border-navy-200 bg-white px-4 py-3 text-sm text-navy-800 placeholder:text-navy-300 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/40';

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
    window.open(whatsappLink(body), '_blank', 'noopener,noreferrer');
  }

  return (
    <form onSubmit={submit} className="card flex flex-col gap-4">
      <h2 className="text-xl">{t('formTitle')}</h2>
      <p className="text-sm text-navy-500">{t('formSubtitle')}</p>
      <div>
        <label htmlFor="c-name" className="mb-1.5 block text-sm font-medium text-navy-700">
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
        <label htmlFor="c-msg" className="mb-1.5 block text-sm font-medium text-navy-700">
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
