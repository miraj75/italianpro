import type { Tr } from '../types';
import type { AcademyExamQuestion, AlphabetLetter, AlphabetRuleNote } from './types';

/**
 * The 21 standard letters of the Italian alphabet (Alfabeto italiano).
 * Foreign letters (J, K, W, X, Y) are covered separately in A1_FOREIGN_LETTERS_NOTE.
 */
export const A1_ALPHABET_LETTERS: AlphabetLetter[] = [
  {
    id: 'alpha-a',
    letter: 'A',
    lower: 'a',
    italianName: 'a',
    phoneticEn: 'ah (as in "father")',
    phoneticBn: 'আ (স্পষ্ট "আ" ধ্বনি)',
    guide: {
      bn: 'মুখ খুলে স্পষ্ট ও পরিষ্কার "আ" উচ্চারণ করুন, ইংরেজি "father"-এর মতো।',
      en: 'Pronounced open and clear as "ah", never like English "ay".',
    },
    exampleIt: 'Amico',
    exampleTr: { bn: 'বন্ধু', en: 'Friend' },
    examplePhoneticBn: 'আ-মি-কো',
    examplePhoneticEn: 'ah-MEE-koh',
    isVowel: true,
  },
  {
    id: 'alpha-b',
    letter: 'B',
    lower: 'b',
    italianName: 'bi',
    phoneticEn: 'bee (b as in "boy")',
    phoneticBn: 'বি (ব — নরম কিন্তু স্পষ্ট)',
    guide: {
      bn: 'ইংরেজি "b"-এর মতোই দুই ঠোঁট মিলিয়ে নরম "ব" উচ্চারণ হয়; দ্বিত্ব "bb" হলে একটু জোর দিয়ে বলুন।',
      en: 'Soft, unaspirated "b" sound; hold slightly longer when doubled (bb).',
    },
    exampleIt: 'Buongiorno',
    exampleTr: { bn: 'শুভ সকাল', en: 'Good morning' },
    examplePhoneticBn: 'বুওন-জোর-নো',
    examplePhoneticEn: 'bwon-JOR-noh',
  },
  {
    id: 'alpha-c',
    letter: 'C',
    lower: 'c',
    italianName: 'ci',
    phoneticEn: 'chee ("ch" before e/i; "k" before a/o/u)',
    phoneticBn: 'চি (e/i-এর আগে "চ", a/o/u-এর আগে "ক")',
    guide: {
      bn: 'অক্ষরটির নাম "চি"। শব্দের ভেতরে e বা i-এর আগে "চ" (ciao) এবং a, o, u-এর আগে "ক" (casa) উচ্চারণ হয়।',
      en: 'Named "chee". Sounds like "ch" before e/i (ciao), and hard "k" before a/o/u (casa).',
    },
    exampleIt: 'Ciao',
    exampleTr: { bn: 'হ্যালো / বিদায়', en: 'Hi / Bye' },
    examplePhoneticBn: 'চাও',
    examplePhoneticEn: 'chow',
  },
  {
    id: 'alpha-d',
    letter: 'D',
    lower: 'd',
    italianName: 'di',
    phoneticEn: 'dee (dental "d", tongue behind upper teeth)',
    phoneticBn: 'দি (দ — উপরের দাঁতের পেছনে জিভ লাগিয়ে)',
    guide: {
      bn: 'অক্ষরটির নাম "দি"। বাংলার "দ"-এর মতো জিভ দাঁতের পেছনে ছুঁইয়ে উচ্চারণ করুন।',
      en: 'Named "dee". Articulated cleanly with the tongue touching the back of the upper teeth.',
    },
    exampleIt: 'Domani',
    exampleTr: { bn: 'আগামীকাল', en: 'Tomorrow' },
    examplePhoneticBn: 'দো-মা-নি',
    examplePhoneticEn: 'doh-MAH-nee',
  },
  {
    id: 'alpha-e',
    letter: 'E',
    lower: 'e',
    italianName: 'e',
    phoneticEn: 'eh (short "e" as in "bet" or close "ey")',
    phoneticBn: 'এ (স্পষ্ট "এ" ধ্বনি)',
    guide: {
      bn: 'ইতালিয়ানে E সবসময় "এ" বা সামান্য খোলা "অ্যা/এ"-এর মতো শোনায়, কখনোই "ই" হয় না।',
      en: 'Always a pure "eh" or close "e" vowel; never glides into "ee" as in English.',
    },
    exampleIt: 'Espresso',
    exampleTr: { bn: 'এসপ্রেসো কফি', en: 'Espresso coffee' },
    examplePhoneticBn: 'এস-প্রেস-সো',
    examplePhoneticEn: 'ehs-PREHS-soh',
    isVowel: true,
  },
  {
    id: 'alpha-f',
    letter: 'F',
    lower: 'f',
    italianName: 'effe',
    phoneticEn: 'ef-feh (f as in "food")',
    phoneticBn: 'এফ্-ফে (ফ — উপরের দাঁত ও নিচের ঠোঁট দিয়ে)',
    guide: {
      bn: 'অক্ষরটির নাম "এফ্-ফে"। উপরের দাঁত নিচের ঠোঁটে হালকা ছুঁইয়ে ফুঁ দিয়ে "ফ" উচ্চারণ হয়।',
      en: 'Named "ef-fe". Clear labiodental "f" sound identical to English "f".',
    },
    exampleIt: 'Famiglia',
    exampleTr: { bn: 'পরিবার', en: 'Family' },
    examplePhoneticBn: 'ফা-মিল্-য়া',
    examplePhoneticEn: 'fah-MEEL-yah',
  },
  {
    id: 'alpha-g',
    letter: 'G',
    lower: 'g',
    italianName: 'gi',
    phoneticEn: 'jee ("j" before e/i; hard "g" before a/o/u)',
    phoneticBn: 'জি (e/i-এর আগে "জ", a/o/u-এর আগে "গ")',
    guide: {
      bn: 'নাম "জি"। e/i-এর আগে "জ" (gelato), আর a/o/u-এর আগে শক্ত "গ" (gatto) উচ্চারণ হয়।',
      en: 'Named "jee". Soft "j" before e/i (gelato), hard "g" before a/o/u (gatto).',
    },
    exampleIt: 'Gelato',
    exampleTr: { bn: 'আইসক্রিম', en: 'Ice cream' },
    examplePhoneticBn: 'জে-লা-তো',
    examplePhoneticEn: 'jeh-LAH-toh',
  },
  {
    id: 'alpha-h',
    letter: 'H',
    lower: 'h',
    italianName: 'acca',
    phoneticEn: 'ahk-kah (always silent in Italian)',
    phoneticBn: 'আক্-কা (শব্দে অনুচ্চারিত থাকে)',
    guide: {
      bn: 'নাম "আক্-কা"। ইতালিয়ানে H কখনোই উচ্চারিত হয় না; ho="ও", hotel="ওতেল", এবং ch/gh-তে বর্ণের উচ্চারণ শক্ত করে।',
      en: 'Named "akka". Always silent in Italian; also hardens c and g before e/i (chi, spaghetti).',
    },
    exampleIt: 'Hotel',
    exampleTr: { bn: 'হোটেল (উচ্চারণ: ওতেল)', en: 'Hotel (pronounced o-tel)' },
    examplePhoneticBn: 'ও-তেল',
    examplePhoneticEn: 'oh-TEHL',
  },
  {
    id: 'alpha-i',
    letter: 'I',
    lower: 'i',
    italianName: 'i',
    phoneticEn: 'ee (as in "machine")',
    phoneticBn: 'ই (হ্রস্ব/স্পষ্ট "ই" ধ্বনি)',
    guide: {
      bn: 'সবসময় পরিষ্কার "ই" উচ্চারণ হয়, ইংরেজি "machine"-এর মতো; কখনো "আই" হয় না।',
      en: 'Always sounds like "ee" in "see" or "machine", never like English "eye".',
    },
    exampleIt: 'Italia',
    exampleTr: { bn: 'ইতালি', en: 'Italy' },
    examplePhoneticBn: 'ই-তা-লি-আ',
    examplePhoneticEn: 'ee-TAH-lyah',
    isVowel: true,
  },
  {
    id: 'alpha-l',
    letter: 'L',
    lower: 'l',
    italianName: 'elle',
    phoneticEn: 'el-leh (clear light "l")',
    phoneticBn: 'এল্-লে (হালকা স্পষ্ট "ল")',
    guide: {
      bn: 'অক্ষরটির নাম "এল্-লে"। জিভের আগা উপরের দাঁতের গোড়ায় লাগিয়ে হালকা "ল" উচ্চারণ করুন।',
      en: 'Named "el-le". Always a crisp, light "l" (never dark like in English "ball").',
    },
    exampleIt: 'Libro',
    exampleTr: { bn: 'বই', en: 'Book' },
    examplePhoneticBn: 'লি-ব্রো',
    examplePhoneticEn: 'LEE-broh',
  },
  {
    id: 'alpha-m',
    letter: 'M',
    lower: 'm',
    italianName: 'emme',
    phoneticEn: 'em-meh (m as in "mother")',
    phoneticBn: 'এম্-মে (স্পষ্ট "ম")',
    guide: {
      bn: 'অক্ষরটির নাম "এম্-মে"। বাংলার "ম"-এর মতো দুই ঠোঁট মিলিয়ে উচ্চারণ হয়।',
      en: 'Named "em-me". Clear bilabial "m" sound.',
    },
    exampleIt: 'Madre',
    exampleTr: { bn: 'মা', en: 'Mother' },
    examplePhoneticBn: 'মা-দ্রে',
    examplePhoneticEn: 'MAH-dreh',
  },
  {
    id: 'alpha-n',
    letter: 'N',
    lower: 'n',
    italianName: 'enne',
    phoneticEn: 'en-neh (n as in "no")',
    phoneticBn: 'এন্-নে (স্পষ্ট "ন")',
    guide: {
      bn: 'অক্ষরটির নাম "এন্-নে"। শব্দের শেষে ও মাঝে পরিষ্কার "ন" উচ্চারিত হয়।',
      en: 'Named "en-ne". Crisp dental "n" sound.',
    },
    exampleIt: 'Notte',
    exampleTr: { bn: 'রাত', en: 'Night' },
    examplePhoneticBn: 'নোত্-তে',
    examplePhoneticEn: 'NOHT-teh',
  },
  {
    id: 'alpha-o',
    letter: 'O',
    lower: 'o',
    italianName: 'o',
    phoneticEn: 'oh / aw (pure rounded "o")',
    phoneticBn: 'ও (গোল ঠোঁটে "ও" ধ্বনি)',
    guide: {
      bn: 'ঠোঁট গোল করে খাঁটি "ও" উচ্চারণ করুন, শেষে "উ" যোগ করবেন না।',
      en: 'Pure rounded "oh" sound without a trailing "oo" glide.',
    },
    exampleIt: 'Oggi',
    exampleTr: { bn: 'আজ', en: 'Today' },
    examplePhoneticBn: 'ওজ্-জি',
    examplePhoneticEn: 'OHJ-jee',
    isVowel: true,
  },
  {
    id: 'alpha-p',
    letter: 'P',
    lower: 'p',
    italianName: 'pi',
    phoneticEn: 'pee (unaspirated "p")',
    phoneticBn: 'পি (প — কম বাতাস ছেড়ে নরম "প")',
    guide: {
      bn: 'নাম "পি"। ইংরেজি "p"-এর মতো জোরালো ফুঁ নয়, বাংলার "প"-এর মতো নরমভাবে উচ্চারণ করুন।',
      en: 'Named "pee". Unaspirated "p" without a strong puff of air.',
    },
    exampleIt: 'Pizza',
    exampleTr: { bn: 'পিৎজা', en: 'Pizza' },
    examplePhoneticBn: 'পিত্-সা',
    examplePhoneticEn: 'PEET-sah',
  },
  {
    id: 'alpha-q',
    letter: 'Q',
    lower: 'q',
    italianName: 'cu',
    phoneticEn: 'koo (always followed by u: qu = kw)',
    phoneticBn: 'কু (সবসময় u-এর সাথে বসে: qu = কুয়)',
    guide: {
      bn: 'নাম "কু"। ইতালিয়ানে Q-এর পরে সবসময় U বসে এবং "কুয় / kw" এর মতো উচ্চারণ হয় (quattro)।',
      en: 'Named "koo". Always followed by "u" to make a "kw" sound (quattro, qui).',
    },
    exampleIt: 'Quattro',
    exampleTr: { bn: 'চার (৪)', en: 'Four' },
    examplePhoneticBn: 'কুয়াত্-ত্রো',
    examplePhoneticEn: 'KWAHT-troh',
  },
  {
    id: 'alpha-r',
    letter: 'R',
    lower: 'r',
    italianName: 'erre',
    phoneticEn: 'er-reh (rolled/tapped "r")',
    phoneticBn: 'এর্-রে (জিভ কাঁপিয়ে বা হালকা টোকা দিয়ে "র")',
    guide: {
      bn: 'নাম "এর্-রে"। একক R-এ জিভের হালকা টোকা (Roma), আর দ্বিত্ব RR-এ জিভ একটু কাঁপিয়ে উচ্চারণ হয় (terra)।',
      en: 'Named "er-re". Single r is a quick tap; double rr is rolled cleanly.',
    },
    exampleIt: 'Roma',
    exampleTr: { bn: 'রোম', en: 'Rome' },
    examplePhoneticBn: 'রো-মা',
    examplePhoneticEn: 'ROH-mah',
  },
  {
    id: 'alpha-s',
    letter: 'S',
    lower: 's',
    italianName: 'esse',
    phoneticEn: 'es-seh ("s" as in sun, or "z" between vowels)',
    phoneticBn: 'এস্-সে ("স", দুই স্বরবর্ণের মাঝে নরম "জ")',
    guide: {
      bn: 'নাম "এস্-সে"। সাধারণত "স" (sole), তবে দুই স্বরবর্ণের মাঝে প্রায়ই নরম "জ" (casa, rosa) শোনায়।',
      en: 'Named "es-se". Sharp "s" at word start (sole), often voiced like "z" between vowels (casa).',
    },
    exampleIt: 'Sole',
    exampleTr: { bn: 'সূর্য', en: 'Sun' },
    examplePhoneticBn: 'সো-লে',
    examplePhoneticEn: 'SOH-leh',
  },
  {
    id: 'alpha-t',
    letter: 'T',
    lower: 't',
    italianName: 'ti',
    phoneticEn: 'tee (soft dental "t", tongue behind teeth)',
    phoneticBn: 'তি (ত — বাতাস ছাড়া নরম "ত")',
    guide: {
      bn: 'নাম "তি"। বাংলার "ত"-এর মতো উপরের দাঁতে জিভ লাগিয়ে নরম "ত" বলুন, "ট" নয়।',
      en: 'Named "tee". Crisp unaspirated dental "t" (tongue against the upper teeth).',
    },
    exampleIt: 'Treno',
    exampleTr: { bn: 'ট্রেন', en: 'Train' },
    examplePhoneticBn: 'ত্রে-নো',
    examplePhoneticEn: 'TREH-noh',
  },
  {
    id: 'alpha-u',
    letter: 'U',
    lower: 'u',
    italianName: 'u',
    phoneticEn: 'oo (as in "moon")',
    phoneticBn: 'উ (গোল ঠোঁটে "উ" ধ্বনি)',
    guide: {
      bn: 'সবসময় "উ" উচ্চারণ হয়, যেমন "uno"। কখনোই ইংরেজি "ইউ" উচ্চারণ হয় না।',
      en: 'Always sounds like "oo" in "food" (uno), never like English "you".',
    },
    exampleIt: 'Uno',
    exampleTr: { bn: 'এক (১)', en: 'One' },
    examplePhoneticBn: 'উ-নো',
    examplePhoneticEn: 'OO-noh',
    isVowel: true,
  },
  {
    id: 'alpha-v',
    letter: 'V',
    lower: 'v',
    italianName: 'vu / vi',
    phoneticEn: 'voo / vee (v as in "vine")',
    phoneticBn: 'ভু / ভি (ভ — উপরের দাঁত নিচের ঠোঁটে লাগিয়ে)',
    guide: {
      bn: 'অক্ষরটির নাম "ভু" (অথবা "ভি")। উপরের দাঁত নিচের ঠোঁটে আলতো ছুঁইয়ে কম্পিত "ভ" ধ্বনি হয়।',
      en: 'Named "voo" or "vee". Voiced "v" sound.',
    },
    exampleIt: 'Vino',
    exampleTr: { bn: 'ওয়াইন', en: 'Wine' },
    examplePhoneticBn: 'ভি-নো',
    examplePhoneticEn: 'VEE-noh',
  },
  {
    id: 'alpha-z',
    letter: 'Z',
    lower: 'z',
    italianName: 'zeta',
    phoneticEn: 'dzeh-tah ("ts" or "dz" sound)',
    phoneticBn: 'জ়ে-তা ("ৎস" বা "দ্‌জ" ধ্বনি)',
    guide: {
      bn: 'নাম "জ়ে-তা"। শব্দভেদে "ৎস" (grazie, pizza) অথবা "দ্‌জ" (zaino, zero) উচ্চারিত হয়।',
      en: 'Named "dzeta". Pronounced either "ts" (grazie, pizza) or "dz" (zero, zaino).',
    },
    exampleIt: 'Zaino',
    exampleTr: { bn: 'ব্যাকপ্যাক', en: 'Backpack' },
    examplePhoneticBn: 'দজাই-নো',
    examplePhoneticEn: 'DZAY-noh',
  },
];

export const A1_ALPHABET_REQUIRED_IDS: string[] = A1_ALPHABET_LETTERS.map((l) => l.id);

export const A1_FOREIGN_LETTERS: { letter: string; italianName: string; exampleIt: string; note: Tr }[] = [
  { letter: 'J', italianName: 'i lunga', exampleIt: 'jeans', note: { bn: 'বিদেশি শব্দে ব্যবহৃত (ই-লুঙ্গা)', en: 'Foreign loanwords (called i lunga)' } },
  { letter: 'K', italianName: 'cappa', exampleIt: 'kiwi', note: { bn: 'বিদেশি শব্দে "ক" ধ্বনি (কাপ্পা)', en: 'Foreign loanwords (called cappa)' } },
  { letter: 'W', italianName: 'doppia vu', exampleIt: 'weekend', note: { bn: 'বিদেশি শব্দে ব্যবহৃত (দোপ্পিয়া ভু)', en: 'Foreign loanwords (called doppia vu)' } },
  { letter: 'X', italianName: 'ics', exampleIt: 'taxi', note: { bn: 'বিদেশি শব্দে "ক্স" ধ্বনি (ইক্স)', en: 'Foreign loanwords (called ics)' } },
  { letter: 'Y', italianName: 'ipsilon', exampleIt: 'yogurt', note: { bn: 'বিদেশি শব্দে ব্যবহৃত (ইপসিলন)', en: 'Foreign loanwords (called ipsilon)' } },
];

export const A1_ALPHABET_DIGRAPHS: AlphabetRuleNote[] = [
  {
    id: 'digraph-ce-ci',
    pattern: 'ce / ci',
    soundEn: 'ch (as in "cheese")',
    soundBn: 'চে / চি',
    exampleIt: 'cena, ciao',
    exampleTr: { bn: 'রাতের খাবার, হ্যালো', en: 'dinner, hi' },
    explanation: {
      bn: 'e বা i-এর আগে c সবসময় নরম "চ" হয়।',
      en: 'c before e or i always sounds soft like "ch".',
    },
  },
  {
    id: 'digraph-che-chi',
    pattern: 'che / chi',
    soundEn: 'keh / kee',
    soundBn: 'কে / কি',
    exampleIt: 'chiave, perché',
    exampleTr: { bn: 'চাবি, কেন', en: 'key, why' },
    explanation: {
      bn: 'e/i-এর আগে "ক" ধ্বনি রাখতে c ও e/i-এর মাঝে অনুচ্চারিত h বসে।',
      en: 'Silent h keeps c hard ("k") before e or i.',
    },
  },
  {
    id: 'digraph-ge-gi',
    pattern: 'ge / gi',
    soundEn: 'jeh / jee',
    soundBn: 'জে / জি',
    exampleIt: 'gelato, giorno',
    exampleTr: { bn: 'আইসক্রিম, দিন', en: 'ice cream, day' },
    explanation: {
      bn: 'e বা i-এর আগে g সবসময় নরম "জ" হয়।',
      en: 'g before e or i sounds soft like "j".',
    },
  },
  {
    id: 'digraph-ghe-ghi',
    pattern: 'ghe / ghi',
    soundEn: 'geh / gee (hard g)',
    soundBn: 'গে / গি',
    exampleIt: 'spaghetti, ghiaccio',
    exampleTr: { bn: 'স্প্যাগেটি, বরফ', en: 'spaghetti, ice' },
    explanation: {
      bn: 'e/i-এর আগে শক্ত "গ" রাখতে g-এর পর অনুচ্চারিত h বসে।',
      en: 'Silent h keeps g hard before e or i.',
    },
  },
  {
    id: 'digraph-gn-gl',
    pattern: 'gn / gli',
    soundEn: 'ny (canyon) / lly (million)',
    soundBn: 'ন্য / ল্যি',
    exampleIt: 'bagno, famiglia',
    exampleTr: { bn: 'বাথরুম, পরিবার', en: 'bathroom, family' },
    explanation: {
      bn: 'gn = "ন্য" (বা-ন্যো) এবং gli = নরম "ল্যি" (ফা-মিল্-য়া)।',
      en: 'gn sounds like "ny" in canyon; gli like "lli" in million.',
    },
  },
  {
    id: 'digraph-sc',
    pattern: 'sce / sci',
    soundEn: 'sheh / shee',
    soundBn: 'শে / শি',
    exampleIt: 'pesce, uscire',
    exampleTr: { bn: 'মাছ, বের হওয়া', en: 'fish, to go out' },
    explanation: {
      bn: 'sc + e/i = "শ" ধ্বনি (পে-শে)। তবে sc + a/o/u = "স্ক" (scuola)।',
      en: 'sc before e/i sounds like "sh"; before a/o/u it is "sk".',
    },
  },
];

const AUDIO_MATCH_POOL: AcademyExamQuestion[] = A1_ALPHABET_LETTERS.map((item, idx) => {
  const otherLetters = A1_ALPHABET_LETTERS.filter((other) => other.id !== item.id);
  const distractors = [
    otherLetters[(idx * 3 + 1) % otherLetters.length]!.letter,
    otherLetters[(idx * 5 + 7) % otherLetters.length]!.letter,
    otherLetters[(idx * 7 + 11) % otherLetters.length]!.letter,
  ];
  const uniqueOpts = Array.from(new Set([item.letter, ...distractors]));
  while (uniqueOpts.length < 4) {
    const candidate = otherLetters[(idx + uniqueOpts.length) % otherLetters.length]!.letter;
    if (!uniqueOpts.includes(candidate)) uniqueOpts.push(candidate);
  }
  return {
    id: `exam-alpha-${item.id}`,
    moduleId: 'alphabet',
    prompt: {
      bn: 'অডিওটি শুনুন এবং উচ্চারণ ইঙ্গিত মিলিয়ে সঠিক ইতালিয়ান বর্ণটি বেছে নিন:',
      en: 'Listen to the Italian letter audio and select the matching letter:',
      it: 'Ascolta l’audio e seleziona la lettera italiana corrispondente:',
    },
    it: '🔊 ?',
    phoneticCue: {
      bn: `🔊 উচ্চারণ: "${item.phoneticBn}"`,
      en: `🔊 "${item.phoneticEn}"`,
      it: '🔊 Ascolta il suono',
    },
    audioIt: `${item.italianName}. ${item.exampleIt}`,
    options: uniqueOpts.slice(0, 4),
    answer: 0,
    explanation: {
      bn: `বর্ণ "${item.letter}"-এর নাম "${item.italianName}" (${item.phoneticBn})। উদাহরণ: ${item.exampleIt} = ${item.exampleTr.bn}।`,
      en: `Letter "${item.letter}" is pronounced "${item.italianName}" (${item.phoneticEn}). Example: ${item.exampleIt} = ${item.exampleTr.en}.`,
      it: `La lettera "${item.letter}" si pronuncia "${item.italianName}" (${item.phoneticEn}). Esempio: ${item.exampleIt}.`,
    },
  };
});

const CASE_MATCH_POOL: AcademyExamQuestion[] = A1_ALPHABET_LETTERS.map((item, idx) => {
  const otherLetters = A1_ALPHABET_LETTERS.filter((other) => other.id !== item.id);
  const distractors = [
    otherLetters[(idx * 2 + 3) % otherLetters.length]!.lower,
    otherLetters[(idx * 4 + 5) % otherLetters.length]!.lower,
    otherLetters[(idx * 6 + 9) % otherLetters.length]!.lower,
  ];
  const uniqueOpts = Array.from(new Set([item.lower, ...distractors]));
  while (uniqueOpts.length < 4) {
    const candidate = otherLetters[(idx + uniqueOpts.length) % otherLetters.length]!.lower;
    if (!uniqueOpts.includes(candidate)) uniqueOpts.push(candidate);
  }
  return {
    id: `exam-alpha-case-${item.id}`,
    moduleId: 'alphabet',
    prompt: {
      bn: `বড় হাতের বর্ণ "${item.letter}"-এর সঠিক ছোট হাতের (lowercase) রূপ কোনটি?`,
      en: `Match uppercase letter "${item.letter}" to its lowercase form:`,
    },
    it: `${item.letter} → ?`,
    audioIt: item.italianName,
    options: uniqueOpts.slice(0, 4),
    answer: 0,
    explanation: {
      bn: `বড় হাতের ${item.letter} ও ছোট হাতের ${item.lower} একই বর্ণ (ইতালিয়ান নাম: ${item.italianName})।`,
      en: `Uppercase ${item.letter} pairs with lowercase ${item.lower} (pronounced "${item.italianName}").`,
    },
  };
});

const PRONUNCIATION_NAME_POOL: AcademyExamQuestion[] = A1_ALPHABET_LETTERS.filter(
  (l) => l.italianName.length >= 2,
).map((item, idx, arr) => {
  const others = arr.filter((other) => other.id !== item.id);
  const distractors = [
    others[(idx * 2 + 1) % others.length]!.italianName,
    others[(idx * 3 + 4) % others.length]!.italianName,
    others[(idx * 5 + 7) % others.length]!.italianName,
  ];
  const uniqueOpts = Array.from(new Set([item.italianName, ...distractors]));
  while (uniqueOpts.length < 4) {
    const candidate = others[(idx + uniqueOpts.length) % others.length]!.italianName;
    if (!uniqueOpts.includes(candidate)) uniqueOpts.push(candidate);
  }
  return {
    id: `exam-alpha-name-${item.id}`,
    moduleId: 'alphabet',
    prompt: {
      bn: `ইতালিয়ান বর্ণ "${item.letter}" (${item.lower})-এর সঠিক ইতালিয়ান উচ্চারণ/নাম কোনটি?`,
      en: `Which is the correct Italian letter name/pronunciation for "${item.letter}"?`,
    },
    it: `${item.letter} ${item.lower}`,
    audioIt: item.italianName,
    options: uniqueOpts.slice(0, 4),
    answer: 0,
    explanation: {
      bn: `"${item.letter}"-এর ইতালিয়ান উচ্চারণ "${item.italianName}" — বাংলায় ${item.phoneticBn}।`,
      en: `"${item.letter}" is called "${item.italianName}" (${item.phoneticEn}).`,
    },
  };
});

const EXAMPLE_WORD_POOL: AcademyExamQuestion[] = A1_ALPHABET_LETTERS.map((item, idx) => {
  const others = A1_ALPHABET_LETTERS.filter((other) => other.id !== item.id);
  const pickedLetters = [item];
  const candidateSeeds = [
    others[(idx * 3 + 2) % others.length]!,
    others[(idx * 5 + 6) % others.length]!,
    others[(idx * 7 + 8) % others.length]!,
    ...others,
  ];
  for (const cand of candidateSeeds) {
    if (pickedLetters.length >= 4) break;
    const candEn = cand.examplePhoneticEn ?? cand.phoneticEn;
    if (
      !pickedLetters.some(
        (p) =>
          p.id === cand.id ||
          p.examplePhoneticBn === cand.examplePhoneticBn ||
          (p.examplePhoneticEn ?? p.phoneticEn) === candEn,
      )
    ) {
      pickedLetters.push(cand);
    }
  }
  const bnOpts = pickedLetters.map((l) => l.examplePhoneticBn);
  const enOpts = pickedLetters.map((l) => l.examplePhoneticEn ?? l.phoneticEn);
  const itemPhEn = item.examplePhoneticEn ?? item.phoneticEn;
  return {
    id: `exam-alpha-word-${item.id}`,
    moduleId: 'alphabet',
    prompt: {
      bn: `উদাহরণ শব্দ "${item.exampleIt}" (${item.exampleTr.bn})-এর সঠিক উচ্চারণ কোনটি?`,
      en: `Select the correct pronunciation for example word "${item.exampleIt}" (${item.exampleTr.en}):`,
      it: `Seleziona la pronuncia corretta per "${item.exampleIt}":`,
    },
    it: item.exampleIt,
    audioIt: item.exampleIt,
    options: enOpts,
    localizedOptions: {
      bn: bnOpts,
      en: enOpts,
      it: enOpts,
    },
    answer: 0,
    explanation: {
      bn: `"${item.exampleIt}"-এর উচ্চারণ হলো "${item.examplePhoneticBn}" (অর্থ: ${item.exampleTr.bn})।`,
      en: `"${item.exampleIt}" is pronounced "${itemPhEn}" (${item.exampleTr.en}).`,
      it: `"${item.exampleIt}" si pronuncia "${itemPhEn}".`,
    },
  };
});

/**
 * Rich multi-format Alphabet Sound & Literacy Examination pool covering:
 * 1) Audio letter identification, 2) Uppercase/lowercase matching,
 * 3) Italian letter pronunciation names, and 4) Example word pronunciation.
 */
export const A1_ALPHABET_EXAM_POOL: AcademyExamQuestion[] = [
  ...AUDIO_MATCH_POOL,
  ...CASE_MATCH_POOL,
  ...PRONUNCIATION_NAME_POOL,
  ...EXAMPLE_WORD_POOL,
];

