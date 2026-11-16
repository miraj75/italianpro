import type { GrammarDetailEntry } from './grammarDetailsA2';

export const GRAMMAR_DETAILS_B1: Record<string, GrammarDetailEntry> = {
  congiuntivo: {
    rule: {
      bn: 'মতামত (penso, credo, ritengo), আশা/ইচ্ছা (spero, voglio), সন্দেহ (dubito) ও আবেগের পরে এবং নৈর্ব্যক্তিক è importante/necessario che-এর পরে বর্তমানের সমসাময়িক কাজে congiuntivo presente বসে।',
      en: 'Use the present subjunctive after verbs of opinion, hope, doubt, emotion, and impersonal expressions (è importante che) when the subjects of the two clauses differ.',
    },
    exceptions: {
      bn: 'উভয় অংশের কর্তা একই হলে che + congiuntivo না বসিয়ে di + infinito বসে (Penso di partire domani, "Penso che io parta" নয়)।',
      en: 'When the subject of both clauses is the same, use di + infinitive instead of che + subjunctive (Spero di arrivare in orario).',
    },
    commonMistakes: [
      { wrong: 'Penso che Marco ha ragione.', right: 'Penso che Marco abbia ragione.', note: { bn: 'penso che-এর পর প্রমিত ইতালিয়ানে congiuntivo বসে।', en: 'penso che triggers the subjunctive abbia.' } },
    ],
    examples: [
      { it: 'Credo che questa proposta sia molto efficace.', tr: { bn: 'আমার মনে হয় এই প্রস্তাবটি খুবই কার্যকর।', en: 'I believe this proposal is very effective.' } },
      { it: 'È fondamentale che tutti i cittadini rispettino la legge.', tr: { bn: 'সব নাগরিকের আইন মেনে চলা অপরিহার্য।', en: 'It is fundamental that all citizens respect the law.' } },
    ],
    exercises: [
      { id: 'ex-b1-cong-1', prompt: { bn: 'সঠিক রূপ বেছে নিন:', en: 'Pick the right form:' }, it: 'Spero che il colloquio ___ bene.', options: ['va', 'vada', 'andrà', 'andava'], answer: 1, explanation: { bn: 'spero che + andare-এর congiuntivo presente (vada)।', en: 'spero che takes present subjunctive vada.' } },
    ],
    storyIds: ['st-b1-01'],
    vocabKeys: ['w:B1:la proposta', 'w:B1:efficace', 'w:B1:il cittadino'],
  },
  'periodo-ipotetico': {
    rule: {
      bn: 'শর্তবাক্য তিন প্রকার: ১) বাস্তব (Se piove, resto a casa), ২) সম্ভাব্য (Se avessi tempo, viaggerei), ৩) অতীতের অবাস্তব (Se avessi saputo, sarei venuto)। se-এর পর শর্তাংশে কখনো condizionale বসে না।',
      en: 'Three conditional types: 1st real (se + present/future), 2nd hypothetical (se + imperfect subjunctive → present conditional), 3rd impossible past (se + pluperfect subjunctive → past conditional).',
    },
    commonMistakes: [
      { wrong: 'Se avrei tempo, verrei.', right: 'Se avessi tempo, verrei.', note: { bn: 'se-এর পর শর্তে avessi (congiuntivo imperfetto) বসে, avrei নয়।', en: 'Never use the conditional directly after conditional se.' } },
    ],
    examples: [
      { it: 'Se lavorassi da casa, risparmierei molto tempo.', tr: { bn: 'বাসা থেকে কাজ করলে আমি অনেক সময় বাঁচাতাম।', en: 'If I worked from home, I would save a lot of time.' } },
    ],
    exercises: [
      { id: 'ex-b1-pi-1', prompt: { bn: 'শূন্যস্থান পূরণ করুন:', en: 'Complete:' }, it: 'Se ___ in te, accetterei subito.', options: ['sarei', 'fossi', 'ero', 'sia'], answer: 1, explanation: { bn: 'Se fossi in te (আমি তোমার জায়গায় হলে)।', en: 'Hypothetical se takes imperfect subjunctive fossi.' } },
    ],
    storyIds: ['st-b1-02'],
    vocabKeys: ['w:B1:lo smart working', 'w:B1:il risparmio', 'w:B1:accettare'],
  },
  'condizionale-passato': {
    rule: {
      bn: 'অতীতে যা হতে পারত কিন্তু হয়নি (Avrei voluto partecipare) এবং অতীতের সাপেক্ষে ভবিষ্যৎ বা "future in the past" (Ha detto che sarebbe arrivato alle nove) বোঝাতে avere/essere-এর বর্তমান কন্ডিশনাল + পাস্ট পার্টিসিপল বসে।',
      en: 'Formed with present conditional of avere/essere + past participle. Expresses unfulfilled past wishes and future-in-the-past in reported speech.',
    },
    commonMistakes: [
      { wrong: 'Ha detto che verrebbe domani.', right: 'Ha detto che sarebbe venuto il giorno dopo.', note: { bn: 'ইতালিয়ানে অতীতের সাপেক্ষে ভবিষ্যৎ বোঝাতে condizionale passato বসে।', en: 'Italian uses the past conditional for future-in-the-past.' } },
    ],
    examples: [
      { it: 'Imran sapeva che il treno avrebbe avuto ritardo.', tr: { bn: 'ইমরান জানত যে ট্রেনটি দেরি করবে।', en: 'Imran knew that the train would be delayed.' } },
    ],
    exercises: [
      { id: 'ex-b1-cp-1', prompt: { bn: 'অতীতের সাপেক্ষে ভবিষ্যৎ:', en: 'Future in the past:' }, it: 'Giulia mi ha promesso che mi ___ appena arrivata.', options: ['chiamerebbe', 'avrebbe chiamato', 'chiamerà', 'chiamava'], answer: 1, explanation: { bn: 'অতীত প্রতিশ্রুতির পরে avrebbe chiamato বসে।', en: 'Past promise uses past conditional avrebbe chiamato.' } },
    ],
    storyIds: ['st-b1-03'],
    vocabKeys: ['w:B1:partecipare', 'w:B1:il rimpianto', 'w:B1:la promessa'].filter((k) => k !== 'w:B1:la promessa'),
  },
  trapassato: {
    rule: {
      bn: 'অতীতের দুটি ঘটনার মধ্যে যেটি আগে ঘটেছিল সেটি বোঝাতে imperfetto (avevo / ero) + পাস্ট পার্টিসিপল বসে: Quando sono arrivato in stazione, il treno era già partito।',
      en: 'Expresses an action completed before another past event: imperfect of avere/essere (avevo/ero) + past participle.',
    },
    commonMistakes: [
      { wrong: 'Era la prima volta che ho visto Venezia.', right: 'Era la prima volta che vedevo / avevo visto Venezia.', note: { bn: 'অতীতের অভিজ্ঞতার পূর্বাপর সম্পর্কে trapassato বা imperfetto বসে।', en: 'Prior past experience uses trapassato prossimo.' } },
    ],
    examples: [
      { it: 'Ho superato l’esame perché avevo studiato con grande impegno.', tr: { bn: 'আমি পরীক্ষায় পাস করেছি কারণ খুব নিষ্ঠার সাথে পড়েছিলাম।', en: 'I passed the exam because I had studied with great commitment.' } },
    ],
    exercises: [
      { id: 'ex-b1-trap-1', prompt: { bn: 'পূর্ববর্তী অতীত কাজ:', en: 'Prior past action:' }, it: 'Non ho comprato il romanzo perché lo ___ già letto.', options: ['ho', 'avevo', 'avrò', 'ebbi'], answer: 1, explanation: { bn: 'কেনার আগেই পড়া হয়ে গিয়েছিল → avevo già letto।', en: 'Read before buying → avevo già letto.' } },
    ],
    storyIds: ['st-b1-04'],
    vocabKeys: ["w:B1:l'impegno", 'w:B1:il romanzo'],
  },
  relativi: {
    rule: {
      bn: 'কর্তা বা সরাসরি কর্মে che; যেকোনো প্রিপোজিশনের (di, a, da, in, con, su, per, tra) পরে cui বসে: il progetto di cui parliamo, la ditta per cui lavoro।',
      en: 'Use che for subject/direct object and cui after prepositions (di cui, a cui, in cui, con cui, per cui).',
    },
    commonMistakes: [
      { wrong: 'La persona di che ti ho parlato.', right: 'La persona di cui ti ho parlato.', note: { bn: 'di-এর পরে che বসে না, cui বসে।', en: 'After di use cui, never che.' } },
    ],
    examples: [
      { it: 'Il quartiere in cui ci siamo trasferiti è molto tranquillo.', tr: { bn: 'আমরা যে এলাকায় বাসা বদলেছি সেটি খুব শান্ত।', en: 'The neighbourhood we moved to is very quiet.' } },
    ],
    exercises: [
      { id: 'ex-b1-rel-1', prompt: { bn: 'শূন্যস্থান পূরণ করুন:', en: 'Fill in the blank:' }, it: 'L’argomento ___ cui discutiamo è attuale.', options: ['che', 'di', 'chi', 'quale'], answer: 1, explanation: { bn: 'সঠিক রূপান্তর: «discutere di un argomento» থেকে পরিবর্তিত হয়ে «di cui» ব্যবহৃত হয়।', en: 'discutere di → di cui.' } },
    ],
    storyIds: ['st-b1-05'],
    vocabKeys: ['w:B1:il quartiere', 'w:B1:trasferirsi', "w:B1:l'argomento"],
  },
  'pronomi-combinati': {
    rule: {
      bn: 'পরোক্ষ সর্বনাম (mi, ti, ci, vi) যখন প্রত্যক্ষ সর্বনাম (lo, la, li, le, ne)-এর আগে বসে তখন -i বদলে -e হয়: me lo, te la, ce li, ve ne। আর gli এবং le উভয়ই এক শব্দে glielo, gliela, glieli, gliele, gliene হয়।',
      en: 'mi/ti/ci/vi change to me/te/ce/ve before lo/la/li/le/ne; both gli and le combine into one word: glielo, gliela, glieli, gliele, gliene.',
    },
    commonMistakes: [
      { wrong: 'Mi lo puoi spiegare?', right: 'Me lo puoi spiegare? / Puoi spiegarmelo?', note: { bn: 'ব্যাকরণগত সংযোজন: mi + lo = me lo নিয়ম অনুসারে সঠিক রূপটি গঠিত হয়েছে।', en: 'mi becomes me before lo.' } },
    ],
    examples: [
      { it: 'Se ti serve il file, te lo invio subito per mail.', tr: { bn: 'তোমার ফাইলটি লাগলে আমি এখনই ইমেইলে পাঠিয়ে দিচ্ছি।', en: 'If you need the file, I will send it to you right away by email.' } },
    ],
    exercises: [
      { id: 'ex-b1-pc-1', prompt: { bn: 'যুক্ত সর্বনাম বেছে নিন:', en: 'Choose the combined pronoun:' }, it: 'Quando vedi Sara, ___ dici tu?', options: ['le lo', 'glielo', 'gli lo', 'la gli'], answer: 1, explanation: { bn: 'le + lo = glielo (এক শব্দে)।', en: 'le + lo merges into glielo.' } },
    ],
    storyIds: ['st-b1-06'],
    vocabKeys: ['w:B1:il file', 'w:B1:allegare'],
  },
  'si-impersonale': {
    rule: {
      bn: 'সাধারণ মানুষ বা সমাজের রীতি বোঝাতে si + ৩য় পুরুষ: কর্ম না থাকলে একবচন (Si vive bene), আর বহুবচন বিশেষ্য কর্ম থাকলে বহুবচন (Si affrontano nuove sfide)।',
      en: 'Use si + 3rd singular for general statements, and 3rd plural when a plural noun acts as grammatical subject.',
    },
    commonMistakes: [
      { wrong: 'Quando si è stanco, non si concentra.', right: 'Quando si è stanchi, non ci si concentra.', note: { bn: 'si impersonale-এর পর বিশেষণ পুংলিঙ্গ বহুবচন (-i) হয় এবং প্রতিফলক ক্রিয়ায় ci si বসে।', en: 'Adjectives after impersonal si are masculine plural (-i), and reflexives use ci si.' } },
    ],
    examples: [
      { it: 'Quando si viaggia all’estero, si impara ad adattarsi.', tr: { bn: 'বিদেশে ভ্রমণ করলে খাপ খাওয়ানো শেখা যায়।', en: 'When one travels abroad, one learns to adapt.' } },
    ],
    exercises: [
      { id: 'ex-b1-si-1', prompt: { bn: 'বিশেষণের সঠিক রূপ:', en: 'Adjective agreement with impersonal si:' }, it: 'Quando si lavora troppo, si diventa ___.', options: ['stressato', 'stressati', 'stressata', 'stressate'], answer: 1, explanation: { bn: 'si impersonale-এর সাথে বিশেষণ সর্বদা পুং বহুবচন (stressati)।', en: 'Impersonal si takes masculine plural adjectives: stressati.' } },
    ],
    storyIds: ['st-b1-07'],
    vocabKeys: ['w:B1:adattarsi', 'w:B1:stressato', 'w:B1:la sfida'],
  },
  passivo: {
    rule: {
      bn: 'কর্মবাচ্যে essere + পাস্ট পার্টিসিপল (লিঙ্গ ও বচন অনুযায়ী পরিবর্তিত) + da (কর্তা): La legge è stata approvata dal parlamento।',
      en: 'Passive voice: essere (in any tense) + agreed past participle + da (agent).',
    },
    commonMistakes: [
      { wrong: 'La lettera è stato scritto da Maria.', right: 'La lettera è stata scritta da Maria.', note: { bn: 'স্ত্রীলিঙ্গ একবচন কর্তার সাথে è stata scritta মেলে।', en: 'Both auxiliary participle and main participle agree with La lettera.' } },
    ],
    examples: [
      { it: 'Il romanzo è stato tradotto in venti lingue.', tr: { bn: 'উপন্যাসটি বিশটি ভাষায় অনূদিত হয়েছে।', en: 'The novel has been translated into twenty languages.' } },
    ],
    exercises: [
      { id: 'ex-b1-pas-1', prompt: { bn: 'কর্মবাচ্যের সঠিক রূপ:', en: 'Correct passive form:' }, it: 'I risultati ___ pubblicati ieri.', options: ['hanno stati', 'sono stati', 'sono stato', 'erano stato'], answer: 1, explanation: { bn: 'I risultati (পুং বহুবচন) → sono stati pubblicati।', en: 'Plural masculine subject takes sono stati pubblicati.' } },
    ],
    storyIds: ['st-b1-08'],
    vocabKeys: ['w:B1:la legge', 'w:B1:il parlamento', 'w:B1:pubblicare'],
  },
  'discorso-indiretto': {
    rule: {
      bn: 'প্রত্যক্ষ উক্তিকে পরোক্ষ উক্তিতে রূপান্তর: বিবৃতিতে che, হ্যাঁ/না প্রশ্নে se, এবং আদেশ বা অনুরোধে di + infinito ব্যবহৃত হয়।',
      en: 'Reported speech uses che for statements, se for yes/no questions, and di + infinitive for imperatives/requests.',
    },
    commonMistakes: [
      { wrong: 'Il medico mi ha detto che riposarmi.', right: 'Il medico mi ha detto di riposarmi.', note: { bn: 'আদেশ বা পরামর্শ রিপোর্ট করতে di + infinito বসে।', en: 'Reported commands use di + infinitive.' } },
    ],
    examples: [
      { it: 'L’impiegato mi ha chiesto se avessi il codice identificativo.', tr: { bn: 'কর্মকর্তা আমাকে জিজ্ঞেস করলেন আমার কাছে শনাক্তকরণ কোড আছে কি না।', en: 'The clerk asked me whether I had the identification code.' } },
    ],
    exercises: [
      { id: 'ex-b1-di-1', prompt: { bn: 'আদেশকে পরোক্ষ উক্তিতে বদলান:', en: 'Report a command:' }, it: '"Compila il modulo!" → Mi ha detto ___ il modulo.', options: ['che compilo', 'di compilare', 'a compilare', 'se compilare'], answer: 1, explanation: { bn: 'আদেশ → di + infinito।', en: 'Commands become di + infinitive.' } },
    ],
    storyIds: ['st-b1-09'],
    vocabKeys: ['w:B1:il codice identificativo', 'w:B1:la pratica'],
  },
  infinito: {
    rule: {
      bn: 'একই কর্তা থাকলে অব্যয় + ইনফিনিটিভ দিয়ে সংক্ষিপ্ত বাক্য গঠন: prima di partire, invece di lamentarsi, senza dire niente, oltre a lavorare।',
      en: 'Use preposition + infinitive when the subject is the same: prima di, invece di, senza, oltre a + infinitive.',
    },
    commonMistakes: [
      { wrong: 'Prima di parto, chiudo tutto.', right: 'Prima di partire, chiudo tutto.', note: { bn: 'prima di-এর পরে সর্বদা ইনফিনিটিভ বসে।', en: 'prima di is always followed by an infinitive.' } },
    ],
    examples: [
      { it: 'Invece di sprecare energia, spegniamo gli elettrodomestici.', tr: { bn: 'শক্তি অপচয় না করে চলো বৈদ্যুতিক যন্ত্রগুলো বন্ধ করি।', en: 'Instead of wasting energy, let’s switch off the appliances.' } },
    ],
    exercises: [
      { id: 'ex-b1-inf-1', prompt: { bn: 'সঠিক রূপ:', en: 'Pick the right form:' }, it: 'È uscito senza ___ nessuno.', options: ['saluta', 'salutare', 'salutato', 'salutando'], answer: 1, explanation: { bn: 'ব্যাকরণ সূত্র: senza + infinito (salutare) — senza এর পরে ক্রিয়ার মূল রূপ (infinito) বসে।', en: 'senza takes the infinitive.' } },
    ],
    storyIds: ['st-b1-10'],
    vocabKeys: ['w:B1:sprecare', "w:B1:l'energia", "w:B1:l'elettrodomestico"],
  },
  'gerundio-b1': {
    rule: {
      bn: 'উপায় (কীভাবে?), কারণ বা সমসাময়িকতা বোঝাতে বর্তমান জেরান্ড (-ando / -endo) এবং "সত্ত্বেও" বোঝাতে pur + জেরান্ড বসে: Pur vivendo lontano, ci sentiamo ogni giorno।',
      en: 'Use the gerund for means, cause, or simultaneous action, and pur + gerund to mean "even though / despite".',
    },
    commonMistakes: [
      { wrong: 'Pur essere giovane, ha molta esperienza.', right: 'Pur essendo giovane, ha molta esperienza.', note: { bn: 'pur-এর পর ইনফিনিটিভ নয়, জেরান্ড (essendo) বসে।', en: 'pur requires the gerund essendo, never the infinitive.' } },
    ],
    examples: [
      { it: 'Collaborando tutti insieme, abbiamo risolto il conflitto.', tr: { bn: 'সবাই মিলে সহযোগিতা করে আমরা বিরোধটি সমাধান করেছি।', en: 'By collaborating all together, we resolved the conflict.' } },
    ],
    exercises: [
      { id: 'ex-b1-ger-1', prompt: { bn: '"জানা সত্ত্বেও":', en: '"Despite knowing":' }, it: 'Pur ___ la verità, non ha detto nulla.', options: ['sapere', 'sapendo', 'saputo', 'sa'], answer: 1, explanation: { bn: 'pur + sapendo (জেরান্ড)।', en: 'pur + gerund sapendo.' } },
    ],
    storyIds: ['st-b1-11'],
    vocabKeys: ['w:B1:collaborare', 'w:B1:risolvere', 'w:B1:il conflitto'],
  },
  opinione: {
    rule: {
      bn: 'নিশ্চিত ব্যক্তিগত মতামতে Secondo me / A mio parere / Dal mio punto di vista + indicativo; কিন্তু Penso che / Ritengo che / Mi sembra che + congiuntivo।',
      en: 'Secondo me / A mio avviso take the indicative, whereas Penso/Credo/Ritengo che require the subjunctive.',
    },
    commonMistakes: [
      { wrong: 'Secondo me che sia giusto.', right: 'Secondo me è giusto. / Penso che sia giusto.', note: { bn: 'Secondo me-এর পর che বা congiuntivo বসে না।', en: 'Never put che or the subjunctive after Secondo me.' } },
    ],
    examples: [
      { it: 'A mio parere, la formazione continua è essenziale per la carriera.', tr: { bn: 'আমার মতে, ক্যারিয়ারের জন্য নিয়মিত প্রশিক্ষণ অপরিহার্য।', en: 'In my view, continuous training is essential for one’s career.' } },
    ],
    exercises: [
      { id: 'ex-b1-op-1', prompt: { bn: 'সঠিক ক্রিয়া বেছে নিন:', en: 'Pick the right mood:' }, it: 'Ritengo che questo progetto ___ molti vantaggi.', options: ['ha', 'abbia', 'avrà', 'aveva'], answer: 1, explanation: { bn: 'ব্যাকরণ সূত্র: Ritengo che + congiuntivo (abbia) — Ritengo che এর পরে সাবজাংক্টিভ (congiuntivo) রূপ বসে abbia।', en: 'Ritengo che requires the subjunctive abbia.' } },
    ],
    storyIds: ['st-b1-12'],
    vocabKeys: ['w:B1:il parere', 'w:B1:la formazione', 'w:B1:il vantaggio'],
  },
  'connettivi-b1': {
    rule: {
      bn: 'উন্নত যুক্তি সাজাতে: inoltre (তাছাড়া), infatti (প্রকৃতপক্ষে), tuttavia / però (তবুও), dunque / perciò (অতএব), da un lato… dall’altro lato (একদিকে… অন্যদিকে), in conclusione (উপসংহারে)।',
      en: 'Organise discourse with inoltre, infatti, tuttavia, perciò, da un lato… dall’altro, and in conclusione.',
    },
    commonMistakes: [
      { wrong: 'Nonostante che pioveva.', right: 'Nonostante la pioggia / Nonostante piovesse.', note: { bn: 'nonostante + বিশেষ্য অথবা congiuntivo।', en: 'Use nonostante + noun or nonostante + subjunctive.' } },
    ],
    examples: [
      { it: 'Il costo della vita è aumentato; tuttavia, il quartiere offre ottimi servizi.', tr: { bn: 'জীবনযাত্রার ব্যয় বেড়েছে; তবুও এলাকাটি দারুণ সেবা দেয়।', en: 'The cost of living has risen; nevertheless, the neighbourhood offers great services.' } },
    ],
    exercises: [
      { id: 'ex-b1-con-1', prompt: { bn: 'বিপরীত ভাবের সংযোজক:', en: 'Contrastive connector:' }, it: 'Lo stipendio non è alto; ___, l’ambiente di lavoro è sereno.', options: ['inoltre', 'tuttavia', 'infatti', 'perciò'], answer: 1, explanation: { bn: 'tuttavia = তবুও / তা সত্ত্বেও।', en: 'tuttavia = however / nevertheless.' } },
    ],
    storyIds: ['st-b1-13'],
    vocabKeys: ['w:B1:tuttavia', 'w:B1:il costo della vita', 'w:B1:sereno'],
  },
  'congiuntivo-imperfetto': {
    rule: {
      bn: 'প্রধান ক্রিয়া অতীত কালে থাকলে (Pensavo che, Credevo che, Speravo che, Volevo che) বা কাল্পনিক ইচ্ছায় (Magari avessi!) congiuntivo imperfetto (-assi, -essi, -issi; essere → fossi) বসে।',
      en: 'Use the imperfect subjunctive after past verbs of thinking, hoping, or wishing, and after magari for wishes.',
    },
    commonMistakes: [
      { wrong: 'Pensavo che lui sia a casa.', right: 'Pensavo che lui fosse a casa.', note: { bn: 'Pensavo অতীতে হওয়ায় পরের ক্রিয়াটি fosse হবে।', en: 'Past main verb Pensavo requires imperfect subjunctive fosse.' } },
    ],
    examples: [
      { it: 'Credevo che l’ufficio immigrazione aprisse alle otto e mezzo.', tr: { bn: 'আমি ভেবেছিলাম অভিবাসন অফিস সাড়ে আটটায় খোলে।', en: 'I thought the immigration office opened at half past eight.' } },
    ],
    exercises: [
      { id: 'ex-b1-ci-1', prompt: { bn: 'সঠিক রূপ:', en: 'Pick the right form:' }, it: 'Speravamo che voi ___ venire alla festa.', options: ['potete', 'possiate', 'poteste', 'potrete'], answer: 2, explanation: { bn: 'Speravamo (অতীত) + voi poteste।', en: 'Speravamo takes imperfect subjunctive poteste.' } },
    ],
    storyIds: ['st-b1-14'],
    vocabKeys: ["w:B1:l'ufficio immigrazione", 'w:B1:il requisito'],
  },
  'congiuntivo-passato': {
    rule: {
      bn: 'বর্তমানের ধারণা বা আশার সাপেক্ষে অতীতের সমাপ্ত কাজ: abbia/sia + পার্টিসিপল (Spero che tu abbia trovato parcheggio; Temiamo che il volo sia stato cancellato)।',
      en: 'Present subjunctive of avere/essere + past participle expresses a completed action prior to a present main verb.',
    },
    commonMistakes: [
      { wrong: 'Credo che sono partiti.', right: 'Credo che siano partiti.', note: { bn: 'Credo che-এর পরে siano partiti (congiuntivo passato)।', en: 'Credo che requires siano partiti.' } },
    ],
    examples: [
      { it: 'Penso che il consulente abbia già inviato il preventivo.', tr: { bn: 'আমার মনে হয় পরামর্শদাতা ইতিমধ্যে কোটেশনটি পাঠিয়েছেন।', en: 'I think the consultant has already sent the quote.' } },
    ],
    exercises: [
      { id: 'ex-b1-cpa-1', prompt: { bn: 'শূন্যস্থান পূরণ করুন:', en: 'Complete:' }, it: 'Mi dispiace che Maria ___ perso la coincidenza.', options: ['ha', 'abbia', 'sia', 'avesse'], answer: 1, explanation: { bn: 'perdere avere নেয় → abbia perso।', en: 'Present regret about past event: abbia perso.' } },
    ],
    storyIds: ['st-b1-15'],
    vocabKeys: ['w:B1:il consulente', 'w:B1:il preventivo', 'w:B1:la coincidenza persa'],
  },
  'congiuntivo-trapassato': {
    rule: {
      bn: 'অতীতের ধারণারও আগে ঘটে যাওয়া কাজ বা ৩য় প্রকার শর্তবাক্যে: avessi/fossi + পার্টিসিপল (Sembrava che non avessero dormito; Se avessi letto la clausola, non avrei firmato)।',
      en: 'Imperfect subjunctive of avere/essere + past participle, used for prior past actions and unfulfilled past conditions.',
    },
    commonMistakes: [
      { wrong: 'Speravo che hai superato la prova.', right: 'Speravo che tu avessi superato la prova.', note: { bn: 'Speravo-এর আগে ঘটা কাজে avessi superato বসে।', en: 'After Speravo, a prior action uses avessi superato.' } },
    ],
    examples: [
      { it: 'Temevo che avessero già chiuso le iscrizioni al semestre.', tr: { bn: 'ভয় পাচ্ছিলাম যে তারা হয়ত সেমিস্টারের ভর্তি বন্ধ করে দিয়েছে।', en: 'I was afraid they had already closed enrolment for the semester.' } },
    ],
    exercises: [
      { id: 'ex-b1-ctr-1', prompt: { bn: 'সঠিক রূপ:', en: 'Pick the right form:' }, it: 'Credevo che Sara ___ già tornata da Berlino.', options: ['è', 'sia', 'fosse', 'sarebbe'], answer: 2, explanation: { bn: 'Credevo + পূর্ববর্তী কাজ → fosse tornata।', en: 'Prior to Credevo → fosse tornata.' } },
    ],
    storyIds: ['st-b1-16'],
    vocabKeys: ['w:B1:il semestre', 'w:B1:la clausola'],
  },
  'concordanza-congiuntivo': {
    rule: {
      bn: 'প্রধান ক্রিয়ার কাল (বর্তমান নাকি অতীত) দেখে নির্ভরশীল ক্রিয়ার ৪টি congiuntivo কাল (presente, passato, imperfetto, trapassato) নির্বাচন করাই হলো concordanza dei tempi।',
      en: 'Match present main verbs with present/past subjunctive, and past main verbs with imperfect/pluperfect subjunctive.',
    },
    commonMistakes: [
      { wrong: 'Volevo che tu vieni.', right: 'Volevo che tu venissi.', note: { bn: 'Volevo অতীত কাল হওয়ায় venissi বসবে।', en: 'Volevo requires imperfect subjunctive venissi.' } },
    ],
    examples: [
      { it: 'So che lavora molto, ma pensavo che avesse già preso le ferie.', tr: { bn: 'জানি সে অনেক কাজ করে, কিন্তু ভেবেছিলাম সে ইতিমধ্যে ছুটি নিয়েছে।', en: 'I know he works hard, but I thought he had already taken leave.' } },
    ],
    exercises: [
      { id: 'ex-b1-cc-1', prompt: { bn: 'কালের সামঞ্জস্য রাখুন:', en: 'Match the sequence of tenses:' }, it: 'Dubito che loro ___ il problema ieri.', options: ['risolvano', 'abbiano risolto', 'risolvessero', 'avessero risolto'], answer: 1, explanation: { bn: 'Dubito (বর্তমান) + ieri (অতীত) → abbiano risolto।', en: 'Present main verb + past action → abbiano risolto.' } },
    ],
    storyIds: ['st-b1-17'],
    vocabKeys: ['w:B1:dubitare', 'w:B1:risolvere', 'w:B1:le ferie pagate'],
  },
  'senza-che-prima-che': {
    rule: {
      bn: 'prima che, senza che, a meno che (non), nel caso in cui-এর পরে সর্বদা congiuntivo বসে: Chiudiamo il contratto prima che cambino i tassi d’interesse।',
      en: 'Always use the subjunctive after prima che, senza che, a meno che (non), and nel caso in cui.',
    },
    commonMistakes: [
      { wrong: 'Partiamo prima che comincia lo sciopero.', right: 'Partiamo prima che cominci lo sciopero.', note: { bn: 'prima che-এর পরে cominci (congiuntivo)।', en: 'prima che requires cominci.' } },
    ],
    examples: [
      { it: 'Domani andremo in gita, a meno che non ci sia un temporale.', tr: { bn: 'কাল আমরা ঘুরতে যাব, যদি না ঝড়বৃষ্টি হয়।', en: 'Tomorrow we will go on a trip, unless there is a storm.' } },
    ],
    exercises: [
      { id: 'ex-b1-sp-1', prompt: { bn: 'শূন্যস্থান পূরণ করুন:', en: 'Complete:' }, it: 'Ha risolto il guasto senza che nessuno glielo ___.', options: ['chiedeva', 'chiedesse', 'ha chiesto', 'chiederà'], answer: 1, explanation: { bn: 'senza che + অতীতে chiedesse।', en: 'senza che in past context takes chiedesse.' } },
    ],
    storyIds: ['st-b1-18'],
    vocabKeys: ['w:B1:a meno che', 'w:B1:il guasto tecnico', "w:B1:il tasso d'interesse"],
  },
  'periodo-ipotetico-2': {
    rule: {
      bn: 'বর্তমানের অবাস্তব বা কম সম্ভাব্য শর্তে: Se + congiuntivo imperfetto, + condizionale presente (Se ci fossero più piste ciclabili, userei sempre la bici)।',
      en: 'Second conditional: Se + imperfect subjunctive, + present conditional.',
    },
    commonMistakes: [
      { wrong: 'Se potrei, cambierei casa.', right: 'Se potessi, cambierei casa.', note: { bn: 'সঠিক উত্তর ও ব্যাকরণ সূত্র: «Se potessi, cambierei» (Use Se potessi, never Se potrei)।', en: 'Use Se potessi, never Se potrei.' } },
    ],
    examples: [
      { it: 'Se il trasporto pubblico fosse più puntuale, meno persone userebbero l’auto.', tr: { bn: 'গণপরিবহন আরও সময়নিষ্ঠ হলে কম মানুষ গাড়ি ব্যবহার করত।', en: 'If public transport were more punctual, fewer people would use cars.' } },
    ],
    exercises: [
      { id: 'ex-b1-pi2-1', prompt: { bn: '২য় প্রকার শর্তবাক্য:', en: '2nd conditional:' }, it: 'Se noi ___ un capitale sufficiente, apriremmo un’impresa.', options: ['abbiamo', 'avremmo', 'avessimo', 'avremo'], answer: 2, explanation: { bn: 'ব্যাকরণ সূত্র: Se + avessimo — Se এর পরে ইমপারফেক্ট সাবজাংক্টিভ (congiuntivo imperfetto) বসে avessimo।', en: 'Se takes imperfect subjunctive avessimo.' } },
    ],
    storyIds: ['st-b1-19'],
    vocabKeys: ['w:B1:la pista ciclabile', 'w:B1:puntuale', "w:B1:l'impresa"],
  },
  'periodo-ipotetico-3': {
    rule: {
      bn: 'অতীতে ঘটেনি এমন শর্ত ও তার অঘটিত ফলাফল: Se + congiuntivo trapassato, + condizionale passato (Se avessi fatto il backup, non avrei perso i file)।',
      en: 'Third conditional for past counterfactuals: Se + pluperfect subjunctive, + past conditional.',
    },
    commonMistakes: [
      { wrong: 'Se avrei saputo, sarei venuto.', right: 'Se avessi saputo, sarei venuto.', note: { bn: 'Se-এর অংশে avessi saputo বসবে।', en: 'Use Se avessi saputo in the if-clause.' } },
    ],
    examples: [
      { it: 'Se avessimo prenotato un mese fa, avremmo speso la metà.', tr: { bn: 'আমরা এক মাস আগে বুক করলে অর্ধেক খরচ করতাম।', en: 'If we had booked a month ago, we would have spent half as much.' } },
    ],
    exercises: [
      { id: 'ex-b1-pi3-1', prompt: { bn: 'অতীতের অবাস্তব শর্ত:', en: 'Past counterfactual:' }, it: 'Se non ci fosse stato l’ingorgo, ___ arrivati in tempo.', options: ['saremmo', 'saremo', 'fossimo', 'eravamo'], answer: 0, explanation: { bn: 'ফলাফল অংশে condizionale passato: saremmo arrivati।', en: 'Result clause uses past conditional saremmo arrivati.' } },
    ],
    storyIds: ['st-b1-20'],
    vocabKeys: ["w:B1:l'ingorgo", 'w:B1:il file'],
  },
  'futuro-anteriore': {
    rule: {
      bn: 'ভবিষ্যতের দুটি কাজের মধ্যে যেটি আগে সম্পন্ন হবে (বিশেষত quando, appena, dopo che-এর পরে): avrò/sarò + পাস্ট পার্টিসিপল (Appena avrò ricevuto il bonifico, spedirò il pacco)।',
      en: 'Future of avere/essere + past participle expresses an action that will be completed before another future action.',
    },
    commonMistakes: [
      { wrong: 'Appena sono arrivato domani, ti chiamo.', right: 'Appena sarò arrivato domani, ti chiamerò.', note: { bn: 'ভবিষ্যতে পৌঁছালে appena sarò arrivato।', en: 'Use future perfect sarò arrivato for future sequence.' } },
    ],
    examples: [
      { it: 'Dopo che avremo firmato il contratto d’affitto, faremo il trasloco.', tr: { bn: 'ভাড়ার চুক্তি স্বাক্ষর করার পর আমরা বাসা বদল করব।', en: 'After we have signed the tenancy agreement, we will move house.' } },
    ],
    exercises: [
      { id: 'ex-b1-fa-1', prompt: { bn: 'পুরাঘটিত ভবিষ্যৎ:', en: 'Future perfect:' }, it: 'Ti darò una risposta quando ___ parlato col relatore.', options: ['ho', 'avrò', 'avrei', 'avevo'], answer: 1, explanation: { bn: 'সঠিক উত্তর ও ব্যাকরণ সূত্র: «quando avrò parlato» (quando avrò parlato)।', en: 'quando avrò parlato.' } },
    ],
    storyIds: ['st-b1-21'],
    vocabKeys: ["w:B1:il contratto d'affitto", 'w:B1:il trasloco', 'w:B1:il relatore'],
  },
  'futuro-probabilita': {
    rule: {
      bn: 'নিশ্চিত না হয়ে অনুমান করতে: বর্তমানের বিষয়ে futuro semplice (Che ore sono? Saranno le undici) এবং অতীতের বিষয়ে futuro anteriore (Non risponde: sarà uscito / avrà spento il telefono)।',
      en: 'Use simple future for present supposition and future perfect for past supposition.',
    },
    commonMistakes: [
      { wrong: 'Deve essere uscito (ইংরেজি ধাঁচ).', right: 'Sarà uscito.', note: { bn: 'ইতালিয়ানে অনুমানে futuro anteriore (Sarà uscito) সবচেয়ে স্বাভাবিক।', en: 'Italian naturally prefers Sarà uscito for "He must have gone out".' } },
    ],
    examples: [
      { it: 'Nadia è molto sorridente oggi: avrà superato l’appello d’esame!', tr: { bn: 'নাদিয়াকে আজ খুব হাসিখুশি দেখাচ্ছে: নিশ্চয়ই পরীক্ষায় পাস করেছে!', en: 'Nadia is smiling a lot today: she must have passed her exam session!' } },
    ],
    exercises: [
      { id: 'ex-b1-fp-1', prompt: { bn: 'অতীতের অনুমান:', en: 'Guessing about a past cause:' }, it: 'Luca è in ritardo: ___ trovato traffico sulla tangenziale.', options: ['ha', 'avrà', 'avrebbe', 'aveva'], answer: 1, explanation: { bn: 'অতীতের অনুমানে avrà trovato।', en: 'Past supposition uses future perfect avrà trovato.' } },
    ],
    storyIds: ['st-b1-22'],
    vocabKeys: ["w:B1:l'appello", 'w:B1:la deviazione'],
  },
  'passato-remoto-b1': {
    rule: {
      bn: 'ইতিহাস, সাহিত্য, শিল্পকলা ও জীবনী পড়তে passato remoto অপরিহার্য: Dante nacque a Firenze nel 1265 e scrisse la Divina Commedia; L’Italia divenne una repubblica nel 1946।',
      en: 'Recognise and use 3rd-person passato remoto forms in historical, cultural, and literary narratives.',
    },
    commonMistakes: [
      { wrong: 'Ieri nacque mio nipote.', right: 'Ieri è nato mio nipote. / Leonardo nacque nel 1452.', note: { bn: 'সাম্প্রতিক দৈনন্দিন কথায় passato prossimo, আর ঐতিহাসিক ঘটনায় passato remoto।', en: 'Use passato prossimo for recent personal events and passato remoto for history.' } },
    ],
    examples: [
      { it: 'Il Rinascimento trasformò profondamente l’arte e l’architettura europea.', tr: { bn: 'রেনেসাঁস ইউরোপীয় শিল্পকলা ও স্থাপত্যকে গভীরভাবে বদলে দিয়েছিল।', en: 'The Renaissance deeply transformed European art and architecture.' } },
    ],
    exercises: [
      { id: 'ex-b1-pr-1', prompt: { bn: 'essere-এর ৩য় পুরুষ একবচন passato remoto:', en: '3rd singular passato remoto of essere:' }, it: 'Quel romanzo ___ un grande successo letterario.', options: ['era stato', 'fu', 'sia', 'sarebbe'], answer: 1, explanation: { bn: 'essere → lui/lei fu (বহুবচন furono)।', en: '3rd singular passato remoto of essere is fu.' } },
    ],
    storyIds: ['st-b1-23'],
    vocabKeys: ['w:B1:il Rinascimento', "w:B1:l'architettura", 'w:B1:lo scrittore'],
  },
  'pronomi-doppi-passato': {
    rule: {
      bn: 'যুক্ত সর্বনাম + passato prossimo-তে প্রত্যক্ষ সর্বনাম (lo, la, li, le, ne) অনুযায়ী পার্টিসিপলের শেষ স্বরবর্ণ পরিবর্তিত হয়: La raccomandata? Me l’hanno consegnata stamattina।',
      en: 'With combined pronouns in compound tenses, the participle agrees with the direct object element (l’/li/le/ne).',
    },
    commonMistakes: [
      { wrong: 'Le chiavi? Te le ho dato ieri.', right: 'Le chiavi? Te le ho date ieri.', note: { bn: 'te le (স্ত্রী বহুবচন) থাকায় date হবে।', en: 'te le requires feminine plural participle date.' } },
    ],
    examples: [
      { it: 'I certificati? Ce li ha rilasciati l’anagrafe ieri mattina.', tr: { bn: 'সনদগুলো? গতকাল সকালে নাগরিক নিবন্ধন দপ্তর আমাদের ওগুলো দিয়েছে।', en: 'The certificates? The registry office issued them to us yesterday morning.' } },
    ],
    exercises: [
      { id: 'ex-b1-pdp-1', prompt: { bn: 'সঠিক মিল বেছে নিন:', en: 'Pick the right agreement:' }, it: 'La borsa di studio? Gliel’hanno ___ per merito.', options: ['concesso', 'concessa', 'concessi', 'concesse'], answer: 1, explanation: { bn: 'la borsa (স্ত্রী একবচন) → gliel’hanno concessa।', en: 'Agrees feminine singular with la borsa: concessa.' } },
    ],
    storyIds: ['st-b1-24'],
    vocabKeys: ["w:B1:l'anagrafe", 'w:B1:la raccomandata', 'w:B1:il certificato'],
  },
  'ci-ne-idiomatici': {
    rule: {
      bn: 'volerci (সাধারণভাবে সময়/উপাদান লাগা: Ci vogliono due ore) বনাম metterci (ব্যক্তির সময় লাগা: Ci ho messo un’ora); এছাড়া valerne la pena (সার্থক হওয়া) ও volerne sapere।',
      en: 'Distinguish impersonal volerci (ci vuole/vogliono) from personal metterci (ci metto/metti), plus valerne la pena.',
    },
    commonMistakes: [
      { wrong: 'Io ci voglio venti minuti per andare al lavoro.', right: 'Io ci metto venti minuti per andare al lavoro.', note: { bn: 'ব্যক্তি কর্তা হলে metterci (ci metto) বসে।', en: 'When a person is the subject, use metterci (ci metto).' } },
    ],
    examples: [
      { it: 'Con l’alta velocità ci si mette solo un’ora da Bologna a Milano.', tr: { bn: 'উচ্চগতির ট্রেনে বোলোনিয়া থেকে মিলান যেতে মাত্র এক ঘণ্টা লাগে।', en: 'By high-speed train it only takes an hour from Bologna to Milan.' } },
    ],
    exercises: [
      { id: 'ex-b1-cni-1', prompt: { bn: 'শূন্যস্থান পূরণ করুন:', en: 'Complete:' }, it: 'Il percorso è faticoso, ma ___ davvero la pena!', options: ['ci vale', 'ne vale', 'lo vale', 'gli vale'], answer: 1, explanation: { bn: 'ব্যাকরণ সূত্র: valerne la pena → ne vale la pena — স্থায়ী বাগধারা: ne vale la pena।', en: 'Fixed idiom: ne vale la pena.' } },
    ],
    storyIds: ['st-b1-25'],
    vocabKeys: ["w:B1:l'alta velocità", 'w:B1:il pendolare', 'w:B1:la fatica'],
  },
  'passivo-venire-andare': {
    rule: {
      bn: 'venire + পার্টিসিপল নিয়মিত বা চলমান কর্মবাচ্য বোঝায় (Il testo viene corretto), আর andare + পার্টিসিপল নিয়ম বা কর্তব্য বোঝায় (Il modulo va compilato in stampatello = পূরণ করতে হবে)।',
      en: 'Use venire + participle for action passives in simple tenses, and andare + participle to mean "must/should be done".',
    },
    commonMistakes: [
      { wrong: 'Il documento è venuto firmato ieri.', right: 'Il documento è stato firmato ieri.', note: { bn: 'যৌগিক কালে (passato prossimo) venire দিয়ে কর্মবাচ্য হয় না, essere লাগে।', en: 'Never use venire in compound passive tenses; use essere stato.' } },
    ],
    examples: [
      { it: 'La tassa regionale va pagata entro la scadenza fiscale.', tr: { bn: 'করের শেষ তারিখের মধ্যে আঞ্চলিক কর পরিশোধ করতে হবে।', en: 'The regional tax must be paid by the tax deadline.' } },
    ],
    exercises: [
      { id: 'ex-b1-pva-1', prompt: { bn: '"সংরক্ষণ করা উচিত / আবশ্যক":', en: '"Must be kept":' }, it: 'La ricevuta fiscale ___ conservata per cinque anni.', options: ['viene', 'va', 'sta', 'fa'], answer: 1, explanation: { bn: 'বাধ্যবাধকতা বোঝাতে va + পার্টিসিপল।', en: 'Obligation passive uses va + participle.' } },
    ],
    storyIds: ['st-b1-26'],
    vocabKeys: ['w:B1:la ricevuta fiscale', 'w:B1:la scadenza fiscale', 'w:B1:conservare'],
  },
  'si-passivante-tempi': {
    rule: {
      bn: 'অতীতে si passivante গঠন করতে si è + একবচন পার্টিসিপল অথবা si sono + বহুবচন পার্টিসিপল বসে: Ieri si è svolta la riunione; Negli ultimi anni si sono costruite molte piste ciclabili।',
      en: 'In the past, passive si uses si è + singular participle or si sono + plural participle agreeing with the noun.',
    },
    commonMistakes: [
      { wrong: 'Si hanno visto molti progressi.', right: 'Si sono visti molti progressi.', note: { bn: 'si-এর সাথে যৌগিক কালে সর্বদা essere বসে।', en: 'Compound tenses with si always take essere, never avere.' } },
    ],
    examples: [
      { it: 'Durante il dibattito si sono affrontati temi ambientali molto urgenti.', tr: { bn: 'বিতর্ক চলাকালে অত্যন্ত জরুরি পরিবেশগত বিষয়গুলো আলোচনা করা হয়েছে।', en: 'During the debate very urgent environmental topics were addressed.' } },
    ],
    exercises: [
      { id: 'ex-b1-spt-1', prompt: { bn: 'সঠিক অতীত রূপ:', en: 'Correct past form with si:' }, it: 'Alla fine ___ trovata una soluzione condivisa.', options: ['si ha', 'si è', 'si sono', 'ci ha'], answer: 1, explanation: { bn: 'una soluzione (স্ত্রী একবচন) → si è trovata।', en: 'Singular feminine subject takes si è trovata.' } },
    ],
    storyIds: ['st-b1-27'],
    vocabKeys: ['w:B1:il dibattito', 'w:B1:ambientale', 'w:B1:la soluzione'],
  },
  'verbi-pronominali-b1': {
    rule: {
      bn: 'সর্বনামযুক্ত বাগধারামূলক ক্রিয়া: cavarsela (সামলে নেওয়া), arrangiarsi (নিজে চালিয়ে নেওয়া), prendersela (রাগ/অভিমান করা), entrarci (সম্পর্ক থাকা: Non c’entra nulla)।',
      en: 'Master B1 pronominal verbs: cavarsela, arrangiarsi, prendersela, entrarci.',
    },
    commonMistakes: [
      { wrong: 'Con l’inglese mi cavo bene.', right: 'Con l’inglese me la cavo bene.', note: { bn: 'cavarsela-তে সর্বদা la থাকে: me la cavo।', en: 'cavarsela always keeps la: me la cavo.' } },
    ],
    examples: [
      { it: 'All’inizio la burocrazia sembrava complessa, ma ce la siamo cavata.', tr: { bn: 'শুরুতে আমলাতন্ত্র জটিল মনে হয়েছিল, কিন্তু আমরা সামলে নিয়েছি।', en: 'At first bureaucracy seemed complex, but we managed fine.' } },
    ],
    exercises: [
      { id: 'ex-b1-vpb-1', prompt: { bn: '"এর সাথে ওটার কোনো সম্পর্ক নেই":', en: '"That has nothing to do with it":' }, it: 'Questo discorso non ___ niente con il nostro problema!', options: ['ci va', 'c’entra', 'se la cava', 'me ne vado'], answer: 1, explanation: { bn: 'সঠিক রূপান্তর: «entrarci» থেকে পরিবর্তিত হয়ে «non c’entra niente» ব্যবহৃত হয়।', en: 'entrarci → non c’entra niente.' } },
    ],
    storyIds: ['st-b1-28'],
    vocabKeys: ['w:B1:cavarsela', 'w:B1:arrangiarsi', 'w:B1:la burocrazia'],
  },
  'causativi-fare-lasciare': {
    rule: {
      bn: 'fare + infinito = কাউকে দিয়ে করানো (Ho fatto riparare il tetto); lasciare + infinito = কাউকে করতে দেওয়া (Lasciami spiegare)। সর্বনাম fare/lasciare-এর আগে বসে (Lo faccio riparare)।',
      en: 'fare + infinitive = to have something done / make someone do; lasciare + infinitive = to let someone do. Clitic pronouns precede fare/lasciare.',
    },
    commonMistakes: [
      { wrong: 'Ho fatto riparato il computer.', right: 'Ho fatto riparare il computer.', note: { bn: 'ho fatto-র পর ইনফিনিটিভ (riparare) বসে, পার্টিসিপল নয়।', en: 'Use the infinitive after fare, never a second participle.' } },
    ],
    examples: [
      { it: 'Prima di firmare il mutuo, l’abbiamo fatto controllare da un esperto.', tr: { bn: 'মর্টগেজে সই করার আগে আমরা একজন বিশেষজ্ঞকে দিয়ে তা পরীক্ষা করিয়েছি।', en: 'Before signing the mortgage, we had it checked by an expert.' } },
    ],
    exercises: [
      { id: 'ex-b1-cfl-1', prompt: { bn: 'সঠিক প্রযোজক রূপ:', en: 'Correct causative form:' }, it: 'Per favore, non ___ aspettare i clienti fuori!', options: ['fai', 'fare', 'fatto', 'facendo'], answer: 1, explanation: { bn: 'নেতিবাচক tu অনুজ্ঞায় non + fare + infinito।', en: 'Negative tu imperative: non fare aspettare.' } },
    ],
    storyIds: ['st-b1-29'],
    vocabKeys: ['w:B1:riparare', 'w:B1:il mutuo'],
  },
  'discorso-indiretto-passato': {
    rule: {
      bn: 'অতীতের রিপোর্টিং ক্রিয়ার পর কালের পরিবর্তন: presente → imperfetto, passato prossimo → trapassato prossimo, futuro → condizionale passato (Ha promesso che avrebbe chiamato il giorno dopo)।',
      en: 'After a past reporting verb, shift present → imperfect, past → pluperfect, and future → past conditional.',
    },
    commonMistakes: [
      { wrong: 'Mi aveva detto che verrà domani.', right: 'Mi aveva detto che sarebbe venuto il giorno dopo.', note: { bn: 'অতীতে রিপোর্ট করলে ভবিষ্যৎ ক্রিয়ার রূপ condizionale passato হয়।', en: 'Future shifts to past conditional (sarebbe venuto) and domani to il giorno dopo.' } },
    ],
    examples: [
      { it: 'Il sindaco ha dichiarato che i lavori sarebbero finiti entro l’autunno.', tr: { bn: 'মেয়র ঘোষণা করেছেন যে শরতের মধ্যেই কাজ শেষ হবে।', en: 'The mayor declared that the works would finish by autumn.' } },
    ],
    exercises: [
      { id: 'ex-b1-dip-1', prompt: { bn: 'পরোক্ষ উক্তিতে রূপান্তর:', en: 'Shift into past reported speech:' }, it: 'Marco disse: "Ho già inviato la domanda." → Marco disse che ___ già inviato la domanda.', options: ['ha', 'aveva', 'avrebbe', 'avesse'], answer: 1, explanation: { bn: 'ব্যাকরণ সূত্র: ho inviato → aveva inviato — Passato prossimo পরিবর্তিত হয়ে হয় trapassato aveva inviato।', en: 'Passato prossimo shifts to trapassato aveva inviato.' } },
    ],
    storyIds: ['st-b1-30'],
    vocabKeys: ['w:B1:il sindaco', 'w:B1:la dichiarazione', 'w:B1:il cantiere stradale'],
  },
  'infinito-passato': {
    rule: {
      bn: 'dopo, per, di, senza-এর পরে পূর্ববর্তী সমাপ্ত কাজ বোঝাতে aver (avere) বা essere + পাস্ট পার্টিসিপল: Dopo aver analizzato i dati, abbiamo scritto il riassunto; Dopo essersi trasferiti, hanno cambiato medico।',
      en: 'Use aver / essere + past participle after dopo, per, di, senza to express a completed prior action by the same subject.',
    },
    commonMistakes: [
      { wrong: 'Dopo mangiato... / Dopo avere mangiato (কথ্য) vs Dopo che ho...', right: 'Dopo aver letto il bando, ho presentato la domanda.', note: { bn: 'আনুষ্ঠানিক ও প্রমিত লেখায় dopo aver / essere + পার্টিসিপল সবচেয়ে সুন্দর।', en: 'dopo aver/essere + participle is the standard written construction.' } },
    ],
    examples: [
      { it: 'La ringrazio per aver risposto così rapidamente alla mia richiesta.', tr: { bn: 'আমার অনুরোধে এত দ্রুত সাড়া দেওয়ার জন্য আপনাকে ধন্যবাদ জানাই।', en: 'Thank you for replying so quickly to my request.' } },
    ],
    exercises: [
      { id: 'ex-b1-ipa-1', prompt: { bn: 'অতীত ইনফিনিটিভ বেছে নিন:', en: 'Pick the past infinitive:' }, it: 'Dopo ___ laureata a Bologna, Nadia ha iniziato il tirocinio.', options: ['aver', 'essersi', 'essere', 'avendo'], answer: 1, explanation: { bn: 'laurearsi প্রতিফলক → dopo essersi laureata।', en: 'Reflexive laurearsi becomes essersi laureata.' } },
    ],
    storyIds: ['st-b1-31'],
    vocabKeys: ['w:B1:analizzare', 'w:B1:il riassunto', 'w:B1:il tirocinio'],
  },
  'gerundio-composto': {
    rule: {
      bn: 'প্রধান কাজের আগে ঘটে যাওয়া কারণ বোঝাতে avendo / essendo + পাস্ট পার্টিসিপল: Avendo vissuto a lungo a Milano, conosce ogni quartiere; Essendo nata in Italia, parla perfettamente।',
      en: 'Past gerund (avendo / essendo + participle) expresses a cause that occurred prior to the main action.',
    },
    commonMistakes: [
      { wrong: 'Avendo partito presto, siamo arrivati.', right: 'Essendo partiti presto, siamo arrivati in anticipo.', note: { bn: 'partire essere নেয়, তাই essendo partiti।', en: 'partire takes essere: essendo partiti.' } },
    ],
    examples: [
      { it: 'Avendo smarrito la carta d’imbarco, ho dovuto chiedere assistenza.', tr: { bn: 'বোর্ডিং পাস হারিয়ে ফেলায় আমাকে সহায়তা চাইতে হয়েছে।', en: 'Having lost my boarding pass, I had to ask for assistance.' } },
    ],
    exercises: [
      { id: 'ex-b1-gc-1', prompt: { bn: 'সঠিক অতীত জেরান্ড:', en: 'Correct past gerund:' }, it: '___ già visto quel film, ho preferito leggere un romanzo.', options: ['Essendo', 'Avendo', 'Avere', 'Stando'], answer: 1, explanation: { bn: 'vedere avere নেয় → Avendo già visto।', en: 'vedere takes avere: Avendo già visto.' } },
    ],
    storyIds: ['st-b1-32'],
    vocabKeys: ['w:B1:smarrire', "w:B1:la carta d'imbarco", 'w:B1:a lungo'],
  },
  'participio-passato-assoluto': {
    rule: {
      bn: 'যৌগিক কালের সহায়ক ক্রিয়া বাদ দিয়ে সরাসরি পাস্ট পার্টিসিপল + বিশেষ্য দিয়ে "কাজটি শেষ হওয়ার পর" বোঝানো যায়: Superato l’esame, lo studente ha festeggiato; Finita la conferenza, il pubblico è uscito।',
      en: 'Place an agreed past participle before a noun to mean "Once/After X was completed": Superata la crisi, l’azienda è cresciuta.',
    },
    commonMistakes: [
      { wrong: 'Finito la scuola, vado all’università.', right: 'Finita la scuola, andrò all’università.', note: { bn: 'la scuola স্ত্রীলিঙ্গ হওয়ায় Finita হতে হবে।', en: 'The participle must agree with la scuola: Finita.' } },
    ],
    examples: [
      { it: 'Ottenuto il permesso di lavoro, ha firmato subito il contratto.', tr: { bn: 'কাজের অনুমতি পাওয়ার পরপরই সে চুক্তিতে সই করেছে।', en: 'Once the work permit was obtained, he immediately signed the contract.' } },
    ],
    exercises: [
      { id: 'ex-b1-ppa-1', prompt: { bn: 'সঠিক মিল:', en: 'Agree the participle:' }, it: '___ le spese condominiali, ci resta un buon risparmio.', options: ['Pagato', 'Pagata', 'Pagate', 'Pagati'], answer: 2, explanation: { bn: 'le spese (স্ত্রী বহুবচন) → Pagate।', en: 'Agrees with feminine plural le spese: Pagate.' } },
    ],
    storyIds: ['st-b1-33'],
    vocabKeys: ['w:B1:ottenere', 'w:B1:il permesso di lavoro', 'w:B1:le spese condominiali'],
  },
  'relativi-il-quale-cui': {
    rule: {
      bn: 'প্রিপোজিশন + il quale/la quale/i quali/le quali দ্ব্যর্থতা দূর করে। আর আর্টিকেল + cui + বিশেষ্য দ্বারা "যার" (whose) বোঝায়: la collega il cui figlio studia con me।',
      en: 'Use preposition + il/la quale for unambiguous reference, and article + cui + noun to mean "whose" (agreeing the article with the possessed noun).',
    },
    commonMistakes: [
      { wrong: 'L’autore cui libro è famoso.', right: 'L’autore il cui libro è famoso.', note: { bn: 'cui-এর আগে অধিকারভুক্ত বিশেষ্যের আর্টিকেল (il cui libro) বসানো বাধ্যতামূলক।', en: 'Always place the definite article before possessive cui: il cui libro.' } },
    ],
    examples: [
      { it: 'È un’associazione culturale il cui scopo è promuovere l’integrazione.', tr: { bn: 'এটি এমন একটি সাংস্কৃতিক সংগঠন যার উদ্দেশ্য সমন্বয় এগিয়ে নেওয়া।', en: 'It is a cultural association whose purpose is to promote integration.' } },
    ],
    exercises: [
      { id: 'ex-b1-rqc-1', prompt: { bn: '"যার ফলাফলগুলো":', en: '"Whose results":' }, it: 'Una ricerca scientifica ___ risultati sono molto promettenti.', options: ['la cui', 'i cui', 'di cui', 'che i'], answer: 1, explanation: { bn: 'risultati পুং বহুবচন হওয়ায় i cui risultati।', en: 'Article agrees with i risultati: i cui risultati.' } },
    ],
    storyIds: ['st-b1-34'],
    vocabKeys: ["w:B1:l'associazione", 'w:B1:lo scopo', 'w:B1:la ricerca'],
  },
  'chi-quello-che-cio-che': {
    rule: {
      bn: 'chi = "যে কেউ / যারা" (সর্বদা ৩য় পুরুষ একবচন ক্রিয়া নেয়); quello che / ciò che = "যা কিছু" (বাক্যের শুরুতে বা মাঝখানে বসতে পারে)।',
      en: 'chi ("whoever / those who") always takes a singular verb; quello che and ciò che mean "what / that which".',
    },
    commonMistakes: [
      { wrong: 'Chi hanno finito possono uscire.', right: 'Chi ha finito può uscire.', note: { bn: 'chi-এর পর সর্বদা একবচন ক্রিয়া বসে।', en: 'chi is always grammatically singular.' } },
    ],
    examples: [
      { it: 'Ciò che mi preoccupa di più è lo spreco delle risorse naturali.', tr: { bn: 'যা আমাকে সবচেয়ে বেশি ভাবায় তা হলো প্রাকৃতিক সম্পদের অপচয়।', en: 'What worries me most is the waste of natural resources.' } },
    ],
    exercises: [
      { id: 'ex-b1-cqc-1', prompt: { bn: 'শূন্যস্থান পূরণ করুন:', en: 'Complete:' }, it: '___ usa i mezzi pubblici aiuta a ridurre l’inquinamento.', options: ['Quello che', 'Chi', 'Cui', 'Quale'], answer: 1, explanation: { bn: 'যে ব্যক্তি = Chi + একবচন ক্রিয়া।', en: 'Whoever/Anyone who = Chi.' } },
    ],
    storyIds: ['st-b1-35'],
    vocabKeys: ['w:B1:lo spreco', 'w:B1:le risorse', 'w:B1:ridurre'],
  },
  'connettivi-causali-b1': {
    rule: {
      bn: 'বাক্যের শুরুতে কারণ উপস্থাপন করতে siccome, dato che, visto che বা poiché ব্যবহৃত হয়; আর কারণটি শ্রোতার কাছে নতুন হলে বাক্যের দ্বিতীয় অংশে perché বা poiché বসে।',
      en: 'Open causal clauses with siccome, dato che, or visto che ("since / given that").',
    },
    commonMistakes: [
      { wrong: 'Perché pioveva, non siamo usciti.', right: 'Siccome / Dato che pioveva, non siamo usciti.', note: { bn: 'বাক্যের শুরুতে কারণ বলতে Perché না বসিয়ে Siccome / Dato che বসানো স্বাভাবিক।', en: 'At the start of a sentence, use Siccome or Dato che rather than Perché.' } },
    ],
    examples: [
      { it: 'Visto che il centro storico è chiuso al traffico, prendiamo la metro.', tr: { bn: 'যেহেতু পুরোনো শহরে গাড়ি চলাচল বন্ধ, চলো মেট্রো নিই।', en: 'Since the historic centre is closed to traffic, let’s take the metro.' } },
    ],
    exercises: [
      { id: 'ex-b1-ccb-1', prompt: { bn: 'বাক্যের শুরুতে কারণ:', en: 'Opening causal connector:' }, it: '___ mancava un documento, ho dovuto fissare un nuovo appuntamento.', options: ['Siccome', 'Tuttavia', 'Affinché', 'Sebbene'], answer: 0, explanation: { bn: 'Siccome = যেহেতু।', en: 'Siccome = since / as.' } },
    ],
    storyIds: ['st-b1-36'],
    vocabKeys: ['w:B1:siccome', 'w:B1:dato che', 'w:B1:il centro storico'],
  },
  'connettivi-concessivi-b1': {
    rule: {
      bn: 'benché, sebbene, nonostante (che), malgrado (che) + congiuntivo; কিন্তু anche se + indicativo। আর nonostante/malgrado + বিশেষ্য পদে কোনো ক্রিয়ার দরকার হয় না।',
      en: 'benché and sebbene require the subjunctive; anche se takes the indicative; nonostante/malgrado can also precede a noun directly.',
    },
    commonMistakes: [
      { wrong: 'Benché faceva freddo, siamo usciti.', right: 'Benché facesse freddo, siamo usciti.', note: { bn: 'benché-র পরে সর্বদা congiuntivo (facesse) বসে।', en: 'benché requires the subjunctive facesse.' } },
    ],
    examples: [
      { it: 'Sebbene il mercato del lavoro sia competitivo, chi ha competenze trova posto.', tr: { bn: 'শ্রমবাজার প্রতিযোগিতাপূর্ণ হলেও যাদের দক্ষতা আছে তারা কাজ পায়।', en: 'Although the job market is competitive, those with skills find a place.' } },
    ],
    exercises: [
      { id: 'ex-b1-cco-1', prompt: { bn: 'সঠিক রূপ বেছে নিন:', en: 'Pick the right verb:' }, it: 'Benché ___ molto stanco, ha finito di scrivere la tesi.', options: ['era', 'fosse', 'sarà', 'è stato'], answer: 1, explanation: { bn: 'Benché + অতীত প্রেক্ষাপটে fosse।', en: 'Benché takes imperfect subjunctive fosse.' } },
    ],
    storyIds: ['st-b1-37'],
    vocabKeys: ['w:B1:sebbene', 'w:B1:benché', 'w:B1:la competenza'],
  },
  'connettivi-finali-condizionali': {
    rule: {
      bn: 'উদ্দেশ্য বোঝাতে affinché / perché + congiuntivo ("যাতে"); আর শর্ত বোঝাতে purché / a patto che / qualora + congiuntivo ("এই শর্তে যে / যদি")।',
      en: 'Use affinché + subjunctive for purpose ("so that") and purché / a patto che / qualora + subjunctive for conditions.',
    },
    commonMistakes: [
      { wrong: 'Te lo presto purché me lo restituisci domani.', right: 'Te lo presto purché tu me lo restituisca domani.', note: { bn: 'purché-র পরে congiuntivo (restituisca) বসে।', en: 'purché triggers the subjunctive restituisca.' } },
    ],
    examples: [
      { it: 'Il comune ha creato uno sportello unico affinché i cittadini risparmino tempo.', tr: { bn: 'নাগরিকদের সময় বাঁচাতে পৌরসভা একটি সমন্বিত কাউন্টার তৈরি করেছে।', en: 'The municipality created a one-stop desk so that citizens save time.' } },
    ],
    exercises: [
      { id: 'ex-b1-cfc-1', prompt: { bn: '"এই শর্তে যে":', en: '"Provided that":' }, it: 'Accetto il trasferimento ___ l’azienda paghi l’alloggio.', options: ['siccome', 'purché', 'perciò', 'inoltre'], answer: 1, explanation: { bn: 'purché + congiuntivo = এই শর্তে যে।', en: 'purché + subjunctive = provided that.' } },
    ],
    storyIds: ['st-b1-38'],
    vocabKeys: ['w:B1:affinché', 'w:B1:purché', 'w:B1:lo sportello unico'],
  },
  'comparativi-proporzionali': {
    rule: {
      bn: 'দুটি বিষয়ের সমান্তরাল বৃদ্ধি বা হ্রাস বোঝাতে Più… (e) più… অথবা Meno… (e) meno… বসে: Più si legge, più si arricchisce il vocabolario।',
      en: 'Correlative comparisons use Più… più… or Meno… meno… ("the more… the more…").',
    },
    commonMistakes: [
      { wrong: 'Il più studio, il più imparo.', right: 'Più studio, più imparo.', note: { bn: 'ইংরেজির মতো আগে আর্টিকেল il বসে না; সরাসরি Più... più... বসে।', en: 'Do not place a definite article before più in proportional comparisons.' } },
    ],
    examples: [
      { it: 'Più conosco la cultura italiana, più mi sento integrato nella comunità.', tr: { bn: 'ইতালীয় সংস্কৃতি যত চিনছি, সম্প্রদায়ে তত বেশি নিজের জায়গা খুঁজে পাচ্ছি।', en: 'The more I get to know Italian culture, the more integrated I feel in the community.' } },
    ],
    exercises: [
      { id: 'ex-b1-cpr-1', prompt: { bn: 'আনুপাতিক তুলনা:', en: 'Proportional comparison:' }, it: '___ ci alleniamo con costanza, ___ migliorano i risultati.', options: ['Il più / il più', 'Più / più', 'Tanto / di', 'Come / così'], answer: 1, explanation: { bn: 'Più … più … (আর্টিকেল ছাড়া)।', en: 'Più … più … without articles.' } },
    ],
    storyIds: ['st-b1-39'],
    vocabKeys: ["w:B1:l'integrazione", 'w:B1:la comunità', 'w:B1:allenarsi'],
  },
  'indefiniti-negativi-b1': {
    rule: {
      bn: 'chiunque (যে কেউ), qualunque / qualsiasi + একবচন বিশেষ্য (যেকোনো); এদের পর ক্রিয়া এলে congiuntivo বসে: Qualsiasi decisione tu prenda, ti sosterrò।',
      en: 'chiunque and qualunque/qualsiasi (+ singular noun) take the subjunctive in relative clauses.',
    },
    commonMistakes: [
      { wrong: 'Qualsiasi problemi hai, chiamami.', right: 'Qualsiasi problema tu abbia, chiamami.', note: { bn: 'qualsiasi-র পর একবচন বিশেষ্য ও congiuntivo বসে।', en: 'qualsiasi takes a singular noun and the subjunctive.' } },
    ],
    examples: [
      { it: 'Chiunque voglia partecipare al volontariato può iscriversi online.', tr: { bn: 'যে কেউ স্বেচ্ছাসেবায় অংশ নিতে চাইলে অনলাইনে নাম লেখাতে পারে।', en: 'Anyone who wishes to take part in volunteering can register online.' } },
    ],
    exercises: [
      { id: 'ex-b1-inb-1', prompt: { bn: 'সঠিক রূপ:', en: 'Pick the right form:' }, it: 'Qualunque cosa ___, mantieni sempre la calma.', options: ['succede', 'succeda', 'succederà', 'è successo'], answer: 1, explanation: { bn: 'ব্যাকরণ সূত্র: Qualunque cosa + congiuntivo (succeda) — Qualunque cosa এর পরে সাবজাংক্টিভ রূপ ব্যবহৃত হয় succeda।', en: 'Qualunque cosa triggers the subjunctive succeda.' } },
    ],
    storyIds: ['st-b1-40'],
    vocabKeys: ['w:B1:il volontariato', 'w:B1:la calma', 'w:B1:sostenere'],
  },
  'modali-condizionale-passato': {
    rule: {
      bn: 'অতীতে করণীয় ছিল বা সম্ভব ছিল কিন্তু হয়নি বোঝাতে avrei/sarei dovuto, potuto, voluto + infinito: Avresti dovuto avvertirmi prima! Saremmo potuti partire insieme।',
      en: 'Past conditional of dovere, potere, volere + infinitive expresses unfulfilled past obligation, possibility, or wish.',
    },
    commonMistakes: [
      { wrong: 'Dovrei studiato di più ieri.', right: 'Avrei dovuto studiare di più ieri.', note: { bn: 'অতীতের অনুশোচনায় avrei dovuto + infinito বসে।', en: 'Use avrei dovuto + infinitive for past regret.' } },
    ],
    examples: [
      { it: 'Avremmo dovuto confrontare più preventivi prima di scegliere.', tr: { bn: 'বেছে নেওয়ার আগে আমাদের আরও কয়েকটি কোটেশন তুলনা করা উচিত ছিল।', en: 'We should have compared more quotes before choosing.' } },
    ],
    exercises: [
      { id: 'ex-b1-mcp-1', prompt: { bn: '"তোমার আগে বলা উচিত ছিল":', en: '"You should have warned me":' }, it: '___ avvertirmi prima della scadenza!', options: ['Avresti dovuto', 'Dovresti aver', 'Avevi dovuto', 'Sarai dovuto'], answer: 0, explanation: { bn: 'ব্যাকরণগত গঠন: এখানে «Avresti dovuto + infinito» কাঠামোটি অনুসরণ করা হয়েছে।', en: 'Avresti dovuto + infinitive.' } },
    ],
    storyIds: ['st-b1-41'],
    vocabKeys: ['w:B1:avvertire', 'w:B1:confrontare', 'w:B1:il preventivo'],
  },
  'registro-formale-b1': {
    rule: {
      bn: 'দাপ্তরিক যোগাযোগে Lei-এর প্রত্যক্ষ সর্বনাম La এবং পরোক্ষ সর্বনাম Le (সর্বদা বড় হাতের অক্ষরে বা আনুষ্ঠানিক ক্রিয়ায়): La ringrazio, Le scrivo in merito a…, Resto in attesa di un Suo riscontro।',
      en: 'Formal written Italian uses Gentile/Egregio, formal pronouns La (direct) and Le (indirect), and standard closings.',
    },
    commonMistakes: [
      { wrong: 'Gentile Direttore, Ti scrivo per...', right: 'Gentile Direttore, Le scrivo per...', note: { bn: 'আনুষ্ঠানিক চিঠিতে Ti নয়, Le বসে।', en: 'Use formal Le ("to You"), never informal Ti.' } },
    ],
    examples: [
      { it: 'Gentile Dottoressa, Le invio in allegato la ricevuta digitale del pagamento.', tr: { bn: 'মাননীয় ডক্টর, সংযুক্তিতে আপনাকে পেমেন্টের ডিজিটাল রসিদ পাঠাচ্ছি।', en: 'Dear Doctor, attached I send you the digital payment receipt.' } },
    ],
    exercises: [
      { id: 'ex-b1-rf-1', prompt: { bn: 'আনুষ্ঠানিক ধন্যবাদ:', en: 'Formal thank-you:' }, it: '___ ringrazio anticipatamente per la Sua cortese collaborazione.', options: ['Ti', 'Le', 'La', 'Vi'], answer: 2, explanation: { bn: 'ringraziare সরাসরি কর্ম নেয় → La ringrazio।', en: 'ringraziare is transitive, taking direct formal pronoun La.' } },
    ],
    storyIds: ['st-b1-42'],
    vocabKeys: ["w:B1:l'allegato", 'w:B1:la ricevuta digitale', 'w:B1:la collaborazione'],
  },
};
