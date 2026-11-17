import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { beforeEach, describe, expect, it } from 'vitest';
import { RouterProvider } from '../src/app/router';
import { Screen } from '../src/app/App';
import { A1_ACADEMY_MODULES, A2_ACADEMY_MODULES, B1_ACADEMY_MODULES, B2_ACADEMY_MODULES } from '../src/content/academy/curriculum';
import { RICH_WORDS } from '../src/content/bank';
import { buildDailyPlanEntries, openDailyPlanActivity } from '../src/lib/dailyPlanNavigation';
import { loadModulePosition, saveModulePosition } from '../src/lib/modulePosition';
import { buildDailyReviewQuiz } from '../src/lib/reviewQuiz';
import { buildPrioritizedRoundWords, getVocabRevisionSummary } from '../src/lib/vocabRevision';
import { HomeScreen } from '../src/screens/HomeScreen';
import { ArticlesModuleScreen } from '../src/screens/academy/ArticlesModuleScreen';
import { LevelModuleScreen } from '../src/screens/academy/LevelModuleScreen';
import { ListeningScreen } from '../src/screens/practice/ListeningScreen';
import { MistakesScreen } from '../src/screens/practice/MistakesScreen';
import { WordBankScreen } from '../src/screens/practice/WordBankScreen';
import { ProgressProvider } from '../src/state/ProgressContext';
import { dailyPlan } from '../src/state/plan';
import { initialState, reducer, type ProgressState } from '../src/state/progress';
import { loadProgress, saveProgress } from '../src/state/storage';

const TODAY = '2026-11-17';

function completeModule(
  state: ProgressState,
  level: 'A1' | 'A2' | 'B1' | 'B2',
  moduleId: string,
  requiredItemIds: string[],
  examQuestionCount: number,
  maxIncorrect: number,
): ProgressState {
  let next = reducer(state, { type: 'completeAcademyTheory', moduleId, level });
  for (const itemId of requiredItemIds) {
    next = reducer(next, { type: 'studyAcademyItem', moduleId, itemId, level });
  }
  next = reducer(next, {
    type: 'submitAcademyExam',
    attemptId: `pass-${level}-${moduleId}`,
    moduleId,
    level,
    total: examQuestionCount,
    correct: examQuestionCount,
    incorrect: 0,
    maxIncorrect,
    today: TODAY,
  });
  return next;
}

describe("Daily Learning Plan Navigation & Deep Linking", () => {
  const store = new Map<string, string>();

  const setHash = (hash: string) => {
    Object.defineProperty(globalThis, 'window', {
      value: {
        location: { hash, search: '' },
        history: { length: 1, back: () => {} },
        addEventListener: () => {},
        removeEventListener: () => {},
        scrollTo: () => {},
      },
      configurable: true,
      writable: true,
    });
  };

  beforeEach(() => {
    store.clear();
    const mockStorage = {
      getItem: (key: string) => store.get(key) ?? null,
      setItem: (key: string, val: string) => {
        store.set(key, String(val));
      },
      removeItem: (key: string) => {
        store.delete(key);
      },
      clear: () => store.clear(),
    };
    Object.defineProperty(globalThis, 'localStorage', {
      value: mockStorage,
      configurable: true,
      writable: true,
    });
    setHash('#/');
    Object.defineProperty(globalThis, 'document', {
      value: { visibilityState: 'visible' },
      configurable: true,
      writable: true,
    });
  });

  it('1. maps all 4 Daily Plan activities to exact CEFR deep links for A1, A2, B1, and B2 (never generic /courses or practice hub)', () => {
    for (const level of ['A1', 'A2', 'B1', 'B2'] as const) {
      const s = reducer(initialState(), { type: 'setCurrentLevel', level });
      const plan = dailyPlan(s, TODAY);
      expect(plan).toHaveLength(4);

      const lesson = plan.find((p) => p.task === 'lesson')!;
      const listening = plan.find((p) => p.task === 'listening')!;
      const vocab = plan.find((p) => p.task === 'vocab')!;
      const review = plan.find((p) => p.task === 'review')!;

      const firstMod =
        level === 'A1'
          ? A1_ACADEMY_MODULES[0]!
          : level === 'A2'
            ? A2_ACADEMY_MODULES[0]!
            : level === 'B1'
              ? B1_ACADEMY_MODULES[0]!
              : B2_ACADEMY_MODULES[0]!;

      expect(lesson.action.level).toBe(level);
      expect(lesson.action.targetId).toBe(firstMod.id);
      expect(lesson.route).toBe(`${firstMod.route}?from=home&activity=lesson&level=${level}`);
      expect(lesson.route).not.toContain('/courses');

      expect(listening.action.level).toBe(level);
      expect(listening.route).toBe(`/practice/listening?level=${level}&from=home&activity=listening`);

      expect(vocab.action.level).toBe(level);
      expect(vocab.route).toBe(`/practice/words?level=${level}&mode=recall&revision=1&from=home&activity=vocab`);
      expect(vocab.action.sessionConfig.prioritizeBookmarked).toBe(true);
      expect(vocab.action.sessionConfig.prioritizeWeakAndDue).toBe(true);
      expect(vocab.action.sessionConfig.prioritizeStudied).toBe(true);

      expect(review.action.level).toBe(level);
      expect(review.route).toBe(`/practice/mistakes?mode=quiz&level=${level}&from=home&activity=review`);
    }
  });

  it('2. resolves New Lesson directly to the next incomplete module when earlier modules are completed', () => {
    let s = initialState();
    const mod1 = A1_ACADEMY_MODULES[0]!;
    s = completeModule(s, 'A1', mod1.id, mod1.requiredItemIds, mod1.examQuestionCount, mod1.maxIncorrect);

    const a1Next = A1_ACADEMY_MODULES[1]!;
    const a1Plan = dailyPlan(s, TODAY);
    expect(a1Plan[0]!.action.targetId).toBe(a1Next.id);
    expect(a1Plan[0]!.route).toBe(`${a1Next.route}?from=home&activity=lesson&level=A1`);

    s = reducer(s, { type: 'setCurrentLevel', level: 'A2' });
    const a2First = A2_ACADEMY_MODULES[0]!;
    s = completeModule(s, 'A2', a2First.id, a2First.requiredItemIds, a2First.examQuestionCount, a2First.maxIncorrect);
    const a2Second = A2_ACADEMY_MODULES[1]!;
    const a2Plan = dailyPlan(s, TODAY);
    expect(a2Plan[0]!.action.targetId).toBe(a2Second.id);
    expect(a2Plan[0]!.route).toBe(`${a2Second.route}?from=home&activity=lesson&level=A2`);
  });

  it('3. saves and resumes module position (tab/stage) for Daily Plan New Lesson navigation', () => {
    saveModulePosition('A2', 'a2-tenses', { tab: 'practice' });
    expect(loadModulePosition('A2', 'a2-tenses')?.tab).toBe('practice');

    let s = reducer(initialState(), { type: 'setCurrentLevel', level: 'A2' });
    s = reducer(s, { type: 'setExplainLang', lang: 'en' });
    saveProgress(s);

    const entries = buildDailyPlanEntries(s, TODAY);
    expect(entries[0]!.action.sessionConfig.resumePosition).toBe(true);
    expect(entries[0]!.detail.en).toContain('resume progress');

    setHash('#/academy/a2/a2-tenses?from=home&activity=lesson&level=A2');
    const a2Html = renderToStaticMarkup(
      createElement(
        ProgressProvider,
        null,
        createElement(RouterProvider, null, createElement(LevelModuleScreen, { levelId: 'A2', moduleId: 'a2-tenses' })),
      ),
    );
    expect(a2Html).toContain('Interactive Grammar Practice');

    // A1 Articles tab resume also restores directly
    let sA1 = reducer(initialState(), { type: 'setExplainLang', lang: 'en' });
    for (const m of A1_ACADEMY_MODULES.slice(0, 3)) {
      sA1 = completeModule(sA1, 'A1', m.id, m.requiredItemIds, m.examQuestionCount, m.maxIncorrect);
    }
    saveProgress(sA1);
    saveModulePosition('A1', 'articles', { tab: 'examples' });
    setHash('#/academy/a1/articles?from=home&activity=lesson&level=A1');
    const artHtml = renderToStaticMarkup(
      createElement(
        ProgressProvider,
        null,
        createElement(RouterProvider, null, createElement(ArticlesModuleScreen)),
      ),
    );
    expect(artHtml).toContain('All Examples');
  });

  it('4. prioritizes bookmarked, weak/due SRS, and previously studied words in Daily Vocabulary Revision', () => {
    const a2Pool = RICH_WORDS.A2;
    const bookmarkedAndWeak = a2Pool[10]!;
    const bookmarkedOnly = a2Pool[15]!;
    const dueOnly = a2Pool[20]!;
    const studiedTopicWord = a2Pool.find(
      (w) =>
        w.key !== bookmarkedAndWeak.key &&
        w.key !== bookmarkedOnly.key &&
        w.key !== dueOnly.key &&
        w.tr.en !== bookmarkedAndWeak.tr.en &&
        w.tr.en !== bookmarkedOnly.tr.en &&
        w.tr.en !== dueOnly.tr.en,
    )!;

    let s = reducer(initialState(), { type: 'setCurrentLevel', level: 'A2' });
    s = reducer(s, { type: 'setExplainLang', lang: 'en' });
    s = reducer(s, { type: 'toggleSaved', key: bookmarkedAndWeak.key });
    s = reducer(s, { type: 'toggleSaved', key: bookmarkedOnly.key });
    s = reducer(s, { type: 'addCards', keys: [bookmarkedAndWeak.key, dueOnly.key], today: TODAY });
    s = reducer(s, { type: 'reviewCard', key: bookmarkedAndWeak.key, remembered: false, today: TODAY });
    s = reducer(s, {
      type: 'studyAcademyItem',
      moduleId: 'a2-vocab',
      level: 'A2',
      itemId: `topic:A2:${studiedTopicWord.topic.en}`,
    });

    const summary = getVocabRevisionSummary(s, 'A2', TODAY);
    expect(summary.bookmarkedCount).toBe(2);
    expect(summary.weakOrDueCount).toBeGreaterThanOrEqual(2);
    expect(summary.studiedCount).toBeGreaterThanOrEqual(2);

    const round = buildPrioritizedRoundWords(a2Pool, s, 'A2', TODAY, 6, () => 0.1);
    expect(round).toHaveLength(6);
    expect(round[0]!.key).toBe(bookmarkedAndWeak.key);
    expect(round.some((w) => w.key === bookmarkedOnly.key)).toBe(true);
    expect(round.some((w) => w.key === dueOnly.key)).toBe(true);

    // Deep-linked WordBankScreen opens A2 Word Recall directly with daily revision banner
    saveProgress(s);
    setHash('#/practice/words?level=A2&mode=recall&revision=1&from=home&activity=vocab');
    const html = renderToStaticMarkup(
      createElement(
        ProgressProvider,
        null,
        createElement(RouterProvider, null, createElement(WordBankScreen)),
      ),
    );
    expect(html).toContain(`A2 · ${a2Pool.length} words`);
    expect(html).toContain('A2 Daily Vocabulary Revision');
    expect(html).toContain('Reveal answer');
    expect(html).not.toMatch(/\bXP\b/i);
  });

  it('5. renders ListeningScreen directly at the active CEFR level when opened from Today’s Learning Plan', () => {
    const s = reducer(reducer(initialState(), { type: 'setCurrentLevel', level: 'B1' }), {
      type: 'setExplainLang',
      lang: 'en',
    });
    saveProgress(s);
    setHash('#/practice/listening?level=B1&from=home&activity=listening');

    const html = renderToStaticMarkup(
      createElement(
        ProgressProvider,
        null,
        createElement(RouterProvider, null, createElement(ListeningScreen)),
      ),
    );
    expect(html).toContain('Listening Lab');
    // B1 tab has active selected styling
    expect(html).toContain('aria-selected="true"');
  });

  it('6. builds CEFR-specific Review & Quiz questions combining mistakes, completed/studied modules, and vocab across A1–B2', async () => {
    for (const level of ['A1', 'A2', 'B1', 'B2'] as const) {
      let s = reducer(initialState(), { type: 'setCurrentLevel', level });
      const firstMod =
        level === 'A1'
          ? A1_ACADEMY_MODULES[2]!
          : level === 'A2'
            ? A2_ACADEMY_MODULES[0]!
            : level === 'B1'
              ? B1_ACADEMY_MODULES[0]!
              : B2_ACADEMY_MODULES[0]!;
      s = reducer(s, { type: 'completeAcademyTheory', moduleId: firstMod.id, level });
      for (const itemId of firstMod.requiredItemIds.slice(0, 2)) {
        s = reducer(s, { type: 'studyAcademyItem', moduleId: firstMod.id, itemId, level });
      }
      if (level === 'A1') {
        s = reducer(s, {
          type: 'submitQuiz',
          lessonId: 'a1-u1-l1',
          today: TODAY,
          results: [{ questionId: 'q1', correct: false, chosen: 'Wrong' }],
        });
      }

      const session = await buildDailyReviewQuiz(s, level, 8, () => 0.2);
      expect(session.level).toBe(level);
      expect(session.questions.length).toBeGreaterThanOrEqual(6);
      expect(session.questions.length).toBeLessThanOrEqual(8);
      if (level === 'A1') {
        expect(session.sourceSummary.mistakes).toBeGreaterThanOrEqual(1);
      }
    }

    // Deep-linked MistakesScreen in quiz mode opens review quiz directly
    saveProgress(reducer(initialState(), { type: 'setExplainLang', lang: 'en' }));
    setHash('#/practice/mistakes?mode=quiz&level=A2&from=home&activity=review');
    const reviewHtml = renderToStaticMarkup(
      createElement(
        ProgressProvider,
        null,
        createElement(RouterProvider, null, createElement(MistakesScreen)),
      ),
    );
    expect(reviewHtml).toContain('A2 Review &amp; Quiz');
  });

  it('7. never marks daily activities complete merely on view/no-due-cards and persists true completions without duplicates across reload', () => {
    let s = reducer(initialState(), { type: 'setCurrentLevel', level: 'A2' });
    // Even if cards exist in deck with future due date, vocab is NOT auto-completed without today's practice
    s = reducer(s, { type: 'addCards', keys: [RICH_WORDS.A2[0]!.key], today: TODAY });
    s = reducer(s, { type: 'reviewCard', key: RICH_WORDS.A2[0]!.key, remembered: true, today: TODAY });

    const beforePlan = dailyPlan(s, TODAY);
    expect(beforePlan.every((p) => p.done === false)).toBe(true);

    // Complete each activity genuinely and repeat once to verify deduplication
    const mod1 = A2_ACADEMY_MODULES[0]!;
    s = completeModule(s, 'A2', mod1.id, mod1.requiredItemIds, mod1.examQuestionCount, mod1.maxIncorrect);
    s = reducer(s, { type: 'recordListening', exerciseId: 'a2-l1', score: 0.9, today: TODAY });
    s = reducer(s, { type: 'recordListening', exerciseId: 'a2-l1', score: 1.0, today: TODAY });
    s = reducer(s, { type: 'completeTask', task: 'vocab', today: TODAY });
    s = reducer(s, { type: 'completeTask', task: 'vocab', today: TODAY });
    s = reducer(s, { type: 'completeTask', task: 'review', today: TODAY });

    expect(s.days[TODAY]!.tasks).toHaveLength(4);
    expect(new Set(s.days[TODAY]!.tasks).size).toBe(4);

    saveProgress(s);
    const reloaded = loadProgress();
    const afterPlan = dailyPlan(reloaded, TODAY);
    expect(afterPlan.every((p) => p.done === true)).toBe(true);
    expect(afterPlan.reduce((sum, item) => sum + item.minutes, 0)).toBe(reloaded.settings.dailyGoalMinutes);
  });

  it('8. handles unavailable actions safely and renders HomeScreen cleanly in BN, EN, and IT without XP/badges', () => {
    let navigatedTo: string | null = null;
    let noticeMsg: string | null = null;
    const blocked = openDailyPlanActivity(
      {
        route: '/level/A2?from=home',
        action: {
          actionId: 'test:blocked',
          activityType: 'lesson',
          level: 'A2',
          targetId: 'none',
          route: '/level/A2?from=home',
          available: false,
          unavailableReason: { bn: 'প্রস্তুত হচ্ছে', en: 'Unavailable right now', it: 'Non disponibile' },
          sessionConfig: { source: 'daily-plan' },
        },
      },
      (to) => {
        navigatedTo = to;
      },
      (reason) => {
        noticeMsg = reason.en;
      },
    );
    expect(blocked).toBe(false);
    expect(navigatedTo).toBeNull();
    expect(noticeMsg).toBe('Unavailable right now');

    for (const lang of ['bn', 'en', 'it'] as const) {
      let s = reducer(initialState(), { type: 'setExplainLang', lang });
      s = reducer(s, { type: 'setCurrentLevel', level: 'A2' });
      saveProgress(s);

      setHash('#/');
      const html = renderToStaticMarkup(
        createElement(
          ProgressProvider,
          null,
          createElement(RouterProvider, null, createElement(HomeScreen)),
        ),
      );
      expect(html).toContain('data-daily-activity="lesson"');
      expect(html).toContain('data-daily-activity="listening"');
      expect(html).toContain('data-daily-activity="vocab"');
      expect(html).toContain('data-daily-activity="review"');
      expect(html).toContain('data-daily-level="A2"');
      expect(html).toContain('0/4');
      expect(html).not.toMatch(/\bXP\b/i);
      expect(html).not.toMatch(/\bstreak\b/i);
    }
  });

  it('9. removes legacy LessonScreen and AssessmentScreen routes and redirects them into the Academy path', () => {
    saveProgress(reducer(initialState(), { type: 'setExplainLang', lang: 'bn' }));

    setHash('#/lesson/a1-u1-l1');
    const legacyLessonHtml = renderToStaticMarkup(
      createElement(
        ProgressProvider,
        null,
        createElement(RouterProvider, null, createElement(Screen)),
      ),
    );
    expect(legacyLessonHtml).toContain('A1 — Beginner');
    expect(legacyLessonHtml).not.toContain('Saluti e Presentazioni');
    expect(legacyLessonHtml).not.toContain('এই পাঠে আপনি শিখবেন');

    setHash('#/assessment/A1/assess-a1-u1');
    const legacyAssessmentHtml = renderToStaticMarkup(
      createElement(
        ProgressProvider,
        null,
        createElement(RouterProvider, null, createElement(Screen)),
      ),
    );
    expect(legacyAssessmentHtml).toContain('A1 — Beginner');
    expect(legacyAssessmentHtml).not.toContain('Assessment not found');
  });
});
