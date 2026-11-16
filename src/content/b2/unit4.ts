import type { Lesson, Unit } from '../types';

const lesson1: Lesson = {
  id: 'b2-u4-l1',
  number: 1,
  title: 'Istanza, bilancio e verifica empirica',
  subtitle: { bn: 'আইনি, অর্থনৈতিক, বৈজ্ঞানিক ও সাংবাদিক পরিভাষা', en: 'Legal, economic, scientific & journalistic registers' },
  minutes: 16,
  objectives: [
    { bn: 'দাপ্তরিক-আইনি (istanza, diniego, ottemperare) ও কর্পোরেট-অর্থনৈতিক (stanziare fondi, colmare il disavanzo) পরিভাষা আয়ত্ত করবেন', en: 'Master legal-administrative and financial-corporate Italian collocations' },
    { bn: 'বৈজ্ঞানিক গদ্য (verifica empirica, revisione paritaria) ও সংবাদ শিরোনামের বিশেষ্য শৈলী বিশ্লেষণ করবেন', en: 'Analyse scientific prose conventions and nominalised news headlines' },
  ],
  phrases: [
    { id: 'b2u4l1-p1', it: 'Il cittadino può presentare un’istanza di accesso agli atti tramite PEC.', tr: { bn: 'নাগরিক সার্টিফায়েড ইমেইলের মাধ্যমে নথি দেখার আবেদনপত্র জমা দিতে পারেন।', en: 'The citizen may submit an application for access to records via certified email.' } },
    { id: 'b2u4l1-p2', it: 'La diversificazione del portafoglio riduce il rischio senza compromettere il rendimento.', tr: { bn: 'পোর্টফোলিওর বহুমুখীকরণ মুনাফার ক্ষতি না করেই ঝুঁকি হ্রাস করে।', en: 'Portfolio diversification reduces risk without compromising returns.' } },
    { id: 'b2u4l1-p3', it: 'Prima della pubblicazione accademica, l’articolo supera una rigorosa revisione paritaria.', tr: { bn: 'একাডেমিক প্রকাশনার আগে নিবন্ধটি কঠোর পিয়ার রিভিউ অতিক্রম করে।', en: 'Before academic publication, the paper undergoes rigorous peer review.' } },
    { id: 'b2u4l1-p4', it: 'Caro affitti, varato il decreto: nuovi contributi per gli studenti fuori sede.', tr: { bn: 'চড়া বাড়ি ভাড়া, ডিক্রি অনুমোদিত: বাইরের শিক্ষার্থীদের জন্য নতুন অনুদান।', en: 'High rents, decree launched: new grants for out-of-town students.' } },
  ],
  grammar: [
    {
      id: 'lessico-giuridico-burocratico',
      title: { bn: 'বিশেষায়িত রেজিস্টার: আইন, অর্থনীতি, বিজ্ঞান ও সংবাদমাধ্যম', en: 'Specialized registers: law, finance, science & journalism' },
      explanation: {
        bn: 'B2 পর্যায়ে প্রসঙ্গ অনুযায়ী সঠিক শব্দজোড় (collocazioni) বেছে নেওয়া জরুরি: আইনি ক্ষেত্রে istanza (= domanda) ও diniego (= rifiuto); অর্থনীতিতে stanziare fondi ও fatturato annuo; বিজ্ঞানে verifica empirica ও nesso causale; সংবাদপত্রের শিরোনামে ক্রিয়া-উহ্য বিশেষ্য শৈলী।',
        en: 'At B2, precision relies on domain collocations: istanza/diniego in law, stanziare fondi/disavanzo in finance, verifica empirica/nesso causale in science, and elliptical nominal headlines in journalism.',
      },
      table: [
        { label: 'Giuridico', it: 'presentare un’istanza / opporre un diniego / altresì', tr: { bn: 'আবেদন করা / প্রত্যাখ্যান করা / এছাড়াও', en: 'submit application / issue refusal / also' } },
        { label: 'Economico', it: 'colmare il disavanzo / ammortizzare i costi', tr: { bn: 'ঘাটতি পূরণ / ব্যয় সমন্বয়', en: 'close deficit / amortise costs' } },
        { label: 'Scientifico', it: 'campione rappresentativo / revisione paritaria', tr: { bn: 'প্রতিনিধিত্বমূলক নমুনা / পিয়ার রিভিউ', en: 'representative sample / peer review' } },
      ],
      examples: [
        { id: 'b2u4l1-e1', it: 'Il giornalismo d’inchiesta resta un presidio imprescindibile per la libertà di stampa.', tr: { bn: 'অনুসন্ধানী সাংবাদিকতা সংবাদপত্রের স্বাধীনতার জন্য অপরিহার্য রক্ষাকবচ।', en: 'Investigative journalism remains an indispensable safeguard for press freedom.' } },
      ],
    },
  ],
  dialogue: {
    title: { bn: 'দাপ্তরিক বিজ্ঞপ্তির সরলীকরণ', en: 'Translating bureaucratic prose into plain Italian' },
    context: { bn: 'সম্পাদক দাউদ ও কর্মকর্তা সোফিয়া পৌরসভার ওয়েবসাইটের নির্দেশনা সহজ করছেন।', en: 'Editor Daud and officer Sofia simplify municipal portal instructions.' },
    lines: [
      { speaker: 'Daud', it: 'Sofia, molti cittadini faticano a capire questa frase: «L’istanza va inoltrata all’uopo entro e non oltre trenta giorni».', tr: { bn: 'সোফিয়া, অনেক নাগরিক এই বাক্যটি বুঝতে হিমশিম খান: «L’istanza va inoltrata all’uopo entro e non oltre trenta giorni»।', en: 'Sofia, many citizens struggle with this sentence: "The application must be forwarded for such purpose no later than 30 days".' } },
      { speaker: 'Sofia', it: 'Hai ragione: sostituiamola con «La domanda va inviata entro trenta giorni», mantenendo però il link alla normativa vigente.', tr: { bn: 'ঠিক বলেছ: চলো প্রচলিত বিধিমালার লিংক রেখেই এটিকে «আবেদনটি ত্রিশ দিনের মধ্যে পাঠাতে হবে» দিয়ে প্রতিস্থাপন করি।', en: 'You’re right: let’s replace it with "The application must be sent within 30 days", keeping the link to the regulations in force.' } },
      { speaker: 'Daud', it: 'Perfetto! Anche la trasparenza amministrativa migliora quando l’italiano è chiaro e accessibile.', tr: { bn: 'চমৎকার! ইতালিয়ান ভাষা স্পষ্ট ও সহজগম্য হলে প্রশাসনিক স্বচ্ছতাও বাড়ে।', en: 'Perfect! Administrative transparency also improves when Italian is clear and accessible.' } },
    ],
  },
  quiz: [
    { id: 'q1', prompt: { bn: 'দাপ্তরিক শব্দ "diniego"-এর সাধারণ ইতালিয়ান অর্থ কী?', en: 'What is the plain-language equivalent of "diniego"?' }, it: 'L’ufficio ha opposto un diniego alla richiesta.', options: ['risposta positiva', 'rifiuto', 'allegato', 'rimborso'], answer: 1, explanation: { bn: 'diniego = প্রত্যাখ্যান (rifiuto)।', en: 'diniego means refusal.' } },
    { id: 'q2', prompt: { bn: 'তহবিল বরাদ্দ করার সঠিক অর্থনৈতিক ক্রিয়া:', en: 'Choose the exact verb for allocating funds:' }, it: 'Il consiglio ha deciso di ___ cinque milioni per la ricerca.', options: ['stanziare', 'abrogare', 'stagionare', 'eludere'], answer: 0, explanation: { bn: 'অর্থ বা তহবিল বরাদ্দ করা = stanziare।', en: 'stanziare means to allocate funds.' } },
    { id: 'q3', prompt: { bn: 'বৈজ্ঞানিক নিবন্ধ প্রকাশের আগে যাচাই প্রক্রিয়া:', en: 'How are academic papers vetted before publication?' }, it: 'La rivista adotta una rigorosa ___.', options: ['revisione paritaria', 'visura catastale', 'bolla informativa', 'prescrizione'], answer: 0, explanation: { bn: 'revisione paritaria = পিয়ার রিভিউ।', en: 'revisione paritaria means peer review.' } },
    { id: 'q4', prompt: { bn: '«Siccità, allarme raccolti» শিরোনামের শৈলী:', en: 'Identify the style of the headline "Siccità, allarme raccolti":' }, it: 'Quale tecnica usa questo titolo?', options: ['Stile nominale con ellissi del verbo', 'Discorso indiretto libero', 'Periodo ipotetico misto', 'Passato remoto'], answer: 0, explanation: { bn: 'সংবাদ শিরোনামে ক্রিয়া বাদ দিয়ে বিশেষ্য শৈলী ব্যবহৃত হয়।', en: 'Headlines use elliptical nominal syntax.' } },
  ],
  tip: { bn: 'বৈজ্ঞানিক লেখায় «correlazione» ও «nesso causale» গুলিয়ে ফেলবেন না: দুটি ঘটনার একসাথে ঘটা মানেই একটি অন্যটির কারণ নয়।', en: 'In academic Italian, distinguish correlazione statistica from nesso causale (causal link).' },
};

const lesson2: Lesson = {
  id: 'b2-u4-l2',
  number: 2,
  title: 'Un contributo non trascurabile',
  subtitle: { bn: 'অলংকার, যতিচিহ্নের শৈলী ও অ্যানাফোরিক সংহতি', en: 'Rhetorical figures, logical punctuation & anaphoric cohesion' },
  minutes: 15,
  objectives: [
    { bn: 'লিটোটেস (non trascurabile), রূপক (fuga dei cervelli) ও অক্সিমোরনের সূক্ষ্ম অর্থ বুঝবেন', en: 'Interpret litotes, lexicalised metaphors, and rhetorical nuances accurately' },
    { bn: 'সেমিকোলন, কোলন ও সারসংক্ষেপক সর্বনাম/পদগুচ্ছ (tale fenomeno, quest’ultimo) দিয়ে পুনরাবৃত্তিমুক্ত অনুচ্ছেদ লিখবেন', en: 'Use logical punctuation and anaphoric encapsulators to build cohesive prose' },
  ],
  phrases: [
    { id: 'b2u4l2-p1', it: 'Un contributo non trascurabile alla ripresa economica è giunto dal turismo sostenibile.', tr: { bn: 'অর্থনৈতিক পুনরুদ্ধারে টেকসই পর্যটন থেকে অতি উল্লেখযোগ্য অবদান এসেছে।', en: 'A not negligible (= major) contribution to recovery came from sustainable tourism.' } },
    { id: 'b2u4l2-p2', it: 'L’investimento iniziale è elevato; tuttavia l’ammortamento avverrà in tre anni.', tr: { bn: 'প্রাথমিক বিনিয়োগ বেশি; তবে তিন বছরের মধ্যেই খরচ উঠে আসবে।', en: 'Initial investment is high; however amortisation will occur within three years.' } },
    { id: 'b2u4l2-p3', it: 'Il governo ha varato il decreto e istituito una cabina di regia; quest’ultima vigilerà.', tr: { bn: 'সরকার ডিক্রি জারি করে একটি নিয়ন্ত্রণ কক্ষ গঠন করেছে; এই শেষোক্তটি তদারকি করবে।', en: 'The government passed the decree and set up a steering committee; the latter will oversee.' } },
    { id: 'b2u4l2-p4', it: 'Molti laureati emigrano; tale fenomeno impoverisce il tessuto scientifico nazionale.', tr: { bn: 'অনেক স্নাতক বিদেশে পাড়ি জমান; এই প্রবণতা জাতীয় বৈজ্ঞানিক কাঠামোকে দুর্বল করে।', en: 'Many graduates emigrate; such a phenomenon weakens the national research fabric.' } },
  ],
  grammar: [
    {
      id: 'coesione-anaforica',
      title: { bn: 'অলংকার, যতিচিহ্ন ও অ্যানাফোরিক সংহতি', en: 'Rhetoric, punctuation & anaphoric encapsulators' },
      explanation: {
        bn: 'কোলন (:) কারণ বা ব্যাখ্যা যুক্ত করে; সেমিকোলন (;) pertanto বা tuttavia-র আগে সমমানের খণ্ডবাক্য আলাদা করে। একই শব্দ বারবার না লিখে পূর্ববর্তী বাক্যকে tale fenomeno, siffatta ipotesi বা quest’ultimo দিয়ে সংক্ষেপে নির্দেশ করা B2-এর উচ্চতর সংহতি কৌশল।',
        en: 'Colons introduce explanation or cause; semicolons precede formal connectors like tuttavia/pertanto. Anaphoric encapsulators (tale provvedimento, siffatta tutela, quest’ultimo) avoid repetition.',
      },
      table: [
        { label: 'Litote', it: 'Un esito non indifferente (= molto notevole)', tr: { bn: 'সামান্য নয় এমন ফল (= অত্যন্ত গুরুত্বপূর্ণ)', en: 'not inconsiderable (= very significant)' } },
        { label: 'Due punti / ;', it: 'Non basta dirlo: serve provarlo; tuttavia…', tr: { bn: 'কারণ ও যৌক্তিক সংযোগ চিহ্ন', en: 'causality and clause coordination' } },
        { label: 'Incapsulatore', it: 'I prezzi calano. Tale riduzione aiuta i consumi', tr: { bn: 'পূর্বের ঘটনাকে বিশেষ্যে ধরে রাখা', en: 'encapsulating prior clause' } },
      ],
      examples: [
        { id: 'b2u4l2-e1', it: 'Non abbiamo accolto il ricorso: mancava la firma autenticata nell’ultima pagina.', tr: { bn: 'আমরা আপিল গ্রহণ করিনি: শেষ পাতায় সত্যায়িত স্বাক্ষর ছিল না।', en: 'We did not uphold the appeal: the authenticated signature was missing on the last page.' } },
      ],
    },
  ],
  dialogue: {
    title: { bn: 'সম্পাদকীয় প্রবন্ধের সংহতি পরিমার্জনা', en: 'Refining essay cohesion' },
    context: { bn: 'কলামিস্ট লোরেনৎসো ও সম্পাদক তানিয়া একটি নীতি-নিবন্ধ চূড়ান্ত করছেন।', en: 'Columnist Lorenzo and editor Tania finalise an editorial essay.' },
    lines: [
      { speaker: 'Lorenzo', it: 'Tania, ho scritto due volte la parola «inquinamento» in righe consecutive. Come posso evitarlo?', tr: { bn: 'তানিয়া, পরপর দুই লাইনে আমি «inquinamento» শব্দটি দুইবার লিখে ফেলেছি। কীভাবে এটা এড়াতে পারি?', en: 'Tania, I wrote "inquinamento" twice in consecutive lines. How can I avoid it?' } },
      { speaker: 'Tania', it: 'Usa un incapsulatore anaforico nella seconda frase: «Tale fenomeno critico incide sulla salute respiratoria».', tr: { bn: 'দ্বিতীয় বাক্যে একটি সংহতিসূচক পদগুচ্ছ ব্যবহার করো: «এই সংকটপূর্ণ প্রবণতাটি শ্বাসতন্ত্রের স্বাস্থ্যের ওপর প্রভাব ফেলে»।', en: 'Use an anaphoric encapsulator in the second sentence: "Such a critical phenomenon affects respiratory health".' } },
      { speaker: 'Lorenzo', it: 'Geniale! E al posto di «molto grave», una litote elegante come «non trascurabile» rende il tono più misurato.', tr: { bn: 'দারুণ! আর «খুব গুরুতর»-এর বদলে «উপেক্ষা করার মতো নয়» ধরনের মার্জিত লিটোটেস সুরটিকে আরও সংযত করে।', en: 'Brilliant! And instead of "very serious", an understated litotes like "not negligible" makes the tone more measured.' } },
    ],
  },
  quiz: [
    { id: 'q1', prompt: { bn: '«Un esito non trascurabile» বলতে কী বোঝায়?', en: 'What does the litotes "un esito non trascurabile" convey?' }, it: 'Scegli il significato reale:', options: ['Un esito irrilevante', 'Un esito importante e notevole', 'Un esito annullato', 'Un esito segreto'], answer: 1, explanation: { bn: 'লিটোটেসে নেতিবাচকের মাধ্যমে জোরালো ইতিবাচক অর্থ প্রকাশ পায়।', en: 'Litotes negates the opposite to intensify meaning.' } },
    { id: 'q2', prompt: { bn: 'পূর্ববর্তী সর্বশেষ স্ত্রীলিঙ্গ বিশেষ্য নির্দেশ করতে কোনটি বসে?', en: 'Refer to the latter of two nouns (cabina di regia, f. sg.):' }, it: 'Il decreto istituisce una cabina di regia; ___ controllerà i cantieri.', options: ['quest’ultimo', 'quest’ultima', 'tali', 'esso'], answer: 1, explanation: { bn: 'cabina di regia স্ত্রী একবচন হওয়ায় quest’ultima বসে।', en: 'Feminine singular cabina takes quest’ultima.' } },
    { id: 'q3', prompt: { bn: 'মধ্যবর্তী সংযোজক tuttavia-র সঠিক যতিচিহ্ন কোনটি?', en: 'Select the properly punctuated sentence:' }, it: 'Indica la frase corretta:', options: ['Il piano, tuttavia, richiede fondi.', 'Il piano tuttavia, richiede, fondi.', 'Il piano, richiede fondi.', 'Il piano: tuttavia, richiede fondi.'], answer: 0, explanation: { bn: 'বাক্যের মাঝখানে বসা tuttavia জোড়া কমায় আবদ্ধ থাকে।', en: 'Parenthetical tuttavia takes paired commas.' } },
    { id: 'q4', prompt: { bn: 'পূর্বের পুরো একটি বাক্যকে সংক্ষেপে ধরে রাখার কৌশল:', en: 'Which phrase acts as an anaphoric encapsulator?' }, it: 'Le spese aumentano. ___ preoccupa le famiglie.', options: ['Tale tendenza', 'Per quanto', 'All’uopo', 'Benchè'], answer: 0, explanation: { bn: 'Tale tendenza পূর্বের ঘটনাকে বিমূর্ত বিশেষ্যে সংহতি দেয়।', en: 'Tale tendenza encapsulates the previous sentence.' } },
  ],
  tip: { bn: 'ভালো ইতালিয়ান প্রবন্ধে কমা কখনোই কর্তা ও ক্রিয়ার মাঝখানে একা বসে না — সবসময় জোড়া কমায় অতিরিক্ত তথ্য আলাদা করুন।', en: 'Never put a single comma between subject and verb — use paired commas only to enclose parenthetical remarks.' },
};

const lesson3: Lesson = {
  id: 'b2-u4-l3',
  number: 3,
  title: 'Mi permetterei di osservare che…',
  subtitle: { bn: 'ভাষার রূপভেদ, কূটনৈতিক শিষ্টাচার ও যুক্তিনির্ভর প্রবন্ধের কাঠামো', en: 'Language varieties, diplomatic hedging & essay architecture' },
  minutes: 17,
  objectives: [
    { bn: 'প্রমিত লিখিত (italiano standard formale) এবং শিক্ষিত কথ্য (neostandard) ইতালিয়ানের পার্থক্য বজায় রাখবেন', en: 'Distinguish formal written standard from educated neostandard Italian' },
    { bn: 'বিতর্কে ভদ্র দ্বিমত (mitigazione) ও চার ধাপের যুক্তিনির্ভর প্রবন্ধ (tesi, argomenti, antitesi/confutazione, sintesi) রচনা করবেন', en: 'Apply diplomatic hedging and build 4-part B2 argumentative essays' },
  ],
  phrases: [
    { id: 'b2u4l3-p1', it: 'Pur comprendendo le Sue perplessità, mi permetterei di sottolineare i vantaggi a lungo termine.', tr: { bn: 'আপনার সংশয় বুঝতে পারলেও আমি দীর্ঘমেয়াদি সুবিধাগুলোর ওপর জোর দেওয়ার অনুমতি চাইব।', en: 'While understanding your reservations, I would venture to emphasise the long-term benefits.' } },
    { id: 'b2u4l3-p2', it: 'Chi osteggia tale misura sostiene che freni il commercio; tuttavia i dati smentiscono tale timore.', tr: { bn: 'যাঁরা এই পদক্ষেপের বিরোধিতা করেন তাঁরা বলেন এটি ব্যবসা ধীর করে; তবে তথ্য সেই আশঙ্কা খণ্ডন করে।', en: 'Those who oppose this measure claim it slows trade; however data refute that fear.' } },
    { id: 'b2u4l3-p3', it: 'Nel registro formale scriviamo «comunicammo loro», mentre nel parlato prevale «gli abbiamo detto».', tr: { bn: 'আনুষ্ঠানিক রীতিতে আমরা লিখি «comunicammo loro», আর কথ্যে «gli abbiamo detto» প্রাধান্য পায়।', en: 'In formal writing we use "comunicammo loro", while "gli abbiamo detto" prevails in speech.' } },
    { id: 'b2u4l3-p4', it: 'In definitiva, solo un approccio integrato consentirà di conciliare crescita e tutela ambientale.', tr: { bn: 'সব মিলিয়ে, কেবল একটি সমন্বিত দৃষ্টিভঙ্গিই প্রবৃদ্ধি ও পরিবেশ সুরক্ষার মধ্যে সমন্বয় ঘটাতে সক্ষম হবে।', en: 'All in all, only an integrated approach will reconcile growth and environmental protection.' } },
  ],
  grammar: [
    {
      id: 'argomentazione-saggio-b2',
      title: { bn: 'কূটনৈতিক শিষ্টাচার ও যুক্তিনির্ভর প্রবন্ধের চার স্তম্ভ', en: 'Diplomatic hedging & argumentative essay architecture' },
      explanation: {
        bn: 'B2 বিতর্ক ও প্রবন্ধে সরাসরি আক্রমণাত্মক ভাষা না লিখে Pur condividendo…, mi permetterei di osservare che… ব্যবহার করা হয়। প্রবন্ধে অবশ্যই প্রতিপক্ষের যুক্তি (antitesi) উল্লেখ করে তা তথ্য দিয়ে খণ্ডন (confutazione) করতে হয়।',
        en: 'Mitigate disagreement with conditionals and concessives. Structure essays clearly: thesis → supporting arguments → counter-argument & refutation → synthesis.',
      },
      table: [
        { label: 'Mitigazione', it: 'Non crede che sarebbe più prudente verificare?', tr: { bn: 'যাচাই করা কি বেশি বিচক্ষণতার কাজ হবে না?', en: 'Don’t you think it would be wiser to check?' } },
        { label: 'Antitesi', it: 'Se da un lato si obietta che…, dall’altro…', tr: { bn: 'একদিকে যেমন আপত্তি ওঠে…, অন্যদিকে…', en: 'While on one hand it is objected…, on the other…' } },
        { label: 'Registro', it: 'Qualora ottemperino (form.) vs Se fanno (coll.)', tr: { bn: 'আনুষ্ঠানিক বনাম কথ্য রীতি', en: 'Formal standard vs spoken neostandard' } },
      ],
      examples: [
        { id: 'b2u4l3-e1', it: 'È pur vero che la transizione ha costi iniziali, ma il costo dell’inazione sarebbe superiore.', tr: { bn: 'এটা ঠিক যে রূপান্তরে প্রাথমিক ব্যয় রয়েছে, কিন্তু নিষ্ক্রিয় থাকার মূল্য আরও বেশি হবে।', en: 'It is indeed true that transition has initial costs, yet the cost of inaction would be higher.' } },
      ],
    },
  ],
  dialogue: {
    title: { bn: 'পরিচালনা পর্ষদে কূটনৈতিক দ্বিমত', en: 'Diplomatic disagreement in a board meeting' },
    context: { bn: 'বোর্ড সভায় মিসেস কার্লোত্তি ও পরামর্শক মিরাজ বাজেট প্রস্তাব পর্যালোচনা করছেন।', en: 'Ms Carlotti and consultant Miraj discuss a budget proposal at a board meeting.' },
    lines: [
      { speaker: 'Carlotti', it: 'Secondo la nostra stima, l’intero progetto informatico sarà completato in due soli mesi.', tr: { bn: 'আমাদের হিসাব অনুযায়ী, পুরো আইটি প্রকল্পটি মাত্র দুই মাসেই সম্পন্ন হবে।', en: 'According to our estimate, the entire IT project will be completed in just two months.' } },
      { speaker: 'Miraj', it: 'Apprezzo molto il Suo entusiasmo; tuttavia mi permetterei di osservare che tale stima appare leggermente ottimistica.', tr: { bn: 'আপনার আগ্রহের আমি প্রশংসা করি; তবে আমি বিনীতভাবে উল্লেখ করতে চাইব যে এই অনুমানটি সামান্য বেশি আশাবাদী মনে হচ্ছে।', en: 'I greatly appreciate your enthusiasm; however I would venture to note that this estimate appears slightly optimistic.' } },
      { speaker: 'Carlotti', it: 'Comprendo le Sue riserve. Non crede allora che sarebbe opportuno prevedere una fase pilota di verifica?', tr: { bn: 'আপনার সংশয় বুঝতে পারছি। তবে কি একটি পরীক্ষামূলক যাচাই পর্ব রাখা সমীচীন হবে বলে মনে করেন না?', en: 'I understand your reservations. Don’t you think then that it would be appropriate to include a pilot verification phase?' } },
    ],
  },
  quiz: [
    { id: 'q1', prompt: { bn: 'সবচেয়ে কূটনৈতিক ও মার্জিত দ্বিমত প্রকাশ কোনটি?', en: 'Select the most diplomatic expression of disagreement:' }, it: 'Quale frase è adeguata a una riunione B2?', options: ['La Sua idea è assurda.', 'Pur comprendendo la Sua posizione, temo vi siano criticità.', 'Ha torto su tutta la linea.', 'Non capisce i numeri.'], answer: 1, explanation: { bn: 'Pur comprendendo... temo... সৌজন্য ও যুক্তির ভারসাম্য রাখে।', en: 'Concessive preface + temo mitigates criticism politely.' } },
    { id: 'q2', prompt: { bn: 'কোন বাক্যটি প্রমিত একাডেমিক রীতির উপযোগী?', en: 'Which sentence suits formal academic writing?' }, it: 'Scegli il registro standard:', options: ['A me mi sembra giusto così.', 'Gli ho detto ai docenti.', 'Abbiamo comunicato loro la delibera.', 'Se lo sapevo prima, venivo.'], answer: 2, explanation: { bn: 'তৃতীয় বহুবচনে আনুষ্ঠানিক লেখায় loro এবং পরিষ্কার বাক্যগঠন ব্যবহৃত হয়।', en: 'Formal standard uses comunicato loro.' } },
    { id: 'q3', prompt: { bn: 'প্রবন্ধে প্রতিপক্ষের যুক্তি খণ্ডন করাকে কী বলে?', en: 'What is refuting a counter-argument called?' }, it: 'Il termine tecnico è:', options: ['la confutazione', 'la stagionatura', 'l’alluvione', 'la visura'], answer: 0, explanation: { bn: 'la confutazione = যুক্তি খণ্ডন।', en: 'la confutazione means refutation.' } },
    { id: 'q4', prompt: { bn: 'চূড়ান্ত উপসংহার টানার আনুষ্ঠানিক সংযোজক:', en: 'Select the formal closing connector:' }, it: '___, solo un impegno condiviso garantirà risultati duraturi.', options: ['In definitiva', 'Tant’è vero', 'Benché', 'Magari'], answer: 0, explanation: { bn: 'In definitiva / In ultima analisi উপসংহারে ব্যবহৃত হয়।', en: 'In definitiva concludes an argument.' } },
  ],
  tip: { bn: 'CILS / CELI B2 রচনায় সর্বদা অন্তত একটি প্রতিযুক্তি («Se da un lato si obietta che…») এবং তথ্যনির্ভর খণ্ডন («dall’altro i dati mostrano che…») যুক্ত করবেন।', en: 'In B2 exams (CILS/CELI), always include at least one counter-argument and a calm, evidence-based refutation.' },
};

export const b2Unit4: Unit = {
  id: 'b2-u4',
  number: 4,
  title: 'Registri, media e argomentazione',
  subtitle: { bn: 'বিশেষায়িত পরিভাষা, অলংকার, সংহতি ও কূটনৈতিক প্রবন্ধ রচনা', en: 'Specialized registers, rhetoric, cohesion & diplomatic argumentation' },
  lessons: [lesson1, lesson2, lesson3],
};
