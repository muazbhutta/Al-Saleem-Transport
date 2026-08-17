import type { Metadata } from 'next';
import Image from 'next/image';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { ShieldCheck, HeartHandshake, Sparkles, Star, BadgeCheck } from 'lucide-react';
import { buildMetadata } from '@/lib/seo';
import { fleetBlur } from '@/lib/images';
import { breadcrumbSchema } from '@/lib/schema';
import { site } from '@/lib/site';
import JsonLd from '@/components/seo/JsonLd';
import PageHeader from '@/components/ui/PageHeader';
import Reveal from '@/components/ui/Reveal';
import { Section, SectionHeader, SurfaceDivider } from '@/components/ui/Section';

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale: params.locale, namespace: 'meta.about' });
  return buildMetadata({
    locale: params.locale,
    path: '/about-us',
    title: t('title'),
    description: t('description'),
  });
}

const valueIcons = {
  trust: ShieldCheck,
  care: HeartHandshake,
  excellence: Sparkles,
  faith: Star,
} as const;

export default async function AboutPage({ params }: { params: { locale: string } }) {
  setRequestLocale(params.locale);
  const t = await getTranslations('about');
  const tn = await getTranslations('nav');
  const tc = await getTranslations('common');

  const story = t.raw('story') as string[];
  const valueKeys = ['trust', 'care', 'excellence', 'faith'] as const;

  return (
    <>
      <JsonLd
        data={breadcrumbSchema(params.locale, [
          { name: tc('home'), path: '/' },
          { name: tn('about'), path: '/about-us' },
        ])}
      />
      <PageHeader
        eyebrow={t('eyebrow')}
        title={t('title')}
        subtitle={t('lead')}
        crumbs={[{ name: tn('about'), path: '/about-us' }]}
      />

      {/* Story */}
      <Section surface="base">
        <div className="container grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <Reveal className="prose-guide flex flex-col gap-5">
            {story.map((para, i) => (
              <p key={i} className="text-base leading-relaxed text-ink-soft">
                {para}
              </p>
            ))}
          </Reveal>

          <Reveal delay={0.1}>
            <div className="card flex flex-col gap-4 bg-emerald-800 text-on-surface-inverse">
              <BadgeCheck className="h-8 w-8 text-brass-500 max-sm:mx-auto" aria-hidden />
              <h2 className="text-xl text-on-surface-inverse">{t('licenseTitle')}</h2>
              <p className="text-sm text-on-surface-inverse/80">{t('licenseIntro')}</p>
              <dl className="mt-2 flex flex-col gap-3 text-sm">
                <div className="rounded-xl bg-white/5 p-3 ring-1 ring-white/10">
                  <dt className="text-on-surface-inverse/60">{t('licenseLabel')}</dt>
                  <dd className="font-semibold text-brass-300" dir="ltr">{site.licenseNo}</dd>
                </div>
                <div className="rounded-xl bg-white/5 p-3 ring-1 ring-white/10">
                  <dt className="text-on-surface-inverse/60">{t('unifiedLabel')}</dt>
                  <dd className="font-semibold text-brass-300" dir="ltr">{site.unifiedNationalNo}</dd>
                </div>
                <div className="rounded-xl bg-white/5 p-3 ring-1 ring-white/10">
                  <dt className="text-on-surface-inverse/60">{t('coverageLabel')}</dt>
                  <dd className="font-semibold text-on-surface-inverse">{tc('coverageShort')}</dd>
                </div>
              </dl>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Fleet showcase - 16:9 keeps all three vehicles visible on mobile */}
      <Section surface="raised">
        <div className="container">
          <Reveal>
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
        </div>
      </Section>

      <SurfaceDivider />

      {/* Mission */}
      <Section surface="muted">
        <div className="container">
          <Reveal>
            <div className="mx-auto max-w-3xl rounded-3xl bg-gradient-to-br from-emerald-500 to-emerald-700 px-6 py-12 text-center text-on-surface-inverse shadow-card sm:px-12">
              <h2 className="text-2xl text-on-surface-inverse sm:text-3xl">{t('missionTitle')}</h2>
              <p className="mt-4 text-lg leading-relaxed text-on-surface-inverse/90">{t('mission')}</p>
            </div>
          </Reveal>
        </div>
      </Section>

      <SurfaceDivider />

      {/* Values */}
      <Section surface="base">
        <div className="container flex flex-col gap-10">
          <Reveal>
            <SectionHeader title={t('valuesTitle')} align="center" />
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {valueKeys.map((key, i) => {
              const Icon = valueIcons[key];
              return (
                <Reveal key={key} delay={i * 0.05}>
                  <div className="card h-full text-center">
                    <span className="mx-auto mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-600/10 text-emerald-600">
                      <Icon className="h-6 w-6" aria-hidden />
                    </span>
                    <h3 className="text-lg">{t(`values.${key}.title`)}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                      {t(`values.${key}.desc`)}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </Section>
    </>
  );
}
