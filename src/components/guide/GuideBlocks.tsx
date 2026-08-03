import { BookOpen, Quote, Info, ListOrdered, AlertTriangle } from 'lucide-react';
import type { GuideBlock } from '@/content/ziyarat/types';

type Labels = {
  verse: string;
  hadith: string;
  source: string;
  translation: string;
  pending: string;
};

/** Renders a single guide block. Styling matches the spiritual-luxury theme. */
export function Block({ block, labels }: { block: GuideBlock; labels: Labels }) {
  switch (block.type) {
    case 'p':
      return <p className="leading-relaxed text-navy-600">{block.text}</p>;

    case 'h3':
      return (
        <h3 id={block.id} className="scroll-mt-28 border-s-4 border-gold ps-3 text-xl text-navy">
          {block.text}
        </h3>
      );

    case 'h4':
      return <h4 className="text-lg font-semibold text-teal-dark">{block.text}</h4>;

    case 'note':
      if (block.variant === 'warning') {
        return (
          <div className="flex gap-3 rounded-xl border border-maroon-200 bg-maroon-50/70 p-4 text-sm text-maroon-600">
            <AlertTriangle className="h-5 w-5 shrink-0" aria-hidden />
            <p>{block.text}</p>
          </div>
        );
      }
      return (
        <div className="flex gap-3 rounded-xl border border-navy-100 bg-navy-50/60 p-4 text-sm text-navy-600">
          <Info className="h-5 w-5 shrink-0 text-teal-dark" aria-hidden />
          <p>{block.text}</p>
        </div>
      );

    case 'callout':
      return (
        <div className="rounded-2xl border-s-4 border-gold bg-gold/5 p-5">
          {block.title && <p className="mb-1 font-semibold text-navy">{block.title}</p>}
          <p className="text-sm leading-relaxed text-navy-600">{block.text}</p>
        </div>
      );

    case 'list':
      return block.ordered ? (
        <ol className="list-decimal space-y-1.5 ps-6 text-navy-600 marker:font-semibold marker:text-maroon">
          {block.items.map((item, i) => (
            <li key={i} className="leading-relaxed ps-1">
              {item}
            </li>
          ))}
        </ol>
      ) : (
        <ul className="list-disc space-y-1.5 ps-6 text-navy-600 marker:text-gold-dark">
          {block.items.map((item, i) => (
            <li key={i} className="leading-relaxed ps-1">
              {item}
            </li>
          ))}
        </ul>
      );

    case 'verse':
      return (
        <figure className="rounded-2xl bg-gradient-to-br from-navy to-navy-800 p-6 text-cream-100 shadow-soft">
          <figcaption className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gold-light">
            <BookOpen className="h-4 w-4" aria-hidden />
            {labels.verse}
          </figcaption>
          {block.pending ? (
            <p className="text-sm italic text-cream-100/60">{labels.pending}</p>
          ) : (
            <>
              {block.arabic && (
                <p dir="rtl" lang="ar" className="font-arabic text-2xl leading-loose text-cream-100">
                  {block.arabic}
                </p>
              )}
              {block.translation && (
                <p className="mt-3 leading-relaxed text-cream-100/85">
                  <span className="text-cream-100/60">{labels.translation}: </span>
                  {block.translation}
                </p>
              )}
            </>
          )}
          {block.reference && <p className="mt-3 text-sm text-gold-light">— {block.reference}</p>}
        </figure>
      );

    case 'hadith':
      return (
        <figure className="rounded-2xl border border-teal/30 bg-teal/5 p-6">
          <figcaption className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-teal-dark">
            <Quote className="h-4 w-4 rtl:scale-x-[-1]" aria-hidden />
            {block.badge ?? labels.hadith}
          </figcaption>
          {block.pending ? (
            <p className="text-sm italic text-navy-400">{labels.pending}</p>
          ) : (
            <>
              {block.arabic && (
                <p dir="rtl" lang="ar" className="mb-3 font-arabic text-xl leading-loose text-navy-800">
                  {block.arabic}
                </p>
              )}
              {block.text && <blockquote className="leading-relaxed text-navy-700">{block.text}</blockquote>}
            </>
          )}
          {block.source && (
            <p className="mt-3 text-sm text-teal-dark">
              {labels.source}: {block.source}
            </p>
          )}
        </figure>
      );

    case 'steps':
      return (
        <ol className="flex flex-col gap-4">
          {block.items.map((item, i) => (
            <li key={i} className="flex gap-4">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-maroon text-sm font-bold text-cream-100">
                {i + 1}
              </span>
              <div className="pt-1">
                <p className="font-semibold text-navy">{item.title}</p>
                {item.text && <p className="mt-1 text-sm leading-relaxed text-navy-600">{item.text}</p>}
              </div>
            </li>
          ))}
        </ol>
      );

    case 'table':
      return (
        <figure className="overflow-x-auto">
          {block.caption && (
            <figcaption className="mb-2 flex items-center gap-2 text-sm font-medium text-navy-500">
              <ListOrdered className="h-4 w-4 text-teal-dark" aria-hidden />
              {block.caption}
            </figcaption>
          )}
          <table className="w-full min-w-[28rem] border-collapse overflow-hidden rounded-xl text-sm shadow-soft">
            <thead>
              <tr className="bg-navy text-cream-100">
                {block.columns.map((col) => (
                  <th key={col} className="px-4 py-3 text-start font-semibold">
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, ri) => (
                <tr key={ri} className={ri % 2 ? 'bg-cream-300/50' : 'bg-white'}>
                  {row.map((cell, ci) => (
                    <td key={ci} className="border-t border-navy-100 px-4 py-3 text-navy-700">
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
        <div className="rounded-2xl bg-white p-5 shadow-soft ring-1 ring-navy-100/60">
          <p className="mb-3 font-display text-lg font-semibold text-navy">{block.title}</p>
          <div className="flex flex-col gap-3">
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
