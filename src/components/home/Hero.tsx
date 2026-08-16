import Image from 'next/image';
import { getTranslations } from 'next-intl/server';
import { ShieldCheck, ArrowRight } from 'lucide-react';
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
        className="object-cover object-[62%_38%] motion-safe:animate-ken-burns sm:object-[center_42%]"
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
        style={{
          backgroundImage:
            'radial-gradient(55% 55% at 85% 12%, rgb(var(--brass-500)) 0, transparent 60%)',
        }}
      />
      {/* Gold hairline at the very top */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" aria-hidden />

      <div className="container relative z-10 py-20 sm:py-24">
        <div className="max-w-3xl">
          <Reveal immediate>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-gold-light ring-1 ring-gold/40 backdrop-blur">
              <ShieldCheck className="h-4 w-4" aria-hidden />
              {t('badge')}
            </span>
          </Reveal>

          <Reveal immediate delay={0.05}>
            <h1 className="mt-6 text-4xl font-bold leading-[1.1] text-cream-100 [text-shadow:0_2px_16px_rgba(7,30,25,0.55)] sm:text-5xl lg:text-6xl">
              {t('title')}
            </h1>
          </Reveal>

          <Reveal immediate delay={0.1}>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-cream-100/85 sm:text-lg">
              {t('subtitle')}
            </p>
          </Reveal>

          <Reveal immediate delay={0.15}>
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
        </div>
      </div>
    </section>
  );
}
