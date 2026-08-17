'use client';

import { useEffect, useRef, useState } from 'react';
import { List } from 'lucide-react';

type Item = { id: string; title: string };

/**
 * Chapter navigation for the guide.
 *
 * Previously a sidebar column, which forced the whole guide into a single
 * boxed slab so the sticky aside had something to stick inside. As a rail it
 * frees each chapter to be a full-width band with its own surface, and on
 * mobile it replaces a ten-item list the reader had to scroll past before
 * reaching any content.
 *
 * Scroll-spy highlights the chapter in view; the rail then scrolls that chip
 * into the middle of itself so the reader's position is always visible.
 */
export default function TableOfContents({
  items,
  label,
}: {
  items: Item[];
  label: string;
}) {
  const [active, setActive] = useState<string | null>(null);
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    // Track the whole intersecting set rather than reacting to each entry.
    // Reacting per-entry left the last-seen chapter highlighted after scrolling
    // back above chapter 1, because "no longer intersecting" carries no
    // replacement. With a set, nothing in view means nothing highlighted.
    const visible = new Set<string>();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) visible.add(entry.target.id);
          else visible.delete(entry.target.id);
        });
        setActive(items.find((item) => visible.has(item.id))?.id ?? null);
      },
      { rootMargin: '-20% 0px -70% 0px', threshold: 0 },
    );
    items.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [items]);

  // Centre the active chip. Deliberately not scrollIntoView(): that would also
  // scroll the page, fighting the reader. This only moves the rail's own
  // scrollLeft, and offsetLeft is physical so it holds in RTL too.
  useEffect(() => {
    const list = listRef.current;
    if (!list || !active) return;
    const chip = list.querySelector<HTMLElement>(`[data-chapter="${CSS.escape(active)}"]`);
    if (!chip) return;
    list.scrollTo({
      left: chip.offsetLeft - list.clientWidth / 2 + chip.clientWidth / 2,
      behavior: 'smooth',
    });
  }, [active]);

  return (
    <nav
      aria-label={label}
      className="guide-rail no-print sticky z-30 border-y border-emerald-800/10 bg-surface-raised/90 backdrop-blur supports-[backdrop-filter]:bg-surface-raised/75"
    >
      <div className="container flex items-center gap-4 py-2.5">
        <span className="hidden shrink-0 items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-brass-800 lg:inline-flex">
          <List className="h-4 w-4" aria-hidden />
          {label}
        </span>

        <ul
          ref={listRef}
          className="no-scrollbar relative -mx-1 flex min-w-0 flex-1 gap-1.5 overflow-x-auto scroll-smooth px-1"
        >
          {items.map((item) => {
            const isActive = active === item.id;
            return (
              <li key={item.id} className="shrink-0">
                <a
                  href={`#${item.id}`}
                  data-chapter={item.id}
                  aria-current={isActive ? 'true' : undefined}
                  className={`block whitespace-nowrap rounded-full px-3.5 py-1.5 text-sm transition-colors ${
                    isActive
                      ? 'bg-emerald-800 font-semibold text-on-surface-inverse'
                      : 'text-ink-soft hover:bg-emerald-500/10 hover:text-emerald-700'
                  }`}
                >
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
