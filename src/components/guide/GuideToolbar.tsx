'use client';

import { Download } from 'lucide-react';
import {
  buildGuideHtml,
  type GuideDocOpts,
  type GuideDocLocations,
} from '@/lib/guideHtml';
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
  locationLabels,
}: {
  guide: Guide;
  meta: GuideDocOpts;
  downloadLabel: string;
  /** Localised labels for the PDF's location blocks. */
  locationLabels: GuideDocLocations['labels'];
  /** Kept for API compatibility. */
  printLabel?: string;
}) {
  async function handleDownload() {
    // The QR data is ~134 KB and only ever needed by this click, so both it and
    // the place data are code-split out of the initial bundle.
    const [{ ziyaratPlaces }, { qrFor }] = await Promise.all([
      import('@/content/ziyarat/places'),
      import('@/content/ziyarat/qr-codes'),
    ]);

    const places = Object.fromEntries(
      ziyaratPlaces.map((p) => [
        p.id,
        {
          id: p.id,
          city: p.city,
          distanceKm: p.distanceFromHaramKm,
          coords: p.coords,
          googleMapsUrl: p.googleMapsUrl,
          qrSvg: qrFor(p.id),
        },
      ]),
    );

    const html = buildGuideHtml(guide, meta, { places, labels: locationLabels });
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
    <div className="no-print flex flex-wrap gap-3">
      <button type="button" onClick={handleDownload} className="btn-gold">
        <Download className="h-4 w-4" aria-hidden />
        {downloadLabel}
      </button>
    </div>
  );
}
