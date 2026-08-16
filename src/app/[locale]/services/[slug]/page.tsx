import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Check, Users, MessageCircle, Phone, ArrowRight } from 'lucide-react';
import { Link, routing } from '@/i18n/routing';
import { buildMetadata } from '@/lib/seo';
import { breadcrumbSchema, faqSchema, serviceSchema } from '@/lib/schema';
import { services, getService } from '@/lib/services';
import { site, telLink, whatsappLink } from '@/lib/site';
import ContactLink from '@/components/analytics/ContactLink';
import JsonLd from '@/components/seo/JsonLd';
import PageHeader from '@/components/ui/PageHeader';
import { Section, SectionHeader } from '@/components/ui/Section';
import Reveal from '@/components/ui/Reveal';

type Params = { locale: string; slug: string };

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    services.map((s) => ({ locale, slug: s.slug })),
  );
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const service = getService(params.slug);
  if (!service) return {};
  const t = await getTranslations({ locale: params.locale, namespace: 'services' });
  const name = t(`items.${service.key}.title`);

  return buildMetadata({
    locale: params.locale,
    path: `/services/${service.slug}`,
    title: t('metaTitleTpl', { service: name }),
    description: t('metaDescTpl', { service: name }),
    imageAlt: `${name} — ${site.shortNameEn}`,
  });
}

export default async function ServicePage({ params }: { params: Params }) {
  const { locale, slug } = params;
  setRequestLocale(locale);

  const service = getService(slug);
  if (!service) notFound();

  const t = await getTranslations('services');
  const tf = await getTranslations('fleet');
  const tc = await getTranslations('common');
  const tn = await getTranslations('nav');
  const tcta = await getTranslations('ctaBanner');
  const tfaq = await getTranslations('faqPage');

  const name = t(`items.${service.key}.title`);
  const desc = t(`items.${service.key}.desc`);
  const points = t.raw(`items.${service.key}.points`) as string[];
  // A stable slice of the shared FAQ, offset per service so no two pages show
  // the same four questions.
  const allFaqs = tfaq.raw('items') as { q: string; a: string }[];
  const offset = services.findIndex((s) => s.slug === slug);
  const faqs = Array.from({ length: 4 }, (_, i) => allFaqs[(offset + i) % allFaqs.length]);

  // Booking deep link carries the service so /pick-drop can pre-select it.
  const bookingHref = `/pick-drop?service=${service.key}`;
  const waHref = whatsappLink(
    `Assalamu alaikum Al-Saleem Transport, I would like to book: ${name}.`,
  );

  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: `${service.serviceType} — ${site.shortNameEn}`,
            description: desc,
            path: `/services/${service.slug}`,
          }),
          faqSchema(faqs.map((f) => ({ question: f.q, answer: f.a }))),
          breadcrumbSchema(locale, [
            { name: tc('home'), path: '/' },
            { name: name, path: `/services/${service.slug}` },
          ]),
        ]}
      />

      <PageHeader
        eyebrow={t('eyebrow')}
        title={name}
        subtitle={desc}
        crumbs={[{ name, path: `/services/${service.slug}` }]}
      />

      {/* What's included — base surface, list archetype */}
      <Section surface="base">
        <div className="container grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div className="flex flex-col gap-8">
            <SectionHeader title={t('pointsTitle')} />
            <ul className="flex flex-col gap-4">
              {points.map((point, i) => (
                <Reveal key={point} delay={i * 0.06}>
                  <li className="flex gap-3 text-start">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" aria-hidden />
                    <span className="leading-relaxed text-ink-soft">{point}</span>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>

          {/* Vehicles — capacity only, never a fare */}
          <div className="flex flex-col gap-5">
            <h2 className="text-lg font-semibold text-ink">{tf('title')}</h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {service.vehicles.map((v) => (
                <div
                  key={v}
                  className="rounded-2xl border border-emerald-800/10 bg-surface-raised p-5 text-start shadow-card"
                >
                  <h3 className="font-semibold text-ink">{tf(`items.${v}.name`)}</h3>
                  <p className="mt-1 inline-flex items-center gap-1.5 text-sm font-medium text-emerald-600">
                    <Users className="h-4 w-4" aria-hidden />
                    {tf(`items.${v}.capacity`)}
                  </p>
                </div>
              ))}
            </div>
            <p className="text-sm text-ink-faint">{t('fareNote')}</p>
          </div>
        </div>
      </Section>

      {/* FAQ — muted surface, accordion archetype */}
      <Section surface="muted">
        <div className="container flex flex-col gap-8">
          <SectionHeader title={tfaq('title')} />
          <div className="flex flex-col gap-3">
            {faqs.map((f) => (
              <details
                key={f.q}
                className="group rounded-2xl border border-emerald-800/10 bg-surface-raised p-6 shadow-card open:border-brass-500/40"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-start font-semibold text-ink">
                  {f.q}
                  <span className="text-2xl leading-none text-emerald-600 transition-transform duration-200 group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA — inverse surface */}
      <Section surface="inverse">
        <div className="container flex flex-col items-center gap-6 text-center">
          <h2 className="text-3xl font-bold text-on-surface-inverse sm:text-4xl">
            {tcta('title')}
          </h2>
          <p className="max-w-xl text-on-surface-inverse/80">{tcta('subtitle')}</p>
          <div className="flex flex-col items-center gap-3 sm:flex-row">
            <ContactLink
              method="whatsapp"
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp text-base"
            >
              <MessageCircle className="h-5 w-5" aria-hidden />
              {tcta('cta')}
            </ContactLink>
            <Link href={bookingHref} className="btn-gold text-base">
              {tn('pickDrop')}
              <ArrowRight className="h-4 w-4 rtl:rotate-180" aria-hidden />
            </Link>
          </div>
          <ContactLink
            method="call"
            href={telLink}
            className="inline-flex items-center gap-2 text-sm font-medium text-on-surface-inverse/80 hover:text-brass-300"
            dir="ltr"
          >
            <Phone className="h-4 w-4" aria-hidden />
            {site.phoneDisplay}
          </ContactLink>
        </div>
      </Section>
    </>
  );
}
