'use client';

import { useState, useRef, useEffect } from 'react';
import { Clock } from 'lucide-react';

const pad = (n: number) => String(n).padStart(2, '0');

/**
 * Theme-matched time picker - replaces the browser's un-stylable native
 * <input type="time"> popup. Three columns (hour / minute / AM-PM) in the
 * emerald + gold palette. Emits a 24h "HH:MM" string so the booking message
 * format is unchanged.
 */
export default function TimeField({
  id,
  value,
  onChange,
  placeholder = '--:-- --',
  className = '',
}: {
  id?: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const has = /^\d{1,2}:\d{2}$/.test(value);
  const [hh, mm] = has ? value.split(':').map(Number) : [0, 0];
  const period: 'AM' | 'PM' = hh >= 12 ? 'PM' : 'AM';
  const h12 = has ? ((hh + 11) % 12) + 1 : null;
  const min = has ? mm : null;
  const display = has ? `${pad(h12 as number)}:${pad(min as number)} ${period}` : placeholder;

  useEffect(() => {
    function onDoc(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false);
    }
    document.addEventListener('mousedown', onDoc);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDoc);
      document.removeEventListener('keydown', onKey);
    };
  }, []);

  function emit(nextH12?: number, nextMin?: number, nextPeriod?: 'AM' | 'PM') {
    const p = nextPeriod ?? period;
    const h = nextH12 ?? h12 ?? 12;
    const m = nextMin ?? min ?? 0;
    const h24 = (h % 12) + (p === 'PM' ? 12 : 0);
    onChange(`${pad(h24)}:${pad(m)}`);
  }

  const cell = (selected: boolean) =>
    `w-full shrink-0 rounded-lg px-2 py-2 text-center text-sm transition ${
      selected ? 'bg-emerald-600 font-semibold text-on-surface-inverse' : 'text-ink-soft hover:bg-emerald-50'
    }`;
  const colCls = 'flex max-h-52 flex-1 flex-col gap-0.5 overflow-y-auto no-scrollbar';

  return (
    <div className="relative" ref={ref}>
      <button
        id={id}
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="dialog"
        aria-expanded={open}
        className={`${className} flex items-center justify-between text-start`}
      >
        <span className={has ? 'text-ink' : 'text-ink-faint'} dir="ltr">
          {display}
        </span>
        <Clock className="h-4 w-4 shrink-0 text-ink-faint" aria-hidden />
      </button>

      {open && (
        <div
          role="dialog"
          aria-label="Choose time"
          className="absolute z-30 mt-2 w-full min-w-[16rem] rounded-2xl border border-emerald-800/10 bg-white p-2 shadow-card"
        >
          <div className="flex gap-1" dir="ltr">
            {/* Hours 1-12 */}
            <div className={colCls}>
              {Array.from({ length: 12 }, (_, i) => i + 1).map((h) => (
                <button
                  key={h}
                  type="button"
                  onClick={() => emit(h, undefined, undefined)}
                  className={cell(h12 === h)}
                >
                  {pad(h)}
                </button>
              ))}
            </div>
            {/* Minutes 00-59 */}
            <div className={colCls}>
              {Array.from({ length: 60 }, (_, i) => i).map((m) => (
                <button
                  key={m}
                  type="button"
                  onClick={() => emit(undefined, m, undefined)}
                  className={cell(min === m)}
                >
                  {pad(m)}
                </button>
              ))}
            </div>
            {/* AM / PM */}
            <div className="flex flex-1 flex-col gap-1">
              {(['AM', 'PM'] as const).map((p) => (
                <button
                  key={p}
                  type="button"
                  onClick={() => emit(undefined, undefined, p)}
                  className={cell(has && period === p)}
                >
                  {p}
                </button>
              ))}
            </div>
          </div>
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="mt-2 w-full rounded-xl bg-emerald-800 py-2 text-sm font-medium text-on-surface-inverse hover:bg-emerald-700"
          >
            Done
          </button>
        </div>
      )}
    </div>
  );
}
