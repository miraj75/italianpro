import { ArrowLeft, Check, Lock } from 'lucide-react';
import { useRouter } from '../../app/router';
import type { AcademyModuleStage } from '../../content/academy/types';
import type { Tr } from '../../content/types';
import { useI18n } from '../../lib/i18n';
import { ProgressBar, cx } from '../ui';

const STAGES: { id: AcademyModuleStage; num: number; label: Tr }[] = [
  { id: 'theory', num: 1, label: { bn: 'থিওরি', en: 'Theory', it: 'Teoria' } },
  { id: 'study', num: 2, label: { bn: 'অধ্যয়ন', en: 'Study', it: 'Studio' } },
  { id: 'drill', num: 3, label: { bn: 'ড্রিল', en: 'Drill', it: 'Esercizi' } },
  { id: 'exam', num: 4, label: { bn: 'পরীক্ষা', en: 'Exam', it: 'Esame' } },
  { id: 'result', num: 5, label: { bn: 'ফলাফল', en: 'Result', it: 'Risultato' } },
];

export interface StageFlowHeaderProps {
  title?: string;
  subtitle?: string;
  backTo: string;
  currentStage: AcademyModuleStage;
  unlockedStages: Record<AcademyModuleStage, boolean>;
  completedStages: Record<AcademyModuleStage, boolean>;
  onSelectStage: (stage: AcademyModuleStage) => void;
}

export function StageFlowHeader({
  title,
  backTo,
  currentStage,
  unlockedStages,
  completedStages,
  onSelectStage,
}: StageFlowHeaderProps) {
  const { navigate } = useRouter();
  const { tr } = useI18n();
  const completedCount = STAGES.filter((s) => completedStages[s.id]).length;
  const progressValue = Math.max(0.08, completedCount / STAGES.length);

  return (
    <div className="space-y-1.5 pb-1 border-b border-white/10">
      <div className="flex items-center gap-2.5">
        <button
          type="button"
          onClick={() => navigate(backTo)}
          aria-label={title ? `${tr({ bn: 'ফিরুন', en: 'Back', it: 'Indietro' })}: ${title}` : tr({ bn: 'ফিরুন', en: 'Back', it: 'Indietro' })}
          className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-ink-2 hover:border-neon/40 hover:text-white transition"
        >
          <ArrowLeft size={16} />
        </button>

        <div className="flex-1 min-w-0">
          <ProgressBar value={progressValue} className="h-1.5" />
        </div>

        <span className="shrink-0 text-[11px] font-extrabold text-neon tabular-nums">
          {completedCount}/{STAGES.length}
        </span>
      </div>

      <nav aria-label="Module learning stages" className="grid grid-cols-5 gap-0.5">
        {STAGES.map((stage) => {
          const active = stage.id === currentStage;
          const done = completedStages[stage.id];
          const unlocked = unlockedStages[stage.id];
          return (
            <button
              key={stage.id}
              type="button"
              disabled={!unlocked}
              onClick={() => {
                if (unlocked) onSelectStage(stage.id);
              }}
              aria-current={active ? 'step' : undefined}
              aria-label={`${stage.num}. ${tr(stage.label)}${!unlocked ? ' (Locked)' : done ? ' (Completed)' : ''}`}
              className={cx(
                'flex min-h-9 items-center justify-center gap-1 border-b-2 px-1 py-1 text-center transition',
                active
                  ? 'border-neon text-white font-extrabold'
                  : done
                    ? 'border-transparent text-neon/90 hover:text-neon font-bold'
                    : unlocked
                      ? 'border-transparent text-ink-2 hover:text-white font-semibold'
                      : 'cursor-not-allowed border-transparent text-ink-3/65 opacity-55 font-medium',
              )}
            >
              <span className="flex items-center justify-center gap-0.5 text-[11px] tabular-nums shrink-0">
                {done ? (
                  <Check size={11} strokeWidth={3} className="text-neon shrink-0" />
                ) : !unlocked ? (
                  <Lock size={10} className="text-ink-3 shrink-0" />
                ) : (
                  <span>{stage.num}.</span>
                )}
              </span>
              <span className="bn truncate text-[11px] leading-tight">
                {tr(stage.label)}
              </span>
            </button>
          );
        })}
      </nav>
    </div>
  );
}
