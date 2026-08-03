import { getTranslations } from 'next-intl/server';
import { MapPin } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';

const cities = ['makkah', 'madinah', 'jeddah', 'taif'] as const;

export default async function Coverage() {
  const t = await getTranslations('coverage');

  return (
    <section className="section bg-white">
      <div className="container flex flex-col gap-12">
        <SectionHeading eyebrow={t('eyebrow')} title={t('title')} subtitle={t('subtitle')} />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cities.map((city, i) => (
            <Reveal key={city} delay={i * 0.05}>
              <div className="group relative overflow-hidden rounded-2xl bg-navy p-6 text-cream-100 shadow-soft ring-1 ring-navy-100/40">
                <div
                  className="absolute inset-0 opacity-20 transition-opacity group-hover:opacity-30"
                  aria-hidden
                  style={{
                    backgroundImage:
                      'radial-gradient(circle at 70% 30%, #C9A24B 0, transparent 55%)',
                  }}
                />
                <div className="relative">
                  <MapPin className="h-7 w-7 text-gold" aria-hidden />
                  <h3 className="mt-4 text-xl text-cream-100">{t(`items.${city}.name`)}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-cream-100/75">
                    {t(`items.${city}.desc`)}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
