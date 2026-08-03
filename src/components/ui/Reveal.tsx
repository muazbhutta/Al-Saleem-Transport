import type { ReactNode } from 'react';

/**
 * Lightweight entrance animation — pure CSS, zero JavaScript.
 *
 * Renders as a Server Component (no 'use client', no Framer Motion), so it
 * ships no runtime cost. Uses a GPU-friendly transform/opacity keyframe and
 * respects prefers-reduced-motion via the `motion-safe:` variant.
 */
export default function Reveal({
  children,
  delay = 0,
  className = '',
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <div
      className={`motion-safe:animate-fade-up ${className}`}
      style={delay ? { animationDelay: `${delay}s` } : undefined}
    >
      {children}
    </div>
  );
}
