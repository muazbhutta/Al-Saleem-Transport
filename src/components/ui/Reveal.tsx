'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';

/**
 * Scroll-triggered entrance: fade + a 16px rise, once, when the element
 * actually enters the viewport.
 *
 * It used to run `animate-fade-up` on page load, which meant every section
 * below the fold had finished animating long before the reader scrolled to it —
 * the motion was invisible where it mattered and only cost paint work.
 *
 * ETHICS / ACCESSIBILITY — the three rules this has to respect:
 *
 *  1. prefers-reduced-motion wins. Vestibular disorders make rise-and-fade
 *     genuinely unpleasant, so reduced motion shows content immediately, with
 *     no transition. Enforced twice: here in JS and again in CSS, so neither
 *     path can regress alone.
 *
 *  2. Content must never depend on JavaScript to become visible. If JS fails
 *     or is blocked, a `<noscript>` rule in the layout forces every `.reveal`
 *     visible. Failing to see a paragraph is a far worse outcome than missing
 *     an animation.
 *
 *  3. Nothing above the fold may be hidden waiting for JS. The hero passes
 *     `immediate`, so it renders visible server-side and LCP is untouched.
 *
 * Transform and opacity only — both composited, so this never triggers layout.
 */
export default function Reveal({
  children,
  delay = 0,
  className = '',
  /** Above-the-fold content: render visible immediately, never gate on JS. */
  immediate = false,
}: {
  children: ReactNode;
  /** Stagger, in seconds. 0.06 between siblings reads as a sequence. */
  delay?: number;
  className?: string;
  immediate?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(immediate);
  const [failsafe, setFailsafe] = useState(false);

  useEffect(() => {
    if (immediate || shown) return;
    const el = ref.current;
    if (!el) return;

    // Reduced motion, or a browser without IntersectionObserver: show at once.
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced || typeof IntersectionObserver === 'undefined') {
      setShown(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) return;
        setShown(true);
        observer.disconnect();
      },
      // Fire slightly before the element is fully in view so the motion has
      // finished by the time it reaches comfortable reading position.
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    );

    observer.observe(el);

    /*
     * FAILSAFE — the animation is an enhancement; the content is not.
     *
     * If the observer never fires (an embedded webview that doesn't composite,
     * an aggressive extension, a browser bug), the element would otherwise stay
     * at opacity 0 forever and the reader would simply lose that paragraph.
     * Losing an animation is a non-event; losing content is a defect. So after
     * a short grace period we reveal regardless.
     *
     * This costs nothing in the normal case: anything the reader can actually
     * see has already been revealed by the observer long before the timer.
     */
    const timer = window.setTimeout(() => {
      setShown(true);
      setFailsafe(true);
    }, 2500);

    return () => {
      observer.disconnect();
      window.clearTimeout(timer);
    };
  }, [immediate, shown]);

  return (
    <div
      ref={ref}
      className={`reveal ${className}`}
      data-shown={shown ? 'true' : 'false'}
      data-failsafe={failsafe ? 'true' : undefined}
      style={delay ? ({ '--reveal-delay': `${Math.round(delay * 1000)}ms` } as React.CSSProperties) : undefined}
    >
      {children}
    </div>
  );
}
