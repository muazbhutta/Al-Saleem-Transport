import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/routing';
import { Home } from 'lucide-react';
import { Section } from '@/components/ui/Section';

export default async function NotFound() {
  const t = await getTranslations('common');
  return (
    <Section surface="base">
      <div className="container flex flex-col items-center gap-6 py-24 text-center">
        <p className="text-7xl font-bold text-emerald-200">404</p>
        <h1 className="text-2xl text-ink">Page not found</h1>
        <p className="max-w-md text-ink-soft">
          The page you are looking for does not exist or has moved.
        </p>
        <Link href="/" className="btn-primary">
          <Home className="h-4 w-4" aria-hidden />
          {t('home')}
        </Link>
      </div>
    </Section>
  );
}
