import { getTranslations } from 'next-intl/server';
import { HelpCircle, ArrowRight } from 'lucide-react';
import { Link } from '@/i18n/routing';
import Reveal from '@/components/ui/Reveal';

export default async function FaqTeaser() {
  const t = await getTranslations('faqPage');
  const tt = await getTranslations('faqTeaser');
  const items = (t.raw('items') as { q: string; a: string }[]).slice(0, 4);

  return (
    <section className="section bg-surface-base text-on-surface-base">
      <div className="container grid gap-10 lg:grid-cols-[0.9fr_1.4fr] lg:gap-16">
        <Reveal className="flex flex-col gap-4 text-start lg:sticky lg:top-28 lg:self-start">
          <span className="eyebrow w-fit">{tt('eyebrow')}</span>
          <h2 className="text-3xl sm:text-4xl">{tt('title')}</h2>
          <p className="text-navy-500">{tt('subtitle')}</p>
          <Link href="/faq" className="btn-primary mt-2 w-fit">
            {tt('cta')}
            <ArrowRight className="h-4 w-4 rtl:rotate-180" aria-hidden />
          </Link>
        </Reveal>

        <div className="flex flex-col gap-3">
          {items.map((item, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <details className="group rounded-2xl border border-emerald-800/10 bg-surface-raised p-6 text-start shadow-card transition-colors open:border-brass-500/40">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-navy">
                  <span className="inline-flex items-center gap-3">
                    <HelpCircle className="h-5 w-5 shrink-0 text-teal-dark" aria-hidden />
                    {item.q}
                  </span>
                  <span className="text-2xl leading-none text-emerald-600 transition-transform duration-200 group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 ps-8 text-sm leading-relaxed text-ink-soft motion-safe:animate-fade-up">{item.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
