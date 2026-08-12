'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { Menu, X, Phone, ShieldCheck, MessageCircle } from 'lucide-react';
import { Link, usePathname } from '@/i18n/routing';
import { mainNav } from '@/lib/nav';
import { site, telLink, whatsappLink } from '@/lib/site';
import ContactLink from '@/components/analytics/ContactLink';
import Logo from './Logo';
import LanguageSwitcher from './LanguageSwitcher';

export default function Header({ locale }: { locale: string }) {
  const t = useTranslations('nav');
  const tc = useTranslations('common');
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Close the mobile menu whenever the route changes.
  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const bookHref = whatsappLink(
    'Assalamu alaikum Al-Saleem Transport, I would like to book a ride.',
  );

  return (
    <header
      className={`no-print sticky top-0 z-40 transition-shadow duration-300 ${
        scrolled
          ? 'bg-cream/90 shadow-soft backdrop-blur supports-[backdrop-filter]:bg-cream/80'
          : 'bg-cream'
      }`}
    >
      {/* Top trust strip */}
      <div className="hidden bg-navy text-cream-100/90 md:block">
        <div className="container flex items-center justify-between gap-4 whitespace-nowrap py-1.5 text-xs">
          <span className="inline-flex items-center gap-1.5">
            <ShieldCheck className="h-3.5 w-3.5 text-gold" aria-hidden />
            {tc('licensed')} · {tc('licenseNo')} {site.licenseNo}
          </span>
          <span className="inline-flex items-center gap-4">
            <span className="hidden lg:inline">{tc('coverageShort')}</span>
            <ContactLink
              method="call"
              href={telLink}
              className="inline-flex items-center gap-1.5 hover:text-gold"
              dir="ltr"
            >
              <Phone className="h-3.5 w-3.5" aria-hidden />
              {site.phoneDisplay}
            </ContactLink>
          </span>
        </div>
      </div>

      {/* Main bar - never wraps: nav collapses to a drawer below xl. */}
      <div className="container flex flex-nowrap items-center justify-between gap-3 py-3">
        <Logo priority className="shrink-0" />

        {/* Desktop nav (xl+) */}
        <nav aria-label="Primary" className="hidden min-w-0 items-center gap-0.5 xl:flex">
          {mainNav.map((item) => {
            const active = pathname === item.path;
            return (
              <Link
                key={item.key}
                href={item.path}
                className={`whitespace-nowrap rounded-full px-3 py-2 text-sm font-medium transition-colors ${
                  active
                    ? 'bg-navy text-cream-100'
                    : 'text-navy-700 hover:bg-navy-50 hover:text-navy'
                }`}
              >
                {t(item.key)}
              </Link>
            );
          })}
        </nav>

        <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
          {/* Language switcher - compact (globe only) on mobile, full label on sm+ */}
          <div className="sm:hidden">
            <LanguageSwitcher compact />
          </div>
          <div className="hidden sm:block">
            <LanguageSwitcher />
          </div>
          {/* Book Now - in the bar on desktop (xl+); on smaller screens it moves
              into the hamburger drawer below. */}
          <ContactLink
            method="whatsapp"
            href={bookHref}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp hidden whitespace-nowrap px-3 py-2 text-sm sm:px-4 sm:py-2.5 xl:inline-flex"
          >
            <MessageCircle className="h-4 w-4" aria-hidden />
            {t('pickDrop')}
          </ContactLink>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? tc('closeMenu') : tc('openMenu')}
            aria-expanded={open}
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-navy-200 text-navy xl:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile / tablet drawer */}
      {open && (
        <div className="border-t border-navy-100 bg-cream xl:hidden">
          <nav aria-label="Mobile" className="container flex flex-col gap-1 py-4">
            {mainNav.map((item) => (
              <Link
                key={item.key}
                href={item.path}
                className="rounded-xl px-4 py-3 text-base font-medium text-navy-700 hover:bg-navy-50"
              >
                {t(item.key)}
              </Link>
            ))}
            <div className="mt-3 flex flex-col gap-2 border-t border-navy-100 pt-4">
              {/* Book Now (WhatsApp) + quick-call live inside the drawer on mobile/tablet. */}
              <ContactLink
                method="whatsapp"
                href={bookHref}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp w-full"
              >
                <MessageCircle className="h-4 w-4" aria-hidden /> {t('pickDrop')}
              </ContactLink>
              <ContactLink method="call" href={telLink} className="btn-outline w-full" dir="ltr">
                <Phone className="h-4 w-4" /> {site.phoneDisplay}
              </ContactLink>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
