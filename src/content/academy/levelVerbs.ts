import type { AcademyCollocationItem, AcademyVerbEntry } from './types';

export const A2_ACADEMY_VERBS: AcademyVerbEntry[] = [
  {
    id: 'verb-a2-essere',
    level: 'A2',
    infinitive: 'essere',
    meaning: { bn: 'হওয়া / থাকা', en: 'to be' },
    category: { bn: 'সহায়ক ও মৌলিক ক্রিয়া', en: 'Auxiliary & core' },
    irregular: true,
    usageNote: {
      bn: 'অতীতে নিজেই নিজের সহায়ক (sono stato/a); অসম্পূর্ণ অতীতে ero, ভবিষ্যতে sarò, ভদ্র অনুরোধ বা ইচ্ছায় sarei।',
      en: 'Takes essere as its own auxiliary (sono stato/a); irregular across imperfect, future, and conditional.',
    },
    conjugations: [
      { id: 'pp', tense: { bn: 'নিকট অতীত (Passato prossimo)', en: 'Passato prossimo' }, forms: ['sono stato/a', 'sei stato/a', 'è stato/a', 'siamo stati/e', 'siete stati/e', 'sono stati/e'] },
      { id: 'imp', tense: { bn: 'অসম্পূর্ণ অতীত (Imperfetto)', en: 'Imperfetto' }, forms: ['ero', 'eri', 'era', 'eravamo', 'eravate', 'erano'] },
      { id: 'fut', tense: { bn: 'ভবিষ্যৎ (Futuro semplice)', en: 'Futuro semplice' }, forms: ['sarò', 'sarai', 'sarà', 'saremo', 'sarete', 'saranno'] },
      { id: 'cond', tense: { bn: 'কন্ডিশনাল (Condizionale)', en: 'Condizionale presente' }, forms: ['sarei', 'saresti', 'sarebbe', 'saremmo', 'sareste', 'sarebbero'] },
    ],
    examples: [
      { it: 'Ieri sono stato al comune tutto il pomeriggio.', tr: { bn: 'গতকাল বিকেল জুড়ে আমি পৌরসভায় ছিলাম।', en: 'Yesterday I was at the town hall all afternoon.' } },
      { it: 'Da bambino ero molto timido.', tr: { bn: 'ছোটবেলায় আমি খুব লাজুক ছিলাম।', en: 'As a child I was very shy.' } },
    ],
  },
  {
    id: 'verb-a2-avere',
    level: 'A2',
    infinitive: 'avere',
    meaning: { bn: 'থাকা / পাওয়া', en: 'to have' },
    category: { bn: 'সহায়ক ও মৌলিক ক্রিয়া', en: 'Auxiliary & core' },
    irregular: true,
    usageNote: {
      bn: 'অতীতে ho avuto; অসম্পূর্ণ অতীতে নিয়মিত (avevo); ভবিষ্যতে ও কন্ডিশনালে মূলের স্বর উঠে যায় (avrò, avrei)।',
      en: 'Passato prossimo uses avere (ho avuto); drops the thematic vowel in future (avrò) and conditional (avrei).',
    },
    conjugations: [
      { id: 'pp', tense: { bn: 'নিকট অতীত (Passato prossimo)', en: 'Passato prossimo' }, forms: ['ho avuto', 'hai avuto', 'ha avuto', 'abbiamo avuto', 'avete avuto', 'hanno avuto'] },
      { id: 'imp', tense: { bn: 'অসম্পূর্ণ অতীত (Imperfetto)', en: 'Imperfetto' }, forms: ['avevo', 'avevi', 'aveva', 'avevamo', 'avevate', 'avevano'] },
      { id: 'fut', tense: { bn: 'ভবিষ্যৎ (Futuro semplice)', en: 'Futuro semplice' }, forms: ['avrò', 'avrai', 'avrà', 'avremo', 'avrete', 'avranno'] },
      { id: 'cond', tense: { bn: 'কন্ডিশনাল (Condizionale)', en: 'Condizionale presente' }, forms: ['avrei', 'avresti', 'avrebbe', 'avremmo', 'avreste', 'avrebbero'] },
    ],
    examples: [
      { it: 'Avrei bisogno di un appuntamento per giovedì.', tr: { bn: 'বৃহস্পতিবারের জন্য আমার একটি অ্যাপয়েন্টমেন্ট দরকার।', en: 'I would need an appointment for Thursday.' } },
      { it: 'L’anno scorso avevo meno tempo libero.', tr: { bn: 'গত বছর আমার অবসর সময় কম ছিল।', en: 'Last year I had less free time.' } },
    ],
  },
  {
    id: 'verb-a2-andare',
    level: 'A2',
    infinitive: 'andare',
    meaning: { bn: 'যাওয়া', en: 'to go' },
    category: { bn: 'গতির ক্রিয়া (essere)', en: 'Motion verb (essere)' },
    irregular: true,
    usageNote: {
      bn: 'গতির ক্রিয়া হওয়ায় অতীতে essere নেয় (sono andato/a)। ভবিষ্যতে ও কন্ডিশনালে andrò, andrei হয়।',
      en: 'Takes essere in compound tenses with gender/number agreement; irregular future stem andr-.',
    },
    conjugations: [
      { id: 'pp', tense: { bn: 'নিকট অতীত (Passato prossimo)', en: 'Passato prossimo' }, forms: ['sono andato/a', 'sei andato/a', 'è andato/a', 'siamo andati/e', 'siete andati/e', 'sono andati/e'] },
      { id: 'imp', tense: { bn: 'অসম্পূর্ণ অতীত (Imperfetto)', en: 'Imperfetto' }, forms: ['andavo', 'andavi', 'andava', 'andavamo', 'andavate', 'andavano'] },
      { id: 'fut', tense: { bn: 'ভবিষ্যৎ (Futuro semplice)', en: 'Futuro semplice' }, forms: ['andrò', 'andrai', 'andrà', 'andremo', 'andrete', 'andranno'] },
      { id: 'cond', tense: { bn: 'কন্ডিশনাল (Condizionale)', en: 'Condizionale presente' }, forms: ['andrei', 'andresti', 'andrebbe', 'andremmo', 'andreste', 'andrebbero'] },
    ],
    examples: [
      { it: 'Domenica scorsa siamo andati al lago.', tr: { bn: 'গত রবিবার আমরা হ্রদে গিয়েছিলাম।', en: 'Last Sunday we went to the lake.' } },
      { it: 'Domani andrò alla stazione alle otto.', tr: { bn: 'আগামীকাল আটটায় আমি স্টেশনে যাব।', en: 'Tomorrow I will go to the station at eight.' } },
    ],
  },
  {
    id: 'verb-a2-venire',
    level: 'A2',
    infinitive: 'venire',
    meaning: { bn: 'আসা', en: 'to come' },
    category: { bn: 'গতির ক্রিয়া (essere)', en: 'Motion verb (essere)' },
    irregular: true,
    usageNote: {
      bn: 'পাস্ট পার্টিসিপল venuto ও সহায়ক essere; ভবিষ্যৎ ও কন্ডিশনালে দ্বিত্ব r আসে: verrò, verrei।',
      en: 'Past participle venuto with essere; doubled rr in future (verrò) and conditional (verrei).',
    },
    conjugations: [
      { id: 'pp', tense: { bn: 'নিকট অতীত (Passato prossimo)', en: 'Passato prossimo' }, forms: ['sono venuto/a', 'sei venuto/a', 'è venuto/a', 'siamo venuti/e', 'siete venuti/e', 'sono venuti/e'] },
      { id: 'imp', tense: { bn: 'অসম্পূর্ণ অতীত (Imperfetto)', en: 'Imperfetto' }, forms: ['venivo', 'venivi', 'veniva', 'venivamo', 'venivate', 'venivano'] },
      { id: 'fut', tense: { bn: 'ভবিষ্যৎ (Futuro semplice)', en: 'Futuro semplice' }, forms: ['verrò', 'verrai', 'verrà', 'verremo', 'verrete', 'verranno'] },
      { id: 'cond', tense: { bn: 'কন্ডিশনাল (Condizionale)', en: 'Condizionale presente' }, forms: ['verrei', 'verresti', 'verrebbe', 'verremmo', 'verreste', 'verrebbero'] },
    ],
    examples: [
      { it: 'Mia sorella è venuta a trovarmi a Milano.', tr: { bn: 'আমার বোন মিলানে আমাকে দেখতে এসেছিল।', en: 'My sister came to visit me in Milan.' } },
      { it: 'Verrei volentieri alla cena di sabato.', tr: { bn: 'শনিবারের ডিনারে আমি আনন্দের সাথে আসতাম।', en: 'I would gladly come to Saturday’s dinner.' } },
    ],
  },
  {
    id: 'verb-a2-fare',
    level: 'A2',
    infinitive: 'fare',
    meaning: { bn: 'করা / বানানো', en: 'to do / to make' },
    category: { bn: 'অনিয়মিত কর্মবাচ্য ক্রিয়া', en: 'Irregular transitive' },
    irregular: true,
    usageNote: {
      bn: 'লাতিন facere থেকে আসায় imperfetto-তে facevo এবং পাস্ট পার্টিসিপল fatto হয়। ভবিষ্যতে farò।',
      en: 'Imperfect uses the historical stem face- (facevo); irregular past participle fatto.',
    },
    conjugations: [
      { id: 'pp', tense: { bn: 'নিকট অতীত (Passato prossimo)', en: 'Passato prossimo' }, forms: ['ho fatto', 'hai fatto', 'ha fatto', 'abbiamo fatto', 'avete fatto', 'hanno fatto'] },
      { id: 'imp', tense: { bn: 'অসম্পূর্ণ অতীত (Imperfetto)', en: 'Imperfetto' }, forms: ['facevo', 'facevi', 'faceva', 'facevamo', 'facevate', 'facevano'] },
      { id: 'fut', tense: { bn: 'ভবিষ্যৎ (Futuro semplice)', en: 'Futuro semplice' }, forms: ['farò', 'farai', 'farà', 'faremo', 'farete', 'faranno'] },
      { id: 'cond', tense: { bn: 'কন্ডিশনাল (Condizionale)', en: 'Condizionale presente' }, forms: ['farei', 'faresti', 'farebbe', 'faremmo', 'fareste', 'farebbero'] },
    ],
    examples: [
      { it: 'Abbiamo fatto la domanda per il permesso.', tr: { bn: 'আমরা অনুমতির জন্য আবেদন করেছি।', en: 'We submitted the application for the permit.' } },
      { it: 'Da ragazzi facevamo sport ogni sera.', tr: { bn: 'কিশোর বয়সে আমরা প্রতি সন্ধ্যায় খেলাধুলা করতাম।', en: 'As teenagers we played sports every evening.' } },
    ],
  },
  {
    id: 'verb-a2-dire',
    level: 'A2',
    infinitive: 'dire',
    meaning: { bn: 'বলা', en: 'to say / to tell' },
    category: { bn: 'অনিয়মিত ক্রিয়া', en: 'Irregular verb' },
    irregular: true,
    usageNote: {
      bn: 'পাস্ট পার্টিসিপল detto; imperfetto-তে dicevo; tu অনুজ্ঞা-রূপ হলো di’!',
      en: 'Past participle detto, imperfect stem dice-, irregular tu imperative di’.',
    },
    conjugations: [
      { id: 'pp', tense: { bn: 'নিকট অতীত (Passato prossimo)', en: 'Passato prossimo' }, forms: ['ho detto', 'hai detto', 'ha detto', 'abbiamo detto', 'avete detto', 'hanno detto'] },
      { id: 'imp', tense: { bn: 'অসম্পূর্ণ অতীত (Imperfetto)', en: 'Imperfetto' }, forms: ['dicevo', 'dicevi', 'diceva', 'dicevamo', 'dicevate', 'dicevano'] },
      { id: 'fut', tense: { bn: 'ভবিষ্যৎ (Futuro semplice)', en: 'Futuro semplice' }, forms: ['dirò', 'dirai', 'dirà', 'diremo', 'direte', 'diranno'] },
    ],
    examples: [
      { it: 'Il medico mi ha detto di riposare.', tr: { bn: 'ডাক্তার আমাকে বিশ্রাম নিতে বলেছেন।', en: 'The doctor told me to rest.' } },
      { it: 'Mia nonna diceva sempre la verità.', tr: { bn: 'আমার দাদি সবসময় সত্য বলতেন।', en: 'My grandmother always told the truth.' } },
    ],
  },
  {
    id: 'verb-a2-prendere',
    level: 'A2',
    infinitive: 'prendere',
    meaning: { bn: 'নেওয়া / ধরা', en: 'to take / to catch' },
    category: { bn: 'অনিয়মিত পার্টিসিপল', en: 'Irregular participle' },
    irregular: true,
    usageNote: {
      bn: 'অনিয়মিত পার্টিসিপল preso (ho preso); ভ্রমণ, খাবার ও সিদ্ধান্ত নেওয়ায় প্রচুর ব্যবহৃত হয়।',
      en: 'Irregular past participle preso; essential for transport, ordering food, and decisions.',
    },
    conjugations: [
      { id: 'pp', tense: { bn: 'নিকট অতীত (Passato prossimo)', en: 'Passato prossimo' }, forms: ['ho preso', 'hai preso', 'ha preso', 'abbiamo preso', 'avete preso', 'hanno preso'] },
      { id: 'imp', tense: { bn: 'অসম্পূর্ণ অতীত (Imperfetto)', en: 'Imperfetto' }, forms: ['prendevo', 'prendevi', 'prendeva', 'prendevamo', 'prendevate', 'prendevano'] },
      { id: 'fut', tense: { bn: 'ভবিষ্যৎ (Futuro semplice)', en: 'Futuro semplice' }, forms: ['prenderò', 'prenderai', 'prenderà', 'prenderemo', 'prenderete', 'prenderanno'] },
    ],
    examples: [
      { it: 'Ho preso il treno regionale delle sette.', tr: { bn: 'আমি সাতটার লোকাল ট্রেন ধরেছি।', en: 'I caught the seven o’clock regional train.' } },
    ],
  },
  {
    id: 'verb-a2-leggere',
    level: 'A2',
    infinitive: 'leggere',
    meaning: { bn: 'পড়া', en: 'to read' },
    category: { bn: 'অনিয়মিত পার্টিসিপল', en: 'Irregular participle' },
    irregular: true,
    usageNote: {
      bn: 'পাস্ট পার্টিসিপল letto (অনেকে ভুল করে legguto লেখেন না)। পরের রূপগুলো নিয়মিত।',
      en: 'Irregular past participle letto; imperfect and future stems follow regular -ere patterns.',
    },
    conjugations: [
      { id: 'pp', tense: { bn: 'নিকট অতীত (Passato prossimo)', en: 'Passato prossimo' }, forms: ['ho letto', 'hai letto', 'ha letto', 'abbiamo letto', 'avete letto', 'hanno letto'] },
      { id: 'imp', tense: { bn: 'অসম্পূর্ণ অতীত (Imperfetto)', en: 'Imperfetto' }, forms: ['leggevo', 'leggevi', 'leggeva', 'leggevamo', 'leggevate', 'leggevano'] },
      { id: 'fut', tense: { bn: 'ভবিষ্যৎ (Futuro semplice)', en: 'Futuro semplice' }, forms: ['leggerò', 'leggerai', 'leggerà', 'leggeremo', 'leggerete', 'leggeranno'] },
    ],
    examples: [
      { it: 'Ho letto tutto il contratto prima di firmare.', tr: { bn: 'সই করার আগে আমি পুরো চুক্তিটি পড়েছি।', en: 'I read the whole contract before signing.' } },
    ],
  },
  {
    id: 'verb-a2-vedere',
    level: 'A2',
    infinitive: 'vedere',
    meaning: { bn: 'দেখা', en: 'to see' },
    category: { bn: 'অনিয়মিত পার্টিসিপল ও ভবিষ্যৎ', en: 'Irregular participle & future' },
    irregular: true,
    usageNote: {
      bn: 'পার্টিসিপল visto (কদাচিৎ veduto); ভবিষ্যৎ ও কন্ডিশনালে সংক্ষিপ্ত মূল vedrò / vedrei।',
      en: 'Common participle visto; contracted future/conditional stem vedr-.',
    },
    conjugations: [
      { id: 'pp', tense: { bn: 'নিকট অতীত (Passato prossimo)', en: 'Passato prossimo' }, forms: ['ho visto', 'hai visto', 'ha visto', 'abbiamo visto', 'avete visto', 'hanno visto'] },
      { id: 'fut', tense: { bn: 'ভবিষ্যৎ (Futuro semplice)', en: 'Futuro semplice' }, forms: ['vedrò', 'vedrai', 'vedrà', 'vedremo', 'vedrete', 'vedranno'] },
      { id: 'cond', tense: { bn: 'কন্ডিশনাল (Condizionale)', en: 'Condizionale presente' }, forms: ['vedrei', 'vedresti', 'vedrebbe', 'vedremmo', 'vedreste', 'vedrebbero'] },
    ],
    examples: [
      { it: 'Ci vedremo domani davanti alla biblioteca.', tr: { bn: 'আগামীকাল লাইব্রেরির সামনে আমাদের দেখা হবে।', en: 'We will see each other tomorrow in front of the library.' } },
    ],
  },
  {
    id: 'verb-a2-aprire',
    level: 'A2',
    infinitive: 'aprire',
    meaning: { bn: 'খোলা', en: 'to open' },
    category: { bn: 'অনিয়মিত পার্টিসিপল (-to)', en: 'Irregular -to participle' },
    irregular: true,
    usageNote: {
      bn: 'বর্তমান কাল নিয়মিত (apro), কিন্তু পার্টিসিপল aperto (chiudere → chiuso)।',
      en: 'Regular present tense (apro), irregular past participle aperto.',
    },
    conjugations: [
      { id: 'pp', tense: { bn: 'নিকট অতীত (Passato prossimo)', en: 'Passato prossimo' }, forms: ['ho aperto', 'hai aperto', 'ha aperto', 'abbiamo aperto', 'avete aperto', 'hanno aperto'] },
      { id: 'fut', tense: { bn: 'ভবিষ্যৎ (Futuro semplice)', en: 'Futuro semplice' }, forms: ['aprirò', 'aprirai', 'aprirà', 'apriremo', 'aprirete', 'apriranno'] },
    ],
    examples: [
      { it: 'Hanno appena aperto un nuovo ambulatorio.', tr: { bn: 'তারা এইমাত্র একটি নতুন ক্লিনিক খুলেছে।', en: 'They have just opened a new clinic.' } },
    ],
  },
  {
    id: 'verb-a2-potere',
    level: 'A2',
    infinitive: 'potere',
    meaning: { bn: 'পারা (অনুমতি / সামর্থ্য)', en: 'to be able to / can' },
    category: { bn: 'মডাল ক্রিয়া', en: 'Modal verb' },
    irregular: true,
    usageNote: {
      bn: 'ভদ্র অনুরোধে কন্ডিশনাল potrei / potrebbe খুব ব্যবহৃত হয়। অতীতে মূল ক্রিয়ার সহায়ক নিতে পারে।',
      en: 'Conditional forms (potrei, potrebbe) are key for polite requests.',
    },
    conjugations: [
      { id: 'pp', tense: { bn: 'নিকট অতীত (avere)', en: 'Passato prossimo (avere)' }, forms: ['ho potuto', 'hai potuto', 'ha potuto', 'abbiamo potuto', 'avete potuto', 'hanno potuto'] },
      { id: 'fut', tense: { bn: 'ভবিষ্যৎ (Futuro semplice)', en: 'Futuro semplice' }, forms: ['potrò', 'potrai', 'potrà', 'potremo', 'potrete', 'potranno'] },
      { id: 'cond', tense: { bn: 'কন্ডিশনাল (Condizionale)', en: 'Condizionale presente' }, forms: ['potrei', 'potresti', 'potrebbe', 'potremmo', 'potreste', 'potrebbero'] },
    ],
    examples: [
      { it: 'Potrebbe indicarmi lo sportello per i certificati?', tr: { bn: 'আপনি কি আমাকে সনদপত্রের কাউন্টারটি দেখিয়ে দিতে পারবেন?', en: 'Could you point me to the counter for certificates?' } },
    ],
  },
  {
    id: 'verb-a2-volere',
    level: 'A2',
    infinitive: 'volere',
    meaning: { bn: 'চাওয়া', en: 'to want' },
    category: { bn: 'মডাল ক্রিয়া', en: 'Modal verb' },
    irregular: true,
    usageNote: {
      bn: 'ভবিষ্যতে vorrò ও ভদ্র অনুরোধে vorrei হয়। "আমি চাই" বলার চেয়ে "vorrei" বলা অনেক ভদ্র।',
      en: 'Future/conditional double the r (vorrò, vorrei); vorrei is the polite way to order or request.',
    },
    conjugations: [
      { id: 'pp', tense: { bn: 'নিকট অতীত (avere)', en: 'Passato prossimo (avere)' }, forms: ['ho voluto', 'hai voluto', 'ha voluto', 'abbiamo voluto', 'avete voluto', 'hanno voluto'] },
      { id: 'fut', tense: { bn: 'ভবিষ্যৎ (Futuro semplice)', en: 'Futuro semplice' }, forms: ['vorrò', 'vorrai', 'vorrà', 'vorremo', 'vorrete', 'vorranno'] },
      { id: 'cond', tense: { bn: 'কন্ডিশনাল (Condizionale)', en: 'Condizionale presente' }, forms: ['vorrei', 'vorresti', 'vorrebbe', 'vorremmo', 'vorreste', 'vorrebbero'] },
    ],
    examples: [
      { it: 'Vorrei cambiare questo maglione con una taglia più grande.', tr: { bn: 'আমি এই সোয়েটারটি বড় সাইজের সাথে বদলাতে চাই।', en: 'I would like to exchange this sweater for a larger size.' } },
    ],
  },
  {
    id: 'verb-a2-dovere',
    level: 'A2',
    infinitive: 'dovere',
    meaning: { bn: 'বাধ্য থাকা / উচিত হওয়া', en: 'to have to / must / should' },
    category: { bn: 'মডাল ক্রিয়া', en: 'Modal verb' },
    irregular: true,
    usageNote: {
      bn: 'কন্ডিশনালে dovrei / dovresti দিয়ে "করা উচিত" বা ভদ্র পরামর্শ বোঝানো হয়।',
      en: 'Conditional dovrei / dovresti gives advice meaning "should / ought to".',
    },
    conjugations: [
      { id: 'pp', tense: { bn: 'নিকট অতীত (avere)', en: 'Passato prossimo (avere)' }, forms: ['ho dovuto', 'hai dovuto', 'ha dovuto', 'abbiamo dovuto', 'avete dovuto', 'hanno dovuto'] },
      { id: 'fut', tense: { bn: 'ভবিষ্যৎ (Futuro semplice)', en: 'Futuro semplice' }, forms: ['dovrò', 'dovrai', 'dovrà', 'dovremo', 'dovrete', 'dovranno'] },
      { id: 'cond', tense: { bn: 'কন্ডিশনাল (Condizionale)', en: 'Condizionale presente' }, forms: ['dovrei', 'dovresti', 'dovrebbe', 'dovremmo', 'dovreste', 'dovrebbero'] },
    ],
    examples: [
      { it: 'Dovresti riposarti e bere molta acqua calda.', tr: { bn: 'তোমার বিশ্রাম নেওয়া এবং প্রচুর গরম পানি পান করা উচিত।', en: 'You should rest and drink plenty of warm water.' } },
    ],
  },
  {
    id: 'verb-a2-svegliarsi',
    level: 'A2',
    infinitive: 'svegliarsi',
    meaning: { bn: 'ঘুম থেকে ওঠা', en: 'to wake up' },
    category: { bn: 'প্রতিফলক ক্রিয়া (Reflexive)', en: 'Reflexive verb' },
    irregular: false,
    usageNote: {
      bn: 'সব প্রতিফলক ক্রিয়া অতীতে সর্বদা essere নেয় এবং পার্টিসিপল কর্তার সাথে মেলে (mi sono svegliato/a)।',
      en: 'Every reflexive verb requires essere in compound tenses and agrees in gender and number.',
    },
    conjugations: [
      { id: 'pres', tense: { bn: 'বর্তমান (Presente)', en: 'Presente' }, forms: ['mi sveglio', 'ti svegli', 'si sveglia', 'ci svegliamo', 'vi svegliate', 'si svegliano'] },
      { id: 'pp', tense: { bn: 'নিকট অতীত (Passato prossimo)', en: 'Passato prossimo' }, forms: ['mi sono svegliato/a', 'ti sei svegliato/a', 'si è svegliato/a', 'ci siamo svegliati/e', 'vi siete svegliati/e', 'si sono svegliati/e'] },
      { id: 'imp', tense: { bn: 'অসম্পূর্ণ অতীত (Imperfetto)', en: 'Imperfetto' }, forms: ['mi svegliavo', 'ti svegliavi', 'si svegliava', 'ci svegliavamo', 'vi svegliavate', 'si svegliavano'] },
    ],
    examples: [
      { it: 'Stamattina ci siamo svegliati prima dell’alba.', tr: { bn: 'আজ সকালে আমরা ভোরের আগেই ঘুম থেকে উঠেছি।', en: 'This morning we woke up before dawn.' } },
    ],
  },
  {
    id: 'verb-a2-sapere',
    level: 'A2',
    infinitive: 'sapere',
    meaning: { bn: 'জানা (তথ্য বা দক্ষতা)', en: 'to know (fact / skill)' },
    category: { bn: 'জ্ঞান ও দক্ষতা', en: 'Knowledge verb' },
    irregular: true,
    usageNote: {
      bn: 'অতীতে ho saputo মানে সাধারণত "খবরটা জেনেছি / শুনেছি"। ভবিষ্যৎ মূলের -a বাদ যায়: saprò।',
      en: 'In passato prossimo (ho saputo) it often means "I found out". Future drops thematic vowel: saprò.',
    },
    conjugations: [
      { id: 'pres', tense: { bn: 'বর্তমান (Presente)', en: 'Presente' }, forms: ['so', 'sai', 'sa', 'sappiamo', 'sapete', 'sanno'] },
      { id: 'pp', tense: { bn: 'নিকট অতীত (Passato prossimo)', en: 'Passato prossimo' }, forms: ['ho saputo', 'hai saputo', 'ha saputo', 'abbiamo saputo', 'avete saputo', 'hanno saputo'] },
      { id: 'fut', tense: { bn: 'ভবিষ্যৎ (Futuro semplice)', en: 'Futuro semplice' }, forms: ['saprò', 'saprai', 'saprà', 'sapremo', 'saprete', 'sapranno'] },
    ],
    examples: [
      { it: 'Ieri ho saputo che l’ufficio sarà chiuso venerdì.', tr: { bn: 'গতকাল জেনেছি যে শুক্রবার অফিস বন্ধ থাকবে।', en: 'Yesterday I found out the office will be closed on Friday.' } },
    ],
  },
  {
    id: 'verb-a2-conoscere',
    level: 'A2',
    infinitive: 'conoscere',
    meaning: { bn: 'চেনা / পরিচিত হওয়া', en: 'to know / meet (person, place)' },
    category: { bn: 'পরিচিতি ও সম্পর্ক', en: 'Acquaintance verb' },
    irregular: false,
    usageNote: {
      bn: 'মানুষ বা স্থানের জন্য conoscere। অতীতে ho conosciuto মানে "প্রথমবার দেখা/পরিচিত হওয়া"।',
      en: 'Used with people, cities, or works; ho conosciuto means "I met / got to know for the first time".',
    },
    conjugations: [
      { id: 'pres', tense: { bn: 'বর্তমান (Presente)', en: 'Presente' }, forms: ['conosco', 'conosci', 'conosce', 'conosciamo', 'conoscete', 'conoscono'] },
      { id: 'pp', tense: { bn: 'নিকট অতীত (Passato prossimo)', en: 'Passato prossimo' }, forms: ['ho conosciuto', 'hai conosciuto', 'ha conosciuto', 'abbiamo conosciuto', 'avete conosciuto', 'hanno conosciuto'] },
      { id: 'imp', tense: { bn: 'অসম্পূর্ণ অতীত (Imperfetto)', en: 'Imperfetto' }, forms: ['conoscevo', 'conoscevi', 'conosceva', 'conoscevamo', 'conoscevate', 'conoscevano'] },
    ],
    examples: [
      { it: 'Ho conosciuto molti colleghi gentili al corso.', tr: { bn: 'কোর্সে অনেক ভদ্র সহকর্মীর সাথে আমার পরিচয় হয়েছে।', en: 'I met many kind colleagues at the course.' } },
    ],
  },
];

export const B1_ACADEMY_VERBS: AcademyVerbEntry[] = [
  {
    id: 'verb-b1-essere',
    level: 'B1',
    infinitive: 'essere',
    meaning: { bn: 'হওয়া (সাবজাঙ্কটিভ ও অতীত শর্ত)', en: 'to be (subjunctive & past moods)' },
    category: { bn: 'মৌলিক সহায়ক ক্রিয়া', en: 'Core auxiliary' },
    irregular: true,
    usageNote: {
      bn: 'মতামত বা সন্দেহে congiuntivo presente (sia); অবাস্তব বা অতীত ইচ্ছায় congiuntivo imperfetto (fossi)।',
      en: 'Present subjunctive (sia) follows opinion/doubt; imperfect subjunctive (fossi) expresses hypotheticals.',
    },
    conjugations: [
      { id: 'cong-p', tense: { bn: 'সাবজাঙ্কটিভ বর্তমান (Congiuntivo presente)', en: 'Congiuntivo presente' }, forms: ['sia', 'sia', 'sia', 'siamo', 'siate', 'siano'] },
      { id: 'cong-i', tense: { bn: 'সাবজাঙ্কটিভ অতীত (Congiuntivo imperfetto)', en: 'Congiuntivo imperfetto' }, forms: ['fossi', 'fossi', 'fosse', 'fossimo', 'foste', 'fossero'] },
      { id: 'cond-p', tense: { bn: 'অতীত কন্ডিশনাল (Condizionale passato)', en: 'Condizionale passato' }, forms: ['sarei stato/a', 'saresti stato/a', 'sarebbe stato/a', 'saremmo stati/e', 'sareste stati/e', 'sarebbero stati/e'] },
      { id: 'prem', tense: { bn: 'দূরবর্তী অতীত (Passato remoto)', en: 'Passato remoto' }, forms: ['fui', 'fosti', 'fu', 'fummo', 'foste', 'furono'] },
    ],
    examples: [
      { it: 'Penso che questa sia la decisione più equilibrata.', tr: { bn: 'আমার মনে হয় এটিই সবচেয়ে ভারসাম্যপূর্ণ সিদ্ধান্ত।', en: 'I think this is the most balanced decision.' } },
      { it: 'Se fossi al tuo posto, accetterei subito l’offerta.', tr: { bn: 'আমি তোমার জায়গায় হলে প্রস্তাবটি সাথে সাথে গ্রহণ করতাম।', en: 'If I were in your place, I would accept the offer immediately.' } },
    ],
  },
  {
    id: 'verb-b1-avere',
    level: 'B1',
    infinitive: 'avere',
    meaning: { bn: 'থাকা (সাবজাঙ্কটিভ ও শর্ত)', en: 'to have (subjunctive & hypotheticals)' },
    category: { bn: 'মৌলিক সহায়ক ক্রিয়া', en: 'Core auxiliary' },
    irregular: true,
    usageNote: {
      bn: 'যৌগিক সাবজাঙ্কটিভ (abbia + participio) গঠনে এটি অপরিহার্য; যেমন: Spero che tu abbia capito.',
      en: 'Essential auxiliary for past subjunctive (che abbia capito) and past conditional.',
    },
    conjugations: [
      { id: 'cong-p', tense: { bn: 'সাবজাঙ্কটিভ বর্তমান (Congiuntivo presente)', en: 'Congiuntivo presente' }, forms: ['abbia', 'abbia', 'abbia', 'abbiamo', 'abbiate', 'abbiano'] },
      { id: 'cong-i', tense: { bn: 'সাবজাঙ্কটিভ অতীত (Congiuntivo imperfetto)', en: 'Congiuntivo imperfetto' }, forms: ['avessi', 'avessi', 'avesse', 'avessimo', 'aveste', 'avessero'] },
      { id: 'cond-p', tense: { bn: 'অতীত কন্ডিশনাল (Condizionale passato)', en: 'Condizionale passato' }, forms: ['avrei avuto', 'avresti avuto', 'avrebbe avuto', 'avremmo avuto', 'avreste avuto', 'avrebbero avuto'] },
    ],
    examples: [
      { it: 'Spero che abbiano ricevuto la mia email in tempo.', tr: { bn: 'আশা করি তারা সময়মতো আমার ইমেইল পেয়েছে।', en: 'I hope they received my email in time.' } },
      { it: 'Se avessi avuto più tempo, avrei riletto la relazione.', tr: { bn: 'আরও সময় থাকলে আমি প্রতিবেদনটি আবার পড়তাম।', en: 'If I had had more time, I would have reread the report.' } },
    ],
  },
  {
    id: 'verb-b1-fare',
    level: 'B1',
    infinitive: 'fare',
    meaning: { bn: 'করা / কাউকে দিয়ে করানো (কজেটিভ)', en: 'to do / causative "make do"' },
    category: { bn: 'অনিয়মিত ও কজেটিভ ক্রিয়া', en: 'Irregular & causative' },
    irregular: true,
    usageNote: {
      bn: 'fare + infinito দিয়ে কজেটিভ অর্থ আসে (Ho fatto riparare l’auto); সাবজাঙ্কটিভে faccia, imperfetto-তে facessi।',
      en: 'Used in causative structures (far riparare); subjunctive forms faccia and facessi.',
    },
    conjugations: [
      { id: 'cong-p', tense: { bn: 'সাবজাঙ্কটিভ বর্তমান (Congiuntivo presente)', en: 'Congiuntivo presente' }, forms: ['faccia', 'faccia', 'faccia', 'facciamo', 'facciate', 'facciano'] },
      { id: 'cong-i', tense: { bn: 'সাবজাঙ্কটিভ অতীত (Congiuntivo imperfetto)', en: 'Congiuntivo imperfetto' }, forms: ['facessi', 'facessi', 'facesse', 'facessimo', 'faceste', 'facessero'] },
      { id: 'prem', tense: { bn: 'দূরবর্তী অতীত (Passato remoto)', en: 'Passato remoto' }, forms: ['feci', 'facesti', 'fece', 'facemmo', 'faceste', 'fecero'] },
    ],
    examples: [
      { it: 'Bisogna che facciamo attenzione ai dettagli del contratto.', tr: { bn: 'চুক্তির খুঁটিনাটি বিষয়ে আমাদের মনোযোগ দেওয়া জরুরি।', en: 'It is necessary that we pay attention to the contract details.' } },
    ],
  },
  {
    id: 'verb-b1-andare',
    level: 'B1',
    infinitive: 'andare',
    meaning: { bn: 'যাওয়া / প্যাসিভ বাধ্যবাধকতা', en: 'to go / passive necessity' },
    category: { bn: 'গতি ও বাচ্য সহায়ক', en: 'Motion & passive auxiliary' },
    irregular: true,
    usageNote: {
      bn: 'B1 স্তরে andare + পাস্ট পার্টিসিপল "করা উচিত / প্রাপ্য" বোঝায় (Questo documento va firmato)।',
      en: 'At B1, andare + past participle expresses obligation (Va firmato = must be signed).',
    },
    conjugations: [
      { id: 'cong-p', tense: { bn: 'সাবজাঙ্কটিভ বর্তমান (Congiuntivo presente)', en: 'Congiuntivo presente' }, forms: ['vada', 'vada', 'vada', 'andiamo', 'andiate', 'vadano'] },
      { id: 'cong-i', tense: { bn: 'সাবজাঙ্কটিভ অতীত (Congiuntivo imperfetto)', en: 'Congiuntivo imperfetto' }, forms: ['andassi', 'andassi', 'andasse', 'andassimo', 'andaste', 'andassero'] },
      { id: 'trap', tense: { bn: 'পুরাঘটিত অতীত (Trapassato prossimo)', en: 'Trapassato prossimo' }, forms: ['ero andato/a', 'eri andato/a', 'era andato/a', 'eravamo andati/e', 'eravate andati/e', 'erano andati/e'] },
    ],
    examples: [
      { it: 'Non credo che lui vada alla riunione senza preparazione.', tr: { bn: 'আমার মনে হয় না সে প্রস্তুতি ছাড়া মিটিংয়ে যাবে।', en: 'I don’t think he will go to the meeting without preparation.' } },
    ],
  },
  {
    id: 'verb-b1-stare',
    level: 'B1',
    infinitive: 'stare',
    meaning: { bn: 'থাকা / অবস্থান করা', en: 'to stay / be' },
    category: { bn: 'অবস্থা ও বাচ্য ক্রিয়া', en: 'Stative verb' },
    irregular: true,
    usageNote: {
      bn: 'লক্ষ্য করুন: সাবজাঙ্কটিভ অতীতে stia নয় বরং stassi হয় (a-মূল), আর সাথে stetti হয় দূরবর্তী অতীতে।',
      en: 'Present subjunctive stia; imperfect subjunctive stassi (not *stessi); passato remoto stetti.',
    },
    conjugations: [
      { id: 'cong-p', tense: { bn: 'সাবজাঙ্কটিভ বর্তমান (Congiuntivo presente)', en: 'Congiuntivo presente' }, forms: ['stia', 'stia', 'stia', 'stiamo', 'stiate', 'stiano'] },
      { id: 'cong-i', tense: { bn: 'সাবজাঙ্কটিভ অতীত (Congiuntivo imperfetto)', en: 'Congiuntivo imperfetto' }, forms: ['stessi', 'stessi', 'stesse', 'stessimo', 'steste', 'stessero'] },
      { id: 'prem', tense: { bn: 'দূরবর্তী অতীত (Passato remoto)', en: 'Passato remoto' }, forms: ['stetti', 'stesti', 'stette', 'stemmo', 'steste', 'stettero'] },
    ],
    examples: [
      { it: 'Preferirei che tu stessi più tranquillo durante il colloquio.', tr: { bn: 'সাক্ষাৎকারের সময় তুমি আরও শান্ত থাকো তা আমি চাইব।', en: 'I would prefer you stayed calmer during the interview.' } },
    ],
  },
  {
    id: 'verb-b1-dare',
    level: 'B1',
    infinitive: 'dare',
    meaning: { bn: 'দেওয়া', en: 'to give' },
    category: { bn: 'অনিয়মিত ক্রিয়া', en: 'Irregular verb' },
    irregular: true,
    usageNote: {
      bn: 'সাবজাঙ্কটিভ বর্তমানে dia, কিন্তু সাবজাঙ্কটিভ অতীতে dessi (dessi, desse, dessero) — খুবই সতর্ক থাকুন!',
      en: 'Uses dia in present subjunctive, but dessi/desse in imperfect subjunctive.',
    },
    conjugations: [
      { id: 'cong-p', tense: { bn: 'সাবজাঙ্কটিভ বর্তমান (Congiuntivo presente)', en: 'Congiuntivo presente' }, forms: ['dia', 'dia', 'dia', 'diamo', 'diate', 'diano'] },
      { id: 'cong-i', tense: { bn: 'সাবজাঙ্কটিভ অতীত (Congiuntivo imperfetto)', en: 'Congiuntivo imperfetto' }, forms: ['dessi', 'dessi', 'desse', 'dessimo', 'deste', 'dessero'] },
      { id: 'prem', tense: { bn: 'দূরবর্তী অতীত (Passato remoto)', en: 'Passato remoto' }, forms: ['diedi', 'desti', 'diede', 'demmo', 'deste', 'diedero'] },
    ],
    examples: [
      { it: 'Dubito che il comune ci dia una risposta entro venerdì.', tr: { bn: 'শুক্রবারের মধ্যে পৌরসভা আমাদের উত্তর দেবে বলে সন্দেহ আছে।', en: 'I doubt the town hall will give us an answer by Friday.' } },
    ],
  },
  {
    id: 'verb-b1-dire',
    level: 'B1',
    infinitive: 'dire',
    meaning: { bn: 'বলা / পরোক্ষ উক্তি', en: 'to say / report' },
    category: { bn: 'পরোক্ষ উক্তির প্রধান ক্রিয়া', en: 'Reported speech verb' },
    irregular: true,
    usageNote: {
      bn: 'dica (সাবজাঙ্কটিভ বর্তমান) ও dicessi (সাবজাঙ্কটিভ অতীত); ঐতিহাসিক কাহিনীতে disse ব্যবহৃত হয়।',
      en: 'Takes stem dic- for subjunctives (dica, dicessi) and diss- for passato remoto (dissi/disse).',
    },
    conjugations: [
      { id: 'cong-p', tense: { bn: 'সাবজাঙ্কটিভ বর্তমান (Congiuntivo presente)', en: 'Congiuntivo presente' }, forms: ['dica', 'dica', 'dica', 'diciamo', 'diciate', 'dicano'] },
      { id: 'cong-i', tense: { bn: 'সাবজাঙ্কটিভ অতীত (Congiuntivo imperfetto)', en: 'Congiuntivo imperfetto' }, forms: ['dicessi', 'dicessi', 'dicesse', 'dicessimo', 'diceste', 'dicessero'] },
      { id: 'prem', tense: { bn: 'দূরবর্তী অতীত (Passato remoto)', en: 'Passato remoto' }, forms: ['dissi', 'dicesti', 'disse', 'dicemmo', 'diceste', 'dissero'] },
    ],
    examples: [
      { it: 'Qualunque cosa dicano i giornali, verifichiamo le fonti.', tr: { bn: 'সংবাদপত্র যা-ই বলুক না কেন, চলো সূত্র যাচাই করি।', en: 'Whatever the newspapers say, let’s verify the sources.' } },
    ],
  },
  {
    id: 'verb-b1-venire',
    level: 'B1',
    infinitive: 'venire',
    meaning: { bn: 'আসা / প্যাসিভ রূপে হওয়া', en: 'to come / dynamic passive auxiliary' },
    category: { bn: 'গতি ও গতিশীল প্যাসিভ', en: 'Motion & dynamic passive' },
    irregular: true,
    usageNote: {
      bn: 'সরল কালে venire + পাস্ট পার্টিসিপল "হয়ে থাকে" (প্যাসিভ প্রক্রিয়া) বোঝায়: La legge viene approvata.',
      en: 'Replaces essere in simple-tense passives to highlight ongoing action (viene approvata).',
    },
    conjugations: [
      { id: 'cong-p', tense: { bn: 'সাবজাঙ্কটিভ বর্তমান (Congiuntivo presente)', en: 'Congiuntivo presente' }, forms: ['venga', 'venga', 'venga', 'veniamo', 'veniate', 'vengano'] },
      { id: 'cong-i', tense: { bn: 'সাবজাঙ্কটিভ অতীত (Congiuntivo imperfetto)', en: 'Congiuntivo imperfetto' }, forms: ['venissi', 'venissi', 'venisse', 'venissimo', 'veniste', 'venissero'] },
      { id: 'prem', tense: { bn: 'দূরবর্তী অতীত (Passato remoto)', en: 'Passato remoto' }, forms: ['venni', 'venisti', 'venne', 'venimmo', 'veniste', 'vennero'] },
    ],
    examples: [
      { it: 'Senza il tuo aiuto, il progetto non sarebbe venuto bene.', tr: { bn: 'তোমার সাহায্য ছাড়া প্রকল্পটি ভালো হতো না।', en: 'Without your help, the project would not have turned out well.' } },
    ],
  },
  {
    id: 'verb-b1-sapere',
    level: 'B1',
    infinitive: 'sapere',
    meaning: { bn: 'জানা', en: 'to know' },
    category: { bn: 'মতামত ও নিশ্চয়তা ক্রিয়া', en: 'Cognition verb' },
    irregular: true,
    usageNote: {
      bn: 'না-বাচক বাক্যে (Non so se sappia...) সাবজাঙ্কটিভ বসে; দূরবর্তী অতীতে seppi ("জানতে পারলাম")।',
      en: 'Negative certainty triggers subjunctive (sappia); passato remoto seppi expresses sudden discovery.',
    },
    conjugations: [
      { id: 'cong-p', tense: { bn: 'সাবজাঙ্কটিভ বর্তমান (Congiuntivo presente)', en: 'Congiuntivo presente' }, forms: ['sappia', 'sappia', 'sappia', 'sappiamo', 'sappiate', 'sappiano'] },
      { id: 'cong-i', tense: { bn: 'সাবজাঙ্কটিভ অতীত (Congiuntivo imperfetto)', en: 'Congiuntivo imperfetto' }, forms: ['sapessi', 'sapessi', 'sapesse', 'sapessimo', 'sapeste', 'sapessero'] },
      { id: 'prem', tense: { bn: 'দূরবর্তী অতীত (Passato remoto)', en: 'Passato remoto' }, forms: ['seppi', 'sapesti', 'seppe', 'sapemmo', 'sapeste', 'seppero'] },
    ],
    examples: [
      { it: 'Sebbene tutti sappiano le regole, pochi le rispettano.', tr: { bn: 'যদিও সবাই নিয়ম জানে, তবু খুব কম লোক তা মেনে চলে।', en: 'Although everyone knows the rules, few respect them.' } },
    ],
  },
  {
    id: 'verb-b1-volere',
    level: 'B1',
    infinitive: 'volere',
    meaning: { bn: 'চাওয়া / ইচ্ছা প্রকাশ', en: 'to want' },
    category: { bn: 'ইচ্ছাবাচক মডাল', en: 'Volitional modal' },
    irregular: true,
    usageNote: {
      bn: 'ভবিষ্যৎ অতীত ও কন্ডিশনাল অতীতে "চাইতাম কিন্তু হয়নি" (avrei voluto) খুব প্রচলিত।',
      en: 'Past conditional (avrei voluto) expresses unfulfilled wishes from the past.',
    },
    conjugations: [
      { id: 'cong-p', tense: { bn: 'সাবজাঙ্কটিভ বর্তমান (Congiuntivo presente)', en: 'Congiuntivo presente' }, forms: ['voglia', 'voglia', 'voglia', 'vogliamo', 'vogliate', 'vogliano'] },
      { id: 'cong-i', tense: { bn: 'সাবজাঙ্কটিভ অতীত (Congiuntivo imperfetto)', en: 'Congiuntivo imperfetto' }, forms: ['volessi', 'volessi', 'volesse', 'volessimo', 'voleste', 'volessero'] },
      { id: 'cond-p', tense: { bn: 'অতীত কন্ডিশনাল (Condizionale passato)', en: 'Condizionale passato' }, forms: ['avrei voluto', 'avresti voluto', 'avrebbe voluto', 'avremmo voluto', 'avreste voluto', 'avrebbero voluto'] },
    ],
    examples: [
      { it: 'Avrei voluto studiare architettura, ma poi ho scelto economia.', tr: { bn: 'আমি স্থাপত্য পড়তে চেয়েছিলাম, কিন্তু পরে অর্থনীতি বেছে নিয়েছি।', en: 'I would have liked to study architecture, but then I chose economics.' } },
    ],
  },
  {
    id: 'verb-b1-potere',
    level: 'B1',
    infinitive: 'potere',
    meaning: { bn: 'সম্ভাবনা ও সামর্থ্য', en: 'to be able to' },
    category: { bn: 'মডাল ক্রিয়া', en: 'Modal verb' },
    irregular: true,
    usageNote: {
      bn: 'সাবজাঙ্কটিভে possa; অতীতে অসম্পূর্ণ সুযোগ বোঝাতে avrei potuto ("পারতাম") বসে।',
      en: 'Present subjunctive possa; past conditional avrei potuto indicates missed ability/opportunity.',
    },
    conjugations: [
      { id: 'cong-p', tense: { bn: 'সাবজাঙ্কটিভ বর্তমান (Congiuntivo presente)', en: 'Congiuntivo presente' }, forms: ['possa', 'possa', 'possa', 'possiamo', 'possiate', 'possano'] },
      { id: 'cong-i', tense: { bn: 'সাবজাঙ্কটিভ অতীত (Congiuntivo imperfetto)', en: 'Congiuntivo imperfetto' }, forms: ['potessi', 'potessi', 'potesse', 'potessimo', 'poteste', 'potessero'] },
      { id: 'cond-p', tense: { bn: 'অতীত কন্ডিশনাল (Condizionale passato)', en: 'Condizionale passato' }, forms: ['avrei potuto', 'avresti potuto', 'avrebbe potuto', 'avremmo potuto', 'avreste potuto', 'avrebbero potuto'] },
    ],
    examples: [
      { it: 'Spero che possiamo collaborare anche il prossimo semestre.', tr: { bn: 'আশা করি আমরা আগামী সেমিস্টারেও একসাথে কাজ করতে পারব।', en: 'I hope we can collaborate next semester as well.' } },
    ],
  },
  {
    id: 'verb-b1-dovere',
    level: 'B1',
    infinitive: 'dovere',
    meaning: { bn: 'বাধ্যবাধকতা ও অনুতাপ', en: 'to have to / should have' },
    category: { bn: 'মডাল ক্রিয়া', en: 'Modal verb' },
    irregular: true,
    usageNote: {
      bn: 'avresti dovuto মানে "তোমার করা উচিত ছিল" (অতীতে কোনো ভুল বা অনুতাপ)। সাবজাঙ্কটিভে debba বা deva।',
      en: 'Past conditional avresti dovuto expresses regret or criticism ("you should have").',
    },
    conjugations: [
      { id: 'cong-p', tense: { bn: 'সাবজাঙ্কটিভ বর্তমান (Congiuntivo presente)', en: 'Congiuntivo presente' }, forms: ['debba', 'debba', 'debba', 'dobbiamo', 'dobbiate', 'debbano'] },
      { id: 'cond-p', tense: { bn: 'অতীত কন্ডিশনাল (Condizionale passato)', en: 'Condizionale passato' }, forms: ['avrei dovuto', 'avresti dovuto', 'avrebbe dovuto', 'avremmo dovuto', 'avreste dovuto', 'avrebbero dovuto'] },
    ],
    examples: [
      { it: 'Avremmo dovuto prenotare il treno con una settimana di anticipo.', tr: { bn: 'আমাদের এক সপ্তাহ আগেই ট্রেন বুক করা উচিত ছিল।', en: 'We should have booked the train a week in advance.' } },
    ],
  },
  {
    id: 'verb-b1-andarsene',
    level: 'B1',
    infinitive: 'andarsene',
    meaning: { bn: 'চলে যাওয়া / প্রস্থান করা', en: 'to leave / go away' },
    category: { bn: 'সর্বনামযুক্ত ক্রিয়া (Pronominal)', en: 'Pronominal verb' },
    irregular: true,
    usageNote: {
      bn: 'mi+ne→me ne, ti+ne→te ne, si+ne→se ne, ci+ne→ce ne। অতীতে সর্বদা essere + লিঙ্গ-বচন মিল।',
      en: 'Combines reflexive pronoun + ne (me ne vado); takes essere in compound tenses (se ne sono andati).',
    },
    conjugations: [
      { id: 'pres', tense: { bn: 'বর্তমান (Presente)', en: 'Presente' }, forms: ['me ne vado', 'te ne vai', 'se ne va', 'ce ne andiamo', 've ne andate', 'se ne vanno'] },
      { id: 'pp', tense: { bn: 'নিকট অতীত (Passato prossimo)', en: 'Passato prossimo' }, forms: ['me ne sono andato/a', 'te ne sei andato/a', 'se n’è andato/a', 'ce ne siamo andati/e', 've ne siete andati/e', 'se ne sono andati/e'] },
    ],
    examples: [
      { it: 'Appena è finito l’evento, molti ospiti se ne sono andati.', tr: { bn: 'অনুষ্ঠান শেষ হতেই অনেক অতিথি চলে গেলেন।', en: 'As soon as the event ended, many guests left.' } },
    ],
  },
  {
    id: 'verb-b1-farcela',
    level: 'B1',
    infinitive: 'farcela',
    meaning: { bn: 'সামলে ওঠা / সফল হওয়া', en: 'to manage / succeed / cope' },
    category: { bn: 'সর্বনামযুক্ত ক্রিয়া (Pronominal)', en: 'Pronominal verb' },
    irregular: true,
    usageNote: {
      bn: 'ci + la → ce la। অতীতে পার্টিসিপল স্ত্রীলিঙ্গ একবচন -a থাকে: ce l’ho fatta, non ce l’ha fatta।',
      en: 'Combines ce + la; past participle always agrees with feminine la: ce l’ho fatta!',
    },
    conjugations: [
      { id: 'pres', tense: { bn: 'বর্তমান (Presente)', en: 'Presente' }, forms: ['ce la faccio', 'ce la fai', 'ce la fa', 'ce la facciamo', 'ce la fate', 'ce la fanno'] },
      { id: 'pp', tense: { bn: 'নিকট অতীত (Passato prossimo)', en: 'Passato prossimo' }, forms: ['ce l’ho fatta', 'ce l’hai fatta', 'ce l’ha fatta', 'ce l’abbiamo fatta', 'ce l’avete fatta', 'ce l’hanno fatta'] },
      { id: 'fut', tense: { bn: 'ভবিষ্যৎ (Futuro)', en: 'Futuro' }, forms: ['ce la farò', 'ce la farai', 'ce la farà', 'ce la faremo', 'ce la farete', 'ce la faranno'] },
    ],
    examples: [
      { it: 'Nonostante tutte le difficoltà, alla fine ce l’abbiamo fatta!', tr: { bn: 'সব বাধা সত্ত্বেও শেষ পর্যন্ত আমরা পেরেছি!', en: 'Despite all the difficulties, in the end we made it!' } },
    ],
  },
];

export const B2_ACADEMY_VERBS: AcademyVerbEntry[] = [
  {
    id: 'verb-b2-porre',
    level: 'B2',
    infinitive: 'porre',
    meaning: { bn: 'স্থাপন করা / উত্থাপন করা (প্রশ্ন/ভিত্তি)', en: 'to place / pose (a question / basis)' },
    category: { bn: 'লাতিন -ponere বর্গীয় ক্রিয়া', en: '-ponere irregular class' },
    irregular: true,
    usageNote: {
      bn: 'মূল ধাতু pon- (pongo, ponevo, ponessi); দূরবর্তী অতীত posi / pose; পার্টিসিপল posto। proporre, disporre, opporre একই নিয়মে চলে।',
      en: 'Follows -ponere conjugation (pongo, posi, posto); model for proporre, disporre, supporre.',
    },
    conjugations: [
      { id: 'pres', tense: { bn: 'বর্তমান (Presente)', en: 'Presente' }, forms: ['pongo', 'poni', 'pone', 'poniamo', 'ponete', 'pongono'] },
      { id: 'prem', tense: { bn: 'দূরবর্তী অতীত (Passato remoto)', en: 'Passato remoto' }, forms: ['posi', 'ponesti', 'pose', 'ponemmo', 'poneste', 'posero'] },
      { id: 'cong-i', tense: { bn: 'সাবজাঙ্কটিভ অতীত (Cong. imperfetto)', en: 'Congiuntivo imperfetto' }, forms: ['ponessi', 'ponessi', 'ponesse', 'ponessimo', 'poneste', 'ponessero'] },
    ],
    examples: [
      { it: 'L’Assemblea pose le basi costituzionali della Repubblica.', tr: { bn: 'গণপরিষদ প্রজাতন্ত্রের সাংবিধানিক ভিত্তি স্থাপন করেছিল।', en: 'The Assembly laid the constitutional foundations of the Republic.' } },
    ],
  },
  {
    id: 'verb-b2-condurre',
    level: 'B2',
    infinitive: 'condurre',
    meaning: { bn: 'পরিচালনা করা / নেতৃত্ব দেওয়া', en: 'to lead / conduct' },
    category: { bn: '-durre বর্গীয় ক্রিয়া', en: '-durre irregular class' },
    irregular: true,
    usageNote: {
      bn: 'produrre, ridurre, tradurre, introdurre সব একই নিয়ম মেনে চলে: মূলে duc-, পার্টিসিপল condotto।',
      en: 'Model for produrre, ridurre, tradurre: stem conduc-, passato remoto condussi, participle condotto.',
    },
    conjugations: [
      { id: 'pres', tense: { bn: 'বর্তমান (Presente)', en: 'Presente' }, forms: ['conduco', 'conduci', 'conduce', 'conduciamo', 'conducete', 'conducono'] },
      { id: 'prem', tense: { bn: 'দূরবর্তী অতীত (Passato remoto)', en: 'Passato remoto' }, forms: ['condussi', 'conducesti', 'condusse', 'conducemmo', 'conduceste', 'condussero'] },
      { id: 'cong-p', tense: { bn: 'সাবজাঙ্কটিভ বর্তমান (Cong. presente)', en: 'Congiuntivo presente' }, forms: ['conduca', 'conduca', 'conduca', 'conduciamo', 'conduciate', 'conducano'] },
    ],
    examples: [
      { it: 'Il team condusse un’indagine empirica su larga scala.', tr: { bn: 'দলটি বৃহৎ পরিসরে একটি অভিজ্ঞতামূলক গবেষণা পরিচালনা করেছিল।', en: 'The team conducted a large-scale empirical study.' } },
    ],
  },
  {
    id: 'verb-b2-scegliere',
    level: 'B2',
    infinitive: 'scegliere',
    meaning: { bn: 'বেছে নেওয়া / নির্বাচন করা', en: 'to choose / select' },
    category: { bn: 'ধ্বনি-পরিবর্তনশীল ক্রিয়া (-gl-/-lg-)', en: 'Alternating stem (-gl-/-lg-)' },
    irregular: true,
    usageNote: {
      bn: 'io/loro ও সাবজাঙ্কটিভ বর্তমানে scelgo / scelga; দূরবর্তী অতীত scelsi; পার্টিসিপল scelto।',
      en: 'Stem alternates scelg-/scegl-; passato remoto scelsi, past participle scelto.',
    },
    conjugations: [
      { id: 'pres', tense: { bn: 'বর্তমান (Presente)', en: 'Presente' }, forms: ['scelgo', 'scegli', 'sceglie', 'scegliamo', 'scegliete', 'scelgono'] },
      { id: 'cong-p', tense: { bn: 'সাবজাঙ্কটিভ বর্তমান (Cong. presente)', en: 'Congiuntivo presente' }, forms: ['scelga', 'scelga', 'scelga', 'scegliamo', 'scegliate', 'scelgano'] },
      { id: 'prem', tense: { bn: 'দূরবর্তী অতীত (Passato remoto)', en: 'Passato remoto' }, forms: ['scelsi', 'scegliesti', 'scelse', 'scegliemmo', 'sceglieste', 'scelsero'] },
    ],
    examples: [
      { it: 'Qualunque opzione scelga la commissione, occorre trasparenza.', tr: { bn: 'কমিশন যে বিকল্পই বেছে নিক না কেন, স্বচ্ছতা প্রয়োজন।', en: 'Whichever option the committee chooses, transparency is needed.' } },
    ],
  },
  {
    id: 'verb-b2-togliere',
    level: 'B2',
    infinitive: 'togliere',
    meaning: { bn: 'সরিয়ে নেওয়া / বাতিল করা', en: 'to remove / take away' },
    category: { bn: 'ধ্বনি-পরিবর্তনশীল ক্রিয়া', en: 'Alternating stem' },
    irregular: true,
    usageNote: {
      bn: 'tolgo, tolsi, tolto; আনুষ্ঠানিক লেখায় "বাধা দূর করা" অর্থে togliere বা rimuovere ব্যবহৃত হয়।',
      en: 'Follows tolgo / tolsi / tolto pattern alongside cogliere and sciogliere.',
    },
    conjugations: [
      { id: 'pres', tense: { bn: 'বর্তমান (Presente)', en: 'Presente' }, forms: ['tolgo', 'togli', 'toglie', 'togliamo', 'togliete', 'tolgono'] },
      { id: 'prem', tense: { bn: 'দূরবর্তী অতীত (Passato remoto)', en: 'Passato remoto' }, forms: ['tolsi', 'togliesti', 'tolse', 'togliemmo', 'toglieste', 'tolsero'] },
    ],
    examples: [
      { it: 'La riforma tolse alcuni vincoli burocratici superflui.', tr: { bn: 'সংস্কারটি কিছু অপ্রয়োজনীয় আমলাতান্ত্রিক বাধা দূর করেছিল।', en: 'The reform removed several unnecessary bureaucratic constraints.' } },
    ],
  },
  {
    id: 'verb-b2-valere',
    level: 'B2',
    infinitive: 'valere',
    meaning: { bn: 'মূল্যবান হওয়া / প্রযোজ্য হওয়া', en: 'to be worth / hold true' },
    category: { bn: 'অনিয়মিত উচ্চতর ক্রিয়া', en: 'High-register irregular' },
    irregular: true,
    usageNote: {
      bn: 'যুক্তিতর্কে "এই নিয়ম এখনো খাটে" অর্থে valere (valga, valse, valso) ও "সার্থক হওয়া" (valerne la pena) ব্যবহৃত হয়।',
      en: 'Common in debate ("this principle holds"); subjunctive valga, passato remoto valsi.',
    },
    conjugations: [
      { id: 'pres', tense: { bn: 'বর্তমান (Presente)', en: 'Presente' }, forms: ['valgo', 'vali', 'vale', 'valiamo', 'valete', 'valgono'] },
      { id: 'cong-p', tense: { bn: 'সাবজাঙ্কটিভ বর্তমান (Cong. presente)', en: 'Congiuntivo presente' }, forms: ['valga', 'valga', 'valga', 'valiamo', 'valiate', 'valgano'] },
      { id: 'prem', tense: { bn: 'দূরবর্তী অতীত (Passato remoto)', en: 'Passato remoto' }, forms: ['valsi', 'valesti', 'valse', 'valemmo', 'valeste', 'valsero'] },
    ],
    examples: [
      { it: 'Non credo che quell’eccezione valga nel diritto amministrativo.', tr: { bn: 'প্রশাসনিক আইনে ওই ব্যতিক্রমটি প্রযোজ্য বলে মনে হয় না।', en: 'I don’t think that exception holds in administrative law.' } },
    ],
  },
  {
    id: 'verb-b2-rimanere',
    level: 'B2',
    infinitive: 'rimanere',
    meaning: { bn: 'রয়ে যাওয়া / বাকি থাকা', en: 'to remain / stay' },
    category: { bn: 'essere সহায়ক অনিয়মিত', en: 'Essere irregular' },
    irregular: true,
    usageNote: {
      bn: 'পার্টিসিপল rimasto (essere); দূরবর্তী অতীত rimasi; ভবিষ্যৎ ও কন্ডিশনালে rima- থেকে rimarrò / rimarrei।',
      en: 'Irregular participle rimasto, passato remoto rimasi, future rimarrò.',
    },
    conjugations: [
      { id: 'cong-p', tense: { bn: 'সাবজাঙ্কটিভ বর্তমান (Cong. presente)', en: 'Congiuntivo presente' }, forms: ['rimanga', 'rimanga', 'rimanga', 'rimaniamo', 'rimaniate', 'rimangano'] },
      { id: 'prem', tense: { bn: 'দূরবর্তী অতীত (Passato remoto)', en: 'Passato remoto' }, forms: ['rimasi', 'rimanesti', 'rimase', 'rimanemmo', 'rimaneste', 'rimasero'] },
    ],
    examples: [
      { it: 'Qualora rimanessero dubbi, si prega di consultare l’allegato.', tr: { bn: 'যদি কোনো সন্দেহ থেকে থাকে, তবে সংযুক্তিটি দেখার অনুরোধ রইল।', en: 'Should any doubts remain, please consult the attachment.' } },
    ],
  },
  {
    id: 'verb-b2-cogliere',
    level: 'B2',
    infinitive: 'cogliere',
    meaning: { bn: 'আহরণ করা / উপলব্ধি বা সুযোগ ধরা', en: 'to grasp / seize / gather' },
    category: { bn: 'ধ্বনি-পরিবর্তনশীল ক্রিয়া', en: 'Alternating stem' },
    irregular: true,
    usageNote: {
      bn: 'সূক্ষ্ম অর্থ বা সুযোগ বোঝাতে cogliere una sfumatura / un’opportunità খুব প্রাঞ্জল ব্যবহার।',
      en: 'Frequent in B2 discourse: cogliere una sfumatura (grasp a nuance), cogliere l’occasione.',
    },
    conjugations: [
      { id: 'pres', tense: { bn: 'বর্তমান (Presente)', en: 'Presente' }, forms: ['colgo', 'cogli', 'coglie', 'cogliamo', 'cogliete', 'colgono'] },
      { id: 'prem', tense: { bn: 'দূরবর্তী অতীত (Passato remoto)', en: 'Passato remoto' }, forms: ['colsi', 'cogliesti', 'colse', 'cogliemmo', 'coglieste', 'colsero'] },
    ],
    examples: [
      { it: 'L’analisi colse subito il nodo centrale della controversia.', tr: { bn: 'বিশ্লেষণটি দ্রুতই বিতর্কের মূল কেন্দ্রবিন্দু ধরতে পেরেছিল।', en: 'The analysis immediately grasped the core of the controversy.' } },
    ],
  },
  {
    id: 'verb-b2-spingere',
    level: 'B2',
    infinitive: 'spingere',
    meaning: { bn: 'ধাক্কা দেওয়া / অনুপ্রাণিত করা', en: 'to push / prompt / drive' },
    category: { bn: '-ngere বর্গীয় ক্রিয়া', en: '-ngere class' },
    irregular: true,
    usageNote: {
      bn: 'spinsi, spinto (dipingere, raggiungere, fingere একই নিয়ম অনুসরণ করে)।',
      en: 'Participle spinto, passato remoto spinsi — shared by raggiungere, dipingere, fingere.',
    },
    conjugations: [
      { id: 'pres', tense: { bn: 'বর্তমান (Presente)', en: 'Presente' }, forms: ['spingo', 'spingi', 'spinge', 'spingiamo', 'spingete', 'spingono'] },
      { id: 'prem', tense: { bn: 'দূরবর্তী অতীত (Passato remoto)', en: 'Passato remoto' }, forms: ['spinsi', 'spingesti', 'spinse', 'spingemmo', 'spingeste', 'spinsero'] },
    ],
    examples: [
      { it: 'I costi energetici spinsero le imprese a investire nel solare.', tr: { bn: 'জ্বালানি ব্যয় প্রতিষ্ঠানগুলোকে সৌরবিদ্যুতে বিনিয়োগে উৎসাহিত করেছিল।', en: 'Energy costs pushed companies to invest in solar power.' } },
    ],
  },
  {
    id: 'verb-b2-cavarsela',
    level: 'B2',
    infinitive: 'cavarsela',
    meaning: { bn: 'কঠিন পরিস্থিতি সামলে নেওয়া', en: 'to manage / get by' },
    category: { bn: 'প্রোকমপ্লিমেন্টারি ক্রিয়া', en: 'Procomplementari verb' },
    irregular: false,
    usageNote: {
      bn: 'si + la → se la। অতীতে: me la sono cavata! ("আমি কোনোভাবে সামলে নিয়েছি!")।',
      en: 'Combines reflexive + la; compound past agrees feminine singular (-a): ce la siamo cavata.',
    },
    conjugations: [
      { id: 'pres', tense: { bn: 'বর্তমান (Presente)', en: 'Presente' }, forms: ['me la cavo', 'te la cavi', 'se la cava', 'ce la caviamo', 've la cavate', 'se la cavano'] },
      { id: 'pp', tense: { bn: 'নিকট অতীত (Passato prossimo)', en: 'Passato prossimo' }, forms: ['me la sono cavata', 'te la sei cavata', 'se l’è cavata', 'ce la siamo cavata', 've la siete cavata', 'se la sono cavata'] },
    ],
    examples: [
      { it: 'Nonostante l’imprevisto tecnico, i relatori se la sono cavata benissimo.', tr: { bn: 'যান্ত্রিক ত্রুটি সত্ত্বেও বক্তারা খুব সুন্দরভাবে সামলে নিয়েছেন।', en: 'Despite the technical glitch, the speakers managed really well.' } },
    ],
  },
  {
    id: 'verb-b2-rimetterci',
    level: 'B2',
    infinitive: 'rimetterci',
    meaning: { bn: 'ক্ষতিগ্রস্ত হওয়া (সময়/অর্থ/স্বাস্থ্য)', en: 'to lose out (money, time, health)' },
    category: { bn: 'প্রোকমপ্লিমেন্টারি ক্রিয়া', en: 'Procomplementari verb' },
    irregular: true,
    usageNote: {
      bn: 'অতীতে অর্থবদল ঘটে: ci ho rimesso (avere নেয়), পার্টিসিপল rimesso। অর্থ: নিজে ক্ষতি স্বীকার করা।',
      en: 'Uses avere with clitic ci (ci ho rimesso), meaning to suffer a loss or pay the price.',
    },
    conjugations: [
      { id: 'pres', tense: { bn: 'বর্তমান (Presente)', en: 'Presente' }, forms: ['ci rimetto', 'ci rimetti', 'ci rimette', 'ci rimettiamo', 'ci rimettete', 'ci rimettono'] },
      { id: 'pp', tense: { bn: 'নিকট অতীত (Passato prossimo)', en: 'Passato prossimo' }, forms: ['ci ho rimesso', 'ci hai rimesso', 'ci ha rimesso', 'ci abbiamo rimesso', 'ci avete rimesso', 'ci hanno rimesso'] },
    ],
    examples: [
      { it: 'Senza tutele chiare, a rimetterci sono sempre i consumatori.', tr: { bn: 'স্পষ্ট সুরক্ষা না থাকলে শেষমেশ ভোক্তাদেরই ক্ষতি হয়।', en: 'Without clear safeguards, consumers are always the ones who lose out.' } },
    ],
  },
  {
    id: 'verb-b2-starci',
    level: 'B2',
    infinitive: 'starci',
    meaning: { bn: 'একমত হওয়া / জায়গামতো আঁটা', en: 'to agree / be up for it / fit' },
    category: { bn: 'প্রোকমপ্লিমেন্টারি ক্রিয়া', en: 'Procomplementari verb' },
    irregular: true,
    usageNote: {
      bn: 'Ci stai? ("তুমি কি রাজি?") অথবা Non ci sta più nulla ("আর কোনো জায়গা নেই")।',
      en: 'Idiomatic for agreeing to a proposal (Ci sto!) as well as physical capacity.',
    },
    conjugations: [
      { id: 'pres', tense: { bn: 'বর্তমান (Presente)', en: 'Presente' }, forms: ['ci sto', 'ci stai', 'ci sta', 'ci stiamo', 'ci state', 'ci stanno'] },
      { id: 'pp', tense: { bn: 'নিকট অতীত (Passato prossimo)', en: 'Passato prossimo' }, forms: ['ci sono stato/a', 'ci sei stato/a', 'ci è stato/a', 'ci siamo stati/e', 'ci siete stati/e', 'ci sono stati/e'] },
    ],
    examples: [
      { it: 'Se dividiamo equamente i compiti, io ci sto senz’altro.', tr: { bn: 'আমরা যদি কাজ সমানভাবে ভাগ করে নিই, আমি অবশ্যই রাজি।', en: 'If we divide the tasks fairly, I’m definitely in.' } },
    ],
  },
  {
    id: 'verb-b2-piantarla',
    level: 'B2',
    infinitive: 'piantarla',
    meaning: { bn: 'বন্ধ করা / থামানো (বিরক্তিকর কিছু)', en: 'to stop doing something (colloquial)' },
    category: { bn: 'কথ্য প্রোকমপ্লিমেন্টারি', en: 'Colloquial procomplementari' },
    irregular: false,
    usageNote: {
      bn: 'প্রায়ই অনুজ্ঞা রূপে ব্যবহৃত হয়: Piantala di lamentarti! ("অভিযোগ করা থামাও!")।',
      en: 'Frequently heard in imperatives: Piantala! / Piantatela di discutere!',
    },
    conjugations: [
      { id: 'pres', tense: { bn: 'বর্তমান (Presente)', en: 'Presente' }, forms: ['la pianto', 'la pianti', 'la pianta', 'la piantiamo', 'la piantate', 'la piantano'] },
      { id: 'impv', tense: { bn: 'অনুজ্ঞা (Imperativo)', en: 'Imperativo' }, forms: ['—', 'piantala!', 'la pianti!', 'piantiamola!', 'piantatela!', 'la piantino!'] },
    ],
    examples: [
      { it: 'Sarebbe ora che la piantassero con le polemiche sterili.', tr: { bn: 'এখন সময় হয়েছে তাদের এই নিষ্ফল বিতর্ক থামানোর।', en: 'It would be high time they stopped with the sterile polemics.' } },
    ],
  },
  {
    id: 'verb-b2-venirne-fuori',
    level: 'B2',
    infinitive: 'venirne fuori',
    meaning: { bn: 'জটিল পরিস্থিতি থেকে বেরিয়ে আসা', en: 'to get out of / come through a mess' },
    category: { bn: 'প্রোকমপ্লিমেন্টারি ক্রিয়া', en: 'Procomplementari verb' },
    irregular: true,
    usageNote: {
      bn: 'অর্থে সংকট উত্তরণ বা সমাধান খুঁজে পাওয়া: Non riusciamo a venirne fuori.',
      en: 'Idiomatic for finding a way out of a deadlock or crisis; takes essere in past.',
    },
    conjugations: [
      { id: 'pres', tense: { bn: 'বর্তমান (Presente)', en: 'Presente' }, forms: ['ne vengo fuori', 'ne vieni fuori', 'ne viene fuori', 'ne veniamo fuori', 'ne venite fuori', 'ne vengono fuori'] },
      { id: 'pp', tense: { bn: 'নিকট অতীত (Passato prossimo)', en: 'Passato prossimo' }, forms: ['ne sono venuto/a fuori', 'ne sei venuto/a fuori', 'ne è venuto/a fuori', 'ne siamo venuti/e fuori', 'ne siete venuti/e fuori', 'ne sono venuti/e fuori'] },
    ],
    examples: [
      { it: 'Solo con il dialogo trasparente ne verremo fuori.', tr: { bn: 'কেবল স্বচ্ছ সংলাপের মাধ্যমেই আমরা এই অবস্থা থেকে বের হতে পারব।', en: 'Only through transparent dialogue will we come out of this.' } },
    ],
  },
  {
    id: 'verb-b2-risolversi',
    level: 'B2',
    infinitive: 'risolversi',
    meaning: { bn: 'সমাধান হওয়া / চূড়ান্ত রূপ নেওয়া', en: 'to resolve itself / turn into' },
    category: { bn: 'প্রাতিষ্ঠানিক ও উচ্চতর ক্রিয়া', en: 'Formal reflexive' },
    irregular: true,
    usageNote: {
      bn: 'অতীত পার্টিসিপল risolto (essere সহ); প্রবন্ধ ও প্রতিবেদনে বহুল ব্যবহৃত।',
      en: 'Past participle risolto; frequent in reports and argumentative essays.',
    },
    conjugations: [
      { id: 'cong-p', tense: { bn: 'সাবজাঙ্কটিভ বর্তমান (Cong. presente)', en: 'Congiuntivo presente' }, forms: ['mi risolva', 'ti risolva', 'si risolva', 'ci risolviamo', 'vi risolviate', 'si risolvano'] },
      { id: 'pp', tense: { bn: 'নিকট অতীত (Passato prossimo)', en: 'Passato prossimo' }, forms: ['mi sono risolto/a', 'ti sei risolto/a', 'si è risolto/a', 'ci siamo risolti/e', 'vi siete risolti/e', 'si sono risolti/e'] },
    ],
    examples: [
      { it: 'Ci si augura che la vertenza si risolva mediante mediazione.', tr: { bn: 'আশা করা যায় মধ্যস্থতার মাধ্যমে বিরোধটির সমাধান হবে।', en: 'It is hoped that the dispute will be resolved through mediation.' } },
    ],
  },
];

export const B2_COLLOCATIONS: AcademyCollocationItem[] = [
  {
    id: 'b2-col-1',
    level: 'B2',
    it: 'prendere atto di',
    tr: { bn: 'আনুষ্ঠানিকভাবে কোনো তথ্য বা বাস্তবতা স্বীকার/লিপিবদ্ধ করা', en: 'to take note of / formally acknowledge' },
    register: 'formal',
    exampleIt: 'Il consiglio ha preso atto delle dimissioni del direttore.',
    exampleTr: { bn: 'পরিষদ পরিচালকের পদত্যাগের বিষয়টি আনুষ্ঠানিকভাবে নথিভুক্ত করেছে।', en: 'The board took formal note of the director’s resignation.' },
  },
  {
    id: 'b2-col-2',
    level: 'B2',
    it: 'fare il punto della situazione',
    tr: { bn: 'বর্তমান পরিস্থিতির সামগ্রিক পর্যালোচনা করা', en: 'to take stock / review the situation' },
    register: 'academic',
    exampleIt: 'Prima di procedere, facciamo il punto della situazione.',
    exampleTr: { bn: 'এগোনোর আগে চলুন বর্তমান পরিস্থিতির সামগ্রিক পর্যালোচনা করি।', en: 'Before proceeding, let us review the current situation.' },
  },
  {
    id: 'b2-col-3',
    level: 'B2',
    it: 'venire incontro a',
    tr: { bn: 'কারও প্রয়োজনের সাথে মানিয়ে নেওয়া / সহায়তা করা', en: 'to accommodate / meet halfway' },
    register: 'idiomatic',
    exampleIt: 'L’azienda è venuta incontro alle esigenze dei lavoratori.',
    exampleTr: { bn: 'প্রতিষ্ঠানটি কর্মীদের চাহিদার প্রতি সহানুভূতিশীল হয়ে সহযোগিতা করেছে।', en: 'The company accommodated the workers’ needs.' },
  },
  {
    id: 'b2-col-4',
    level: 'B2',
    it: 'mettere in luce',
    tr: { bn: 'আলো ফেলা / কোনো বিষয় স্পষ্টভাবে তুলে ধরা', en: 'to bring to light / highlight' },
    register: 'academic',
    exampleIt: 'Lo studio mette in luce le disuguaglianze territoriali.',
    exampleTr: { bn: 'গবেষণাটি আঞ্চলিক বৈষম্যগুলো স্পষ্টভাবে তুলে ধরে।', en: 'The study highlights territorial inequalities.' },
  },
  {
    id: 'b2-col-5',
    level: 'B2',
    it: 'tenere conto di',
    tr: { bn: 'বিবেচনায় নেওয়া', en: 'to take into account' },
    register: 'formal',
    exampleIt: 'Occorre tenere conto di tutte le variabili economiche.',
    exampleTr: { bn: 'সব অর্থনৈতিক চলক বিবেচনায় নেওয়া প্রয়োজন।', en: 'It is necessary to take all economic variables into account.' },
  },
  {
    id: 'b2-col-6',
    level: 'B2',
    it: 'a prescindere da',
    tr: { bn: 'কোনো কিছু নির্বিশেষে / বাদ দিয়ে', en: 'regardless of / irrespective of' },
    register: 'formal',
    exampleIt: 'I diritti vanno garantiti a prescindere dal reddito.',
    exampleTr: { bn: 'আয় নির্বিশেষে অধিকারগুলো নিশ্চিত করতে হবে।', en: 'Rights must be guaranteed regardless of income.' },
  },
  {
    id: 'b2-col-7',
    level: 'B2',
    it: 'in virtù di',
    tr: { bn: 'কোনো আইন, অধিকার বা গুণের বলে', en: 'by virtue of' },
    register: 'formal',
    exampleIt: 'In virtù del decreto vigente, la misura è immediata.',
    exampleTr: { bn: 'প্রচলিত ডিক্রির বলে পদক্ষেপটি তাৎক্ষণিকভাবে কার্যকর।', en: 'By virtue of the current decree, the measure is immediate.' },
  },
  {
    id: 'b2-col-8',
    level: 'B2',
    it: 'stare al passo con',
    tr: { bn: 'সময়ের সাথে তাল মিলিয়ে চলা', en: 'to keep pace with' },
    register: 'idiomatic',
    exampleIt: 'La formazione continua permette di stare al passo con i tempi.',
    exampleTr: { bn: 'নিরবচ্ছিন্ন প্রশিক্ষণ সময়ের সাথে তাল মিলিয়ে চলতে সাহায্য করে।', en: 'Continuous training allows one to keep pace with the times.' },
  },
  {
    id: 'b2-col-9',
    level: 'B2',
    it: 'fare affidamento su',
    tr: { bn: 'নির্ভর করা / ভরসা রাখা', en: 'to rely / count on' },
    register: 'idiomatic',
    exampleIt: 'Non possiamo fare affidamento solo su stime provvisorie.',
    exampleTr: { bn: 'আমরা কেবল প্রাথমিক অনুমানের ওপর নির্ভর করতে পারি না।', en: 'We cannot rely solely on provisional estimates.' },
  },
  {
    id: 'b2-col-10',
    level: 'B2',
    it: 'avere luogo',
    tr: { bn: 'অনুষ্ঠিত হওয়া / সংঘটিত হওয়া', en: 'to take place' },
    register: 'formal',
    exampleIt: 'L’audizione avrà luogo presso la sede centrale.',
    exampleTr: { bn: 'শুনানিটি কেন্দ্রীয় কার্যালয়ে অনুষ্ঠিত হবে।', en: 'The hearing will take place at headquarters.' },
  },
  {
    id: 'b2-col-11',
    level: 'B2',
    it: 'tagliare la testa al toro',
    tr: { bn: 'সরাসরি ও চূড়ান্ত সিদ্ধান্ত নিয়ে দ্বিধা শেষ করা', en: 'to settle the matter decisively' },
    register: 'idiomatic',
    exampleIt: 'Per tagliare la testa al toro, abbiamo convocato i tecnici.',
    exampleTr: { bn: 'দ্বিধা কাটাতে আমরা সরাসরি প্রকৌশলীদের ডেকে পাঠিয়েছি।', en: 'To settle the matter once and for all, we summoned the technicians.' },
  },
  {
    id: 'b2-col-12',
    level: 'B2',
    it: 'non avere peli sulla lingua',
    tr: { bn: 'রাখঢাক না করে স্পষ্ট ও সোজাসাপ্টা কথা বলা', en: 'to speak bluntly / not mince words' },
    register: 'colloquial',
    exampleIt: 'Nel dibattito la giornalista non ha avuto peli sulla lingua.',
    exampleTr: { bn: 'বিতর্কে সাংবাদিক রাখঢাক না করে স্পষ্ট কথা বলেছেন।', en: 'In the debate the journalist did not mince her words.' },
  },
  {
    id: 'b2-col-13',
    level: 'B2',
    it: 'essere al verde / navigare in cattive acque',
    tr: { bn: 'আর্থিক সংকটে পড়া', en: 'to be broke / in dire financial straits' },
    register: 'idiomatic',
    exampleIt: 'Senza investimenti pubblici, molti enti navigano in cattive acque.',
    exampleTr: { bn: 'সরকারি বিনিয়োগ ছাড়া অনেক সংস্থা কঠিন আর্থিক সংকটে পড়েছে।', en: 'Without public investment, many bodies are in dire financial straits.' },
  },
  {
    id: 'b2-col-14',
    level: 'B2',
    it: 'gettare acqua sul fuoco',
    tr: { bn: 'উত্তেজনা বা বিবাদ প্রশমিত করা', en: 'to calm things down / defuse tension' },
    register: 'idiomatic',
    exampleIt: 'Il mediatore cercò di gettare acqua sul fuoco.',
    exampleTr: { bn: 'মধ্যস্থতাকারী উত্তেজনা প্রশমিত করার চেষ্টা করেছিলেন।', en: 'The mediator tried to pour water on the flames / defuse tension.' },
  },
  {
    id: 'b2-col-15',
    level: 'B2',
    it: 'dare nell’occhio',
    tr: { bn: 'অতিরিক্ত নজর কাড়া / সবার চোখে পড়া', en: 'to stand out / attract conspicuous attention' },
    register: 'idiomatic',
    exampleIt: 'L’anomalia contabile diede subito nell’occhio ai revisori.',
    exampleTr: { bn: 'হিসাবের অসঙ্গতিটি নিরীক্ষকদের চোখে সাথে সাথে ধরা পড়েছিল।', en: 'The accounting anomaly immediately stood out to the auditors.' },
  },
  {
    id: 'b2-col-16',
    level: 'B2',
    it: 'avere voce in capitolo',
    tr: { bn: 'সিদ্ধান্ত গ্রহণে মতামত বা প্রভাব রাখার অধিকার থাকা', en: 'to have a say / voice in the matter' },
    register: 'idiomatic',
    exampleIt: 'Le comunità locali chiedono di avere voce in capitolo.',
    exampleTr: { bn: 'স্থানীয় জনগোষ্ঠী সিদ্ধান্ত গ্রহণে নিজেদের মতামতের অধিকার দাবি করছে।', en: 'Local communities are asking to have a say in the matter.' },
  },
];

export function getAcademyVerbsForLevel(level: 'A2' | 'B1' | 'B2'): AcademyVerbEntry[] {
  if (level === 'A2') return A2_ACADEMY_VERBS;
  if (level === 'B1') return B1_ACADEMY_VERBS;
  return B2_ACADEMY_VERBS;
}
