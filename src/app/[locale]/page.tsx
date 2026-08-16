import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { buildMetadata } from '@/lib/seo';
import { serviceSchema } from '@/lib/schema';
import JsonLd from '@/components/seo/JsonLd';
import Hero from '@/components/home/Hero';
import TrustBar from '@/components/home/TrustBar';
import WhyTrustUs from '@/components/home/WhyTrustUs';
import HowItWorks from '@/components/home/HowItWorks';
import Services from '@/components/home/Services';
import Fleet from '@/components/home/Fleet';
import Coverage from '@/components/home/Coverage';
import ZiyaratTimings from '@/components/home/ZiyaratTimings';
import GuideTeaser from '@/components/home/GuideTeaser';
import Testimonials from '@/components/home/Testimonials';
import { getTimings } from '@/content/timings';
import FaqTeaser from '@/components/home/FaqTeaser';
import CtaBanner from '@/components/home/CtaBanner';

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale: params.locale, namespace: 'meta.home' });
  return buildMetadata({
    locale: params.locale,
    path: '/',
    title: t('title'),
    description: t('description'),
  });
}

export default async function HomePage({ params }: { params: { locale: string } }) {
  setRequestLocale(params.locale);
  const ts = await getTranslations('services');

  // Service schema for each core service.
  const serviceKeys = ['airport', 'hotel', 'ziyarat', 'umrah', 'intercity', 'custom'];
  const services = serviceKeys.map((key) =>
    serviceSchema({
      name: ts(`items.${key}.title`),
      description: ts(`items.${key}.desc`),
      path: '/pick-drop',
    }),
  );

  return (
    <>
      <JsonLd data={services} />
      <Hero />
      <TrustBar />
      <WhyTrustUs />
      <Services />
      <HowItWorks />
      <Fleet />
      <Coverage />
      <ZiyaratTimings content={getTimings(params.locale)} />
      <GuideTeaser />
      <Testimonials />
      <FaqTeaser />
      <CtaBanner />
    </>
  );
}
