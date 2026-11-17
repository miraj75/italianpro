import { BANK_LEVELS, type BankLevel } from '../content/bank';

export function LevelTabs({ value, onChange }: { value: BankLevel; onChange: (l: BankLevel) => void }) {
  return (
    <div
      className="mb-4 grid grid-cols-4 gap-1.5 rounded-2xl border border-white/12 bg-[#041d19]/90 p-1"
      role="tablist"
      aria-label="CEFR level"
    >
      {BANK_LEVELS.map((l) => {
        const active = value === l;
        return (
          <button
            key={l}
            type="button"
            role="tab"
            aria-selected={active}
            onClick={() => onChange(l)}
            className={
              active
                ? 'bg-grad-primary min-h-11 w-full rounded-xl px-2 text-sm font-extrabold text-navy-950 shadow-[0_0_16px_-4px_rgba(0,245,160,0.65)] transition active:scale-[0.98]'
                : 'min-h-11 w-full rounded-xl px-2 text-sm font-bold text-ink-2 transition hover:bg-white/5 hover:text-white active:scale-[0.98]'
            }
          >
            {l}
          </button>
        );
      })}
    </div>
  );
}

export function isBankLevel(v: string | null): v is BankLevel {
  return !!v && (BANK_LEVELS as readonly string[]).includes(v);
}
