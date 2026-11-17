import { useMemo } from 'react';
import { StructuredFlowRunner } from '../../components/academy/StructuredFlowRunner';
import type { StudyListItem } from '../../components/academy/StudyItemCard';
import type { StudyGroupedSection } from '../../components/academy/StudyListScreen';
import type { AcademyDrillItem, AcademyTheoryConfig } from '../../content/academy/types';
import type { Tr } from '../../content/types';
import {
  A1_VERB_PRONOUNS,
  A1_VERBS_DRILL_ITEMS,
  A1_VERBS_LIST,
  VERBS_THEORY_CONFIG,
} from '../../content/academy/a1Verbs';
import {
  A1_ESSENTIAL_VERB_CATEGORIES,
  A1_ESSENTIAL_VERBS,
  A1_ESSENTIAL_VERBS_DRILL_ITEMS,
  ESSENTIAL_VERBS_THEORY_CONFIG,
} from '../../content/academy/a1EssentialVerbs';
import {
  A1_ADJECTIVE_CATEGORIES,
  A1_ADJECTIVES_DRILL_ITEMS,
  A1_ADJECTIVES_LIST,
  ADJECTIVES_THEORY_CONFIG,
} from '../../content/academy/a1Adjectives';
import {
  A1_ADVERB_CATEGORIES,
  A1_ADVERBS_DRILL_ITEMS,
  A1_ADVERBS_LIST,
  ADVERBS_THEORY_CONFIG,
} from '../../content/academy/a1Adverbs';
import {
  A1_PREPOSITION_GROUPS,
  A1_PREPOSITIONS_DRILL_ITEMS,
  A1_PREPOSITIONS_LIST,
  PREPOSITIONS_THEORY_CONFIG,
} from '../../content/academy/a1Prepositions';
import {
  A1_CONJUNCTION_CATEGORIES,
  A1_CONJUNCTIONS_DRILL_ITEMS,
  A1_CONJUNCTIONS_LIST,
  CONJUNCTIONS_THEORY_CONFIG,
} from '../../content/academy/a1Conjunctions';

export type PhaseBModuleId =
  | 'verbs'
  | 'essential-verbs'
  | 'adjectives'
  | 'adverbs'
  | 'prepositions'
  | 'conjunctions';

interface PhaseBModuleConfig {
  theoryConfig: AcademyTheoryConfig;
  studyTitle: Tr;
  studyItems: StudyListItem[];
  studyGroupedSections: StudyGroupedSection[];
  drillItems: AcademyDrillItem[];
}

function buildPhaseBConfig(moduleId: PhaseBModuleId): PhaseBModuleConfig {
  switch (moduleId) {
    case 'verbs': {
      const items: StudyListItem[] = A1_VERBS_LIST.map((v) => {
        const badge: Tr =
          v.group === 'regular-are'
            ? { bn: 'নিয়মিত -are', en: 'Regular -are' }
            : v.group === 'regular-ere'
              ? { bn: 'নিয়মিত -ere', en: 'Regular -ere' }
              : v.group === 'regular-ire'
                ? { bn: 'নিয়মিত -ire', en: 'Regular -ire' }
                : { bn: 'অনিয়মিত A1', en: 'Irregular' };

        const firstEx = v.examples[0]!;
        const secondEx = v.examples[1];
        return {
          id: v.id,
          primary: v.infinitive,
          italianLabel: v.infinitive,
          phoneticBn: v.phoneticBn,
          phoneticEn: v.phoneticEn,
          meaningBn: v.meaning.bn,
          meaningEn: v.meaning.en,
          meaningIt: v.meaning.it,
          exampleIt: firstEx.it,
          exampleTrBn: firstEx.tr.bn,
          exampleTrEn: firstEx.tr.en,
          secondaryExampleIt: secondEx?.it,
          secondaryExampleTrBn: secondEx?.tr.bn,
          secondaryExampleTrEn: secondEx?.tr.en,
          group: v.group === 'irregular' ? 'irregular' : 'regular',
          badge,
          conjugationRows: A1_VERB_PRONOUNS.map((pronoun, idx) => ({
            pronoun,
            form: v.conjugation[idx] ?? '',
          })),
          crossLinkNote: v.endingNote,
          detailLayout: 'rich',
          audioText: `${v.infinitive}. ${firstEx.it}`,
        };
      });

      return {
        theoryConfig: VERBS_THEORY_CONFIG,
        studyTitle: { bn: '১৯টি নিয়মিত ও অনিয়মিত A1 ক্রিয়া', en: '19 Regular & Irregular A1 Verbs' },
        studyItems: items,
        studyGroupedSections: [
          {
            id: 'verbs-regular',
            title: { bn: '১. নিয়মিত ক্রিয়া (-are, -ere, -ire)', en: '1. Regular Verbs (-are, -ere, -ire)' },
            subtitle: {
              bn: 'parlare, mangiare, abitare, prendere, vedere, dormire, partire',
              en: '7 core regular conjugation models across all 3 verb groups',
            },
            items: items.filter((i) => i.group === 'regular'),
          },
          {
            id: 'verbs-irregular',
            title: { bn: '২. অপরিহার্য অনিয়মিত ক্রিয়া (Irregular A1)', en: '2. Essential Irregular Verbs' },
            subtitle: {
              bn: 'essere, avere, fare, andare, stare, dare, potere, volere, dovere, sapere, venire, uscire',
              en: '12 must-know irregular verbs in the present tense',
            },
            items: items.filter((i) => i.group === 'irregular'),
          },
        ],
        drillItems: A1_VERBS_DRILL_ITEMS,
      };
    }

    case 'essential-verbs': {
      const catMap = new Map(A1_ESSENTIAL_VERB_CATEGORIES.map((c) => [c.id, c]));
      const items: StudyListItem[] = A1_ESSENTIAL_VERBS.map((v) => ({
        id: v.id,
        primary: v.infinitive,
        italianLabel: v.conjugationCue,
        phoneticBn: v.phoneticBn,
        phoneticEn: v.phoneticEn,
        meaningBn: v.meaning.bn,
        meaningEn: v.meaning.en,
        exampleIt: v.exampleIt,
        exampleTrBn: v.exampleTr.bn,
        exampleTrEn: v.exampleTr.en,
        group: v.category,
        badge: catMap.get(v.category)?.title,
        crossLinkNote: v.crossLinkNote,
        detailLayout: 'rich',
        audioText: `${v.infinitive}. ${v.exampleIt}`,
      }));

      return {
        theoryConfig: ESSENTIAL_VERBS_THEORY_CONFIG,
        studyTitle: { bn: '৭টি দৈনন্দিন বিষয়ের ২৮টি ক্রিয়া', en: '28 Everyday Verbs by Theme' },
        studyItems: items,
        studyGroupedSections: A1_ESSENTIAL_VERB_CATEGORIES.map((cat) => ({
          id: `ev-cat-${cat.id}`,
          title: cat.title,
          subtitle: cat.subtitle,
          items: items.filter((i) => i.group === cat.id),
        })),
        drillItems: A1_ESSENTIAL_VERBS_DRILL_ITEMS,
      };
    }

    case 'adjectives': {
      const items: StudyListItem[] = A1_ADJECTIVES_LIST.map((adj) => ({
        id: adj.id,
        primary: adj.base,
        italianLabel: adj.formsDisplay,
        phoneticBn: adj.phoneticBn,
        phoneticEn: adj.phoneticEn,
        meaningBn: adj.meaning.bn,
        meaningEn: adj.meaning.en,
        exampleIt: adj.exampleIt,
        exampleTrBn: adj.exampleTr.bn,
        exampleTrEn: adj.exampleTr.en,
        group: adj.category,
        badge: adj.categoryLabel,
        crossLinkNote: adj.usageNote,
        detailLayout: 'rich',
        audioText: `${adj.base}. ${adj.exampleIt}`,
      }));

      return {
        theoryConfig: ADJECTIVES_THEORY_CONFIG,
        studyTitle: { bn: '২২টি প্রয়োজনীয় A1 বিশেষণ ও নির্দেশক রূপ', en: '22 Essential A1 Adjectives & Demonstratives' },
        studyItems: items,
        studyGroupedSections: A1_ADJECTIVE_CATEGORIES.map((cat) => ({
          id: `adj-cat-${cat.id}`,
          title: cat.title,
          subtitle: cat.subtitle,
          items: items.filter((i) => i.group === cat.id),
        })),
        drillItems: A1_ADJECTIVES_DRILL_ITEMS,
      };
    }

    case 'adverbs': {
      const items: StudyListItem[] = A1_ADVERBS_LIST.map((adv) => ({
        id: adv.id,
        primary: adv.word,
        italianLabel: adv.word,
        phoneticBn: adv.phoneticBn,
        phoneticEn: adv.phoneticEn,
        meaningBn: adv.meaning.bn,
        meaningEn: adv.meaning.en,
        exampleIt: adv.exampleIt,
        exampleTrBn: adv.exampleTr.bn,
        exampleTrEn: adv.exampleTr.en,
        group: adv.category,
        badge: adv.categoryLabel,
        crossLinkNote: adv.placementHint,
        detailLayout: 'rich',
        audioText: `${adv.word}. ${adv.exampleIt}`,
      }));

      return {
        theoryConfig: ADVERBS_THEORY_CONFIG,
        studyTitle: { bn: '১৯টি প্রয়োজনীয় A1 ক্রিয়াবিশেষণ', en: '19 Essential A1 Adverbs' },
        studyItems: items,
        studyGroupedSections: A1_ADVERB_CATEGORIES.map((cat) => ({
          id: `adv-cat-${cat.id}`,
          title: cat.title,
          subtitle: cat.subtitle,
          items: items.filter((i) => i.group === cat.id),
        })),
        drillItems: A1_ADVERBS_DRILL_ITEMS,
      };
    }

    case 'prepositions': {
      const items: StudyListItem[] = A1_PREPOSITIONS_LIST.map((prep) => ({
        id: prep.id,
        primary: prep.word,
        italianLabel: prep.group === 'articulated' ? prep.formsDisplay : prep.word,
        phoneticBn: prep.phoneticBn,
        phoneticEn: prep.phoneticEn,
        meaningBn: prep.meaning.bn,
        meaningEn: prep.meaning.en,
        exampleIt: prep.exampleIt,
        exampleTrBn: prep.exampleTr.bn,
        exampleTrEn: prep.exampleTr.en,
        group: prep.group,
        badge: prep.groupLabel,
        crossLinkNote: prep.usageSummary,
        detailLayout: 'rich',
        audioText: `${prep.word.replace(/·/g, ',')}. ${prep.exampleIt}`,
      }));

      return {
        theoryConfig: PREPOSITIONS_THEORY_CONFIG,
        studyTitle: { bn: 'সরল ও যুক্ত পদান্বয়ী অব্যয়', en: 'Simple & Articulated Prepositions' },
        studyItems: items,
        studyGroupedSections: A1_PREPOSITION_GROUPS.map((grp) => ({
          id: `prep-grp-${grp.id}`,
          title: grp.title,
          subtitle: grp.subtitle,
          items: items.filter((i) => i.group === grp.id),
        })),
        drillItems: A1_PREPOSITIONS_DRILL_ITEMS,
      };
    }

    case 'conjunctions': {
      const items: StudyListItem[] = A1_CONJUNCTIONS_LIST.map((c) => ({
        id: c.id,
        primary: c.word,
        italianLabel: c.word,
        phoneticBn: c.phoneticBn,
        phoneticEn: c.phoneticEn,
        meaningBn: c.meaning.bn,
        meaningEn: c.meaning.en,
        exampleIt: c.exampleIt,
        exampleTrBn: c.exampleTr.bn,
        exampleTrEn: c.exampleTr.en,
        group: c.category,
        badge: c.categoryLabel,
        crossLinkNote: c.usageNote,
        detailLayout: 'rich',
        audioText: `${c.word}. ${c.exampleIt}`,
      }));

      return {
        theoryConfig: CONJUNCTIONS_THEORY_CONFIG,
        studyTitle: { bn: '৯টি অপরিহার্য A1 সংযোজক অব্যয়', en: '9 Essential A1 Conjunctions' },
        studyItems: items,
        studyGroupedSections: A1_CONJUNCTION_CATEGORIES.map((cat) => ({
          id: `conj-cat-${cat.id}`,
          title: cat.title,
          subtitle: cat.subtitle,
          items: items.filter((i) => i.group === cat.id),
        })),
        drillItems: A1_CONJUNCTIONS_DRILL_ITEMS,
      };
    }
  }
}

export function PhaseBModuleScreen({ moduleId }: { moduleId: PhaseBModuleId }) {
  const config = useMemo(() => buildPhaseBConfig(moduleId), [moduleId]);

  return (
    <StructuredFlowRunner
      key={moduleId}
      moduleId={moduleId}
      backTo="/level/A1"
      theoryConfig={config.theoryConfig}
      studyTitle={config.studyTitle}
      studyItems={config.studyItems}
      studyGroupedSections={config.studyGroupedSections}
      drillItems={config.drillItems}
    />
  );
}
