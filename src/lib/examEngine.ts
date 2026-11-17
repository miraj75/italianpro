import type { AcademyExamQuestion, AcademyModuleId } from '../content/academy/types';
import { findAcademyModule, inferLevelFromModuleId } from '../content/academy/curriculum';
import { A1_ALPHABET_EXAM_POOL } from '../content/academy/a1Alphabet';
import { A1_NUMBERS_CORE_20_QUESTIONS, A1_NUMBERS_EXTENDED_QUESTIONS } from '../content/academy/a1Numbers';
import { A1_GREETINGS_EXAM_POOL } from '../content/academy/a1GreetingsIntro';
import { A1_ARTICLE_EXAM_POOL } from '../content/academy/a1Articles';
import { A1_NOUNS_EXAM_POOL } from '../content/academy/a1NounsPlurals';
import { A1_PRONOUNS_POSSESSIVES_EXAM_POOL } from '../content/academy/a1PronounsPossessives';
import { A1_VERBS_EXAM_POOL } from '../content/academy/a1Verbs';
import { A1_ESSENTIAL_VERBS_EXAM_POOL } from '../content/academy/a1EssentialVerbs';
import { A1_ADJECTIVES_EXAM_POOL } from '../content/academy/a1Adjectives';
import { A1_ADVERBS_EXAM_POOL } from '../content/academy/a1Adverbs';
import { A1_PREPOSITIONS_EXAM_POOL } from '../content/academy/a1Prepositions';
import { A1_CONJUNCTIONS_EXAM_POOL } from '../content/academy/a1Conjunctions';
import { A1_SENTENCE_STRUCTURE_EXAM_POOL } from '../content/academy/a1SentenceStructure';
import { A1_TIME_DATES_EXAM_POOL } from '../content/academy/a1TimeDates';
import { A1_EVERYDAY_COMM_EXAM_POOL } from '../content/academy/a1EverydayCommunication';
import { A1_CULTURE_SURVIVAL_EXAM_POOL } from '../content/academy/a1CultureSurvival';
import { A1_LISTENING_SPEAKING_EXAM_POOL } from '../content/academy/a1ListeningSpeaking';
import { A1_READING_WRITING_EXAM_POOL } from '../content/academy/a1ReadingWriting';
import { buildA1FinalExam } from '../content/academy/a1FinalExam';
import { buildA2FinalExam } from '../content/academy/a2FinalExam';
import { buildVocabularyExamPool } from '../content/academy/a1Vocabulary';
import {
  A2_COMMUNICATION_MODULES_DATA,
  isA2CommunicationModuleId,
} from '../content/a2/communicationModules';
import {
  A2_ACADEMY_VERBS,
  B1_ACADEMY_VERBS,
  B2_ACADEMY_VERBS,
  B2_COLLOCATIONS,
} from '../content/academy/levelVerbs';
import { PHRASES, SENTENCES, WORDS, type BankLevel } from '../content/bank';
import { GRAMMAR_TOPICS } from '../content/grammar';
import { GRAMMAR_DETAILS_A2 } from '../content/grammarDetailsA2';
import { GRAMMAR_DETAILS_B1 } from '../content/grammarDetailsB1';
import { GRAMMAR_DETAILS_B2 } from '../content/grammarDetailsB2';
import { loadLevelBundle } from '../content/registry';
import type { LevelId } from '../content/types';
import { resolveTr } from './i18n';

export interface ExamAnswerRecord {
  question: AcademyExamQuestion;
  selectedIndex: number;
  selectedText: string;
  correctText: string;
  answered: boolean;
  correct: boolean;
}

export interface EvaluatedExamResult {
  attemptId: string;
  moduleId: AcademyModuleId;
  total: number;
  correct: number;
  /** Total non-correct count (wrongly answered + unanswered), used for pass threshold validation. */
  incorrect: number;
  /** Count of questions where the learner picked an option that was wrong. */
  wrongCount: number;
  /** Count of questions left unanswered. */
  unanswered: number;
  score: number;
  percentage: number;
  /** Percentage rounded to 1 decimal place (e.g. 25/30 -> 83.3). */
  exactPercentage: number;
  maxIncorrect: number;
  passed: boolean;
  breakdown: ExamAnswerRecord[];
}

export function formatExamPercentage(exactPercentage: number): string {
  const rounded = Math.round(exactPercentage * 10) / 10;
  return Number.isInteger(rounded) ? String(rounded) : rounded.toFixed(1);
}

export type RandomFn = () => number;

const PRONOUN_LABELS = ['io', 'tu', 'lui/lei', 'noi', 'voi', 'loro'] as const;

/** Unbiased Fisher-Yates shuffle returning a new array. */
export function shuffleArray<T>(items: readonly T[], rng: RandomFn = Math.random): T[] {
  const out = [...items];
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [out[i], out[j]] = [out[j]!, out[i]!];
  }
  return out;
}

/** Shuffles the answer choices of a question while remapping `answer` and `localizedOptions` accurately. */
export function randomizeQuestionOptions(q: AcademyExamQuestion, rng: RandomFn = Math.random): AcademyExamQuestion {
  const correctOption = q.options[q.answer];
  if (correctOption === undefined) return q;
  const indices = shuffleArray(
    q.options.map((_, idx) => idx),
    rng,
  );
  const nextAnswer = indices.indexOf(q.answer);
  const nextLocalized = q.localizedOptions
    ? {
        bn: indices.map((i) => q.localizedOptions!.bn[i] ?? q.options[i]!),
        en: indices.map((i) => q.localizedOptions!.en[i] ?? q.options[i]!),
        ...(q.localizedOptions.it ? { it: indices.map((i) => q.localizedOptions!.it![i] ?? q.options[i]!) } : {}),
      }
    : undefined;
  return {
    ...q,
    options: indices.map((i) => q.options[i]!),
    ...(nextLocalized ? { localizedOptions: nextLocalized } : {}),
    answer: nextAnswer >= 0 ? nextAnswer : 0,
  };
}

function deduplicateQuestions(questions: readonly AcademyExamQuestion[]): AcademyExamQuestion[] {
  const seenIds = new Set<string>();
  const seenStems = new Set<string>();
  const out: AcademyExamQuestion[] = [];
  for (const q of questions) {
    if (q.options.length < 2 || new Set(q.options).size < q.options.length) continue;
    const stemKey = `${q.moduleId}|${q.it ?? ''}|${q.prompt.en}|${q.options[q.answer] ?? ''}`;
    if (seenIds.has(q.id) || seenStems.has(stemKey)) continue;
    seenIds.add(q.id);
    seenStems.add(stemKey);
    out.push(q);
  }
  return out;
}

/**
 * Generates a randomized section exam (default 10 unique questions) with shuffled options
 * and guaranteed zero duplicate questions within the attempt.
 */
export function buildSectionExam(
  pool: readonly AcademyExamQuestion[],
  count = 10,
  rng: RandomFn = Math.random,
): AcademyExamQuestion[] {
  const unique = deduplicateQuestions(pool);
  const picked = shuffleArray(unique, rng).slice(0, Math.min(count, unique.length));
  return picked.map((q) => randomizeQuestionOptions(q, rng));
}

/**
 * Numbers (0–100) Section Exam Generator:
 * - Includes ALL 20 core numbers (1–20) in randomized order
 * - Selects 10 additional unique random questions from the remaining pool (21–100 + 0)
 * - Combines & shuffles all 30 questions with zero duplicates.
 */
export function buildNumbersExam(rng: RandomFn = Math.random): AcademyExamQuestion[] {
  const core20 = shuffleArray(deduplicateQuestions(A1_NUMBERS_CORE_20_QUESTIONS), rng);
  const extendedPool = deduplicateQuestions(A1_NUMBERS_EXTENDED_QUESTIONS);
  const pickedExtended = shuffleArray(extendedPool, rng).slice(0, 10);
  const combined = [...core20, ...pickedExtended];
  return deduplicateQuestions(combined).map((q) => randomizeQuestionOptions(q, rng));
}

function getGrammarDetailsForLevel(level: 'A2' | 'B1' | 'B2') {
  if (level === 'A2') return GRAMMAR_DETAILS_A2;
  if (level === 'B1') return GRAMMAR_DETAILS_B1;
  return GRAMMAR_DETAILS_B2;
}

function buildGrammarModulePool(moduleId: string, level: 'A2' | 'B1' | 'B2', rng: RandomFn): AcademyExamQuestion[] {
  const meta = findAcademyModule(moduleId, level);
  const grammarIds = meta?.grammarIds ?? [];
  const details = getGrammarDetailsForLevel(level);
  const topicsMap = new Map(GRAMMAR_TOPICS.filter((g) => g.level === level).map((g) => [g.id, g]));
  const out: AcademyExamQuestion[] = [];

  for (const gid of grammarIds) {
    const det = details[gid];
    const topic = topicsMap.get(gid);
    if (det) {
      for (const ex of det.exercises) {
        out.push({
          id: `${moduleId}-${ex.id}`,
          moduleId,
          prompt: ex.prompt,
          it: ex.it,
          audioIt: det.examples[0]?.it,
          options: [...ex.options],
          ...(ex.localizedOptions ? { localizedOptions: ex.localizedOptions } : {}),
          answer: ex.answer,
          explanation: ex.explanation,
        });
      }
    }
    const matchingSentences = SENTENCES[level].filter((s) => s.grammar === gid);
    const otherSentences = SENTENCES[level].filter((s) => s.grammar !== gid);
    for (const s of matchingSentences.slice(0, 2)) {
      const sIt = resolveTr('it', s.tr);
      const distractors = shuffleArray(
        otherSentences.filter((o) => {
          const oIt = resolveTr('it', o.tr);
          return o.tr.en !== s.tr.en && o.tr.bn !== s.tr.bn && oIt !== sIt;
        }),
        rng,
      ).slice(0, 3);
      if (distractors.length === 3) {
        const bnOpts = [s.tr.bn, ...distractors.map((d) => d.tr.bn)];
        const enOpts = [s.tr.en, ...distractors.map((d) => d.tr.en)];
        const itOpts = [sIt, ...distractors.map((d) => resolveTr('it', d.tr))];
        out.push({
          id: `${moduleId}-sent-${s.key}`,
          moduleId,
          prompt: {
            bn: `ব্যাকরণ (${topic?.title ?? gid}): নিচের বাক্যটির সঠিক অর্থ কোনটি?`,
            en: `Grammar (${topic?.title ?? gid}): Pick the accurate meaning:`,
            it: `Grammatica (${topic?.title ?? gid}): Scegli il significato corretto:`,
          },
          it: s.it,
          audioIt: s.it,
          options: enOpts,
          localizedOptions: { bn: bnOpts, en: enOpts, it: itOpts },
          answer: 0,
          explanation: {
            bn: `${s.it} → ${s.tr.bn} (${topic?.explanation.bn ?? ''})`,
            en: `${s.it} → ${s.tr.en}`,
            it: `${s.it} → ${sIt}`,
          },
        });
      }
    }
  }

  return out;
}

function buildVerbModulePool(moduleId: string, level: 'A2' | 'B1' | 'B2', rng: RandomFn): AcademyExamQuestion[] {
  const verbs = level === 'A2' ? A2_ACADEMY_VERBS : level === 'B1' ? B1_ACADEMY_VERBS : B2_ACADEMY_VERBS;
  const out: AcademyExamQuestion[] = [];

  for (const verb of verbs) {
    for (const table of verb.conjugations) {
      const candidateIndices = [0, 1, 2, 3, 4, 5].filter((i) => table.forms[i] && table.forms[i] !== '—');
      const idx = candidateIndices[Math.floor(rng() * candidateIndices.length)] ?? 0;
      const correctForm = table.forms[idx]!;
      const distractors = Array.from(
        new Set(
          [
            ...table.forms.filter((_, i) => i !== idx && _ !== '—'),
            ...verbs
              .filter((other) => other.id !== verb.id)
              .flatMap((other) => other.conjugations.flatMap((c) => c.forms))
              .filter((f) => f && f !== '—'),
          ].filter((f) => f !== correctForm),
        ),
      );
      const pickedDist = shuffleArray(distractors, rng).slice(0, 3);
      if (pickedDist.length === 3) {
        out.push({
          id: `${moduleId}-${verb.id}-${table.id}-${idx}`,
          moduleId,
          prompt: {
            bn: `«${verb.infinitive}» (${verb.meaning.bn}) — ${table.tense.bn}-এ «${PRONOUN_LABELS[idx]}» রূপ কোনটি?`,
            en: `Conjugate «${verb.infinitive}» (${verb.meaning.en}) for «${PRONOUN_LABELS[idx]}» in ${table.tense.en}:`,
            it: `Coniuga «${verb.infinitive}» per «${PRONOUN_LABELS[idx]}» (${resolveTr('it', table.tense)}):`,
          },
          it: `${PRONOUN_LABELS[idx]} + ${verb.infinitive}`,
          audioIt: verb.examples[0]?.it,
          options: [correctForm, ...pickedDist],
          answer: 0,
          explanation: {
            bn: `${PRONOUN_LABELS[idx]} → ${correctForm}। ${verb.usageNote.bn}`,
            en: `${PRONOUN_LABELS[idx]} → ${correctForm}. ${verb.usageNote.en}`,
            it: `${PRONOUN_LABELS[idx]} → ${correctForm}. ${resolveTr('it', verb.usageNote)}`,
          },
        });
      }
    }
  }

  return [...out, ...buildGrammarModulePool(moduleId, level, rng)];
}

function buildLevelVocabularyExamPool(moduleId: string, level: BankLevel, rng: RandomFn): AcademyExamQuestion[] {
  const pool = shuffleArray(WORDS[level], rng).slice(0, 45);
  const out: AcademyExamQuestion[] = [];

  for (const w of pool) {
    const wIt = resolveTr('it', w.tr);
    const distractors = shuffleArray(
      WORDS[level].filter((o) => {
        const oIt = resolveTr('it', o.tr);
        return o.key !== w.key && o.tr.bn !== w.tr.bn && o.tr.en !== w.tr.en && oIt !== wIt;
      }),
      rng,
    ).slice(0, 3);
    if (distractors.length < 3) continue;

    if (out.length % 2 === 0) {
      const bnOpts = [w.tr.bn, ...distractors.map((d) => d.tr.bn)];
      const enOpts = [w.tr.en, ...distractors.map((d) => d.tr.en)];
      const itOpts = [wIt, ...distractors.map((d) => resolveTr('it', d.tr))];
      out.push({
        id: `${moduleId}-it2tr-${w.key}`,
        moduleId,
        prompt: {
          bn: `এই ${level} শব্দটির সঠিক অর্থ বেছে নিন (${w.topic.bn}):`,
          en: `Select the accurate meaning for this ${level} word (${w.topic.en}):`,
          it: `Seleziona il significato corretto (${resolveTr('it', w.topic)}):`,
        },
        it: w.it,
        audioIt: w.it,
        options: enOpts,
        localizedOptions: { bn: bnOpts, en: enOpts, it: itOpts },
        answer: 0,
        explanation: {
          bn: `${w.it} অর্থ «${w.tr.bn}»।`,
          en: `${w.it} means "${w.tr.en}".`,
          it: `${w.it} = «${wIt}».`,
        },
      });
    } else {
      out.push({
        id: `${moduleId}-tr2it-${w.key}`,
        moduleId,
        prompt: {
          bn: `«${w.tr.bn}» — এর সঠিক ইতালিয়ান শব্দ কোনটি?`,
          en: `Pick the Italian word meaning "${w.tr.en}":`,
          it: `Scegli la parola italiana per «${wIt}»:`,
        },
        options: [w.it, ...distractors.map((d) => d.it)],
        answer: 0,
        explanation: {
          bn: `সঠিক ইতালিয়ান: ${w.it}।`,
          en: `Correct Italian term: ${w.it}.`,
          it: `Termine italiano corretto: ${w.it}.`,
        },
      });
    }
  }

  return out;
}

function buildIdiomsExamPool(moduleId: string, level: 'B1' | 'B2', rng: RandomFn): AcademyExamQuestion[] {
  const out: AcademyExamQuestion[] = [];
  if (level === 'B1') {
    const sample = shuffleArray(PHRASES, rng).slice(0, 30);
    for (const phrase of sample) {
      const pIt = resolveTr('it', phrase.tr);
      const distractors = shuffleArray(
        PHRASES.filter((o) => {
          const oIt = resolveTr('it', o.tr);
          return o.key !== phrase.key && o.tr.bn !== phrase.tr.bn && o.tr.en !== phrase.tr.en && oIt !== pIt;
        }),
        rng,
      ).slice(0, 3);
      if (distractors.length === 3) {
        const bnOpts = [phrase.tr.bn, ...distractors.map((d) => d.tr.bn)];
        const enOpts = [phrase.tr.en, ...distractors.map((d) => d.tr.en)];
        const itOpts = [pIt, ...distractors.map((d) => resolveTr('it', d.tr))];
        out.push({
          id: `${moduleId}-${phrase.key}`,
          moduleId,
          prompt: {
            bn: 'এই ইতালীয় বাগধারা বা এক্সপ্রেশনটির সঠিক অর্থ কী?',
            en: 'What does this Italian idiom/expression mean?',
            it: 'Cosa significa questa espressione idiomatica italiana?',
          },
          it: phrase.it,
          audioIt: phrase.it,
          options: enOpts,
          localizedOptions: { bn: bnOpts, en: enOpts, it: itOpts },
          answer: 0,
          explanation: {
            bn: `«${phrase.it}» অর্থ: ${phrase.tr.bn}।`,
            en: `"${phrase.it}" means: ${phrase.tr.en}.`,
            it: `«${phrase.it}» = ${pIt}.`,
          },
        });
      }
    }
  } else {
    const b2ExprWords = WORDS.B2.filter((w) => w.topic.en.includes('expressions') || w.topic.en.includes('analysis'));
    for (const col of B2_COLLOCATIONS) {
      const cIt = resolveTr('it', col.tr);
      const distractors = shuffleArray(
        B2_COLLOCATIONS.filter((o) => {
          const oIt = resolveTr('it', o.tr);
          return o.id !== col.id && o.tr.bn !== col.tr.bn && o.tr.en !== col.tr.en && oIt !== cIt;
        }),
        rng,
      ).slice(0, 3);
      if (distractors.length === 3) {
        const bnOpts = [col.tr.bn, ...distractors.map((d) => d.tr.bn)];
        const enOpts = [col.tr.en, ...distractors.map((d) => d.tr.en)];
        const itOpts = [cIt, ...distractors.map((d) => resolveTr('it', d.tr))];
        out.push({
          id: `${moduleId}-${col.id}`,
          moduleId,
          prompt: {
            bn: 'এই B2 সহাবস্থান/বাগধারাটির যথাযথ অর্থ বেছে নিন:',
            en: 'Choose the accurate meaning of this B2 collocation/idiom:',
            it: 'Scegli il significato corretto di questa collocazione B2:',
          },
          it: col.it,
          audioIt: col.exampleIt,
          options: enOpts,
          localizedOptions: { bn: bnOpts, en: enOpts, it: itOpts },
          answer: 0,
          explanation: {
            bn: `${col.it} → ${col.tr.bn}। উদাহরণ: ${col.exampleIt}`,
            en: `${col.it} → ${col.tr.en}. Example: ${col.exampleIt}`,
            it: `${col.it} → ${cIt}. Esempio: ${col.exampleIt}`,
          },
        });
      }
    }
    for (const w of shuffleArray(b2ExprWords, rng).slice(0, 15)) {
      const wIt = resolveTr('it', w.tr);
      const distractors = shuffleArray(
        b2ExprWords.filter((o) => {
          const oIt = resolveTr('it', o.tr);
          return o.key !== w.key && o.tr.bn !== w.tr.bn && o.tr.en !== w.tr.en && oIt !== wIt;
        }),
        rng,
      ).slice(0, 3);
      if (distractors.length === 3) {
        const bnOpts = [w.tr.bn, ...distractors.map((d) => d.tr.bn)];
        const enOpts = [w.tr.en, ...distractors.map((d) => d.tr.en)];
        const itOpts = [wIt, ...distractors.map((d) => resolveTr('it', d.tr))];
        out.push({
          id: `${moduleId}-expr-${w.key}`,
          moduleId,
          prompt: {
            bn: `উন্নত B2 প্রকাশভঙ্গি «${w.it}»-এর অর্থ কোনটি?`,
            en: `Select the meaning of the B2 expression "${w.it}":`,
            it: `Seleziona il significato dell’espressione "${w.it}":`,
          },
          it: w.it,
          audioIt: w.it,
          options: enOpts,
          localizedOptions: { bn: bnOpts, en: enOpts, it: itOpts },
          answer: 0,
          explanation: {
            bn: `${w.it} → ${w.tr.bn}।`,
            en: `${w.it} → ${w.tr.en}.`,
            it: `${w.it} → ${wIt}.`,
          },
        });
      }
    }
  }
  return out;
}

function buildSentencesExamPool(moduleId: string, level: BankLevel, rng: RandomFn): AcademyExamQuestion[] {
  const sample = shuffleArray(SENTENCES[level], rng).slice(0, 35);
  const topicsMap = new Map(GRAMMAR_TOPICS.filter((g) => g.level === level).map((g) => [g.id, g]));
  const out: AcademyExamQuestion[] = [];

  for (const s of sample) {
    const sIt = resolveTr('it', s.tr);
    const distractors = shuffleArray(
      SENTENCES[level].filter((o) => {
        const oIt = resolveTr('it', o.tr);
        return o.key !== s.key && o.tr.en !== s.tr.en && o.tr.bn !== s.tr.bn && oIt !== sIt;
      }),
      rng,
    ).slice(0, 3);
    if (distractors.length < 3) continue;
    const gTitle = topicsMap.get(s.grammar)?.title ?? s.grammar;
    const bnOpts = [s.tr.bn, ...distractors.map((d) => d.tr.bn)];
    const enOpts = [s.tr.en, ...distractors.map((d) => d.tr.en)];
    const itOpts = [sIt, ...distractors.map((d) => resolveTr('it', d.tr))];
    out.push({
      id: `${moduleId}-${s.key}`,
      moduleId,
      prompt: {
        bn: `নিচের ${level} বাক্যটির সঠিক অর্থ বেছে নিন (${gTitle}):`,
        en: `Select the accurate translation for this ${level} sentence (${gTitle}):`,
        it: `Seleziona il significato corretto per questa frase ${level} (${gTitle}):`,
      },
      it: s.it,
      audioIt: s.it,
      options: enOpts,
      localizedOptions: { bn: bnOpts, en: enOpts, it: itOpts },
      answer: 0,
      explanation: {
        bn: `${s.it} → ${s.tr.bn}`,
        en: `${s.it} → ${s.tr.en}`,
        it: `${s.it} → ${sIt}`,
      },
    });
  }
  return out;
}

/** Synchronously generates randomized exam questions for sync A1/A2/B1/B2 modules. */
export function generateAcademyModuleExam(
  moduleId: AcademyModuleId,
  rng: RandomFn = Math.random,
  level?: LevelId,
): AcademyExamQuestion[] {
  const lvl = level ?? inferLevelFromModuleId(moduleId);

  if (lvl === 'A1') {
    switch (moduleId) {
      case 'alphabet':
        return buildSectionExam(A1_ALPHABET_EXAM_POOL, 10, rng);
      case 'numbers':
        return buildNumbersExam(rng);
      case 'greetings-intro':
        return buildSectionExam(A1_GREETINGS_EXAM_POOL, 10, rng);
      case 'articles':
        return buildSectionExam(A1_ARTICLE_EXAM_POOL, 10, rng);
      case 'nouns-gender-plurals':
        return buildSectionExam(A1_NOUNS_EXAM_POOL, 10, rng);
      case 'pronouns-possessives':
        return buildSectionExam(A1_PRONOUNS_POSSESSIVES_EXAM_POOL, 10, rng);
      case 'verbs':
        return buildSectionExam(A1_VERBS_EXAM_POOL, 10, rng);
      case 'essential-verbs':
        return buildSectionExam(A1_ESSENTIAL_VERBS_EXAM_POOL, 10, rng);
      case 'adjectives':
        return buildSectionExam(A1_ADJECTIVES_EXAM_POOL, 10, rng);
      case 'adverbs':
        return buildSectionExam(A1_ADVERBS_EXAM_POOL, 10, rng);
      case 'prepositions':
        return buildSectionExam(A1_PREPOSITIONS_EXAM_POOL, 10, rng);
      case 'conjunctions':
        return buildSectionExam(A1_CONJUNCTIONS_EXAM_POOL, 10, rng);
      case 'sentence-structure':
        return buildSectionExam(A1_SENTENCE_STRUCTURE_EXAM_POOL, 10, rng);
      case 'time-dates':
        return buildSectionExam(A1_TIME_DATES_EXAM_POOL, 10, rng);
      case 'vocabulary':
        return buildSectionExam(buildVocabularyExamPool(rng), 10, rng);
      case 'everyday-communication':
        return buildSectionExam(A1_EVERYDAY_COMM_EXAM_POOL, 10, rng);
      case 'culture-survival':
        return buildSectionExam(A1_CULTURE_SURVIVAL_EXAM_POOL, 10, rng);
      case 'listening-speaking':
        return buildSectionExam(A1_LISTENING_SPEAKING_EXAM_POOL, 10, rng);
      case 'reading-writing':
        return buildSectionExam(A1_READING_WRITING_EXAM_POOL, 10, rng);
      case 'final-exam':
        return buildA1FinalExam(rng);
      default:
        return [];
    }
  }

  if (moduleId === 'a2-final-exam') {
    return buildA2FinalExam(rng);
  }

  const meta = findAcademyModule(moduleId, lvl);
  if (!meta) return [];
  const count = meta.examQuestionCount || 10;

  switch (meta.kind) {
    case 'grammar':
      return buildSectionExam(buildGrammarModulePool(moduleId, lvl, rng), count, rng);
    case 'verbs':
      return buildSectionExam(buildVerbModulePool(moduleId, lvl, rng), count, rng);
    case 'vocabulary':
      return buildSectionExam(buildLevelVocabularyExamPool(moduleId, lvl, rng), count, rng);
    case 'communication':
      if (isA2CommunicationModuleId(moduleId)) {
        return buildSectionExam(A2_COMMUNICATION_MODULES_DATA[moduleId].questions, count, rng);
      }
      return [];
    case 'idioms':
      return buildSectionExam(buildIdiomsExamPool(moduleId, lvl as 'B1' | 'B2', rng), count, rng);
    case 'sentences':
      return buildSectionExam(buildSentencesExamPool(moduleId, lvl, rng), count, rng);
    default:
      return [];
  }
}

/**
 * Generates randomized exam questions for ALL Academy modules including async bundle-backed
 * modules (Reading, Listening, Writing, Speaking) and cumulative 30-Q Level Final Exams.
 */
export async function generateAcademyModuleExamAsync(
  moduleId: AcademyModuleId,
  rng: RandomFn = Math.random,
  level?: LevelId,
): Promise<AcademyExamQuestion[]> {
  const lvl = level ?? inferLevelFromModuleId(moduleId);
  const syncQuestions = generateAcademyModuleExam(moduleId, rng, lvl);
  if (syncQuestions.length > 0) return syncQuestions;

  if (lvl === 'A1') return [];
  const meta = findAcademyModule(moduleId, lvl);
  if (!meta) return [];
  const bundle = await loadLevelBundle(lvl);
  const count = meta.examQuestionCount || 10;

  if (meta.kind === 'reading') {
    const pool: AcademyExamQuestion[] = [];
    for (const passage of bundle.reading) {
      const leadText = passage.paragraphs[0]?.it ?? '';
      for (const q of passage.questions) {
        pool.push({
          id: `${moduleId}-${passage.id}-${q.id}`,
          moduleId,
          prompt: {
            bn: `পাঠ «${passage.title.bn}» — ${q.prompt.bn}`,
            en: `Reading «${passage.title.en}» — ${q.prompt.en}`,
            it: `Lettura «${passage.titleIt}» — ${resolveTr('it', q.prompt)}`,
          },
          it: q.it ?? passage.titleIt,
          audioIt: leadText || passage.titleIt,
          options: [...q.options],
          ...(q.localizedOptions ? { localizedOptions: q.localizedOptions } : {}),
          answer: q.answer,
          explanation: q.explanation,
        });
      }
    }
    return buildSectionExam(pool, count, rng);
  }

  if (meta.kind === 'listening') {
    const pool: AcademyExamQuestion[] = [];
    for (const ex of bundle.listening) {
      const fullAudio = ex.lines.map((l) => l.it).join(' ');
      for (const q of ex.questions) {
        pool.push({
          id: `${moduleId}-${ex.id}-${q.id}`,
          moduleId,
          prompt: {
            bn: `অডিও «${ex.title.bn}» শুনে উত্তর দিন — ${q.prompt.bn}`,
            en: `Listen «${ex.title.en}» — ${q.prompt.en}`,
            it: `Ascolto «${ex.titleIt}» — ${resolveTr('it', q.prompt)}`,
          },
          it: q.it ?? ex.titleIt,
          audioIt: fullAudio || ex.titleIt,
          options: [...q.options],
          ...(q.localizedOptions ? { localizedOptions: q.localizedOptions } : {}),
          answer: q.answer,
          explanation: q.explanation,
        });
      }
    }
    return buildSectionExam(pool, count, rng);
  }

  if (meta.kind === 'writing') {
    const pool: AcademyExamQuestion[] = [];
    for (const wr of bundle.writing) {
      for (const kp of wr.keyPhrases) {
        const kpIt = resolveTr('it', kp.tr);
        const otherPhrases = shuffleArray(
          bundle.writing
            .filter((o) => o.id !== wr.id)
            .flatMap((o) => o.keyPhrases)
            .filter((o) => {
              const oIt = resolveTr('it', o.tr);
              return o.tr.bn !== kp.tr.bn && o.tr.en !== kp.tr.en && oIt !== kpIt;
            }),
          rng,
        ).slice(0, 3);
        if (otherPhrases.length === 3) {
          const bnOpts = [kp.tr.bn, ...otherPhrases.map((o) => o.tr.bn)];
          const enOpts = [kp.tr.en, ...otherPhrases.map((o) => o.tr.en)];
          const itOpts = [kpIt, ...otherPhrases.map((o) => resolveTr('it', o.tr))];
          pool.push({
            id: `${moduleId}-${wr.id}-${kp.it}`,
            moduleId,
            prompt: {
              bn: `লিখন টাস্ক «${wr.title.bn}» — এই কার্যকর বাক্যাংশটির অর্থ কী?`,
              en: `Writing «${wr.title.en}» — What does this key expression mean?`,
              it: `Scrittura «${resolveTr('it', wr.title)}» — Cosa significa questa espressione chiave?`,
            },
            it: kp.it,
            audioIt: kp.it,
            options: enOpts,
            localizedOptions: { bn: bnOpts, en: enOpts, it: itOpts },
            answer: 0,
            explanation: {
              bn: `${kp.it} → ${kp.tr.bn}`,
              en: `${kp.it} → ${kp.tr.en}`,
              it: `${kp.it} → ${kpIt}`,
            },
          });
        }
      }
    }
    for (const pz of bundle.puzzles.filter((p) => p.options && p.options.length === 4).slice(0, 20)) {
      const ansIdx = pz.options!.indexOf(pz.answerIt);
      if (ansIdx >= 0) {
        pool.push({
          id: `${moduleId}-pz-${pz.id}`,
          moduleId,
          prompt: pz.prompt,
          it: pz.stemIt ?? '',
          options: [...pz.options!],
          answer: ansIdx,
          explanation: pz.explanation,
        });
      }
    }
    return buildSectionExam(pool, count, rng);
  }

  if (meta.kind === 'speaking') {
    const pool: AcademyExamQuestion[] = [];
    for (const sp of bundle.speaking) {
      const spIt = resolveTr('it', sp.targetTr);
      const distractors = shuffleArray(
        bundle.speaking.filter((o) => {
          const oIt = resolveTr('it', o.targetTr);
          return o.id !== sp.id && o.targetTr.bn !== sp.targetTr.bn && o.targetTr.en !== sp.targetTr.en && oIt !== spIt;
        }),
        rng,
      ).slice(0, 3);
      if (distractors.length === 3) {
        const bnOpts = [sp.targetTr.bn, ...distractors.map((d) => d.targetTr.bn)];
        const enOpts = [sp.targetTr.en, ...distractors.map((d) => d.targetTr.en)];
        const itOpts = [spIt, ...distractors.map((d) => resolveTr('it', d.targetTr))];
        pool.push({
          id: `${moduleId}-${sp.id}-meaning`,
          moduleId,
          prompt: {
            bn: `কথন পরিস্থিতি «${sp.title.bn}» — এই ইতালীয় সংলাপটির অর্থ কোনটি?`,
            en: `Speaking «${sp.title.en}» — Pick the meaning of this spoken response:`,
            it: `Parlato «${resolveTr('it', sp.title)}» — Scegli il significato della risposta:`,
          },
          it: sp.targetIt,
          audioIt: sp.targetIt,
          options: enOpts,
          localizedOptions: { bn: bnOpts, en: enOpts, it: itOpts },
          answer: 0,
          explanation: {
            bn: `${sp.targetIt} → ${sp.targetTr.bn}`,
            en: `${sp.targetIt} → ${sp.targetTr.en}`,
            it: `${sp.targetIt} → ${spIt}`,
          },
        });
      }
      if (distractors.length === 3) {
        pool.push({
          id: `${moduleId}-${sp.id}-reply`,
          moduleId,
          prompt: {
            bn: `পরিস্থিতি: ${sp.prompt.bn} — এর জন্য সবচেয়ে উপযুক্ত ইতালীয় উক্তি কোনটি?`,
            en: `Situation: ${sp.prompt.en} — Choose the best Italian response:`,
            it: `Situazione: ${resolveTr('it', sp.prompt)} — Scegli la risposta italiana migliore:`,
          },
          options: [sp.targetIt, ...distractors.map((d) => d.targetIt)],
          answer: 0,
          explanation: {
            bn: `সঠিক সংলাপ: ${sp.targetIt} (${sp.targetTr.bn})`,
            en: `Best response: ${sp.targetIt}`,
            it: `Risposta migliore: ${sp.targetIt}`,
          },
        });
      }
    }
    return buildSectionExam(pool, count, rng);
  }

  if (meta.kind === 'writing-speaking') {
    const pool: AcademyExamQuestion[] = [];
    for (const wr of bundle.writing) {
      for (const kp of wr.keyPhrases) {
        const kpIt = resolveTr('it', kp.tr);
        const otherPhrases = shuffleArray(
          bundle.writing
            .filter((o) => o.id !== wr.id)
            .flatMap((o) => o.keyPhrases)
            .filter((o) => {
              const oIt = resolveTr('it', o.tr);
              return o.tr.bn !== kp.tr.bn && o.tr.en !== kp.tr.en && oIt !== kpIt;
            }),
          rng,
        ).slice(0, 3);
        if (otherPhrases.length === 3) {
          const bnOpts = [kp.tr.bn, ...otherPhrases.map((o) => o.tr.bn)];
          const enOpts = [kp.tr.en, ...otherPhrases.map((o) => o.tr.en)];
          const itOpts = [kpIt, ...otherPhrases.map((o) => resolveTr('it', o.tr))];
          pool.push({
            id: `${moduleId}-wr-${wr.id}-${kp.it}`,
            moduleId,
            prompt: {
              bn: `লিখন টাস্ক «${wr.title.bn}» — এই কার্যকর বাক্যাংশটির অর্থ কী?`,
              en: `Writing «${wr.title.en}» — What does this key expression mean?`,
              it: `Scrittura «${resolveTr('it', wr.title)}» — Cosa significa questa espressione chiave?`,
            },
            it: kp.it,
            audioIt: kp.it,
            options: enOpts,
            localizedOptions: { bn: bnOpts, en: enOpts, it: itOpts },
            answer: 0,
            explanation: {
              bn: `${kp.it} → ${kp.tr.bn}`,
              en: `${kp.it} → ${kp.tr.en}`,
              it: `${kp.it} → ${kpIt}`,
            },
          });
        }
      }
    }
    for (const sp of bundle.speaking) {
      const spIt = resolveTr('it', sp.targetTr);
      const distractors = shuffleArray(
        bundle.speaking.filter((o) => {
          const oIt = resolveTr('it', o.targetTr);
          return o.id !== sp.id && o.targetTr.bn !== sp.targetTr.bn && o.targetTr.en !== sp.targetTr.en && oIt !== spIt;
        }),
        rng,
      ).slice(0, 3);
      if (distractors.length === 3) {
        const bnOpts = [sp.targetTr.bn, ...distractors.map((d) => d.targetTr.bn)];
        const enOpts = [sp.targetTr.en, ...distractors.map((d) => d.targetTr.en)];
        const itOpts = [spIt, ...distractors.map((d) => resolveTr('it', d.targetTr))];
        pool.push({
          id: `${moduleId}-sp-${sp.id}-meaning`,
          moduleId,
          prompt: {
            bn: `কথন পরিস্থিতি «${sp.title.bn}» — এই ইতালীয় সংলাপটির অর্থ কোনটি?`,
            en: `Speaking «${sp.title.en}» — Pick the meaning of this spoken response:`,
            it: `Parlato «${resolveTr('it', sp.title)}» — Scegli il significato della risposta:`,
          },
          it: sp.targetIt,
          audioIt: sp.targetIt,
          options: enOpts,
          localizedOptions: { bn: bnOpts, en: enOpts, it: itOpts },
          answer: 0,
          explanation: {
            bn: `${sp.targetIt} → ${sp.targetTr.bn}`,
            en: `${sp.targetIt} → ${sp.targetTr.en}`,
            it: `${sp.targetIt} → ${spIt}`,
          },
        });
        pool.push({
          id: `${moduleId}-sp-${sp.id}-reply`,
          moduleId,
          prompt: {
            bn: `পরিস্থিতি: ${sp.prompt.bn} — এর জন্য সবচেয়ে উপযুক্ত ইতালীয় উক্তি কোনটি?`,
            en: `Situation: ${sp.prompt.en} — Choose the best Italian response:`,
            it: `Situazione: ${resolveTr('it', sp.prompt)} — Scegli la risposta italiana migliore:`,
          },
          options: [sp.targetIt, ...distractors.map((d) => d.targetIt)],
          answer: 0,
          explanation: {
            bn: `সঠিক সংলাপ: ${sp.targetIt} (${sp.targetTr.bn})`,
            en: `Best response: ${sp.targetIt}`,
            it: `Risposta migliore: ${sp.targetIt}`,
          },
        });
      }
    }
    return buildSectionExam(pool, count, rng);
  }

  if (meta.kind === 'final-exam') {
    if (moduleId === 'a2-final-exam') {
      return buildA2FinalExam(rng);
    }
    const assessmentQs: AcademyExamQuestion[] = bundle.assessments.flatMap((a) =>
      a.questions.map((q) => ({
        id: `${moduleId}-assess-${a.id}-${q.id}`,
        moduleId,
        prompt: q.prompt,
        it: q.it,
        audioIt: q.it,
        options: [...q.options],
        ...(q.localizedOptions ? { localizedOptions: q.localizedOptions } : {}),
        answer: q.answer,
        explanation: q.explanation,
      })),
    );
    const grammarPool = GRAMMAR_TOPICS.filter((g) => g.level === lvl)
      .slice(0, 10)
      .flatMap((g) => {
        const det = getGrammarDetailsForLevel(lvl)[g.id];
        return (det?.exercises ?? []).map((ex) => ({
          id: `${moduleId}-gram-${ex.id}`,
          moduleId,
          prompt: ex.prompt,
          it: ex.it,
          options: [...ex.options],
          ...(ex.localizedOptions ? { localizedOptions: ex.localizedOptions } : {}),
          answer: ex.answer,
          explanation: ex.explanation,
        }));
      });
    const verbPool = buildVerbModulePool(`${lvl.toLowerCase()}-verbs`, lvl, rng).slice(0, 8);
    const vocabPool = buildLevelVocabularyExamPool(`${lvl.toLowerCase()}-vocab`, lvl, rng).slice(0, 8);
    const readPool = bundle.reading.slice(0, 6).flatMap((r) =>
      r.questions.slice(0, 1).map((q) => ({
        id: `${moduleId}-rd-${r.id}-${q.id}`,
        moduleId,
        prompt: {
          bn: `পাঠ «${r.title.bn}» — ${q.prompt.bn}`,
          en: `Reading «${r.title.en}» — ${q.prompt.en}`,
          it: `Lettura «${r.titleIt}» — ${resolveTr('it', q.prompt)}`,
        },
        it: q.it ?? r.titleIt,
        options: [...q.options],
        ...(q.localizedOptions ? { localizedOptions: q.localizedOptions } : {}),
        answer: q.answer,
        explanation: q.explanation,
      })),
    );
    const idiomPool = lvl === 'B1' || lvl === 'B2' ? buildIdiomsExamPool(`${lvl.toLowerCase()}-idioms`, lvl, rng).slice(0, 6) : [];
    const combined = [...assessmentQs, ...grammarPool, ...verbPool, ...vocabPool, ...readPool, ...idiomPool];
    return buildSectionExam(combined, 30, rng);
  }

  return [];
}

/** Creates a unique attempt identifier to prevent duplicate submission / double XP awards. */
export function createExamAttemptId(moduleId: AcademyModuleId): string {
  const rand = Math.random().toString(36).slice(2, 8);
  return `${moduleId}-${Date.now()}-${rand}`;
}

/**
 * Evaluates a completed exam attempt.
 * For standard 10-question section exams, `maxIncorrect` defaults to 3 (>3 incorrect = Fail).
 * For 30-question exams (Numbers / Final Exam), `maxIncorrect` defaults to 9 (>=70% passes).
 */
export function evaluateExamAttempt(params: {
  attemptId: string;
  moduleId: AcademyModuleId;
  questions: readonly AcademyExamQuestion[];
  selections: Record<string, number>;
  maxIncorrect?: number;
}): EvaluatedExamResult {
  const total = params.questions.length;
  const maxIncorrect = params.maxIncorrect ?? (total === 10 ? 3 : Math.floor(total * 0.3));
  const breakdown: ExamAnswerRecord[] = params.questions.map((question) => {
    const rawSelected = params.selections[question.id];
    const answered =
      typeof rawSelected === 'number' && Number.isInteger(rawSelected) && rawSelected >= 0 && rawSelected < question.options.length;
    const selectedIndex = answered ? rawSelected : -1;
    const selectedText = answered ? (question.options[selectedIndex] ?? '') : '';
    const correctText = question.options[question.answer] ?? '';
    const correct = answered && selectedIndex === question.answer;
    return {
      question,
      selectedIndex,
      selectedText,
      correctText,
      answered,
      correct,
    };
  });

  const correct = breakdown.filter((r) => r.correct).length;
  const wrongCount = breakdown.filter((r) => r.answered && !r.correct).length;
  const unanswered = breakdown.filter((r) => !r.answered).length;
  const incorrect = total - correct;
  const score = total > 0 ? correct / total : 0;
  const percentage = total > 0 ? Math.round(score * 100) : 0;
  const exactPercentage = total > 0 ? Math.round(score * 1000) / 10 : 0;
  const passed = total > 0 && incorrect <= maxIncorrect;

  return {
    attemptId: params.attemptId,
    moduleId: params.moduleId,
    total,
    correct,
    incorrect,
    wrongCount,
    unanswered,
    score,
    percentage,
    exactPercentage,
    maxIncorrect,
    passed,
    breakdown,
  };
}
