import { Capacitor } from '@capacitor/core';
import { TextToSpeech } from '@capacitor-community/text-to-speech';

let activeSessionId = 0;
let activeCancelCallback: (() => void) | null = null;

/**
 * Starts a new exclusive speech playback session and cancels any previous session or utterance.
 */
export function startSpeechSession(): number {
  activeSessionId += 1;
  const sessionId = activeSessionId;
  cancelActiveUtteranceOnly();
  return sessionId;
}

export function getSpeechSessionId(): number {
  return activeSessionId;
}

export function isSpeechSessionActive(sessionId: number): boolean {
  return sessionId === activeSessionId;
}

function cancelActiveUtteranceOnly(): void {
  if (activeCancelCallback) {
    const cb = activeCancelCallback;
    activeCancelCallback = null;
    try {
      cb();
    } catch {
      // ignore
    }
  }
  try {
    if (Capacitor.isNativePlatform()) {
      void TextToSpeech.stop().catch(() => {});
    } else if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
  } catch {
    // ignore speech engine cancellation errors
  }
}

/**
 * Italian text-to-speech. On Android the native TTS engine is used (the WebView
 * has no speechSynthesis); in browsers the Web Speech API is used.
 * Resolves when speaking ends; rejects if cancelled or if no Italian voice is available.
 */
export async function speakItalian(text: string, rate = 0.9, sessionId?: number): Promise<void> {
  if (sessionId !== undefined && sessionId !== activeSessionId) {
    throw new Error('speech-cancelled');
  }

  const clean = text.replace(/\s*\((?:tu|Lei)\)\s*/g, ' ').trim();
  if (!clean) return;

  if (Capacitor.isNativePlatform()) {
    const { supported } = await TextToSpeech.isLanguageSupported({ lang: 'it-IT' });
    if (!supported) throw new Error('it-IT not supported');
    if (sessionId !== undefined && sessionId !== activeSessionId) {
      throw new Error('speech-cancelled');
    }
    await TextToSpeech.speak({ text: clean, lang: 'it-IT', rate, pitch: 1, volume: 1, category: 'playback' });
    if (sessionId !== undefined && sessionId !== activeSessionId) {
      throw new Error('speech-cancelled');
    }
    return;
  }

  if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
    throw new Error('speechSynthesis unavailable');
  }

  const synth = window.speechSynthesis;
  if (activeCancelCallback) {
    const prev = activeCancelCallback;
    activeCancelCallback = null;
    try {
      prev();
    } catch {
      // ignore
    }
  }
  try {
    synth.cancel();
  } catch {
    // ignore
  }

  if (sessionId !== undefined && sessionId !== activeSessionId) {
    throw new Error('speech-cancelled');
  }

  const utterance = new SpeechSynthesisUtterance(clean);
  utterance.lang = 'it-IT';
  utterance.rate = rate;
  try {
    const voice = synth.getVoices().find((v) => v.lang.toLowerCase().startsWith('it'));
    if (voice) utterance.voice = voice;
  } catch {
    // ignore if getVoices fails
  }

  await new Promise<void>((resolve, reject) => {
    let settled = false;
    const cleanup = () => {
      utterance.onend = null;
      utterance.onerror = null;
      if (activeCancelCallback === onCancel) {
        activeCancelCallback = null;
      }
    };
    const onCancel = () => {
      if (settled) return;
      settled = true;
      cleanup();
      if (sessionId !== undefined) {
        reject(new Error('speech-cancelled'));
      } else {
        resolve();
      }
    };

    activeCancelCallback = onCancel;

    utterance.onend = () => {
      if (settled) return;
      settled = true;
      cleanup();
      if (sessionId !== undefined && sessionId !== activeSessionId) {
        reject(new Error('speech-cancelled'));
      } else {
        resolve();
      }
    };

    utterance.onerror = (e) => {
      if (settled) return;
      settled = true;
      cleanup();
      if (e.error === 'interrupted' || e.error === 'canceled') {
        if (sessionId !== undefined) {
          reject(new Error('speech-cancelled'));
        } else {
          resolve();
        }
      } else {
        reject(new Error(e.error || 'speech-error'));
      }
    };

    try {
      synth.speak(utterance);
    } catch (err) {
      if (!settled) {
        settled = true;
        cleanup();
        reject(err instanceof Error ? err : new Error('speech-error'));
      }
    }
  });
}

export async function stopSpeaking(): Promise<void> {
  activeSessionId += 1;
  if (activeCancelCallback) {
    const cb = activeCancelCallback;
    activeCancelCallback = null;
    try {
      cb();
    } catch {
      // ignore
    }
  }
  try {
    if (Capacitor.isNativePlatform()) {
      await TextToSpeech.stop();
    } else if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
  } catch {
    // ignore
  }
}

interface SpeechRecognitionAlternativeLike {
  transcript: string;
}
interface SpeechRecognitionResultLike {
  0?: SpeechRecognitionAlternativeLike;
}
interface SpeechRecognitionEventLike {
  results: ArrayLike<SpeechRecognitionResultLike>;
}
interface SpeechRecognitionLike {
  lang: string;
  interimResults: boolean;
  maxAlternatives: number;
  start: () => void;
  stop: () => void;
  onresult: ((e: SpeechRecognitionEventLike) => void) | null;
  onerror: ((e: { error?: string }) => void) | null;
  onend: (() => void) | null;
}

function getSpeechRecognitionCtor(): (new () => SpeechRecognitionLike) | null {
  if (typeof window === 'undefined') return null;
  const w = window as unknown as Record<string, unknown>;
  const ctor = w.SpeechRecognition ?? w.webkitSpeechRecognition;
  return typeof ctor === 'function' ? (ctor as new () => SpeechRecognitionLike) : null;
}

export function isSpeechRecognitionSupported(): boolean {
  return !Capacitor.isNativePlatform() && getSpeechRecognitionCtor() !== null;
}

export function startItalianRecognition(callbacks: {
  onResult: (transcript: string) => void;
  onError: (reason: string) => void;
  onEnd: () => void;
}): () => void {
  const Ctor = getSpeechRecognitionCtor();
  if (!Ctor) {
    callbacks.onError('unsupported');
    callbacks.onEnd();
    return () => {};
  }
  const rec = new Ctor();
  rec.lang = 'it-IT';
  rec.interimResults = false;
  rec.maxAlternatives = 1;
  rec.onresult = (e) => {
    const pieces: string[] = [];
    for (let i = 0; i < e.results.length; i++) {
      const t = e.results[i]?.[0]?.transcript;
      if (t) pieces.push(t);
    }
    callbacks.onResult(pieces.join(' ').trim());
  };
  rec.onerror = (e) => callbacks.onError(e.error ?? 'recognition-error');
  rec.onend = () => callbacks.onEnd();
  rec.start();
  return () => {
    try {
      rec.stop();
    } catch {
      // ignore if already stopped
    }
  };
}

function normalizeWords(text: string): string[] {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s]/g, ' ')
    .split(/\s+/)
    .filter(Boolean);
}

export function scoreSpokenMatch(target: string, spoken: string): {
  percent: number;
  matched: string[];
  missed: string[];
} {
  const targetWords = normalizeWords(target);
  const spokenSet = new Set(normalizeWords(spoken));
  if (targetWords.length === 0) return { percent: 0, matched: [], missed: [] };
  const matched: string[] = [];
  const missed: string[] = [];
  for (const w of targetWords) {
    if (spokenSet.has(w)) matched.push(w);
    else missed.push(w);
  }
  return {
    percent: Math.round((matched.length / targetWords.length) * 100),
    matched,
    missed,
  };
}
