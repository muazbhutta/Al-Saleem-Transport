import fs from 'node:fs';
import path from 'node:path';
import type { Metadata } from 'next';
import Image from 'next/image';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Info } from 'lucide-react';
import { buildMetadata } from '@/lib/seo';
import { guideCoverBlur, masjidBlur, makkahSkylineBlur } from '@/lib/images';
import { articleSchema, breadcrumbSchema, ziyaratPlacesSchema } from '@/lib/schema';
import { site, getDir } from '@/lib/site';
import JsonLd from '@/components/seo/JsonLd';
import PageHeader from '@/components/ui/PageHeader';
import { Section, SectionHeader, SurfaceDivider } from '@/components/ui/Section';
import TableOfContents from '@/components/guide/TableOfContents';
import GuideToolbar from '@/components/guide/GuideToolbar';
import { Fragment } from 'react';
import { Block } from '@/components/guide/GuideBlocks';
import { locationSlotsForBlocks, extractPlaceEntries } from '@/content/ziyarat/places';
import ZiyaratLocationCard from '@/components/ziyarat/ZiyaratLocationCard';
import ZiyaratLocationsIndex from '@/components/ziyarat/ZiyaratLocationsIndex';
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

/**
 * Surface cycle for the chapter bands.
 *
 * The guide used to be a single `bg-surface-base` slab twenty screens tall, which read
 * as one undifferentiated wall. Each chapter is now its own full-width band and
 * the cycle guarantees no two adjacent bands share a surface, so the seam
 * between chapters is visible without any decoration.
 */
const CHAPTER_SURFACES = ['base', 'raised', 'muted'] as const;

/**
 * Chapter titles are authored as "Chapter 1 · Makkah Mukarramah - Introduction"
 * in all eleven locales, with the final chapter ("Conclusion") carrying no
 * separator. Splitting on the interpunct fills the design system's eyebrow +
 * title slots without inventing a translated string, and stops every rail chip
 * from opening with the same "Chapter N ·" prefix.
 *
 * Presentation only: the authored text is re-laid-out, never rewritten. A title
 * with no separator falls through as the heading with no eyebrow.
 */
const CHAPTER_SEPARATOR = '·';

function splitChapterTitle(title: string): { label?: string; name: string } {
  const at = title.indexOf(CHAPTER_SEPARATOR);
  if (at === -1) return { name: title };
  return {
    label: title.slice(0, at).trim(),
    name: title.slice(at + CHAPTER_SEPARATOR.length).trim(),
  };
}

/**
 * Rail chips get the bare subject: on top of the "Chapter N ·" prefix, the
 * trailing qualifier ("- Introduction", "- Sacred Sites", and its equivalent in
 * every locale) is dropped too. Repeated on ten chips it is pure noise and
 * pushes the actual place names off the end of the rail. The chapter heading
 * still carries the authored title in full.
 */
const QUALIFIER = /\s[-–—]\s.*$/;

function chapterNavLabel(title: string): string {
  return splitChapterTitle(title).name.replace(QUALIFIER, '').trim();
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
    imageAlt:
      'The Complete Ziyarat Guide by Al-Saleem Transport — covering Makkah, Umrah, Hajj, Madinah, Taif and Badr, readable and downloadable in every language',
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
  const tloc = await getTranslations('ziyaratLocation');

  const guide = getGuide(locale);
  // One pass over the guide, shared by the JSON-LD and the locations index.
  const placeEntries = extractPlaceEntries(guide.chapters);
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

  const toc = guide.chapters.map((c) => ({ id: c.id, title: chapterNavLabel(c.title) }));

  return (
    <>
      <JsonLd
        data={[
          ...ziyaratPlacesSchema(locale, placeEntries),
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

      {/* Opening band: what the guide is, the caveat, and the download. */}
      <Section surface="raised">
        <div className="container flex flex-col gap-8">
          <div className="mx-auto flex w-full max-w-4xl flex-col items-center gap-8 sm:flex-row sm:items-start sm:gap-10">
            <Image
              src="/images/guide-cover.jpg"
              alt={t('title')}
              width={264}
              height={370}
              placeholder="blur"
              blurDataURL={guideCoverBlur}
              className="h-auto w-36 shrink-0 rounded-2xl shadow-card ring-1 ring-emerald-800/10 sm:w-44"
            />
            <div className="flex min-w-0 flex-col gap-4 text-start">
              <p className="text-lg font-medium leading-relaxed text-ink sm:text-xl">
                {t('intro')}
              </p>
              <p className="text-sm leading-relaxed text-ink-soft">{t('verifyNote')}</p>
              <GuideToolbar
                guide={guide}
                meta={docMeta}
                downloadLabel={t('download')}
                locationLabels={{
                  title: tloc('title'),
                  city: tloc('cityLabel'),
                  distance: tloc('distanceLabel'),
                  coordinates: tloc('pdfCoordinates'),
                  scan: tloc('scanForDirections'),
                  approx: tloc('approx'),
                  km: tloc('km'),
                  cityNames: {
                    makkah: tloc('city.makkah'),
                    madinah: tloc('city.madinah'),
                    taif: tloc('city.taif'),
                    jeddah: tloc('city.jeddah'),
                  },
                }}
              />
            </div>
          </div>

          {/* Machine-assisted draft notice (shown for machine-translated locales) */}
          {isMachineDraft(locale) && (
            <div className="no-print mx-auto flex w-full max-w-4xl gap-3 rounded-2xl border border-brass-500/45 bg-brass-500/10 p-4 text-start text-sm leading-relaxed text-ink">
              <Info className="mt-0.5 h-5 w-5 shrink-0 text-brass-700" aria-hidden />
              <p>{t('machineNotice')}</p>
            </div>
          )}

          {!native && (
            <div className="no-print mx-auto flex w-full max-w-4xl gap-3 rounded-2xl border border-emerald-800/10 bg-emerald-50 p-4 text-start text-sm leading-relaxed text-ink-soft">
              <Info className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" aria-hidden />
              <p>
                {tc('chooseLanguage')} - {t('availableIn')}. {t('contentPending')}
              </p>
            </div>
          )}
        </div>
      </Section>

      <TableOfContents items={toc} label={t('onThisPage')} />

      {/* One full-width band per chapter, surfaces cycling so no two adjacent
          bands match. The reading column is capped at max-w-3xl — the bands go
          edge to edge, the prose does not. */}
      {guide.chapters.map((chapter, ci) => {
        const img = chapterImage(chapter.id);
        const slots = locationSlotsForBlocks(chapter.blocks);
        const { label, name } = splitChapterTitle(chapter.title);
        return (
          <Fragment key={chapter.id}>
            <SurfaceDivider />
            <Section
              id={chapter.id}
              surface={CHAPTER_SURFACES[ci % CHAPTER_SURFACES.length]}
              className="guide-anchor"
            >
              <div className="container">
                {/* text-start at every width on purpose: the site centres body
                    copy under 640px, which is fine for short marketing cards but
                    unreadable for a guide this long. */}
                <div className="prose-guide mx-auto flex max-w-3xl flex-col gap-8 text-start">
                  {img && (
                    <div className="relative aspect-[16/7] w-full overflow-hidden rounded-3xl shadow-card">
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
                  )}

                  <SectionHeader eyebrow={label} title={name} subtitle={chapter.intro} />

                  <div className="flex flex-col gap-6">
                    {chapter.blocks.map((block, i) => {
                      const place = slots.get(i);
                      return (
                        <Fragment key={i}>
                          <Block block={block} labels={labels} />
                          {place && <ZiyaratLocationCard placeId={place.id} />}
                        </Fragment>
                      );
                    })}
                  </div>
                </div>
              </div>
            </Section>
          </Fragment>
        );
      })}

      <SurfaceDivider />
      <Section surface="raised">
        <div className="container">
          <div className="mx-auto max-w-3xl text-start">
            <ZiyaratLocationsIndex entries={placeEntries} />
          </div>
        </div>
      </Section>
    </>
  );
}
