/**
 * Single source of truth for company data and supported languages.
 * Update contact details, license numbers, or add a locale here.
 */

export const site = {
  nameEn: 'Al-Saleem Integrated Transport Company',
  shortNameEn: 'Al-Saleem Transport',
  nameAr: 'شركة السليم المتكامل للنقل البري',
  taglineEn: 'Serving the Ummah with Excellence',
  licenseNo: '35/00008116',
  unifiedNationalNo: '7053391731',
  email: 'info@alsaleemtransport.com',
  // Digits only, international format, no "+" - used to build wa.me and tel: links.
  phoneRaw: '966500689196',
  phoneDisplay: '+966 50 068 9196',
  coverage: ['Makkah', 'Madinah', 'Jeddah', 'Taif'] as const,
  // Approximate geo centre of the service area (Makkah) for LocalBusiness schema.
  geo: { lat: 21.3891, lng: 39.8579 },
  social: {
    // Fill these in when profiles are live; used for sameAs in structured data.
    facebook: '',
    instagram: '',
    tiktok: '',
    /**
     * Google Business Profile reviews URL. TODO: paste the real link.
     * While empty, the "read on Google" link is hidden rather than rendered
     * pointing nowhere — and the on-page testimonials remain unverifiable
     * placeholders until it is filled in.
     */
    googleReviews: '',
  },
} as const;

/** Live production domain. The hard default so a missing env var can never
 *  leak localhost into canonical tags, hreflang, Open Graph or JSON-LD. */
export const productionUrl = 'https://www.alsaleemtransport.com';

// Treat an env var that is set-but-empty (a common Vercel slip) as unset, so it
// falls through the chain below instead of resolving to ''.
const envSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim() || undefined;
const vercelUrl = process.env.VERCEL_URL?.trim() || undefined;

/**
 * Base URL used for canonical tags, sitemap, hreflang, Open Graph and JSON-LD.
 *
 * Resolution order:
 *   1. NEXT_PUBLIC_SITE_URL — explicit override, always wins.
 *   2. The production domain, whenever Vercel reports a production deployment.
 *      VERCEL_URL is the per-deployment host (`*.vercel.app`) and never the
 *      custom domain, so it must not win in production.
 *   3. VERCEL_URL — gives preview/branch deployments their own absolute host.
 *   4. localhost — local development only.
 *
 * VERCEL_ENV / VERCEL_URL are server-only vars: they are not inlined into the
 * client bundle, so this value is only trustworthy on the server (metadata,
 * sitemap, robots, JSON-LD). Don't read `siteUrl` from a client component.
 */
export const siteUrl = (
  envSiteUrl ??
  (process.env.VERCEL_ENV === 'production' ? productionUrl : undefined) ??
  (vercelUrl ? `https://${vercelUrl}` : 'http://localhost:3000')
).replace(/\/$/, '');

export type LanguageDef = {
  code: string;
  /** BCP-47 tag for <html lang> / hreflang. */
  hreflang: string;
  /** Native, self-referential language name shown in the switcher. */
  label: string;
  /** English name for aria-labels and fallbacks. */
  english: string;
  dir: 'ltr' | 'rtl';
};

/**
 * Supported languages. Adding a new one is a two-step job:
 *   1. Add an entry here.
 *   2. Drop a matching `src/messages/<code>.json` file.
 */
export const languages: LanguageDef[] = [
  { code: 'en', hreflang: 'en', label: 'English', english: 'English', dir: 'ltr' },
  { code: 'ar', hreflang: 'ar', label: 'العربية', english: 'Arabic', dir: 'rtl' },
  { code: 'ur', hreflang: 'ur', label: 'اردو', english: 'Urdu', dir: 'rtl' },
  { code: 'ur-Latn', hreflang: 'ur-Latn', label: 'Roman Urdu', english: 'Roman Urdu', dir: 'ltr' },
  { code: 'hi', hreflang: 'hi', label: 'हिन्दी', english: 'Hindi', dir: 'ltr' },
  { code: 'id', hreflang: 'id', label: 'Bahasa Indonesia', english: 'Indonesian', dir: 'ltr' },
  { code: 'ms', hreflang: 'ms', label: 'Bahasa Melayu', english: 'Malay', dir: 'ltr' },
  { code: 'tr', hreflang: 'tr', label: 'Türkçe', english: 'Turkish', dir: 'ltr' },
  { code: 'bn', hreflang: 'bn', label: 'বাংলা', english: 'Bengali', dir: 'ltr' },
  { code: 'fa', hreflang: 'fa', label: 'فارسی', english: 'Persian', dir: 'rtl' },
  { code: 'fr', hreflang: 'fr', label: 'Français', english: 'French', dir: 'ltr' },
];

export const localeCodes = languages.map((l) => l.code);
export const defaultLocale = 'en';

export function getLanguage(code: string): LanguageDef {
  return languages.find((l) => l.code === code) ?? languages[0];
}

export function getDir(code: string): 'ltr' | 'rtl' {
  return getLanguage(code).dir;
}

/** wa.me deep link with a pre-filled message. */
export function whatsappLink(message: string): string {
  return `https://wa.me/${site.phoneRaw}?text=${encodeURIComponent(message)}`;
}

export const telLink = `tel:+${site.phoneRaw}`;
export const mailLink = `mailto:${site.email}`;
