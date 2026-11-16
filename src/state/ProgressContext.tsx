import { createContext, useContext, useEffect, useReducer, useRef, useState, type ReactNode } from 'react';
import { reducer, type Action, type ProgressState } from './progress';
import { loadProgress, saveProgress } from './storage';
import { dayKey } from '../lib/date';

interface ProgressContextValue {
  state: ProgressState;
  dispatch: (action: Action) => void;
  /** False when the device refused to store progress (e.g. storage full or blocked). */
  persisted: boolean;
}

const ProgressContext = createContext<ProgressContextValue | null>(null);

export function ProgressProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, undefined, loadProgress);
  const [persisted, setPersisted] = useState(true);

  useEffect(() => {
    setPersisted(saveProgress(state));
  }, [state]);

  return <ProgressContext.Provider value={{ state, dispatch, persisted }}>{children}</ProgressContext.Provider>;
}

export function useProgress(): ProgressContextValue {
  const ctx = useContext(ProgressContext);
  if (!ctx) throw new Error('useProgress must be used inside ProgressProvider');
  return ctx;
}

/**
 * Counts real study time while a learning screen is mounted and the app is visible.
 * Time is flushed every 15 s and on unmount.
 */
export function useStudyTimer(): void {
  const { dispatch } = useProgress();
  const pending = useRef(0);

  useEffect(() => {
    const flush = () => {
      if (pending.current > 0) {
        dispatch({ type: 'addStudyTime', seconds: pending.current, today: dayKey() });
        pending.current = 0;
      }
    };
    const tick = window.setInterval(() => {
      if (document.visibilityState === 'visible') pending.current += 1;
      if (pending.current >= 15) flush();
    }, 1000);
    return () => {
      window.clearInterval(tick);
      flush();
    };
  }, [dispatch]);
}
