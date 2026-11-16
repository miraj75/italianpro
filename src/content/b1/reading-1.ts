import type { ReadingPassage } from '../academyTypes';
import { buildReading } from '../builders';

export const B1_READING_1: ReadingPassage[] = [
  buildReading({
    id: 'rd-b1-01', level: 'B1', kind: 'article', titleIt: 'Spazi verdi e partecipazione attiva', title: { bn: 'সবুজ প্রাঙ্গণ ও নাগরিক অংশগ্রহণ', en: 'Green spaces and active participation' },
    storyId: 'st-b1-01',
    paragraphs: [
      { it: 'Sempre più amministrazioni locali ritengono che la rigenerazione urbana debba partire dai bisogni reali di chi abita nei quartieri. Trasformare aree dismesse in giardini e sale studio migliora la coesione sociale.', tr: { bn: 'ক্রমশ আরও বেশি স্থানীয় প্রশাসন মনে করে যে নগর পুনর্গঠন শুরু হওয়া উচিত পাড়ার বাসিন্দাদের প্রকৃত চাহিদা থেকে। পরিত্যক্ত স্থানগুলোকে বাগান ও পড়ার ঘরে রূপান্তর করা সামাজিক সংহতি বাড়ায়।', en: 'More and more local administrations believe urban regeneration should start from the real needs of neighbourhood residents. Turning disused areas into gardens and study rooms improves social cohesion.' } },
      { it: 'È fondamentale che ogni cittadino partecipi alle assemblee pubbliche e presenti proposte concrete per il bene comune.', tr: { bn: 'জনকল্যাণে প্রতিটি নাগরিকের উন্মুক্ত সভায় অংশ নেওয়া এবং সুনির্দিষ্ট প্রস্তাব পেশ করা অপরিহার্য।', en: 'It is fundamental that every citizen participate in public assemblies and put forward concrete proposals for the common good.' } },
    ],
    vocabHighlights: [{ it: 'rigenerazione urbana', tr: { bn: 'নগর পুনর্গঠন', en: 'urban regeneration' } }, { it: 'coesione sociale', tr: { bn: 'সামাজিক সংহতি', en: 'social cohesion' } }],
    grammarHighlights: [{ excerpt: 'ritengono che… debba partire', note: { bn: 'ritenere che + congiuntivo presente (debba)।', en: 'ritenere che triggers present subjunctive debba.' }, grammarId: 'congiuntivo' }],
    relatedGrammarIds: ['congiuntivo', 'opinione'],
    questions: [
      { id: 'rd-b1-01-q1', prompt: { bn: 'পরিত্যক্ত স্থানগুলোকে কিসে রূপান্তর করার কথা বলা হয়েছে?', en: 'What are disused areas turned into?' }, options: ['বাগান ও পড়ার ঘর', 'শপিং মল', 'পার্কিং লট', 'কারখানা'], answer: 0, explanation: { bn: 'in giardini e sale studio।', en: 'Into gardens and study rooms.' } },
    ],
  }),
  buildReading({
    id: 'rd-b1-02', level: 'B1', kind: 'opinion', titleIt: 'Il futuro del lavoro ibrido', title: { bn: 'মিশ্র কর্মপদ্ধতির ভবিষ্যৎ', en: 'The future of hybrid work' },
    storyId: 'st-b1-02',
    paragraphs: [
      { it: 'Se le aziende adottassero stabilmente due giorni di lavoro agile a settimana, i dipendenti risparmierebbero ore preziose nel traffico e lavorerebbero con maggiore serenità.', tr: { bn: 'কোম্পানিগুলো যদি স্থায়ীভাবে সপ্তাহে দুই দিন দূরবর্তী কাজ চালু করত, কর্মীরা যানজটে ব্যয় হওয়া মূল্যবান সময় বাঁচাত এবং আরও প্রশান্তির সাথে কাজ করত।', en: 'If companies permanently adopted two days of flexible remote work a week, employees would save precious hours in traffic and work with greater peace of mind.' } },
      { it: 'Allo stesso tempo, mantenere tre giorni in presenza permette di rafforzare lo spirito di squadra e scambiare idee rapidamente.', tr: { bn: 'একই সময়ে তিন দিন সশরীরে উপস্থিতি বজায় রাখলে দলগত চেতনা মজবুত হয় এবং দ্রুত ধারণা বিনিময় করা যায়।', en: 'At the same time, keeping three days in person helps strengthen team spirit and exchange ideas quickly.' } },
    ],
    vocabHighlights: [{ it: 'lavoro agile', tr: { bn: 'নমনীয়/দূরবর্তী কাজ', en: 'flexible/remote work' } }, { it: 'in presenza', tr: { bn: 'সশরীরে উপস্থিত থেকে', en: 'in person' } }],
    grammarHighlights: [{ excerpt: 'Se le aziende adottassero… risparmierebbero', note: { bn: '২য় প্রকার শর্তমূলক বাক্য।', en: 'Second conditional structure.' }, grammarId: 'periodo-ipotetico' }],
    relatedGrammarIds: ['periodo-ipotetico', 'periodo-ipotetico-2'],
    questions: [
      { id: 'rd-b1-02-q1', prompt: { bn: 'সশরীরে অফিসে উপস্থিত থাকলে কী সুবিধা হয়?', en: 'What is the benefit of keeping days in the office?' }, options: ['দলগত চেতনা মজবুত হয় ও দ্রুত ধারণা বিনিময় হয়', 'যাতায়াত খরচ কমে', 'কম ঘণ্টা কাজ করতে হয়', 'ছুটি বাড়ে'], answer: 0, explanation: { bn: 'rafforzare lo spirito di squadra e scambiare idee।', en: 'Strengthening team spirit and exchanging ideas.' } },
    ],
  }),
  buildReading({
    id: 'rd-b1-03', level: 'B1', kind: 'letter', titleIt: 'Lettera a un amico dopo la laurea', title: { bn: 'স্নাতক শেষে বন্ধুকে চিঠি', en: 'Letter to a friend after graduation' },
    storyId: 'st-b1-03',
    paragraphs: [
      { it: 'Caro Matteo, finalmente ieri ho discusso la tesi! Sapevo che gli anni del politecnico sarebbero stati impegnativi, ma non pensavo che il tempo sarebbe volato così in fretta.', tr: { bn: 'প্রিয় মাত্তেও, অবশেষে গতকাল আমি থিসিস উপস্থাপন করেছি! জানতাম পলিটেকনিকের বছরগুলো পরিশ্রমের হবে, কিন্তু ভাবিনি সময় এত দ্রুত উড়ে যাবে।', en: 'Dear Matteo, yesterday I finally defended my thesis! I knew the polytechnic years would be demanding, but I did not think time would fly by so fast.' } },
      { it: 'Avrei voluto festeggiare anche con te ieri sera; spero che tu possa venire a trovarmi a Torino il mese prossimo.', tr: { bn: 'গতকাল রাতে তোমার সাথেও উদযাপন করতে চেয়েছিলাম; আশা করি আগামী মাসে তুমি তুরিনে আমাকে দেখতে আসতে পারবে।', en: 'I would have liked to celebrate with you too last night; I hope you can come visit me in Turin next month.' } },
    ],
    vocabHighlights: [{ it: 'discutere la tesi', tr: { bn: 'থিসিস উপস্থাপন করা', en: 'to defend one’s thesis' } }, { it: 'volare in fretta', tr: { bn: 'দ্রুত কেটে যাওয়া', en: 'to fly by quickly' } }],
    grammarHighlights: [{ excerpt: 'sarebbero stati / sarebbe volato', note: { bn: 'অতীতের সাপেক্ষে ভবিষ্যৎ বোঝাতে condizionale passato।', en: 'Past conditional for future-in-the-past.' }, grammarId: 'condizionale-passato' }],
    relatedGrammarIds: ['condizionale-passato', 'congiuntivo'],
    questions: [
      { id: 'rd-b1-03-q1', prompt: { bn: 'লেখক গতকাল কী করেছেন?', en: 'What did the writer do yesterday?' }, options: ['ভর্তি পরীক্ষা দিয়েছেন', 'থিসিস উপস্থাপন করেছেন', 'শহর বদলেছেন', 'চাকরি শুরু করেছেন'], answer: 1, explanation: { bn: 'ho discusso la tesi।', en: 'Defended his thesis.' } },
    ],
  }),
  buildReading({
    id: 'rd-b1-04', level: 'B1', kind: 'story', titleIt: 'La biblioteca storica del quartiere', title: { bn: 'পাড়ার ঐতিহাসিক গ্রন্থাগার', en: 'The neighbourhood historical library' },
    storyId: 'st-b1-04',
    paragraphs: [
      { it: 'Quando sono entrato nella sala lettura ristrutturata, ho riconosciuto subito i grandi tavoli di quercia su cui avevo preparato gli esami molti anni prima.', tr: { bn: 'সংস্কার করা পাঠকক্ষে যখন ঢুকলাম, সাথে সাথেই চিনতে পারলাম সেই বড় ওক কাঠের টেবিলগুলো যেখানে অনেক বছর আগে আমি পরীক্ষার প্রস্তুতি নিয়েছিলাম।', en: 'When I entered the renovated reading room, I immediately recognised the large oak tables at which I had prepared for exams many years earlier.' } },
      { it: 'I bibliotecari avevano catalogato migliaia di volumi antichi che i cittadini avevano donato nel corso dei decenni.', tr: { bn: 'গ্রন্থাগারিকেরা হাজার হাজার প্রাচীন বই তালিকাভুক্ত করেছিলেন যা নাগরিকেরা দশকের পর দশক ধরে দান করেছিলেন।', en: 'The librarians had catalogued thousands of old volumes that citizens had donated over the decades.' } },
    ],
    vocabHighlights: [{ it: 'sala lettura', tr: { bn: 'পাঠকক্ষ', en: 'reading room' } }, { it: 'catalogare', tr: { bn: 'তালিকাভুক্ত করা', en: 'to catalogue' } }],
    grammarHighlights: [{ excerpt: 'avevo preparato / avevano donato', note: { bn: 'trapassato prossimo পূর্ববর্তী অতীত কাজ বোঝায়।', en: 'Pluperfect marks earlier past actions.' }, grammarId: 'trapassato' }],
    relatedGrammarIds: ['trapassato', 'relativi'],
    questions: [
      { id: 'rd-b1-04-q1', prompt: { bn: 'প্রাচীন বইগুলো কারা দান করেছিলেন?', en: 'Who had donated the old volumes?' }, options: ['নাগরিকেরা (i cittadini)', 'বিদেশি পর্যটকেরা', 'বইয়ের দোকান', 'স্কুল'], answer: 0, explanation: { bn: 'che i cittadini avevano donato।', en: 'The citizens.' } },
    ],
  }),
  buildReading({
    id: 'rd-b1-05', level: 'B1', kind: 'article', titleIt: 'Scegliere casa vicino ai trasporti', title: { bn: 'পরিবহনের কাছে বাসা নির্বাচন', en: 'Choosing a home near transport' },
    storyId: 'st-b1-05',
    paragraphs: [
      { it: 'La vicinanza alle stazioni ferroviarie e alle linee della metropolitana è il criterio principale a cui guardano le famiglie che cercano casa in città.', tr: { bn: 'রেলস্টেশন ও মেট্রো লাইনের নৈকট্যই হলো প্রধান মানদণ্ড যার দিকে শহরে বাসা খোঁজা পরিবারগুলো তাকায়।', en: 'Proximity to railway stations and metro lines is the main criterion families looking for a home in the city consider.' } },
      { it: 'Un quartiere in cui si trovano negozi di prossimità, scuole e parchi permette di ridurre l’uso dell’automobile privata.', tr: { bn: 'যে পাড়ায় হাতের কাছেই দোকান, স্কুল ও পার্ক পাওয়া যায় তা ব্যক্তিগত গাড়ির ব্যবহার কমাতে সাহায্য করে।', en: 'A neighbourhood in which local shops, schools, and parks are found makes it possible to reduce private car use.' } },
    ],
    vocabHighlights: [{ it: 'criterio', tr: { bn: 'মানদণ্ড', en: 'criterion' } }, { it: 'negozi di prossimità', tr: { bn: 'পাড়ার কাছের দোকান', en: 'local neighbourhood shops' } }],
    grammarHighlights: [{ excerpt: 'a cui guardano / in cui si trovano', note: { bn: 'অব্যয় + cui।', en: 'Preposition + relative cui.' }, grammarId: 'relativi' }],
    relatedGrammarIds: ['relativi'],
    questions: [
      { id: 'rd-b1-05-q1', prompt: { bn: 'বাসা খোঁজার সময় পরিবারগুলো প্রধানত কোন মানদণ্ড দেখে?', en: 'What main criterion do families look at when house-hunting?' }, options: ['রেলস্টেশন ও মেট্রোর নৈকট্য', 'সিনেমা হলের দূরত্ব', 'বাড়িটি কত তলা', 'দেয়ালের রঙ'], answer: 0, explanation: { bn: 'la vicinanza alle stazioni e alla metropolitana।', en: 'Proximity to stations and metro lines.' } },
    ],
  }),
  buildReading({
    id: 'rd-b1-06', level: 'B1', kind: 'email', titleIt: 'Invio dei prospetti contabili', title: { bn: 'হিসাব বিবরণী প্রেরণ ইমেইল', en: 'Email sending accounting schedules' },
    storyId: 'st-b1-06',
    paragraphs: [
      { it: 'Gentile Ragionier Ferri, i prospetti delle fatture trimestrali sono pronti: glieli ho allegati a questo messaggio in formato PDF.', tr: { bn: 'মাননীয় হিসাবরক্ষক ফেররি, ত্রৈমাসিক বিলের বিবরণীগুলো প্রস্তুত: আমি সেগুলো পিডিএফ ফরম্যাটে এই বার্তায় আপনার জন্য সংযুক্ত করেছি।', en: 'Dear Accountant Ferri, the quarterly invoice schedules are ready: I have attached them for you to this message in PDF format.' } },
      { it: 'Se Le servisse anche il file modificabile sul foglio di calcolo, me lo comunichi pure e glielo invierò immediatamente.', tr: { bn: 'আপনার যদি স্প্রেডশিটে সম্পাদনাযোগ্য ফাইলটিও লাগে, আমাকে নির্দ্বিধায় জানাবেন এবং আমি অবিলম্বে আপনাকে সেটি পাঠিয়ে দেব।', en: 'Should you also need the editable spreadsheet file, just let me know and I will send it to you immediately.' } },
    ],
    vocabHighlights: [{ it: 'foglio di calcolo', tr: { bn: 'স্প্রেডশিট', en: 'spreadsheet' } }, { it: 'modificabile', tr: { bn: 'সম্পাদনাযোগ্য', en: 'editable' } }],
    grammarHighlights: [{ excerpt: 'glieli ho allegati / glielo invierò', note: { bn: 'যৌগিক সর্বনাম glieli ও glielo।', en: 'Combined pronouns glieli and glielo.' }, grammarId: 'pronomi-combinati' }],
    relatedGrammarIds: ['pronomi-combinati', 'registro-formale-b1'],
    questions: [
      { id: 'rd-b1-06-q1', prompt: { bn: 'ত্রৈমাসিক বিলের বিবরণীগুলো কোন ফরম্যাটে সংযুক্ত করা হয়েছে?', en: 'In what format were the schedules attached?' }, options: ['পিডিএফ (PDF)', 'কাগুজে চিঠি', 'অডিও ফাইল', 'ছবি'], answer: 0, explanation: { bn: 'in formato PDF।', en: 'In PDF format.' } },
    ],
  }),
  buildReading({
    id: 'rd-b1-07', level: 'B1', kind: 'article', titleIt: 'Come affrontare lo stress quotidiano', title: { bn: 'দৈনন্দিন মানসিক চাপ মোকাবিলার উপায়', en: 'How to cope with daily stress' },
    storyId: 'st-b1-07',
    paragraphs: [
      { it: 'Quando si affrontano troppe scadenze contemporaneamente, ci si sente facilmente stanchi e stressati. Gli psicologi del lavoro ricordano che fare brevi pause migliora la qualità dell’attenzione.', tr: { bn: 'একসাথে অনেক সময়সীমা মোকাবিলা করতে গেলে সহজেই ক্লান্ত ও চাপগ্রস্ত লাগে। কর্মক্ষেত্রের মনোবিজ্ঞানীরা মনে করিয়ে দেন যে সংক্ষিপ্ত বিরতি নিলে মনোযোগের মান উন্নত হয়।', en: 'When facing too many deadlines at once, one easily feels tired and stressed. Occupational psychologists remind us that taking short breaks improves focus.' } },
      { it: 'Inoltre, quando si dedica mezz’ora al giorno a una camminata veloce, si dorme meglio e ci si adatta con più energia agli imprevisti.', tr: { bn: 'তাছাড়া প্রতিদিন আধ ঘণ্টা দ্রুত হাঁটায় সময় দিলে ঘুম ভালো হয় এবং অপ্রত্যাশিত পরিস্থিতির সাথে আরও উদ্যমে খাপ খাওয়ানো যায়।', en: 'Moreover, when one devotes half an hour a day to a brisk walk, one sleeps better and adapts more energetically to unexpected events.' } },
    ],
    vocabHighlights: [{ it: 'contemporaneamente', tr: { bn: 'একই সময়ে', en: 'simultaneously' } }, { it: 'camminata veloce', tr: { bn: 'দ্রুত হাঁটা', en: 'brisk walk' } }],
    grammarHighlights: [{ excerpt: 'ci si sente… stressati', note: { bn: 'নৈর্ব্যক্তিক প্রতিফলক ci si + বহুবচন বিশেষণ।', en: 'Impersonal reflexive ci si + plural adjective.' }, grammarId: 'si-impersonale' }],
    relatedGrammarIds: ['si-impersonale'],
    questions: [
      { id: 'rd-b1-07-q1', prompt: { bn: 'প্রতিদিন কতক্ষণ দ্রুত হাঁটার কথা বলা হয়েছে?', en: 'How much time per day is suggested for a brisk walk?' }, options: ['১০ মিনিট', 'আধ ঘণ্টা (mezz’ora)', '২ ঘণ্টা', '৩ ঘণ্টা'], answer: 1, explanation: { bn: 'mezz’ora al giorno।', en: 'Half an hour a day.' } },
    ],
  }),
  buildReading({
    id: 'rd-b1-08', level: 'B1', kind: 'news', titleIt: 'Nuovi fondi per le biblioteche scolastiche', title: { bn: 'স্কুল গ্রন্থাগারের জন্য নতুন তহবিল', en: 'New funds for school libraries' },
    storyId: 'st-b1-08',
    paragraphs: [
      { it: 'Un piano straordinario di finanziamento è stato approvato ieri dal ministero dell’istruzione per modernizzare le biblioteche scolastiche in tutte le regioni.', tr: { bn: 'সব অঞ্চলের স্কুল গ্রন্থাগার আধুনিকায়নের জন্য গতকাল শিক্ষা মন্ত্রণালয় কর্তৃক একটি বিশেষ অর্থায়ন পরিকল্পনা অনুমোদিত হয়েছে।', en: 'A special funding plan was approved yesterday by the ministry of education to modernise school libraries across all regions.' } },
      { it: 'Le graduatorie definitive saranno pubblicate entro la fine di novembre e i fondi verranno assegnati prima di gennaio.', tr: { bn: 'নভেম্বরের শেষ নাগাদ চূড়ান্ত তালিকা প্রকাশ করা হবে এবং জানুয়ারির আগে তহবিল বরাদ্দ করা হবে।', en: 'The final rankings will be published by the end of November and funds will be allocated before January.' } },
    ],
    vocabHighlights: [{ it: 'finanziamento', tr: { bn: 'অর্থায়ন / তহবিল', en: 'funding' } }, { it: 'graduatoria', tr: { bn: 'মেধা বা অগ্রাধিকার তালিকা', en: 'ranking list' } }],
    grammarHighlights: [{ excerpt: 'è stato approvato / saranno pubblicate', note: { bn: 'অতীত ও ভবিষ্যৎ কর্মবাচ্য।', en: 'Past and future passive voice.' }, grammarId: 'passivo' }],
    relatedGrammarIds: ['passivo'],
    questions: [
      { id: 'rd-b1-08-q1', prompt: { bn: 'চূড়ান্ত তালিকা কবে নাগাদ প্রকাশ করা হবে?', en: 'By when will the final rankings be published?' }, options: ['নভেম্বরের শেষ নাগাদ', 'মার্চ মাসে', 'আগামী সপ্তাহে', 'জুলাই মাসে'], answer: 0, explanation: { bn: 'entro la fine di novembre।', en: 'By the end of November.' } },
    ],
  }),
  buildReading({
    id: 'rd-b1-09', level: 'B1', kind: 'message', titleIt: 'Riepilogo dell’appuntamento al patronato', title: { bn: 'সহায়তা কেন্দ্রে সাক্ষাতের সারাংশ', en: 'Summary of the advisory centre appointment' },
    storyId: 'st-b1-09',
    paragraphs: [
      { it: 'Ciao Yasmin, sono appena uscito dal patronato. L’operatrice mi ha chiesto se avessi già ricevuto il codice identificativo della pratica sul cellulare.', tr: { bn: 'হ্যালো ইয়াসমিন, আমি এইমাত্র সহায়তা কেন্দ্র থেকে বের হলাম। কর্মী আমাকে জিজ্ঞেস করলেন মোবাইলে ফাইলের শনাক্তকরণ কোডটি আমি ইতিমধ্যে পেয়েছি কি না।', en: 'Hi Yasmin, I have just come out of the advisory centre. The operator asked me whether I had already received the file identification code on my mobile.' } },
      { it: 'Poi mi ha detto di non preoccuparmi e mi ha spiegato che l’ufficio centrale invierà l’esito entro dieci giorni lavorativi.', tr: { bn: 'তারপর তিনি আমাকে চিন্তা না করতে বললেন এবং ব্যাখ্যা করলেন যে কেন্দ্রীয় দপ্তর দশ কর্মদিবসের মধ্যে ফলাফল পাঠাবে।', en: 'Then she told me not to worry and explained that the central office will send the outcome within ten working days.' } },
    ],
    vocabHighlights: [{ it: 'esito', tr: { bn: 'ফলাফল', en: 'outcome / result' } }, { it: 'giorni lavorativi', tr: { bn: 'কর্মদিবস', en: 'working days' } }],
    grammarHighlights: [{ excerpt: 'mi ha detto di non preoccuparmi', note: { bn: 'পরোক্ষ নেতিবাচক আদেশে di non + infinito।', en: 'Negative reported command uses di non + infinitive.' }, grammarId: 'discorso-indiretto' }],
    relatedGrammarIds: ['discorso-indiretto'],
    questions: [
      { id: 'rd-b1-09-q1', prompt: { bn: 'কেন্দ্রীয় দপ্তর কত দিনের মধ্যে ফলাফল পাঠাবে?', en: 'Within how many days will the central office send the outcome?' }, options: ['২ কর্মদিবস', '১০ কর্মদিবস', '৩০ দিন', '৩ মাস'], answer: 1, explanation: { bn: 'entro dieci giorni lavorativi।', en: 'Within ten working days.' } },
    ],
  }),
  buildReading({
    id: 'rd-b1-10', level: 'B1', kind: 'notice', titleIt: 'Guida al risparmio energetico in ufficio', title: { bn: 'অফিসে বিদ্যুৎ সাশ্রয়ের নির্দেশিকা', en: 'Office energy-saving guide' },
    storyId: 'st-b1-10',
    paragraphs: [
      { it: 'Si invitano tutti i collaboratori a seguire alcune semplici regole ecologiche. Prima di lasciare la propria postazione, ricordate di spegnere il monitor invece di lasciarlo in modalità di attesa.', tr: { bn: 'সকল সহকর্মীকে কয়েকটি সহজ পরিবেশবান্ধব নিয়ম মেনে চলতে আমন্ত্রণ জানানো হচ্ছে। নিজের কাজের ডেস্ক ছাড়ার আগে মনিটরটি স্ট্যান্ডবাই না রেখে বন্ধ করতে মনে রাখবেন।', en: 'All staff are invited to follow a few simple green rules. Before leaving your workstation, remember to switch off the monitor instead of leaving it on standby.' } },
      { it: 'Oltre a ridurre i consumi di energia, evitiamo di stampare email lunghe senza averne reale necessità.', tr: { bn: 'শক্তির ব্যবহার কমানোর পাশাপাশি প্রকৃত প্রয়োজন ছাড়া লম্বা ইমেইল প্রিন্ট করা থেকে বিরত থাকি।', en: 'Besides reducing energy consumption, let us avoid printing long emails without real need.' } },
    ],
    vocabHighlights: [{ it: 'postazione', tr: { bn: 'কাজের ডেস্ক / স্থান', en: 'workstation' } }, { it: 'modalità di attesa', tr: { bn: 'স্ট্যান্ডবাই মোড', en: 'standby mode' } }],
    grammarHighlights: [{ excerpt: 'Prima di lasciare / invece di lasciarlo', note: { bn: 'অব্যয় + ইনফিনিটিভ।', en: 'Preposition + infinitive.' }, grammarId: 'infinito' }],
    relatedGrammarIds: ['infinito'],
    questions: [
      { id: 'rd-b1-10-q1', prompt: { bn: 'ডেস্ক ছাড়ার আগে কী বন্ধ করতে বলা হয়েছে?', en: 'What should staff switch off before leaving their workstation?' }, options: ['মনিটর', 'লিফট', 'ফ্রিজ', 'মূল ফটক'], answer: 0, explanation: { bn: 'spegnere il monitor।', en: 'Switch off the monitor.' } },
    ],
  }),
  buildReading({
    id: 'rd-b1-11', level: 'B1', kind: 'article', titleIt: 'Dialogo e rispetto nei condomìni', title: { bn: 'অ্যাপার্টমেন্ট ভবনে সংলাপ ও সম্মান', en: 'Dialogue and respect in apartment buildings' },
    storyId: 'st-b1-11',
    paragraphs: [
      { it: 'Vivere nello stesso edificio significa condividere spazi e regole. Pur avendo orari e abitudini differenti, i condomini possono prevenire ogni conflitto ascoltandosi con cortesia.', tr: { bn: 'একই ভবনে বসবাসের অর্থ স্থান ও নিয়ম ভাগ করে নেওয়া। ভিন্ন সময়সূচি ও অভ্যাস থাকা সত্ত্বেও বাসিন্দারা ভদ্রভাবে একে অপরের কথা শুনে যেকোনো বিরোধ প্রতিরোধ করতে পারেন।', en: 'Living in the same building means sharing spaces and rules. Despite having different schedules and habits, residents can prevent any conflict by listening to each other courteously.' } },
      { it: 'Collaborando nella cura del giardino e rispettando le ore del silenzio, si crea un clima familiare e piacevole per tutti.', tr: { bn: 'বাগানের যত্নে সহযোগিতা করে এবং নীরবতার সময় মেনে চলে সবার জন্য একটি ঘরোয়া ও আনন্দদায়ক পরিবেশ তৈরি করা যায়।', en: 'By collaborating in tending the garden and respecting quiet hours, a pleasant atmosphere is created for everyone.' } },
    ],
    vocabHighlights: [{ it: 'prevenire', tr: { bn: 'প্রতিরোধ করা', en: 'to prevent' } }, { it: 'ore del silenzio', tr: { bn: 'নীরবতার নির্ধারিত সময়', en: 'quiet hours' } }],
    grammarHighlights: [{ excerpt: 'Pur avendo… Collaborando', note: { bn: 'স্বীকারোক্তিমূলক pur + জেরুন্ড এবং উপায়বাচক জেরুন্ড।', en: 'Concessive pur + gerund and gerund of means.' }, grammarId: 'gerundio-b1' }],
    relatedGrammarIds: ['gerundio-b1'],
    questions: [
      { id: 'rd-b1-11-q1', prompt: { bn: 'কীভাবে ভবনের বাসিন্দারা বিরোধ প্রতিরোধ করতে পারেন?', en: 'How can building residents prevent conflicts?' }, options: ['কথা না বলে', 'ভদ্রভাবে একে অপরের কথা শুনে ও নিয়ম মেনে', 'দেয়াল তুলে', 'বাসা বদলে'], answer: 1, explanation: { bn: 'ascoltandosi con cortesia e collaborando।', en: 'By listening courteously and collaborating.' } },
    ],
  }),
  buildReading({
    id: 'rd-b1-12', level: 'B1', kind: 'opinion', titleIt: 'Perché investire nella formazione continua', title: { bn: 'কেন নিয়মিত প্রশিক্ষণে বিনিয়োগ করা উচিত', en: 'Why invest in continuous training' },
    storyId: 'st-b1-12',
    paragraphs: [
      { it: 'A mio parere, il mondo professionale cambia così rapidamente che nessuno può smettere di imparare dopo il diploma o la laurea. Seguire corsi di aggiornamento porta un chiaro vantaggio competitivo.', tr: { bn: 'আমার মতে, পেশাগত জগৎ এত দ্রুত বদলাচ্ছে যে ডিপ্লোমা বা স্নাতকের পর কারোরই শেখা থামানো চলে না। আপডেট কোর্স করা স্পষ্ট প্রতিযোগিতামূলক সুবিধা দেয়।', en: 'In my opinion, the professional world changes so fast that no one can stop learning after high school or university. Taking refresher courses brings a clear competitive advantage.' } },
      { it: 'Molti esperti ritengono che le imprese debbano offrire ore di formazione retribuita direttamente durante l’orario di lavoro.', tr: { bn: 'অনেক বিশেষজ্ঞ মনে করেন যে প্রতিষ্ঠানগুলোর কাজের সময়ের মধ্যেই সবেতন প্রশিক্ষণের ঘণ্টা দেওয়া উচিত।', en: 'Many experts believe businesses should offer paid training hours directly during working hours.' } },
    ],
    vocabHighlights: [{ it: 'aggiornamento', tr: { bn: 'হালনাগাদ প্রশিক্ষণ', en: 'refresher training' } }, { it: 'retribuita', tr: { bn: 'সবেতন', en: 'paid / remunerated' } }],
    grammarHighlights: [{ excerpt: 'A mio parere… cambia / ritengono che… debbano', note: { bn: 'A mio parere + indicativo; ritengono che + congiuntivo।', en: 'Indicative vs subjunctive with opinion markers.' }, grammarId: 'opinione' }],
    relatedGrammarIds: ['opinione', 'congiuntivo'],
    questions: [
      { id: 'rd-b1-12-q1', prompt: { bn: 'বিশেষজ্ঞদের মতে কখন প্রশিক্ষণের সুযোগ দেওয়া উচিত?', en: 'When do experts think training should be offered?' }, options: ['কাজের সময়ের মধ্যেই (durante l’orario di lavoro)', 'কেবল ছুটির দিনে', 'রাতে', 'অবসরের পর'], answer: 0, explanation: { bn: 'durante l’orario di lavoro।', en: 'During working hours.' } },
    ],
  }),
  buildReading({
    id: 'rd-b1-13', level: 'B1', kind: 'article', titleIt: 'Città medie e qualità della vita', title: { bn: 'মাঝারি শহর ও জীবনযাত্রার মান', en: 'Medium-sized cities and quality of life' },
    storyId: 'st-b1-13',
    paragraphs: [
      { it: 'Nelle grandi metropoli le opportunità di carriera sono numerose; tuttavia il costo della vita e i tempi di spostamento risultano spesso pesanti per le giovani coppie.', tr: { bn: 'বড় মহানগরগুলোতে ক্যারিয়ারের সুযোগ প্রচুর; তবুও জীবনযাত্রার ব্যয় ও যাতায়াতের সময় তরুণ দম্পতিদের জন্য প্রায়ই ভারী হয়ে ওঠে।', en: 'In big metropolises career opportunities are numerous; however, the cost of living and commuting times are often heavy for young couples.' } },
      { it: 'Nelle città di provincia, invece, gli affitti sono più accessibili; inoltre è più facile godere di un ritmo quotidiano sereno a misura d’uomo.', tr: { bn: 'অন্যদিকে প্রাদেশিক শহরগুলোতে ভাড়া বেশি সাশ্রয়ী; তাছাড়া মানুষের উপযোগী শান্ত দৈনন্দিন ছন্দ উপভোগ করা সহজ।', en: 'In provincial cities, by contrast, rents are more affordable; moreover, it is easier to enjoy a calm, human-scale daily pace.' } },
    ],
    vocabHighlights: [{ it: 'metropoli', tr: { bn: 'মহানগর', en: 'metropolis' } }, { it: 'a misura d’uomo', tr: { bn: 'মানুষের বসবাসের অনুকূল মাপের', en: 'human-scale' } }],
    grammarHighlights: [{ excerpt: 'tuttavia… invece… inoltre', note: { bn: 'বাক্য সংযোজক অব্যয়।', en: 'Discourse connectors.' }, grammarId: 'connettivi-b1' }],
    relatedGrammarIds: ['connettivi-b1'],
    questions: [
      { id: 'rd-b1-13-q1', prompt: { bn: 'প্রাদেশিক বা মাঝারি শহরের সুবিধা কী?', en: 'What is an advantage of provincial cities?' }, options: ['সাশ্রয়ী ভাড়া ও শান্ত জীবনযাত্রা', 'বিশাল যানজট', 'খুব উঁচু ভাড়া', 'মেট্রোপলিটন ভিড়'], answer: 0, explanation: { bn: 'gli affitti sono più accessibili… ritmo sereno।', en: 'More affordable rents and a calm pace.' } },
    ],
  }),
  buildReading({
    id: 'rd-b1-14', level: 'B1', kind: 'story', titleIt: 'Il rinnovo del permesso e i requisiti', title: { bn: 'পারমিট নবায়ন ও প্রয়োজনীয় শর্তাবলি', en: 'Permit renewal and requirements' },
    storyId: 'st-b1-14',
    paragraphs: [
      { it: 'Prima di recarmi all’ufficio immigrazione, temevo che la procedura di rinnovo richiedesse settimane di attesa. Avevo controllato tre volte che nella cartella ci fosse ogni requisito richiesto.', tr: { bn: 'অভিবাসন দপ্তরে যাওয়ার আগে আমি আশঙ্কা করছিলাম নবায়ন প্রক্রিয়ায় হয়ত সপ্তাহের পর সপ্তাহ অপেক্ষা লাগবে। ফাইলে প্রয়োজনীয় প্রতিটি যোগ্যতা-নথি আছে কি না তা আমি তিনবার পরীক্ষা করেছিলাম।', en: 'Before going to the immigration office, I feared the renewal procedure might require weeks of waiting. I had checked three times that every required document was in the folder.' } },
      { it: 'L’addetto allo sportello è stato gentilissimo e mi ha confermato che tutta la documentazione era completa.', tr: { bn: 'কাউন্টারের কর্মী অত্যন্ত ভদ্র ছিলেন এবং আমাকে নিশ্চিত করেছেন যে সব কাগজপত্র সম্পূর্ণ ছিল।', en: 'The counter clerk was very kind and confirmed that all documentation was complete.' } },
    ],
    vocabHighlights: [{ it: 'cartella', tr: { bn: 'ফোল্ডার / ফাইল', en: 'folder' } }, { it: 'documentazione', tr: { bn: 'নথিপত্র', en: 'documentation' } }],
    grammarHighlights: [{ excerpt: 'temevo che… richiedesse / ci fosse', note: { bn: 'অতীত ক্রিয়ার পরে congiuntivo imperfetto।', en: 'Imperfect subjunctive after past verbs.' }, grammarId: 'congiuntivo-imperfetto' }],
    relatedGrammarIds: ['congiuntivo-imperfetto', 'trapassato'],
    questions: [
      { id: 'rd-b1-14-q1', prompt: { bn: 'দপ্তরে যাওয়ার আগে লেখক কয়বার ফাইল পরীক্ষা করেছিলেন?', en: 'How many times had the writer checked the folder before going?' }, options: ['১ বার', '২ বার', '৩ বার', 'একবারও না'], answer: 2, explanation: { bn: 'Avevo controllato tre volte।', en: 'Three times.' } },
    ],
  }),
  buildReading({
    id: 'rd-b1-15', level: 'B1', kind: 'email', titleIt: 'Aggiornamento sull’arrivo del consulente', title: { bn: 'পরামর্শদাতার আগমন সংক্রান্ত আপডেট', en: 'Update on the consultant’s arrival' },
    storyId: 'st-b1-15',
    paragraphs: [
      { it: 'Cari colleghi, vi scrivo per informarvi che la riunione delle 14:30 inizierà con mezz’ora di ritardo. Temiamo che il nostro consulente esterno abbia perso il treno ad alta velocità per una coincidenza persa.', tr: { bn: 'প্রিয় সহকর্মীবৃন্দ, আপনাদের জানাতে লিখছি যে ১৪:৩০-এর সভাটি আধ ঘণ্টা দেরিতে শুরু হবে। আমাদের আশঙ্কা আমাদের বহিরাগত পরামর্শদাতা সংযোগ ট্রেন মিস করায় উচ্চগতির ট্রেনটি ধরতে পারেননি।', en: 'Dear colleagues, I am writing to inform you that the 2:30 p.m. meeting will start half an hour late. We fear our external consultant missed the high-speed train due to a missed connection.' } },
      { it: 'Credo comunque che abbia già caricato il preventivo aggiornato nella cartella condivisa.', tr: { bn: 'তবে আমার মনে হয় তিনি ইতিমধ্যে শেয়ার করা ফোল্ডারে হালনাগাদ প্রাক্কলনটি আপলোড করেছেন।', en: 'However, I think he has already uploaded the updated quote to the shared folder.' } },
    ],
    vocabHighlights: [{ it: 'cartella condivisa', tr: { bn: 'শেয়ার করা ফোল্ডার', en: 'shared folder' } }, { it: 'esterno', tr: { bn: 'বহিরাগত', en: 'external' } }],
    grammarHighlights: [{ excerpt: 'abbia perso / abbia già caricato', note: { bn: 'congiuntivo passato।', en: 'Past subjunctive.' }, grammarId: 'congiuntivo-passato' }],
    relatedGrammarIds: ['congiuntivo-passato'],
    questions: [
      { id: 'rd-b1-15-q1', prompt: { bn: 'সভাটি কতক্ষণ দেরিতে শুরু হবে?', en: 'How late will the meeting start?' }, options: ['১০ মিনিট', 'আধ ঘণ্টা (mezz’ora)', '২ ঘণ্টা', 'বাতিল হয়েছে'], answer: 1, explanation: { bn: 'con mezz’ora di ritardo।', en: 'Half an hour late.' } },
    ],
  }),
  buildReading({
    id: 'rd-b1-16', level: 'B1', kind: 'story', titleIt: 'La clausola del bando universitario', title: { bn: 'বিশ্ববিদ্যালয় বিজ্ঞপ্তির ধারা', en: 'The university notice clause' },
    storyId: 'st-b1-16',
    paragraphs: [
      { it: 'Speravo che la segreteria avesse già pubblicato l’elenco degli ammessi al secondo semestre, ma stamattina ho scoperto che mancava una firma sul mio modulo.', tr: { bn: 'আশা করেছিলাম দপ্তর দ্বিতীয় সেমিস্টারে উত্তীর্ণদের তালিকা ইতিমধ্যে প্রকাশ করেছে, কিন্তু আজ সকালে জানতে পারলাম আমার ফর্মে একটি স্বাক্ষর বাকি ছিল।', en: 'I hoped the office had already published the list of students admitted to the second semester, but this morning I discovered a signature was missing on my form.' } },
      { it: 'Non mi ero accorto che l’ultima clausola del regolamento richiedeva anche il visto del coordinatore didattico.', tr: { bn: 'আমি খেয়াল করিনি যে নীতিমালার শেষ ধারায় শিক্ষা সমন্বয়কারীর অনুমোদন স্বাক্ষরও চাওয়া হয়েছিল।', en: 'I had not noticed that the final clause of the regulations also required the academic coordinator’s endorsement.' } },
    ],
    vocabHighlights: [{ it: 'ammessi', tr: { bn: 'ভর্তি বা নির্বাচিতরা', en: 'admitted candidates' } }, { it: 'regolamento', tr: { bn: 'নীতিমালা', en: 'regulations' } }],
    grammarHighlights: [{ excerpt: 'Speravo che… avesse già pubblicato', note: { bn: 'congiuntivo trapassato।', en: 'Pluperfect subjunctive.' }, grammarId: 'congiuntivo-trapassato' }],
    relatedGrammarIds: ['congiuntivo-trapassato'],
    questions: [
      { id: 'rd-b1-16-q1', prompt: { bn: 'ফর্মে কার অনুমোদন স্বাক্ষর প্রয়োজন ছিল?', en: 'Whose endorsement was required on the form?' }, options: ['শিক্ষা সমন্বয়কারীর (coordinatore didattico)', 'মেয়রের', 'বাড়িওয়ালার', 'ব্যাংকের'], answer: 0, explanation: { bn: 'il visto del coordinatore didattico।', en: 'The academic coordinator’s.' } },
    ],
  }),
  buildReading({
    id: 'rd-b1-17', level: 'B1', kind: 'email', titleIt: 'Calendario delle ferie estive', title: { bn: 'গ্রীষ্মকালীন ছুটির সময়সূচি', en: 'Summer holiday schedule' },
    storyId: 'st-b1-17',
    paragraphs: [
      { it: 'Gentile squadra, so che molti di voi desiderano partire in agosto, ma è necessario che almeno metà del personale resti operativa per garantire l’assistenza ai clienti.', tr: { bn: 'প্রিয় দল, আমি জানি আপনাদের অনেকেই আগস্টে ছুটি কাটাতে চান, কিন্তু গ্রাহকসেবা নিশ্চিত করতে অন্তত অর্ধেক কর্মীর কর্মরত থাকা জরুরি।', en: 'Dear team, I know many of you wish to go away in August, but it is necessary that at least half the staff remain operational to guarantee customer support.' } },
      { it: 'Pensavo che fosse utile raccogliere le preferenze entro mercoledì, così potremo risolvere ogni sovrapposizione con serenità.', tr: { bn: 'আমি ভেবেছিলাম বুধবারের মধ্যে সবার পছন্দ জেনে নেওয়া উপকারী হবে, যাতে আমরা প্রশান্তির সাথে যেকোনো সময়-সংঘাত মেটাতে পারি।', en: 'I thought it would be useful to collect preferences by Wednesday, so we can calmly resolve any overlap.' } },
    ],
    vocabHighlights: [{ it: 'personale', tr: { bn: 'কর্মীবৃন্দ', en: 'staff / personnel' } }, { it: 'sovrapposizione', tr: { bn: 'একই সময়ে মিলে যাওয়া / ওভারল্যাপ', en: 'overlap' } }],
    grammarHighlights: [{ excerpt: 'è necessario che… resti / Pensavo che fosse', note: { bn: 'কালের সামঞ্জস্য (concordanza dei tempi)।', en: 'Sequence of tenses in the subjunctive.' }, grammarId: 'concordanza-congiuntivo' }],
    relatedGrammarIds: ['concordanza-congiuntivo'],
    questions: [
      { id: 'rd-b1-17-q1', prompt: { bn: 'কবে নাগাদ ছুটির পছন্দ জানাতে বলা হয়েছে?', en: 'By when should holiday preferences be submitted?' }, options: ['বুধবারের মধ্যে', 'রবিবারের মধ্যে', 'আগামী মাসে', 'আজ রাতে'], answer: 0, explanation: { bn: 'entro mercoledì।', en: 'By Wednesday.' } },
    ],
  }),
  buildReading({
    id: 'rd-b1-18', level: 'B1', kind: 'notice', titleIt: 'Prevenire i guasti invernali', title: { bn: 'শীতকালীন যান্ত্রিক ত্রুটি প্রতিরোধ', en: 'Preventing winter faults' },
    storyId: 'st-b1-18',
    paragraphs: [
      { it: 'Si raccomanda di effettuare il controllo della caldaia prima che le temperature scendano sotto lo zero, evitando così un improvviso guasto tecnico.', tr: { bn: 'তাপমাত্রা শূন্যের নিচে নামার আগেই বয়লার পরীক্ষা করানোর পরামর্শ দেওয়া হচ্ছে, যাতে হঠাৎ যান্ত্রিক ত্রুটি এড়ানো যায়।', en: 'It is recommended to have the boiler checked before temperatures drop below zero, thus avoiding a sudden technical fault.' } },
      { it: 'La tariffa resta invariata per tutto il mese, a meno che non sia necessario sostituire componenti elettrici.', tr: { bn: 'বৈদ্যুতিক যন্ত্রাংশ বদলানোর প্রয়োজন না হলে পুরো মাস জুড়ে চার্জ অপরিবর্তিত থাকবে।', en: 'The rate remains unchanged all month, unless electrical components need replacing.' } },
    ],
    vocabHighlights: [{ it: 'invariata', tr: { bn: 'অপরিবর্তিত', en: 'unchanged' } }, { it: 'sotto lo zero', tr: { bn: 'শূন্যের নিচে', en: 'below zero' } }],
    grammarHighlights: [{ excerpt: 'prima che… scendano / a meno che non sia', note: { bn: 'prima che ও a meno che non + congiuntivo।', en: 'prima che and a meno che non + subjunctive.' }, grammarId: 'senza-che-prima-che' }],
    relatedGrammarIds: ['senza-che-prima-che'],
    questions: [
      { id: 'rd-b1-18-q1', prompt: { bn: 'কখন বয়লার পরীক্ষা করানোর পরামর্শ দেওয়া হয়েছে?', en: 'When is it recommended to check the boiler?' }, options: ['তাপমাত্রা শূন্যের নিচে নামার আগে', 'গ্রীষ্মের শেষে', 'বয়লার নষ্ট হওয়ার পর', 'বসন্তকালে'], answer: 0, explanation: { bn: 'prima che le temperature scendano sotto lo zero।', en: 'Before temperatures drop below zero.' } },
    ],
  }),
  buildReading({
    id: 'rd-b1-19', level: 'B1', kind: 'opinion', titleIt: 'Incentivi per la mobilità ciclabile', title: { bn: 'সাইকেল যাতায়াতে প্রণোদনা', en: 'Incentives for cycling mobility' },
    storyId: 'st-b1-19',
    paragraphs: [
      { it: 'Se i comuni collegassero le stazioni ferroviarie alle università con una pista ciclabile protetta, l’uso della bicicletta raddoppierebbe in pochi mesi.', tr: { bn: 'পৌরসভাগুলো যদি সুরক্ষিত সাইকেল লেন দিয়ে রেলস্টেশনগুলোকে বিশ্ববিদ্যালয়ের সাথে যুক্ত করত, তবে কয়েক মাসের মধ্যেই সাইকেলের ব্যবহার দ্বিগুণ হয়ে যেত।', en: 'If municipalities connected railway stations to universities with a protected cycle lane, bicycle use would double within a few months.' } },
      { it: 'Anche molte piccole imprese artigiane potrebbero consegnare i pacchi in centro con bici da carico ecologiche.', tr: { bn: 'এমনকি অনেক ছোট কারুশিল্প প্রতিষ্ঠানও পরিবেশবান্ধব কার্গো সাইকেলে শহরের কেন্দ্রে পার্সেল পৌঁছে দিতে পারত।', en: 'Many small artisan businesses could also deliver parcels in the centre using eco-friendly cargo bikes.' } },
    ],
    vocabHighlights: [{ it: 'raddoppiare', tr: { bn: 'দ্বিগুণ হওয়া', en: 'to double' } }, { it: 'bici da carico', tr: { bn: 'পণ্যবাহী সাইকেল', en: 'cargo bike' } }],
    grammarHighlights: [{ excerpt: 'Se i comuni collegassero… raddoppierebbe', note: { bn: '২য় প্রকার কাল্পনিক শর্তবাক্য।', en: 'Second conditional.' }, grammarId: 'periodo-ipotetico-2' }],
    relatedGrammarIds: ['periodo-ipotetico-2'],
    questions: [
      { id: 'rd-b1-19-q1', prompt: { bn: 'সুরক্ষিত সাইকেল লেন তৈরি করলে কী দ্বিগুণ হতো?', en: 'What would double if protected cycle lanes were built?' }, options: ['সাইকেলের ব্যবহার', 'গাড়ির সংখ্যা', 'ট্রেনের ভাড়া', 'দোকানের সংখ্যা'], answer: 0, explanation: { bn: 'l’uso della bicicletta raddoppierebbe।', en: 'Bicycle use.' } },
    ],
  }),
  buildReading({
    id: 'rd-b1-20', level: 'B1', kind: 'story', titleIt: 'L’importanza del salvataggio in cloud', title: { bn: 'ক্লাউডে ফাইল সংরক্ষণের গুরুত্ব', en: 'The importance of cloud backup' },
    storyId: 'st-b1-20',
    paragraphs: [
      { it: 'L’anno scorso il mio portatile si è spento improvvisamente a due giorni dalla consegna del progetto. Se non avessi copiato ogni file sul server online, avrei perso mesi di lavoro.', tr: { bn: 'গত বছর প্রকল্প জমা দেওয়ার দুই দিন আগে আমার ল্যাপটপ হঠাৎ বন্ধ হয়ে যায়। আমি যদি প্রতিটি ফাইল অনলাইন সার্ভারে কপি করে না রাখতাম, তবে মাসের পর মাসের কাজ হারাতাম।', en: 'Last year my laptop suddenly died two days before the project deadline. If I had not copied every file onto the online server, I would have lost months of work.' } },
      { it: 'Da quel giorno attivo sempre la sincronizzazione automatica prima di iniziare a scrivere.', tr: { bn: 'সেদিন থেকে লেখা শুরু করার আগে আমি সবসময় স্বয়ংক্রিয় সিঙ্ক্রোনাইজেশন চালু রাখি।', en: 'Since that day I always turn on automatic sync before starting to write.' } },
    ],
    vocabHighlights: [{ it: 'sincronizzazione', tr: { bn: 'সিঙ্ক্রোনাইজেশন / স্বয়ংক্রিয় সমন্বয়', en: 'synchronisation' } }, { it: 'portatile', tr: { bn: 'ল্যাপটপ', en: 'laptop' } }],
    grammarHighlights: [{ excerpt: 'Se non avessi copiato… avrei perso', note: { bn: '৩য় প্রকার অতীত শর্তমূলক বাক্য।', en: 'Third conditional.' }, grammarId: 'periodo-ipotetico-3' }],
    relatedGrammarIds: ['periodo-ipotetico-3'],
    questions: [
      { id: 'rd-b1-20-q1', prompt: { bn: 'কখন লেখকের ল্যাপটপ হঠাৎ বন্ধ হয়ে গিয়েছিল?', en: 'When did the writer’s laptop suddenly die?' }, options: ['প্রকল্প জমা দেওয়ার দুই দিন আগে', 'ছুটির পরে', 'কেনার প্রথম দিনে', 'পরীক্ষার এক মাস পরে'], answer: 0, explanation: { bn: 'a due giorni dalla consegna del progetto।', en: 'Two days before the project deadline.' } },
    ],
  }),
  buildReading({
    id: 'rd-b1-21', level: 'B1', kind: 'email', titleIt: 'Pianificazione del trasloco', title: { bn: 'বাসা বদলের পরিকল্পনা ইমেইল', en: 'Email planning the house move' },
    storyId: 'st-b1-21',
    paragraphs: [
      { it: 'Cara Elena, domani mattina firmeremo finalmente il contratto d’affitto. Non appena avremo ritirato le chiavi dal proprietario, chiameremo la ditta per il trasloco.', tr: { bn: 'প্রিয় এলেনা, আগামীকাল সকালে আমরা অবশেষে ভাড়ার চুক্তিতে সই করব। মালিকের কাছ থেকে চাবি সংগ্রহ করা মাত্রই আমরা বাসা বদলের কোম্পানিকে ফোন করব।', en: 'Dear Elena, tomorrow morning we will finally sign the lease. As soon as we have collected the keys from the landlord, we will call the removals firm.' } },
      { it: 'Quando avremo sistemato i mobili principali, ti inviteremo a prendere un caffè sul nostro nuovo balcone!', tr: { bn: 'প্রধান আসবাবপত্রগুলো গুছিয়ে রাখা শেষ হলে আমাদের নতুন বারান্দায় কফি খেতে তোমাকে আমন্ত্রণ জানাব!', en: 'When we have arranged the main furniture, we will invite you for coffee on our new balcony!' } },
    ],
    vocabHighlights: [{ it: 'ditta', tr: { bn: 'কোম্পানি / প্রতিষ্ঠান', en: 'firm / company' } }, { it: 'sistemare', tr: { bn: 'গুছিয়ে রাখা', en: 'to arrange / unpack' } }],
    grammarHighlights: [{ excerpt: 'Non appena avremo ritirato / Quando avremo sistemato', note: { bn: 'futuro anteriore পূর্ববর্তী ভবিষ্যৎ কাজ বোঝায়।', en: 'Future perfect marks the earlier future action.' }, grammarId: 'futuro-anteriore' }],
    relatedGrammarIds: ['futuro-anteriore'],
    questions: [
      { id: 'rd-b1-21-q1', prompt: { bn: 'কখন তারা বাসা বদলের কোম্পানিকে ফোন করবে?', en: 'When will they call the removals firm?' }, options: ['চাবি সংগ্রহ করা মাত্রই', 'এক মাস পরে', 'গতকাল', 'আসবাব কেনার আগে'], answer: 0, explanation: { bn: 'Non appena avremo ritirato le chiavi।', en: 'As soon as they have collected the keys.' } },
    ],
  }),
];
