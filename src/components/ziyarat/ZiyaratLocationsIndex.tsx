import { getTranslations } from 'next-intl/server';
import { Navigation, Route } from 'lucide-react';
import { SectionHeader } from '@/components/ui/Section';
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
    /* No top rule or margin any more: this now sits in its own surface band on
       the guide page, so the band edge is the separation. */
    <section id="all-locations" className="guide-anchor">
      <SectionHeader title={ti('title')} subtitle={ti('subtitle')} />

      <div className="mt-8 flex flex-col gap-8">
        {byCity.map(({ city, items }) => {
          const routeUrl = cityRouteUrl(items);
          return (
            <div key={city}>
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h3 className="text-lg font-semibold text-ink">
                  {t(`city.${city}`)}{' '}
                  <span className="font-normal text-ink-faint">({items.length})</span>
                </h3>
                {routeUrl && (
                  <a
                    href={routeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-emerald-700 hover:text-brass-700"
                  >
                    <Route className="h-4 w-4" aria-hidden />
                    {ti('fullRoute')}
                  </a>
                )}
              </div>

              {/* Grid, not flex-wrap: wrapping let the actions drop onto their
                  own line whenever a place name was long, so no two rows lined
                  up. The name column absorbs the wrapping instead, and the
                  distance sits in a fixed slot that is rendered even when empty
                  — that is what keeps every "Get Directions" on one x. */}
              <ul className="mt-3 divide-y divide-emerald-800/10 rounded-2xl border border-emerald-800/10 bg-surface-raised">
                {items.map((entry) => (
                  <li
                    key={entry.place.id}
                    className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-x-4 px-4 py-3"
                  >
                    <a
                      href={`#${entry.place.id}`}
                      className="min-w-0 text-start text-sm font-medium text-ink hover:text-brass-700"
                    >
                      {entry.name}
                    </a>
                    <span className="flex shrink-0 items-center justify-end gap-3">
                      <span
                        className="w-14 text-end text-xs tabular-nums text-ink-faint"
                        dir="ltr"
                      >
                        {entry.place.distanceFromHaramKm !== null
                          ? `${entry.place.distanceFromHaramKm} ${t('km')}`
                          : ''}
                      </span>
                      <a
                        href={entry.place.googleMapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex shrink-0 items-center gap-1.5 text-xs font-medium text-emerald-700 hover:text-brass-700"
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
