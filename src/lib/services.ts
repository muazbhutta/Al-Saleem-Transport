/**
 * The six services, each with its own page.
 *
 * `key` indexes the existing `services.items.*` translations (title / desc /
 * points), so the six pages need no duplicated naming. `slug` is the public
 * URL and is deliberately more descriptive than the key for SEO.
 *
 * NO PRICES anywhere in this file or the pages built from it. `vehicles` is
 * capacity guidance only; the fare is agreed on WhatsApp.
 */

export type ServiceKey =
  | 'airport'
  | 'hotel'
  | 'ziyarat'
  | 'umrah'
  | 'intercity'
  | 'custom';

export type ServiceDef = {
  key: ServiceKey;
  slug: string;
  /** Vehicle classes worth highlighting for this service. */
  vehicles: ('sedan' | 'suv' | 'van' | 'bus')[];
  /** schema.org serviceType — English, not display copy. */
  serviceType: string;
};

export const services: ServiceDef[] = [
  { key: 'airport', slug: 'airport-transfer', vehicles: ['sedan', 'suv', 'van'], serviceType: 'Airport transfer' },
  { key: 'hotel', slug: 'hotel-transfer', vehicles: ['sedan', 'suv', 'van'], serviceType: 'Hotel transfer' },
  { key: 'ziyarat', slug: 'ziyarat-tours', vehicles: ['suv', 'van', 'bus'], serviceType: 'Ziyarat tour transport' },
  { key: 'umrah', slug: 'umrah-hajj-transport', vehicles: ['van', 'bus'], serviceType: 'Umrah and Hajj transport' },
  { key: 'intercity', slug: 'intercity-rides', vehicles: ['sedan', 'suv', 'van', 'bus'], serviceType: 'Intercity transfer' },
  { key: 'custom', slug: 'custom-trips', vehicles: ['sedan', 'suv', 'van', 'bus'], serviceType: 'Custom private hire' },
];

export const serviceSlugs = services.map((s) => s.slug);

export function getService(slug: string): ServiceDef | undefined {
  return services.find((s) => s.slug === slug);
}

/** Slug for a service key — used by the home cards and the footer. */
export function slugForKey(key: ServiceKey): string {
  return services.find((s) => s.key === key)?.slug ?? '';
}
