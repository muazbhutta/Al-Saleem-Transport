import fs from 'node:fs';
import path from 'node:path';
import type { Metadata } from 'next';
import Image from 'next/image';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Info } from 'lucide-react';
import { buildMetadata } from '@/lib/seo';
import { guideCoverBlur, masjidBlur, makkahSkylineBlur } from '@/lib/images';
import { articleSchema, breadcrumbSchema } from '@/lib/schema';
import { site, getDir } from '@/lib/site';
import JsonLd from '@/components/seo/JsonLd';
import PageHeader from '@/components/ui/PageHeader';
import TableOfContents from '@/components/guide/TableOfContents';
import GuideToolbar from '@/components/guide/GuideToolbar';
import { Block } from '@/components/guide/GuideBlocks';
import { getGuide, hasNativeGuide, isMachineDraft } from '@/content/ziyarat';

/**
 * Optional hero photo per chapter. Rendered only when the file actually exists
 * under /public, so a not-yet-added image simply shows no banner (never a
 * broken image). Drop new photos in `public/images/` to enable them.
 */
const CHAPTER_IMAGES: Record<string, { src: string; className: string; blur?: string }> = {
  makkah: { src: '/images/makkah-skyline.jpg', className: 'object-cover object-[center_20%]', blur: makkahSkylineBlur },
  taif: { src: '/images/taif.jpg', className: 'object-cover object-center' },
  madinah: { src: '/images/masjid-nabawi.jpg', className: 'object-cover object-[center_38%]', blur: masjidBlur },
  badr: { src: '/images/badr.jpg', className: 'object-cover object-center' },
};

function chapterImage(id: string) {
  const cfg = CHAPTER_IMAGES[id];
  if (!cfg) return null;
  const abs = path.join(process.cwd(), 'public', cfg.src.replace(/^\//, ''));
  return fs.existsSync(abs) ? cfg : null;
}

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale: params.locale, namespace: 'meta.ziyaratGuide' });
  return buildMetadata({
    locale: params.locale,
    path: '/ziyarat-guide',
    title: t('title'),
    description: t('description'),
    image: '/og/og-ziyarat.jpg',
  });
}

export default async function ZiyaratGuidePage({ params }: { params: { locale: string } }) {
  const { locale } = params;
  setRequestLocale(locale);

  const t = await getTranslations('guide');
  const tn = await getTranslations('nav');
  const tc = await getTranslations('common');
  const tf = await getTranslations('footer');
  const tmeta = await getTranslations('meta.ziyaratGuide');

  const guide = getGuide(locale);
  const native = hasNativeGuide(locale);

  // Metadata for the downloadable PDF document.
  const docMeta = {
    locale,
    dir: getDir(locale),
    title: guide.title,
    intro: guide.intro,
    siteName: site.shortNameEn,
    licenseLine: `${tc('licenseNo')} ${site.licenseNo}`,
    tagline: tf('tagline'),
    verifyNote: t('verifyNote'),
    labels: {
      verse: t('verseLabel'),
      hadith: t('hadithLabel'),
      source: t('sourceLabel'),
      translation: t('translationLabel'),
    },
  };

  const labels = {
    verse: t('verseLabel'),
    hadith: t('hadithLabel'),
    source: t('sourceLabel'),
    translation: t('translationLabel'),
    pending: t('contentPending'),
  };

  const toc = guide.chapters.map((c) => ({ id: c.id, title: c.title }));

  return (
    <>
      <JsonLd
        data={[
          articleSchema({
            locale,
            title: tmeta('title'),
            description: tmeta('description'),
            path: '/ziyarat-guide',
          }),
          breadcrumbSchema(locale, [
            { name: tc('home'), path: '/' },
            { name: tn('ziyaratGuide'), path: '/ziyarat-guide' },
          ]),
        ]}
      />

      <PageHeader
        eyebrow={t('eyebrow')}
        title={t('title')}
        subtitle={t('subtitle')}
        crumbs={[{ name: tn('ziyaratGuide'), path: '/ziyarat-guide' }]}
      />

      <section className="section bg-cream">
        <div className="container">
          {/* Toolbar + language availability note */}
          <div className="no-print mb-8 flex flex-col gap-5 rounded-2xl bg-white p-5 shadow-soft ring-1 ring-navy-100/60 sm:flex-row sm:items-center">
            <Image
              src="/images/guide-cover.jpg"
              alt={t('title')}
              width={132}
              height={185}
              placeholder="blur"
              blurDataURL={guideCoverBlur}
              className="mx-auto h-auto w-28 shrink-0 rounded-xl shadow-soft ring-1 ring-navy-100 sm:mx-0"
            />
            <div className="flex-1">
              <p className="font-semibold text-navy">{t('intro')}</p>
              <p className="mt-1 text-sm text-navy-400">{t('verifyNote')}</p>
            </div>
            <GuideToolbar guide={guide} meta={docMeta} downloadLabel={t('download')} />
          </div>

          {/* Machine-assisted draft notice (shown for machine-translated locales) */}
          {isMachineDraft(locale) && (
            <div className="no-print mb-8 flex gap-3 rounded-2xl border border-gold/50 bg-gold/10 p-4 text-sm text-navy-700">
              <Info className="h-5 w-5 shrink-0 text-gold-dark" aria-hidden />
              <p>{t('machineNotice')}</p>
            </div>
          )}

          {!native && (
            <div className="no-print mb-8 flex gap-3 rounded-2xl border border-gold/40 bg-gold/5 p-4 text-sm text-navy-600">
              <Info className="h-5 w-5 shrink-0 text-gold-dark" aria-hidden />
              <p>
                {tc('chooseLanguage')} - {t('availableIn')}. {t('contentPending')}
              </p>
            </div>
          )}

          {/* TOC + content */}
          <div className="grid gap-10 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-14">
            <aside className="min-w-0 lg:sticky lg:top-28 lg:self-start">
              <TableOfContents items={toc} label={t('onThisPage')} />
            </aside>

            <article className="prose-guide flex min-w-0 flex-col gap-14">
              {guide.chapters.map((chapter) => (
                <section key={chapter.id} id={chapter.id} className="scroll-mt-28">
                  {(() => {
                    const img = chapterImage(chapter.id);
                    return img ? (
                      <div className="relative mb-6 aspect-[16/7] w-full overflow-hidden rounded-2xl shadow-soft">
                        <Image
                          src={img.src}
                          alt={chapter.title}
                          fill
                          loading="lazy"
                          sizes="(max-width: 1024px) 100vw, 760px"
                          placeholder={img.blur ? 'blur' : 'empty'}
                          blurDataURL={img.blur}
                          className={img.className}
                        />
                      </div>
                    ) : null;
                  })()}
                  <h2 className="text-2xl text-navy sm:text-3xl">{chapter.title}</h2>
                  {chapter.intro && (
                    <p className="mt-3 text-lg leading-relaxed text-navy-500">{chapter.intro}</p>
                  )}
                  <div className="mt-6 flex flex-col gap-5">
                    {chapter.blocks.map((block, i) => (
                      <Block key={i} block={block} labels={labels} />
                    ))}
                  </div>
                </section>
              ))}
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
