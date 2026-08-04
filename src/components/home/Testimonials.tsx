import { getTranslations } from 'next-intl/server';
import { Star, Quote } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';

type Item = { name: string; location: string; text: string };

export default async function Testimonials() {
  const t = await getTranslations('testimonials');
  // Arrays come through raw; typed for safety.
  const items = t.raw('items') as Item[];

  return (
    <section className="section bg-cream">
      <div className="container flex flex-col gap-12">
        <SectionHeading eyebrow={t('eyebrow')} title={t('title')} subtitle={t('subtitle')} />
        <div className="grid gap-5 md:grid-cols-3">
          {items.map((item, i) => (
            <Reveal key={i} delay={i * 0.07}>
              <figure className="card flex h-full flex-col gap-4 max-sm:items-center">
                <Quote className="h-8 w-8 text-gold/70 rtl:scale-x-[-1]" aria-hidden />
                <blockquote className="flex-1 text-navy-700">
                  <p className="leading-relaxed">{item.text}</p>
                </blockquote>
                <div
                  className="flex items-center gap-0.5 text-gold"
                  aria-label="5 out of 5 stars"
                >
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="h-4 w-4 fill-current" aria-hidden />
                  ))}
                </div>
                <figcaption className="text-sm">
                  <span className="font-semibold text-navy">{item.name}</span>
                  <span className="text-navy-400"> · {item.location}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
