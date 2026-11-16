import type { LevelId, QuizQuestion, Tr } from './types';
import { WORDS, SENTENCES, RICH_WORDS } from './bank';
import { GRAMMAR_TOPICS, grammarById, richGrammarById } from './grammar';
import { allLessons, LEVEL_ORDER } from './courses';
import { loadAllBundles } from './registry';

export interface ValidationIssue {
  severity: 'error' | 'warning';
  module: string;
  itemId: string;
  message: string;
}

export interface ValidationSummary {
  issues: ValidationIssue[];
  counts: {
    words: Record<LevelId, number>;
    sentences: Record<LevelId, number>;
    grammar: Record<LevelId, number>;
    lessons: Record<LevelId, number>;
    stories: Record<LevelId, number>;
    listening: Record<LevelId, number>;
    reading: Record<LevelId, number>;
    puzzles: Record<LevelId, number>;
    writing: Record<LevelId, number>;
    speaking: Record<LevelId, number>;
    assessments: Record<LevelId, number>;
  };
}

function isFilledTr(t: Tr | undefined): boolean {
  return !!t && t.bn.trim().length > 0 && t.en.trim().length > 0;
}

function checkQuiz(module: string, ownerId: string, questions: QuizQuestion[], issues: ValidationIssue[]) {
  const seenLocal = new Set<string>();
  for (const q of questions) {
    if (seenLocal.has(q.id)) {
      issues.push({ severity: 'error', module, itemId: `${ownerId}:${q.id}`, message: `Duplicate quiz ID "${q.id}"` });
    }
    seenLocal.add(q.id);
    if (!isFilledTr(q.prompt)) {
      issues.push({ severity: 'error', module, itemId: `${ownerId}:${q.id}`, message: 'Missing bn/en prompt' });
    }
    if (!isFilledTr(q.explanation)) {
      issues.push({ severity: 'error', module, itemId: `${ownerId}:${q.id}`, message: 'Empty bn/en explanation' });
    }
    if (q.options.length < 2) {
      issues.push({ severity: 'error', module, itemId: `${ownerId}:${q.id}`, message: 'Quiz must have >= 2 options' });
    }
    if (new Set(q.options).size !== q.options.length) {
      issues.push({ severity: 'error', module, itemId: `${ownerId}:${q.id}`, message: 'Duplicate quiz options' });
    }
    if (q.answer < 0 || q.answer >= q.options.length) {
      issues.push({ severity: 'error', module, itemId: `${ownerId}:${q.id}`, message: `Invalid answer index ${q.answer}` });
    }
  }
}

export async function validateAllContent(): Promise<ValidationSummary> {
  const issues: ValidationIssue[] = [];
  const bundles = await loadAllBundles();

  const wordKeys = new Set<string>();
  for (const level of LEVEL_ORDER) {
    const seenInLevel = new Set<string>();
    for (const w of WORDS[level]) {
      wordKeys.add(w.key);
      if (seenInLevel.has(w.it.toLowerCase())) {
        issues.push({ severity: 'error', module: 'vocab', itemId: w.key, message: `Duplicate word "${w.it}" in ${level}` });
      }
      seenInLevel.add(w.it.toLowerCase());
      if (!isFilledTr(w.tr) || !isFilledTr(w.topic)) {
        issues.push({ severity: 'error', module: 'vocab', itemId: w.key, message: 'Missing bn/en translation or topic' });
      }
    }
    for (const rw of RICH_WORDS[level]) {
      if (!rw.pronunciation.trim() || !rw.example.it.trim() || !isFilledTr(rw.example.tr)) {
        issues.push({ severity: 'error', module: 'rich-vocab', itemId: rw.key, message: 'Missing pronunciation or example' });
      }
    }
  }

  for (const level of LEVEL_ORDER) {
    const seenS = new Set<string>();
    for (const s of SENTENCES[level]) {
      if (seenS.has(s.it.toLowerCase())) {
        issues.push({ severity: 'error', module: 'sentences', itemId: s.key, message: `Duplicate sentence in ${level}` });
      }
      seenS.add(s.it.toLowerCase());
      if (!isFilledTr(s.tr)) {
        issues.push({ severity: 'error', module: 'sentences', itemId: s.key, message: 'Missing bn/en sentence translation' });
      }
      if (!grammarById(s.grammar)) {
        issues.push({ severity: 'error', module: 'sentences', itemId: s.key, message: `Broken grammar reference "${s.grammar}"` });
      }
    }
  }

  const allStoryIds = new Set<string>();
  for (const lvl of LEVEL_ORDER) {
    for (const st of bundles[lvl].stories) {
      if (allStoryIds.has(st.id)) {
        issues.push({ severity: 'error', module: 'stories', itemId: st.id, message: `Duplicate story ID "${st.id}"` });
      }
      allStoryIds.add(st.id);
    }
  }

  const seenGrammarIds = new Set<string>();
  for (const g of GRAMMAR_TOPICS) {
    if (seenGrammarIds.has(g.id)) {
      issues.push({ severity: 'error', module: 'grammar', itemId: g.id, message: 'Duplicate grammar ID' });
    }
    seenGrammarIds.add(g.id);
    if (!isFilledTr(g.name) || !isFilledTr(g.explanation)) {
      issues.push({ severity: 'error', module: 'grammar', itemId: g.id, message: 'Missing grammar explanation' });
    }
    const rich = richGrammarById(g.id);
    if (rich) {
      for (const sid of rich.storyIds ?? []) {
        if (!allStoryIds.has(sid)) {
          issues.push({ severity: 'error', module: 'grammar', itemId: g.id, message: `Broken storyId "${sid}"` });
        }
      }
      for (const vk of rich.vocabKeys ?? []) {
        if (!wordKeys.has(vk)) {
          issues.push({ severity: 'error', module: 'grammar', itemId: g.id, message: `Broken vocabKey "${vk}"` });
        }
      }
    }
  }

  const lessons = allLessons();
  const seenLessonIds = new Set<string>();
  for (const { lesson } of lessons) {
    if (seenLessonIds.has(lesson.id)) {
      issues.push({ severity: 'error', module: 'lessons', itemId: lesson.id, message: 'Duplicate lesson ID' });
    }
    seenLessonIds.add(lesson.id);
    checkQuiz('lessons', lesson.id, lesson.quiz, issues);
  }

  for (const lvl of LEVEL_ORDER) {
    const b = bundles[lvl];

    for (const st of b.stories) {
      if (!isFilledTr(st.title) || !isFilledTr(st.topic) || st.paragraphs.length < 2) {
        issues.push({ severity: 'error', module: 'stories', itemId: st.id, message: 'Incomplete story fields or paragraphs' });
      }
      for (const p of st.paragraphs) {
        if (!p.it.trim() || !isFilledTr(p.tr)) {
          issues.push({ severity: 'error', module: 'stories', itemId: st.id, message: 'Missing paragraph it/bn/en' });
        }
      }
      for (const gid of st.grammarIds) {
        if (!grammarById(gid)) issues.push({ severity: 'error', module: 'stories', itemId: st.id, message: `Broken grammarId "${gid}"` });
      }
      for (const gb of st.grammarBreakdown) {
        if (!grammarById(gb.grammarId)) issues.push({ severity: 'error', module: 'stories', itemId: st.id, message: `Broken breakdown grammarId "${gb.grammarId}"` });
      }
      for (const vk of st.vocabKeys) {
        if (!wordKeys.has(vk)) issues.push({ severity: 'error', module: 'stories', itemId: st.id, message: `Broken vocabKey "${vk}"` });
      }
      checkQuiz('stories', st.id, st.comprehension.mcq, issues);
      const seenFillBlank = new Set<string>();
      for (const fb of st.comprehension.fillBlank) {
        if (seenFillBlank.has(fb.id)) issues.push({ severity: 'error', module: 'stories', itemId: st.id, message: `Duplicate fillBlank ID "${fb.id}"` });
        seenFillBlank.add(fb.id);
        if (fb.answer < 0 || fb.answer >= fb.options.length || !isFilledTr(fb.explanation)) {
          issues.push({ severity: 'error', module: 'stories', itemId: st.id, message: `Invalid fillBlank "${fb.id}"` });
        }
      }
    }

    const seenLs = new Set<string>();
    for (const ls of b.listening) {
      if (seenLs.has(ls.id)) issues.push({ severity: 'error', module: 'listening', itemId: ls.id, message: 'Duplicate listening ID' });
      seenLs.add(ls.id);
      if (ls.lines.length < 2 || !isFilledTr(ls.title) || !isFilledTr(ls.explanation)) {
        issues.push({ severity: 'error', module: 'listening', itemId: ls.id, message: 'Missing lines/title/explanation' });
      }
      for (const l of ls.lines) {
        if (!l.it.trim() || !isFilledTr(l.tr)) {
          issues.push({ severity: 'error', module: 'listening', itemId: ls.id, message: 'Missing line it/tr' });
        }
      }
      for (const gid of ls.grammarIds) {
        if (!grammarById(gid)) issues.push({ severity: 'error', module: 'listening', itemId: ls.id, message: `Broken grammarId "${gid}"` });
      }
      for (const vk of ls.vocabKeys) {
        if (!wordKeys.has(vk)) issues.push({ severity: 'error', module: 'listening', itemId: ls.id, message: `Broken vocabKey "${vk}"` });
      }
      checkQuiz('listening', ls.id, ls.questions, issues);
    }

    const seenRd = new Set<string>();
    for (const rd of b.reading) {
      if (seenRd.has(rd.id)) issues.push({ severity: 'error', module: 'reading', itemId: rd.id, message: 'Duplicate reading ID' });
      seenRd.add(rd.id);
      if (rd.storyId && !allStoryIds.has(rd.storyId)) {
        issues.push({ severity: 'error', module: 'reading', itemId: rd.id, message: `Broken storyId "${rd.storyId}"` });
      }
      for (const gid of rd.relatedGrammarIds) {
        if (!grammarById(gid)) issues.push({ severity: 'error', module: 'reading', itemId: rd.id, message: `Broken relatedGrammarId "${gid}"` });
      }
      for (const gh of rd.grammarHighlights) {
        if (!grammarById(gh.grammarId)) issues.push({ severity: 'error', module: 'reading', itemId: rd.id, message: `Broken grammarHighlight "${gh.grammarId}"` });
      }
      checkQuiz('reading', rd.id, rd.questions, issues);
    }

    const seenPz = new Set<string>();
    for (const pz of b.puzzles) {
      if (seenPz.has(pz.id)) issues.push({ severity: 'error', module: 'puzzles', itemId: pz.id, message: 'Duplicate puzzle ID' });
      seenPz.add(pz.id);
      if (!grammarById(pz.grammarId)) {
        issues.push({ severity: 'error', module: 'puzzles', itemId: pz.id, message: `Broken grammarId "${pz.grammarId}"` });
      }
      for (const vk of pz.vocabKeys) {
        if (!wordKeys.has(vk)) issues.push({ severity: 'error', module: 'puzzles', itemId: pz.id, message: `Broken vocabKey "${vk}"` });
      }
      if (!isFilledTr(pz.prompt) || !isFilledTr(pz.tr) || !isFilledTr(pz.explanation) || !pz.answerIt.trim()) {
        issues.push({ severity: 'error', module: 'puzzles', itemId: pz.id, message: 'Missing puzzle text/explanation' });
      }
      if (pz.options && !pz.options.includes(pz.answerIt)) {
        issues.push({ severity: 'error', module: 'puzzles', itemId: pz.id, message: 'Answer missing from puzzle options' });
      }
    }

    const seenWr = new Set<string>();
    for (const wr of b.writing) {
      if (seenWr.has(wr.id)) issues.push({ severity: 'error', module: 'writing', itemId: wr.id, message: 'Duplicate writing ID' });
      seenWr.add(wr.id);
      if (!isFilledTr(wr.title) || !isFilledTr(wr.prompt) || !wr.modelResponse.it.trim() || !isFilledTr(wr.modelResponse.tr)) {
        issues.push({ severity: 'error', module: 'writing', itemId: wr.id, message: 'Missing writing fields' });
      }
      for (const gid of wr.grammarIds) {
        if (!grammarById(gid)) issues.push({ severity: 'error', module: 'writing', itemId: wr.id, message: `Broken grammarId "${gid}"` });
      }
    }

    const seenSp = new Set<string>();
    for (const sp of b.speaking) {
      if (seenSp.has(sp.id)) issues.push({ severity: 'error', module: 'speaking', itemId: sp.id, message: 'Duplicate speaking ID' });
      seenSp.add(sp.id);
      if (!isFilledTr(sp.title) || !isFilledTr(sp.prompt) || !sp.targetIt.trim() || !isFilledTr(sp.targetTr)) {
        issues.push({ severity: 'error', module: 'speaking', itemId: sp.id, message: 'Missing speaking fields' });
      }
      for (const gid of sp.grammarIds) {
        if (!grammarById(gid)) issues.push({ severity: 'error', module: 'speaking', itemId: sp.id, message: `Broken grammarId "${gid}"` });
      }
    }

    const seenAs = new Set<string>();
    for (const asmt of b.assessments) {
      if (seenAs.has(asmt.id)) issues.push({ severity: 'error', module: 'assessments', itemId: asmt.id, message: 'Duplicate assessment ID' });
      seenAs.add(asmt.id);
      checkQuiz('assessments', asmt.id, asmt.questions, issues);
    }
  }

  const countByLevel = <T extends { level: LevelId }>(items: T[]): Record<LevelId, number> => ({
    A1: items.filter((x) => x.level === 'A1').length,
    A2: items.filter((x) => x.level === 'A2').length,
    B1: items.filter((x) => x.level === 'B1').length,
    B2: items.filter((x) => x.level === 'B2').length,
  });

  return {
    issues,
    counts: {
      words: { A1: WORDS.A1.length, A2: WORDS.A2.length, B1: WORDS.B1.length, B2: WORDS.B2.length },
      sentences: { A1: SENTENCES.A1.length, A2: SENTENCES.A2.length, B1: SENTENCES.B1.length, B2: SENTENCES.B2.length },
      grammar: countByLevel(GRAMMAR_TOPICS),
      lessons: {
        A1: lessons.filter((r) => r.level.id === 'A1').length,
        A2: lessons.filter((r) => r.level.id === 'A2').length,
        B1: lessons.filter((r) => r.level.id === 'B1').length,
        B2: lessons.filter((r) => r.level.id === 'B2').length,
      },
      stories: {
        A1: bundles.A1.stories.length,
        A2: bundles.A2.stories.length,
        B1: bundles.B1.stories.length,
        B2: bundles.B2.stories.length,
      },
      listening: {
        A1: bundles.A1.listening.length,
        A2: bundles.A2.listening.length,
        B1: bundles.B1.listening.length,
        B2: bundles.B2.listening.length,
      },
      reading: {
        A1: bundles.A1.reading.length,
        A2: bundles.A2.reading.length,
        B1: bundles.B1.reading.length,
        B2: bundles.B2.reading.length,
      },
      puzzles: {
        A1: bundles.A1.puzzles.length,
        A2: bundles.A2.puzzles.length,
        B1: bundles.B1.puzzles.length,
        B2: bundles.B2.puzzles.length,
      },
      writing: {
        A1: bundles.A1.writing.length,
        A2: bundles.A2.writing.length,
        B1: bundles.B1.writing.length,
        B2: bundles.B2.writing.length,
      },
      speaking: {
        A1: bundles.A1.speaking.length,
        A2: bundles.A2.speaking.length,
        B1: bundles.B1.speaking.length,
        B2: bundles.B2.speaking.length,
      },
      assessments: {
        A1: bundles.A1.assessments.length,
        A2: bundles.A2.assessments.length,
        B1: bundles.B1.assessments.length,
        B2: bundles.B2.assessments.length,
      },
    },
  };
}
