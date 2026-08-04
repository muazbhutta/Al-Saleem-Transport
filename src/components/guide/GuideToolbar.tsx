'use client';

import { Download } from 'lucide-react';
import { buildGuideHtml, type GuideDocOpts } from '@/lib/guideHtml';
import type { Guide } from '@/content/ziyarat/types';

/**
 * "Download PDF" for the guide.
 *
 * Builds a clean, self-contained document of the whole guide (see guideHtml.ts)
 * and opens it in a new tab, then triggers the browser's native Save-as-PDF.
 * This paginates reliably and renders Arabic correctly. If a popup blocker
 * stops the new tab, we fall back to downloading the document as a file.
 */
export default function GuideToolbar({
  guide,
  meta,
  downloadLabel,
}: {
  guide: Guide;
  meta: GuideDocOpts;
  downloadLabel: string;
  /** Kept for API compatibility. */
  printLabel?: string;
}) {
  function handleDownload() {
    const html = buildGuideHtml(guide, meta);
    const win = window.open('', '_blank');

    if (win) {
      win.document.open();
      win.document.write(html);
      win.document.close();
      // Give it a moment to lay out, then open the print / save-as-PDF dialog.
      setTimeout(() => {
        try {
          win.focus();
          win.print();
        } catch {
          /* user can still print manually */
        }
      }, 400);
      return;
    }

    // Popup blocked → download the document as a file instead.
    const blob = new Blob([html], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Al-Saleem-Ziyarat-Guide-${meta.locale}.html`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1500);
  }

  return (
    <div className="no-print flex flex-wrap gap-3 max-sm:justify-center">
      <button type="button" onClick={handleDownload} className="btn-gold">
        <Download className="h-4 w-4" aria-hidden />
        {downloadLabel}
      </button>
    </div>
  );
}
