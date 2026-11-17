import { useMemo } from 'react';
import { ArrowLeft, FlaskConical, Lock } from 'lucide-react';
import type { LevelId } from '../../content/types';
import {
  findAcademyModule,
  getPreviousAcademyModule,
  inferLevelFromModuleId,
  isFinalExamModuleId,
} from '../../content/academy/curriculum';
import { useRouter } from '../../app/router';
import { useI18n } from '../../lib/i18n';
import { useProgress, useStudyTimer } from '../../state/ProgressContext';
import { isShowAllLockedModulesEnabled } from '../../state/progress';
import {
  academyStudyStats,
  getAcademyModuleProgress,
  isAcademyModuleUnlocked,
} from '../../state/academyProgress';
import { Button, GlassCard, ProgressBar } from '../../components/ui';
import { A2FinalExamFlow } from '../../components/academy/A2FinalExamFlow';
import { GrammarModuleView } from './views/GrammarModuleView';
import { VerbsModuleView } from './views/VerbsModuleView';
import { LevelVocabularyView } from './views/LevelVocabularyView';
import { SentencesModuleView } from './views/SentencesModuleView';
import { SkillsModuleView } from './views/SkillsModuleView';
import { A2CommunicationView } from './views/A2CommunicationView';

/**
 * Unified module screen router for CEFR A2, B1, and B2 Academy modules.
 * Uses compact inline header + progress strip so learning content takes priority.
 */
export function LevelModuleScreen({ levelId, moduleId }: { levelId: LevelId; moduleId: string }) {
  useStudyTimer();
  const { state, dispatch } = useProgress();
  const { route, navigate } = useRouter();
  const { t, tr } = useI18n();

  const resolvedLevel = (levelId === 'A2' || levelId === 'B1' || levelId === 'B2'
    ? levelId
    : inferLevelFromModuleId(moduleId)) as 'A2' | 'B1' | 'B2';
  const backRoute = route.params.get('from') === 'home' ? '/' : `/level/${resolvedLevel}`;

  const meta = findAcademyModule(moduleId, resolvedLevel);
  const prev = meta ? getPreviousAcademyModule(meta.id, resolvedLevel) : undefined;
  const unlocked = meta ? isAcademyModuleUnlocked(state.academy, meta.id, resolvedLevel) : false;
  const testingOverride = !unlocked && isShowAllLockedModulesEnabled(state);
  const modProg = meta ? getAcademyModuleProgress(state.academy, meta.id, resolvedLevel) : undefined;
  const studiedSet = useMemo(() => new Set(modProg?.studiedItems ?? []), [modProg?.studiedItems]);
  const stats = meta
    ? academyStudyStats(state.academy, meta.id, resolvedLevel)
    : { studied: 0, remaining: 0, total: 0, readyForExam: false };

  if (!meta) {
    return (
      <div className="animate-rise space-y-3">
        <div className="flex items-center gap-2.5 pb-1 border-b border-white/10">
          <button
            type="button"
            onClick={() => navigate(backRoute)}
            aria-label={tr({ bn: 'ফিরুন', en: 'Back', it: 'Indietro' })}
            className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-ink-2 hover:border-neon/40 hover:text-white transition"
          >
            <ArrowLeft size={16} />
          </button>
          <span className="text-sm font-extrabold text-white">{resolvedLevel}</span>
        </div>
        <GlassCard className="p-6 text-center space-y-4">
          <p className="bn text-base font-bold text-ink-2">
            {tr({ bn: 'মডিউলটি পাওয়া যায়নি।', en: 'Module not found.', it: 'Modulo non trovato.' })}
          </p>
          <Button onClick={() => navigate(backRoute)}>{t('backToCourses')}</Button>
        </GlassCard>
      </div>
    );
  }

  if (!unlocked && !testingOverride) {
    return (
      <div className="animate-rise space-y-3">
        <div className="flex items-center gap-2.5 pb-1 border-b border-white/10">
          <button
            type="button"
            onClick={() => navigate(backRoute)}
            aria-label={tr({ bn: 'ফিরুন', en: 'Back', it: 'Indietro' })}
            className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-ink-2 hover:border-neon/40 hover:text-white transition"
          >
            <ArrowLeft size={16} />
          </button>
          <span className="text-sm font-extrabold text-white truncate">
            {meta.order}. {tr({ bn: meta.subtitle.bn, en: meta.title, it: meta.subtitle.it ?? meta.title })}
          </span>
        </div>
        <GlassCard className="p-6 text-center space-y-4">
          <Lock className="mx-auto text-gold" size={38} />
          <p className="bn text-base font-bold text-ink-2">{t('academyModuleLocked')}</p>
          {prev ? (
            <Button onClick={() => navigate(prev.route)}>
              {prev.order}. {tr({ bn: prev.subtitle.bn, en: prev.title, it: prev.subtitle.it ?? prev.title })}
            </Button>
          ) : (
            <Button onClick={() => navigate(`/level/${resolvedLevel}`)}>{t('backToCourses')}</Button>
          )}
        </GlassCard>
      </div>
    );
  }

  const markStudied = (itemId: string) => {
    dispatch({ type: 'studyAcademyItem', moduleId: meta.id, itemId, level: resolvedLevel });
  };

  const hasProgress = !isFinalExamModuleId(meta.id) && stats.total > 0;

  return (
    <div className="animate-rise space-y-3">
      {/* Compact Top Bar with integrated study progress */}
      <div className="flex items-center gap-2.5 pb-1 border-b border-white/10">
        <button
          type="button"
          onClick={() => navigate(backRoute)}
          aria-label={tr({ bn: 'ফিরুন', en: 'Back', it: 'Indietro' })}
          className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-ink-2 hover:border-neon/40 hover:text-white transition"
        >
          <ArrowLeft size={16} />
        </button>

        {hasProgress ? (
          <>
            <div className="flex-1 min-w-0">
              <ProgressBar value={stats.studied / Math.max(1, stats.total)} className="h-1.5" />
            </div>
            <span className="shrink-0 text-[11px] font-extrabold text-neon tabular-nums">
              {stats.studied}/{stats.total}
            </span>
          </>
        ) : (
          <span className="text-xs font-extrabold text-ink-2 truncate">
            {resolvedLevel} · {meta.order}. {tr({ bn: meta.subtitle.bn, en: meta.title, it: meta.subtitle.it ?? meta.title })}
          </span>
        )}
      </div>

      {testingOverride && (
        <div
          role="status"
          className="flex items-start gap-2.5 rounded-2xl border border-gold/50 bg-gold/10 px-4 py-3 text-xs font-extrabold text-gold"
        >
          <FlaskConical size={16} className="mt-0.5 shrink-0" />
          <span className="bn">{t('testingModePreviewBanner')}</span>
        </div>
      )}

      {meta.kind === 'grammar' && (
        <GrammarModuleView
          meta={meta}
          levelId={resolvedLevel}
          studiedSet={studiedSet}
          readyForExam={stats.readyForExam}
          previewMode={testingOverride}
          onMarkStudied={markStudied}
          onNavigateModule={(r) => navigate(r)}
        />
      )}

      {meta.kind === 'verbs' && (
        <VerbsModuleView
          meta={meta}
          levelId={resolvedLevel}
          studiedSet={studiedSet}
          readyForExam={stats.readyForExam}
          previewMode={testingOverride}
          onMarkStudied={markStudied}
          onNavigateModule={(r) => navigate(r)}
        />
      )}

      {(meta.kind === 'vocabulary' || meta.kind === 'idioms') && (
        <LevelVocabularyView
          meta={meta}
          levelId={resolvedLevel}
          studiedSet={studiedSet}
          readyForExam={stats.readyForExam}
          previewMode={testingOverride}
          onMarkStudied={markStudied}
          onNavigateModule={(r) => navigate(r)}
        />
      )}

      {meta.kind === 'sentences' && (
        <SentencesModuleView
          meta={meta}
          levelId={resolvedLevel}
          studiedSet={studiedSet}
          readyForExam={stats.readyForExam}
          previewMode={testingOverride}
          onMarkStudied={markStudied}
          onNavigateModule={(r) => navigate(r)}
        />
      )}

      {resolvedLevel === 'A2' && meta.kind === 'communication' && (
        <A2CommunicationView
          meta={meta}
          studiedSet={studiedSet}
          readyForExam={stats.readyForExam}
          previewMode={testingOverride}
          onMarkStudied={markStudied}
          onNavigateModule={(r) => navigate(r)}
        />
      )}

      {meta.id === 'a2-final-exam' && <A2FinalExamFlow previewMode={testingOverride} />}

      {(meta.kind === 'reading' ||
        meta.kind === 'listening' ||
        meta.kind === 'writing' ||
        meta.kind === 'speaking' ||
        meta.kind === 'writing-speaking' ||
        (meta.kind === 'final-exam' && meta.id !== 'a2-final-exam')) && (
        <SkillsModuleView
          meta={meta}
          levelId={resolvedLevel}
          studiedSet={studiedSet}
          readyForExam={stats.readyForExam}
          previewMode={testingOverride}
          onMarkStudied={markStudied}
          onNavigateModule={(r) => navigate(r)}
        />
      )}
    </div>
  );
}
