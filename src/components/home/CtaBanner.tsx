import { getTranslations } from 'next-intl/server';
import { Phone } from 'lucide-react';
import { whatsappLink, site, telLink } from '@/lib/site';
import ContactLink from '@/components/analytics/ContactLink';
import Reveal from '@/components/ui/Reveal';

export default async function CtaBanner() {
  const t = await getTranslations('ctaBanner');
  const href = whatsappLink(
    'Assalamu alaikum Al-Saleem Transport, I would like to book a ride.',
  );

  return (
    <section className="section bg-white">
      <div className="container">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-maroon to-maroon-700 px-6 py-14 text-center text-cream-100 shadow-card sm:px-12">
            <div
              className="absolute inset-0 opacity-10"
              aria-hidden
              style={{
                backgroundImage:
                  'repeating-linear-gradient(45deg, #ffffff 0 1px, transparent 1px 20px)',
              }}
            />
            <div className="relative mx-auto flex max-w-2xl flex-col items-center gap-5">
              <h2 className="text-3xl text-cream-100 sm:text-4xl">{t('title')}</h2>
              <p className="text-cream-100/85">{t('subtitle')}</p>
              <div className="flex flex-col items-center gap-3 sm:flex-row">
                <ContactLink
                  method="whatsapp"
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp text-base"
                >
                  {t('cta')}
                </ContactLink>
                <ContactLink
                  method="call"
                  href={telLink}
                  className="inline-flex items-center gap-2 text-sm font-medium text-cream-100 hover:text-gold-light"
                  dir="ltr"
                >
                  <Phone className="h-4 w-4" aria-hidden />
                  {t('orCall')} {site.phoneDisplay}
                </ContactLink>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
