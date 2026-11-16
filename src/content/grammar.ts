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
];

export function grammarById(id: string): GrammarTopic | undefined {
  return GRAMMAR_TOPICS.find((g) => g.id === id);
}
