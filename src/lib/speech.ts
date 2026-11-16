import { Capacitor } from '@capacitor/core';
import { TextToSpeech } from '@capacitor-community/text-to-speech';

/**
 * Italian text-to-speech. On Android the native TTS engine is used (the WebView
 * has no speechSynthesis); in browsers the Web Speech API is used.
 * Resolves when speaking ends; rejects if no Italian voice is available.
 */
export async function speakItalian(text: string, rate = 0.9): Promise<void> {
  const clean = text.replace(/\s*\((?:tu|Lei)\)\s*/g, ' ').trim();
  if (Capacitor.isNativePlatform()) {
    const { supported } = await TextToSpeech.isLanguageSupported({ lang: 'it-IT' });
    if (!supported) throw new Error('it-IT not supported');
    await TextToSpeech.speak({ text: clean, lang: 'it-IT', rate, pitch: 1, volume: 1, category: 'playback' });
    return;
  }
  if (!('speechSynthesis' in window)) throw new Error('speechSynthesis unavailable');
  const synth = window.speechSynthesis;
  synth.cancel();
  const utterance = new SpeechSynthesisUtterance(clean);
  utterance.lang = 'it-IT';
  utterance.rate = rate;
  const voice = synth.getVoices().find((v) => v.lang.toLowerCase().startsWith('it'));
  if (voice) utterance.voice = voice;
  await new Promise<void>((resolve, reject) => {
    utterance.onend = () => resolve();
    utterance.onerror = (e) => (e.error === 'interrupted' || e.error === 'canceled' ? resolve() : reject(new Error(e.error)));
    synth.speak(utterance);
  });
}

export async function stopSpeaking(): Promise<void> {
  if (Capacitor.isNativePlatform()) {
    await TextToSpeech.stop();
  } else if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }
}
