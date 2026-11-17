import type { ReactNode } from 'react';
import { ArrowLeft } from 'lucide-react';
import { useRouter } from '../app/router';

export function SubHeader({
  title,
  subtitle,
  right,
  backTo,
  onBack,
}: {
  title: string;
  subtitle?: string;
  right?: ReactNode;
  backTo?: string;
  onBack?: () => void;
}) {
  const { back, navigate } = useRouter();
  return (
    <header className="mb-4 flex flex-wrap items-start justify-between gap-2.5 sm:gap-3">
      <div className="flex min-w-0 flex-1 items-start gap-2.5 sm:gap-3">
        <button
          type="button"
          onClick={() => {
            if (onBack) onBack();
            else if (backTo) navigate(backTo);
            else back();
          }}
          aria-label="Back"
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full hover:bg-white/5"
        >
          <ArrowLeft size={21} />
        </button>
        <div className="min-w-0 flex-1 pt-0.5">
          <h1 className="text-xl sm:text-2xl leading-snug font-extrabold break-words">{title}</h1>
          {subtitle && <p className="bn mt-0.5 text-xs sm:text-sm leading-snug text-ink-2 break-words">{subtitle}</p>}
        </div>
      </div>
      {right && <div className="shrink-0">{right}</div>}
    </header>
  );
}
