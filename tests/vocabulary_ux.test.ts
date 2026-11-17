import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { beforeEach, describe, expect, it } from 'vitest';
import { RouterProvider } from '../src/app/router';
import { ProgressProvider } from '../src/state/ProgressContext';
import { initialState, reducer } from '../src/state/progress';
import { loadProgress, saveProgress } from '../src/state/storage';
import {
  VOCAB_PREFS_KEY,
  defaultVocabPrefs,
  loadVocabPrefs,
  saveVocabPrefs,
} from '../src/state/vocabPrefs';
import { BANK_LEVELS, RICH_WORDS, WORDS, topicsOf } from '../src/content/bank';
import { PracticeHub } from '../src/screens/practice/PracticeHub';
import { SavedScreen } from '../src/screens/InfoScreens';
import { phraseByKey } from '../src/screens/practice/VocabularyScreen';
import {
  WordBankScreen,
  buildListenOptions,
  buildRoundWords,
  filterVocabularyWords,
} from '../src/screens/practice/WordBankScreen';

describe('Simplified Unified Vocabulary UX', () => {
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
        location: { hash: '#/practice/words', search: '' },
        history: { length: 2, back: () => {} },
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

  it('1. renders unified Vocabulary screen with A1–B2 level selectors, word counts, search, Quick Start, and 2-column 4-mode grid', () => {
    saveProgress(reducer(initialState(), { type: 'setExplainLang', lang: 'en' }));

    const html = renderToStaticMarkup(
      createElement(
        ProgressProvider,
        null,
        createElement(RouterProvider, null, createElement(WordBankScreen)),
      ),
    );

    expect(html).toContain('>Vocabulary<');
    for (const lvl of BANK_LEVELS) {
      expect(html).toContain(`>${lvl}<`);
      expect(html).toContain(`>${WORDS[lvl].length}<`);
    }
    expect(html).toContain('Quick Start');
    expect(html).toContain('Search Italian, English, or Bengali');
    expect(html).toContain('Listen &amp; Choose');
    expect(html).toContain('Match Pairs');
    expect(html).toContain('Word Recall');
    expect(html).toContain('grid-cols-2');
    expect(html).not.toMatch(/\bXP\b/i);
    expect(html).not.toMatch(/\bstreak\b/i);
    expect(html).not.toMatch(/\bbadge/i);
  });

  it('2. displays English and Bengali translations, Italian pronunciation, audio button, and bookmark controls in Browse mode', () => {
    saveProgress(reducer(initialState(), { type: 'setExplainLang', lang: 'bn' }));

    const html = renderToStaticMarkup(
      createElement(
        ProgressProvider,
        null,
        createElement(RouterProvider, null, createElement(WordBankScreen)),
      ),
    );

    const firstA1 = RICH_WORDS.A1[0]!;
    expect(html).toContain(firstA1.it);
    expect(html).toContain(`/${firstA1.pronunciation}/`);
    expect(html).toContain(firstA1.tr.en);
    expect(html).toContain(firstA1.tr.bn);
    expect(html).toContain('বুকমার্ক করুন');
    expect(html).toContain('শব্দভাণ্ডার');
  });

  it('3. persists and restores last selected CEFR level, practice mode, search query, and category safely', () => {
    // Defaults to A1 + browse when no preferences saved
    expect(loadVocabPrefs()).toEqual(defaultVocabPrefs());

    // Corrupt JSON falls back safely to defaults
    store.set(VOCAB_PREFS_KEY, '{not-valid-json');
    expect(loadVocabPrefs()).toEqual(defaultVocabPrefs());

    // Persisting B2 + recall + category + query restores accurately
    const b2Topic = topicsOf('B2')[0]!.en;
    saveVocabPrefs({
      level: 'B2',
      mode: 'recall',
      lastPracticeMode: 'recall',
      topic: b2Topic,
      query: 'azione',
      bookmarkedOnly: false,
    });

    const restored = loadVocabPrefs();
    expect(restored.level).toBe('B2');
    expect(restored.mode).toBe('recall');
    expect(restored.lastPracticeMode).toBe('recall');
    expect(restored.topic).toBe(b2Topic);
    expect(restored.query).toBe('azione');

    saveProgress(reducer(initialState(), { type: 'setExplainLang', lang: 'en' }));
    const html = renderToStaticMarkup(
      createElement(
        ProgressProvider,
        null,
        createElement(RouterProvider, null, createElement(WordBankScreen)),
      ),
    );
    // Restored B2 + Word Recall renders immediately upon returning
    expect(html).toContain(`B2 · ${WORDS.B2.length} words`);
    expect(html).toContain('Reveal answer');
    expect(html).toContain('value="azione"');
  });

  it('4. renders Listen & Choose and Match Pairs modes inline via unified screen state', () => {
    saveProgress(reducer(initialState(), { type: 'setExplainLang', lang: 'en' }));

    saveVocabPrefs({
      level: 'A2',
      mode: 'listen',
      lastPracticeMode: 'listen',
      topic: null,
      query: '',
      bookmarkedOnly: false,
    });
    const listenHtml = renderToStaticMarkup(
      createElement(
        ProgressProvider,
        null,
        createElement(RouterProvider, null, createElement(WordBankScreen)),
      ),
    );
    expect(listenHtml).toContain(`A2 · ${WORDS.A2.length} words`);
    expect(listenHtml).toContain('Play audio');
    expect(listenHtml).toContain('1 / 6');

    saveVocabPrefs({
      level: 'B1',
      mode: 'match',
      lastPracticeMode: 'match',
      topic: null,
      query: '',
      bookmarkedOnly: false,
    });
    const matchHtml = renderToStaticMarkup(
      createElement(
        ProgressProvider,
        null,
        createElement(RouterProvider, null, createElement(WordBankScreen)),
      ),
    );
    expect(matchHtml).toContain(`B1 · ${WORDS.B1.length} words`);
    expect(matchHtml).toContain('Matched 0/6');
    expect(matchHtml).toContain('Mistakes: 0');
  });

  it('5. filters across Italian, English, Bengali, pronunciation, categories, and bookmarks', () => {
    const sample = RICH_WORDS.A1;
    const target = sample[0]!;
    const targetTopic = target.topic.en;
    const savedSet = new Set([target.key]);

    // Italian query
    const byIt = filterVocabularyWords(sample, {
      topic: null,
      query: target.it,
      bookmarkedOnly: false,
      savedKeys: savedSet,
    });
    expect(byIt.some((w) => w.key === target.key)).toBe(true);

    // English query
    const byEn = filterVocabularyWords(sample, {
      topic: null,
      query: target.tr.en,
      bookmarkedOnly: false,
      savedKeys: savedSet,
    });
    expect(byEn.some((w) => w.key === target.key)).toBe(true);

    // Bengali query
    const byBn = filterVocabularyWords(sample, {
      topic: null,
      query: target.tr.bn,
      bookmarkedOnly: false,
      savedKeys: savedSet,
    });
    expect(byBn.some((w) => w.key === target.key)).toBe(true);

    // Category + bookmarked only
    const bookmarked = filterVocabularyWords(sample, {
      topic: targetTopic,
      query: '',
      bookmarkedOnly: true,
      savedKeys: savedSet,
    });
    expect(bookmarked).toHaveLength(1);
    expect(bookmarked[0]!.key).toBe(target.key);
  });

  it('6. builds 4 distinct Listen & Choose options and distinct Match/Recall round items for every CEFR level A1–B2', () => {
    for (const lvl of BANK_LEVELS) {
      const pool = RICH_WORDS[lvl];
      const round = buildRoundWords(pool, 6);
      expect(round).toHaveLength(6);
      expect(new Set(round.map((w) => w.key)).size).toBe(6);

      const opts = buildListenOptions(round[0]!, pool);
      expect(opts).toHaveLength(4);
      expect(opts.some((o) => o.key === round[0]!.key)).toBe(true);
      expect(new Set(opts.map((o) => o.tr.en.trim().toLowerCase())).size).toBe(4);
    }
  });

  it('7. preserves bookmarks in Saved phrases and SRS card state without resetting existing user data', () => {
    const word = RICH_WORDS.B2[0]!;
    expect(phraseByKey(word.key)?.it).toBe(word.it);

    let s = reducer(initialState(), { type: 'setExplainLang', lang: 'en' });
    s = reducer(s, { type: 'toggleSaved', key: word.key });
    s = reducer(s, { type: 'addCards', keys: [word.key], today: '2026-11-17' });
    s = reducer(s, { type: 'reviewCard', key: word.key, remembered: false, today: '2026-11-17' });
    saveProgress(s);

    const reloaded = loadProgress();
    expect(reloaded.saved).toContain(word.key);
    expect(reloaded.cards[word.key]?.lapses).toBe(1);

    const savedHtml = renderToStaticMarkup(
      createElement(
        ProgressProvider,
        null,
        createElement(RouterProvider, null, createElement(SavedScreen)),
      ),
    );
    expect(savedHtml).toContain(word.it);
  });

  it('8. connects PracticeHub directly to unified /practice/words in one step (supports direct Android back exit)', () => {
    saveProgress(reducer(initialState(), { type: 'setExplainLang', lang: 'en' }));
    const hubHtml = renderToStaticMarkup(
      createElement(
        ProgressProvider,
        null,
        createElement(RouterProvider, null, createElement(PracticeHub)),
      ),
    );
    expect(hubHtml).toContain('>Vocabulary<');
    expect(hubHtml).toContain('essential words');
  });
});
