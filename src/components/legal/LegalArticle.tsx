import { getTranslations } from 'next-intl/server';
import Reveal from '@/components/ui/Reveal';
import { Section } from '@/components/ui/Section';

/** Renders a legal document (privacy / terms) from the `legal.{type}` namespace. */
export default async function LegalArticle({ type }: { type: 'privacy' | 'terms' }) {
  const t = await getTranslations('legal');
  const sections = t.raw(`${type}.sections`) as { heading: string; body: string }[];

  return (
    <Section surface="base">
      <div className="container mx-auto max-w-3xl">
        <Reveal>
          <p className="text-sm text-ink-faint">
            {t('lastUpdated')}: {t('updatedDate')}
          </p>
          <p className="mt-4 text-lg leading-relaxed text-ink-soft">{t(`${type}.intro`)}</p>
        </Reveal>

        <div className="mt-8 flex flex-col gap-8">
          {sections.map((s, i) => (
            <Reveal key={i} delay={Math.min(i * 0.03, 0.2)}>
              <article className="flex flex-col gap-2">
                <h2 className="text-xl text-ink">{s.heading}</h2>
                <p className="leading-relaxed text-ink-soft">{s.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
