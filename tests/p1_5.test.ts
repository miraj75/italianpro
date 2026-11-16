import fs from 'node:fs';
import path from 'node:path';
import { beforeEach, describe, expect, it } from 'vitest';
import capConfig from '../capacitor.config';
import { initialState, reducer, type ProgressState } from '../src/state/progress';
import { loadProgress, saveProgress } from '../src/state/storage';
import { allLessons, LEVELS } from '../src/content/courses';
import { GRAMMAR_TOPICS } from '../src/content/grammar';
import { SURVIVAL_TOPICS } from '../src/content/survival';
import { VERBS } from '../src/content/verbs';
import { PHRASES, SENTENCES, WORDS } from '../src/content/bank';
import { loadAllBundles } from '../src/content/registry';

const ROOT = path.resolve(__dirname, '..');

describe('P1.5 Android QA & Release Verification Suite', () => {
  describe('1. Capacitor & Android Configuration Verification', () => {
    it('configures Capacitor with com.italianpro.app, dist webDir, and #041917 dark emerald theme', () => {
      expect(capConfig.appId).toBe('com.italianpro.app');
      expect(capConfig.appName).toBe('ItalianPro');
      expect(capConfig.webDir).toBe('dist');
      expect(capConfig.backgroundColor).toBe('#041917');
      expect(capConfig.android?.allowMixedContent).toBe(false);
      expect(capConfig.plugins?.SplashScreen?.backgroundColor).toBe('#041917');
      expect(capConfig.plugins?.StatusBar?.backgroundColor).toBe('#041917');
    });

    it('verifies Android Gradle, Manifest, strings, colors, and styles configuration', () => {
      const buildGradle = fs.readFileSync(path.join(ROOT, 'android/app/build.gradle'), 'utf8');
      expect(buildGradle).toContain('namespace "com.italianpro.app"');
      expect(buildGradle).toContain('applicationId "com.italianpro.app"');

      const varsGradle = fs.readFileSync(path.join(ROOT, 'android/variables.gradle'), 'utf8');
      expect(varsGradle).toContain('minSdkVersion = 23');
      expect(varsGradle).toContain('compileSdkVersion = 35');
      expect(varsGradle).toContain('targetSdkVersion = 35');

      const manifest = fs.readFileSync(path.join(ROOT, 'android/app/src/main/AndroidManifest.xml'), 'utf8');
      expect(manifest).toContain('android.intent.action.MAIN');
      expect(manifest).toContain('android.intent.category.LAUNCHER');
      expect(manifest).toContain('android.intent.action.TTS_SERVICE');

      const stringsXml = fs.readFileSync(path.join(ROOT, 'android/app/src/main/res/values/strings.xml'), 'utf8');
      expect(stringsXml).toContain('<string name="app_name">ItalianPro</string>');
      expect(stringsXml).toContain('<string name="package_name">com.italianpro.app</string>');

      const colorsXml = fs.readFileSync(path.join(ROOT, 'android/app/src/main/res/values/colors.xml'), 'utf8');
      expect(colorsXml).toContain('name="colorPrimary"');
      expect(colorsXml).toContain('name="colorPrimaryDark"');
      expect(colorsXml).toContain('name="colorAccent"');

      const launcherBgXml = fs.readFileSync(
        path.join(ROOT, 'android/app/src/main/res/values/ic_launcher_background.xml'),
        'utf8',
      );
      expect(launcherBgXml).toContain('#041917');

      const gradlewPath = path.join(ROOT, 'android/gradlew');
      expect(fs.existsSync(gradlewPath)).toBe(true);
      fs.chmodSync(gradlewPath, 0o755);
      const gradlewStat = fs.statSync(gradlewPath);
      expect(gradlewStat.mode & 0o777).toBe(0o755);
      const gradlewContent = fs.readFileSync(gradlewPath, 'utf8');
      expect(gradlewContent.startsWith('#!/bin/sh')).toBe(true);
    });

    it('verifies all web brand images and Android mipmap/splash assets exist and are non-empty', () => {
      const webAssets = [
        'public/img/italianpro-logo.jpg',
        'public/img/colosseum.webp',
        'public/img/pisa.webp',
        'public/img/milan.webp',
        'public/icon.svg',
      ];
      for (const rel of webAssets) {
        const full = path.join(ROOT, rel);
        expect(fs.existsSync(full), `Missing web asset: ${rel}`).toBe(true);
        expect(fs.statSync(full).size, `Empty web asset: ${rel}`).toBeGreaterThan(100);
      }

      const dpis = ['mdpi', 'hdpi', 'xhdpi', 'xxhdpi', 'xxxhdpi'];
      for (const dpi of dpis) {
        for (const icon of ['ic_launcher.png', 'ic_launcher_round.png', 'ic_launcher_foreground.png']) {
          const rel = `android/app/src/main/res/mipmap-${dpi}/${icon}`;
          const full = path.join(ROOT, rel);
          expect(fs.existsSync(full), `Missing Android icon: ${rel}`).toBe(true);
          expect(fs.statSync(full).size, `Empty Android icon: ${rel}`).toBeGreaterThan(100);
        }
        for (const orient of ['port', 'land']) {
          const rel = `android/app/src/main/res/drawable-${orient}-${dpi}/splash.png`;
          const full = path.join(ROOT, rel);
          expect(fs.existsSync(full), `Missing Android splash: ${rel}`).toBe(true);
          expect(fs.statSync(full).size, `Empty Android splash: ${rel}`).toBeGreaterThan(100);
        }
      }
    });
  });

  describe('2. localStorage Progress Persistence Verification', () => {
    const store = new Map<string, string>();
    beforeEach(() => {
      store.clear();
      Object.defineProperty(globalThis, 'localStorage', {
        value: {
          getItem: (k: string) => store.get(k) ?? null,
          setItem: (k: string, v: string) => {
            store.set(k, v);
          },
          removeItem: (k: string) => {
            store.delete(k);
          },
          clear: () => store.clear(),
        },
        configurable: true,
        writable: true,
      });
    });

    it('round-trips complete learner progress across all modules through localStorage', () => {
      const today = '2026-11-16';
      const firstLesson = allLessons()[0]!.lesson;
      let s: ProgressState = initialState();

      // Settings: language & daily goal
      s = reducer(s, { type: 'setExplainLang', lang: 'en' });
      s = reducer(s, { type: 'setDailyGoal', minutes: 35 });

      // Study time & lesson view/quiz completion
      s = reducer(s, { type: 'addStudyTime', seconds: 420, today });
      s = reducer(s, {
        type: 'viewLessonTab',
        lessonId: firstLesson.id,
        tab: 'phrases',
        phraseIds: firstLesson.phrases.map((p) => p.id),
        today,
      });
      s = reducer(s, {
        type: 'submitQuiz',
        lessonId: firstLesson.id,
        today,
        results: firstLesson.quiz.map((q, idx) => ({
          questionId: q.id,
          correct: idx !== 0,
          chosen: idx === 0 ? q.options.find((_, i) => i !== q.answer) : q.options[q.answer],
        })),
      });

      // Saved phrase, flashcard review, story bookmark & completion, listening, reading, writing, speaking, assessment, puzzle mistake
      const firstPhraseKey = `${firstLesson.id}:${firstLesson.phrases[0]!.id}`;
      s = reducer(s, { type: 'toggleSaved', key: firstPhraseKey });
      s = reducer(s, { type: 'reviewCard', key: firstPhraseKey, remembered: true, today });
      s = reducer(s, { type: 'toggleBookmarkStory', storyId: 'st-a1-01' });
      s = reducer(s, { type: 'completeStory', storyId: 'st-a1-01', today });
      s = reducer(s, { type: 'recordListening', exerciseId: 'ls-a1-01', score: 0.9, today });
      s = reducer(s, { type: 'completeReading', readingId: 'rd-a1-01', score: 1.0, today });
      s = reducer(s, { type: 'completeWriting', writingId: 'wr-a1-01', today });
      s = reducer(s, { type: 'completeSpeaking', speakingId: 'sp-a1-01', today });
      s = reducer(s, { type: 'submitAssessment', assessmentId: 'assess-a1-u1', score: 0.85, passScore: 0.7, today });
      s = reducer(s, { type: 'recordPuzzleMistake', puzzleId: 'pz-a1-001', givenAnswer: 'errore' });
      s = reducer(s, { type: 'completeChallenge', correct: 7, today });

      expect(saveProgress(s)).toBe(true);
      const loaded = loadProgress();
      expect(loaded).toEqual(s);
      expect(loaded.settings.explainLang).toBe('en');
      expect(loaded.settings.dailyGoalMinutes).toBe(35);
      expect(loaded.saved).toContain(firstPhraseKey);
      expect(loaded.bookmarkedStories).toContain('st-a1-01');
      expect(loaded.storiesDone['st-a1-01']).toBe(true);
      expect(loaded.listeningScores['ls-a1-01']).toBe(0.9);
      expect(loaded.readingDone['rd-a1-01']).toBe(true);
      expect(loaded.writingDone).toContain('wr-a1-01');
      expect(loaded.speakingDone).toContain('sp-a1-01');
      expect(loaded.assessments['assess-a1-u1']?.passed).toBe(true);
      expect(loaded.puzzleMistakes['pz-a1-001']).toBe(1);
      expect(loaded.puzzleMistakeAnswers?.['pz-a1-001']).toBe('errore');

      // Reset clears back to fresh state
      const resetState = reducer(loaded, { type: 'reset' });
      expect(saveProgress(resetState)).toBe(true);
      expect(loadProgress()).toEqual(initialState());
    });

    it('gracefully falls back to initialState when localStorage contains corrupt JSON or wrong version', () => {
      store.set('italianpro.progress.v1', '{corrupt-json');
      expect(loadProgress()).toEqual(initialState());

      store.set('italianpro.progress.v1', JSON.stringify({ version: 999, xp: 500 }));
      expect(loadProgress()).toEqual(initialState());
    });
  });

  describe('3. Major App Features & Module Integrity', () => {
    it('loads all CEFR A1–B2 courses, practice banks, and dynamic academy bundles cleanly', async () => {
      expect(LEVELS.map((l) => l.id)).toEqual(['A1', 'A2', 'B1', 'B2']);
      expect(allLessons().length).toBe(54);
      expect(GRAMMAR_TOPICS.length).toBe(148);
      expect(VERBS.length).toBeGreaterThan(0);
      expect(SURVIVAL_TOPICS.length).toBeGreaterThan(0);
      expect(PHRASES.length).toBeGreaterThan(0);

      for (const lvl of ['A1', 'A2', 'B1', 'B2'] as const) {
        expect(WORDS[lvl].length).toBeGreaterThan(0);
        expect(SENTENCES[lvl].length).toBeGreaterThan(0);
      }

      const bundles = await loadAllBundles();
      for (const lvl of ['A1', 'A2', 'B1', 'B2'] as const) {
        expect(bundles[lvl].stories.length).toBeGreaterThan(0);
        expect(bundles[lvl].listening.length).toBeGreaterThan(0);
        expect(bundles[lvl].reading.length).toBeGreaterThan(0);
        expect(bundles[lvl].puzzles.length).toBeGreaterThan(0);
        expect(bundles[lvl].writing.length).toBe(12);
        expect(bundles[lvl].speaking.length).toBe(12);
        expect(bundles[lvl].assessments.length).toBeGreaterThanOrEqual(5);
      }
    });
  });
});
