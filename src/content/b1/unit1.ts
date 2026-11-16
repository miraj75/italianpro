import type { Lesson, Unit } from '../types';

const lesson1: Lesson = {
  id: 'b1-u1-l1',
  number: 1,
  title: 'Penso che sia una buona idea',
  subtitle: { bn: 'মতামত প্রকাশ ও বর্তমান সংযোজক ভাব (congiuntivo presente)', en: 'Expressing opinions & present subjunctive' },
  minutes: 14,
  objectives: [
    { bn: 'penso che, credo che, spero che-এর পরে congiuntivo presente ব্যবহার করতে পারবেন', en: 'Use the present subjunctive after opinion, hope, and doubt expressions' },
    { bn: 'নিয়মিত ও মূল অনিয়মিত ক্রিয়ার (essere, avere, fare, andare, potere) সংযোজক রূপ চিনবেন', en: 'Master regular and core irregular present subjunctive forms' },
  ],
  phrases: [
    { id: 'b1u1l1-p1', it: 'Penso che questo quartiere sia molto tranquillo.', tr: { bn: 'আমার মনে হয় এই পাড়াটি খুব শান্ত।', en: 'I think this neighbourhood is very quiet.' } },
    { id: 'b1u1l1-p2', it: 'Credo che abbiano ragione loro.', tr: { bn: 'আমার বিশ্বাস তাদের কথাই ঠিক।', en: 'I believe they are right.' } },
    { id: 'b1u1l1-p3', it: 'Spero che tu possa venire alla riunione.', tr: { bn: 'আশা করি তুমি সভায় আসতে পারবে।', en: 'I hope you can come to the meeting.' } },
    { id: 'b1u1l1-p4', it: 'Secondo me invece il progetto funziona bene.', tr: { bn: 'অন্যদিকে আমার মতে প্রকল্পটি ভালোই কাজ করছে।', en: 'In my opinion, however, the project works well.' } },
  ],
  grammar: [
    {
      id: 'congiuntivo',
      title: { bn: 'congiuntivo presente ও মতামত', en: 'Present subjunctive & opinions' },
      explanation: {
        bn: 'ব্যক্তিগত মতামত, আশা, সন্দেহ বা অনুভূতি প্রকাশক ক্রিয়ার (pensare che, credere che, sperare che, temere che, è importante che) পরে গৌণ বাক্যে congiuntivo বসে। তবে secondo me বা per me-র পরে সাধারণ indicativo বসে।',
        en: 'Use the subjunctive in subordinate clauses introduced by che after verbs of opinion, hope, doubt, or impersonal judgements. After secondo me, use the indicative.',
      },
      table: [
        { label: 'io / tu / lui (-are)', it: 'parli, parli, parli', tr: { bn: 'কথা বলি/বলো/বলে (সংযোজক)', en: 'speak (subjunctive)' } },
        { label: 'io / tu / lui (-ere/-ire)', it: 'prenda / parta / finisca', tr: { bn: 'নেয় / রওনা হয় / শেষ করে', en: 'take / leave / finish' } },
        { label: 'essere', it: 'sia, sia, sia, siamo, siate, siano', tr: { bn: 'হই / হও / হয়', en: 'be (subjunctive)' } },
        { label: 'avere', it: 'abbia, abbia, abbia, abbiamo, abbiate, abbiano', tr: { bn: 'থাকে (সংযোজক)', en: 'have (subjunctive)' } },
      ],
      examples: [
        { id: 'b1u1l1-e1', it: 'È necessario che tutti rispettino le scadenze.', tr: { bn: 'সবাই সময়সীমা মেনে চলুক এটা জরুরি।', en: 'It is necessary that everyone respect the deadlines.' } },
        { id: 'b1u1l1-e2', it: 'Dubito che il treno arrivi in orario oggi.', tr: { bn: 'আজ ট্রেন সময়মতো পৌঁছাবে কি না আমার সন্দেহ আছে।', en: 'I doubt the train will arrive on time today.' } },
      ],
    },
  ],
  dialogue: {
    title: { bn: 'নতুন অফিসের প্রস্তাব', en: 'Proposal for the new office' },
    context: { bn: 'তারিক ও এলেনা কোম্পানির নতুন কাজের সময়সূচি নিয়ে কথা বলছে।', en: 'Tariq and Elena discuss the company’s new working hours.' },
    lines: [
      { speaker: 'Elena', it: 'Tariq, che cosa ne pensi del nuovo orario flessibile?', tr: { bn: 'তারিক, নতুন নমনীয় সময়সূচি নিয়ে তোমার কী মত?', en: 'Tariq, what do you think about the new flexible schedule?' } },
      { speaker: 'Tariq', it: 'Credo che sia un’ottima soluzione per chi viaggia coi mezzi pubblici.', tr: { bn: 'আমার মনে হয় যারা গণপরিবহনে যাতায়াত করে তাদের জন্য এটি দারুণ সমাধান।', en: 'I think it is a great solution for those who commute by public transport.' } },
      { speaker: 'Elena', it: 'Anch’io! Spero solo che tutti i reparti riescano a coordinarsi bene.', tr: { bn: 'আমারও তাই মনে হয়! শুধু আশা করি সব বিভাগ যেন ভালোভাবে সমন্বয় করতে পারে।', en: 'Me too! I just hope all departments manage to coordinate well.' } },
      { speaker: 'Tariq', it: 'Secondo me basterà fissare una riunione breve ogni lunedì mattina.', tr: { bn: 'আমার মতে প্রতি সোমবার সকালে একটি সংক্ষিপ্ত সভা নির্ধারণ করলেই চলবে।', en: 'In my opinion it will be enough to schedule a brief meeting every Monday morning.' } },
    ],
  },
  quiz: [
    { id: 'q1', prompt: { bn: 'শূন্যস্থানে সঠিক সংযোজক রূপ বসান:', en: 'Choose the correct subjunctive form:' }, it: 'Penso che questo appartamento ___ troppo caro.', options: ['è', 'sia', 'sarà', 'siamo'], answer: 1, explanation: { bn: 'Penso che-এর পরে essere-এর সংযোজক রূপ sia বসে।', en: 'Penso che requires the subjunctive sia.' } },
    { id: 'q2', prompt: { bn: 'কোন বাক্যাংশের পরে সাধারণ indicativo বসে?', en: 'Which expression takes the indicative instead of the subjunctive?' }, it: '___ il corso inizia lunedì prossimo.', options: ['Credo che', 'Spero che', 'Secondo me', 'Dubito che'], answer: 2, explanation: { bn: 'Secondo me-তে che নেই, তাই সাধারণ indicativo বসে।', en: 'Secondo me is followed by the indicative.' } },
    { id: 'q3', prompt: { bn: 'loro-এর সাথে avere-এর বর্তমান সংযোজক রূপ:', en: 'Present subjunctive of avere for loro:' }, it: 'Credo che loro ___ già firmato il modulo.', options: ['hanno', 'abbiano', 'avessero', 'avranno'], answer: 1, explanation: { bn: 'loro abbiano।', en: 'loro abbiano.' } },
    { id: 'q4', prompt: { bn: 'সঠিক রূপ বেছে নিন:', en: 'Select the right form:' }, it: 'È importante che tu ___ il documento entro domani.', options: ['mandi', 'manda', 'mandare', 'mandato'], answer: 0, explanation: { bn: '-are ক্রিয়ার একবচন সংযোজক রূপ -i (mandi)।', en: '-are verbs take -i in the singular present subjunctive.' } },
  ],
  tip: { bn: 'প্রধান ও গৌণ বাক্যের কর্তা এক হলে che + congiuntivo না বসিয়ে di + infinito বসে: Penso di partire domani।', en: 'When both clauses share the same subject, use di + infinitive instead of che + subjunctive: Penso di partire domani.' },
};

const lesson2: Lesson = {
  id: 'b1-u1-l2',
  number: 2,
  title: 'Pensavo che fossi già partito',
  subtitle: { bn: 'অতীতে সংযোজক ভাব ও কালের সামঞ্জস্য', en: 'Past subjunctive tenses & sequence of tenses' },
  minutes: 14,
  objectives: [
    { bn: 'congiuntivo passato, imperfetto ও trapassato-র গঠন ও পার্থক্য বুঝবেন', en: 'Form and distinguish the past, imperfect, and pluperfect subjunctive' },
    { bn: 'প্রধান ক্রিয়ার কাল অনুযায়ী সঠিক সংযোজক কাল মেলাতে পারবেন', en: 'Apply sequence of tenses (concordanza dei tempi) accurately' },
  ],
  phrases: [
    { id: 'b1u1l2-p1', it: 'Credo che il corriere sia già passato.', tr: { bn: 'আমার মনে হয় কুরিয়ার ইতিমধ্যে এসে গেছে।', en: 'I think the courier has already come by.' } },
    { id: 'b1u1l2-p2', it: 'Pensavo che tu lavorassi da casa oggi.', tr: { bn: 'আমি ভেবেছিলাম আজ তুমি বাসা থেকে কাজ করছ।', en: 'I thought you were working from home today.' } },
    { id: 'b1u1l2-p3', it: 'Speravamo che avessero già risolto il guasto.', tr: { bn: 'আমরা আশা করেছিলাম তারা ইতিমধ্যে ত্রুটিটি সারিয়ে ফেলেছে।', en: 'We hoped they had already fixed the fault.' } },
    { id: 'b1u1l2-p4', it: 'Magari avessi più tempo per leggere!', tr: { bn: 'ইশ, পড়ার জন্য যদি আমার আরও সময় থাকত!', en: 'If only I had more time to read!' } },
  ],
  grammar: [
    {
      id: 'concordanza-congiuntivo',
      title: { bn: 'congiuntivo imperfetto, passato ও trapassato', en: 'Past subjunctives & sequence of tenses' },
      explanation: {
        bn: 'প্রধান ক্রিয়া বর্তমান হলে: সমসাময়িক কাজে congiuntivo presente (penso che sia), পূর্ববর্তী কাজে congiuntivo passato (penso che sia stato)। প্রধান ক্রিয়া অতীত হলে: সমসাময়িক কাজে congiuntivo imperfetto (pensavo che fosse), পূর্ববর্তী কাজে congiuntivo trapassato (pensavo che fosse stato)।',
        en: 'Present main verb → present subjunctive (simultaneous) or past subjunctive (prior). Past main verb → imperfect subjunctive (simultaneous) or pluperfect subjunctive (prior).',
      },
      table: [
        { label: 'cong. passato', it: 'abbia parlato / sia andato', tr: { bn: 'বলেছে / গেছে (সংযোজক)', en: 'has spoken / has gone' } },
        { label: 'cong. imperfetto', it: 'parlassi, prendessi, dormissi, fossi, avessi', tr: { bn: 'বলতাম / হতাম / থাকত', en: 'spoke / were / had' } },
        { label: 'cong. trapassato', it: 'avessi parlato / fossi andato', tr: { bn: 'বলেছিলাম / গিয়েছিলাম (সংযোজক)', en: 'had spoken / had gone' } },
      ],
      examples: [
        { id: 'b1u1l2-e1', it: 'Temevo che non fossi riuscito a prendere la coincidenza.', tr: { bn: 'ভয় পাচ্ছিলাম তুমি হয়ত সংযোগ ট্রেনটি ধরতে পারোনি।', en: 'I was afraid you had not managed to catch the connection.' } },
        { id: 'b1u1l2-e2', it: 'Spero che abbiano conservato la ricevuta fiscale.', tr: { bn: 'আশা করি তারা কর রসিদটি সংরক্ষণ করেছে।', en: 'I hope they have kept the tax receipt.' } },
      ],
    },
  ],
  dialogue: {
    title: { bn: 'ভুল বোঝাবুঝির অবসান', en: 'Clearing up a misunderstanding' },
    context: { bn: 'সারা ও লুকা গতকালের অ্যাপয়েন্টমেন্ট নিয়ে কথা বলছে।', en: 'Sara and Luca talk about yesterday’s appointment.' },
    lines: [
      { speaker: 'Sara', it: 'Luca, ieri ti abbiamo aspettato per mezz’ora! Pensavamo che avessi dimenticato l’incontro.', tr: { bn: 'লুকা, গতকাল আমরা আধ ঘণ্টা তোমার জন্য অপেক্ষা করেছি! ভেবেছিলাম তুমি সভার কথা ভুলে গেছ।', en: 'Luca, yesterday we waited half an hour for you! We thought you had forgotten the meeting.' } },
      { speaker: 'Luca', it: 'Mi dispiace tantissimo! Credevo che la riunione iniziasse alle undici e non alle dieci.', tr: { bn: 'আমি ভীষণ দুঃখিত! আমি ভেবেছিলাম সভাটি দশটায় নয়, এগারোটায় শুরু হবে।', en: 'I am terribly sorry! I thought the meeting started at eleven and not at ten.' } },
      { speaker: 'Sara', it: 'Immaginavo che ci fosse stato un malinteso sull’orario.', tr: { bn: 'আমি ধারণা করেছিলাম সময় নিয়ে কোনো ভুল বোঝাবুঝি হয়েছে।', en: 'I imagined there had been a misunderstanding about the time.' } },
    ],
  },
  quiz: [
    { id: 'q1', prompt: { bn: 'অতীতের প্রধান ক্রিয়ার সাথে সমসাময়িক কাজ:', en: 'Simultaneous action after a past main verb:' }, it: 'Credevo che Giulia ___ ancora a Bologna.', options: ['abita', 'abiti', 'abitasse', 'abiterà'], answer: 2, explanation: { bn: 'Credevo (অতীত) + সমসাময়িক অবস্থা = congiuntivo imperfetto (abitasse)।', en: 'Credevo requires the imperfect subjunctive abitasse.' } },
    { id: 'q2', prompt: { bn: 'বর্তমান প্রধান ক্রিয়ার সাথে সম্পন্ন অতীত কাজ:', en: 'Completed past action after a present main verb:' }, it: 'Penso che il volo ___ con dieci minuti di anticipo.', options: ['è atterrato', 'sia atterrato', 'atterrasse', 'atterrerà'], answer: 1, explanation: { bn: 'Penso che + অতীত কাজ = congiuntivo passato (sia atterrato)।', en: 'Penso che + completed action uses congiuntivo passato.' } },
    { id: 'q3', prompt: { bn: 'essere-এর congiuntivo imperfetto (io):', en: 'Imperfect subjunctive of essere for io:' }, it: 'Sembrava che io ___ l’unico a saperlo.', options: ['ero', 'sia', 'fossi', 'sarei'], answer: 2, explanation: { bn: 'io fossi।', en: 'io fossi.' } },
    { id: 'q4', prompt: { bn: 'অতীতের পূর্ববর্তী কাজ (congiuntivo trapassato):', en: 'Action prior to a past verb:' }, it: 'Speravamo che tu ___ già ricevuto il rimborso.', options: ['abbia', 'avessi', 'avevi', 'avresti'], answer: 1, explanation: { bn: 'Speravamo che + পূর্ববর্তী কাজ = avessi ricevuto।', en: 'Prior past action takes avessi ricevuto.' } },
  ],
  tip: { bn: 'congiuntivo imperfetto-তে io এবং tu উভয়ের শেষে -ssi থাকে (io parlassi, tu parlassi), তাই কর্তা স্পষ্ট করতে সর্বনাম উল্লেখ করা হয়।', en: 'Because io and tu share the -ssi ending in the imperfect subjunctive, include the subject pronoun io or tu for clarity.' },
};

const lesson3: Lesson = {
  id: 'b1-u1-l3',
  number: 3,
  title: 'Se potessi, cambierei città',
  subtitle: { bn: 'তিন প্রকার শর্তমূলক বাক্য (periodo ipotetico 1, 2, 3)', en: 'The three conditional structures (real, hypothetical, counterfactual)' },
  minutes: 15,
  objectives: [
    { bn: 'বাস্তব (১ম), সম্ভাব্য/কাল্পনিক (২য়) ও অতীত অবাস্তব (৩য়) শর্তমূলক বাক্য গঠন করতে পারবেন', en: 'Build 1st, 2nd, and 3rd conditional sentences confidently' },
    { bn: 'se-এর পর কখনো condizionale না বসিয়ে সঠিক congiuntivo বসাবেন', en: 'Use imperfect/pluperfect subjunctive in the se-clause and conditional in the result clause' },
  ],
  phrases: [
    { id: 'b1u1l3-p1', it: 'Se domani farà bel tempo, andremo in bicicletta.', tr: { bn: 'কাল আবহাওয়া ভালো থাকলে আমরা সাইকেলে যাব।', en: 'If the weather is nice tomorrow, we will go by bike.' } },
    { id: 'b1u1l3-p2', it: 'Se avessi un contratto stabile, chiederei un mutuo.', tr: { bn: 'আমার স্থায়ী চুক্তি থাকলে আমি গৃহঋণের আবেদন করতাম।', en: 'If I had a permanent contract, I would apply for a mortgage.' } },
    { id: 'b1u1l3-p3', it: 'Se fossi al tuo posto, parlerei chiaramente con il direttore.', tr: { bn: 'আমি তোমার জায়গায় থাকলে পরিচালকের সাথে স্পষ্টভাবে কথা বলতাম।', en: 'If I were in your place, I would speak clearly with the director.' } },
    { id: 'b1u1l3-p4', it: 'Se fossimo partiti prima, non avremmo perso la coincidenza.', tr: { bn: 'আগে রওনা দিলে আমরা সংযোগ ট্রেনটি মিস করতাম না।', en: 'If we had left earlier, we would not have missed the connection.' } },
  ],
  grammar: [
    {
      id: 'periodo-ipotetico',
      title: { bn: 'Il periodo ipotetico (১ম, ২য় ও ৩য় প্রকার)', en: 'Conditional sentences (Types 1, 2 & 3)' },
      explanation: {
        bn: '১ম প্রকার (বাস্তব): Se + presente/futuro, presente/futuro। ২য় প্রকার (বর্তমানে কাল্পনিক বা কম সম্ভাব্য): Se + congiuntivo imperfetto, condizionale presente। ৩য় প্রকার (অতীতে যা ঘটেনি): Se + congiuntivo trapassato, condizionale passato।',
        en: 'Type 1 (real): Se + present/future → present/future. Type 2 (present hypothetical): Se + imperfect subjunctive → present conditional. Type 3 (past counterfactual): Se + pluperfect subjunctive → past conditional.',
      },
      table: [
        { label: '১ম প্রকার (বাস্তব)', it: 'Se studi, passi l’esame.', tr: { bn: 'পড়লে পরীক্ষায় পাস করবে।', en: 'If you study, you pass the exam.' } },
        { label: '২য় প্রকার (কাল্পনিক)', it: 'Se studiassi, passeresti l’esame.', tr: { bn: 'পড়লে পরীক্ষায় পাস করতে।', en: 'If you studied, you would pass.' } },
        { label: '৩য় প্রকার (অতীত)', it: 'Se avessi studiato, avresti passato l’esame.', tr: { bn: 'পড়ে থাকলে পরীক্ষায় পাস করতে।', en: 'If you had studied, you would have passed.' } },
      ],
      examples: [
        { id: 'b1u1l3-e1', it: 'Se ci fossero più piste ciclabili, userei la bici ogni giorno.', tr: { bn: 'আরও সাইকেল লেন থাকলে আমি প্রতিদিন সাইকেল চালাতাম।', en: 'If there were more cycle lanes, I would use my bike every day.' } },
        { id: 'b1u1l3-e2', it: 'Avresti ottenuto il rimborso se avessi conservato lo scontrino.', tr: { bn: 'রসিদটি রেখে দিলে তুমি টাকা ফেরত পেতে।', en: 'You would have got the refund if you had kept the receipt.' } },
      ],
    },
  ],
  dialogue: {
    title: { bn: 'শহর নাকি গ্রাম?', en: 'City or countryside?' },
    context: { bn: 'নাদিয়া ও মার্কো দূর থেকে কাজ করার সুযোগ নিয়ে কথা বলছে।', en: 'Nadia and Marco discuss remote work possibilities.' },
    lines: [
      { speaker: 'Marco', it: 'Nadia, se potessi lavorare da remoto tutta la settimana, dove vivresti?', tr: { bn: 'নাদিয়া, তুমি যদি পুরো সপ্তাহ দূর থেকে কাজ করতে পারতে, কোথায় থাকতে?', en: 'Nadia, if you could work remotely all week, where would you live?' } },
      { speaker: 'Nadia', it: 'Se non dovessi venire in ufficio, mi trasferirei subito in un borgo in Toscana.', tr: { bn: 'অফিসে আসতে না হলে আমি এখনই তোস্কানার একটি ছোট গ্রামে চলে যেতাম।', en: 'If I did not have to come to the office, I would immediately move to a village in Tuscany.' } },
      { speaker: 'Marco', it: 'Anch’io! E pensare che l’anno scorso, se avessimo accettato quell’offerta a Siena, ora abiteremmo già lì.', tr: { bn: 'আমিও! আর ভাবো তো, গত বছর আমরা সিয়েনার ওই প্রস্তাবটি গ্রহণ করলে এখন সেখানেই থাকতাম।', en: 'Me too! And to think that last year, if we had accepted that offer in Siena, we would already be living there now.' } },
    ],
  },
  quiz: [
    { id: 'q1', prompt: { bn: '২য় প্রকার কাল্পনিক বাক্য সম্পূর্ণ করুন:', en: 'Complete the 2nd conditional:' }, it: 'Se ___ il tempo, farei un corso di fotografia.', options: ['avrei', 'avrò', 'avessi', 'abbia'], answer: 2, explanation: { bn: 'Se-এর পরে congiuntivo imperfetto (avessi) বসে, কখনোই condizionale নয়।', en: 'The se-clause takes the imperfect subjunctive avessi.' } },
    { id: 'q2', prompt: { bn: '৩য় প্রকার অতীত শর্তমূলক বাক্যের ফলাফল অংশ:', en: 'Result clause of a 3rd conditional:' }, it: 'Se mi avessi avvisato, ti ___ ad aiutare.', options: ['venivo', 'sarei venuto', 'verrei', 'vengo'], answer: 1, explanation: { bn: 'Se + trapassato congiuntivo → condizionale passato (sarei venuto)।', en: 'Past counterfactual uses condizionale passato (sarei venuto).' } },
    { id: 'q3', prompt: { bn: 'পরামর্শ দেওয়ার আদর্শ কাঠামো:', en: 'Standard expression for giving advice:' }, it: 'Se ___ in te, controllerei bene le clausole.', options: ['sarei', 'sono', 'fossi', 'ero'], answer: 2, explanation: { bn: 'Se fossi in te (আমি তোমার জায়গায় হলে)।', en: 'Se fossi in te = If I were you.' } },
    { id: 'q4', prompt: { bn: '১ম প্রকার বাস্তব শর্ত:', en: 'First conditional (real future):' }, it: 'Se ___ il treno delle otto, arriveremo in tempo.', options: ['prendiamo', 'prenderemmo', 'prendessimo', 'avremmo preso'], answer: 0, explanation: { bn: 'বাস্তব শর্তে presente বা futuro বসে (prendiamo)।', en: 'Real conditionals take the present or future indicative.' } },
  ],
  tip: { bn: 'মনে রাখার সহজ নিয়ম: ইতালিয়ানে শর্ত বোঝাতে Se-এর ঠিক পরে কখনোই condizionale (sarei, avrei) বসে না!', en: 'Golden rule: never put the conditional right after conditional "se" in Italian!' },
};

export const b1Unit1: Unit = {
  id: 'b1-u1',
  number: 1,
  title: 'Opinioni, congiuntivo e ipotesi',
  subtitle: { bn: 'মতামত, সংযোজক ভাব ও শর্তমূলক বাক্য', en: 'Opinions, the subjunctive, and conditional hypotheses' },
  lessons: [lesson1, lesson2, lesson3],
};
