import { getTranslations } from 'next-intl/server';
import { MapPin, Navigation, Clock, Ruler, Sunrise } from 'lucide-react';
import { getPlace } from '@/content/ziyarat/places';

/**
 * Location block rendered at the end of a ziyarat place's section.
 *
 * Server component — only the clipboard button is client-side. No Google Maps
 * iframe by design: an embed costs ~900KB of third-party JS and wrecks LCP on
 * a page that is already long. Directions open in the user's own map app.
 *
 * Renders nothing when the place has no coordinates, so sections without
 * confirmed data simply stay as they are rather than showing an empty shell.
 */
export default async function ZiyaratLocationCard({ placeId }: { placeId: string }) {
  const place = getPlace(placeId);
  if (!place) return null;

  const t = await getTranslations('ziyaratLocation');

  const reference = place.city === 'madinah' ? t('fromNabawi') : t('fromHaram');

  return (
    /* The wash is a translucent darkening rather than a fixed light colour:
       this card is rendered inside chapter bands that cycle between three
       surfaces, and an opaque fill would disappear on whichever one it matched.
       A tint over the band always reads. */
    <aside
      className="rounded-2xl border border-emerald-800/10 bg-emerald-800/5 p-4 text-start sm:p-5"
      aria-label={t('title')}
    >
      {/* Brass on the icon only. As 11px uppercase label text it measures
          3.0:1 on the sand surfaces, under the 4.5:1 AA floor for small text —
          this is a functional heading, not a decorative eyebrow. */}
      <h4 className="flex items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-ink-soft">
        <MapPin className="h-4 w-4 text-brass-600" aria-hidden />
        {t('title')}
      </h4>

      {/* Facts. Fixed line-height and no images -> nothing here can shift. */}
      <dl className="mt-3 flex flex-wrap gap-x-6 gap-y-2 text-sm">
        <div className="flex items-center gap-2">
          <MapPin className="h-4 w-4 shrink-0 text-emerald-600" aria-hidden />
          <dt className="sr-only">{t('cityLabel')}</dt>
          <dd className="font-medium text-ink">{t(`city.${place.city}`)}</dd>
        </div>

        {place.distanceFromHaramKm !== null && (
          <div className="flex items-center gap-2">
            <Ruler className="h-4 w-4 shrink-0 text-emerald-600" aria-hidden />
            <dt className="sr-only">{t('distanceLabel')}</dt>
            <dd className="text-ink-soft">
              {t('approx')}{' '}
              <span dir="ltr" className="tabular-nums">
                {place.distanceFromHaramKm} {t('km')}
              </span>{' '}
              {reference}
            </dd>
          </div>
        )}

        {place.driveTimeMin !== null && (
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 shrink-0 text-emerald-600" aria-hidden />
            <dt className="sr-only">{t('driveLabel')}</dt>
            <dd className="text-ink-soft">
              <span dir="ltr" className="tabular-nums">
                {place.driveTimeMin} {t('min')}
              </span>
            </dd>
          </div>
        )}

        {place.bestTimeToVisit && (
          <div className="flex items-center gap-2">
            <Sunrise className="h-4 w-4 shrink-0 text-emerald-600" aria-hidden />
            <dt className="sr-only">{t('bestTimeLabel')}</dt>
            <dd className="text-ink-soft">{t(`bestTime.${place.bestTimeToVisit}`)}</dd>
          </div>
        )}
      </dl>

      {/* Single action. Raw coordinates are deliberately not shown — they carry
          no meaning for a pilgrim; the map link does the job. They still power
          the map URL and the geo JSON-LD. */}
      <div className="mt-4">
        <a
          href={place.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-gold px-4 py-2 text-sm"
        >
          <Navigation className="h-4 w-4 rtl:-scale-x-100" aria-hidden />
          {t('directions')}
        </a>
      </div>
    </aside>
  );
}
