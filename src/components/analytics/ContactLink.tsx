'use client';

import type { AnchorHTMLAttributes, MouseEvent } from 'react';
import { trackContact, type ContactMethod } from '@/lib/gtag';

type ContactLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  /** Which contact channel this link opens — reported as the conversion label. */
  method: ContactMethod;
};

/**
 * An anchor that reports a Google Ads "Contact" conversion when clicked.
 *
 * A drop-in replacement for a plain `<a>`: `href`, `target`, `rel`, `dir`,
 * `className` and every other attribute pass straight through, and the click is
 * never intercepted, delayed or redirected. `wa.me` links keep opening in a new
 * tab exactly as before — only the side effect is added.
 *
 * This is the single client leaf for contact links, so the server components
 * that render them (Footer, Hero, CtaBanner, the FAQ / pick-drop / contact-us
 * pages) stay server components.
 */
export default function ContactLink({
  method,
  onClick,
  children,
  ...rest
}: ContactLinkProps) {
  return (
    <a
      {...rest}
      onClick={(event: MouseEvent<HTMLAnchorElement>) => {
        trackContact(method);
        onClick?.(event);
      }}
    >
      {children}
    </a>
  );
}
