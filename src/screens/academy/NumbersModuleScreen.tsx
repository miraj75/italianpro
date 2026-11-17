import { useMemo } from 'react';
import { A1_NUMBERS } from '../../content/academy/a1Numbers';
import type { AcademyDrillItem, NumberItem } from '../../content/academy/types';
import { NUMBERS_THEORY_CONFIG } from '../../content/academy/theoryData';
import { StructuredFlowRunner } from '../../components/academy/StructuredFlowRunner';
import type { StudyListItem } from '../../components/academy/StudyItemCard';
import type { StudySequentialGroup } from '../../components/academy/StudyListScreen';

export const NUMBER_STUDY_RANGES: readonly { id: string; label: string; min: number; max: number }[] = [
  { id: '0-9', label: '0–9', min: 0, max: 9 },
  { id: '10-19', label: '10–19', min: 10, max: 19 },
  { id: '20-29', label: '20–29', min: 20, max: 29 },
  { id: '30-39', label: '30–39', min: 30, max: 39 },
  { id: '40-49', label: '40–49', min: 40, max: 49 },
  { id: '50-59', label: '50–59', min: 50, max: 59 },
  { id: '60-69', label: '60–69', min: 60, max: 69 },
  { id: '70-79', label: '70–79', min: 70, max: 79 },
  { id: '80-89', label: '80–89', min: 80, max: 89 },
  { id: '90-99', label: '90–99', min: 90, max: 99 },
  { id: '100', label: '100', min: 100, max: 100 },
];

export function toNumberStudyItem(n: NumberItem): StudyListItem {
  return {
    id: n.id,
    primary: String(n.value),
    italianLabel: n.it,
    phoneticBn: n.phoneticBn,
    phoneticEn: n.phoneticEn,
    phoneticIt: n.it,
    meaningBn: n.bn,
    meaningEn: n.en,
    meaningIt: n.exampleIt,
    audioText: n.it,
    exampleIt: n.exampleIt,
    exampleTrBn: n.exampleTr.bn,
    exampleTrEn: n.exampleTr.en,
    exampleTrIt: n.exampleTr.it ?? '',
    group: n.group,
  };
}

export function buildSequentialNumberGroups(
  numbers: readonly NumberItem[] = A1_NUMBERS,
): StudySequentialGroup[] {
  return NUMBER_STUDY_RANGES.map((range) => ({
    id: range.id,
    label: range.label,
    items: numbers
      .filter((n) => n.value >= range.min && n.value <= range.max)
      .map(toNumberStudyItem),
  }));
}

/**
 * Curated 30-item listening drill deck spanning 0–100 including all base/teen roots (0–20),
 * uno/otto elision, -tré accent compounds, and milestone tens through 100.
 */
const NUMBERS_DRILL_VALUES: readonly number[] = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 23, 28, 30, 40, 55, 68, 81, 100,
];

function toDrillItem(n: NumberItem): AcademyDrillItem {
  return {
    id: n.id,
    audioIt: n.it,
    primaryLabel: String(n.value),
    secondaryLabel: n.it,
    cueBn: `${n.phoneticBn} · ${n.bn}`,
    cueEn: `${n.phoneticEn} · ${n.en}`,
    cueIt: n.exampleIt,
    feedbackDetail: {
      bn: `${n.value} = "${n.it}" (${n.phoneticBn}) · ${n.exampleIt} (${n.exampleTr.bn})`,
      en: `${n.value} = "${n.it}" (${n.phoneticEn}) · ${n.exampleIt} (${n.exampleTr.en})`,
      it: `${n.value} = «${n.it}» · ${n.exampleIt}`,
    },
  };
}

export function NumbersModuleScreen() {
  const studyItems: StudyListItem[] = useMemo(
    () => A1_NUMBERS.map(toNumberStudyItem),
    [],
  );

  const studySequentialGroups: StudySequentialGroup[] = useMemo(
    () => buildSequentialNumberGroups(A1_NUMBERS),
    [],
  );

  const distractorPool: AcademyDrillItem[] = useMemo(
    () => A1_NUMBERS.map(toDrillItem),
    [],
  );

  const drillItems: AcademyDrillItem[] = useMemo(() => {
    const allowed = new Set(NUMBERS_DRILL_VALUES);
    return A1_NUMBERS.filter((n) => allowed.has(n.value)).map(toDrillItem);
  }, []);

  return (
    <StructuredFlowRunner
      moduleId="numbers"
      backTo="/level/A1"
      theoryConfig={NUMBERS_THEORY_CONFIG}
      studyTitle={{
        bn: 'সংখ্যা ০ থেকে ১০০ (অধ্যয়ন তালিকা)',
        en: 'Numbers 0–100 — Study List',
        it: 'Numeri 0–100 — Studio',
      }}
      studyItems={studyItems}
      studySequentialGroups={studySequentialGroups}
      drillItems={drillItems}
      drillDistractorPool={distractorPool}
    />
  );
}
