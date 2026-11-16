import type { Lesson, Level, LevelId, Unit } from './types';
import { a1Unit1 } from './a1/unit1';

/** Planned unit outline; units with no lessons are shown as "in preparation". */
function planned(levelId: string, number: number, title: string, bn: string, en: string): Unit {
  return { id: `${levelId.toLowerCase()}-u${number}`, number, title, subtitle: { bn, en }, lessons: [] };
}

export const LEVELS: Level[] = [
  {
    id: 'A1',
    name: { bn: 'শুরু (Beginner)', en: 'Beginner' },
    description: { bn: 'ইতালিয়ান ভাষার ভিত্তি: পরিচিতি, দৈনন্দিন কথা, মৌলিক ব্যাকরণ', en: 'Foundations: introductions, everyday phrases, basic grammar' },
    units: [
      a1Unit1,
      planned('A1', 2, 'La famiglia', 'পরিবার ও আর্টিকেল', 'Family and articles'),
      planned('A1', 3, 'Al bar', 'ক্যাফেতে অর্ডার করা', 'Ordering at a café'),
      planned('A1', 4, 'La mia giornata', 'দৈনন্দিন রুটিন (-are ক্রিয়া)', 'Daily routine (-are verbs)'),
      planned('A1', 5, 'In città', 'শহরে দিক নির্দেশনা', 'Getting around town'),
      planned('A1', 6, 'Fare la spesa', 'কেনাকাটা ও দাম', 'Shopping and prices'),
    ],
  },
  {
    id: 'A2',
    name: { bn: 'প্রাথমিক (Elementary)', en: 'Elementary' },
    description: { bn: 'আরও বিস্তৃত কথোপকথন, ভ্রমণ, কাজ, অতীতের অভিজ্ঞতা', en: 'Wider conversations, travel, work, past experiences' },
    units: [
      planned('A2', 1, 'Il passato prossimo', 'অতীত কাল', 'The past tense'),
      planned('A2', 2, 'In viaggio', 'ভ্রমণ', 'Travelling'),
      planned('A2', 3, 'Il lavoro', 'কাজ', 'Work'),
    ],
  },
  {
    id: 'B1',
    name: { bn: 'মধ্যম (Intermediate)', en: 'Intermediate' },
    description: { bn: 'বিস্তারিতভাবে নিজের মতামত, অভিজ্ঞতা, খবর ও সমাজ', en: 'Opinions in detail, experiences, news and society' },
    units: [
      planned('B1', 1, 'Opinioni', 'মতামত প্রকাশ', 'Expressing opinions'),
      planned('B1', 2, 'Il congiuntivo', 'congiuntivo-র পরিচয়', 'Introducing the subjunctive'),
    ],
  },
  {
    id: 'B2',
    name: { bn: 'উচ্চ মধ্যম (Upper Intermediate)', en: 'Upper Intermediate' },
    description: { bn: 'জটিল বিষয়, যুক্তি, বিতর্ক, পেশাগত যোগাযোগ', en: 'Complex topics, argumentation, debate, professional communication' },
    units: [
      planned('B2', 1, 'Argomentare', 'যুক্তি উপস্থাপন', 'Building arguments'),
      planned('B2', 2, 'Italiano professionale', 'পেশাগত ইতালিয়ান', 'Professional Italian'),
    ],
  },
];

export const LEVEL_ORDER: LevelId[] = ['A1', 'A2', 'B1', 'B2'];

export interface LessonRef {
  level: Level;
  unit: Unit;
  lesson: Lesson;
}

export function allLessons(): LessonRef[] {
  return LEVELS.flatMap((level) =>
    level.units.flatMap((unit) => unit.lessons.map((lesson) => ({ level, unit, lesson }))),
  );
}

export function findLesson(lessonId: string): LessonRef | undefined {
  return allLessons().find((ref) => ref.lesson.id === lessonId);
}

export function getLevel(id: LevelId): Level {
  const level = LEVELS.find((l) => l.id === id);
  if (!level) throw new Error(`Unknown level ${id}`);
  return level;
}

export function levelLessons(id: LevelId): Lesson[] {
  return getLevel(id).units.flatMap((u) => u.lessons);
}

/** True when every unit in a level has authored lessons, i.e. the level can actually be finished. */
export function isLevelContentComplete(id: LevelId): boolean {
  return getLevel(id).units.every((u) => u.lessons.length > 0);
}
