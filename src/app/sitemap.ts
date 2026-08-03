import type { MetadataRoute } from 'next';
import { siteUrl, languages, defaultLocale } from '@/lib/site';
import { allRoutes } from '@/lib/nav';

/**
 * Sitemap covering every route × every locale, with hreflang alternates so
 * search engines understand the language relationships.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const route of allRoutes) {
    const path = route === '/' ? '' : route;

    // Build the alternates map once per route.
    const languageAlternates: Record<string, string> = {};
    for (const lang of languages) {
      languageAlternates[lang.hreflang] = `${siteUrl}/${lang.code}${path}`;
    }

    for (const lang of languages) {
      entries.push({
        url: `${siteUrl}/${lang.code}${path}`,
        lastModified: new Date(),
        changeFrequency: route === '/' ? 'weekly' : 'monthly',
        priority: route === '/' ? 1 : route === '/ziyarat-guide' || route === '/pick-drop' ? 0.9 : 0.7,
        alternates: {
          languages: { ...languageAlternates, 'x-default': `${siteUrl}/${defaultLocale}${path}` },
        },
      });
    }
  }

  return entries;
}
