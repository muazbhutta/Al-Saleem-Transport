import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';
import { localeCodes, defaultLocale } from '@/lib/site';

export const routing = defineRouting({
  locales: localeCodes,
  defaultLocale,
  // Always prefix the locale in the URL (/en, /ar, …) for clean, indexable,
  // per-locale canonical URLs.
  localePrefix: 'always',
  localeDetection: true,
});

// Locale-aware navigation helpers used throughout the app.
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
