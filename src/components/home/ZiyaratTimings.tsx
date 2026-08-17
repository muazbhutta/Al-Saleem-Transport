'use client';

import { useRef } from 'react';
import {
  Landmark,
  MoonStar,
  Mountain,
  CalendarDays,
  Flower2,
  Clock,
  ChevronLeft,
  ChevronRight,
  MapPin,
} from 'lucide-react';
import type { TimingContent, TimingIcon } from '@/content/timings';
import { Section, SectionHeader } from '@/components/ui/Section';

const ICONS: Record<TimingIcon, typeof Landmark> = {
  haram: Landmark,
  nabawi: MoonStar,
  mosque: Landmark,
  mountain: Mountain,
  calendar: CalendarDays,
  cemetery: Flower2,
};

/**
 * Horizontally scrollable "Ziyarat Places & Timings" row.
 * Content is passed in (server-rendered); only the arrow controls are client.
 * scrollBy({left}) is physical-pixel consistent, so it works in LTR and RTL.
 */
export default function ZiyaratTimings({ content }: { content: TimingContent }) {
  const ref = useRef<HTMLDivElement>(null);

  const go = (physical: 1 | -1) => {
    const el = ref.current;
    if (el) el.scrollBy({ left: physical * el.clientWidth * 0.85, behavior: 'smooth' });
  };

  return (
    <Section surface="base">
      <div className="container flex flex-col gap-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeader
            eyebrow={content.eyebrow}
            title={content.title}
            subtitle={content.subtitle}
          />
          {/* Arrow controls (desktop) */}
          <div className="hidden gap-2 sm:flex">
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Scroll left"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-emerald-800/20 text-ink transition-colors hover:bg-emerald-800 hover:text-on-surface-inverse"
            >
              <ChevronLeft className="h-5 w-5" aria-hidden />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Scroll right"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-emerald-800/20 text-ink transition-colors hover:bg-emerald-800 hover:text-on-surface-inverse"
            >
              <ChevronRight className="h-5 w-5" aria-hidden />
            </button>
          </div>
        </div>

        <div
          ref={ref}
          className="no-scrollbar -mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-5 pb-2"
        >
          {content.items.map((item, i) => {
            const Icon = ICONS[item.icon] ?? Landmark;
            return (
              <article
                key={i}
                className="flex w-[16rem] shrink-0 snap-start flex-col gap-4 rounded-2xl bg-white p-5 shadow-soft ring-1 ring-emerald-800/10"
              >
                <div className="flex items-center justify-between">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-800 to-emerald-700 text-brass-300">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2.5 py-1 text-xs font-medium text-emerald-700">
                    <MapPin className="h-3.5 w-3.5" aria-hidden />
                    {item.city}
                  </span>
                </div>
                <h3 className="text-lg leading-snug">{item.place}</h3>
                <p className="mt-auto inline-flex items-start gap-2 text-sm text-ink-soft">
                  <Clock className="mt-0.5 h-4 w-4 shrink-0 text-brass-600" aria-hidden />
                  {item.note}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
