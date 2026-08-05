import { site, siteUrl, defaultLocale } from './site';
import { knownPlaces } from './keywords';

/**
 * JSON-LD structured data builders. Keeping them in one place makes it easy
 * to keep NAP (name/address/phone) consistent across schema types.
 */

const phoneE164 = `+${site.phoneRaw}`;

/** Every transport service offered — powers the schema offer catalog. */
const serviceCatalog = [
  'Ziyarat tour transport',
  'Airport transfer (Jeddah & Madinah)',
  'Hotel pick & drop',
  'Umrah transport',
  'Hajj transport',
  'Intercity transfer (Makkah, Madinah, Jeddah, Taif, Badr)',
  'Shopping, market & perfume-souq transfers',
  'Restaurant & family day-trip transfers',
  'Custom private car with driver',
];

/** Cities, region and country the company serves. */
const areasServed = [
  ...site.coverage.map((c) => ({ '@type': 'City', name: c })),
  { '@type': 'City', name: 'Badr' },
  { '@type': 'AdministrativeArea', name: 'Makkah Province' },
  { '@type': 'AdministrativeArea', name: 'Madinah Province' },
  { '@type': 'Country', name: 'Saudi Arabia' },
];

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'LocalBusiness', 'TravelAgency'],
    '@id': `${siteUrl}/#organization`,
    name: site.shortNameEn,
    legalName: site.nameEn,
    alternateName: site.nameAr,
    url: siteUrl,
    logo: `${siteUrl}/images/logo.png`,
    image: `${siteUrl}/og/og-default.svg`,
    description:
      'Licensed Ziyarat, airport and hotel pick & drop transport across Makkah, Madinah, Jeddah and Taif in Saudi Arabia.',
    slogan: site.taglineEn,
    telephone: phoneE164,
    email: site.email,
    priceRange: '$$',
    areaServed: areasServed,
    serviceArea: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: site.geo.lat,
        longitude: site.geo.lng,
      },
      geoRadius: 450000,
    },
    knowsAbout: knownPlaces,
    makesOffer: serviceCatalog.map((s) => ({
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', name: s, serviceType: s },
    })),
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Al-Saleem Transport services',
      itemListElement: serviceCatalog.map((s) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: s },
      })),
    },
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'SA',
      addressRegion: 'Makkah Province',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: site.geo.lat,
      longitude: site.geo.lng,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      opens: '00:00',
      closes: '23:59',
    },
    identifier: [
      { '@type': 'PropertyValue', name: 'Transport License', value: site.licenseNo },
      { '@type': 'PropertyValue', name: 'Unified National Number', value: site.unifiedNationalNo },
    ],
    sameAs: Object.values(site.social).filter(Boolean),
  };
}

export function serviceSchema({
  name,
  description,
  path,
}: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: name,
    name,
    description,
    provider: { '@id': `${siteUrl}/#organization` },
    areaServed: site.coverage.map((c) => ({ '@type': 'City', name: c })),
    url: `${siteUrl}/${defaultLocale}${path}`,
    availableChannel: {
      '@type': 'ServiceChannel',
      servicePhone: phoneE164,
      serviceUrl: `https://wa.me/${site.phoneRaw}`,
    },
  };
}

export function faqSchema(items: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  };
}

export function breadcrumbSchema(
  locale: string,
  crumbs: { name: string; path: string }[],
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: `${siteUrl}/${locale}${c.path === '/' ? '' : c.path}`,
    })),
  };
}

export function articleSchema({
  locale,
  title,
  description,
  path,
}: {
  locale: string;
  title: string;
  description: string;
  path: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    inLanguage: locale,
    mainEntityOfPage: `${siteUrl}/${locale}${path}`,
    author: { '@id': `${siteUrl}/#organization` },
    publisher: { '@id': `${siteUrl}/#organization` },
    image: `${siteUrl}/og/og-ziyarat.svg`,
  };
}
