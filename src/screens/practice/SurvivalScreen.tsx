import { Home, Hospital, Landmark, ShoppingBag, TrainFront, Utensils, type LucideIcon } from 'lucide-react';
import { SURVIVAL_TOPICS, type SurvivalTopic } from '../../content/survival';
import { useI18n } from '../../lib/i18n';
import { useStudyTimer } from '../../state/ProgressContext';
import { GlassCard, IconTile } from '../../components/ui';
import { SpeakButton } from '../../components/SpeakButton';
import { SubHeader } from '../../components/SubHeader';

const ICONS: Record<SurvivalTopic['icon'], LucideIcon> = {
  utensils: Utensils,
  train: TrainFront,
  hospital: Hospital,
  landmark: Landmark,
  shopping: ShoppingBag,
  home: Home,
};

export function SurvivalScreen() {
  const { tr } = useI18n();
  useStudyTimer();
  return (
    <div className="animate-rise">
      <SubHeader
        title={tr({ bn: 'জরুরি ইতালিয়ান', en: 'Survival Italian', it: 'Italiano essenziale' })}
        subtitle="A1"
      />
      <div className="space-y-4">
        {SURVIVAL_TOPICS.map((topic) => (
          <GlassCard key={topic.id} className="p-4">
            <h2 className="mb-2 flex items-center gap-3 font-semibold">
              <IconTile icon={ICONS[topic.icon]} tone="gold" size="sm" /> <span className="bn">{tr(topic.title)}</span>
            </h2>
            <div className="divide-y divide-white/5">
              {topic.phrases.map((p) => (
                <div key={p.id} className="flex items-center gap-3 py-3">
                  <SpeakButton text={p.it} size={34} />
                  <div>
                    <p className="font-medium">{p.it}</p>
                    <p className="bn text-sm text-ink-2">{tr(p.tr)}</p>
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>
        ))}
      </div>
    </div>
  );
}
