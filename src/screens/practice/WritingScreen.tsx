import { useEffect, useState } from 'react';
import { BookOpen, CheckCircle2, ChevronRight, FilePenLine, XCircle } from 'lucide-react';
import type { WritingExercise } from '../../content/academyTypes';
import type { BankLevel } from '../../content/bank';
import { loadLevelWriting } from '../../content/registry';
import { grammarById } from '../../content/grammar';
import { useRouter } from '../../app/router';
import { useI18n } from '../../lib/i18n';
import { dayKey } from '../../lib/date';
import { useProgress, useStudyTimer } from '../../state/ProgressContext';
import { Button, GlassCard, cx } from '../../components/ui';
import { SpeakButton } from '../../components/SpeakButton';
import { SubHeader } from '../../components/SubHeader';
import { LevelTabs, isBankLevel } from '../../components/LevelTabs';

export interface WritingReport {
  words: number;
  minOk: boolean;
  punctuationOk: boolean;
  matchedKeywords: string[];
  missingKeywords: string[];
  passed: boolean;
}

const IRREGULAR_VERB_STEMS: Record<string, string[]> = {
  uscire: ['usc', 'esc'],
  spegnere: ['spegn', 'spen', 'spent'],
  risolvere: ['risolv', 'risolt'],
  andare: ['and', 'vad'],
  venire: ['ven', 'vien', 'venut'],
  fare: ['facc', 'fatt', 'far', 'fanno'],
  dire: ['dic', 'dett', 'dir'],
  essere: ['esser', 'son', 'sia', 'stat', 'erav', 'eran'],
  avere: ['aver', 'abb', 'avut', 'hann'],
  potere: ['pot', 'poss', 'può', 'puo'],
  dovere: ['dov', 'dev', 'debb'],
  volere: ['vol', 'vogl', 'vuol'],
  scegliere: ['scegl', 'scelt'],
  accogliere: ['accogl', 'accolt'],
  promuovere: ['promuov', 'promoss'],
  ridurre: ['riduc', 'ridott', 'ridurr'],
  produrre: ['produc', 'prodott', 'produrr'],
  proporre: ['propon', 'propost', 'proporr'],
  trarre: ['tra', 'tratt', 'trarr'],
  tenere: ['ten', 'tien', 'terr'],
  rimanere: ['riman', 'rimast', 'rimarr'],
  salire: ['sal', 'salg'],
};

function normalizeIt(input: string): string {
  return input
    .toLowerCase()
    .replace(/[’‘`]/g, "'")
    .trim();
}

function tokenizeWords(text: string): string[] {
  return normalizeIt(text)
    .split(/[^a-zàèéìòóù']+/i)
    .map((w) => w.replace(/^'+|'+$/g, ''))
    .filter(Boolean);
}

function singleWordMatchesToken(token: string, target: string): boolean {
  if (token === target) return true;
  // Handle apostrophe elision on token (e.g., l'ambiente, d'animo, un'associazione)
  const strippedToken = token.includes("'") ? token.split("'").pop()! : token;
  if (strippedToken === target) return true;

  // Reflexive / pronominal verbs ending in -arsela / -ersela / -irsela (e.g., cavarsela -> cavata/cavato/cavo/caverà)
  const selaMatch = /^(.*)(?:arsela|ersela|irsela)$/.exec(target);
  if (selaMatch && selaMatch[1]!.length >= 2) {
    const stem = selaMatch[1]!;
    if (strippedToken.startsWith(stem) && strippedToken.length <= stem.length + 10) {
      return true;
    }
  }

  // Reflexive verbs ending in -arsi / -ersi / -irsi
  const reflMatch = /^(.*)(?:arsi|ersi|irsi)$/.exec(target);
  if (reflMatch && reflMatch[1]!.length >= 3) {
    const stem = reflMatch[1]!;
    if (strippedToken.startsWith(stem) && strippedToken.length <= stem.length + 9) {
      return true;
    }
  }

  // Irregular verb stems
  const irregStems = IRREGULAR_VERB_STEMS[target];
  if (irregStems) {
    for (const st of irregStems) {
      if (strippedToken === st || (strippedToken.startsWith(st) && strippedToken.length <= st.length + 7)) {
        return true;
      }
    }
  }

  // Regular verb infinitives (-are, -ere, -ire) including enclitic pronouns (rinnovarlo, festeggiarlo)
  const infMatch = /^(.*)(?:are|ere|ire)$/.exec(target);
  if (infMatch && infMatch[1]!.length >= 3) {
    const rawStem = infMatch[1]!;
    const infinitiveTrunc = target.slice(0, -1); // e.g., rinnovar, festeggiar, spegner
    if (strippedToken.startsWith(infinitiveTrunc) && strippedToken.length <= infinitiveTrunc.length + 4) {
      return true;
    }
    // Stem variations for -care/-gare/-ciare/-giare
    const stems = [rawStem];
    if (rawStem.endsWith('c') || rawStem.endsWith('g')) stems.push(`${rawStem}h`);
    if (rawStem.endsWith('ci') || rawStem.endsWith('gi')) stems.push(rawStem.slice(0, -1));
    const verbEndings = new Set([
      'o', 'i', 'a', 'e', 'iamo', 'ate', 'ete', 'ite', 'ano', 'ono',
      'avo', 'avi', 'ava', 'avamo', 'avate', 'avano',
      'evo', 'evi', 'eva', 'evamo', 'evate', 'evano',
      'ivo', 'ivi', 'iva', 'ivamo', 'ivate', 'ivano',
      'ato', 'ata', 'ati', 'ate', 'uto', 'uta', 'uti', 'ute', 'ito', 'ita', 'iti', 'ite',
      'erò', 'erai', 'erà', 'eremo', 'erete', 'eranno',
      'irò', 'irai', 'irà', 'iremo', 'irete', 'iranno',
      'erei', 'eresti', 'erebbe', 'eremmo', 'ereste', 'erebbero',
      'irei', 'iresti', 'irebbe', 'iremmo', 'ireste', 'irebbero',
      'assi', 'asse', 'assimo', 'aste', 'assero',
      'essi', 'esse', 'essimo', 'este', 'essero',
      'issi', 'isse', 'issimo', 'iste', 'issero',
      'ando', 'endo',
    ]);
    for (const st of stems) {
      if (strippedToken.startsWith(st)) {
        const suffix = strippedToken.slice(st.length);
        if (verbEndings.has(suffix)) return true;
      }
    }
  }

  // Noun & adjective gender/number inflections
  if (target.length >= 4) {
    // -co / -ca -> -chi / -che / -ci / -ce (e.g., spreco -> sprechi)
    if (target.endsWith('co') || target.endsWith('ca')) {
      const base = target.slice(0, -2);
      if (
        strippedToken === `${base}co` ||
        strippedToken === `${base}ca` ||
        strippedToken === `${base}chi` ||
        strippedToken === `${base}che` ||
        strippedToken === `${base}ci` ||
        strippedToken === `${base}ce`
      ) {
        return true;
      }
    }
    // -go / -ga -> -ghi / -ghe / -gi / -ge
    if (target.endsWith('go') || target.endsWith('ga')) {
      const base = target.slice(0, -2);
      if (
        strippedToken === `${base}go` ||
        strippedToken === `${base}ga` ||
        strippedToken === `${base}ghi` ||
        strippedToken === `${base}ghe` ||
        strippedToken === `${base}gi` ||
        strippedToken === `${base}ge`
      ) {
        return true;
      }
    }
    // -io -> -i (e.g., risparmio -> risparmi)
    if (target.endsWith('io')) {
      const base = target.slice(0, -2);
      if (strippedToken === `${base}i` || strippedToken === `${base}io`) {
        return true;
      }
    }
    // Standard -o / -a / -e / -i noun/adjective/participle endings (e.g., biglietto -> biglietti, partito -> partita)
    if (/[oaei]$/.test(target)) {
      const base = target.slice(0, -1);
      if (
        strippedToken === `${base}o` ||
        strippedToken === `${base}a` ||
        strippedToken === `${base}i` ||
        strippedToken === `${base}e`
      ) {
        return true;
      }
    }
  }

  return false;
}

const PREPOSITION_CONTRACTIONS: Record<string, string[]> = {
  di: ['di', 'del', 'dello', 'della', "dell'", 'dei', 'degli', 'delle'],
  a: ['a', 'ad', 'al', 'allo', 'alla', "all'", 'ai', 'agli', 'alle'],
  da: ['da', 'dal', 'dallo', 'dalla', "dall'", 'dai', 'dagli', 'dalle'],
  in: ['in', 'nel', 'nello', 'nella', "nell'", 'nei', 'negli', 'nelle'],
  con: ['con', 'col', 'coi'],
  su: ['su', 'sul', 'sullo', 'sulla', "sull'", 'sui', 'sugli', 'sulle'],
};

/** Checks whether an Italian text contains a required keyword or its legitimate conjugation/inflection. */
export function matchesItalianKeyword(text: string, keyword: string): boolean {
  const normText = normalizeIt(text);
  const normKw = normalizeIt(keyword);
  if (!normKw) return true;
  if (normText.includes(normKw)) return true;

  // Handle articulated preposition variants at the end of a phrase (e.g., "a scapito di" -> "a scapito della")
  for (const [prep, variants] of Object.entries(PREPOSITION_CONTRACTIONS)) {
    if (normKw.endsWith(` ${prep}`)) {
      const prefix = normKw.slice(0, -(prep.length + 1));
      for (const v of variants) {
        if (normText.includes(`${prefix} ${v}`)) return true;
      }
    }
  }

  const textTokens = tokenizeWords(normText);
  const kwTokens = tokenizeWords(normKw);
  if (kwTokens.length === 0) return true;

  if (kwTokens.length === 1) {
    const target = kwTokens[0]!;
    return textTokens.some((tok) => singleWordMatchesToken(tok, target));
  }

  // Multi-word keyword: match sequence of tokens allowing inflections on each token
  for (let i = 0; i <= textTokens.length - kwTokens.length; i++) {
    let allMatch = true;
    for (let j = 0; j < kwTokens.length; j++) {
      const tok = textTokens[i + j]!;
      const kwTok = kwTokens[j]!;
      const prepVariants = PREPOSITION_CONTRACTIONS[kwTok];
      const tokMatches = prepVariants
        ? prepVariants.some((v) => v.replace(/'$/, '') === tok || tok.startsWith(`${v.replace(/'$/, '')}'`))
        : singleWordMatchesToken(tok, kwTok);
      if (!tokMatches) {
        allMatch = false;
        break;
      }
    }
    if (allMatch) return true;
  }

  return false;
}

export function evaluateWritingSubmission(task: WritingExercise, draftText: string): WritingReport {
  const clean = draftText.trim();
  const words = clean ? clean.split(/\s+/).filter(Boolean).length : 0;
  const matchedKeywords = task.requiredKeywords.filter((k) => matchesItalianKeyword(clean, k));
  const missingKeywords = task.requiredKeywords.filter((k) => !matchesItalianKeyword(clean, k));
  const minOk = words >= task.minWords;
  const punctuationOk = /[.!?]$/.test(clean);
  const passed = minOk && matchedKeywords.length >= Math.ceil(task.requiredKeywords.length * 0.5);
  return { words, minOk, punctuationOk, matchedKeywords, missingKeywords, passed };
}

export function WritingScreen() {
  const { route, navigate } = useRouter();
  const { state, dispatch } = useProgress();
  const { t, tr } = useI18n();
  useStudyTimer();

  const initial = route.params.get('level');
  const [level, setLevel] = useState<BankLevel>(isBankLevel(initial) ? initial : 'A1');
  const [tasks, setTasks] = useState<WritingExercise[]>([]);
  const [loading, setLoading] = useState(true);
  const [active, setActive] = useState<WritingExercise | null>(null);
  const [draft, setDraft] = useState('');
  const [report, setReport] = useState<WritingReport | null>(null);
  const [showModel, setShowModel] = useState(false);
  const [checkedItems, setCheckedItems] = useState<Record<number, boolean>>({});

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    setActive(null);
    void loadLevelWriting(level).then((list) => {
      if (!mounted) return;
      setTasks(list);
      setLoading(false);
    });
    return () => {
      mounted = false;
    };
  }, [level]);

  const evaluate = (task: WritingExercise) => {
    const rep = evaluateWritingSubmission(task, draft);
    setReport(rep);
    if (rep.passed) {
      dispatch({ type: 'completeWriting', writingId: task.id, today: dayKey() });
    }
  };

  if (active) {
    const done = state.writingDone.includes(active.id);
    const wordCount = draft.trim() ? draft.trim().split(/\s+/).filter(Boolean).length : 0;

    return (
      <div className="animate-rise space-y-4">
        <SubHeader
          title={tr(active.title)}
          subtitle={`${active.level} · ${tr(active.category)}`}
          right={
            <Button variant="ghost" className="min-h-10 px-4 text-sm" onClick={() => setActive(null)}>
              {t('all')}
            </Button>
          }
        />

        <GlassCard neon className="p-4">
          <p className="bn text-[1.02rem] leading-relaxed font-semibold">{tr(active.prompt)}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {active.grammarIds.map((gid) => {
              const g = grammarById(gid);
              return (
                g && (
                  <button
                    key={gid}
                    type="button"
                    onClick={() => navigate(`/grammar/${gid}`)}
                    className="inline-flex items-center gap-1 rounded-lg border border-cyan/30 bg-cyan/10 px-2.5 py-1 text-xs font-bold text-cyan"
                  >
                    <BookOpen size={13} /> {g.title}
                  </button>
                )
              );
            })}
          </div>
        </GlassCard>

        {/* Useful Key Phrases */}
        <GlassCard className="p-4">
          <p className="mb-2 text-xs font-bold text-ink-3">{t('keyPhrases')}</p>
          <div className="flex flex-wrap gap-2">
            {active.keyPhrases.map((kp) => (
              <button
                key={kp.it}
                type="button"
                onClick={() => setDraft((d) => `${d}${d && !d.endsWith(' ') ? ' ' : ''}${kp.it.replace(/…/g, '')}`)}
                className="rounded-xl border border-white/15 bg-white/5 px-3 py-1.5 text-left text-xs font-bold hover:border-neon/40"
              >
                <span className="text-mint">{kp.it}</span>
                <span className="bn ml-1.5 text-ink-3">({tr(kp.tr)})</span>
              </button>
            ))}
          </div>
        </GlassCard>

        {/* Editor */}
        <GlassCard className="p-4">
          <div className="mb-2 flex items-center justify-between text-xs font-semibold tabular-nums text-ink-3">
            <span>Target: {active.minWords}+ {t('wordsLabel')}</span>
            <span className={wordCount >= active.minWords ? 'text-neon' : 'text-gold'}>
              {wordCount} {t('wordsLabel')}
            </span>
          </div>
          <textarea
            rows={5}
            value={draft}
            onChange={(e) => {
              setDraft(e.target.value);
              setReport(null);
            }}
            placeholder="Scrivi il tuo testo in italiano..."
            className="glass w-full rounded-2xl p-3.5 text-base font-semibold outline-none placeholder:text-ink-3"
          />

          <div className="mt-3 space-y-2">
            {active.checklist.map((item, idx) => (
              <label key={idx} className="flex items-center gap-2.5 text-sm font-semibold text-ink-2">
                <input
                  type="checkbox"
                  checked={!!checkedItems[idx]}
                  onChange={(e) => setCheckedItems((c) => ({ ...c, [idx]: e.target.checked }))}
                  className="h-4 w-4 accent-neon"
                />
                <span className="bn">{tr(item)}</span>
              </label>
            ))}
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            <Button className="min-h-10 px-4 text-sm" onClick={() => evaluate(active)}>
              {t('evaluateWriting')}
            </Button>
            <Button variant="ghost" className="min-h-10 px-4 text-sm" onClick={() => setShowModel((v) => !v)}>
              {showModel ? t('hideModelAnswer') : t('showModelAnswer')}
            </Button>
          </div>
        </GlassCard>

        {report && (
          <GlassCard className="space-y-2 p-4">
            <p className={cx('flex items-center gap-2 text-sm font-bold', report.minOk ? 'text-neon' : 'text-gold')}>
              {report.minOk ? <CheckCircle2 size={16} /> : <XCircle size={16} />}
              Word count: {report.words} / {active.minWords} min
            </p>
            <p className={cx('flex items-center gap-2 text-sm font-bold', report.punctuationOk ? 'text-neon' : 'text-gold')}>
              {report.punctuationOk ? <CheckCircle2 size={16} /> : <XCircle size={16} />}
              Ending punctuation check
            </p>
            <p className="text-sm font-semibold text-ink-2">
              Keywords matched ({report.matchedKeywords.length}/{active.requiredKeywords.length}):{' '}
              <span className="text-mint">{report.matchedKeywords.join(', ') || '—'}</span>
            </p>
            {report.missingKeywords.length > 0 && (
              <p className="text-xs font-semibold text-gold">
                Suggested terms to include: {report.missingKeywords.join(', ')}
              </p>
            )}
            {done && (
              <p className="text-sm font-bold text-neon">✓ {t('completed')}</p>
            )}
          </GlassCard>
        )}

        {showModel && (
          <GlassCard className="p-4">
            <div className="flex items-start gap-3">
              <SpeakButton text={active.modelResponse.it} size={36} />
              <div>
                <p className="text-xs font-bold text-mint">{t('showModelAnswer')}</p>
                <p className="mt-1 text-base font-bold">{active.modelResponse.it}</p>
                <p className="bn mt-1.5 text-sm text-ink-2">{tr(active.modelResponse.tr)}</p>
              </div>
            </div>
          </GlassCard>
        )}
      </div>
    );
  }

  return (
    <div className="animate-rise">
      <SubHeader title={t('writingAcademy')} subtitle={t('writingAcademySub')} />
      <LevelTabs value={level} onChange={setLevel} />

      {loading ? (
        <GlassCard className="p-6 text-center text-ink-2">...</GlassCard>
      ) : tasks.length === 0 ? (
        <GlassCard className="p-6 text-center text-ink-2">{t('inPreparation')}</GlassCard>
      ) : (
        <div className="grid gap-3 sm:grid-cols-2">
          {tasks.map((w) => {
            const done = state.writingDone.includes(w.id);
            return (
              <button
                key={w.id}
                type="button"
                onClick={() => {
                  setActive(w);
                  setDraft('');
                  setReport(null);
                  setShowModel(false);
                  setCheckedItems({});
                }}
                className="text-left"
              >
                <GlassCard neon={done} className="flex h-full items-center gap-3 p-4 transition hover:border-cyan/40">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-cyan/30 bg-cyan/10 text-cyan">
                    <FilePenLine size={20} />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-semibold text-ink-3 tabular-nums">
                      {tr(w.category)} · {w.minWords}+ {t('wordsLabel')}
                    </p>
                    <p className="bn truncate text-base font-extrabold">{tr(w.title)}</p>
                  </div>
                  {done ? <CheckCircle2 size={18} className="text-neon shrink-0" /> : <ChevronRight size={18} className="text-ink-3 shrink-0" />}
                </GlassCard>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
