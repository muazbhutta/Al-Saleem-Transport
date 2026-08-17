'use client';

import { useTranslations } from 'next-intl';
import { Car, Truck, Bus, Users } from 'lucide-react';

/**
 * Selectable vehicle cards, replacing a <select>.
 *
 * NO FARES. Capacity is the only figure shown — the fare is agreed on
 * WhatsApp, and a "from" price here would be the exact thing the brief
 * forbids. Capacity strings are reused from the already-translated
 * `fleet.items.*`, so this adds no new copy.
 *
 * Radio semantics are kept (role="radiogroup" + aria-checked) so the control
 * is announced correctly and reachable by keyboard, even though it renders as
 * cards rather than inputs.
 */
const OPTIONS = [
  { key: 'sedan', icon: Car },
  { key: 'suv', icon: Car },
  { key: 'van', icon: Truck },
  { key: 'bus', icon: Bus },
] as const;

export default function VehiclePicker({
  value,
  onChange,
}: {
  value: string;
  onChange: (key: string) => void;
}) {
  const tb = useTranslations('booking');
  const tf = useTranslations('fleet');

  return (
    <div>
      <p className="mb-3 text-sm font-medium text-ink-soft">{tb('chooseVehicle')}</p>
      <div role="radiogroup" aria-label={tb('chooseVehicle')} className="grid gap-3 sm:grid-cols-2">
        {OPTIONS.map((opt) => {
          const selected = value === opt.key;
          return (
            <button
              key={opt.key}
              type="button"
              role="radio"
              aria-checked={selected}
              onClick={() => onChange(opt.key)}
              className={`flex min-h-[44px] items-center gap-3 rounded-2xl border p-4 text-start transition-colors ${
                selected
                  ? 'border-emerald-600 bg-emerald-500/10'
                  : 'border-emerald-800/15 bg-surface-raised hover:border-brass-500/60'
              }`}
            >
              <span
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${
                  selected ? 'bg-emerald-600 text-white' : 'bg-emerald-500/10 text-emerald-700'
                }`}
              >
                <opt.icon className="h-5 w-5" strokeWidth={1.75} aria-hidden />
              </span>
              <span className="min-w-0">
                <span className="block text-sm font-semibold text-ink">
                  {tf(`items.${opt.key}.name`)}
                </span>
                <span className="mt-0.5 flex items-center gap-1.5 text-xs text-ink-soft">
                  <Users className="h-3.5 w-3.5" aria-hidden />
                  {tf(`items.${opt.key}.capacity`)}
                </span>
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
