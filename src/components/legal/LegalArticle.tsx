import { getTranslations } from 'next-intl/server';
import Reveal from '@/components/ui/Reveal';

/** Renders a legal document (privacy / terms) from the `legal.{type}` namespace. */
export default async function LegalArticle({ type }: { type: 'privacy' | 'terms' }) {
  const t = await getTranslations('legal');
  const sections = t.raw(`${type}.sections`) as { heading: string; body: string }[];

  return (
    <section className="section bg-cream">
      <div className="container mx-auto max-w-3xl">
        <Reveal>
          <p className="text-sm text-navy-400">
            {t('lastUpdated')}: {t('updatedDate')}
          </p>
          <p className="mt-4 text-lg leading-relaxed text-navy-600">{t(`${type}.intro`)}</p>
        </Reveal>

        <div className="mt-8 flex flex-col gap-8">
          {sections.map((s, i) => (
            <Reveal key={i} delay={Math.min(i * 0.03, 0.2)}>
              <article className="flex flex-col gap-2">
                <h2 className="text-xl text-navy">{s.heading}</h2>
                <p className="leading-relaxed text-navy-600">{s.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
