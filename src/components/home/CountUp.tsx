'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * Counts a number up when it scrolls into view, once.
 *
 * Deliberately hand-rolled rather than pulling in a library: it is ~40 lines and
 * the animation budget for this page is tight.
 *
 * The final value is rendered on the server and is what sits in the DOM before
 * hydration, so there is no layout shift and no flash of an empty stat. Under
 * `prefers-reduced-motion` the animation is skipped entirely and the number
 * simply stands.
 */
export default function CountUp({
  value,
  suffix = '',
  prefix = '',
  durationMs = 1400,
}: {
  value: number;
  suffix?: string;
  prefix?: string;
  durationMs?: number;
}) {
  const [display, setDisplay] = useState(value);
  const ref = useRef<HTMLSpanElement>(null);
  const done = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || done.current) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry.isIntersecting || done.current) return;
        done.current = true;
        observer.disconnect();

        const start = performance.now();
        const tick = (now: number) => {
          const p = Math.min((now - start) / durationMs, 1);
          // ease-out cubic
          const eased = 1 - Math.pow(1 - p, 3);
          setDisplay(Math.round(eased * value));
          if (p < 1) requestAnimationFrame(tick);
        };
        setDisplay(0);
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [value, durationMs]);

  return (
    <span ref={ref} dir="ltr">
      {prefix}
      {display}
      {suffix}
    </span>
  );
}
