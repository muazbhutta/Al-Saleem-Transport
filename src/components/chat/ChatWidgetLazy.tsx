'use client';

import dynamic from 'next/dynamic';

/**
 * Lazily loads the chat widget on the client only — it ships as its own JS
 * chunk fetched after the page is interactive, so it never blocks first paint.
 */
const ChatWidget = dynamic(() => import('./ChatWidget'), { ssr: false });

export default function ChatWidgetLazy() {
  return <ChatWidget />;
}
