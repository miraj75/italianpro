import type { Lesson, Unit } from '../types';

const lesson1: Lesson = {
  id: 'b2-u3-l1',
  number: 1,
  title: 'Alla luce dei nuovi dati, pertanto…',
  subtitle: { bn: 'যুক্তিমূলক সংযোজক, প্রিপোজিশনাল পদগুচ্ছ ও দ্বি-সহায়ক ক্রিয়া', en: 'Argumentative connectors, prepositional phrases & dual-auxiliary verbs' },
  minutes: 16,
  objectives: [
    { bn: 'pertanto, giacché, tant’è vero che, vale a dire ও in ultima analisi ব্যবহার করে যুক্তিপূর্ণ প্রবন্ধ সাজাবেন', en: 'Organise arguments with high-register causal, deductive, and reformulating connectors' },
    { bn: 'ai sensi di, alla luce di, a scapito di এবং সকর্মক/অকর্মক ভেদে avere/essere গ্রহণকারী ক্রিয়া (aumentare, diminuire) প্রয়োগ করবেন', en: 'Use complex prepositional phrases and select avere vs essere with change verbs' },
  ],
  phrases: [
    { id: 'b2u3l1-p1', it: 'La siccità prolungata colpisce le colture, tant’è vero che il raccolto si è dimezzato.', tr: { bn: 'দীর্ঘস্থায়ী খরা ফসলে আঘাত হেনেছে, যার প্রমাণ হলো ফলন অর্ধেকে নেমে এসেছে।', en: 'Prolonged drought is hitting crops, so much so that the harvest has halved.' } },
    { id: 'b2u3l1-p2', it: 'Non si può aumentare il fatturato a scapito della sicurezza sul lavoro.', tr: { bn: 'কর্মক্ষেত্রের নিরাপত্তার বিনিময়ে কখনোই আয় বাড়ানো যায় না।', en: 'Turnover cannot be increased at the expense of workplace safety.' } },
    { id: 'b2u3l1-p3', it: 'Il governo ha diminuito le aliquote e la pressione fiscale è diminuita.', tr: { bn: 'সরকার করের হার কমিয়েছে এবং করের বোঝা কমেছে।', en: 'The government lowered tax rates and the tax burden decreased.' } },
    { id: 'b2u3l1-p4', it: 'In ultima analisi, l’interoperabilità digitale agevola ogni procedimento pubblico.', tr: { bn: 'চূড়ান্ত বিশ্লেষণে, ডিজিটাল আন্তঃকার্যক্ষমতা প্রতিটি সরকারি প্রক্রিয়া সহজতর করে।', en: 'Ultimately, digital interoperability facilitates every public procedure.' } },
  ],
  grammar: [
    {
      id: 'connettivi-argomentativi',
      title: { bn: 'যুক্তির সংযোজক ও দ্বি-সহায়ক ক্রিয়া', en: 'Argumentative connectors & dual auxiliaries' },
      explanation: {
        bn: 'pertanto/ne consegue che যৌক্তিক সিদ্ধান্ত, vale a dire/ossia ব্যাখ্যা, এবং alla luce di/a prescindere da সূক্ষ্ম সম্পর্ক দেখায়। aumentare, diminuire, migliorare, salire, cambiare ক্রিয়ায় কর্ম থাকলে avere এবং অকর্মক হলে essere বসে।',
        en: 'Use pertanto for deduction, vale a dire for reformulation, and prepositional phrases like alla luce di. Verbs of change take avere when transitive and essere when intransitive.',
      },
      table: [
        { label: 'Deduzione', it: 'Il ricorso è tardivo; pertanto è inammissibile', tr: { bn: 'আপিল দেরিতে হয়েছে; অতএব অগ্রহণযোগ্য', en: 'The appeal is late; therefore inadmissible' } },
        { label: 'Locuzione prep.', it: 'Ai sensi dell’art. 3 / Alla luce delle indagini', tr: { bn: '৩ নং ধারা অনুযায়ী / তদন্তের আলোকে', en: 'Pursuant to Art. 3 / In light of inquiries' } },
        { label: 'Doppio ausiliare', it: 'I costi sono saliti / Ho salito le scale', tr: { bn: 'খরচ বেড়েছে / আমি সিঁড়ি বেয়ে উঠেছি', en: 'Costs rose / I climbed the stairs' } },
      ],
      examples: [
        { id: 'b2u3l1-e1', it: 'A prescindere dalle opinioni personali, dobbiamo attenerci ai dati empirici.', tr: { bn: 'ব্যক্তিগত মতামত নির্বিশেষে আমাদের অভিজ্ঞতালব্ধ তথ্য মেনে চলতে হবে।', en: 'Regardless of personal opinions, we must stick to empirical data.' } },
      ],
    },
  ],
  dialogue: {
    title: { bn: 'নিরাপত্তা ও বাজেট পর্যালোচনা', en: 'Reviewing safety and budget' },
    context: { bn: 'নিরাপত্তা প্রকৌশলী জুলিয়া ও ব্যবস্থাপক তারেক কারখানার বার্ষিক প্রতিবেদন আলোচনা করছেন।', en: 'Safety engineer Giulia and manager Tarek review the plant’s annual report.' },
    lines: [
      { speaker: 'Tarek', it: 'Giulia, quest’anno i costi dell’energia sono aumentati del dodici per cento.', tr: { bn: 'জুলিয়া, এ বছর জ্বালানি খরচ বারো শতাংশ বেড়েছে।', en: 'Giulia, this year energy costs increased by twelve per cent.' } },
      { speaker: 'Giulia', it: 'È vero, tuttavia abbiamo migliorato l’isolamento termico, tant’è vero che i consumi invernali sono già diminuiti.', tr: { bn: 'সত্য, তবুও আমরা তাপ নিরোধক ব্যবস্থা উন্নত করেছি, যার প্রমাণ হলো শীতকালীন খরচ ইতিমধ্যে কমেছে।', en: 'True, yet we improved thermal insulation, so much so that winter consumption has already dropped.' } },
      { speaker: 'Tarek', it: 'Ottimo risultato. Alla luce di questi numeri, nessuno potrà tagliare i fondi per la manutenzione.', tr: { bn: 'চমৎকার ফল। এই তথ্যের আলোকে কেউ রক্ষণাবেক্ষণের তহবিল কাটছাঁট করতে পারবে না।', en: 'Great result. In the light of these figures, no one will be able to cut maintenance funds.' } },
    ],
  },
  quiz: [
    { id: 'q1', prompt: { bn: 'বাস্তব প্রমাণ যোগ করার জন্য সঠিক সংযোজক:', en: 'Choose the connector introducing concrete proof:' }, it: 'Il mercato si sta riprendendo, ___ le esportazioni sono cresciute del 7%.', options: ['benché', 'tant’è vero che', 'a meno che', 'malgrado'], answer: 1, explanation: { bn: 'পূর্ববর্তী দাবির প্রমাণ দিতে tant’è vero che বসে।', en: 'tant’è vero che introduces confirming evidence.' } },
    { id: 'q2', prompt: { bn: 'a prescindere কোন প্রিপোজিশন নেয়?', en: 'Select the preposition governed by a prescindere:' }, it: 'A prescindere ___ costi iniziali, la riforma è necessaria.', options: ['dei', 'dai', 'ai', 'sui'], answer: 1, explanation: { bn: 'a prescindere da → dai costi।', en: 'a prescindere always takes da.' } },
    { id: 'q3', prompt: { bn: 'অকর্মক বাক্যে সঠিক সহায়ক ক্রিয়া:', en: 'Select the auxiliary for an intransitive change:' }, it: 'Negli ultimi anni l’aspettativa di vita ___ notevolmente.', options: ['ha cresciuta', 'è cresciuta', 'ha cresciuto', 'è cresciuto'], answer: 1, explanation: { bn: 'l’aspettativa (স্ত্রী) অকর্মকভাবে বৃদ্ধি পাওয়ায় è cresciuta বসে।', en: 'Intransitive crescere takes essere + feminine agreement.' } },
    { id: 'q4', prompt: { bn: 'পরিভাষার সহজ ব্যাখ্যা (reformulation) কোনটি?', en: 'Choose the reformulating connector ("that is / namely"):' }, it: 'L’APE, ___ l’attestato di prestazione energetica, è obbligatorio per vendere casa.', options: ['pertanto', 'vale a dire', 'al contrario', 'a scapito di'], answer: 1, explanation: { bn: 'ব্যাখ্যা বা প্রতিশব্দ দিতে vale a dire / ossia বসে।', en: 'vale a dire introduces an explanatory definition.' } },
  ],
  tip: { bn: 'সন্দেহ হলে নিজেকে জিজ্ঞাসা করুন: ক্রিয়াটির কি সরাসরি কর্ম (cosa? / chi?) আছে? থাকলে avere, না থাকলে essere!', en: 'When in doubt between avere and essere with change verbs, check for a direct object: object present → avere; no object → essere.' },
};

const lesson2: Lesson = {
  id: 'b2-u3-l2',
  number: 2,
  title: 'Più complesso di quanto non sembri',
  subtitle: { bn: 'অলংকারিক non, কাল্পনিক তুলনা (come se), সুপারলেটিভ ও বিশেষণের অবস্থান', en: 'Pleonastic non, come se, learned superlatives & adjective position' },
  minutes: 15,
  objectives: [
    { bn: 'finché non, a meno che non এবং তুলনামূলক বাক্যে (di quanto non) অলংকারিক non নির্ভুলভাবে ব্যবহার করবেন', en: 'Use pleonastic non correctly in temporal, conditional, and comparative clauses' },
    { bn: 'come se + congiuntivo, -errimo সুপারলেটিভ এবং বিশেষণের আগে-পরে অবস্থানভেদে অর্থের পরিবর্তন বুঝবেন', en: 'Master come se + subjunctive, -errimo superlatives, and pre/post-nominal adjective shifts' },
  ],
  phrases: [
    { id: 'b2u3l2-p1', it: 'La transizione ecologica è più complessa di quanto non si pensi comunemente.', tr: { bn: 'পরিবেশগত রূপান্তর সাধারণত যতটা ভাবা হয় তার চেয়েও বেশি জটিল।', en: 'The ecological transition is more complex than is commonly thought.' } },
    { id: 'b2u3l2-p2', it: 'Parlava del bilancio pubblico come se dirigesse il ministero da vent’anni.', tr: { bn: 'তিনি সরকারি বাজেট নিয়ে এমনভাবে কথা বলছিলেন যেন বিশ বছর ধরে মন্ত্রণালয় চালাচ্ছেন।', en: 'He spoke of the public budget as if he had been running the ministry for twenty years.' } },
    { id: 'b2u3l2-p3', it: 'Durante l’intero mandato il giudice ha mantenuto una condotta integerrima.', tr: { bn: 'পুরো মেয়াদে বিচারক অত্যন্ত নিষ্কলুষ ও সৎ আচরণ বজায় রেখেছেন।', en: 'Throughout his term the judge maintained an utterly upright conduct.' } },
    { id: 'b2u3l2-p4', it: 'Un alto funzionario ha chiarito che non abbiamo ancora notizie certe.', tr: { bn: 'একজন উচ্চপদস্থ কর্মকর্তা স্পষ্ট করেছেন যে আমাদের কাছে এখনো নিশ্চিত খবর নেই।', en: 'A high-ranking official clarified that we do not yet have certain news.' } },
  ],
  grammar: [
    {
      id: 'aggettivo-posizione-b2',
      title: { bn: 'come se, অলংকারিক non ও বিশেষণের অবস্থান', en: 'Pleonastic non, come se & adjective placement' },
      explanation: {
        bn: 'come se-র পরে সর্বদা congiuntivo imperfetto/trapassato বসে। un alto dirigente (উচ্চপদস্থ) vs un edificio alto (উঁচু); diverse proposte (বেশ কিছু) vs proposte diverse (ভিন্ন ভিন্ন)। ল্যাটিন সুপারলেটিভ: integro → integerrimo, celebre → celeberrimo, acre → acerrimo।',
        en: 'come se takes imperfect or pluperfect subjunctive. Pre-nominal adjectives often take figurative/quantifying meanings while post-nominal ones stay literal.',
      },
      table: [
        { label: 'Neg. pleonastica', it: 'finché non esce / più duro di quanto non creda', tr: { bn: 'বের হওয়া পর্যন্ত / ধারণার চেয়ে কঠিন', en: 'until it comes out / harder than one thinks' } },
        { label: 'Superlativi colti', it: 'celeberrimo, integerrimo, acerrimo, saluberrimo', tr: { bn: 'অতি বিখ্যাত, নিষ্কলুষ, ঘোর, স্বাস্থ্যকর', en: 'most famous, upright, bitter, healthy' } },
        { label: 'Posizione agg.', it: 'certe voci (কিছু কথা) vs notizie certe (নিশ্চিত খবর)', tr: { bn: 'অবস্থানভেদে অর্থ বদলায়', en: 'meaning shifts with position' } },
      ],
      examples: [
        { id: 'b2u3l2-e1', it: 'Il contratto resta valido a meno che una delle parti non eserciti il recesso.', tr: { bn: 'কোনো পক্ষ বাতিলের অধিকার প্রয়োগ না করা পর্যন্ত চুক্তিটি বৈধ থাকে।', en: 'The contract remains valid unless one of the parties exercises withdrawal.' } },
      ],
    },
  ],
  dialogue: {
    title: { bn: 'মৌখিক পরীক্ষার প্রস্তুতি', en: 'Preparing for the legal oral exam' },
    context: { bn: 'প্রার্থিনী আয়েশা ও পরামর্শক মারকো সূক্ষ্ম ব্যাকরণগত পার্থক্য ঝালাই করছেন।', en: 'Candidate Ayesha and mentor Marco polish fine grammatical distinctions.' },
    lines: [
      { speaker: 'Ayesha', it: 'Marco, nella frase «diverse soluzioni» voglio dire «molteplici» oppure «differenti tra loro»?', tr: { bn: 'মারকো, «diverse soluzioni»-তে আমি কি «বেশ কয়েকটি» বোঝাচ্ছি নাকি «ভিন্ন ভিন্ন»?', en: 'Marco, in "diverse soluzioni" am I meaning "several" or "different from each other"?' } },
      { speaker: 'Marco', it: 'Prima del nome, «diverse» significa «parecchie/varie». Se invece intendi «differenti», mettilo dopo: «soluzioni diverse».', tr: { bn: 'বিশেষ্যের আগে «diverse» মানে «বেশ কিছু»। আর «ভিন্ন ভিন্ন» বোঝাতে চাইলে পরে বসাও: «soluzioni diverse»।', en: 'Before the noun, "diverse" means "several". If you mean "different", put it after: "soluzioni diverse".' } },
      { speaker: 'Ayesha', it: 'Chiarissimo! E l’esame era meno ostico di quanto non temessi alla vigilia.', tr: { bn: 'একদম স্পষ্ট! আর পরীক্ষাটি আগের দিন যতটা ভয় পেয়েছিলাম তার চেয়ে কম কঠিন ছিল।', en: 'Crystal clear! And the exam was less daunting than I feared the evening before.' } },
    ],
  },
  quiz: [
    { id: 'q1', prompt: { bn: 'come se-র পরে সঠিক ক্রিয়া রূপ:', en: 'Complete the come se comparison:' }, it: 'Risponde alle domande come se ___ il regolamento a memoria.', options: ['conosce', 'conoscesse', 'conoscerà', 'conoscerebbe'], answer: 1, explanation: { bn: 'come se + congiuntivo imperfetto (conoscesse)।', en: 'come se governs the imperfect subjunctive.' } },
    { id: 'q2', prompt: { bn: 'celebre-এর তৎসম পরম সুপারলেটিভ কোনটি?', en: 'What is the learned superlative of celebre?' }, it: 'L’opera fu diretta da un maestro ___.', options: ['celebrissimo', 'celeberrimo', 'più celebre', 'stra-celebre'], answer: 1, explanation: { bn: 'celebre → celeberrimo।', en: 'celebre forms celeberrimo.' } },
    { id: 'q3', prompt: { bn: '«ভিত্তিহীন কিছু গল্প» অর্থে certe-এর সঠিক অবস্থান:', en: 'Select the phrase meaning "certain (some) unfounded rumours":' }, it: '___ diffuse in rete mancano di riscontro.', options: ['Voci certe', 'Certe voci', 'Voci sicure', 'Certo voci'], answer: 1, explanation: { bn: 'বিশেষ্যের আগে certe = কিছু (অনিশ্চিত)।', en: 'Pre-nominal certe means "certain / some".' } },
    { id: 'q4', prompt: { bn: 'finché non কাঠামোতে সঠিক ব্যবহার:', en: 'Select the correct temporal boundary:' }, it: 'Non attiveremo l’impianto finché il collaudo ___ depositato.', options: ['non sarà', 'sarà', 'è', 'fosse stato'], answer: 0, explanation: { bn: '«জমা না দেওয়া পর্যন্ত» অর্থে finché non + futuro।', en: 'finché non means "until".' } },
  ],
  tip: { bn: 'মনে রাখবেন: un grande scienziato (মহান বিজ্ঞানী) vs un uomo grande (লম্বা/বড় মানুষ) — B2 লেখায় বিশেষণের অবস্থান অর্থ বদলে দেয়।', en: 'Notice adjective placement: figurative/evaluative meanings sit before the noun; literal/physical traits sit after.' },
};

const lesson3: Lesson = {
  id: 'b2-u3-l3',
  number: 3,
  title: 'Me lo invii pure tramite PEC',
  subtitle: { bn: 'মডাল অনুমান, আনুষ্ঠানিক অনুজ্ঞা, প্রিপোজিশনাল সংযোগ ও শব্দগঠন', en: 'Epistemic modals, formal imperatives, verbal government & word formation' },
  minutes: 16,
  objectives: [
    { bn: 'অনুমান প্রকাশে মডাল ক্রিয়া (deve essersi verificato / potrebbe trattarsi) এবং আনুষ্ঠানিক Lei অনুজ্ঞায় সর্বনাম (Me lo dica / Si accomodi) ব্যবহার করবেন', en: 'Use epistemic modals and place clitics before formal Lei imperatives' },
    { bn: 'attenersi a, ottemperare a, incorrere in, vertere su ও শব্দগঠনের উপসর্গ-প্রত্যয় (ir-, il-, -ità, -zione) আয়ত্ত করবেন', en: 'Apply B2 prepositional government and derivational morphology accurately' },
  ],
  phrases: [
    { id: 'b2u3l3-p1', it: 'La firma digitale non risulta valida: deve esserci stato un errore di trasmissione.', tr: { bn: 'ডিজিটাল স্বাক্ষরটি বৈধ দেখাচ্ছে না: প্রেরণের সময় নিশ্চয়ই কোনো ভুল হয়েছে।', en: 'The digital signature is not valid: there must have been a transmission error.' } },
    { id: 'b2u3l3-p2', it: 'Gentile Avvocato, me lo invii pure via PEC e non se ne preoccupi.', tr: { bn: 'মাননীয় আইনজীবী, সার্টিফায়েড ইমেইলে সেটি আমাকে পাঠিয়ে দেবেন এবং চিন্তা করবেন না।', en: 'Dear Counsel, please send it to me by certified email and do not worry about it.' } },
    { id: 'b2u3l3-p3', it: 'Tutti i fornitori devono attenersi alle norme e ottemperare agli obblighi.', tr: { bn: 'সব সরবরাহকারীকে বিধিমালা মেনে চলতে এবং বাধ্যবাধকতা পালন করতে হবে।', en: 'All suppliers must abide by the rules and comply with obligations.' } },
    { id: 'b2u3l3-p4', it: 'Il tribunale ha annullato il licenziamento illegittimo per danno irreversibile.', tr: { bn: 'অপূরণীয় ক্ষতির কারণে আদালত অবৈধ বরখাস্তের আদেশ বাতিল করেছেন।', en: 'The court annulled the unlawful dismissal due to irreversible damage.' } },
  ],
  grammar: [
    {
      id: 'reggenze-verbali-b2',
      title: { bn: 'মডাল অনুমান, আনুষ্ঠানিক অনুজ্ঞা ও ক্রিয়ার নির্দিষ্ট অব্যয়', en: 'Epistemic modals, formal imperatives & prepositional government' },
      explanation: {
        bn: 'আনুষ্ঠানিক Lei অনুজ্ঞায় (congiuntivo) সর্বনাম সর্বদা ক্রিয়ার আগে বসে (Me lo invii, Si accomodi)। ক্রিয়া ও বিশেষণের নির্দিষ্ট অব্যয়: attenersi a, ottemperare a, incorrere in, prescindere da, vertere su।',
        en: 'Formal Lei imperatives always place pronouns before the verb. Memorise fixed verbal prepositions and negative prefix assimilation (in- → il-/ir-).',
      },
      table: [
        { label: 'Imperativo Lei', it: 'Me lo faccia leggere / Non se la prenda', tr: { bn: 'আমাকে পড়তে দিন / মন খারাপ করবেন না', en: 'Let me read it / Don’t take offence' } },
        { label: 'Reggenze B2', it: 'attenersi alle norme / incorrere in sanzioni / vertere su', tr: { bn: 'নিয়ম মানা / জরিমানায় পড়া / আলোকপাত করা', en: 'abide by / incur penalties / focus on' } },
        { label: 'Prefissi neg.', it: 'legittimo → illegittimo / reversibile → irreversibile', tr: { bn: 'বৈধ → অবৈধ / পরিবর্তনীয় → অপরিবর্তনীয়', en: 'lawful → unlawful / reversible → irreversible' } },
      ],
      examples: [
        { id: 'b2u3l3-e1', it: 'Chi dichiara il falso in un’autocertificazione incorre nelle sanzioni penali.', tr: { bn: 'যিনি স্ব-ঘোষণাপত্রে মিথ্যা বলেন তিনি ফৌজদারি শাস্তির মুখে পড়েন।', en: 'Whoever makes a false statement in a self-certification incurs criminal penalties.' } },
      ],
    },
  ],
  dialogue: {
    title: { bn: 'দাপ্তরিক আবেদন যাচাই ও নির্দেশনা', en: 'Inspecting an administrative file' },
    context: { bn: 'প্রশাসনিক কর্মকর্তা দোত্তোরেসসা রসি এবং আবেদনকারী হাসান নথি নিয়ে কথা বলছেন।', en: 'Administrative officer Dr Rossi and applicant Hasan review his dossier.' },
    lines: [
      { speaker: 'Hasan', it: 'Dottoressa, la piattaforma non accetta l’allegato: potrebbe trattarsi di un file troppo pesante?', tr: { bn: 'ম্যাডাম, প্ল্যাটফর্মটি সংযুক্তি নিচ্ছে না: ফাইলটি কি খুব ভারী বলে এমন হচ্ছে?', en: 'Doctor, the portal won’t accept the attachment: could it be that the file is too large?' } },
      { speaker: 'Rossi', it: 'Deve esserci stato un problema di formato. Lo salvi in PDF e me lo invii tramite PEC.', tr: { bn: 'নিশ্চয়ই ফরম্যাটের কোনো সমস্যা হয়েছে। পিডিএফ হিসেবে সেভ করুন এবং আমাকে সার্টিফায়েড ইমেইলে পাঠিয়ে দিন।', en: 'There must have been a format issue. Save it as PDF and send it to me by PEC.' } },
      { speaker: 'Hasan', it: 'Provvedo subito e Le confermo di essermi attenuto a tutte le istruzioni del bando.', tr: { bn: 'আমি এখনই ব্যবস্থা নিচ্ছি এবং নিশ্চিত করছি যে আমি বিজ্ঞপ্তির সব নির্দেশনা মেনে চলেছি।', en: 'I’ll take care of it right away and confirm that I abided by all instructions in the call.' } },
    ],
  },
  quiz: [
    { id: 'q1', prompt: { bn: 'আনুষ্ঠানিক Lei অনুজ্ঞায় সর্বনামের সঠিক অবস্থান:', en: 'Select the formal Lei imperative with pronouns:' }, it: 'Signor Direttore, ___ al più presto appena riceve i dati.', options: ['faccimelo sapere', 'me lo faccia sapere', 'me lo fai sapere', 'lo facciami sapere'], answer: 1, explanation: { bn: 'Lei অনুজ্ঞায় সর্বনাম সর্বদা আগে বসে: me lo faccia sapere।', en: 'Formal Lei places pronouns before the verb.' } },
    { id: 'q2', prompt: { bn: 'vertere ক্রিয়ার সাথে সঠিক প্রিপোজিশন:', en: 'Choose the preposition governed by vertere:' }, it: 'La tesi di dottorato verte ___ tutela della biodiversità.', options: ['della', 'sulla', 'alla', 'dalla'], answer: 1, explanation: { bn: 'vertere su qualcosa → sulla tutela।', en: 'vertere governs preposition su.' } },
    { id: 'q3', prompt: { bn: 'অবস্থাজনিত যৌক্তিক অনুমান (epistemic modal):', en: 'Express logical deduction about a past event:' }, it: 'Le strade sono allagate: stanotte ___ piovuto violentemente.', options: ['deve aver', 'ha dovuto', 'dovrebbe', 'avrebbe'], answer: 0, explanation: { bn: 'প্রমাণ দেখে অতীতের অনুমানে deve + ইনফিনিটিভ পাসাতো।', en: 'Deduction about past uses deve aver + participle.' } },
    { id: 'q4', prompt: { bn: 'reversibile-এর বিপরীতার্থক সঠিক রূপ:', en: 'Select the negated form of reversibile:' }, it: 'L’erosione ha causato un danno ___.', options: ['inreversibile', 'irreversibile', 'sreversibile', 'disreversibile'], answer: 1, explanation: { bn: 'r-এর আগে in- পরিবর্তিত হয়ে ir- হয়।', en: 'in- assimilates to ir- before r.' } },
  ],
  tip: { bn: 'তুমি (tu) বললে সর্বনাম পেছনে (Mandamelo!), আর আপনি (Lei) বললে সর্বনাম সামনে (Me lo mandi!)।', en: 'Informal tu attaches pronouns to the end (Mandamelo!), whereas formal Lei puts them in front (Me lo mandi!).' },
};

export const b2Unit3: Unit = {
  id: 'b2-u3',
  number: 3,
  title: 'Coesione, reggenze e sfumature',
  subtitle: { bn: 'যুক্তির সংহতি, প্রিপোজিশনাল সংযোগ, মডাল অনুমান ও শব্দগঠন', en: 'Cohesion, verbal government, epistemic modals & morphology' },
  lessons: [lesson1, lesson2, lesson3],
};
