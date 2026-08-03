import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { Poppins, Noto_Naskh_Arabic } from 'next/font/google';
import { routing } from '@/i18n/routing';
import { getDir, siteUrl, site } from '@/lib/site';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/layout/WhatsAppButton';
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
  // Favicon (app/icon.svg) and web manifest (app/manifest.ts) are wired up
  // automatically by Next.js file-based metadata.
};

export const viewport = {
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
      <body className="min-h-screen flex flex-col">
        <NextIntlClientProvider messages={messages}>
          <JsonLd data={organizationSchema()} />
          <Header locale={locale} />
          <main className="flex-1">{children}</main>
          <Footer locale={locale} />
          <WhatsAppButton />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
