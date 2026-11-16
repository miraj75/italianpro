import type { Lesson, Level, LevelId, Unit } from './types';
import { a1Unit1 } from './a1/unit1';
import { a1Unit2 } from './a1/unit2';
import { a1Unit3 } from './a1/unit3';
import { a1Unit4 } from './a1/unit4';
import { a1Unit5 } from './a1/unit5';
import { a1Unit6 } from './a1/unit6';
import { a2Unit1 } from './a2/unit1';
import { a2Unit2 } from './a2/unit2';
import { a2Unit3 } from './a2/unit3';
import { a2Unit4 } from './a2/unit4';
import { b1Unit1 } from './b1/unit1';
import { b1Unit2 } from './b1/unit2';
import { b1Unit3 } from './b1/unit3';
import { b1Unit4 } from './b1/unit4';
import { b2Unit1 } from './b2/unit1';
import { b2Unit2 } from './b2/unit2';
import { b2Unit3 } from './b2/unit3';
import { b2Unit4 } from './b2/unit4';

export const LEVELS: Level[] = [
  {
    id: 'A1',
    name: { bn: 'শুরু (Beginner)', en: 'Beginner' },
    description: { bn: 'ইতালিয়ান ভাষার ভিত্তি: পরিচিতি, দৈনন্দিন কথা, মৌলিক ব্যাকরণ', en: 'Foundations: introductions, everyday phrases, basic grammar' },
    units: [
      a1Unit1,
      a1Unit2,
      a1Unit3,
      a1Unit4,
      a1Unit5,
      a1Unit6,
    ],
  },
  {
    id: 'A2',
    name: { bn: 'প্রাথমিক (Elementary)', en: 'Elementary' },
    description: { bn: 'আরও বিস্তৃত কথোপকথন, ভ্রমণ, কাজ, অতীতের অভিজ্ঞতা', en: 'Wider conversations, travel, work, past experiences' },
    units: [
      a2Unit1,
      a2Unit2,
      a2Unit3,
      a2Unit4,
    ],
  },
  {
    id: 'B1',
    name: { bn: 'মধ্যম (Intermediate)', en: 'Intermediate' },
    description: { bn: 'বিস্তারিতভাবে নিজের মতামত, অভিজ্ঞতা, খবর ও সমাজ', en: 'Opinions in detail, experiences, news and society' },
    units: [
      b1Unit1,
      b1Unit2,
      b1Unit3,
      b1Unit4,
    ],
  },
  {
    id: 'B2',
    name: { bn: 'উচ্চ মধ্যম (Upper Intermediate)', en: 'Upper Intermediate' },
    description: { bn: 'জটিল বিষয়, যুক্তি, বিতর্ক, পেশাগত যোগাযোগ', en: 'Complex topics, argumentation, debate, professional communication' },
    units: [
      b2Unit1,
      b2Unit2,
      b2Unit3,
      b2Unit4,
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
