import { getTranslations } from 'next-intl/server';
import { ShieldCheck, UserCheck, Snowflake, Clock, BadgeDollarSign, Headset } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';

const items = [
  { key: 'licensed', icon: ShieldCheck },
  { key: 'drivers', icon: UserCheck },
  { key: 'vehicles', icon: Snowflake },
  { key: 'onTime', icon: Clock },
  { key: 'pricing', icon: BadgeDollarSign },
  { key: 'support', icon: Headset },
] as const;

export default async function TrustBadges() {
  const t = await getTranslations('trust');

  return (
    <section className="section bg-cream">
      <div className="container flex flex-col gap-12">
        <SectionHeading eyebrow={t('eyebrow')} title={t('title')} subtitle={t('subtitle')} />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <Reveal key={item.key} delay={i * 0.05}>
              <div className="card h-full">
                <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-teal/10 text-teal-dark">
                  <item.icon className="h-6 w-6" aria-hidden />
                </span>
                <h3 className="text-lg">{t(`items.${item.key}.title`)}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-500">
                  {t(`items.${item.key}.desc`)}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
