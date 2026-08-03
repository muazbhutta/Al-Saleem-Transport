import Image from 'next/image';
import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/routing';
import { ChevronRight, Home } from 'lucide-react';

export type Crumb = { name: string; path: string };

/**
 * Inner-page hero band with breadcrumb trail. Optionally takes a background
 * photo (with a strong dark overlay so the breadcrumb + title stay readable).
 */
export default async function PageHeader({
  eyebrow,
  title,
  subtitle,
  crumbs,
  image,
  imageAlt,
  imageBlur,
  imagePosition = 'center',
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  crumbs: Crumb[];
  image?: string;
  imageAlt?: string;
  imageBlur?: string;
  imagePosition?: string;
}) {
  const tc = await getTranslations('common');

  return (
    <section
      className={`page-header relative overflow-hidden bg-navy text-cream-100 ${
        image ? 'flex items-end min-h-[320px] sm:min-h-[380px] lg:min-h-[440px]' : ''
      }`}
    >
      {image && (
        <>
          <Image
            src={image}
            alt={imageAlt ?? ''}
            fill
            priority
            sizes="100vw"
            placeholder={imageBlur ? 'blur' : undefined}
            blurDataURL={imageBlur}
            className="object-cover"
            style={{ objectPosition: imagePosition }}
          />
          {/* Vertical scrim only - the FULL WIDTH of the photo stays visible;
              just the bottom darkens so the title/CTA stay readable. */}
          <div
            className="absolute inset-0 bg-gradient-to-t from-navy-900/92 via-navy-900/35 to-navy-900/12"
            aria-hidden
          />
        </>
      )}
      <div
        className="absolute inset-0 opacity-[0.12]"
        aria-hidden
        style={{
          backgroundImage: 'radial-gradient(55% 55% at 88% 25%, #C9A24B 0, transparent 60%)',
        }}
      />
      <div className="container relative w-full py-14 sm:py-16">
        <nav aria-label="Breadcrumb" className="mb-5">
          <ol className="flex flex-wrap items-center gap-1.5 text-sm text-cream-100/70">
            <li>
              <Link href="/" className="inline-flex items-center gap-1 hover:text-gold">
                <Home className="h-4 w-4" aria-hidden />
                <span className="sr-only">{tc('home')}</span>
              </Link>
            </li>
            {crumbs.map((c, i) => {
              const last = i === crumbs.length - 1;
              return (
                <li key={c.path} className="inline-flex items-center gap-1.5">
                  <ChevronRight className="h-4 w-4 opacity-50 rtl:rotate-180" aria-hidden />
                  {last ? (
                    <span className="text-gold-light" aria-current="page">
                      {c.name}
                    </span>
                  ) : (
                    <Link href={c.path} className="hover:text-gold">
                      {c.name}
                    </Link>
                  )}
                </li>
              );
            })}
          </ol>
        </nav>

        {eyebrow && (
          <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-gold-light ring-1 ring-gold/30">
            {eyebrow}
          </span>
        )}
        <h1
          className={`mt-4 text-3xl font-bold text-cream-100 sm:text-4xl lg:text-5xl ${
            image ? '[text-shadow:0_2px_14px_rgba(7,30,25,0.7)]' : ''
          }`}
        >
          {title}
        </h1>
        {subtitle && (
          <p
            className={`mt-4 max-w-2xl text-cream-100/80 ${
              image ? '[text-shadow:0_1px_10px_rgba(7,30,25,0.7)]' : ''
            }`}
          >
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
