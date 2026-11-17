import type { GrammarMistake } from './academyTypes';
import type { QuizQuestion, Tr } from './types';

export interface GrammarDetailEntry {
  rule: Tr;
  exceptions?: Tr;
  commonMistakes: GrammarMistake[];
  examples: { it: string; tr: Tr }[];
  exercises: QuizQuestion[];
  storyIds: string[];
  vocabKeys: string[];
}

export const GRAMMAR_DETAILS_A2: Record<string, GrammarDetailEntry> = {
  'passato-prossimo': {
    rule: {
      bn: 'অতীতের নির্দিষ্ট সমাপ্ত কাজ বোঝাতে avere (বর্তমান রূপ: ho, hai, ha, abbiamo, avete, hanno) + পাস্ট পার্টিসিপল (-are→-ato, -ere→-uto, -ire→-ito) বসে।',
      en: 'Express completed past actions with present tense avere + past participle (-ato, -uto, -ito).',
    },
    exceptions: {
      bn: 'avere নিলে পার্টিসিপল সাধারণত -o-তে অপরিবর্তিত থাকে (Maria ha mangiato), যতক্ষণ না আগে lo/la/li/le সর্বনাম আসে।',
      en: 'With avere the participle normally stays -o unless preceded by lo/la/li/le.',
    },
    commonMistakes: [
      { wrong: 'Ieri ho mangiata una mela.', right: 'Ieri ho mangiato una mela.', note: { bn: 'avere-র সাথে কর্মের সাথে পার্টিসিপল বদলায় না।', en: 'With avere, do not agree the participle with the following object.' } },
    ],
    examples: [
      { it: 'Stamattina ho comprato i biglietti online.', tr: { bn: 'আজ সকালে আমি অনলাইনে টিকিট কিনেছি।', en: 'This morning I bought the tickets online.' } },
      { it: 'Abbiamo studiato insieme fino alle sei.', tr: { bn: 'আমরা ছয়টা পর্যন্ত একসাথে পড়েছি।', en: 'We studied together until six.' } },
    ],
    exercises: [
      { id: 'ex-a2-pp-1', prompt: { bn: 'সঠিক রূপ:', en: 'Pick the right form:' }, it: 'Loro hanno ___ il modulo.', options: ['compilato', 'compilata', 'compilati', 'compilato i'], answer: 0, explanation: { bn: 'avere সহ সাধারণ ক্ষেত্রে -ato থাকে।', en: 'Participle stays -ato with avere.' } },
    ],
    storyIds: ['st-a2-01', 'st-a2-05'],
    vocabKeys: ['w:A2:la prenotazione', 'w:A2:il modulo', 'w:A2:firmare'],
  },
  'passato-essere': {
    rule: {
      bn: 'গতি (andare, venire, partire, arrivare, tornare, uscire, entrare, salire, scendere), অবস্থা বা অবস্থান পরিবর্তন (nascere, morire, diventare, crescere, restare, rimanere) ও সব প্রতিফলক ক্রিয়া essere নেয়; পার্টিসিপল কর্তার সাথে লিঙ্গ-বচনে মেলে (-o/-a/-i/-e)।',
      en: 'Motion, change-of-state, and reflexive verbs take essere; the participle agrees with the subject (-o/-a/-i/-e).',
    },
    exceptions: {
      bn: 'camminare, viaggiare, ballare, nuotare, dormire গতি বোঝালেও পথ/গন্তব্য না থাকায় avere নেয়।',
      en: 'Activity verbs like camminare, viaggiare, nuotare take avere despite involving movement.',
    },
    commonMistakes: [
      { wrong: 'Elena è andato a casa.', right: 'Elena è andata a casa.', note: { bn: 'স্ত্রীলিঙ্গ কর্তায় -a হয়।', en: 'Feminine singular subject requires -a.' } },
    ],
    examples: [
      { it: 'Le mie colleghe sono partite per Torino.', tr: { bn: 'আমার নারী সহকর্মীরা তুরিনের উদ্দেশ্যে রওনা হয়েছেন।', en: 'My female colleagues left for Turin.' } },
    ],
    exercises: [
      { id: 'ex-a2-pe-1', prompt: { bn: 'সঠিক মিল:', en: 'Pick the right agreement:' }, it: 'Noi (ragazzi) siamo ___ tardi.', options: ['tornato', 'tornata', 'tornati', 'tornate'], answer: 2, explanation: { bn: 'পুং/মিশ্র বহুবচনে -i হয়।', en: 'Masculine/mixed plural takes -i.' } },
    ],
    storyIds: ['st-a2-02', 'st-a2-09'],
    vocabKeys: ['w:A2:la partenza', "w:A2:l'arrivo", 'w:A2:restare'],
  },
  riflessivi: {
    rule: {
      bn: 'প্রতিফলক ক্রিয়ায় (svegliarsi, alzarsi, lavarsi, vestirsi, riposarsi) ক্রিয়ার আগে mi/ti/si/ci/vi/si বসে এবং passato prossimo-তে সর্বদা essere সহায়ক ও লিঙ্গ-বচন মিল হয়।',
      en: 'Reflexives place mi/ti/si/ci/vi/si before the verb and always take essere + agreement in compound tenses.',
    },
    commonMistakes: [
      { wrong: 'Mi ho svegliato presto.', right: 'Mi sono svegliato presto.', note: { bn: 'প্রতিফলক ক্রিয়া সবসময় essere নেয়।', en: 'Reflexives always use essere, never avere.' } },
    ],
    examples: [
      { it: 'Sara si è preparata in dieci minuti.', tr: { bn: 'সারা দশ মিনিটে তৈরি হয়ে গেছে।', en: 'Sara got ready in ten minutes.' } },
    ],
    exercises: [
      { id: 'ex-a2-rif-1', prompt: { bn: 'অতীতে প্রতিফলক ক্রিয়া:', en: 'Reflexive in the past:' }, it: 'Ieri Giulia ___ divertita molto.', options: ['ha', 'si ha', 'si è', 'è si'], answer: 2, explanation: { bn: 'ব্যাকরণগত গঠন: এখানে «si + è + divertita» কাঠামোটি অনুসরণ করা হয়েছে।', en: 'si + è + feminine participle.' } },
    ],
    storyIds: ['st-a2-03'],
    vocabKeys: ['w:A2:svegliarsi', 'w:A2:prepararsi', 'w:A2:divertirsi'],
  },
  imperfetto: {
    rule: {
      bn: 'অতীতের অভ্যাস, বয়স, সময়, আবহাওয়া ও পটভূমি বর্ণনায় imperfetto (-vo, -vi, -va, -vamo, -vate, -vano) ব্যবহার হয়।',
      en: 'Use imperfetto (-vo, -vi, -va, -vamo, -vate, -vano) for past habits, age, weather, and ongoing scenes.',
    },
    exceptions: {
      bn: 'essere সম্পূর্ণ অনিয়মিত (ero, eri, era, eravamo, eravate, erano); fare→facevo, dire→dicevo, bere→bevevo।',
      en: 'essere is irregular (ero..erano); fare→facevo, dire→dicevo, bere→bevevo.',
    },
    commonMistakes: [
      { wrong: 'Da bambino sono andato spesso dai nonni.', right: 'Da bambino andavo spesso dai nonni.', note: { bn: 'অতীতের নিয়মিত অভ্যাসে imperfetto বসে।', en: 'Repeated past habits call for imperfetto.' } },
    ],
    examples: [
      { it: 'Ogni domenica facevamo una passeggiata al lago.', tr: { bn: 'প্রতি রবিবার আমরা হ্রদে হাঁটাহাঁটি করতাম।', en: 'Every Sunday we used to walk by the lake.' } },
    ],
    exercises: [
      { id: 'ex-a2-imp-1', prompt: { bn: 'অতীত বর্ণনা:', en: 'Past description:' }, it: 'Quando ___ piccolo, abitavo in campagna.', options: ['sono stato', 'ero', 'sarò', 'fui'], answer: 1, explanation: { bn: 'বয়স ও অবস্থা বোঝাতে ero।', en: 'Age/background uses ero.' } },
    ],
    storyIds: ['st-a2-04', 'st-a2-21'],
    vocabKeys: ['w:A2:la campagna', "w:A2:l'infanzia", 'w:A2:di solito'],
  },
  futuro: {
    rule: {
      bn: 'ভবিষ্যৎ পরিকল্পনা ও অনুমান বোঝাতে futuro semplice: -ò, -ai, -à, -emo, -ete, -anno (-are ও -ere ধাতুর শেষে -er-; -ire ধাতুতে -ir-)।',
      en: 'Future plans and probability use futuro semplice: -ò, -ai, -à, -emo, -ete, -anno.',
    },
    exceptions: {
      bn: 'স্বরবর্ণ লোপ: andare→andrò, avere→avrò, essere→sarò, fare→farò, venire→verrò, potere→potrò, dovere→dovrò, volere→vorrò।',
      en: 'Stem-contracting futures: andrò, avrò, sarò, farò, verrò, potrò, dovrò, vorrò.',
    },
    commonMistakes: [
      { wrong: 'Domani andarò a Roma.', right: 'Domani andrò a Roma.', note: { bn: 'andare-এর ভবিষ্যৎ রূপ andrò।', en: 'andare drops the vowel: andrò.' } },
    ],
    examples: [
      { it: 'L’anno prossimo cercheremo un appartamento più grande.', tr: { bn: 'আগামী বছর আমরা আরও বড় একটা ফ্ল্যাট খুঁজব।', en: 'Next year we will look for a bigger flat.' } },
    ],
    exercises: [
      { id: 'ex-a2-fut-1', prompt: { bn: 'ভবিষ্যৎ রূপ:', en: 'Pick the future form:' }, it: 'Che ore sono? Non lo so, ___ le cinque.', options: ['sono state', 'saranno', 'erano', 'siano'], answer: 1, explanation: { bn: 'সম্ভবত বোঝাতে ভবিষ্যৎ কাল saranno বসে।', en: 'Future of probability for plural hours: saranno.' } },
    ],
    storyIds: ['st-a2-06'],
    vocabKeys: ['w:A2:il futuro', 'w:A2:dopodomani', 'w:A2:prossimo'],
  },
  'pronomi-diretti': {
    rule: {
      bn: 'প্রত্যক্ষ কর্ম সর্বনাম (mi, ti, lo, la, ci, vi, li, le) সরাসরি ক্রিয়াপদের আগে বসে (মডাল ক্রিয়ার ইনফিনিটিভের শেষেও যুক্ত হতে পারে: voglio vederlo)।',
      en: 'Direct pronouns (mi, ti, lo, la, ci, vi, li, le) go before the verb, or attach to an infinitive (voglio vederlo).',
    },
    commonMistakes: [
      { wrong: 'Compro i fiori e porto li a casa.', right: 'Compro i fiori e li porto a casa.', note: { bn: 'সর্বনাম সাধারণ ক্রিয়ার আগে বসে।', en: 'Place li before finite verbs.' } },
    ],
    examples: [
      { it: 'La lettera? La spedisco domattina.', tr: { bn: 'চিঠিটা? কাল সকালেই পাঠিয়ে দেব।', en: 'The letter? I’ll mail it tomorrow morning.' } },
    ],
    exercises: [
      { id: 'ex-a2-pd-1', prompt: { bn: 'সঠিক সর্বনাম:', en: 'Right direct pronoun:' }, it: 'Dove sono le valigie? Non ___ vedo.', options: ['li', 'le', 'lo', 'la'], answer: 1, explanation: { bn: 'le valigie স্ত্রীলিঙ্গ বহুবচন → le।', en: 'le valigie is feminine plural → le.' } },
    ],
    storyIds: ['st-a2-07'],
    vocabKeys: ['w:A2:spedire', 'w:A2:la valigia'],
  },
  'pronomi-indiretti': {
    rule: {
      bn: '"কাকে/কার জন্য" বোঝাতে পরোক্ষ কর্ম সর্বনাম mi, ti, gli (পুং ও বহুবচন), le (স্ত্রী একবচন), Le (আনুষ্ঠানিক), ci, vi ক্রিয়ার আগে বসে।',
      en: 'Indirect object pronouns ("to/for someone") are mi, ti, gli (him/them), le (her), Le (formal), ci, vi.',
    },
    commonMistakes: [
      { wrong: 'Ho telefonato Maria ieri.', right: 'Le ho telefonato ieri.', note: { bn: 'telefonare a qualcuno → পরোক্ষ সর্বনাম le।', en: 'telefonare takes an indirect object (le).' } },
    ],
    examples: [
      { it: 'Mi potresti prestare la tua penna?', tr: { bn: 'আমাকে কি তোমার কলমটা একটু ধার দেবে?', en: 'Could you lend me your pen?' } },
    ],
    exercises: [
      { id: 'ex-a2-pi-1', prompt: { bn: 'তাকে (মেয়ে) ফোন করা:', en: 'Calling her:' }, it: 'È il compleanno di Anna: ___ mando un messaggio.', options: ['la', 'le', 'gli', 'lo'], answer: 1, explanation: { bn: 'সঠিক উত্তর ও ব্যাকরণ সূত্র: «a Anna = le» (to Anna = le)।', en: 'to Anna = le.' } },
    ],
    storyIds: ['st-a2-08'],
    vocabKeys: ['w:A2:prestare', 'w:A2:il regalo', 'w:A2:il messaggio'],
  },
  comparativi: {
    rule: {
      bn: 'দুটি বিশেষ্য/সর্বনামের মধ্যে তুলনায় più … di, meno … di; দুটি ক্রিয়া/বিশেষণের মধ্যে তুলনায় più … che; সমতায় come / quanto; শ্রেষ্ঠত্বে il/la più … di।',
      en: 'Use più/meno … di before nouns/pronouns, che between adjectives/verbs/prepositional phrases, come/quanto for equality, and il più … di for superlatives.',
    },
    commonMistakes: [
      { wrong: 'Roma è più grande che Firenze.', right: 'Roma è più grande di Firenze.', note: { bn: 'দুটি শহরের তুলনায় di বসে।', en: 'Comparing two nouns takes di.' } },
    ],
    examples: [
      { it: 'È più economico viaggiare in treno che in aereo.', tr: { bn: 'বিমানের চেয়ে ট্রেনে ভ্রমণ করা বেশি সাশ্রয়ী।', en: 'It is cheaper to travel by train than by plane.' } },
    ],
    exercises: [
      { id: 'ex-a2-cmp-1', prompt: { bn: 'তুলনা:', en: 'Comparison:' }, it: 'Il gatto è più tranquillo ___ cane.', options: ['che', 'del', 'come', 'di'], answer: 1, explanation: { bn: 'ব্যাকরণগত সংযোজন: di + il = del নিয়ম অনুসারে সঠিক রূপটি গঠিত হয়েছে।', en: 'di + il cane = del cane.' } },
    ],
    storyIds: ['st-a2-10'],
    vocabKeys: ['w:A2:tranquillo', 'w:A2:rumoroso', 'w:A2:comodo'],
  },
  gerundio: {
    rule: {
      bn: 'ঠিক এখনই বা অতীতের কোনো মুহূর্তে চলছে বোঝাতে stare (বর্তমান বা imperfetto) + gerundio (-ando/-endo) ব্যবহার হয়।',
      en: 'Express actions in progress right now or at a past moment with stare + -ando / -endo.',
    },
    exceptions: {
      bn: 'অনিয়মিত জেরান্ড: fare→facendo, dire→dicendo, bere→bevendo। প্রতিফলক সর্বনাম আগে বা শেষে যুক্ত হয় (mi sto preparando)।',
      en: 'Irregular gerunds: facendo, dicendo, bevendo.',
    },
    commonMistakes: [
      { wrong: 'Sono leggendo un libro.', right: 'Sto leggendo un libro.', note: { bn: 'ইতালিয়ানে essere নয়, stare বসে।', en: 'Use stare, never essere, for continuous tenses.' } },
    ],
    examples: [
      { it: 'Che cosa state preparando per cena?', tr: { bn: 'তোমরা রাতের খাবারের জন্য কী বানাচ্ছো?', en: 'What are you making for dinner?' } },
    ],
    exercises: [
      { id: 'ex-a2-ger-1', prompt: { bn: 'চলমান কাজ:', en: 'Action in progress:' }, it: 'I colleghi stanno ___ la riunione.', options: ['finendo', 'finito', 'finire', 'finiti'], answer: 0, explanation: { bn: 'ব্যাকরণগত গঠন: এখানে «stanno + gerundio (-endo)» কাঠামোটি অনুসরণ করা হয়েছে।', en: 'stanno + finendo.' } },
    ],
    storyIds: ['st-a2-11'],
    vocabKeys: ['w:A2:la riunione', 'w:A2:finire'],
  },
  'ci-ne': {
    rule: {
      bn: 'ci আগের উল্লিখিত স্থান ("সেখানে") বা "a + বিষয়" প্রতিস্থাপন করে; ne সংখ্যা/পরিমাণের অংশ ("তার থেকে") বা "di + বিষয়" ("এ সম্পর্কে") প্রতিস্থাপন করে।',
      en: 'ci replaces places ("there") or "a + phrase"; ne replaces partitive quantities ("of them") or "di + topic" ("about it").',
    },
    commonMistakes: [
      { wrong: 'Quanti fratelli hai? Li ho due.', right: 'Quanti fratelli hai? Ne ho due.', note: { bn: 'সংখ্যাসহ অংশ বোঝাতে ne ব্যবহৃত হয়।', en: 'Quantities with numbers take ne.' } },
    ],
    examples: [
      { it: 'Vai spesso al mare? Sì, ci vado ogni estate.', tr: { bn: 'তুমি কি প্রায়ই সমুদ্রে যাও? হ্যাঁ, প্রতি গ্রীষ্মে যাই।', en: 'Do you go to the seaside often? Yes, I go there every summer.' } },
    ],
    exercises: [
      { id: 'ex-a2-cn-1', prompt: { bn: 'পরিমাণ উত্তর:', en: 'Quantity reply:' }, it: 'Quante mele vuoi? ___ prendo quattro.', options: ['Ci', 'Ne', 'Le', 'Lo'], answer: 1, explanation: { bn: 'সংখ্যাসহ অংশে Ne।', en: 'Quantified nouns use Ne.' } },
    ],
    storyIds: ['st-a2-12'],
    vocabKeys: ['w:A2:il chilo', 'w:A2:la bottiglia'],
  },
  'preposizioni-articolate': {
    rule: {
      bn: 'a, da, di, in, su-এর পর নির্দিষ্ট আর্টিকেল (il, lo, l’, la, i, gli, le) এলে দুটো মিলে এক শব্দ হয়: al, dallo, dell’, nella, sui ইত্যাদি। con সাধারণত আলাদা থাকে (con il, con la)।',
      en: 'a, da, di, in, su contract with definite articles (al, nello, della, sugli, dai). con usually stays separate.',
    },
    commonMistakes: [
      { wrong: 'Vado a il mercato.', right: 'Vado al mercato.', note: { bn: 'a + il অবশ্যই al হবে।', en: 'Always contract a + il to al.' } },
    ],
    examples: [
      { it: 'L’appuntamento è negli uffici del secondo piano.', tr: { bn: 'অ্যাপয়েন্টমেন্টটা দোতলার অফিসগুলোতে।', en: 'The appointment is in the second-floor offices.' } },
    ],
    exercises: [
      { id: 'ex-a2-pa-1', prompt: { bn: 'প্রিপোজিশন ও আর্টিকেল যুক্ত করে সংযুক্ত রূপটি লিখুন: in + gli = ?', en: 'Contract in + gli:' }, it: 'Ho lasciato i soldi ___ stivali.', options: ['in gli', 'negli', 'nel', 'sull’'], answer: 1, explanation: { bn: 'ব্যাকরণ সূত্র: in + gli = negli — in + gli যুক্ত হয়ে সংক্ষিপ্ত রূপ হয় negli।', en: 'in + gli contracts to negli.' } },
    ],
    storyIds: ['st-a2-13'],
    vocabKeys: ['w:A2:il comune', 'w:A2:lo sportello'],
  },
  imperativo: {
    rule: {
      bn: 'tu আদেশে: -are→-a (ascolta!), -ere/-ire→-i (prendi!, apri!)। না-বাচক tu আদেশে non + infinito (non dimenticare!)। আনুষ্ঠানিক Lei আদেশে: -are→-i (compili!), -ere/-ire→-a (scenda!)।',
      en: 'Informal tu imperative uses -a (-are) and -i (-ere/-ire); negative tu uses non + infinitive; formal Lei reverses (-i / -a).',
    },
    exceptions: {
      bn: 'একাক্ষর tu আদেশ: va’/vai, da’/dai, fa’/fai, di’, sta’/stai। এদের সাথে সর্বনাম জুড়লে ব্যঞ্জন দ্বিগুণ হয়: dimmi, fammi, dammi।',
      en: 'Irregular tu forms: vai/va’, fai/fa’, di’, dai/da’, stai/sta’ (doubling pronouns: dimmi, fammi).',
    },
    commonMistakes: [
      { wrong: 'Non parla forte!', right: 'Non parlare forte!', note: { bn: 'tu না-বাচক আদেশে infinito বসে।', en: 'Negative tu imperative takes the infinitive.' } },
    ],
    examples: [
      { it: 'Firmi qui in basso, per favore.', tr: { bn: 'অনুগ্রহ করে নিচে এখানে স্বাক্ষর করুন।', en: 'Please sign at the bottom here.' } },
    ],
    exercises: [
      { id: 'ex-a2-im-1', prompt: { bn: 'না-বাচক tu আদেশ:', en: 'Negative tu command:' }, it: 'Marco, non ___ tardi stasera!', options: ['torni', 'torna', 'tornare', 'tornato'], answer: 2, explanation: { bn: 'ব্যাকরণ সূত্র: non + infinito = non tornare — Negative tu এর পরে ক্রিয়ার মূল রূপ (infinito) বসে।', en: 'Negative tu takes the infinitive.' } },
    ],
    storyIds: ['st-a2-14'],
    vocabKeys: ['w:A2:il semaforo', "w:A2:l'incrocio", 'w:A2:firmare'],
  },
  condizionale: {
    rule: {
      bn: 'ভদ্র অনুরোধ, ইচ্ছা ও পরামর্শে condizionale presente (-ei, -esti, -ebbe, -emmo, -este, -ebbero)। বহুল ব্যবহৃত: vorrei, potrei, dovrei, farei, sarei, avrei।',
      en: 'Use condizionale presente (-ei, -esti, -ebbe, -emmo, -este, -ebbero) for polite requests, wishes, and advice.',
    },
    commonMistakes: [
      { wrong: 'Io voglio un’informazione, signore.', right: 'Vorrei un’informazione, signore.', note: { bn: 'ভদ্র অনুরোধে voglio-র চেয়ে vorrei অনেক শালীন।', en: 'Vorrei is far more polite than voglio.' } },
    ],
    examples: [
      { it: 'Al posto tuo chiederei un chiarimento in ufficio.', tr: { bn: 'তোমার জায়গায় হলে আমি অফিসে ব্যাখ্যা চাইতাম।', en: 'In your place I would ask for clarification at the office.' } },
    ],
    exercises: [
      { id: 'ex-a2-con-1', prompt: { bn: 'ভদ্র পরামর্শ:', en: 'Polite advice:' }, it: 'Sei stanco: ___ riposarti un po’.', options: ['devi', 'dovresti', 'dovevi', 'dovere'], answer: 1, explanation: { bn: 'পরামর্শে dovresti (তুমি বিশ্রাম নেওয়া উচিত)।', en: 'dovresti = you should.' } },
    ],
    storyIds: ['st-a2-15'],
    vocabKeys: ['w:A2:riposarsi', 'w:A2:prenotare'],
  },
  possessivi: {
    rule: {
      bn: 'সম্বন্ধসূচক (mio, tuo, suo, nostro, vostro, loro) বিশেষ্যের লিঙ্গ-বচন মেনে চলে ও সাধারণত আর্টিকেল নেয়: il mio passaporto, le nostre valigie। একবচন ঘনিষ্ঠ আত্মীয়ের আগে আর্টিকেল বসে না (mio padre), তবে loro-র আগে সর্বদা আর্টিকেল থাকে (il loro padre)।',
      en: 'Possessives agree with the noun owned and take an article except before unmodified singular family nouns (mio padre, mia sorella — but always il loro padre).',
    },
    commonMistakes: [
      { wrong: 'Il mio fratello vive a Pisa.', right: 'Mio fratello vive a Pisa.', note: { bn: 'একবচন পরিবারের সদস্যের আগে আর্টিকেল বাদ যায়।', en: 'Omit the article before unmodified singular family nouns.' } },
    ],
    examples: [
      { it: 'I nostri colleghi arrivano domani.', tr: { bn: 'আমাদের সহকর্মীরা আগামীকাল আসছেন।', en: 'Our colleagues are arriving tomorrow.' } },
    ],
    exercises: [
      { id: 'ex-a2-pos-1', prompt: { bn: 'সঠিক সম্বন্ধসূচক:', en: 'Pick the possessive:' }, it: '___ genitori abitano vicino al parco.', options: ['Miei', 'I miei', 'Il mio', 'La mia'], answer: 1, explanation: { bn: 'বহুবচন পরিবারে আর্টিকেল অবশ্যই থাকে।', en: 'Plural family nouns require the article.' } },
    ],
    storyIds: ['st-a2-16'],
    vocabKeys: ['w:A2:il passaporto', 'w:A2:il collega'],
  },
  tempo: {
    rule: {
      bn: 'এখনো চলছে বোঝাতে presente + da (Vivo qui da un anno); অতীতের নির্দিষ্ট সময় আগে: … fa (un mese fa); ভবিষ্যতে কত সময় পর: fra / tra (fra due giorni); সম্পন্ন মোট সময়কাল: per (Ho lavorato per tre ore)।',
      en: 'Ongoing duration: present + da; ago: fa; in (future time): fra/tra; completed span: per.',
    },
    commonMistakes: [
      { wrong: 'Studio italiano per due anni (ongoing).', right: 'Studio italiano da due anni.', note: { bn: 'এখনো চলছে বোঝাতে da, per নয়।', en: 'Ongoing duration requires da, not per.' } },
    ],
    examples: [
      { it: 'Il contratto scade fra due settimane.', tr: { bn: 'চুক্তির মেয়াদ দুই সপ্তাহ পর শেষ হবে।', en: 'The contract expires in two weeks.' } },
    ],
    exercises: [
      { id: 'ex-a2-tmp-1', prompt: { bn: 'এখনো চলমান সময়কাল:', en: 'Ongoing duration:' }, it: 'Lavoriamo insieme ___ tre anni.', options: ['fa', 'fra', 'da', 'per'], answer: 2, explanation: { bn: 'এখনো একসাথে কাজ করছেন তাই da।', en: 'Ongoing action uses da.' } },
    ],
    storyIds: ['st-a2-17'],
    vocabKeys: ['w:A2:il contratto', 'w:A2:la scadenza', 'w:A2:fa'],
  },
  connettivi: {
    rule: {
      bn: 'কারণ: perché; ফল: quindi, allora; বৈপরীত্য: ma, però, invece, anche se; সময়: quando, mentre।',
      en: 'Link clauses clearly: perché (because), quindi (so), però/ma/invece (but/instead), anche se (even though), mentre (while).',
    },
    commonMistakes: [
      { wrong: 'Quando studia, ascoltavo musica.', right: 'Mentre studiavo, ascoltavo musica.', note: { bn: 'একই সময়ে দুটি চলমান কাজে mentre + imperfetto।', en: 'Simultaneous ongoing actions use mentre + imperfetto.' } },
    ],
    examples: [
      { it: 'Avevo fretta, però ho aspettato l’autobus.', tr: { bn: 'আমার তাড়া ছিল, তবুও বাসের জন্য অপেক্ষা করেছি।', en: 'I was in a hurry, yet I waited for the bus.' } },
    ],
    exercises: [
      { id: 'ex-a2-cnn-1', prompt: { bn: 'সঠিক সংযোজক:', en: 'Pick the connector:' }, it: 'Pioveva forte, ___ abbiamo preso il taxi.', options: ['perché', 'quindi', 'mentre', 'anche se'], answer: 1, explanation: { bn: 'ফল বোঝাতে quindi (তাই)।', en: 'Result takes quindi.' } },
    ],
    storyIds: ['st-a2-18'],
    vocabKeys: ['w:A2:quindi', 'w:A2:però', 'w:A2:mentre'],
  },
  'passato-irregolari': {
    rule: {
      bn: 'গুরুত্বপূর্ণ অনিয়মিত পার্টিসিপলগুলো রূপভেদ অনুসারে শিখুন: -tto (fatto, detto, letto, scritto), -so (preso, speso, deciso, perso, chiuso, risposto, messo), -sto (visto, chiesto, rimasto), -rto (aperto, offerto, morto)।',
      en: 'Group irregular past participles by pattern: -tto (fatto, detto, letto, scritto), -so (preso, chiuso, risposto, messo), -sto (visto, chiesto, rimasto), -rto (aperto, offerto).',
    },
    commonMistakes: [
      { wrong: 'Ho leggeto il giornale.', right: 'Ho letto il giornale.', note: { bn: 'ব্যাকরণ সূত্র: leggere → letto — ক্রিয়ার অতীত পার্টিসিপল হলো: leggere is letto।', en: 'The participle of leggere is letto.' } },
    ],
    examples: [
      { it: 'Abbiamo aperto un conto corrente alla posta.', tr: { bn: 'আমরা ডাকঘরে একটি ব্যাংক অ্যাকাউন্ট খুলেছি।', en: 'We opened an account at the post office.' } },
    ],
    exercises: [
      { id: 'ex-a2-ppi-1', prompt: { bn: 'scrivere-এর পাস্ট পার্টিসিপল:', en: 'Past participle of scrivere:' }, it: 'Hai ___ la mail al direttore?', options: ['scrivuto', 'scritto', 'scrivito', 'scrito'], answer: 1, explanation: { bn: 'সঠিক রূপান্তর: «scrivere» থেকে পরিবর্তিত হয়ে «scritto» ব্যবহৃত হয়।', en: 'scrivere → scritto.' } },
    ],
    storyIds: ['st-a2-19'],
    vocabKeys: ['w:A2:il giornale', 'w:A2:il conto corrente'],
  },
  'accordo-participio': {
    rule: {
      bn: 'প্রত্যক্ষ সর্বনাম lo, la, li, le বা l’ ক্রিয়ার আগে এলে avere-এর পাস্ট পার্টিসিপল সর্বনামের লিঙ্গ ও বচন অনুযায়ী বদলায়: L’ho vista (la casa), Li ho presi (i libri), Le ho comprate (le scarpe)।',
      en: 'When direct pronouns lo, la, li, le precede avere, the past participle agrees with the pronoun: L’ho comprata, Li ho trovati, Le ho spedite.',
    },
    exceptions: {
      bn: 'ne থাকলে বহুবচন সংখ্যার সাথেও সাধারণত পার্টিসিপল মেলে: Quante mele hai comprato? Ne ho comprate tre।',
      en: 'With ne + plural noun, agreement is standard: Ne ho comprate tre.',
    },
    commonMistakes: [
      { wrong: 'Le chiavi? Le ho trovato sul tavolo.', right: 'Le chiavi? Le ho trovate sul tavolo.', note: { bn: 'le স্ত্রীলিঙ্গ বহুবচন হওয়ায় trovate হবে।', en: 'Pronoun le triggers feminine plural -e agreement.' } },
    ],
    examples: [
      { it: 'La ricevuta? L’ho messa nel portafoglio.', tr: { bn: 'রসিদটা? মানিব্যাগে রেখেছি।', en: 'The receipt? I put it in my wallet.' } },
    ],
    exercises: [
      { id: 'ex-a2-acc-1', prompt: { bn: 'সঠিক মিল:', en: 'Correct agreement:' }, it: 'I documenti? Li ho ___ stamattina.', options: ['consegnato', 'consegnata', 'consegnati', 'consegnate'], answer: 2, explanation: { bn: 'i documenti (পুং বহুবচন) → Li ho consegnati।', en: 'Li (masc. pl.) takes consegnati.' } },
    ],
    storyIds: ['st-a2-20'],
    vocabKeys: ['w:A2:la ricevuta', 'w:A2:il portafoglio', 'w:A2:il documento'],
  },
  'imperfetto-vs-passato': {
    rule: {
      bn: 'একই বাক্যে চলমান কাজ বা পরিবেশ = imperfetto; হঠাৎ ঘটে যাওয়া বা সম্পন্ন ঘটনা = passato prossimo: Mentre dormivo (চলমান), è suonato il telefono (হঠাৎ ঘটনা)।',
      en: 'Combine ongoing scene (imperfetto) with interrupting or bounded events (passato prossimo): Mentre cucinavo, è arrivato Luca.',
    },
    commonMistakes: [
      { wrong: 'Ieri faceva freddo, quindi compravo una giacca.', right: 'Ieri faceva freddo, quindi ho comprato una giacca.', note: { bn: 'জ্যাকেট কেনা একটি নির্দিষ্ট সম্পন্ন কাজ, তাই ho comprato।', en: 'Buying the jacket is a single completed action → passato prossimo.' } },
    ],
    examples: [
      { it: 'Pioveva forte quando siamo scesi dal treno.', tr: { bn: 'আমরা যখন ট্রেন থেকে নামলাম তখন জোরে বৃষ্টি হচ্ছিল।', en: 'It was raining hard when we got off the train.' } },
    ],
    exercises: [
      { id: 'ex-a2-ivp-1', prompt: { bn: 'সঠিক কাল জোড়া:', en: 'Pick the right tense:' }, it: 'Mentre ___ in centro, ho incontrato un collega.', options: ['camminavo', 'ho camminato', 'camminerò', 'cammino'], answer: 0, explanation: { bn: 'mentre-এর পর চলমান অবস্থায় imperfetto।', en: 'Ongoing background action uses imperfetto.' } },
    ],
    storyIds: ['st-a2-21', 'st-a2-04'],
    vocabKeys: ['w:A2:piovere', 'w:A2:incontrare', 'w:A2:il temporale'],
  },
  'stare-per': {
    rule: {
      bn: 'stare + per + infinito = "ঠিক এখনই করতে যাচ্ছি / প্রায় হয়ে যাচ্ছিল": Il volo sta per decollare। অতীত রূপ: Stavo per chiamarti।',
      en: 'stare + per + infinitive means "to be about to": Il treno sta per partire, Stavo per uscire.',
    },
    commonMistakes: [
      { wrong: 'Sono per partire adesso.', right: 'Sto per partire adesso.', note: { bn: 'essere নয়, stare + per ব্যবহার করতে হবে।', en: 'Always use stare, not essere, with per + infinitive.' } },
    ],
    examples: [
      { it: 'La batteria sta per scaricarsi, metti il caricabatterie!', tr: { bn: 'ব্যাটারি প্রায় শেষ হতে যাচ্ছে, চার্জার লাগাও!', en: 'The battery is about to run out, plug in the charger!' } },
    ],
    exercises: [
      { id: 'ex-a2-stp-1', prompt: { bn: 'আসন্ন কাজ:', en: 'Imminent action:' }, it: 'Prendi l’ombrello, ___ per piovere!', options: ['è', 'fa', 'sta', 'va'], answer: 2, explanation: { bn: 'sta per piovere = বৃষ্টি শুরু হতে যাচ্ছে।', en: 'sta per piovere.' } },
    ],
    storyIds: ['st-a2-22'],
    vocabKeys: ['w:A2:il binario', 'w:A2:la batteria', 'w:A2:il caricabatterie'],
  },
  'pronomi-relativi-a2': {
    rule: {
      bn: 'che মানুষ ও বস্তু উভয়ের ক্ষেত্রে কর্তা বা কর্ম হিসেবে বসে (এবং রূপ বদলায় না)। স্থান বোঝাতে dove বা in cui; অন্য অব্যয়ের পরে সবসময় cui (con cui, di cui, per cui) বসে।',
      en: 'che is invariable for subjects/objects (people or things). Places use dove or in cui; other prepositions always take cui (con cui, di cui).',
    },
    commonMistakes: [
      { wrong: 'La città che abito è bella.', right: 'La città in cui / dove abito è bella.', note: { bn: 'abito in → অব্যয়সহ in cui বা dove লাগে।', en: 'abitare takes in, so use in cui or dove.' } },
    ],
    examples: [
      { it: 'La persona con cui parlo è il direttore.', tr: { bn: 'আমি যার সাথে কথা বলছি তিনি পরিচালক।', en: 'The person I am speaking with is the director.' } },
    ],
    exercises: [
      { id: 'ex-a2-pr-1', prompt: { bn: 'সঠিক সম্বন্ধবাচক:', en: 'Pick the relative pronoun:' }, it: 'Ecco l’ufficio ___ ho consegnato la delega.', options: ['che', 'in cui', 'chi', 'cui'], answer: 1, explanation: { bn: 'অফিসে (in ufficio) তাই in cui।', en: 'Location requires in cui (or dove).' } },
    ],
    storyIds: ['st-a2-23'],
    vocabKeys: ['w:A2:il direttore', 'w:A2:la delega'],
  },
  'indefiniti-a2': {
    rule: {
      bn: 'qualcuno (কেউ — সর্বদা একবচন), qualcosa (কিছু — + di + পুং একবচন বিশেষণ: qualcosa di buono), ogni / qualche + একবচন বিশেষ্য, alcuni/alcune + বহুবচন বিশেষ্য, tutto/a/i/e + আর্টিকেল + বিশেষ্য।',
      en: 'qualcuno (someone), qualcosa (+ di + masc. sg. adj.), ogni/qualche + singular noun, alcuni/e + plural noun, tutto/a/i/e + article + noun.',
    },
    commonMistakes: [
      { wrong: 'Ho comprato qualche libri.', right: 'Ho comprato qualche libro (oppure alcuni libri).', note: { bn: 'qualche-এর পর বিশেষ্য সবসময় একবচন।', en: 'qualche always takes a singular noun.' } },
    ],
    examples: [
      { it: 'Ogni settimana controllo l’estratto conto.', tr: { bn: 'প্রতি সপ্তাহে আমি অ্যাকাউন্ট পরীক্ষা করি।', en: 'Every week I check my account.' } },
    ],
    exercises: [
      { id: 'ex-a2-ind-1', prompt: { bn: 'সঠিক রূপ:', en: 'Pick the right indefinite:' }, it: 'Abbiamo aspettato ___ minuti in fila.', options: ['qualche', 'ogni', 'alcuni', 'tutto'], answer: 2, explanation: { bn: 'minuti বহুবচন → alcuni minuti।', en: 'Plural minuti pairs with alcuni.' } },
    ],
    storyIds: ['st-a2-24'],
    vocabKeys: ['w:A2:qualche volta', 'w:A2:la fila'],
  },
  'avverbi-a2': {
    rule: {
      bn: 'বিশেষণ -o হলে স্ত্রীলিঙ্গ -a + -mente (veloce→velocemente, lento→lentamente); -le/-re হলে e বাদ যায় (facile→facilmente, regolare→regolarmente)।',
      en: 'Form manner adverbs by adding -mente to feminine singular adjectives; drop final -e after -l or -r (facile→facilmente).',
    },
    commonMistakes: [
      { wrong: 'Ho trovato facilemente la strada.', right: 'Ho trovato facilmente la strada.', note: { bn: 'facile-এ -le থাকায় e বাদ যায়: facilmente।', en: 'Drop -e before -mente after -l/-r.' } },
    ],
    examples: [
      { it: 'Appena arrivo a casa, ti scrivo un messaggio.', tr: { bn: 'বাড়ি পৌঁছানো মাত্রই তোমাকে মেসেজ লিখব।', en: 'As soon as I get home, I’ll text you.' } },
    ],
    exercises: [
      { id: 'ex-a2-av-1', prompt: { bn: 'ক্রিয়াবিশেষণ:', en: 'Form the adverb:' }, it: 'Il treno viaggia ___.', options: ['veloce', 'velocemente', 'veloci', 'velocamente'], answer: 1, explanation: { bn: 'ব্যাকরণগত সংযোজন: veloce + mente = velocemente নিয়ম অনুসারে সঠিক রূপটি গঠিত হয়েছে।', en: 'veloce → velocemente.' } },
    ],
    storyIds: ['st-a2-25'],
    vocabKeys: ['w:A2:velocemente', 'w:A2:lentamente', 'w:A2:appena'],
  },
  'preposizioni-verbi': {
    rule: {
      bn: 'ক্রিয়া + a + ইনফিনিটিভ: iniziare a, cominciare a, provare a, riuscire a, imparare a, continuare a। ক্রিয়া + di + ইনফিনিটিভ: decidere di, cercare di, finire di, dimenticare di, sperare di, smettere di।',
      en: 'Verb + a + inf.: iniziare a, provare a, riuscire a, imparare a, continuare a. Verb + di + inf.: decidere di, cercare di, finire di, sperare di, dimenticare di.',
    },
    commonMistakes: [
      { wrong: 'Ho deciso a cambiare lavoro.', right: 'Ho deciso di cambiare lavoro.', note: { bn: 'decidere-এর পর di বসে, a নয়।', en: 'decidere takes di, not a.' } },
    ],
    examples: [
      { it: 'Sono riuscito a prendere l’ultimo autobus.', tr: { bn: 'আমি শেষ বাসটা ধরতে পেরেছি।', en: 'I managed to catch the last bus.' } },
    ],
    exercises: [
      { id: 'ex-a2-pv-1', prompt: { bn: 'সঠিক অব্যয়:', en: 'Right preposition:' }, it: 'Non dimenticare ___ portare la tessera sanitaria!', options: ['a', 'di', 'per', 'in'], answer: 1, explanation: { bn: 'ব্যাকরণগত গঠন: এখানে «dimenticare di + infinito» কাঠামোটি অনুসরণ করা হয়েছে।', en: 'dimenticare takes di.' } },
    ],
    storyIds: ['st-a2-26'],
    vocabKeys: ['w:A2:decidere', 'w:A2:riuscire a', 'w:A2:dimenticare'],
  },
  'verbi-pronominali-a2': {
    rule: {
      bn: 'farcela (সাফল্যের সাথে সামলানো: ce la faccio, ce l’ho fatta), andarsene (কোনো স্থান ছেড়ে চলে যাওয়া: me ne vado, se n’è andato), volerci (প্রয়োজনীয় সময়/বস্তু: ci vuole, ci vogliono)।',
      en: 'Idiomatic clitic verbs: farcela (to manage/make it), andarsene (to leave/head off), volerci (to take time/effort).',
    },
    commonMistakes: [
      { wrong: 'Ci vuole venti minuti.', right: 'Ci vogliono venti minuti.', note: { bn: 'venti minuti বহুবচন হওয়ায় ci vogliono হবে।', en: 'Plural time spans take ci vogliono.' } },
    ],
    examples: [
      { it: 'Dopo il colloquio me ne sono andato subito.', tr: { bn: 'সাক্ষাৎকারের পর আমি সাথে সাথেই চলে এসেছি।', en: 'After the interview I left straight away.' } },
    ],
    exercises: [
      { id: 'ex-a2-vp-1', prompt: { bn: 'সঠিক রূপ:', en: 'Pick the right form:' }, it: '___ dieci minuti a piedi fino alla metro.', options: ['Ci vuole', 'Ci vogliono', 'Se ne vuole', 'Ce la vuole'], answer: 1, explanation: { bn: 'dieci minuti বহুবচন → Ci vogliono।', en: 'Plural noun takes Ci vogliono.' } },
    ],
    storyIds: ['st-a2-27'],
    vocabKeys: ['w:A2:il colloquio', "w:A2:l'appuntamento"],
  },
  'numerali-ordinali': {
    rule: {
      bn: '১ম–১০ম: primo, secondo, terzo, quarto, quinto, sesto, settimo, ottavo, nono, decimo। ১১তম থেকে সংখ্যা (শেষ অক্ষর বাদে) + -esimo (undicesimo, dodicesimo, ventesimo)। সবসময় বিশেষ্যের লিঙ্গ-বচন মেনে চলে।',
      en: '1st–10th are primo..decimo; 11th+ add -esimo (dropping final vowel except -tre). They agree in gender and number like -o adjectives.',
    },
    commonMistakes: [
      { wrong: 'Abito al tre piano.', right: 'Abito al terzo piano.', note: { bn: 'তলা বা ক্রমে ক্রমবাচক সংখ্যা terzo লাগে।', en: 'Floors use ordinal numbers (terzo).' } },
    ],
    examples: [
      { it: 'La biglietteria è al secondo piano.', tr: { bn: 'টিকিট কাউন্টার দোতলায়।', en: 'The ticket desk is on the second floor.' } },
    ],
    exercises: [
      { id: 'ex-a2-ord-1', prompt: { bn: 'ক্রমবাচক সংখ্যা:', en: 'Ordinal number:' }, it: 'Questa è la ___ volta che visito Venezia.', options: ['due', 'secondo', 'seconda', 'duesima'], answer: 2, explanation: { bn: 'la volta স্ত্রীলিঙ্গ একবচন → seconda।', en: 'la volta is feminine singular → seconda.' } },
    ],
    storyIds: ['st-a2-28'],
    vocabKeys: ['w:A2:il piano', 'w:A2:il secolo'],
  },
  'comparativi-irregolari': {
    rule: {
      bn: 'বিশেষণ: buono→migliore (আরও ভালো) / ottimo (সর্বোত্তম); cattivo→peggiore / pessimo; grande→maggiore; piccolo→minore। ক্রিয়াবিশেষণ: bene→meglio; male→peggio।',
      en: 'Adjectives: buono→migliore/ottimo, cattivo→peggiore/pessimo. Adverbs: bene→meglio, male→peggio.',
    },
    commonMistakes: [
      { wrong: 'Oggi lavoro migliore.', right: 'Questo è un lavoro migliore / Oggi lavoro meglio.', note: { bn: 'বিশেষ্যের সাথে migliore, ক্রিয়ার সাথে meglio।', en: 'Use migliore with nouns and meglio with verbs.' } },
    ],
    examples: [
      { it: 'Senza traffico arriviamo molto meglio.', tr: { bn: 'যানজট না থাকলে আমরা অনেক সহজে পৌঁছাতে পারি।', en: 'Without traffic we get there much better.' } },
    ],
    exercises: [
      { id: 'ex-a2-cir-1', prompt: { bn: 'বিশেষণ বনাম ক্রিয়াবিশেষণ:', en: 'Adjective vs adverb:' }, it: 'Parlo italiano ___ dell’anno scorso.', options: ['migliore', 'meglio', 'ottimo', 'più bene'], answer: 1, explanation: { bn: 'parlo ক্রিয়ার সাথে meglio বসে।', en: 'Modifying the verb parlo takes meglio.' } },
    ],
    storyIds: ['st-a2-29'],
    vocabKeys: ['w:A2:bene', 'w:A2:male', 'w:A2:il servizio'.replace('il servizio', 'il traffico')],
  },
  'si-impersonale-a2': {
    rule: {
      bn: 'সাধারণ নিয়ম, রেসিপি বা দিকনির্দেশনায় si + ৩য় পুরুষ একবচন ক্রিয়া বসে (Si dice, Come si arriva…?)। বহুবচন কর্ম থাকলে ক্রিয়া বহুবচন হয় (Si vendono biglietti)।',
      en: 'General truths and public rules use si + 3rd-person singular (Si dice, Si può); plural direct objects take a plural verb (Si parlano due lingue).',
    },
    commonMistakes: [
      { wrong: 'Come dice questo in italiano?', right: 'Come si dice questo in italiano?', note: { bn: 'সাধারণ অর্থে si অবশ্যই লাগবে।', en: 'Do not omit si in general statements.' } },
    ],
    examples: [
      { it: 'Qui si accettano pagamenti con il bancomat.', tr: { bn: 'এখানে ডেবিট কার্ডে পেমেন্ট নেওয়া হয়।', en: 'Debit card payments are accepted here.' } },
    ],
    exercises: [
      { id: 'ex-a2-si-1', prompt: { bn: 'বহুবচন কর্মসহ si:', en: 'Impersonal si with plural object:' }, it: 'In quel negozio si ___ scarpe sportive.', options: ['vende', 'vendono', 'vendiamo', 'vendi'], answer: 1, explanation: { bn: 'scarpe বহুবচন → vendono।', en: 'Plural scarpe requires vendono.' } },
    ],
    storyIds: ['st-a2-30'],
    vocabKeys: ['w:A2:il bancomat', 'w:A2:compilare'],
  },
  'modali-passato': {
    rule: {
      bn: 'অতীতে মডাল ক্রিয়া (dovere, potere, volere): সাধারণত পরের মূল ক্রিয়ার সহায়ক অনুযায়ী ho/sono নেবে (ho dovuto studiare, sono dovuto partire), তবে আনুষ্ঠানিক/কথ্য ক্ষেত্রে ho dovuto partire-ও শোনা যায়।',
      en: 'Past modals follow the auxiliary of the infinitive (ho dovuto lavorare, sono dovuto andare). Agreement applies with essere.',
    },
    commonMistakes: [
      { wrong: 'Ieri devo lavorare fino a tardi.', right: 'Ieri ho dovuto lavorare fino a tardi.', note: { bn: 'গতকাল (ieri) হলে অতীত রূপ ho dovuto লাগে।', en: 'Past time markers like ieri need the past tense.' } },
    ],
    examples: [
      { it: 'Alla fine non siamo potuti entrare al museo.', tr: { bn: 'শেষ পর্যন্ত আমরা জাদুঘরে ঢুকতে পারিনি।', en: 'In the end we could not enter the museum.' } },
    ],
    exercises: [
      { id: 'ex-a2-mp-1', prompt: { bn: 'অতীতে পারা/না পারা:', en: 'Past modal:' }, it: 'Scusa, ieri non ___ potuto chiamarti.', options: ['sono', 'ho', 'faccio', 'stavo'], answer: 1, explanation: { bn: 'chiamare avere নেয় → ho potuto।', en: 'chiamare takes avere → ho potuto.' } },
    ],
    storyIds: ['st-a2-31'],
    vocabKeys: ['w:A2:il rimborso', 'w:A2:il reclamo'],
  },
  'volere-piacere-cortesia': {
    rule: {
      bn: 'ভদ্র অনুরোধ ও প্রস্তাবের প্যাটার্ন: Potrei + inf.?, Le dispiace se + presente?, Mi farebbe un favore?, Ti va di + inf.? (অনানুষ্ঠানিক) / Le va di + inf.? (আনুষ্ঠানিক)।',
      en: 'Polite conversational frames: Potrei…?, Le dispiace se…?, Mi farebbe un favore?, Ti/Le va di + infinitive?',
    },
    commonMistakes: [
      { wrong: 'Ti vai di prendere un tè?', right: 'Ti va di prendere un tè?', note: { bn: 'andare সবসময় ৩য় পুরুষ একবচন va থাকে ("তোমার কাছে কি যায়/ইচ্ছে করে")।', en: 'andare stays 3rd-person singular va (ti/Le va).' } },
    ],
    examples: [
      { it: 'Scusi, Le dispiace se chiudo la porta?', tr: { bn: 'মাফ করবেন, আমি দরজাটা বন্ধ করলে কি আপনার আপত্তি আছে?', en: 'Excuse me, do you mind if I close the door?' } },
    ],
    exercises: [
      { id: 'ex-a2-cor-1', prompt: { bn: 'ভদ্র আমন্ত্রণ:', en: 'Polite invitation:' }, it: 'Stasera ___ va di mangiare insieme?', options: ['ti', 'tu', 'sei', 'fai'], answer: 0, explanation: { bn: 'ti va di…? = তোমার কি ইচ্ছে করছে?', en: 'ti va di…? is the indirect-pronoun frame.' } },
    ],
    storyIds: ['st-a2-32'],
    vocabKeys: ['w:A2:gentile', 'w:A2:invitare'],
  },
  'verbi-servizio-a2': {
    rule: {
      bn: 'sapere = কোনো তথ্য, খবর বা দক্ষতা জানা (+ যে/প্রশ্নবোধক শব্দ/ইনফিনিটিভ: So parlare, Sai dov’è?); conoscere = মানুষ, শহর বা কোনো বিষয়ের সাথে পরিচিত থাকা (+ বিশেষ্য: Conosco Roma, Conosci Sara?)।',
      en: 'sapere = knowing facts/skills (+ clause or infinitive); conoscere = being acquainted with people, places, or works (+ noun).',
    },
    commonMistakes: [
      { wrong: 'So bene Milano.', right: 'Conosco bene Milano.', note: { bn: 'শহর বা মানুষ চেনার ক্ষেত্রে conoscere বসে।', en: 'Knowing a place or person uses conoscere.' } },
    ],
    examples: [
      { it: 'Non so se l’ufficio è aperto di sabato.', tr: { bn: 'শনিবারে অফিস খোলা থাকে কিনা আমি জানি না।', en: 'I don’t know whether the office is open on Saturday.' } },
    ],
    exercises: [
      { id: 'ex-a2-vs-1', prompt: { bn: 'sapere না conoscere:', en: 'sapere or conoscere:' }, it: '___ un buon ristorante vicino al porto?', options: ['Sai', 'Conosci', 'Sa', 'Sapete'], answer: 1, explanation: { bn: 'একটি জায়গা চেনা বোঝাতে Conosci।', en: 'Being familiar with a place takes conoscere.' } },
    ],
    storyIds: ['st-a2-08', 'st-a2-30'],
    vocabKeys: ['w:A2:conoscere', 'w:A2:il porto'],
  },
  'doppia-negazione': {
    rule: {
      bn: 'না-বাচক বাক্যে ক্রিয়ার আগে non বসিয়ে পরে niente/nulla, nessuno, mai, più বা da nessuna parte ব্যবহার করতে হয়। তবে nessuno বাক্যের শুরুতে কর্তা হলে আর non লাগে না (Nessuno ha chiamato)।',
      en: 'Place non before the verb and niente, nessuno, mai, più, or da nessuna parte after it. If nessuno is the pre-verbal subject, omit non.',
    },
    commonMistakes: [
      { wrong: 'Ho capito niente.', right: 'Non ho capito niente.', note: { bn: 'ক্রিয়ার আগে non ছাড়া niente একা বসতে পারে না।', en: 'niente after the verb requires non before the verb.' } },
    ],
    examples: [
      { it: 'Non ho ricevuto né la mail né il pacco.', tr: { bn: 'আমি ইমেইল বা পার্সেল কোনোটিই পাইনি।', en: 'I received neither the email nor the parcel.' } },
    ],
    exercises: [
      { id: 'ex-a2-dn-1', prompt: { bn: 'সঠিক না-বাচক বাক্য:', en: 'Correct negative sentence:' }, it: 'Oggi in ufficio ___ c’è ___.', options: ['non / nessuno', 'non / niente', 'mai / nessuno', 'non / qualcuno'], answer: 0, explanation: { bn: 'মানুষ বোঝাতে non … nessuno।', en: 'Nobody = non … nessuno.' } },
    ],
    storyIds: ['st-a2-24', 'st-a2-31'],
    vocabKeys: ['w:A2:il pacco', 'w:A2:ricevere'],
  },
};
