import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Script from 'next/script';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { Poppins, Noto_Naskh_Arabic } from 'next/font/google';
import { routing } from '@/i18n/routing';
import { getDir, siteUrl, site } from '@/lib/site';
import { GADS_ID } from '@/lib/gtag';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ChatWidgetLazy from '@/components/chat/ChatWidgetLazy';
import JsonLd from '@/components/seo/JsonLd';
import { organizationSchema } from '@/lib/schema';
import '../globals.css';

// Latin UI + headings.
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
});

// Arabic / Urdu / Persian script.
const notoNaskh = Noto_Naskh_Arabic({
  subsets: ['arabic'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-arabic',
  display: 'swap',
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: site.shortNameEn,
  authors: [{ name: site.nameEn }],
  creator: site.nameEn,
  publisher: site.nameEn,
  category: 'Travel & Transport',
  // Favicon (app/icon.svg) and web manifest (app/manifest.ts) are wired up
  // automatically by Next.js file-based metadata.
};

export const viewport = {
  // Must stay in sync with --emerald-800 in globals.css. A meta tag cannot read
  // a CSS variable, so this is the one place the brand colour is duplicated.
  themeColor: '#0B2E27',
  width: 'device-width',
  initialScale: 1,
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { locale } = params;

  if (!routing.locales.includes(locale)) {
    notFound();
  }

  // Enable static rendering for this locale.
  setRequestLocale(locale);

  const messages = await getMessages();
  const dir = getDir(locale);

  return (
    <html lang={locale} dir={dir} className={`${poppins.variable} ${notoNaskh.variable}`}>
      <head>
        {/* Without JS the IntersectionObserver never fires, so every reveal
            would stay at opacity 0. Content visibility must never depend on
            scripting — this forces them all visible. */}
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important}`}</style>
        </noscript>
      </head>
      <body className="min-h-screen flex flex-col">
        <NextIntlClientProvider messages={messages}>
          <JsonLd data={organizationSchema()} />
          <Header locale={locale} />
          <main className="flex-1">{children}</main>
          <Footer locale={locale} />
          <ChatWidgetLazy />
        </NextIntlClientProvider>

        {/*
          Google Ads base tag — always rendered, no conditional. GADS_ID is a
          hardcoded public constant, so there is no env var that can silently
          switch the tag off at build time.

          This file is the root layout: it renders <html>/<body> and wraps all
          11 locales, so this single copy covers every page on the site.

          afterInteractive (not beforeInteractive) keeps the tag off the critical
          rendering path — page speed is this site's top priority.
        */}
        <Script
          id="google-ads-tag"
          src={`https://www.googletagmanager.com/gtag/js?id=${GADS_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-ads-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GADS_ID}');`}
        </Script>
      </body>
    </html>
  );
}
