import { BookOpen, Quote, Info, ListOrdered, AlertTriangle } from 'lucide-react';
import type { GuideBlock } from '@/content/ziyarat/types';

type Labels = {
  verse: string;
  hadith: string;
  source: string;
  translation: string;
  pending: string;
};

/**
 * Renders a single guide block.
 *
 * Colours come only from the design tokens (emerald / brass / ink / surface),
 * so a block looks right on any of the surfaces a chapter band can use. The
 * two quoted forms are deliberately opposites: a verse is an inverse panel —
 * the darkest thing on the page — while a hadith is a light emerald card, so
 * the reader can tell them apart at a glance without reading the label.
 *
 * Brass is the only warning colour available in the palette; it is reserved
 * for `note variant="warning"` and for the accent rules, nothing else.
 */
export function Block({ block, labels }: { block: GuideBlock; labels: Labels }) {
  switch (block.type) {
    case 'p':
      return <p className="leading-relaxed text-ink-soft">{block.text}</p>;

    case 'h3':
      return (
        <h3
          id={block.id}
          className="guide-anchor border-s-[3px] border-brass-500 ps-4 text-xl font-semibold text-ink max-sm:border-s-0 max-sm:ps-0"
        >
          {block.text}
        </h3>
      );

    case 'h4':
      return <h4 className="text-lg font-semibold text-emerald-700">{block.text}</h4>;

    case 'note':
      if (block.variant === 'warning') {
        return (
          <div className="flex gap-3 rounded-2xl border border-brass-500/45 bg-brass-500/10 p-4 text-sm leading-relaxed text-ink">
            <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-brass-700" aria-hidden />
            <p>{block.text}</p>
          </div>
        );
      }
      return (
        <div className="flex gap-3 rounded-2xl border border-emerald-800/10 bg-emerald-50 p-4 text-sm leading-relaxed text-ink-soft">
          <Info className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" aria-hidden />
          <p>{block.text}</p>
        </div>
      );

    case 'callout':
      return (
        <div className="rounded-2xl border border-brass-500/25 border-s-[3px] border-s-brass-500 bg-brass-500/[0.07] p-5">
          {block.title && <p className="mb-1.5 font-semibold text-ink">{block.title}</p>}
          <p className="text-sm leading-relaxed text-ink-soft">{block.text}</p>
        </div>
      );

    case 'list':
      /* Markers hang outside so every wrapped line stays flush with the text
         above it. Stated explicitly rather than left to the browser default:
         a global `list-style-position: inside` is exactly what used to break
         this, and naming it here stops that regressing silently. */
      return block.ordered ? (
        <ol className="list-outside list-decimal space-y-2 ps-6 text-ink-soft marker:font-semibold marker:text-emerald-600">
          {block.items.map((item, i) => (
            <li key={i} className="ps-1 leading-relaxed">
              {item}
            </li>
          ))}
        </ol>
      ) : (
        <ul className="list-outside list-disc space-y-2 ps-6 text-ink-soft marker:text-brass-600">
          {block.items.map((item, i) => (
            <li key={i} className="ps-1 leading-relaxed">
              {item}
            </li>
          ))}
        </ul>
      );

    case 'verse':
      return (
        <figure className="rounded-2xl bg-gradient-to-br from-emerald-800 to-emerald-950 p-6 text-on-surface-inverse shadow-card ring-1 ring-brass-500/20 sm:p-7">
          <figcaption className="mb-4 inline-flex items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-brass-300">
            <BookOpen className="h-4 w-4" aria-hidden />
            {labels.verse}
          </figcaption>
          {block.pending ? (
            <p className="text-sm italic text-on-surface-inverse/60">{labels.pending}</p>
          ) : (
            <>
              {block.arabic && (
                <p
                  dir="rtl"
                  lang="ar"
                  className="font-arabic text-2xl leading-loose text-on-surface-inverse"
                >
                  {block.arabic}
                </p>
              )}
              {block.translation && (
                <p className="mt-4 leading-relaxed text-on-surface-inverse/85">
                  <span className="text-on-surface-inverse/55">{labels.translation}: </span>
                  {block.translation}
                </p>
              )}
            </>
          )}
          {block.reference && (
            <p className="mt-4 border-t border-brass-500/20 pt-3 text-sm font-medium text-brass-300">
              {block.reference}
            </p>
          )}
        </figure>
      );

    case 'hadith':
      return (
        <figure className="rounded-2xl border border-emerald-800/10 border-s-[3px] border-s-emerald-600 bg-emerald-50 p-6 sm:p-7">
          <figcaption className="mb-4 inline-flex items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-emerald-700">
            <Quote className="h-4 w-4 rtl:scale-x-[-1]" aria-hidden />
            {block.badge ?? labels.hadith}
          </figcaption>
          {block.pending ? (
            <p className="text-sm italic text-ink-faint">{labels.pending}</p>
          ) : (
            <>
              {block.arabic && (
                <p dir="rtl" lang="ar" className="mb-4 font-arabic text-xl leading-loose text-ink">
                  {block.arabic}
                </p>
              )}
              {block.text && (
                <blockquote className="leading-relaxed text-ink-soft">{block.text}</blockquote>
              )}
            </>
          )}
          {block.source && (
            <p className="mt-4 border-t border-emerald-800/10 pt-3 text-sm font-medium text-emerald-700">
              {labels.source}: {block.source}
            </p>
          )}
        </figure>
      );

    case 'steps':
      return (
        <ol className="flex flex-col gap-5">
          {block.items.map((item, i) => (
            <li key={i} className="flex gap-4">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-800 text-sm font-bold text-on-surface-inverse">
                {i + 1}
              </span>
              <div className="min-w-0 pt-1">
                <p className="font-semibold text-ink">{item.title}</p>
                {item.text && (
                  <p className="mt-1 text-sm leading-relaxed text-ink-soft">{item.text}</p>
                )}
              </div>
            </li>
          ))}
        </ol>
      );

    case 'table':
      return (
        <figure className="no-scrollbar overflow-x-auto">
          {block.caption && (
            <figcaption className="mb-2.5 flex items-center gap-2 text-sm font-medium text-ink-soft">
              <ListOrdered className="h-4 w-4 text-brass-600" aria-hidden />
              {block.caption}
            </figcaption>
          )}
          <table className="w-full min-w-[28rem] border-collapse overflow-hidden rounded-2xl text-sm shadow-card max-sm:min-w-0 max-sm:text-xs">
            <thead>
              <tr className="bg-emerald-800 text-on-surface-inverse">
                {block.columns.map((col) => (
                  <th
                    key={col}
                    className="px-4 py-3 text-start font-semibold max-sm:px-2 max-sm:py-2 max-sm:text-center"
                  >
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, ri) => (
                <tr key={ri} className={ri % 2 ? 'bg-surface-muted/70' : 'bg-surface-raised'}>
                  {row.map((cell, ci) => (
                    <td
                      key={ci}
                      className="border-t border-emerald-800/10 px-4 py-3 text-ink-soft max-sm:px-2 max-sm:py-2"
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </figure>
      );

    case 'infocard':
      return (
        <div className="rounded-2xl border border-emerald-800/10 bg-surface-raised p-6 shadow-card md:p-7">
          <p className="mb-4 font-display text-lg font-semibold text-ink">{block.title}</p>
          <div className="flex flex-col gap-4">
            {block.blocks.map((b, i) => (
              <Block key={i} block={b} labels={labels} />
            ))}
          </div>
        </div>
      );

    default:
      return null;
  }
}
