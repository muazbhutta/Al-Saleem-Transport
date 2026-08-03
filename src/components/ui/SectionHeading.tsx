import Reveal from './Reveal';

/** Consistent eyebrow + title + subtitle block used across sections. */
export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'center' | 'start';
}) {
  const alignment =
    align === 'center' ? 'text-center mx-auto items-center' : 'text-start items-start';
  return (
    <Reveal className={`flex flex-col gap-3 max-w-2xl ${alignment}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="text-3xl sm:text-4xl">{title}</h2>
      {subtitle && <p className="text-navy-500 text-base sm:text-lg leading-relaxed">{subtitle}</p>}
    </Reveal>
  );
}
