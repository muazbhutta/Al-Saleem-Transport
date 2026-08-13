import { getTranslations } from 'next-intl/server';
import { MapPin, Navigation, Clock, Ruler, MessageCircle, Sunrise } from 'lucide-react';
import { getPlace } from '@/content/ziyarat/places';
import { whatsappLink } from '@/lib/site';
import ContactLink from '@/components/analytics/ContactLink';

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
export default async function ZiyaratLocationCard({
  placeId,
  placeName,
}: {
  placeId: string;
  /** Localised place name, taken from the guide heading. Used in the WhatsApp prefill. */
  placeName: string;
}) {
  const place = getPlace(placeId);
  if (!place) return null;

  const t = await getTranslations('ziyaratLocation');

  const reference = place.city === 'madinah' ? t('fromNabawi') : t('fromHaram');
  const bookHref = whatsappLink(t('waMessage', { place: placeName }));

  return (
    <aside
      className="rounded-2xl border border-navy-100 bg-cream/50 p-4 sm:p-5"
      aria-label={t('title')}
    >
      <h4 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-navy-500">
        <MapPin className="h-4 w-4 text-gold-dark" aria-hidden />
        {t('title')}
      </h4>

      {/* Facts. Fixed line-height and no images -> nothing here can shift. */}
      <dl className="mt-3 flex flex-wrap gap-x-6 gap-y-2 text-sm">
        <div className="flex items-center gap-2">
          <MapPin className="h-4 w-4 shrink-0 text-navy-300" aria-hidden />
          <dt className="sr-only">{t('cityLabel')}</dt>
          <dd className="font-medium text-navy-800">{t(`city.${place.city}`)}</dd>
        </div>

        {place.distanceFromHaramKm !== null && (
          <div className="flex items-center gap-2">
            <Ruler className="h-4 w-4 shrink-0 text-navy-300" aria-hidden />
            <dt className="sr-only">{t('distanceLabel')}</dt>
            <dd className="text-navy-700">
              {t('approx')}{' '}
              <span dir="ltr">
                {place.distanceFromHaramKm} {t('km')}
              </span>{' '}
              {reference}
            </dd>
          </div>
        )}

        {place.driveTimeMin !== null && (
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 shrink-0 text-navy-300" aria-hidden />
            <dt className="sr-only">{t('driveLabel')}</dt>
            <dd className="text-navy-700">
              <span dir="ltr">
                {place.driveTimeMin} {t('min')}
              </span>
            </dd>
          </div>
        )}

        {place.bestTimeToVisit && (
          <div className="flex items-center gap-2">
            <Sunrise className="h-4 w-4 shrink-0 text-navy-300" aria-hidden />
            <dt className="sr-only">{t('bestTimeLabel')}</dt>
            <dd className="text-navy-700">{t(`bestTime.${place.bestTimeToVisit}`)}</dd>
          </div>
        )}
      </dl>

      {/* Actions. flex-wrap + logical properties keep the order correct in RTL.
          Raw coordinates are deliberately not shown — they carry no meaning for
          a pilgrim; the map links do the job. They still power the map URLs and
          the geo JSON-LD. */}
      <div className="mt-4 flex flex-wrap items-center gap-2">
        <a
          href={place.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-gold px-4 py-2 text-sm"
        >
          <Navigation className="h-4 w-4 rtl:-scale-x-100" aria-hidden />
          {t('directions')}
        </a>

        <a
          href={place.appleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-navy-200 px-4 py-2 text-sm font-medium text-navy-700 transition-colors hover:border-gold hover:text-navy"
        >
          {t('appleMaps')}
        </a>

        <ContactLink
          method="whatsapp"
          href={bookHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-teal/40 px-4 py-2 text-sm font-medium text-teal-dark transition-colors hover:bg-teal/10"
        >
          <MessageCircle className="h-4 w-4" aria-hidden />
          {t('book')}
        </ContactLink>
      </div>
    </aside>
  );
}
