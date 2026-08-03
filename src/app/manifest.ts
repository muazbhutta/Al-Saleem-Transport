import type { MetadataRoute } from 'next';
import { site } from '@/lib/site';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.nameEn,
    short_name: site.shortNameEn,
    description:
      'Licensed Ziyarat, airport and hotel pick & drop transport across Makkah, Madinah, Jeddah and Taif.',
    start_url: '/',
    display: 'standalone',
    background_color: '#FAF7F0',
    theme_color: '#0B2E27',
    icons: [
      { src: '/icon.svg', sizes: 'any', type: 'image/svg+xml', purpose: 'any' },
      { src: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { src: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
  };
}
