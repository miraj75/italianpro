import type { Gender, PartOfSpeech, RichSentenceItem, RichVocabItem } from './academyTypes';
import type { BankSentence, BankWord } from './bank';
import type { Tr } from './types';

const IRREGULAR_PLURALS: Record<string, string> = {
  "l'uomo": 'gli uomini',
  'la mano': 'le mani',
  "l'uovo": 'le uova',
  'il dito': 'le dita',
  'il braccio': 'le braccia',
  "l'amico": 'gli amici',
  "l'amica": 'le amiche',
  'il medico': 'i medici',
  'la banca': 'le banche',
  'la farmacia': 'le farmacie',
  'il parco': 'i parchi',
  'il sacchetto': 'i sacchetti',
  'la città': 'le città',
  'il caffè': 'i caffè',
  'il tè': 'i tè',
  'il menù': 'i menù',
  'la foto': 'le foto',
  'la radio': 'le radio',
  "l'università": 'le università',
  "l'euro": 'gli euro',
  'il film': 'i film',
  'il computer': 'i computer',
  'il bar': 'i bar',
  "l'autobus": 'gli autobus',
  'il taxi': 'i taxi',
  'il problema': 'i problemi',
  'il sistema': 'i sistemi',
  'il programma': 'i programmi',
  'il cinema': 'i cinema',
  'la crisi': 'le crisi',
  "l'analisi": 'le analisi',
  'la tesi': 'le tesi',
  'lo zio': 'gli zii',
  'la moglie': 'le mogli',
  'il re': 'i re',
  'il papa': 'i papi',
  'il papà': 'i papà',
};

const POS_BY_TOPIC_EN: Record<string, PartOfSpeech> = {
  'Common verbs': 'verb',
  'More key verbs': 'verb',
  'Verbs of opinion & reasoning': 'verb',
  'More verbs': 'verb',
  'B2 verbs of analysis & debate': 'verb',
  'B2 verbs of governance & action': 'verb',
  'Additional B2 verbs & expressions': 'verb',
  'Adjectives': 'adjective',
  'More adjectives': 'adjective',
  'B1 adjectives': 'adjective',
  'B2 advanced adjectives': 'adjective',
  'Numbers': 'number',
  'Question & function words': 'pronoun',
  'Adverbs & connectors': 'adverb',
  'B1 connectors & adverbs': 'adverb',
  'B2 connectors & discourse markers': 'adverb',
  'Greetings & courtesy': 'phrase',
  'Expressing reactions': 'phrase',
};

/** Produces a clean Italian phonetic/stress guide for Bengali & English learners. */
export function italianPronunciation(it: string): string {
  return it
    .replace(/gn/gi, 'ny')
    .replace(/gli(?=[aeiou]|$)/gi, 'lyi')
    .replace(/sci/gi, 'shi')
    .replace(/sce/gi, 'she')
    .replace(/sch/gi, 'sk')
    .replace(/ch/gi, 'k')
    .replace(/gh/gi, 'g')
    .replace(/ci(?=[aou])/gi, 'ch')
    .replace(/ce/gi, 'che')
    .replace(/ci/gi, 'chi')
    .replace(/ge/gi, 'je')
    .replace(/gi(?=[aou])/gi, 'j')
    .replace(/gi/gi, 'ji')
    .replace(/qu/gi, 'kw')
    .replace(/z/gi, 'ts');
}

function splitArticle(it: string): { article?: string; base: string } {
  const lower = it.trim();
  const apostrophe = lower.match(/^(l'|un')(.+)$/i);
  if (apostrophe) return { article: apostrophe[1], base: apostrophe[2]! };
  const space = lower.match(/^(il|lo|la|i|gli|le|un|uno|una)\s+(.+)$/i);
  if (space) return { article: space[1], base: space[2]! };
  return { base: lower };
}

function inferGender(article: string | undefined, base: string, pos: PartOfSpeech): Gender {
  if (pos !== 'noun') return 'none';
  if (article === 'il' || article === 'lo' || article === 'i' || article === 'gli' || article === 'un' || article === 'uno') return 'm';
  if (article === 'la' || article === 'le' || article === 'una' || article === "un'") return 'f';
  if (article === "l'") {
    if (base.endsWith('a') || base.endsWith('zione') || base.endsWith('sione') || base.endsWith('tà')) return 'f';
    return 'm';
  }
  if (base.endsWith('o')) return 'm';
  if (base.endsWith('a')) return 'f';
  return 'mf';
}

function pluralArt(article: string | undefined, gender: Gender, base: string): string {
  if (!article) return '';
  if (article === 'il') return 'i ';
  if (article === 'lo') return 'gli ';
  if (article === 'la') return 'le ';
  if (article === "l'") return gender === 'f' ? 'le ' : 'gli ';
  if (article === 'i' || article === 'gli' || article === 'le') return `${article} `;
  if (/^[aeiouàèéìòù]|^s[^aeiou]|^z/i.test(base)) return gender === 'f' ? 'le ' : 'gli ';
  return gender === 'f' ? 'le ' : 'i ';
}

function inferPlural(it: string, article: string | undefined, base: string, gender: Gender, pos: PartOfSpeech): string | undefined {
  if (pos !== 'noun') return undefined;
  const key = it.toLowerCase().trim();
  if (IRREGULAR_PLURALS[key]) return IRREGULAR_PLURALS[key];
  if (article === 'i' || article === 'gli' || article === 'le') return it;
  const firstWord = base.split(' ')[0]!;
  const rest = base.includes(' ') ? ` ${base.slice(base.indexOf(' ') + 1)}` : '';
  let pluralFirst = firstWord;
  if (/[àèéìòù]$/i.test(firstWord) || firstWord.length <= 2) {
    pluralFirst = firstWord;
  } else if (firstWord.endsWith('io')) {
    pluralFirst = `${firstWord.slice(0, -2)}i`;
  } else if (firstWord.endsWith('o')) {
    pluralFirst = `${firstWord.slice(0, -1)}i`;
  } else if (firstWord.endsWith('a')) {
    pluralFirst = gender === 'm' ? `${firstWord.slice(0, -1)}i` : `${firstWord.slice(0, -1)}e`;
  } else if (firstWord.endsWith('e')) {
    pluralFirst = `${firstWord.slice(0, -1)}i`;
  }
  return `${pluralArt(article, gender, pluralFirst)}${pluralFirst}${rest}`.trim();
}

function inferPos(word: BankWord): PartOfSpeech {
  const it = word.it.trim().toLowerCase();
  const { article } = splitArticle(it);
  if (article) return 'noun';
  if (it.includes(' ') && !/^(che|a|per) /.test(it)) return 'phrase';
  const byTopic = POS_BY_TOPIC_EN[word.topic.en];
  if (byTopic) {
    if (byTopic === 'verb' && !/(are|ere|ire|rsi|re)$/.test(it)) return 'phrase';
    return byTopic;
  }
  if (/^(essere|avere|stare|fare|dare|dire|bere|porre|trarre|tradurre)$/.test(it) || /(are|ere|ire|rsi)$/.test(it)) return 'verb';
  if (/(mente)$/.test(it)) return 'adverb';
  return 'noun';
}

function buildExample(w: BankWord, pos: PartOfSpeech): { it: string; tr: Tr } {
  if (pos === 'verb') {
    return {
      it: `Usiamo il verbo "${w.it}" ogni giorno.`,
      tr: { bn: `আমরা প্রতিদিন "${w.tr.bn}" ক্রিয়াটি ব্যবহার করি।`, en: `We use the verb "${w.tr.en}" every day.` },
    };
  }
  if (pos === 'adjective') {
    return {
      it: `È una cosa molto ${w.it}.`,
      tr: { bn: `এটা বেশ ${w.tr.bn}।`, en: `It is quite ${w.tr.en}.` },
    };
  }
  if (pos === 'phrase' || pos === 'interjection' || pos === 'number' || pos === 'pronoun' || pos === 'adverb') {
    return {
      it: `In italiano diciamo: "${w.it}".`,
      tr: { bn: `ইতালিয়ানে আমরা বলি: "${w.tr.bn}"।`, en: `In Italian we say: "${w.tr.en}".` },
    };
  }
  return {
    it: `Ecco ${w.it} di cui abbiamo parlato.`,
    tr: { bn: `এই হলো ${w.tr.bn}, যা নিয়ে আমরা কথা বলেছি।`, en: `Here is the ${w.tr.en} we talked about.` },
  };
}

export function enrichWord(w: BankWord, sentenceIndex?: Map<string, { it: string; tr: Tr; grammar: string }>): RichVocabItem {
  const pos = inferPos(w);
  const { article, base } = splitArticle(w.it);
  const gender = inferGender(article, base, pos);
  const plural = inferPlural(w.it, article, base, gender, pos);
  const matchedSentence = sentenceIndex?.get(base.toLowerCase()) ?? sentenceIndex?.get(w.it.toLowerCase());
  const slug = w.it
    .toLowerCase()
    .replace(/[^a-z0-9àèéìòù]+/gi, '-')
    .replace(/^-|-$/g, '');

  return {
    id: `v-${w.level.toLowerCase()}-${slug}`,
    key: w.key,
    level: w.level,
    it: w.it,
    baseWord: base,
    article,
    gender,
    plural,
    pos,
    pronunciation: italianPronunciation(w.it),
    tr: w.tr,
    topic: w.topic,
    example: matchedSentence ? { it: matchedSentence.it, tr: matchedSentence.tr } : buildExample(w, pos),
    grammarIds: matchedSentence ? [matchedSentence.grammar] : pos === 'noun' ? ['articoli', 'genere-numero'] : pos === 'verb' ? ['presente-are'] : ['struttura-frase'],
  };
}

export function enrichSentence(s: BankSentence, idx: number): RichSentenceItem {
  const slug = `${s.level.toLowerCase()}-${String(idx + 1).padStart(3, '0')}`;
  return {
    id: `s-${slug}`,
    key: s.key,
    level: s.level,
    it: s.it,
    tr: s.tr,
    pronunciation: italianPronunciation(s.it),
    grammar: s.grammar,
    grammarIds: [s.grammar],
    vocabKeys: [],
    context: {
      bn: `${s.level} দৈনন্দিন ব্যবহার (${s.grammar})`,
      en: `${s.level} everyday usage (${s.grammar})`,
    },
  };
}
