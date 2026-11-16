import type {
  LevelAssessment,
  ListeningExercise,
  PuzzleChallenge,
  ReadingPassage,
  SpeakingExercise,
  StoryItem,
  WritingExercise,
} from './academyTypes';
import type { LevelId } from './types';

export interface LevelAcademyBundle {
  stories: StoryItem[];
  listening: ListeningExercise[];
  reading: ReadingPassage[];
  puzzles: PuzzleChallenge[];
  writing: WritingExercise[];
  speaking: SpeakingExercise[];
  assessments: LevelAssessment[];
}

const CACHE = new Map<LevelId, Promise<LevelAcademyBundle>>();

async function buildBundle(level: LevelId): Promise<LevelAcademyBundle> {
  if (level === 'A1') {
    const [st, ls, rd, pz, ws, as] = await Promise.all([
      import('./a1/stories'),
      import('./a1/listening'),
      import('./a1/reading'),
      import('./a1/puzzles'),
      import('./a1/writingSpeaking'),
      import('./a1/assessments'),
    ]);
    return {
      stories: st.A1_STORIES,
      listening: ls.A1_LISTENING,
      reading: rd.A1_READING,
      puzzles: pz.A1_PUZZLES,
      writing: ws.A1_WRITING,
      speaking: ws.A1_SPEAKING,
      assessments: as.A1_ASSESSMENTS,
    };
  }
  if (level === 'A2') {
    const [st, ls, rd, pz, ws, as] = await Promise.all([
      import('./a2/stories'),
      import('./a2/listening'),
      import('./a2/reading'),
      import('./a2/puzzles'),
      import('./a2/writingSpeaking'),
      import('./a2/assessments'),
    ]);
    return {
      stories: st.A2_STORIES,
      listening: ls.A2_LISTENING,
      reading: rd.A2_READING,
      puzzles: pz.A2_PUZZLES,
      writing: ws.A2_WRITING,
      speaking: ws.A2_SPEAKING,
      assessments: as.A2_ASSESSMENTS,
    };
  }
  if (level === 'B1') {
    const [st, ls, rd, pz, ws, as] = await Promise.all([
      import('./b1/stories'),
      import('./b1/listening'),
      import('./b1/reading'),
      import('./b1/puzzles'),
      import('./b1/writingSpeaking'),
      import('./b1/assessments'),
    ]);
    return {
      stories: st.B1_STORIES,
      listening: ls.B1_LISTENING,
      reading: rd.B1_READING,
      puzzles: pz.B1_PUZZLES,
      writing: ws.B1_WRITING,
      speaking: ws.B1_SPEAKING,
      assessments: as.B1_ASSESSMENTS,
    };
  }
  const [st, ls, rd, pz, ws, as] = await Promise.all([
    import('./b2/stories'),
    import('./b2/listening'),
    import('./b2/reading'),
    import('./b2/puzzles'),
    import('./b2/writingSpeaking'),
    import('./b2/assessments'),
  ]);
  return {
    stories: st.B2_STORIES,
    listening: ls.B2_LISTENING,
    reading: rd.B2_READING,
    puzzles: pz.B2_PUZZLES,
    writing: ws.B2_WRITING,
    speaking: ws.B2_SPEAKING,
    assessments: as.B2_ASSESSMENTS,
  };
}

export function loadLevelBundle(level: LevelId): Promise<LevelAcademyBundle> {
  let promise = CACHE.get(level);
  if (!promise) {
    promise = buildBundle(level);
    CACHE.set(level, promise);
  }
  return promise;
}

export async function loadAllBundles(): Promise<Record<LevelId, LevelAcademyBundle>> {
  const [A1, A2, B1, B2] = await Promise.all([
    loadLevelBundle('A1'),
    loadLevelBundle('A2'),
    loadLevelBundle('B1'),
    loadLevelBundle('B2'),
  ]);
  return { A1, A2, B1, B2 };
}

export async function findStoryById(id: string): Promise<StoryItem | undefined> {
  const all = await loadAllBundles();
  for (const level of ['A1', 'A2', 'B1', 'B2'] as const) {
    const hit = all[level].stories.find((s) => s.id === id);
    if (hit) return hit;
  }
  return undefined;
}

export async function loadLevelStories(level: LevelId): Promise<StoryItem[]> {
  return (await loadLevelBundle(level)).stories;
}

export async function loadLevelListening(level: LevelId): Promise<ListeningExercise[]> {
  return (await loadLevelBundle(level)).listening;
}

export async function loadLevelReading(level: LevelId): Promise<ReadingPassage[]> {
  return (await loadLevelBundle(level)).reading;
}

export async function loadLevelPuzzles(level: LevelId): Promise<PuzzleChallenge[]> {
  return (await loadLevelBundle(level)).puzzles;
}

export async function loadLevelWriting(level: LevelId): Promise<WritingExercise[]> {
  return (await loadLevelBundle(level)).writing;
}

export async function loadLevelSpeaking(level: LevelId): Promise<SpeakingExercise[]> {
  return (await loadLevelBundle(level)).speaking;
}

export async function loadLevelAssessments(level: LevelId): Promise<LevelAssessment[]> {
  return (await loadLevelBundle(level)).assessments;
}
