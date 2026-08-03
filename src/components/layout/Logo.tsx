'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Link } from '@/i18n/routing';
import { site } from '@/lib/site';

const LOGO_SRC = '/images/logo.png';

/**
 * Brand wordmark: transparent logo (via next/image → optimized AVIF/WebP) plus
 * the Latin wordmark. Falls back to an on-brand droplet mark if the file is
 * missing. `variant="light"` is for dark backgrounds (footer/header strip).
 */
export default function Logo({
  variant = 'dark',
  priority = false,
  className = '',
  compactOnMobile = false,
}: {
  variant?: 'dark' | 'light';
  priority?: boolean;
  className?: string;
  /** Hide the Latin wordmark below `sm` (mark only) to save header space. */
  compactOnMobile?: boolean;
}) {
  const [failed, setFailed] = useState(false);
  const text = variant === 'light' ? 'text-cream-100' : 'text-navy';
  const sub = variant === 'light' ? 'text-gold-light' : 'text-maroon';
  const mark = variant === 'light' ? '#E0C078' : '#0E5C4A';

  return (
    <Link
      href="/"
      aria-label={site.shortNameEn}
      className={`group inline-flex items-center gap-2.5 ${className}`}
    >
      <span className="relative inline-flex h-11 w-8 shrink-0 items-center justify-center">
        {failed ? (
          <svg viewBox="0 0 32 32" className="h-10 w-10" aria-hidden fill="none">
            <path
              d="M16 3.5c-4 5.2-8 9.4-8 13.4a8 8 0 0 0 16 0c0-4-4-8.2-8-13.4Z"
              stroke={mark}
              strokeWidth="1.6"
              strokeLinejoin="round"
            />
            <path
              d="M12.5 17.5a3.5 3.5 0 0 0 6.4 2"
              stroke={mark}
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          </svg>
        ) : (
          <Image
            src={LOGO_SRC}
            alt={site.shortNameEn}
            width={30}
            height={44}
            priority={priority}
            onError={() => setFailed(true)}
            className={`h-11 w-auto object-contain transition-transform duration-200 group-hover:scale-105 ${
              variant === 'light' ? '[filter:drop-shadow(0_0_2px_rgba(224,192,120,0.45))]' : ''
            }`}
          />
        )}
      </span>
      <span className={`${compactOnMobile ? 'hidden sm:flex' : 'flex'} flex-col leading-none`}>
        <span className={`font-display text-lg font-bold tracking-tight ${text}`}>Al-Saleem</span>
        <span className={`text-[0.66rem] font-semibold uppercase tracking-[0.18em] ${sub}`}>
          Transport
        </span>
      </span>
    </Link>
  );
}
