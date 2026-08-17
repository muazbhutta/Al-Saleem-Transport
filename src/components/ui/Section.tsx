import type { ReactNode } from 'react';

/**
 * Section surface + header primitives.
 *
 * Vertical rhythm on the old page failed because every section used one of two
 * near-identical surfaces (cream vs white, about 2% of luminance apart), so the
 * alternation was invisible. These map to the four surface tokens, which sit
 * roughly five times further apart and so actually read as different bands.
 *
 * Each surface carries its own text colour, so a section never has to restate
 * it and contrast pairs can't drift out of AA.
 */

export type Surface = 'base' | 'raised' | 'muted' | 'inverse';

const SURFACE: Record<Surface, string> = {
  base: 'bg-surface-base text-on-surface-base',
  raised: 'bg-surface-raised text-on-surface-raised',
  muted: 'bg-surface-muted text-on-surface-muted',
  inverse: 'bg-surface-inverse text-on-surface-inverse',
};

export function Section({
  surface = 'base',
  children,
  className = '',
  id,
}: {
  surface?: Surface;
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`py-20 md:py-28 ${SURFACE[surface]} ${className}`}>
      {children}
    </section>
  );
}

/**
 * Hairline divider between two surfaces. Brass at low alpha, fading out at both
 * ends so it reads as a seam rather than a rule.
 */
export function SurfaceDivider() {
  return (
    <div
      aria-hidden
      className="h-px w-full bg-gradient-to-r from-transparent via-brass-500/25 to-transparent"
    />
  );
}

/**
 * The one section header. Fixed order and type scale so no two sections can
 * introduce themselves differently.
 */
export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = 'start',
  inverse = false,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'start' | 'center';
  inverse?: boolean;
}) {
  const centered = align === 'center';
  return (
    <header
      className={`flex flex-col gap-3 ${centered ? 'items-center text-center' : 'text-start'}`}
    >
      {eyebrow && (
        <p
          className={`text-xs font-semibold uppercase tracking-[0.16em] ${
            inverse ? 'text-brass-300' : 'text-brass-800'
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`text-3xl font-bold leading-tight sm:text-4xl ${
          inverse ? 'text-on-surface-inverse' : 'text-ink'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`max-w-2xl text-base leading-relaxed ${
            inverse ? 'text-on-surface-inverse/75' : 'text-ink-soft'
          } ${centered ? 'mx-auto' : ''}`}
        >
          {subtitle}
        </p>
      )}
    </header>
  );
}
