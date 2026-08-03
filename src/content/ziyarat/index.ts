import type { Guide } from './types';
import en from './en';
import ur from './ur';
import fr from './fr';
import ar from './ar';
import urLatn from './ur-Latn';
import hi from './hi';
import id from './id';
import ms from './ms';
import tr from './tr';
import bn from './bn';
import fa from './fa';

/**
 * Per-locale guide content. Add a language by creating
 * `src/content/ziyarat/<locale>.ts` (default-exporting a `Guide`), registering
 * it here, and - if it is a machine-assisted draft - adding it to
 * `machineDrafts` so the page shows a "pending scholar review" notice.
 * Locales without their own file fall back to English.
 */
const guides: Partial<Record<string, Guide>> = {
  en,
  ur,
  fr,
  ar,
  'ur-Latn': urLatn,
  hi,
  id,
  ms,
  tr,
  bn,
  fa,
};

/** Locales whose guide is a machine-assisted draft awaiting scholar review. */
const machineDrafts = new Set<string>(['ur', 'fr', 'ar', 'ur-Latn', 'hi', 'id', 'ms', 'tr', 'bn', 'fa']);

export function getGuide(locale: string): Guide {
  return guides[locale] ?? en;
}

export function hasNativeGuide(locale: string): boolean {
  return Boolean(guides[locale]);
}

export function isMachineDraft(locale: string): boolean {
  return machineDrafts.has(locale);
}
