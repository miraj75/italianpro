import { useMemo } from 'react';
import { CheckCircle2, MessageCircle, Volume2 } from 'lucide-react';
import { StructuredFlowRunner } from '../../components/academy/StructuredFlowRunner';
import type { StudyListItem } from '../../components/academy/StudyItemCard';
import type { StudyGroupedSection } from '../../components/academy/StudyListScreen';
import {
  A1_GREETINGS_DRILL_ITEMS,
  A1_GREETINGS_ITEMS,
  A1_GREETING_CATEGORIES,
  A1_GREETING_DIALOGUES,
  GREETINGS_THEORY_CONFIG,
  type A1GreetingDialogue,
} from '../../content/academy/a1GreetingsIntro';
import {
  A1_NOUNS_DRILL_ITEMS,
  A1_NOUNS_LIST,
  A1_NOUN_CATEGORIES,
  NOUNS_THEORY_CONFIG,
} from '../../content/academy/a1NounsPlurals';
import {
  A1_PRONOUNS_POSSESSIVES_DRILL_ITEMS,
  A1_PRONOUNS_POSSESSIVES_LIST,
  A1_PRONOUN_POSS_CATEGORIES,
  PRONOUNS_POSSESSIVES_THEORY_CONFIG,
} from '../../content/academy/a1PronounsPossessives';
import {
  A1_SENTENCE_CATEGORIES,
  A1_SENTENCE_ITEMS,
  A1_SENTENCE_STRUCTURE_DRILL_ITEMS,
  SENTENCE_STRUCTURE_THEORY_CONFIG,
} from '../../content/academy/a1SentenceStructure';
import {
  A1_TIME_DATES_DIALOGUES,
  A1_TIME_DATES_DRILL_ITEMS,
  A1_TIME_DATES_ITEMS,
  A1_TIME_DATE_CATEGORIES,
  TIME_DATES_THEORY_CONFIG,
  type A1TimeDialogue,
} from '../../content/academy/a1TimeDates';
import type { AcademyDrillItem, AcademyTheoryConfig } from '../../content/academy/types';
import type { Tr } from '../../content/types';
import { useI18n } from '../../lib/i18n';
import { speakItalian, startSpeechSession } from '../../lib/speech';
import { cx } from '../../components/ui';

export type A1ExpandedGrammarModuleId =
  | 'greetings-intro'
  | 'nouns-gender-plurals'
  | 'pronouns-possessives'
  | 'sentence-structure'
  | 'time-dates';

interface ExpandedConfig {
  theoryConfig: AcademyTheoryConfig;
  studyTitle: Tr;
  studyItems: StudyListItem[];
  studyGroupedSections: StudyGroupedSection[];
  drillItems: AcademyDrillItem[];
  dialogues?: (A1GreetingDialogue | A1TimeDialogue)[];
}

function makeStubDialogueStudyItems(dialogues: (A1GreetingDialogue | A1TimeDialogue)[]): StudyListItem[] {
  return dialogues.map((d) => ({
    id: d.id,
    primary: d.title.en,
    italianLabel: d.title.en,
    phoneticBn: '',
    phoneticEn: '',
    meaningBn: d.title.bn,
    meaningEn: d.title.en,
    exampleIt: d.lines[0]?.it ?? '',
    exampleTrBn: d.lines[0]?.tr.bn ?? '',
    exampleTrEn: d.lines[0]?.tr.en ?? '',
    audioText: d.lines.map((l) => l.it).join('. '),
  }));
}

function buildExpandedConfig(moduleId: A1ExpandedGrammarModuleId): ExpandedConfig {
  switch (moduleId) {
    case 'greetings-intro': {
      const items: StudyListItem[] = A1_GREETINGS_ITEMS.map((g) => ({
        id: g.id,
        primary: g.it,
        italianLabel:
          g.register === 'formal'
            ? 'Formale (Lei)'
            : g.register === 'informal'
              ? 'Informale (tu)'
              : 'Neutro',
        phoneticBn: g.phoneticBn,
        phoneticEn: g.phoneticEn,
        meaningBn: g.meaning.bn,
        meaningEn: g.meaning.en,
        exampleIt: g.exampleIt,
        exampleTrBn: g.exampleTr.bn,
        exampleTrEn: g.exampleTr.en,
        group: g.category,
        badge: g.categoryLabel,
        crossLinkNote: g.usageNote,
        detailLayout: 'rich',
        audioText: `${g.it} ${g.exampleIt}`,
      }));

      return {
        theoryConfig: GREETINGS_THEORY_CONFIG,
        studyTitle: {
          bn: '৩৬টি সম্ভাষণ-পরিচয় ও ১০টি বাস্তব সংলাপ',
          en: '36 Greetings & Intro Phrases + 10 Real Dialogues',
        },
        studyItems: [...items, ...makeStubDialogueStudyItems(A1_GREETING_DIALOGUES)],
        studyGroupedSections: A1_GREETING_CATEGORIES.map((cat) => ({
          id: `gr-cat-${cat.id}`,
          title: cat.title,
          subtitle: cat.subtitle,
          items: items.filter((i) => i.group === cat.id),
        })),
        drillItems: A1_GREETINGS_DRILL_ITEMS,
        dialogues: A1_GREETING_DIALOGUES,
      };
    }

    case 'nouns-gender-plurals': {
      const items: StudyListItem[] = A1_NOUNS_LIST.map((n) => ({
        id: n.id,
        primary: `${n.singularWithArticle} → ${n.pluralWithArticle}`,
        italianLabel: n.indefiniteSg,
        phoneticBn: n.phoneticBn,
        phoneticEn: n.phoneticEn,
        meaningBn: n.meaning.bn,
        meaningEn: n.meaning.en,
        exampleIt: n.exampleIt,
        exampleTrBn: n.exampleTr.bn,
        exampleTrEn: n.exampleTr.en,
        group: n.category,
        badge: n.categoryLabel,
        crossLinkNote: n.ruleNote,
        detailLayout: 'rich',
        audioText: `${n.singularWithArticle}, ${n.pluralWithArticle}. ${n.exampleIt}`,
      }));

      return {
        theoryConfig: NOUNS_THEORY_CONFIG,
        studyTitle: {
          bn: '১০২টি একবচন-বহুবচন বিশেষ্য ও ব্যতিক্রম',
          en: '102 Singular/Plural Nouns & Exceptions',
        },
        studyItems: items,
        studyGroupedSections: A1_NOUN_CATEGORIES.map((cat) => ({
          id: `noun-cat-${cat.id}`,
          title: cat.title,
          subtitle: cat.subtitle,
          items: items.filter((i) => i.group === cat.id),
        })),
        drillItems: A1_NOUNS_DRILL_ITEMS,
      };
    }

    case 'pronouns-possessives': {
      const items: StudyListItem[] = A1_PRONOUNS_POSSESSIVES_LIST.map((p) => ({
        id: p.id,
        primary: p.it,
        italianLabel: p.formsDisplay,
        phoneticBn: p.phoneticBn,
        phoneticEn: p.phoneticEn,
        meaningBn: p.meaning.bn,
        meaningEn: p.meaning.en,
        exampleIt: p.exampleIt,
        exampleTrBn: p.exampleTr.bn,
        exampleTrEn: p.exampleTr.en,
        group: p.category,
        badge: p.categoryLabel,
        crossLinkNote: p.note,
        detailLayout: 'rich',
        audioText: `${p.it}. ${p.exampleIt}`,
      }));

      return {
        theoryConfig: PRONOUNS_POSSESSIVES_THEORY_CONFIG,
        studyTitle: {
          bn: 'ব্যক্তিবাচক ও অধিকারসূচক সর্বনাম (৪২টি আইটেম)',
          en: 'Personal & Possessive Pronouns (42 Items)',
        },
        studyItems: items,
        studyGroupedSections: A1_PRONOUN_POSS_CATEGORIES.map((cat) => ({
          id: `pp-cat-${cat.id}`,
          title: cat.title,
          subtitle: cat.subtitle,
          items: items.filter((i) => i.group === cat.id),
        })),
        drillItems: A1_PRONOUNS_POSSESSIVES_DRILL_ITEMS,
      };
    }

    case 'sentence-structure': {
      const items: StudyListItem[] = A1_SENTENCE_ITEMS.map((s) => ({
        id: s.id,
        primary: s.it,
        italianLabel: s.patternTag,
        phoneticBn: s.phoneticBn,
        phoneticEn: s.phoneticEn,
        meaningBn: s.meaning.bn,
        meaningEn: s.meaning.en,
        exampleIt: s.secondaryIt ?? s.it,
        exampleTrBn: s.secondaryTr?.bn ?? s.meaning.bn,
        exampleTrEn: s.secondaryTr?.en ?? s.meaning.en,
        group: s.category,
        badge: s.categoryLabel,
        crossLinkNote: s.note,
        detailLayout: 'rich',
        audioText: s.secondaryIt ? `${s.it} ${s.secondaryIt}` : s.it,
      }));

      return {
        theoryConfig: SENTENCE_STRUCTURE_THEORY_CONFIG,
        studyTitle: {
          bn: 'বাক্য গঠন ও প্রশ্নবোধক কাঠামো (৬২টি প্যাটার্ন)',
          en: 'Sentence Building & Question Patterns (62 Items)',
        },
        studyItems: items,
        studyGroupedSections: A1_SENTENCE_CATEGORIES.map((cat) => ({
          id: `sent-cat-${cat.id}`,
          title: cat.title,
          subtitle: cat.subtitle,
          items: items.filter((i) => i.group === cat.id),
        })),
        drillItems: A1_SENTENCE_STRUCTURE_DRILL_ITEMS,
      };
    }

    case 'time-dates': {
      const items: StudyListItem[] = A1_TIME_DATES_ITEMS.map((td) => ({
        id: td.id,
        primary: td.it,
        italianLabel: td.subLabel,
        phoneticBn: td.phoneticBn,
        phoneticEn: td.phoneticEn,
        meaningBn: td.meaning.bn,
        meaningEn: td.meaning.en,
        exampleIt: td.exampleIt,
        exampleTrBn: td.exampleTr.bn,
        exampleTrEn: td.exampleTr.en,
        group: td.category,
        badge: td.categoryLabel,
        crossLinkNote: td.note,
        detailLayout: 'rich',
        audioText: `${td.it}. ${td.exampleIt}`,
      }));

      return {
        theoryConfig: TIME_DATES_THEORY_CONFIG,
        studyTitle: {
          bn: 'সময়, দিন, মাস, তারিখ ও ১৫টি সংলাপ',
          en: 'Time, Days, Months, Dates & 15 Dialogues',
        },
        studyItems: [...items, ...makeStubDialogueStudyItems(A1_TIME_DATES_DIALOGUES)],
        studyGroupedSections: A1_TIME_DATE_CATEGORIES.map((cat) => ({
          id: `td-cat-${cat.id}`,
          title: cat.title,
          subtitle: cat.subtitle,
          items: items.filter((i) => i.group === cat.id),
        })),
        drillItems: A1_TIME_DATES_DRILL_ITEMS,
        dialogues: A1_TIME_DATES_DIALOGUES,
      };
    }
  }
}

function DialogueExplorerSection({
  dialogues,
  studiedSet,
  onMarkStudied,
}: {
  dialogues: (A1GreetingDialogue | A1TimeDialogue)[];
  studiedSet: Set<string>;
  onMarkStudied: (id: string) => void;
}) {
  const { tr } = useI18n();
  const studiedCount = dialogues.filter((d) => studiedSet.has(d.id)).length;

  const playLine = (text: string, dialogueId: string) => {
    onMarkStudied(dialogueId);
    void speakItalian(text, 0.88, startSpeechSession()).catch(() => {});
  };

  const playDialogue = (dlg: A1GreetingDialogue | A1TimeDialogue) => {
    onMarkStudied(dlg.id);
    const fullText = dlg.lines.map((l) => l.it).join('. ');
    void speakItalian(fullText, 0.88, startSpeechSession()).catch(() => {});
  };

  return (
    <section className="space-y-3 pt-2" data-testid="dialogue-explorer-section">
      <div className="flex items-baseline justify-between gap-2 border-b border-white/10 pb-2">
        <div className="flex items-center gap-2">
          <MessageCircle size={17} className="text-cyan shrink-0" />
          <div>
            <h3 className="bn text-sm sm:text-base font-extrabold text-white">
              {tr({
                bn: `বাস্তব সংলাপ অনুশীলন (${dialogues.length}টি সংলাপ)`,
                en: `Interactive Mini-Dialogues (${dialogues.length} Dialogues)`,
              })}
            </h3>
            <p className="bn text-xs text-ink-2">
              {tr({
                bn: 'প্রতিটি সংলাপ শুনে বা ট্যাপ করে সম্পন্ন হিসেবে চিহ্নিত করুন',
                en: 'Tap any dialogue or play audio to mark it studied',
              })}
            </p>
          </div>
        </div>
        <span className="text-xs font-extrabold text-neon tabular-nums shrink-0">
          {studiedCount}/{dialogues.length}
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {dialogues.map((dlg) => {
          const isStudied = studiedSet.has(dlg.id);
          return (
            <div
              key={dlg.id}
              onClick={() => onMarkStudied(dlg.id)}
              data-testid={`study-item-${dlg.id}`}
              className={cx(
                'cursor-pointer rounded-2xl border p-4 space-y-3 transition',
                isStudied
                  ? 'border-neon/55 bg-[#08312a]/90 shadow-[0_0_16px_-8px_rgba(0,245,160,0.45)]'
                  : 'border-white/12 bg-white/5 hover:border-neon/35',
              )}
            >
              <div className="flex items-start justify-between gap-2">
                <div className="space-y-0.5 min-w-0">
                  <div className="flex items-center gap-2">
                    <span
                      className={cx(
                        'inline-flex items-center gap-1 text-[11px] font-bold',
                        isStudied ? 'text-neon' : 'text-ink-3',
                      )}
                    >
                      {isStudied ? (
                        <>
                          <CheckCircle2 size={14} className="text-neon shrink-0" />
                          <span className="bn">{tr({ bn: 'সম্পন্ন', en: 'Studied' })}</span>
                        </>
                      ) : (
                        <span className="inline-block h-3.5 w-3.5 rounded-full border border-white/25" />
                      )}
                    </span>
                    {'register' in dlg && (
                      <span className="rounded-md border border-cyan/30 bg-cyan/10 px-2 py-0.5 text-[10px] font-extrabold uppercase text-cyan">
                        {dlg.register}
                      </span>
                    )}
                  </div>
                  <h4 className="bn text-sm font-extrabold text-white">{tr(dlg.title)}</h4>
                  <p className="bn text-xs text-ink-3">{tr(dlg.context)}</p>
                </div>

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    playDialogue(dlg);
                  }}
                  aria-label={tr({ bn: 'পুরো সংলাপ শুনুন', en: 'Play full dialogue' })}
                  className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-grad-primary text-navy-950 transition hover:brightness-110 active:scale-95"
                >
                  <Volume2 size={15} />
                </button>
              </div>

              <div className="space-y-2">
                {dlg.lines.map((line, idx) => (
                  <div
                    key={idx}
                    onClick={(e) => {
                      e.stopPropagation();
                      playLine(line.it, dlg.id);
                    }}
                    className="flex items-start justify-between gap-2 rounded-xl border border-white/10 bg-white/4 px-3 py-2 hover:border-neon/30 transition"
                  >
                    <div className="min-w-0 space-y-0.5">
                      <p className="text-[11px] font-extrabold uppercase tracking-wide text-cyan">
                        {line.speaker}
                      </p>
                      <p className="text-xs sm:text-sm font-bold text-white leading-snug">
                        {line.it}
                      </p>
                      <p className="bn text-xs text-ink-2 leading-snug">{tr(line.tr)}</p>
                    </div>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        playLine(line.it, dlg.id);
                      }}
                      aria-label={`Play ${line.speaker}`}
                      className="mt-1 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/8 text-neon hover:bg-neon/15"
                    >
                      <Volume2 size={13} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export function A1ExpandedGrammarModuleScreen({
  moduleId,
}: {
  moduleId: A1ExpandedGrammarModuleId;
}) {
  const config = useMemo(() => buildExpandedConfig(moduleId), [moduleId]);

  const cardItemsForList = useMemo(
    () =>
      config.dialogues
        ? config.studyItems.filter((item) =>
            config.studyGroupedSections.some((sec) => sec.items.some((si) => si.id === item.id)),
          )
        : config.studyItems,
    [config],
  );

  const dialogueIds = useMemo(
    () => (config.dialogues ? config.dialogues.map((d) => d.id) : undefined),
    [config.dialogues],
  );

  return (
    <StructuredFlowRunner
      key={moduleId}
      moduleId={moduleId}
      backTo="/level/A1"
      theoryConfig={config.theoryConfig}
      studyTitle={config.studyTitle}
      studyItems={cardItemsForList}
      studyGroupedSections={config.studyGroupedSections}
      studyExtraRequiredIds={dialogueIds}
      drillItems={config.drillItems}
      studyBottomSlot={
        config.dialogues
          ? (ctx) => (
              <DialogueExplorerSection
                dialogues={config.dialogues!}
                studiedSet={ctx.studiedSet}
                onMarkStudied={ctx.markItemStudied}
              />
            )
          : undefined
      }
    />
  );
}
