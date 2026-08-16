import { getTranslations } from 'next-intl/server';
import { Plane, Hotel, Landmark, MoonStar, Route, Sparkles } from 'lucide-react';
import { slugForKey } from '@/lib/services';
import { Section, SectionHeader } from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Reveal from '@/components/ui/Reveal';

/**
 * Services — the one 6-card grid kept in the new rhythm, on the `muted`
 * surface so it reads as a distinct band from the sections either side.
 *
 * Every card is the shared `Card` primitive: fixed slots, locked type scale,
 * clamped body and a bottom-pinned action, which is what makes the row line up
 * regardless of how long a translation runs.
 */
const items = [
  { key: 'airport', icon: Plane },
  { key: 'hotel', icon: Hotel },
  { key: 'ziyarat', icon: Landmark },
  { key: 'umrah', icon: MoonStar },
  { key: 'intercity', icon: Route },
  { key: 'custom', icon: Sparkles },
] as const;

export default async function Services() {
  const t = await getTranslations('services');

  return (
    <Section surface="muted">
      <div className="container flex flex-col gap-12">
        <SectionHeader eyebrow={t('eyebrow')} title={t('title')} subtitle={t('subtitle')} />

        {/* items-stretch + h-full on the card gives every card the row height */}
        <div className="grid items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            /* h-full on the wrapper too: the Card's h-full resolves against
               this div, not the grid track, so without it the cards only
               happen to line up. */
            <Reveal key={item.key} delay={i * 0.06} className="h-full">
              <Card
                icon={item.icon}
                title={t(`items.${item.key}.title`)}
                body={t(`items.${item.key}.desc`)}
                actionLabel={t('learnMore')}
                href={`/services/${slugForKey(item.key)}`}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
