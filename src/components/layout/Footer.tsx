import { getTranslations } from 'next-intl/server';
import { Phone, Mail, MapPin, Clock, ShieldCheck } from 'lucide-react';
import { Link } from '@/i18n/routing';
import { mainNav, footerLegal } from '@/lib/nav';
import { site, telLink, mailLink } from '@/lib/site';
import { services } from '@/lib/services';
import ContactLink from '@/components/analytics/ContactLink';
import Logo from './Logo';

export default async function Footer({ locale }: { locale: string }) {
  const t = await getTranslations('footer');
  const tn = await getTranslations('nav');
  const ts = await getTranslations('services');
  const tc = await getTranslations('common');


  const year = new Date().getFullYear();

  return (
    <footer className="no-print mt-auto bg-emerald-800 text-on-surface-inverse/80">
      <div className="container grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div className="flex flex-col gap-4">
          <Logo variant="light" />
          <p className="max-w-xs text-sm leading-relaxed">{t('about')}</p>
          <div className="mt-1 inline-flex w-fit items-center gap-2 rounded-full bg-white/5 px-3 py-2 text-xs ring-1 ring-brass-500/30">
            <ShieldCheck className="h-4 w-4 text-brass-500" aria-hidden />
            <span>
              {tc('licenseNo')} {site.licenseNo}
            </span>
          </div>
          <p className="text-xs text-on-surface-inverse/60" dir="ltr">
            {tc('unifiedNo')}: {site.unifiedNationalNo}
          </p>
        </div>

        {/* Quick links */}
        <nav aria-label="Footer quick links" className="flex flex-col gap-3">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-on-surface-inverse">
            {t('quickLinks')}
          </h3>
          {mainNav.map((item) => (
            <Link key={item.key} href={item.path} className="inline-flex min-h-6 items-center py-0.5 text-sm hover:text-brass-500">
              {tn(item.key)}
            </Link>
          ))}
        </nav>

        {/* Services */}
        <nav aria-label="Footer services" className="flex flex-col gap-3">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-on-surface-inverse">
            {t('servicesTitle')}
          </h3>
          {services.map((service) => (
            <Link
              key={service.key}
              href={`/services/${service.slug}`}
              className="inline-flex min-h-6 items-center py-0.5 text-sm hover:text-brass-500"
            >
              {ts(`items.${service.key}.title`)}
            </Link>
          ))}
        </nav>

        {/* Contact */}
        <div className="flex flex-col gap-3">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-on-surface-inverse">
            {t('contactTitle')}
          </h3>
          <ContactLink
            method="call"
            href={telLink}
            className="inline-flex min-h-6 items-center gap-2 py-0.5 text-sm hover:text-brass-500"
            dir="ltr"
          >
            <Phone className="h-4 w-4 text-brass-500" aria-hidden /> {site.phoneDisplay}
          </ContactLink>
          <ContactLink
            method="email"
            href={mailLink}
            className="inline-flex min-h-6 items-center gap-2 py-0.5 text-sm hover:text-brass-500"
          >
            <Mail className="h-4 w-4 text-brass-500" aria-hidden /> {site.email}
          </ContactLink>
          <p className="inline-flex items-center gap-2 text-sm">
            <MapPin className="h-4 w-4 text-brass-500" aria-hidden /> {tc('coverageShort')}
          </p>
          <p className="inline-flex items-center gap-2 text-sm">
            <Clock className="h-4 w-4 text-brass-500" aria-hidden /> {t('hours')}
          </p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container flex flex-col items-center justify-between gap-3 py-5 text-xs text-on-surface-inverse/60 max-sm:text-center sm:flex-row">
          <p>
            © {year} {site.nameEn}. {t('rights')}
          </p>
          <nav aria-label="Legal" className="flex items-center gap-4">
            {footerLegal.map((item) => (
              <Link key={item.key} href={item.path} className="inline-flex min-h-6 items-center py-0.5 hover:text-brass-500">
                {tn(item.key)}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
