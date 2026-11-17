import fs from 'node:fs';
import path from 'node:path';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { beforeEach, describe, expect, it } from 'vitest';
import { RouterProvider } from '../src/app/router';
import { ProgressProvider } from '../src/state/ProgressContext';
import { initialState, reducer } from '../src/state/progress';
import { saveProgress } from '../src/state/storage';
import { defaultVocabPrefs, saveVocabPrefs } from '../src/state/vocabPrefs';
import { RICH_SENTENCES } from '../src/content/bank';
import { PracticeHub } from '../src/screens/practice/PracticeHub';
import { WordBankScreen } from '../src/screens/practice/WordBankScreen';
import { PuzzleCard, PuzzleScreen } from '../src/screens/practice/PuzzleScreen';
import { SentencesScreen } from '../src/screens/practice/SentencesScreen';
import { ListeningScreen } from '../src/screens/practice/ListeningScreen';
import { SpeakingScreen } from '../src/screens/practice/SpeakingScreen';

describe('Practice Hub UI Polish & Mobile Responsive Suite', () => {
  const store = new Map<string, string>();

  beforeEach(() => {
    store.clear();
    Object.defineProperty(globalThis, 'localStorage', {
      value: {
        getItem: (k: string) => store.get(k) ?? null,
        setItem: (k: string, v: string) => {
          store.set(k, String(v));
        },
        removeItem: (k: string) => {
          store.delete(k);
        },
        clear: () => store.clear(),
      },
      configurable: true,
      writable: true,
    });
    Object.defineProperty(globalThis, 'window', {
      value: {
        location: { hash: '#/practice', search: '' },
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

  it('1. removes all -mx-4 overflow strips across Practice screens', () => {
    const practiceDir = path.resolve(__dirname, '../src/screens/practice');
    const files = fs.readdirSync(practiceDir).filter((f) => f.endsWith('.tsx'));
    const offenders: string[] = [];
    for (const f of files) {
      const src = fs.readFileSync(path.join(practiceDir, f), 'utf8');
      if (src.includes('-mx-4')) {
        offenders.push(f);
      }
    }
    expect(offenders).toEqual([]);
  });

  it('2. renders PracticeHub with balanced 2-col uniform cards and badge-safe top padding', () => {
    saveProgress(reducer(initialState(), { type: 'setExplainLang', lang: 'en' }));
    const html = renderToStaticMarkup(
      createElement(
        ProgressProvider,
        null,
        createElement(RouterProvider, null, createElement(PracticeHub)),
      ),
    );
    expect(html).toContain('grid-cols-2 gap-3 sm:grid-cols-3');
    expect(html).toContain('min-h-[9.25rem]');
    expect(html).toContain('pt-7 pb-3.5');
    expect(html).toContain('>PRO<');
    expect(html).toContain('overflow-x-hidden');
  });

  it('3. fixes Vocabulary button overflow by using responsive full-width stacked/paired grid for Add all + Flashcards', () => {
    saveProgress(reducer(initialState(), { type: 'setExplainLang', lang: 'en' }));
    saveVocabPrefs({ ...defaultVocabPrefs(), level: 'A1', mode: 'browse' });

    const html = renderToStaticMarkup(
      createElement(
        ProgressProvider,
        null,
        createElement(RouterProvider, null, createElement(WordBankScreen)),
      ),
    );

    expect(html).toContain('Add all to cards');
    expect(html).toContain('Flashcards');
    expect(html).toContain('grid-cols-1 gap-2 min-[440px]:grid-cols-2');
    expect(html).toContain('min-h-11 w-full px-3.5 py-2 text-center text-xs sm:text-sm whitespace-normal');
    // Ensure old clipping row pattern is gone
    expect(html).not.toContain('min-h-10 px-3 text-xs whitespace-nowrap');
  });

  it('4. renders Sentence Puzzle with FilterChipRow, progress counter, answer zone, Clear/Hint/Check controls', () => {
    saveProgress(reducer(initialState(), { type: 'setExplainLang', lang: 'en' }));
    const screenHtml = renderToStaticMarkup(
      createElement(
        ProgressProvider,
        null,
        createElement(RouterProvider, null, createElement(PuzzleScreen)),
      ),
    );
    expect(screenHtml).toContain('overflow-x-hidden');
    expect(screenHtml).toContain('All grammar');
    expect(screenHtml).toContain('Clear');
    expect(screenHtml).toContain('Hint');
    expect(screenHtml).toContain('Check');

    const cardHtml = renderToStaticMarkup(
      createElement(
        ProgressProvider,
        null,
        createElement(
          RouterProvider,
          null,
          createElement(PuzzleCard, {
            item: {
              id: 'test-pz',
              level: 'A1',
              type: 'word-order',
              prompt: { bn: 'বাক্য সাজান', en: 'Arrange sentence' },
              answerIt: 'Io studio italiano',
              tiles: ['Io', 'studio', 'italiano'],
              tr: { bn: 'আমি ইতালিয়ান শিখি', en: 'I study Italian' },
              grammarId: 'present-essere',
              vocabKeys: [],
              explanation: { bn: 'সঠিক ক্রম', en: 'Correct order' },
            },
            onDone: () => {},
          }),
        ),
      ),
    );
    expect(cardHtml).toContain('Your answer');
    expect(cardHtml).toContain('0/3');
    expect(cardHtml).toContain('Clear');
  });

  it('5. renders Sentences screen with responsive action grid and BOTH English and Bengali meanings', () => {
    saveProgress(reducer(initialState(), { type: 'setExplainLang', lang: 'en' }));
    const html = renderToStaticMarkup(
      createElement(
        ProgressProvider,
        null,
        createElement(RouterProvider, null, createElement(SentencesScreen)),
      ),
    );
    const first = RICH_SENTENCES.A1[0]!;
    expect(html).toContain('grid-cols-1 gap-2 min-[420px]:grid-cols-2');
    expect(html).toContain('Hide translation');
    expect(html).toContain('Sentence puzzle');
    expect(html).toContain(first.it);
    expect(html).toContain(first.tr.en);
    expect(html).toContain(first.tr.bn);
  });

  it('6. renders Listening Lab and Speaking Studio cleanly without horizontal overflow or fake mic scores', () => {
    saveProgress(reducer(initialState(), { type: 'setExplainLang', lang: 'en' }));
    const listenHtml = renderToStaticMarkup(
      createElement(
        ProgressProvider,
        null,
        createElement(RouterProvider, null, createElement(ListeningScreen)),
      ),
    );
    expect(listenHtml).toContain('Listening Lab');
    expect(listenHtml).toContain('device/browser Italian TTS');
    expect(listenHtml).toContain('overflow-x-hidden');

    const speakHtml = renderToStaticMarkup(
      createElement(
        ProgressProvider,
        null,
        createElement(RouterProvider, null, createElement(SpeakingScreen)),
      ),
    );
    expect(speakHtml).toContain('Speaking &amp; Pronunciation');
    expect(speakHtml).toContain('overflow-x-hidden');
    expect(speakHtml).not.toContain('Word match:');
  });
});
