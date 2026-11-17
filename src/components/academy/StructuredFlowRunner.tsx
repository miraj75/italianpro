import { useEffect, useMemo, useState, type ReactNode } from 'react';
import { FlaskConical, Lock } from 'lucide-react';
import type {
  AcademyDrillItem,
  AcademyModuleId,
  AcademyModuleStage,
  AcademyTheoryConfig,
} from '../../content/academy/types';
import {
  findAcademyModule,
  getNextAcademyModule,
  getPreviousAcademyModule,
} from '../../content/academy/curriculum';
import { dayKey } from '../../lib/date';
import type { EvaluatedExamResult } from '../../lib/examEngine';
import { useI18n } from '../../lib/i18n';
import { loadModulePosition, saveModulePosition } from '../../lib/modulePosition';
import { useRouter } from '../../app/router';
import { useProgress, useStudyTimer } from '../../state/ProgressContext';
import {
  academyStudyStats,
  getAcademyModuleProgress,
  isAcademyModuleUnlocked,
} from '../../state/academyProgress';
import { isShowAllLockedModulesEnabled } from '../../state/progress';
import { SubHeader } from '../SubHeader';
import type { Tr } from '../../content/types';
import { Button, GlassCard } from '../ui';
import { ModuleCompletionScreen } from './ModuleCompletionScreen';
import { SectionExamScreen } from './SectionExamScreen';
import { SoundDrillScreen } from './SoundDrillScreen';
import { StageFlowHeader } from './StageFlowHeader';
import { type StudyListItem } from './StudyItemCard';
import { StudyListScreen, type StudyGroupedSection, type StudySequentialGroup } from './StudyListScreen';
import { TheoryLessonScreen } from './TheoryLessonScreen';

export interface StructuredStudyRenderContext {
  studiedSet: Set<string>;
  markItemStudied: (itemId: string) => void;
  studyCompleted: boolean;
  onContinueToDrill: () => void;
}

export interface StructuredFlowRunnerProps {
  moduleId: AcademyModuleId;
  backTo?: string;
  theoryConfig: AcademyTheoryConfig;
  studyTitle: Tr;
  studyItems: StudyListItem[];
  studySequentialGroups?: StudySequentialGroup[];
  studyGroupedSections?: StudyGroupedSection[];
  studyExtraRequiredIds?: string[];
  drillItems: AcademyDrillItem[];
  drillDistractorPool?: AcademyDrillItem[];
  /** Optional interactive content rendered below the study cards inside Stage 2 Study. */
  studyBottomSlot?: (ctx: StructuredStudyRenderContext) => ReactNode;
  /** Optional custom Stage 2 Study view replacing StudyListScreen (e.g. Listening+Speaking / Reading+Writing tabs). */
  renderCustomStudy?: (ctx: StructuredStudyRenderContext) => ReactNode;
}

/**
 * Reusable 5-stage Academy learning-flow orchestrator:
 * Stage 1: Theory / Study Material (scroll-to-end Continue gate)
 * Stage 2: Study List (tap-to-study required items, sticky Continue gate)
 * Stage 3: Interactive Sound Drill (auto-play, replay, feedback popup, non-repeating round)
 * Stage 4: Section Examination (randomized, max 3 mistakes allowed, fail restart without unlock)
 * Stage 5: Completion Result (score %, mistakes, breakdown, history, Continue to next module)
 */
export function StructuredFlowRunner({
  moduleId,
  backTo = '/level/A1',
  theoryConfig,
  studyItems,
  studySequentialGroups,
  studyGroupedSections,
  studyExtraRequiredIds,
  drillItems,
  drillDistractorPool,
  studyBottomSlot,
  renderCustomStudy,
}: StructuredFlowRunnerProps) {
  useStudyTimer();
  const { state, dispatch } = useProgress();
  const { route, navigate } = useRouter();
  const { t, tr } = useI18n();
  const resolvedBackTo = route.params.get('from') === 'home' ? '/' : backTo;

  const meta = findAcademyModule(moduleId, 'A1');
  const nextModule = getNextAcademyModule(moduleId, 'A1');
  const prevModule = getPreviousAcademyModule(moduleId, 'A1');

  const unlocked = isAcademyModuleUnlocked(state.academy, moduleId, 'A1');
  const testingOverride = !unlocked && isShowAllLockedModulesEnabled(state);
  const modProg = getAcademyModuleProgress(state.academy, moduleId, 'A1');
  const stats = academyStudyStats(state.academy, moduleId, 'A1');

  // Local preview state used ONLY when inspecting a locked module under Developer Testing Mode
  const [previewTheoryDone, setPreviewTheoryDone] = useState(false);
  const [previewStudiedIds, setPreviewStudiedIds] = useState<string[]>([]);
  const [previewDrillDone, setPreviewDrillDone] = useState(false);
  const [previewPassedResult, setPreviewPassedResult] = useState<EvaluatedExamResult | null>(null);

  const theoryCompleted = testingOverride ? previewTheoryDone : Boolean(modProg.theoryCompleted);
  const studiedSet = useMemo(
    () => new Set(testingOverride ? previewStudiedIds : modProg.studiedItems),
    [testingOverride, previewStudiedIds, modProg.studiedItems],
  );
  const studyCompleted = testingOverride
    ? studyItems.length > 0 &&
      studyItems.every((i) => studiedSet.has(i.id)) &&
      (!studyExtraRequiredIds || studyExtraRequiredIds.every((id) => studiedSet.has(id)))
    : stats.readyForExam;
  const drillCompleted = testingOverride ? previewDrillDone : Boolean(modProg.drillCompleted);
  const examPassed = testingOverride ? previewPassedResult !== null : modProg.completed;

  const unlockedStages: Record<AcademyModuleStage, boolean> = {
    theory: true,
    study: theoryCompleted,
    drill: theoryCompleted && studyCompleted,
    exam: theoryCompleted && studyCompleted && drillCompleted,
    result: theoryCompleted && studyCompleted && drillCompleted && examPassed,
  };

  const resolveDefaultStage = (): AcademyModuleStage => {
    if (testingOverride) return 'theory';
    const savedStage = loadModulePosition('A1', moduleId)?.stage as AcademyModuleStage | undefined;
    if (
      savedStage &&
      (savedStage === 'theory' ||
        savedStage === 'study' ||
        savedStage === 'drill' ||
        savedStage === 'exam' ||
        savedStage === 'result') &&
      unlockedStages[savedStage]
    ) {
      return savedStage;
    }
    if (!theoryCompleted) return 'theory';
    if (!studyCompleted) return 'study';
    if (!drillCompleted) return 'drill';
    if (!examPassed) return 'exam';
    return 'result';
  };

  const [stage, setStage] = useState<AcademyModuleStage>(resolveDefaultStage);
  const [latestPassResult, setLatestPassResult] = useState<EvaluatedExamResult | null>(null);

  // Persist current stage for seamless Daily Plan resume
  useEffect(() => {
    if (!unlocked || testingOverride) return;
    saveModulePosition('A1', moduleId, { stage });
  }, [unlocked, testingOverride, moduleId, stage]);

  // Sync stage if module unlocks / loads with different persisted stage
  useEffect(() => {
    if (!unlocked && !testingOverride) return;
    if (stage === 'study' && !theoryCompleted) setStage('theory');
    else if (stage === 'drill' && (!theoryCompleted || !studyCompleted)) {
      setStage(theoryCompleted ? 'study' : 'theory');
    } else if (stage === 'exam' && (!theoryCompleted || !studyCompleted || !drillCompleted)) {
      setStage(drillCompleted ? 'exam' : studyCompleted ? 'drill' : theoryCompleted ? 'study' : 'theory');
    } else if (stage === 'result' && !examPassed) {
      setStage(drillCompleted ? 'exam' : studyCompleted ? 'drill' : theoryCompleted ? 'study' : 'theory');
    }
  }, [unlocked, testingOverride, stage, theoryCompleted, studyCompleted, drillCompleted, examPassed]);

  if (!meta) return null;

  if (!unlocked && !testingOverride) {
    return (
      <div className="animate-rise space-y-4">
        <SubHeader title={meta.title} backTo={resolvedBackTo} />
        <GlassCard className="p-6 text-center space-y-4">
          <Lock className="mx-auto text-gold" size={38} />
          <p className="bn text-base font-bold text-ink-2">{t('academyModuleLocked')}</p>
          {prevModule && (
            <Button onClick={() => navigate(prevModule.route)}>
              {prevModule.order}. {prevModule.title}
            </Button>
          )}
        </GlassCard>
      </div>
    );
  }



  const completedStages: Record<AcademyModuleStage, boolean> = {
    theory: theoryCompleted,
    study: studyCompleted,
    drill: drillCompleted,
    exam: examPassed,
    result: examPassed,
  };

  const handleTheoryComplete = () => {
    if (testingOverride) {
      setPreviewTheoryDone(true);
    } else {
      dispatch({ type: 'completeAcademyTheory', moduleId, level: 'A1' });
    }
  };

  const markItemStudied = (itemId: string) => {
    if (testingOverride) {
      setPreviewStudiedIds((prev) => (prev.includes(itemId) ? prev : [...prev, itemId]));
    } else {
      dispatch({ type: 'studyAcademyItem', moduleId, itemId, level: 'A1' });
    }
  };

  const handleStudyItem = (item: StudyListItem) => {
    markItemStudied(item.id);
  };

  const studyCtx: StructuredStudyRenderContext = {
    studiedSet,
    markItemStudied,
    studyCompleted,
    onContinueToDrill: () => setStage('drill'),
  };

  const handleDrillComplete = ({ correct, total }: { correct: number; total: number }) => {
    if (testingOverride) {
      setPreviewDrillDone(true);
    } else {
      dispatch({
        type: 'completeAcademyDrill',
        moduleId,
        level: 'A1',
        correct,
        total,
        today: dayKey(),
      });
    }
  };

  const handleExamFailed = (evaluated: EvaluatedExamResult) => {
    if (testingOverride) return;
    dispatch({
      type: 'submitAcademyExam',
      attemptId: evaluated.attemptId,
      moduleId,
      level: 'A1',
      total: evaluated.total,
      correct: evaluated.correct,
      incorrect: evaluated.incorrect,
      maxIncorrect: evaluated.maxIncorrect,
      today: dayKey(),
    });
  };

  const handleExamPassed = (evaluated: EvaluatedExamResult) => {
    setLatestPassResult(evaluated);
    if (testingOverride) {
      setPreviewPassedResult(evaluated);
    } else {
      dispatch({
        type: 'submitAcademyExam',
        attemptId: evaluated.attemptId,
        moduleId,
        level: 'A1',
        total: evaluated.total,
        correct: evaluated.correct,
        incorrect: evaluated.incorrect,
        maxIncorrect: evaluated.maxIncorrect,
        today: dayKey(),
      });
    }
    setStage('result');
  };

  const subtitleText = testingOverride
    ? tr({
        bn: 'প্রিভিউ মোড (অগ্রগতি সংরক্ষণ হবে না)',
        en: 'Testing Preview Mode',
        it: 'Modalità anteprima test',
      })
    : tr(meta.subtitle);

  return (
    <div className="animate-rise space-y-3">
      <StageFlowHeader
        title={`${meta.order}. ${meta.title}`}
        subtitle={subtitleText}
        backTo={resolvedBackTo}
        currentStage={stage}
        unlockedStages={unlockedStages}
        completedStages={completedStages}
        onSelectStage={(nextStage) => {
          if (unlockedStages[nextStage]) {
            setStage(nextStage);
          }
        }}
      />

      {testingOverride && (
        <div
          role="status"
          className="flex items-start gap-2.5 rounded-2xl border border-gold/50 bg-gold/10 px-4 py-3 text-xs font-extrabold text-gold"
        >
          <FlaskConical size={16} className="mt-0.5 shrink-0" />
          <span className="bn">{t('testingModePreviewBanner')}</span>
        </div>
      )}

      {stage === 'theory' && (
        <TheoryLessonScreen
          config={theoryConfig}
          alreadyCompleted={theoryCompleted}
          previewMode={testingOverride}
          onComplete={handleTheoryComplete}
          onContinue={() => setStage('study')}
        />
      )}

      {stage === 'study' &&
        (renderCustomStudy ? (
          renderCustomStudy(studyCtx)
        ) : (
          <StudyListScreen
            items={studyItems}
            studiedSet={studiedSet}
            sequentialGroups={studySequentialGroups}
            groupedSections={studyGroupedSections}
            extraRequiredIds={studyExtraRequiredIds}
            extraBottomSlot={studyBottomSlot ? studyBottomSlot(studyCtx) : undefined}
            onStudyItem={handleStudyItem}
            onContinue={() => setStage('drill')}
          />
        ))}

      {stage === 'drill' && (
        <SoundDrillScreen
          drillItems={drillItems}
          distractorPool={drillDistractorPool}
          alreadyCompleted={drillCompleted}
          savedCorrect={modProg.drillCorrect}
          savedIncorrect={modProg.drillIncorrect}
          savedBestScore={modProg.drillBestScore}
          previewMode={testingOverride}
          onDrillComplete={handleDrillComplete}
          onContinueToExam={() => setStage('exam')}
        />
      )}

      {stage === 'exam' && (
        <SectionExamScreen
          moduleId={moduleId}
          previewMode={testingOverride}
          onAttemptFailed={handleExamFailed}
          onAttemptPassed={handleExamPassed}
          onReviewStudy={() => setStage('study')}
        />
      )}

      {stage === 'result' && (
        <ModuleCompletionScreen
          meta={meta}
          nextModule={nextModule}
          modProgress={modProg}
          latestResult={testingOverride ? previewPassedResult : latestPassResult}
          previewMode={testingOverride}
          onRetakeExam={() => setStage('exam')}
          onReviewStudy={() => setStage('study')}
          onContinueNext={(route) => navigate(route)}
        />
      )}
    </div>
  );
}
