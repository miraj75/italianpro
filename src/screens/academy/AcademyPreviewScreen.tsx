import { ArrowLeft, FlaskConical, Lock } from 'lucide-react';
import { findAcademyModule } from '../../content/academy/curriculum';
import type { A1AcademyModuleId } from '../../content/academy/types';
import { useRouter } from '../../app/router';
import { useI18n } from '../../lib/i18n';
import { useProgress } from '../../state/ProgressContext';
import { isShowAllLockedModulesEnabled } from '../../state/progress';
import { Button, GlassCard } from '../../components/ui';

/**
 * Preview / lock gate screen for upcoming Phase B and Phase C A1 modules.
 * In Developer Testing Mode, renders a clean curriculum preview without granting completion or XP.
 */
export function AcademyPreviewScreen({ moduleId }: { moduleId: A1AcademyModuleId }) {
  const { state } = useProgress();
  const { navigate } = useRouter();
  const { t, tr } = useI18n();
  const meta = findAcademyModule(moduleId);
  const testingMode = isShowAllLockedModulesEnabled(state);

  if (!meta) return null;

  const localizedTitle = tr({ bn: meta.subtitle.bn, en: meta.title, it: meta.title });

  const compactBack = (
    <div className="flex items-center gap-2.5 pb-1 border-b border-white/10">
      <button
        type="button"
        onClick={() => navigate('/level/A1')}
        aria-label={tr({ bn: 'ফিরুন', en: 'Back', it: 'Indietro' })}
        className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-ink-2 hover:border-neon/40 hover:text-white transition"
      >
        <ArrowLeft size={16} />
      </button>
      <span className="text-xs font-extrabold text-ink-2 truncate">
        A1 · {meta.order}. {localizedTitle}
      </span>
    </div>
  );

  if (!testingMode) {
    return (
      <div className="animate-rise space-y-3">
        {compactBack}
        <GlassCard className="p-6 text-center space-y-4">
          <Lock className="mx-auto text-gold" size={38} />
          <p className="bn text-base font-bold text-ink-2">{t('academyModuleLocked')}</p>
          <Button onClick={() => navigate('/level/A1')}>{t('backToCourses')}</Button>
        </GlassCard>
      </div>
    );
  }

  return (
    <div className="animate-rise space-y-3">
      {compactBack}

      <div
        role="status"
        className="flex items-start gap-2.5 rounded-2xl border border-gold/50 bg-gold/10 px-4 py-3 text-xs font-extrabold text-gold"
      >
        <FlaskConical size={16} className="mt-0.5 shrink-0" />
        <span className="bn">{t('testingModePreviewBanner')}</span>
      </div>

      <GlassCard className="p-5 space-y-4">
        <div className="flex items-center justify-between gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-xs font-extrabold text-gold">
            <Lock size={13} />
            <span>
              {t('lockedLabel')} · {tr({ bn: `ধাপ ${meta.phase}`, en: `Phase ${meta.phase}`, it: `Fase ${meta.phase}` })}
            </span>
          </span>
          <span className="text-xs font-bold text-ink-2 tabular-nums">
            {tr({
              bn: `${meta.examQuestionCount}টি প্রশ্ন`,
              en: `${meta.examQuestionCount} Questions`,
              it: `${meta.examQuestionCount} domande`,
            })}
          </span>
        </div>

        <div className="space-y-1.5">
          <h2 className="bn text-xl font-extrabold text-white">
            {meta.order}. {localizedTitle}
          </h2>
          <p className="bn text-base font-semibold text-mint">{tr(meta.subtitle)}</p>
          <p className="bn text-sm leading-relaxed text-ink-2">{tr(meta.description)}</p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-3.5 text-xs font-semibold text-ink-2">
          <p className="bn">{t('academyPhaseNext', { phase: meta.phase })}</p>
        </div>

        <Button variant="ghost" onClick={() => navigate('/level/A1')} className="w-full">
          {t('backToCourses')}
        </Button>
      </GlassCard>
    </div>
  );
}
