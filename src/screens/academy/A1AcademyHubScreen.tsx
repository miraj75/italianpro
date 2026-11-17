import { FlaskConical } from 'lucide-react';
import { useRouter } from '../../app/router';
import { useI18n } from '../../lib/i18n';
import { useProgress } from '../../state/ProgressContext';
import { isShowAllLockedModulesEnabled } from '../../state/progress';
import { overallA1AcademyProgress } from '../../state/academyProgress';
import { buildA1LearningPathNodes } from '../../lib/courseOverview';
import { ProgressBar } from '../../components/ui';
import { SubHeader } from '../../components/SubHeader';
import { LearningPathTimeline } from '../../components/LearningPathTimeline';

/**
 * Main A1 Learning Hub opened from Courses -> A1 — Beginner.
 * Displays all 11 CEFR A1 modules as a single-column connected vertical learning path.
 */
export function A1AcademyHubScreen() {
  const { state } = useProgress();
  const { navigate } = useRouter();
  const { t, tr } = useI18n();
  const summary = overallA1AcademyProgress(state.academy);
  const nodes = buildA1LearningPathNodes(state);
  const testingMode = isShowAllLockedModulesEnabled(state);
  const pct = Math.round((summary.completedCount / Math.max(1, summary.totalModules)) * 100);

  return (
    <div className="animate-rise space-y-4">
      <SubHeader
        title="A1 — Beginner"
        subtitle={tr({
          bn: 'লার্নিং পাথ: ধাপে ধাপে সম্পূর্ণ A1 পাঠ্যক্রম',
          en: 'Learning Path: Complete step-by-step A1 curriculum',
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

      {/* Compact single-strip overall A1 path completion */}
      <div className="glass rounded-2xl border border-neon/25 px-4 py-3 space-y-2">
        <div className="flex items-center justify-between gap-2 text-xs font-bold text-ink-2 tabular-nums">
          <span className="bn">
            {t('modulesProgress', { done: summary.completedCount, total: summary.totalModules })}
          </span>
          <span className="text-sm font-extrabold text-neon">{pct}%</span>
        </div>
        <ProgressBar value={summary.completedCount / Math.max(1, summary.totalModules)} className="h-2" />
      </div>

      {/* Connected Vertical Learning Path (1..11) */}
      <LearningPathTimeline
        nodes={nodes}
        allowLockedAccess={testingMode}
        onSelectNode={(node) => navigate(node.route)}
      />
    </div>
  );
}
