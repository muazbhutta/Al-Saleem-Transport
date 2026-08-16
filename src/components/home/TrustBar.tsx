import { getTranslations } from 'next-intl/server';
import { Clock, MapPin, Languages, Car } from 'lucide-react';
import { Section } from '@/components/ui/Section';
import { site, languages } from '@/lib/site';
import CountUp from './CountUp';

/**
 * Trust bar — an inline stat band, not a card grid, so it breaks the archetype
 * run between the Hero and "Why Trust Us".
 *
 * Replaces the old hero stats, which had two defects: the third stat's value
 * was the word "On-time" where the others were figures, and its label was
 * rendered a second time beside a five-star strip that had no rating behind it.
 * The stars are gone — an unsourced star rating is a credibility risk, and the
 * real Google Business Profile link belongs in Testimonials instead.
 *
 * All four stats are verifiable facts drawn from site.ts. None relate to price.
 */
export default async function TrustBar() {
  const t = await getTranslations('trustBar');

  const stats = [
    { icon: Clock, value: null, display: '24/7', label: t('support') },
    { icon: MapPin, value: site.coverage.length, label: t('cities') },
    { icon: Languages, value: languages.length, label: t('languages') },
    { icon: Car, value: 4, label: t('vehicles') },
  ];

  return (
    <Section surface="base" className="!py-12 md:!py-16">
      <div className="container">
        <dl className="grid grid-cols-2 gap-x-6 gap-y-8 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="flex items-center gap-4 text-start">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-700">
                <s.icon className="h-6 w-6" strokeWidth={1.75} aria-hidden />
              </span>
              <div className="min-w-0">
                <dt className="text-2xl font-bold leading-tight text-ink sm:text-3xl">
                  {s.value === null ? (
                    <span dir="ltr">{s.display}</span>
                  ) : (
                    <CountUp value={s.value} />
                  )}
                </dt>
                <dd className="mt-0.5 text-sm leading-snug text-ink-soft">{s.label}</dd>
              </div>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
}
