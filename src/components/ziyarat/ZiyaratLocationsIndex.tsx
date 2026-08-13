import { getTranslations } from 'next-intl/server';
import { Navigation, Route } from 'lucide-react';
import type { PlaceEntry, ZiyaratCity } from '@/content/ziyarat/places';

const CITY_ORDER: ZiyaratCity[] = ['makkah', 'madinah', 'taif', 'jeddah'];

/**
 * Builds a Google Maps directions URL that strings a city's places together in
 * the order the guide lists them.
 *
 * Only places with real coordinates can be waypoints — a name query cannot be
 * mixed into a `dir` URL reliably. Google also caps the free waypoint list, so
 * this takes the first 10 stops and lets the rest be visited individually.
 */
function cityRouteUrl(entries: PlaceEntry[]): string | null {
  const pinned = entries
    .filter((e) => e.place.coords)
    .map((e) => `${e.place.coords!.lat},${e.place.coords!.lng}`);
  if (pinned.length < 2) return null;

  const capped = pinned.slice(0, 10);
  const origin = capped[0];
  const destination = capped[capped.length - 1];
  const waypoints = capped.slice(1, -1);

  const params = new URLSearchParams({
    api: '1',
    origin,
    destination,
    travelmode: 'driving',
  });
  if (waypoints.length) params.set('waypoints', waypoints.join('|'));
  return `https://www.google.com/maps/dir/?${params.toString()}`;
}

/**
 * "All Ziyarat Locations" — a compact scannable index at the end of the guide,
 * grouped by city. Plain links and text only: no images, no client JS, nothing
 * that can shift layout.
 */
export default async function ZiyaratLocationsIndex({
  entries,
}: {
  entries: PlaceEntry[];
}) {
  const t = await getTranslations('ziyaratLocation');
  const ti = await getTranslations('ziyaratIndex');

  const byCity = CITY_ORDER.map((city) => ({
    city,
    items: entries.filter((e) => e.place.city === city),
  })).filter((g) => g.items.length > 0);

  if (!byCity.length) return null;

  return (
    <section className="mt-14 border-t border-navy-100 pt-10" id="all-locations">
      <h2 className="text-2xl text-navy sm:text-3xl">{ti('title')}</h2>
      <p className="mt-2 text-navy-500">{ti('subtitle')}</p>

      <div className="mt-8 flex flex-col gap-8">
        {byCity.map(({ city, items }) => {
          const routeUrl = cityRouteUrl(items);
          return (
            <div key={city}>
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h3 className="text-lg font-semibold text-navy">
                  {t(`city.${city}`)}{' '}
                  <span className="font-normal text-navy-400">({items.length})</span>
                </h3>
                {routeUrl && (
                  <a
                    href={routeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-teal-dark hover:text-gold-dark"
                  >
                    <Route className="h-4 w-4" aria-hidden />
                    {ti('fullRoute')}
                  </a>
                )}
              </div>

              <ul className="mt-3 divide-y divide-navy-100 rounded-2xl border border-navy-100 bg-white">
                {items.map((entry) => (
                  <li
                    key={entry.place.id}
                    className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 px-4 py-3"
                  >
                    <a
                      href={`#${entry.place.id}`}
                      className="min-w-0 text-sm font-medium text-navy-800 hover:text-gold-dark"
                    >
                      {entry.name}
                    </a>
                    <span className="flex items-center gap-4">
                      {entry.place.distanceFromHaramKm !== null && (
                        <span className="text-xs text-navy-400" dir="ltr">
                          {entry.place.distanceFromHaramKm} {t('km')}
                        </span>
                      )}
                      <a
                        href={entry.place.googleMapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex shrink-0 items-center gap-1.5 text-xs font-medium text-teal-dark hover:text-gold-dark"
                      >
                        <Navigation className="h-3.5 w-3.5 rtl:-scale-x-100" aria-hidden />
                        {t('directions')}
                      </a>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}
