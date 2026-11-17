import type { AcademyExamQuestion, NumberItem, NumberRule } from './types';

const ONES_IT = ['zero', 'uno', 'due', 'tre', 'quattro', 'cinque', 'sei', 'sette', 'otto', 'nove'];
const ONES_BN_NUM = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
const ONES_PHONETIC_BN = ['জ়েরো', 'উনো', 'দুয়ে', 'ত্রে', 'কুয়াত্রো', 'চিনকুয়ে', 'সেই', 'সেত্তে', 'ওত্তো', 'নভে'];
const ONES_PHONETIC_EN = ['dzeh-roh', 'oo-noh', 'doo-eh', 'treh', 'kwaht-troh', 'cheen-kweh', 'say', 'set-teh', 'ot-toh', 'noh-veh'];
const ONES_EN = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
const ONES_BN = ['শূন্য (০)', 'এক (১)', 'দুই (২)', 'তিন (৩)', 'চার (৪)', 'পাঁচ (৫)', 'ছয় (৬)', 'সাত (৭)', 'আট (৮)', 'নয় (৯)'];

const TEENS: {
  value: number;
  it: string;
  phoneticBn: string;
  phoneticEn: string;
  en: string;
  bn: string;
}[] = [
  { value: 10, it: 'dieci', phoneticBn: 'দিয়েচি', phoneticEn: 'dyeh-chee', en: 'ten', bn: 'দশ (১০)' },
  { value: 11, it: 'undici', phoneticBn: 'উনদিচি', phoneticEn: 'oon-dee-chee', en: 'eleven', bn: 'এগারো (১১)' },
  { value: 12, it: 'dodici', phoneticBn: 'দোদিচি', phoneticEn: 'doh-dee-chee', en: 'twelve', bn: 'বারো (১২)' },
  { value: 13, it: 'tredici', phoneticBn: 'ত্রেদিচি', phoneticEn: 'treh-dee-chee', en: 'thirteen', bn: 'তেরো (১৩)' },
  { value: 14, it: 'quattordici', phoneticBn: 'কুয়াত্তরদিচি', phoneticEn: 'kwaht-tor-dee-chee', en: 'fourteen', bn: 'চৌদ্দ (১৪)' },
  { value: 15, it: 'quindici', phoneticBn: 'কুইনদিচি', phoneticEn: 'kween-dee-chee', en: 'fifteen', bn: 'পনেরো (১৫)' },
  { value: 16, it: 'sedici', phoneticBn: 'সেদিচি', phoneticEn: 'seh-dee-chee', en: 'sixteen', bn: 'ষোলো (১৬)' },
  { value: 17, it: 'diciassette', phoneticBn: 'দিচাস্সেত্তে', phoneticEn: 'dee-chahs-set-teh', en: 'seventeen', bn: 'সতেরো (১৭)' },
  { value: 18, it: 'diciotto', phoneticBn: 'দিচোত্তো', phoneticEn: 'dee-chot-toh', en: 'eighteen', bn: 'আঠারো (১৮)' },
  { value: 19, it: 'diciannove', phoneticBn: 'দিচান্নভে', phoneticEn: 'dee-chahn-noh-veh', en: 'nineteen', bn: 'উনিশ (১৯)' },
];

const TENS_META: Record<
  number,
  { base: string; dropped: string; bnFull: string; bnShort: string; enWord: string; phEn: string; phEnShort: string }
> = {
  20: { base: 'venti', dropped: 'vent', bnFull: 'ভেনতি', bnShort: 'ভেন্ত', enWord: 'twenty', phEn: 'vehn-tee', phEnShort: 'vehn-t' },
  30: { base: 'trenta', dropped: 'trent', bnFull: 'ত্রেনতা', bnShort: 'ত্রেন্ত', enWord: 'thirty', phEn: 'trehn-tah', phEnShort: 'trehn-t' },
  40: { base: 'quaranta', dropped: 'quarant', bnFull: 'কুয়ারানতা', bnShort: 'কুয়ারান্ত', enWord: 'forty', phEn: 'kwah-rahn-tah', phEnShort: 'kwah-rahn-t' },
  50: { base: 'cinquanta', dropped: 'cinquant', bnFull: 'চিনকুয়ানতা', bnShort: 'চিনকুয়ান্ত', enWord: 'fifty', phEn: 'cheen-kwahn-tah', phEnShort: 'cheen-kwahn-t' },
  60: { base: 'sessanta', dropped: 'sessant', bnFull: 'সেস্সানতা', bnShort: 'সেস্সান্ত', enWord: 'sixty', phEn: 'sehs-sahn-tah', phEnShort: 'sehs-sahn-t' },
  70: { base: 'settanta', dropped: 'settant', bnFull: 'সেত্তানতা', bnShort: 'সেত্তান্ত', enWord: 'seventy', phEn: 'seht-tahn-tah', phEnShort: 'seht-tahn-t' },
  80: { base: 'ottanta', dropped: 'ottant', bnFull: 'ওত্তানতা', bnShort: 'ওত্তান্ত', enWord: 'eighty', phEn: 'oht-tahn-tah', phEnShort: 'oht-tahn-t' },
  90: { base: 'novanta', dropped: 'novant', bnFull: 'নভানতা', bnShort: 'নভান্ত', enWord: 'ninety', phEn: 'noh-vahn-tah', phEnShort: 'noh-vahn-t' },
};

const TENS_BN_WORDS: Record<number, string> = {
  20: 'বিশ',
  21: 'একুশ', 22: 'বাইশ', 23: 'তেইশ', 24: 'চব্বিশ', 25: 'পঁচিশ', 26: 'ছাব্বিশ', 27: 'সাতাশ', 28: 'আঠাশ', 29: 'ঊনত্রিশ',
  30: 'ত্রিশ',
  31: 'একত্রিশ', 32: 'বত্রিশ', 33: 'তেত্রিশ', 34: 'চৌত্রিশ', 35: 'পঁয়ত্রিশ', 36: 'ছত্রিশ', 37: 'সাঁইত্রিশ', 38: 'আটত্রিশ', 39: 'ঊনচল্লিশ',
  40: 'চল্লিশ',
  41: 'একচল্লিশ', 42: 'বিয়াল্লিশ', 43: 'তেতাল্লিশ', 44: 'চুয়াল্লিশ', 45: 'পঁয়তাল্লিশ', 46: 'ছেচল্লিশ', 47: 'সাতচল্লিশ', 48: 'আটচল্লিশ', 49: 'ঊনপঞ্চাশ',
  50: 'পঞ্চাশ',
  51: 'একান্ন', 52: 'বাহান্ন', 53: 'তিপ্পান্ন', 54: 'চুয়ান্ন', 55: 'পঞ্চান্ন', 56: 'ছাপ্পান্ন', 57: 'সাতান্ন', 58: 'আটান্ন', 59: 'ঊনষাট',
  60: 'ষাট',
  61: 'একষট্টি', 62: 'বাষট্টি', 63: 'তেষট্টি', 64: 'চৌষট্টি', 65: 'পঁয়ষট্টি', 66: 'ছেষট্টি', 67: 'সাতষট্টি', 68: 'আটষট্টি', 69: 'ঊনসত্তর',
  70: 'সত্তর',
  71: 'একাত্তর', 72: 'বাহাত্তর', 73: 'তিয়াত্তর', 74: 'চুয়াত্তর', 75: 'পঁচাত্তর', 76: 'ছিয়াত্তর', 77: 'সাতাত্তর', 78: 'আটাত্তর', 79: 'ঊনআশি',
  80: 'আশি',
  81: 'একাশি', 82: 'বিরাশি', 83: 'তিরাশি', 84: 'চুরাশি', 85: 'পঁচাশি', 86: 'ছিয়াশি', 87: 'সাতাশি', 88: 'আটাশি', 89: 'ঊননব্বই',
  90: 'নব্বই',
  91: 'একানব্বই', 92: 'বিরানব্বই', 93: 'তিরানব্বই', 94: 'চুরানব্বই', 95: 'পঁচানব্বই', 96: 'ছিয়ানব্বই', 97: 'সাতানব্বই', 98: 'আটানব্বই', 99: 'নিরানব্বই',
  100: 'একশো',
};

function toBengaliDigits(n: number): string {
  return String(n)
    .split('')
    .map((ch) => ONES_BN_NUM[Number(ch)] ?? ch)
    .join('');
}

function resolveGroup(n: number): NumberItem['group'] {
  if (n <= 10) return '0-10';
  if (n <= 20) return '11-20';
  if (n <= 30) return '21-30';
  if (n <= 50) return '31-50';
  if (n <= 70) return '51-70';
  return '71-100';
}

function buildNumberExample(n: number, it: string, en: string, bnWord: string): { exampleIt: string; exampleTr: { bn: string; en: string } } {
  if (n === 0) {
    return {
      exampleIt: 'Oggi fa zero gradi fuori.',
      exampleTr: { bn: 'আজ বাইরে তাপমাত্রা শূন্য ডিগ্রি।', en: 'Today it is zero degrees outside.' },
    };
  }
  if (n === 1) {
    return {
      exampleIt: 'Vorrei un caffè e un biglietto, per favore.',
      exampleTr: { bn: 'দয়া করে একটি কফি ও একটি টিকিট দিন।', en: 'I would like one coffee and one ticket, please.' },
    };
  }
  if (n === 100) {
    return {
      exampleIt: 'Questo biglietto costa cento euro.',
      exampleTr: { bn: 'এই টিকিটের দাম একশো ইউরো।', en: 'This ticket costs one hundred euros.' },
    };
  }
  const templates = [
    {
      it: `Il treno parte tra ${it} minuti.`,
      bn: `ট্রেনটি ${bnWord} মিনিটের মধ্যে ছাড়বে।`,
      en: `The train leaves in ${en} minutes.`,
    },
    {
      it: `Questo libro costa ${it} euro.`,
      bn: `এই বইটির দাম ${bnWord} ইউরো।`,
      en: `This book costs ${en} euros.`,
    },
    {
      it: `Ho ${it} pagine da leggere oggi.`,
      bn: `আজ আমার ${bnWord} পৃষ্ঠা পড়ার আছে।`,
      en: `I have ${en} pages to read today.`,
    },
    {
      it: `L'autobus numero ${it} arriva presto.`,
      bn: `${bnWord} নম্বর বাসটি তাড়াতাড়ি আসছে।`,
      en: `Bus number ${en} arrives soon.`,
    },
  ];
  const chosen = templates[n % templates.length]!;
  return { exampleIt: chosen.it, exampleTr: { bn: chosen.bn, en: chosen.en } };
}

function buildNumberItem(n: number): NumberItem {
  const id = `num-${n}`;
  const group = resolveGroup(n);
  const bnDigits = toBengaliDigits(n);

  if (n <= 9) {
    const it = ONES_IT[n]!;
    const en = ONES_EN[n]!;
    const bnPlain = ONES_BN[n]!.replace(/\s*\(.+\)/, '');
    const ex = buildNumberExample(n, it, en, bnPlain);
    return {
      id,
      value: n,
      it,
      phoneticBn: ONES_PHONETIC_BN[n]!,
      phoneticEn: ONES_PHONETIC_EN[n]!,
      en,
      bn: ONES_BN[n]!,
      exampleIt: ex.exampleIt,
      exampleTr: ex.exampleTr,
      group,
    };
  }

  if (n <= 19) {
    const teen = TEENS.find((t) => t.value === n)!;
    const bnPlain = teen.bn.replace(/\s*\(.+\)/, '');
    const ex = buildNumberExample(n, teen.it, teen.en, bnPlain);
    return {
      id,
      value: n,
      it: teen.it,
      phoneticBn: teen.phoneticBn,
      phoneticEn: teen.phoneticEn,
      en: teen.en,
      bn: teen.bn,
      exampleIt: ex.exampleIt,
      exampleTr: ex.exampleTr,
      group,
    };
  }

  if (n === 100) {
    const ex = buildNumberExample(100, 'cento', 'one hundred', 'একশো');
    return {
      id,
      value: 100,
      it: 'cento',
      phoneticBn: 'চেন্তো',
      phoneticEn: 'chehn-toh',
      en: 'one hundred',
      bn: 'একশো (১০০)',
      exampleIt: ex.exampleIt,
      exampleTr: ex.exampleTr,
      group,
    };
  }

  const ten = Math.floor(n / 10) * 10;
  const unit = n % 10;
  const meta = TENS_META[ten]!;
  const bnWord = TENS_BN_WORDS[n] ?? bnDigits;

  const bnLabel = `সংখ্যা ${bnWord} (${bnDigits})`;

  if (unit === 0) {
    const ex = buildNumberExample(n, meta.base, meta.enWord, bnWord);
    return {
      id,
      value: n,
      it: meta.base,
      phoneticBn: meta.bnFull,
      phoneticEn: meta.phEn,
      en: meta.enWord,
      bn: bnLabel,
      exampleIt: ex.exampleIt,
      exampleTr: ex.exampleTr,
      group,
    };
  }

  // Drop the final vowel of the tens word before "uno" or "otto"
  const elides = unit === 1 || unit === 8;
  const unitIt = unit === 3 ? 'tré' : ONES_IT[unit]!;
  const it = `${elides ? meta.dropped : meta.base}${unitIt}`;
  const phoneticBn = `${elides ? meta.bnShort : meta.bnFull}-${ONES_PHONETIC_BN[unit]!}`;
  const phoneticEn = `${elides ? meta.phEnShort : meta.phEn}-${ONES_PHONETIC_EN[unit]!}`;
  const en = `${meta.enWord}-${ONES_EN[unit]!}`;
  const ex = buildNumberExample(n, it, en, bnWord);

  return {
    id,
    value: n,
    it,
    phoneticBn,
    phoneticEn,
    en,
    bn: bnLabel,
    exampleIt: ex.exampleIt,
    exampleTr: ex.exampleTr,
    group,
  };
}

/** Complete A1 Numbers inventory from 0 to 100 (101 items). */
export const A1_NUMBERS: NumberItem[] = Array.from({ length: 101 }, (_, i) => buildNumberItem(i));

export const A1_NUMBERS_REQUIRED_IDS: string[] = A1_NUMBERS.map((n) => n.id);

export const A1_NUMBER_RULES: NumberRule[] = [
  {
    id: 'num-rule-0-10',
    title: { bn: '০ থেকে ১০ — মৌলিক সংখ্যা', en: '0 to 10 — Base numbers' },
    range: '0–10',
    explanation: {
      bn: 'শূন্য থেকে দশ পর্যন্ত সংখ্যাগুলো সরাসরি মুখস্থ করতে হয়, কারণ বাকি সব সংখ্যা এগুলোর ওপর ভিত্তি করেই গঠিত হয়।',
      en: 'Learn zero through ten cleanly—every compound number up to 100 builds directly from these roots.',
    },
    examples: [
      { it: '0 = zero · 1 = uno · 2 = due · 3 = tre', tr: { bn: '০ থেকে ৩ পর্যন্ত মৌলিক রূপ', en: 'Zero through three' } },
      { it: '7 = sette · 8 = otto · 10 = dieci', tr: { bn: '৭, ৮ ও ১০ (দ্বিত্ব ব্যঞ্জনে জোর দিন)', en: 'Note doubled tt in sette and otto' } },
    ],
  },
  {
    id: 'num-rule-11-19',
    title: { bn: '১১ থেকে ১৯ — কিশোর সংখ্যা', en: '11 to 19 — Teens pattern' },
    range: '11–19',
    explanation: {
      bn: '১১ থেকে ১৬ পর্যন্ত সংখ্যার শেষে "-dici" থাকে (undici, dodici, ... sedici)। আর ১৭ থেকে ১৯-এ "dici-" শুরুতে বসে (diciassette, diciotto, diciannove)।',
      en: 'Numbers 11–16 end in -dici (undici…sedici). From 17–19 the root flips to the front: diciassette, diciotto, diciannove.',
    },
    examples: [
      { it: '11 undici · 14 quattordici · 16 sedici', tr: { bn: 'শেষে -dici যুক্ত রূপ', en: 'Ending in -dici' } },
      { it: '17 diciassette · 18 diciotto · 19 diciannove', tr: { bn: 'শুরুতে dicia- / dici- যুক্ত রূপ', en: 'Starting with dicia-/dici-' } },
    ],
  },
  {
    id: 'num-rule-tens',
    title: { bn: 'দশক (২০, ৩০, ৪০ ... ১০০)', en: 'Tens (20, 30, 40 ... 100)' },
    range: '20–100',
    explanation: {
      bn: '২০ হলো venti; ৩০ থেকে ৯০ পর্যন্ত বেশিরভাগ দশকের শেষে "-anta" বসে (trenta, quaranta, cinquanta, sessanta, settanta, ottanta, novanta), আর ১০০ হলো cento।',
      en: '20 is venti; 30–90 end in -anta (trenta, quaranta, cinquanta, sessanta, settanta, ottanta, novanta); 100 is cento.',
    },
    examples: [
      { it: '20 venti · 30 trenta · 50 cinquanta', tr: { bn: 'বিশ, ত্রিশ, পঞ্চাশ', en: 'Twenty, thirty, fifty' } },
      { it: '80 ottanta · 90 novanta · 100 cento', tr: { bn: 'আশি, নব্বই, একশো', en: 'Eighty, ninety, one hundred' } },
    ],
  },
  {
    id: 'num-rule-elision',
    title: { bn: 'uno ও otto-র আগে স্বরবর্ণ বাদ (Elision)', en: 'Drop final vowel before uno & otto' },
    range: '21, 28, 31, 38...',
    explanation: {
      bn: 'দশকের সাথে "uno" (১) বা "otto" (৮) যোগ হলে দশকের শেষ স্বরবর্ণ (i বা a) বাদ পড়ে: venti + uno = ventuno (ভেনতুনো), trenta + otto = trentotto (ত্রেনতোত্তো)।',
      en: 'When adding uno (1) or otto (8) to a ten, drop the final vowel of the ten: ventuno, ventotto, trentuno, trentotto.',
    },
    examples: [
      { it: '21 = ventuno (× ventiuno)', tr: { bn: 'venti + uno → শেষ i বাদ', en: 'venti + uno drops i', it: 'venti + uno perde la i' } },
      { it: '48 = quarantotto (× quarantaotto)', tr: { bn: 'quaranta + otto → শেষ a বাদ', en: 'quaranta + otto drops a', it: 'quaranta + otto perde la a' } },
    ],
  },
  {
    id: 'num-rule-accent',
    title: { bn: 'সংযুক্ত সংখ্যায় "-tré" অ্যাকসেন্ট চিহ্ন', en: 'Accent mark on compound -tré' },
    range: '23, 33, 43...',
    explanation: {
      bn: 'একক সংখ্যা "tre"-তে অ্যাকসেন্ট নেই, কিন্তু কোনো দশকের সাথে যুক্ত হলে শেষে অ্যাকসেন্ট চিহ্ন (é) বসে: ventitré, trentatré, novantatré।',
      en: 'Standalone 3 (tre) has no accent, but compound numbers ending in 3 always take an acute accent: ventitré, trentatré.',
    },
    examples: [
      { it: '3 = tre · 23 = ventitré · 53 = cinquantatré', tr: { bn: 'যৌগিক ৩-এ চূড়ান্ত জোর দিতে accent বসে', en: 'Compound -tré takes é' } },
    ],
  },
];

function buildNumberQuestion(item: NumberItem, tier: 'core' | 'extended'): AcademyExamQuestion {
  const n = item.value;
  // Deterministic 3 distinct realistic distractors near n or sharing tens/units pattern
  const poolOffsets = [1, -1, 10, -10, 2, -2, 11, -9, 3, -3, 20, -20];
  const candidateNums: number[] = [];
  for (const off of poolOffsets) {
    const c = n + off;
    if (c >= 0 && c <= 100 && c !== n && !candidateNums.includes(c)) {
      candidateNums.push(c);
    }
    if (candidateNums.length >= 6) break;
  }

  // Also add tricky lookalikes for teens & elided numbers (e.g. 12 vs 20, 21 vs 31)
  const swapDigit = n >= 10 && n <= 99 ? (n % 10) * 10 + Math.floor(n / 10) : -1;
  if (swapDigit >= 0 && swapDigit <= 100 && swapDigit !== n && !candidateNums.includes(swapDigit)) {
    candidateNums.unshift(swapDigit);
  }

  const distractors = candidateNums.slice(0, 3).map((val) => A1_NUMBERS[val]!.it);
  const options = [item.it, ...distractors];

  return {
    id: `exam-num-${n}`,
    moduleId: 'numbers',
    tier,
    prompt: {
      bn: `সংখ্যা ${n} (${item.bn}) এর সঠিক ইতালিয়ান বানান কোনটি?`,
      en: `Select the correct Italian spelling for the number ${n} (${item.en}):`,
      it: `Seleziona la grafia italiana corretta per il numero ${n}:`,
    },
    it: `${n}`,
    audioIt: item.it,
    options,
    answer: 0,
    explanation: {
      bn: `${n} = "${item.it}" (উচ্চারণ: ${item.phoneticBn})। উদাহরণ: ${item.exampleIt} — ${item.exampleTr.bn}`,
      en: `${n} = "${item.it}" (${item.phoneticEn}). Example: ${item.exampleIt} — ${item.exampleTr.en}`,
      it: `${n} = "${item.it}" (${item.phoneticEn}). Esempio: ${item.exampleIt}`,
    },
  };
}

/** Core 20 numbers: 1 through 20 (all 20 included and randomized on every attempt). */
export const A1_NUMBERS_CORE_20_QUESTIONS: AcademyExamQuestion[] = A1_NUMBERS.filter(
  (item) => item.value >= 1 && item.value <= 20,
).map((item) => buildNumberQuestion(item, 'core'));

/** Remaining 80 numbers (21–100, plus 0 so all 0–100 can be tested); 10 selected randomly per attempt. */
export const A1_NUMBERS_EXTENDED_QUESTIONS: AcademyExamQuestion[] = A1_NUMBERS.filter(
  (item) => item.value === 0 || item.value >= 21,
).map((item) => buildNumberQuestion(item, 'extended'));
