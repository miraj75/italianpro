import type { QuizQuestion } from '../content/types';
import { findLesson } from '../content/courses';
import type { ProgressState } from './progress';

export const CHALLENGE_SIZE = 8;
const MIN_PHRASES = 4;

function shuffle<T>(items: T[], rand: () => number): T[] {
  const a = [...items];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [a[i], a[j]] = [a[j]!, a[i]!];
  }
  return a;
}

/**
 * Builds a translation challenge from phrases the learner has already studied
 * (those with flashcards). Returns [] when fewer than 4 phrases are known.
 */
export function buildChallenge(state: ProgressState, rand: () => number = Math.random): QuizQuestion[] {
  const known = Object.keys(state.cards).flatMap((key) => {
    const [lessonId = '', phraseId] = key.split(':');
    const phrase = findLesson(lessonId)?.lesson.phrases.find((p) => p.id === phraseId);
    return phrase ? [{ key, phrase }] : [];
  });
  if (known.length < MIN_PHRASES) return [];

  return shuffle(known, rand)
    .slice(0, CHALLENGE_SIZE)
    .map(({ key, phrase }) => {
      const distractors = shuffle(
        known.filter((k) => k.phrase.it !== phrase.it).map((k) => k.phrase.it),
        rand,
      ).slice(0, 3);
      const options = shuffle([phrase.it, ...distractors], rand);
      return {
        id: key,
        prompt: { bn: `ইতালিয়ানে কী বলবেন: "${phrase.tr.bn}"`, en: `How do you say: "${phrase.tr.en}"` },
        options,
        answer: options.indexOf(phrase.it),
        explanation: { bn: `${phrase.it} = ${phrase.tr.bn}`, en: `${phrase.it} = ${phrase.tr.en}` },
      };
    });
}
