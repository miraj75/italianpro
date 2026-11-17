import { FlaskConical, GraduationCap, Lock } from 'lucide-react';
import { A1_ACADEMY_MODULES, findAcademyModule } from '../../content/academy/curriculum';
import { useRouter } from '../../app/router';
import { useI18n } from '../../lib/i18n';
import { useProgress, useStudyTimer } from '../../state/ProgressContext';
import {
  getNextAcademyModuleTarget,
  isAcademyModuleCompleted,
  isAcademyModuleUnlocked,
} from '../../state/academyProgress';
import { isShowAllLockedModulesEnabled } from '../../state/progress';
import { A1FinalExamFlow } from '../../components/academy/A1FinalExamFlow';
import { SubHeader } from '../../components/SubHeader';
import { Button, GlassCard, ProgressBar } from '../../components/ui';

/**
 * Module 20: Comprehensive A1 Final Examination.
 * Strictly locked until all 19 prerequisite A1 modules are passed (unless Developer Testing Mode is active).
 * Draws 30 randomized questions from the 120-question cumulative A1 bank with a 70% pass threshold.
 */
export function FinalExamModuleScreen() {
  useStudyTimer();
  const { state } = useProgress();
  const { route, navigate } = useRouter();
  const { t, tr } = useI18n();
  const backRoute = route.params.get('from') === 'home' ? '/' : '/level/A1';

  const meta = findAcademyModule('final-exam', 'A1');
  const unlocked = isAcademyModuleUnlocked(state.academy, 'final-exam', 'A1');
  const testingOverride = !unlocked && isShowAllLockedModulesEnabled(state);

  const prerequisiteModules = A1_ACADEMY_MODULES.filter((m) => m.id !== 'final-exam');
  const completedPrereqs = prerequisiteModules.filter((m) =>
    isAcademyModuleCompleted(state.academy, m.id, 'A1'),
  ).length;
  const nextPending = getNextAcademyModuleTarget(state.academy, 'A1');

  if (!meta) return null;

  return (
    <div className="animate-rise space-y-4">
      <SubHeader
        title={`${meta.order}. ${meta.title}`}
        subtitle={
          testingOverride
            ? tr({
                bn: 'প্রিভিউ মোড (অগ্রগতি সংরক্ষণ হবে না)',
                en: 'Testing Preview Mode',
                it: 'Modalità anteprima test',
              })
            : tr(meta.subtitle)
        }
        backTo={backRoute}
      />

      {testingOverride && (
        <div
          role="status"
          className="flex items-start gap-2.5 rounded-2xl border border-gold/50 bg-gold/10 px-4 py-3 text-xs font-extrabold text-gold"
        >
          <FlaskConical size={16} className="mt-0.5 shrink-0" />
          <span className="bn">{t('testingModePreviewBanner')}</span>
        </div>
      )}

      {!unlocked && !testingOverride ? (
        <GlassCard className="p-6 text-center space-y-4" data-testid="final-exam-locked-card">
          <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-gold/40 bg-gold/10 text-gold">
            <Lock size={28} />
          </span>
          <div className="space-y-1.5">
            <h2 className="bn text-xl font-extrabold text-white">
              {tr({
                bn: 'চূড়ান্ত A1 পরীক্ষা আনলক করুন',
                en: 'Unlock the A1 Final Examination',
                it: 'Sblocca l’Esame Finale A1',
              })}
            </h2>
            <p className="bn text-sm font-semibold text-ink-2">
              {tr({
                bn: 'চূড়ান্ত পরীক্ষা শুরু করতে আগের ১৯টি A1 অধ্যায় সম্পূর্ণ করুন। প্রতিটি অধ্যায় শেষ করলে এই পরীক্ষা স্বয়ংক্রিয়ভাবে খুলে যাবে।',
                en: 'Complete all 19 prerequisite A1 modules first to unlock this cumulative 30-question final examination.',
                it: 'Completa tutti i 19 moduli precedenti di livello A1 per sbloccare l’esame finale da 30 domande.',
              })}
            </p>
          </div>

          <div className="mx-auto max-w-sm space-y-1.5 text-left">
            <div className="flex items-center justify-between text-xs font-bold text-ink-2 tabular-nums">
              <span className="bn">
                {tr({
                  bn: `সম্পন্ন অধ্যায়: ${completedPrereqs} / ${prerequisiteModules.length}`,
                  en: `Completed modules: ${completedPrereqs} / ${prerequisiteModules.length}`,
                  it: `Moduli completati: ${completedPrereqs} / ${prerequisiteModules.length}`,
                })}
              </span>
              <span className="text-neon">
                {Math.round((completedPrereqs / Math.max(1, prerequisiteModules.length)) * 100)}%
              </span>
            </div>
            <ProgressBar
              value={completedPrereqs / Math.max(1, prerequisiteModules.length)}
              className="h-2"
            />
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-2.5 pt-1">
            {nextPending && nextPending.id !== 'final-exam' && (
              <Button onClick={() => navigate(nextPending.route)}>
                <span className="bn">
                  {nextPending.order}. {nextPending.title}
                </span>
              </Button>
            )}
            <Button variant="ghost" onClick={() => navigate(backRoute)}>
              <span className="bn">{t('backToCourses')}</span>
            </Button>
          </div>
        </GlassCard>
      ) : (
        <div className="space-y-3">
          <div className="glass rounded-2xl border border-cyan/25 px-4 py-2.5 flex flex-wrap items-center justify-between gap-2 text-xs font-bold text-ink-2">
            <span className="flex items-center gap-1.5 text-cyan">
              <GraduationCap size={15} />
              <span className="bn">
                {tr({
                  bn: 'সম্পূর্ণ A1 পাঠ্যক্রম · ১৯টি অধ্যায় ও ১৪টি মূল বিষয়',
                  en: 'Complete A1 Curriculum · 19 Modules · 14 Core Topics',
                  it: 'Programma A1 completo · 19 moduli',
                })}
              </span>
            </span>
            <span className="bn text-mint tabular-nums">
              {tr({
                bn: '৩০ প্রশ্ন · ৭০% পেলেই উত্তীর্ণ (সর্বোচ্চ ৯ ভুল)',
                en: '30 Randomized Questions · 70% Pass Threshold (21/30)',
                it: '30 domande casuali · Soglia di superamento 70% (21/30)',
              })}
            </span>
          </div>

          <A1FinalExamFlow previewMode={testingOverride} />
        </div>
      )}
    </div>
  );
}
