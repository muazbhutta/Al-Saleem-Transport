import type { ReactNode } from 'react';
import type { LucideIcon } from 'lucide-react';
import { Link } from '@/i18n/routing';

/**
 * The single card primitive. Every grid on the site uses this.
 *
 * The old grids each had bespoke markup, so padding, icon size, title weight
 * and card height all drifted apart. Here the slots are fixed and the type
 * scale is locked, which is what makes a row of cards line up:
 *
 *   eyebrow? | icon? | title | meta? | body | action?
 *
 * Equal heights come from `h-full flex flex-col` plus the parent grid; the
 * action is pinned to the bottom with `mt-auto` so cards with shorter body
 * text still align their buttons.
 *
 * RTL: all text is `text-start`, spacing uses logical properties only.
 */

export type CardProps = {
  title: string;
  body?: string;
  eyebrow?: string;
  icon?: LucideIcon;
  /** Small factual line under the title (capacity, duration, count …). */
  meta?: string;
  /** Internal route — renders the whole card as a link. */
  href?: string;
  /** External URL — opens in a new tab. */
  externalHref?: string;
  /** Visible call to action, pinned to the card's bottom edge. */
  actionLabel?: string;
  /** Escape hatch for the rare card that needs extra content. */
  children?: ReactNode;
  /**
   * Body clamp. Defaults to 2 lines so one long translation can never make a
   * card taller than its neighbours. Set `none` only when the grid is 1-up.
   */
  clamp?: 2 | 3 | 'none';
};

const CLAMP: Record<string, string> = {
  '2': 'line-clamp-2',
  '3': 'line-clamp-3',
  none: '',
};

export default function Card({
  title,
  body,
  eyebrow,
  icon: Icon,
  meta,
  href,
  externalHref,
  actionLabel,
  children,
  clamp = 2,
}: CardProps) {
  const interactive = Boolean(href || externalHref);

  const inner = (
    <>
      {eyebrow && (
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-brass-600">
          {eyebrow}
        </p>
      )}

      {Icon && (
        /* 48px slot, identical stroke and position on every card */
        <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-700 transition-transform duration-200 group-hover:scale-105">
          <Icon className="h-6 w-6" strokeWidth={1.75} aria-hidden />
        </span>
      )}

      <h3 className="text-lg font-semibold leading-snug text-ink">{title}</h3>

      {meta && <p className="mt-1 text-sm font-medium text-emerald-600">{meta}</p>}

      {body && (
        <p className={`mt-2 text-sm leading-relaxed text-ink-soft ${CLAMP[String(clamp)]}`}>
          {body}
        </p>
      )}

      {children}

      {actionLabel && (
        <span className="mt-auto pt-5 text-sm font-semibold text-emerald-700 transition-colors group-hover:text-brass-600">
          {actionLabel}
          <span className="ms-1.5 inline-block transition-transform duration-200 group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5">
            →
          </span>
        </span>
      )}
    </>
  );

  const className = [
    'group flex h-full flex-col text-start',
    'rounded-2xl border border-emerald-800/10 bg-surface-raised p-6 md:p-7',
    'shadow-card',
    interactive
      ? 'transition duration-200 motion-safe:hover:-translate-y-0.5 hover:border-brass-500/50 hover:shadow-card-hover'
      : '',
  ]
    .filter(Boolean)
    .join(' ');

  if (href) {
    return (
      <Link href={href} className={className}>
        {inner}
      </Link>
    );
  }

  if (externalHref) {
    return (
      <a href={externalHref} target="_blank" rel="noopener noreferrer" className={className}>
        {inner}
      </a>
    );
  }

  return <div className={className}>{inner}</div>;
}
