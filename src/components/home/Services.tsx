import { getTranslations } from 'next-intl/server';
import { Plane, Hotel, Landmark, MoonStar, Route, Sparkles, ArrowRight } from 'lucide-react';
import { Link } from '@/i18n/routing';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';

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
    <section className="section bg-white">
      <div className="container flex flex-col gap-12">
        <SectionHeading eyebrow={t('eyebrow')} title={t('title')} subtitle={t('subtitle')} />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <Reveal key={item.key} delay={i * 0.05}>
              <Link
                href="/pick-drop"
                className="card group flex h-full flex-col gap-4 hover:ring-gold/50 max-sm:items-center"
              >
                <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-navy to-navy-800 text-gold-light transition-transform group-hover:scale-105">
                  <item.icon className="h-7 w-7" aria-hidden />
                </span>
                <div>
                  <h3 className="text-lg">{t(`items.${item.key}.title`)}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy-500">
                    {t(`items.${item.key}.desc`)}
                  </p>
                </div>
                <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-maroon">
                  {t('learnMore')}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" aria-hidden />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
