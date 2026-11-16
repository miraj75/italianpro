import type { Tr } from './types';

export interface VerbConjugation {
  tense: Tr;
  forms: [string, string, string, string, string, string];
}

export interface Verb {
  id: string;
  infinitive: string;
  meaning: Tr;
  level: 'A1';
  irregular: boolean;
  conjugations: VerbConjugation[];
  examples: { it: string; tr: Tr }[];
}

export const PRONOUNS = ['io', 'tu', 'lui/lei', 'noi', 'voi', 'loro'] as const;

const presente: Tr = { bn: 'বর্তমান (presente)', en: 'Present (presente)' };

export const VERBS: Verb[] = [
  {
    id: 'essere',
    infinitive: 'essere',
    meaning: { bn: 'হওয়া', en: 'to be' },
    level: 'A1',
    irregular: true,
    conjugations: [{ tense: presente, forms: ['sono', 'sei', 'è', 'siamo', 'siete', 'sono'] }],
    examples: [{ it: 'Sono di Dhaka.', tr: { bn: 'আমি ঢাকার।', en: 'I’m from Dhaka.' } }],
  },
  {
    id: 'avere',
    infinitive: 'avere',
    meaning: { bn: 'থাকা / আছে', en: 'to have' },
    level: 'A1',
    irregular: true,
    conjugations: [{ tense: presente, forms: ['ho', 'hai', 'ha', 'abbiamo', 'avete', 'hanno'] }],
    examples: [{ it: 'Ho diciotto anni.', tr: { bn: 'আমার বয়স আঠারো বছর।', en: 'I’m eighteen years old.' } }],
  },
  {
    id: 'parlare',
    infinitive: 'parlare',
    meaning: { bn: 'কথা বলা', en: 'to speak' },
    level: 'A1',
    irregular: false,
    conjugations: [{ tense: presente, forms: ['parlo', 'parli', 'parla', 'parliamo', 'parlate', 'parlano'] }],
    examples: [{ it: 'Parlo un po’ di italiano.', tr: { bn: 'আমি একটু ইতালিয়ান বলি।', en: 'I speak a little Italian.' } }],
  },
  {
    id: 'abitare',
    infinitive: 'abitare',
    meaning: { bn: 'বাস করা', en: 'to live (reside)' },
    level: 'A1',
    irregular: false,
    conjugations: [{ tense: presente, forms: ['abito', 'abiti', 'abita', 'abitiamo', 'abitate', 'abitano'] }],
    examples: [{ it: 'Abito a Roma.', tr: { bn: 'আমি রোমে থাকি।', en: 'I live in Rome.' } }],
  },
  {
    id: 'fare',
    infinitive: 'fare',
    meaning: { bn: 'করা / বানানো', en: 'to do / to make' },
    level: 'A1',
    irregular: true,
    conjugations: [{ tense: presente, forms: ['faccio', 'fai', 'fa', 'facciamo', 'fate', 'fanno'] }],
    examples: [{ it: 'Che lavoro fai?', tr: { bn: 'তুমি কী কাজ করো?', en: 'What do you do for work?' } }],
  },
  {
    id: 'andare',
    infinitive: 'andare',
    meaning: { bn: 'যাওয়া', en: 'to go' },
    level: 'A1',
    irregular: true,
    conjugations: [{ tense: presente, forms: ['vado', 'vai', 'va', 'andiamo', 'andate', 'vanno'] }],
    examples: [{ it: 'Vado all’università.', tr: { bn: 'আমি বিশ্ববিদ্যালয়ে যাই।', en: 'I go to university.' } }],
  },
  {
    id: 'stare',
    infinitive: 'stare',
    meaning: { bn: 'থাকা (অবস্থা)', en: 'to stay / to be (state)' },
    level: 'A1',
    irregular: true,
    conjugations: [{ tense: presente, forms: ['sto', 'stai', 'sta', 'stiamo', 'state', 'stanno'] }],
    examples: [{ it: 'Come stai? — Sto bene.', tr: { bn: 'কেমন আছো? — ভালো আছি।', en: 'How are you? — I’m fine.' } }],
  },
  {
    id: 'venire',
    infinitive: 'venire',
    meaning: { bn: 'আসা', en: 'to come' },
    level: 'A1',
    irregular: true,
    conjugations: [{ tense: presente, forms: ['vengo', 'vieni', 'viene', 'veniamo', 'venite', 'vengono'] }],
    examples: [{ it: 'Vengo dal Bangladesh.', tr: { bn: 'আমি বাংলাদেশ থেকে এসেছি।', en: 'I come from Bangladesh.' } }],
  },
];
