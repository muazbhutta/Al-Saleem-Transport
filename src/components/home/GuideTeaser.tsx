import Image from 'next/image';
import { getTranslations } from 'next-intl/server';
import { BookOpen, ArrowRight } from 'lucide-react';
import { Link } from '@/i18n/routing';
import { masjidBlur } from '@/lib/images';
import Reveal from '@/components/ui/Reveal';

/**
 * Ziyarat Guide teaser band — Masjid an-Nabawi at sunset as the background,
 * with a dark gradient overlay so the text stays readable. The image sits in a
 * defined aspect-ratio band (taller on mobile, wide on desktop) with the focal
 * point on the green dome, so nothing is distorted or cut off. Lazy-loaded.
 */
export default async function GuideTeaser() {
  const t = await getTranslations('guide');

  return (
    <section className="section bg-cream">
      <div className="container">
        <Reveal>
          <div className="relative isolate overflow-hidden rounded-3xl shadow-card">
            <Image
              src="/images/masjid-nabawi.jpg"
              alt="Masjid an-Nabawi green dome at sunset in Madinah, Saudi Arabia"
              fill
              loading="lazy"
              sizes="(max-width: 1024px) 100vw, 1100px"
              placeholder="blur"
              blurDataURL={masjidBlur}
              className="-z-10 object-cover object-[center_35%]"
            />
            {/* Readability overlay */}
            <div
              className="absolute inset-0 -z-10 bg-gradient-to-t from-navy-900/92 via-navy-900/60 to-navy-900/35"
              aria-hidden
            />

            <div className="flex min-h-[22rem] flex-col justify-end gap-4 p-7 text-cream-100 sm:min-h-[24rem] sm:p-10 lg:min-h-[26rem]">
              <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-gold-light ring-1 ring-gold/40 backdrop-blur">
                <BookOpen className="h-4 w-4" aria-hidden />
                {t('eyebrow')}
              </span>
              <h2 className="max-w-2xl text-3xl font-bold text-cream-100 sm:text-4xl">
                {t('title')}
              </h2>
              <p className="max-w-2xl text-cream-100/85">{t('subtitle')}</p>
              <Link href="/ziyarat-guide" className="btn-gold mt-1 w-fit text-base">
                {t('startReading')}
                <ArrowRight className="h-4 w-4 rtl:rotate-180" aria-hidden />
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
