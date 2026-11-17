import { useState } from 'react';
import { PRONOUNS, VERBS } from '../../content/verbs';
import { useI18n } from '../../lib/i18n';
import { useStudyTimer } from '../../state/ProgressContext';
import { FilterChipRow, GlassCard, Pill } from '../../components/ui';
import { SpeakButton } from '../../components/SpeakButton';
import { SubHeader } from '../../components/SubHeader';

export function VerbsScreen() {
  const { tr } = useI18n();
  const [id, setId] = useState(VERBS[0]!.id);
  const verb = VERBS.find((v) => v.id === id) ?? VERBS[0]!;
  useStudyTimer();

  return (
    <div className="animate-rise max-w-full space-y-3 overflow-x-hidden">
      <SubHeader
        title={tr({ bn: 'গুরুত্বপূর্ণ ক্রিয়া', en: 'Important Verbs', it: 'Verbi importanti' })}
        subtitle={tr({ bn: 'A1 · বর্তমান কাল (Presente)', en: 'A1 · Present Tense', it: 'A1 · Presente' })}
      />
      <FilterChipRow label={tr({ bn: 'ক্রিয়া', en: 'Verbs', it: 'Verbi' })}>
        {VERBS.map((v) => (
          <Pill key={v.id} active={v.id === id} onClick={() => setId(v.id)}>
            {v.infinitive}
          </Pill>
        ))}
      </FilterChipRow>
      <GlassCard neon className="p-4 sm:p-5">
        <div className="flex items-center gap-3">
          <SpeakButton text={verb.infinitive} />
          <div>
            <h2 className="text-2xl font-bold">{verb.infinitive}</h2>
            <p className="bn text-ink-2">
              {tr(verb.meaning)} ·{' '}
              {verb.irregular
                ? tr({ bn: 'অনিয়মিত', en: 'Irregular', it: 'Irregolare' })
                : tr({ bn: 'নিয়মিত (-are)', en: 'Regular (-are)', it: 'Regolare (-are)' })}
            </p>
          </div>
        </div>
        {verb.conjugations.map((c) => (
          <div key={c.tense.en} className="mt-5">
            <p className="text-sm font-semibold text-mint">{tr(c.tense)}</p>
            <table className="mt-2 w-full">
              <tbody>
                {c.forms.map((form, i) => (
                  <tr key={PRONOUNS[i]} className="border-t border-white/8">
                    <td className="w-28 py-2 text-ink-3">{PRONOUNS[i]}</td>
                    <td className="py-2 text-lg font-semibold">{form}</td>
                    <td className="py-2 text-right">
                      <SpeakButton text={`${PRONOUNS[i]!.split('/')[0]} ${form}`} size={30} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
        <div className="mt-4 space-y-2">
          {verb.examples.map((e) => (
            <div key={e.it} className="rounded-xl bg-navy-950/40 p-3">
              <p className="font-medium">{e.it}</p>
              <p className="bn text-sm text-ink-2">{tr(e.tr)}</p>
            </div>
          ))}
        </div>
      </GlassCard>
    </div>
  );
}
