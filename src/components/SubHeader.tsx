import { ArrowLeft } from 'lucide-react';
import { useRouter } from '../app/router';

export function SubHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  const { back } = useRouter();
  return (
    <header className="mb-5 flex items-start gap-3">
      <button type="button" onClick={back} aria-label="Back" className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full hover:bg-white/5">
        <ArrowLeft size={22} />
      </button>
      <div>
        <h1 className="text-2xl font-bold">{title}</h1>
        {subtitle && <p className="bn text-sm text-ink-2">{subtitle}</p>}
      </div>
    </header>
  );
}
