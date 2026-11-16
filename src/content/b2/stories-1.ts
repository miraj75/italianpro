import type { StoryItem } from '../academyTypes';
import { buildStory } from '../builders';

export const B2_STORIES_1: StoryItem[] = [
  buildStory({
    id: 'st-b2-01', level: 'B2', titleIt: 'Il ricorso davanti alla commissione',
    title: { bn: 'পর্ষদের সামনে আপিল শুনানি', en: 'The appeal before the board' },
    topic: { bn: 'প্রশাসনিক বিচার ও congiuntivo সামঞ্জস্য', en: 'Administrative appeal & subjunctive sequence' },
    grammarIds: ['concordanza-avanzata'],
    vocabKeys: ['w:B2:la normativa', 'w:B2:il ricorso', 'w:B2:valutare'],
    paragraphs: [
      { it: 'Quando la cooperativa ricevette l’esito negativo del bando regionale, il consulente legale sostenne che occorresse esaminare subito la normativa vigente. Avrebbe preferito che la commissione avesse valutato il ricorso con maggiore imparzialità sin dalla prima seduta.', tr: { bn: 'সমবায় প্রতিষ্ঠানটি যখন আঞ্চলিক বিজ্ঞপ্তির নেতিবাচক ফল পেল, আইনি পরামর্শদাতা বললেন যে প্রচলিত বিধিমালা অবিলম্বে পরীক্ষা করা দরকার। তিনি পছন্দ করতেন যদি পর্ষদ প্রথম অধিবেশন থেকেই আরও নিরপেক্ষতার সাথে আপিলটি মূল্যায়ন করত।', en: 'When the cooperative received the negative outcome of the regional call, the legal advisor argued that the regulations in force had to be examined immediately. He would have preferred that the board had assessed the appeal more impartially from the first session.' } },
      { it: 'Durante l’audizione pubblica, i soci chiesero che il presidente chiarisse i criteri di attribuzione del punteggio. Nessuno dubitava che la documentazione tecnica fosse completa, benché mancassero alcuni timbri digitali.', tr: { bn: 'উন্মুক্ত শুনানিতে সদস্যরা সভাপতিকে নম্বর বণ্টনের মানদণ্ড স্পষ্ট করতে অনুরোধ করেন। কারো সন্দেহ ছিল না যে কারিগরি নথিপত্র পূর্ণাঙ্গ ছিল, যদিও কয়েকটি ডিজিটাল সিলের অভাব ছিল।', en: 'During the public hearing, members asked that the chair clarify the scoring criteria. No one doubted that the technical documentation was complete, although a few digital stamps were missing.' } },
      { it: 'Alla fine vorrei che ogni ente pubblico adottasse procedure più snelle, affinché chi lavora sul territorio non perda mesi preziosi in contestazioni formali.', tr: { bn: 'সবশেষে আমি চাই প্রতিটি সরকারি প্রতিষ্ঠান আরও সহজ প্রক্রিয়া গ্রহণ করুক, যাতে মাঠপর্যায়ে কাজ করা মানুষ আনুষ্ঠানিক বিবাদে মূল্যবান মাস নষ্ট না করে।', en: 'Ultimately I would like every public body to adopt leaner procedures, so that those working on the ground do not lose precious months in formal disputes.' } },
    ],
    wordGlossary: [
      { word: 'normativa', base: 'la normativa', tr: { bn: 'বিধিমালা', en: 'regulations' }, pos: 'noun' },
      { word: 'ricorso', base: 'il ricorso', tr: { bn: 'আপিল', en: 'appeal' }, pos: 'noun' },
      { word: 'valutare', base: 'valutare', tr: { bn: 'মূল্যায়ন করা', en: 'to evaluate' }, pos: 'verb' },
    ],
    grammarBreakdown: [
      { sentenceIt: 'Avrei preferito che la commissione avesse valutato il ricorso.', ruleTitle: { bn: 'কন্ডিশনাল + congiuntivo trapassato', en: 'Past conditional + pluperfect subjunctive' }, explanation: { bn: 'পূর্ববর্তী অপূর্ণ প্রত্যাশায় avesse valutato ব্যবহৃত হয়েছে।', en: 'Prior unfulfilled preference takes avesse valutato.' }, grammarId: 'concordanza-avanzata' },
    ],
    mcq: [
      { id: 'stb2-1-q1', prompt: { bn: 'নথিপত্রে কীসের সামান্য ঘাটতি ছিল?', en: 'What was slightly missing from the documentation?' }, options: ['স্বাক্ষরিত বাজেট', 'কয়েকটি ডিজিটাল সিল', 'আবেদনকারীর নাম', 'ফোন নম্বর'], answer: 1, explanation: { bn: 'সঠিক উত্তর: কয়েকটি ডিজিটাল সিল — পাঠ্যাংশে বলা হয়েছে: «উন্মুক্ত শুনানিতে সদস্যরা সভাপতিকে নম্বর বণ্টনের মানদণ্ড স্পষ্ট করতে অনুরোধ করেন। কারো সন্দেহ ছিল না যে কারিগরি নথিপত্র পূর্ণাঙ্গ ছিল, যদিও কয়েকটি ডিজিটাল সিলের অভাব ছিল।» (mancassero alcuni timbri digitali)।', en: 'A few digital stamps were missing.' } },
    ],
    trueFalse: [
      { id: 'stb2-1-tf1', statementIt: 'Il consulente riteneva che i documenti fossero incompleti nei contenuti tecnici.', statement: { bn: 'পরামর্শদাতা মনে করতেন কারিগরি বিষয়বস্তু অসম্পূর্ণ ছিল।', en: 'The advisor believed the technical contents were incomplete.' }, answer: false, explanation: { bn: 'নথিপত্র কারিগরি দিক থেকে পূর্ণাঙ্গ ছিল।', en: 'Everyone knew the technical documentation was complete.' } },
    ],
    fillBlank: [
      { id: 'stb2-1-fb1', sentence: 'Vorrei che la commissione ___ i criteri con trasparenza.', options: ['chiarisce', 'chiarisse', 'chiarirà', 'abbia chiarito'], answer: 1, explanation: { bn: 'ব্যাকরণ সূত্র: Vorrei che + congiuntivo imperfetto (chiarisse) — Vorrei che এর পরে ইমপারফেক্ট সাবজাংক্টিভ (congiuntivo imperfetto) বসে chiarisse।', en: 'Vorrei che takes imperfect subjunctive chiarisse.' } },
    ],
    shortAnswer: [
      { id: 'stb2-1-sa1', question: { bn: 'শুনানিতে সদস্যরা সভাপতির কাছে কী জানতে চেয়েছিলেন?', en: 'What did members ask the chair to clarify?' }, sampleAnswerIt: 'Chiesero che chiarisse i criteri di attribuzione del punteggio.', keywords: ['criteri', 'punteggio'] },
    ],
    practice: {
      retellPrompt: { bn: 'আপিল শুনানির ঘটনাটি ৩ বাক্যে congiuntivo সহ লিখুন।', en: 'Summarise the appeal hearing in 3 sentences using subjunctive sequence.' },
      completeMissing: { promptIt: 'Avrei preferito che l’ente ___ la norma prima.', hint: { bn: 'পুরাঘটিত সাবজাংক্টিভ রূপ avesse applicato ব্যবহার করুন', en: 'pluperfect subjunctive avesse applicato' }, sampleIt: 'Avrei preferito che l’ente avesse applicato la norma prima.' },
      buildSimilar: { patternIt: 'Vorrei che tutti rispettassero la normativa.', prompt: { bn: 'Vorrei che... দিয়ে একটি প্রস্তাব লিখুন।', en: 'Write a wish starting with Vorrei che...' }, sampleIt: 'Vorrei che la procedura diventasse completamente digitale.' },
      altEndingPrompt: { bn: 'পর্ষদ আপিল মঞ্জুর করলে কী ঘটবে তা লিখুন।', en: 'Write what happens once the board upholds the appeal.' },
    },
  }),

  buildStory({
    id: 'st-b2-02', level: 'B2', titleIt: 'L’impianto fotovoltaico e il rogito',
    title: { bn: 'সৌরবিদ্যুৎ কেন্দ্র ও সম্পত্তি দলিল', en: 'The solar plant and the property deed' },
    topic: { bn: 'স্থাপত্য, অর্থায়ন ও মিশ্র শর্তবাক্য', en: 'Energy investment & mixed conditionals' },
    grammarIds: ['periodo-ipotetico-misto'],
    vocabKeys: ["w:B2:l'impianto fotovoltaico", 'w:B2:il rogito'],
    paragraphs: [
      { it: 'Nel 2020 Giulio acquistò una casa colonica in Toscana e firmò il rogito davanti al notaio con qualche esitazione sui lavori di ristrutturazione. Se allora avesse installato subito l’impianto fotovoltaico sul tetto esposto a sud, oggi spenderebbe meno della metà per il riscaldamento.', tr: { bn: '২০২০ সালে জুলিও তোসকানায় একটি খামারবাড়ি কেনেন এবং সংস্কারের কাজ নিয়ে কিছুটা দ্বিধা নিয়েই নোটারির সামনে চূড়ান্ত দলিলে সই করেন। তখনই দক্ষিণমুখী ছাদে সৌরবিদ্যুৎ ব্যবস্থা বসালে আজ হিটিংয়ে অর্ধেকেরও কম খরচ হতো।', en: 'In 2020 Giulio bought a farmhouse in Tuscany and signed the deed before the notary with some hesitation over renovations. If he had installed the solar photovoltaic system on the south-facing roof back then, today he would spend less than half on heating.' } },
      { it: 'D’altra parte, il tecnico gli fece notare che la coibentazione e la classe energetica influiscono sul valore dell’immobile. Se Giulio fosse stato più deciso nelle trattative iniziali, l’impresa edile avrebbe completato anche l’isolamento acustico.', tr: { bn: 'অন্যদিকে, প্রকৌশলী তাঁকে মনে করিয়ে দেন যে তাপ নিরোধক ও শক্তি শ্রেণি সম্পত্তির মূল্যে প্রভাব ফেলে। প্রাথমিক আলোচনায় জুলিও আরও দৃঢ় থাকলে নির্মাণ প্রতিষ্ঠানটি শব্দ নিরোধক কাজও শেষ করত।', en: 'On the other hand, the technician pointed out that insulation and energy rating affect property value. If Giulio had been more decisive in initial talks, the builder would have completed soundproofing too.' } },
      { it: 'Ora ha finalmente approvato il preventivo: tra pochi mesi la casa raggiungerà la classe energetica superiore e garantirà un’autonomia stabile.', tr: { bn: 'এখন অবশেষে তিনি প্রাক্কলন অনুমোদন করেছেন: কয়েক মাসের মধ্যেই বাড়িটি উচ্চতর শক্তি শ্রেণিতে পৌঁছাবে এবং স্থিতিশীল স্বনির্ভরতা দেবে।', en: 'Now he has finally approved the quote: in a few months the house will reach the top energy class and guarantee steady autonomy.' } },
    ],
    wordGlossary: [
      { word: 'impianto fotovoltaico', base: "l'impianto fotovoltaico", tr: { bn: 'সৌরবিদ্যুৎ কেন্দ্র', en: 'solar photovoltaic system' }, pos: 'noun' },
      { word: 'rogito', base: 'il rogito', tr: { bn: 'সম্পত্তির চূড়ান্ত দলিল', en: 'final property deed' }, pos: 'noun' },
    ],
    grammarBreakdown: [
      { sentenceIt: 'Se avesse installato l’impianto allora, oggi spenderebbe meno della metà.', ruleTitle: { bn: 'মিশ্র শর্তসাপেক্ষ বাক্য', en: 'Mixed conditional' }, explanation: { bn: 'অতীতের অপূর্ণ শর্ত (avesse installato) ও আজকের বর্তমান ফল (spenderebbe)।', en: 'Past condition paired with present result.' }, grammarId: 'periodo-ipotetico-misto' },
    ],
    mcq: [
      { id: 'stb2-2-q1', prompt: { bn: 'আগে সৌর প্যানেল বসালে আজ কী সুবিধা হতো?', en: 'What benefit would Giulio enjoy today if he had installed solar earlier?' }, options: ['বাড়ি বিক্রি হতো', 'হিটিংয়ে অর্ধেকের কম খরচ হতো', 'ট্যাক্স শূন্য হতো', 'রাস্তা প্রশস্ত হতো'], answer: 1, explanation: { bn: 'সঠিক উত্তর: হিটিংয়ে অর্ধেকের কম খরচ হতো — পাঠ্যাংশে বলা হয়েছে: «২০২০ সালে জুলিও তোসকানায় একটি খামারবাড়ি কেনেন এবং সংস্কারের কাজ নিয়ে কিছুটা দ্বিধা নিয়েই নোটারির সামনে চূড়ান্ত দলিলে সই করেন। তখনই দক্ষিণমুখী ছাদে সৌরবিদ্যুৎ ব্যবস্থা বসালে আজ হিটিংয়ে অর্ধেকেরও কম খরচ হতো।» (spenderebbe meno della metà per il riscaldamento)।', en: 'Less than half on heating.' } },
    ],
    trueFalse: [
      { id: 'stb2-2-tf1', statementIt: 'Giulio non ha ancora approvato alcun preventivo per i lavori.', statement: { bn: 'জুলিও এখনো কাজের কোনো প্রাক্কলন অনুমোদন করেননি।', en: 'Giulio has not yet approved any estimate for the works.' }, answer: false, explanation: { bn: 'তিনি এখন প্রাক্কলন অনুমোদন করেছেন (ha approvato il preventivo)।', en: 'He has now approved the quote.' } },
    ],
    fillBlank: [
      { id: 'stb2-2-fb1', sentence: 'Se cinque anni fa avessimo investito nel solare, oggi ___ autonomi.', options: ['saremmo stati', 'saremmo', 'saremo', 'fossimo'], answer: 1, explanation: { bn: 'আজকের বর্তমান ফল = saremmo।', en: 'Present result uses conditional saremmo.' } },
    ],
    shortAnswer: [
      { id: 'stb2-2-sa1', question: { bn: 'চূড়ান্ত দলিল কোথায় সই করা হয়েছিল?', en: 'Where was the final property deed signed?' }, sampleAnswerIt: 'Davanti al notaio.', keywords: ['notaio'] },
    ],
    practice: {
      retellPrompt: { bn: 'জুলিওর সৌরবিদ্যুৎ সিদ্ধান্ত মিশ্র শর্তবাক্যে সংক্ষেপে লিখুন।', en: 'Summarise Giulio’s solar decision using mixed conditionals.' },
      completeMissing: { promptIt: 'Se avessi firmato il rogito ieri, oggi ___ già le chiavi.', hint: { bn: 'avere কন্ডিশনাল: avrei', en: 'present conditional avrei' }, sampleIt: 'Se avessi firmato il rogito ieri, oggi avrei già le chiavi.' },
      buildSimilar: { patternIt: 'Se avessi risparmiato allora, oggi viaggerei di più.', prompt: { bn: 'একটি মিশ্র শর্তবাক্য তৈরি করুন।', en: 'Create a mixed conditional sentence.' }, sampleIt: 'Se avessimo isolato il tetto, oggi la casa sarebbe più calda.' },
      altEndingPrompt: { bn: 'শীতকালে বাড়ির জ্বালানি বিলের পরিবর্তন বর্ণনা করুন।', en: 'Describe how the winter bills change once the panels go live.' },
    },
  }),

  buildStory({
    id: 'st-b2-03', level: 'B2', titleIt: 'L’attacco informatico e l’emendamento',
    title: { bn: 'সাইবার হামলা ও সংসদীয় সংশোধনী', en: 'The cyberattack and the amendment' },
    topic: { bn: 'সাইবার নিরাপত্তা ও স্বাধীন congiuntivo', en: 'Cybersecurity & independent subjunctive' },
    grammarIds: ['congiuntivo-indipendente'],
    vocabKeys: ["w:B2:l'emendamento", "w:B2:l'attacco informatico"],
    paragraphs: [
      { it: 'Quando l’attacco informatico bloccò i server municipali per quarantott’ore, nei corridoi del consiglio comunale si diffuse lo sconcerto. «Se solo avessimo attivato prima i backup separati!» esclamò la responsabile dei sistemi.', tr: { bn: 'সাইবার হামলা যখন আটচল্লিশ ঘণ্টার জন্য পৌরসভার সার্ভার অচল করে দিল, সিটি কাউন্সিলের অলিন্দে বিস্ময় ছড়িয়ে পড়ল। «ইশ, আমরা যদি আগেই আলাদা ব্যাকআপ চালু করতাম!» সিস্টেম প্রধান আক্ষেপ করলেন।', en: 'When the cyberattack halted municipal servers for forty-eight hours, dismay spread through city hall. "If only we had enabled separate backups earlier!" exclaimed the systems chief.' } },
      { it: '«Che abbiano agito dall’estero sfruttando una password obsoleta?» si domandò il sindaco durante la riunione d’emergenza. Magari la commissione di vigilanza avesse approvato l’emendamento sulla sicurezza digitale già nella scorsa legislatura!', tr: { bn: '«তাঁরা কি পুরোনো পাসওয়ার্ড ব্যবহার করে বিদেশ থেকে হামলা চালিয়েছে?» জরুরি সভায় মেয়র প্রশ্ন করলেন। ইশ, নজরদারি কমিটি যদি গত মেয়াদেই ডিজিটাল নিরাপত্তা সংক্রান্ত সংশোধনীটি অনুমোদন করত!', en: '"Could they have acted from abroad exploiting an obsolete password?" the mayor wondered during the emergency meeting. If only the oversight committee had approved the digital security amendment in the previous term!' } },
      { it: 'Costi quel che costi, l’amministrazione decise di rinnovare l’intera infrastruttura entro fine mese.', tr: { bn: 'যত মূল্যই লাগুক না কেন, প্রশাসন মাসের শেষের মধ্যেই পুরো পরিকাঠামো নবায়ন করার সিদ্ধান্ত নিল।', en: 'Whatever the cost, the administration decided to overhaul the entire infrastructure by month’s end.' } },
    ],
    wordGlossary: [
      { word: 'attacco informatico', base: "l'attacco informatico", tr: { bn: 'সাইবার হামলা', en: 'cyberattack' }, pos: 'noun' },
      { word: 'emendamento', base: "l'emendamento", tr: { bn: 'সংশোধনী', en: 'amendment' }, pos: 'noun' },
    ],
    grammarBreakdown: [
      { sentenceIt: 'Se solo avessimo attivato prima i backup separati!', ruleTitle: { bn: 'স্বাধীন ইচ্ছা ও আক্ষেপে congiuntivo', en: 'Optative independent subjunctive' }, explanation: { bn: 'অতীতের আক্ষেপ প্রকাশে Se solo + congiuntivo trapassato বসে।', en: 'Past regret uses Se solo + pluperfect subjunctive.' }, grammarId: 'congiuntivo-indipendente' },
    ],
    mcq: [
      { id: 'stb2-3-q1', prompt: { bn: 'সার্ভার কত ঘণ্টা অচল ছিল?', en: 'How long were the servers blocked?' }, options: ['১২ ঘণ্টা', '২৪ ঘণ্টা', '৪৮ ঘণ্টা', '৭২ ঘণ্টা'], answer: 2, explanation: { bn: 'per quarantott’ore = ৪৮ ঘণ্টা।', en: 'For forty-eight hours.' } },
    ],
    trueFalse: [
      { id: 'stb2-3-tf1', statementIt: 'L’emendamento sulla sicurezza digitale era già stato approvato anni prima.', statement: { bn: 'ডিজিটাল নিরাপত্তা সংশোধনীটি বহু বছর আগেই অনুমোদিত হয়েছিল।', en: 'The digital security amendment had already been passed years earlier.' }, answer: false, explanation: { bn: 'তা অনুমোদন না হওয়ায় আক্ষেপ করা হয়েছে।', en: 'They wished it had been passed earlier.' } },
    ],
    fillBlank: [
      { id: 'stb2-3-fb1', sentence: 'Magari ___ il sistema di sicurezza l’anno scorso!', options: ['aggiornavano', 'avessero aggiornato', 'aggiorneranno', 'aggiornano'], answer: 1, explanation: { bn: 'Magari + congiuntivo trapassato অতীত আক্ষেপে।', en: 'Magari takes pluperfect subjunctive for past regret.' } },
    ],
    shortAnswer: [
      { id: 'stb2-3-sa1', question: { bn: 'মেয়রের সন্দেহ অনুযায়ী হামলাকারীরা কী কাজে লাগিয়েছিল?', en: 'What did the attackers exploit according to the mayor?' }, sampleAnswerIt: 'Una password obsoleta.', keywords: ['password', 'obsoleta'] },
    ],
    practice: {
      retellPrompt: { bn: 'Magari ও Se solo ব্যবহার করে ঘটনার সারসংক্ষেপ লিখুন।', en: 'Summarise the incident using Magari and Se solo.' },
      completeMissing: { promptIt: 'Costi ___ costi, proteggeremo i dati.', hint: { bn: 'যা কিছু অর্থে সম্বন্ধবাচক সর্বনাম quel che বসান', en: 'quel che' }, sampleIt: 'Costi quel che costi, proteggeremo i dati.' },
      buildSimilar: { patternIt: 'Che abbiano già ripristinato la rete?', prompt: { bn: 'Che + congiuntivo দিয়ে একটি সংশয় প্রশ্ন লিখুন।', en: 'Write a dubitative question starting with Che...' }, sampleIt: 'Che abbiano già votato l’emendamento?' },
      altEndingPrompt: { bn: 'নতুন সাইবার নিরাপত্তা প্রশিক্ষণের বিবরণ লিখুন।', en: 'Describe the new cybersecurity training rolled out for staff.' },
    },
  }),

  buildStory({
    id: 'st-b2-04', level: 'B2', titleIt: 'Un team per la robotica avanzata',
    title: { bn: 'উন্নত রোবোটিক্সের জন্য গবেষক দল', en: 'A team for advanced robotics' },
    topic: { bn: 'প্রকৌশল ও সম্বন্ধবাচক বাক্যে congiuntivo', en: 'Engineering & subjunctive in relative clauses' },
    grammarIds: ['congiuntivo-relativo'],
    vocabKeys: ['w:B2:il notaio', 'w:B2:la robotica avanzata', 'w:B2:approfondito'],
    paragraphs: [
      { it: 'Il centro di ricerca di Genova ha appena avviato un nuovo laboratorio dedicato alla robotica avanzata e alla sostenibilità industriale. La direttrice cerca un’ingegnera che sappia coordinare sensori ottici e reti neurali.', tr: { bn: 'জেনোয়ার গবেষণা কেন্দ্রটি সদ্য উন্নত রোবোটিক্স ও শিল্প টেকসইতার জন্য একটি নতুন গবেষণাগার চালু করেছে। পরিচালিকা এমন একজন প্রকৌশলী খুঁজছেন যিনি অপটিক্যাল সেন্সর ও নিউরাল নেটওয়ার্ক সমন্বয় করতে পারেন।', en: 'The Genoa research centre has just launched a new lab dedicated to advanced robotics and industrial sustainability. The director is looking for an engineer who knows how to coordinate optical sensors and neural networks.' } },
      { it: 'Allo stesso tempo, per brevettare il prototipo europeo, lo spin-off ha bisogno di un notaio che conosca le procedure societarie internazionali. È l’indagine più approfondita che il dipartimento abbia condotto nell’ultimo decennio.', tr: { bn: 'একই সাথে, ইউরোপীয় প্রোটোটাইপের পেটেন্ট করতে স্পিন-অফ কোম্পানিটির এমন একজন নোটারি প্রয়োজন যিনি আন্তর্জাতিক কর্পোরেট প্রক্রিয়া জানেন। এটি গত দশকে বিভাগটির পরিচালিত সবচেয়ে গভীর গবেষণা।', en: 'At the same time, to patent the European prototype, the spin-off needs a notary who knows international corporate procedures. It is the most thorough investigation the department has conducted in the last decade.' } },
      { it: 'Chi ha già lavorato sul campo sottolinea che non esiste una soluzione automatica che sostituisca la responsabilità del progettista.', tr: { bn: 'যাঁরা ইতিমধ্যে মাঠে কাজ করেছেন তাঁরা জোর দেন যে এমন কোনো স্বয়ংক্রিয় সমাধান নেই যা নকশাকারের দায়িত্বের বিকল্প হতে পারে।', en: 'Those who have already worked in the field emphasise that there is no automatic solution that replaces the designer’s responsibility.' } },
    ],
    wordGlossary: [
      { word: 'robotica avanzata', base: 'la robotica avanzata', tr: { bn: 'উন্নত রোবোটিক্স', en: 'advanced robotics' }, pos: 'noun' },
      { word: 'approfondito', base: 'approfondito', tr: { bn: 'গভীর ও বিস্তৃত', en: 'in-depth' }, pos: 'adj' },
    ],
    grammarBreakdown: [
      { sentenceIt: 'La direttrice cerca un’ingegnera che sappia coordinare sensori ottici.', ruleTitle: { bn: 'কাঙ্ক্ষিত যোগ্যতায় congiuntivo', en: 'Subjunctive for non-specific requirement' }, explanation: { bn: 'এখনো খুঁজে না পাওয়া কাঙ্ক্ষিত প্রার্থীর গুণ বোঝাতে sappia বসেছে।', en: 'Sought-after hypothetical referent uses subjunctive sappia.' }, grammarId: 'congiuntivo-relativo' },
    ],
    mcq: [
      { id: 'stb2-4-q1', prompt: { bn: 'গবেষণা কেন্দ্রটি কোন শহরে অবস্থিত?', en: 'Where is the research centre located?' }, options: ['মিলান', 'জেনোয়া', 'তুরিন', 'বোলোনিয়া'], answer: 1, explanation: { bn: 'সঠিক উত্তর: জেনোয়া — পাঠ্যাংশে বলা হয়েছে: «জেনোয়ার গবেষণা কেন্দ্রটি সদ্য উন্নত রোবোটিক্স ও শিল্প টেকসইতার জন্য একটি নতুন গবেষণাগার চালু করেছে। পরিচালিকা এমন একজন প্রকৌশলী খুঁজছেন যিনি অপটিক্যাল সেন্সর ও নিউরাল নেটওয়ার্ক সমন্বয় করতে পারেন।» (Il centro di ricerca di Genova)।', en: 'In Genoa.' } },
    ],
    trueFalse: [
      { id: 'stb2-4-tf1', statementIt: 'Lo spin-off ha bisogno di un notaio esperto in diritto societario internazionale.', statement: { bn: 'স্পিন-অফটির আন্তর্জাতিক কর্পোরেট আইনে অভিজ্ঞ একজন নোটারি প্রয়োজন।', en: 'The spin-off needs a notary experienced in international corporate law.' }, answer: true, explanation: { bn: 'বাক্যটি সত্য — গল্পের তথ্যানুযায়ী: «একই সাথে, ইউরোপীয় প্রোটোটাইপের পেটেন্ট করতে স্পিন-অফ কোম্পানিটির এমন একজন নোটারি প্রয়োজন যিনি আন্তর্জাতিক কর্পোরেট প্রক্রিয়া জানেন। এটি গত দশকে বিভাগটির পরিচালিত সবচেয়ে গভীর গবেষণা।» (che conosca le procedure societarie internazionali)।', en: 'True.' } },
    ],
    fillBlank: [
      { id: 'stb2-4-fb1', sentence: 'È il prototipo più preciso che ___ finora.', options: ['abbiamo visto', 'abbia visto', 'abbiamo veduto', 'vediamo'], answer: 0, explanation: { bn: 'বিকল্পগুলোর মধ্যে superlative-এর সাথে plural "abbiamo visto" বা subjunctive রূপ — লক্ষ করুন: che noi abbiamo (cong. = ind. 1ª pl.)।', en: '1st person plural present subjunctive and indicative share abbiamo visto.' } },
    ],
    shortAnswer: [
      { id: 'stb2-4-sa1', question: { bn: 'প্রকৌশলীর কোন দুটি ক্ষেত্রে সমন্বয় দক্ষতা থাকা দরকার?', en: 'Which two systems must the engineer coordinate?' }, sampleAnswerIt: 'Sensori ottici e reti neurali.', keywords: ['sensori', 'reti'] },
    ],
    practice: {
      retellPrompt: { bn: 'নতুন গবেষণাগারের চাহিদা ৩ বাক্যে লিখুন।', en: 'Summarise the new lab’s hiring needs in 3 sentences.' },
      completeMissing: { promptIt: 'Non c’è nessuno che ___ risolvere questo guasto da solo.', hint: { bn: 'sapere সংযোজক: sappia', en: 'subjunctive sappia' }, sampleIt: 'Non c’è nessuno che sappia risolvere questo guasto da solo.' },
      buildSimilar: { patternIt: 'Cerchiamo un collega che conosca la normativa.', prompt: { bn: 'Cerco qualcuno che... দিয়ে বাক্য লিখুন।', en: 'Write a requirement sentence using Cerco qualcuno che...' }, sampleIt: 'Cerchiamo un consulente che parli italiano e bengalese.' },
      altEndingPrompt: { bn: 'প্রোটোটাইপ পেটেন্ট অনুমোদিত হওয়ার দিনের দৃশ্য লিখুন।', en: 'Write the scene when the European patent is granted.' },
    },
  }),

  buildStory({
    id: 'st-b2-05', level: 'B2', titleIt: 'La verifica delle fonti sul bilancio',
    title: { bn: 'বাজেট ও সংবাদ উৎসের সত্যতা যাচাই', en: 'Fact-checking sources on the budget' },
    topic: { bn: 'সাংবাদিকতা ও ছাড়বাচক congiuntivo', en: 'Fact-checking & concessive subjunctive' },
    grammarIds: ['congiuntivo-concessivo'],
    vocabKeys: ['w:B2:autorevole', 'w:B2:la verifica delle fonti', 'w:B2:il disavanzo', 'w:B2:ingente'],
    paragraphs: [
      { it: 'Per quanto sia autorevole il commentatore economico intervistato in televisione, la redazione non pubblica mai una stima senza la verifica delle fonti primarie. Anche quando circolano cifre allarmanti sul disavanzo pubblico, i numeri vanno confrontati con i documenti ufficiali.', tr: { bn: 'টেলিভিশনে সাক্ষাৎকার দেওয়া অর্থনৈতিক বিশ্লেষক যতই প্রভাবশালী হোন না কেন, বার্তাকক্ষ প্রাথমিক উৎস যাচাই না করে কখনো কোনো প্রাক্কলন প্রকাশ করে না। সরকারি ঘাটতি নিয়ে উদ্বেগজনক সংখ্যা ছড়ালেও তা দাপ্তরিক নথির সাথে মিলিয়ে দেখা হয়।', en: 'However authoritative the economic commentator interviewed on TV may be, the newsroom never publishes an estimate without checking primary sources. Even when alarming figures circulate on the public deficit, numbers must be checked against official documents.' } },
      { it: 'Qualunque ipotesi circoli sui mercati, gli analisti seri esigono serie storiche complete. Chiunque diffonda dati falsificati per manipolare gli investitori incorre in gravi responsabilità civili e penali.', tr: { bn: 'বাজারে যে অনুমানই ঘুরপাক খাক না কেন, সিরিয়াস বিশ্লেষকেরা পূর্ণাঙ্গ ঐতিহাসিক তথ্যসারি দাবি করেন। যে কেউ বিনিয়োগকারীদের বিভ্রান্ত করতে ভুয়া তথ্য ছড়াবে সে গুরুতর দেওয়ানি ও ফৌজদারি দায়বদ্ধতার মুখে পড়বে।', en: 'Whatever hypothesis circulates on markets, serious analysts demand complete time series. Whoever spreads falsified data to manipulate investors incurs serious civil and criminal liability.' } },
      { it: 'Per quanto ingenti siano gli investimenti necessari per il giornalismo d’inchiesta, la qualità dell’informazione resta il pilastro della democrazia.', tr: { bn: 'অনুসন্ধানী সাংবাদিকতার জন্য প্রয়োজনীয় বিনিয়োগ যতই বিপুল হোক না কেন, তথ্যের মান গণতন্ত্রের মূল স্তম্ভ হয়েই থাকে।', en: 'However huge the investments needed for investigative journalism may be, quality information remains a pillar of democracy.' } },
    ],
    wordGlossary: [
      { word: 'autorevole', base: 'autorevole', tr: { bn: 'প্রভাবশালী ও নির্ভরযোগ্য', en: 'authoritative' }, pos: 'adj' },
      { word: 'disavanzo', base: 'il disavanzo', tr: { bn: 'বাজেট ঘাটতি', en: 'deficit' }, pos: 'noun' },
      { word: 'ingente', base: 'ingente', tr: { bn: 'বিপুল / বিশাল', en: 'huge / substantial' }, pos: 'adj' },
    ],
    grammarBreakdown: [
      { sentenceIt: 'Per quanto ingenti siano gli investimenti, la qualità resta un pilastro.', ruleTitle: { bn: 'Per quanto + বিশেষণ + congiuntivo', en: 'Per quanto + adjective + subjunctive' }, explanation: { bn: 'Per quanto এবং Qualunque / Chiunque সর্বদা congiuntivo নেয়।', en: 'Concessive markers trigger the subjunctive.' }, grammarId: 'congiuntivo-concessivo' },
    ],
    mcq: [
      { id: 'stb2-5-q1', prompt: { bn: 'বার্তাকক্ষ কোন কাজ ছাড়া কোনো অনুমান ছাপে না?', en: 'What does the newsroom require before publishing any estimate?' }, options: ['বিজ্ঞাপনদাতার অনুমতি', 'প্রাথমিক উৎসের সত্যতা যাচাই', 'ভোট গ্রহণ', 'শেয়ার কেনা'], answer: 1, explanation: { bn: 'সঠিক উত্তর: প্রাথমিক উৎসের সত্যতা যাচাই — পাঠ্যাংশে বলা হয়েছে: «টেলিভিশনে সাক্ষাৎকার দেওয়া অর্থনৈতিক বিশ্লেষক যতই প্রভাবশালী হোন না কেন, বার্তাকক্ষ প্রাথমিক উৎস যাচাই না করে কখনো কোনো প্রাক্কলন প্রকাশ করে না। সরকারি ঘাটতি নিয়ে উদ্বেগজনক সংখ্যা ছড়ালেও তা দাপ্তরিক নথির সাথে মিলিয়ে দেখা হয়।» (la verifica delle fonti primarie)।', en: 'Verification of primary sources.' } },
    ],
    trueFalse: [
      { id: 'stb2-5-tf1', statementIt: 'Chi diffonde dati falsificati per manipolare il mercato non rischia sanzioni.', statement: { bn: 'বাজার প্রভাবিত করতে ভুয়া তথ্য ছড়ালে কোনো শাস্তির ঝুঁকি থাকে না।', en: 'Anyone spreading false data to manipulate the market faces no penalties.' }, answer: false, explanation: { bn: 'gravi responsabilità civili e penali-র সম্মুখীন হতে হয়।', en: 'They incur severe civil and criminal liability.' } },
    ],
    fillBlank: [
      { id: 'stb2-5-fb1', sentence: 'Qualunque spiegazione ___ fornita, serve sempre un riscontro.', options: ['viene', 'venga', 'verrà', 'veniva'], answer: 1, explanation: { bn: 'ব্যাকরণ সূত্র: Qualunque + congiuntivo (venga fornita) — Qualunque এর পরে সাবজাংক্টিভ রূপ বসে venga।', en: 'Qualunque requires subjunctive venga.' } },
    ],
    shortAnswer: [
      { id: 'stb2-5-sa1', question: { bn: 'গবেষক ও বিশ্লেষকেরা সরকারি নথির সাথে কী মিলিয়ে দেখেন?', en: 'What do analysts check against official documents?' }, sampleAnswerIt: 'Le cifre sul disavanzo pubblico.', keywords: ['cifre', 'disavanzo'] },
    ],
    practice: {
      retellPrompt: { bn: 'সংবাদ যাচাইয়ের নীতি ৩ বাক্যে লিখুন।', en: 'Summarise the newsroom fact-checking policy in 3 sentences.' },
      completeMissing: { promptIt: 'Per quanto ___ complessa la verifica, non va omessa.', hint: { bn: 'essere ক্রিয়ার বর্তমান সাবজাংক্টিভ রূপ sia ব্যবহার করুন', en: 'subjunctive sia' }, sampleIt: 'Per quanto sia complessa la verifica, non va omessa.' },
      buildSimilar: { patternIt: 'Chiunque violi la norma paga una multa.', prompt: { bn: 'Chiunque + congiuntivo দিয়ে একটি নিয়ম লিখুন।', en: 'Write a rule starting with Chiunque...' }, sampleIt: 'Chiunque partecipi al bando rispetti le scadenze.' },
      altEndingPrompt: { bn: 'ভুয়া তথ্য খণ্ডন করে পত্রিকায় ছাপা সংশোধনীর অংশ লিখুন।', en: 'Write the correction note published by the newspaper.' },
    },
  }),

  buildStory({
    id: 'st-b2-06', level: 'B2', titleIt: 'La tutela in caso di prodotto difettoso',
    title: { bn: 'ত্রুটিপূর্ণ পণ্যের ক্ষেত্রে ভোক্তা সুরক্ষা', en: 'Consumer protection for a defective product' },
    topic: { bn: 'ভোক্তা অধিকার ও আনুষ্ঠানিক শর্তবাক্য', en: 'Consumer rights & formal conditionals' },
    grammarIds: ['congiuntivo-condizionale-b2'],
    vocabKeys: ['w:B2:qualora', "w:B2:l'inadempimento", 'w:B2:il prodotto difettoso'],
    paragraphs: [
      { it: 'Quando acquistò una pompa di calore per il laboratorio artigianale, Nadia lesse con attenzione il contratto di fornitura. Qualora l’apparecchio risultasse un prodotto difettoso entro ventiquattro mesi, il venditore sarebbe tenuto alla riparazione o alla sostituzione gratuita.', tr: { bn: 'কারুশিল্প কর্মশালার জন্য হিট পাম্প কেনার সময় নাদিয়া সরবরাহ চুক্তিটি মনোযোগ দিয়ে পড়েছিলেন। চব্বিশ মাসের মধ্যে যন্ত্রটি ত্রুটিপূর্ণ পণ্য হিসেবে প্রমাণিত হলে বিক্রেতা মেরামত বা বিনামূল্যে বদলে দিতে বাধ্য থাকবেন।', en: 'When she bought a heat pump for her craft workshop, Nadia read the supply contract carefully. Should the appliance turn out to be a defective product within twenty-four months, the seller would be required to repair or replace it free of charge.' } },
      { it: 'Dopo tre mesi l’impianto mostrò un vizio occulto al compressore. L’associazione dei consumatori le consigliò di inviare una diffida scritta nel caso in cui l’assistenza tecnica non intervenisse entro quindici giorni.', tr: { bn: 'তিন মাস পর যন্ত্রটির কম্প্রেসারে একটি লুকানো ত্রুটি দেখা দিল। ভোক্তা অধিকার সংস্থা তাঁকে পরামর্শ দিল পনেরো দিনের মধ্যে কারিগরি সেবা না এলে লিখিত সতর্কবার্তা পাঠাতে।', en: 'After three months the unit showed a latent defect in the compressor. The consumer association advised her to send a formal notice in the event that technical support did not step in within fifteen days.' } },
      { it: 'Qualora persistesse l’inadempimento del fornitore, Nadia avrebbe potuto chiedere la risoluzione contrattuale e il rimborso integrale.', tr: { bn: 'সরবরাহকারীর চুক্তিভঙ্গ অব্যাহত থাকলে নাদিয়া চুক্তি বাতিল এবং সম্পূর্ণ অর্থ ফেরত দাবি করতে পারতেন।', en: 'Should the supplier’s breach persist, Nadia could have demanded contract termination and a full refund.' } },
    ],
    wordGlossary: [
      { word: 'qualora', base: 'qualora', tr: { bn: 'যদি / যে ক্ষেত্রে', en: 'should / in the event that' }, pos: 'conj' },
      { word: 'inadempimento', base: "l'inadempimento", tr: { bn: 'চুক্তিভঙ্গ', en: 'breach of contract' }, pos: 'noun' },
      { word: 'prodotto difettoso', base: 'il prodotto difettoso', tr: { bn: 'ত্রুটিপূর্ণ পণ্য', en: 'defective product' }, pos: 'noun' },
    ],
    grammarBreakdown: [
      { sentenceIt: 'Qualora l’inadempimento persistesse, chiederebbe la risoluzione.', ruleTitle: { bn: 'আনুষ্ঠানিক শর্তমূলক খণ্ডবাক্য (Qualora / nel caso in cui + congiuntivo)', en: 'Formal conditional clauses' }, explanation: { bn: 'আইনি শর্তে Qualora এবং nel caso in cui সর্বদা congiuntivo নেয়।', en: 'Formal conditionals govern the subjunctive.' }, grammarId: 'congiuntivo-condizionale-b2' },
    ],
    mcq: [
      { id: 'stb2-6-q1', prompt: { bn: 'আইনি ওয়ারেন্টির মেয়াদ কত মাস ছিল?', en: 'How long was the warranty period?' }, options: ['৬ মাস', '১২ মাস', '২৪ মাস', '৩৬ মাস'], answer: 2, explanation: { bn: 'entro ventiquattro mesi = ২৪ মাস।', en: 'Twenty-four months.' } },
    ],
    trueFalse: [
      { id: 'stb2-6-tf1', statementIt: 'Il venditore ha diritto di rifiutare ogni assistenza se il difetto è occulto.', statement: { bn: 'লুকানো ত্রুটি হলে বিক্রেতা সব ধরনের সেবা প্রত্যাখ্যান করতে পারেন।', en: 'The seller can refuse all support if the defect is latent.' }, answer: false, explanation: { bn: 'আইনি ওয়ারেন্টিতে বিক্রেতা মেরামত বা পরিবর্তনে বাধ্য।', en: 'The seller is obligated under statutory warranty.' } },
    ],
    fillBlank: [
      { id: 'stb2-6-fb1', sentence: 'Nel caso in cui il pacco ___ danneggiato, avvisi subito il corriere.', options: ['arriva', 'arrivi', 'arriverà', 'è arrivato'], answer: 1, explanation: { bn: 'ব্যাকরণ সূত্র: Nel caso in cui + congiuntivo (arrivi) — Nel caso in cui এর পরে সাবজাংক্টিভ রূপ বসে arrivi।', en: 'Nel caso in cui requires subjunctive arrivi.' } },
    ],
    shortAnswer: [
      { id: 'stb2-6-sa1', question: { bn: 'ভোক্তা অধিকার সংস্থা নাদিয়াকে কী পাঠানোর পরামর্শ দিয়েছে?', en: 'What did the consumer association advise Nadia to send?' }, sampleAnswerIt: 'Una diffida scritta.', keywords: ['diffida', 'scritta'] },
    ],
    practice: {
      retellPrompt: { bn: 'Qualora ও nel caso in cui দিয়ে ভোক্তা অধিকারের নিয়মটি লিখুন।', en: 'Summarise the consumer rule using Qualora and nel caso in cui.' },
      completeMissing: { promptIt: 'Accetteremo il preventivo a condizione che ___ i tempi.', hint: { bn: 'কর্মবাচ্যমূলক সাবজাংক্টিভ রূপ si rispettino ব্যবহার করুন', en: 'subjunctive si rispettino' }, sampleIt: 'Accetteremo il preventivo a condizione che si rispettino i tempi.' },
      buildSimilar: { patternIt: 'Qualora sorga un problema, contattate l’assistenza.', prompt: { bn: 'Qualora... দিয়ে একটি দাপ্তরিক নির্দেশনা লিখুন।', en: 'Write a formal instruction beginning with Qualora...' }, sampleIt: 'Qualora il prodotto presenti difetti, richieda la sostituzione gratuita.' },
      altEndingPrompt: { bn: 'বিক্রেতা নতুন যন্ত্র পাঠালে নাদিয়ার প্রতিক্রিয়া লিখুন।', en: 'Describe the resolution once the seller replaces the unit.' },
    },
  }),

  buildStory({
    id: 'st-b2-07', level: 'B2', titleIt: 'La nascita della Costituzione nel 1948',
    title: { bn: '১৯৪৮ সালের সংবিধানের জন্ম', en: 'The birth of the 1948 Constitution' },
    topic: { bn: 'ইতালির ইতিহাস ও অনিয়মিত passato remoto', en: 'Italian history & strong passato remoto' },
    grammarIds: ['passato-remoto-irregolari'],
    vocabKeys: ["w:B2:l'Assemblea Costituente", 'w:B2:la repubblica parlamentare', 'w:B2:abrogare'],
    paragraphs: [
      { it: 'Il 2 giugno 1946 gli italiani si recarono alle urne a suffragio universale e scelsero la repubblica parlamentare. Subito dopo, l’Assemblea Costituente si riunì a Montecitorio e pose le basi giuridiche della nuova Italia democratica.', tr: { bn: '১৯৪৬ সালের ২ জুন ইতালীয়রা সার্বজনীন ভোটাধিকারের মাধ্যমে ভোটকেন্দ্রে যান এবং সংসদীয় প্রজাতন্ত্র বেছে নেন। এর পরপরই গণপরিষদ মন্তেচিতোরিওতে সমবেত হয় এবং নতুন গণতান্ত্রিক ইতালির আইনি ভিত্তি স্থাপন করে।', en: 'On 2 June 1946 Italians went to the polls by universal suffrage and chose the parliamentary republic. Immediately afterwards, the Constituent Assembly met at Montecitorio and laid the legal foundations of the new democratic Italy.' } },
      { it: 'Nonostante le profonde differenze politiche tra i partiti, i padri e le madri costituenti tennero fede all’impegno comune di garantire i diritti fondamentali. Essi vollero scrivere un testo chiaro che resistesse nel tempo e che abrogasse le leggi autoritarie del passato.', tr: { bn: 'দলগুলোর মধ্যে গভীর রাজনৈতিক মতপার্থক্য থাকা সত্ত্বেও সংবিধান প্রণেতারা মৌলিক অধিকার নিশ্চিত করার অভিন্ন অঙ্গীকারে অটল ছিলেন। তাঁরা এমন একটি স্পষ্ট পাঠ্য লিখতে চেয়েছিলেন যা সময়ের পরীক্ষায় টিকে থাকবে এবং অতীতের স্বৈরাচারী আইন বাতিল করবে।', en: 'Despite deep political differences among parties, the framers kept faith with the shared commitment to guarantee fundamental rights. They wanted to write a clear text that would endure over time and repeal past authoritarian laws.' } },
      { it: 'Il documento finale entrò in vigore il primo gennaio 1948 e condusse il Paese verso una stagione di ricostruzione civile ed economica.', tr: { bn: 'চূড়ান্ত নথিটি ১৯৪৮ সালের ১ জানুয়ারি কার্যকর হয় এবং দেশকে নাগরিক ও অর্থনৈতিক পুনর্গঠনের যুগে পরিচালিত করে।', en: 'The final document came into force on 1 January 1948 and led the country into a season of civic and economic reconstruction.' } },
    ],
    wordGlossary: [
      { word: 'Assemblea Costituente', base: "l'Assemblea Costituente", tr: { bn: 'গণপরিষদ', en: 'Constituent Assembly' }, pos: 'noun' },
      { word: 'repubblica parlamentare', base: 'la repubblica parlamentare', tr: { bn: 'সংসদীয় প্রজাতন্ত্র', en: 'parliamentary republic' }, pos: 'noun' },
      { word: 'abrogare', base: 'abrogare', tr: { bn: 'বাতিল করা (আইন)', en: 'to repeal' }, pos: 'verb' },
    ],
    grammarBreakdown: [
      { sentenceIt: 'Gli italiani scelsero la repubblica e l’Assemblea pose le basi.', ruleTitle: { bn: 'অনিয়মিত passato remoto', en: 'Irregular passato remoto stems' }, explanation: { bn: 'সঠিক রূপান্তর: «scegliere» থেকে পরিবর্তিত হয়ে «scelsero, porre» ব্যবহৃত হয়।', en: 'Key strong roots in historical narrative.' }, grammarId: 'passato-remoto-irregolari' },
    ],
    mcq: [
      { id: 'stb2-7-q1', prompt: { bn: 'ইতালির সংবিধান কবে কার্যকর হয়েছিল?', en: 'When did the Italian Constitution come into force?' }, options: ['২ জুন ১৯৪৬', '১ জানুয়ারি ১৯৪৮', '২৫ এপ্রিল ১৯৪৫', '১০ মে ১৯৫০'], answer: 1, explanation: { bn: 'সঠিক উত্তর: ১ জানুয়ারি ১৯৪৮ — পাঠ্যাংশে বলা হয়েছে: «চূড়ান্ত নথিটি ১৯৪৮ সালের ১ জানুয়ারি কার্যকর হয় এবং দেশকে নাগরিক ও অর্থনৈতিক পুনর্গঠনের যুগে পরিচালিত করে।» (il primo gennaio 1948)।', en: '1 January 1948.' } },
    ],
    trueFalse: [
      { id: 'stb2-7-tf1', statementIt: 'Nel 1946 votarono soltanto i cittadini uomini.', statement: { bn: '১৯৪৬ সালে কেবল পুরুষ নাগরিকেরা ভোট দিয়েছিলেন।', en: 'In 1946 only male citizens voted.' }, answer: false, explanation: { bn: 'a suffragio universale = নারী-পুরুষ সবার সার্বজনীন ভোটাধিকার।', en: 'Universal suffrage included both women and men.' } },
    ],
    fillBlank: [
      { id: 'stb2-7-fb1', sentence: 'I costituenti (tenere) ___ un lungo dibattito prima del voto.', options: ['tenettero', 'tennero', 'tengono', 'tenevano'], answer: 1, explanation: { bn: 'সঠিক রূপান্তর: «tenere» থেকে পরিবর্তিত হয়ে «tennero» ব্যবহৃত হয়।', en: 'Irregular 3rd plural passato remoto is tennero.' } },
    ],
    shortAnswer: [
      { id: 'stb2-7-sa1', question: { bn: 'সংবিধান প্রণেতারা কোন ধরনের আইন বাতিল করতে চেয়েছিলেন?', en: 'What kind of laws did the framers wish to repeal?' }, sampleAnswerIt: 'Le leggi autoritarie del passato.', keywords: ['leggi', 'autoritarie'] },
    ],
    practice: {
      retellPrompt: { bn: '১৯৪৬–৪৮ সালের ঐতিহাসিক ঘটনাটি passato remoto-তে ৩ বাক্যে লিখুন।', en: 'Summarise the 1946–48 constitutional birth in passato remoto.' },
      completeMissing: { promptIt: 'Il popolo (scegliere) ___ la forma repubblicana.', hint: { bn: 'scegliere ক্রিয়ার ঐতিহাসিক অতীত (passato remoto) রূপ scelse বসান', en: 'passato remoto scelse' }, sampleIt: 'Il popolo scelse la forma repubblicana.' },
      buildSimilar: { patternIt: 'L’autore scrisse il testo e lo diffuse.', prompt: { bn: 'অনিয়মিত passato remoto দিয়ে দুটি ঐতিহাসিক ক্রিয়া লিখুন।', en: 'Write an historical sentence with irregular passato remoto.' }, sampleIt: 'Lo storico raccolse le fonti e pubblicò la monografia.' },
      altEndingPrompt: { bn: 'সংবিধানের প্রথম প্রজাতন্ত্র দিবসের উদযাপন কল্পনা করে লিখুন।', en: 'Describe the celebrations on the first Republic Day.' },
    },
  }),

  buildStory({
    id: 'st-b2-08', level: 'B2', titleIt: 'La scoperta nello scavo di Pompei',
    title: { bn: 'পম্পেই খননকাজে নতুন আবিষ্কার', en: 'Discovery at the Pompeii excavation' },
    topic: { bn: 'প্রত্নতত্ত্ব ও trapassato remoto', en: 'Archaeology & trapassato remoto' },
    grammarIds: ['trapassato-remoto'],
    vocabKeys: ['w:B2:promulgare', 'w:B2:il reperto archeologico', 'w:B2:la monografia'],
    paragraphs: [
      { it: 'L’estate scorsa, durante una campagna di scavo vicino all’antica cinta muraria, l’équipe individuò un ambiente intatto. Non appena i tecnici ebbero rimosso lo strato di cenere compatta, emerse un reperto archeologico di straordinaria fattura.', tr: { bn: 'গত গ্রীষ্মে প্রাচীন শহরের দেয়ালের কাছে খনন অভিযানের সময় গবেষক দলটি একটি অক্ষত কক্ষ শনাক্ত করল। কারিগরি দল জমাট ছাইয়ের স্তর সরানোর সাথে সাথেই অসাধারণ কারুকার্যময় একটি প্রত্নতাত্ত্বিক নিদর্শন বেরিয়ে এল।', en: 'Last summer, during an excavation campaign near the ancient city walls, the team identified an intact room. As soon as technicians had removed the layer of compacted ash, an archaeological artefact of extraordinary craftsmanship emerged.' } },
      { it: 'Dopo che i restauratori ebbero catalogato e fotografato ogni frammento epigrafico, la direttrice convocò la stampa per illustrare la scoperta. Gli studiosi pubblicarono poi una monografia dettagliata sugli usi domestici dell’epoca.', tr: { bn: 'সংস্কারকেরা প্রতিটি শিলালিপির টুকরো তালিকাভুক্ত ও আলোকচিত্র ধারণ করার পর পরিচালিকা আবিষ্কারটি তুলে ধরতে সংবাদমাধ্যমকে ডাকলেন। পরে গবেষকেরা সে যুগের গৃহস্থালি জীবন নিয়ে একটি বিস্তারিত মনোগ্রাফ প্রকাশ করলেন।', en: 'After restorers had catalogued and photographed every epigraphic fragment, the director called the press to present the find. Scholars then published a detailed monograph on domestic life of the era.' } },
      { it: 'Inoltre il ministero decise di promulgare un nuovo piano di tutela per aprire l’area al pubblico in piena sicurezza.', tr: { bn: 'এছাড়াও মন্ত্রণালয় পুরো নিরাপত্তাসহ এলাকাটি দর্শকদের জন্য উন্মুক্ত করতে একটি নতুন সুরক্ষা পরিকল্পনা জারি করার সিদ্ধান্ত নিল।', en: 'Furthermore, the ministry decided to enact a new protection plan to open the area to the public safely.' } },
    ],
    wordGlossary: [
      { word: 'reperto archeologico', base: 'il reperto archeologico', tr: { bn: 'প্রত্নতাত্ত্বিক নিদর্শন', en: 'archaeological artefact' }, pos: 'noun' },
      { word: 'monografia', base: 'la monografia', tr: { bn: 'গবেষণামূলক মনোগ্রাফ', en: 'monograph' }, pos: 'noun' },
    ],
    grammarBreakdown: [
      { sentenceIt: 'Non appena ebbero rimosso la cenere, emerse un reperto.', ruleTitle: { bn: 'সাহিত্যিক অতীতে পূর্বাপর ঘটনা (trapassato remoto + passato remoto)', en: 'Temporal priority in literary past' }, explanation: { bn: 'passato remoto (emerse)-এর ঠিক পূর্বের সমাপ্ত কাজে Non appena + ebbero rimosso বসেছে।', en: 'Immediate priority before a passato remoto main verb uses trapassato remoto.' }, grammarId: 'trapassato-remoto' },
    ],
    mcq: [
      { id: 'stb2-8-q1', prompt: { bn: 'খননকারীরা প্রথমে কী সরানোর পর নিদর্শনটি দেখতে পান?', en: 'What did technicians remove before the artefact emerged?' }, options: ['পাথরের দরজা', 'জমাট ছাইয়ের স্তর', 'কাঠের ছাদ', 'বালির বাঁধ'], answer: 1, explanation: { bn: 'সঠিক উত্তর: জমাট ছাইয়ের স্তর — পাঠ্যাংশে বলা হয়েছে: «গত গ্রীষ্মে প্রাচীন শহরের দেয়ালের কাছে খনন অভিযানের সময় গবেষক দলটি একটি অক্ষত কক্ষ শনাক্ত করল। কারিগরি দল জমাট ছাইয়ের স্তর সরানোর সাথে সাথেই অসাধারণ কারুকার্যময় একটি প্রত্নতাত্ত্বিক নিদর্শন বেরিয়ে এল।» (lo strato di cenere compatta)।', en: 'The layer of compacted ash.' } },
    ],
    trueFalse: [
      { id: 'stb2-8-tf1', statementIt: 'Gli studiosi pubblicarono una monografia subito dopo la catalogazione.', statement: { bn: 'তালিকাভুক্ত করার পর গবেষকেরা একটি মনোগ্রাফ প্রকাশ করেছিলেন।', en: 'Scholars published a monograph following cataloguing.' }, answer: true, explanation: { bn: 'বাক্যটি সত্য — গল্পের তথ্যানুযায়ী: «সংস্কারকেরা প্রতিটি শিলালিপির টুকরো তালিকাভুক্ত ও আলোকচিত্র ধারণ করার পর পরিচালিকা আবিষ্কারটি তুলে ধরতে সংবাদমাধ্যমকে ডাকলেন। পরে গবেষকেরা সে যুগের গৃহস্থালি জীবন নিয়ে একটি বিস্তারিত মনোগ্রাফ প্রকাশ করলেন।» (pubblicarono poi una monografia dettagliata)।', en: 'True.' } },
    ],
    fillBlank: [
      { id: 'stb2-8-fb1', sentence: 'Appena i dati ___ verificati, il museo aprì la sala.', options: ['furono stati', 'furono', 'ebbero', 'saranno'], answer: 0, explanation: { bn: 'essere-এর কর্মবাচ্য trapassato remoto: furono stati verificati।', en: 'Passive trapassato remoto uses furono stati + participle.' } },
    ],
    shortAnswer: [
      { id: 'stb2-8-sa1', question: { bn: 'মন্ত্রণালয় এলাকার সুরক্ষায় কী সিদ্ধান্ত নিয়েছিল?', en: 'What did the ministry decide for the site?' }, sampleAnswerIt: 'Di promulgare un nuovo piano di tutela.', keywords: ['piano', 'tutela'] },
    ],
    practice: {
      retellPrompt: { bn: 'Non appena + trapassato remoto দিয়ে পম্পেই আবিষ্কারটি লিখুন।', en: 'Summarise the Pompeii discovery using Non appena + trapassato remoto.' },
      completeMissing: { promptIt: 'Dopo che ___ esaminato il reperto, stesero il rapporto.', hint: { bn: 'avere ক্রিয়ার পুরাঘটিত ঐতিহাসিক অতীত রূপ ebbero বসান', en: 'ebbero' }, sampleIt: 'Dopo che ebbero esaminato il reperto, stesero il rapporto.' },
      buildSimilar: { patternIt: 'Appena fu giunto in aula, iniziò la lezione.', prompt: { bn: 'Appena... দিয়ে একটি সাহিত্যিক অতীত বাক্য লিখুন।', en: 'Write a literary sentence with Appena + trapassato remoto.' }, sampleIt: 'Appena ebbero completato lo scavo, presentarono i risultati.' },
      altEndingPrompt: { bn: 'নতুন প্রদর্শনী কক্ষ উদ্বোধনের বিবরণ লিখুন।', en: 'Describe the opening of the new museum room.' },
    },
  }),

  buildStory({
    id: 'st-b2-09', level: 'B2', titleIt: 'Borse di dottorato e risorse esigue',
    title: { bn: 'পিএইচডি বৃত্তি ও সীমিত অর্থায়ন বিতর্ক', en: 'PhD scholarships and scarce resources' },
    topic: { bn: 'উচ্চশিক্ষা ও futuro epistemico-concessivo', en: 'Higher education & epistemic/concessive future' },
    grammarIds: ['futuro-epistemico-b2'],
    vocabKeys: ['w:B2:il dottorato di ricerca', 'w:B2:esiguo'],
    paragraphs: [
      { it: 'Nel consiglio accademico di primavera si discuteva l’attivazione di tre nuovi corsi di dottorato di ricerca dedicati alla transizione verde. Il rettore elogiava l’iniziativa, ma alcuni presidi ricordavano i vincoli di bilancio.', tr: { bn: 'বসন্তের একাডেমিক কাউন্সিলে সবুজ রূপান্তর বিষয়ক তিনটি নতুন পিএইচডি প্রোগ্রাম চালু করা নিয়ে আলোচনা হচ্ছিল। উপাচার্য উদ্যোগটির প্রশংসা করলেও কয়েকজন ডিন বাজেটের সীমাবদ্ধতা মনে করিয়ে দেন।', en: 'At the spring academic council, launching three new PhD programmes in green transition was under debate. The rector praised the initiative, yet several deans recalled budget constraints.' } },
      { it: '«Sarà pure un programma avanguardistico sul piano scientifico — intervenne il direttore amministrativo — tuttavia i fondi regionali stanziati quest’anno sono davvero esigui». Avranno già lavorato al progetto per mesi, ma senza cofinanziamenti le borse non basteranno.', tr: { bn: '«বৈজ্ঞানিক দিক থেকে এটি হয়তো অত্যাধুনিক একটি কর্মসূচি — প্রশাসনিক পরিচালক হস্তক্ষেপ করলেন — তবে এ বছর বরাদ্দকৃত আঞ্চলিক তহবিল সত্যিই অতি সামান্য»। তাঁরা হয়তো মাসের পর মাস প্রকল্পটিতে কাজ করেছেন, কিন্তু যৌথ অর্থায়ন ছাড়া বৃত্তিগুলো পর্যাপ্ত হবে না।', en: '"It may well be a cutting-edge programme scientifically," intervened the administrative director, "yet the regional funds allocated this year are truly scant." They have probably worked on the project for months, yet without co-funding the grants will not suffice.' } },
      { it: 'Alla fine gli atenei trovarono un accordo: un consorzio di imprese sostenibili avrebbe integrato le borse mancanti.', tr: { bn: 'শেষ পর্যন্ত বিশ্ববিদ্যালয়গুলো একটি সমঝোতায় পৌঁছাল: টেকসই শিল্পপ্রতিষ্ঠানগুলোর একটি কনসোর্টিয়াম ঘাটতি থাকা বৃত্তিগুলোর অর্থায়ন পূরণ করবে।', en: 'Eventually the universities reached a deal: a consortium of sustainable firms would top up the missing scholarships.' } },
    ],
    wordGlossary: [
      { word: 'dottorato di ricerca', base: 'il dottorato di ricerca', tr: { bn: 'পিএইচডি গবেষণা', en: 'doctoral degree / PhD' }, pos: 'noun' },
      { word: 'esiguo', base: 'esiguo', tr: { bn: 'অতি সামান্য', en: 'scant / meagre' }, pos: 'adj' },
    ],
    grammarBreakdown: [
      { sentenceIt: 'Sarà pure un programma avanguardistico, tuttavia i fondi sono esigui.', ruleTitle: { bn: 'ছাড়বাচক ভবিষ্যৎ (Futuro concessivo)', en: 'Concessive future' }, explanation: { bn: 'প্রতিপক্ষের কথার সত্যতা আংশিক মেনে নিয়ে কিন্তু/তবে দিয়ে যুক্তি খণ্ডন করতে Sarà pure... ব্যবহৃত হয়।', en: 'Sarà pure… concedes a point before introducing a counter-point.' }, grammarId: 'futuro-epistemico-b2' },
    ],
    mcq: [
      { id: 'stb2-9-q1', prompt: { bn: 'শেষ পর্যন্ত বৃত্তির ঘাটতি কারা পূরণ করতে রাজি হয়?', en: 'Who ended up stepping in to fund the extra scholarships?' }, options: ['পৌর গ্রন্থাগার', 'টেকসই শিল্পপ্রতিষ্ঠানের কনসোর্টিয়াম', 'বিদেশি পর্যটকেরা', 'ব্যাংক কর্মচারীরা'], answer: 1, explanation: { bn: 'সঠিক উত্তর: টেকসই শিল্পপ্রতিষ্ঠানের কনসোর্টিয়াম — পাঠ্যাংশে বলা হয়েছে: «শেষ পর্যন্ত বিশ্ববিদ্যালয়গুলো একটি সমঝোতায় পৌঁছাল: টেকসই শিল্পপ্রতিষ্ঠানগুলোর একটি কনসোর্টিয়াম ঘাটতি থাকা বৃত্তিগুলোর অর্থায়ন পূরণ করবে।» (un consorzio di imprese sostenibili)।', en: 'A consortium of sustainable companies.' } },
    ],
    trueFalse: [
      { id: 'stb2-9-tf1', statementIt: 'I fondi regionali disponibili erano più che abbondanti.', statement: { bn: 'আঞ্চলিক তহবিল প্রয়োজনের চেয়ে অনেক বেশি ছিল।', en: 'Available regional funds were more than abundant.' }, answer: false, explanation: { bn: 'i fondi sono davvero esigui = তহবিল অতি সামান্য ছিল।', en: 'The funds were described as esigui (scant).' } },
    ],
    fillBlank: [
      { id: 'stb2-9-fb1', sentence: '___ anche vero che costa molto, però garantisce qualità.', options: ['Sia', 'Sarà', 'Fosse', 'Sarebbe stato'], answer: 1, explanation: { bn: 'Sarà anche vero che... ছাড়া-সাপেক্ষ অনুমানের আদর্শ রূপ।', en: 'Concessive future uses Sarà anche vero che…' } },
    ],
    shortAnswer: [
      { id: 'stb2-9-sa1', question: { bn: 'নতুন পিএইচডি প্রোগ্রামগুলো কোন বিষয়ের ওপর ভিত্তি করে ছিল?', en: 'What theme were the new PhD courses dedicated to?' }, sampleAnswerIt: 'Alla transizione verde.', keywords: ['transizione', 'verde'] },
    ],
    practice: {
      retellPrompt: { bn: 'Sarà pure..., ma... ব্যবহার করে একাডেমিক কাউন্সিলের বিতর্কটি লিখুন।', en: 'Summarise the council debate using Sarà pure…, ma…' },
      completeMissing: { promptIt: '___ già consegnato la domanda, ma manca l’allegato.', hint: { bn: 'অনুমান প্রকাশে পুরাঘটিত ভবিষ্যৎ রূপ avranno ব্যবহার করুন', en: 'future perfect of assumption: avranno' }, sampleIt: 'Avranno già consegnato la domanda, ma manca l’allegato.' },
      buildSimilar: { patternIt: 'Sarà pure elegante, ma non è funzionale.', prompt: { bn: 'বিতর্কে ব্যবহৃত একটি ছাড়বাচক ভবিষ্যৎ বাক্য লিখুন।', en: 'Write a concessive future rebuttal.' }, sampleIt: 'Sarà anche una soluzione rapida, però non risolve la causa principale.' },
      altEndingPrompt: { bn: 'প্রথম ব্যাচের গবেষকদের কাজের ফলাফল বর্ণনা করুন।', en: 'Describe the achievements of the first PhD cohort.' },
    },
  }),

  buildStory({
    id: 'st-b2-10', level: 'B2', titleIt: 'Indiscrezioni sulla fusione aziendale',
    title: { bn: 'কর্পোরেট একীভূতকরণ নিয়ে তদন্তাধীন সংবাদ', en: 'Reports on the corporate merger' },
    topic: { bn: 'সংবাদ ও সাংবাদিকতার কন্ডিশনাল', en: 'Corporate news & journalistic conditional' },
    grammarIds: ['condizionale-giornalistico'],
    vocabKeys: ['w:B2:la procura', 'w:B2:la fusione aziendale', 'w:B2:imminente'],
    paragraphs: [
      { it: 'Stamattina i quotidiani finanziari hanno dedicato la prima pagina a una possibile fusione aziendale tra due grandi gruppi logistici del Nord. Secondo fonti vicine ai consigli d’amministrazione, l’annuncio ufficiale sarebbe imminente.', tr: { bn: 'আজ সকালে আর্থিক দৈনিকগুলো উত্তরাঞ্চলের দুটি বড় লজিস্টিকস গ্রুপের সম্ভাব্য একীভূতকরণকে প্রথম পাতায় জায়গা দিয়েছে। পরিচালনা পর্ষদের ঘনিষ্ঠ সূত্র অনুযায়ী, আনুষ্ঠানিক ঘোষণাটি নাকি আসন্ন।', en: 'This morning financial dailies devoted their front page to a possible corporate merger between two large logistics groups in the North. According to sources close to the boards, the official announcement is reportedly imminent.' } },
      { it: 'Tuttavia la procura avrebbe aperto un fascicolo conoscitivo per verificare il rispetto delle norme sulla concorrenza. Alcuni fornitori avrebbero già segnalato possibili clausole sfavorevoli nei contratti preliminari.', tr: { bn: 'তবে প্রতিযোগিতা বিধিমালা মানা হয়েছে কি না তা যাচাই করতে কৌঁসুলির কার্যালয় নাকি একটি প্রাথমিক নথি খুলেছে। কিছু সরবরাহকারী নাকি প্রাথমিক চুক্তিতে অন্যায্য ধারার কথা ইতিমধ্যে জানিয়েছেন।', en: 'However, the prosecutor’s office has reportedly opened a fact-finding file to verify compliance with competition rules. Several suppliers have allegedly already flagged potentially unfavourable clauses in preliminary drafts.' } },
      { it: 'Fino alla pubblicazione del comunicato congiunto, i giornalisti mantengono la massima cautela: finché i fatti non sono confermati, ogni ipotesi resta al condizionale.', tr: { bn: 'যৌথ বিবৃতি প্রকাশ না হওয়া পর্যন্ত সাংবাদিকেরা সর্বোচ্চ সতর্কতা বজায় রাখছেন: তথ্য প্রমাণিত না হওয়া পর্যন্ত প্রতিটি অনুমান কন্ডিশনাল কালে থাকে।', en: 'Until the joint press release is published, journalists maintain maximum caution: until facts are confirmed, every claim remains in the conditional.' } },
    ],
    wordGlossary: [
      { word: 'procura', base: 'la procura', tr: { bn: 'কৌঁসুলির কার্যালয়', en: 'prosecutor’s office' }, pos: 'noun' },
      { word: 'fusione aziendale', base: 'la fusione aziendale', tr: { bn: 'কোম্পানি একীভূতকরণ', en: 'corporate merger' }, pos: 'noun' },
      { word: 'imminente', base: 'imminente', tr: { bn: 'আসন্ন', en: 'imminent' }, pos: 'adj' },
    ],
    grammarBreakdown: [
      { sentenceIt: 'La procura avrebbe aperto un fascicolo; l’annuncio sarebbe imminente.', ruleTitle: { bn: 'সাংবাদিকতার কন্ডিশনাল', en: 'Conditional of dissociation' }, explanation: { bn: 'অসমর্থিত বা বিচারাধীন তথ্য থেকে দূরত্ব বজায় রাখতে sarebbe এবং avrebbe + participio বসে।', en: 'Reports unverified allegations without asserting certainty.' }, grammarId: 'condizionale-giornalistico' },
    ],
    mcq: [
      { id: 'stb2-10-q1', prompt: { bn: 'প্রতিবেদন অনুযায়ী কোন দুটি প্রতিষ্ঠান একীভূত হতে যাচ্ছে?', en: 'What kind of companies are reportedly merging?' }, options: ['দুটি ব্যাংক', 'দুটি বড় লজিস্টিকস গ্রুপ', 'দুটি হাসপাতাল', 'দুটি বিশ্ববিদ্যালয়'], answer: 1, explanation: { bn: 'সঠিক উত্তর: দুটি বড় লজিস্টিকস গ্রুপ — পাঠ্যাংশে বলা হয়েছে: «আজ সকালে আর্থিক দৈনিকগুলো উত্তরাঞ্চলের দুটি বড় লজিস্টিকস গ্রুপের সম্ভাব্য একীভূতকরণকে প্রথম পাতায় জায়গা দিয়েছে। পরিচালনা পর্ষদের ঘনিষ্ঠ সূত্র অনুযায়ী, আনুষ্ঠানিক ঘোষণাটি নাকি আসন্ন।» (due grandi gruppi logistici del Nord)।', en: 'Two large logistics groups.' } },
    ],
    trueFalse: [
      { id: 'stb2-10-tf1', statementIt: 'I giornalisti usano l’indicativo perché il comunicato ufficiale è già uscito.', statement: { bn: 'আনুষ্ঠানিক বিবৃতি ইতিমধ্যে বেরোনোয় সাংবাদিকেরা সাধারণ বর্তমান ব্যবহার করছেন।', en: 'Journalists use the indicative because the official statement is out.' }, answer: false, explanation: { bn: 'বিবৃতি এখনো না আসায় কন্ডিশনাল ব্যবহার হচ্ছে।', en: 'No joint release has been issued yet, so conditional is used.' } },
    ],
    fillBlank: [
      { id: 'stb2-10-fb1', sentence: 'Secondo i testimoni, l’accordo ___ stato firmato nella notte.', options: ['è', 'sarebbe', 'fu', 'sia'], answer: 1, explanation: { bn: 'অসমর্থিত অতীত সংবাদে sarebbe stato firmato।', en: 'Unconfirmed past news takes sarebbe stato.' } },
    ],
    shortAnswer: [
      { id: 'stb2-10-sa1', question: { bn: 'সংবাদমাধ্যম কেন সর্বোচ্চ সতর্কতা বজায় রাখছে?', en: 'Why are journalists maintaining maximum caution?' }, sampleAnswerIt: 'Finché il comunicato congiunto non viene pubblicato e i fatti confermati.', keywords: ['comunicato', 'confermati'] },
    ],
    practice: {
      retellPrompt: { bn: 'condizionale di dissociazione ব্যবহার করে একটি ছোট সংবাদ অনুচ্ছেদ লিখুন।', en: 'Write a short news brief using the journalistic conditional.' },
      completeMissing: { promptIt: 'L’amministratore ___ già presentato le dimissioni.', hint: { bn: 'প্রমাণহীন সংবাদের ক্ষেত্রে কন্ডিশনাল সহায়ক ক্রিয়া avrebbe বসান', en: 'avrebbe' }, sampleIt: 'L’amministratore avrebbe già presentato le dimissioni.' },
      buildSimilar: { patternIt: 'Secondo l’agenzia, il vertice sarebbe rinviato.', prompt: { bn: 'Secondo... দিয়ে একটি সম্ভাব্য সংবাদ বাক্য লিখুন।', en: 'Write a journalistic conditional sentence starting with Secondo...' }, sampleIt: 'Secondo le prime indiscrezioni, il bando sarebbe prorogato di un mese.' },
      altEndingPrompt: { bn: 'কোম্পানি দুটি আনুষ্ঠানিক বিবৃতি প্রকাশ করলে সংবাদটি কীভাবে বদলাবে তা লিখুন।', en: 'Rewrite the conclusion once the official press release confirms the merger.' },
    },
  }),

  buildStory({
    id: 'st-b2-11', level: 'B2', titleIt: 'L’alluvione e i manoscritti salvati',
    title: { bn: 'বন্যা ও উদ্ধারকৃত প্রাচীন পাণ্ডুলিপি', en: 'The flood and the rescued manuscripts' },
    topic: { bn: 'ঐতিহ্য সংরক্ষণ ও উন্নত কর্মবাচ্য', en: 'Heritage conservation & advanced passive' },
    grammarIds: ['passivo-avanzato'],
    vocabKeys: ["w:B2:l'alluvione", 'w:B2:il manoscritto miniato', 'w:B2:il ricorso'],
    paragraphs: [
      { it: 'Nell’autunno del 2023 un’improvvisa alluvione colpì le cantine di una storica biblioteca romagnola. Purtroppo centinaia di registri amministrativi ottocenteschi sono andati perduti sotto il fango, mentre i volontari riuscivano a mettere in salvo gran parte dei volumi più rari.', tr: { bn: '২০২৩ সালের শরতে এক আকস্মিক বন্যা রোমানিয়ার একটি ঐতিহাসিক গ্রন্থাগারের ভূগর্ভস্থ কক্ষে আঘাত হানে। দুর্ভাগ্যবশত উনিশ শতকের শত শত প্রশাসনিক নথি কাদার নিচে হারিয়ে গেছে, তবে স্বেচ্ছাসেবকেরা সবচেয়ে বিরল বইগুলোর অধিকাংশ রক্ষা করতে পেরেছেন।', en: 'In autumn 2023 a sudden flood hit the basements of a historic library in Romagna. Sadly hundreds of nineteenth-century administrative registers were lost under the mud, while volunteers managed to rescue most of the rarer volumes.' } },
      { it: 'Tra questi figurava un prezioso manoscritto miniato del Quattrocento, che ora viene restaurato pagina per pagina grazie a tecniche di congelamento controllato. Le procedure d’emergenza vanno applicate con estrema precisione per evitare muffe irreversibili.', tr: { bn: 'এগুলোর মধ্যে পঞ্চদশ শতকের একটি মূল্যবান অলংকৃত পাণ্ডুলিপি ছিল, যা এখন নিয়ন্ত্রিত হিমায়ন প্রযুক্তির সাহায্যে পাতায় পাতায় সংস্কার করা হচ্ছে। অপূরণীয় ছত্রাক এড়াতে জরুরি প্রক্রিয়াগুলো চরম নির্ভুলতার সাথে প্রয়োগ করতে হয়।', en: 'Among these was a precious fifteenth-century illuminated manuscript, which is now being restored page by page using controlled freezing techniques. Emergency procedures must be applied with extreme precision to avoid irreversible mould.' } },
      { it: 'Molti cittadini sono rimasti colpiti dalla rapidità della mobilitazione giovanile, che ha dimostrato quanto la cultura civica sappia rispondere alle emergenze.', tr: { bn: 'তরুণদের দ্রুত এগিয়ে আসায় বহু নাগরিক অভিভূত হয়েছেন, যা দেখিয়েছে নাগরিক সংস্কৃতি কীভাবে জরুরি অবস্থায় সাড়া দিতে পারে।', en: 'Many citizens were struck by how rapidly young volunteers mobilised, proving how strongly civic culture responds to emergencies.' } },
    ],
    wordGlossary: [
      { word: 'alluvione', base: "l'alluvione", tr: { bn: 'বন্যা', en: 'flood' }, pos: 'noun' },
      { word: 'manoscritto miniato', base: 'il manoscritto miniato', tr: { bn: 'অলংকৃত পাণ্ডুলিপি', en: 'illuminated manuscript' }, pos: 'noun' },
    ],
    grammarBreakdown: [
      { sentenceIt: 'Molti registri sono andati perduti; il codice viene restaurato e le regole vanno applicate.', ruleTitle: { bn: 'venire ও andare দিয়ে কর্মবাচ্য', en: 'Passive with venire and andare' }, explanation: { bn: 'ক্ষতি বোঝাতে sono andati perduti, প্রক্রিয়ায় viene restaurato, এবং বাধ্যবাধকতায় vanno applicate ব্যবহৃত হয়েছে।', en: 'Distinct nuances of passive auxiliaries.' }, grammarId: 'passivo-avanzato' },
    ],
    mcq: [
      { id: 'stb2-11-q1', prompt: { bn: 'পঞ্চদশ শতকের পাণ্ডুলিপিটি কোন পদ্ধতিতে সংস্কার করা হচ্ছে?', en: 'How is the fifteenth-century manuscript being restored?' }, options: ['রোদে শুকিয়ে', 'নিয়ন্ত্রিত হিমায়ন প্রযুক্তিতে', 'নতুন কাগজে লিখে', 'বালি দিয়ে ঘষে'], answer: 1, explanation: { bn: 'সঠিক উত্তর: নিয়ন্ত্রিত হিমায়ন প্রযুক্তিতে — পাঠ্যাংশে বলা হয়েছে: «এগুলোর মধ্যে পঞ্চদশ শতকের একটি মূল্যবান অলংকৃত পাণ্ডুলিপি ছিল, যা এখন নিয়ন্ত্রিত হিমায়ন প্রযুক্তির সাহায্যে পাতায় পাতায় সংস্কার করা হচ্ছে। অপূরণীয় ছত্রাক এড়াতে জরুরি প্রক্রিয়াগুলো চরম নির্ভুলতার সাথে প্রয়োগ করতে হয়।» (grazie a tecniche di congelamento controllato)।', en: 'With controlled freezing techniques.' } },
    ],
    trueFalse: [
      { id: 'stb2-11-tf1', statementIt: 'Il manoscritto miniato del Quattrocento è stato salvato dai volontari.', statement: { bn: 'স্বেচ্ছাসেবকেরা পঞ্চদশ শতকের অলংকৃত পাণ্ডুলিপিটি রক্ষা করেছিলেন।', en: 'The fifteenth-century illuminated manuscript was saved.' }, answer: true, explanation: { bn: 'বইটি উদ্ধার করে এখন সংস্কার করা হচ্ছে।', en: 'True.' } },
    ],
    fillBlank: [
      { id: 'stb2-11-fb1', sentence: 'I documenti sensibili ___ conservati nei piani superiori.', options: ['vanno', 'vengono stati', 'sono venuti', 'hanno andati'], answer: 0, explanation: { bn: 'বাধ্যবাধকতা/নিয়ম অর্থে vanno conservati।', en: 'vanno + participle expresses rule/obligation.' } },
    ],
    shortAnswer: [
      { id: 'stb2-11-sa1', question: { bn: 'জরুরি প্রক্রিয়াগুলো কেন নির্ভুলভাবে প্রয়োগ করা উচিত?', en: 'Why must emergency procedures be applied precisely?' }, sampleAnswerIt: 'Per evitare muffe irreversibili.', keywords: ['muffe', 'irreversibili'] },
    ],
    practice: {
      retellPrompt: { bn: 'andare (perduti / applicate) ও venire ব্যবহার করে গল্পটি ৩ বাক্যে লিখুন।', en: 'Retell the library rescue using andare and venire passives.' },
      completeMissing: { promptIt: 'Nell’incendio diverse opere sono ___ distrutte.', hint: { bn: 'আবশ্যকতা বোঝাতে andare ক্রিয়ার স্ত্রীলিঙ্গ বহুবচন রূপ andate বসান', en: 'andate' }, sampleIt: 'Nell’incendio diverse opere sono andate distrutte.' },
      buildSimilar: { patternIt: 'Le norme vanno rispettate da tutti.', prompt: { bn: 'andare + পাস্ট পার্টিসিপল দিয়ে একটি নিয়ম লিখুন।', en: 'Write a rule using andare + past participle.' }, sampleIt: 'Il ricorso va inviato entro la scadenza prevista.' },
      altEndingPrompt: { bn: 'সংস্কার শেষে জাদুঘরে পাণ্ডুলিপিটির প্রথম প্রদর্শনীর বর্ণনা দিন।', en: 'Describe the manuscript’s return to public display.' },
    },
  }),

  buildStory({
    id: 'st-b2-12', level: 'B2', titleIt: 'Arginare il dissesto idrogeologico',
    title: { bn: 'ভূমিধস ও বন্যা ঝুঁকি মোকাবিলা', en: 'Stemming hydrogeological instability' },
    topic: { bn: 'পরিবেশ ব্যবস্থাপনা ও নৈর্ব্যক্তিক ci si', en: 'Environmental risk & impersonal ci si' },
    grammarIds: ['si-passivante-riflessivo'],
    vocabKeys: ['w:B2:il dissesto idrogeologico', 'w:B2:arginare'],
    paragraphs: [
      { it: 'Per decenni nelle valli appenniniche si è costruito senza valutare l’equilibrio dei torrenti montani. Solo dopo le frane invernali ci si è resi conto di quanto il dissesto idrogeologico minacci i piccoli centri abitati.', tr: { bn: 'দশকের পর দশক ধরে অ্যাপেনাইন উপত্যকাগুলোতে পাহাড়ি ঝরনার ভারসাম্য বিচার না করেই নির্মাণকাজ চলেছে। কেবল শীতকালীন ভূমিধসের পরেই উপলব্ধি করা গেছে যে জল-ভূতাত্ত্বিক বিপর্যয় ছোট জনপদগুলোকে কতটা হুমকির মুখে ফেলছে।', en: 'For decades construction went on in the Apennine valleys without assessing the balance of mountain streams. Only after the winter landslides did people realise how severely hydrogeological instability threatens small towns.' } },
      { it: 'In un contesto montano fragile ci si abitua purtroppo al rischio finché non si interviene in modo strutturale. Questa volta, tuttavia, i sindaci e i geologi si sono subito attivati per arginare il fenomeno attraverso il rimboschimento e la manutenzione dei canali.', tr: { bn: 'ভঙ্গুর পাহাড়ি পরিবেশে কাঠামোগত পদক্ষেপ না নেওয়া পর্যন্ত দুর্ভাগ্যবশত মানুষ ঝুঁকির সাথে অভ্যস্ত হয়ে যায়। তবে এবার মেয়রেরা এবং ভূতত্ত্ববিদেরা বনায়ন ও খাল সংস্কারের মাধ্যমে বিষয়টি নিয়ন্ত্রণে আনতে দ্রুত সক্রিয় হয়েছেন।', en: 'In a fragile mountain environment people unfortunately get used to risk until structural action is taken. This time, however, mayors and geologists acted immediately to stem the phenomenon through reforestation and canal upkeep.' } },
      { it: 'Quando si lavora in prevenzione, si tutelano al contempo vite umane, strade provinciali ed economia locale.', tr: { bn: 'যখন প্রতিরোধমূলক কাজ করা হয়, তখন একই সাথে মানুষের জীবন, প্রাদেশিক সড়ক এবং স্থানীয় অর্থনীতি সুরক্ষিত থাকে।', en: 'When preventive work is carried out, human lives, provincial roads, and the local economy are protected together.' } },
    ],
    wordGlossary: [
      { word: 'dissesto idrogeologico', base: 'il dissesto idrogeologico', tr: { bn: 'ভূমিধস ও বন্যা ঝুঁকি', en: 'hydrogeological instability' }, pos: 'noun' },
      { word: 'arginare', base: 'arginare', tr: { bn: 'নিয়ন্ত্রণে রাখা / বাঁধ দেওয়া', en: 'to stem / contain' }, pos: 'verb' },
    ],
    grammarBreakdown: [
      { sentenceIt: 'Solo dopo la crisi ci si è resi conto del dissesto.', ruleTitle: { bn: 'যৌগিক কালে ci si + বহুবচন', en: 'Impersonal ci si in compound tenses' }, explanation: { bn: 'rendersi conto প্রতিফলক ক্রিয়ায় নৈর্ব্যক্তিক অতীত রূপে ci si è resi conto বসেছে।', en: 'Reflexive verb in impersonal past takes ci si è + plural masculine participle.' }, grammarId: 'si-passivante-riflessivo' },
    ],
    mcq: [
      { id: 'stb2-12-q1', prompt: { bn: 'মেয়রেরা ভূমিধস নিয়ন্ত্রণে কোন দুটি পদক্ষেপ নিয়েছেন?', en: 'Which two measures did mayors and geologists adopt?' }, options: ['নতুন হাইওয়ে ও শপিং মল', 'বনায়ন ও খাল সংস্কার', 'ট্রেন বন্ধ ও কর বৃদ্ধি', 'সেতু ভাঙা'], answer: 1, explanation: { bn: 'সঠিক উত্তর: বনায়ন ও খাল সংস্কার — পাঠ্যাংশে বলা হয়েছে: «ভঙ্গুর পাহাড়ি পরিবেশে কাঠামোগত পদক্ষেপ না নেওয়া পর্যন্ত দুর্ভাগ্যবশত মানুষ ঝুঁকির সাথে অভ্যস্ত হয়ে যায়। তবে এবার মেয়রেরা এবং ভূতত্ত্ববিদেরা বনায়ন ও খাল সংস্কারের মাধ্যমে বিষয়টি নিয়ন্ত্রণে আনতে দ্রুত সক্রিয় হয়েছেন।» (il rimboschimento e la manutenzione dei canali)।', en: 'Reforestation and canal maintenance.' } },
    ],
    trueFalse: [
      { id: 'stb2-12-tf1', statementIt: 'L’intervento strutturale protegge sia le persone che l’economia locale.', statement: { bn: 'কাঠামোগত পদক্ষেপ মানুষ ও স্থানীয় অর্থনীতি উভয়কেই রক্ষা করে।', en: 'Preventive intervention protects both lives and local economy.' }, answer: true, explanation: { bn: 'বাক্যটি সত্য — গল্পের তথ্যানুযায়ী: «যখন প্রতিরোধমূলক কাজ করা হয়, তখন একই সাথে মানুষের জীবন, প্রাদেশিক সড়ক এবং স্থানীয় অর্থনীতি সুরক্ষিত থাকে।» (si tutelano vite umane, strade ed economia locale)।', en: 'True.' } },
    ],
    fillBlank: [
      { id: 'stb2-12-fb1', sentence: 'Di fronte ai dati ufficiali, ___ subito resi conto dell’urgenza.', options: ['si si è', 'ci si è', 'ci si ha', 'si ha'], answer: 1, explanation: { bn: 'পাঠ্যাংশের তথ্যানুযায়ী: «দশকের পর দশক ধরে অ্যাপেনাইন উপত্যকাগুলোতে পাহাড়ি ঝরনার ভারসাম্য বিচার না করেই নির্মাণকাজ চলেছে। কেবল শীতকালীন ভূমিধসের পরেই উপলব্ধি করা গেছে যে জল-ভূতাত্ত্বিক বিপর্যয় ছোট জনপদগুলোকে কতটা হুমকির মুখে ফেলছে।» (সঠিক উত্তর: ci si è)।', en: 'Impersonal reflexive takes ci si è.' } },
    ],
    shortAnswer: [
      { id: 'stb2-12-sa1', question: { bn: 'দশকের পর দশক কী বিচার না করেই নির্মাণকাজ চলেছিল?', en: 'What had been overlooked during decades of construction?' }, sampleAnswerIt: 'L’equilibrio dei torrenti montani.', keywords: ['equilibrio', 'torrenti'] },
    ],
    practice: {
      retellPrompt: { bn: 'ci si è... কাঠামো ব্যবহার করে পাহাড়ি ঝুঁকি ও সমাধান নিয়ে লিখুন।', en: 'Write a 3-sentence summary using ci si constructions.' },
      completeMissing: { promptIt: 'In Italia ___ abituati troppo spesso all’emergenza.', hint: { bn: 'নৈর্ব্যক্তিক আত্মবাচক গঠনে ci si è ব্যবহার করুন', en: 'ci si è' }, sampleIt: 'In Italia ci si è abituati troppo spesso all’emergenza.' },
      buildSimilar: { patternIt: 'Ci si è accorti tardi del guasto.', prompt: { bn: 'ci si è + পার্টিসিপল দিয়ে একটি বাক্য লিখুন।', en: 'Build an impersonal reflexive sentence in the past.' }, sampleIt: 'Dopo il monitoraggio ci si è resi conto che le misure funzionano.' },
      altEndingPrompt: { bn: 'এক বছর পর উপত্যকার অবস্থার উন্নতি বর্ণনা করুন।', en: 'Describe the valley one year after the preventive works.' },
    },
  }),

  buildStory({
    id: 'st-b2-13', level: 'B2', titleIt: 'In conformità con la norma vigente',
    title: { bn: 'প্রচলিত বিধিমালা ও অসমাপিকা খণ্ডবাক্য', en: 'Compliance and implicit clauses' },
    topic: { bn: 'আইনি বিবৃতি ও অসমাপিকা বাক্যরূপান্তর', en: 'Legal compliance & implicit clauses' },
    grammarIds: ['subordinate-implicite'],
    vocabKeys: ['w:B2:in conformità con', 'w:B2:la norma vigente', "w:B2:l'illecito"],
    paragraphs: [
      { it: 'Davanti al collegio di disciplina, l’ingegnere capo dichiarò di aver agito sempre in conformità con la norma vigente. Negò fermamente di aver mai tollerato alcun illecito nei cantieri affidati alla sua supervisione.', tr: { bn: 'শৃঙ্খলা পর্ষদের সামনে প্রধান প্রকৌশলী ঘোষণা করেন যে তিনি সর্বদা প্রচলিত বিধিমালা অনুসারে কাজ করেছেন। তাঁর তত্ত্বাবধানে থাকা নির্মাণক্ষেত্রে কোনো বেআইনি কাজ সহ্য করার কথা তিনি দৃঢ়ভাবে অস্বীকার করেন।', en: 'Before the disciplinary board, the chief engineer declared that he had always acted in accordance with the regulation in force. He firmly denied ever tolerating any unlawful act on sites under his supervision.' } },
      { it: 'Prima di trasmettere la relazione finale, chiese ai periti di esaminare ogni singolo allegato per evitare ambiguità interpretative. Sapeva infatti che, dopo aver firmato il verbale, non sarebbe stato possibile rettificare le cifre senza un decreto correttivo.', tr: { bn: 'চূড়ান্ত প্রতিবেদন পাঠানোর আগে ব্যাখ্যাগত দ্ব্যর্থতা এড়াতে তিনি বিশেষজ্ঞদের প্রতিটি সংযুক্তি পরীক্ষা করতে অনুরোধ করেন। কারণ তিনি জানতেন যে কার্যবিবরণীতে সই করার পর সংশোধনমূলক ডিক্রি ছাড়া সংখ্যা পরিবর্তন করা সম্ভব হবে না।', en: 'Before forwarding the final report, he asked experts to examine every annex to avoid interpretive ambiguity. He knew that after signing the minutes, figures could not be rectified without a corrective decree.' } },
      { it: 'Avendo esibito tutte le ricevute certificate, l’ingegnere ottenne infine il proscioglimento completo.', tr: { bn: 'সব প্রত্যয়িত রসিদ প্রদর্শন করার পর প্রকৌশলী অবশেষে সম্পূর্ণ অভিযোগমুক্তি লাভ করেন।', en: 'Having produced all certified receipts, the engineer finally obtained complete exoneration.' } },
    ],
    wordGlossary: [
      { word: 'in conformità con', base: 'in conformità con', tr: { bn: 'অনুসারে / সঙ্গতি রেখে', en: 'in accordance with' }, pos: 'phrase' },
      { word: 'norma vigente', base: 'la norma vigente', tr: { bn: 'প্রচলিত বিধান', en: 'regulation in force' }, pos: 'noun' },
      { word: 'illecito', base: "l'illecito", tr: { bn: 'বেআইনি কাজ', en: 'unlawful act' }, pos: 'noun' },
    ],
    grammarBreakdown: [
      { sentenceIt: 'Dichiarò di aver agito / Prima di trasmettere / Avendo esibito le ricevute.', ruleTitle: { bn: 'অসমাপিকা খণ্ডবাক্য (Implicit clauses)', en: 'Converting explicit to implicit clauses' }, explanation: { bn: 'একই কর্তা থাকায় che-র পরিবর্তে di aver + পার্টিসিপল, prima di + ইনফিনিটিভ এবং avendo + পার্টিসিপল বসেছে।', en: 'Same-subject clauses condense smoothly into infinitive and gerund phrases.' }, grammarId: 'subordinate-implicite' },
    ],
    mcq: [
      { id: 'stb2-13-q1', prompt: { bn: 'প্রকৌশলী কীভাবে অভিযোগ থেকে মুক্তি পেলেন?', en: 'How did the engineer obtain exoneration?' }, options: ['জরিমানা দিয়ে', 'সব প্রত্যয়িত রসিদ প্রদর্শন করে', 'সাক্ষী সরিয়ে', 'পুনরায় পরীক্ষা দিয়ে'], answer: 1, explanation: { bn: 'সঠিক উত্তর: সব প্রত্যয়িত রসিদ প্রদর্শন করে — পাঠ্যাংশে বলা হয়েছে: «সব প্রত্যয়িত রসিদ প্রদর্শন করার পর প্রকৌশলী অবশেষে সম্পূর্ণ অভিযোগমুক্তি লাভ করেন।» (Avendo esibito tutte le ricevute certificate)।', en: 'By producing all certified receipts.' } },
    ],
    trueFalse: [
      { id: 'stb2-13-tf1', statementIt: 'L’ingegnere ammise di aver tollerato alcune irregolarità.', statement: { bn: 'প্রকৌশলী কিছু অনিয়ম মেনে নেওয়ার কথা স্বীকার করেন।', en: 'The engineer admitted tolerating some irregularities.' }, answer: false, explanation: { bn: 'বাক্যটি মিথ্যা — গল্পে আসলে বলা হয়েছে: «শৃঙ্খলা পর্ষদের সামনে প্রধান প্রকৌশলী ঘোষণা করেন যে তিনি সর্বদা প্রচলিত বিধিমালা অনুসারে কাজ করেছেন। তাঁর তত্ত্বাবধানে থাকা নির্মাণক্ষেত্রে কোনো বেআইনি কাজ সহ্য করার কথা তিনি দৃঢ়ভাবে অস্বীকার করেন।» (Negò fermamente di aver mai tollerato alcun illecito)।', en: 'He firmly denied ever tolerating any unlawful act.' } },
    ],
    fillBlank: [
      { id: 'stb2-13-fb1', sentence: 'L’impresa nega ___ superato le soglie acustiche.', options: ['che abbia', 'di aver', 'avendo', 'aver'], answer: 1, explanation: { bn: 'একই কর্তা হওয়ায় di aver superato।', en: 'Same-subject denial uses di aver + participle.' } },
    ],
    shortAnswer: [
      { id: 'stb2-13-sa1', question: { bn: 'কার্যবিবরণী সই করার পর কেন সংখ্যা বদলানো যেত না?', en: 'Why could figures not be changed easily after signing the minutes?' }, sampleAnswerIt: 'Non era possibile rettificare le cifre senza un decreto correttivo.', keywords: ['decreto', 'correttivo'] },
    ],
    practice: {
      retellPrompt: { bn: 'di aver / prima di / avendo ব্যবহার করে ঘটনার সারসংক্ষেপ লিখুন।', en: 'Summarise the disciplinary hearing using implicit clauses.' },
      completeMissing: { promptIt: '___ letto la diffida, rispose subito.', hint: { bn: 'অতীত জেরুন্ড: Avendo', en: 'Avendo' }, sampleIt: 'Avendo letto la diffida, rispose subito.' },
      buildSimilar: { patternIt: 'Confermo di aver ricevuto gli allegati.', prompt: { bn: 'di aver + পাস্ট পার্টিসিপল দিয়ে একটি আনুষ্ঠানিক বাক্য লিখুন।', en: 'Write a formal confirmation using di aver...' }, sampleIt: 'Dichiaro di aver compilato l’autocertificazione in conformità con la legge.' },
      altEndingPrompt: { bn: 'শৃঙ্খলা পর্ষদের চূড়ান্ত সিদ্ধান্তের পর নির্মাণ সাইটের পরিবেশ বর্ণনা করুন।', en: 'Describe work resuming smoothly at the construction site.' },
    },
  }),

  buildStory({
    id: 'st-b2-14', level: 'B2', titleIt: 'Rinnovabili e confronto sindacale',
    title: { bn: 'নবায়নযোগ্য জ্বালানি ও শ্রমিক ইউনিয়ন সংলাপ', en: 'Renewables and trade union dialogue' },
    topic: { bn: 'শিল্প রূপান্তর ও জেরুন্ডের উচ্চতর ব্যবহার', en: 'Industrial transition & advanced gerunds' },
    grammarIds: ['gerundio-causale-ipotetico'],
    vocabKeys: ['w:B2:il sindacato', 'w:B2:contestare', 'w:B2:le fonti rinnovabili'],
    paragraphs: [
      { it: 'Pur condividendo l’obiettivo della decarbonizzazione, il sindacato del polo industriale contesta i tempi troppo ristretti imposti dalla proprietà. Durante il tavolo tecnico, i delegati hanno spiegato che la riconversione richiede formazione continua.', tr: { bn: 'কার্বন হ্রাসের লক্ষ্যের সাথে একমত হলেও শিল্পাঞ্চলের শ্রমিক ইউনিয়ন মালিকপক্ষের নির্ধারিত অতি সংক্ষিপ্ত সময়সীমা নিয়ে আপত্তি জানিয়েছে। কারিগরি আলোচনায় প্রতিনিধিরা ব্যাখ্যা করেন যে রূপান্তরের জন্য ধারাবাহিক প্রশিক্ষণ প্রয়োজন।', en: 'While sharing the goal of decarbonisation, the industrial hub’s trade union contests the overly tight deadlines set by ownership. At the technical table, delegates explained that reconversion requires continuous training.' } },
      { it: '«Investendo con gradualità nelle fonti rinnovabili e nell’idrogeno verde — ha dichiarato il portavoce — salvaguarderemmo sia l’occupazione sia l’ambiente». Essendo stati esclusi dalla prima bozza dell’accordo, gli operai chiedevano garanzie scritte.', tr: { bn: '«নবায়নযোগ্য উৎস ও সবুজ হাইড্রোজেনে ধাপে ধাপে বিনিয়োগ করলে — মুখপাত্র ঘোষণা করেন — আমরা কর্মসংস্থান ও পরিবেশ উভয়ই রক্ষা করতে পারতাম»। চুক্তির প্রথম খসড়া থেকে বাদ পড়ায় শ্রমিকেরা লিখিত নিশ্চয়তা চাইছিলেন।', en: '"By investing gradually in renewable sources and green hydrogen," the spokesperson declared, "we would safeguard both jobs and the environment." Having been left out of the initial draft agreement, workers demanded written guarantees.' } },
      { it: 'Riconoscendo il valore delle competenze già presenti in fabbrica, l’azienda accettò infine un protocollo condiviso di riqualificazione.', tr: { bn: 'কারখানায় ইতিমধ্যে থাকা দক্ষতার মূল্য স্বীকার করে কোম্পানিটি অবশেষে পুনঃপ্রশিক্ষণের একটি যৌথ প্রোটোকল মেনে নিল।', en: 'Recognising the value of the skills already in the factory, the company finally accepted a joint retraining protocol.' } },
    ],
    wordGlossary: [
      { word: 'sindacato', base: 'il sindacato', tr: { bn: 'শ্রমিক ইউনিয়ন', en: 'trade union' }, pos: 'noun' },
      { word: 'contestare', base: 'contestare', tr: { bn: 'আপত্তি / চ্যালেঞ্জ করা', en: 'to contest' }, pos: 'verb' },
      { word: 'fonti rinnovabili', base: 'le fonti rinnovabili', tr: { bn: 'নবায়নযোগ্য উৎস', en: 'renewable sources' }, pos: 'noun' },
    ],
    grammarBreakdown: [
      { sentenceIt: 'Pur condividendo l’obiettivo / Investendo con gradualità, salvaguarderemmo…', ruleTitle: { bn: 'ছাড় ও শর্তবাচক জেরুন্ড', en: 'Concessive & conditional gerunds' }, explanation: { bn: 'Pur condividendo ছাড় বোঝায়, আর কন্ডিশনাল ক্রিয়ার (salvaguarderemmo) সাথে Investendo শর্ত ("যদি বিনিয়োগ করি") বোঝায়।', en: 'Pur + gerund is concessive; gerund paired with conditional is hypothetical.' }, grammarId: 'gerundio-causale-ipotetico' },
    ],
    mcq: [
      { id: 'stb2-14-q1', prompt: { bn: 'শ্রমিক ইউনিয়ন কোন বিষয়ে আপত্তি জানিয়েছিল?', en: 'What did the trade union contest?' }, options: ['বেতন বৃদ্ধি', 'অতি সংক্ষিপ্ত সময়সীমা', 'নবায়নযোগ্য জ্বালানি বাতিল', 'ছুটির দিন'], answer: 1, explanation: { bn: 'সঠিক উত্তর: অতি সংক্ষিপ্ত সময়সীমা — পাঠ্যাংশে বলা হয়েছে: «কার্বন হ্রাসের লক্ষ্যের সাথে একমত হলেও শিল্পাঞ্চলের শ্রমিক ইউনিয়ন মালিকপক্ষের নির্ধারিত অতি সংক্ষিপ্ত সময়সীমা নিয়ে আপত্তি জানিয়েছে। কারিগরি আলোচনায় প্রতিনিধিরা ব্যাখ্যা করেন যে রূপান্তরের জন্য ধারাবাহিক প্রশিক্ষণ প্রয়োজন।» (i tempi troppo ristretti imposti dalla proprietà)।', en: 'The overly tight deadlines.' } },
    ],
    trueFalse: [
      { id: 'stb2-14-tf1', statementIt: 'Il sindacato rifiuta del tutto l’obiettivo della decarbonizzazione.', statement: { bn: 'ইউনিয়ন কার্বন হ্রাসের লক্ষ্যটি সম্পূর্ণভাবে প্রত্যাখ্যান করে।', en: 'The union totally rejects the decarbonisation goal.' }, answer: false, explanation: { bn: 'Pur condividendo l’obiettivo = লক্ষ্যটির সাথে তারা একমত।', en: 'They share the goal while contesting the timeline.' } },
    ],
    fillBlank: [
      { id: 'stb2-14-fb1', sentence: '___ la formazione interna, ridurremmo gli errori tecnici.', options: ['Potenziando', 'Potenziato', 'Potenziare', 'Potenziano'], answer: 0, explanation: { bn: 'ridurremmo (কন্ডিশনাল)-এর শর্তে জেরুন্ড Potenziando।', en: 'Hypothetical condition paired with ridurremmo takes gerund Potenziando.' } },
    ],
    shortAnswer: [
      { id: 'stb2-14-sa1', question: { bn: 'অবশেষে কোম্পানিটি কী মেনে নিয়েছিল?', en: 'What did the company eventually accept?' }, sampleAnswerIt: 'Un protocollo condiviso di riqualificazione.', keywords: ['protocollo', 'riqualificazione'] },
    ],
    practice: {
      retellPrompt: { bn: 'Pur + জেরুন্ড ও শর্তবাচক জেরুন্ড দিয়ে শিল্প সংলাপের সারমর্ম লিখুন।', en: 'Summarise the dialogue using concessive and hypothetical gerunds.' },
      completeMissing: { promptIt: '___ state ascoltate le parti, l’intesa fu raggiunta.', hint: { bn: 'অতীত কর্মবাচ্য জেরুন্ড: Essendo', en: 'Essendo' }, sampleIt: 'Essendo state ascoltate le parti, l’intesa fu raggiunta.' },
      buildSimilar: { patternIt: 'Pur apprezzando la proposta, chiedo modifiche.', prompt: { bn: 'Pur + জেরুন্ড দিয়ে একটি কূটনৈতিক বাক্য লিখুন।', en: 'Write a concessive sentence starting with Pur + gerund.' }, sampleIt: 'Pur riconoscendo i costi, sosteniamo il passaggio alle energie rinnovabili.' },
      altEndingPrompt: { bn: 'নতুন প্রশিক্ষণ কর্মসূচি চালুর ছয় মাস পর কারখানার চিত্র লিখুন।', en: 'Describe the plant six months into the retraining programme.' },
    },
  }),

  buildStory({
    id: 'st-b2-15', level: 'B2', titleIt: 'La circolare del bando pubblico',
    title: { bn: 'সরকারি নিয়োগ বিজ্ঞপ্তির পরিপত্র', en: 'The circular for the public call' },
    topic: { bn: 'প্রশাসনিক ভাষা ও বর্তমান পার্টিসিপল', en: 'Administrative Italian & present participle' },
    grammarIds: ['participio-presente-b2'],
    vocabKeys: ['w:B2:il bando di concorso', 'w:B2:la norma vigente'],
    paragraphs: [
      { it: 'Il ministero dell’Istruzione ha pubblicato una circolare contenente le istruzioni operative per il nuovo bando di concorso nazionale. Possono presentare domanda esclusivamente i candidati aventi i titoli accademici riconosciuti dalla norma vigente.', tr: { bn: 'শিক্ষা মন্ত্রণালয় নতুন জাতীয় নিয়োগ বিজ্ঞপ্তির কার্যকরী নির্দেশাবলি সংবলিত একটি পরিপত্র প্রকাশ করেছে। কেবল প্রচলিত বিধান দ্বারা স্বীকৃত একাডেমিক ডিগ্রিধারী প্রার্থীরাই আবেদন জমা দিতে পারবেন।', en: 'The Ministry of Education has published a circular containing operational instructions for the new national competition notice. Only candidates holding academic degrees recognised by the regulations in force may apply.' } },
      { it: 'L’ufficio legale ha predisposto un allegato esplicativo riguardante la valutazione dei tirocini svolti all’estero. I richiedenti provenienti da atenei stranieri devono allegare il decreto di equipollenza rilasciato dall’autorità competente.', tr: { bn: 'আইনি দপ্তর বিদেশে সম্পন্ন ইন্টার্নশিপ মূল্যায়ন সংক্রান্ত একটি ব্যাখ্যামূলক সংযুক্তি প্রস্তুত করেছে। বিদেশি বিশ্ববিদ্যালয় থেকে আসা আবেদনকারীদের উপযুক্ত কর্তৃপক্ষ কর্তৃক প্রদত্ত সমমান সনদ সংযুক্ত করতে হবে।', en: 'The legal office prepared an explanatory annex concerning the assessment of internships completed abroad. Applicants coming from foreign universities must attach the equivalence decree issued by the competent authority.' } },
      { it: 'Ogni istanza mancante della firma digitale verrà automaticamente sospesa fino al completamento della procedura.', tr: { bn: 'ডিজিটাল স্বাক্ষরবিহীন প্রতিটি আবেদন প্রক্রিয়া সম্পূর্ণ না হওয়া পর্যন্ত স্বয়ংক্রিয়ভাবে স্থগিত থাকবে।', en: 'Every application lacking a digital signature will be automatically suspended until completion.' } },
    ],
    wordGlossary: [
      { word: 'bando di concorso', base: 'il bando di concorso', tr: { bn: 'নিয়োগ/দরপত্রের বিজ্ঞপ্তি', en: 'public competition notice' }, pos: 'noun' },
      { word: 'norma vigente', base: 'la norma vigente', tr: { bn: 'প্রচলিত বিধি', en: 'rule in force' }, pos: 'noun' },
    ],
    grammarBreakdown: [
      { sentenceIt: 'Una circolare contenente le istruzioni / i candidati aventi i titoli.', ruleTitle: { bn: 'বর্তমান পার্টিসিপলের ক্রিয়াশীল রূপ', en: 'Verbal present participle (-ante/-ente)' }, explanation: { bn: 'contenente = che contiene; aventi = che hanno; riguardante = che riguarda। বহুবচন বিশেষ্যে -anti/-enti হয়।', en: 'Condenses relative clauses in formal prose and agrees in number (-e sg. / -i pl.).' }, grammarId: 'participio-presente-b2' },
    ],
    mcq: [
      { id: 'stb2-15-q1', prompt: { bn: 'বিদেশি বিশ্ববিদ্যালয় থেকে আসা প্রার্থীদের কী সংযুক্ত করতে হবে?', en: 'What must applicants from foreign universities attach?' }, options: ['ব্যাংক বিবরণী', 'ডিগ্রির সমমান ডিক্রি', 'পাসপোর্টের কপি', 'ভাড়ার চুক্তি'], answer: 1, explanation: { bn: 'সঠিক উত্তর: ডিগ্রির সমমান ডিক্রি — পাঠ্যাংশে বলা হয়েছে: «আইনি দপ্তর বিদেশে সম্পন্ন ইন্টার্নশিপ মূল্যায়ন সংক্রান্ত একটি ব্যাখ্যামূলক সংযুক্তি প্রস্তুত করেছে। বিদেশি বিশ্ববিদ্যালয় থেকে আসা আবেদনকারীদের উপযুক্ত কর্তৃপক্ষ কর্তৃক প্রদত্ত সমমান সনদ সংযুক্ত করতে হবে।» (il decreto di equipollenza)।', en: 'The equivalence decree.' } },
    ],
    trueFalse: [
      { id: 'stb2-15-tf1', statementIt: 'Le domande prive di firma digitale vengono accolte comunque senza riserve.', statement: { bn: 'ডিজিটাল স্বাক্ষরহীন আবেদনগুলোও বিনা শর্তে গৃহীত হয়।', en: 'Applications without digital signatures are accepted unconditionally.' }, answer: false, explanation: { bn: 'আবেদনগুলো স্বয়ংক্রিয়ভাবে স্থগিত করা হয়।', en: 'They are automatically suspended.' } },
    ],
    fillBlank: [
      { id: 'stb2-15-fb1', sentence: 'Tutti i cittadini ___ diritto al patrocinio gratuito possono farne richiesta.', options: ['avente', 'aventi', 'avendo', 'avuto'], answer: 1, explanation: { bn: 'i cittadini বহুবচন হওয়ায় aventi বসে।', en: 'Plural i cittadini takes aventi.' } },
    ],
    shortAnswer: [
      { id: 'stb2-15-sa1', question: { bn: 'আইনি দপ্তরের প্রস্তুতকৃত সংযুক্তিটি কী বিষয়ক?', en: 'What is the legal office’s annex about?' }, sampleAnswerIt: 'Riguarda la valutazione dei tirocini svolti all’estero.', keywords: ['tirocini', 'estero'] },
    ],
    practice: {
      retellPrompt: { bn: '-ante/-ente বর্তমান পার্টিসিপল ব্যবহার করে বিজ্ঞপ্তির সারসংক্ষেপ লিখুন।', en: 'Summarise the call using -ante/-ente present participles.' },
      completeMissing: { promptIt: 'Il decreto ___ le aliquote fiscali è stato pubblicato.', hint: { bn: 'riguardare ক্রিয়ার বর্তমান পার্টিসিপল রূপ riguardante বসান', en: 'riguardante' }, sampleIt: 'Il decreto riguardante le aliquote fiscali è stato pubblicato.' },
      buildSimilar: { patternIt: 'Un documento contenente dati sensibili.', prompt: { bn: 'বর্তমান পার্টিসিপল দিয়ে একটি বিশেষ্য পদগুচ্ছ লিখুন।', en: 'Write a noun phrase condensed with a present participle.' }, sampleIt: 'Una relazione illustrante i risultati dell’indagine.' },
      altEndingPrompt: { bn: 'প্রার্থীর ডিজিটাল স্বাক্ষর সংযুক্ত করার পর আবেদনের স্থিতি লিখুন।', en: 'Describe the application status once the signature is uploaded.' },
    },
  }),

  buildStory({
    id: 'st-b2-16', level: 'B2', titleIt: 'La sanzione per la violazione dei dati',
    title: { bn: 'তথ্য ফাঁসের দায়ে প্রশাসনিক জরিমানা', en: 'Administrative penalty for data breach' },
    topic: { bn: 'তথ্য সুরক্ষা ও স্বাধীন পাস্ট পার্টিসিপল', en: 'Data privacy & absolute past participle' },
    grammarIds: ['participio-assoluto-b2'],
    vocabKeys: ['w:B2:la violazione dei dati', 'w:B2:la sanzione amministrativa', 'w:B2:il cessate il fuoco'],
    paragraphs: [
      { it: 'Accertata la violazione dei dati degli utenti su un portale commerciale, l’autorità garante ha avviato subito l’istruttoria formale. Esaminate le prove informatiche depositate dai tecnici, il collegio ha inflitto una pesante sanzione amministrativa.', tr: { bn: 'একটি বাণিজ্যিক পোর্টালে ব্যবহারকারীদের তথ্য ফাঁসের বিষয়টি প্রমাণিত হওয়ায় তদারকি কর্তৃপক্ষ অবিলম্বে আনুষ্ঠানিক তদন্ত শুরু করেছে। প্রকৌশলীদের জমা দেওয়া ডিজিটাল প্রমাণ পরীক্ষা করে পর্ষদ একটি কঠোর প্রশাসনিক জরিমানা আরোপ করেছে।', en: 'Once the breach of user data on a commercial portal was ascertained, the supervisory authority immediately opened a formal investigation. Having examined the digital evidence filed by technicians, the board imposed a heavy administrative penalty.' } },
      { it: 'Conclusa l’ispezione nei server aziendali, l’impresa ha dovuto adottare un protocollo di cifratura avanzata entro sessanta giorni. Venuto meno l’alibi del semplice guasto tecnico, i dirigenti hanno accettato il provvedimento senza proporre ricorso.', tr: { bn: 'কোম্পানির সার্ভারে পরিদর্শন শেষ হওয়ার পর প্রতিষ্ঠানটিকে ষাট দিনের মধ্যে একটি উন্নত এনক্রিপশন প্রোটোকল গ্রহণ করতে হয়েছে। নিছক কারিগরি ত্রুটির অজুহাত বাতিল হওয়ায় পরিচালকেরা কোনো আপিল না করেই নির্দেশনা মেনে নিয়েছেন।', en: 'Once inspection of corporate servers concluded, the firm had to adopt an advanced encryption protocol within sixty days. With the excuse of a simple technical fault gone, executives accepted the measure without appealing.' } },
      { it: 'Simili interventi dimostrano che, raggiunta la piena trasparenza digitale, la fiducia dei consumatori può essere rapidamente ricostruita.', tr: { bn: 'এ ধরনের পদক্ষেপ প্রমাণ করে যে পূর্ণাঙ্গ ডিজিটাল স্বচ্ছতা অর্জিত হলে ভোক্তাদের আস্থা দ্রুত পুনর্গঠন করা সম্ভব।', en: 'Such interventions prove that, once full digital transparency is achieved, consumer trust can be swiftly rebuilt.' } },
    ],
    wordGlossary: [
      { word: 'violazione dei dati', base: 'la violazione dei dati', tr: { bn: 'তথ্য ফাঁস / লঙ্ঘন', en: 'data breach' }, pos: 'noun' },
      { word: 'sanzione amministrativa', base: 'la sanzione amministrativa', tr: { bn: 'প্রশাসনিক জরিমানা', en: 'administrative penalty' }, pos: 'noun' },
    ],
    grammarBreakdown: [
      { sentenceIt: 'Accertata la violazione / Esaminate le prove / Venuto meno l’alibi.', ruleTitle: { bn: 'স্বাধীন পাস্ট পার্টিসিপল', en: 'Absolute past participle agreement' }, explanation: { bn: 'পাস্ট পার্টিসিপল সরাসরি পরবর্তী বিশেষ্যের লিঙ্গ-বচন অনুযায়ী Accertata, Esaminate, Venuto হয়েছে।', en: 'Participle agrees with its following subject noun.' }, grammarId: 'participio-assoluto-b2' },
    ],
    mcq: [
      { id: 'stb2-16-q1', prompt: { bn: 'কোম্পানিটি কেন নির্দেশনার বিরুদ্ধে আপিল করেনি?', en: 'Why did the company not appeal the penalty?' }, options: ['তারা অর্থের অভাবে ছিল', 'কারিগরি ত্রুটির অজুহাত টেকেনি', 'পর্ষদ বন্ধ হয়ে গিয়েছিল', 'তারা দেশ ছেড়েছে'], answer: 1, explanation: { bn: 'সঠিক উত্তর: কারিগরি ত্রুটির অজুহাত টেকেনি — পাঠ্যাংশে বলা হয়েছে: «কোম্পানির সার্ভারে পরিদর্শন শেষ হওয়ার পর প্রতিষ্ঠানটিকে ষাট দিনের মধ্যে একটি উন্নত এনক্রিপশন প্রোটোকল গ্রহণ করতে হয়েছে। নিছক কারিগরি ত্রুটির অজুহাত বাতিল হওয়ায় পরিচালকেরা কোনো আপিল না করেই নির্দেশনা মেনে নিয়েছেন।» (Venuto meno l’alibi del semplice guasto tecnico)।', en: 'The technical-fault alibi failed.' } },
    ],
    trueFalse: [
      { id: 'stb2-16-tf1', statementIt: 'L’impresa ha avuto sessanta giorni per adottare la cifratura avanzata.', statement: { bn: 'উন্নত এনক্রিপশন চালুর জন্য কোম্পানিটি ষাট দিন সময় পেয়েছিল।', en: 'The company had sixty days to implement advanced encryption.' }, answer: true, explanation: { bn: 'বাক্যটি সত্য — গল্পের তথ্যানুযায়ী: «কোম্পানির সার্ভারে পরিদর্শন শেষ হওয়ার পর প্রতিষ্ঠানটিকে ষাট দিনের মধ্যে একটি উন্নত এনক্রিপশন প্রোটোকল গ্রহণ করতে হয়েছে। নিছক কারিগরি ত্রুটির অজুহাত বাতিল হওয়ায় পরিচালকেরা কোনো আপিল না করেই নির্দেশনা মেনে নিয়েছেন।» (entro sessanta giorni)।', en: 'True.' } },
    ],
    fillBlank: [
      { id: 'stb2-16-fb1', sentence: '___ gli accordi preliminari, le delegazioni firmarono il cessate il fuoco.', options: ['Raggiunta', 'Raggiunto', 'Raggiunti', 'Raggiunte'], answer: 2, explanation: { bn: 'gli accordi পুং বহুবচন → Raggiunti।', en: 'Masculine plural gli accordi takes Raggiunti.' } },
    ],
    shortAnswer: [
      { id: 'stb2-16-sa1', question: { bn: 'পর্ষদ কীসের ভিত্তিতে জরিমানা আরোপ করেছিল?', en: 'On what basis did the board impose the penalty?' }, sampleAnswerIt: 'Esaminate le prove informatiche depositate dai tecnici.', keywords: ['prove', 'informatiche'] },
    ],
    practice: {
      retellPrompt: { bn: 'Accertata..., Esaminate... দিয়ে তদন্তের গল্পটি সংক্ষেপে লিখুন।', en: 'Summarise the investigation using absolute participle clauses.' },
      completeMissing: { promptIt: '___ la norma dal Parlamento, iniziò l’attuazione.', hint: { bn: 'স্ত্রীলিঙ্গ একবচন বিশেষ্যের সাথে সঙ্গতি রেখে Approvata বসান', en: 'Approva → Approvata' }, sampleIt: 'Approvata la norma dal Parlamento, iniziò l’attuazione.' },
      buildSimilar: { patternIt: 'Conclusa la riunione, i soci uscirono.', prompt: { bn: 'একটি স্বাধীন পাস্ট পার্টিসিপল বাক্য তৈরি করুন।', en: 'Write an absolute past participle sentence.' }, sampleIt: 'Pagate le fatture, l’ufficio chiuse il bilancio.' },
      altEndingPrompt: { bn: 'নতুন এনক্রিপশন চালুর পর গ্রাহকদের বার্তা পাঠানোর অংশ লিখুন।', en: 'Write the company’s transparency note to users after upgrading encryption.' },
    },
  }),

  buildStory({
    id: 'st-b2-17', level: 'B2', titleIt: 'Lo scioglimento dei ghiacciai alpini',
    title: { bn: 'আল্পস হিমবাহ গলে যাওয়া ও বিশেষ্যরূপী ইনফিনিটিভ', en: 'Melting Alpine glaciers & nominalised infinitives' },
    topic: { bn: 'জলবায়ু সংকট ও বিশেষ্যরূপী ইনফিনিটিভ', en: 'Climate crisis & nominalised infinitives' },
    grammarIds: ['infinito-sostantivato'],
    vocabKeys: ['w:B2:persistere', 'w:B2:la manutenzione straordinaria', 'w:B2:aggravare', 'w:B2:lo scioglimento dei ghiacciai'],
    paragraphs: [
      { it: 'Il persistere delle ondate di calore estive preoccupa sempre più i glaciologi che monitorano le Alpi. L’innalzarsi costante dello zero termico sta accelerando lo scioglimento dei ghiacciai a quote un tempo considerate stabili.', tr: { bn: 'গ্রীষ্মকালীন তাপপ্রবাহের অব্যাহত স্থায়িত্ব আল্পস পর্বতমালা পর্যবেক্ষণকারী হিমবাহ বিজ্ঞানীদের ক্রমশ আরও উদ্বিগ্ন করছে। হিমাঙ্কের উচ্চতা ক্রমাগত ওপরে ওঠায় একসময় স্থিতিশীল মনে করা উচ্চতায়ও হিমবাহ গলে যাওয়া ত্বরান্বিত হচ্ছে।', en: 'The persistence of summer heatwaves increasingly worries glaciologists monitoring the Alps. The steady rise of the freezing level is accelerating glacier melt at altitudes once considered stable.' } },
      { it: 'Secondo il rapporto idrico regionale, l’aver trascurato per anni la manutenzione straordinaria degli invasi montani potrebbe aggravare la scarsità d’acqua nelle pianure agricole.', tr: { bn: 'আঞ্চলিক পানি প্রতিবেদন অনুযায়ী, পাহাড়ি জলাধারগুলোর বিশেষ সংস্কার কাজ বছরের পর বছর অবহেলা করা কৃষি সমভূমিতে পানির সংকটকে আরও গুরুতর করে তুলতে পারে।', en: 'According to the regional water report, having neglected major maintenance of mountain reservoirs for years could worsen water scarcity in agricultural plains.' } },
      { it: 'Tuttavia, il cooperare tra comuni montani e istituti di ricerca consente oggi di progettare sistemi intelligenti di accumulo e irrigazione.', tr: { bn: 'তা সত্ত্বেও, পার্বত্য পৌরসভা ও গবেষণা প্রতিষ্ঠানগুলোর পারস্পরিক সহযোগিতা আজ স্মার্ট পানি সংরক্ষণ ও সেচ ব্যবস্থা নকশা করতে সাহায্য করছে।', en: 'However, cooperation between mountain municipalities and research institutes now enables designing smart storage and irrigation systems.' } },
    ],
    wordGlossary: [
      { word: 'persistere', base: 'persistere', tr: { bn: 'স্থায়ী/অবিচল থাকা', en: 'to persist' }, pos: 'verb' },
      { word: 'manutenzione straordinaria', base: 'la manutenzione straordinaria', tr: { bn: 'বিশেষ সংস্কার কাজ', en: 'major maintenance' }, pos: 'noun' },
      { word: 'scioglimento dei ghiacciai', base: 'lo scioglimento dei ghiacciai', tr: { bn: 'হিমবাহ গলে যাওয়া', en: 'melting of glaciers' }, pos: 'noun' },
    ],
    grammarBreakdown: [
      { sentenceIt: 'Il persistere delle ondate / L’innalzarsi dello zero / L’aver trascurato la manutenzione.', ruleTitle: { bn: 'বিশেষ্যরূপী ইনফিনিটিভ', en: 'Nominalised present and past infinitive' }, explanation: { bn: 'il / l’ যোগে বর্তমান ও অতীত ইনফিনিটিভ পুং একবচন বিমূর্ত বিশেষ্যে পরিণত হয়েছে।', en: 'Article il/l’ nominalises infinitives into masculine singular subjects.' }, grammarId: 'infinito-sostantivato' },
    ],
    mcq: [
      { id: 'stb2-17-q1', prompt: { bn: 'সমভূমিতে পানির সংকট কী কারণে গুরুতর হতে পারে?', en: 'What could aggravate water scarcity on the plains?' }, options: ['অতিরিক্ত তুষারপাত', 'জলাধারের বিশেষ সংস্কার অবহেলা করা', 'নতুন সেতু নির্মাণ', 'বনাঞ্চল বৃদ্ধি'], answer: 1, explanation: { bn: 'সঠিক উত্তর: জলাধারের বিশেষ সংস্কার অবহেলা করা — পাঠ্যাংশে বলা হয়েছে: «আঞ্চলিক পানি প্রতিবেদন অনুযায়ী, পাহাড়ি জলাধারগুলোর বিশেষ সংস্কার কাজ বছরের পর বছর অবহেলা করা কৃষি সমভূমিতে পানির সংকটকে আরও গুরুতর করে তুলতে পারে।» (l’aver trascurato la manutenzione straordinaria degli invasi)।', en: 'Having neglected major maintenance of reservoirs.' } },
    ],
    trueFalse: [
      { id: 'stb2-17-tf1', statementIt: 'La cooperazione tra comuni e ricercatori permette nuove soluzioni irrigue.', statement: { bn: 'পৌরসভা ও গবেষকদের সহযোগিতা নতুন সেচ সমাধান তৈরি করছে।', en: 'Cooperation between towns and researchers enables new irrigation solutions.' }, answer: true, explanation: { bn: 'বাক্যটি সত্য — গল্পের তথ্যানুযায়ী: «তা সত্ত্বেও, পার্বত্য পৌরসভা ও গবেষণা প্রতিষ্ঠানগুলোর পারস্পরিক সহযোগিতা আজ স্মার্ট পানি সংরক্ষণ ও সেচ ব্যবস্থা নকশা করতে সাহায্য করছে।» (il cooperare consente di progettare sistemi intelligenti)।', en: 'True.' } },
    ],
    fillBlank: [
      { id: 'stb2-17-fb1', sentence: '___ firmato senza controllare ha causato un ritardo contabile.', options: ['L’aver', 'La avere', 'Gli aver', 'Avendo il'], answer: 0, explanation: { bn: 'অতীত ইনফিনিটিভ বিশেষ্য: L’aver firmato।', en: 'Nominalised past infinitive uses L’aver.' } },
    ],
    shortAnswer: [
      { id: 'stb2-17-sa1', question: { bn: 'বিজ্ঞানীদের উদ্বেগের মূল কারণ কী?', en: 'What worries glaciologists in the Alps?' }, sampleAnswerIt: 'Il persistere delle ondate di calore e lo scioglimento dei ghiacciai.', keywords: ['calore', 'ghiacciai'] },
    ],
    practice: {
      retellPrompt: { bn: 'Il persistere / L’aver + পার্টিসিপল ব্যবহার করে আল্পসের অবস্থা লিখুন।', en: 'Summarise the Alpine report using nominalised infinitives.' },
      completeMissing: { promptIt: '___ delle temperature richiede interventi immediati.', hint: { bn: 'salire বিশেষ্যরূপে: Il salire', en: 'Il salire / L’aumentare' }, sampleIt: 'Il salire delle temperature richiede interventi immediati.' },
      buildSimilar: { patternIt: 'L’aver agito subito ha salvato i dati.', prompt: { bn: 'L’aver... দিয়ে একটি কারণমূলক বাক্য লিখুন।', en: 'Write a sentence starting with L’aver + past participle.' }, sampleIt: 'L’aver investito nella prevenzione ha evitato nuovi danni.' },
      altEndingPrompt: { bn: 'স্মার্ট সেচ ব্যবস্থার প্রথম বছরের সফলতা লিখুন।', en: 'Describe the first year of smart irrigation results.' },
    },
  }),

  buildStory({
    id: 'st-b2-18', level: 'B2', titleIt: 'La precisazione dell’amministratore',
    title: { bn: 'প্রধান নির্বাহীর স্পষ্টীকরণ ও পরোক্ষ উক্তি', en: 'The CEO’s clarification & reported speech' },
    topic: { bn: 'কর্পোরেট যোগাযোগ ও পরোক্ষ উক্তিতে কাল-স্থান পরিবর্তন', en: 'Corporate briefing & deictic shifts' },
    grammarIds: ['discorso-indiretto-complesso'],
    vocabKeys: ["w:B2:l'amministratore delegato", 'w:B2:precisare'],
    paragraphs: [
      { it: 'Al termine dell’assemblea annuale, l’amministratore delegato parlò con i cronisti per smentire le voci di licenziamenti. Precisò che il piano industriale era stato approvato il giorno precedente all’unanimità.', tr: { bn: 'বার্ষিক সাধারণ সভা শেষে প্রধান নির্বাহী কর্মকর্তা কর্মী ছাঁটাইয়ের গুজব খণ্ডন করতে সাংবাদিকদের সাথে কথা বললেন। তিনি স্পষ্ট করেন যে শিল্প পরিকল্পনাটি আগের দিন সর্বসম্মতিক্রমে অনুমোদিত হয়েছিল।', en: 'At the close of the annual meeting, the CEO spoke to reporters to deny layoff rumours. He clarified that the industrial plan had been unanimously approved the previous day.' } },
      { it: 'Aggiunse inoltre che la direzione avrebbe incontrato i rappresentanti sindacali l’indomani nella sede centrale, e non lì nella sala conferenze dell’albergo.', tr: { bn: 'তিনি আরও যোগ করেন যে ব্যবস্থাপনা কর্তৃপক্ষ পরদিন প্রধান কার্যালয়ে শ্রমিক ইউনিয়ন প্রতিনিধিদের সাথে দেখা করবে, হোটেলের ওই সম্মেলন কক্ষে নয়।', en: 'He further added that management would meet union representatives the next day at headquarters, and not there in the hotel conference room.' } },
      { it: 'Un giornalista chiese allora se l’azienda avesse già previsto risorse per l’aggiornamento tecnologico, e il dirigente assicurò che quel capitolo di spesa sarebbe rimasto intatto.', tr: { bn: 'তখন একজন সাংবাদিক জিজ্ঞেস করলেন কোম্পানি ইতিমধ্যে প্রযুক্তিগত হালনাগাদের জন্য অর্থ রেখেছে কি না, এবং পরিচালক আশ্বস্ত করলেন যে ওই ব্যয় খাতটি অক্ষুণ্ণ থাকবে।', en: 'A reporter then asked whether the company had already budgeted for tech upgrades, and the executive assured him that that budget item would remain intact.' } },
    ],
    wordGlossary: [
      { word: 'amministratore delegato', base: "l'amministratore delegato", tr: { bn: 'প্রধান নির্বাহী কর্মকর্তা', en: 'CEO' }, pos: 'noun' },
      { word: 'precisare', base: 'precisare', tr: { bn: 'সুনির্দিষ্টভাবে স্পষ্ট করা', en: 'to clarify / specify' }, pos: 'verb' },
    ],
    grammarBreakdown: [
      { sentenceIt: 'Precisò che era stato approvato il giorno precedente e che si sarebbero visti l’indomani.', ruleTitle: { bn: 'পরোক্ষ উক্তিতে কাল ও নির্দেশক পরিবর্তন', en: 'Deictic and tense shifts in reported speech' }, explanation: { bn: 'ieri → il giorno precedente; domani → l’indomani; qui → lì; ভবিষ্যৎ → avrebbe + পার্টিসিপল।', en: 'Yesterday → il giorno precedente; tomorrow → l’indomani; future → past conditional.' }, grammarId: 'discorso-indiretto-complesso' },
    ],
    mcq: [
      { id: 'stb2-18-q1', prompt: { bn: 'পরদিন শ্রমিক প্রতিনিধিদের সাথে বৈঠকটি কোথায় হওয়ার কথা ছিল?', en: 'Where was the meeting with unions scheduled for the next day?' }, options: ['হোটেলের সম্মেলন কক্ষে', 'প্রধান কার্যালয়ে', 'মন্ত্রণালয়ে', 'অনলাইনে'], answer: 1, explanation: { bn: 'সঠিক উত্তর: প্রধান কার্যালয়ে — পাঠ্যাংশে বলা হয়েছে: «তিনি আরও যোগ করেন যে ব্যবস্থাপনা কর্তৃপক্ষ পরদিন প্রধান কার্যালয়ে শ্রমিক ইউনিয়ন প্রতিনিধিদের সাথে দেখা করবে, হোটেলের ওই সম্মেলন কক্ষে নয়।» (l’indomani nella sede centrale)।', en: 'At company headquarters.' } },
    ],
    trueFalse: [
      { id: 'stb2-18-tf1', statementIt: 'Il piano industriale fu respinto durante l’assemblea.', statement: { bn: 'সাধারণ সভায় শিল্প পরিকল্পনাটি প্রত্যাখ্যাত হয়েছিল।', en: 'The industrial plan was rejected at the meeting.' }, answer: false, explanation: { bn: 'era stato approvato all’unanimità = সর্বসম্মতিক্রমে অনুমোদিত হয়েছিল।', en: 'It was approved unanimously.' } },
    ],
    fillBlank: [
      { id: 'stb2-18-fb1', sentence: 'La portavoce spiegò che il decreto sarebbe uscito ___.', options: ['domani', 'l’indomani', 'ieri', 'qui'], answer: 1, explanation: { bn: 'অতীতে পরোক্ষ উক্তিতে domani → l’indomani হয়।', en: 'domani shifts to l’indomani.' } },
    ],
    shortAnswer: [
      { id: 'stb2-18-sa1', question: { bn: 'প্রধান নির্বাহী সাংবাদিকদের কাছে কোন ব্যয় খাত নিয়ে আশ্বাস দিলেন?', en: 'Which budget item did the CEO say would remain intact?' }, sampleAnswerIt: 'Le risorse per l’aggiornamento tecnologico.', keywords: ['aggiornamento', 'tecnologico'] },
    ],
    practice: {
      retellPrompt: { bn: 'পরোক্ষ উক্তির কাল ও il giorno precedente / l’indomani দিয়ে প্রেস ব্রিফিংটি লিখুন।', en: 'Report the press briefing using indirect speech shifts.' },
      completeMissing: { promptIt: 'Confermò che i soci avevano votato ___.', hint: { bn: 'ieri পরিবর্তনে: il giorno precedente', en: 'il giorno precedente' }, sampleIt: 'Confermò che i soci avevano votato il giorno precedente.' },
      buildSimilar: { patternIt: 'Disse che avrebbe inviato il file l’indomani.', prompt: { bn: 'অতীত পরোক্ষ উক্তিতে একটি ভবিষ্যৎ প্রতিশ্রুতি লিখুন।', en: 'Report a future promise in the past.' }, sampleIt: 'Il notaio precisò che avrebbe trasmesso il rogito il giorno seguente.' },
      altEndingPrompt: { bn: 'পরদিন প্রধান কার্যালয়ে ইউনিয়ন বৈঠকের ফলাফল লিখুন।', en: 'Write the outcome of the next day’s union meeting.' },
    },
  }),
];
