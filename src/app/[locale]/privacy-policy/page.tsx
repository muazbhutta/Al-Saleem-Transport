import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { buildMetadata } from '@/lib/seo';
import { breadcrumbSchema } from '@/lib/schema';
import JsonLd from '@/components/seo/JsonLd';
import PageHeader from '@/components/ui/PageHeader';
import LegalArticle from '@/components/legal/LegalArticle';

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale: params.locale, namespace: 'meta.privacy' });
  return buildMetadata({
    locale: params.locale,
    path: '/privacy-policy',
    title: t('title'),
    description: t('description'),
  });
}

export default async function PrivacyPage({ params }: { params: { locale: string } }) {
  setRequestLocale(params.locale);
  const t = await getTranslations('legal');
  const tn = await getTranslations('nav');
  const tc = await getTranslations('common');

  return (
    <>
      <JsonLd
        data={breadcrumbSchema(params.locale, [
          { name: tc('home'), path: '/' },
          { name: tn('privacy'), path: '/privacy-policy' },
        ])}
      />
      <PageHeader
        title={t('privacy.title')}
        crumbs={[{ name: tn('privacy'), path: '/privacy-policy' }]}
      />
      <LegalArticle type="privacy" />
    </>
  );
}
