'use client';

import { useTranslations } from 'next-intl';
import { ArrowRight } from 'lucide-react';

/**
 * One-tap presets for the city pairs we actually drive most.
 *
 * Filling two free-text fields is the highest-friction moment in the form, and
 * on a phone it is where people give up. A chip fills both at once.
 *
 * City names come from the already-translated `coverage.items.*`, so this adds
 * no new place strings in any locale.
 */
const PAIRS: [string, string][] = [
  ['jeddah', 'makkah'],
  ['makkah', 'madinah'],
  ['madinah', 'makkah'],
  ['makkah', 'jeddah'],
  ['jeddah', 'madinah'],
  ['makkah', 'taif'],
];

export default function RouteChips({
  onPick,
  active,
}: {
  onPick: (pickup: string, dropoff: string, id: string) => void;
  /** Key pair (`"from>to"`) of the applied chip, so it can show as selected.
   *  Must be the KEYS, not the localised names, or it never matches. */
  active: string | null;
}) {
  const tb = useTranslations('booking');
  const tc = useTranslations('coverage');

  return (
    <div>
      <p className="mb-3 text-sm font-medium text-ink-soft">{tb('commonRoutes')}</p>
      <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap">
        {PAIRS.map(([from, to]) => {
          const fromName = tc(`items.${from}.name`);
          const toName = tc(`items.${to}.name`);
          const id = `${from}>${to}`;
          const selected = active === id;
          return (
            <button
              key={id}
              type="button"
              onClick={() => onPick(fromName, toName, id)}
              aria-pressed={selected}
              className={`inline-flex min-h-[44px] items-center justify-center gap-1 rounded-full border px-2.5 py-2 text-xs font-medium transition-colors sm:gap-1.5 sm:px-4 sm:text-sm ${
                selected
                  ? 'border-emerald-600 bg-emerald-600 text-on-surface-inverse'
                  : 'border-emerald-800/15 bg-surface-raised text-ink-soft hover:border-brass-500 hover:text-ink'
              }`}
            >
              <span>{fromName}</span>
              <ArrowRight className="h-3.5 w-3.5 shrink-0 rtl:rotate-180" aria-hidden />
              <span>{toName}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
