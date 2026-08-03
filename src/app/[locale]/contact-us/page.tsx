import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { buildMetadata } from '@/lib/seo';
import { breadcrumbSchema } from '@/lib/schema';
import { site, telLink, mailLink } from '@/lib/site';
import JsonLd from '@/components/seo/JsonLd';
import PageHeader from '@/components/ui/PageHeader';
import ContactForm from '@/components/contact/ContactForm';

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale: params.locale, namespace: 'meta.contact' });
  return buildMetadata({
    locale: params.locale,
    path: '/contact-us',
    title: t('title'),
    description: t('description'),
  });
}

export default async function ContactPage({ params }: { params: { locale: string } }) {
  setRequestLocale(params.locale);
  const t = await getTranslations('contact');
  const tn = await getTranslations('nav');
  const tc = await getTranslations('common');

  const cards = [
    { icon: Phone, title: t('phoneTitle'), value: site.phoneDisplay, href: telLink, ltr: true },
    { icon: Mail, title: t('emailTitle'), value: site.email, href: mailLink, ltr: true },
    { icon: MapPin, title: t('areaTitle'), value: t('areaValue'), href: undefined, ltr: false },
    { icon: Clock, title: t('hoursTitle'), value: t('hoursValue'), href: undefined, ltr: false },
  ];

  return (
    <>
      <JsonLd
        data={breadcrumbSchema(params.locale, [
          { name: tc('home'), path: '/' },
          { name: tn('contact'), path: '/contact-us' },
        ])}
      />
      <PageHeader
        eyebrow={t('eyebrow')}
        title={t('title')}
        subtitle={t('subtitle')}
        crumbs={[{ name: tn('contact'), path: '/contact-us' }]}
      />

      <section className="section bg-cream">
        <div className="container">
          <div className="grid items-stretch gap-8 lg:grid-cols-2">
            {/* Contact details */}
            <div className="grid gap-4 sm:auto-rows-fr sm:grid-cols-2">
              {cards.map((c) => {
                const inner = (
                  <>
                    <span className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-teal/10 text-teal-dark">
                      <c.icon className="h-5 w-5" aria-hidden />
                    </span>
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-navy-400">
                      {c.title}
                    </h3>
                    <p className="mt-1 font-medium text-navy-800" dir={c.ltr ? 'ltr' : undefined}>
                      {c.value}
                    </p>
                  </>
                );
                return c.href ? (
                  <a key={c.title} href={c.href} className="card h-full transition hover:ring-gold/50">
                    {inner}
                  </a>
                ) : (
                  <div key={c.title} className="card h-full">
                    {inner}
                  </div>
                );
              })}
            </div>

            {/* Message form */}
            <ContactForm />
          </div>

          {/* Map: full-width location embed below both boxes. */}
          <div className="mt-8 overflow-hidden rounded-2xl shadow-soft ring-1 ring-navy-100">
            <iframe
              title="Al-Saleem Transport location - Google Maps"
              src="https://www.google.com/maps?q=21.4466920,39.8542180&z=15&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-80 w-full border-0 md:h-[28rem]"
            />
          </div>
        </div>
      </section>
    </>
  );
}
