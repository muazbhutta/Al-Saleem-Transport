'use client';

import { useEffect, useState } from 'react';
import { List } from 'lucide-react';

type Item = { id: string; title: string };

/** Sticky "On this page" navigation with scroll-spy highlighting. */
export default function TableOfContents({
  items,
  label,
}: {
  items: Item[];
  label: string;
}) {
  const [active, setActive] = useState(items[0]?.id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-20% 0px -70% 0px', threshold: 0 },
    );
    items.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [items]);

  return (
    <nav aria-label={label} className="no-print">
      <p className="mb-3 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-navy-400">
        <List className="h-4 w-4" aria-hidden />
        {label}
      </p>
      <ul className="flex flex-col gap-1 border-s border-navy-100">
        {items.map((item) => {
          const isActive = active === item.id;
          return (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`-ms-px block border-s-2 py-1.5 ps-4 text-sm transition ${
                  isActive
                    ? 'border-gold font-semibold text-maroon'
                    : 'border-transparent text-navy-500 hover:text-navy'
                }`}
              >
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
