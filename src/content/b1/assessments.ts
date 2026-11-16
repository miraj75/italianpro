import type { LevelAssessment } from '../academyTypes';

export const B1_ASSESSMENTS: LevelAssessment[] = [
  {
    id: 'assess-b1-u1',
    level: 'B1',
    unitNumber: 1,
    title: { bn: 'B1 ইউনিট ১ মূল্যায়ন: মতামত, সংযোজক ভাব ও শর্তমূলক বাক্য', en: 'B1 Unit 1 Assessment: Subjunctive & Conditionals' },
    passScore: 0.7,
    questions: [
      { id: 'b1u1q1', prompt: { bn: 'মতামত প্রকাশের পর congiuntivo:', en: 'Subjunctive after opinion verb:' }, it: 'Credo che questa proposta ___ davvero vantaggiosa per tutti.', options: ['è', 'sia', 'sarà', 'fosse'], answer: 1, explanation: { bn: 'Credo che-এর পরে বর্তমান সংযোজক ভাব (sia) বসে।', en: 'Credo che requires the present subjunctive (sia).' } },
      { id: 'b1u1q2', prompt: { bn: 'অতীতে বিশ্বাস ও congiuntivo imperfetto:', en: 'Past belief + imperfect subjunctive:' }, it: 'Pensavo che Marco ___ già firmato il contratto.', options: ['abbia', 'aveva', 'avesse', 'avrebbe'], answer: 2, explanation: { bn: 'Pensavo che + পূর্ববর্তী কাজ = congiuntivo trapassato (avesse firmato)।', en: 'Pensavo che + prior action takes avesse firmato.' } },
      { id: 'b1u1q3', prompt: { bn: 'সম্ভাব্য কাল্পনিক বাক্য (২য় প্রকার):', en: 'Second conditional (present counterfactual):' }, it: 'Se ___ più tempo libero, farei volontariato.', options: ['ho', 'avrò', 'avessi', 'avrei'], answer: 2, explanation: { bn: 'ব্যাকরণগত গঠন: এখানে «Se + congiuntivo imperfetto (avessi), condizionale presente (farei)» কাঠামোটি অনুসরণ করা হয়েছে।', en: 'Se + imperfect subjunctive, present conditional.' } },
      { id: 'b1u1q4', prompt: { bn: 'অতীতের অবাস্তব শর্ত (৩য় প্রকার):', en: 'Third conditional (past counterfactual):' }, it: 'Se fossimo partiti prima, non ___ il treno.', options: ['perdevamo', 'avremmo perso', 'perderemmo', 'abbiamo perso'], answer: 1, explanation: { bn: 'ব্যাকরণ সূত্র: Se + trapassato congiuntivo → condizionale passato (avremmo perso) — অতীতের অবাস্তব শর্ত প্রকাশে অতীত কন্ডিশনাল (condizionale passato) ব্যবহার করে।', en: 'Past counterfactual uses condizionale passato.' } },
    ],
  },
  {
    id: 'assess-b1-u2',
    level: 'B1',
    unitNumber: 2,
    title: { bn: 'B1 ইউনিট ২ মূল্যায়ন: কর্মজীবন, পরোক্ষ উক্তি ও সম্বন্ধবাচক সর্বনাম', en: 'B1 Unit 2 Assessment: Work, Indirect Speech & Relatives' },
    passScore: 0.7,
    questions: [
      { id: 'b1u2q1', prompt: { bn: 'অতীতের ভবিষ্যৎ (condizionale passato):', en: 'Future-in-the-past:' }, it: 'Giulia ha promesso che ___ arrivata in orario.', options: ['sarebbe', 'fosse', 'sarà', 'era'], answer: 0, explanation: { bn: 'অতীতের প্রতিশ্রুতির পর ভবিষ্যৎ বোঝাতে condizionale passato (sarebbe arrivata)।', en: 'Future in the past takes condizionale passato.' } },
      { id: 'b1u2q2', prompt: { bn: 'অব্যয়সহ সম্বন্ধবাচক সর্বনাম:', en: 'Relative pronoun with preposition:' }, it: 'L’azienda ___ lavoro esporta in tutta Europa.', options: ['che', 'per cui', 'quale', 'chi'], answer: 1, explanation: { bn: 'সঠিক রূপান্তর: «lavorare per un’azienda» থেকে পরিবর্তিত হয়ে «per cui / per la quale» ব্যবহৃত হয়।', en: 'Preposition + cui (per cui).' } },
      { id: 'b1u2q3', prompt: { bn: 'যৌগিক সর্বনাম অতীত কালে:', en: 'Combined pronouns in past tense:' }, it: 'La ricevuta? ___ ha consegnata stamattina la segretaria.', options: ['Me la', 'Mi l’', 'Me lo', 'Mi le'], answer: 0, explanation: { bn: 'mi + la = me la (স্ত্রীলিঙ্গ একবচন → consegnata)।', en: 'mi + la becomes me la.' } },
      { id: 'b1u2q4', prompt: { bn: 'আনুষ্ঠানিক চিঠির নিবেদন:', en: 'Formal business register:' }, it: 'In attesa di un Suo cortese ___, Le porgo distinti saluti.', options: ['riscontro', 'ciao', 'parere tuo', 'salutone'], answer: 0, explanation: { bn: 'আনুষ্ঠানিক পত্রে riscontro ব্যবহৃত হয়।', en: 'Formal correspondence uses riscontro.' } },
    ],
  },
  {
    id: 'assess-b1-u3',
    level: 'B1',
    unitNumber: 3,
    title: { bn: 'B1 ইউনিট ৩ মূল্যায়ন: নাগরিক জীবন, কর্মবাচ্য ও সংযোজক অব্যয়', en: 'B1 Unit 3 Assessment: Civic Life, Passive & Connectors' },
    passScore: 0.7,
    questions: [
      { id: 'b1u3q1', prompt: { bn: 'আবশ্যকতা অর্থে কর্মবাচ্য (andare + participio):', en: 'Passive of obligation with andare:' }, it: 'La domanda di iscrizione ___ presentata entro venerdì.', options: ['viene', 'va', 'sta', 'fa'], answer: 1, explanation: { bn: 'নিয়ম বা আবশ্যকতা বোঝাতে andare + participio (va presentata)।', en: 'andare + past participle expresses obligation.' } },
      { id: 'b1u3q2', prompt: { bn: 'স্বীকারোক্তিমূলক সংযোজক:', en: 'Concessive connector:' }, it: '___ piovesse forte, il mercato era pieno di gente.', options: ['Siccome', 'Benchè', 'Affinché', 'Purché'], answer: 1, explanation: { bn: 'Benchè + congiuntivo = যদিও।', en: 'Benchè takes the subjunctive to mean although.' } },
      { id: 'b1u3q3', prompt: { bn: 'শর্তমূলক সংযোজক:', en: 'Conditional connector:' }, it: 'Ti presto l’auto ___ tu faccia il pieno prima di restituirla.', options: ['a patto che', 'poiché', 'perciò', 'malgrado'], answer: 0, explanation: { bn: 'a patto che + congiuntivo = এই শর্তে যে।', en: 'a patto che + subjunctive = on condition that.' } },
      { id: 'b1u3q4', prompt: { bn: 'প্রেরণার্থক ক্রিয়া (fare + infinito):', en: 'Causative construction:' }, it: 'Domani ___ riparare la caldaia dal tecnico.', options: ['farò', 'lascerò', 'andrò', 'avrò'], answer: 0, explanation: { bn: 'অন্যকে দিয়ে কাজ করানো = farò riparare।', en: 'farò + infinitive = have something repaired.' } },
    ],
  },
  {
    id: 'assess-b1-u4',
    level: 'B1',
    unitNumber: 4,
    title: { bn: 'B1 ইউনিট ৪ মূল্যায়ন: সংস্কৃতি, বাগধারা ও জটিল বাক্যগঠন', en: 'B1 Unit 4 Assessment: Culture, Idioms & Complex Syntax' },
    passScore: 0.7,
    questions: [
      { id: 'b1u4q1', prompt: { bn: 'সর্বনামযুক্ত ক্রিয়া (cavarsela):', en: 'Pronominal verb cavarsela:' }, it: 'L’esame era difficile, ma ___ siamo cavata bene.', options: ['ce la', 'se la', 'ci ne', 'me la'], answer: 0, explanation: { bn: 'ব্যাকরণ সূত্র: noi → ce la siamo cavata — উত্তম পুরুষ বহুবচন (noi) রূপ হলো: cavarsela is ce la siamo cavata।', en: 'First person plural of cavarsela is ce la siamo cavata.' } },
      { id: 'b1u4q2', prompt: { bn: 'ভবিষ্যৎ পূর্বকাল (futuro anteriore):', en: 'Future perfect after appena:' }, it: 'Appena ___ finito la relazione, te la manderò.', options: ['avrò', 'avrei', 'avevo', 'abbia'], answer: 0, explanation: { bn: 'ব্যাকরণ সূত্র: Appena + futuro anteriore (avrò finito) — Appena ভবিষ্যতের পূর্ববর্তী কাজ বোঝাতে futuro anteriore গ্রহণ করে for prior future action।', en: 'Appena takes futuro anteriore for prior future action.' } },
      { id: 'b1u4q3', prompt: { bn: 'যৌগিক জেরুন্ড (gerundio composto):', en: 'Compound gerund:' }, it: '___ prenotato in anticipo, abbiamo speso molto meno.', options: ['Avendo', 'Essendo', 'Avere', 'Avuto'], answer: 0, explanation: { bn: 'prenotare avere নেয় → Avendo prenotato।', en: 'Compound gerund of prenotare is Avendo prenotato.' } },
      { id: 'b1u4q4', prompt: { bn: 'অতীতের সমালোচনা (modale al condizionale passato):', en: 'Past modal regret/criticism:' }, it: '___ controllare gli orari prima di uscire di casa!', options: ['Avresti dovuto', 'Dovresti', 'Avrai dovuto', 'Avevi dovuto'], answer: 0, explanation: { bn: 'উচিত ছিল কিন্তু করা হয়নি = Avresti dovuto + infinito।', en: 'Should have done = Avresti dovuto + infinitive.' } },
    ],
  },
  {
    id: 'assess-b1-final',
    level: 'B1',
    title: { bn: 'B1 চূড়ান্ত পরীক্ষা (সম্পূর্ণ ইন্টারমিডিয়েট মূল্যায়ন)', en: 'B1 Final Comprehensive Assessment' },
    passScore: 0.75,
    questions: [
      { id: 'b1f1', prompt: { bn: 'কালের সামঞ্জস্য (concordanza dei tempi):', en: 'Sequence of tenses in subjunctive:' }, it: 'Temevamo che il corriere non ___ in tempo per la partenza.', options: ['arrivi', 'arrivasse', 'sia arrivato', 'arriverà'], answer: 1, explanation: { bn: 'Temevamo (অতীত) → congiuntivo imperfetto (arrivasse)।', en: 'Past main verb requires imperfect subjunctive.' } },
      { id: 'b1f2', prompt: { bn: '৩য় প্রকার শর্তমূলক বাক্য:', en: 'Third conditional:' }, it: 'Se mi avessi chiamato, ti ___ a prendere in stazione.', options: ['venivo', 'sarei venuto', 'verrei', 'sarò venuto'], answer: 1, explanation: { bn: 'ব্যাকরণ সূত্র: Se + congiuntivo trapassato → condizionale passato (sarei venuto) — sarei venuto completes the অতীতের অবাস্তব শর্ত প্রকাশে।', en: 'sarei venuto completes the past counterfactual.' } },
      { id: 'b1f3', prompt: { bn: 'সম্বন্ধসূচক il cui:', en: 'Possessive relative pronoun:' }, it: 'È uno scrittore ___ libri sono tradotti in tutto il mondo.', options: ['che i', 'i cui', 'del quale i', 'chi'], answer: 1, explanation: { bn: 'যাঁর বইগুলো = i cui libri।', en: 'Whose books = i cui libri.' } },
      { id: 'b1f4', prompt: { bn: 'অনুমানের ভবিষ্যৎ (futuro di probabilità):', en: 'Future of probability:' }, it: 'Sara non è ancora arrivata; ___ trovato traffico in tangenziale.', options: ['avrà', 'avrebbe', 'aveva', 'avesse'], answer: 0, explanation: { bn: 'অতীত ঘটনা সম্পর্কে বর্তমান অনুমান = avrà trovato।', en: 'Future perfect expresses present conjecture about the past.' } },
      { id: 'b1f5', prompt: { bn: 'কর্মবাচ্য (venire + participio):', en: 'Dynamic passive with venire:' }, it: 'Ogni settimana il museo ___ visitato da migliaia di studenti.', options: ['viene', 'va', 'ha', 'sta'], answer: 0, explanation: { bn: 'গতিশীল কর্মবাচ্যে viene visitato।', en: 'Dynamic passive uses venire + past participle.' } },
      { id: 'b1f6', prompt: { bn: 'আনুপাতিক তুলনা:', en: 'Proportional comparison:' }, it: '___ si legge in italiano, ___ si arricchisce il vocabolario.', options: ['Più / più', 'Tanto / che', 'Come / così', 'Meglio / peggio'], answer: 0, explanation: { bn: 'যত... তত... = Più... più...।', en: 'The more... the more... = Più... più...' } },
      { id: 'b1f7', prompt: { bn: 'অতীত ইনফিনিটিভ (infinito passato):', en: 'Past infinitive after dopo:' }, it: 'Dopo ___ firmato il contratto, abbiamo brindato insieme.', options: ['aver', 'essere', 'avendo', 'avuto'], answer: 0, explanation: { bn: 'ব্যাকরণ সূত্র: Dopo + infinito passato (aver firmato) — Dopo এর পরে অতীত ইনফিনিটিভ (infinito passato) বসে: aver firmato।', en: 'Dopo takes the past infinitive aver firmato.' } },
      { id: 'b1f8', prompt: { bn: 'অনির্দিষ্ট সর্বনাম + congiuntivo:', en: 'Indefinite pronoun + subjunctive:' }, it: '___ voglia partecipare al seminario deve iscriversi online.', options: ['Chiunque', 'Qualcuno', 'Ognuno', 'Alcuno'], answer: 0, explanation: { bn: 'ব্যাকরণ সূত্র: Chiunque + congiuntivo (voglia) — Chiunque এর পরে সাবজাংক্টিভ রূপ বসে।', en: 'Chiunque takes the subjunctive.' } },
    ],
  },
];
