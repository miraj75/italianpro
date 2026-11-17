import { useMemo } from 'react';
import { A1_NUMBERS } from '../../content/academy/a1Numbers';
import { NUMBERS_THEORY_CONFIG } from '../../content/academy/theoryData';
import type { AcademyDrillItem } from '../../content/academy/types';
import { StructuredFlowRunner } from '../../components/academy/StructuredFlowRunner';
import type { StudyListItem } from '../../components/academy/StudyItemCard';
import type { StudyGroupOption } from '../../components/academy/StudyListScreen';

const NUMBER_GROUPS: StudyGroupOption[] = [
  { id: '0-10', label: '0–10' },
  { id: '11-20', label: '11–20' },
  { id: '21-30', label: '21–30' },
  { id: '31-50', label: '31–50' },
  { id: '51-70', label: '51–70' },
  { id: '71-100', label: '71–100' },
  { id: 'all', label: '0–100' },
];

/**
 * Curated 30-item listening drill deck spanning all 6 number ranges (0–10, 11–20,
 * 21–30, 31–50, 51–70, 71–100) including all base/teen roots (0–20), uno/otto elision,
 * -tré accent compounds, and milestone tens through 100.
 */
const NUMBERS_DRILL_VALUES: readonly number[] = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 23, 28, 30, 40, 55, 68, 81, 100,
];

function toDrillItem(n: (typeof A1_NUMBERS)[number]): AcademyDrillItem {
  return {
    id: n.id,
    audioIt: n.it,
    primaryLabel: String(n.value),
    secondaryLabel: n.it,
    cueBn: `${n.phoneticBn} · ${n.bn}`,
    cueEn: `${n.phoneticEn} · ${n.en}`,
    cueIt: `${n.phoneticEn} · ${n.exampleIt}`,
    feedbackDetail: {
      bn: `${n.value} = "${n.it}" (${n.phoneticBn}) · ${n.exampleIt} (${n.exampleTr.bn})`,
      en: `${n.value} = "${n.it}" (${n.phoneticEn}) · ${n.exampleIt} (${n.exampleTr.en})`,
      it: `${n.value} = «${n.it}» (${n.phoneticEn}) · ${n.exampleIt}`,
    },
  };
}

export function NumbersModuleScreen() {
  const studyItems: StudyListItem[] = useMemo(
    () =>
      A1_NUMBERS.map((n) => ({
        id: n.id,
        primary: String(n.value),
        italianLabel: n.it,
        phoneticBn: n.phoneticBn,
        phoneticEn: n.phoneticEn,
        phoneticIt: n.phoneticEn,
        meaningBn: n.bn,
        meaningEn: n.en,
        meaningIt: n.exampleIt,
        audioText: n.it,
        exampleIt: n.exampleIt,
        exampleTrBn: n.exampleTr.bn,
        exampleTrEn: n.exampleTr.en,
        exampleTrIt: n.exampleTr.it ?? n.exampleTr.en,
        group: n.group,
      })),
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
      studyGroups={NUMBER_GROUPS}
      studySearchPlaceholder="0–100, ventuno, ottanta..."
      enableStudyStepper
      drillItems={drillItems}
      drillDistractorPool={distractorPool}
    />
  );
}
