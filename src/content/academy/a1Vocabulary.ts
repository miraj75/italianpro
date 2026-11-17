import { RICH_WORDS, topicsOf } from '../bank';
import type { RichVocabItem } from '../academyTypes';
import type { Tr } from '../types';
import type { AcademyExamQuestion } from './types';

export interface A1VocabTopicGroup {
  id: string;
  title: Tr;
  words: RichVocabItem[];
}

function slugifyTopic(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

/**
 * Organized A1 vocabulary topics derived directly from the canonical `RICH_WORDS.A1` bank
 * so no vocabulary or example sentence content is duplicated.
 */
export const A1_VOCAB_TOPICS: A1VocabTopicGroup[] = topicsOf('A1').map((topic) => ({
  id: `vocab-topic-${slugifyTopic(topic.en)}`,
  title: topic,
  words: RICH_WORDS.A1.filter((w) => w.topic.en === topic.en),
}));

/** Every A1 vocabulary item ID (`w:A1:...`) required before unlocking the Vocabulary section exam. */
export const A1_VOCAB_REQUIRED_IDS: string[] = RICH_WORDS.A1.map((w) => w.key);

/**
 * Dynamically builds randomized A1 Vocabulary exam questions directly from `RICH_WORDS.A1`
 * without duplicating word or sentence data.
 */
export function buildVocabularyExamPool(rng: () => number = Math.random): AcademyExamQuestion[] {
  const all = RICH_WORDS.A1;
  return all.map((word, idx) => {
    const bnOpts: string[] = [word.tr.bn];
    const enOpts: string[] = [word.tr.en];
    const offsetSeed = Math.floor(rng() * all.length);
    for (let step = 1; step < all.length && bnOpts.length < 4; step++) {
      const candidate = all[(idx + offsetSeed + step * 17) % all.length]!;
      if (
        candidate.key !== word.key &&
        !bnOpts.includes(candidate.tr.bn) &&
        !enOpts.includes(candidate.tr.en)
      ) {
        bnOpts.push(candidate.tr.bn);
        enOpts.push(candidate.tr.en);
      }
    }
    return {
      id: `exam-vocab-${word.id}`,
      moduleId: 'vocabulary',
      prompt: {
        bn: `নিচের "${word.topic.bn}" শব্দটির সঠিক অর্থ কোনটি?`,
        en: `Select the correct meaning of this "${word.topic.en}" word:`,
        it: `Seleziona il significato corretto della parola "${word.it}":`,
      },
      it: word.it,
      audioIt: word.it,
      options: enOpts,
      localizedOptions: {
        bn: bnOpts,
        en: enOpts,
        it: enOpts,
      },
      answer: 0,
      explanation: {
        bn: `"${word.it}" অর্থ ${word.tr.bn}। উদাহরণ: ${word.example.it} (${word.example.tr.bn})`,
        en: `"${word.it}" means "${word.tr.en}". Example: ${word.example.it} (${word.example.tr.en})`,
        it: `"${word.it}" = "${word.tr.en}". Esempio: ${word.example.it}`,
      },
    };
  });
}
