import type { GrammarMistake } from './academyTypes';
import type { QuizQuestion, Tr } from './types';
import { GRAMMAR_DETAILS_A2 } from './grammarDetailsA2';
import { GRAMMAR_DETAILS_B1 } from './grammarDetailsB1';
import { GRAMMAR_DETAILS_B2 } from './grammarDetailsB2';

export interface GrammarExtra {
  rule: Tr;
  exceptions?: Tr;
  commonMistakes: GrammarMistake[];
  examples: { it: string; tr: Tr }[];
  exercises: QuizQuestion[];
  storyIds: string[];
  vocabKeys: string[];
}

export const GRAMMAR_DETAILS: Record<string, GrammarExtra> = {
  ...GRAMMAR_DETAILS_A2,
  ...GRAMMAR_DETAILS_B1,
  ...GRAMMAR_DETAILS_B2,
  essere: {
    rule: {
      bn: 'essere একটি অনিয়মিত ক্রিয়া: io sono, tu sei, lui/lei/Lei è, noi siamo, voi siete, loro sono। পরিচয়, অবস্থান, পেশা ও বৈশিষ্ট্যে ব্যবহার হয়।',
      en: 'essere is irregular: io sono, tu sei, lui/lei/Lei è, noi siamo, voi siete, loro sono. Used for identity, location, profession, and traits.',
    },
    exceptions: {
      bn: 'বয়স এবং ক্ষুধা-তৃষ্ণা বোঝাতে essere নয়, avere ব্যবহৃত হয় (Ho venti anni, non Sono venti anni)।',
      en: 'Age, hunger, and thirst use avere, never essere (Ho venti anni, not Sono venti anni).',
    },
    commonMistakes: [
      { wrong: 'Io sono venti anni.', right: 'Io ho venti anni.', note: { bn: 'বয়সে avere ব্যবহার হয়।', en: 'Age requires avere.' } },
      { wrong: 'Lui e medico.', right: 'Lui è medico.', note: { bn: 'è (হয়)-তে অ্যাকসেন্ট চিহ্ন আবশ্যক; e মানে এবং।', en: 'è (is) needs the grave accent; e means "and".' } },
    ],
    examples: [
      { it: 'Sono studente di medicina.', tr: { bn: 'আমি মেডিকেলের ছাত্র।', en: 'I am a medical student.' } },
      { it: 'Roma è una città antica.', tr: { bn: 'রোম একটি প্রাচীন শহর।', en: 'Rome is an ancient city.' } },
    ],
    exercises: [
      {
        id: 'ex-essere-1',
        prompt: { bn: 'সঠিক রূপ বেছে নিন:', en: 'Choose the right form:' },
        it: 'Marco e Giulia ___ a scuola.',
        options: ['siamo', 'siete', 'sono', 'è'],
        answer: 2,
        explanation: { bn: 'Marco e Giulia = loro, তাই sono।', en: 'Marco and Giulia = loro, so sono.' },
      },
      {
        id: 'ex-essere-2',
        prompt: { bn: 'সঠিক রূপ বেছে নিন:', en: 'Choose the right form:' },
        it: 'Tu ___ di Dhaka?',
        options: ['sono', 'sei', 'è', 'siete'],
        answer: 1,
        explanation: { bn: 'tu-এর সাথে sei বসে।', en: 'tu takes sei.' },
      },
    ],
    storyIds: ['st-a1-01', 'st-a1-02'],
    vocabKeys: ['w:A1:essere', 'w:A1:lo studente', 'w:A1:la città'],
  },
  avere: {
    rule: {
      bn: 'avere: io ho, tu hai, lui/lei/Lei ha, noi abbiamo, voi avete, loro hanno। শুরুতে থাকা h কখনো উচ্চারিত হয় না।',
      en: 'avere: io ho, tu hai, lui/lei/Lei ha, noi abbiamo, voi avete, loro hanno. The initial h is always silent.',
    },
    exceptions: {
      bn: 'o (অথবা), ai (প্রতি), a (তে), anno (বছর) থেকে আলাদা বোঝাতে ho, hai, ha, hanno-তে h লেখা হয়।',
      en: 'The silent h distinguishes ho/hai/ha/hanno from o (or), ai (to the), a (at/to), and anno (year).',
    },
    commonMistakes: [
      { wrong: 'Io o un libro.', right: 'Io ho un libro.', note: { bn: 'ক্রিয়ার শুরুতে h লিখতে ভুলবেন না।', en: 'Do not omit the silent h.' } },
    ],
    examples: [
      { it: 'Abbiamo due biglietti per il treno.', tr: { bn: 'আমাদের কাছে ট্রেনের দুটি টিকিট আছে।', en: 'We have two train tickets.' } },
      { it: 'Quanti anni ha tuo fratello?', tr: { bn: 'তোমার ভাইয়ের বয়স কত?', en: 'How old is your brother?' } },
    ],
    exercises: [
      {
        id: 'ex-avere-1',
        prompt: { bn: 'শূন্যস্থান পূরণ করুন:', en: 'Fill in the blank:' },
        it: 'Noi ___ una casa piccola.',
        options: ['ho', 'avete', 'abbiamo', 'hanno'],
        answer: 2,
        explanation: { bn: 'noi-এর সাথে abbiamo বসে।', en: 'noi takes abbiamo.' },
      },
    ],
    storyIds: ['st-a1-03', 'st-a1-04'],
    vocabKeys: ['w:A1:avere', 'w:A1:il libro', 'w:A1:il fratello'],
  },
  articoli: {
    rule: {
      bn: 'নির্দিষ্ট আর্টিকেল — পুং: il (সাধারণ ব্যঞ্জন), lo (s+ব্যঞ্জন, z, ps, gn), l’ (স্বরবর্ণ)। স্ত্রী: la (ব্যঞ্জন), l’ (স্বরবর্ণ)। বহুবচন: il→i, lo/l’→gli, la/l’→le।',
      en: 'Definite articles — Masc: il (consonant), lo (s+cons, z, ps, gn), l’ (vowel). Fem: la (consonant), l’ (vowel). Plurals: il→i, lo/l’→gli, la/l’→le.',
    },
    exceptions: {
      bn: 'il problema, il programma-এর মতো -a দিয়ে শেষ হওয়া কিছু গ্রিক মূল শব্দ পুংলিঙ্গ এবং বহুবচনে i problemi হয়।',
      en: 'Greek-origin nouns ending in -a like il problema are masculine (plural: i problemi).',
    },
    commonMistakes: [
      { wrong: 'il studente', right: 'lo studente', note: { bn: 's + ব্যঞ্জন (st-) এর আগে il নয়, lo বসে।', en: 'Before s + consonant, use lo instead of il.' } },
      { wrong: 'una amica', right: "un'amica", note: { bn: 'স্বরবর্ণ দিয়ে শুরু স্ত্রীলিঙ্গ শব্দের আগে un’ (অ্যাপস্ট্রফি সহ) বসে।', en: 'Feminine nouns starting with a vowel take un’ with an apostrophe.' } },
    ],
    examples: [
      { it: 'Lo zaino è sulla sedia.', tr: { bn: 'ব্যাকপ্যাকটি চেয়ারের উপরে আছে।', en: 'The backpack is on the chair.' } },
      { it: "L'amica di Sara abita a Milano.", tr: { bn: 'সারার বান্ধবী মিলানে থাকে।', en: "Sara's friend lives in Milan." } },
    ],
    exercises: [
      {
        id: 'ex-art-1',
        prompt: { bn: 'সঠিক আর্টিকেল বেছে নিন:', en: 'Pick the right article:' },
        it: '___ studenti sono in biblioteca.',
        options: ['I', 'Gli', 'Le', 'Lo'],
        answer: 1,
        explanation: { bn: 'lo studente-এর বহুবচন gli studenti।', en: 'The plural of lo studente is gli studenti.' },
      },
    ],
    storyIds: ['st-a1-05', 'st-a1-06'],
    vocabKeys: ['w:A1:lo studente', 'w:A1:la casa', "w:A1:l'amica"],
  },
  ce: {
    rule: {
      bn: "একবচন বা অগণনীয় বিশেষ্যের সাথে c'è (আছে) এবং বহুবচন বিশেষ্যের সাথে ci sono (আছে) ব্যবহার হয়।",
      en: "Use c'è (there is) with singular or uncountable nouns, and ci sono (there are) with plural nouns.",
    },
    exceptions: {
      bn: "না-বাচক বাক্যে non c'è / non ci sono হয়; অস্তিত্ব নেই বোঝাতে আর্টিকেল বাদ পড়ে: Non c'è latte।",
      en: "In negatives, non c'è / non ci sono often drops the article: Non c'è latte.",
    },
    commonMistakes: [
      { wrong: "C'è molte persone qui.", right: 'Ci sono molte persone qui.', note: { bn: 'molte persone বহুবচন, তাই ci sono হবে।', en: 'molte persone is plural, so use ci sono.' } },
    ],
    examples: [
      { it: "C'è una farmacia vicino alla banca.", tr: { bn: 'ব্যাংকের কাছে একটা ফার্মেসি আছে।', en: 'There is a pharmacy near the bank.' } },
      { it: 'Ci sono tre caffè sul tavolo.', tr: { bn: 'টেবিলে তিনটি কফি আছে।', en: 'There are three coffees on the table.' } },
    ],
    exercises: [
      {
        id: 'ex-ce-1',
        prompt: { bn: 'সঠিক রূপ বেছে নিন:', en: 'Choose the correct form:' },
        it: '___ due autobus davanti alla stazione.',
        options: ["C'è", 'Ci sono', 'È', 'Sono'],
        answer: 1,
        explanation: { bn: 'due autobus বহুবচন হওয়ায় ci sono ব্যবহৃত হবে।', en: 'due autobus is plural, requiring ci sono.' },
      },
    ],
    storyIds: ['st-a1-07'],
    vocabKeys: ['w:A1:la farmacia', 'w:A1:il bar', 'w:A1:la piazza'],
  },
  'presente-are': {
    rule: {
      bn: '-are বাদ দিয়ে যোগ করুন: -o, -i, -a, -iamo, -ate, -ano।',
      en: 'Drop -are and add -o, -i, -a, -iamo, -ate, -ano.',
    },
    exceptions: {
      bn: '-care / -gare ক্রিয়ায় (cercare, pagare) tu ও noi-তে c/g এর শক্ত উচ্চারণ ধরে রাখতে h যোগ হয়: cerchi, cerchiamo। -iare ক্রিয়ায় (mangiare) দুটি i একসাথে হয় না: mangi, mangiamo।',
      en: 'Verbs in -care/-gare add h before -i/-iamo (cerchi, paghiamo). Verbs in -iare drop an i (mangi, mangiamo).',
    },
    commonMistakes: [
      { wrong: 'Tu mangii la pizza.', right: 'Tu mangi la pizza.', note: { bn: 'মৌলিক -iare ক্রিয়ায় দুটি i বসে না।', en: 'Do not double the i in mangi.' } },
    ],
    examples: [
      { it: 'Paghiamo insieme alla cassa.', tr: { bn: 'আমরা ক্যাশ কাউন্টারে একসাথে টাকা দিই।', en: 'We pay together at the checkout.' } },
      { it: 'Loro lavorano in centro.', tr: { bn: 'তারা শহরের কেন্দ্রে কাজ করে।', en: 'They work in the city centre.' } },
    ],
    exercises: [
      {
        id: 'ex-are-1',
        prompt: { bn: 'সঠিক রূপটি বেছে নিন:', en: 'Pick the correct form:' },
        it: 'Noi ___ sempre la pasta la domenica.',
        options: ['cucino', 'cucinate', 'cuciniamo', 'cucinano'],
        answer: 2,
        explanation: { bn: 'noi-এর প্রত্যয় -iamo, তাই cuciniamo।', en: 'noi takes -iamo: cuciniamo.' },
      },
    ],
    storyIds: ['st-a1-08', 'st-a1-09'],
    vocabKeys: ['w:A1:parlare', 'w:A1:lavorare', 'w:A1:cucinare'],
  },
  'presente-ere-ire': {
    rule: {
      bn: '-ere ও -ire উভয় ক্ষেত্রে io -o, tu -i, lui/lei -e, noi -iamo, loro -ono। শুধু voi আলাদা: -ere → -ete, -ire → -ite।',
      en: 'Both -ere and -ire share -o, -i, -e, -iamo, -ono; only voi differs (-ete vs -ite).',
    },
    exceptions: {
      bn: 'capire, finire, preferire, pulire-এর মতো -isc- ক্রিয়ায় io/tu/lui/loro রূপে -isc- যোগ হয় (capisco, capisci, capisce, capiscono), কিন্তু noi/voi-তে নয় (capiamo, capite)।',
      en: '-isc- verbs (capire, finire, preferire) insert -isc- in singular and 3rd plural (capisco... capiscono), never in noi/voi.',
    },
    commonMistakes: [
      { wrong: 'Io capo tutto.', right: 'Io capisco tutto.', note: { bn: 'capire একটি -isc- ক্রিয়া।', en: 'capire takes the -isc- infix.' } },
    ],
    examples: [
      { it: 'Finisco di lavorare alle sei.', tr: { bn: 'আমি ছয়টায় কাজ শেষ করি।', en: 'I finish work at six.' } },
      { it: 'Prendiamo un cappuccino al bar.', tr: { bn: 'আমরা ক্যাফেতে একটা ক্যাপুচিনো নিই।', en: 'We have a cappuccino at the café.' } },
    ],
    exercises: [
      {
        id: 'ex-ere-1',
        prompt: { bn: 'সঠিক রূপ বেছে নিন:', en: 'Pick the right form:' },
        it: 'Tu ___ l’italiano?',
        options: ['capo', 'capisci', 'capisce', 'capiamo'],
        answer: 1,
        explanation: { bn: 'capire-এর tu রূপ হলো capisci।', en: 'The tu form of capire is capisci.' },
      },
    ],
    storyIds: ['st-a1-10', 'st-a1-11'],
    vocabKeys: ['w:A1:leggere', 'w:A1:capire', 'w:A1:prendere'],
  },
  irregolari: {
    rule: {
      bn: 'দৈনন্দিন ব্যবহারের কিছু অতি গুরুত্বপূর্ণ ক্রিয়া অনিয়মিত: andare (vado, vai, va, andiamo, andate, vanno), fare (faccio, fai, fa...), venire (vengo, vieni, viene...), stare (sto, stai, sta...), dare (do, dai, dà...).',
      en: 'Core everyday verbs have irregular stems: andare (vado...), fare (faccio...), venire (vengo...), stare (sto...), dare (do...).',
    },
    exceptions: {
      bn: 'andare, fare, stare, dare-এর noi এবং voi রূপ সাধারণত নিয়মিত: andiamo/andate, facciamo/fate, stiamo/state।',
      en: 'The noi and voi forms usually stay regular (andiamo, andate, stiamo, state).',
    },
    commonMistakes: [
      { wrong: 'Io ando a casa.', right: 'Io vado a casa.', note: { bn: 'andare-এর io রূপ vado।', en: 'The io form of andare is vado.' } },
    ],
    examples: [
      { it: 'Vado a prendere il treno.', tr: { bn: 'আমি ট্রেন ধরতে যাচ্ছি।', en: 'I am going to catch the train.' } },
      { it: 'Che lavoro fanno i tuoi genitori?', tr: { bn: 'তোমার বাবা-মা কী কাজ করেন?', en: 'What work do your parents do?' } },
    ],
    exercises: [
      {
        id: 'ex-irr-1',
        prompt: { bn: 'শূন্যস্থান পূরণ করুন:', en: 'Complete the sentence:' },
        it: 'Dove ___ voi stasera?',
        options: ['vanno', 'andiamo', 'andate', 'vai'],
        answer: 2,
        explanation: { bn: 'voi-এর সাথে andate বসে।', en: 'voi takes andate.' },
      },
    ],
    storyIds: ['st-a1-12'],
    vocabKeys: ['w:A1:andare', 'w:A1:fare', 'w:A1:venire'],
  },
  negazione: {
    rule: {
      bn: 'হ্যাঁ-বাচক বাক্যকে না-বাচক করতে মূল ক্রিয়ার ঠিক আগে non বসান। দ্বিগুণ না-বাচক (non ... mai / non ... nessuno / non ... niente) ইতালিয়ানে সম্পূর্ণ শুদ্ধ।',
      en: 'Place non directly before the conjugated verb. Double negatives (non ... mai, non ... nessuno, non ... niente) are mandatory in Italian.',
    },
    exceptions: {
      bn: 'বাক্যের শুরুতে mai বা nessuno বসলে তখন আর non লাগে না: Nessuno parla।',
      en: 'If nessuno or mai opens the sentence before the verb, omit non.',
    },
    commonMistakes: [
      { wrong: 'Io non mai bevo vino.', right: 'Io non bevo mai vino.', note: { bn: 'mai সাধারণত ক্রিয়ার পরে বসে।', en: 'mai goes after the verb, not between non and the verb.' } },
    ],
    examples: [
      { it: 'Non ho tempo stamattina.', tr: { bn: 'আজ সকালে আমার সময় নেই।', en: 'I have no time this morning.' } },
      { it: 'Non mangia mai carne.', tr: { bn: 'সে কখনো মাংস খায় না।', en: 'He never eats meat.' } },
    ],
    exercises: [
      {
        id: 'ex-neg-1',
        prompt: { bn: 'সঠিক না-বাচক বাক্য কোনটি?', en: 'Which negative sentence is correct?' },
        options: ['Io bevo non caffè.', 'Io non bevo mai caffè.', 'Io non mai bevo caffè.', 'Mai non bevo caffè.'],
        answer: 1,
        explanation: { bn: 'non ক্রিয়ার আগে এবং mai ক্রিয়ার পরে বসে।', en: 'non precedes the verb and mai follows it.' },
      },
    ],
    storyIds: ['st-a1-13'],
    vocabKeys: ['w:A1:mai', 'w:A1:sempre', 'w:A1:capire'],
  },
  domande: {
    rule: {
      bn: 'হ্যাঁ/না প্রশ্নে শব্দক্রম বদলায় না, শুধু প্রশ্নবোধক স্বর ও ? বসে। তথ্যমূলক প্রশ্নে প্রশ্নবোধক শব্দ (Dove, Quando, Come, Chi, Che cosa, Perché, Quanto, Quale) শুরুতে বসে।',
      en: 'Yes/no questions keep statement word order. Information questions place the question word (Dove, Quando, Come, Chi, Che cosa, Perché, Quanto, Quale) first.',
    },
    exceptions: {
      bn: "Qual è? লিখতে অ্যাপস্ট্রফি লাগে না (Qual'è ভুল)। আর che cosa-র সংক্ষেপে cosa বা che বলা যায়।",
      en: "Qual è never takes an apostrophe. che cosa can shorten to cosa or che.",
    },
    commonMistakes: [
      { wrong: "Qual'è il tuo nome?", right: 'Qual è il tuo nome?', note: { bn: 'qual è-তে অ্যাপস্ট্রফি হয় না।', en: 'Never write an apostrophe in qual è.' } },
    ],
    examples: [
      { it: 'A che ora apre il supermercato?', tr: { bn: 'সুপারমার্কেট কয়টায় খোলে?', en: 'What time does the supermarket open?' } },
      { it: 'Quanto costa un biglietto per Venezia?', tr: { bn: 'ভেনিসের একটা টিকিটের দাম কত?', en: 'How much is a ticket to Venice?' } },
    ],
    exercises: [
      {
        id: 'ex-dom-1',
        prompt: { bn: 'শুদ্ধ বানান কোনটি?', en: 'Which spelling is right?' },
        options: ["Qual'è il tuo indirizzo?", 'Qual è il tuo indirizzo?', 'Quale è il tuo indirizzo?', 'Chi è il tuo indirizzo?'],
        answer: 1,
        explanation: { bn: 'Qual è (অ্যাপস্ট্রফি ছাড়া) শুদ্ধ।', en: 'Qual è has no apostrophe.' },
      },
    ],
    storyIds: ['st-a1-14'],
    vocabKeys: ['w:A1:dove', 'w:A1:quando', 'w:A1:quanto'],
  },
  preposizioni: {
    rule: {
      bn: 'মূল সরল অব্যয়: di (এর/উৎস), a (শহর/প্রতি/সময়ে), da (থেকে/কারও কাছে), in (দেশ/ঘরের ভেতরে/যানবাহন), con (সাথে), su (উপরে), per (জন্য/দিকে), tra/fra (মাঝে/পরে)।',
      en: 'Core simple prepositions: di (of/from), a (cities/at/to), da (from/at someone’s), in (countries/transport/inside), con (with), su (on), per (for), tra/fra (between/in).',
    },
    exceptions: {
      bn: 'a casa, a scuola, a letto-তে a বসে; কিন্তু in ufficio, in banca, in farmacia, in cucina, in montagna-তে in বসে।',
      en: 'Fixed phrases: a casa, a scuola, a letto vs in ufficio, in banca, in farmacia, in cucina.',
    },
    commonMistakes: [
      { wrong: 'Abito in Roma.', right: 'Abito a Roma.', note: { bn: 'শহরের আগে a, দেশের আগে in।', en: 'Use a for cities, in for countries.' } },
    ],
    examples: [
      { it: 'Vado a Firenze in treno.', tr: { bn: 'আমি ট্রেনে করে ফ্লোরেন্সে যাচ্ছি।', en: 'I am going to Florence by train.' } },
      { it: 'Questo messaggio è per Maria.', tr: { bn: 'এই মেসেজটা মারিয়ার জন্য।', en: 'This message is for Maria.' } },
    ],
    exercises: [
      {
        id: 'ex-prep-1',
        prompt: { bn: 'শূন্যস্থান পূরণ করুন:', en: 'Fill in the blank:' },
        it: 'Mia cugina studia ___ Bologna, ___ Italia.',
        options: ['in / a', 'a / in', 'da / in', 'per / a'],
        answer: 1,
        explanation: { bn: 'শহর Bologna-এর আগে a এবং দেশ Italia-র আগে in।', en: 'City takes a; country takes in.' },
      },
    ],
    storyIds: ['st-a1-15'],
    vocabKeys: ['w:A1:in', 'w:A1:a', 'w:A1:da'],
  },
  aggettivi: {
    rule: {
      bn: 'বিশেষণ সাধারণত বিশেষ্যের পরে বসে ও লিঙ্গ-বচনে মেলে। ১ম শ্রেণি (-o/-a/-i/-e): nuovo/nuova/nuovi/nuove। ২য় শ্রেণি (-e/-i): grande/grandi, facile/facili।',
      en: 'Adjectives usually follow the noun and agree in gender/number. Class 1 (-o/-a/-i/-e): nuovo/a/i/e. Class 2 (-e/-i): grande/grandi.',
    },
    exceptions: {
      bn: 'blu, rosa, viola, gratis রং/বিশেষণ কখনো রূপ বদলায় না (le scarpe blu)। bello এবং buono বিশেষ্যের আগে বসলে আর্টিকেলের মতো পরিবর্তিত হয়।',
      en: 'Invariable adjectives like blu, rosa, gratis never change form (le scarpe blu).',
    },
    commonMistakes: [
      { wrong: 'Le case grande', right: 'Le case grandi', note: { bn: 'বহুবচন case-এর সাথে grandi হবে।', en: 'Plural nouns take grandi.' } },
    ],
    examples: [
      { it: 'Ho comprato una giacca verde.', tr: { bn: 'আমি একটা সবুজ জ্যাকেট কিনেছি।', en: 'I bought a green jacket.' } },
      { it: 'I treni italiani sono veloci.', tr: { bn: 'ইতালীয় ট্রেনগুলো দ্রুতগতির।', en: 'Italian trains are fast.' } },
    ],
    exercises: [
      {
        id: 'ex-agg-1',
        prompt: { bn: 'সঠিক মিল বেছে নিন:', en: 'Pick the agreeing adjective:' },
        it: 'Le stanze sono molto ___.',
        options: ['piccolo', 'piccola', 'piccoli', 'piccole'],
        answer: 3,
        explanation: { bn: 'le stanze স্ত্রীলিঙ্গ বহুবচন, তাই piccole।', en: 'le stanze is feminine plural, so piccole.' },
      },
    ],
    storyIds: ['st-a1-16'],
    vocabKeys: ['w:A1:grande', 'w:A1:piccolo', 'w:A1:nuovo'],
  },
  piacere: {
    rule: {
      bn: 'একবচন বিশেষ্য বা ক্রিয়ার (infinito) সাথে mi piace এবং বহুবচন বিশেষ্যের সাথে mi piacciono। অন্য ব্যক্তির জন্য ti, gli, le, ci, vi ব্যবহার হয়।',
      en: 'Use piace with singular nouns or infinitives, and piacciono with plural nouns. Indirect pronouns mark the person: mi, ti, gli, le, ci, vi.',
    },
    exceptions: {
      bn: 'জোর দিয়ে বলার জন্য সর্বনামের বদলে a me / a te ব্যবহার হয়: A me piace il tè, a te no।',
      en: 'Use a me / a te instead of mi / ti when emphasizing contrast.',
    },
    commonMistakes: [
      { wrong: 'Mi piace i fiori.', right: 'Mi piacciono i fiori.', note: { bn: 'i fiori বহুবচন, তাই piacciono।', en: 'i fiori is plural, so use piacciono.' } },
    ],
    examples: [
      { it: 'Ti piace studiare in biblioteca?', tr: { bn: 'তোমার কি লাইব্রেরিতে পড়তে ভালো লাগে?', en: 'Do you like studying in the library?' } },
      { it: 'Non mi piacciono i giorni di pioggia.', tr: { bn: 'বৃষ্টির দিন আমার ভালো লাগে না।', en: 'I do not like rainy days.' } },
    ],
    exercises: [
      {
        id: 'ex-piac-1',
        prompt: { bn: 'সঠিক রূপ বেছে নিন:', en: 'Pick the right verb form:' },
        it: 'A Giulia ___ molto i gatti.',
        options: ['piace', 'piacciono', 'piaci', 'piaciamo'],
        answer: 1,
        explanation: { bn: 'i gatti বহুবচন, তাই piacciono।', en: 'i gatti is plural, so piacciono.' },
      },
    ],
    storyIds: ['st-a1-17'],
    vocabKeys: ['w:A1:piacere', 'w:A1:il gatto', 'w:A1:il libro'],
  },
  modali: {
    rule: {
      bn: 'volere (চাওয়া), potere (পারা), dovere (অবশ্যই করতে হওয়া) সরাসরি অপরিবর্তিত ক্রিয়া (infinito) নেয় — মাঝখানে কোনো di বা a বসে না।',
      en: 'Modal verbs volere, potere, and dovere take a bare infinitive with no linking preposition.',
    },
    exceptions: {
      bn: 'ভদ্র অনুরোধে voglio-র বদলে vorrei (আমি চাইব / আমার চাই) ব্যবহার করুন।',
      en: 'For polite requests use vorrei instead of voglio.',
    },
    commonMistakes: [
      { wrong: 'Voglio di mangiare.', right: 'Voglio mangiare.', note: { bn: 'মডাল ক্রিয়ার পরে di বসে না।', en: 'Never put di after modal verbs.' } },
    ],
    examples: [
      { it: 'Posso pagare con la carta di credito?', tr: { bn: 'আমি কি ক্রেডিট কার্ডে পরিশোধ করতে পারি?', en: 'Can I pay by credit card?' } },
      { it: 'Dobbiamo comprare il pane fresco.', tr: { bn: 'আমাদের তাজা রুটি কিনতে হবে।', en: 'We have to buy fresh bread.' } },
    ],
    exercises: [
      {
        id: 'ex-mod-1',
        prompt: { bn: 'শূন্যস্থান পূরণ করুন:', en: 'Fill in the blank:' },
        it: 'Scusi, ___ aprire la finestra?',
        options: ['posso', 'possono', 'vuoi', 'deve'],
        answer: 0,
        explanation: { bn: 'নিজের জন্য অনুমতি চাইতে posso ব্যবহার হয়।', en: 'Asking permission for yourself uses posso.' },
      },
    ],
    storyIds: ['st-a1-18'],
    vocabKeys: ['w:A1:volere', 'w:A1:potere', 'w:A1:dovere'],
  },
  pronuncia: {
    rule: {
      bn: 'c ও g এর উচ্চারণ পরের স্বরবর্ণের ওপর নির্ভর করে: e/i-এর আগে নরম (চ / জ), a/o/u-এর আগে শক্ত (ক / গ)। নরম ধ্বনিকে শক্ত করতে h যোগ হয় (ch, gh)।',
      en: 'c and g are soft before e/i ("ch"/"j") and hard before a/o/u ("k"/"g"). Inserting h keeps them hard before e/i (ch, gh).',
    },
    exceptions: {
      bn: 'বিদেশি শব্দ ছাড়া ইতালিয়ানে k, w, x, y অক্ষর খুব কম ব্যবহৃত হয়।',
      en: 'Letters j, k, w, x, y appear mainly in loanwords.',
    },
    commonMistakes: [
      { wrong: 'ciao কে কিয়াও বলা', right: 'চাও (chow)', note: { bn: 'ci + a-তে i উচ্চারিত হয় না, শুধু c-কে নরম করে।', en: 'In ciao, i only softens c into "ch".' } },
    ],
    examples: [
      { it: 'Prendo gli spaghetti e il gelato.', tr: { bn: 'আমি স্প্যাগেটি আর জেলাটো নিচ্ছি।', en: 'I am having spaghetti and gelato.' } },
      { it: 'La chiave della chiesa è piccola.', tr: { bn: 'গির্জার চাবিটা ছোট।', en: 'The church key is small.' } },
    ],
    exercises: [
      {
        id: 'ex-pron-1',
        prompt: { bn: '"chiave" শব্দে "ch" কীভাবে উচ্চারিত হয়?', en: 'How is "ch" pronounced in "chiave"?' },
        options: ['"চ" এর মতো', '"ক" এর মতো', '"শ" এর মতো', '"হ" এর মতো'],
        answer: 1,
        explanation: { bn: 'ch+i শক্ত "ক" ধ্বনি দেয়।', en: 'ch before i always makes a hard "k" sound.' },
      },
    ],
    storyIds: ['st-a1-01'],
    vocabKeys: ['w:A1:la chiave', 'w:A1:la chiesa', 'w:A1:ciao'],
  },
  'genere-numero': {
    rule: {
      bn: 'বিশেষ্যের শেষ অক্ষর লিঙ্গ ও বচন নির্দেশ করে: -o/-i (পুং), -a/-e (স্ত্রী), -e/-i (উভয়)। বিশেষ্যের সাথে আর্টিকেল ও বিশেষণকেও বহুবচনে বদলাতে হয়।',
      en: 'Noun endings signal gender and number: -o→-i (m), -a→-e (f), -e→-i (m/f). Articles and adjectives must match.',
    },
    exceptions: {
      bn: 'la mano → le mani, l’uomo → gli uomini, l’uovo → le uova (পুং একবচন, স্ত্রী বহুবচন) এবং il caffè → i caffè।',
      en: 'Irregulars: la mano → le mani, l’uomo → gli uomini, l’uovo → le uova, and invariable accented nouns like i caffè.',
    },
    commonMistakes: [
      { wrong: 'le cittàs', right: 'le città', note: { bn: 'ইতালিয়ানে -s যোগ করে বহুবচন হয় না।', en: 'Italian never forms plurals by adding -s.' } },
    ],
    examples: [
      { it: 'Questi libri sono interessanti.', tr: { bn: 'এই বইগুলো মজাদার।', en: 'These books are interesting.' } },
      { it: 'Le città italiane hanno belle piazze.', tr: { bn: 'ইতালীয় শহরগুলোতে সুন্দর চত্বর আছে।', en: 'Italian cities have beautiful squares.' } },
    ],
    exercises: [
      {
        id: 'ex-gen-1',
        prompt: { bn: '"la chiave"-এর বহুবচন কী?', en: 'What is the plural of "la chiave"?' },
        options: ['le chiave', 'i chiavi', 'le chiavi', 'gli chiavi'],
        answer: 2,
        explanation: { bn: 'la বহুবচনে le এবং chiave (-e) বহুবচনে chiavi (-i) হয়।', en: 'la → le and -e → -i: le chiavi.' },
      },
    ],
    storyIds: ['st-a1-05'],
    vocabKeys: ['w:A1:la chiave', 'w:A1:la città', "w:A1:l'uovo"],
  },
  'possessivi-a1': {
    rule: {
      bn: 'সম্বন্ধসূচক শব্দ (mio, tuo, suo, nostro, vostro, loro) মালিকের নয়, বরং যে জিনিসের মালিকানা বোঝায় তার লিঙ্গ-বচন অনুযায়ী বদলায়।',
      en: 'Possessives agree in gender and number with the thing owned, not with the owner.',
    },
    exceptions: {
      bn: 'একবচন পরিবারের সদস্যের আগে আর্টিকেল বসে না (mia madre, mio zio), তবে loro-র সাথে সবসময় বসে (il loro padre) এবং বহুবচন পরিবারে বসে (le mie sorelle)।',
      en: 'Singular unmodified family nouns drop the article (mia madre), except loro (il loro padre) and plural family nouns (le mie sorelle).',
    },
    commonMistakes: [
      { wrong: 'la mia sorella', right: 'mia sorella', note: { bn: 'একবচন ঘনিষ্ঠ আত্মীয়ের আগে আর্টিকেল বাদ যায়।', en: 'Drop the article before singular unmodified family nouns.' } },
    ],
    examples: [
      { it: 'Mio padre prepara la colazione.', tr: { bn: 'আমার বাবা নাস্তা তৈরি করেন।', en: 'My father makes breakfast.' } },
      { it: 'I nostri amici vengono da Napoli.', tr: { bn: 'আমাদের বন্ধুরা নাপোলি থেকে আসছে।', en: 'Our friends are coming from Naples.' } },
    ],
    exercises: [
      {
        id: 'ex-poss-1',
        prompt: { bn: 'সঠিক বাক্য কোনটি?', en: 'Which sentence is correct?' },
        options: ['Il mio fratello abita a Milano.', 'Mio fratello abita a Milano.', 'Mia fratello abita a Milano.', 'I mio fratelli abitano a Milano.'],
        answer: 1,
        explanation: { bn: 'একবচন ভাইয়ের আগে আর্টিকেল বসে না: Mio fratello।', en: 'Singular brother drops the article: Mio fratello.' },
      },
    ],
    storyIds: ['st-a1-02', 'st-a1-19'],
    vocabKeys: ['w:A1:la famiglia', 'w:A1:il padre', 'w:A1:la sorella'],
  },
  dimostrativi: {
    rule: {
      bn: 'questo/questa/questi/queste (কাছের জিনিস) এবং quello/quella (দূরের জিনিস)। বিশেষ্যের আগে quel/quello/quell’ ব্যবহার হয় il/lo/l’-এর মতো করে।',
      en: 'questo/a/i/e means "this/these"; quello means "that/those" and matches definite article endings before a noun.',
    },
    exceptions: {
      bn: 'স্বরবর্ণের আগে একবচনে quest’ হতে পারে: quest’anno (এই বছর)।',
      en: 'questo can elide before vowels in common phrases like quest’anno.',
    },
    commonMistakes: [
      { wrong: 'quello treno', right: 'quel treno', note: { bn: 'সাধারণ ব্যঞ্জনের আগে quello নয়, quel বসে।', en: 'Use quel before regular consonants.' } },
    ],
    examples: [
      { it: 'Quanto costa quella giacca nera?', tr: { bn: 'ঐ কালো জ্যাকেটটার দাম কত?', en: 'How much does that black jacket cost?' } },
      { it: 'Prendo questi pomodori freschi.', tr: { bn: 'আমি এই তাজা টমেটোগুলো নিচ্ছি।', en: 'I am taking these fresh tomatoes.' } },
    ],
    exercises: [
      {
        id: 'ex-dim-1',
        prompt: { bn: 'শূন্যস্থান পূরণ করুন:', en: 'Fill in the blank:' },
        it: '___ zaino è molto pesante.',
        options: ['Quel', 'Quello', 'Quella', 'Quei'],
        answer: 1,
        explanation: { bn: 'z-এর আগে lo বসে, তাই quello zaino।', en: 'z takes lo-pattern, so quello zaino.' },
      },
    ],
    storyIds: ['st-a1-20'],
    vocabKeys: ['w:A1:la giacca', 'w:A1:il prezzo', 'w:A1:il treno'],
  },
  'ora-data': {
    rule: {
      bn: 'ঘণ্টা বলতে Sono le + সংখ্যা; শুধু ১টার ক্ষেত্রে È l’una। মিনিট যোগ করতে e (Sono le quattro e dieci), কম বোঝাতে meno (Sono le cinque meno un quarto)।',
      en: 'Tell time with Sono le + hour (È l’una for 1:00). Add minutes with e, subtract with meno.',
    },
    exceptions: {
      bn: 'ইতালিয়ানে মাসের নাম ও দিনের নাম ছোট হাতের অক্ষরে লেখা হয়: lunedì, marzo।',
      en: 'Days of the week and months are not capitalised in Italian.',
    },
    commonMistakes: [
      { wrong: 'Sono le una.', right: "È l'una.", note: { bn: '১টা একবচন, তাই È l’una।', en: '1:00 is singular: È l’una.' } },
    ],
    examples: [
      { it: 'Il treno parte alle nove e un quarto.', tr: { bn: 'ট্রেন সোয়া নয়টায় ছাড়ে।', en: 'The train leaves at a quarter past nine.' } },
      { it: 'Oggi è martedì venti settembre.', tr: { bn: 'আজ মঙ্গলবার বিশে সেপ্টেম্বর।', en: 'Today is Tuesday, September twentieth.' } },
    ],
    exercises: [
      {
        id: 'ex-ora-1',
        prompt: { bn: '"দুপুর ১টা বাজে" কীভাবে বলবেন?', en: 'How do you say "It is 1 o’clock"?' },
        options: ['Sono le uno.', 'Sono le una.', "È l'una.", "È l'uno."],
        answer: 2,
        explanation: { bn: "১টার ক্ষেত্রে একবচন È l'una ব্যবহৃত হয়।", en: "1:00 always uses È l'una." },
      },
    ],
    storyIds: ['st-a1-21'],
    vocabKeys: ["w:A1:l'ora", 'w:A1:la data', 'w:A1:oggi'],
  },
  'preposizioni-luogo': {
    rule: {
      bn: 'স্থানের অব্যয়গুলোর পরের বিশেষ্য আর্টিকেলসহ এলে অনেকগুলো মিলিত রূপ নেয়: davanti alla (সামনে), vicino al (কাছে), lontano dal (দূরে), dentro lo/la।',
      en: 'Place prepositions combine with definite articles: davanti alla, vicino al, lontano dal, sul/sulla.',
    },
    exceptions: {
      bn: 'সর্বনামের আগে সাধারণত আলাদা থাকে: vicino a me, davanti a te।',
      en: 'Before pronouns keep them separate: vicino a me, davanti a te.',
    },
    commonMistakes: [
      { wrong: 'vicino la stazione', right: 'vicino alla stazione', note: { bn: 'vicino-এর পরে সবসময় a (এবং আর্টিকেল) লাগে।', en: 'vicino requires a before a noun.' } },
    ],
    examples: [
      { it: 'Il bar è davanti alla stazione.', tr: { bn: 'ক্যাফেটি স্টেশনের সামনে।', en: 'The café is in front of the station.' } },
      { it: 'La scuola è tra il parco e il museo.', tr: { bn: 'স্কুলটি পার্ক ও জাদুঘরের মাঝখানে।', en: 'The school is between the park and the museum.' } },
    ],
    exercises: [
      {
        id: 'ex-pluogo-1',
        prompt: { bn: 'শূন্যস্থান পূরণ করুন:', en: 'Complete the sentence:' },
        it: 'Abito ___ centro.',
        options: ['vicino al', 'vicino il', 'davanti il', 'lontano il'],
        answer: 0,
        explanation: { bn: 'vicino + a + il = vicino al।', en: 'vicino takes a + il → vicino al.' },
      },
    ],
    storyIds: ['st-a1-22'],
    vocabKeys: ['w:A1:la stazione', 'w:A1:vicino', 'w:A1:lontano'],
  },
  'riflessivi-a1': {
    rule: {
      bn: 'ক্রিয়ার মূল শেষে -si থাকলে সেটি প্রতিফলক ক্রিয়া (svegliarsi, alzarsi, chiamarsi)। বর্তমান কালে -si সামনে এসে mi, ti, si, ci, vi, si হয়।',
      en: 'Infinitives ending in -si are reflexive. In the present tense, move the pronoun before the verb: mi, ti, si, ci, vi, si.',
    },
    exceptions: {
      bn: 'ইনফিনিটিভের সাথে যুক্ত থাকতে পারে: Devo alzarmi presto (আমাকে তাড়াতাড়ি উঠতে হবে)।',
      en: 'With a modal verb, the pronoun can attach to the infinitive: Devo alzarmi.',
    },
    commonMistakes: [
      { wrong: 'Io sveglio alle sette.', right: 'Io mi sveglio alle sette.', note: { bn: 'নিজে জাগতে হলে mi যোগ করতেই হবে।', en: 'svegliarsi requires the reflexive pronoun mi.' } },
    ],
    examples: [
      { it: 'Ci alziamo presto il lunedì.', tr: { bn: 'সোমবারে আমরা তাড়াতাড়ি ঘুম থেকে উঠি।', en: 'We get up early on Mondays.' } },
      { it: 'Prima di dormire mi lavo i denti.', tr: { bn: 'ঘুমানোর আগে আমি দাঁত ব্রাশ করি।', en: 'Before sleeping I brush my teeth.' } },
    ],
    exercises: [
      {
        id: 'ex-rif-1',
        prompt: { bn: 'শূন্যস্থান পূরণ করুন:', en: 'Fill in the blank:' },
        it: 'Noi ___ vediamo alle sei.',
        options: ['mi', 'ti', 'ci', 'si'],
        answer: 2,
        explanation: { bn: 'noi-এর প্রতিফলক সর্বনাম ci।', en: 'The reflexive pronoun for noi is ci.' },
      },
    ],
    storyIds: ['st-a1-23'],
    vocabKeys: ['w:A1:presto', 'w:A1:la mattina', 'w:A1:dormire'],
  },
  'avere-espressioni': {
    rule: {
      bn: 'avere + বিশেষ্য: fame (খিদে), sete (পিপাসা), caldo (গরম), freddo (ঠান্ডা), sonno (ঘুম), paura (ভয়), fretta (তাড়া), ragione (সঠিক), bisogno di (প্রয়োজন)।',
      en: 'Use avere + noun for hunger, thirst, heat, cold, sleepiness, fear, hurry, being right, and need (avere bisogno di).',
    },
    exceptions: {
      bn: 'আবহাওয়ার ক্ষেত্রে fare (Fa caldo), কিন্তু ব্যক্তির অনুভূতির ক্ষেত্রে avere (Ho caldo) ব্যবহৃত হয়।',
      en: 'Weather uses fare (Fa caldo), whereas personal sensation uses avere (Ho caldo).',
    },
    commonMistakes: [
      { wrong: 'Sono fame.', right: 'Ho fame.', note: { bn: 'খিদে বোঝাতে essere নয়, avere বসে।', en: 'Use avere, not essere, for hunger.' } },
    ],
    examples: [
      { it: 'Ho molta sete dopo la corsa.', tr: { bn: 'দৌড়ানোর পর আমার খুব পিপাসা পেয়েছে।', en: 'I am very thirsty after the run.' } },
      { it: 'Abbiamo bisogno di un biglietto.', tr: { bn: 'আমাদের একটা টিকিট দরকার।', en: 'We need a ticket.' } },
    ],
    exercises: [
      {
        id: 'ex-avexp-1',
        prompt: { bn: '"আমার তাড়া আছে" ইতালিয়ানে কীভাবে বলবেন?', en: 'How do you say "I am in a hurry"?' },
        options: ['Sono fretta.', 'Ho fretta.', 'Faccio fretta.', 'Sto fretta.'],
        answer: 1,
        explanation: { bn: 'তাড়া বোঝাতে avere fretta ব্যবহার হয়।', en: 'Italian uses avere fretta.' },
      },
    ],
    storyIds: ['st-a1-24'],
    vocabKeys: ['w:A1:la paura', 'w:A1:caldo', 'w:A1:freddo'],
  },
  'struttura-frase': {
    rule: {
      bn: 'স্বাভাবিক ক্রম: (কর্তা) + ক্রিয়া + কর্ম + স্থান + সময়। ক্রিয়ার আগে সর্বনাম সাধারণত বাদ থাকে। বিশেষ্য ও বিশেষণের ক্রম: বিশেষ্য + বিশেষণ (un libro nuovo)।',
      en: 'Default order: (Subject) + Verb + Object + Place + Time. Adjectives normally follow nouns (un libro nuovo).',
    },
    exceptions: {
      bn: 'সময় বা স্থান জোর দিতে বাক্যের শুরুতে আসতে পারে: Domani mattina vado a Milano। কিছু ছোট বিশেষণ (bello, buono, grande, piccolo, nuovo) কখনো কখনো আগে বসতে পারে।',
      en: 'Time/place phrases often move to the front for emphasis. Common short adjectives like bello, buono, grande can precede the noun.',
    },
    commonMistakes: [
      { wrong: 'Io sempre parlo italiano.', right: 'Parlo sempre italiano.', note: { bn: 'sempre সাধারণত ক্রিয়ার ঠিক পরে বসে।', en: 'Frequency adverbs like sempre usually follow the verb.' } },
    ],
    examples: [
      { it: 'Ogni mattina bevo un caffè al bar.', tr: { bn: 'প্রতিদিন সকালে আমি ক্যাফেতে একটি কফি খাই।', en: 'Every morning I drink a coffee at the café.' } },
      { it: 'Di solito studiamo italiano insieme.', tr: { bn: 'সাধারণত আমরা একসাথে ইতালিয়ান পড়ি।', en: 'Usually we study Italian together.' } },
    ],
    exercises: [
      {
        id: 'ex-str-1',
        prompt: { bn: 'সবচেয়ে স্বাভাবিক ইতালিয়ান বাক্যক্রম কোনটি?', en: 'Which word order is most natural?' },
        options: ['Io leggo sempre il giornale.', 'Io sempre leggo il giornale.', 'Leggo il sempre giornale.', 'Sempre io leggo giornale il.'],
        answer: 0,
        explanation: { bn: 'sempre সাধারণত ক্রিয়ার পরে বসে।', en: 'sempre normally follows the verb directly.' },
      },
    ],
    storyIds: ['st-a1-08', 'st-a1-23'],
    vocabKeys: ['w:A1:sempre', 'w:A1:ogni', 'w:A1:oggi'].filter((k) => k !== 'w:A1:ogni'),
  },
};
