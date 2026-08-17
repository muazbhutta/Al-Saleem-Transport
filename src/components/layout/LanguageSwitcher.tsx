'use client';

import { useState, useRef, useEffect, useTransition } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { Globe, Check, ChevronDown } from 'lucide-react';
import { usePathname, useRouter } from '@/i18n/routing';
import { languages } from '@/lib/site';

/**
 * Locale switcher that preserves the current path. next-intl's middleware
 * persists the choice in the NEXT_LOCALE cookie on navigation.
 */
export default function LanguageSwitcher({ compact = false }: { compact?: boolean }) {
  const locale = useLocale();
  const t = useTranslations('common');
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [isPending, startTransition] = useTransition();
  const ref = useRef<HTMLDivElement>(null);

  const current = languages.find((l) => l.code === locale) ?? languages[0];

  // Close on outside click / Escape.
  useEffect(() => {
    function onDoc(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false);
    }
    document.addEventListener('mousedown', onDoc);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDoc);
      document.removeEventListener('keydown', onKey);
    };
  }, []);

  function change(code: string) {
    setOpen(false);
    startTransition(() => {
      router.replace(pathname, { locale: code });
    });
  }

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        disabled={isPending}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={t('chooseLanguage')}
        className="inline-flex min-h-[44px] items-center gap-1.5 rounded-full border border-emerald-800/15 bg-white/80 px-3 py-2 text-sm font-medium text-ink-soft transition hover:border-brass-500 hover:text-ink focus-visible:ring-2 focus-visible:ring-brass-500"
      >
        <Globe className="h-4 w-4 shrink-0" aria-hidden />
        {!compact && <span className="max-w-[7rem] truncate">{current.label}</span>}
        <ChevronDown className="h-3.5 w-3.5 opacity-60" aria-hidden />
      </button>

      {open && (
        <ul
          role="listbox"
          aria-label={t('chooseLanguage')}
          className="absolute end-0 z-50 mt-2 max-h-80 w-56 overflow-auto rounded-2xl border border-emerald-800/10 bg-white p-1.5 shadow-card"
        >
          {languages.map((lang) => {
            const active = lang.code === locale;
            return (
              <li key={lang.code} role="option" aria-selected={active}>
                <button
                  type="button"
                  onClick={() => change(lang.code)}
                  dir={lang.dir}
                  className={`flex w-full items-center justify-between gap-2 rounded-xl px-3 py-2 text-sm transition ${
                    active ? 'bg-emerald-500/10 text-emerald-700' : 'text-ink-soft hover:bg-emerald-50'
                  }`}
                >
                  <span className="flex flex-col text-start">
                    <span className="font-medium">{lang.label}</span>
                    <span className="text-xs text-ink-faint">{lang.english}</span>
                  </span>
                  {active && <Check className="h-4 w-4 shrink-0" aria-hidden />}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
