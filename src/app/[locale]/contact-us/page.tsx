import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';
import { buildMetadata } from '@/lib/seo';
import { breadcrumbSchema } from '@/lib/schema';
import { site, telLink, mailLink, whatsappLink } from '@/lib/site';
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

  const waHref = whatsappLink(
    'Assalamu alaikum Al-Saleem Transport, I have a question.',
  );

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
        <div className="container grid gap-8 lg:grid-cols-2">
          {/* Contact details */}
          <div className="flex flex-col gap-5">
            <div className="grid gap-4 sm:grid-cols-2">
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
                  <a key={c.title} href={c.href} className="card transition hover:ring-gold/50">
                    {inner}
                  </a>
                ) : (
                  <div key={c.title} className="card">
                    {inner}
                  </div>
                );
              })}
            </div>

            <a href={waHref} target="_blank" rel="noopener noreferrer" className="btn-whatsapp w-full text-base">
              <MessageCircle className="h-5 w-5" aria-hidden />
              {tc('chatWhatsapp')}
            </a>

            {/* Map: static, privacy-friendly embed of the service region. */}
            <div className="overflow-hidden rounded-2xl shadow-soft ring-1 ring-navy-100">
              <iframe
                title="Service area map — Makkah, Madinah, Jeddah, Taif"
                src="https://www.google.com/maps?q=Makkah%2C%20Saudi%20Arabia&z=6&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-64 w-full border-0"
              />
            </div>
          </div>

          {/* Message form */}
          <ContactForm />
        </div>
      </section>
    </>
  );
}
