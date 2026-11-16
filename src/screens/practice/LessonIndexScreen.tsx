import { ChevronRight, Lock } from 'lucide-react';
import { allLessons } from '../../content/courses';
import { useRouter } from '../../app/router';
import { useI18n } from '../../lib/i18n';
import { useProgress } from '../../state/ProgressContext';
import { isLessonUnlocked } from '../../state/progress';
import { GlassCard } from '../../components/ui';
import { SubHeader } from '../../components/SubHeader';

/** Lists lessons and opens a specific tab (grammar or dialogue) for focused practice. */
export function LessonIndexScreen({ mode }: { mode: 'grammar' | 'listening' }) {
  const { state } = useProgress();
  const { navigate } = useRouter();
  const { t, tr } = useI18n();
  const tab = mode === 'grammar' ? 'grammar' : 'dialogue';

  return (
    <div className="animate-rise">
      <SubHeader title={mode === 'grammar' ? 'Grammar' : 'Listening'} subtitle={t(tab)} />
      <GlassCard className="divide-y divide-white/5">
        {allLessons().map(({ level, lesson }) => {
          const open = isLessonUnlocked(state, level.id, lesson.id);
          const detail = mode === 'grammar' ? lesson.grammar.map((g) => tr(g.title)).join(' · ') : tr(lesson.dialogue.title);
          return (
            <button
              key={lesson.id}
              type="button"
              disabled={!open}
              onClick={() => navigate(`/lesson/${lesson.id}?tab=${tab}`)}
              className="flex min-h-16 w-full items-center gap-3 px-4 py-3 text-left disabled:opacity-50"
            >
              <span className="text-xs font-bold text-mint">{level.id}</span>
              <span className="min-w-0 flex-1">
                <span className="block font-medium">{lesson.title}</span>
                <span className="bn block truncate text-xs text-ink-3">{open ? detail : t('locked')}</span>
              </span>
              {open ? <ChevronRight size={18} className="text-ink-3" /> : <Lock size={16} className="text-ink-3" />}
            </button>
          );
        })}
      </GlassCard>
    </div>
  );
}
