import { getTranslations } from 'next-intl/server';
import { Phone } from 'lucide-react';
import { whatsappLink, site, telLink } from '@/lib/site';
import ContactLink from '@/components/analytics/ContactLink';
import Reveal from '@/components/ui/Reveal';
import { Section, SectionHeader } from '@/components/ui/Section';

export default async function CtaBanner() {
  const t = await getTranslations('ctaBanner');
  const href = whatsappLink(
    'Assalamu alaikum Al-Saleem Transport, I would like to book a ride.',
  );

  return (
    <Section surface="inverse">
      <div className="container">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-700 to-emerald-900 px-6 py-14 text-center text-on-surface-inverse shadow-card sm:px-12">
            <div
              className="absolute inset-0 opacity-10"
              aria-hidden
              style={{
                backgroundImage:
                  'repeating-linear-gradient(45deg, rgb(var(--sand-50)) 0 1px, transparent 1px 20px)',
              }}
            />
            <div className="relative mx-auto flex max-w-2xl flex-col items-center gap-5">
              <SectionHeader title={t('title')} subtitle={t('subtitle')} align="center" inverse />
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
                  className="inline-flex min-h-[44px] items-center gap-2 px-2 text-sm font-medium text-on-surface-inverse hover:text-brass-300"
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
    </Section>
  );
}
