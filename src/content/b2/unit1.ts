import type { Lesson, Unit } from '../types';

const lesson1: Lesson = {
  id: 'b2-u1-l1',
  number: 1,
  title: 'Avrei preferito che avessero valutato',
  subtitle: { bn: 'congiuntivo-তে উন্নত কালের সামঞ্জস্য ও স্বাধীন ব্যবহার', en: 'Advanced subjunctive sequence & independent subjunctive' },
  minutes: 16,
  objectives: [
    { bn: 'কন্ডিশনাল ও অতীত প্রধান ক্রিয়ার সাথে congiuntivo imperfetto ও trapassato-র সূক্ষ্ম সামঞ্জস্য প্রয়োগ করবেন', en: 'Master sequence of tenses after conditional and past main verbs' },
    { bn: 'Magari, Se solo এবং Costi quel che costi দিয়ে স্বাধীন বাক্যে আকাঙ্ক্ষা ও সংশয় প্রকাশ করবেন', en: 'Use independent subjunctives for wishes, regrets, and doubt' },
  ],
  phrases: [
    { id: 'b2u1l1-p1', it: 'Avrei preferito che la commissione avesse esaminato il ricorso con imparzialità.', tr: { bn: 'আমি পছন্দ করতাম যদি পর্ষদ আপিলটি নিরপেক্ষতার সাথে পরীক্ষা করত।', en: 'I would have preferred that the board had examined the appeal impartially.' } },
    { id: 'b2u1l1-p2', it: 'Vorrei che il consiglio valutasse anche le ripercussioni a lungo termine.', tr: { bn: 'আমি চাই পরিচালনা পর্ষদ দীর্ঘমেয়াদি প্রভাবগুলোও মূল্যায়ন করুক।', en: 'I would like the board to evaluate the long-term repercussions as well.' } },
    { id: 'b2u1l1-p3', it: 'Magari il ministero avesse stanziato fondi congrui per il restauro!', tr: { bn: 'ইশ, মন্ত্রণালয় যদি সংস্কারের জন্য পর্যাপ্ত তহবিল বরাদ্দ করত!', en: 'If only the ministry had allocated adequate funds for the restoration!' } },
    { id: 'b2u1l1-p4', it: 'Costi quel che costi, difenderemo l’indipendenza della ricerca.', tr: { bn: 'যত মূল্যই দিতে হোক না কেন, আমরা গবেষণার স্বাধীনতা রক্ষা করব।', en: 'Whatever it takes, we will defend the independence of research.' } },
  ],
  grammar: [
    {
      id: 'concordanza-avanzata',
      title: { bn: 'উন্নত কালের সামঞ্জস্য ও স্বাধীন congiuntivo', en: 'Advanced sequence & independent subjunctive' },
      explanation: {
        bn: 'প্রধান বাক্য Vorrei বা Avrei preferito-তে থাকলে অধীন বাক্যে সমসাময়িক কাজে congiuntivo imperfetto (valutasse) এবং পূর্ববর্তী কাজে congiuntivo trapassato (avesse valutato) বসে। স্বাধীন বাক্যে Magari বা Se solo অতীতের আক্ষেপে trapassato নেয়।',
        en: 'Conditional main verbs (Vorrei, Avrei voluto) trigger imperfect subjunctive for simultaneous actions and pluperfect subjunctive for prior actions. Independent Magari / Se solo express wishes or regrets.',
      },
      table: [
        { label: 'Vorrei che (ora/poi)', it: 'che tu leggessi la normativa', tr: { bn: 'তুমি বিধিমালা পড়ো', en: 'that you read the regulations' } },
        { label: 'Avrei voluto che (prima)', it: 'che avessero accolto l’emendamento', tr: { bn: 'সংশোধনী গ্রহণ করত', en: 'that they had accepted the amendment' } },
        { label: 'Indipendente (Magari)', it: 'Magari avessimo salvato il backup!', tr: { bn: 'ইশ, যদি ব্যাকআপ নিতাম!', en: 'If only we had saved the backup!' } },
      ],
      examples: [
        { id: 'b2u1l1-e1', it: 'Dubitavamo che il decreto potesse entrare in vigore prima dell’autunno.', tr: { bn: 'ডিক্রিটি শরতের আগে কার্যকর হতে পারবে কি না তা নিয়ে আমাদের সন্দেহ ছিল।', en: 'We doubted the decree could come into force before autumn.' } },
        { id: 'b2u1l1-e2', it: 'Che abbiano già pubblicato la graduatoria definitiva?', tr: { bn: 'তাঁরা কি ইতিমধ্যে চূড়ান্ত মেধাতালিকা প্রকাশ করে দিয়েছেন?', en: 'Could they have already published the final ranking?' } },
      ],
    },
  ],
  dialogue: {
    title: { bn: 'সাংবিধানিক সংশোধনী নিয়ে পর্যালোচনা', en: 'Reviewing a constitutional amendment' },
    context: { bn: 'আইনজীবী ক্লারা ও গবেষক নাদিম পর্ষদের সিদ্ধান্ত নিয়ে আলোচনা করছেন।', en: 'Lawyer Clara and researcher Nadim discuss the committee’s decision.' },
    lines: [
      { speaker: 'Clara', it: 'Nadim, avrei preferito che la commissione avesse ascoltato anche i rappresentanti dei consumatori.', tr: { bn: 'নাদিম, আমি পছন্দ করতাম যদি কমিটি ভোক্তাদের প্রতিনিধিদের কথাও শুনত।', en: 'Nadim, I would have preferred that the committee had also heard consumer representatives.' } },
      { speaker: 'Nadim', it: 'Concordo pienamente. Magari avessero accolto almeno l’emendamento sulla trasparenza!', tr: { bn: 'আমি সম্পূর্ণ একমত। ইশ, অন্তত স্বচ্ছতা বিষয়ক সংশোধনীটিও যদি তাঁরা গ্রহণ করতেন!', en: 'I completely agree. If only they had at least accepted the amendment on transparency!' } },
      { speaker: 'Clara', it: 'Sia come sia, presenteremo ricorso entro trenta giorni affinché vengano riesaminati gli atti.', tr: { bn: 'যা-ই হোক, আমরা ত্রিশ দিনের মধ্যে আপিল করব যাতে নথিপত্র পুনরায় পরীক্ষা করা হয়।', en: 'Be that as it may, we will lodge an appeal within thirty days so the records are re-examined.' } },
    ],
  },
  quiz: [
    { id: 'q1', prompt: { bn: 'Vorrei che-র পরে সঠিক কালের সামঞ্জস্য বেছে নিন:', en: 'Choose the right tense after Vorrei che:' }, it: 'Vorrei che il relatore ___ più chiaramente i dati.', options: ['esponga', 'esponesse', 'espone', 'esporrà'], answer: 1, explanation: { bn: 'Vorrei (কন্ডিশনাল)-এর পরে সমসাময়িক কাজে congiuntivo imperfetto (esponesse) বসে।', en: 'Conditional Vorrei takes the imperfect subjunctive esponesse.' } },
    { id: 'q2', prompt: { bn: 'অতীতের আক্ষেপ প্রকাশে Se solo-র পরে কী বসে?', en: 'Which form expresses past regret after Se solo?' }, it: 'Se solo ___ il backup prima del guasto!', options: ['facciamo', 'avremmo fatto', 'avessimo fatto', 'faremmo'], answer: 2, explanation: { bn: 'অতীতের অপূর্ণ ইচ্ছায় Se solo + congiuntivo trapassato (avessimo fatto)।', en: 'Past regret uses Se solo + pluperfect subjunctive.' } },
    { id: 'q3', prompt: { bn: 'কাঙ্ক্ষিত যোগ্যতা বোঝাতে সম্বন্ধবাচক বাক্যে কী বসে?', en: 'Select the subjunctive for a sought qualification:' }, it: 'Cerchiamo un notaio che ___ redigere l’atto oggi.', options: ['può', 'possa', 'potrà', 'poteva'], answer: 1, explanation: { bn: 'অনির্দিষ্ট/কাঙ্ক্ষিত ব্যক্তির বৈশিষ্ট্যে congiuntivo (possa) বসে।', en: 'Unspecified sought referent takes the subjunctive possa.' } },
    { id: 'q4', prompt: { bn: 'কোন সংযোজকটি আনুষ্ঠানিক শর্ত বোঝায়?', en: 'Which conjunction introduces a formal condition?' }, it: '___ l’inadempimento persista, rescinderemo il contratto.', options: ['Sebbene', 'Qualora', 'Pertanto', 'Giacché'], answer: 1, explanation: { bn: 'Qualora + congiuntivo = যদি এমন হয় যে (আনুষ্ঠানিক)।', en: 'Qualora + subjunctive means "should / in the event that".' } },
  ],
  tip: { bn: 'মনে রাখবেন: প্রধান ক্রিয়ায় কন্ডিশনাল (Vorrei / Sarebbe bene che) থাকলে প্রায়ই অতীত সংযোজক নয়, congiuntivo imperfetto ব্যবহৃত হয়।', en: 'Remember: main verbs in the conditional (Vorrei che, Sarebbe utile che) govern the imperfect or pluperfect subjunctive.' },
};

const lesson2: Lesson = {
  id: 'b2-u1-l2',
  number: 2,
  title: 'Se avessi investito allora, oggi sarei sereno',
  subtitle: { bn: 'মিশ্র শর্তবাক্য, ছাড়বাচক ও আনুষ্ঠানিক শর্ত', en: 'Mixed conditionals, concessives & formal condition clauses' },
  minutes: 15,
  objectives: [
    { bn: 'অতীত শর্তের সাথে বর্তমান ফলাফলের মিশ্র শর্তবাক্য (periodo ipotetico misto) গঠন করবেন', en: 'Construct mixed conditionals linking past conditions to present outcomes' },
    { bn: 'per quanto, qualora এবং a condizione che ব্যবহার করে শর্ত ও ছাড় প্রকাশ করবেন', en: 'Express formal concession and condition with per quanto, qualora, and a condizione che' },
  ],
  phrases: [
    { id: 'b2u1l2-p1', it: 'Se dieci anni fa avessi investito nelle energie rinnovabili, oggi avrei un portafoglio solido.', tr: { bn: 'দশ বছর আগে নবায়নযোগ্য শক্তিতে বিনিয়োগ করলে আজ আমার একটি মজবুত পোর্টফোলিও থাকত।', en: 'If I had invested in renewables ten years ago, today I would have a solid portfolio.' } },
    { id: 'b2u1l2-p2', it: 'Se tu fossi più prudente, ieri non avresti firmato quella clausola vessatoria.', tr: { bn: 'তুমি যদি আরও বিচক্ষণ হতে, তবে গতকাল ওই অন্যায় শর্তে সই করতে না।', en: 'If you were more prudent, yesterday you would not have signed that unfair clause.' } },
    { id: 'b2u1l2-p3', it: 'Per quanto sia autorevole la fonte, occorre sempre verificarla.', tr: { bn: 'উৎসটি যতই নির্ভরযোগ্য হোক না কেন, তা সর্বদা যাচাই করা প্রয়োজন।', en: 'However authoritative the source may be, it must always be verified.' } },
    { id: 'b2u1l2-p4', it: 'Qualora il prodotto sia difettoso, il cliente ha diritto alla sostituzione gratuita.', tr: { bn: 'পণ্যটি ত্রুটিপূর্ণ হলে ক্রেতার বিনামূল্যে পরিবর্তনের অধিকার রয়েছে।', en: 'Should the product be defective, the customer is entitled to a free replacement.' } },
  ],
  grammar: [
    {
      id: 'periodo-ipotetico-misto',
      title: { bn: 'মিশ্র শর্তসাপেক্ষ বাক্য ও ছাড়বাচক কাঠামো', en: 'Mixed conditionals & formal concessives' },
      explanation: {
        bn: 'অতীতের অঘটিত কাজ আজকের বর্তমান অবস্থাকে প্রভাবিত করলে: Se + congiuntivo trapassato, + condizionale presente (আজ)। আবার বর্তমানের স্থায়ী বৈশিষ্ট্য অতীতে কোনো ঘটনা এড়াতে পারত বোঝালে: Se + congiuntivo imperfetto, + condizionale passato (গতকাল)।',
        en: 'Past cause → present outcome: Se + pluperfect subjunctive + present conditional. Permanent trait → past outcome: Se + imperfect subjunctive + past conditional.',
      },
      table: [
        { label: 'Passato → Presente', it: 'Se avessimo coibentato la casa, oggi spenderemmo meno', tr: { bn: 'তখন নিরোধক বসালে আজ কম খরচ হতো', en: 'If we had insulated it, today we’d spend less' } },
        { label: 'Presente → Passato', it: 'Se conoscessi il codice, ieri avresti chiesto il reso', tr: { bn: 'আইন জানলে গতকাল ফেরত চাইতে', en: 'If you knew the code, yesterday you’d have claimed a refund' } },
      ],
      examples: [
        { id: 'b2u1l2-e1', it: 'Chiunque trasgredisca la norma incorre in una sanzione amministrativa.', tr: { bn: 'যে কেউ নিয়ম লঙ্ঘন করবে সে প্রশাসনিক জরিমানার মুখে পড়বে।', en: 'Whoever breaches the rule incurs an administrative penalty.' } },
      ],
    },
  ],
  dialogue: {
    title: { bn: 'দীর্ঘমেয়াদি জ্বালানি পরিকল্পনা', en: 'Long-term energy planning' },
    context: { bn: 'দম্পতি মাতেও ও ফারিহা বাড়ির সৌরবিদ্যুৎ বিল পর্যালোচনা করছেন।', en: 'Matteo and Fariha review their home solar and heating expenses.' },
    lines: [
      { speaker: 'Fariha', it: 'Se cinque anni fa avessimo installato i pannelli fotovoltaici, quest’inverno non pagheremmo bollette così alte.', tr: { bn: 'পাঁচ বছর আগে সৌর প্যানেল বসালে এই শীতে আমাদের এত বেশি বিল দিতে হতো না।', en: 'If we had installed solar panels five years ago, this winter we would not be paying such high bills.' } },
      { speaker: 'Matteo', it: 'Hai ragione, per quanto il preventivo iniziale fosse impegnativo, si sarebbe già ammortizzato.', tr: { bn: 'ঠিক বলেছ, প্রাথমিক প্রাক্কলনটি যতই ব্যয়বহুল ছিল না কেন, ইতিমধ্যে খরচ উঠে আসত।', en: 'You’re right, however demanding the initial quote was, it would have paid for itself by now.' } },
      { speaker: 'Fariha', it: 'Procediamo subito, a condizione che l’impresa garantisca il collaudo entro novembre.', tr: { bn: 'চলো এখনই এগিয়ে যাই, শর্ত থাকে যে কোম্পানি যেন নভেম্বরের মধ্যে চূড়ান্ত পরীক্ষা নিশ্চিত করে।', en: 'Let’s proceed right away, provided the firm guarantees testing by November.' } },
    ],
  },
  quiz: [
    { id: 'q1', prompt: { bn: 'অতীত শর্তের বর্তমান ফলাফল কোনটিতে সঠিক?', en: 'Select the correct present result for a past condition:' }, it: 'Se avessi studiato informatica all’università, oggi ___ come sviluppatore.', options: ['lavorerei', 'avrei lavorato', 'lavoravo', 'lavorassi'], answer: 0, explanation: { bn: 'oggi থাকায় ফলাফলে condizionale presente (lavorerei) বসে।', en: 'Present marker oggi requires present conditional lavorerei.' } },
    { id: 'q2', prompt: { bn: 'Per quanto-র পরে কোন ভাব বসে?', en: 'Which mood follows Per quanto?' }, it: 'Per quanto ___ rischioso, l’investimento merita attenzione.', options: ['è', 'sia', 'sarà', 'era'], answer: 1, explanation: { bn: 'Per quanto + congiuntivo (sia)।', en: 'Per quanto requires the subjunctive sia.' } },
    { id: 'q3', prompt: { bn: 'যখন বক্তা কোনো শর্তের ব্যাপারে অনিশ্চিত, তখন কী বসে?', en: 'Complete the formal conditional clause:' }, it: 'Approveremo il piano a patto che ___ la sostenibilità finanziaria.', options: ['si dimostra', 'si dimostri', 'si dimostrava', 'dimostrerà'], answer: 1, explanation: { bn: 'a patto che + congiuntivo (si dimostri)।', en: 'a patto che takes the subjunctive.' } },
    { id: 'q4', prompt: { bn: 'সুপারলেটিভের পরে congiuntivo ব্যবহার করুন:', en: 'Complete after a superlative:' }, it: 'È la relazione più esauriente che ___ negli ultimi anni.', options: ['è stata scritta', 'sia stata scritta', 'sarà scritta', 'veniva scritta'], answer: 1, explanation: { bn: 'È la più... che-র পরে congiuntivo passato (sia stata scritta) বসে।', en: 'Superlative relative takes subjunctive sia stata scritta.' } },
  ],
  tip: { bn: 'Se-যুক্ত অংশে কখনোই condizionale (avrei/sarei) বসাবেন না — শর্ত অংশে সর্বদা congiuntivo imperfetto বা trapassato বসে।', en: 'Never put a conditional tense inside the Se clause itself — always use imperfect or pluperfect subjunctive.' },
};

const lesson3: Lesson = {
  id: 'b2-u1-l3',
  number: 3,
  title: 'L’Assemblea pose le basi della Repubblica',
  subtitle: { bn: 'অনিয়মিত passato remoto, trapassato remoto ও সাংবাদিকতার কন্ডিশনাল', en: 'Irregular passato remoto, trapassato remoto & journalistic conditional' },
  minutes: 16,
  objectives: [
    { bn: 'ঐতিহাসিক ও সাহিত্যিক পাঠে শক্তিশালী অনিয়মিত passato remoto (pose, scelse, assunse, visse) ও trapassato remoto ব্যবহার করবেন', en: 'Recognise and form irregular passato remoto and trapassato remoto in historical prose' },
    { bn: 'তদন্তাধীন ও অসমর্থিত সংবাদ পরিবেশনে condizionale di dissociazione এবং যুক্তিতর্কে futuro epistemico প্রয়োগ করবেন', en: 'Use the journalistic conditional and epistemic/concessive future accurately' },
  ],
  phrases: [
    { id: 'b2u1l3-p1', it: 'L’Assemblea Costituente pose le basi giuridiche della repubblica parlamentare.', tr: { bn: 'গণপরিষদ সংসদীয় প্রজাতন্ত্রের আইনি ভিত্তি স্থাপন করেছিল।', en: 'The Constituent Assembly laid the legal foundations of the parliamentary republic.' } },
    { id: 'b2u1l3-p2', it: 'Non appena il Parlamento ebbe approvato la legge, il Presidente la promulgò.', tr: { bn: 'সংসদ আইনটি অনুমোদন করামাত্রই রাষ্ট্রপতি তা জারি করলেন।', en: 'As soon as Parliament had approved the law, the President promulgated it.' } },
    { id: 'b2u1l3-p3', it: 'Sarà pure un progetto ambizioso, ma le risorse stanziate risultano esigue.', tr: { bn: 'এটি হয়তো একটি উচ্চাভিলাষী প্রকল্প, তবে বরাদ্দকৃত অর্থ নগণ্য।', en: 'It may well be an ambitious project, yet the allocated resources are scant.' } },
    { id: 'b2u1l3-p4', it: 'Secondo fonti della procura, la società avrebbe falsificato i bilanci.', tr: { bn: 'কৌঁসুলির কার্যালয়ের সূত্র অনুযায়ী, কোম্পানিটি নাকি আর্থিক বিবরণী জালিয়াতি করেছিল।', en: 'According to prosecutor sources, the company allegedly falsified its accounts.' } },
  ],
  grammar: [
    {
      id: 'condizionale-giornalistico',
      title: { bn: 'passato remoto-র অনিয়মিত মূল ও সাংবাদিকতায় কন্ডিশনাল', en: 'Strong passato remoto stems & journalistic conditional' },
      explanation: {
        bn: 'porre (posi/pose/posero), scegliere (scelsi/scelse/scelsero), condurre (condussi), sapere (seppi), nascere (nacqui)-এর মতো ক্রিয়ায় ১ম ও ৩য় পুরুষে মূল বদলায়। আর সংবাদমাধ্যমে যাচাইসাপেক্ষ অভিযোগ বোঝাতে avrebbe + পাস্ট পার্টিসিপল (condizionale passato) ব্যবহৃত হয়।',
        en: 'Strong passato remoto verbs alternate stem in 1st sg., 3rd sg., and 3rd pl. In journalism, present/past conditional marks unverified reports.',
      },
      table: [
        { label: 'passato remoto', it: 'scelsero / posero / assunsero / vissero', tr: { bn: 'বেছে নিলেন / স্থাপন করলেন', en: 'chose / laid / assumed / lived' } },
        { label: 'trapassato remoto', it: 'ebbero esaminato / furono giunti', tr: { bn: 'পরীক্ষা করার পর / পৌঁছানোর পর', en: 'had examined / had arrived' } },
        { label: 'cond. giornalistico', it: 'Il decreto sarebbe imminente / avrebbe agito', tr: { bn: 'শোনা যাচ্ছে ডিক্রি আসন্ন', en: 'reportedly imminent / allegedly acted' } },
      ],
      examples: [
        { id: 'b2u1l3-e1', it: 'Dopo che ebbero esaminato i reperti, gli archeologi pubblicarono la monografia.', tr: { bn: 'নিদর্শনগুলো পরীক্ষা করার পর প্রত্নতাত্ত্বিকেরা মনোগ্রাফটি প্রকাশ করলেন।', en: 'After they had examined the artefacts, the archaeologists published the monograph.' } },
      ],
    },
  ],
  dialogue: {
    title: { bn: 'বার্তাকক্ষে অনুসন্ধানী প্রতিবেদন যাচাই', en: 'Verifying an investigative report in the newsroom' },
    context: { bn: 'সম্পাদিকা এলেনা ও প্রতিবেদক তারিক একটি কর্পোরেট একীভূতকরণের সংবাদ সম্পাদনা করছেন।', en: 'Editor Elena and reporter Tariq review a story on a corporate merger.' },
    lines: [
      { speaker: 'Elena', it: 'Tariq, hai usato il condizionale nel titolo sulla fusione aziendale?', tr: { bn: 'তারিক, কোম্পানির একীভূতকরণের শিরোনামে কি তুমি কন্ডিশনাল ব্যবহার করেছ?', en: 'Tariq, did you use the conditional in the headline on the corporate merger?' } },
      { speaker: 'Tariq', it: 'Certo: «La società avrebbe ottenuto fondi senza i requisiti necessari», perché l’inchiesta è ancora in corso.', tr: { bn: 'অবশ্যই: «প্রয়োজনীয় যোগ্যতা ছাড়াই কোম্পানিটি নাকি তহবিল পেয়েছিল», কারণ তদন্ত এখনো চলছে।', en: 'Of course: "The company allegedly obtained funds without the necessary requirements", as the investigation is ongoing.' } },
      { speaker: 'Elena', it: 'Ottimo. Sarà pure una notizia clamorosa, ma la verifica delle fonti viene prima di tutto.', tr: { bn: 'দারুণ। খবরটি যতই চাঞ্চল্যকর হোক না কেন, উৎসের সত্যতা যাচাই সবার আগে আসে।', en: 'Great. It may well be a sensational story, but fact-checking sources comes first.' } },
    ],
  },
  quiz: [
    { id: 'q1', prompt: { bn: 'condurre-এর ৩য় বহুবচন passato remoto রূপ:', en: '3rd plural passato remoto of condurre:' }, it: 'I ricercatori ___ lo studio per cinque anni.', options: ['condussero', 'condussimo', 'conducevano', 'condurranno'], answer: 0, explanation: { bn: 'condurre → condussi, conducesti, condusse, conducemmo, conduceste, condussero।', en: 'condurre → condussero.' } },
    { id: 'q2', prompt: { bn: 'trapassato remoto কোন কালের সাথে বসে?', en: 'Which tense completes a clause with trapassato remoto?' }, it: 'Appena ___ firmato l’intesa, i ministri convocarono la stampa.', options: ['ebbero', 'avevano', 'avranno', 'abbiano'], answer: 0, explanation: { bn: 'প্রধান ক্রিয়া convocarono (passato remoto) হওয়ায় ebbero firmato বসে।', en: 'Main verb convocarono triggers ebbero firmato.' } },
    { id: 'q3', prompt: { bn: 'অসমর্থিত সংবাদের জন্য সঠিক ক্রিয়াপদের রূপ:', en: 'Choose the journalistic conditional for an unconfirmed allegation:' }, it: 'Secondo indiscrezioni, l’impresa ___ eluso le imposte.', options: ['ha', 'avrebbe', 'aveva', 'ebbero'], answer: 1, explanation: { bn: 'অতীতের অসমর্থিত অভিযোগে avrebbe + eluso।', en: 'Unconfirmed past allegation uses avrebbe eluso.' } },
    { id: 'q4', prompt: { bn: 'তর্কে আংশিক স্বীকারোক্তির ভবিষ্যৎ রূপ (futuro concessivo):', en: 'Select the concessive future opening:' }, it: '___ anche vero che il costo è alto, tuttavia il beneficio è duraturo.', options: ['Sarà', 'Sarebbe', 'Sia', 'Fu'], answer: 0, explanation: { bn: 'আংশিক মেনে নিয়ে খণ্ডন করতে Sarà anche vero che... ব্যবহৃত হয়।', en: 'Concessive future uses Sarà anche vero che…' } },
  ],
  tip: { bn: 'সংবাদপত্রে «avrebbe dichiarato / sarebbe imminente» দেখলে বুঝবেন তথ্যটি এখনো আনুষ্ঠানিকভাবে প্রমাণিত বা চূড়ান্ত হয়নি।', en: 'Whenever you see avrebbe + participle or sarebbe in Italian news, the claim is reported from sources rather than confirmed as fact.' },
};

export const b2Unit1: Unit = {
  id: 'b2-u1',
  number: 1,
  title: 'Architettura dei modi verbali',
  subtitle: { bn: 'উচ্চতর সংযোজক ভাব, মিশ্র শর্ত ও ঐতিহাসিক-সাংবাদিক কাল', en: 'Subjunctive mastery, mixed conditionals & journalistic tenses' },
  lessons: [lesson1, lesson2, lesson3],
};
