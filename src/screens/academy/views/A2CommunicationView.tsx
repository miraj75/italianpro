import { useEffect, useMemo, useState } from 'react';
import {
  CheckCircle2,
  Compass,
  GraduationCap,
  MessageSquare,
  Play,
  Sparkles,
} from 'lucide-react';
import type { AcademyModuleMeta } from '../../../content/academy/types';
import {
  A2_COMMUNICATION_MODULES_DATA,
  type A2CommunicationModuleId,
} from '../../../content/a2/communicationModules';
import { generateAcademyModuleExam, shuffleArray } from '../../../lib/examEngine';
import { resolveExamOptions, useI18n } from '../../../lib/i18n';
import { loadModulePosition, saveModulePosition } from '../../../lib/modulePosition';
import { speakItalian, startSpeechSession } from '../../../lib/speech';
import { Button, GlassCard, cx } from '../../../components/ui';
import { SpeakButton } from '../../../components/SpeakButton';
import { AcademyExamRunner } from '../../../components/AcademyExamRunner';

type Tab = 'study' | 'practice' | 'exam';
type StudySubTab = 'expressions' | 'dialogues' | 'frames';

interface A2CommunicationViewProps {
  meta: AcademyModuleMeta;
  studiedSet: Set<string>;
  readyForExam: boolean;
  previewMode?: boolean;
  onMarkStudied: (itemId: string) => void;
  onNavigateModule: (route: string) => void;
}

export function A2CommunicationView({
  meta,
  studiedSet,
  readyForExam,
  previewMode = false,
  onMarkStudied,
  onNavigateModule,
}: A2CommunicationViewProps) {
  const { lang, t, tr } = useI18n();
  const [tab, setTab] = useState<Tab>(() => {
    const saved = loadModulePosition('A2', meta.id)?.tab;
    return saved === 'study' || saved === 'practice' || saved === 'exam' ? saved : 'study';
  });

  useEffect(() => {
    if (previewMode) return;
    saveModulePosition('A2', meta.id, { tab });
  }, [meta.id, tab, previewMode]);

  const [subTab, setSubTab] = useState<StudySubTab>('expressions');
  const [dialogueAnswers, setDialogueAnswers] = useState<Record<string, number>>({});
  const [practiceRound, setPracticeRound] = useState(1);
  const [practiceIdx, setPracticeIdx] = useState(0);
  const [practicePick, setPracticePick] = useState<number | null>(null);

  const modData = A2_COMMUNICATION_MODULES_DATA[meta.id as A2CommunicationModuleId];

  const practicePool = useMemo(() => {
    const qs = generateAcademyModuleExam(meta.id, Math.random, 'A2');
    return shuffleArray(qs);
  }, [meta.id, practiceRound]);

  const currentQ = practicePool[practiceIdx % Math.max(1, practicePool.length)];
  const practiceOpts = currentQ ? resolveExamOptions(currentQ, lang) : [];

  const exprStudied = modData.expressions.filter((e) => studiedSet.has(e.id)).length;
  const dlgStudied = modData.dialogues.filter((d) => studiedSet.has(d.id)).length;

  return (
    <div className="space-y-3">
      <nav className="grid grid-cols-3 gap-0.5 border-b border-white/10" role="tablist">
        {(
          [
            {
              id: 'study',
              icon: MessageSquare,
              label: {
                bn: `পাঠ (${modData.expressions.length + modData.dialogues.length})`,
                en: `Study (${modData.expressions.length + modData.dialogues.length})`,
                it: `Studio (${modData.expressions.length + modData.dialogues.length})`,
              },
            },
            { id: 'practice', icon: Sparkles, label: { bn: 'অনুশীলন', en: 'Practice', it: 'Pratica' } },
            {
              id: 'exam',
              icon: GraduationCap,
              label: {
                bn: `পরীক্ষা (${meta.examQuestionCount})`,
                en: `Exam (${meta.examQuestionCount})`,
                it: `Esame (${meta.examQuestionCount})`,
              },
            },
          ] as const
        ).map((item) => {
          const active = tab === item.id;
          return (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => setTab(item.id)}
              className={cx(
                'flex min-h-10 items-center justify-center gap-1 border-b-2 px-1.5 py-1 text-[11px] sm:text-xs transition',
                active
                  ? 'border-neon text-white font-extrabold'
                  : 'border-transparent text-ink-2 hover:text-white font-semibold',
              )}
            >
              <item.icon size={13} className="shrink-0" />
              <span className="bn truncate">{tr(item.label)}</span>
            </button>
          );
        })}
      </nav>

      {tab === 'study' && (
        <div className="space-y-4">
          {/* Sub-section switcher */}
          <div className="grid grid-cols-3 gap-1.5 rounded-2xl border border-white/10 bg-white/4 p-1">
            {(
              [
                {
                  id: 'expressions',
                  label: {
                    bn: `বাক্যাংশ (${exprStudied}/${modData.expressions.length})`,
                    en: `Phrases (${exprStudied}/${modData.expressions.length})`,
                    it: `Frasi (${exprStudied}/${modData.expressions.length})`,
                  },
                },
                {
                  id: 'dialogues',
                  label: {
                    bn: `সংলাপ (${dlgStudied}/${modData.dialogues.length})`,
                    en: `Dialogues (${dlgStudied}/${modData.dialogues.length})`,
                    it: `Dialoghi (${dlgStudied}/${modData.dialogues.length})`,
                  },
                },
                {
                  id: 'frames',
                  label: {
                    bn: 'গাইড',
                    en: 'Key Patterns',
                    it: 'Modelli',
                  },
                },
              ] as const
            ).map((s) => (
              <button
                key={s.id}
                type="button"
                onClick={() => setSubTab(s.id)}
                className={cx(
                  'min-h-10 rounded-xl px-2 py-1.5 text-[11px] sm:text-xs font-extrabold tabular-nums transition',
                  subTab === s.id
                    ? 'bg-neon text-bg shadow-[0_0_16px_-6px_rgba(0,245,160,0.65)]'
                    : 'text-ink-2 hover:text-white',
                )}
              >
                <span className="bn block truncate">{tr(s.label)}</span>
              </button>
            ))}
          </div>

          {subTab === 'expressions' && (
            <div className="space-y-3">
              {modData.expressions.map((exp, idx) => {
                const studied = studiedSet.has(exp.id);
                return (
                  <GlassCard key={exp.id} neon={studied} className="p-4 sm:p-5 space-y-3">
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0 flex-1">
                        <p className="text-[11px] font-extrabold uppercase tracking-wide text-cyan tabular-nums">
                          #{idx + 1}{lang === 'bn' ? ` · ${exp.phoneticBn}` : ''}
                        </p>
                        <h3 className="mt-0.5 text-lg font-extrabold text-white leading-snug">{exp.it}</h3>
                        <p className="bn text-sm font-bold text-mint mt-0.5">{tr(exp.meaning)}</p>
                      </div>
                      <SpeakButton
                        text={exp.it}
                        size={40}
                        onSpeak={() => onMarkStudied(exp.id)}
                      />
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/4 p-3 flex items-center justify-between gap-3">
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-bold text-white leading-snug">{exp.exampleIt}</p>
                        <p className="bn text-xs text-ink-2 mt-0.5">{tr(exp.exampleTr)}</p>
                      </div>
                      <SpeakButton
                        text={exp.exampleIt}
                        size={34}
                        onSpeak={() => onMarkStudied(exp.id)}
                      />
                    </div>

                    <div className="flex justify-end">
                      <Button
                        variant={studied ? 'ghost' : 'primary'}
                        className="min-h-11 px-4 text-xs sm:text-sm"
                        onClick={() => onMarkStudied(exp.id)}
                      >
                        <CheckCircle2 size={16} />
                        <span className="bn">{studied ? t('academyStudiedBadge') : t('academyMarkStudied')}</span>
                      </Button>
                    </div>
                  </GlassCard>
                );
              })}

              <Button
                variant="secondary"
                className="w-full min-h-11"
                onClick={() => setSubTab('dialogues')}
              >
                <MessageSquare size={16} />
                <span className="bn">
                  {tr({
                    bn: `বাস্তব সংলাপগুলোতে যান (${modData.dialogues.length})`,
                    en: `Open Real-Life Dialogues (${modData.dialogues.length})`,
                    it: `Vai ai dialoghi (${modData.dialogues.length})`,
                  })}
                </span>
              </Button>
            </div>
          )}

          {subTab === 'dialogues' && (
            <div className="space-y-4">
              {modData.dialogues.map((dlg, idx) => {
                const studied = studiedSet.has(dlg.id);
                const pick = dialogueAnswers[dlg.id];
                return (
                  <GlassCard key={dlg.id} neon={studied} className="p-4 sm:p-5 space-y-3.5">
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0 flex-1">
                        <p className="text-[11px] font-extrabold uppercase tracking-wide text-cyan tabular-nums">
                          #{idx + 1} · {tr(dlg.setting)}
                        </p>
                        <h3 className="bn text-base sm:text-lg font-extrabold text-white mt-0.5">{tr(dlg.title)}</h3>
                      </div>
                      <Button
                        variant="secondary"
                        className="min-h-10 px-3 text-xs shrink-0"
                        onClick={() => {
                          onMarkStudied(dlg.id);
                          const all = dlg.lines.map((l) => l.it).join('. ');
                          void speakItalian(all, 0.88, startSpeechSession()).catch(() => {});
                        }}
                      >
                        <Play size={14} fill="currentColor" />
                        <span className="bn">{tr({ bn: 'সব শুনুন', en: 'Play All', it: 'Ascolta' })}</span>
                      </Button>
                    </div>

                    <div className="space-y-2">
                      {dlg.lines.map((line, lineIdx) => (
                        <div
                          key={lineIdx}
                          className="rounded-2xl border border-white/10 bg-white/4 p-3 flex items-start justify-between gap-3"
                        >
                          <div className="min-w-0 flex-1">
                            <p className="text-[11px] font-extrabold uppercase text-mint">{line.speaker}</p>
                            <p className="text-sm font-bold text-white leading-snug mt-0.5">{line.it}</p>
                            <p className="bn text-xs text-ink-2 mt-0.5 leading-relaxed">{tr(line.tr)}</p>
                          </div>
                          <SpeakButton
                            text={line.it}
                            size={34}
                            onSpeak={() => onMarkStudied(dlg.id)}
                          />
                        </div>
                      ))}
                    </div>

                    <div className="rounded-2xl border border-gold/25 bg-gold/6 p-3.5 space-y-2.5">
                      <p className="bn text-xs font-extrabold uppercase text-gold">
                        {t('comprehensionCheck')}: {tr(dlg.checkQuestion)}
                      </p>
                      <div className="grid gap-1.5">
                        {dlg.checkOptions.map((opt, optIdx) => {
                          const answered = pick !== undefined;
                          const isRight = optIdx === dlg.checkAnswer;
                          const isPicked = pick === optIdx;
                          return (
                            <button
                              key={optIdx}
                              type="button"
                              disabled={answered}
                              onClick={() => {
                                setDialogueAnswers((prev) => ({ ...prev, [dlg.id]: optIdx }));
                                onMarkStudied(dlg.id);
                              }}
                              className={cx(
                                'glass min-h-10 rounded-xl px-3 py-1.5 text-left text-xs sm:text-sm font-bold transition',
                                answered && isRight && 'border-neon bg-neon/15 text-neon',
                                answered && isPicked && !isRight && 'border-pink bg-pink/15 text-pink',
                              )}
                            >
                              <span className="bn">{tr(opt)}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <div className="flex justify-end">
                      <Button
                        variant={studied ? 'ghost' : 'primary'}
                        className="min-h-11 px-4 text-xs sm:text-sm"
                        onClick={() => onMarkStudied(dlg.id)}
                      >
                        <CheckCircle2 size={16} />
                        <span className="bn">{studied ? t('academyStudiedBadge') : t('academyMarkStudied')}</span>
                      </Button>
                    </div>
                  </GlassCard>
                );
              })}
            </div>
          )}

          {subTab === 'frames' && (
            <div className="space-y-3.5">
              {modData.functionalFrames.map((frame) => (
                <GlassCard key={frame.id} className="p-4 sm:p-5 space-y-3">
                  <div className="flex items-center gap-2">
                    <Compass size={17} className="text-cyan shrink-0" />
                    <h3 className="bn text-base font-extrabold text-white">{tr(frame.situation)}</h3>
                  </div>
                  <div className="space-y-2">
                    {frame.phrases.map((ph, i) => (
                      <div
                        key={i}
                        className="rounded-2xl border border-white/10 bg-white/4 p-3 flex items-center justify-between gap-3"
                      >
                        <div className="min-w-0 flex-1">
                          <p className="text-sm font-bold text-white leading-snug">{ph.it}</p>
                          <p className="bn text-xs text-ink-2 mt-0.5">{tr(ph.tr)}</p>
                        </div>
                        <SpeakButton text={ph.it} size={36} />
                      </div>
                    ))}
                  </div>
                </GlassCard>
              ))}
            </div>
          )}

          {readyForExam && (
            <Button className="w-full" onClick={() => setTab('exam')}>
              <GraduationCap size={18} />
              <span className="bn">
                {t('takeAssessment')} · {meta.examQuestionCount} {tr({ bn: 'প্রশ্ন', en: 'Questions', it: 'domande' })}
              </span>
            </Button>
          )}
        </div>
      )}

      {tab === 'practice' && currentQ && (
        <GlassCard neon className="p-5 space-y-4">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-xs font-bold uppercase tracking-wide text-cyan">
                {tr({ bn: 'পরিস্থিতিভিত্তিক অনুশীলন', en: 'Situational Practice', it: 'Pratica situazionale' })}
              </p>
              <h2 className="bn mt-1 text-base font-bold text-ink-2">{tr(currentQ.prompt)}</h2>
              {currentQ.it && <p className="mt-1.5 text-lg sm:text-xl font-extrabold text-white">{currentQ.it}</p>}
            </div>
            {(currentQ.audioIt ?? currentQ.it) && (
              <SpeakButton text={(currentQ.audioIt ?? currentQ.it)!} size={42} />
            )}
          </div>

          <div className="grid gap-2.5">
            {practiceOpts.map((opt, idx) => {
              const picked = practicePick === idx;
              const right = idx === currentQ.answer;
              return (
                <button
                  key={`${currentQ.id}-${opt}-${idx}`}
                  type="button"
                  disabled={practicePick !== null}
                  onClick={() => setPracticePick(idx)}
                  className={cx(
                    'glass min-h-12 rounded-2xl px-4 py-2.5 text-left text-sm sm:text-base font-bold text-white transition',
                    practicePick !== null && right && 'border-neon bg-neon/15',
                    practicePick !== null && picked && !right && 'border-pink bg-pink/15',
                  )}
                >
                  <span className="bn">{opt}</span>
                </button>
              );
            })}
          </div>

          {practicePick !== null && (
            <div className="space-y-3">
              <div
                className={cx(
                  'rounded-2xl border p-3.5',
                  practicePick === currentQ.answer ? 'border-neon/40 bg-neon/10' : 'border-pink/40 bg-pink/10',
                )}
              >
                <p className="font-extrabold text-white">
                  {practicePick === currentQ.answer
                    ? t('correct')
                    : `${t('correctAnswer')}: ${practiceOpts[currentQ.answer] ?? ''}`}
                </p>
                <p className="bn mt-1 text-xs sm:text-sm text-ink-2">{tr(currentQ.explanation)}</p>
              </div>
              <Button
                className="w-full"
                onClick={() => {
                  setPracticePick(null);
                  if (practiceIdx + 1 >= practicePool.length) {
                    setPracticeIdx(0);
                    setPracticeRound((r) => r + 1);
                  } else {
                    setPracticeIdx((i) => i + 1);
                  }
                }}
              >
                {t('next')}
              </Button>
            </div>
          )}
        </GlassCard>
      )}

      {tab === 'exam' && (
        <AcademyExamRunner
          moduleId={meta.id}
          level="A2"
          onReviewContent={() => setTab('study')}
          onNavigateModule={onNavigateModule}
        />
      )}
    </div>
  );
}
