import { A1_ALPHABET_DIGRAPHS, A1_ALPHABET_LETTERS, A1_FOREIGN_LETTERS } from './a1Alphabet';
import { A1_NUMBER_RULES } from './a1Numbers';
import type { AcademyTheoryConfig } from './types';

export const ALPHABET_THEORY_CONFIG: AcademyTheoryConfig = {
  moduleId: 'alphabet',
  title: {
    bn: 'ইতালিয়ান বর্ণমালা (Alfabeto Italiano)',
    en: 'The Italian Alphabet — Theory & Pronunciation',
  },
  subtitle: {
    bn: '২১টি মূল বর্ণ, স্বরবর্ণ-ব্যঞ্জনবর্ণ, বিশেষ উচ্চারণ ও ৫টি বিদেশি বর্ণের পূর্ণ ধারণা',
    en: 'Complete guide to 21 standard letters, pure vowels, consonant clusters, and foreign letters',
  },
  intro: {
    bn: 'ইতালিয়ান ভাষা উচ্চারণের দিক থেকে অত্যন্ত স্পষ্ট ও নিয়মিত ("যা লেখা হয়, ঠিক তা-ই পড়া হয়")। প্রথাগত ইতালিয়ান বর্ণমালায় মোট ২১টি বর্ণ রয়েছে: ৫টি স্বরবর্ণ (A, E, I, O, U) এবং ১৬টি ব্যঞ্জনবর্ণ। এছাড়া J, K, W, X, Y — এই ৫টি বর্ণ মূলত ইংরেজি বা আন্তর্জাতিক বিদেশি শব্দ লেখার জন্য ব্যবহৃত হয়।',
    en: 'Italian is a phonetic language—words are pronounced almost exactly as spelled. The traditional Italian alphabet contains 21 letters: 5 pure vowels (A, E, I, O, U) and 16 consonants. Five extra letters (J, K, W, X, Y) appear mainly in borrowed foreign words.',
  },
  highlights: [
    { label: '21', caption: { bn: 'মূল বর্ণ', en: 'Standard Letters' } },
    { label: '5', caption: { bn: 'বিশুদ্ধ স্বরবর্ণ', en: 'Pure Vowels' } },
    { label: '16', caption: { bn: 'ব্যঞ্জনবর্ণ', en: 'Consonants' } },
    { label: '5', caption: { bn: 'বিদেশি বর্ণ (J–Y)', en: 'Foreign Letters' } },
  ],
  sections: [
    {
      id: 'alpha-vowels',
      heading: { bn: '১. ৫টি বিশুদ্ধ স্বরবর্ণ (Le Vocali)', en: '1. The 5 Pure Vowels (A, E, I, O, U)' },
      summary: {
        bn: 'ইংরেজির মতো ইতালিয়ানে স্বরবর্ণের উচ্চারণ বদলে যায় না। প্রতিটি স্বরবর্ণ একটি পরিষ্কার, সংক্ষিপ্ত ও খাঁটি ধ্বনি দেয়।',
        en: 'Unlike English vowels that glide or change unpredictably, each Italian vowel produces one crisp, pure sound.',
      },
      rules: [
        {
          id: 'rule-vowels-list',
          title: { bn: 'A, E, I, O, U — স্পষ্ট ৫টি ধ্বনি', en: 'A, E, I, O, U — Crisp Vowel Sounds' },
          badge: { bn: 'অপরিহার্য', en: 'Core' },
          body: {
            bn: 'A = আ (আ-মি-কো), E = এ (এস্-প্রেস-সো), I = ই (ই-তা-লি-আ), O = ও (ওজ্-জি), U = উ (উ-নো)। কখনোই I-কে "আই" বা U-কে "ইউ" পড়বেন না।',
            en: 'A = ah, E = eh, I = ee, O = oh, U = oo. Never glide Italian I into "eye" or U into "you".',
          },
          examples: [
            { it: 'Amico', phoneticBn: 'আ-মি-কো', phoneticEn: 'ah-MEE-koh', tr: { bn: 'বন্ধু', en: 'Friend' } },
            { it: 'Italia', phoneticBn: 'ই-তা-লি-আ', phoneticEn: 'ee-TAH-lyah', tr: { bn: 'ইতালি', en: 'Italy' } },
            { it: 'Uno', phoneticBn: 'উ-নো', phoneticEn: 'OO-noh', tr: { bn: 'এক (১)', en: 'One' } },
          ],
          tip: {
            bn: 'টিপস: প্রতিটি স্বরবর্ণ পরিষ্কারভাবে উচ্চারণ করলে ইতালিয়ান শব্দ বোঝা সহজ হয়।',
            en: 'Tip: Keep every vowel clean and short—never swallow unstressed vowels.',
          },
        },
      ],
    },
    {
      id: 'alpha-full-table',
      heading: { bn: '২. ২১টি বর্ণের সম্পূর্ণ উচ্চারণ তালিকা', en: '2. Pronunciation Table of All 21 Letters' },
      summary: {
        bn: 'প্রতিটি বর্ণের ইতালিয়ান নাম, বাংলা উচ্চারণ ও উদাহরণ শব্দ শুনে অভ্যাস করুন।',
        en: 'Review every standard letter name, phonetic guide, and example word.',
      },
      table: {
        headers: [
          { bn: 'বর্ণ', en: 'Letter', it: 'Lettera' },
          { bn: 'ইতালিয়ান নাম', en: 'Italian Name', it: 'Nome' },
          { bn: 'উচ্চারণ', en: 'Pronunciation', it: 'Pronuncia' },
          { bn: 'উদাহরণ', en: 'Example', it: 'Esempio' },
        ],
        rows: A1_ALPHABET_LETTERS.map((l) => ({
          cells: [
            `${l.letter} ${l.lower}`,
            l.italianName,
            {
              bn: l.phoneticBn.split('(')[0]!.trim(),
              en: l.phoneticEn.split('(')[0]!.trim(),
              it: l.phoneticEn.split('(')[0]!.trim(),
            },
            {
              bn: `উদাহরণ: ${l.exampleIt} (${l.exampleTr.bn})`,
              en: `${l.exampleIt} (${l.exampleTr.en})`,
              it: l.exampleIt,
            },
          ],
          audioIt: `${l.italianName}. ${l.exampleIt}`,
        })),
      },
    },
    {
      id: 'alpha-patterns',
      heading: { bn: '৩. বিশেষ উচ্চারণের নিয়ম (C, G, H, GN, GLI, SC)', en: '3. Special Italian Pronunciation Patterns' },
      summary: {
        bn: 'C ও G অক্ষরের পর কোন স্বরবর্ণ বসছে তার ওপর উচ্চারণ নরম (চ/জ) নাকি শক্ত (ক/গ) হবে তা নির্ভর করে।',
        en: 'C and G switch between soft and hard sounds depending on whether e/i or a/o/u follows.',
      },
      rules: A1_ALPHABET_DIGRAPHS.map((d) => ({
        id: d.id,
        title: { bn: `প্যাটার্ন "${d.pattern}" → ${d.soundBn}`, en: `Pattern "${d.pattern}" → ${d.soundEn}` },
        body: d.explanation,
        examples: [
          {
            it: d.exampleIt,
            phoneticBn: d.soundBn,
            phoneticEn: d.soundEn,
            tr: d.exampleTr,
          },
        ],
      })).concat([
        {
          id: 'rule-c-hard-casa',
          title: { bn: 'Casa ও Amico — শক্ত "ক" ধ্বনি (ca / co / cu)', en: 'Casa & Amico — Hard "K" before a, o, u' },
          body: {
            bn: 'c-এর পর a, o বা u বসলে উচ্চারণ সবসময় শক্ত "ক" হয়: casa (কা-জ়া = বাড়ি), amico (আ-মি-কো = বন্ধু), caffè (কাফ-ফে)। কিন্তু i/e এলে "চ" হয়ে যায়: ciao, cena।',
            en: 'Before a, o, u, "c" sounds like hard "k" (casa, amico). Before e, i it turns soft like "ch" (ciao, gelato is "j").',
          },
          examples: [
            { it: 'Casa', phoneticBn: 'কা-জ়া', phoneticEn: 'KAH-zah', tr: { bn: 'বাড়ি', en: 'House' } },
            { it: 'Amico', phoneticBn: 'আ-মি-কো', phoneticEn: 'ah-MEE-koh', tr: { bn: 'বন্ধু', en: 'Friend' } },
            { it: 'Gelato', phoneticBn: 'জে-লা-তো', phoneticEn: 'jeh-LAH-toh', tr: { bn: 'আইসক্রিম', en: 'Ice cream' } },
          ],
        },
        {
          id: 'rule-double-consonants',
          title: { bn: 'দ্বিত্ব ব্যঞ্জনবর্ণ (Double Consonants: ll, tt, zz, pp)', en: 'Double Consonants Change Word Meaning' },
          body: {
            bn: 'ইতালিয়ানে দুটি একসাথে থাকা ব্যঞ্জনবর্ণ একটু থেমে জোর দিয়ে উচ্চারণ করতে হয়—না হলে শব্দের অর্থ পাল্টে যেতে পারে! যেমন: pala (বেলচা) বনাম palla (বল), nono (নবম) বনাম nonno (দাদু)।',
            en: 'Hold double consonants longer and stronger; pronouncing a single instead of double changes meaning (casa vs cassa, nono vs nonno).',
          },
          examples: [
            { it: 'Pizza / Notte', phoneticBn: 'পিত্-সা / নোত্-তে', phoneticEn: 'PEET-sah / NOHT-teh', tr: { bn: 'পিৎজা / রাত', en: 'Pizza / Night' } },
          ],
        },
      ]),
    },
    {
      id: 'alpha-foreign',
      heading: { bn: '৪. বিদেশি শব্দে ব্যবহৃত ৫টি বর্ণ (J, K, W, X, Y)', en: '4. Foreign Letters in Loanwords (J, K, W, X, Y)' },
      summary: {
        bn: 'J, K, W, X, Y মূল ইতালিয়ান বর্ণমালার অংশ নয়—এগুলো মূলত ইংরেজি বা আন্তর্জাতিক শব্দ লেখার সময় দেখা যায়।',
        en: 'Five foreign letters appear primarily in borrowed international terms such as jeans, kiwi, weekend, taxi, and yogurt.',
      },
      table: {
        headers: [
          { bn: 'বর্ণ', en: 'Letter', it: 'Lettera' },
          { bn: 'নাম', en: 'Italian Name', it: 'Nome' },
          { bn: 'উদাহরণ', en: 'Word', it: 'Esempio' },
          { bn: 'নোট', en: 'Usage', it: 'Uso' },
        ],
        rows: A1_FOREIGN_LETTERS.map((fl) => ({
          cells: [fl.letter, fl.italianName, fl.exampleIt, fl.note],
          audioIt: `${fl.italianName}. ${fl.exampleIt}`,
        })),
      },
    },
    {
      id: 'alpha-mistakes',
      heading: { bn: '৫. সাধারণ ভুল ও সতর্কতা', en: '5. Important Exceptions & Common Mistakes' },
      summary: {
        bn: 'শুরুর দিকে শিক্ষার্থীরা নিচের উচ্চারণগুলোতে সবচেয়ে বেশি ভুল করেন—এই তালিকাটি মনে রাখুন।',
        en: 'Watch out for these silent letters and hard/soft reversals beginners commonly misread.',
      },
      mistakes: [
        {
          wrong: { bn: 'Hotel → "হো-তেল" (H উচ্চারণ করা)', en: 'Hotel → "ho-tel" (pronouncing H)', it: 'Hotel → con "h" aspirata' },
          right: { bn: 'Hotel → "ও-তেল" (H সর্বদা নীরব)', en: 'Hotel → "o-tel" (H is always silent)', it: 'Hotel → "o-tel" (H sempre muta)' },
          explanation: {
            bn: 'ইতালিয়ানে শব্দের শুরুতে বা একা থাকলে H কখনোই উচ্চারিত হয় না: hotel (ও-তেল), ho (ও)।',
            en: 'Italian "h" is strictly silent at the start of words: ho ("oh"), hotel ("o-tel").',
          },
        },
        {
          wrong: { bn: 'Chiave → "চিয়া-ভে"', en: 'Chiave → "chyah-veh"', it: 'Chiave → "cia-ve"' },
          right: { bn: 'Chiave → "কিয়া-ভে"', en: 'Chiave → "kyah-veh"', it: 'Chiave → "kia-ve"' },
          explanation: {
            bn: 'c ও i-এর মাঝে h থাকায় উচ্চারণ শক্ত "ক" হবে, নরম "চ" নয়।',
            en: 'Adding h in "chi/che" locks the sound to hard "k" instead of soft "ch".',
          },
        },
        {
          wrong: { bn: 'Gelato → "গে-লা-তো"', en: 'Gelato → "geh-lah-toh"', it: 'Gelato → "ghelato"' },
          right: { bn: 'Gelato → "জে-লা-তো"', en: 'Gelato → "jeh-lah-toh"', it: 'Gelato → "ge-lato" (g dolce)' },
          explanation: {
            bn: 'e/i-এর আগে g সবসময় নরম "জ" হয়; শক্ত "গ" চাইলে h দিতে হয় (spaghetti)।',
            en: 'Before e/i without h, "g" is soft "j" (gelato); use "gh" for hard "g" (spaghetti).',
          },
        },
      ],
    },
  ],
};

export const NUMBERS_THEORY_CONFIG: AcademyTheoryConfig = {
  moduleId: 'numbers',
  title: {
    bn: 'ইতালিয়ান সংখ্যা ০–১০০ (I Numeri 0–100)',
    en: 'Italian Numbers 0 to 100 — Formation & Usage',
  },
  subtitle: {
    bn: 'ধাপে ধাপে সংখ্যা গঠন, স্বরবর্ণ বাদ নিয়ম (elision), অ্যাকসেন্ট ও বাস্তব জীবন উদাহরণ',
    en: 'Groupings, tens + units patterns, elision rules, and everyday age/price/date/phone examples',
  },
  intro: {
    bn: '০ থেকে ১০০ পর্যন্ত ইতালিয়ান সংখ্যা শেখা খুব সহজ—প্রথম ২০টি সংখ্যা মুখস্থ করলে এবং ২০–৯০ দশক জানলেই আপনি বাকি সব সংখ্যা নিয়ম মেনে তৈরি করতে পারবেন। নিচের পাঠটি সম্পূর্ণ পড়লে অধ্যয়নের তালিকা আনলক হবে।',
    en: 'Learning Italian numbers from 0 to 100 follows clear building blocks. Once you master 0–20 and the tens (20–90), every compound number builds logically with just two easy spelling rules.',
  },
  highlights: [
    { label: '0–10', caption: { bn: 'মৌলিক ভিত্তি', en: 'Core Roots' } },
    { label: '11–20', caption: { bn: '-dici ও দশক', en: 'Teens & 20' } },
    { label: 'Elision', caption: { bn: '-uno / -otto বাদ', en: 'Drop Final Vowel' } },
    { label: '-tré', caption: { bn: 'অ্যাকসেন্ট চিহ্ন', en: 'Acute Accent' } },
  ],
  sections: [
    {
      id: 'num-rules-groups',
      heading: { bn: '১. সংখ্যা গঠনের প্রধান ৫টি নিয়ম', en: '1. Five Core Formation & Spelling Rules' },
      summary: {
        bn: '০–১০, ১১–১৯, দশক (২০–১০০), এবং দুটি বিশেষ বানান পরিবর্তন নিয়ম মন দিয়ে পড়ুন।',
        en: 'Understand the base teens flip (-dici vs dici-), regular -anta tens, vowel elision, and acute accent on compound -tré.',
      },
      rules: A1_NUMBER_RULES.map((r) => ({
        id: r.id,
        title: r.title,
        badge: { bn: `পরিসর: ${r.range}`, en: `Range: ${r.range}` },
        body: r.explanation,
        examples: r.examples.map((ex) => ({
          it: ex.it,
          tr: ex.tr,
        })),
      })),
    },
    {
      id: 'num-comparison-table',
      heading: { bn: '২. উচ্চারণ ও বানান তুলনা টেবিল', en: '2. Quick Pronunciation & Spelling Reference' },
      summary: {
        bn: 'সবচেয়ে জরুরি ভিত্তি সংখ্যা, দশক এবং elision উদাহরণ এক নজরে দেখুন ও অডিও শুনুন।',
        en: 'Key base numbers, teens, tens, and compound spellings with clear pronunciation cues.',
      },
      table: {
        headers: [
          { bn: 'সংখ্যা', en: 'Num', it: 'Numero' },
          { bn: 'ইতালিয়ান বানান', en: 'Italian', it: 'Italiano' },
          { bn: 'উচ্চারণ', en: 'Phonetic Cue', it: 'Pronuncia' },
          { bn: 'নিয়ম', en: 'Pattern Note', it: 'Regola' },
        ],
        rows: [
          {
            cells: [
              '0 / 1 / 3',
              'zero / uno / tre',
              { bn: 'জ়েরো / উনো / ত্রে', en: 'dzeh-roh / oo-noh / treh', it: 'ze-ro / u-no / tre' },
              { bn: 'মৌলিক একক', en: 'Base units', it: 'Unità base' },
            ],
            audioIt: 'zero, uno, tre',
          },
          {
            cells: [
              '11 / 16',
              'undici / sedici',
              { bn: 'উনদিচি / সেদিচি', en: 'oon-dee-chee / seh-dee-chee', it: 'un-di-ci / se-di-ci' },
              { bn: '-dici শেষে', en: 'Ends in -dici', it: 'Finisce in -dici' },
            ],
            audioIt: 'undici, sedici',
          },
          {
            cells: [
              '17 / 19',
              'diciassette / diciannove',
              { bn: 'দিচাস্সেত্তে / দিচান্নভে', en: 'dee-chahs-set-teh / dee-chahn-noh-veh', it: 'di-cias-set-te / di-cian-no-ve' },
              { bn: 'dici- শুরুতে', en: 'Starts with dici-', it: 'Inizia con dici-' },
            ],
            audioIt: 'diciassette, diciannove',
          },
          {
            cells: [
              '20 / 21',
              'venti / ventuno',
              { bn: 'ভেনতি / ভেনতুনো', en: 'vehn-tee / vehn-too-noh', it: 'ven-ti / ven-tu-no' },
              { bn: 'i বাদ (elision)', en: 'Drop i (elision)', it: 'Elisione della i' },
            ],
            audioIt: 'venti, ventuno',
          },
          {
            cells: [
              '23 / 28',
              'ventitré / ventotto',
              { bn: 'ভেনতি-ত্রে / ভেনতোত্তো', en: 'vehn-tee-treh / vehn-toht-toh', it: 'ven-ti-tré / ven-tot-to' },
              { bn: 'é অ্যাকসেন্ট / i বাদ', en: 'é accent / drop i', it: 'Accento é / elisione' },
            ],
            audioIt: 'ventitré, ventotto',
          },
          {
            cells: [
              '50 / 80 / 100',
              'cinquanta / ottanta / cento',
              { bn: 'চিনকুয়ানতা / ওত্তানতা / চেন্তো', en: 'cheen-kwahn-tah / oht-tahn-tah / chehn-toh', it: 'cin-quan-ta / ot-tan-ta / cen-to' },
              { bn: 'দশক ও একশো', en: 'Tens & hundred', it: 'Decine e cento' },
            ],
            audioIt: 'cinquanta, ottanta, cento',
          },
        ],
      },
    },
    {
      id: 'num-practical-contexts',
      heading: { bn: '৩. বাস্তব জীবনে সংখ্যার ব্যবহার (বয়স, দাম, তারিখ, পরিমাণ, ফোন)', en: '3. Practical Daily Usage Examples' },
      summary: {
        bn: 'দৈনন্দিন কথোপকথনে বয়স, বাজারের দাম, তারিখ, সংখ্যা-পরিমাণ ও ফোন নম্বর কীভাবে বলবেন:',
        en: 'Listen to how Italians use numbers 0–100 for age, prices, calendar dates, quantities, and phone digits.',
      },
      rules: [
        {
          id: 'ctx-age',
          title: { bn: 'বয়স বলা (Age — avere + সংখ্যা + anni)', en: 'Age — "avere + number + anni"' },
          body: {
            bn: 'ইতালিয়ানে বয়স বলতে "essere" নয়, "avere" (থাকা) ক্রিয়া ব্যবহার হয়: "আমার ২৫ বছর বয়স" = Ho venticinque anni।',
            en: 'Italian expresses age with "avere" (to have), never "essere": "Ho venticinque anni".',
          },
          examples: [
            {
              it: 'Ho venticinque anni.',
              phoneticBn: 'ও ভেনতি-চিনকুয়ে আন্-নি',
              phoneticEn: 'oh vehn-tee-CHEEN-kweh AHN-nee',
              tr: { bn: 'আমার বয়স ২৫ বছর।', en: 'I am twenty-five years old.' },
            },
          ],
        },
        {
          id: 'ctx-price',
          title: { bn: 'দাম ও ইউরো বলা (Prices — costare + euro)', en: 'Prices — Shopping & Cafés' },
          body: {
            bn: 'দাম জিজ্ঞাসা করতে "Quanto costa?" এবং বলতে সংখ্যা + euro ব্যবহার হয়। ১০০ ইউরো হলে শুধু "cento euro" (un cento নয়)।',
            en: 'Quote prices with number + euro. Use "cento euro" cleanly without "un".',
          },
          examples: [
            {
              it: 'Questo libro costa diciotto euro.',
              phoneticBn: 'কুয়েস-তো লিব্রো কোস-তা দিচোত্-তো এউ-রো',
              phoneticEn: 'KWEHS-toh LEE-broh KOHS-tah dee-CHOHT-toh EH-oo-roh',
              tr: { bn: 'এই বইটির দাম আঠারো ইউরো।', en: 'This book costs eighteen euros.' },
            },
          ],
        },
        {
          id: 'ctx-dates-qty-phone',
          title: { bn: 'তারিখ, পরিমাণ ও ফোন নম্বর (Dates, Quantities & Phone)', en: 'Dates, Quantities & Phone Numbers' },
          body: {
            bn: 'মাসের তারিখে ১ তারিখের পর বাকি সব দিনে সাধারণ সংখ্যা বসে (il quindici maggio); ফোন নম্বর সাধারণত একক বা জোড়া অঙ্কে পড়া হয়।',
            en: 'All days of the month except the 1st (il primo) use cardinal numbers; phone numbers are spoken digit-by-digit or in pairs.',
          },
          examples: [
            {
              it: 'Oggi è il quindici maggio.',
              phoneticBn: 'ওজ্-জি এ ইল কুইন-দিচি মাজ্-জো',
              phoneticEn: 'OHJ-jee eh eel KWEEN-dee-chee MAHJ-joh',
              tr: { bn: 'আজ ১৫ই মে।', en: 'Today is May fifteenth.' },
            },
            {
              it: 'Vorrei dodici biglietti, per favore.',
              phoneticBn: 'ভোর-রেই দো-দিচি বিল-য়েত্-তি',
              phoneticEn: 'vor-REY DOH-dee-chee beel-YEHT-tee pehr fah-VOH-reh',
              tr: { bn: 'দয়া করে বারোটি টিকিট দিন।', en: 'I would like twelve tickets, please.' },
            },
            {
              it: 'Il mio numero è tre, due, otto, quaranta, settantacinque.',
              phoneticBn: 'ত্রে, দুয়ে, ওত্তো, কুয়ারানতা, সেত্তানতা-চিনকুয়ে',
              phoneticEn: 'treh, doo-eh, oht-toh, kwah-rahn-tah, seht-tahn-tah-cheen-kweh',
              tr: { bn: 'আমার নম্বর ৩-২-৮, ৪০, ৭৫।', en: 'My number is 3-2-8, 40, 75.' },
            },
          ],
        },
      ],
    },
    {
      id: 'num-mistakes',
      heading: { bn: '৪. সাধারণ ভুল ও ব্যতিক্রম', en: '4. Common Mistakes & Exceptions' },
      summary: {
        bn: 'বানান ও কথাবার্তায় যে ৪টি ভুল সবচেয়ে বেশি হয় তা এড়িয়ে চলুন:',
        en: 'Avoid these classic beginner slips in spelling and speech.',
      },
      mistakes: [
        {
          wrong: 'ventiuno / trentaotto',
          right: 'ventuno / trentotto',
          explanation: {
            bn: 'uno এবং otto স্বরবর্ণ দিয়ে শুরু বলে দশকের শেষ স্বরবর্ণ বাদ পড়ে।',
            en: 'Always drop the final vowel of 20–90 before uno and otto.',
          },
        },
        {
          wrong: { bn: 'ventitre (অ্যাকসেন্ট ছাড়া)', en: 'ventitre (missing accent)', it: 'ventitre (senza accento)' },
          right: { bn: 'ventitré (তীব্র অ্যাকসেন্ট সহ)', en: 'ventitré (with acute accent)', it: 'ventitré (con accento acuto)' },
          explanation: {
            bn: 'একক "tre"-তে অ্যাকসেন্ট থাকে না, কিন্তু ২৩, ৩৩, ৪৩...-এ শেষে "é" লেখা বাধ্যতামূলক।',
            en: 'Add the acute accent to -tré in all compound numbers (23–93).',
          },
        },
        {
          wrong: 'un cento / cento e uno',
          right: 'cento / centouno',
          explanation: {
            bn: 'ইতালিয়ানে ১০০-এর আগে "un" বসে না — সরাসরি "cento" বলতে হয়।',
            en: 'Never put "un" before cento (say "cento", not "un cento").',
          },
        },
      ],
    },
  ],
};
