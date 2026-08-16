import Image from 'next/image';
import { getTranslations } from 'next-intl/server';
import { ShieldCheck, UserCheck, Snowflake, Clock, BadgeCheck, Headset } from 'lucide-react';
import { Section, SectionHeader } from '@/components/ui/Section';
import { fleetBlur } from '@/lib/images';
import Reveal from '@/components/ui/Reveal';

/**
 * Why Trust Us — replaces the old six-card grid with a two-column split:
 * photograph on one side, a compact six-item list on the other.
 *
 * This is the archetype change, not just a restyle. Six reasons do not need six
 * cards; as a list they read in one pass and the section stops looking like the
 * three grids around it.
 *
 * Reuses the existing `trust.items.*` keys, so all 11 locales are already
 * translated — no new strings.
 */
const items = [
  { key: 'licensed', icon: ShieldCheck },
  { key: 'drivers', icon: UserCheck },
  { key: 'vehicles', icon: Snowflake },
  { key: 'onTime', icon: Clock },
  { key: 'pricing', icon: BadgeCheck },
  { key: 'support', icon: Headset },
] as const;

export default async function WhyTrustUs() {
  const t = await getTranslations('trust');

  return (
    <Section surface="raised">
      <div className="container grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Image side — fixed aspect box so it can never shift layout */}
        <Reveal>
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-card">
            <Image
              src="/images/fleet-vehicles.jpg"
              alt={t('title')}
              fill
              loading="lazy"
              sizes="(max-width: 1024px) 100vw, 560px"
              placeholder="blur"
              blurDataURL={fleetBlur}
              className="object-cover"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-emerald-950/45 to-transparent"
              aria-hidden
            />
          </div>
        </Reveal>

        {/* List side */}
        <div className="flex flex-col gap-8">
          <SectionHeader eyebrow={t('eyebrow')} title={t('title')} subtitle={t('subtitle')} />

          <ul className="flex flex-col gap-5">
            {items.map((item, i) => (
              <Reveal key={item.key} delay={i * 0.05}>
                <li className="flex gap-4 text-start">
                  <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-700">
                    <item.icon className="h-5 w-5" strokeWidth={1.75} aria-hidden />
                  </span>
                  <div className="min-w-0">
                    <h3 className="font-semibold leading-snug text-ink">
                      {t(`items.${item.key}.title`)}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-ink-soft">
                      {t(`items.${item.key}.desc`)}
                    </p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
