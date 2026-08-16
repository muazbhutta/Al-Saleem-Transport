import { serviceSlugs } from './services';

/**
 * Central navigation map. `path` is locale-agnostic (no /en prefix);
 * the locale-aware <Link> adds the prefix. `key` maps to messages `nav.*`.
 */
export type NavItem = { key: string; path: string };

export const mainNav: NavItem[] = [
  { key: 'home', path: '/' },
  { key: 'pickDrop', path: '/pick-drop' },
  { key: 'ziyaratGuide', path: '/ziyarat-guide' },
  { key: 'about', path: '/about-us' },
  { key: 'faq', path: '/faq' },
  { key: 'contact', path: '/contact-us' },
];

export const footerLegal: NavItem[] = [
  { key: 'privacy', path: '/privacy-policy' },
  { key: 'terms', path: '/terms' },
];

/** Every indexable route, used to generate the sitemap across all locales. */
export const allRoutes: string[] = [
  '/',
  '/pick-drop',
  '/ziyarat-guide',
  '/about-us',
  '/contact-us',
  '/faq',
  '/privacy-policy',
  '/terms',
  ...serviceSlugs.map((slug) => `/services/${slug}`),
];
