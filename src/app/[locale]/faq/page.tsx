import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { buildMetadata } from '@/lib/seo';
import { breadcrumbSchema, faqSchema } from '@/lib/schema';
import { whatsappLink } from '@/lib/site';
import JsonLd from '@/components/seo/JsonLd';
import PageHeader from '@/components/ui/PageHeader';
import Reveal from '@/components/ui/Reveal';

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale: params.locale, namespace: 'meta.faq' });
  return buildMetadata({
    locale: params.locale,
    path: '/faq',
    title: t('title'),
    description: t('description'),
  });
}

export default async function FaqPage({ params }: { params: { locale: string } }) {
  setRequestLocale(params.locale);
  const t = await getTranslations('faqPage');
  const tn = await getTranslations('nav');
  const tc = await getTranslations('common');
  const tcta = await getTranslations('ctaBanner');

  const items = t.raw('items') as { q: string; a: string }[];
  const waHref = whatsappLink('Assalamu alaikum Al-Saleem Transport, I have a question.');

  return (
    <>
      <JsonLd
        data={[
          faqSchema(items.map((i) => ({ question: i.q, answer: i.a }))),
          breadcrumbSchema(params.locale, [
            { name: tc('home'), path: '/' },
            { name: tn('faq'), path: '/faq' },
          ]),
        ]}
      />
      <PageHeader
        eyebrow={t('eyebrow')}
        title={t('title')}
        subtitle={t('subtitle')}
        crumbs={[{ name: tn('faq'), path: '/faq' }]}
      />

      <section className="section bg-cream">
        <div className="container mx-auto max-w-3xl flex flex-col gap-4">
          {items.map((item, i) => (
            <Reveal key={i} delay={Math.min(i * 0.03, 0.2)}>
              <details className="group card open:ring-gold/40">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-semibold text-navy">
                  {item.q}
                  <span className="shrink-0 text-2xl leading-none text-maroon transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 leading-relaxed text-navy-600">{item.a}</p>
              </details>
            </Reveal>
          ))}

          <Reveal>
            <div className="mt-6 rounded-2xl bg-navy px-6 py-8 text-center text-cream-100">
              <h2 className="text-xl text-cream-100">{tcta('title')}</h2>
              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp mt-4"
              >
                {tcta('cta')}
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
