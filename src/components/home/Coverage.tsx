import fs from 'node:fs';
import path from 'node:path';
import Image from 'next/image';
import { getTranslations } from 'next-intl/server';
import { MapPin } from 'lucide-react';
import { Section, SectionHeader } from '@/components/ui/Section';
import { makkahSkylineBlur, masjidBlur, taifBlur, jeddahBlur, badrBlur } from '@/lib/images';
import Reveal from '@/components/ui/Reveal';

/**
 * Coverage — an image-backed mosaic on the `muted` surface.
 *
 * IMAGE HONESTY: a tile only shows a photograph when a photograph of THAT city
 * exists. There are currently no Taif or Jeddah photos in /public/images, and
 * an earlier version filled those gaps with the nearest available file — which
 * put the Makkah skyline under the label "Taif". Showing the wrong city on a
 * transport company's own coverage map is worse than showing no photo, so a
 * missing file now falls back to a branded emerald panel.
 *
 * To enable a tile, drop the photo at the path below; it is picked up
 * automatically on the next build, exactly like the guide's chapter banners.
 *   public/images/taif.jpg     -> Taif
 *   public/images/jeddah.jpg   -> Jeddah
 */
const cities = [
  { key: 'makkah', img: '/images/makkah-skyline.jpg', blur: makkahSkylineBlur, span: true },
  { key: 'madinah', img: '/images/masjid-nabawi.jpg', blur: masjidBlur, span: false },
  { key: 'jeddah', img: '/images/jeddah.jpg', blur: jeddahBlur, span: false },
  { key: 'taif', img: '/images/taif.jpg', blur: taifBlur, span: false },
  // Badr completes the mosaic: Makkah spans two rows, so four single tiles
  // fill the 3x2 grid exactly. With only three, the last cell sat empty.
  { key: 'badr', img: '/images/badr.jpg', blur: badrBlur, span: false },
] as const;

/** Only returns the path when the file is really on disk. */
function existingImage(src: string): string | null {
  const abs = path.join(process.cwd(), 'public', src.replace(/^\//, ''));
  return fs.existsSync(abs) ? src : null;
}

export default async function Coverage() {
  const t = await getTranslations('coverage');

  return (
    <Section surface="muted">
      <div className="container flex flex-col gap-12">
        <SectionHeader eyebrow={t('eyebrow')} title={t('title')} subtitle={t('subtitle')} />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2">
          {cities.map((city, i) => {
            const img = existingImage(city.img);
            return (
              <Reveal
                key={city.key}
                delay={i * 0.06}
                className={city.span ? 'lg:row-span-2' : ''}
              >
                <article
                  className={`group relative h-full min-h-[220px] overflow-hidden rounded-2xl shadow-card ${
                    city.span ? 'lg:min-h-[460px]' : ''
                  } ${img ? '' : 'bg-gradient-to-br from-emerald-700 to-emerald-950'}`}
                >
                  {img && (
                    <Image
                      src={img}
                      alt=""
                      fill
                      loading="lazy"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      placeholder={city.blur ? 'blur' : 'empty'}
                      blurDataURL={city.blur}
                      className="object-cover transition-transform duration-500 motion-safe:group-hover:scale-105"
                    />
                  )}

                  {/* Scrim only over photography; the gradient panel needs none */}
                  {img && (
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-emerald-950/90 via-emerald-950/45 to-emerald-950/10"
                      aria-hidden
                    />
                  )}

                  {/* Subtle geometric texture so a photo-less tile still has depth */}
                  {!img && (
                    <div
                      className="absolute inset-0 opacity-[0.12]"
                      aria-hidden
                      style={{
                        backgroundImage:
                          'radial-gradient(circle at 75% 25%, rgb(var(--brass-500)) 0, transparent 55%)',
                      }}
                    />
                  )}

                  <div className="absolute inset-x-0 bottom-0 p-5 text-start">
                    <MapPin className="h-6 w-6 text-brass-300" strokeWidth={1.75} aria-hidden />
                    <h3 className="mt-2 text-xl font-semibold text-on-surface-inverse">
                      {t(`items.${city.key}.name`)}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-on-surface-inverse/80">
                      {t(`items.${city.key}.desc`)}
                    </p>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
