import type { Lesson, Unit } from '../types';

const lesson1: Lesson = {
  id: 'a2-u3-l1',
  number: 1,
  title: 'Al lavoro e al colloquio',
  subtitle: { bn: 'অফিস, সাক্ষাৎকার ও ক্রিয়ার পর অব্যয়', en: 'Work, interviews & verb prepositions' },
  minutes: 12,
  objectives: [
    { bn: 'চাকরি ও সাক্ষাৎকারের জরুরি শব্দ ব্যবহার করবেন', en: 'Use key workplace and interview vocabulary' },
    { bn: 'ক্রিয়ার পর কখন a এবং কখন di বসে তা প্রয়োগ করবেন', en: 'Link verbs cleanly with a or di + infinitive' },
  ],
  phrases: [
    { id: 'iniziato-a', it: 'Ho iniziato a lavorare in questa ditta due mesi fa.', tr: { bn: 'দুই মাস আগে আমি এই কোম্পানিতে কাজ শুরু করেছি।', en: 'I started working in this firm two months ago.' } },
    { id: 'deciso-di', it: 'Abbiamo deciso di inviare il curriculum oggi.', tr: { bn: 'আমরা আজই সিভি পাঠানোর সিদ্ধান্ত নিয়েছি।', en: 'We decided to send the CV today.' } },
    { id: 'studio-da', it: 'Studio italiano da un anno e mezzo.', tr: { bn: 'আমি দেড় বছর ধরে ইতালিয়ান শিখছি।', en: 'I have been studying Italian for a year and a half.' } },
    { id: 'scadenza-fra', it: 'La scadenza del progetto è fra cinque giorni.', tr: { bn: 'প্রকল্পের শেষ তারিখ পাঁচ দিন পর।', en: 'The project deadline is in five days.' } },
  ],
  grammar: [
    {
      id: 'preposizioni-verbi',
      title: { bn: 'ক্রিয়ার পর a বনাম di এবং সময় প্রকাশ', en: 'Verbs + a / di & time expressions' },
      explanation: {
        bn: 'iniziare a, continuare a, riuscire a, provare a; অপরদিকে decidere di, finire di, cercare di, sperare di, dimenticare di। চলমান সময়কালে presente + da; অতীতে আগে = fa; ভবিষ্যতে পর = fra/tra।',
        en: 'Use a after iniziare, provare, riuscire; use di after decidere, finire, cercare, sperare. Duration still active = present + da; past = fa; future = fra.',
      },
      table: [
        { label: '+ a + inf.', it: 'riesco a capire / provo a chiamare', tr: { bn: 'বুঝতে পারছি / ফোনের চেষ্টা করছি', en: 'manage to / try to' } },
        { label: '+ di + inf.', it: 'cerco di finire / spero di passare', tr: { bn: 'শেষ করার চেষ্টা / পাসের আশা', en: 'try to / hope to' } },
        { label: 'da / fa / fra', it: 'da due anni / due anni fa / fra due anni', tr: { bn: 'ধরে / আগে / পর', en: 'for (ongoing) / ago / in' } },
      ],
      examples: [
        { id: 'a2u3l1-e1', it: 'Non dimenticare di firmare il contratto!', tr: { bn: 'চুক্তিতে স্বাক্ষর করতে ভুলো না!', en: 'Don’t forget to sign the contract!' } },
      ],
    },
  ],
  dialogue: {
    title: { bn: 'নতুন চাকরির সাক্ষাৎকার', en: 'A job interview' },
    context: { bn: 'তারিক একটি ডিজাইন অফিসে ইন্টার্নশিপের সাক্ষাৎকার দিচ্ছে।', en: 'Tariq interviews for an internship at a design firm.' },
    lines: [
      { speaker: 'Direttore', it: 'Da quanto tempo vive in Italia, Tariq?', tr: { bn: 'তারিক, আপনি কতদিন ধরে ইতালিতে থাকেন?', en: 'How long have you lived in Italy, Tariq?' } },
      { speaker: 'Tariq', it: 'Sono arrivato due anni fa e studio ingegneria a Torino.', tr: { bn: 'দুই বছর আগে এসেছি এবং তুরিনে প্রকৌশল পড়ছি।', en: 'I arrived two years ago and I study engineering in Turin.' } },
      { speaker: 'Direttore', it: 'Parla già molto bene italiano! Quando può iniziare a lavorare con noi?', tr: { bn: 'আপনি ইতিমধ্যে খুব ভালো ইতালিয়ান বলেন! কবে আমাদের সাথে কাজ শুরু করতে পারবেন?', en: 'You already speak Italian very well! When can you start working with us?' } },
      { speaker: 'Tariq', it: 'Posso cominciare subito dopo la fine degli esami, fra due settimane.', tr: { bn: 'পরীক্ষা শেষ হওয়ার পরপরই, দুই সপ্তাহ পর শুরু করতে পারব।', en: 'I can start straight after exams finish, in two weeks.' } },
    ],
  },
  quiz: [
    { id: 'q1', prompt: { bn: 'সঠিক অব্যয় বসান:', en: 'Pick the right preposition:' }, it: 'Ho finito ___ compilare tutti i moduli.', options: ['a', 'di', 'per', 'in'], answer: 1, explanation: { bn: 'ব্যাকরণগত গঠন: এখানে «finire di + infinito» কাঠামোটি অনুসরণ করা হয়েছে।', en: 'finire takes di.' } },
    { id: 'q2', prompt: { bn: 'এখনো চলমান কাজ:', en: 'Action still ongoing now:' }, it: 'Lavoro in questa azienda ___ maggio.', options: ['fa', 'fra', 'da', 'per'], answer: 2, explanation: { bn: 'মে মাস থেকে এখনো কাজ করছেন → da।', en: 'Since May (still continuing) uses da.' } },
    { id: 'q3', prompt: { bn: '"দুই সপ্তাহ আগে":', en: '"Two weeks ago":' }, options: ['da due settimane', 'fra due settimane', 'due settimane fa', 'per due settimane'], answer: 2, explanation: { bn: 'অতীতের সময় আগে = … fa।', en: 'Ago = fa.' } },
    { id: 'q4', prompt: { bn: 'riuscire-এর পর কোন অব্যয় বসে?', en: 'Which preposition follows riuscire?' }, it: 'Sono riuscito ___ superare l’esame.', options: ['di', 'a', 'da', 'in'], answer: 1, explanation: { bn: 'ব্যাকরণগত গঠন: এখানে «riuscire a + infinito» কাঠামোটি অনুসরণ করা হয়েছে।', en: 'riuscire always takes a.' } },
  ],
  tip: { bn: 'অফিসে বা ইন্টারভিউতে আনুষ্ঠানিক Lei (vive, può, conosce) ও দাপ্তরিক শব্দ (contratto, colloquio, orario) ব্যবহার করুন।', en: 'Use formal Lei and accurate terms like contratto, colloquio, tirocinio in interviews.' },
};

const lesson2: Lesson = {
  id: 'a2-u3-l2',
  number: 2,
  title: 'In comune, in banca e alla posta',
  subtitle: { bn: 'দাপ্তরিক কাজ, নৈর্ব্যক্তিক si ও সম্বন্ধবাচক বাক্য', en: 'Bureaucracy, impersonal si & relative clauses' },
  minutes: 12,
  objectives: [
    { bn: 'ব্যাংক, ডাকঘর ও পৌরসভার কাউন্টারে প্রয়োজন জানাতে পারবেন', en: 'Handle errands at banks, post offices, and town halls' },
    { bn: 'si impersonale এবং che / in cui / dove ব্যবহার করবেন', en: 'Use impersonal si and basic relative clauses' },
  ],
  phrases: [
    { id: 'si-compila', it: 'Scusi, come si compila questo bollettino?', tr: { bn: 'মাফ করবেন, এই পেমেন্ট স্লিপটা কীভাবে পূরণ করতে হয়?', en: 'Excuse me, how do you fill in this payment slip?' } },
    { id: 'ufficio-in-cui', it: 'Ecco lo sportello in cui si ritirano i certificati.', tr: { bn: 'এই সেই কাউন্টার যেখানে সনদপত্র সংগ্রহ করা হয়।', en: 'Here is the desk where certificates are collected.' } },
    { id: 'marca-da-bollo', it: 'Serve una marca da bollo da sedici euro.', tr: { bn: 'ষোলো ইউরোর একটি রাজস্ব স্ট্যাম্প লাগবে।', en: 'You need a 16-euro revenue stamp.' } },
  ],
  grammar: [
    {
      id: 'si-impersonale-a2',
      title: { bn: 'নৈর্ব্যক্তিক si ও che / cui', en: 'Impersonal si & che / in cui' },
      explanation: {
        bn: 'সাধারণ নিয়ম বলতে si + ৩য় পুরুষ ক্রিয়া (Si compila, Si vendono francobolli)। বাক্য জোড়া দিতে che (মানুষ/বস্তু), স্থান বোঝাতে dove বা in cui ব্যবহার করুন।',
        en: 'Use si + 3rd person for general procedures; use che for subjects/objects and dove / in cui for places.',
      },
      table: [
        { label: 'si + sg.', it: 'Come si paga la bolletta?', tr: { bn: 'বিল কীভাবে দিতে হয়?', en: 'How do you pay the bill?' } },
        { label: 'si + pl.', it: 'Qui si accettano carte.', tr: { bn: 'এখানে কার্ড নেওয়া হয়।', en: 'Cards are accepted here.' } },
        { label: 'che / in cui', it: 'Il documento che cerco / La banca in cui vado', tr: { bn: 'যে নথি / যে ব্যাংকে', en: 'the document I need / bank I go to' } },
      ],
      examples: [
        { id: 'a2u3l2-e1', it: 'La persona che lavora allo sportello è stata molto gentile.', tr: { bn: 'কাউন্টারে যে ব্যক্তি কাজ করেন তিনি খুব ভদ্র ছিলেন।', en: 'The person working at the counter was very kind.' } },
      ],
    },
  ],
  dialogue: {
    title: { bn: 'বসবাসের সনদপত্র', en: 'Requesting a certificate' },
    context: { bn: 'রাহিম পৌরসভার কাউন্টারে কথা বলছে।', en: 'Rahim speaks to a town hall clerk.' },
    lines: [
      { speaker: 'Rahim', it: 'Buongiorno, avrei bisogno di un certificato di residenza.', tr: { bn: 'শুভ সকাল, আমার একটি বসবাসের সনদপত্র দরকার।', en: 'Good morning, I would need a residence certificate.' } },
      { speaker: 'Impiegato', it: 'Certamente. Ha la carta d’identità che dimostra la residenza attuale?', tr: { bn: 'অবশ্যই। আপনার বর্তমান ঠিকানা দেখানো পরিচয়পত্র কি সাথে আছে?', en: 'Certainly. Do you have the ID card showing your current residence?' } },
      { speaker: 'Rahim', it: 'Sì, eccola. Si deve pagare in contanti o con il bancomat?', tr: { bn: 'হ্যাঁ, এই যে। নগদে দিতে হবে নাকি কার্ডে দেওয়া যায়?', en: 'Yes, here it is. Does one pay cash or by debit card?' } },
      { speaker: 'Impiegato', it: 'Qui si può pagare benissimo con la carta.', tr: { bn: 'এখানে খুব সহজেই কার্ডে পেমেন্ট করা যায়।', en: 'You can easily pay by card here.' } },
    ],
  },
  quiz: [
    { id: 'q1', prompt: { bn: 'বহুবচন বিশেষ্যের সাথে si:', en: 'Impersonal si with plural noun:' }, it: 'In tabaccheria si ___ le marche da bollo.', options: ['vende', 'vendono', 'vendiamo', 'vendi'], answer: 1, explanation: { bn: 'le marche da bollo বহুবচন → vendono।', en: 'Plural subject requires vendono.' } },
    { id: 'q2', prompt: { bn: 'স্থান বোঝাতে সম্বন্ধবাচক:', en: 'Relative pronoun for location:' }, it: 'Questa è la posta ___ ho spedito il pacco.', options: ['che', 'in cui', 'chi', 'quale'], answer: 1, explanation: { bn: 'ডাকঘরের ভেতরে → in cui (বা dove)।', en: 'Location takes in cui / dove.' } },
    { id: 'q3', prompt: { bn: 'সঠিক দাপ্তরিক শব্দ:', en: 'Official paper proof of payment:' }, options: ['la ricevuta', 'la padella', 'la nuvola', 'la gita'], answer: 0, explanation: { bn: 'la ricevuta = আনুষ্ঠানিক রসিদ।', en: 'la ricevuta = receipt.' } },
    { id: 'q4', prompt: { bn: 'সাধারণ নিয়ম বোঝাতে:', en: 'General rule with si:' }, it: 'Come ___ questo modulo?', options: ['si compila', 'si compilano', 'compilano si', 'ci compila'], answer: 0, explanation: { bn: 'questo modulo একবচন → si compila।', en: 'Singular noun takes si compila.' } },
  ],
  tip: { bn: 'ইতালিতে ডাকঘর (Poste Italiane)-এ শুধু চিঠি নয়, বিল জমা, ব্যাংকিং ও পারমেসো কিট জমা দেওয়া যায়!', en: 'In Italy Poste Italiane handles utility bills, banking, and residence permit kits as well as mail.' },
};

const lesson3: Lesson = {
  id: 'a2-u3-l3',
  number: 3,
  title: 'Non c’è nessuno e ce la facciamo!',
  subtitle: { bn: 'অনির্দিষ্ট শব্দ, দ্বৈত না-বাচক ও সর্বনামযুক্ত ক্রিয়া', en: 'Indefinites, double negatives & pronominal verbs' },
  minutes: 12,
  objectives: [
    { bn: 'non… niente / non… nessuno সঠিকভাবে ব্যবহার করবেন', en: 'Form Italian double negatives accurately' },
    { bn: 'qualche, alcuni, ogni ও tutti-র ব্যাকরণগত পার্থক্য জানবেন', en: 'Distinguish qualche + singular from alcuni + plural' },
    { bn: 'farcela, andarsene, volerci প্রয়োগ করবেন', en: 'Use idiomatic verbs farcela, andarsene, volerci' },
  ],
  phrases: [
    { id: 'non-ce-nessuno', it: 'Non c’è nessuno nella sala d’attesa.', tr: { bn: 'অপেক্ষাঘরে কেউ নেই।', en: 'There is nobody in the waiting room.' } },
    { id: 'qualche-amico', it: 'Ho invitato qualche amico e alcuni colleghi.', tr: { bn: 'আমি কয়েকজন বন্ধু আর কিছু সহকর্মীকে দাওয়াত দিয়েছি।', en: 'I invited a few friends and some colleagues.' } },
    { id: 'ce-la-faccio', it: 'È difficile, ma insieme ce la faremo!', tr: { bn: 'কঠিন, তবে একসাথে আমরা ঠিকই পারব!', en: 'It is hard, but together we will manage!' } },
    { id: 'me-ne-vado', it: 'Sono le otto, me ne vado a casa.', tr: { bn: 'আটটা বাজে, আমি বাড়ি চলে যাচ্ছি।', en: 'It is eight o’clock, I am heading home.' } },
  ],
  grammar: [
    {
      id: 'doppia-negazione',
      title: { bn: 'দ্বৈত না-বাচক, অনির্দিষ্ট ও সর্বনামযুক্ত ক্রিয়া', en: 'Double negatives, indefinites & clitic verbs' },
      explanation: {
        bn: 'ক্রিয়ার আগে non রেখে পরে niente, nessuno, mai, più বসে। qualche ও ogni সবসময় একবচন বিশেষ্য নেয়; alcuni বহুবচন নেয়। farcela = সামলে পারা, andarsene = চলে যাওয়া।',
        en: 'Always place non before the verb with niente/nessuno/mai/più after it. qualche/ogni take singular nouns; alcuni takes plural.',
      },
      table: [
        { label: 'দুটোই একবচন', it: 'qualche giorno / ogni studente', tr: { bn: 'কয়েক দিন / প্রতিটি ছাত্র', en: 'a few days / every student' } },
        { label: 'দ্বৈত না-বাচক', it: 'Non ho visto nessuno', tr: { bn: 'আমি কাউকে দেখিনি', en: 'I saw nobody' } },
        { label: 'farcela', it: 'ce la faccio / ce l’ho fatta', tr: { bn: 'পারছি / পেরেছি', en: 'I cope / I made it' } },
      ],
      examples: [
        { id: 'a2u3l3-e1', it: 'Non voglio né parlare né litigare.', tr: { bn: 'আমি কথা বলতেও চাই না, ঝগড়াও করতে চাই না।', en: 'I want neither to talk nor to argue.' } },
      ],
    },
  ],
  dialogue: {
    title: { bn: 'অফিস শেষে কথা', en: 'End of the workday' },
    context: { bn: 'মার্কো ও সারা ব্যস্ত দিনের শেষে কথা বলছে।', en: 'Marco and Sara wrap up a busy day.' },
    lines: [
      { speaker: 'Sara', it: 'Non ce la faccio più, oggi c’erano troppi clienti!', tr: { bn: 'আমি আর পারছি না, আজ অনেক বেশি গ্রাহক ছিল!', en: 'I can’t take it anymore, there were too many customers today!' } },
      { speaker: 'Marco', it: 'Forza, manca poco! Hai lasciato qualche modulo sulla scrivania?', tr: { bn: 'সাহস রাখো, আর একটু! ডেস্কের ওপর কি কোনো ফর্ম রেখেছো?', en: 'Hang in there, nearly done! Did you leave any forms on the desk?' } },
      { speaker: 'Sara', it: 'No, non c’è più niente da firmare. Tra cinque minuti me ne vado.', tr: { bn: 'না, স্বাক্ষর করার আর কিছুই বাকি নেই। পাঁচ মিনিটের মধ্যে চলে যাব।', en: 'No, there is nothing left to sign. In five minutes I’m heading off.' } },
    ],
  },
  quiz: [
    { id: 'q1', prompt: { bn: 'সঠিক অনির্দিষ্ট শব্দ:', en: 'Pick the right indefinite:' }, it: 'Ho comprato ___ riviste italiane.', options: ['qualche', 'ogni', 'alcune', 'nessuna'], answer: 2, explanation: { bn: 'riviste স্ত্রীলিঙ্গ বহুবচন → alcune।', en: 'Plural feminine riviste takes alcune.' } },
    { id: 'q2', prompt: { bn: 'দ্বৈত না-বাচক:', en: 'Double negative:' }, it: 'Ieri sera ___ ho incontrato ___ per strada.', options: ['non / qualcuno', 'non / nessuno', 'mai / nessuno', 'non / niente'], answer: 1, explanation: { bn: 'মানুষ বোঝাতে non … nessuno।', en: 'Nobody = non … nessuno.' } },
    { id: 'q3', prompt: { bn: '"চলে যাচ্ছি":', en: '"I am leaving / heading off":' }, options: ['Ce la faccio', 'Me ne vado', 'Ci vuole', 'Mi annoio'], answer: 1, explanation: { bn: 'সঠিক রূপান্তর: «andarsene» থেকে পরিবর্তিত হয়ে «me ne vado» ব্যবহৃত হয়।', en: 'andarsene → me ne vado.' } },
    { id: 'q4', prompt: { bn: 'qualche-এর পর বিশেষ্য কেমন হয়?', en: 'Noun form after qualche:' }, it: 'Ho aspettato qualche ___.', options: ['minuti', 'minuto', 'ore', 'giorni'], answer: 1, explanation: { bn: 'qualche সবসময় একবচন বিশেষ্য নেয়।', en: 'qualche always takes a singular noun.' } },
  ],
  tip: { bn: 'nessuno যদি বাক্যের শুরুতে কর্তা হয় তবে non লাগে না: Nessuno lo sa (কেউ জানে না)।', en: 'When nessuno opens the sentence as the subject, omit non: Nessuno ha chiamato.' },
};

export const a2Unit3: Unit = {
  id: 'a2-u3',
  number: 3,
  title: 'Il lavoro e i servizi',
  subtitle: { bn: 'কাজ, ব্যাংক-পৌরসভা ও কার্যকর বাক্য', en: 'Work, public offices & everyday fluency' },
  lessons: [lesson1, lesson2, lesson3],
};
