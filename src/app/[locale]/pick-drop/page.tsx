import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Phone, MessageCircle, ShieldCheck, Clock, BadgeDollarSign } from 'lucide-react';
import { buildMetadata } from '@/lib/seo';
import { breadcrumbSchema, serviceSchema } from '@/lib/schema';
import { site, telLink, whatsappLink } from '@/lib/site';
import JsonLd from '@/components/seo/JsonLd';
import PageHeader from '@/components/ui/PageHeader';
import BookingForm from '@/components/booking/BookingForm';

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale: params.locale, namespace: 'meta.pickDrop' });
  return buildMetadata({
    locale: params.locale,
    path: '/pick-drop',
    title: t('title'),
    description: t('description'),
  });
}

export default async function PickDropPage({ params }: { params: { locale: string } }) {
  setRequestLocale(params.locale);
  const t = await getTranslations('booking');
  const tn = await getTranslations('nav');
  const tc = await getTranslations('common');
  const tt = await getTranslations('trust');

  const bookHref = whatsappLink(
    'Assalamu alaikum Al-Saleem Transport, I would like to book a ride.',
  );

  const perks = [
    { icon: ShieldCheck, text: tt('items.licensed.title') },
    { icon: BadgeDollarSign, text: tt('items.pricing.title') },
    { icon: Clock, text: tt('items.onTime.title') },
  ];

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(params.locale, [
            { name: tc('home'), path: '/' },
            { name: tn('pickDrop'), path: '/pick-drop' },
          ]),
          serviceSchema({
            name: tn('pickDrop'),
            description: t('subtitle'),
            path: '/pick-drop',
          }),
        ]}
      />
      <PageHeader
        eyebrow={t('eyebrow')}
        title={t('title')}
        subtitle={t('subtitle')}
        crumbs={[{ name: tn('pickDrop'), path: '/pick-drop' }]}
      />

      <section id="booking-form" className="section scroll-mt-24 bg-cream">
        <div className="container grid gap-8 lg:grid-cols-[1.6fr_1fr]">
          <BookingForm />

          {/* Sidebar: reassurance + direct contact */}
          <aside className="flex flex-col gap-6 lg:sticky lg:top-28 lg:self-start">
            <div className="card flex flex-col gap-4">
              <h2 className="text-lg">{tc('chatWhatsapp')}</h2>
              <a href={bookHref} target="_blank" rel="noopener noreferrer" className="btn-whatsapp w-full">
                <MessageCircle className="h-5 w-5" aria-hidden />
                {tc('bookNow')}
              </a>
              <a href={telLink} className="btn-outline w-full" dir="ltr">
                <Phone className="h-4 w-4" aria-hidden />
                {site.phoneDisplay}
              </a>
              <p className="text-sm text-navy-500">{tc('support247')}</p>
            </div>

            <div className="card flex flex-col gap-3">
              <ul className="flex flex-col gap-3">
                {perks.map((p) => (
                  <li key={p.text} className="flex items-center gap-3 text-sm text-navy-700 max-sm:justify-center">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-teal/10 text-teal-dark">
                      <p.icon className="h-5 w-5" aria-hidden />
                    </span>
                    {p.text}
                  </li>
                ))}
              </ul>
              <div className="mt-1 inline-flex w-fit items-center gap-2 rounded-full bg-navy px-3 py-1.5 text-xs text-cream-100 max-sm:mx-auto">
                <ShieldCheck className="h-4 w-4 text-gold" aria-hidden />
                {tc('licenseNo')} {site.licenseNo}
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
