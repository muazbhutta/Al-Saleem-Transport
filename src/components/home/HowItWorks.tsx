import { getTranslations } from 'next-intl/server';
import { MessageCircle, ClipboardCheck, CarFront } from 'lucide-react';
import { Section, SectionHeader } from '@/components/ui/Section';
import Reveal from '@/components/ui/Reveal';

/**
 * How It Works — a three-step horizontal band on the inverse surface.
 *
 * Sits between Services (muted) and Fleet (base) so neither the surface nor the
 * layout repeats, and it gives the page a dark band in the middle to break the
 * run of light sections.
 *
 * The connecting line is a pseudo-element behind the numerals, hidden below lg
 * where the steps stack. No pricing language anywhere — the fare is agreed on
 * WhatsApp, which is exactly what step 2 says.
 */
const steps = [
  { key: 'message', icon: MessageCircle },
  { key: 'confirm', icon: ClipboardCheck },
  { key: 'arrive', icon: CarFront },
] as const;

export default async function HowItWorks() {
  const t = await getTranslations('howItWorks');

  return (
    <Section surface="inverse">
      <div className="container flex flex-col gap-14">
        <SectionHeader
          eyebrow={t('eyebrow')}
          title={t('title')}
          subtitle={t('subtitle')}
          align="center"
          inverse
        />

        <div className="relative">
          {/* Connecting hairline, desktop only. Inset so it runs between the
              numerals rather than out to the section edges. */}
          <div
            aria-hidden
            className="absolute inset-x-[16%] top-7 hidden h-px bg-gradient-to-r from-transparent via-brass-500/40 to-transparent lg:block"
          />

          <ol className="grid gap-10 lg:grid-cols-3 lg:gap-8">
            {steps.map((step, i) => (
              <Reveal key={step.key} delay={i * 0.08}>
                <li className="flex flex-col items-center gap-4 text-center">
                  <span className="relative flex h-14 w-14 items-center justify-center rounded-full border border-brass-500/40 bg-surface-inverse text-lg font-bold text-brass-300">
                    {i + 1}
                  </span>
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-brass-300">
                    <step.icon className="h-5 w-5" strokeWidth={1.75} aria-hidden />
                  </span>
                  <h3 className="text-lg font-semibold text-on-surface-inverse">
                    {t(`steps.${step.key}.title`)}
                  </h3>
                  <p className="max-w-xs text-sm leading-relaxed text-on-surface-inverse/75">
                    {t(`steps.${step.key}.desc`)}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </Section>
  );
}
