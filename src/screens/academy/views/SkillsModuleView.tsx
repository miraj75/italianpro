import { useEffect, useState } from 'react';
import {
  ArrowLeft,
  Award,
  CheckCircle2,
  Eye,
  EyeOff,
  FileText,
  GraduationCap,
  Headphones,
  Loader2,
  Mic,
  PenTool,
  Play,
} from 'lucide-react';
import type { AcademyModuleMeta } from '../../../content/academy/types';
import type {
  ListeningExercise,
  ReadingPassage,
  SpeakingExercise,
  WritingExercise,
} from '../../../content/academyTypes';
import { loadLevelBundle, type LevelAcademyBundle } from '../../../content/registry';
import { speakItalian, startSpeechSession } from '../../../lib/speech';
import { resolveExamOptions, useI18n } from '../../../lib/i18n';
import { Button, GlassCard, cx } from '../../../components/ui';
import { SpeakButton } from '../../../components/SpeakButton';
import { AcademyExamRunner } from '../../../components/AcademyExamRunner';

type Tab = 'study' | 'exam';

interface SkillsModuleViewProps {
  meta: AcademyModuleMeta;
  levelId: 'A2' | 'B1' | 'B2';
  studiedSet: Set<string>;
  readyForExam: boolean;
  onMarkStudied: (itemId: string) => void;
  onNavigateModule: (route: string) => void;
}

export function SkillsModuleView({
  meta,
  levelId,
  studiedSet,
  readyForExam,
  onMarkStudied,
  onNavigateModule,
}: SkillsModuleViewProps) {
  const { lang, t, tr } = useI18n();
  const [tab, setTab] = useState<Tab>(meta.kind === 'final-exam' ? 'exam' : 'study');
  const [bundle, setBundle] = useState<LevelAcademyBundle | null>(null);
  const [loading, setLoading] = useState(meta.kind !== 'final-exam');

  // Sub-selection state
  const [selectedReading, setSelectedReading] = useState<ReadingPassage | null>(null);
  const [showTrans, setShowTrans] = useState(true);
  const [selectedListening, setSelectedListening] = useState<ListeningExercise | null>(null);
  const [showTranscript, setShowTranscript] = useState(true);
  const [listenAnswers, setListenAnswers] = useState<Record<string, number>>({});
  const [readAnswers, setReadAnswers] = useState<Record<string, number>>({});

  // Writing state
  const [drafts, setDrafts] = useState<Record<string, string>>({});
  const [showModels, setShowModels] = useState<Record<string, boolean>>({});
  const [wsSection, setWsSection] = useState<'writing' | 'speaking'>('writing');

  useEffect(() => {
    if (meta.kind === 'final-exam') {
      setLoading(false);
      return;
    }
    let mounted = true;
    setLoading(true);
    void loadLevelBundle(levelId)
      .then((b) => {
        if (mounted) {
          setBundle(b);
          setLoading(false);
        }
      })
      .catch(() => {
        if (mounted) setLoading(false);
      });
    return () => {
      mounted = false;
    };
  }, [levelId, meta.kind]);

  if (meta.kind === 'final-exam') {
    return (
      <div className="space-y-4">
        <GlassCard neon className="p-4 sm:p-5 space-y-2">
          <div className="flex items-center gap-2.5">
            <Award size={22} className="text-gold shrink-0" />
            <h2 className="bn text-lg font-extrabold text-white">
              {tr({ bn: meta.subtitle.bn, en: meta.title, it: meta.title })}
            </h2>
          </div>
          <p className="bn text-sm text-ink-2">{tr(meta.description)}</p>
        </GlassCard>

        <AcademyExamRunner
          moduleId={meta.id}
          level={levelId}
          onReviewContent={() => onNavigateModule(`/level/${levelId}`)}
          onNavigateModule={onNavigateModule}
        />
      </div>
    );
  }

  const kindIcon =
    meta.kind === 'reading'
      ? FileText
      : meta.kind === 'listening'
        ? Headphones
        : meta.kind === 'writing' || meta.kind === 'writing-speaking'
          ? PenTool
          : Mic;
  const KindIcon = kindIcon;

  return (
    <div className="space-y-3">
      <nav className="grid grid-cols-2 gap-0.5 border-b border-white/10" role="tablist">
        {(
          [
            {
              id: 'study',
              icon: KindIcon,
              label: { bn: 'অনুশীলন তালিকা', en: 'Study & Practice', it: 'Studio e pratica' },
            },
            {
              id: 'exam',
              icon: GraduationCap,
              label: {
                bn: `সেকশন পরীক্ষা (${meta.examQuestionCount})`,
                en: `Exam (${meta.examQuestionCount} Q)`,
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
                'flex min-h-9 items-center justify-center gap-1.5 border-b-2 px-1.5 py-1 text-[11px] sm:text-xs transition',
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

      {tab === 'exam' ? (
        <AcademyExamRunner
          moduleId={meta.id}
          level={levelId}
          onReviewContent={() => setTab('study')}
          onNavigateModule={onNavigateModule}
        />
      ) : loading || !bundle ? (
        <GlassCard className="p-8 text-center space-y-3">
          <Loader2 size={28} className="mx-auto animate-spin text-neon" />
          <p className="bn text-sm font-semibold text-ink-2">
            {tr({ bn: 'পাঠ লোড হচ্ছে...', en: 'Loading module content...', it: 'Caricamento dei contenuti...' })}
          </p>
        </GlassCard>
      ) : (
        <div className="space-y-3.5">
          {/* READING VIEW */}
          {meta.kind === 'reading' && (
            selectedReading ? (
              <div className="space-y-3.5">
                <GlassCard className="p-3.5 flex items-center justify-between gap-2">
                  <button
                    type="button"
                    onClick={() => setSelectedReading(null)}
                    className="inline-flex min-h-10 items-center gap-1.5 rounded-xl border border-white/15 bg-white/5 px-3 text-xs font-extrabold text-ink hover:border-neon/45"
                  >
                    <ArrowLeft size={15} />
                    <span className="bn">{tr({ bn: 'সব অনুচ্ছেদ', en: 'All Passages', it: 'Tutti i brani' })}</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowTrans((v) => !v)}
                    className="inline-flex min-h-10 items-center gap-1.5 rounded-xl border border-cyan/35 bg-cyan/10 px-3 text-xs font-extrabold text-cyan"
                  >
                    {showTrans ? <EyeOff size={14} /> : <Eye size={14} />}
                    <span className="bn">{showTrans ? t('hideTranslation') : t('showTranslation')}</span>
                  </button>
                </GlassCard>

                <GlassCard neon={studiedSet.has(selectedReading.id)} className="p-4 sm:p-5 space-y-4">
                  <div>
                    <p className="text-xs font-extrabold uppercase text-cyan">
                      {selectedReading.kind} · {selectedReading.readingMinutes} {t('minutes')}
                    </p>
                    <h2 className="mt-1 text-xl font-extrabold text-white">{selectedReading.titleIt}</h2>
                    <p className="bn text-sm font-bold text-mint">{tr(selectedReading.title)}</p>
                  </div>

                  <div className="space-y-3">
                    {selectedReading.paragraphs.map((p, idx) => (
                      <div key={idx} className="rounded-2xl border border-white/10 bg-white/4 p-3.5 flex items-start justify-between gap-3">
                        <div className="min-w-0 flex-1 space-y-1.5">
                          <p className="text-sm sm:text-base font-bold text-white leading-relaxed">{p.it}</p>
                          {showTrans && <p className="bn text-xs sm:text-sm text-ink-2 leading-relaxed">{tr(p.tr)}</p>}
                        </div>
                        <SpeakButton text={p.it} size={34} />
                      </div>
                    ))}
                  </div>

                  {selectedReading.questions.length > 0 && (
                    <div className="space-y-2.5 pt-2 border-t border-white/10">
                      <p className="bn text-xs font-extrabold uppercase text-gold">{t('comprehensionCheck')}</p>
                      {selectedReading.questions.map((q) => {
                        const pick = readAnswers[q.id];
                        const opts = resolveExamOptions(q, lang);
                        return (
                          <div key={q.id} className="rounded-2xl border border-white/10 bg-white/5 p-3.5 space-y-2">
                            <p className="bn text-sm font-bold text-white">{tr(q.prompt)}</p>
                            <div className="grid gap-1.5">
                              {opts.map((opt, idx) => (
                                <button
                                  key={idx}
                                  type="button"
                                  disabled={pick !== undefined}
                                  onClick={() => setReadAnswers((prev) => ({ ...prev, [q.id]: idx }))}
                                  className={cx(
                                    'glass min-h-10 rounded-xl px-3 py-1.5 text-left text-xs sm:text-sm font-bold transition',
                                    pick !== undefined && idx === q.answer && 'border-neon bg-neon/15 text-neon',
                                    pick !== undefined && pick === idx && idx !== q.answer && 'border-pink bg-pink/15 text-pink',
                                  )}
                                >
                                  <span className="bn">{opt}</span>
                                </button>
                              ))}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}

                  <Button
                    variant={studiedSet.has(selectedReading.id) ? 'ghost' : 'primary'}
                    className="w-full"
                    onClick={() => onMarkStudied(selectedReading.id)}
                  >
                    <CheckCircle2 size={17} />
                    <span className="bn">
                      {studiedSet.has(selectedReading.id) ? t('academyStudiedBadge') : t('academyMarkStudied')}
                    </span>
                  </Button>
                </GlassCard>
              </div>
            ) : (
              <div className="space-y-2.5">
                {bundle.reading.map((passage) => {
                  const studied = studiedSet.has(passage.id);
                  const isCore = meta.requiredItemIds.includes(passage.id);
                  return (
                    <button
                      key={passage.id}
                      type="button"
                      onClick={() => setSelectedReading(passage)}
                      className="block w-full text-left"
                    >
                      <GlassCard neon={studied} className="p-4 flex items-center justify-between gap-3 hover:border-neon/50 transition">
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center gap-2 text-[11px] font-extrabold uppercase">
                            <span className="text-cyan">{passage.kind}</span>
                            {isCore && (
                              <>
                                <span className="text-ink-3" aria-hidden="true">·</span>
                                <span className="text-gold">{tr({ bn: 'মূল', en: 'Core', it: 'Base' })}</span>
                              </>
                            )}
                          </div>
                          <p className="mt-0.5 text-base font-extrabold text-white truncate">{passage.titleIt}</p>
                          <p className="bn text-xs font-semibold text-ink-2 truncate">{tr(passage.title)}</p>
                        </div>
                        {studied && <CheckCircle2 size={20} className="shrink-0 text-neon" />}
                      </GlassCard>
                    </button>
                  );
                })}
              </div>
            )
          )}

          {/* LISTENING VIEW */}
          {meta.kind === 'listening' && (
            selectedListening ? (
              <div className="space-y-3.5">
                <GlassCard className="p-3.5 flex items-center justify-between gap-2">
                  <button
                    type="button"
                    onClick={() => setSelectedListening(null)}
                    className="inline-flex min-h-10 items-center gap-1.5 rounded-xl border border-white/15 bg-white/5 px-3 text-xs font-extrabold text-ink hover:border-neon/45"
                  >
                    <ArrowLeft size={15} />
                    <span className="bn">{tr({ bn: 'সব অডিও', en: 'All Audio', it: 'Tutti gli audio' })}</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowTranscript((v) => !v)}
                    className="inline-flex min-h-10 items-center gap-1.5 rounded-xl border border-cyan/35 bg-cyan/10 px-3 text-xs font-extrabold text-cyan"
                  >
                    {showTranscript ? <EyeOff size={14} /> : <Eye size={14} />}
                    <span className="bn">{showTranscript ? t('hideTranscript') : t('showTranscript')}</span>
                  </button>
                </GlassCard>

                <GlassCard neon={studiedSet.has(selectedListening.id)} className="p-4 sm:p-5 space-y-4">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-xs font-extrabold uppercase text-cyan">{selectedListening.kind}</p>
                      <h2 className="mt-0.5 text-xl font-extrabold text-white">{selectedListening.titleIt}</h2>
                      <p className="bn text-sm font-bold text-mint">{tr(selectedListening.title)}</p>
                    </div>
                    <Button
                      className="min-h-11 px-4 text-xs"
                      onClick={() => {
                        const text = selectedListening.lines.map((l) => l.it).join('. ');
                        void speakItalian(text, 0.88, startSpeechSession()).catch(() => {});
                      }}
                    >
                      <Play size={15} fill="currentColor" />{' '}
                      <span className="bn">{tr({ bn: 'সব শুনুন', en: 'Play All', it: 'Riproduci tutto' })}</span>
                    </Button>
                  </div>

                  {showTranscript && (
                    <div className="space-y-2.5">
                      {selectedListening.lines.map((line, i) => (
                        <div key={i} className="rounded-2xl border border-white/10 bg-white/4 p-3 flex items-start justify-between gap-3">
                          <div className="min-w-0 flex-1">
                            <p className="text-[11px] font-extrabold text-cyan">{line.speaker}</p>
                            <p className="text-sm font-bold text-white">{line.it}</p>
                            <p className="bn mt-0.5 text-xs text-ink-2">{tr(line.tr)}</p>
                          </div>
                          <SpeakButton text={line.it} size={32} />
                        </div>
                      ))}
                    </div>
                  )}

                  {selectedListening.questions.length > 0 && (
                    <div className="space-y-2.5 pt-2 border-t border-white/10">
                      <p className="bn text-xs font-extrabold uppercase text-gold">
                        {tr({ bn: 'শ্রবণ প্রশ্নাবলি', en: 'Listening Questions', it: 'Domande di ascolto' })}
                      </p>
                      {selectedListening.questions.map((q) => {
                        const pick = listenAnswers[q.id];
                        const opts = resolveExamOptions(q, lang);
                        return (
                          <div key={q.id} className="rounded-2xl border border-white/10 bg-white/5 p-3.5 space-y-2">
                            <p className="bn text-sm font-bold text-white">{tr(q.prompt)}</p>
                            <div className="grid gap-1.5">
                              {opts.map((opt, idx) => (
                                <button
                                  key={idx}
                                  type="button"
                                  disabled={pick !== undefined}
                                  onClick={() => setListenAnswers((prev) => ({ ...prev, [q.id]: idx }))}
                                  className={cx(
                                    'glass min-h-10 rounded-xl px-3 py-1.5 text-left text-xs sm:text-sm font-bold transition',
                                    pick !== undefined && idx === q.answer && 'border-neon bg-neon/15 text-neon',
                                    pick !== undefined && pick === idx && idx !== q.answer && 'border-pink bg-pink/15 text-pink',
                                  )}
                                >
                                  <span className="bn">{opt}</span>
                                </button>
                              ))}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}

                  <Button
                    variant={studiedSet.has(selectedListening.id) ? 'ghost' : 'primary'}
                    className="w-full"
                    onClick={() => onMarkStudied(selectedListening.id)}
                  >
                    <CheckCircle2 size={17} />
                    <span className="bn">
                      {studiedSet.has(selectedListening.id) ? t('academyStudiedBadge') : t('academyMarkStudied')}
                    </span>
                  </Button>
                </GlassCard>
              </div>
            ) : (
              <div className="space-y-2.5">
                {bundle.listening.map((ex) => {
                  const studied = studiedSet.has(ex.id);
                  const isCore = meta.requiredItemIds.includes(ex.id);
                  return (
                    <button
                      key={ex.id}
                      type="button"
                      onClick={() => setSelectedListening(ex)}
                      className="block w-full text-left"
                    >
                      <GlassCard neon={studied} className="p-4 flex items-center justify-between gap-3 hover:border-neon/50 transition">
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center gap-2 text-[11px] font-extrabold uppercase">
                            <span className="text-cyan">{ex.kind}</span>
                            {isCore && (
                              <>
                                <span className="text-ink-3" aria-hidden="true">·</span>
                                <span className="text-gold">{tr({ bn: 'মূল', en: 'Core', it: 'Base' })}</span>
                              </>
                            )}
                          </div>
                          <p className="mt-0.5 text-base font-extrabold text-white truncate">{ex.titleIt}</p>
                          <p className="bn text-xs font-semibold text-ink-2 truncate">{tr(ex.title)}</p>
                        </div>
                        {studied && <CheckCircle2 size={20} className="shrink-0 text-neon" />}
                      </GlassCard>
                    </button>
                  );
                })}
              </div>
            )
          )}

          {/* COMBINED WRITING & SPEAKING SPLIT HEADER */}
          {meta.kind === 'writing-speaking' && (
            <div className="grid grid-cols-2 gap-1.5 rounded-2xl border border-white/10 bg-white/4 p-1">
              <button
                type="button"
                onClick={() => setWsSection('writing')}
                className={cx(
                  'flex min-h-11 items-center justify-center gap-1.5 rounded-xl px-3 text-xs sm:text-sm font-extrabold tabular-nums transition',
                  wsSection === 'writing'
                    ? 'bg-neon text-bg shadow-[0_0_16px_-6px_rgba(0,245,160,0.65)]'
                    : 'text-ink-2 hover:text-white',
                )}
              >
                <PenTool size={14} className="shrink-0" />
                <span className="bn">
                  {tr({
                    bn: `লেখা (${bundle.writing.filter((w) => studiedSet.has(w.id)).length}/${bundle.writing.length})`,
                    en: `Writing (${bundle.writing.filter((w) => studiedSet.has(w.id)).length}/${bundle.writing.length})`,
                    it: `Scrittura (${bundle.writing.filter((w) => studiedSet.has(w.id)).length}/${bundle.writing.length})`,
                  })}
                </span>
              </button>
              <button
                type="button"
                onClick={() => setWsSection('speaking')}
                className={cx(
                  'flex min-h-11 items-center justify-center gap-1.5 rounded-xl px-3 text-xs sm:text-sm font-extrabold tabular-nums transition',
                  wsSection === 'speaking'
                    ? 'bg-neon text-bg shadow-[0_0_16px_-6px_rgba(0,245,160,0.65)]'
                    : 'text-ink-2 hover:text-white',
                )}
              >
                <Mic size={14} className="shrink-0" />
                <span className="bn">
                  {tr({
                    bn: `বলা (${bundle.speaking.filter((s) => studiedSet.has(s.id)).length}/${bundle.speaking.length})`,
                    en: `Speaking (${bundle.speaking.filter((s) => studiedSet.has(s.id)).length}/${bundle.speaking.length})`,
                    it: `Parlato (${bundle.speaking.filter((s) => studiedSet.has(s.id)).length}/${bundle.speaking.length})`,
                  })}
                </span>
              </button>
            </div>
          )}

          {/* WRITING VIEW */}
          {(meta.kind === 'writing' || (meta.kind === 'writing-speaking' && wsSection === 'writing')) && (
            <div className="space-y-4">
              {bundle.writing.map((wr: WritingExercise) => {
                const studied = studiedSet.has(wr.id);
                const draft = drafts[wr.id] ?? '';
                const wordsCount = draft.trim() ? draft.trim().split(/\s+/).length : 0;
                const modelVisible = Boolean(showModels[wr.id]);

                return (
                  <GlassCard key={wr.id} neon={studied} className="p-4 sm:p-5 space-y-3.5">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <p className="bn text-xs font-extrabold uppercase text-cyan">{tr(wr.category)}</p>
                        <h3 className="bn text-lg font-extrabold text-white">{tr(wr.title)}</h3>
                      </div>
                      {studied && <CheckCircle2 size={20} className="shrink-0 text-neon" />}
                    </div>

                    <p className="bn text-sm text-ink leading-relaxed">{tr(wr.prompt)}</p>

                    <div className="flex flex-wrap gap-1.5">
                      {wr.requiredKeywords.map((kw) => {
                        const hit = draft.toLowerCase().includes(kw.toLowerCase());
                        return (
                          <span
                            key={kw}
                            className={cx(
                              'rounded-lg border px-2.5 py-0.5 text-xs font-extrabold',
                              hit ? 'border-neon/50 bg-neon/15 text-neon' : 'border-white/15 bg-white/5 text-ink-2',
                            )}
                          >
                            {kw}
                          </span>
                        );
                      })}
                    </div>

                    <textarea
                      rows={4}
                      value={draft}
                      onChange={(e) => setDrafts((prev) => ({ ...prev, [wr.id]: e.target.value }))}
                      placeholder={tr({
                        bn: 'এখানে ইতালিয়ান অনুচ্ছেদটি লিখুন...',
                        en: 'Write your Italian response here...',
                        it: 'Scrivi qui la tua risposta in italiano...',
                      })}
                      className="w-full rounded-2xl border border-neon/25 bg-[#041d19]/90 p-3 text-sm font-medium text-white placeholder:text-ink-3 focus:border-neon focus:outline-none"
                    />
                    <div className="flex items-center justify-between text-xs font-bold text-ink-2 tabular-nums">
                      <span className="bn">
                        {tr({ bn: 'শব্দ:', en: 'Words:', it: 'Parole:' })} {wordsCount} / {wr.minWords}+
                      </span>
                      <button
                        type="button"
                        onClick={() => setShowModels((prev) => ({ ...prev, [wr.id]: !prev[wr.id] }))}
                        className="bn text-cyan hover:underline"
                      >
                        {modelVisible ? t('hideModelAnswer') : t('showModelAnswer')}
                      </button>
                    </div>

                    {modelVisible && (
                      <div className="rounded-2xl border border-neon/25 bg-neon/6 p-3.5 space-y-2">
                        <div className="flex items-start justify-between gap-2">
                          <p className="text-sm font-bold text-white leading-relaxed">{wr.modelResponse.it}</p>
                          <SpeakButton text={wr.modelResponse.it} size={34} />
                        </div>
                        <p className="bn text-xs text-ink-2 leading-relaxed">{tr(wr.modelResponse.tr)}</p>
                      </div>
                    )}

                    <Button
                      variant={studied ? 'ghost' : 'primary'}
                      className="w-full min-h-11 text-sm"
                      onClick={() => onMarkStudied(wr.id)}
                    >
                      <CheckCircle2 size={17} />
                      <span className="bn">{studied ? t('academyStudiedBadge') : t('academyMarkStudied')}</span>
                    </Button>
                  </GlassCard>
                );
              })}
            </div>
          )}

          {/* SPEAKING VIEW */}
          {(meta.kind === 'speaking' || (meta.kind === 'writing-speaking' && wsSection === 'speaking')) && (
            <div className="space-y-4">
              {bundle.speaking.map((sp: SpeakingExercise) => {
                const studied = studiedSet.has(sp.id);
                return (
                  <GlassCard key={sp.id} neon={studied} className="p-4 sm:p-5 space-y-3">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <p className="text-xs font-extrabold uppercase text-cyan">{sp.kind}</p>
                        <h3 className="bn text-lg font-extrabold text-white">{tr(sp.title)}</h3>
                      </div>
                      {studied && <CheckCircle2 size={20} className="shrink-0 text-neon" />}
                    </div>

                    <p className="bn text-sm text-ink-2 leading-relaxed">{tr(sp.prompt)}</p>

                    <div className="rounded-2xl border border-white/10 bg-white/5 p-3.5 flex items-start justify-between gap-3">
                      <div className="min-w-0 flex-1 space-y-1">
                        <p className="text-base font-extrabold text-white leading-snug">{sp.targetIt}</p>
                        <p className="bn text-xs font-semibold text-mint">{tr(sp.targetTr)}</p>
                        <p className="text-[11px] font-semibold text-ink-3">/{sp.pronunciationHint}/</p>
                      </div>
                      <SpeakButton text={sp.targetIt} size={40} onSpeak={() => onMarkStudied(sp.id)} />
                    </div>

                    {sp.followUps && sp.followUps.length > 0 && (
                      <div className="space-y-1.5">
                        {sp.followUps.map((fu, i) => (
                          <div key={i} className="flex items-center justify-between gap-2 rounded-xl border border-white/10 bg-white/4 px-3 py-2 text-xs">
                            <div className="min-w-0 flex-1">
                              <p className="font-bold text-ink">{fu.it}</p>
                              <p className="bn text-ink-3">{tr(fu.tr)}</p>
                            </div>
                            <SpeakButton text={fu.it} size={28} />
                          </div>
                        ))}
                      </div>
                    )}

                    <Button
                      variant={studied ? 'ghost' : 'primary'}
                      className="w-full min-h-11 text-sm"
                      onClick={() => onMarkStudied(sp.id)}
                    >
                      <CheckCircle2 size={17} />
                      <span className="bn">{studied ? t('academyStudiedBadge') : t('academyMarkStudied')}</span>
                    </Button>
                  </GlassCard>
                );
              })}
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
    </div>
  );
}
