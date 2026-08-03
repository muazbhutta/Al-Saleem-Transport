import type { Guide } from './types';
import en from './en';
import ur from './ur';
import fr from './fr';

/**
 * Per-locale guide content. Add a language by creating
 * `src/content/ziyarat/<locale>.ts` (default-exporting a `Guide`), registering
 * it here, and — if it is a machine-assisted draft — adding it to
 * `machineDrafts` so the page shows a "pending scholar review" notice.
 * Locales without their own file fall back to English.
 */
const guides: Partial<Record<string, Guide>> = {
  en,
  ur,
  fr,
};

/** Locales whose guide is a machine-assisted draft awaiting scholar review. */
const machineDrafts = new Set<string>(['ur', 'fr']);

export function getGuide(locale: string): Guide {
  return guides[locale] ?? en;
}

export function hasNativeGuide(locale: string): boolean {
  return Boolean(guides[locale]);
}

export function isMachineDraft(locale: string): boolean {
  return machineDrafts.has(locale);
}
