import { CheckCircle2, FlaskConical } from 'lucide-react';
import type { LevelId } from '../../content/types';
import { getLevel } from '../../content/courses';
import { useRouter } from '../../app/router';
import { useI18n } from '../../lib/i18n';
import { useProgress } from '../../state/ProgressContext';
import { getCurrentLevel, isShowAllLockedModulesEnabled } from '../../state/progress';
import { overallAcademyProgress } from '../../state/academyProgress';
import { buildLevelLearningPathNodes } from '../../lib/courseOverview';
import { ProgressBar } from '../../components/ui';
import { SubHeader } from '../../components/SubHeader';
import { LearningPathTimeline } from '../../components/LearningPathTimeline';

/**
 * Connected Vertical Learning Hub for CEFR A2, B1, and B2 Academies.
 * Mirrors A1AcademyHubScreen architectural standards with independent per-level progress.
 */
export function LevelAcademyHubScreen({ levelId }: { levelId: LevelId }) {
  const { state, dispatch } = useProgress();
  const { navigate } = useRouter();
  const { t, tr } = useI18n();

  const level = getLevel(levelId);
  const summary = overallAcademyProgress(state.academy, levelId);
  const nodes = buildLevelLearningPathNodes(state, levelId);
  const testingMode = isShowAllLockedModulesEnabled(state);
  const isActive = getCurrentLevel(state) === levelId;
  const pct = Math.round((summary.completedCount / Math.max(1, summary.totalModules)) * 100);

  return (
    <div className="animate-rise space-y-4">
      <SubHeader
        title={`${level.id} — ${tr(level.name)}`}
        subtitle={tr({
          bn: `লার্নিং পাথ: ধাপে ধাপে সম্পূর্ণ ${level.id} পাঠ্যক্রম`,
          en: `Learning Path: Complete step-by-step ${level.id} curriculum`,
          it: `Percorso di studio: programma completo ${level.id}`,
        })}
        backTo="/courses"
      />

      {testingMode && (
        <div
          role="status"
          className="flex items-center gap-2.5 rounded-2xl border border-gold/50 bg-gold/10 px-4 py-2.5 text-xs font-extrabold text-gold"
        >
          <FlaskConical size={16} className="shrink-0" />
          <span className="bn flex-1">
            {t('testingModeOn')} · {t('showAllLockedModules')}
          </span>
        </div>
      )}

      {/* Compact single-strip overall level progress + Active Course selector */}
      <div className="glass rounded-2xl border border-neon/25 px-4 py-3 space-y-2">
        <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-bold text-ink-2 tabular-nums">
          <span className="bn">
            {t('modulesProgress', { done: summary.completedCount, total: summary.totalModules })}
          </span>
          <div className="flex items-center gap-2">
            {isActive ? (
              <span className="inline-flex items-center gap-1 rounded-full border border-neon/40 bg-neon/12 px-2.5 py-0.5 text-[11px] font-extrabold text-neon">
                <CheckCircle2 size={12} /> {t('activeCourse')}
              </span>
            ) : (
              <button
                type="button"
                onClick={() => dispatch({ type: 'setCurrentLevel', level: levelId })}
                className="rounded-full border border-cyan/40 bg-cyan/10 px-2.5 py-0.5 text-[11px] font-extrabold text-cyan transition hover:border-cyan"
              >
                {t('setActiveCourse')}
              </button>
            )}
            <span className="text-sm font-extrabold text-neon">{pct}%</span>
          </div>
        </div>
        <ProgressBar value={summary.completedCount / Math.max(1, summary.totalModules)} className="h-2" />
      </div>

      {/* Connected Vertical Learning Path */}
      <LearningPathTimeline
        nodes={nodes}
        allowLockedAccess={testingMode}
        onSelectNode={(node) => navigate(node.route)}
      />
    </div>
  );
}
