import type { Lesson, Unit } from '../types';

const lesson1: Lesson = {
  id: 'b1-u3-l1',
  number: 1,
  title: 'Il modulo va presentato entro venerdì',
  subtitle: { bn: 'কর্মবাচ্য (essere, venire, andare) ও নৈর্ব্যক্তিক si', en: 'Passive constructions (essere, venire, andare) & impersonal si' },
  minutes: 14,
  objectives: [
    { bn: 'essere, venire ও andare + participio passato দিয়ে কর্মবাচ্য গঠন করতে পারবেন', en: 'Use essere, venire, and andare + past participle for passive meaning' },
    { bn: 'বিভিন্ন কালে নৈর্ব্যক্তিক ও কর্মবাচ্যমূলক si (si passivante) ব্যবহার করবেন', en: 'Apply impersonal and passive si across present, past, and future tenses' },
  ],
  phrases: [
    { id: 'b1u3l1-p1', it: 'La domanda di borsa di studio va presentata entro il trenta settembre.', tr: { bn: 'বৃত্তির আবেদন ত্রিশে সেপ্টেম্বরের মধ্যে জমা দিতে হবে।', en: 'The scholarship application must be submitted by September thirtieth.' } },
    { id: 'b1u3l1-p2', it: 'Ogni anno in questa piazza vengono organizzati concerti gratuiti.', tr: { bn: 'প্রতি বছর এই চত্বরে বিনামূল্যে কনসার্টের আয়োজন করা হয়।', en: 'Free concerts are organised in this square every year.' } },
    { id: 'b1u3l1-p3', it: 'Ieri in assemblea si è discusso a lungo del bilancio.', tr: { bn: 'গতকাল সভায় বাজেট নিয়ে দীর্ঘক্ষণ আলোচনা হয়েছে।', en: 'Yesterday in the assembly the budget was discussed at length.' } },
    { id: 'b1u3l1-p4', it: 'Negli ultimi anni si sono costruite nuove piste ciclabili.', tr: { bn: 'সাম্প্রতিক বছরগুলোতে নতুন সাইকেল লেন নির্মাণ করা হয়েছে।', en: 'In recent years new cycle lanes have been built.' } },
  ],
  grammar: [
    {
      id: 'passivo-venire-andare',
      title: { bn: 'কর্মবাচ্য: essere, venire, andare এবং si passivante', en: 'Passive with essere, venire, andare & si passivante' },
      explanation: {
        bn: 'সাধারণ কর্মবাচ্যে essere + participio বসে। সরল কালে গতিশীল কাজ বোঝাতে venire + participio বসে (viene chiuso)। আর আবশ্যকতা বা নিয়ম ("করতে হবে") বোঝাতে andare + participio বসে (va firmato = স্বাক্ষর করতে হবে)। যৌগিক কালে si passivante সবসময় essere সহায়ক নেয় (si sono venduti)।',
        en: 'Standard passive uses essere + participle. Simple tenses often use venire + participle for dynamic actions, while andare + participle means "must be done". Compound tenses of si passivante always take essere.',
      },
      table: [
        { label: 'essere (সব কালে)', it: 'è stato approvato dalla giunta', tr: { bn: 'পরিষদ দ্বারা অনুমোদিত হয়েছে', en: 'was approved by the council' } },
        { label: 'venire (সরল কালে)', it: 'viene chiuso / verrà inaugurato', tr: { bn: 'বন্ধ করা হয় / উদ্বোধন করা হবে', en: 'is closed / will be inaugurated' } },
        { label: 'andare (আবশ্যকতা)', it: 'va compilato / vanno conservati', tr: { bn: 'পূরণ করতে হবে / সংরক্ষণ করতে হবে', en: 'must be filled in / must be kept' } },
      ],
      examples: [
        { id: 'b1u3l1-e1', it: 'Questi farmaci vanno conservati in un luogo fresco.', tr: { bn: 'এই ওষুধগুলো ঠান্ডা স্থানে সংরক্ষণ করতে হবে।', en: 'These medicines must be kept in a cool place.' } },
        { id: 'b1u3l1-e2', it: 'Durante il temporale molti documenti sono andati perduti.', tr: { bn: 'ঝড়ের সময় অনেক নথি নষ্ট হয়ে গেছে।', en: 'During the storm many documents were lost.' } },
      ],
    },
  ],
  dialogue: {
    title: { bn: 'পৌরসভার নতুন ডিজিটাল সেবা', en: 'New municipal digital services' },
    context: { bn: 'নাগরিক সেবা কেন্দ্রে কর্মী তারিককে নতুন অনলাইন পোর্টাল বুঝিয়ে বলছেন।', en: 'A civic centre clerk explains the new online portal to Tariq.' },
    lines: [
      { speaker: 'Impiegata', it: 'Buongiorno! Le ricordo che da questo mese i certificati anagrafici vengono rilasciati anche online.', tr: { bn: 'শুভ সকাল! আপনাকে মনে করিয়ে দিচ্ছি যে এই মাস থেকে নিবন্ধন সনদ অনলাইনেও প্রদান করা হচ্ছে।', en: 'Good morning! I remind you that starting this month registry certificates are also issued online.' } },
      { speaker: 'Tariq', it: 'Che comodità! E come va presentata la richiesta di cambio di residenza?', tr: { bn: 'কী সুবিধা! আর ঠিকানা পরিবর্তনের আবেদন কীভাবে জমা দিতে হবে?', en: 'How convenient! And how must the change-of-residence request be submitted?' } },
      { speaker: 'Impiegata', it: 'Il modulo va compilato sul portale con lo SPID e vanno allegate le copie del contratto d’affitto.', tr: { bn: 'পোর্টালে SPID দিয়ে ফর্মটি পূরণ করতে হবে এবং ভাড়ার চুক্তির কপি সংযুক্ত করতে হবে।', en: 'The form must be filled in on the portal with SPID and copies of the rental contract must be attached.' } },
      { speaker: 'Tariq', it: 'Così si risparmierà davvero tantissimo tempo agli sportelli!', tr: { bn: 'এতে সত্যিই কাউন্টারে অনেক সময় বাঁচবে!', en: 'That way a huge amount of time will really be saved at the counters!' } },
    ],
  },
  quiz: [
    { id: 'q1', prompt: { bn: '«ফর্মটি বড় হাতের অক্ষরে পূরণ করতে হবে» (আবশ্যকতা):', en: '«The form must be filled in in block letters»:' }, it: 'Questo modulo ___ compilato in stampatello.', options: ['va', 'viene', 'sta', 'ha'], answer: 0, explanation: { bn: 'andare + participio (va compilato) আবশ্যকতা বা নিয়ম প্রকাশ করে।', en: 'va compilato expresses obligation.' } },
    { id: 'q2', prompt: { bn: 'অতীতে নৈর্ব্যক্তিক si কোন সহায়ক ক্রিয়া নেয়?', en: 'Which auxiliary does impersonal/passive si take in the past?' }, it: 'Ieri in riunione si ___ parlato del nuovo progetto.', options: ['ha', 'è', 'aveva', 'stato'], answer: 1, explanation: { bn: 'যৌগিক কালে si সবসময় essere সহায়ক নেয় (si è parlato)।', en: 'Compound tenses with si always use essere.' } },
    { id: 'q3', prompt: { bn: 'গতিশীল কর্মবাচ্য:', en: 'Dynamic passive in the future:' }, it: 'Il nuovo ponte ___ inaugurato la settimana prossima.', options: ['verrà', 'andrà', 'avrà', 'farà'], answer: 0, explanation: { bn: 'ভবিষ্যতে সম্পন্ন হবে এমন কর্মবাচ্যে verrà inaugurato।', en: 'verrà + past participle forms the dynamic future passive.' } },
    { id: 'q4', prompt: { bn: 'বহুবচন বিশেষ্যের সাথে si passivante:', en: 'Agreement with plural noun in si passivante:' }, it: 'Durante il festival si ___ venduti diecimila biglietti.', options: ['è', 'sono', 'hanno', 'ha'], answer: 1, explanation: { bn: 'diecimila biglietti বহুবচন → si sono venduti।', en: 'Plural subject requires si sono venduti.' } },
  ],
  tip: { bn: 'মনে রাখবেন: venire দিয়ে কর্মবাচ্য কেবল সরল কালে (presente, imperfetto, futuro, condizionale, congiuntivo) হয়; যৌগিক কালে কখনোই *è venuto fatto হয় না, তখন è stato fatto বসে।', en: 'Never use venire in compound passive tenses (*è venuto chiuso); always use essere (è stato chiuso).' },
};

const lesson2: Lesson = {
  id: 'b1-u3-l2',
  number: 2,
  title: 'Sebbene piovesse, siamo usciti',
  subtitle: { bn: 'কারণ, স্বীকারোক্তি, উদ্দেশ্য ও শর্তমূলক সংযোজক অব্যয়', en: 'Causal, concessive, purpose & conditional connectors' },
  minutes: 15,
  objectives: [
    { bn: 'poiché, siccome, visto che, perciò, pertanto দিয়ে কারণ ও ফলাফল যুক্ত করবেন', en: 'Link cause and effect with poiché, visto che, perciò, pertanto' },
    { bn: 'sebbene, nonostante, affinché, purché, a patto che-এর পরে সঠিক সংযোজক ভাব বসাবেন', en: 'Use the subjunctive after sebbene, nonostante, affinché, purché, a patto che' },
  ],
  phrases: [
    { id: 'b1u3l2-p1', it: 'Visto che domani ci sarà lo sciopero, lavorerò da casa.', tr: { bn: 'যেহেতু আগামীকাল ধর্মঘট থাকবে, আমি বাসা থেকে কাজ করব।', en: 'Seeing that there will be a strike tomorrow, I will work from home.' } },
    { id: 'b1u3l2-p2', it: 'Sebbene il percorso fosse impegnativo, siamo arrivati in cima.', tr: { bn: 'পথটি কঠিন হওয়া সত্ত্বেও আমরা চূড়ায় পৌঁছেছি।', en: 'Although the route was demanding, we reached the top.' } },
    { id: 'b1u3l2-p3', it: 'Ti presto la bici purché tu me la riporti entro stasera.', tr: { bn: 'আমি তোমাকে সাইকেল ধার দিচ্ছি, শর্ত থাকে যে আজ সন্ধ্যার মধ্যে ফেরত দেবে।', en: 'I will lend you the bike provided you bring it back by tonight.' } },
    { id: 'b1u3l2-p4', it: 'Parla chiaramente affinché tutti possano capire.', tr: { bn: 'স্পষ্টভাবে কথা বলো যাতে সবাই বুঝতে পারে।', en: 'Speak clearly so that everyone can understand.' } },
  ],
  grammar: [
    {
      id: 'connettivi-concessivi-b1',
      title: { bn: 'উন্নত সংযোজক অব্যয় (Indicativo বনাম Congiuntivo)', en: 'Advanced connectors (Indicative vs Subjunctive)' },
      explanation: {
        bn: 'কারণবাচক siccome, poiché, visto che, dato che এবং anche se (বাস্তব ক্ষেত্রে)-র পরে indicativo বসে। কিন্তু স্বীকারোক্তিমূলক sebbene, benché, nonostante, malgrado, উদ্দেশ্যবাচক affinché, এবং শর্তবাচক purché, a patto che, qualora, a meno che non-এর পরে সবসময় congiuntivo বসে!',
        en: 'Causal connectors (siccome, poiché, visto che) and factual anche se take the indicative. Concessive (sebbene, benché, nonostante), purpose (affinché), and conditional (purché, a patto che, qualora) connectors require the subjunctive.',
      },
      table: [
        { label: '+ Indicativo', it: 'siccome, visto che, dato che, anche se, perciò', tr: { bn: 'যেহেতু, যদিও, তাই', en: 'since, even though, therefore' } },
        { label: '+ Congiuntivo', it: 'sebbene, benché, nonostante, affinché, purché, a patto che', tr: { bn: 'সত্ত্বেও, যাতে, শর্তে যে', en: 'although, so that, provided that' } },
        { label: 'Pur + gerundio', it: 'Pur vivendo lontano, arriva sempre puntuale.', tr: { bn: 'দূরে থাকা সত্ত্বেও সবসময় সময়মতো আসে।', en: 'Despite living far away, he always arrives on time.' } },
      ],
      examples: [
        { id: 'b1u3l2-e1', it: 'Nonostante faccia freddo, i bar all’aperto sono pieni.', tr: { bn: 'ঠান্ডা থাকা সত্ত্বেও খোলা বারগুলো পূর্ণ।', en: 'Despite it being cold, the outdoor cafés are full.' } },
        { id: 'b1u3l2-e2', it: 'Qualora aveste dubbi, contattate la segreteria.', tr: { bn: 'আপনাদের কোনো সন্দেহ থাকলে দপ্তরে যোগাযোগ করবেন।', en: 'Should you have any doubts, contact the office.' } },
      ],
    },
  ],
  dialogue: {
    title: { bn: 'পাড়ার সবুজ মেলা আয়োজন', en: 'Organising the neighbourhood green fair' },
    context: { bn: 'স্বেচ্ছাসেবক কমিটির সভায় এলেনা ও মার্কো আবহাওয়া ও প্রস্তুতি নিয়ে কথা বলছে।', en: 'At a volunteer committee meeting, Elena and Marco discuss weather and preparations.' },
    lines: [
      { speaker: 'Marco', it: 'Visto che per domenica è prevista pioggia, dobbiamo preparare un piano alternativo.', tr: { bn: 'যেহেতু রবিবারের জন্য বৃষ্টির পূর্বাভাস আছে, আমাদের একটি বিকল্প পরিকল্পনা প্রস্তুত করতে হবে।', en: 'Since rain is forecast for Sunday, we must prepare an alternative plan.' } },
      { speaker: 'Elena', it: 'Hai ragione. Il comune ci lascerà usare il salone coperto, purché facciamo richiesta entro oggi.', tr: { bn: 'ঠিক বলেছ। পৌরসভা আমাদের ছাদযুক্ত হলঘরটি ব্যবহার করতে দেবে, শর্ত হলো আজকের মধ্যে আবেদন করতে হবে।', en: 'You are right. The municipality will let us use the covered hall, provided we apply by today.' } },
      { speaker: 'Marco', it: 'Benissimo! Inviamo subito un avviso affinché tutti gli espositori siano informati in tempo.', tr: { bn: 'চমৎকার! এখনই একটি বিজ্ঞপ্তি পাঠিয়ে দিই যাতে সব প্রদর্শক সময়মতো জানতে পারেন।', en: 'Wonderful! Let us send a notice right away so that all exhibitors are informed in time.' } },
      { speaker: 'Elena', it: 'Sebbene il tempo sia incerto, sono sicura che parteciperanno tantissime famiglie.', tr: { bn: 'আবহাওয়া অনিশ্চিত হওয়া সত্ত্বেও আমি নিশ্চিত যে প্রচুর পরিবার অংশ নেবে।', en: 'Although the weather is uncertain, I am sure lots of families will take part.' } },
    ],
  },
  quiz: [
    { id: 'q1', prompt: { bn: 'sebbene-এর পরে কোন ভাব (modo) বসে?', en: 'Which mood follows sebbene?' }, it: 'Sebbene ___ tardi, abbiamo finito la relazione.', options: ['era', 'fosse', 'sarà', 'è'], answer: 1, explanation: { bn: 'Sebbene + congiuntivo (fosse)।', en: 'Sebbene always requires the subjunctive.' } },
    { id: 'q2', prompt: { bn: 'উদ্দেশ্য বোঝাতে «যাতে»:', en: 'Purpose connector meaning «so that»:' }, it: 'Ti spiego tutto ___ tu possa fare da solo.', options: ['siccome', 'affinché', 'poiché', 'perciò'], answer: 1, explanation: { bn: 'affinché + congiuntivo = যাতে।', en: 'affinché + subjunctive means so that.' } },
    { id: 'q3', prompt: { bn: 'শর্তবাচক সংযোজক:', en: 'Conditional connector («provided that»):' }, it: 'Accetteremo il lavoro ___ vengano rispettate le scadenze.', options: ['a condizione che', 'visto che', 'dato che', 'pertanto'], answer: 0, explanation: { bn: 'a condizione che / purché + congiuntivo = এই শর্তে যে।', en: 'a condizione che + subjunctive = on condition that.' } },
    { id: 'q4', prompt: { bn: 'কারণবাচক সংযোজক (+ indicativo):', en: 'Causal connector taking the indicative:' }, it: '___ il negozio era chiuso, siamo tornati a casa.', options: ['Benchè', 'Siccome', 'Affinché', 'Purché'], answer: 1, explanation: { bn: 'Siccome + indicativo (era chiuso) = যেহেতু।', en: 'Siccome takes the indicative.' } },
  ],
  tip: { bn: 'anche se + indicativo এবং sebbene/nonostante + congiuntivo — দুটোর অর্থই "যদিও", তাই কথোপকথনে দ্বিধা হলে anche se ব্যবহার করা সহজ!', en: 'anche se + indicative and sebbene/nonostante + subjunctive both mean "even though/although".' },
};

const lesson3: Lesson = {
  id: 'b1-u3-l3',
  number: 3,
  title: 'Farò riparare la caldaia dal tecnico',
  subtitle: { bn: 'প্রেরণার্থক ক্রিয়া (fare/lasciare) ও আনুপাতিক তুলনা', en: 'Causative constructions (fare/lasciare) & proportional comparisons' },
  minutes: 14,
  objectives: [
    { bn: 'fare + infinito (অন্যকে দিয়ে করানো) এবং lasciare + infinito (করতে দেওয়া) ব্যবহার করবেন', en: 'Use causative fare + infinitive and permissive lasciare + infinitive' },
    { bn: 'più… più…, meno… meno…, tanto… quanto… দিয়ে আনুপাতিক তুলনা করবেন', en: 'Express proportional comparisons andchiunque / qualsiasi + subjunctive' },
  ],
  phrases: [
    { id: 'b1u3l3-p1', it: 'Domani farò controllare i freni dal meccanico.', tr: { bn: 'আগামীকাল মেকানিককে দিয়ে ব্রেক পরীক্ষা করাব।', en: 'Tomorrow I will have the brakes checked by the mechanic.' } },
    { id: 'b1u3l3-p2', it: 'Mia sorella mi ha lasciato usare il suo portatile.', tr: { bn: 'আমার বোন আমাকে তার ল্যাপটপ ব্যবহার করতে দিয়েছে।', en: 'My sister let me use her laptop.' } },
    { id: 'b1u3l3-p3', it: 'Più pratichi la lingua, più diventi sicuro nel parlare.', tr: { bn: 'যত ভাষা চর্চা করবে, কথা বলায় তত আত্মবিশ্বাসী হবে।', en: 'The more you practise the language, the more confident you become.' } },
    { id: 'b1u3l3-p4', it: 'Qualsiasi decisione tu prenda, noi ti sosterremo.', tr: { bn: 'তুমি যে সিদ্ধান্তই নাও না কেন, আমরা তোমাকে সমর্থন করব।', en: 'Whatever decision you make, we will support you.' } },
  ],
  grammar: [
    {
      id: 'causativi-fare-lasciare',
      title: { bn: 'Fare / Lasciare + Infinito ও আনুপাতিক তুলনা', en: 'Causative fare/lasciare & proportional comparisons' },
      explanation: {
        bn: 'নিজে না করে অন্যকে দিয়ে কোনো কাজ করানো বোঝাতে fare + infinito (faccio riparare la bici) এবং কাউকে নিজের জন্য কিছু করিয়ে নেওয়া বোঝাতে farsi + infinito (mi faccio tagliare i capelli) বসে। আর অনুমতি দেওয়া বোঝাতে lasciare + infinito বসে। আনুপাতিক তুলনায় Più… più… / Meno… meno… ব্যবহৃত হয়।',
        en: 'Use fare + infinitive for "have something done / make someone do" and farsi + infinitive when done for oneself. Use lasciare + infinitive for "let someone do". Proportional correlation uses Più… più… / Meno… meno…',
      },
      table: [
        { label: 'fare + infinito', it: 'Ho fatto tradurre il certificato.', tr: { bn: 'সনদটি অনুবাদ করিয়েছি।', en: 'I had the certificate translated.' } },
        { label: 'farsi + infinito', it: 'Ti sei fatto timbrare il modulo?', tr: { bn: 'ফর্মটিতে কি সিল মারিয়ে নিয়েছ?', en: 'Did you get the form stamped?' } },
        { label: 'আনুপাতিক তুলনা', it: 'Più leggo, più imparo.', tr: { bn: 'যত পড়ি, তত শিখি।', en: 'The more I read, the more I learn.' } },
      ],
      examples: [
        { id: 'b1u3l3-e1', it: 'Non lasciarti scoraggiare dalle prime difficoltà.', tr: { bn: 'শুরুর জটিলতায় নিজেকে হতাশ হতে দিয়ো না।', en: 'Do not let yourself be discouraged by the first difficulties.' } },
        { id: 'b1u3l3-e2', it: 'Chiunque voglia intervenire può alzare la mano.', tr: { bn: 'যে কেউ কথা বলতে চাইলে হাত তুলতে পারে।', en: 'Anyone who wishes to speak may raise their hand.' } },
      ],
    },
  ],
  dialogue: {
    title: { bn: 'বাসা সংস্কার ও হিসাবনিকাশ', en: 'Flat renovation and budgeting' },
    context: { bn: 'সারা ও তারিক তাদের নতুন ফ্ল্যাটের সংস্কার কাজ নিয়ে কথা বলছে।', en: 'Sara and Tariq discuss renovating their new flat.' },
    lines: [
      { speaker: 'Sara', it: 'Tariq, hai deciso se imbiancare da solo o chiamare un professionista?', tr: { bn: 'তারিক, নিজেই রঙ করবে নাকি পেশাদার কাউকে ডাকবে ঠিক করেছ?', en: 'Tariq, have you decided whether to paint the walls yourself or call a professional?' } },
      { speaker: 'Tariq', it: 'Alla fine farò imbiancare tutto il salotto da una ditta specializzata.', tr: { bn: 'শেষমেশ একটি বিশেষজ্ঞ সংস্থাকে দিয়ে পুরো বসার ঘর রঙ করাব।', en: 'In the end I will have the whole living room painted by a specialist firm.' } },
      { speaker: 'Sara', it: 'Fai bene! Più i lavori sono fatti con cura all’inizio, meno problemi avremo in futuro.', tr: { bn: 'ভালো করছ! শুরুতে কাজ যত যত্নসহকারে করা হবে, ভবিষ্যতে সমস্যা তত কম হবে।', en: 'Good choice! The more carefully the work is done at the start, the fewer problems we will have in the future.' } },
      { speaker: 'Tariq', it: 'Esatto, e mi sono già fatto mandare tre preventivi diversi per confrontare i prezzi.', tr: { bn: 'একদম ঠিক, আর দাম তুলনা করার জন্য আমি ইতিমধ্যে তিনটি ভিন্ন প্রাক্কলন আনিয়ে নিয়েছি।', en: 'Exactly, and I have already had three different quotes sent to me to compare prices.' } },
    ],
  },
  quiz: [
    { id: 'q1', prompt: { bn: '«আমি মেকানিককে দিয়ে গাড়ি মেরামত করিয়েছি»:', en: '«I had the car repaired by the mechanic»:' }, it: 'Ho ___ riparare l’auto dal meccanico.', options: ['fatto', 'lasciato', 'andato', 'venuto'], answer: 0, explanation: { bn: 'অন্যকে দিয়ে কাজ করানো = Ho fatto riparare।', en: 'Ho fatto riparare = I had it repaired.' } },
    { id: 'q2', prompt: { bn: 'আনুপাতিক তুলনা সম্পূর্ণ করুন:', en: 'Complete the proportional comparison:' }, it: '___ si usa la bici, ___ si inquina la città.', options: ['Più / meno', 'Tanto / che', 'Più / che', 'Come / così'], answer: 0, explanation: { bn: 'যত বেশি সাইকেল চালানো হয়, তত কম দূষণ হয় = Più… meno…।', en: 'The more… the less… = Più… meno…' } },
    { id: 'q3', prompt: { bn: '«যে কেউ অংশ নিতে চাইলে» (+ congiuntivo):', en: '«Anyone who wants to participate»:' }, it: '___ voglia partecipare può iscriversi gratuitamente.', options: ['Chiunque', 'Qualcuno', 'Ciascuno', 'Nessuno'], answer: 0, explanation: { bn: 'Chiunque + congiuntivo (voglia)।', en: 'Chiunque takes the subjunctive.' } },
    { id: 'q4', prompt: { bn: 'অনুমতি দেওয়া অর্থে:', en: 'Expressing permission («let us enter»):' }, it: 'Dopo dieci minuti di attesa ci hanno ___ entrare.', options: ['lasciato', 'avuto', 'stato', 'diventato'], answer: 0, explanation: { bn: 'lasciare + infinito = করতে দেওয়া।', en: 'lasciare + infinitive means to let / allow.' } },
  ],
  tip: { bn: 'farsi + infinito-তে সর্বনামটি কর্তার সাথে মেলে এবং যৌগিক কালে essere সহায়ক নেয়: Mi sono fatto spiegare la regola।', en: 'Reflexive causative farsi takes essere in compound tenses: Mi sono fatto spiegare la regola.' },
};

export const b1Unit3: Unit = {
  id: 'b1-u3',
  number: 3,
  title: 'Società, passivo e connettivi',
  subtitle: { bn: 'নাগরিক সমাজ, কর্মবাচ্য, সংযোজক ও প্রেরণার্থক ক্রিয়া', en: 'Civic society, passive voice, connectors & causatives' },
  lessons: [lesson1, lesson2, lesson3],
};
