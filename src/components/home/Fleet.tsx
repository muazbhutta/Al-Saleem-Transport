import Image from 'next/image';
import { getTranslations } from 'next-intl/server';
import { Car, Truck, Bus, Users } from 'lucide-react';
import { Section, SectionHeader } from '@/components/ui/Section';
import Reveal from '@/components/ui/Reveal';
import { fleetBlur } from '@/lib/images';

/**
 * Fleet — horizontal snap-scroll carousel on the `base` surface.
 *
 * Was a 4-card grid directly below another grid. As a scroller it reads as a
 * different kind of section and suits the content better: vehicles are a set
 * you browse, not a checklist.
 *
 * Capacity and comfort only — never a fare. Scrolling is native CSS
 * (overflow-x + scroll-snap), so this adds no JavaScript.
 */
const items = [
  { key: 'sedan', icon: Car },
  { key: 'suv', icon: Car },
  { key: 'van', icon: Truck },
  { key: 'bus', icon: Bus },
] as const;

export default async function Fleet() {
  const t = await getTranslations('fleet');

  return (
    <Section surface="base">
      <div className="flex flex-col gap-12">
        <div className="container">
          <SectionHeader eyebrow={t('eyebrow')} title={t('title')} subtitle={t('subtitle')} />
        </div>

        <Reveal className="container">
          <div className="relative aspect-video w-full overflow-hidden rounded-3xl shadow-card ring-1 ring-emerald-800/10">
            <Image
              src="/images/fleet-vehicles.jpg"
              alt="Al-Saleem Transport fleet - sedan, SUV and Hiace van for Ziyarat and airport transfers in Saudi Arabia"
              fill
              loading="lazy"
              sizes="(max-width: 1024px) 100vw, 1100px"
              placeholder="blur"
              blurDataURL={fleetBlur}
              className="object-cover"
            />
          </div>
        </Reveal>

        {/* Snap scroller. Bleeds to the viewport edge on mobile so the next card
            peeks and the row is obviously scrollable; re-inset from lg up. */}
        <div
          className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth px-5 pb-4 lg:mx-auto lg:max-w-[1200px] lg:px-8"
          style={{ scrollbarWidth: 'thin' }}
        >
          {items.map((item, i) => (
            <Reveal
              key={item.key}
              delay={i * 0.06}
              className="w-[264px] shrink-0 snap-start sm:w-[300px]"
            >
              <article className="flex h-full flex-col rounded-2xl border border-emerald-800/10 bg-surface-raised p-6 text-start shadow-card">
                <div className="mb-5 flex h-28 w-full items-center justify-center rounded-xl bg-gradient-to-br from-emerald-50 to-surface-muted">
                  <item.icon className="h-14 w-14 text-emerald-400" strokeWidth={1.5} aria-hidden />
                </div>
                <h3 className="text-lg font-semibold text-ink">{t(`items.${item.key}.name`)}</h3>
                <p className="mt-1 inline-flex items-center gap-1.5 text-sm font-medium text-emerald-600">
                  <Users className="h-4 w-4" aria-hidden />
                  {t(`items.${item.key}.capacity`)}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  {t(`items.${item.key}.desc`)}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
