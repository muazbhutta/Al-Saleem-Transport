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
  const t = await getTranslations({ locale: params.locale, namespace: 'meta.terms' });
  return buildMetadata({
    locale: params.locale,
    path: '/terms',
    title: t('title'),
    description: t('description'),
  });
}

export default async function TermsPage({ params }: { params: { locale: string } }) {
  setRequestLocale(params.locale);
  const t = await getTranslations('legal');
  const tn = await getTranslations('nav');
  const tc = await getTranslations('common');

  return (
    <>
      <JsonLd
        data={breadcrumbSchema(params.locale, [
          { name: tc('home'), path: '/' },
          { name: tn('terms'), path: '/terms' },
        ])}
      />
      <PageHeader title={t('terms.title')} crumbs={[{ name: tn('terms'), path: '/terms' }]} />
      <LegalArticle type="terms" />
    </>
  );
}
