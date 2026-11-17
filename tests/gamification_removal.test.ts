import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { beforeEach, describe, expect, it } from 'vitest';
import { AppShell } from '../src/app/AppShell';
import { RouterProvider } from '../src/app/router';
import { HomeScreen } from '../src/screens/HomeScreen';
import { ProfileScreen } from '../src/screens/ProfileScreen';
import { AboutScreen } from '../src/screens/InfoScreens';
import { translate } from '../src/lib/i18n';
import { ProgressProvider } from '../src/state/ProgressContext';
import {
  initialState,
  reducer,
  totalCompletedModules,
  totalStudySeconds,
  type ProgressState,
} from '../src/state/progress';
import { loadProgress, saveProgress } from '../src/state/storage';
import { A1_ACADEMY_MODULES } from '../src/content/academy/curriculum';

const STORAGE_KEY = 'italianpro.progress.v1';

describe('Gamification Removal & Clean Education Experience', () => {
  const store = new Map<string, string>();

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
      clear: () => {
        store.clear();
      },
    };
    Object.defineProperty(globalThis, 'localStorage', {
      value: mockStorage,
      configurable: true,
      writable: true,
    });
    Object.defineProperty(globalThis, 'window', {
      value: {
        location: { hash: '#/' },
        addEventListener: () => {},
        removeEventListener: () => {},
        scrollTo: () => {},
      },
      configurable: true,
      writable: true,
    });
    Object.defineProperty(globalThis, 'document', {
      value: { visibilityState: 'visible' },
      configurable: true,
      writable: true,
    });
  });

  it('1. renders exactly 4 navigation tabs (Home, Courses, Practice, Profile) without Challenge', () => {
    const s = reducer(initialState(), { type: 'setExplainLang', lang: 'en' });
    saveProgress(s);

    const html = renderToStaticMarkup(
      createElement(
        ProgressProvider,
        null,
        createElement(
          RouterProvider,
          null,
          createElement(AppShell, null, createElement('div', null, 'content')),
        ),
      ),
    );

    expect(html).toContain('>Home<');
    expect(html).toContain('>Courses<');
    expect(html).toContain('>Practice<');
    expect(html).toContain('>Profile<');
    expect(html).not.toContain('Challenge');
    expect(html).not.toContain('/challenge');
  });

  it('2. renders HomeScreen without XP, badges, streaks, or Daily Challenge while preserving core learning cards', () => {
    const s = reducer(initialState(), { type: 'setExplainLang', lang: 'en' });
    saveProgress(s);

    const html = renderToStaticMarkup(
      createElement(
        ProgressProvider,
        null,
        createElement(RouterProvider, null, createElement(HomeScreen)),
      ),
    );

    expect(html).toContain('Buongiorno!');
    expect(html).toContain('Daily goal');
    expect(html).toContain('Continue learning');
    expect(html).toContain('Today’s learning plan');
    expect(html).not.toMatch(/\bXP\b/i);
    expect(html).not.toMatch(/\bstreak\b/i);
    expect(html).not.toMatch(/\bbadge/i);
    expect(html).not.toMatch(/Daily challenge/i);
  });

  it('3. renders ProfileScreen with real computed stats and A1, A2, B1 progress only (zero XP, streaks, badges, or B2)', () => {
    let s: ProgressState = reducer(initialState(), { type: 'setExplainLang', lang: 'en' });
    const mod1 = A1_ACADEMY_MODULES[0]!;
    s = reducer(s, { type: 'completeAcademyTheory', moduleId: mod1.id, level: 'A1' });
    for (const itemId of mod1.requiredItemIds) {
      s = reducer(s, { type: 'studyAcademyItem', moduleId: mod1.id, level: 'A1', itemId });
    }
    s = reducer(s, {
      type: 'submitAcademyExam',
      attemptId: 'prof-test-pass',
      moduleId: mod1.id,
      level: 'A1',
      total: mod1.examQuestionCount,
      correct: mod1.examQuestionCount,
      incorrect: 0,
      maxIncorrect: mod1.maxIncorrect,
      today: '2026-11-16',
    });
    s = reducer(s, { type: 'addStudyTime', seconds: 5400, today: '2026-11-16' });

    expect(totalCompletedModules(s)).toBe(1);
    expect(totalStudySeconds(s)).toBe(5400);

    saveProgress(s);

    const html = renderToStaticMarkup(
      createElement(
        ProgressProvider,
        null,
        createElement(RouterProvider, null, createElement(ProfileScreen)),
      ),
    );

    expect(html).toContain('Active Level');
    expect(html).toContain('Modules Done');
    expect(html).toContain('Study Time');
    expect(html).toContain('1h 30m');
    expect(html).toContain('>A1<');
    expect(html).toContain('>A2<');
    expect(html).toContain('>B1<');
    expect(html).not.toContain('>B2<');
    expect(html).not.toMatch(/\bXP\b/i);
    expect(html).not.toMatch(/\bstreak\b/i);
    expect(html).not.toMatch(/\bbadge/i);
    expect(html).not.toMatch(/achievement/i);
  });

  it('4. safely migrates legacy localStorage payloads by stripping xp, challenge tasks, and awardedXp while preserving all real learning progress', () => {
    const legacyPayload = {
      version: 1,
      xp: 12450,
      lessons: {
        'a1-u1-l1': { bestScore: 1, completed: true, viewed: ['phrases', 'grammar'] },
      },
      cards: {
        'a1-u1-l1:ciao': { box: 3, due: '2026-12-01', reviews: 4, lapses: 0 },
      },
      saved: ['a1-u1-l1:ciao'],
      days: {
        '2026-11-15': { seconds: 900, tasks: ['lesson', 'challenge', 'vocab'] },
      },
      academy: {
        modules: {
          alphabet: {
            theoryCompleted: true,
            studiedItems: ['alpha-a', 'alpha-b'],
            drillCompleted: true,
            drillBestScore: 0.9,
            attempts: 1,
            failedAttempts: 0,
            completed: true,
            bestScore: 1,
            completedAttemptIds: ['leg-1'],
            history: [
              {
                id: 'leg-1',
                moduleId: 'alphabet',
                date: '2026-11-15',
                total: 10,
                correct: 10,
                incorrect: 0,
                score: 1,
                passed: true,
                awardedXp: 185,
              },
            ],
          },
        },
      },
      settings: { dailyGoalMinutes: 20, explainLang: 'en', currentLevel: 'A1', showAllLockedModules: false },
    };

    store.set(STORAGE_KEY, JSON.stringify(legacyPayload));
    const migrated = loadProgress();

    expect('xp' in (migrated as unknown as Record<string, unknown>)).toBe(false);
    expect(migrated.lessons['a1-u1-l1']?.bestScore).toBe(1);
    expect(migrated.cards['a1-u1-l1:ciao']?.box).toBe(3);
    expect(migrated.saved).toEqual(['a1-u1-l1:ciao']);
    expect(migrated.days['2026-11-15']?.seconds).toBe(900);
    expect(migrated.days['2026-11-15']?.tasks).toEqual(['lesson', 'vocab']);
    expect(migrated.academy?.modules.alphabet?.completed).toBe(true);
    expect(migrated.academy?.modules.alphabet?.bestScore).toBe(1);
    expect(migrated.academy?.modules.alphabet?.history).toHaveLength(1);
    const historyEntry = migrated.academy?.modules.alphabet?.history[0] as unknown as Record<string, unknown>;
    expect('awardedXp' in historyEntry).toBe(false);
  });

  it('5. removes XP, streak, and challenge wording across EN, BN, and IT i18n and AboutScreen', () => {
    for (const lang of ['en', 'bn', 'it'] as const) {
      expect(translate(lang, 'showAllLockedSub')).not.toMatch(/XP/i);
      expect(translate(lang, 'testingModePreviewBanner')).not.toMatch(/XP/i);
      expect(translate(lang, 'statsActiveLevel').length).toBeGreaterThan(0);
      expect(translate(lang, 'statsCompletedModules').length).toBeGreaterThan(0);
      expect(translate(lang, 'statsStudyTime').length).toBeGreaterThan(0);
    }

    const enHtml = renderToStaticMarkup(
      createElement(
        ProgressProvider,
        null,
        createElement(RouterProvider, null, createElement(AboutScreen)),
      ),
    );
    expect(enHtml).not.toMatch(/Daily Challenges|streaks|\bXP\b/i);
  });
});
