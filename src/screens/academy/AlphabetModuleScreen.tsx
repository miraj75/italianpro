import { useMemo } from 'react';
import { A1_ALPHABET_LETTERS } from '../../content/academy/a1Alphabet';
import { ALPHABET_THEORY_CONFIG } from '../../content/academy/theoryData';
import type { AcademyDrillItem } from '../../content/academy/types';
import { useI18n } from '../../lib/i18n';
import { StructuredFlowRunner } from '../../components/academy/StructuredFlowRunner';
import type { StudyListItem } from '../../components/academy/StudyItemCard';

export function AlphabetModuleScreen() {
  const { tr } = useI18n();

  const studyItems: StudyListItem[] = useMemo(
    () =>
      A1_ALPHABET_LETTERS.map((l) => ({
        id: l.id,
        primary: l.letter,
        secondary: l.lower,
        italianLabel: l.italianName,
        phoneticBn: l.phoneticBn,
        phoneticEn: l.phoneticEn,
        phoneticIt: l.phoneticEn,
        audioText: `${l.italianName}. ${l.exampleIt}`,
        categoryLabel: l.isVowel
          ? tr({ bn: 'স্বরবর্ণ', en: 'Vowel', it: 'Vocale' })
          : tr({ bn: 'ব্যঞ্জনবর্ণ', en: 'Consonant', it: 'Consonante' }),
        guideBn: l.guide.bn,
        guideEn: l.guide.en,
        guideIt: l.guide.it ?? l.guide.en,
        exampleIt: l.exampleIt,
        examplePhoneticBn: l.examplePhoneticBn,
        examplePhoneticEn: l.examplePhoneticEn,
        exampleTrBn: l.exampleTr.bn,
        exampleTrEn: l.exampleTr.en,
        exampleTrIt: l.exampleTr.it ?? l.exampleTr.en,
      })),
    [tr],
  );

  const drillItems: AcademyDrillItem[] = useMemo(
    () =>
      A1_ALPHABET_LETTERS.map((l) => ({
        id: l.id,
        audioIt: `${l.italianName}. ${l.exampleIt}`,
        primaryLabel: l.letter,
        secondaryLabel: l.italianName,
        cueBn: l.phoneticBn,
        cueEn: l.phoneticEn,
        cueIt: l.phoneticEn,
        feedbackDetail: {
          bn: `বর্ণ ${l.letter} (${l.lower}) = "${l.italianName}" · উদাহরণ: ${l.exampleIt} (${l.exampleTr.bn})`,
          en: `Letter ${l.letter} (${l.lower}) = "${l.italianName}" · Example: ${l.exampleIt} (${l.exampleTr.en})`,
          it: `Lettera ${l.letter} (${l.lower}) = «${l.italianName}» · Esempio: ${l.exampleIt}`,
        },
      })),
    [],
  );

  return (
    <StructuredFlowRunner
      moduleId="alphabet"
      backTo="/level/A1"
      theoryConfig={ALPHABET_THEORY_CONFIG}
      studyTitle={{
        bn: '২১টি মূল ইতালিয়ান বর্ণ (অধ্যয়ন তালিকা)',
        en: '21 Standard Italian Letters — Study List',
        it: '21 lettere standard italiane — Studio',
      }}
      studyItems={studyItems}
      drillItems={drillItems}
    />
  );
}
