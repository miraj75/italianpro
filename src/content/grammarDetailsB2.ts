import type { GrammarExtra } from './grammarDetails';

export const GRAMMAR_DETAILS_B2: Record<string, GrammarExtra> = {
  'concordanza-avanzata': {
    rule: {
      bn: 'প্রধান ক্রিয়া বর্তমান বা ভবিষ্যৎ হলে অধীন খণ্ডবাক্যে সমসাময়িক কাজে congiuntivo presente এবং পূর্ববর্তী কাজে congiuntivo passato বসে। প্রধান ক্রিয়া অতীত বা কন্ডিশনাল (Vorrei / Avrei voluto) হলে সমসাময়িক কাজে congiuntivo imperfetto এবং পূর্ববর্তী কাজে congiuntivo trapassato বসে।',
      en: 'After a present/future main verb, use present subjunctive (simultaneous) or past subjunctive (prior). After a past or conditional main verb, use imperfect subjunctive (simultaneous) or pluperfect subjunctive (prior).',
    },
    exceptions: {
      bn: 'যদি অতীতের কোনো মতামত এখনো চিরন্তন বা বর্তমানেও সত্য হয়, তবে অতীতের প্রধান ক্রিয়ার পরেও congiuntivo presente বসতে পারে।',
      en: 'If a subordinate clause expresses a general truth still valid today, the present subjunctive may follow a past main verb.',
    },
    commonMistakes: [
      { wrong: 'Vorrei che tu vieni domani.', right: 'Vorrei che tu venissi domani.', note: { bn: 'Vorrei (condizionale)-এর পরে congiuntivo imperfetto বসে।', en: 'Conditional Vorrei requires the imperfect subjunctive venissi.' } },
    ],
    examples: [
      { it: 'Avrei preferito che la commissione avesse valutato tutti i ricorsi.', tr: { bn: 'আমি পছন্দ করতাম যদি কমিশন সব আপিল মূল্যায়ন করত।', en: 'I would have preferred that the board had evaluated all appeals.' } },
    ],
    exercises: [
      { id: 'ex-b2-ca-1', prompt: { bn: 'শূন্যস্থান পূরণ করুন: Vorrei che voi ___ più attenzione alla normativa.', en: 'Complete: Vorrei che voi ___ più attenzione alla normativa.' }, options: ['prestiate', 'prestaste', 'prestate', 'avreste prestato'], answer: 1, explanation: { bn: 'Vorrei che-র পরে congiuntivo imperfetto (prestaste) বসে।', en: 'Vorrei che takes the imperfect subjunctive prestaste.' } },
    ],
    storyIds: ['st-b2-01'],
    vocabKeys: ['w:B2:la normativa', 'w:B2:il ricorso', 'w:B2:valutare'],
  },
  'periodo-ipotetico-misto': {
    rule: {
      bn: 'অতীতের একটি শর্তের ফল যদি বর্তমানে অনুভূত হয়, তবে Se + congiuntivo trapassato + condizionale presente (আজকের ফল) বসে। আবার বর্তমানের কোনো স্থায়ী স্বভাবের কারণে অতীতে কিছু ঘটে থাকলে Se + congiuntivo imperfetto + condizionale passato বসে।',
      en: 'Mixed conditional: Se + pluperfect subjunctive + present conditional (past cause → present effect), or Se + imperfect subjunctive + past conditional (timeless trait → past effect).',
    },
    commonMistakes: [
      { wrong: 'Se avrei accettato allora, oggi vivrei a Roma.', right: 'Se avessi accettato allora, oggi vivrei a Roma.', note: { bn: 'Se খণ্ডবাক্যে কখনো কন্ডিশনাল বসে না।', en: 'Never use the conditional in the Se-clause.' } },
    ],
    examples: [
      { it: 'Se avessimo investito nel fotovoltaico cinque anni fa, oggi spenderemmo la metà.', tr: { bn: 'পাঁচ বছর আগে সৌরবিদ্যুতে বিনিয়োগ করলে আজ আমরা অর্ধেক খরচ করতাম।', en: 'If we had invested in solar power five years ago, today we would spend half as much.' } },
    ],
    exercises: [
      { id: 'ex-b2-pim-1', prompt: { bn: 'শূন্যস্থান পূরণ করুন: Se ieri avessi firmato il rogito, oggi ___ proprietario.', en: 'Complete: Se ieri avessi firmato il rogito, oggi ___ proprietario.' }, options: ['sarei stato', 'sarei', 'fossi', 'sarò'], answer: 1, explanation: { bn: 'আজকের বর্তমান ফলাফল বোঝাতে condizionale presente (sarei) বসে।', en: 'Present result uses the present conditional sarei.' } },
    ],
    storyIds: ['st-b2-02'],
    vocabKeys: ["w:B2:l'impianto fotovoltaico", 'w:B2:il rogito'],
  },
  'congiuntivo-indipendente': {
    rule: {
      bn: 'প্রধান ক্রিয়া ছাড়া স্বাধীন বাক্যে congiuntivo ব্যবহৃত হয়: ১) অনুমান/সংশয় (Che abbiano già promulgato la legge?), ২) আক্ষেপ বা তীব্র ইচ্ছা (Magari avessero stanziato i fondi! / Se solo potessi!), ৩) ছাড় বা অনুজ্ঞা (Sia come sia)।',
      en: 'Independent subjunctive expresses doubt (Che sia vero?), strong wish/regret (Magari / Se solo + imperfect/pluperfect subjunctive), or concession (Costi quel che costi).',
    },
    commonMistakes: [
      { wrong: 'Magari avrei più tempo!', right: 'Magari avessi più tempo!', note: { bn: 'Magari-র পরে ইচ্ছা বোঝাতে congiuntivo imperfetto/trapassato বসে।', en: 'Magari takes the imperfect or pluperfect subjunctive.' } },
    ],
    examples: [
      { it: 'Magari avessero accolto il nostro emendamento!', tr: { bn: 'ইশ, তাঁরা যদি আমাদের সংশোধনীটি গ্রহণ করতেন!', en: 'If only they had accepted our amendment!' } },
    ],
    exercises: [
      { id: 'ex-b2-ci-1', prompt: { bn: 'শূন্যস্থান পূরণ করুন: Se solo ___ il backup prima dell’attacco informatico!', en: 'Complete: Se solo ___ il backup prima dell’attacco informatico!' }, options: ['facevo', 'avrei fatto', 'avessi fatto', 'faccio'], answer: 2, explanation: { bn: 'অতীতের আক্ষেপে Se solo + congiuntivo trapassato (avessi fatto) বসে।', en: 'Past regret uses Se solo + pluperfect subjunctive.' } },
    ],
    storyIds: ['st-b2-03'],
    vocabKeys: ["w:B2:l'emendamento", "w:B2:l'attacco informatico"],
  },
  'congiuntivo-relativo': {
    rule: {
      bn: 'সম্বন্ধবাচক খণ্ডবাক্যে যখন কোনো নির্দিষ্ট বাস্তব বস্তু বা ব্যক্তিকে না বুঝিয়ে কাঙ্ক্ষিত যোগ্যতা এবং il primo / l’unico / সুপারলেটিভ বোঝানো হয়, তখন congiuntivo বসে।',
      en: 'Use the subjunctive in relative clauses that specify a desired/hypothetical requirement or follow a superlative / l’unico / il primo.',
    },
    commonMistakes: [
      { wrong: 'Cerchiamo un notaio che può redigere l’atto oggi.', right: 'Cerchiamo un notaio che possa redigere l’atto oggi.', note: { bn: 'এখনো খুঁজে পাওয়া যায়নি এমন কাঙ্ক্ষিত ব্যক্তিতে congiuntivo (possa) বসে।', en: 'Non-specific sought referent takes the subjunctive possa.' } },
    ],
    examples: [
      { it: 'L’azienda cerca un ingegnere che abbia esperienza nella robotica avanzata.', tr: { bn: 'কোম্পানি এমন একজন প্রকৌশলী খুঁজছে যাঁর উন্নত রোবোটিক্সে অভিজ্ঞতা আছে।', en: 'The company is looking for an engineer who has experience in advanced robotics.' } },
    ],
    exercises: [
      { id: 'ex-b2-cr-1', prompt: { bn: 'শূন্যস্থান পূরণ করুন: È l’indagine più approfondita che ___ negli ultimi anni.', en: 'Complete: È l’indagine più approfondita che ___ negli ultimi anni.' }, options: ['è uscita', 'sia uscita', 'usciva', 'uscirà'], answer: 1, explanation: { bn: 'সুপারলেটিভের পরে congiuntivo passato (sia uscita) বসে।', en: 'Superlative relative clause takes the subjunctive sia uscita.' } },
    ],
    storyIds: ['st-b2-04'],
    vocabKeys: ['w:B2:il notaio', 'w:B2:la robotica avanzata', 'w:B2:approfondito'],
  },
  'congiuntivo-concessivo': {
    rule: {
      bn: 'per quanto, qualunque, qualsiasi, chiunque, ovunque এবং comunque দিয়ে শুরু হওয়া ছাড়বাচক খণ্ডবাক্যে সর্বদা congiuntivo বসে।',
      en: 'Concessive clauses introduced by per quanto, qualunque/qualsiasi, chiunque, ovunque, and comunque require the subjunctive.',
    },
    commonMistakes: [
      { wrong: 'Chiunque viola la legge sarà punito.', right: 'Chiunque violi la legge sarà punito.', note: { bn: 'Chiunque-র পরে আদর্শ প্রমিত রীতিতে congiuntivo (violi) বসে।', en: 'Chiunque requires the subjunctive violi in formal standard Italian.' } },
    ],
    examples: [
      { it: 'Per quanto sia autorevole la fonte, occorre sempre verificarla.', tr: { bn: 'উৎসটি যতই নির্ভরযোগ্য হোক না কেন, তা সর্বদা যাচাই করা প্রয়োজন।', en: 'However authoritative the source may be, it must always be verified.' } },
    ],
    exercises: [
      { id: 'ex-b2-cc-1', prompt: { bn: 'শূন্যস্থান পূরণ করুন: Per quanto ___ gli sforzi, il disavanzo resta alto.', en: 'Complete: Per quanto ___ gli sforzi, il disavanzo resta alto.' }, options: ['sono grandi', 'siano ingenti', 'erano ingenti', 'saranno'], answer: 1, explanation: { bn: 'Per quanto-র পরে congiuntivo (siano ingenti) বসে।', en: 'Per quanto takes the subjunctive siano.' } },
    ],
    storyIds: ['st-b2-05'],
    vocabKeys: ['w:B2:autorevole', 'w:B2:la verifica delle fonti', 'w:B2:il disavanzo', 'w:B2:ingente'],
  },
  'congiuntivo-condizionale-b2': {
    rule: {
      bn: 'qualora, nel caso in cui, a patto che, a condizione che, ammesso che এবং salvo che শর্তবাচক সংযোজকগুলোর পরে সর্বদা congiuntivo বসে।',
      en: 'Formal conditional conjunctions qualora, nel caso in cui, a patto che, a condizione che, ammesso che, and salvo che govern the subjunctive.',
    },
    commonMistakes: [
      { wrong: 'Qualora il prodotto è difettoso, chieda il rimborso.', right: 'Qualora il prodotto sia difettoso, chieda il rimborso.', note: { bn: 'Qualora-র পরে নির্দেশক è বসে না, sia বসে।', en: 'Qualora requires the subjunctive sia.' } },
    ],
    examples: [
      { it: 'Qualora persista l’inadempimento, procederemo per vie legali.', tr: { bn: 'চুক্তিভঙ্গ অব্যাহত থাকলে আমরা আইনি পদক্ষেপ নেব।', en: 'Should the breach of contract persist, we will take legal action.' } },
    ],
    exercises: [
      { id: 'ex-b2-ccb-1', prompt: { bn: 'শূন্যস্থান পূরণ করুন: Accetteremo il compromesso a patto che ___ la trasparenza.', en: 'Complete: Accetteremo il compromesso a patto che ___ la trasparenza.' }, options: ['si garantisce', 'si garantisca', 'si garantirà', 'garantiva'], answer: 1, explanation: { bn: 'ব্যাকরণ সূত্র: a patto che + congiuntivo presente (si garantisca) — a patto che এর পরে বর্তমান সাবজাংক্টিভ (congiuntivo presente) বসে।', en: 'a patto che requires the present subjunctive.' } },
    ],
    storyIds: ['st-b2-06'],
    vocabKeys: ['w:B2:qualora', "w:B2:l'inadempimento", 'w:B2:il prodotto difettoso'],
  },
  'passato-remoto-irregolari': {
    rule: {
      bn: 'শক্তিশালী অনিয়মিত passato remoto ক্রিয়ায় কেবল io (-i), lui/lei (-e) এবং loro (-ero) রূপে অনিয়মিত মূল ব্যবহৃত হয়; tu, noi, voi সর্বদা ইনফিনিটিভ মূল থেকে নিয়মিত রূপ নেয়।',
      en: 'Irregular passato remoto verbs change stem only in 1st sg. (-i), 3rd sg. (-e), and 3rd pl. (-ero); tu, noi, voi remain regular.',
    },
    commonMistakes: [
      { wrong: 'Loro decidettero di abrogare la legge.', right: 'Loro decisero di abrogare la legge.', note: { bn: 'ব্যাকরণ সূত্র: decidere → decisi, decidesti, decise, decidemmo, decideste, decisero — নাম পুরুষ বহুবচন (loro) রূপ হলো: decidere is decisero।', en: '3rd plural of decidere is decisero.' } },
    ],
    examples: [
      { it: 'L’Assemblea Costituente pose le basi della repubblica parlamentare.', tr: { bn: 'গণপরিষদ সংসদীয় প্রজাতন্ত্রের ভিত্তি স্থাপন করেছিল।', en: 'The Constituent Assembly laid the foundations of the parliamentary republic.' } },
    ],
    exercises: [
      { id: 'ex-b2-pri-1', prompt: { bn: 'শূন্যস্থান পূরণ করুন: Nel 1946 gli italiani (scegliere) ___ la Repubblica.', en: 'Complete: Nel 1946 gli italiani (scegliere) ___ la Repubblica.' }, options: ['scegliettero', 'scelsero', 'scelgono', 'sceglierono'], answer: 1, explanation: { bn: 'scegliere-এর ৩য় বহুবচন passato remoto রূপ scelsero।', en: 'Irregular 3rd plural passato remoto of scegliere is scelsero.' } },
    ],
    storyIds: ['st-b2-07'],
    vocabKeys: ["w:B2:l'Assemblea Costituente", 'w:B2:la repubblica parlamentare', 'w:B2:abrogare'],
  },
  'trapassato-remoto': {
    rule: {
      bn: 'dopo che, appena, non appena, quando-র পরে avere/essere-এর passato remoto (ebbi/fui) + পাস্ট পার্টিসিপল বসে, যদি প্রধান বাক্যের ক্রিয়াটি passato remoto-তে থাকে।',
      en: 'Used in temporal clauses after appena / dopo che when the main clause verb is in the passato remoto.',
    },
    commonMistakes: [
      { wrong: 'Appena ebbe finito, torna a casa.', right: 'Appena ebbe finito, tornò a casa.', note: { bn: 'trapassato remoto কেবল passato remoto প্রধান ক্রিয়ার সাথেই বসে।', en: 'Main clause must be in the passato remoto.' } },
    ],
    examples: [
      { it: 'Non appena il Parlamento ebbe approvato la legge, il Presidente la promulgò.', tr: { bn: 'সংসদ আইনটি অনুমোদন করামাত্রই রাষ্ট্রপতি তা জারি করলেন।', en: 'As soon as Parliament had approved the law, the President promulgated it.' } },
    ],
    exercises: [
      { id: 'ex-b2-tr-1', prompt: { bn: 'শূন্যস্থান পূরণ করুন: Dopo che ___ i reperti, gli studiosi pubblicarono la monografia.', en: 'Complete: Dopo che ___ i reperti, gli studiosi pubblicarono la monografia.' }, options: ['ebbero esaminato', 'hanno esaminato', 'avranno esaminato', 'esaminavano'], answer: 0, explanation: { bn: 'pubblicarono (passato remoto)-এর আগে ebbero esaminato বসে।', en: 'Prior to pubblicarono, use trapassato remoto ebbero esaminato.' } },
    ],
    storyIds: ['st-b2-08'],
    vocabKeys: ['w:B2:promulgare', 'w:B2:il reperto archeologico', 'w:B2:la monografia'],
  },
  'futuro-epistemico-b2': {
    rule: {
      bn: 'ভবিষ্যৎ ও পুরাঘটিত ভবিষ্যৎ কাল দ্বারা বর্তমান বা অতীতের যৌক্তিক অনুমান এবং বিতর্কে প্রতিপক্ষের যুক্তি আংশিক মেনে নিয়ে খণ্ডন (Sarà pure vero che..., ma...) প্রকাশ করা হয়।',
      en: 'Epistemic and concessive future concedes a point before refuting it (Sarà anche vero che…, tuttavia…).',
    },
    commonMistakes: [
      { wrong: 'Fosse pure vero, ma non basta.', right: 'Sarà pure vero, ma non basta.', note: { bn: 'কথোপকথন ও বিতর্কে ছাড়বাচক অনুমানে Sarà pure... বসে।', en: 'Concessive future uses Sarà pure…' } },
    ],
    examples: [
      { it: 'Avrà pure conseguito il dottorato, ma gli manca l’esperienza sul campo.', tr: { bn: 'তিনি হয়তো পিএইচডি অর্জন করেছেন ঠিকই, কিন্তু তাঁর মাঠপর্যায়ের অভিজ্ঞতার অভাব রয়েছে।', en: 'He may well have obtained a PhD, but he lacks field experience.' } },
    ],
    exercises: [
      { id: 'ex-b2-feb-1', prompt: { bn: 'শূন্যস্থান পূরণ করুন: ___ anche un progetto ambizioso, tuttavia i fondi sono esigui.', en: 'Complete: ___ anche un progetto ambizioso, tuttavia i fondi sono esigui.' }, options: ['Sia', 'Sarà', 'Fosse', 'Sarebbe stato'], answer: 1, explanation: { bn: 'ছাড়বাচক ভবিষ্যতে Sarà anche... বসে।', en: 'Concessive future uses Sarà anche…' } },
    ],
    storyIds: ['st-b2-09'],
    vocabKeys: ['w:B2:il dottorato di ricerca', 'w:B2:esiguo'],
  },
  'condizionale-giornalistico': {
    rule: {
      bn: 'সংবাদপত্রে অসমর্থিত বা তদন্তাধীন তথ্য জানাতে condizionale (presente ও passato) ব্যবহৃত হয়, যাতে সাংবাদিক তথ্যের শতভাগ দায় নিজের ওপর না নেন।',
      en: 'The conditional of dissociation reports unconfirmed allegations or news pending official verification.',
    },
    commonMistakes: [
      { wrong: 'Secondo le indagini, l’imputato ha frodato il fisco (se non provato).', right: 'Secondo le indagini, l’imputato avrebbe frodato il fisco.', note: { bn: 'বিচারাধীন অভিযোগে avrebbe frodato ব্যবহৃত হয়।', en: 'Use past conditional avrebbe frodato for unproven past allegations.' } },
    ],
    examples: [
      { it: 'La fusione aziendale sarebbe imminente e comporterebbe centinaia di esuberi.', tr: { bn: 'জানা গেছে কোম্পানি একীভূতকরণ আসন্ন এবং এতে শত শত কর্মী ছাঁটাই হতে পারে।', en: 'The corporate merger is reportedly imminent and would entail hundreds of redundancies.' } },
    ],
    exercises: [
      { id: 'ex-b2-cg-1', prompt: { bn: 'শূন্যস্থান পূরণ করুন: Secondo la procura, la società ___ i bilanci lo scorso anno.', en: 'Complete: Secondo la procura, la società ___ i bilanci lo scorso anno.' }, options: ['falsificava', 'avrebbe falsificato', 'falsificherà', 'falsifichi'], answer: 1, explanation: { bn: 'অতীতের অসমর্থিত অভিযোগে condizionale passato বসে।', en: 'Alleged past fact uses the past conditional.' } },
    ],
    storyIds: ['st-b2-10'],
    vocabKeys: ['w:B2:la procura', 'w:B2:la fusione aziendale', 'w:B2:imminente'],
  },
  'passivo-avanzato': {
    rule: {
      bn: 'venire + পার্টিসিপল কেবল সরল কালে গতিশীল প্রক্রিয়া বোঝায়। andare + পার্টিসিপল সরল কালে বাধ্যবাধকতা (va compilato) এবং যৌগিক কালে ক্ষতি বা হারানো (è andato perduto/distrutto) বোঝায়।',
      en: 'venire + participle works in simple tenses; andare + participle expresses obligation in simple tenses and accidental loss (è andato distrutto) in compound tenses.',
    },
    commonMistakes: [
      { wrong: 'Il documento è venuto firmato ieri.', right: 'Il documento è stato firmato ieri.', note: { bn: 'যৌগিক কালে venire সহায়ক হিসেবে বসে না, essere বসে।', en: 'Never use venire in compound passive tenses.' } },
    ],
    examples: [
      { it: 'Durante l’alluvione molti manoscritti antichi sono andati perduti.', tr: { bn: 'বন্যার সময় অনেক প্রাচীন পাণ্ডুলিপি নষ্ট হয়ে গেছে।', en: 'During the flood many ancient manuscripts were lost.' } },
    ],
    exercises: [
      { id: 'ex-b2-pa-1', prompt: { bn: 'শূন্যস্থান পূরণ করুন: Il ricorso ___ presentato entro trenta giorni dalla notifica.', en: 'Complete: Il ricorso ___ presentato entro trenta giorni dalla notifica.' }, options: ['va', 'è andato', 'viene stato', 'ha'], answer: 0, explanation: { bn: 'আইনি বাধ্যবাধকতা বোঝাতে va + পাস্ট পার্টিসিপল বসে।', en: 'va + participle expresses legal obligation.' } },
    ],
    storyIds: ['st-b2-11'],
    vocabKeys: ["w:B2:l'alluvione", 'w:B2:il manoscritto miniato', 'w:B2:il ricorso'],
  },
  'si-passivante-riflessivo': {
    rule: {
      bn: 'প্রতিফলক ক্রিয়ার সাথে নৈর্ব্যক্তিক si যুক্ত হলে তা ci si-তে পরিণত হয় এবং অতীত কালে essere + পুংলিঙ্গ বহুবচন পার্টিসিপল নেয় (Ci si è accorti / Ci si è resi conto)।',
      en: 'Reflexive si + impersonal si becomes ci si, taking auxiliary essere and masculine plural agreement in compound tenses.',
    },
    commonMistakes: [
      { wrong: 'Si si abitua presto al telelavoro.', right: 'Ci si abitua presto al telelavoro.', note: { bn: 'si si কখনো বসে না; ci si বসে।', en: 'si + si dissimilates to ci si.' } },
    ],
    examples: [
      { it: 'Solo dopo la crisi ci si è resi conto della gravità del dissesto idrogeologico.', tr: { bn: 'কেবল সংকটের পরেই ভূমিধস ও বন্যা ঝুঁকির ভয়াবহতা উপলব্ধি করা গেছে।', en: 'Only after the crisis did people realise the severity of the hydrogeological instability.' } },
    ],
    exercises: [
      { id: 'ex-b2-spr-1', prompt: { bn: 'শূন্যস্থান পূরণ করুন: Di fronte a tali dati, ___ subito attivati per arginare il fenomeno.', en: 'Complete: Di fronte a tali dati, ___ subito attivati per arginare il fenomeno.' }, options: ['si si è', 'ci si è', 'ci si ha', 'si hanno'], answer: 1, explanation: { bn: 'attivarsi প্রতিফলক ক্রিয়ার নৈর্ব্যক্তিক অতীতে ci si è attivati হয়।', en: 'Impersonal past of attivarsi is ci si è attivati.' } },
    ],
    storyIds: ['st-b2-12'],
    vocabKeys: ['w:B2:il dissesto idrogeologico', 'w:B2:arginare'],
  },
  'subordinate-implicite': {
    rule: {
      bn: 'প্রধান ও অধীন বাক্যের কর্তা এক হলে সমাপিকা খণ্ডবাক্যকে ইনফিনিটিভ (di/a/per/prima di/dopo aver), জেরুন্ড বা পার্টিসিপল দিয়ে সংক্ষিপ্ত করা হয়।',
      en: 'When subjects match, explicit clauses condense into infinitive, gerund, or participial clauses.',
    },
    commonMistakes: [
      { wrong: 'Ritiene che lui stesso sia idoneo al ruolo.', right: 'Ritiene di essere idoneo al ruolo.', note: { bn: 'একই কর্তা হলে di + ইনফিনিটিভ বসে।', en: 'Coreferential subject requires di + infinitive.' } },
    ],
    examples: [
      { it: 'Dichiarò di aver agito in conformità con la normativa vigente.', tr: { bn: 'তিনি ঘোষণা করেন যে তিনি প্রচলিত বিধিমালা অনুসারেই কাজ করেছেন।', en: 'He declared that he had acted in accordance with the regulations in force.' } },
    ],
    exercises: [
      { id: 'ex-b2-si-1', prompt: { bn: 'শূন্যস্থান পূরণ করুন: L’imputato nega ___ parte all’illecito.', en: 'Complete: L’imputato nega ___ parte all’illecito.' }, options: ['che abbia preso', 'di aver preso', 'prendendo', 'preso'], answer: 1, explanation: { bn: 'একই কর্তা (l’imputato) থাকায় di aver preso বসে।', en: 'Same subject takes di + past infinitive.' } },
    ],
    storyIds: ['st-b2-13'],
    vocabKeys: ['w:B2:in conformità con', 'w:B2:la norma vigente', "w:B2:l'illecito"],
  },
  'gerundio-causale-ipotetico': {
    rule: {
      bn: 'জেরুন্ড বাক্যের শুরুতে বসে কারণ (Essendo...), শর্ত (কন্ডিশনাল প্রধান ক্রিয়ার সাথে) এবং pur যুক্ত হয়ে ছাড়বাচক ভাব (Pur riconoscendo...) প্রকাশ করে।',
      en: 'Gerunds express cause, condition (paired with a conditional main verb), or concession (preceded by pur).',
    },
    commonMistakes: [
      { wrong: 'Pur sapendo che pioveva, ma è uscito.', right: 'Pur sapendo che pioveva, è uscito.', note: { bn: 'Pur + gerundio থাকলে প্রধান বাক্যের আগে ma বসে না।', en: 'Do not add ma after a concessive Pur + gerund clause.' } },
    ],
    examples: [
      { it: 'Pur condividendo l’obiettivo della riforma, il sindacato contesta le modalità attuative.', tr: { bn: 'সংস্কারের লক্ষ্যের সাথে একমত হলেও শ্রমিক ইউনিয়ন বাস্তবায়নের পদ্ধতি নিয়ে আপত্তি তুলেছে।', en: 'While sharing the goal of the reform, the trade union contests its implementation methods.' } },
    ],
    exercises: [
      { id: 'ex-b2-gci-1', prompt: { bn: 'শূন্যস্থান পূরণ করুন: ___ le fonti rinnovabili, il Paese ridurrebbe la dipendenza energetica.', en: 'Complete: ___ le fonti rinnovabili, il Paese ridurrebbe la dipendenza energetica.' }, options: ['Incentivato', 'Incentivando', 'Incentivare', 'Avendo incentivato ieri'], answer: 1, explanation: { bn: 'ridurrebbe (কন্ডিশনাল)-এর সাথে শর্ত বোঝাতে জেরুন্ড Incentivando বসে।', en: 'Conditional main verb pairs with hypothetical gerund Incentivando.' } },
    ],
    storyIds: ['st-b2-14'],
    vocabKeys: ['w:B2:il sindacato', 'w:B2:contestare', 'w:B2:le fonti rinnovabili'],
  },
  'participio-presente-b2': {
    rule: {
      bn: 'আনুষ্ঠানিক ও প্রশাসনিক ইতালিয়ানে -ante / -ente যুক্ত বর্তমান পার্টিসিপল che + ক্রিয়ার সংক্ষিপ্ত রূপ হিসেবে কাজ করে (contenente = che contiene, avente = che ha)।',
      en: 'Present participles in -ante/-ente replace relative clauses in legal and bureaucratic prose.',
    },
    commonMistakes: [
      { wrong: 'Una legge riguardanta il lavoro.', right: 'Una legge riguardante il lavoro.', note: { bn: '-ante/-ente একবচনে পুং ও স্ত্রী উভয় লিঙ্গে অপরিবর্তিত থাকে (-e)।', en: 'Singular -ante/-ente is invariable for masculine and feminine.' } },
    ],
    examples: [
      { it: 'Il ministero ha emanato una circolare contenente le nuove linee guida.', tr: { bn: 'মন্ত্রণালয় নতুন নির্দেশিকা সংবলিত একটি পরিপত্র জারি করেছে।', en: 'The ministry issued a circular containing the new guidelines.' } },
    ],
    exercises: [
      { id: 'ex-b2-ppb-1', prompt: { bn: 'শূন্যস্থান পূরণ করুন: Possono partecipare tutti i candidati ___ i requisiti previsti dal bando.', en: 'Complete: Possono partecipare tutti i candidati ___ i requisiti previsti dal bando.' }, options: ['avente', 'aventi', 'avendo', 'avuti'], answer: 1, explanation: { bn: 'i candidati বহুবচন হওয়ায় aventi বসে।', en: 'Plural noun i candidati takes plural present participle aventi.' } },
    ],
    storyIds: ['st-b2-15'],
    vocabKeys: ['w:B2:il bando di concorso', 'w:B2:la norma vigente'],
  },
  'participio-assoluto-b2': {
    rule: {
      bn: 'যৌগিক কালের সহায়ক বাদ দিয়ে পাস্ট পার্টিসিপলকে বিশেষ্যের সাথে লিঙ্গ ও বচনে মিলিয়ে কারণ বা পূর্ববর্তী সময় বোঝাতে বাক্যের শুরুতে বসানো হয়।',
      en: 'Absolute past participle clauses agree in gender and number with their noun and express a completed prior event or cause.',
    },
    commonMistakes: [
      { wrong: 'Approvato la legge, il mercato è salito.', right: 'Approvata la legge, il mercato è salito.', note: { bn: 'la legge স্ত্রীলিঙ্গ হওয়ায় Approvata হবে।', en: 'Participle must agree with feminine noun la legge: Approvata.' } },
    ],
    examples: [
      { it: 'Accertata la violazione dei dati, il Garante ha inflitto una sanzione amministrativa.', tr: { bn: 'তথ্য ফাঁসের বিষয়টি প্রমাণিত হওয়ায় তদারকি কর্তৃপক্ষ প্রশাসনিক জরিমানা আরোপ করেছে।', en: 'Once the data breach was ascertained, the Authority imposed an administrative penalty.' } },
    ],
    exercises: [
      { id: 'ex-b2-pab-1', prompt: { bn: 'শূন্যস্থান পূরণ করুন: ___ le trattative, i diplomatici firmarono il cessate il fuoco.', en: 'Complete: ___ le trattative, i diplomatici firmarono il cessate il fuoco.' }, options: ['Concluso', 'Concluse', 'Conclusi', 'Concludendo'], answer: 1, explanation: { bn: 'le trattative স্ত্রী বহুবচন হওয়ায় Concluse বসে।', en: 'Agrees feminine plural with le trattative: Concluse.' } },
    ],
    storyIds: ['st-b2-16'],
    vocabKeys: ['w:B2:la violazione dei dati', 'w:B2:la sanzione amministrativa', 'w:B2:il cessate il fuoco'],
  },
  'infinito-sostantivato': {
    rule: {
      bn: 'পুংলিঙ্গ একবচন আর্টিকেল (il / l’) যোগে বর্তমান বা অতীত ইনফিনিটিভকে বিশেষ্য হিসেবে ব্যবহার করে কোনো প্রক্রিয়া বা কাজের প্রভাব জোরালোভাবে প্রকাশ করা হয়।',
      en: 'Preceded by masculine singular article il/l’, present and past infinitives function as abstract verbal nouns.',
    },
    commonMistakes: [
      { wrong: 'La persistere della crisi preoccupa.', right: 'Il persistere della crisi preoccupa.', note: { bn: 'বিশেষ্যরূপী ইনফিনিটিভ সর্বদা পুংলিঙ্গ একবচন (il) হয়।', en: 'Nominalised infinitives are always masculine singular (il).' } },
    ],
    examples: [
      { it: 'L’aver trascurato la manutenzione straordinaria ha aggravato il dissesto.', tr: { bn: 'বিশেষ সংস্কার কাজ অবহেলা করার বিষয়টি বিপর্যয়কে আরও গুরুতর করেছে।', en: 'Having neglected major maintenance worsened the instability.' } },
    ],
    exercises: [
      { id: 'ex-b2-is-1', prompt: { bn: 'শূন্যস্থান পূরণ করুন: ___ delle temperature minaccia i ghiacciai alpini.', en: 'Complete: ___ delle temperature minaccia i ghiacciai alpini.' }, options: ['La salire', 'L’innalzarsi', 'Gli alzarsi', 'Salendo'], answer: 1, explanation: { bn: 'বিশেষ্যরূপী ইনফিনিটিভ একবচন পুংলিঙ্গ আর্টিকেল নেয়: L’innalzarsi।', en: 'Nominalised reflexive infinitive: L’innalzarsi.' } },
    ],
    storyIds: ['st-b2-17'],
    vocabKeys: ['w:B2:persistere', 'w:B2:la manutenzione straordinaria', 'w:B2:aggravare', 'w:B2:lo scioglimento dei ghiacciai'],
  },
  'discorso-indiretto-complesso': {
    rule: {
      bn: 'অতীতে পরোক্ষ উক্তিতে কালের পরিবর্তনের পাশাপাশি সময় ও স্থানের নির্দেশক শব্দগুলো পরিবর্তিত হয়: ieri → il giorno precedente, domani → l’indomani, oggi → quel giorno, qui → lì।',
      en: 'Past reported speech shifts temporal and spatial deictics: ieri → il giorno precedente, domani → l’indomani, qui → lì.',
    },
    commonMistakes: [
      { wrong: 'Disse che sarebbe partito domani.', right: 'Disse che sarebbe partito l’indomani.', note: { bn: 'অতীতের সাপেক্ষে পরের দিন বোঝাতে l’indomani / il giorno seguente বসে।', en: 'domani shifts to l’indomani in past narrative.' } },
    ],
    examples: [
      { it: 'L’amministratore delegato precisò che il bilancio era stato approvato il giorno precedente.', tr: { bn: 'প্রধান নির্বাহী কর্মকর্তা স্পষ্ট করেন যে আগের দিন বাজেট অনুমোদিত হয়েছিল।', en: 'The CEO clarified that the budget had been approved the previous day.' } },
    ],
    exercises: [
      { id: 'ex-b2-dic-1', prompt: { bn: 'অতীত পরোক্ষ উক্তিতে "domani"-এর সঠিক রূপান্তর বেছে নিন: L’avvocato confermò che il ricorso sarebbe stato depositato ___.', en: 'Choose the proper deictic shift for "domani" in past reported speech:' }, options: ['domani', 'l’indomani', 'ieri', 'poc’anzi'], answer: 1, explanation: { bn: 'domani পরোক্ষ অতীত উক্তিতে l’indomani হয়।', en: 'domani shifts to l’indomani.' } },
    ],
    storyIds: ['st-b2-18'],
    vocabKeys: ["w:B2:l'amministratore delegato", 'w:B2:precisare'],
  },
  'discorso-indiretto-libero': {
    rule: {
      bn: 'আধুনিক সাহিত্যিক গদ্যে চরিত্রের ভাবনা বা সংলাপকে কোনো উদ্ধৃতি চিহ্ন বা "disse che" ছাড়াই তৃতীয় পুরুষে imperfetto ও condizionale passato ব্যবহার করে সরাসরি বর্ণনায় তুলে ধরা হয়।',
      en: 'Free indirect speech blends a character’s inner monologue into third-person narrative using the imperfect and past conditional without reporting verbs.',
    },
    commonMistakes: [
      { wrong: 'Guardò l’orologio: cosa farà adesso? (in narrazione al passato)', right: 'Guardò l’orologio: cosa avrebbe fatto adesso?', note: { bn: 'অতীতের আখ্যানে মুক্ত পরোক্ষ উক্তিতে ভবিষ্যৎ ভাবনায় condizionale passato বসে।', en: 'Use past conditional avrebbe fatto in past-tense narrative.' } },
    ],
    examples: [
      { it: 'Elena chiuse la cartella clinica. Come avrebbe trovato il coraggio di dirglielo l’indomani?', tr: { bn: 'এলেনা চিকিৎসা নথিটি বন্ধ করল। পরের দিন তাকে কথাটা বলার সাহস সে কীভাবে পাবে?', en: 'Elena closed the medical chart. How would she find the courage to tell him the next day?' } },
    ],
    exercises: [
      { id: 'ex-b2-dil-1', prompt: { bn: 'সঠিক ব্যাকরণগত রূপ দিয়ে বাক্যটি সম্পূর্ণ করুন (free indirect thought in past narrative:): Marco fissò la lettera di licenziamento. Dove ___ un altro impiego alla sua età?', en: 'Complete free indirect thought in past narrative:' }, options: ['troverà', 'avrebbe trovato', 'trova', 'abbia trovato'], answer: 1, explanation: { bn: 'মুক্ত পরোক্ষ উক্তিতে ভবিষ্যৎ দুশ্চিন্তা বোঝাতে avrebbe trovato বসে।', en: 'Free indirect speech uses the past conditional avrebbe trovato.' } },
    ],
    storyIds: ['st-b2-19'],
    vocabKeys: ['w:B2:la cartella clinica', 'w:B2:la voce narrante'],
  },
  'relativi-formali-b2': {
    rule: {
      bn: 'আনুষ্ঠানিক গদ্যে প্রিপোজিশনের পরে il/la quale, অধিকার বোঝাতে il/la/i/le cui + বিশেষ্য, এবং ফলাফল বোঝাতে per cui / ragion per cui ব্যবহৃত হয়।',
      en: 'Formal prose uses preposition + il/la quale, possessive il/la cui + noun, and consecutive ragion per cui.',
    },
    commonMistakes: [
      { wrong: 'L’azienda di cui il fatturato è cresciuto.', right: 'L’azienda il cui fatturato è cresciuto.', note: { bn: 'cui আর্টিকেল ও বিশেষ্যের মাঝখানে বসে: il cui fatturato।', en: 'cui stands between the article and the noun: il cui fatturato.' } },
    ],
    examples: [
      { it: 'È un provvedimento le cui ripercussioni si vedranno a lungo termine.', tr: { bn: 'এটি এমন একটি পদক্ষেপ যার সুদূরপ্রসারী ফল দীর্ঘমেয়াদে দেখা যাবে।', en: 'It is a measure whose repercussions will be seen in the long term.' } },
    ],
    exercises: [
      { id: 'ex-b2-rfb-1', prompt: { bn: 'শূন্যস্থান পূরণ করুন: Lo scienziato ___ ipotesi sono state confermate ha ricevuto il premio.', en: 'Complete: Lo scienziato ___ ipotesi sono state confermate ha ricevuto il premio.' }, options: ['il cui', 'le cui', 'di cui', 'i quali'], answer: 1, explanation: { bn: 'le ipotesi স্ত্রী বহুবচন হওয়ায় le cui বসে।', en: 'Agrees with feminine plural noun le ipotesi: le cui.' } },
    ],
    storyIds: ['st-b2-20'],
    vocabKeys: ['w:B2:la ripercussione', 'w:B2:a lungo termine', "w:B2:l'ipotesi scientifica"],
  },
  'doppi-relativi': {
    rule: {
      bn: 'quanto (একবচন) = tutto ciò che (যা কিছু); quanti / quante (বহুবচন) = tutti coloro che (যাঁরা সবাই); chi = colui/colei che (একবচন)।',
      en: 'quanto means "all that which" (singular); quanti/quante means "all those who" (plural); chi means "he/she who" (singular).',
    },
    commonMistakes: [
      { wrong: 'Confermo tutto quanto che ho detto.', right: 'Confermo quanto ho detto.', note: { bn: 'quanto নিজেই সম্বন্ধবাচক সর্বনাম, এর পরে che বসে না।', en: 'Do not add che after relative quanto.' } },
    ],
    examples: [
      { it: 'Secondo quanto emerge dall’indagine, il potere d’acquisto è diminuito.', tr: { bn: 'সমীক্ষা থেকে যা উঠে এসেছে তা অনুযায়ী ক্রয়ক্ষমতা হ্রাস পেয়েছে।', en: 'According to what emerges from the survey, purchasing power has fallen.' } },
    ],
    exercises: [
      { id: 'ex-b2-dr-1', prompt: { bn: 'শূন্যস্থান পূরণ করুন: Il bando è rivolto a ___ possiedono un dottorato di ricerca.', en: 'Complete: Il bando è rivolto a ___ possiedono un dottorato di ricerca.' }, options: ['chi', 'quanti', 'quanto', 'quello'], answer: 1, explanation: { bn: 'বহুবচন ক্রিয়া possiedono থাকায় বহুবচন সর্বনাম quanti বসে।', en: 'Plural verb possiedono requires plural relative quanti.' } },
    ],
    storyIds: ['st-b2-21'],
    vocabKeys: ["w:B2:il potere d'acquisto", 'w:B2:diminuire'],
  },
  'dislocazione-sinistra': {
    rule: {
      bn: 'কর্মকে বাক্যের শুরুতে আনলে ক্রিয়ার আগে তার অনুসারী সর্বনাম (lo, la, li, le, ne) বসানো বাধ্যতামূলক এবং যৌগিক কালে পার্টিসিপল কর্মের লিঙ্গ-বচন অনুযায়ী পরিবর্তিত হয়।',
      en: 'Left-dislocated direct or partitive objects require a resumptive clitic (lo, la, li, le, ne) and past participle agreement.',
    },
    commonMistakes: [
      { wrong: 'La perizia tecnica abbiamo depositato ieri.', right: 'La perizia tecnica l’abbiamo depositata ieri.', note: { bn: 'বামে আনা কর্মের জন্য l’ এবং depositata মিল থাকা আবশ্যক।', en: 'Resumptive clitic l’ and feminine agreement depositata are required.' } },
    ],
    examples: [
      { it: 'I fondi strutturali il governo li ha già stanziati per il Sud.', tr: { bn: 'কাঠামোগত তহবিলগুলো সরকার ইতিমধ্যে দক্ষিণাঞ্চলের জন্য বরাদ্দ করেছে।', en: 'The structural funds, the government has already allocated them for the South.' } },
    ],
    exercises: [
      { id: 'ex-b2-ds-1', prompt: { bn: 'সঠিক ব্যাকরণগত রূপ দিয়ে বাক্যটি সম্পূর্ণ করুন (left dislocation:): Le clausole vessatorie ___ abbiamo contestate immediatamente.', en: 'Complete left dislocation:' }, options: ['li', 'le', 'ne', 'ci'], answer: 1, explanation: { bn: 'Le clausole স্ত্রী বহুবচন হওয়ায় সর্বনাম le বসে।', en: 'Feminine plural object takes resumptive clitic le.' } },
    ],
    storyIds: ['st-b2-22'],
    vocabKeys: ['w:B2:la perizia tecnica', 'w:B2:i fondi strutturali', 'w:B2:stanziare', 'w:B2:la clausola vessatoria'],
  },
  'dislocazione-destra': {
    rule: {
      bn: 'কথোপকথনে জোর বা স্পষ্টতার জন্য ক্রিয়ার আগে সর্বনাম বসিয়ে বাক্যের শেষে কমা দিয়ে মূল বিশেষ্য পদটি যোগ করা হয়: L’abbiamo già firmata, la liberatoria।',
      en: 'Right dislocation places a cataphoric clitic before the verb and repeats the full noun phrase after a comma at the end.',
    },
    commonMistakes: [
      { wrong: 'Li hai controllato, i bilanci?', right: 'Li hai controllati, i bilanci?', note: { bn: 'প্রাক-সর্বনাম li থাকায় পার্টিসিপল controllati বহুবচন হবে।', en: 'Clitic li triggers masculine plural agreement controllati.' } },
    ],
    examples: [
      { it: 'Ne abbiamo discusso a lungo in assemblea, della ripartizione delle spese.', tr: { bn: 'খরচের বণ্টন নিয়ে আমরা সভায় দীর্ঘক্ষণ আলোচনা করেছি।', en: 'We discussed it at length in the meeting, the apportionment of expenses.' } },
    ],
    exercises: [
      { id: 'ex-b2-dd-1', prompt: { bn: 'সঠিক ব্যাকরণগত রূপ দিয়ে বাক্যটি সম্পূর্ণ করুন (right dislocation:): ___ hai poi inviato, il reclamo formale?', en: 'Complete right dislocation:' }, options: ['La', 'L’', 'Gli', 'Ne'], answer: 1, explanation: { bn: 'il reclamo পুং একবচন হওয়ায় hai-এর আগে L’ (Lo) বসে।', en: 'Masculine singular il reclamo takes L’ (Lo) before hai.' } },
    ],
    storyIds: ['st-b2-23'],
    vocabKeys: ['w:B2:la ripartizione delle spese', 'w:B2:il reclamo formale'],
  },
  'frase-scissa': {
    rule: {
      bn: 'Essere + জোর দেওয়া উপাদান + che (সমাপিকা ক্রিয়া) অথবা a + ইনফিনিটিভ (যখন কর্তাকে জোর দেওয়া হয়): È l’evasione fiscale che sottrae risorse allo Stato।',
      en: 'Cleft sentences: Essere + focused constituent + che + finite clause (or a + infinitive when the subject is focused).',
    },
    commonMistakes: [
      { wrong: 'È a Marco che gli ho dato la delega.', right: 'È a Marco che ho dato la delega.', note: { bn: 'Frase scissa-তে che-র পরে পুনরায় সর্বনাম gli বসে না।', en: 'Do not add a redundant pronoun inside a cleft clause.' } },
    ],
    examples: [
      { it: 'Sono stati i giovani ricercatori a individuare il nesso causale.', tr: { bn: 'তরুণ গবেষকেরাই কার্যকারণ সম্পর্কটি শনাক্ত করেছেন।', en: 'It was the young researchers who identified the causal link.' } },
    ],
    exercises: [
      { id: 'ex-b2-fs-1', prompt: { bn: 'সঠিক ব্যাকরণগত রূপ দিয়ে বাক্যটি সম্পূর্ণ করুন (implicit cleft sentence:): Sono le piccole imprese ___ garantire la tenuta del tessuto produttivo.', en: 'Complete implicit cleft sentence:' }, options: ['che a', 'a', 'di', 'da'], answer: 1, explanation: { bn: 'অসমাপিকা বিভক্ত বাক্যে Essere + কর্তা + a + ইনফিনিটিভ বসে।', en: 'Implicit cleft uses a + infinitive.' } },
    ],
    storyIds: ['st-b2-24'],
    vocabKeys: ["w:B2:l'evasione fiscale", 'w:B2:la delega', 'w:B2:il nesso causale'],
  },
  'inversione-soggetto': {
    rule: {
      bn: 'অকর্মক বা উপস্থাপনমূলক ক্রিয়ায় (emergere, scaturire, seguire, mancare, intervenire) এবং নতুন তথ্যের ওপর জোর দিতে কর্তা ক্রিয়ার পরে বসে এবং ক্রিয়াটি পরবর্তী কর্তার বচন অনুযায়ী পরিবর্তিত হয়।',
      en: 'With unaccusative/presentative verbs (emergere, scaturire, mancare, seguire) or for contrastive focus, the subject follows the verb and governs number agreement.',
    },
    commonMistakes: [
      { wrong: 'Dall’inchiesta è emerso gravi irregolarità.', right: 'Dall’inchiesta sono emerse gravi irregolarità.', note: { bn: 'পরে থাকা কর্তা gravi irregolarità স্ত্রী বহুবচন হওয়ায় sono emerse হবে।', en: 'Verb agrees with post-verbal plural feminine subject gravi irregolarità.' } },
    ],
    examples: [
      { it: 'Dal vertice intergovernativo sono scaturite importanti intese commerciali.', tr: { bn: 'আন্তঃসরকারি শীর্ষ সম্মেলন থেকে গুরুত্বপূর্ণ বাণিজ্যিক সমঝোতা উদ্ভূত হয়েছে।', en: 'From the intergovernmental summit arose important trade agreements.' } },
    ],
    exercises: [
      { id: 'ex-b2-inv-1', prompt: { bn: 'সঠিক ব্যাকরণগত রূপ দিয়ে বাক্যটি সম্পূর্ণ করুন (with proper agreement:): Alla conferenza ___ il rettore e numerosi docenti.', en: 'Complete with proper agreement:' }, options: ['ha partecipato', 'hanno partecipato', 'è partecipato', 'partecipava'], answer: 1, explanation: { bn: 'যৌথ কর্তা বহুবচন হওয়ায় hanno partecipato বসে।', en: 'Compound post-verbal subject requires plural hanno partecipato.' } },
    ],
    storyIds: ['st-b2-25'],
    vocabKeys: ['w:B2:il vertice intergovernativo', 'w:B2:scaturire', 'w:B2:il rettore'],
  },
  'nominalizzazione-b2': {
    rule: {
      bn: 'আনুষ্ঠানিক, আইনি ও একাডেমিক লেখায় ক্রিয়াপদকে বিমূর্ত বিশেষ্যে রূপান্তর করে বাক্যকে সংক্ষিপ্ত ও বস্তুনিষ্ঠ করা হয় (smaltire i rifiuti → lo smaltimento dei rifiuti)।',
      en: 'Nominalisation turns verb clauses into dense noun phrases typical of academic, legal, and journalistic Italian.',
    },
    commonMistakes: [
      { wrong: 'Il fatto che si è abrogata la norma ha creato dubbi.', right: 'L’abrogazione della norma ha generato incertezze interpretative.', note: { bn: 'B2 প্রবন্ধে Il fatto che-র চেয়ে বিমূর্ত বিশেষ্য পদ বেশি মার্জিত।', en: 'Abstract action nouns are preferred over heavy "il fatto che" clauses.' } },
    ],
    examples: [
      { it: 'La digitalizzazione della pubblica amministrazione ha agevolato il rilascio dei certificati.', tr: { bn: 'জনপ্রশাসনের ডিজিটাল রূপান্তর সনদপত্র প্রদানকে সহজতর করেছে।', en: 'The digitisation of public administration has facilitated the issuing of certificates.' } },
    ],
    exercises: [
      { id: 'ex-b2-nom-1', prompt: { bn: '«Poiché i ghiacciai si sciolgono»-এর মার্জিত বিশেষ্যরূপ কোনটি?', en: 'Which nominal phrase best transforms "Poiché i ghiacciai si sciolgono"?' }, options: ['A causa dello scioglimento dei ghiacciai', 'Per il sciogliere i ghiacciai', 'Con lo sciolto dei ghiacciai', 'Sciogliendo i ghiacciai'], answer: 0, explanation: { bn: 'sciogliersi ক্রিয়ার বিশেষ্য রূপ lo scioglimento।', en: 'Action noun of sciogliersi is lo scioglimento.' } },
    ],
    storyIds: ['st-b2-26'],
    vocabKeys: ['w:B2:digitalizzare', 'w:B2:agevolare', 'w:B2:lo scioglimento dei ghiacciai'],
  },
  'connettivi-argomentativi': {
    rule: {
      bn: 'যুক্তিনির্ভর গদ্যে কারণ বোঝাতে giacché / in quanto / dal momento che, অনুসিদ্ধান্ত টানতে pertanto / di conseguenza / ne consegue che, এবং প্রমাণ দিতে tant’è vero che বসে।',
      en: 'Argumentative connectors link premises to conclusions: giacché / in quanto (cause), pertanto / ne consegue che (deduction), tant’è vero che (proof).',
    },
    commonMistakes: [
      { wrong: 'La domanda è incompleta, tuttavia viene respinta.', right: 'La domanda è incompleta; pertanto viene respinta.', note: { bn: 'tuttavia বিপরীত ভাব বোঝায়, আর ফলাফল বোঝাতে pertanto বসে।', en: 'Use pertanto ("therefore") for logical consequence, not tuttavia ("however").' } },
    ],
    examples: [
      { it: 'L’impianto non rispetta i parametri di sicurezza; pertanto ne è stata disposta la sospensione.', tr: { bn: 'কারখানাটি নিরাপত্তার মানদণ্ড মানছে না; অতএব সেটির কার্যক্রম স্থগিতের নির্দেশ দেওয়া হয়েছে।', en: 'The plant does not meet safety standards; therefore its suspension has been ordered.' } },
    ],
    exercises: [
      { id: 'ex-b2-carg-1', prompt: { bn: 'প্রমাণ বা ফলাফল প্রকাশক সঠিক সংযোজক অব্যয়টি বেছে নিন: La siccità dura da mesi, ___ le riserve idriche sono ai minimi storici.', en: 'Choose the connector of proof ("so much so that"):' }, options: ['benché', 'tant’è vero che', 'a meno che', 'qualora'], answer: 1, explanation: { bn: 'আগের বক্তব্যের বাস্তব প্রমাণ দিতে tant’è vero che বসে।', en: 'tant’è vero che introduces empirical proof.' } },
    ],
    storyIds: ['st-b2-27'],
    vocabKeys: ['w:B2:pertanto', "w:B2:tant'è vero che", 'w:B2:la siccità prolungata'],
  },
  'connettivi-riformulazione': {
    rule: {
      bn: 'জটিল ধারণা সহজ বা সুনির্দিষ্ট করতে vale a dire / ossia / ovvero, বক্তব্যের ক্রম সাজাতে in primo luogo / in secondo luogo, এবং সারসংক্ষেপে in sintesi / in definitiva / in ultima analisi বসে।',
      en: 'Reformulate concepts with vale a dire / ossia, structure points with in primo/secondo luogo, and conclude with in definitiva / in ultima analisi.',
    },
    commonMistakes: [
      { wrong: 'In primo posto dobbiamo ridurre i costi.', right: 'In primo luogo dobbiamo ridurre i costi.', note: { bn: 'প্রবন্ধের ক্রমবিন্যাসে In primo luogo বসে।', en: 'Standard discourse marker is In primo luogo.' } },
    ],
    examples: [
      { it: 'In ultima analisi, la coesione sociale dipende dalle pari opportunità.', tr: { bn: 'চূড়ান্ত বিশ্লেষণে সামাজিক সংহতি সমান সুযোগের ওপর নির্ভর করে।', en: 'In the final analysis, social cohesion depends on equal opportunities.' } },
    ],
    exercises: [
      { id: 'ex-b2-crif-1', prompt: { bn: 'ব্যাখ্যামূলক সংযোজক শব্দটি (অর্থাৎ) বেছে নিন: Il TFR, ___ il trattamento di fine rapporto, spetta a ogni lavoratore.', en: 'Choose the reformulation marker ("namely / that is"):' }, options: ['vale a dire', 'tuttavia', 'nonostante', 'affinché'], answer: 0, explanation: { bn: 'সংক্ষিপ্ত নামের পূর্ণ ব্যাখ্যায় vale a dire / ossia বসে।', en: 'vale a dire introduces an explanatory reformulation.' } },
    ],
    storyIds: ['st-b2-28'],
    vocabKeys: ['w:B2:in primo luogo', 'w:B2:in ultima analisi', 'w:B2:la coesione sociale', 'w:B2:il trattamento di fine rapporto'],
  },
  'locuzioni-preposizionali-b2': {
    rule: {
      bn: 'ai sensi di (ধারা অনুযায়ী), in virtù di (বলে), alla luce di (আলোকে), a scapito di (ক্ষতি করে), a beneficio di (কল্যাণে), a prescindere da (নির্বিশেষে), nell’ambito di (আওতায়) প্রিপোজিশনাল পদগুচ্ছগুলো আনুষ্ঠানিক গদ্যে সূক্ষ্ম সম্পর্ক প্রকাশ করে।',
      en: 'Complex prepositional phrases (ai sensi di, alla luce di, a scapito di, a prescindere da) provide legal and analytical precision.',
    },
    commonMistakes: [
      { wrong: 'A prescindere delle tue opinioni.', right: 'A prescindere dalle tue opinioni.', note: { bn: 'a prescindere সর্বদা da প্রিপোজিশন নেয়।', en: 'a prescindere always takes preposition da.' } },
    ],
    examples: [
      { it: 'Non si può incrementare il profitto a scapito della sicurezza sul lavoro.', tr: { bn: 'কর্মক্ষেত্রের নিরাপত্তার ক্ষতি করে মুনাফা বাড়ানো যায় না।', en: 'Profit cannot be increased at the expense of occupational safety.' } },
    ],
    exercises: [
      { id: 'ex-b2-lpb-1', prompt: { bn: 'সঠিক ব্যাকরণগত রূপ দিয়ে বাক্যটি সম্পূর্ণ করুন (("In the light of the new data"):): ___ nuovi dati epidemiologici, il protocollo è stato aggiornato.', en: 'Complete ("In the light of the new data"):' }, options: ['Alla luce dei', 'A scapito dei', 'Ai sensi di', 'Invece di'], answer: 0, explanation: { bn: '“নতুন তথ্যের আলোকে” = Alla luce dei nuovi dati।', en: 'Alla luce di means "in the light of".' } },
    ],
    storyIds: ['st-b2-29'],
    vocabKeys: ['w:B2:a scapito di', 'w:B2:la sicurezza sul lavoro', 'w:B2:alla luce di', 'w:B2:a prescindere da'],
  },
  'verbi-procomplementari': {
    rule: {
      bn: 'prendersela (মনে কষ্ট পাওয়া), avercela con (কারো ওপর রাগ থাকা), entrarci (প্রাসঙ্গিক হওয়া: non c’entra niente), sbrigarsela (নিজে সামলে নেওয়া), cavarsela — এই ক্রিয়াগুলোর সর্বনাম অংশটি স্থির এবং অর্থের অবিচ্ছেদ্য অংশ।',
      en: 'Procomplementary verbs incorporate fixed clitic pronouns that alter the base verb’s meaning.',
    },
    commonMistakes: [
      { wrong: 'Perché l’hai con me?', right: 'Perché ce l’hai con me?', note: { bn: 'কারো ওপর রাগ থাকা অর্থে avercela (ce l’hai) বসে।', en: 'Idiomatic avercela requires both ce and la.' } },
    ],
    examples: [
      { it: 'Non te la prendere: la sua non era un’allusione velata contro di te.', tr: { bn: 'মনে কষ্ট নিয়ো না: তার কথাটি তোমার বিরুদ্ধে কোনো পরোক্ষ ইঙ্গিত ছিল না।', en: 'Don’t take offence: his remark was not a veiled allusion against you.' } },
    ],
    exercises: [
      { id: 'ex-b2-vp-1', prompt: { bn: 'সঠিক ব্যাকরণগত রূপ দিয়ে বাক্যটি সম্পূর্ণ করুন (("has nothing to do with"):): Questo argomento non ___ nulla con l’ordine del giorno.', en: 'Complete ("has nothing to do with"):' }, options: ['ci va', 'c’entra', 'se la cava', 'ne vale'], answer: 1, explanation: { bn: 'প্রাসঙ্গিক হওয়া = entrarci (non c’entra nulla)।', en: 'entrarci means to be relevant / have to do with.' } },
    ],
    storyIds: ['st-b2-30'],
    vocabKeys: ["w:B2:l'allusione velata", 'w:B2:il malinteso'],
  },
  'verbi-doppio-ausiliare': {
    rule: {
      bn: 'cambiare, aumentare, diminuire, migliorare, peggiorare, finire, iniziare, salire, scendere, passare ক্রিয়াগুলোর পরে সরাসরি কর্ম (oggetto diretto) থাকলে avere বসে, আর কর্ম না থেকে কর্তার নিজের অবস্থার পরিবর্তন বোঝালে essere বসে।',
      en: 'Verbs of change/movement take avere when transitive (with a direct object) and essere when intransitive.',
    },
    commonMistakes: [
      { wrong: 'I costi di produzione hanno aumentato del 10%.', right: 'I costi di produzione sono aumentati del 10%.', note: { bn: 'কর্মহীন অকর্মক বাক্যে essere (sono aumentati) বসে।', en: 'Intransitive increase takes essere: sono aumentati.' } },
    ],
    examples: [
      { it: 'Il governo ha diminuito le aliquote e la pressione fiscale è diminuita.', tr: { bn: 'সরকার করের হার কমিয়েছে (সকর্মক: ha diminuito) এবং করের বোঝা কমেছে (অকর্মক: è diminuita)।', en: 'The government lowered tax rates (transitive: ha) and the tax burden decreased (intransitive: è).' } },
    ],
    exercises: [
      { id: 'ex-b2-vda-1', prompt: { bn: 'সঠিক সহায়ক ক্রিয়া ও অতীত পার্টিসিপল বেছে নিন: Negli ultimi dieci anni l’aspettativa di vita ___ notevolmente.', en: 'Select the correct auxiliary and participle:' }, options: ['ha cresciuto', 'è cresciuta', 'ha cresciuta', 'è cresciuto'], answer: 1, explanation: { bn: 'l’aspettativa (স্ত্রী একবচন) অকর্মকভাবে বৃদ্ধি পাওয়ায় è cresciuta বসে।', en: 'Intransitive crescere takes essere and feminine agreement.' } },
    ],
    storyIds: ['st-b2-31'],
    vocabKeys: ["w:B2:l'aliquota", 'w:B2:diminuire', "w:B2:l'aspettativa di vita"],
  },
  'causativi-riflessivi': {
    rule: {
      bn: 'farsi + ইনফিনিটিভ (নিজের জন্য করানো বা নিজেকে বোঝানো: farsi capire, farsi rimborsare) এবং lasciarsi + ইনফিনিটিভ (নিজেকে কোনো কিছুর বশবর্তী হতে দেওয়া: lasciarsi prendere dal panico) যৌগিক কালে সর্বদা essere নেয়।',
      en: 'Reflexive causatives (farsi + infinitive, lasciarsi + infinitive) take auxiliary essere in compound tenses.',
    },
    commonMistakes: [
      { wrong: 'Ho fatto rilasciarmi la ricevuta.', right: 'Mi sono fatto rilasciare la ricevuta.', note: { bn: 'প্রতিফলক সর্বনাম mi সহায়ক ক্রিয়ার আগে বসে এবং essere নেয়।', en: 'Reflexive clitic precedes auxiliary essere: Mi sono fatto rilasciare.' } },
    ],
    examples: [
      { it: 'Il consumatore si è fatto sostituire gratuitamente il prodotto difettoso.', tr: { bn: 'ভোক্তা ত্রুটিপূর্ণ পণ্যটি বিনামূল্যে বদলে নিয়েছেন।', en: 'The consumer had the defective product replaced free of charge.' } },
    ],
    exercises: [
      { id: 'ex-b2-crif-2', prompt: { bn: 'সঠিক ব্যাকরণগত রূপ দিয়ে বাক্যটি সম্পূর্ণ করুন (("let oneself be influenced"):): Durante il negoziato non bisogna ___ condizionare dalle pressioni.', en: 'Complete ("let oneself be influenced"):' }, options: ['fare', 'lasciarsi', 'essere', 'avere'], answer: 1, explanation: { bn: 'lasciarsi condizionare = নিজেকে প্রভাবিত হতে দেওয়া।', en: 'lasciarsi + infinitive means to let oneself be influenced.' } },
    ],
    storyIds: ['st-b2-32'],
    vocabKeys: ['w:B2:la sostituzione gratuita', 'w:B2:il prodotto difettoso', 'w:B2:il negoziato di pace'],
  },
  'negazione-pleonastica': {
    rule: {
      bn: 'finché non (যতক্ষণ না), a meno che non (যদি না) এবং অসম তুলনায় (più... di quanto non...) ব্যবহৃত non ক্রিয়াকে নেতিবাচক করে না, বরং ইতালিয়ান বাক্যরীতির স্বাভাবিক অলংকার হিসেবে বসে।',
      en: 'Pleonastic non in finché non ("until"), a meno che non ("unless"), and comparatives (più… di quanto non si pensi) reinforces the clause without negating it.',
    },
    commonMistakes: [
      { wrong: 'Rimarrò qui finché parli (= until).', right: 'Rimarrò qui finché non avrai finito di parlare (= until you finish).', note: { bn: 'finché + ক্রিয়া = যতক্ষণ; finché non + ক্রিয়া = যতক্ষণ না (until)।', en: 'finché = as long as; finché non = until.' } },
    ],
    examples: [
      { it: 'La transizione ecologica è più urgente di quanto non si creda comunemente.', tr: { bn: 'পরিবেশগত রূপান্তর সাধারণ মানুষ যতটা ভাবে তার চেয়েও বেশি জরুরি।', en: 'The ecological transition is more urgent than is commonly believed.' } },
    ],
    exercises: [
      { id: 'ex-b2-np-1', prompt: { bn: 'সঠিক ব্যাকরণগত রূপ দিয়ে বাক্যটি সম্পূর্ণ করুন (with pleonastic negation and subjunctive:): Il contratto resta valido a meno che una delle parti ___ il recesso.', en: 'Complete with pleonastic negation and subjunctive:' }, options: ['non eserciti', 'esercita', 'non eserciterà', 'esercitava'], answer: 0, explanation: { bn: 'ব্যাকরণ সূত্র: a meno che non + congiuntivo presente (eserciti) — a meno che non এর পরে বর্তমান সাবজাংক্টিভ (congiuntivo presente) বসে।', en: 'a meno che non takes the present subjunctive.' } },
    ],
    storyIds: ['st-b2-33'],
    vocabKeys: ['w:B2:la transizione ecologica', 'w:B2:il diritto di recesso', 'w:B2:a meno che non'],
  },
  'comparativi-analogici': {
    rule: {
      bn: 'কাল্পনিক তুলনায় come se-র পরে সর্বদা congiuntivo imperfetto বা trapassato বসে। আর দুটি ক্রিয়ার তুলনায় più/meno... di quanto (বা di quel che) + congiuntivo বসে।',
      en: 'come se ("as if") always governs the imperfect or pluperfect subjunctive; clausal comparisons take più/meno… di quanto + subjunctive.',
    },
    commonMistakes: [
      { wrong: 'Si comporta come se è il padrone.', right: 'Si comporta come se fosse il padrone.', note: { bn: 'come se-র পরে কখনো নির্দেশক কাল বসে না।', en: 'come se always requires the imperfect/pluperfect subjunctive.' } },
    ],
    examples: [
      { it: 'La ripresa economica è stata più rapida di quanto gli analisti avessero ipotizzato.', tr: { bn: 'অর্থনৈতিক পুনরুদ্ধার বিশ্লেষকেরা যতটা অনুমান করেছিলেন তার চেয়ে দ্রুত হয়েছে।', en: 'The economic recovery was faster than analysts had hypothesised.' } },
    ],
    exercises: [
      { id: 'ex-b2-can-1', prompt: { bn: 'শূন্যস্থান পূরণ করুন: Parlava dell’intervento chirurgico con calma, come se non ___ alcuna ansia.', en: 'Complete: come se non ___ alcuna ansia.' }, options: ['ha', 'avesse', 'avrebbe', 'abbia'], answer: 1, explanation: { bn: 'ব্যাকরণ সূত্র: come se + congiuntivo imperfetto (avesse) — come se এর পরে ইমপারফেক্ট সাবজাংক্টিভ (congiuntivo imperfetto) বসে avesse।', en: 'come se requires the imperfect subjunctive avesse.' } },
    ],
    storyIds: ['st-b2-34'],
    vocabKeys: ['w:B2:la ripresa economica', 'w:B2:ipotizzare', "w:B2:l'intervento chirurgico"],
  },
  'superlativo-sintetico': {
    rule: {
      bn: '-ro এবং -re সমাপ্ত কিছু বিশেষণ ল্যাটিন রীতিতে -errimo নেয় (integerrimo, celeberrimo, acerrimo, saluberrimo, miserrimo) এবং -volo/-fico বিশেষণ -entissimo নেয় (benevolentissimo, munificentissimo)।',
      en: 'Adjectives ending in -ro/-re with a consonant before r take -errimo (integerrimo, celeberrimo, acerrimo); those in -volo/-fico take -entissimo.',
    },
    commonMistakes: [
      { wrong: 'È un magistrato integrissimo.', right: 'È un magistrato integerrimo.', note: { bn: 'integro-এর প্রমিত সুপারলেটিভ integerrimo।', en: 'The absolute superlative of integro is integerrimo.' } },
    ],
    examples: [
      { it: 'Quel direttore d’orchestra è celeberrimo in tutti i teatri d’opera.', tr: { bn: 'ওই অর্কেস্ট্রা পরিচালক সব অপেরা থিয়েটারে অত্যন্ত সুপরিচিত।', en: 'That orchestra conductor is exceedingly famous in all opera houses.' } },
    ],
    exercises: [
      { id: 'ex-b2-ss-1', prompt: { bn: 'integro বিশেষণটির সঠিক পরম সুপারলেটিভ কোনটি?', en: 'What is the absolute superlative of "integro"?' }, options: ['integrissimo', 'integerrimo', 'più integro', 'iperintegro'], answer: 1, explanation: { bn: 'সঠিক রূপান্তর: «integro» থেকে পরিবর্তিত হয়ে «integerrimo» ব্যবহৃত হয়।', en: 'integro forms integerrimo.' } },
    ],
    storyIds: ['st-b2-35'],
    vocabKeys: ["w:B2:il direttore d'orchestra", "w:B2:l'opera lirica"],
  },
  'aggettivo-posizione-b2': {
    rule: {
      bn: 'ইতালিয়ানে বিশেষণ বিশেষ্যের পরে বসলে বস্তুনিষ্ঠ বা পার্থক্যসূচক অর্থ দেয় (un funzionario alto = লম্বা কর্মকর্তা), আর আগে বসলে আলংকারিক বা গুণবাচক অর্থ দেয় (un alto funzionario = উচ্চপদস্থ কর্মকর্তা)।',
      en: 'Post-nominal adjectives have a literal/restrictive sense; pre-nominal adjectives shift to a figurative or descriptive meaning.',
    },
    commonMistakes: [
      { wrong: 'Hanno presentato proposte diverse (= molte proposte).', right: 'Hanno presentato diverse proposte (= molte) / proposte diverse (= differenti).', note: { bn: 'diverse বিশেষ্যের আগে "অনেক/বেশ কিছু" এবং পরে "ভিন্ন ভিন্ন" বোঝায়।', en: 'Before the noun, diverse means "several"; after the noun, "different".' } },
    ],
    examples: [
      { it: 'Non abbiamo ancora notizie certe, ma certe notizie apparse sui giornali sono infondate.', tr: { bn: 'আমাদের কাছে এখনো নিশ্চিত খবর নেই, তবে পত্রিকায় আসা কিছু খবর ভিত্তিহীন।', en: 'We do not have reliable news yet, but certain stories in the papers are unfounded.' } },
    ],
    exercises: [
      { id: 'ex-b2-apb-1', prompt: { bn: '“বেশ কয়েকটি বিকল্প” বোঝাতে কোন পদগুচ্ছটি সঠিক?', en: 'Which phrase means "several options" (as opposed to "different options")?' }, options: ['opzioni diverse', 'diverse opzioni', 'opzioni differenti', 'alcuna opzione'], answer: 1, explanation: { bn: 'বিশেষ্যের আগে diverse বসলে "বেশ কয়েকটি" বোঝায়।', en: 'Pre-nominal diverse means "several / various".' } },
    ],
    storyIds: ['st-b2-36'],
    vocabKeys: ['w:B2:la notizia infondata', 'w:B2:infondato'],
  },
  'modali-epistemici': {
    rule: {
      bn: 'dovere ও potere যখন তথ্য ও প্রমাণের ভিত্তিতে অনুমান প্রকাশ করে তখন তাকে ব্যবহারিক অনুমান (uso epistemico) বলে: Deve essersi verificato un guasto (নিশ্চয়ই কোনো ত্রুটি ঘটেছে)।',
      en: 'Epistemic modals express logical deduction (dovere) or hypothesis (potere) about present or past states.',
    },
    commonMistakes: [
      { wrong: 'Ha dovuto piovere stanotte: le strade sono bagnate (ambiguo).', right: 'Deve aver piovuto stanotte: le strade sono bagnate.', note: { bn: 'বর্তমানের প্রমাণ দেখে অতীতের অনুমানে Deve + ইনফিনিটিভ পাসাতো বসে।', en: 'Present deduction about a past event uses Deve + past infinitive.' } },
    ],
    examples: [
      { it: 'I dati non coincidono: deve esserci stato un fraintendimento nella trasmissione.', tr: { bn: 'তথ্যগুলো মিলছে না: প্রেরণের সময় নিশ্চয়ই কোনো ভুল বোঝাবুঝি হয়েছে।', en: 'The figures do not match: there must have been a misunderstanding in transmission.' } },
    ],
    exercises: [
      { id: 'ex-b2-me-1', prompt: { bn: 'যৌক্তিক অনুমান প্রকাশে সঠিক মডাল রূপটি বসান: La luce dello studio è accesa: il notaio ___ essere ancora dentro.', en: 'Express logical deduction ("must still be inside"):' }, options: ['deve', 'ha dovuto', 'dovette', 'abbia dovuto'], answer: 0, explanation: { bn: 'বর্তমানের যৌক্তিক অনুমানে deve + essere বসে।', en: 'Epistemic deduction about the present uses deve essere.' } },
    ],
    storyIds: ['st-b2-37'],
    vocabKeys: ['w:B2:il fraintendimento', 'w:B2:il notaio'],
  },
  'imperativo-formale-pronomi': {
    rule: {
      bn: 'আনুষ্ঠানিক Lei (এবং বহুবচনে Loro) অনুজ্ঞায় একক ও যুগ্ম উভয় প্রকার সর্বনাম সর্বদা ক্রিয়ার আগে বসে: Me lo invii; Ce ne dia conferma; Non se la prenda।',
      en: 'In formal Lei imperatives, simple and combined clitic pronouns always precede the verb.',
    },
    commonMistakes: [
      { wrong: 'Inviamelo pure, Dottore!', right: 'Me lo invii pure, Dottore!', note: { bn: 'ডাক্তারকে আনুষ্ঠানিক Lei সম্বোধনে সর্বনাম ক্রিয়ার আগে বসবে: Me lo invii।', en: 'Formal Lei places pronouns before the subjunctive verb: Me lo invii.' } },
    ],
    examples: [
      { it: 'Avvocato, non esiti a contattarmi e me lo faccia sapere al più presto.', tr: { bn: 'আইনজীবী সাহেব, আমার সাথে যোগাযোগ করতে দ্বিধা করবেন না এবং যত দ্রুত সম্ভব আমাকে তা জানাবেন।', en: 'Counsel, do not hesitate to contact me and let me know as soon as possible.' } },
    ],
    exercises: [
      { id: 'ex-b2-ifp-1', prompt: { bn: 'সঠিক ব্যাকরণগত রূপ দিয়ে বাক্যটি সম্পূর্ণ করুন (formal imperative of accomodarsi:): Signora, ___ pure: il dirigente La riceverà tra un istante.', en: 'Complete formal imperative of accomodarsi:' }, options: ['accomodisi', 'si accomodi', 'accomodati', 'ti accomodi'], answer: 1, explanation: { bn: 'আনুষ্ঠানিক Lei অনুজ্ঞায় si ক্রিয়ার আগে বসে: si accomodi।', en: 'Formal Lei imperative of accomodarsi is si accomodi.' } },
    ],
    storyIds: ['st-b2-38'],
    vocabKeys: ['w:B2:il dirigente scolastico', 'w:B2:la tutela legale'],
  },
  'costrutti-impersonali-b2': {
    rule: {
      bn: 'একাডেমিক ও দাপ্তরিক গদ্যে লেখকের ব্যক্তিগত সর্বনাম এড়িয়ে নৈর্ব্যক্তিক ক্রিয়া ব্যবহৃত হয়: si evince che (+ নির্দেশক), si ritiene che / pare opportuno che (+ congiuntivo), occorre / urge (+ ইনফিনিটিভ)।',
      en: 'Impersonal academic structures: si evince che + indicative (factual inference), si ritiene che + subjunctive (evaluation), occorre / urge + infinitive.',
    },
    commonMistakes: [
      { wrong: 'Si ritiene che la misura è insufficiente.', right: 'Si ritiene che la misura sia insufficiente.', note: { bn: 'Si ritiene che মতামত প্রকাশ করায় এর পরে congiuntivo (sia) বসে।', en: 'Si ritiene che requires the subjunctive sia.' } },
    ],
    examples: [
      { it: 'Dalla relazione annuale si evince che l’inflazione sta rallentando.', tr: { bn: 'বার্ষিক প্রতিবেদন থেকে স্পষ্ট বোঝা যায় যে মুদ্রাস্ফীতি ধীরগতির হচ্ছে।', en: 'From the annual report it can be inferred that inflation is slowing down.' } },
    ],
    exercises: [
      { id: 'ex-b2-cib-1', prompt: { bn: 'সরাসরি ইনফিনিটিভ গ্রহণকারী নৈর্ব্যক্তিক ক্রিয়াটি বেছে নিন: ___ intervenire con tempestività per arginare la dispersione scolastica.', en: 'Choose the impersonal verb taking a direct infinitive:' }, options: ['Urge', 'Si evince', 'Consta', 'Si ritiene che'], answer: 0, explanation: { bn: 'Urge / Occorre-র পরে সরাসরি ইনফিনিটিভ (intervenire) বসে।', en: 'Urge takes a direct infinitive.' } },
    ],
    storyIds: ['st-b2-39'],
    vocabKeys: ['w:B2:rallentare', 'w:B2:la tempestività', 'w:B2:la dispersione scolastica'],
  },
  'reggenze-verbali-b2': {
    rule: {
      bn: 'উচ্চতর ইতালিয়ানে প্রতিটি ক্রিয়া ও বিশেষণের নির্দিষ্ট প্রিপোজিশন মনে রাখা অপরিহার্য: attenersi a, ottemperare a, adeguarsi a, incorrere in, consistere in, prescindere da, scaturire da, vertere su।',
      en: 'Advanced verbs require specific prepositions: attenersi/ottemperare/adeguarsi a, incorrere/consistere in, prescindere/scaturire da, vertere su.',
    },
    commonMistakes: [
      { wrong: 'Tutti devono attenersi con il regolamento.', right: 'Tutti devono attenersi al regolamento.', note: { bn: 'attenersi সর্বদা a প্রিপোজিশন নেয় (attenersi a)।', en: 'attenersi governs preposition a.' } },
    ],
    examples: [
      { it: 'Chi non ottempera agli obblighi fiscali incorre in pesanti sanzioni.', tr: { bn: 'যাঁরা করসংক্রান্ত বাধ্যবাধকতা পালন করেন না তাঁরা কঠোর জরিমানার মুখে পড়েন।', en: 'Whoever fails to comply with tax obligations incurs heavy penalties.' } },
    ],
    exercises: [
      { id: 'ex-b2-rvb-1', prompt: { bn: '"vertere" ক্রিয়ার সাথে ব্যবহৃত সঠিক প্রিপোজিশনটি বেছে নিন: Il colloquio orale verterà ___ argomenti trattati nel seminario.', en: 'Select the correct preposition governed by "vertere":' }, options: ['degli', 'sugli', 'agli', 'nei'], answer: 1, explanation: { bn: 'ব্যাকরণ সূত্র: vertere su qualcosa → sugli argomenti — vertere প্রিপোজিশন গ্রহণ করে su।', en: 'vertere takes preposition su.' } },
    ],
    storyIds: ['st-b2-40'],
    vocabKeys: ['w:B2:attenersi', 'w:B2:ottemperare', 'w:B2:il colloquio orale', 'w:B2:il seminario interdisciplinare'],
  },
  'suffissi-alterativi-b2': {
    rule: {
      bn: '-ino/-etto (ক্ষুদ্রতা, স্নেহ বা কথার তীব্রতা কমানো), -one (বৃহৎ আকার বা গুরুত্ব), -uccio (মমতা বা সামান্য অবজ্ঞা), -accio (নেতিবাচক বা বিরক্তিকর ভাব) প্রত্যয়গুলো কথোপকথনে সূক্ষ্ম প্রাগম্যাটিক অর্থ যোগ করে।',
      en: 'Evaluative suffixes modify nouns and adjectives to convey hedging, affection, irony, or pejorative judgement.',
    },
    commonMistakes: [
      { wrong: 'Ho letto il piccolo libro dell’opera.', right: 'Ho letto il libretto d’opera.', note: { bn: 'অপেরার গীতিনাট্যকে নির্দিষ্ট শব্দে il libretto d’opera বলে।', en: 'Lexicalised diminutive: il libretto d’opera.' } },
    ],
    examples: [
      { it: 'Dopo quella giornataccia in tribunale, avevamo bisogno di un po’ di serenità.', tr: { bn: 'আদালতে ওই ভীষণ বাজে দিনটির পর আমাদের একটু মানসিক প্রশান্তির দরকার ছিল।', en: 'After that awful day in court, we needed some peace of mind.' } },
    ],
    exercises: [
      { id: 'ex-b2-sab-1', prompt: { bn: 'কথার তীব্রতা কমাতে (mitigazione) কোন বাক্যটি ব্যবহৃত হয়েছে?', en: 'Which sentence uses a diminutive suffix as a polite hedge?' }, options: ['Avrei una domandina da porLe sul contratto.', 'Ha commesso un erroraccio.', 'È stato un affarone.', 'Che tempaccio!'], answer: 0, explanation: { bn: 'una domandina ভদ্রভাবে সংকোচে প্রশ্ন করার কৌশল।', en: 'una domandina politely softens a request.' } },
    ],
    storyIds: ['st-b2-41'],
    vocabKeys: ["w:B2:il libretto d'opera", "w:B2:la serenità d'animo"],
  },
  'formazione-parole-b2': {
    rule: {
      bn: 'উপসর্গ (in-/il-/ir-, dis-, s-, ri-, inter-, auto-, sovra-) এবং প্রত্যয় (-zione, -mento, -ità, -evole, -ibile) যোগে বিশেষ্য, বিশেষণ ও ক্রিয়া গঠনের নিয়ম জানলে জটিল টেকনিক্যাল শব্দ সহজেই বিশ্লেষণ করা যায়।',
      en: 'Productive prefixes and suffixes systematically derive abstract nouns, adjectives, and verbs across specialized registers.',
    },
    commonMistakes: [
      { wrong: 'Un danno inreversibile.', right: 'Un danno irreversibile.', note: { bn: 'r-এর আগে নেতিবাচক উপসর্গ in- পরিবর্তিত হয়ে ir- হয় (irreversibile, irrilevante)।', en: 'Before r, prefix in- assimilates to ir- (irreversibile).' } },
    ],
    examples: [
      { it: 'L’interoperabilità dei sistemi informatici evita la duplicazione dei dati.', tr: { bn: 'কম্পিউটার সিস্টেমের আন্তঃকার্যক্ষমতা তথ্যের দ্বিত্ব এড়ায়।', en: 'The interoperability of IT systems avoids data duplication.' } },
    ],
    exercises: [
      { id: 'ex-b2-fpb-1', prompt: { bn: 'legittimo বিশেষণটির বিপরীতার্থক রূপ কোনটি?', en: 'What is the negative form of "legittimo"?' }, options: ['inlegittimo', 'illegittimo', 'slegittimo', 'dislegittimo'], answer: 1, explanation: { bn: 'l-এর আগে in- পরিবর্তিত হয়ে il- হয়: illegittimo।', en: 'Before l, in- assimilates to il-: illegittimo.' } },
    ],
    storyIds: ['st-b2-42'],
    vocabKeys: ['w:B2:irreversibile', 'w:B2:irrilevante', "w:B2:l'interoperabilità", 'w:B2:il licenziamento illegittimo'],
  },
  'lessico-giuridico-burocratico': {
    rule: {
      bn: 'দাপ্তরিক ও আইনি নথিতে প্রচলিত পরিভাষা ও সেগুলোর সাধারণ সমার্থক শব্দ জানা জরুরি: istanza = domanda, diniego = rifiuto, erogare = fornire, ottemperare = rispettare, altresì = inoltre, all’uopo = a tale scopo।',
      en: 'Bureaucratic and legal Italian uses elevated synonyms that correspond to everyday terms.',
    },
    commonMistakes: [
      { wrong: 'La legge è stata abrogata dal sindaco.', right: 'La legge è stata abrogata dal Parlamento (o con referendum abrogativo).', note: { bn: 'আইন বাতিল (abrogare) কেবল সংসদ বা গণভোটের মাধ্যমে হয়।', en: 'abrogare applies to laws repealed by Parliament or referendum.' } },
    ],
    examples: [
      { it: 'Il cittadino può presentare un’autocertificazione in luogo del certificato anagrafico.', tr: { bn: 'নাগরিক নিবন্ধন সনদের পরিবর্তে একটি স্ব-ঘোষণাপত্র জমা দিতে পারেন।', en: 'The citizen may submit a self-certification in place of the registry certificate.' } },
    ],
    exercises: [
      { id: 'ex-b2-lgb-1', prompt: { bn: 'দাপ্তরিক শব্দ "ottemperare agli obblighi"-এর সাধারণ অর্থ কী?', en: 'What is the plain-Italian meaning of "ottemperare agli obblighi"?' }, options: ['rispettare gli obblighi', 'evitare gli obblighi', 'rinviare gli obblighi', 'contestare gli obblighi'], answer: 0, explanation: { bn: 'ottemperare = মেনে চলা / পালন করা (rispettare)।', en: 'ottemperare means to comply with / respect.' } },
    ],
    storyIds: ['st-b2-43'],
    vocabKeys: ["w:B2:l'autocertificazione", 'w:B2:il referendum abrogativo', 'w:B2:ottemperare'],
  },
  'lessico-economico-finanziario': {
    rule: {
      bn: 'অর্থনীতি ও কর্পোরেট প্রতিবেদনে সুনির্দিষ্ট বিশেষ্য-ক্রিয়া জোড় (collocazioni) ব্যবহৃত হয়: stanziare fondi, colmare il disavanzo, diversificare il portafoglio, ammortizzare i costi, quotarsi in borsa।',
      en: 'Financial and corporate discourse relies on fixed collocations such as stanziare fondi, colmare il disavanzo, and diversificare il portafoglio.',
    },
    commonMistakes: [
      { wrong: 'Fare un fatturato di due milioni.', right: 'Registrare / generare un fatturato annuo di due milioni.', note: { bn: 'আনুষ্ঠানিক অর্থনৈতিক ভাষায় fare-এর বদলে registrare / generare বসে।', en: 'Use registrare or realizzare un fatturato in formal business Italian.' } },
    ],
    examples: [
      { it: 'La diversificazione del portafoglio d’investimento riduce il rischio complessivo.', tr: { bn: 'বিনিয়োগ পোর্টফোলিওর বহুমুখীকরণ সামগ্রিক ঝুঁকি হ্রাস করে।', en: 'Diversification of the investment portfolio reduces overall risk.' } },
    ],
    exercises: [
      { id: 'ex-b2-lef-1', prompt: { bn: 'তহবিল বরাদ্দ করা অর্থে সঠিক অর্থনৈতিক ক্রিয়াটি বেছে নিন: Il consiglio di amministrazione ha deciso di ___ nuovi fondi per la ricerca.', en: 'Choose the exact economic verb meaning "to allocate funds":' }, options: ['stanziare', 'abrogare', 'eccepire', 'smaltire'], answer: 0, explanation: { bn: 'তহবিল বরাদ্দ করা = stanziare fondi।', en: 'stanziare means to allocate funds.' } },
    ],
    storyIds: ['st-b2-44'],
    vocabKeys: ['w:B2:il fatturato annuo', "w:B2:il portafoglio d'investimento", 'w:B2:la diversificazione', 'w:B2:il consiglio di amministrazione'],
  },
  'lessico-scientifico-accademico': {
    rule: {
      bn: 'বৈজ্ঞানিক ও একাডেমিক নিবন্ধে ব্যক্তিনিষ্ঠতার বদলে তথ্যনির্ভর ও নৈর্ব্যক্তিক ভাষা ব্যবহৃত হয়: formulare un’ipotesi, sottoporre a verifica empirica, selezionare un campione statistico, revisione paritaria।',
      en: 'Scientific prose uses objective terminology: formulare un’ipotesi, verifica empirica, campione statistico, revisione paritaria.',
    },
    commonMistakes: [
      { wrong: 'Ho provato che la mia idea è vera.', right: 'Lo studio ha sottoposto l’ipotesi a verifica empirica, confermandone la validità.', note: { bn: 'একাডেমিক লেখায় বস্তুনিষ্ঠ পরিভাষা ব্যবহৃত হয়।', en: 'Academic register favours impersonal empirical phrasing.' } },
    ],
    examples: [
      { it: 'Prima della pubblicazione accademica, l’articolo è stato valutato tramite revisione paritaria.', tr: { bn: 'একাডেমিক প্রকাশনার আগে নিবন্ধটি পিয়ার রিভিউয়ের মাধ্যমে মূল্যায়ন করা হয়েছে।', en: 'Prior to academic publication, the paper was evaluated through peer review.' } },
    ],
    exercises: [
      { id: 'ex-b2-lsa-1', prompt: { bn: 'গবেষণার তথ্যের নির্ভরযোগ্যতা বোঝাতে কোন শব্দটি ব্যবহৃত হয়?', en: 'Which term denotes the reliability of research data?' }, options: ['l’attendibilità dei dati', 'la suscettibilità dei dati', 'la prescrizione dei dati', 'la stagionatura dei dati'], answer: 0, explanation: { bn: 'তথ্যের নির্ভরযোগ্যতা = l’attendibilità dei dati।', en: 'l’attendibilità dei dati means data reliability.' } },
    ],
    storyIds: ['st-b2-45'],
    vocabKeys: ['w:B2:la verifica empirica', 'w:B2:la pubblicazione accademica', 'w:B2:la revisione paritaria', "w:B2:l'attendibilità dei dati"],
  },
  'lessico-giornalistico': {
    rule: {
      bn: 'সংবাদপত্রের শিরোনামে সহায়ক ক্রিয়া উহ্য থাকে, কোলন দিয়ে মূল বিষয় ও বক্তব্য আলাদা করা হয় এবং সংক্ষিপ্ত বিশেষ্য পদগুচ্ছ ব্যবহৃত হয়: Caro affitti, piano per gli studenti; Clima: intesa al vertice।',
      en: 'Newspaper headlines omit auxiliary verbs and use nominal clauses separated by commas or colons.',
    },
    commonMistakes: [
      { wrong: 'Shironam: Il governo ha approvato ieri il decreto sul lavoro.', right: 'Lavoro, varato il decreto: nuovi incentivi per i giovani.', note: { bn: 'শিরোনামে সংক্ষিপ্ত বিশেষ্য শৈলী (Stile nominale) ব্যবহৃত হয়।', en: 'Headlines front the theme followed by a participle or noun phrase.' } },
    ],
    examples: [
      { it: 'Il giornalismo d’inchiesta svolge un ruolo imprescindibile per la libertà di stampa.', tr: { bn: 'অনুসন্ধানী সাংবাদিকতা সংবাদপত্রের স্বাধীনতার জন্য অপরিহার্য ভূমিকা পালন করে।', en: 'Investigative journalism plays an indispensable role for freedom of the press.' } },
    ],
    exercises: [
      { id: 'ex-b2-lg-1', prompt: { bn: '«Siccità, allarme nelle campagne» শিরোনামটিতে কোন শৈলী ব্যবহৃত হয়েছে?', en: 'What syntactic feature characterizes the headline "Siccità, allarme nelle campagne"?' }, options: ['Stile nominale con ellissi del verbo', 'Periodo ipotetico del terzo tipo', 'Discorso indiretto libero', 'Trapassato remoto'], answer: 0, explanation: { bn: 'ক্রিয়া উহ্য রেখে বিশেষ্য পদ দিয়ে শিরোনাম গঠনকে stile nominale বলে।', en: 'Headlines rely on nominal style with verb ellipsis.' } },
    ],
    storyIds: ['st-b2-46'],
    vocabKeys: ["w:B2:il giornalismo d'inchiesta", 'w:B2:imprescindibile', 'w:B2:la libertà di stampa'],
  },
  'figure-retoriche-b2': {
    rule: {
      bn: 'উচ্চতর কথোপকথন ও সাহিত্যে অলংকারের ব্যবহার: ১) Litote (বিপরীত শব্দের নেতিবাচকতায় জোরালো ইতিবাচক অর্থ: non è irrilevante = è molto importante), ২) Metafora (la fuga dei cervelli, la bolla informativa), ৩) Ironia sottile।',
      en: 'Rhetorical figures enrich B2 expression: litotes (non indifferente = notevole), lexicalised metaphors (la fuga dei cervelli), subtle irony.',
    },
    commonMistakes: [
      { wrong: 'Un impegno non indifferente = un impegno piccolo.', right: 'Un impegno non indifferente = un impegno molto grande.', note: { bn: 'লিটোটেসে non indifferente মানে "অতি উল্লেখযোগ্য/বিশাল"।', en: 'Litotes non indifferente means "considerable / very significant".' } },
    ],
    examples: [
      { it: 'La riforma ha comportato un onere finanziario non trascurabile per le famiglie.', tr: { bn: 'সংস্কারটি পরিবারগুলোর জন্য কম নয় এমন (অর্থাৎ বেশ বড়) আর্থিক বোঝা ডেকে এনেছে।', en: 'The reform entailed a not negligible (= considerable) financial burden for families.' } },
    ],
    exercises: [
      { id: 'ex-b2-frb-1', prompt: { bn: '«Un risultato non trascurabile» বলতে কী বোঝায়?', en: 'What does the litotes "un risultato non trascurabile" mean?' }, options: ['Un risultato del tutto inutile', 'Un risultato notevole e importante', 'Un risultato incerto', 'Un risultato provvisorio'], answer: 1, explanation: { bn: 'trascurabile (উপেক্ষণীয়)-এর নেতিবাচক non trascurabile মানে অত্যন্ত গুরুত্বপূর্ণ।', en: 'Negating "negligible" means "significant / noteworthy".' } },
    ],
    storyIds: ['st-b2-47'],
    vocabKeys: ['w:B2:trascurabile', 'w:B2:la fuga dei cervelli', 'w:B2:la bolla informativa'],
  },
  'punteggiatura-stilistica': {
    rule: {
      bn: 'কোলন (:) কারণ বা ব্যাখ্যা প্রবর্তন করে; সেমিকোলন (;) দুটি জটিল কিন্তু সমমানের খণ্ডবাক্যকে যুক্ত করে (বিশেষত pertanto, tuttavia, inoltre-র আগে); জোড়া কমা বা ড্যাশ প্রাসঙ্গিক ব্যাখ্যা (inciso) ঘিরে রাখে।',
      en: 'Colons introduce explanations/causes; semicolons separate complex coordinate clauses before connectors like tuttavia/pertanto; paired commas enclose parenthetical remarks.',
    },
    commonMistakes: [
      { wrong: 'La banca, ha respinto la domanda di mutuo.', right: 'La banca, dopo aver esaminato i redditi, ha respinto la domanda.', note: { bn: 'কর্তা ও ক্রিয়ার মাঝখানে কখনো একক কমা বসে না (কেবল জোড়া কমায় inciso বসতে পারে)।', en: 'Never separate subject and verb with a single comma.' } },
    ],
    examples: [
      { it: 'Il bando scadeva a mezzanotte: chi non ha inviato la domanda è rimasto escluso.', tr: { bn: 'বিজ্ঞপ্তির মেয়াদ মধ্যরাতে শেষ হয়েছে: যাঁরা আবেদন পাঠাননি তাঁরা বাদ পড়েছেন।', en: 'The call closed at midnight: whoever did not send the application was excluded.' } },
    ],
    exercises: [
      { id: 'ex-b2-ps-1', prompt: { bn: 'কোন বাক্যটিতে যতিচিহ্নের ব্যবহার সম্পূর্ণ সঠিক?', en: 'Which sentence uses punctuation properly?' }, options: ['L’accordo, tuttavia, richiede ancora la ratifica parlamentare.', 'L’accordo tuttavia, richiede, la ratifica.', 'L’accordo, richiede la ratifica.', 'L’accordo: tuttavia richiede la ratifica.'], answer: 0, explanation: { bn: 'মাঝখানে আসা সংযোজক tuttavia জোড়া কমা দিয়ে ঘেরা থাকে।', en: 'Parenthetical tuttavia is enclosed in paired commas.' } },
    ],
    storyIds: ['st-b2-48'],
    vocabKeys: ['w:B2:ratificare', 'w:B2:il bando di concorso'],
  },
  'coesione-anaforica': {
    rule: {
      bn: 'পূর্ববর্তী বাক্যের পুরো ভাবটিকে পরের বাক্যে tale fenomeno, siffatta ipotesi, questo provvedimento, la suddetta clausola বা quest’ultimo দিয়ে সংক্ষেপে নির্দেশ করলে পাঠ্যের সংহতি ও মান বৃদ্ধি পায়।',
      en: 'Anaphoric encapsulators (tale fenomeno, questo provvedimento, quest’ultimo) summarise an entire preceding clause without repetition.',
    },
    commonMistakes: [
      { wrong: 'I giovani emigrano all’estero. Questo emigrare dei giovani è grave.', right: 'Molti giovani laureati emigrano all’estero. Tale fenomeno impoverisce il Paese.', note: { bn: 'একই শব্দ পুনরাবৃত্তি না করে Tale fenomeno ব্যবহার করা B2 রীতির বৈশিষ্ট্য।', en: 'Use an encapsulating noun phrase (Tale fenomeno) to avoid lexical repetition.' } },
    ],
    examples: [
      { it: 'Le emissioni sono calate del 12%; tale diminuzione dimostra l’efficacia delle nuove norme.', tr: { bn: 'নির্গমন ১২% কমেছে; এই হ্রাস নতুন বিধিমালার কার্যকারিতা প্রমাণ করে।', en: 'Emissions fell by 12%; such a decrease proves the effectiveness of the new rules.' } },
    ],
    exercises: [
      { id: 'ex-b2-ca-2', prompt: { bn: 'সর্বশেষ উল্লিখিত পুংলিঙ্গ একবচন বিশেষ্য নির্দেশক সর্বনামটি বেছে নিন: Il governo ha varato il decreto; ___ entrerà in vigore domani.', en: 'Choose the pronoun referring to the last mentioned masculine singular noun:' }, options: ['quest’ultimo', 'quest’ultima', 'costoro', 'altresì'], answer: 0, explanation: { bn: 'il decreto পুং একবচন হওয়ায় সর্বশেষ উল্লেখিত বিশেষ্য বোঝাতে quest’ultimo বসে।', en: 'quest’ultimo refers back to the latter masculine singular noun.' } },
    ],
    storyIds: ['st-b2-49'],
    vocabKeys: ["w:B2:l'efficacia", 'w:B2:entrare in vigore'],
  },
  'varieta-italiano': {
    rule: {
      bn: 'প্রমিত লিখিত ইতালিয়ান (italiano standard/formale) এবং শিক্ষিত কথ্য ইতালিয়ান (neostandard)-এর মধ্যে রেজিস্টার অনুযায়ী সচেতন চয়ন করা B2 দক্ষতার মূল চাবিকাঠি।',
      en: 'B2 speakers consciously shift between formal written standard and educated spoken neostandard according to context.',
    },
    commonMistakes: [
      { wrong: 'Nella tesi: Gli ho detto ai docenti che venivo.', right: 'Nella tesi: Ho comunicato ai docenti che avrei partecipato.', note: { bn: 'একাডেমিক লেখায় কথ্য gli... ai docenti এবং venivo পরিহার্য।', en: 'Avoid colloquial redundant clitics and imperfect-for-conditional in academic writing.' } },
    ],
    examples: [
      { it: 'Nel registro formale scriviamo «abbiamo comunicato loro», mentre nel parlato prevale «gli abbiamo detto».', tr: { bn: 'আনুষ্ঠানিক রীতিতে আমরা লিখি «abbiamo comunicato loro», আর কথ্য ভাষায় «gli abbiamo detto» প্রাধান্য পায়।', en: 'In formal register we write "abbiamo comunicato loro", whereas in speech "gli abbiamo detto" prevails.' } },
    ],
    exercises: [
      { id: 'ex-b2-vi-1', prompt: { bn: 'কোন বাক্যটি উচ্চতর আনুষ্ঠানিক লিখিত রেজিস্টারের (italiano standard formale) উদাহরণ?', en: 'Which sentence exemplifies formal written standard Italian?' }, options: ['Qualora gli interessati non ottemperino, decadranno dal beneficio.', 'Se non fanno quello che gli abbiamo detto, perdono tutto.', 'A me non mi sembra giusto così.', 'Ci vuole che tutti fanno presto.'], answer: 0, explanation: { bn: 'Qualora + congiuntivo এবং ottemperare আনুষ্ঠানিক লিখিত রীতির বৈশিষ্ট্য।', en: 'Qualora + subjunctive and lexical precision mark formal standard Italian.' } },
    ],
    storyIds: ['st-b2-50'],
    vocabKeys: ['w:B2:prevalere', 'w:B2:qualora', 'w:B2:ottemperare'],
  },
  'pragmatica-mitigazione': {
    rule: {
      bn: 'পেশাগত ও একাডেমিক বিতর্কে সরাসরি রূঢ়ভাবে দ্বিমত না জানিয়ে condizionale di cortesia (vorrei far notare, mi permetterei di), ছাড়বাচক ভূমিকা (pur condividendo...) এবং লিটোটেস ব্যবহার করে বক্তব্যকে কূটনৈতিক করা হয়।',
      en: 'Diplomatic hedging uses conditionals (mi permetterei di osservare), concessive prefaces (pur comprendendo…), and litotes.',
    },
    commonMistakes: [
      { wrong: 'In riunione: La Sua proposta è completamente assurda.', right: 'Pur apprezzando lo sforzo, temo che la proposta presenti alcune criticità.', note: { bn: 'আনুষ্ঠানিক সভায় কূটনৈতিক শিষ্টাচার বজায় রাখা জরুরি।', en: 'Use diplomatic hedging in professional meetings.' } },
    ],
    examples: [
      { it: 'Pur comprendendo le Sue perplessità, mi permetterei di sottolineare i vantaggi a lungo termine.', tr: { bn: 'আপনার সংশয় বুঝতে পারলেও আমি দীর্ঘমেয়াদি সুবিধাগুলোর ওপর জোর দেওয়ার অনুমতি চাইব।', en: 'While understanding your reservations, I would venture to emphasise the long-term benefits.' } },
    ],
    exercises: [
      { id: 'ex-b2-pm-1', prompt: { bn: 'কোন বাক্যটি সবচেয়ে ভদ্র ও কূটনৈতিকভাবে দ্বিমত প্রকাশ করে?', en: 'Which sentence expresses disagreement most diplomatically?' }, options: ['Sbaglia del tutto su questo punto.', 'Non crede che sarebbe opportuno approfondire ulteriormente questi dati?', 'Questi dati sono falsi e inutili.', 'Deve cambiare subito tutto il progetto.'], answer: 1, explanation: { bn: 'Non crede che sarebbe opportuno...? কূটনৈতিক শিষ্টাচারের আদর্শ রূপ।', en: 'Negative rhetorical question with conditional and subjunctive softens the critique.' } },
    ],
    storyIds: ['st-b2-51'],
    vocabKeys: ['w:B2:sottolineare', 'w:B2:approfondire', 'w:B2:a lungo termine'],
  },
  'argomentazione-saggio-b2': {
    rule: {
      bn: 'যুক্তিনির্ভর প্রবন্ধে প্রথমে প্রেক্ষাপট ও মূল দাবি (tesi), এরপর তথ্যপ্রমাণসহ সপক্ষে যুক্তি, তারপর প্রতিপক্ষের যুক্তি উল্লেখ করে তা খণ্ডন (antitesi e confutazione) এবং সবশেষে সমন্বিত উপসংহার (sintesi) উপস্থাপন করা হয়।',
      en: 'An argumentative essay integrates thesis statement, supporting evidence, counter-argument refutation, and final synthesis.',
    },
    commonMistakes: [
      { wrong: 'Ignorare completamente le obiezioni altrui in un saggio.', right: 'Introdurre l’antitesi (Se da un lato si obietta che…) e confutarla con dati oggettivi.', note: { bn: 'প্রতিযুক্তি উল্লেখ করে তা খণ্ডন করলে প্রবন্ধের গ্রহণযোগ্যতা বহুগুণ বাড়ে।', en: 'Addressing and refuting counter-arguments strengthens argumentative writing.' } },
    ],
    examples: [
      { it: 'Chi osteggia tale riforma teme i costi iniziali; tuttavia, i dati dimostrano che il risparmio energetico li compenserà in tre anni.', tr: { bn: 'যাঁরা এই সংস্কারের বিরোধিতা করেন তাঁরা প্রাথমিক খরচের ভয় পান; তা সত্ত্বেও তথ্য প্রমাণ করে যে শক্তি সাশ্রয় তিন বছরেই তা পুষিয়ে দেবে।', en: 'Those who oppose this reform fear the initial costs; however, data show that energy savings will offset them within three years.' } },
    ],
    exercises: [
      { id: 'ex-b2-asb-1', prompt: { bn: 'প্রবন্ধে প্রতিপক্ষের যুক্তি খণ্ডন করার প্রক্রিয়াকে ইতালিয়ানে কী বলা হয়?', en: 'What is the Italian term for refuting a counter-argument in an essay?' }, options: ['la confutazione', 'la stagionatura', 'la prescrizione', 'la domiciliazione'], answer: 0, explanation: { bn: 'যুক্তি খণ্ডন করা = la confutazione।', en: 'la confutazione means refutation.' } },
    ],
    storyIds: ['st-b2-52'],
    vocabKeys: ['w:B2:osteggiare', 'w:B2:compensare', 'w:B2:la confutazione', "w:B2:l'argomentazione logica"],
  },
};
