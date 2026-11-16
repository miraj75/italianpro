import { BANK_LEVELS, type BankLevel } from '../content/bank';
import { Pill } from './ui';

export function LevelTabs({ value, onChange }: { value: BankLevel; onChange: (l: BankLevel) => void }) {
  return (
    <div className="mb-4 flex gap-2" role="tablist" aria-label="CEFR level">
      {BANK_LEVELS.map((l) => (
        <Pill key={l} active={value === l} onClick={() => onChange(l)}>
          {l}
        </Pill>
      ))}
    </div>
  );
}

export function isBankLevel(v: string | null): v is BankLevel {
  return !!v && (BANK_LEVELS as readonly string[]).includes(v);
}
