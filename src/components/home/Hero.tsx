import Image from 'next/image';
import { getTranslations } from 'next-intl/server';
import { ShieldCheck, ArrowRight, Clock, MapPin, Star } from 'lucide-react';
import { Link } from '@/i18n/routing';
import { whatsappLink } from '@/lib/site';
import { makkahSkylineBlur } from '@/lib/images';
import ContactLink from '@/components/analytics/ContactLink';
import Reveal from '@/components/ui/Reveal';

export default async function Hero() {
  const t = await getTranslations('hero');

  const bookHref = whatsappLink(
    'Assalamu alaikum Al-Saleem Transport, I would like to book a ride.',
  );

  const stats = [
    { value: t('stat1Value'), label: t('stat1Label'), icon: Clock },
    { value: t('stat2Value'), label: t('stat2Label'), icon: MapPin },
    { value: t('stat3Value'), label: t('stat3Label'), icon: ShieldCheck },
  ];

  return (
    <section className="relative flex min-h-[620px] items-center overflow-hidden bg-navy-900 text-cream-100 lg:min-h-[86vh]">
      {/* Background photo (optimized, priority LCP, blur LQIP - no layout shift) */}
      <Image
        src="/images/makkah-skyline.jpg"
        alt="Makkah skyline with the Clock Tower (Abraj Al-Bait) illuminated at dusk"
        fill
        priority
        sizes="100vw"
        placeholder="blur"
        blurDataURL={makkahSkylineBlur}
        className="object-cover object-[62%_38%] sm:object-[center_42%]"
      />

      {/* Readability overlays - emerald-tinted, darker toward the bottom */}
      <div className="absolute inset-0 bg-navy-900/50" aria-hidden />
      <div
        className="absolute inset-0 bg-gradient-to-t from-navy-900/95 via-navy-900/55 to-navy-900/30"
        aria-hidden
      />
      <div
        className="absolute inset-0 opacity-[0.14]"
        aria-hidden
        style={{ backgroundImage: 'radial-gradient(55% 55% at 85% 12%, #C9A24B 0, transparent 60%)' }}
      />
      {/* Gold hairline at the very top */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" aria-hidden />

      <div className="container relative z-10 py-20 sm:py-24">
        <div className="max-w-3xl">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-gold-light ring-1 ring-gold/40 backdrop-blur">
              <ShieldCheck className="h-4 w-4" aria-hidden />
              {t('badge')}
            </span>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="mt-6 text-4xl font-bold leading-[1.1] text-cream-100 [text-shadow:0_2px_16px_rgba(7,30,25,0.55)] sm:text-5xl lg:text-6xl">
              {t('title')}
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-cream-100/85 sm:text-lg">
              {t('subtitle')}
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <ContactLink
                method="whatsapp"
                href={bookHref}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp text-base"
              >
                {t('ctaPrimary')}
              </ContactLink>
              <Link href="/pick-drop" className="btn-gold text-base">
                {t('ctaSecondary')}
                <ArrowRight className="h-4 w-4 rtl:rotate-180" aria-hidden />
              </Link>
            </div>
          </Reveal>

          {/* Trust rating strip */}
          <Reveal delay={0.2}>
            <div className="mt-6 inline-flex items-center gap-2 text-sm text-cream-100/80">
              <span className="flex text-gold" aria-hidden>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </span>
              <span>{t('stat3Label')}</span>
            </div>
          </Reveal>
        </div>

        {/* Stats */}
        <Reveal delay={0.25}>
          <dl className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3 sm:max-w-3xl">
            {stats.map((s) => (
              <div
                key={s.label}
                className="flex items-center gap-4 rounded-2xl bg-white/10 p-5 ring-1 ring-white/15 backdrop-blur-md"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gold/20 text-gold-light">
                  <s.icon className="h-6 w-6" aria-hidden />
                </span>
                <div className="max-sm:flex-1 max-sm:text-center">
                  <dt className="text-xl font-bold text-cream-100">{s.value}</dt>
                  <dd className="text-sm text-cream-100/75">{s.label}</dd>
                </div>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
