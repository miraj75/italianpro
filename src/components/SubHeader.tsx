import type { ReactNode } from 'react';
import { ArrowLeft } from 'lucide-react';
import { useRouter } from '../app/router';

export function SubHeader({
  title,
  subtitle,
  right,
  backTo,
}: {
  title: string;
  subtitle?: string;
  right?: ReactNode;
  backTo?: string;
}) {
  const { back, navigate } = useRouter();
  return (
    <header className="mb-5 flex items-start justify-between gap-3">
      <div className="flex items-start gap-3">
        <button
          type="button"
          onClick={() => (backTo ? navigate(backTo) : back())}
          aria-label="Back"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full hover:bg-white/5"
        >
          <ArrowLeft size={22} />
        </button>
        <div>
          <h1 className="text-2xl font-bold">{title}</h1>
          {subtitle && <p className="bn text-sm text-ink-2">{subtitle}</p>}
        </div>
      </div>
      {right}
    </header>
  );
}
