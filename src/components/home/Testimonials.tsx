import { getTranslations } from 'next-intl/server';
import { Quote, ExternalLink } from 'lucide-react';
import { Section, SectionHeader } from '@/components/ui/Section';
import { site } from '@/lib/site';

type Item = { name: string; location: string; text: string };

/**
 * Testimonials — an auto-scrolling marquee on the `muted` surface.
 *
 * TRUST NOTE (deliberate change): the old cards each rendered five filled gold
 * stars. Those ratings were not sourced from anywhere, which is the same
 * credibility problem as self-serving AggregateRating markup — it invites a
 * manual action and it is not honest. The stars are gone; instead the section
 * links to the real Google Business Profile so a reader can check for
 * themselves.
 *
 * The quotes themselves are still the placeholder strings that shipped in the
 * locale files. They need replacing with real, attributable reviews — see
 * `site.social.googleReviews`; until that URL is filled in, the link is hidden
 * rather than pointing nowhere.
 *
 * The marquee is pure CSS (duplicated track + translate), so it costs no JS.
 * It pauses on hover and on keyboard focus, and stops entirely under
 * prefers-reduced-motion, where it degrades to a normal scrollable row.
 */
export default async function Testimonials() {
  const t = await getTranslations('testimonials');
  const items = t.raw('items') as Item[];

  const reviewsUrl = site.social.googleReviews;

  // Duplicated so the track can loop seamlessly; the copy is aria-hidden so
  // screen readers and the a11y tree only ever see each quote once.
  const track = [...items, ...items];

  return (
    <Section surface="muted">
      <div className="flex flex-col gap-12">
        <div className="container flex flex-col gap-5">
          <SectionHeader eyebrow={t('eyebrow')} title={t('title')} subtitle={t('subtitle')} />
          {reviewsUrl && (
            <a
              href={reviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-emerald-700 hover:text-brass-600"
            >
              {t('readOnGoogle')}
              <ExternalLink className="h-4 w-4" aria-hidden />
            </a>
          )}
        </div>

        {/* group/marquee lets hover OR focus-within pause the animation */}
        <div className="group/marquee relative overflow-hidden">
          <div className="flex w-max gap-6 px-5 motion-safe:animate-marquee group-hover/marquee:[animation-play-state:paused] group-focus-within/marquee:[animation-play-state:paused] motion-reduce:animate-none motion-reduce:overflow-x-auto">
            {track.map((item, i) => (
              <figure
                key={i}
                aria-hidden={i >= items.length}
                className="flex w-[300px] shrink-0 flex-col gap-4 rounded-2xl border border-emerald-800/10 bg-surface-raised p-6 text-start shadow-card sm:w-[360px]"
              >
                <Quote className="h-7 w-7 text-brass-500/70 rtl:-scale-x-100" aria-hidden />
                <blockquote className="flex-1 text-sm leading-relaxed text-ink-soft">
                  {item.text}
                </blockquote>
                <figcaption className="text-sm">
                  <span className="font-semibold text-ink">{item.name}</span>
                  <span className="block text-ink-faint">{item.location}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
