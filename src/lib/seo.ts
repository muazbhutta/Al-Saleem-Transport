import type { Metadata } from 'next';
import { siteUrl, site, languages, defaultLocale } from './site';

/**
 * Build per-page, per-locale metadata with correct canonical + hreflang
 * alternates and Open Graph / Twitter cards.
 *
 * @param locale current locale
 * @param path   locale-agnostic path, e.g. '/pick-drop' ('' or '/' for home)
 * @param title  fully-localized page title
 * @param description fully-localized meta description
 * @param image optional OG image path (defaults to the site OG image). Must be
 *              a raster — WhatsApp, Facebook and X do not render SVG previews.
 */
export function buildMetadata({
  locale,
  path,
  title,
  description,
  image = '/og/og-default.jpg',
}: {
  locale: string;
  path: string;
  title: string;
  description: string;
  image?: string;
}): Metadata {
  const cleanPath = path === '/' ? '' : path;
  const canonical = `${siteUrl}/${locale}${cleanPath}`;

  // hreflang map: one entry per locale + x-default pointing at the default locale.
  const languageAlternates: Record<string, string> = {};
  for (const lang of languages) {
    languageAlternates[lang.hreflang] = `${siteUrl}/${lang.code}${cleanPath}`;
  }
  languageAlternates['x-default'] = `${siteUrl}/${defaultLocale}${cleanPath}`;

  // Emit the image as an absolute URL rather than leaning on metadataBase —
  // scrapers like WhatsApp will not follow a relative og:image.
  const imageUrl = /^https?:\/\//.test(image) ? image : `${siteUrl}${image}`;

  return {
    title,
    description,
    metadataBase: new URL(siteUrl),
    alternates: {
      canonical,
      languages: languageAlternates,
    },
    openGraph: {
      type: 'website',
      siteName: site.shortNameEn,
      title,
      description,
      url: canonical,
      locale,
      images: [
        { url: imageUrl, secureUrl: imageUrl, type: 'image/jpeg', width: 1200, height: 630, alt: title },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [imageUrl],
    },
    robots: { index: true, follow: true },
  };
}
