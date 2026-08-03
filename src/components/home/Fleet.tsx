import Image from 'next/image';
import { getTranslations } from 'next-intl/server';
import { Car, Truck, Bus, Users } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';
import { fleetBlur } from '@/lib/images';

const items = [
  { key: 'sedan', icon: Car },
  { key: 'suv', icon: Car },
  { key: 'van', icon: Truck },
  { key: 'bus', icon: Bus },
] as const;

export default async function Fleet() {
  const t = await getTranslations('fleet');

  return (
    <section className="section bg-cream">
      <div className="container flex flex-col gap-12">
        <SectionHeading eyebrow={t('eyebrow')} title={t('title')} subtitle={t('subtitle')} />

        {/* Full-width fleet showcase. Fixed 16:9 box keeps ALL three vehicles
            visible at every width (no side-cropping on mobile). Lazy-loaded. */}
        <Reveal>
          <div className="relative aspect-video w-full overflow-hidden rounded-3xl shadow-card ring-1 ring-navy-100/60">
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

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => (
            <Reveal key={item.key} delay={i * 0.05}>
              <div className="card flex h-full flex-col items-center gap-4 text-center">
                {/* Vehicle photo slot - drop /public/images/fleet-{key}.jpg and
                    swap this icon block for <Image>. See README. */}
                <div className="flex h-28 w-full items-center justify-center rounded-2xl bg-gradient-to-br from-navy-50 to-cream-300">
                  <item.icon className="h-14 w-14 text-navy-400" aria-hidden />
                </div>
                <div>
                  <h3 className="text-lg">{t(`items.${item.key}.name`)}</h3>
                  <p className="mt-1 inline-flex items-center gap-1.5 text-sm font-medium text-teal-dark">
                    <Users className="h-4 w-4" aria-hidden />
                    {t(`items.${item.key}.capacity`)}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-navy-500">
                    {t(`items.${item.key}.desc`)}
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
