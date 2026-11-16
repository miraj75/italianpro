import type { LevelId, Tr } from './types';

export interface GrammarTopic {
  id: string;
  level: LevelId;
  title: string;
  name: Tr;
  explanation: Tr;
  /** Optional form table: [label, italian form]. */
  table?: [string, string][];
}

const P = ['io', 'tu', 'lui/lei', 'noi', 'voi', 'loro'];
const conj = (forms: string[]): [string, string][] => forms.map((f, i) => [P[i]!, f]);

export const GRAMMAR_TOPICS: GrammarTopic[] = [
  // ---------- A1 ----------
  {
    id: 'essere', level: 'A1', title: 'Essere',
    name: { bn: 'essere (হওয়া)', en: 'essere (to be)' },
    explanation: {
      bn: 'পরিচয়, জাতীয়তা, পেশা, বৈশিষ্ট্য ও অবস্থান বোঝাতে essere ব্যবহার হয়। এটি অনিয়মিত ক্রিয়া। সর্বনাম সাধারণত বাদ দেওয়া হয়।',
      en: 'essere expresses identity, nationality, profession, qualities and location. It is irregular; subject pronouns are usually dropped.',
    },
    table: conj(['sono', 'sei', 'è', 'siamo', 'siete', 'sono']),
  },
  {
    id: 'avere', level: 'A1', title: 'Avere',
    name: { bn: 'avere (থাকা)', en: 'avere (to have)' },
    explanation: {
      bn: 'মালিকানা ও বয়স বোঝাতে avere। কিছু শারীরিক অনুভূতিও avere দিয়ে: ho fame (খিদে), ho sete (পিপাসা), ho freddo (ঠান্ডা)। h উচ্চারিত হয় না।',
      en: 'avere expresses possession and age, plus physical states: ho fame, ho sete, ho freddo. The h is silent.',
    },
    table: conj(['ho', 'hai', 'ha', 'abbiamo', 'avete', 'hanno']),
  },
  {
    id: 'articoli', level: 'A1', title: 'Gli articoli',
    name: { bn: 'আর্টিকেল (il, la, lo, un...)', en: 'Articles' },
    explanation: {
      bn: 'বিশেষ্যের লিঙ্গ (পুং/স্ত্রী) ও প্রথম অক্ষর অনুযায়ী আর্টিকেল বদলায়। পুংলিঙ্গ: il (সাধারণ), lo (s+ব্যঞ্জন, z), l\' (স্বরবর্ণ)। স্ত্রীলিঙ্গ: la, l\'। বহুবচনে: i, gli, le। অনির্দিষ্ট: un, uno, una, un\'।',
      en: 'Articles agree with gender and the first letter. Masculine: il, lo (s+consonant, z), l\' (vowel). Feminine: la, l\'. Plural: i, gli, le. Indefinite: un, uno, una, un\'.',
    },
    table: [['il libro', 'i libri'], ['lo studente', 'gli studenti'], ["l'amico", 'gli amici'], ['la casa', 'le case'], ["l'amica", 'le amiche']],
  },
  {
    id: 'ce', level: 'A1', title: "C'è / Ci sono",
    name: { bn: "c'è / ci sono (আছে)", en: "c'è / ci sono (there is / are)" },
    explanation: {
      bn: "কোনো কিছুর অস্তিত্ব বোঝাতে: একবচনে c'è, বহুবচনে ci sono। প্রশ্নে স্বর উঁচু করুন: C'è un bar qui?",
      en: "To say something exists: c'è (singular), ci sono (plural). Raise your intonation for questions.",
    },
  },
  {
    id: 'presente-are', level: 'A1', title: 'Presente: -are',
    name: { bn: 'বর্তমান কাল: -are ক্রিয়া', en: 'Present tense: -are verbs' },
    explanation: {
      bn: '-are বাদ দিয়ে মূলের সাথে প্রত্যয় যোগ করুন: -o, -i, -a, -iamo, -ate, -ano। ইতালিয়ান বর্তমান কাল "করি" ও "করছি" দুটোই বোঝায়।',
      en: 'Drop -are and add -o, -i, -a, -iamo, -ate, -ano. The Italian present covers both "I speak" and "I am speaking".',
    },
    table: conj(['parlo', 'parli', 'parla', 'parliamo', 'parlate', 'parlano']),
  },
  {
    id: 'presente-ere-ire', level: 'A1', title: 'Presente: -ere / -ire',
    name: { bn: 'বর্তমান কাল: -ere ও -ire ক্রিয়া', en: 'Present tense: -ere and -ire verbs' },
    explanation: {
      bn: '-ere: -o, -i, -e, -iamo, -ete, -ono (leggere → leggo)। -ire: -o, -i, -e, -iamo, -ite, -ono (dormire → dormo)। কিছু -ire ক্রিয়ায় -isc- যোগ হয়: capire → capisco, capisci, capisce, capiamo, capite, capiscono।',
      en: '-ere: -o, -i, -e, -iamo, -ete, -ono. -ire: -o, -i, -e, -iamo, -ite, -ono. Some -ire verbs insert -isc-: capisco, capisci, capisce, capiamo, capite, capiscono.',
    },
    table: conj(['leggo', 'leggi', 'legge', 'leggiamo', 'leggete', 'leggono']),
  },
  {
    id: 'irregolari', level: 'A1', title: 'Verbi irregolari',
    name: { bn: 'অনিয়মিত ক্রিয়া (fare, andare, venire, stare)', en: 'Irregular verbs' },
    explanation: {
      bn: 'সবচেয়ে বেশি ব্যবহৃত ক্রিয়াগুলো অনিয়মিত — মুখস্থ করতে হবে। fare: faccio, fai, fa, facciamo, fate, fanno। andare: vado, vai, va, andiamo, andate, vanno। আবহাওয়ায় fare: Fa caldo।',
      en: 'The most frequent verbs are irregular and must be memorised. fare is also used for weather: Fa caldo.',
    },
    table: conj(['vado', 'vai', 'va', 'andiamo', 'andate', 'vanno']),
  },
  {
    id: 'negazione', level: 'A1', title: 'La negazione',
    name: { bn: 'না-বাচক বাক্য (non)', en: 'Negation (non)' },
    explanation: {
      bn: 'ক্রিয়ার ঠিক আগে "non" বসান: Non parlo francese। "mai" (কখনো না) ক্রিয়ার পরে বসে, কিন্তু non থাকে: Non bevo mai caffè।',
      en: 'Put "non" right before the verb. With "mai" (never), keep non: Non bevo mai caffè.',
    },
  },
  {
    id: 'domande', level: 'A1', title: 'Le domande',
    name: { bn: 'প্রশ্ন করা', en: 'Asking questions' },
    explanation: {
      bn: 'হ্যাঁ/না প্রশ্নে বাক্যের গঠন বদলায় না, শুধু স্বর উঁচু হয়: Parli italiano? প্রশ্নবোধক শব্দ বাক্যের শুরুতে: Dove, Quando, Come, Perché, Chi, Che cosa, Quanto, Quale।',
      en: 'Yes/no questions keep normal word order with rising intonation. Question words go first: Dove, Quando, Come, Perché, Chi, Che cosa, Quanto, Quale.',
    },
  },
  {
    id: 'preposizioni', level: 'A1', title: 'Le preposizioni semplici',
    name: { bn: 'সরল অব্যয় (di, a, da, in, con, su, per)', en: 'Simple prepositions' },
    explanation: {
      bn: 'শহরের সাথে a (a Roma), দেশের সাথে in (in Italia)। মালিকানায় di (il libro di Anna)। "থেকে" ও কারও বাসায় da (vado dal medico)। con = সাথে, per = জন্য, senza = ছাড়া।',
      en: 'Cities take a, countries take in. di = of/possession, da = from / at someone\'s place, con = with, per = for, senza = without.',
    },
  },
  {
    id: 'aggettivi', level: 'A1', title: 'Gli aggettivi',
    name: { bn: 'বিশেষণের মিল', en: 'Adjective agreement' },
    explanation: {
      bn: 'বিশেষণ সাধারণত বিশেষ্যের পরে বসে ও লিঙ্গ-বচনে মেলে। -o বিশেষণ: rosso, rossa, rossi, rosse। -e বিশেষণ: grande, grandi।',
      en: 'Adjectives usually follow the noun and agree in gender and number. -o type: rosso/a/i/e. -e type: grande/grandi.',
    },
    table: [['il libro nuovo', 'i libri nuovi'], ['la casa nuova', 'le case nuove'], ['la città grande', 'le città grandi']],
  },
  {
    id: 'piacere', level: 'A1', title: 'Piacere',
    name: { bn: 'ভালো লাগা: mi piace / mi piacciono', en: 'Liking: mi piace / mi piacciono' },
    explanation: {
      bn: 'ইতালিয়ানে "আমার কাছে X ভালো লাগে" বলা হয়। পছন্দের জিনিস একবচন বা ক্রিয়া হলে piace, বহুবচন হলে piacciono: Mi piace la pizza / Mi piacciono i gatti।',
      en: 'Italian says "X pleases me". Use piace with a singular noun or verb, piacciono with plurals.',
    },
    table: [['a me', 'mi piace'], ['a te', 'ti piace'], ['a lui', 'gli piace'], ['a lei', 'le piace'], ['a noi', 'ci piace']],
  },
  {
    id: 'modali', level: 'A1', title: 'Volere, potere, dovere',
    name: { bn: 'মডাল ক্রিয়া: চাওয়া, পারা, করতে হওয়া', en: 'Modal verbs' },
    explanation: {
      bn: 'মডাল ক্রিয়ার পরে মূল ক্রিয়া অপরিবর্তিত (infinito) থাকে: Voglio imparare, Posso entrare?, Devo lavorare।',
      en: 'Modals are followed by an infinitive: Voglio imparare, Posso entrare?, Devo lavorare.',
    },
    table: [['volere', 'voglio, vuoi, vuole, vogliamo, volete, vogliono'], ['potere', 'posso, puoi, può, possiamo, potete, possono'], ['dovere', 'devo, devi, deve, dobbiamo, dovete, devono']],
  },
  {
    id: 'pronuncia', level: 'A1', title: 'Alfabeto e pronuncia',
    name: { bn: 'বর্ণমালা ও উচ্চারণের নিয়ম', en: 'Alphabet and pronunciation' },
    explanation: {
      bn: 'ইতালিয়ানে প্রায় প্রতিটি অক্ষর যেমন লেখা হয় তেমনই উচ্চারিত হয়। c+e/i = চ (ciao), c+a/o/u = ক (casa), ch+e/i = ক (chi)। g+e/i = জ (gelato), gh+e/i = গ (spaghetti)। h কখনো উচ্চারিত হয় না। দ্বিত্ব ব্যঞ্জনবর্ণ (tt, ll, zz) একটু জোর দিয়ে বা টেনে উচ্চারণ করুন।',
      en: 'Italian spelling is mostly phonetic. c before e/i sounds like "ch" (ciao), before a/o/u like "k" (casa); ch keeps the "k" sound before e/i (chi). g before e/i is soft "j" (gelato); gh is hard "g". h is always silent. Double consonants (tt, ll, zz) are held slightly longer.',
    },
    table: [['c + e/i', 'ce (চে), ci (চি)'], ['c + a/o/u / ch', 'ca (কা), chi (কি)'], ['g + e/i / gh', 'ge (জে), ghi (গি)'], ['sc + e/i', 'sce (শে), sci (শি)'], ['gl + i / gn', 'gli (ল্যি), gn (ন্য)']],
  },
  {
    id: 'genere-numero', level: 'A1', title: 'Genere e numero',
    name: { bn: 'বিশেষ্যের লিঙ্গ ও বচন', en: 'Noun gender and plural' },
    explanation: {
      bn: 'সাধারণত -o দিয়ে শেষ হওয়া শব্দ পুংলিঙ্গ (বহুবচন -i: libro → libri), আর -a দিয়ে শেষ হওয়া শব্দ স্ত্রীলিঙ্গ (বহুবচন -e: casa → case)। -e দিয়ে শেষ হওয়া শব্দ পুং বা স্ত্রী দুই-ই হতে পারে (বহুবচন -i: studente → studenti, chiave → chiavi)। কিছু শব্দ অপরিবর্তিত থাকে: la città → le città, il caffè → i caffè।',
      en: 'Nouns ending in -o are usually masculine (plural -i: libro → libri); -a are usually feminine (plural -e: casa → case). Nouns ending in -e can be masculine or feminine and take -i in the plural. Accented nouns (città, caffè) do not change in the plural.',
    },
    table: [['il libro (-o)', 'i libri (-i)'], ['la casa (-a)', 'le case (-e)'], ['lo studente (-e)', 'gli studenti (-i)'], ['la chiave (-e)', 'le chiavi (-i)'], ['la città (accento)', 'le città (invariato)']],
  },
  {
    id: 'possessivi-a1', level: 'A1', title: 'I possessivi di base',
    name: { bn: 'মৌলিক সম্বন্ধসূচক (mio, tuo, suo)', en: 'Basic possessives' },
    explanation: {
      bn: 'অধিকার বোঝাতে il mio, la mia ইত্যাদি ব্যবহার হয় এবং বিশেষ্যের লিঙ্গ ও বচন অনুযায়ী রূপ বদলায়। একবচন ঘনিষ্ঠ আত্মীয়ের নামের আগে আর্টিকেল বসে না: mio padre, mia madre, mio fratello (কিন্তু বহুবচনে আর্টিকেল বসে: i miei fratelli)।',
      en: 'Possessives (mio, tuo, suo, nostro, vostro, loro) agree in gender and number with the noun possessed and normally take a definite article. Drop the article before singular unmodified family members: mio padre, mia sorella (but keep it in the plural: i miei fratelli).',
    },
    table: [['il mio / la mia', 'আমার (পুং / স্ত্রী)'], ['il tuo / la tua', 'তোমার'], ['il suo / la sua', 'তার / আপনার'], ['mio padre', 'আমার বাবা (আর্টিকেল নেই)'], ['i miei amici', 'আমার বন্ধুরা']],
  },
  {
    id: 'dimostrativi', level: 'A1', title: 'Questo e quello',
    name: { bn: 'নির্দেশক সর্বনাম (এই / ঐ)', en: 'Demonstratives: this and that' },
    explanation: {
      bn: 'কাছের জিনিসের জন্য questo/questa/questi/queste (এই)। দূরের জিনিসের জন্য quello/quella (ঐ); বিশেষ্যের আগে quello আর্টিকেলের নিয়ম মেনে চলে: quel libro, quell\'amico, quello studente, quella casa, quei libri, quegli amici, quelle case।',
      en: 'Use questo/a/i/e for "this/these" (near). Use quello for "that/those" (far); before a noun, quello follows definite-article endings: quel libro, quell\'amico, quello studente, quella casa, quei libri, quegli amici, quelle case.',
    },
    table: [['questo / questa', 'questi / queste (this / these)'], ['quel / quello / quell’', 'quei / quegli (that / those m.)'], ['quella / quell’', 'quelle (that / those f.)']],
  },
  {
    id: 'ora-data', level: 'A1', title: "L'ora e la data",
    name: { bn: 'সময়, দিন ও তারিখ বলা', en: 'Telling time and dates' },
    explanation: {
      bn: 'সময় জিজ্ঞেস করতে: Che ore sono? উত্তর: Sono le due, কিন্তু ১টায় একবচন: È l\'una, È mezzogiorno, È mezzanotte। নির্দিষ্ট সময়ে কাজ হলে alle + সময় (alle otto, all\'una)। তারিখে il + সংখ্যা + মাস: il 14 marzo (কিন্তু ১ তারিখে il primo marzo)।',
      en: 'Ask the time with Che ore sono? Answer with Sono le + hour (except È l\'una, È mezzogiorno, È mezzanotte). For "at" a time use alle (all\'una). Dates use il + cardinal number + month, except the 1st uses il primo.',
    },
    table: [["È l'una", '১টা বাজে'], ['Sono le tre e mezza', 'সাড়ে ৩টা বাজে'], ['Alle otto', '৮টায়'], ['Il primo maggio', '১লা মে'], ['Il dieci agosto', '১০ই আগস্ট']],
  },
  {
    id: 'preposizioni-luogo', level: 'A1', title: 'Preposizioni di luogo',
    name: { bn: 'স্থানের অব্যয় (ভেতরে, সামনে, পেছনে)', en: 'Prepositions of place' },
    explanation: {
      bn: 'অবস্থান বোঝাতে: dentro (ভেতরে), fuori (বাইরে), sopra/su (উপরে), sotto (নিচে), davanti a (সামনে), dietro (পেছনে), vicino a (কাছে), lontano da (দূরে), tra/fra (মাঝখানে)। শহরের জন্য a, দেশ ও বন্ধ ঘরের ভেতরের জন্য in।',
      en: 'Describe location with dentro (inside), fuori (outside), sopra (on/above), sotto (under), davanti a (in front of), dietro (behind), vicino a (near), lontano da (far from), tra/fra (between). Cities use a, countries use in.',
    },
    table: [['davanti alla stazione', 'স্টেশনের সামনে'], ['vicino al parco', 'পার্কের কাছে'], ['lontano da qui', 'এখান থেকে দূরে'], ['tra il bar e la posta', 'ক্যাফে ও পোস্ট অফিসের মাঝে']],
  },
  {
    id: 'riflessivi-a1', level: 'A1', title: 'I riflessivi di base',
    name: { bn: 'মৌলিক প্রতিফলক ক্রিয়া (chiamarsi, svegliarsi)', en: 'Basic reflexive verbs' },
    explanation: {
      bn: 'প্রতিদিনের রুটিনে chiamarsi, svegliarsi, alzarsi, lavarsi, vestirsi খুব ব্যবহৃত হয়। ক্রিয়ার আগে mi, ti, si, ci, vi, si বসে: Mi sveglio alle sette (আমি সাতটায় উঠি), Ci vediamo alle cinque (পাঁচটায় দেখা হবে)।',
      en: 'Common daily-routine verbs like chiamarsi, svegliarsi, alzarsi, lavarsi, and vestirsi place a reflexive pronoun (mi, ti, si, ci, vi, si) directly before the conjugated verb.',
    },
    table: [['io', 'mi sveglio'], ['tu', 'ti svegli'], ['lui/lei/Lei', 'si sveglia'], ['noi', 'ci svegliamo'], ['voi', 'vi svegliate'], ['loro', 'si svegliano']],
  },
  {
    id: 'avere-espressioni', level: 'A1', title: 'Espressioni con avere',
    name: { bn: 'avere দিয়ে অনুভূতি ও অবস্থা', en: 'Idiomatic expressions with avere' },
    explanation: {
      bn: 'ইংরেজি বা বাংলার মতো "হওয়া" নয়, বরং "থাকা" (avere) দিয়ে অনেক শারীরিক ও মানসিক অবস্থা বোঝানো হয়: avere fame (খিদে পাওয়া), avere sete (পিপাসা পাওয়া), avere freddo/caldo (ঠান্ডা/গরম লাগা), avere sonno (ঘুম পাওয়া), avere paura (ভয় পাওয়া), avere fretta (তাড়া থাকা), avere ragione (সঠিক হওয়া), avere bisogno di (দরকার হওয়া)।',
      en: 'Italian uses avere (to have) rather than essere for many physical states and feelings: avere fame (hungry), sete (thirsty), freddo/caldo (cold/hot), sonno (sleepy), paura (afraid), fretta (in a hurry), ragione (right), bisogno di (to need).',
    },
    table: [['ho fame / sete', 'খিদে / পিপাসা পেয়েছে'], ['ho freddo / caldo', 'ঠান্ডা / গরম লাগছে'], ['ho sonno / paura', 'ঘুম / ভয় পেয়েছে'], ['ho fretta', 'আমার তাড়া আছে'], ['ho bisogno di…', 'আমার … দরকার']],
  },
  {
    id: 'struttura-frase', level: 'A1', title: 'La struttura della frase',
    name: { bn: 'বাক্যের গঠন ও শব্দক্রম', en: 'Basic sentence structure' },
    explanation: {
      bn: 'সাধারণ ইতালিয়ান বাক্যের ক্রম: (কর্তা) + ক্রিয়া + কর্ম + স্থান/সময়। সর্বনাম প্রায়ই বাদ যায়। সময়বাচক শব্দ (oggi, sempre, di solito) শুরুতে বা শেষে বসে; sempre/mai-এর মতো ক্রিয়া-বিশেষণ সাধারণত ক্রিয়ার ঠিক পরেই বসে: Bevo sempre acqua।',
      en: 'Standard Italian word order is (Subject) + Verb + Object + Place/Time. Subject pronouns are normally omitted. Frequency adverbs like sempre and mai usually follow the verb directly, while time expressions (oggi, domani) sit at the start or end.',
    },
    table: [['(Io) + mangio + la pasta', 'সর্বনাম ঐচ্ছিক'], ['Parlo + sempre + italiano', 'ক্রিয়ার পরে sempre'], ['Domani + vado + a Roma', 'শুরুতে সময়বাচক শব্দ']],
  },
  // ---------- A2 ----------
  {
    id: 'passato-prossimo', level: 'A2', title: 'Passato prossimo (avere)',
    name: { bn: 'নিকট অতীত — avere দিয়ে', en: 'Present perfect with avere' },
    explanation: {
      bn: 'সম্পন্ন অতীত কাজ: avere-র বর্তমান রূপ + past participle। -are → -ato, -ere → -uto, -ire → -ito। অনিয়মিত: fatto, detto, letto, scritto, preso, visto, aperto।',
      en: 'Completed past actions: present of avere + past participle (-ato, -uto, -ito). Irregular: fatto, detto, letto, scritto, preso, visto, aperto.',
    },
    table: [['parlare', 'ho parlato'], ['vendere', 'ho venduto'], ['dormire', 'ho dormito'], ['fare', 'ho fatto']],
  },
  {
    id: 'passato-essere', level: 'A2', title: 'Passato prossimo (essere)',
    name: { bn: 'নিকট অতীত — essere দিয়ে', en: 'Present perfect with essere' },
    explanation: {
      bn: 'গতি ও অবস্থার পরিবর্তনের ক্রিয়া (andare, venire, partire, arrivare, nascere, restare) এবং প্রতিফলক ক্রিয়া essere নেয়। তখন participle কর্তার সাথে লিঙ্গ-বচনে মেলে: è andata, siamo partiti।',
      en: 'Verbs of motion/change and reflexive verbs take essere; the participle agrees with the subject: è andata, siamo partiti.',
    },
    table: [['lui', 'è andato'], ['lei', 'è andata'], ['loro (m)', 'sono andati'], ['loro (f)', 'sono andate']],
  },
  {
    id: 'riflessivi', level: 'A2', title: 'Verbi riflessivi',
    name: { bn: 'প্রতিফলক ক্রিয়া (svegliarsi...)', en: 'Reflexive verbs' },
    explanation: {
      bn: 'কাজটি কর্তা নিজের উপর করে। ক্রিয়ার আগে mi, ti, si, ci, vi, si বসে: Mi sveglio alle sette। অতীতে essere: Mi sono svegliato।',
      en: 'The action falls back on the subject. Use mi, ti, si, ci, vi, si before the verb. The past uses essere.',
    },
    table: conj(['mi alzo', 'ti alzi', 'si alza', 'ci alziamo', 'vi alzate', 'si alzano']),
  },
  {
    id: 'imperfetto', level: 'A2', title: "L'imperfetto",
    name: { bn: 'অসম্পূর্ণ অতীত (imperfetto)', en: 'The imperfect' },
    explanation: {
      bn: 'অতীতের অভ্যাস, বর্ণনা, চলমান অবস্থা: Da bambino giocavo… প্রত্যয়: -vo, -vi, -va, -vamo, -vate, -vano। essere অনিয়মিত: ero, eri, era, eravamo, eravate, erano। চলমান কাজের মাঝে হঠাৎ ঘটনা হলে ঘটনাটি passato prossimo-তে।',
      en: 'Past habits, descriptions and ongoing states. Endings -vo, -vi, -va, -vamo, -vate, -vano. A sudden event interrupting goes in the passato prossimo.',
    },
    table: conj(['parlavo', 'parlavi', 'parlava', 'parlavamo', 'parlavate', 'parlavano']),
  },
  {
    id: 'futuro', level: 'A2', title: 'Il futuro semplice',
    name: { bn: 'ভবিষ্যৎ কাল', en: 'Simple future' },
    explanation: {
      bn: 'প্রত্যয়: -ò, -ai, -à, -emo, -ete, -anno (-are ক্রিয়ায় a → e: parlerò)। অনিয়মিত: sarò, avrò, andrò, verrò, farò। অনুমান বোঝাতেও ব্যবহার হয়: Sarà a casa।',
      en: 'Endings -ò, -ai, -à, -emo, -ete, -anno (-are verbs change a → e). Irregular: sarò, avrò, andrò, verrò, farò. Also used for guesses: Sarà a casa.',
    },
    table: conj(['parlerò', 'parlerai', 'parlerà', 'parleremo', 'parlerete', 'parleranno']),
  },
  {
    id: 'pronomi-diretti', level: 'A2', title: 'Pronomi diretti',
    name: { bn: 'প্রত্যক্ষ কর্ম সর্বনাম (lo, la, li, le)', en: 'Direct object pronouns' },
    explanation: {
      bn: 'কর্মের পুনরাবৃত্তি এড়াতে: mi, ti, lo, la, ci, vi, li, le — ক্রিয়ার আগে বসে। অতীতে participle মিলে যায়: Le ho comprate।',
      en: 'Replace the object to avoid repetition; they go before the verb. In the past, the participle agrees with lo/la/li/le.',
    },
  },
  {
    id: 'pronomi-indiretti', level: 'A2', title: 'Pronomi indiretti',
    name: { bn: 'পরোক্ষ কর্ম সর্বনাম (gli, le...)', en: 'Indirect object pronouns' },
    explanation: {
      bn: '"কাউকে / কারও জন্য" বোঝাতে: mi, ti, gli (তাকে-পুং), le (তাকে-স্ত্রী), Le (আপনাকে), ci, vi, gli (তাদের)। piacere, servire, mancare, fare male এভাবে ব্যবহার হয়।',
      en: '"To/for someone": mi, ti, gli, le, Le (formal), ci, vi, gli. Used with piacere, servire, mancare, fare male.',
    },
  },
  {
    id: 'comparativi', level: 'A2', title: 'Comparativi e superlativi',
    name: { bn: 'তুলনা ও শ্রেষ্ঠত্ব', en: 'Comparatives and superlatives' },
    explanation: {
      bn: 'più … di (চেয়ে বেশি), meno … di (চেয়ে কম), (tanto) … quanto / come (সমান)। শ্রেষ্ঠত্ব: il più bello di…। অতিশয়: bellissimo। meglio = আরও ভালোভাবে, migliore = আরও ভালো (বিশেষণ)।',
      en: 'più … di, meno … di, come / quanto for equality. Superlative: il più … di. Absolute: -issimo. meglio (adverb) vs migliore (adjective).',
    },
  },
  {
    id: 'gerundio', level: 'A2', title: 'Stare + gerundio',
    name: { bn: 'এখন চলমান কাজ (sto facendo)', en: 'Present continuous' },
    explanation: {
      bn: 'ঠিক এই মুহূর্তে চলছে বোঝাতে stare + gerundio। -are → -ando, -ere/-ire → -endo: sto parlando, sto leggendo। অতীতে: stavo uscendo।',
      en: 'For actions in progress: stare + gerund (-ando / -endo).',
    },
  },
  {
    id: 'ci-ne', level: 'A2', title: 'Ci e ne',
    name: { bn: 'ci (সেখানে) ও ne (তার থেকে)', en: 'The particles ci and ne' },
    explanation: {
      bn: 'ci স্থান বোঝায় ("সেখানে"): Ci vado domani। ne পরিমাণ বা "এ সম্পর্কে": Ne ho due, Ne parliamo। প্রচলিত: ci vuole / ci vogliono (সময় লাগে), non ce la faccio।',
      en: 'ci replaces a place ("there"); ne replaces a quantity or "of/about it". Common: ci vuole / ci vogliono, non ce la faccio.',
    },
  },
  {
    id: 'preposizioni-articolate', level: 'A2', title: 'Preposizioni articolate',
    name: { bn: 'আর্টিকেলযুক্ত অব্যয় (al, nel, dal...)', en: 'Articulated prepositions' },
    explanation: {
      bn: 'a, da, di, in, su পরের আর্টিকেলের সাথে মিশে যায়: a + il = al, in + la = nella, di + gli = degli, su + il = sul, da + l\' = dall\'।',
      en: 'a, da, di, in, su merge with the article: al, nella, degli, sul, dall\'.',
    },
    table: [['a + il', 'al'], ['da + la', 'dalla'], ['di + i', 'dei'], ['in + lo', 'nello'], ['su + le', 'sulle']],
  },
  {
    id: 'imperativo', level: 'A2', title: "L'imperativo",
    name: { bn: 'আদেশ ও নির্দেশ', en: 'The imperative' },
    explanation: {
      bn: 'tu: -are → -a (gira!), -ere/-ire → -i (prendi!)। না-বাচক tu: non + infinito (non toccare!)। আনুষ্ঠানিক Lei: -are → -i, -ere/-ire → -a (giri, prenda)। noi: চলো করি (mangiamo!)।',
      en: 'tu: -a / -i. Negative tu: non + infinitive. Formal Lei: -i / -a. noi = "let\'s".',
    },
  },
  {
    id: 'condizionale', level: 'A2', title: 'Il condizionale presente',
    name: { bn: 'শর্তাধীন রূপ (ভদ্র অনুরোধ)', en: 'Present conditional' },
    explanation: {
      bn: 'ভদ্র অনুরোধ, ইচ্ছা ও পরামর্শ: Vorrei, Potrebbe, Dovresti। প্রত্যয়: -ei, -esti, -ebbe, -emmo, -este, -ebbero।',
      en: 'Polite requests, wishes and advice: Vorrei, Potrebbe, Dovresti. Endings -ei, -esti, -ebbe, -emmo, -este, -ebbero.',
    },
    table: conj(['vorrei', 'vorresti', 'vorrebbe', 'vorremmo', 'vorreste', 'vorrebbero']),
  },
  {
    id: 'possessivi', level: 'A2', title: 'I possessivi',
    name: { bn: 'সম্বন্ধসূচক (mio, tuo, suo...)', en: 'Possessives' },
    explanation: {
      bn: 'সাধারণত আর্টিকেলসহ: il mio libro, la mia casa। কিন্তু একবচন পরিবারের সদস্যের আগে আর্টিকেল বসে না: mio padre, mia sorella (তবে i miei genitori)। loro সবসময় আর্টিকেলসহ।',
      en: 'Usually with the article: il mio libro. No article before singular family members: mio padre — but i miei genitori, il loro…',
    },
    table: [['io', 'il mio / la mia'], ['tu', 'il tuo / la tua'], ['lui/lei', 'il suo / la sua'], ['noi', 'il nostro / la nostra'], ['voi', 'il vostro / la vostra'], ['loro', 'il loro / la loro']],
  },
  {
    id: 'tempo', level: 'A2', title: 'Espressioni di tempo',
    name: { bn: 'সময় প্রকাশ (da, fa, fra, per)', en: 'Time expressions' },
    explanation: {
      bn: 'এখনো চলছে এমন সময়কাল: বর্তমান + da (Abito qui da due anni)। "আগে": … fa (tre anni fa)। "পরে": fra / tra (fra una settimana)। সম্পন্ন সময়কাল: per (ho lavorato per cinque ore)।',
      en: 'Ongoing duration: present + da. "Ago": fa. "In (time)": fra/tra. Completed duration: per.',
    },
  },
  {
    id: 'connettivi', level: 'A2', title: 'Connettivi',
    name: { bn: 'সংযোজক শব্দ (perché, quindi, però)', en: 'Connectors' },
    explanation: {
      bn: 'বাক্য জোড়া লাগাতে: perché (কারণ), quindi (তাই), però / ma (কিন্তু), se (যদি), quando (যখন), mentre (যখন—একই সময়ে), anche se (যদিও)।',
      en: 'Linking ideas: perché, quindi, però, ma, se, quando, mentre, anche se.',
    },
  },
  {
    id: 'passato-irregolari', level: 'A2', title: 'Participi passati irregolari',
    name: { bn: 'অনিয়মিত পাস্ট পার্টিসিপল', en: 'Irregular past participles' },
    explanation: {
      bn: 'passato prossimo-তে অনেক সাধারণ ক্রিয়ার পার্টিসিপল অনিয়মিত: fare → fatto, dire → detto, leggere → letto, scrivere → scritto, prendere → preso, vedere → visto, aprire → aperto, chiudere → chiuso, rispondere → risposto, chiedere → chiesto, venire → venuto, rimanere → rimasto।',
      en: 'Many high-frequency verbs have irregular past participles: fare→fatto, dire→detto, leggere→letto, scrivere→scritto, prendere→preso, vedere→visto, aprire→aperto, chiudere→chiuso, rispondere→risposto, chiedere→chiesto.',
    },
    table: [['fare / dire', 'fatto / detto'], ['leggere / scrivere', 'letto / scritto'], ['prendere / vedere', 'preso / visto'], ['aprire / chiudere', 'aperto / chiuso'], ['venire / rimanere', 'venuto / rimasto']],
  },
  {
    id: 'accordo-participio', level: 'A2', title: 'Accordo del participio passato',
    name: { bn: 'অতীত ক্রিয়া-পার্টিসিপলের মিল', en: 'Past participle agreement' },
    explanation: {
      bn: 'essere সহ পার্টিসিপল সবসময় কর্তার লিঙ্গ-বচন মেনে চলে (Maria è partita, noi siamo andati)। avere সহ সাধারণত -o থাকে, কিন্তু lo, la, li, le প্রত্যক্ষ কর্ম সর্বনাম আগে বসলে পার্টিসিপল সর্বনামের সাথে মেলে: Le chiavi? Le ho trovate!',
      en: 'With essere, the past participle agrees with the subject. With avere, it stays -o unless preceded by a direct object pronoun (lo, la, li, le): Le ho viste! L’ho comprata!',
    },
    table: [['essere + f.sg.', 'Maria è arrivata'], ['essere + m.pl.', 'Siamo tornati'], ['avere + la', "L'ho vista (la casa)"], ['avere + le', 'Le ho comprate (le mele)']],
  },
  {
    id: 'imperfetto-vs-passato', level: 'A2', title: 'Imperfetto e passato prossimo',
    name: { bn: 'imperfetto বনাম passato prossimo', en: 'Imperfetto vs passato prossimo' },
    explanation: {
      bn: 'অতীতের গল্পে imperfetto পটভূমি, বয়স, আবহাওয়া, অনুভূতি ও অভ্যাস বোঝায় (Era tardi, pioveva)। passato prossimo হঠাৎ বা নির্দিষ্ট সম্পূর্ণ ঘটনা বোঝায় (è suonato il telefono)।',
      en: 'In past narration, imperfetto sets the scene, habits, weather, and ongoing states (Era tardi, dormivo), while passato prossimo reports specific completed actions or interruptions (quando è suonato il telefono).',
    },
    table: [['পটভূমি / অভ্যাস', 'Mentre dormivo… / Da piccolo giocavo'], ['সম্পূর্ণ ঘটনা', '…è arrivato Marco / Ieri ho giocato']],
  },
  {
    id: 'stare-per', level: 'A2', title: 'Stare per + infinito',
    name: { bn: 'প্রায় শুরু হতে যাওয়া কাজ (stare per)', en: 'About to do something (stare per)' },
    explanation: {
      bn: 'একটি কাজ ঠিক এখনই শুরু হতে যাচ্ছে বোঝাতে stare (বর্তমান বা অসম্পূর্ণ অতীত) + per + infinito বসে: Il treno sta per partire (ট্রেন এইমাত্র ছাড়তে যাচ্ছে)। অতীতে: Stavo per uscire।',
      en: 'Use stare + per + infinitive for an action on the verge of happening: Il treno sta per partire (about to leave), Stavo per chiamarti (I was about to call you).',
    },
    table: [['presente', 'sto per uscire'], ['tu / lui', 'stai per / sta per'], ['imperfetto', 'stavo per chiamare']],
  },
  {
    id: 'pronomi-relativi-a2', level: 'A2', title: 'Che e cui (base)',
    name: { bn: 'মৌলিক সম্বন্ধবাচক (che, dove, in cui)', en: 'Basic relative clauses (che, dove, in cui)' },
    explanation: {
      bn: 'দুটি বাক্য জোড়া দিতে che (যে/যা — ব্যক্তি ও বস্তু উভয়েই), স্থান বোঝাতে dove বা in cui ব্যবহার হয়: L’amico che abita a Roma, La città dove / in cui vivo।',
      en: 'Join clauses with che (who/which/that for subject or object) and dove or in cui for places: La città in cui abito, Il collega che lavora con me.',
    },
    table: [['ব্যক্তি/বস্তু', 'Il libro che leggo'], ['স্থান', 'La casa dove / in cui vivo']],
  },
  {
    id: 'indefiniti-a2', level: 'A2', title: 'Indefiniti di base',
    name: { bn: 'অনির্দিষ্ট শব্দ (qualcuno, qualcosa, ogni, tutti)', en: 'Common indefinites' },
    explanation: {
      bn: 'qualcuno (কেউ), qualcosa (কিছু), ogni + একবচন বিশেষ্য (প্রতিটি: ogni giorno), tutto/a/i/e + আর্টিকেল + বিশেষ্য (সব: tutti i giorni), qualche + একবচন বিশেষ্য (কয়েকটি: qualche amico), alcuni/alcune + বহুবচন।',
      en: 'qualcuno (someone), qualcosa (something), ogni + singular noun (every), qualche + singular noun (a few), tutti/e + article + plural noun (all/every).',
    },
    table: [['qualche + sg.', 'qualche giorno (কয়েক দিন)'], ['alcuni + pl.', 'alcuni giorni'], ['ogni + sg.', 'ogni mattina'], ['tutti + art. + pl.', 'tutti i giorni']],
  },
  {
    id: 'avverbi-a2', level: 'A2', title: 'Avverbi di modo e frequenza',
    name: { bn: 'ধরণ ও পৌনঃপুনিকতার ক্রিয়াবিশেষণ (-mente)', en: 'Adverbs of manner and frequency' },
    explanation: {
      bn: 'অনেক বিশেষণের স্ত্রীলিঙ্গ রূপের শেষে -mente যোগ করে ক্রিয়াবিশেষণ হয়: lenta → lentamente, facile → facilmente (le-এর শেষ e থাকে)। প্রায়ই বোঝাতে: spesso, di solito, quasi mai, già, ancora, appena।',
      en: 'Form manner adverbs by adding -mente to the feminine singular adjective (lento→lentamente; after -l/-r drop -e: facile→facilmente). Frequency/time: spesso, quasi mai, già, ancora, appena.',
    },
    table: [['veloce →', 'velocemente'], ['facile →', 'facilmente'], ['chiaro →', 'chiaramente'], ['অনিয়মিত', 'bene, male, spesso']],
  },
  {
    id: 'preposizioni-verbi', level: 'A2', title: 'Verbi seguiti da a / di',
    name: { bn: 'ক্রিয়ার পর অব্যয় (iniziare a, decidere di)', en: 'Verbs taking a or di + infinitive' },
    explanation: {
      bn: 'অনেক ক্রিয়ার পরে আরেকটি ক্রিয়া (infinito) বসাতে a বা di লাগে। a নেয়: iniziare a, cominciare a, provare a, riuscire a, imparare a, andare a। di নেয়: decidere di, cercare di, finire di, dimenticare di, pensare di, sperare di।',
      en: 'Many verbs link to an infinitive with a (iniziare a, provare a, riuscire a, imparare a) or di (decidere di, finire di, cercare di, sperare di, dimenticare di).',
    },
    table: [['+ a + inf.', 'inizio a studiare, riesco a capire'], ['+ di + inf.', 'decido di partire, finisco di lavorare']],
  },
  {
    id: 'verbi-pronominali-a2', level: 'A2', title: 'Verbi pronominali comuni',
    name: { bn: 'প্রচলিত সর্বনামযুক্ত ক্রিয়া (farcela, andarsene)', en: 'Everyday pronominal verbs' },
    explanation: {
      bn: 'দৈনন্দিন কথায় দুটি খুব জরুরি ক্রিয়া: farcela (পারা/সামলে ওঠা: Ce la faccio!, Non ce la faccio più) এবং andarsene (চলে যাওয়া: Me ne vado, Se ne sono andati)। এদের শেষে অর্থবদলের সর্বনাম যুক্ত থাকে।',
      en: 'Essential everyday idiomatic verbs with clitics: farcela (to manage/cope: Ce la faccio!), andarsene (to leave/go away: Me ne vado), volerci (to take time/resources: Ci vogliono dieci minuti).',
    },
    table: [['farcela', 'ce la faccio / non ce la fa'], ['andarsene', 'me ne vado / te ne vai'], ['volerci', 'ci vuole / ci vogliono']],
  },
  {
    id: 'numerali-ordinali', level: 'A2', title: 'I numeri ordinali',
    name: { bn: 'ক্রমবাচক সংখ্যা (primo, secondo, terzo…)', en: 'Ordinal numbers' },
    explanation: {
      bn: 'ক্রম বোঝাতে প্রথম ১০টি বিশেষ রূপ: primo, secondo, terzo, quarto, quinto, sesto, settimo, ottavo, nono, decimo। ১১ থেকে সংখ্যার শেষে -esimo: undicesimo। এগুলো বিশেষণের মতো লিঙ্গ-বচনে মেলে (la prima volta, al terzo piano)।',
      en: '1st–10th have unique forms (primo..decimo); 11th+ add -esimo (undicesimo). Ordinals agree in gender and number like adjectives: la prima volta, al secondo piano.',
    },
    table: [['১ম – ৫ম', 'primo, secondo, terzo, quarto, quinto'], ['৬ষ্ঠ – ১০ম', 'sesto, settimo, ottavo, nono, decimo'], ['১১তম+', 'undicesimo, dodicesimo']],
  },
  {
    id: 'comparativi-irregolari', level: 'A2', title: 'Comparativi e superlativi irregolari',
    name: { bn: 'অনিয়মিত তুলনা (migliore, peggiore, ottimo)', en: 'Irregular comparatives & superlatives' },
    explanation: {
      bn: 'buono → migliore (আরও ভালো), ottimo (সেরা); cattivo → peggiore (আরও খারাপ), pessimo (সবচেয়ে খারাপ); grande → maggiore; piccolo → minore। মনে রাখুন: migliore বিশেষণ, আর meglio ক্রিয়াবিশেষণ।',
      en: 'buono→migliore/ottimo; cattivo→peggiore/pessimo; grande→maggiore; piccolo→minore. Distinguish migliore (adjective: un lavoro migliore) from meglio (adverb: parlo meglio).',
    },
    table: [['buono', 'migliore / ottimo'], ['cattivo', 'peggiore / pessimo'], ['bene / male (adv.)', 'meglio / peggio']],
  },
  {
    id: 'si-impersonale-a2', level: 'A2', title: 'Il si impersonale (base)',
    name: { bn: 'সাধারণ প্রয়োগে si (Come si dice? Si può?)', en: 'Everyday impersonal si' },
    explanation: {
      bn: 'সাধারণ মানুষ বা নিয়ম বোঝাতে si + ৩য় পুরুষ একবচন ক্রিয়া বসে: Come si scrive?, Qui si parla italiano, Si può entrare? বহুতে বিশেষ্য হলে ক্রিয়া বহুবচন হয়: Qui si vendono biglietti।',
      en: 'Use si + 3rd person singular for "one/people/you in general": Come si dice?, Si può pagare con carta? If followed by a plural noun, the verb becomes plural: Si vendono fiori.',
    },
    table: [['একবচন', 'Si mangia bene qui.'], ['প্রশ্ন', 'Come si arriva in centro?'], ['বহুবচন কর্ম', 'Si parlano tre lingue.']],
  },
  {
    id: 'modali-passato', level: 'A2', title: 'I modali al passato prossimo',
    name: { bn: 'অতীতে মডাল ক্রিয়া (ho dovuto / sono dovuto)', en: 'Modal verbs in the past tense' },
    explanation: {
      bn: 'অতীতে volere, potere, dovere: সাধারণত মূল ক্রিয়ার সহায়ক নেয় — fare (avere) → ho dovuto lavorare; andare (essere) → sono dovuto andare (বা কথ্য ভাষায় ho dovuto andare-ও চলে)। সর্বনাম আগে বসলে essere/avere সেই নিয়মে।',
      en: 'In passato prossimo, modals normally take the auxiliary of the following infinitive: ho dovuto studiare (avere), sono dovuto partire (essere, with agreement), though avere is common in speech.',
    },
    table: [['+ avere verb', 'Ho potuto finire'], ['+ essere verb', 'Siamo dovuti partire'], ['অর্থবদল', 'Non ho potuto = পারিনি']],
  },
  {
    id: 'volere-piacere-cortesia', level: 'A2', title: 'Richieste gentili e offerte',
    name: { bn: 'ভদ্র অনুরোধ ও প্রস্তাব (Potrei, Le va di)', en: 'Polite requests and invitations' },
    explanation: {
      bn: 'দৈনন্দিন ভদ্র আলাপে: Potrei…? (আমি কি পারি?), Mi farebbe un favore? (আমাকে কি একটি উপকার করবেন?), Ti/Le va di…? (তোমার/আপনার কি … ইচ্ছে করছে?), Le dispiace se…? (… করলে কি আপনার আপত্তি আছে?)।',
      en: 'Natural everyday politeness: Potrei avere…?, Le va di prendere un caffè? (Would you like to…?), Le dispiace se apro la finestra? (Do you mind if…?).',
    },
    table: [['Potrei…', 'ভদ্র অনুমতি/অনুরোধ'], ['Ti/Le va di…?', 'আমন্ত্রণ/প্রস্তাব'], ['Le dispiace se…?', 'আপত্তি আছে কি?']],
  },
  {
    id: 'verbi-servizio-a2', level: 'A2', title: 'Sapere e conoscere',
    name: { bn: 'sapere বনাম conoscere (জানা বনাম চেনা)', en: 'sapere vs conoscere' },
    explanation: {
      bn: 'দুটোরই বাংলা "জানা/চেনা" হতে পারে, তবে ব্যবহার আলাদা। sapere = তথ্য জানা বা দক্ষতা পারা (So nuotare, Sai dov’è la posta?)। conoscere = মানুষ, শহর বা কোনো বিষয়/বই পরিচিত থাকা (Conosco Marco, Conosci Roma?)।',
      en: 'sapere means knowing facts or knowing how to do something (+ infinitive/clause: So cucinare). conoscere means being acquainted with people, places, or works (+ noun: Conosco Torino).',
    },
    table: [['sapere + info/inf.', 'So parlare italiano / Sai l’ora?'], ['conoscere + noun', 'Conosco bene questo quartiere']],
  },
  {
    id: 'doppia-negazione', level: 'A2', title: 'La doppia negazione',
    name: { bn: 'দ্বৈত না-বাচক (non… niente, non… nessuno)', en: 'Double negatives' },
    explanation: {
      bn: 'ইতালিয়ানে না-বাচক বাক্যে ক্রিয়ার আগে non রেখে পরে niente/nulla (কিছুই না), nessuno (কেউ না), mai (কখনো না), più (আর না) বসানো বাধ্যতামূলক: Non ho visto nessuno, Non c’è niente, Non fumo più।',
      en: 'Italian requires non before the verb plus a negative word after it: Non ho capito niente (I didn’t understand anything), Non conosco nessuno (I don’t know anyone), Non lavoro più lì.',
    },
    table: [['non + verb + niente', 'কিছুই না'], ['non + verb + nessuno', 'কেউ না'], ['non + verb + più', 'আর না'], ['né … né …', 'এটাও না ওটাও না']],
  },
  // ---------- B1 ----------
  {
    id: 'congiuntivo', level: 'B1', title: 'Il congiuntivo presente',
    name: { bn: 'সম্ভাবনামূলক রূপ (congiuntivo)', en: 'Present subjunctive' },
    explanation: {
      bn: 'মতামত, আশা, ইচ্ছা, সন্দেহ ও আবেগের পরে che + congiuntivo: Penso che sia…, Spero che venga…। benché, affinché, purché, sebbene-এর পরেও। -are: -i, -i, -i, -iamo, -iate, -ino; -ere/-ire: -a, -a, -a, -iamo, -iate, -ano। অতীতে: pensavo che fosse (imperfetto congiuntivo)।',
      en: 'After opinion, hope, wish, doubt and emotion + che, and after benché, affinché, purché, sebbene. Past context uses the imperfect subjunctive (fosse).',
    },
    table: [['essere', 'sia, sia, sia, siamo, siate, siano'], ['avere', 'abbia, abbia, abbia, abbiamo, abbiate, abbiano'], ['parlare', 'parli, parli, parli, parliamo, parliate, parlino']],
  },
  {
    id: 'periodo-ipotetico', level: 'B1', title: 'Il periodo ipotetico',
    name: { bn: 'শর্তবাক্য (se…)', en: 'Conditional sentences' },
    explanation: {
      bn: 'বাস্তব শর্ত: se + বর্তমান/ভবিষ্যৎ (Se piove, resto a casa)। সম্ভাব্য/কাল্পনিক: se + congiuntivo imperfetto + condizionale (Se avessi tempo, viaggerei)। মনে রাখুন: se-এর পরে কখনো condizionale নয়।',
      en: 'Real: se + present/future. Hypothetical: se + imperfect subjunctive + conditional. Never use the conditional after se.',
    },
    table: [['essere', 'se fossi…'], ['avere', 'se avessi…'], ['potere', 'se potessi…'], ['parlare', 'se parlassi…']],
  },
  {
    id: 'condizionale-passato', level: 'B1', title: 'Il condizionale passato',
    name: { bn: 'অতীত শর্তাধীন (avrei voluto)', en: 'Past conditional' },
    explanation: {
      bn: 'যা হতে পারত কিন্তু হয়নি: avere/essere-র condizionale + participle (avrei voluto, sarei venuto)। অতীত থেকে ভবিষ্যতের কথা বলতেও: Ha detto che sarebbe arrivato।',
      en: 'What would have happened: conditional of avere/essere + participle. Also "future in the past": Ha detto che sarebbe arrivato.',
    },
  },
  {
    id: 'trapassato', level: 'B1', title: 'Il trapassato prossimo',
    name: { bn: 'পুরাঘটিত অতীত (avevo fatto)', en: 'Past perfect' },
    explanation: {
      bn: 'অতীতের কোনো ঘটনার আগেই যা ঘটে গিয়েছিল: imperfetto of avere/essere + participle: avevo mangiato, ero uscito।',
      en: 'An action before another past action: imperfect of avere/essere + participle.',
    },
  },
  {
    id: 'relativi', level: 'B1', title: 'Pronomi relativi',
    name: { bn: 'সম্বন্ধবাচক সর্বনাম (che, cui)', en: 'Relative pronouns' },
    explanation: {
      bn: 'che = যে/যা (কর্তা বা কর্ম)। অব্যয়ের পরে cui: in cui, con cui, di cui, per cui। quello che = যা কিছু। chi = যে কেউ।',
      en: 'che for subject/object; cui after prepositions (in cui, con cui, di cui); quello che = what; chi = whoever.',
    },
  },
  {
    id: 'pronomi-combinati', level: 'B1', title: 'Pronomi combinati',
    name: { bn: 'যুক্ত সর্বনাম (te lo, glielo)', en: 'Combined pronouns' },
    explanation: {
      bn: 'পরোক্ষ + প্রত্যক্ষ সর্বনাম একসাথে হলে mi → me, ti → te, ci → ce, vi → ve: te lo dico। gli/le + lo = glielo। ইনফিনিটিভের শেষে যুক্ত হয়: prestarmelo।',
      en: 'Indirect + direct: mi → me, ti → te, ci → ce, vi → ve (te lo dico). gli/le + lo = glielo. They attach to infinitives: prestarmelo.',
    },
  },
  {
    id: 'si-impersonale', level: 'B1', title: 'Si impersonale e passivante',
    name: { bn: 'নৈর্ব্যক্তিক si (si dice, si vende)', en: 'Impersonal si' },
    explanation: {
      bn: 'সাধারণ মানুষ বোঝাতে "si + তৃতীয় পুরুষ": In Italia si mangia bene। বহুবচন বিশেষ্যে ক্রিয়া বহুবচন: Si vendono appartamenti।',
      en: '"People in general": si + third person. With a plural noun the verb is plural: Si vendono appartamenti.',
    },
  },
  {
    id: 'passivo', level: 'B1', title: 'La forma passiva',
    name: { bn: 'কর্মবাচ্য', en: 'The passive' },
    explanation: {
      bn: 'essere (বা venire) + participle, কর্তা da দিয়ে: Il libro è stato scritto da Dante। participle কর্মের সাথে মেলে। বাধ্যবাধকতায়: deve essere firmato।',
      en: 'essere (or venire) + participle, agent with da. The participle agrees with the subject.',
    },
  },
  {
    id: 'discorso-indiretto', level: 'B1', title: 'Il discorso indiretto',
    name: { bn: 'পরোক্ষ উক্তি', en: 'Reported speech' },
    explanation: {
      bn: 'অতীতে বলা কথা রিপোর্ট করলে কাল পিছিয়ে যায়: "Sono stanco" → Ha detto che era stanco। ভবিষ্যৎ → condizionale passato: Ha detto che sarebbe venuto। আদেশ → di + infinito।',
      en: 'Tenses shift back: present → imperfect, future → past conditional; commands become di + infinitive.',
    },
  },
  {
    id: 'infinito', level: 'B1', title: "L'infinito",
    name: { bn: 'ইনফিনিটিভ ব্যবহার (prima di, dopo aver)', en: 'Uses of the infinitive' },
    explanation: {
      bn: 'prima di + infinito (করার আগে), dopo aver/essere + participle (করার পরে), invece di + infinito। অনেক ক্রিয়ার পরে di বা a: decidere di, cercare di, riuscire a, abituarsi a।',
      en: 'prima di + infinitive, dopo aver + participle, invece di + infinitive. Many verbs take di or a before an infinitive.',
    },
  },
  {
    id: 'gerundio-b1', level: 'B1', title: 'Il gerundio',
    name: { bn: 'gerundio দিয়ে কারণ ও উপায়', en: 'The gerund for means and time' },
    explanation: {
      bn: 'উপায় বা একই সময়ের কাজ: Studiando ogni giorno… (প্রতিদিন পড়ে)। pur + gerundio = সত্ত্বেও: Pur essendo stanco…',
      en: 'Expresses means or simultaneous actions; pur + gerund = despite.',
    },
  },
  {
    id: 'opinione', level: 'B1', title: "Esprimere un'opinione",
    name: { bn: 'মতামত প্রকাশ ও যুক্তি', en: 'Giving opinions' },
    explanation: {
      bn: 'Secondo me / A mio parere + indicativo; Penso / Credo che + congiuntivo। যুক্তি সাজাতে: da un lato… dall\'altro, inoltre, tuttavia, in conclusione।',
      en: 'Secondo me + indicative; Penso che + subjunctive. Structure arguments with da un lato… dall\'altro, inoltre, tuttavia, in conclusione.',
    },
  },
  {
    id: 'connettivi-b1', level: 'B1', title: 'Connettivi avanzati',
    name: { bn: 'উন্নত সংযোজক', en: 'Advanced connectors' },
    explanation: {
      bn: 'siccome / dato che (যেহেতু) বাক্যের শুরুতে; nonostante + বিশেষ্য; tuttavia (তবুও); inoltre (তাছাড়া); ormai (এখন তো)। benché/sebbene-র পরে congiuntivo লাগে।',
      en: 'siccome / dato che, nonostante + noun, tuttavia, inoltre, ormai. benché / sebbene need the subjunctive.',
    },
  },
  {
    id: 'congiuntivo-imperfetto', level: 'B1', title: 'Il congiuntivo imperfetto',
    name: { bn: 'অতীত সম্ভাবনামূলক রূপ (congiuntivo imperfetto)', en: 'Imperfect subjunctive' },
    explanation: {
      bn: 'অতীত কালের মতামত, ইচ্ছা বা কাল্পনিক শর্তে (Pensavo che..., Volevo che..., Se avessi...): -assi, -assi, -asse, -assimo, -aste, -assero (-are); -essi.. (-ere); -issi.. (-ire)। অনিয়মিত: essere → fossi, fosse, fossero; dare → dessi; stare → stessi; fare → facessi; dire → dicessi।',
      en: 'Used after past main verbs of opinion/wish (Pensavo che fosse...) and in hypothetical se clauses (Se avessi...). Irregulars: essere (fossi..), dare (dessi), stare (stessi), fare (facessi), dire (dicessi).',
    },
    table: [['essere', 'fossi, fossi, fosse, fossimo, foste, fossero'], ['avere', 'avessi, avessi, avesse, avessimo, aveste, avessero'], ['parlare', 'parlassi, parlassi, parlasse, parlassimo, parlaste, parlassero']],
  },
  {
    id: 'congiuntivo-passato', level: 'B1', title: 'Il congiuntivo passato',
    name: { bn: 'সমাপ্ত সম্ভাবনামূলক রূপ (congiuntivo passato)', en: 'Past subjunctive' },
    explanation: {
      bn: 'বর্তমানের মতামত বা সন্দেহের সাপেক্ষে ইতিমধ্যে ঘটে যাওয়া কাজ বোঝাতে: avere/essere-এর congiuntivo presente (abbia / sia) + পাস্ট পার্টিসিপল: Credo che Marco sia già arrivato; Penso che abbiano capito।',
      en: 'Expresses a completed past action viewed from a present verb of opinion/doubt: present subjunctive of avere/essere (abbia/sia) + past participle.',
    },
    table: [['con avere', 'che io abbia parlato, che loro abbiano finito'], ['con essere', 'che lei sia partita, che noi siamo arrivati']],
  },
  {
    id: 'congiuntivo-trapassato', level: 'B1', title: 'Il congiuntivo trapassato',
    name: { bn: 'পুরাঘটিত সম্ভাবনামূলক রূপ (congiuntivo trapassato)', en: 'Pluperfect subjunctive' },
    explanation: {
      bn: 'অতীতের মতামতের আগে ঘটে যাওয়া কাজ বা অতীতের অবাস্তব শর্তে: avessi/fossi + পাস্ট পার্টিসিপল: Pensavo che fossi già uscito; Se avessi saputo la verità, te l’avrei detto।',
      en: 'Formed with imperfect subjunctive of avere/essere (avessi/fossi) + past participle. Used after past main verbs for prior events and in 3rd-type conditional clauses.',
    },
    table: [['con avere', 'che io avessi visto, che tu avessi detto'], ['con essere', 'che lui fosse venuto, che loro fossero partiti']],
  },
  {
    id: 'concordanza-congiuntivo', level: 'B1', title: 'La concordanza dei tempi col congiuntivo',
    name: { bn: 'congiuntivo-তে কালের সামঞ্জস্য', en: 'Sequence of tenses in the subjunctive' },
    explanation: {
      bn: 'প্রধান ক্রিয়া বর্তমান হলে: সমসাময়িক কাজে congiuntivo presente (Penso che parta), আগের কাজে congiuntivo passato (Penso che sia partito)। প্রধান ক্রিয়া অতীত হলে: সমসাময়িক কাজে congiuntivo imperfetto (Pensavo che partisse), আগের কাজে congiuntivo trapassato (Pensavo che fosse partito)।',
      en: 'Present main verb → present subjunctive (simultaneous) or past subjunctive (prior). Past main verb → imperfect subjunctive (simultaneous) or pluperfect subjunctive (prior).',
    },
    table: [['Penso che...', '...sia vero (আজ) / ...sia stato vero (গতকাল)'], ['Pensavo che...', '...fosse vero (তখন) / ...fosse stato vero (তার আগে)']],
  },
  {
    id: 'senza-che-prima-che', level: 'B1', title: 'Congiunzioni + congiuntivo (senza che, prima che)',
    name: { bn: 'senza che, prima che, a meno che + congiuntivo', en: 'Conjunctions requiring the subjunctive' },
    explanation: {
      bn: 'কর্তা ভিন্ন হলে prima che (আগে), senza che (ছাড়া), a meno che non (যদি না), nel caso in cui (যদি এমন হয়)-এর পরে সর্বদা congiuntivo বসে: Esco prima che piova; L’ha fatto senza che nessuno lo sapesse।',
      en: 'prima che (before), senza che (without), a meno che non (unless), and nel caso in cui (in case) always trigger the subjunctive.',
    },
    table: [['prima che', 'Chiudi le finestre prima che piova'], ['senza che', 'È entrato senza che io lo vedessi'], ['a meno che non', 'Vengo anch’io, a meno che non sia tardi']],
  },
  {
    id: 'periodo-ipotetico-2', level: 'B1', title: 'Periodo ipotetico della possibilità',
    name: { bn: 'সম্ভাব্য শর্তবাক্য (২য় প্রকার: se avessi… farei)', en: 'Second conditional (possibility)' },
    explanation: {
      bn: 'বর্তমান বা ভবিষ্যতের সম্ভাব্য বা কাল্পনিক অবস্থা বোঝাতে: Se + congiuntivo imperfetto, + condizionale presente: Se abitassi vicino al mare, nuoterei ogni giorno; Se fossi al tuo posto, parlerei col direttore।',
      en: 'For hypothetical present/future situations: Se + imperfect subjunctive, + present conditional (Se avessi più tempo, studierei musica).',
    },
    table: [['Se + cong. imp.', 'Se avessi / Se fossi / Se potessi'], ['Condizionale pres.', 'comprerei / andrei / farei']],
  },
  {
    id: 'periodo-ipotetico-3', level: 'B1', title: "Periodo ipotetico dell'irrealtà nel passato",
    name: { bn: 'অতীতের অবাস্তব শর্তবাক্য (৩য় প্রকার: se avessi saputo…)', en: 'Third conditional (past unreality)' },
    explanation: {
      bn: 'অতীতে যা ঘটেনি তা কল্পনা করতে: Se + congiuntivo trapassato, + condizionale passato: Se avessi sentito la sveglia, non avrei perso il treno; Se fossimo partiti prima, saremmo arrivati in orario।',
      en: 'For unfulfilled past conditions: Se + pluperfect subjunctive, + past conditional (Se avessi studiato, avrei superato l’esame).',
    },
    table: [['Se + cong. trap.', 'Se avessi saputo / Se fossi partito'], ['Condizionale pass.', 'avrei detto / sarei arrivato']],
  },
  {
    id: 'futuro-anteriore', level: 'B1', title: 'Il futuro anteriore',
    name: { bn: 'পুরাঘটিত ভবিষ্যৎ (futuro anteriore)', en: 'Future perfect' },
    explanation: {
      bn: 'ভবিষ্যতের একটি কাজের আগে আরেকটি কাজ শেষ হবে বোঝাতে (quando, appena, dopo che-এর পরে): avere/essere-এর ভবিষ্যৎ রূপ (avrò / sarò) + পাস্ট পার্টিসিপল: Appena avrò finito la relazione, ti chiamerò; Quando saremo arrivati, vi manderemo un messaggio।',
      en: 'Formed with future of avere/essere + past participle. Used after quando, appena, dopo che for an action completed before another future action.',
    },
    table: [['con avere', 'avrò finito, avrai capito, avremo visto'], ['con essere', 'sarò arrivato/a, saranno partiti/e']],
  },
  {
    id: 'futuro-probabilita', level: 'B1', title: 'Il futuro di probabilità e supposizione',
    name: { bn: 'অনুমান ও সম্ভাবনায় ভবিষ্যৎ কাল', en: 'Future of probability and supposition' },
    explanation: {
      bn: 'বর্তমানের অনুমান বোঝাতে futuro semplice (Marco non risponde: sarà in riunione) এবং অতীতের অনুমান বোঝাতে futuro anteriore (Perché è triste? Avrà discusso con qualcuno / Sarà tornato tardi) ব্যবহৃত হয়।',
      en: 'Italian uses the simple future to guess about the present (Saranno le dieci) and the future perfect to guess about the past (Avrà perso l’autobus).',
    },
    table: [['Present guess', 'Dov’è Sara? Sarà ancora in ufficio'], ['Past guess', 'Non c’è più pane: l’avranno mangiato i ragazzi']],
  },
  {
    id: 'passato-remoto-b1', level: 'B1', title: 'Il passato remoto: introduzione',
    name: { bn: 'ঐতিহাসিক ও সাহিত্যিক অতীত (passato remoto)', en: 'Passato remoto (historical past)' },
    explanation: {
      bn: 'ইতিহাস, জীবনী ও সাহিত্যে দূর অতীতের সমাপ্ত ঘটনা বোঝাতে passato remoto বসে: -are (-ai, -asti, -ò, -ammo, -aste, -arono), -ere (-ei/-etti..), -ire (-ii..)। গুরুত্বপূর্ণ অনিয়মিত: essere (fui, fosti, fu, fummo, foste, furono), avere (ebbi, ebbe), fare (fece), nascere (nacque), scrivere (scrisse)।',
      en: 'Used in history, literature, and biographies for completed distant past events. Key forms: fu/furono, ebbe, fece, nacque, scrisse, visse.',
    },
    table: [['essere', 'fui, fosti, fu, fummo, foste, furono'], ['parlare / finire', 'parlò, parlarono / finì, finirono'], ['irregolari (3ª sg.)', 'ebbe, fece, disse, scrisse, nacque, venne']],
  },
  {
    id: 'pronomi-doppi-passato', level: 'B1', title: 'Pronomi combinati nei tempi composti',
    name: { bn: 'অতীত কালে যুক্ত সর্বনাম ও মিল (me l’ha detto)', en: 'Combined pronouns in compound tenses' },
    explanation: {
      bn: 'যুক্ত সর্বনামের পর passato prossimo এলে lo/la/li/le অনুযায়ী পার্টিসিপলের লিঙ্গ ও বচন মেলে (lo/la সংক্ষিপ্ত হয়ে l’ হয়): La notizia? Me l’ha detta Giulia; I documenti? Glieli ho inviati stamattina; Le chiavi? Te le avevo lasciate sul tavolo।',
      en: 'When combined pronouns precede avere in compound tenses, the participle agrees in gender and number with lo, la, li, le (Me l’ha detta, Glieli ho mandati).',
    },
    table: [['me lo / me la + ha', 'me l’ha dato / me l’ha data'], ['me li / me le + ha', 'me li ha dati / me le ha date'], ['glielo / glieli + ho', 'gliel’ho spiegato / glieli ho portati']],
  },
  {
    id: 'ci-ne-idiomatici', level: 'B1', title: 'Usi idiomatici di ci e ne',
    name: { bn: 'ci ও ne-এর বাগধারামূলক ব্যবহার (metterci, volerci)', en: 'Idiomatic uses of ci and ne' },
    explanation: {
      bn: 'volerci = সাধারণভাবে সময় বা উপকরণ লাগা (Ci vogliono due ore); metterci = কোনো ব্যক্তির সময় লাগা (Io ci metto venti minuti); pensarci = ভেবে দেখা/দায়িত্ব নেওয়া; contare su → contarci; valerne la pena = সার্থক হওয়া; non poterne più = আর সহ্য করতে না পারা।',
      en: 'volerci (it takes), metterci (a person takes time: ci metto mezz’ora), pensarci (to take care of it), valerne la pena (to be worth it), non poterne più (to be fed up).',
    },
    table: [['volerci (impers.)', 'Ci vuole pazienza / Ci vogliono tre giorni'], ['metterci (pers.)', 'Quanto ci metti ad arrivare? Ci metto poco'], ['valerne la pena', 'È un viaggio lungo, ma ne vale la pena']],
  },
  {
    id: 'passivo-venire-andare', level: 'B1', title: 'Il passivo con venire e andare',
    name: { bn: 'venire ও andare দিয়ে কর্মবাচ্য', en: 'Passive with venire and andare' },
    explanation: {
      bn: 'সরল কালে প্রক্রিয়া বোঝাতে essere-র বদলে venire + পার্টিসিপল বসে (Il modulo viene compilato online)। আর বাধ্যবাধকতা বা "করা উচিত" বোঝাতে andare + পার্টিসিপল বসে (La domanda va inviata entro venerdì = deve essere inviata)।',
      en: 'In simple tenses, venire + participle highlights a dynamic passive (viene pubblicato), while andare + participle expresses necessity (va firmato = must be signed).',
    },
    table: [['venire + part.', 'Il museo viene visitato da molti studenti'], ['andare + part. (dovere)', 'Le regole vanno rispettate da tutti']],
  },
  {
    id: 'si-passivante-tempi', level: 'B1', title: 'Il si passivante nei tempi composti',
    name: { bn: 'অতীত ও যৌগিক কালে si passivante', en: 'Impersonal and passive si in compound tenses' },
    explanation: {
      bn: 'si impersonale এবং si passivante যৌগিক কালে সর্বদা essere সহায়ক নেয়: কর্ম না থাকলে একবচন (Si è parlato a lungo; Quando si è lavorato troppo, si è stanchi); বিশেষ্য কর্ম থাকলে তার সাথে লিঙ্গ-বচনে মেলে (Si è presa una decisione; Si sono visti molti cambiamenti)।',
      en: 'In compound tenses, impersonal/passive si always takes essere: Si è discusso molto; Si sono raggiunti ottimi risultati.',
    },
    table: [['Intransitive', 'Si è lavorato bene / Si è partiti presto'], ['Singular object', 'Si è trovata una soluzione efficace'], ['Plural object', 'Si sono costruiti nuovi ospedali']],
  },
  {
    id: 'verbi-pronominali-b1', level: 'B1', title: 'Verbi pronominali: cavarsela, prendersela',
    name: { bn: 'সর্বনামযুক্ত ক্রিয়া (cavarsela, prendersela, entrarci)', en: 'Idiomatic pronominal verbs' },
    explanation: {
      bn: 'কথ্য ও প্রমিত ইতালিয়ানে বহুল ব্যবহৃত: cavarsela (কঠিন পরিস্থিতি সামলে নেওয়া: Me la cavo bene), prendersela (মনে কষ্ট পাওয়া বা রাগ করা: Non te la prendere!), entrarci (প্রাসঙ্গিক হওয়া: Che c’entra?), mettercela tutta (সর্বোচ্চ চেষ্টা করা)।',
      en: 'Key B1 pronominal verbs: cavarsela (to get by/manage), prendersela (to take offence), entrarci (to have to do with: Non c’entra niente), mettercela tutta (to give it one’s all).',
    },
    table: [['cavarsela', 'Con l’italiano ormai me la cavo abbastanza bene'], ['prendersela', 'Era solo uno scherzo, non te la prendere!'], ['entrarci / mettercela tutta', 'Questo non c’entra! / Ce l’abbiamo messa tutta']],
  },
  {
    id: 'causativi-fare-lasciare', level: 'B1', title: 'I verbi causativi: fare e lasciare',
    name: { bn: 'প্রযোজক ক্রিয়া (fare / lasciare + infinito)', en: 'Causative constructions (fare / lasciare)' },
    explanation: {
      bn: 'অন্যকে দিয়ে কোনো কাজ করানো বোঝাতে fare + infinito (Faccio riparare la macchina dal meccanico; Il professore ci fa leggere un articolo) এবং করতে দেওয়া/অনুমতি দেওয়া বোঝাতে lasciare + infinito (Lascia parlare anche gli altri; Mi lasci finire)।',
      en: 'Use fare + infinitive to have something done or make someone do something; use lasciare + infinitive to let/allow someone to do something.',
    },
    table: [['fare + inf.', 'Ho fatto controllare il contratto dall’avvocato'], ['lasciare + inf.', 'Non lasciarti scoraggiare dalle difficoltà']],
  },
  {
    id: 'discorso-indiretto-passato', level: 'B1', title: 'Il discorso indiretto al passato',
    name: { bn: 'অতীতে পরোক্ষ উক্তি ও সময়-স্থানের পরিবর্তন', en: 'Reported speech with past reporting verbs' },
    explanation: {
      bn: 'Ha detto / Ha chiesto থাকলে: presente → imperfetto (Sto bene → stava bene), passato prossimo → trapassato (Ho visto → aveva visto), futuro → condizionale passato (Verrò domani → sarebbe venuto il giorno dopo), oggi → quel giorno, qui → lì।',
      en: 'When reporting in the past: present → imperfect, past → pluperfect, future → past conditional; domani → il giorno dopo, ieri → il giorno prima, qui → lì.',
    },
    table: [['"Vengo domani"', 'Ha detto che sarebbe venuto il giorno dopo'], ['"Ho già firmato"', 'Ha spiegato che aveva già firmato'], ['"Aspetta qui!"', 'Mi ha chiesto di aspettare lì']],
  },
  {
    id: 'infinito-passato', level: 'B1', title: "L'infinito passato (dopo aver / essere)",
    name: { bn: 'অতীত ইনফিনিটিভ (dopo aver fatto / essere andato)', en: 'Past infinitive' },
    explanation: {
      bn: 'উভয় খণ্ডবাক্যের কর্তা এক হলে পূর্ববর্তী কাজ বোঝাতে dopo, prima di, grazie a, per, di-এর পরে aver (avere) বা essere + পাস্ট পার্টিসিপল বসে: Dopo aver consegnato la domanda, ho ricevuto la ricevuta; Dopo essere arrivati a Roma, abbiamo preso la metro।',
      en: 'Formed with aver / essere + past participle (agreeing with essere). Used after dopo, per, di when the subject is the same in both clauses.',
    },
    table: [['con avere', 'Dopo aver letto il contratto, l’ho firmato'], ['con essere', 'Dopo essersi laureata, ha trovato lavoro'], ['ringraziare / scusarsi', 'Grazie per avermi aiutato!']],
  },
  {
    id: 'gerundio-composto', level: 'B1', title: 'Il gerundio presente e composto',
    name: { bn: 'বর্তমান ও অতীত জেরান্ড (avendo fatto / essendo stato)', en: 'Present and past gerund' },
    explanation: {
      bn: 'কারণ, শর্ত বা পূর্ববর্তী ঘটনা সংক্ষেপে প্রকাশ করতে: বর্তমান জেরান্ড (vivendo qui, conoscendo il problema) সমসাময়িক কাজে; আর অতীত জেরান্ড avendo / essendo + পার্টিসিপল পূর্ববর্তী কারণে বসে: Avendo perso il treno, abbiamo preso l’autobus; Essendo arrivata tardi, si è scusata।',
      en: 'Present gerund (-ando/-endo) expresses simultaneous cause/means; past gerund (avendo/essendo + participle) expresses a prior cause.',
    },
    table: [['Gerundio pres.', 'Sbagliando si impara / Pur sapendo la verità'], ['Gerundio comp.', 'Avendo studiato molto / Essendo partiti presto']],
  },
  {
    id: 'participio-passato-assoluto', level: 'B1', title: 'Il participio passato assoluto',
    name: { bn: 'সংক্ষিপ্ত খণ্ডবাক্যে পাস্ট পার্টিসিপল (Finito il lavoro…)', en: 'Absolute past participle clauses' },
    explanation: {
      bn: '"কোনো কাজ শেষ হওয়ার পর" সংক্ষেপে বলতে পাস্ট পার্টিসিপলটি বিশেষ্যের সাথে লিঙ্গ-বচনে মিলিয়ে বাক্যের শুরুতে বসে: Finito l’esame, siamo andati a festeggiare; Risolti i problemi tecnici, il sito è tornato attivo; Arrivati in albergo, abbiamo riposato।',
      en: 'A past participle placed at the start of a sentence agrees with its noun/subject and means "Once/After X was done": Finita la riunione, siamo usciti.',
    },
    table: [['Transitive', 'Pagata la bolletta, ho conservato la ricevuta'], ['Intransitive', 'Tornati a casa, abbiamo preparato la cena']],
  },
  {
    id: 'relativi-il-quale-cui', level: 'B1', title: 'Il quale, la quale e il cui',
    name: { bn: 'আনুষ্ঠানিক সম্বন্ধবাচক (il quale ও il/la cui)', en: 'Formal relative pronouns & possessive cui' },
    explanation: {
      bn: 'অব্যয়ের পরে cui-এর পরিবর্তে লিঙ্গ-বচনভেদে il quale, la quale, i quali, le quali বসতে পারে (con cui = col quale)। আর "যার / যাদের" অধিকার বোঝাতে আর্টিকেল + cui + বিশেষ্য বসে: lo scrittore il cui romanzo ha vinto il premio (যে লেখকের উপন্যাস পুরস্কার জিতেছে)।',
      en: 'il/la quale (plural i/le quali) replaces cui after prepositions for clarity. Article + cui + noun expresses "whose": il collega la cui moglie è medico.',
    },
    table: [['Prep. + il quale', 'Il motivo per il quale (= per cui) ti scrivo'], ['il/la/i/le cui (whose)', 'L’azienda i cui prodotti sono biologici']],
  },
  {
    id: 'chi-quello-che-cio-che', level: 'B1', title: 'Pronomi relativi doppi: chi, quello che, ciò che',
    name: { bn: 'যৌগিক সম্বন্ধবাচক (chi, quello che, ciò che)', en: 'Double relatives: chi, quello che, ciò che' },
    explanation: {
      bn: 'chi = "যে ব্যক্তি / যারা" (কখনো বহুবচন ক্রিয়া নেয় না: Chi viaggia impara molto)। আর "যা কিছু / যে বিষয়টি" বোঝাতে quello che, quel che অথবা একটু আনুষ্ঠানিক ciò che বসে: Dimmi quello che pensi; Ciò che conta è la salute।',
      en: 'chi means "he/she who, whoever, those who" and always takes a 3rd singular verb. quello che and ciò che mean "what / that which".',
    },
    table: [['chi + 3ª sg.', 'Chi rispetta gli altri viene rispettato'], ['quello che / ciò che', 'Fai quello che ritieni giusto / Ciò che dici è vero']],
  },
  {
    id: 'connettivi-causali-b1', level: 'B1', title: 'Connettivi di causa: siccome, dato che, poiché',
    name: { bn: 'কারণবাচক সংযোজক (siccome, dato che, visto che, poiché)', en: 'Causal connectors' },
    explanation: {
      bn: 'perché সাধারণত বাক্যের মাঝখানে বসে। কিন্তু কারণ দিয়ে বাক্য শুরু করতে হলে siccome, dato che, visto che বা poiché ব্যবহার হয়: Siccome c’era sciopero dei treni, sono andato in macchina; Visto che sei qui, parliamo del progetto।',
      en: 'While perché usually follows the main clause, siccome, dato che, visto che, and poiché ("since, given that") can open the sentence.',
    },
    table: [['Siccome (in apertura)', 'Siccome pioveva, abbiamo rimandato la gita'], ['Dato che / Visto che', 'Dato che hai esperienza, puoi coordinare il gruppo']],
  },
  {
    id: 'connettivi-concessivi-b1', level: 'B1', title: 'Connettivi concessivi: benché, nonostante, pur',
    name: { bn: 'বিপরীত বা ছাড়বাচক সংযোজক (benché, nonostante, malgrado)', en: 'Concessive connectors' },
    explanation: {
      bn: 'benché, sebbene, nonostante che, malgrado che-এর পরে সর্বদা congiuntivo বসে (Benché sia difficile, non mollo)। কিন্তু nonostante বা malgrado-র পরে সরাসরি বিশেষ্য বা infinito passato বসতে পারে (Nonostante la crisi / Nonostante aver studiato)। আর anche se-র পরে indicativo বসে।',
      en: 'benché/sebbene/nonostante che take the subjunctive; nonostante/malgrado + noun takes no verb; pur + gerund; anche se takes the indicative.',
    },
    table: [['+ congiuntivo', 'Benché / Sebbene abbia poco tempo, fa volontariato'], ['+ sostantivo', 'Nonostante il traffico, siamo arrivati puntuali'], ['+ indicativo', 'Anche se costa un po’ di più, è molto più sicuro']],
  },
  {
    id: 'connettivi-finali-condizionali', level: 'B1', title: 'Connettivi finali e condizionali (affinché, purché)',
    name: { bn: 'উদ্দেশ্য ও শর্তবাচক সংযোজক (affinché, purché, qualora)', en: 'Purpose and conditional conjunctions' },
    explanation: {
      bn: 'উদ্দেশ্য বোঝাতে কর্তা ভিন্ন হলে perché / affinché + congiuntivo (Ti spiego tutto affinché tu possa decidere)। আর শর্ত বোঝাতে purché, a patto che, a condizione che (এই শর্তে যে) এবং qualora (যদি)-এর পরেও congiuntivo বসে।',
      en: 'Purpose with different subjects uses affinché / perché + subjunctive. Conditionals purché, a patto che ("provided that") and qualora ("should/if") also take the subjunctive.',
    },
    table: [['Scopo (affinché)', 'Parlo lentamente affinché tutti capiscano'], ['Condizione (purché)', 'Accetto il lavoro purché l’orario sia flessibile']],
  },
  {
    id: 'comparativi-proporzionali', level: 'B1', title: 'Comparativi correlativi (più… più…)',
    name: { bn: 'আনুপাতিক তুলনা (যত… তত… / più… più…)', en: 'Proportional comparatives (the more… the more…)' },
    explanation: {
      bn: '"যত… তত…" বোঝাতে più… (e) più…, meno… (e) meno…, অথবা quanto più… tanto più… ব্যবহৃত হয়: Più studio l’italiano, più mi piace; Più si va avanti, più le cose diventano interessanti; Meno spendi, più risparmi।',
      en: 'Express "the more… the more…" with Più… più… or Meno… meno… (Più pratichi, meglio parli).',
    },
    table: [['Più … più …', 'Più leggo in italiano, più imparo parole nuove'], ['Più … meno …', 'Più ti agiti, meno riesci a concentrarti']],
  },
  {
    id: 'indefiniti-negativi-b1', level: 'B1', title: 'Indefiniti: chiunque, qualunque, ciascuno',
    name: { bn: 'উন্নত অনির্দিষ্ট শব্দ (chiunque, qualunque, qualsiasi)', en: 'Indefinites: chiunque, qualunque, qualsiasi' },
    explanation: {
      bn: 'chiunque = যে কেউ (সর্বনাম); qualunque / qualsiasi = যেকোনো (অপরিবর্তনীয় বিশেষণ, একবচন বিশেষ্যের আগে): Puoi chiamarmi a qualsiasi ora। এদের পরে নির্ভরশীল বাক্য এলে congiuntivo বসে: Chiunque venga è il benvenuto; Qualunque cosa succeda, resta calmo।',
      en: 'chiunque ("whoever/anyone") and qualunque/qualsiasi ("any/whatever" + singular noun) take the subjunctive when introducing a relative clause.',
    },
    table: [['Pronome', 'Chiunque abbia i requisiti può candidarsi'], ['Aggettivo inv.', 'In qualsiasi momento / Qualunque scelta tu faccia']],
  },
  {
    id: 'modali-condizionale-passato', level: 'B1', title: 'Dovere, potere e volere al condizionale passato',
    name: { bn: 'অতীতে অনুশোচনা বা পরামর্শ (avresti dovuto / sarei potuto)', en: 'Past conditional of modal verbs' },
    explanation: {
      bn: 'অতীতে কী করা উচিত ছিল কিন্তু করা হয়নি (সমালোচনা বা অনুশোচনা) বোঝাতে avrei dovuto + infinito; কী করা সম্ভব ছিল বোঝাতে avrei potuto / sarei potuto + infinito: Avresti dovuto prenotare prima! Saremmo potuti partire ieri।',
      en: 'Express "should have", "could have", "would have liked to" with the past conditional of dovere, potere, volere + infinitive.',
    },
    table: [['avrei dovuto', 'Avremmo dovuto leggere meglio la clausola'], ['avrei / sarei potuto', 'Saresti potuto venire con noi!']],
  },
  {
    id: 'registro-formale-b1', level: 'B1', title: "L'italiano formale nelle comunicazioni",
    name: { bn: 'দাপ্তরিক ও পেশাগত ইতালিয়ান রীতি', en: 'Formal register in emails and offices' },
    explanation: {
      bn: 'দাপ্তরিক চিঠি বা ইমেইলে Gentile / Egregio সম্বোধন, Lei সর্বনাম (La ringrazio, Le invio in allegato, resto a Sua disposizione) এবং সমাপ্তিতে Cordiali saluti / Distinti saluti ব্যবহৃত হয়।',
      en: 'Formal Italian correspondence uses Gentile/Egregio, formal clitics La/Le (La informo, Le allego), and closings like Cordiali saluti or In attesa di un Suo riscontro.',
    },
    table: [['Apertura', 'Gentile Dott.ssa Rossi / Spett.le Azienda'], ['Corpo', 'Le scrivo in merito a… / La ringrazio per l’attenzione'], ['Chiusura', 'In attesa di un Suo gentile riscontro, porgo cordiali saluti']],
  },

  /* ==================== B2 (52 topics) ==================== */
  {
    id: 'concordanza-avanzata', level: 'B2', title: 'Concordanza avanzata dei tempi col congiuntivo',
    name: { bn: 'congiuntivo-তে উন্নত কালের সামঞ্জস্য', en: 'Advanced sequence of tenses in the subjunctive' },
    explanation: {
      bn: 'প্রধান ক্রিয়া বর্তমান বা ভবিষ্যৎ হলে: সমসাময়িক/ভবিষ্যৎ কাজে congiuntivo presente (sia), পূর্ববর্তী কাজে congiuntivo passato (sia stato), এবং অপ্রতিরোধ্য ভবিষ্যতে futuro। প্রধান ক্রিয়া অতীত বা শর্তবাচক (Vorrei/Avrei voluto) হলে: সমসাময়িক কাজে congiuntivo imperfetto (fosse) এবং পূর্ববর্তী কাজে congiuntivo trapassato (fosse stato)।',
      en: 'With a present/future main verb: use present subjunctive for simultaneous action and past subjunctive for prior action. With a past or conditional main verb (Vorrei/Avrei voluto): use imperfect subjunctive for simultaneous action and pluperfect subjunctive for prior action.',
    },
    table: [['Principale presente', 'Dubito che lo sappia (ora) / che l’abbia saputo (ieri)'], ['Principale passata/condizionale', 'Dubitavo / Vorrei che lo sapesse (ora) / che l’avesse saputo (prima)']],
  },
  {
    id: 'periodo-ipotetico-misto', level: 'B2', title: 'Il periodo ipotetico misto',
    name: { bn: 'মিশ্র শর্তসাপেক্ষ বাক্য (অতীত শর্ত → বর্তমান ফল)', en: 'Mixed conditional sentences' },
    explanation: {
      bn: 'যখন অতীতের একটি অপূর্ণ শর্তের প্রভাব বর্তমানে পড়ে: Se + congiuntivo trapassato + condizionale presente (Se avessi accettato quel lavoro a Milano, oggi vivrei lì)। আবার বর্তমানের স্থায়ী বৈশিষ্ট্যের কারণে অতীতে কিছু ঘটলে: Se + congiuntivo imperfetto + condizionale passato (Se fossi più prudente, non avrei firmato quella clausola)।',
      en: 'Past condition with present result: Se + pluperfect subjunctive + present conditional (Se avessi accettato, oggi vivrei lì). Present trait with past result: Se + imperfect subjunctive + past conditional.',
    },
    table: [['Passato → Presente', 'Se avessi studiato giurisprudenza, oggi sarei avvocato'], ['Presente → Passato', 'Se fossi meno impulsivo, ieri non avresti risposto così']],
  },
  {
    id: 'congiuntivo-indipendente', level: 'B2', title: 'Il congiuntivo in frasi indipendenti',
    name: { bn: 'স্বাধীন বাক্যে congiuntivo (ইচ্ছা, সংশয় ও আহ্বান)', en: 'Subjunctive in independent clauses' },
    explanation: {
      bn: 'প্রধান ক্রিয়া ছাড়াই স্বাধীন বাক্যে congiuntivo বসে: ১) অনুমান বা সংশয় (Che sia già entrato in vigore il decreto?), ২) তীব্র ইচ্ছা বা আক্ষেপ (Magari avessero accolto il ricorso! / Se solo potessi!), ৩) অনুমোদন বা ছাড় (Vada pure come dici tu)।',
      en: 'Used in main clauses for: 1) doubt/conjecture (Che sia già uscito?), 2) strong wish or regret with magari / se solo (Magari avessero accettato!), 3) concession or exhortation (Sia come sia; Faccia pure).',
    },
    table: [['Dubitativo', 'Che abbiano già chiuso il bando?'], ['Ottativo (desiderio)', 'Magari ci dessero il finanziamento! / Se solo avessi salvato i dati!'], ['Concessivo', 'Costi quel che costi, porteremo a termine la ricerca']],
  },
  {
    id: 'congiuntivo-relativo', level: 'B2', title: 'Il congiuntivo nelle relative e coi superlativi',
    name: { bn: 'সম্বন্ধবাচক ও সুপারলেটিভ বাক্যে congiuntivo', en: 'Subjunctive in restrictive relative and superlative clauses' },
    explanation: {
      bn: 'কাঙ্ক্ষিত বা অনির্দিষ্ট বৈশিষ্ট্য বোঝাতে সম্বন্ধবাচক বাক্যে congiuntivo বসে (Cerchiamo un candidato che conosca il diritto tributario vs Abbiamo un candidato che conosce...)। এছাড়া il primo / l’unico / il più... che-র পরে প্রায়ই congiuntivo বসে।',
      en: 'Use the subjunctive in relative clauses expressing a desired/hypothetical quality (Cerchiamo un consulente che sappia mediare) and after superlatives or l’unico / il primo.',
    },
    table: [['Realtà (indicativo)', 'Ho trovato un tecnico che sa riparare l’impianto'], ['Ricerca/requisito (congiuntivo)', 'Cerco un tecnico che sappia riparare l’impianto'], ['Superlativo', 'È il saggio più rigoroso che io abbia mai letto']],
  },
  {
    id: 'congiuntivo-concessivo', level: 'B2', title: 'Costrutti concessivi avanzati',
    name: { bn: 'উচ্চতর ছাড়বাচক কাঠামো (per quanto, chiunque, qualunque)', en: 'Advanced concessive structures' },
    explanation: {
      bn: 'per quanto (যতই... হোক না কেন), qualunque/qualsiasi + বিশেষ্য, chiunque (যে কেউ), ovunque (যেখানেই) এবং comunque-র পরে সর্বদা congiuntivo বসে।',
      en: 'per quanto ("however much"), qualunque/qualsiasi + noun, chiunque ("whoever"), ovunque ("wherever") require the subjunctive.',
    },
    table: [['per quanto + agg./verbo', 'Per quanto sia complessa la normativa, dobbiamo attenerci'], ['chiunque / qualunque', 'Chiunque trasgredisca la norma incorre in una sanzione']],
  },
  {
    id: 'congiuntivo-condizionale-b2', level: 'B2', title: 'Congiunzioni condizionali formali',
    name: { bn: 'আনুষ্ঠানিক শর্তবাচক সংযোজক (qualora, a patto che, ammesso che)', en: 'Formal conditional conjunctions' },
    explanation: {
      bn: 'আইনি ও প্রাতিষ্ঠানিক ভাষায় se-এর পরিবর্তে qualora, nel caso in cui, a patto che, a condizione che, ammesso e non concesso che এবং salvo che ব্যবহৃত হয় এবং এদের পরে সর্বদা congiuntivo বসে।',
      en: 'Formal registers replace se with qualora, nel caso in cui, a patto che, a condizione che, ammesso che, and salvo che + subjunctive.',
    },
    table: [['qualora / nel caso in cui', 'Qualora l’inadempimento persista, il contratto verrà rescisso'], ['ammesso che', 'Ammesso che il bilancio lo consenta, stanzieremo i fondi']],
  },
  {
    id: 'passato-remoto-irregolari', level: 'B2', title: 'Il passato remoto: verbi forti e radici irregolari',
    name: { bn: 'passato remoto-র অনিয়মিত ক্রিয়ামূল', en: 'Irregular stems in the passato remoto' },
    explanation: {
      bn: 'অনেক গুরুত্বপূর্ণ ক্রিয়ার passato remoto-তে ১ম একবচন (io), ৩য় একবচন (lui/lei) ও ৩য় বহুবচনে (loro) বিশেষ মূল ব্যবহৃত হয়, কিন্তু tu, noi, voi নিয়মিত থাকে: chiedere (chiesi, chiedesti, chiese, chiedemmo, chiedeste, chiesero), assumere (assunsi), condurre (condussi), porre (posi), trarre (trassi), tenere (tenni), cadere (caddi), sapere (seppi), nascere (nacqui), rompere (ruppi)।',
      en: 'Strong passato remoto verbs have an irregular stem in 1st sg., 3rd sg., and 3rd pl. (-i, -e, -ero), while tu, noi, voi remain regular from the infinitive stem.',
    },
    table: [['porre / condurre', 'posi, ponesti, pose, ponemmo, poneste, posero'], ['assumere / decidere', 'assunsi, assumesti, assunse… / decisi, decidesti, decise…'], ['tenere / sapere', 'tenni, tenesti, tenne… / seppi, sapesti, seppe…']],
  },
  {
    id: 'trapassato-remoto', level: 'B2', title: 'Il trapassato remoto',
    name: { bn: 'সাহিত্যিক পুরাঘটিত অতীত (trapassato remoto)', en: 'Literary preterite pluperfect (trapassato remoto)' },
    explanation: {
      bn: 'সাহিত্য ও ইতিহাসে passato remoto ক্রিয়ার ঠিক আগে ঘটে যাওয়া কাজ বোঝাতে dopo che, appena, non appena, quando-র পরে avere/essere-এর passato remoto (ebbi/fui) + পাস্ট পার্টিসিপল বসে: Non appena ebbe firmato il trattato, il re abdicò।',
      en: 'Formed with the passato remoto of avere/essere (ebbi/fui) + past participle. Used only in temporal clauses (dopo che, appena) immediately preceding a main verb in the passato remoto.',
    },
    table: [['con avere', 'Appena ebbe pronunciato il verdetto, l’aula tacque'], ['con essere', 'Dopo che furono giunti a Roma, convocarono l’assemblea']],
  },
  {
    id: 'futuro-epistemico-b2', level: 'B2', title: 'Futuro epistemico e concessivo',
    name: { bn: 'অনুমান ও ছাড়বাচক ভবিষ্যৎ কাল', en: 'Epistemic and concessive future' },
    explanation: {
      bn: 'ভবিষ্যৎ কাল শুধু ভবিষ্যতের ঘটনা নয়, বর্তমান বা অতীতের অনুমান (Sarà pure attendibile, ma... / Avranno già deliberato) এবং তর্কে প্রতিপক্ষের কথা আংশিক মেনে নিয়ে খণ্ডন করতে (Sarà anche vero che il PIL cresce, tuttavia il potere d’acquisto cala) ব্যবহৃত হয়।',
      en: 'The future and future perfect express logical deduction or concessive acknowledgement in debate: Sarà anche vero che…, ma… ("That may well be true, yet…").',
    },
    table: [['Concessivo presente', 'Sarà pure un progetto avanguardistico, ma i costi sono sproporzionati'], ['Concessivo passato', 'Avrà anche agito in buona fede, però ha violato la normativa']],
  },
  {
    id: 'condizionale-giornalistico', level: 'B2', title: 'Il condizionale di dissociazione',
    name: { bn: 'সাংবাদিকতায় অসমর্থিত তথ্যের কন্ডিশনাল', en: 'Journalistic conditional of unverified report' },
    explanation: {
      bn: 'সংবাদপত্র ও প্রতিবেদনে এখনো আনুষ্ঠানিকভাবে প্রমাণিত হয়নি এমন খবর বা অভিযোগ প্রকাশ করতে condizionale presente (বর্তমানের জন্য) এবং condizionale passato (অতীতের জন্য) ব্যবহৃত হয়: L’imputato avrebbe eluso il fisco per milioni di euro।',
      en: 'Used in journalism and legal reporting to distance the writer from unverified claims: present conditional for current states, past conditional for alleged past events.',
    },
    table: [['Notizia sul presente', 'Secondo fonti vicine al ministero, il decreto sarebbe imminente'], ['Notizia sul passato', 'L’azienda avrebbe usufruito indebitamente dei fondi pubblici']],
  },
  {
    id: 'passivo-avanzato', level: 'B2', title: 'Costrutti passivi avanzati (andare, venire, rimanere)',
    name: { bn: 'উন্নত কর্মবাচ্য (andare, venire, rimanere + পার্টিসিপল)', en: 'Advanced passive constructions' },
    explanation: {
      bn: '১) venire + পার্টিসিপল: কেবল সরল কালে প্রক্রিয়া বোঝায় (La legge viene promulgata)। ২) andare + পার্টিসিপল: বাধ্যবাধকতা (La norma va rispettata) অথবা "হারানো/নষ্ট হওয়া" ক্রিয়ায় অনিচ্ছাকৃত ঘটনা (I reperti sono andati perduti/distrutti)। ৩) rimanere/restare + পার্টিসিপল: ফলাফলজনিত অবস্থা (Siamo rimasti sconcertati)।',
      en: '1) venire + participle (simple tenses, dynamic process); 2) andare + participle (obligation, or accidental loss with perduto/distrutto/smarrito in compound tenses); 3) rimanere + participle (resulting state).',
    },
    table: [['andare + obbligo', 'Il modulo va inoltrato tramite PEC'], ['andare + perdita (composti)', 'Molti manoscritti sono andati perduti nell’alluvione'], ['rimanere + participio', 'La questione è rimasta irrisolta per decenni']],
  },
  {
    id: 'si-passivante-riflessivo', level: 'B2', title: 'Si impersonale con verbi riflessivi e tempi composti',
    name: { bn: 'প্রতিফলক ক্রিয়া ও যৌগিক কালে নৈর্ব্যক্তিক ci si', en: 'Impersonal ci si with reflexives and compound tenses' },
    explanation: {
      bn: 'প্রতিফলক ক্রিয়ার সাথে নৈর্ব্যক্তিক si বসলে প্রথম si পরিবর্তিত হয়ে ci হয় (ci si abitua, ci si rende conto)। যৌগিক কালে সর্বদা essere বসে এবং পার্টিসিপল বহুবচন হয়: Ci si è accorti dell’errore; Quando si è onesti, si viene apprezzati।',
      en: 'Before reflexive si, impersonal si becomes ci (ci si abitua). In compound tenses, impersonal constructions always take auxiliary essere with a plural masculine participle when the verb takes essere (ci si è resi conto).',
    },
    table: [['Presente', 'In un nuovo contesto ci si adegua gradualmente'], ['Passato', 'Ci si è resi conto troppo tardi delle ripercussioni']],
  },
  {
    id: 'subordinate-implicite', level: 'B2', title: 'Trasformazione tra subordinate esplicite e implicite',
    name: { bn: 'সমাপিকা ও অসমাপিকা খণ্ডবাক্যের রূপান্তর', en: 'Converting between explicit and implicit subordinate clauses' },
    explanation: {
      bn: 'প্রধান ও অধীন বাক্যের কর্তা এক হলে che + সমাপিকা ক্রিয়ার বদলে di/a/per + ইনফিনিটিভ, জেরুন্ড বা পার্টিসিপল ব্যবহার করে বাক্যকে সংহত ও মার্জিত করা যায়: Poiché aveva constatato → Avendo constatato; Prima che firmasse → Prima di firmare।',
      en: 'When the main and subordinate clauses share the same subject, explicit clauses (che/poiché/benché + finite verb) condense into implicit infinitive, gerund, or participial clauses.',
    },
    table: [['Esplicita → Infinito', 'Credo che io abbia ragione ❌ → Credo di avere ragione ✅'], ['Esplicita → Gerundio', 'Poiché avevamo verificato le fonti → Avendo verificato le fonti']],
  },
  {
    id: 'gerundio-causale-ipotetico', level: 'B2', title: 'Valori avanzati del gerundio (causale, ipotetico, concessivo)',
    name: { bn: 'জেরুন্ডের কারণ, শর্ত ও ছাড়বাচক ব্যবহার', en: 'Causal, conditional, and concessive gerunds' },
    explanation: {
      bn: 'জেরুন্ড দ্বারা: ১) কারণ (Essendo scaduti i termini, il ricorso è inammissibile), ২) শর্ত (Investendo nelle rinnovabili, ridurremmo le emissioni = Se investissimo...), ৩) ছাড়বাচক ভাব (Pur condividendo la premessa, dissento sulle conclusioni) প্রকাশ পায়।',
      en: 'The gerund can express cause (Essendo...), hypothesis with conditional main verb (Investendo... ridurremmo), or concession preceded by pur (Pur riconoscendo...).',
    },
    table: [['Ipotetico', 'Ottimizzando la logistica, dimezzeremmo i costi'], ['Concessivo (pur + ger.)', 'Pur avendo ottenuto il brevetto, non hanno avviato la produzione']],
  },
  {
    id: 'participio-presente-b2', level: 'B2', title: 'Il participio presente nel registro formale',
    name: { bn: 'আনুষ্ঠানিক ও আইনি ভাষায় বর্তমান পার্টিসিপল (-ante, -ente)', en: 'Present participle in formal and legal Italian' },
    explanation: {
      bn: '-ante / -ente যুক্ত বর্তমান পার্টিসিপল বিশেষ্য বা বিশেষণ হিসেবে (la norma vigente, il medico competente, il richiedente) এবং আনুষ্ঠানিক লেখায় সম্বন্ধবাচক খণ্ডবাক্যের সংক্ষিপ্ত রূপ হিসেবে (una misura riguardante = che riguarda) ব্যবহৃত হয়।',
      en: 'Forms in -ante/-ente function as nouns/adjectives (vigente, competente, avente diritto) and condense relative clauses in legal/academic prose (un decreto contenente = che contiene).',
    },
    table: [['Valore aggettivale', 'la normativa vigente / un argomento convincente'], ['Valore verbale (formale)', 'i cittadini aventi diritto al patrocinio gratuito']],
  },
  {
    id: 'participio-assoluto-b2', level: 'B2', title: 'Costrutti assoluti con participio passato',
    name: { bn: 'স্বাধীন পাস্ট পার্টিসিপল খণ্ডবাক্য', en: 'Absolute past participle clauses' },
    explanation: {
      bn: 'যৌগিক কালের সহায়ক ক্রিয়া উহ্য রেখে পাস্ট পার্টিসিপলকে সরাসরি বিশেষ্যের সাথে লিঙ্গ ও বচনে মিলিয়ে বাক্যের শুরুতে বসানো যায়: Approvata la legge, il governo ha stanziato i fondi; Venuto meno il presupposto, l’accordo decade।',
      en: 'Placed at the start of a sentence, the past participle agrees in gender and number with its noun subject to express temporal/causal priority: Approvata la legge (= Dopo che è stata approvata la legge).',
    },
    table: [['Transitivo (passivo)', 'Esaminati i reperti, gli archeologi pubblicarono lo studio'], ['Intransitivo (essere)', 'Entrata in vigore la riforma, le procedure sono cambiate']],
  },
  {
    id: 'infinito-sostantivato', level: 'B2', title: "L'infinito sostantivato e i suoi usi stilistici",
    name: { bn: 'বিশেষ্যরূপী ইনফিনিটিভ (il fare, l’agire)', en: 'Nominalised infinitive' },
    explanation: {
      bn: 'পুংলিঙ্গ একবচন আর্টিকেল (il / lo / l’) যোগে যেকোনো ইনফিনিটিভকে বিমূর্ত বিশেষ্যে রূপান্তর করা যায়: Il proliferare delle notizie infondate; L’aver taciuto la verità ha aggravato la sua posizione।',
      en: 'Any infinitive (present or past) can be nominalised with masculine singular article il/l’ to express an abstract process or fact: Il continuo rincorrersi delle voci; L’aver sottovalutato il rischio.',
    },
    table: [['Infinito presente', 'Il persistere della siccità minaccia i raccolti'], ['Infinito passato', 'L’aver firmato senza leggere ha comportato gravi oneri']],
  },
  {
    id: 'discorso-indiretto-complesso', level: 'B2', title: 'Discorso indiretto avanzato e deissi',
    name: { bn: 'উন্নত পরোক্ষ উক্তি এবং সময়-স্থানের পরিবর্তন', en: 'Advanced reported speech and deictic shifts' },
    explanation: {
      bn: 'অতীতে পরোক্ষ উক্তিতে কালের পাশাপাশি সময় ও স্থানের শব্দ বদলে যায়: oggi → quel giorno, ieri → il giorno precedente / la vigilia, domani → l’indomani / il giorno seguente, qui → lì, questo → quello। পরোক্ষ প্রশ্নে congiuntivo ও indicativo উভয়ই সূক্ষ্ম অর্থভেদে বসে।',
      en: 'In past reported speech, deictics shift systematically: oggi → quel giorno, ieri → il giorno prima / precedente, domani → l’indomani / il giorno successivo, ora → allora, qui → lì.',
    },
    table: [['Deissi temporale', 'ieri → il giorno precedente | domani → l’indomani | fa → prima'], ['Interrogativa indiretta', 'Si chiese se la sentenza fosse davvero equa']],
  },
  {
    id: 'discorso-indiretto-libero', level: 'B2', title: 'Il discorso indiretto libero nella narrativa',
    name: { bn: 'সাহিত্যিক মুক্ত পরোক্ষ উক্তি', en: 'Free indirect speech in literary prose' },
    explanation: {
      bn: 'উপন্যাস ও আখ্যানে (যেমন জিওভান্নি ভের্গা বা ইতালো কালভিনো) উদ্ধৃতি চিহ্ন বা "disse che" ছাড়াই চরিত্রের চিন্তা ও কণ্ঠস্বরকে সরাসরি imperfetto বা condizionale passato-তে বর্ণনাকারীর ভাষার ভেতর মিলিয়ে দেওয়া হয়: Cosa avrebbe fatto ora? Dove sarebbe andato?।',
      en: 'Reports a character’s inner thoughts without reporting verbs (disse che) or quotation marks, blending the character’s voice with 3rd-person imperfect and past conditional.',
    },
    table: [['Indiretto canonico', 'Lucia si chiedeva che cosa avrebbe fatto l’indomani'], ['Indiretto libero', 'Lucia guardò il treno allontanarsi. Che cosa avrebbe fatto l’indomani?']],
  },
  {
    id: 'relativi-formali-b2', level: 'B2', title: 'Pronomi relativi formali (il quale, il cui, ciò che)',
    name: { bn: 'আনুষ্ঠানিক সম্বন্ধবাচক সর্বনাম (il quale, il cui, per cui)', en: 'Formal relative pronouns' },
    explanation: {
      bn: 'দ্ব্যর্থতা এড়াতে এবং প্রিপোজিশনের পরে il/la quale, i/le quali ব্যবহৃত হয়। অধিকার বোঝাতে আর্টিকেল + cui + বিশেষ্য (la legge i cui effetti...) বসে। ফলাফল বোঝাতে per cui / ragion per cui ("যার ফলে") ব্যবহৃত হয়।',
      en: 'Use il/la quale to disambiguate gender/number after prepositions; article + cui + noun for possession (l’azienda il cui fatturato…); and per cui ("whereby / therefore") for consequence.',
    },
    table: [['Possessivo con cui', 'L’ateneo i cui ricercatori hanno vinto il premio'], ['Consecutivo', 'Mancava il numero legale, ragion per cui la seduta è stata rinviata']],
  },
  {
    id: 'doppi-relativi', level: 'B2', title: 'Pronomi relativi doppi (chi, quanto, quanti)',
    name: { bn: 'যুগ্ম সম্বন্ধবাচক সর্বনাম (chi, quanto, quanti)', en: 'Double relative pronouns (chi, quanto, quanti)' },
    explanation: {
      bn: '১) chi = colui/colei che (একবচন ক্রিয়া নেয়)। ২) quanto (একবচন) = tutto ciò che (যা কিছু: Condivido quanto è emerso dal dibattito)। ৩) quanti / quante (বহুবচন) = tutti coloro che (যাঁরা সবাই: Ringrazio quanti hanno contribuito)।',
      en: 'chi ("he/she who" + sg. verb); singular quanto ("all that which": Confermo quanto dichiarato); plural quanti/quante ("all those who": Rivolgo un appello a quanti operano nel settore).',
    },
    table: [['quanto (ciò che)', 'Mi attengo a quanto previsto dal capitolato'], ['quanti (coloro che)', 'Un sostegno concreto a quanti versano in difficoltà']],
  },
  {
    id: 'dislocazione-sinistra', level: 'B2', title: 'Sintassi marcata: la dislocazione a sinistra',
    name: { bn: 'বাক্যের বামে কর্ম স্থানান্তর ও সর্বনাম পুনরাবৃত্তি', en: 'Left dislocation and clitic resumption' },
    explanation: {
      bn: 'কথোপকথন ও প্রমিত গদ্যে কোনো কর্মকে আলোচনার কেন্দ্রবিন্দু (tema) করতে বাক্যের শুরুতে এনে ক্রিয়ার আগে সর্বনাম (lo, la, li, le, ne) দিয়ে পুনরায় নির্দেশ করা হয়: Il rogito lo firmeremo dal notaio giovedì; Di questo emendamento ne abbiamo già discusso।',
      en: 'Fronting the object to establish the topic requires a resumptive clitic pronoun (lo, la, li, le, ne) with participle agreement in compound tenses: La perizia l’abbiamo depositata ieri.',
    },
    table: [['Oggetto diretto', 'Le clausole vessatorie le abbiamo contestate subito'], ['Partitivo / complemento con di', 'Di quella vertenza non se ne parla più']],
  },
  {
    id: 'dislocazione-destra', level: 'B2', title: 'Sintassi marcata: la dislocazione a destra',
    name: { bn: 'বাক্যের ডানে কর্ম স্থানান্তর ও প্রাক-সর্বনাম', en: 'Right dislocation for conversational emphasis' },
    explanation: {
      bn: 'আগে সর্বনাম ব্যবহার করে বাক্যের শেষে কমা দিয়ে বিশেষ্য পদটি স্পষ্ট করার জন্য যোগ করাকে dislocazione a destra বলে: L’hai poi inviata, la raccomandata?; Non ci credo affatto, a quelle promesse।',
      en: 'An anticipatory clitic pronoun precedes the verb while the full noun phrase is added at the end after a pause: L’abbiamo già approvata, la delibera.',
    },
    table: [['Con oggetto diretto', 'Lo conosci bene, il regolamento condominiale?'], ['Con ci / ne', 'Ne abbiamo già parlato a lungo, di questo problema']],
  },
  {
    id: 'frase-scissa', level: 'B2', title: 'La frase scissa e pseudoscissa',
    name: { bn: 'বিভক্ত ও জোরালো বাক্য (È ... che / Ciò che ... è)', en: 'Cleft and pseudo-cleft sentences' },
    explanation: {
      bn: 'নির্দিষ্ট তথ্যকে জোর দিতে বাক্যকে দুই ভাগে ভাগ করা হয়: ১) Frase scissa: essere + জোর দেওয়া পদ + che / a + infinito (È la magistratura che deve accertare i fatti / Sei tu a dover decidere)। ২) Pseudoscissa: Ciò che preoccupa è il calo delle nascite।',
      en: 'Cleft sentences highlight a constituent: È + focus + che + finite verb (or a + infinitive when focusing the subject). Pseudo-clefts open with Ciò che / Quello che… è…',
    },
    table: [['Frase scissa (che)', 'È sulla prevenzione che bisogna investire di più'], ['Scissa implicita (a + inf.)', 'Sono state le piccole imprese a trainare l’esportazione'], ['Pseudoscissa', 'Ciò che manca è una visione a lungo termine']],
  },
  {
    id: 'inversione-soggetto', level: 'B2', title: "L'inversione del soggetto",
    name: { bn: 'জোর ও আনুষ্ঠানিক শৈলীতে কর্তার অবস্থান পরিবর্তন', en: 'Subject-verb inversion for focus and style' },
    explanation: {
      bn: 'নতুন তথ্য হিসেবে কর্তাকে জোর দিতে বা অকর্মক/গতিশীল ক্রিয়ায় (arrivare, nascere, sorgere, mancare, bastare, seguire) কর্তা ক্রিয়ার পরে বসে: Sono intervenuti il rettore e il sindaco; Segue un dibattito; A ciò si aggiunge la carenza di fondi।',
      en: 'Placing the subject after the verb marks it as new information (focus) or is standard with unaccusative/presentative verbs (arrivare, sorgere, mancare, seguire, bastare).',
    },
    table: [['Verbi presentativi', 'All’incontro hanno preso parte numerosi studiosi'], ['Focalizzazione del soggetto', 'Ha risposto l’amministratore delegato in persona']],
  },
  {
    id: 'nominalizzazione-b2', level: 'B2', title: 'La nominalizzazione nel registro formale',
    name: { bn: 'ক্রিয়াকে বিশেষ্যে রূপান্তর (প্রাতিষ্ঠানিক ও একাডেমিক শৈলী)', en: 'Nominalisation in academic, legal, and journalistic prose' },
    explanation: {
      bn: 'উচ্চতর ইতালিয়ান গদ্যে সমাপিকা ক্রিয়ার বদলে বিমূর্ত বিশেষ্য পদ ব্যবহার করে বাক্যকে সংহত করা হয়: Dopo che è entrata in vigore la legge → Dopo l’entrata in vigore della legge; Poiché sono calate le nascite → A causa del calo delle nascite।',
      en: 'Formal Italian replaces finite verb clauses with abstract action nouns: Quando si abroga una norma → L’abrogazione della norma; Perché i ghiacciai si sciolgono → Lo scioglimento dei ghiacciai.',
    },
    table: [['Stile verbale', 'Quando il parlamento ha promulgato il decreto, i mercati hanno reagito'], ['Stile nominale (B2)', 'La promulgazione del decreto ha determinato l’immediata reazione dei mercati']],
  },
  {
    id: 'connettivi-argomentativi', level: 'B2', title: 'Connettivi testuali argomentativi',
    name: { bn: 'যুক্তি ও প্রমাণের সংযোজক (pertanto, ne consegue che, tant’è vero che)', en: 'Argumentative discourse connectors' },
    explanation: {
      bn: 'প্রবন্ধ ও বিতর্কে কার্যকারণ, অনুসিদ্ধান্ত ও প্রমাণ উপস্থাপনে ব্যবহৃত হয়: in quanto / giacché / dal momento che (কারণ), pertanto / di conseguenza / ne consegue che (অতএব/ফলস্বরূপ), tant’è vero che (যার প্রকৃষ্ট প্রমাণ হলো)।',
      en: 'High-register connectors that structure logical proof: giacché / in quanto (cause), pertanto / ne consegue che / ragion per cui (logical consequence), tant’è vero che (supporting evidence).',
    },
    table: [['Deduzione', 'Il ricorso è stato depositato fuori tempo massimo; pertanto è inammissibile'], ['Prova (tant’è vero che)', 'Il settore è in ripresa, tant’è vero che le esportazioni sono cresciute del 6%']],
  },
  {
    id: 'connettivi-riformulazione', level: 'B2', title: 'Connettivi di riformulazione, sintesi e ordine testuale',
    name: { bn: 'ব্যাখ্যা, ক্রমবিন্যাস ও সারসংক্ষেপের সংযোজক', en: 'Connectors of reformulation, ordering, and synthesis' },
    explanation: {
      bn: 'যুক্তির ধাপ সাজাতে in primo luogo… in secondo luogo…, অন্য কথায় ব্যাখ্যা করতে vale a dire / ossia / ovvero, এবং উপসংহার টানতে in sintesi / in definitiva / in ultima analisi ব্যবহৃত হয়।',
      en: 'Organise discourse with in primo luogo / in secondo luogo, reformulate with vale a dire / ossia ("namely / that is to say"), and conclude with in definitiva / in ultima analisi.',
    },
    table: [['Riformulazione', 'L’indice ISEE, vale a dire l’indicatore della situazione economica familiare…'], ['Sintesi finale', 'In ultima analisi, la transizione ecologica richiede investimenti costanti']],
  },
  {
    id: 'locuzioni-preposizionali-b2', level: 'B2', title: 'Locuzioni preposizionali complesse',
    name: { bn: 'যৌগিক প্রিপোজিশনাল পদগুচ্ছ (ai sensi di, alla luce di, a scapito di)', en: 'Complex prepositional phrases' },
    explanation: {
      bn: 'একক প্রিপোজিশনের চেয়ে সূক্ষ্ম অর্থ প্রকাশে যৌগিক পদগুচ্ছ ব্যবহৃত হয়: ai sensi di / in conformità con (আইন অনুযায়ী), in virtù di (বলে/কারণে), alla luce di (আলোকে), a scapito di (ক্ষতি করে), a beneficio di (কল্যাণে), a prescindere da (নির্বিশেষে), nell’ambito di (আওতায়)।',
      en: 'Multi-word prepositions add precision: ai sensi di ("pursuant to"), alla luce di ("in the light of"), a scapito di ("at the expense of"), a prescindere da ("regardless of"), in virtù di ("by virtue of").',
    },
    table: [['Giuridico', 'Ai sensi dell’articolo 3 della Costituzione…'], ['Argomentativo', 'Alla luce dei dati raccolti, a prescindere dalle opinioni personali…']],
  },
  {
    id: 'verbi-procomplementari', level: 'B2', title: 'Verbi procomplementari e idiomatici avanzati',
    name: { bn: 'সর্বনামযুক্ত বাগধারামূলক ক্রিয়া (prendersela, entrarci, volerci)', en: 'Advanced procomplementary verbs' },
    explanation: {
      bn: 'স্থির সর্বনামযুক্ত ক্রিয়া যা বিশেষ অর্থ বহন করে: prendersela (মনে কষ্ট পাওয়া/রাগ করা), avercela con qualcuno (কারো ওপর ক্ষুব্ধ থাকা), entrarci (প্রাসঙ্গিক হওয়া: Che c’entra questo?), farcela, cavarsela, sbrigarsela, tirarsela, darci dentro (মনোযোগ দিয়ে খাটা)।',
      en: 'Idiomatic verbs with lexicalised clitics: prendersela ("to take offence"), avercela con ("to be angry with"), entrarci ("to have to do with": Non c’entra nulla), sbrigarsela, darci dentro.',
    },
    table: [['entrarci / avercela', 'La politica non c’entra nulla | Ce l’ha ancora con me per quel malinteso'], ['prendersela / sbrigarsela', 'Non te la prendere per una battuta! | Se l’è sbrigata da solo']],
  },
  {
    id: 'verbi-doppio-ausiliare', level: 'B2', title: 'Verbi con doppio ausiliare (avere o essere)',
    name: { bn: 'কর্মভেদে avere ও essere উভয় গ্রহণকারী ক্রিয়া', en: 'Verbs taking either avere or essere' },
    explanation: {
      bn: 'অনেক ক্রিয়া (cambiare, crescere, aumentare, diminuire, migliorare, peggiorare, iniziare, finire, salire, scendere, passare, correre, vivere) সকর্মক হলে (কর্ম থাকলে) avere নেয়, আর অকর্মক হলে (কর্তার নিজের পরিবর্তন বোঝালে) essere নেয়।',
      en: 'Verbs of change and motion (aumentare, diminuire, cambiare, migliorare, finire, salire, scendere, passare) take avere when used transitively with a direct object, and essere when used intransitively.',
    },
    table: [['Transitivo (avere)', 'La banca ha aumentato i tassi | Ho salito le scale di corsa'], ['Intransitivo (essere)', 'I prezzi sono aumentati | Sono salito al quarto piano']],
  },
  {
    id: 'causativi-riflessivi', level: 'B2', title: 'Costrutti causativi riflessivi e percettivi (farsi fare, lasciarsi)',
    name: { bn: 'প্রতিফলক প্রযোজক ও প্রত্যক্ষণ ক্রিয়া (farsi fare, lasciarsi convincere)', en: 'Reflexive causative and perception constructions' },
    explanation: {
      bn: 'নিজের জন্য কাউকে দিয়ে কিছু করানো বোঝাতে farsi + ইনফিনিটিভ (Mi sono fatto rilasciare l’attestato) এবং নিজেকে প্রভাবিত হতে দেওয়া বোঝাতে lasciarsi + ইনফিনিটিভ (Non lasciarti scoraggiare dalle critiche) বসে। যৌগিক কালে সহায়ক essere হয়।',
      en: 'farsi + infinitive ("to have something done for oneself / to make oneself understood") and lasciarsi + infinitive ("to let oneself be…") take auxiliary essere in compound tenses.',
    },
    table: [['farsi + infinito', 'Si è fatta assistere da un avvocato | Fatti valere!'], ['lasciarsi + infinito', 'Non si sono lasciati intimidire dalle difficoltà']],
  },
  {
    id: 'negazione-pleonastica', level: 'B2', title: 'La negazione pleonastica e gli usi di "non"',
    name: { bn: 'অলংকারিক non (finché non, a meno che non, temo che non)', en: 'Pleonastic negation in temporal, conditional, and comparative clauses' },
    explanation: {
      bn: 'finché non (যতক্ষণ না), a meno che non (যদি না), এবং তুলনামূলক খণ্ডবাক্যে (È più complesso di quanto non sembri) যে non বসে তা আসলে নেতিবাচক অর্থ দেয় না, বরং সীমা বা তুলনা জোরালো করে।',
      en: 'In clauses introduced by finché non ("until"), a meno che non ("unless"), and comparatives of inequality (più difficile di quanto non si creda), non is pleonastic and does not negate the verb.',
    },
    table: [['Temporale (finché non)', 'Aspetteremo finché non verrà pubblicata la graduatoria'], ['Comparativa', 'La questione è più delicata di quanto non appaia a prima vista']],
  },
  {
    id: 'comparativi-analogici', level: 'B2', title: 'Comparazione ipotetica e di disuguaglianza col congiuntivo',
    name: { bn: 'কাল্পনিক তুলনা (come se + congiuntivo, più di quanto)', en: 'Hypothetical and clausal comparisons' },
    explanation: {
      bn: '“যেন” অর্থে come se-র পরে সর্বদা congiuntivo imperfetto বা trapassato বসে (Parla come se fosse un esperto)। আবার দুটি খণ্ডবাক্যের তুলনায় più/meno... di quanto + congiuntivo বসে (Ha speso più di quanto avesse preventivato)।',
      en: 'come se ("as if") always takes the imperfect or pluperfect subjunctive. Clausal comparisons use più/meno… di quanto (non) + subjunctive.',
    },
    table: [['come se + cong.', 'Agisce come se le regole non lo riguardassero'], ['più di quanto + cong.', 'Il restauro è durato meno di quanto temessimo']],
  },
  {
    id: 'superlativo-sintetico', level: 'B2', title: 'Superlativi colti in -errimo/-entissimo e prefissoidi',
    name: { bn: 'তৎসম সুপারলেটিভ (-errimo) ও উপসর্গযোগে অতিশায়ন', en: 'Learned superlatives and intensifying prefixes' },
    explanation: {
      bn: 'কিছু বিশেষণের সুপারলেটিভ ল্যাটিন মূল থেকে -errimo বা -entissimo নেয়: celebre → celeberrimo, integro → integerrimo, misero → miserrimo, acre → acerrimo, benevolo → benevolentissimo, munifico → munificentissimo। আধুনিক ভাষায় iper-, ultra-, sovra-, stra- উপসর্গও বসে।',
      en: 'Certain adjectives form their absolute superlative in -errimo (celeberrimo, integerrimo, acerrimo) or -entissimo (benevolentissimo). Contemporary Italian also uses prefixes: iper-, ultra-, sovra-, stra-.',
    },
    table: [['Forme in -errimo', 'integerrimo (integro), celeberrimo (celebre), acerrimo (acre)'], ['Prefissoidi', 'ipersensibile, ultrasottile, sovraffollato, stracolmo']],
  },
  {
    id: 'aggettivo-posizione-b2', level: 'B2', title: "La posizione dell'aggettivo e il cambio di significato",
    name: { bn: 'বিশেষণের অবস্থান পরিবর্তনে অর্থের পরিবর্তন', en: 'Adjective position and semantic shift' },
    explanation: {
      bn: 'অনেক বিশেষণ বিশেষ্যের আগে বসলে আলংকারিক বা ব্যক্তিনিষ্ঠ অর্থ দেয় এবং পরে বসলে আক্ষরিক বা শনাক্তকারী অর্থ দেয়: un alto funzionario (উচ্চপদস্থ কর্মকর্তা) vs un uomo alto (লম্বা মানুষ); diverse proposte (বেশ কিছু প্রস্তাব) vs proposte diverse (ভিন্ন ভিন্ন প্রস্তাব); un vecchio amico vs un amico vecchio।',
      en: 'Many adjectives change meaning depending on whether they precede the noun (figurative/subjective) or follow it (literal/restrictive): un grande uomo vs un uomo grande; certe notizie vs notizie certe.',
    },
    table: [['Prima del nome (traslato)', 'un alto magistrato | diverse opzioni | una certa somma'], ['Dopo il nome (letterale)', 'un muro alto | opinioni diverse | una notizia certa']],
  },
  {
    id: 'modali-epistemici', level: 'B2', title: 'Uso epistemico e deontico dei verbi modali',
    name: { bn: 'মডাল ক্রিয়ার বাধ্যবাধকতা বনাম যৌক্তিক অনুমান', en: 'Deontic vs epistemic use of modal verbs' },
    explanation: {
      bn: 'dovere ও potere কেবল বাধ্যবাধকতা বা সক্ষমতাই নয়, অনুমানের মাত্রাও প্রকাশ করে: Deve aver perso il treno (নিশ্চয়ই ট্রেন মিস করেছে — উচ্চ সম্ভাবনা), Può essersi verificato un guasto (হয়তো ত্রুটি ঘটেছে), Avrebbe dovuto avvertirci (জানানো উচিত ছিল)।',
      en: 'Modal verbs express probability (epistemic): Deve essere già partito ("He must have already left"), Può aver frainteso ("He may have misunderstood"), Potrebbe trattarsi di un errore.',
    },
    table: [['Certezza deduttiva (dovere)', 'Devono aver già chiuso il verbale: le luci sono spente'], ['Possibilità (potere)', 'Il ritardo potrebbe dipendere dallo sdoganamento']],
  },
  {
    id: 'imperativo-formale-pronomi', level: 'B2', title: "L'imperativo formale con pronomi e negazione",
    name: { bn: 'আনুষ্ঠানিক Lei/Loro অনুজ্ঞায় সর্বনামের অবস্থান', en: 'Formal imperative with simple and combined pronouns' },
    explanation: {
      bn: 'আনুষ্ঠানিক Lei অনুজ্ঞায় (যা মূলত congiuntivo presente) সর্বনাম সর্বদা ক্রিয়ার আগে বসে, ইতিবাচক ও নেতিবাচক উভয় ক্ষেত্রেই: Me lo dica pure; Non se la prenda; Si accomodi; Ce ne parli।',
      en: 'Unlike informal tu/noi/voi imperatives, the formal Lei imperative (subjunctive) always places clitic pronouns BEFORE the verb in both affirmative and negative sentences: Me lo mandi; Non se ne preoccupi.',
    },
    table: [['Tu (enclisi)', 'Mandamelo! | Non mandarmelo! | Accomodati!'], ['Lei formale (proclisi)', 'Me lo mandi! | Non me lo mandi! | Si accomodi!']],
  },
  {
    id: 'costrutti-impersonali-b2', level: 'B2', title: 'Costrutti impersonali accademici e istituzionali',
    name: { bn: 'একাডেমিক ও প্রাতিষ্ঠানিক নৈর্ব্যক্তিক কাঠামো', en: 'Academic and institutional impersonal constructions' },
    explanation: {
      bn: 'প্রবন্ধ ও দাপ্তরিক লেখায় বস্তুনিষ্ঠতা বজায় রাখতে si ritiene che, si evince che, occorre, urge, preme sottolineare, non consta che + congiuntivo বা ইনফিনিটিভ ব্যবহৃত হয়।',
      en: 'Academic and legal prose favours impersonal structures: si evince dai dati che + indicative, si ritiene che + subjunctive, urge / occorre + infinitive, preme evidenziare che.',
    },
    table: [['Con indicativo (certezza)', 'Dai dati si evince che il divario digitale si sta riducendo'], ['Con congiuntivo (valutazione)', 'Si ritiene opportuno che la commissione proroghi i termini']],
  },
  {
    id: 'reggenze-verbali-b2', level: 'B2', title: 'Reggenze preposizionali di verbi e aggettivi avanzati',
    name: { bn: 'উচ্চতর ক্রিয়া ও বিশেষণের নির্দিষ্ট প্রিপোজিশন', en: 'Prepositional government of advanced verbs and adjectives' },
    explanation: {
      bn: 'B2 স্তরের গুরুত্বপূর্ণ প্রিপোজিশনাল সংযোগ: attenersi a, ottemperare a, contribuire a, rinunciare a, adeguarsi a, consistere in, incorrere in, imbattersi in, prescindere da, scaturire da, esimersi da, vertere su, idoneo a, conforme a, esente da।',
      en: 'Key B2 prepositional regimens: attenersi a, ottemperare a, adeguarsi a, consistere in, incorrere in, prescindere da, scaturire da, vertere su, idoneo a, conforme a, esente da.',
    },
    table: [['Reggenza con A / IN', 'attenersi alle norme | incorrere in una sanzione | consistere in'], ['Reggenza con DA / SU', 'prescindere dai costi | esente da imposte | il dibattito verte sul clima']],
  },
  {
    id: 'suffissi-alterativi-b2', level: 'B2', title: 'Alterazione morfologica e sfumature pragmatiche',
    name: { bn: 'প্রত্যয়যোগে শব্দের সূক্ষ্ম ভাব ও ব্যঞ্জনা (-ino, -one, -uccio, -accio)', en: 'Evaluative suffixes and pragmatic nuances' },
    explanation: {
      bn: 'ইতালিয়ানে শুধু আকার নয়, বক্তার মনোভাব (স্নেহ, বিনয়, বিরক্তি বা বিদ্রূপ) প্রকাশে প্রত্যয় যোগ হয়: un pensierino (উপহার), una domandina (বিনীত প্রশ্ন), un affarone (দারুণ লাভজনক সওদা), una giornataccia (বাজে দিন), un impiegatuccio (তুচ্ছার্থে)। অনেক শব্দ স্থায়ী বিশেষ্যে পরিণত হয়েছে (libretto, cartellino, cavalletto)।',
      en: 'Evaluative suffixes express size and speaker attitude: diminutive/hedging (-ino, -etto), augmentative (-one), affectionate/modest (-uccio), pejorative (-accio). Some are lexicalised (il libretto, la bustarella).',
    },
    table: [['Mitigazione / affetto', 'Avrei una domandina | Abbiamo comprato un appartamentino'], ['Accrescitivo / peggiorativo', 'È stato un vero affarone! | Che tempaccio oggi!']],
  },
  {
    id: 'formazione-parole-b2', level: 'B2', title: 'Derivazione, prefissazione e composizione lessicale',
    name: { bn: 'উপসর্গ, প্রত্যয় ও সমাসযোগে শব্দ গঠন', en: 'Word formation: derivation, prefixes, and compounds' },
    explanation: {
      bn: 'ক্রিয়া থেকে বিশেষ্য (-zione, -mento, -anza, -aggio: smaltire → smaltimento, tutelare → tutela), বিশেষণ থেকে বিশেষ্য (-ità, -ezza: attendibile → attendibilità) এবং বিপরীতার্থক উপসর্গ (in-, il-, ir-, dis-, s-: legittimo → illegittimo, proporzionato → sproporzionato) চিনে দ্রুত শব্দভাণ্ডার বাড়ানো যায়।',
      en: 'Mastery of productive suffixes (-zione, -mento, -ità, -evole) and negative/transformative prefixes (in-/il-/ir-, dis-, s-, ri-, contro-, inter-) unlocks thousands of academic and technical terms.',
    },
    table: [['Prefissi negativi', 'attendibile → inattendibile | legale → illegale | reversibile → irreversibile'], ['Nominalizzazione', 'adeguare → adeguamento | riscuotere → riscossione | equo → equità']],
  },
  {
    id: 'lessico-giuridico-burocratico', level: 'B2', title: "L'italiano giuridico-amministrativo e la sua semplificazione",
    name: { bn: 'আইনি ও দাপ্তরিক ইতালিয়ান এবং প্রমিত সরলীকরণ', en: 'Legal-administrative Italian and plain-language equivalents' },
    explanation: {
      bn: 'সরকারি নোটিশ ও চুক্তিপত্রে ব্যবহৃত আনুষ্ঠানিক শব্দ ও সেগুলোর সাধারণ অর্থ বোঝা জরুরি: altresì (anche), testé / poc’anzi (appena), all’uopo (a tale scopo), istanza (domanda), diniego (rifiuto), erogare (fornire), ottemperare (rispettare), entro e non oltre (entro)।',
      en: 'Official notices use bureaucratic terms that map to standard Italian: istanza (= domanda), diniego (= rifiuto), altresì (= inoltre), ottemperare (= rispettare), testé (= appena).',
    },
    table: [['Termine burocratico', 'presentare un’istanza | opporre un diniego | ottemperare agli obblighi'], ['Italiano standard', 'presentare una domanda | rifiutare | rispettare gli obblighi']],
  },
  {
    id: 'lessico-economico-finanziario', level: 'B2', title: 'Il linguaggio economico, aziendale e finanziario',
    name: { bn: 'অর্থনীতি, বাণিজ্য ও কর্পোরেট পরিভাষা', en: 'Economic, corporate, and financial register' },
    explanation: {
      bn: 'অর্থনৈতিক প্রতিবেদন ও ব্যবসার ভাষায় সুনির্দিষ্ট কলোকেশন ব্যবহৃত হয়: contrarre un debito, stanziare fondi, quotarsi in borsa, generare un fatturato, ammortizzare i costi, colmare il disavanzo, riscuotere i dividendi।',
      en: 'Standard economic collocations: stanziare fondi ("allocate funds"), colmare il disavanzo ("close the deficit"), ammortizzare un investimento, quotarsi in borsa.',
    },
    table: [['Collocazioni pubbliche', 'approvare la legge di bilancio | ridurre il debito pubblico'], ['Collocazioni aziendali', 'incrementare il fatturato | diversificare il portafoglio']],
  },
  {
    id: 'lessico-scientifico-accademico', level: 'B2', title: 'Il registro scientifico e accademico',
    name: { bn: 'বৈজ্ঞানিক ও একাডেমিক গদ্যের কাঠামো', en: 'Scientific and academic prose conventions' },
    explanation: {
      bn: 'বৈজ্ঞানিক নিবন্ধে নৈর্ব্যক্তিক ক্রিয়া, কর্মবাচ্য ও সুনির্দিষ্ট পরিভাষা ব্যবহৃত হয়: formulare un’ipotesi, sottoporre a verifica empirica, selezionare un campione rappresentativo, individuare una correlazione, confutare una tesi।',
      en: 'Academic Italian relies on impersonal verbs, passive voice, and precise collocations: formulare un’ipotesi, sottoporre a verifica empirica, confutare una tesi.',
    },
    table: [['Metodo scientifico', 'formulare un’ipotesi → raccogliere i dati → verificare empiricamente'], ['Discussione risultati', 'I risultati confermano il nesso causale ipotizzato']],
  },
  {
    id: 'lessico-giornalistico', level: 'B2', title: 'Lo stile giornalistico e la sintassi dei titoli',
    name: { bn: 'সংবাদপত্রের শিরোনাম ও সাংবাদিকতার ভাষা', en: 'Journalistic style and headline syntax' },
    explanation: {
      bn: 'ইতালিয়ান সংবাদপত্রের শিরোনামে ক্রিয়া প্রায়ই উহ্য থাকে (ellissi del verbo), কোলন বা ড্যাশ দিয়ে উদ্ধৃতি ও প্রেক্ষাপট দেখানো হয় এবং সংক্ষিপ্ত বিশেষ্য পদগুচ্ছ ব্যবহৃত হয়: Caro affitti, varato il decreto; Clima, vertice a Roma: intesa sulle emissioni।',
      en: 'Italian headlines use nominal syntax with verb ellipsis, past participles without auxiliaries, and colons to separate topic from statement: Caro affitti, nuovo piano del Comune.',
    },
    table: [['Titolo nominale', 'Siccità al Nord, allarme degli agricoltori: «A rischio i raccolti»'], ['Frase completa', 'A causa della siccità al Nord, gli agricoltori lanciano l’allarme']],
  },
  {
    id: 'figure-retoriche-b2', level: 'B2', title: 'Figure retoriche nella lingua viva e letteraria',
    name: { bn: 'সাহিত্য ও প্রাত্যহিক ভাষায় অলংকার (রূপক, লিটোটেস, অক্সিমোরন)', en: 'Rhetorical figures in literary and everyday Italian' },
    explanation: {
      bn: '১) Metafora (রূপক: il tetto del debito, la fuga dei cervelli), ২) Litote (বিপরীত শব্দের নেতিবাচকতায় ইতিবাচক ভাব: non è affatto trascurabile = è molto importante), ৩) Ossimoro (বিরোধাভাস: un silenzio assordante), ৪) Iperbole (অতিশয়োক্তি: te l’ho detto mille volte)।',
      en: 'Key figures: metaphor (la fuga dei cervelli), litotes for diplomatic emphasis (un risultato non indifferente = notevole), oxymoron (un silenzio assordante), hyperbole.',
    },
    table: [['Litote (negazione del contrario)', 'Un contributo non trascurabile (= molto rilevante)'], ['Metafora lessicalizzata', 'la fuga dei cervelli | il congelamento dei fondi | una pioggia di critiche']],
  },
  {
    id: 'punteggiatura-stilistica', level: 'B2', title: 'Uso logico e stilistico della punteggiatura',
    name: { bn: 'যতিচিহ্নের যৌক্তিক ও শৈলীগত ব্যবহার (; : —)', en: 'Logical and stylistic punctuation' },
    explanation: {
      bn: '১) কোলন (:): ব্যাখ্যা, কারণ, দৃষ্টান্ত বা প্রত্যক্ষ ফলাফল প্রবর্তন করে। ২) সেমিকোলন (;): দুটি ঘনিষ্ঠ কিন্তু স্বয়ংসম্পূর্ণ যুক্তিপূর্ণ বাক্যকে যুক্ত করে (বিশেষত pertanto, tuttavia, inoltre-র আগে)। ৩) জোড়া কমা বা ড্যাশ: প্রাসঙ্গিক মন্তব্য (inciso) আলাদা করে।',
      en: 'The colon (:) introduces an explanation, cause, or consequence; the semicolon (;) links coordinate clauses before connectors like pertanto or tuttavia; paired commas/dashes isolate parenthetical clauses (incisi).',
    },
    table: [['Due punti (causa/spiegazione)', 'Non abbiamo accolto la domanda: mancava la firma digitale'], ['Punto e virgola', 'L’investimento iniziale è elevato; tuttavia l’ammortamento sarà rapido']],
  },
  {
    id: 'coesione-anaforica', level: 'B2', title: 'Coesione testuale e incapsulatori anaforici',
    name: { bn: 'পাঠ্যের সংহতি ও পুনরাবৃত্তি এড়ানোর কৌশল', en: 'Textual cohesion and anaphoric encapsulators' },
    explanation: {
      bn: 'একই শব্দ বারবার না লিখে পূর্ববর্তী পুরো একটি ঘটনা বা অনুচ্ছেদকে একটি বিমূর্ত বিশেষ্য পদগুচ্ছ (incapsulatore anaforico) দিয়ে সংক্ষেপে নির্দেশ করা হয়: tale provvedimento, siffatta ipotesi, questo fenomeno, la suddetta clausola, quest’ultimo।',
      en: 'Instead of repeating words, B2 prose summarises an entire preceding clause with an encapsulating noun phrase: tale fenomeno, questo provvedimento, siffatta tendenza, quest’ultimo.',
    },
    table: [['Incapsulatore anaforico', 'I prezzi sono saliti del 10%. Tale incremento ha ridotto i consumi'], ['questo / quello (ordine)', 'Lavoro autonomo e subordinato: questo garantisce tutele, quello flessibilità']],
  },
  {
    id: 'varieta-italiano', level: 'B2', title: "Le varietà dell'italiano contemporaneo (standard e neostandard)",
    name: { bn: 'সমসাময়িক ইতালিয়ানের রূপভেদ (প্রমিত বনাম নব্য-প্রমিত)', en: 'Varieties of contemporary Italian: standard vs neostandard' },
    explanation: {
      bn: 'প্রমিত লেখার সাথে শিক্ষিত কথ্য ইতালিয়ানের (italiano dell’uso medio / neostandard) পার্থক্য চেনা জরুরি: egli/ella → lui/lei; gli (বহুবচনে ও অনানুষ্ঠানিক কথোপকথনে) vs loro (আনুষ্ঠানিক লেখায়); il quale → che/cui; imperfetto ipotetico (Se venivi prima... কথ্যে vs Se fossi venuto prima... প্রমিতে)।',
      en: 'Distinguish between formal standard written Italian (Ho comunicato loro; Se fossi venuto) and educated neostandard speech (Gli ho detto; Se venivi prima).',
    },
    table: [['Italiano standard formale', 'Abbiamo comunicato loro la decisione | Se avessi saputo, sarei venuto'], ['Italiano neostandard (parlato)', 'Gli abbiamo comunicato la decisione | Se lo sapevo, venivo']],
  },
  {
    id: 'pragmatica-mitigazione', level: 'B2', title: 'Strategie di mitigazione, cortesia e diplomazia',
    name: { bn: 'বিতর্কে ভদ্রভাবে দ্বিমত ও কূটনৈতিক ভাষা ব্যবহার', en: 'Hedging, politeness, and diplomatic disagreement' },
    explanation: {
      bn: 'আলোচনা বা পেশাগত বিতর্কে সরাসরি রূঢ়ভাবে বিরোধিতা না করে কন্ডিশনাল, লিটোটেস ও সৌজন্যমূলক বাক্যাংশ ব্যবহার করা হয়: Pur comprendendo il Suo punto di vista, mi permetterei di osservare che...; Non crede che sarebbe opportuno...?; Temo che questa stima sia leggermente ottimistica।',
      en: 'Soften criticism and express diplomatic disagreement using conditional verbs, litotes, and concessive prefaces: Pur condividendo l’obiettivo, mi permetterei di far notare che…',
    },
    table: [['Critica diretta (scortese)', 'Hai torto, questi dati sono sbagliati'], ['Mitigazione diplomatica (B2)', 'Mi permetterei di osservare che questi dati andrebbero forse approfonditi']],
  },
  {
    id: 'argomentazione-saggio-b2', level: 'B2', title: 'Architettura del testo argomentativo',
    name: { bn: 'যুক্তিনির্ভর প্রবন্ধের কাঠামো (থিসিস, প্রতিযুক্তি ও খণ্ডন)', en: 'Architecture of the argumentative essay' },
    explanation: {
      bn: 'একটি পূর্ণাঙ্গ B2 যুক্তিনির্ভর প্রবন্ধের ৪টি ধাপ থাকে: ১) Premessa e Tesi (প্রেক্ষাপট ও মূল দাবি), ২) Argomenti a favore (তথ্য ও উদাহরণসহ সপক্ষে যুক্তি), ৩) Antitesi e Confutazione (প্রতিপক্ষের সম্ভাব্য যুক্তি উল্লেখ করে তা খণ্ডন: È pur vero che..., tuttavia...), ৪) Sintesi e Conclusione।',
      en: 'A B2 argumentative essay follows four stages: 1) Contextual premise and thesis; 2) Supporting arguments with evidence; 3) Counter-argument and refutation (Se da un lato si obietta che…, dall’altro va rilevato che…); 4) Synthesis.',
    },
    table: [['Introduzione tesi', 'Il dibattito attuale verte su… A nostro avviso occorre…'], ['Antitesi e confutazione', 'Chi osteggia tale misura sostiene che… Tuttavia i dati smentiscono…'], ['Conclusione', 'In definitiva, solo un approccio integrato consentirà di…']],
  },
];

import { GRAMMAR_DETAILS } from './grammarDetails';
import type { GrammarTopicRich } from './academyTypes';

export function grammarById(id: string): GrammarTopic | undefined {
  return GRAMMAR_TOPICS.find((g) => g.id === id);
}

export function richGrammarById(id: string): GrammarTopicRich | undefined {
  const base = grammarById(id);
  if (!base) return undefined;
  const extra = GRAMMAR_DETAILS[id];
  return {
    ...base,
    rule: extra?.rule ?? base.explanation,
    exceptions: extra?.exceptions,
    commonMistakes: extra?.commonMistakes ?? [],
    examples: extra?.examples ?? [],
    exercises: extra?.exercises ?? [],
    storyIds: extra?.storyIds ?? [],
    vocabKeys: extra?.vocabKeys ?? [],
  };
}

export function richGrammarForLevel(level: LevelId): GrammarTopicRich[] {
  return GRAMMAR_TOPICS.filter((g) => g.level === level).map((g) => richGrammarById(g.id)!);
}

