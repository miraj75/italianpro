import type { Lesson, Unit } from '../types';

const lesson1: Lesson = {
  id: 'a1-u5-l1',
  number: 1,
  title: "Dov'è la stazione?",
  subtitle: { bn: 'দিকনির্দেশনা ও শহরের অবস্থান', en: 'Asking for directions in town' },
  minutes: 10,
  objectives: [
    { bn: 'শহরে কোনো জায়গার অবস্থান জিজ্ঞেস করতে পারবেন', en: 'Ask where places are in town' },
    { bn: 'c’è / ci sono এবং স্থানের অব্যয় ব্যবহার করতে পারবেন', en: 'Use c’è / ci sono and place prepositions' },
  ],
  phrases: [
    { id: 'scusi-dove', it: "Mi scusi, dov'è la stazione?", tr: { bn: 'মাফ করবেন, স্টেশন কোথায়?', en: 'Excuse me, where is the station?' } },
    { id: 'farmacia-vicino', it: "C'è una farmacia qui vicino?", tr: { bn: 'এখানে কাছে কি কোনো ফার্মেসি আছে?', en: 'Is there a pharmacy nearby?' } },
    { id: 'sempre-dritto', it: 'Vada sempre dritto, poi giri a destra.', tr: { bn: 'সোজা যান, তারপর ডানে ঘুরুন।', en: 'Go straight ahead, then turn right.' } },
    { id: 'a-sinistra', it: 'La banca è a sinistra, davanti alla posta.', tr: { bn: 'ব্যাংকটা বামে, পোস্ট অফিসের সামনে।', en: 'The bank is on the left, in front of the post office.' } },
    { id: 'lontano-qui', it: 'È lontano da qui?', tr: { bn: 'এখান থেকে কি দূরে?', en: 'Is it far from here?' } },
    { id: 'a-piedi', it: 'No, è a cinque minuti a piedi.', tr: { bn: 'না, হেঁটে পাঁচ মিনিটের পথ।', en: 'No, it is five minutes on foot.' } },
  ],
  grammar: [
    {
      id: 'luogo-u5',
      title: { bn: 'অবস্থান ও দিকনির্দেশনা', en: 'Location and directions' },
      explanation: {
        bn: 'davanti a (সামনে), dietro (পেছনে), vicino a (কাছে), lontano da (দূরে), tra (মাঝখানে)। আর্টিকেলের সাথে মিশে davanti alla, vicino al, lontano dal হয়।',
        en: 'Use davanti a (in front of), dietro (behind), vicino a (near), lontano da (far from), tra (between), combining a/da with the article.',
      },
      examples: [
        { id: 'u5-g1-e1', it: 'La fermata è davanti al supermercato.', tr: { bn: 'স্টপেজটি সুপারমার্কেটের সামনে।', en: 'The stop is in front of the supermarket.' } },
        { id: 'u5-g1-e2', it: 'Il bar è tra la libreria e la banca.', tr: { bn: 'ক্যাফেটি বইয়ের দোকান ও ব্যাংকের মাঝখানে।', en: 'The café is between the bookshop and the bank.' } },
      ],
    },
  ],
  dialogue: {
    title: { bn: 'স্টেশনের পথ খোঁজা', en: 'Finding the way to the station' },
    context: { bn: 'একজন পথচারীর কাছে রাহিম স্টেশনের রাস্তা জিজ্ঞেস করছে।', en: 'Rahim asks a passer-by how to get to the train station.' },
    lines: [
      { speaker: 'Rahim', it: "Mi scusi, dov'è la stazione centrale?", tr: { bn: 'মাফ করবেন, সেন্ট্রাল স্টেশন কোথায়?', en: 'Excuse me, where is the central station?' } },
      { speaker: 'Passante', it: 'Non è lontana. Vada sempre dritto per questa strada.', tr: { bn: 'দূরে নয়। এই রাস্তা ধরে সোজা যান।', en: 'It is not far. Go straight down this street.' } },
      { speaker: 'Rahim', it: 'E poi?', tr: { bn: 'তারপর?', en: 'And then?' } },
      { speaker: 'Passante', it: 'Alla piazza giri a sinistra. La stazione è proprio lì davanti.', tr: { bn: 'চত্বরে গিয়ে বামে ঘুরুন। স্টেশনটা ঠিক ওখানে সামনেই।', en: 'At the square turn left. The station is right there ahead.' } },
    ],
  },
  quiz: [
    {
      id: 'q1',
      prompt: { bn: '"সোজা যান" কোনটি?', en: 'Which means "Go straight ahead"?' },
      options: ['Giri a destra', 'Vada sempre dritto', 'Giri a sinistra', 'Torni indietro'],
      answer: 1,
      explanation: { bn: 'dritto = সোজা।', en: 'dritto means straight.' },
    },
    {
      id: 'q2',
      prompt: { bn: 'শূন্যস্থান পূরণ করুন:', en: 'Fill in the blank:' },
      it: 'La posta è vicino ___ parco.',
      options: ['al', 'il', 'dal', 'sul'],
      answer: 0,
      explanation: { bn: 'ব্যাকরণগত সংযোজন: vicino + a + il = vicino al নিয়ম অনুসারে সঠিক রূপটি গঠিত হয়েছে।', en: 'vicino takes a → vicino al.' },
    },
    {
      id: 'q3',
      prompt: { bn: '"বামে" ইতালিয়ানে কী?', en: 'How do you say "on the left"?' },
      options: ['a destra', 'a sinistra', 'davanti', 'dietro'],
      answer: 1,
      explanation: { bn: 'a sinistra = বামে, a destra = ডানে।', en: 'a sinistra = on the left.' },
    },
    {
      id: 'q4',
      prompt: { bn: '"হেঁটে" বোঝাতে কোনটি?', en: 'Which phrase means "on foot"?' },
      options: ['in treno', 'a piedi', 'in autobus', 'con la macchina'],
      answer: 1,
      explanation: { bn: 'a piedi = হেঁটে।', en: 'a piedi means on foot.' },
    },
  ],
  tip: {
    bn: 'অপরিচিত কাউকে রাস্তা জিজ্ঞেস করার আগে সবসময় "Mi scusi" (আনুষ্ঠানিক) বলুন।',
    en: 'Always start with polite "Mi scusi" when stopping a stranger for directions.',
  },
};

const lesson2: Lesson = {
  id: 'a1-u5-l2',
  number: 2,
  title: 'Prendere il treno',
  subtitle: { bn: 'ট্রেন, বাস ও টিকিট কেনা', en: 'Taking trains, buses and buying tickets' },
  minutes: 12,
  objectives: [
    { bn: 'টিকিট কাউন্টারে বা মেশিনে টিকিট কিনতে পারবেন', en: 'Buy train and bus tickets' },
    { bn: 'যানবাহনের সাথে in / a / da ব্যবহার করবেন', en: 'Use prepositions with transport and cities' },
  ],
  phrases: [
    { id: 'biglietto-ar', it: 'Un biglietto di andata e ritorno per Firenze.', tr: { bn: 'ফ্লোরেন্সের যাওয়া-আসার একটি টিকিট।', en: 'A return ticket to Florence.' } },
    { id: 'binario', it: 'Da quale binario parte il treno?', tr: { bn: 'ট্রেনটি কোন প্ল্যাটফর্ম থেকে ছাড়বে?', en: 'Which platform does the train leave from?' } },
    { id: 'convalidare', it: 'Devo convalidare il biglietto prima di salire?', tr: { bn: 'ওঠার আগে কি টিকিট ভ্যালিডেট করতে হবে?', en: 'Do I have to validate the ticket before boarding?' } },
    { id: 'in-treno', it: 'Vado a Milano in treno.', tr: { bn: 'আমি ট্রেনে করে মিলানে যাচ্ছি।', en: 'I am going to Milan by train.' } },
    { id: 'prossima-fermata', it: "Qual è la prossima fermata dell'autobus?", tr: { bn: 'বাসের পরের স্টপ কোনটি?', en: 'What is the next bus stop?' } },
  ],
  grammar: [
    {
      id: 'trasporti-u5',
      title: { bn: 'যানবাহনে in ও শহরের সাথে a / da', en: 'in for transport, a / da for cities' },
      explanation: {
        bn: 'যানবাহনের মাধ্যমে বোঝাতে "in" (in treno, in autobus, in metropolitana, in aereo), তবে হেঁটে হলে "a piedi"। গন্তব্য শহরের আগে "a", আর যাত্রা শুরু বোঝাতে "da" বসে।',
        en: 'Use "in" for transport (in treno, in autobus, in metro) and "a piedi" for on foot. Cities take "a" for destination and "da" for origin.',
      },
      examples: [
        { id: 'u5-g2-e1', it: 'Parto da Roma alle dieci e arrivo a Bologna alle dodici.', tr: { bn: 'আমি দশটায় রোম থেকে রওনা হই ও বারোটায় বোলোনিয়ায় পৌঁছাই।', en: 'I leave Rome at ten and arrive in Bologna at twelve.' } },
        { id: 'u5-g2-e2', it: 'Ogni giorno vado al lavoro in bicicletta.', tr: { bn: 'প্রতিদিন আমি সাইকেলে করে কাজে যাই।', en: 'Every day I go to work by bicycle.' } },
      ],
    },
  ],
  dialogue: {
    title: { bn: 'স্টেশনের টিকিট কাউন্টারে', en: 'At the station ticket desk' },
    context: { bn: 'নাদিয়া ভেনিসের টিকিট কিনছে।', en: 'Nadia buys a train ticket to Venice.' },
    lines: [
      { speaker: 'Nadia', it: 'Buongiorno, vorrei un biglietto di sola andata per Venezia.', tr: { bn: 'শুভ সকাল, আমি ভেনিসের একমুখী একটি টিকিট চাই।', en: 'Good morning, I would like a one-way ticket to Venice.' } },
      { speaker: 'Bigliettaio', it: 'C’è un treno alle undici e venti. Va bene?', tr: { bn: 'এগারোটা বিশে একটি ট্রেন আছে। চলবে?', en: 'There is a train at 11:20. Is that fine?' } },
      { speaker: 'Nadia', it: 'Sì, perfetto! Da quale binario parte?', tr: { bn: 'হ্যাঁ, দারুণ! কোন প্ল্যাটফর্ম থেকে ছাড়বে?', en: 'Yes, perfect! Which platform does it leave from?' } },
      { speaker: 'Bigliettaio', it: 'Dal binario quattro. Ricordi di convalidare il biglietto!', tr: { bn: 'চার নম্বর প্ল্যাটফর্ম থেকে। টিকিট ভ্যালিডেট করতে ভুলবেন না!', en: 'From platform four. Remember to validate your ticket!' } },
    ],
  },
  quiz: [
    {
      id: 'q1',
      prompt: { bn: 'যানবাহনের আগে কোন অব্যয় বসে?', en: 'Which preposition is used with means of transport?' },
      it: 'Vado a scuola ___ autobus.',
      options: ['a', 'in', 'da', 'su'],
      answer: 1,
      explanation: { bn: 'যানবাহনে in বসে: in autobus।', en: 'Transport takes in: in autobus.' },
    },
    {
      id: 'q2',
      prompt: { bn: '"il binario" অর্থ কী?', en: 'What does "il binario" mean?' },
      options: ['Ticket', 'Platform / track', 'Passenger', 'Station'],
      localizedOptions: {
        bn: ['টিকিট', 'প্ল্যাটফর্ম / রেললাইন', 'যাত্রী', 'স্টেশন'],
        en: ['Ticket', 'Platform / track', 'Passenger', 'Station'],
        it: ['Biglietto', 'Binario', 'Passeggero', 'Stazione'],
      },
      answer: 1,
      explanation: { bn: 'il binario = ট্রেনের প্ল্যাটফর্ম।', en: 'il binario means train platform.' },
    },
    {
      id: 'q3',
      prompt: { bn: '"যাওয়া-আসার টিকিট" কোনটি?', en: 'How do you say "return ticket"?' },
      options: ['sola andata', 'andata e ritorno', 'senza biglietto', 'prossima fermata'],
      answer: 1,
      explanation: { bn: 'andata e ritorno = যাওয়া ও আসা।', en: 'andata e ritorno = round-trip / return.' },
    },
    {
      id: 'q4',
      prompt: { bn: 'শূন্যস্থান পূরণ করুন:', en: 'Fill in the blank:' },
      it: 'Il treno parte ___ Milano alle otto.',
      options: ['a', 'in', 'da', 'per'],
      answer: 2,
      explanation: { bn: 'কোথাও থেকে ছাড়লে da বসে।', en: 'Departing from a place takes da.' },
    },
  ],
  tip: {
    bn: 'আঞ্চলিক (regionale) কাগজের টিকিট ট্রেনে ওঠার আগে প্ল্যাটফর্মের সবুজ/সাদা মেশিনে পাঞ্চ (convalidare) করতে ভুলবেন না!',
    en: 'Always stamp paper regional train tickets in the platform machine before boarding.',
  },
};

const lesson3: Lesson = {
  id: 'a1-u5-l3',
  number: 3,
  title: 'In città e i servizi',
  subtitle: { bn: 'হাসপাতাল, ব্যাংক, পোস্ট অফিস ও বাড়ি', en: 'City services, health and housing' },
  minutes: 10,
  objectives: [
    { bn: 'ব্যাংক, পোস্ট অফিস, ফার্মেসি ও ডাক্তারের কাছে কথা বলতে পারবেন', en: 'Communicate at the post office, bank, pharmacy and doctor' },
    { bn: 'avere দিয়ে শারীরিক অসুস্থতা জানাতে পারবেন', en: 'Express health symptoms using avere' },
  ],
  phrases: [
    { id: 'mal-testa', it: 'Ho mal di testa e un po’ di febbre.', tr: { bn: 'আমার মাথা ব্যথা আর একটু জ্বর আছে।', en: 'I have a headache and a slight fever.' } },
    { id: 'bisogno-medico', it: 'Ho bisogno di vedere un medico.', tr: { bn: 'আমার একজন ডাক্তার দেখানো দরকার।', en: 'I need to see a doctor.' } },
    { id: 'spedire-pacco', it: 'Vorrei spedire questo pacco in Bangladesh.', tr: { bn: 'আমি এই প্যাকেটটা বাংলাদেশে পাঠাতে চাই।', en: 'I would like to send this parcel to Bangladesh.' } },
    { id: 'aprire-conto', it: 'Vorrei aprire un conto in banca.', tr: { bn: 'আমি ব্যাংকে একটা অ্যাকাউন্ট খুলতে চাই।', en: 'I would like to open a bank account.' } },
    { id: 'documenti-servono', it: 'Quali documenti servono?', tr: { bn: 'কী কী কাগজপত্র লাগবে?', en: 'Which documents are needed?' } },
  ],
  grammar: [
    {
      id: 'avere-salute-u5',
      title: { bn: 'অসুস্থতা ও প্রয়োজন প্রকাশ', en: 'Expressing symptoms and needs' },
      explanation: {
        bn: 'ব্যথা বোঝাতে "avere mal di + অঙ্গ": ho mal di testa (মাথা ব্যথা), ho mal di pancia (পেট ব্যথা), ho mal di denti (দাঁত ব্যথা)। প্রয়োজন বোঝাতে "avere bisogno di…" ব্যবহার হয়।',
        en: 'For aches use avere mal di + body part (mal di testa, mal di pancia, mal di denti). For needs use avere bisogno di.',
      },
      examples: [
        { id: 'u5-g3-e1', it: 'Ho bisogno di una medicina per la febbre.', tr: { bn: 'জ্বরের জন্য আমার একটা ওষুধ দরকার।', en: 'I need medicine for fever.' } },
        { id: 'u5-g3-e2', it: 'Mi sento stanco oggi.', tr: { bn: 'আজ আমার ক্লান্ত লাগছে।', en: 'I feel tired today.' } },
      ],
    },
  ],
  dialogue: {
    title: { bn: 'ফার্মেসিতে', en: 'At the pharmacy' },
    context: { bn: 'রাহিমের সর্দি ও মাথা ব্যথা; সে ফার্মাসিস্টের সাথে কথা বলছে।', en: 'Rahim has a headache and speaks to the pharmacist.' },
    lines: [
      { speaker: 'Farmacista', it: 'Buongiorno, mi dica!', tr: { bn: 'শুভ সকাল, বলুন কী সাহায্য করতে পারি!', en: 'Good morning, how can I help?' } },
      { speaker: 'Rahim', it: 'Buongiorno, ho mal di testa e ho freddo da ieri.', tr: { bn: 'শুভ সকাল, গতকাল থেকে আমার মাথা ব্যথা আর ঠান্ডা লাগছে।', en: 'Good morning, I have a headache and feel cold since yesterday.' } },
      { speaker: 'Farmacista', it: 'Ha anche la febbre?', tr: { bn: 'আপনার কি জ্বরও আছে?', en: 'Do you also have a fever?' } },
      { speaker: 'Rahim', it: 'Sì, un po’. Ha bisogno di una ricetta?', tr: { bn: 'হ্যাঁ, একটু। এর জন্য কি প্রেসক্রিপশন লাগবে?', en: 'Yes, a little. Does it require a prescription?' } },
    ],
  },
  quiz: [
    {
      id: 'q1',
      prompt: { bn: '"আমার দাঁত ব্যথা" কোনটি?', en: 'How do you say "I have a toothache"?' },
      options: ['Sono mal di denti', 'Ho mal di denti', 'Ho mal di testa', 'Faccio mal di denti'],
      answer: 1,
      explanation: { bn: 'ব্যথায় avere mal di... ব্যবহার হয়: Ho mal di denti।', en: 'Aches use Ho mal di...' },
    },
    {
      id: 'q2',
      prompt: { bn: 'শূন্যস্থান পূরণ করুন:', en: 'Fill in the blank:' },
      it: 'Ho ___ di un documento.',
      options: ['bisogno', 'fame', 'paura', 'fretta'],
      answer: 0,
      explanation: { bn: 'avere bisogno di = প্রয়োজন হওয়া।', en: 'avere bisogno di = to need.' },
    },
    {
      id: 'q3',
      prompt: { bn: 'প্যাকেট পাঠাতে কোথায় যাবেন?', en: 'Where do you go to send a parcel?' },
      options: ['alla farmacia', 'alla posta', 'al bar', 'al museo'],
      answer: 1,
      explanation: { bn: 'la posta = পোস্ট অফিস।', en: 'la posta = post office.' },
    },
    {
      id: 'q4',
      prompt: { bn: '"la febbre" অর্থ কী?', en: 'What does "la febbre" mean?' },
      options: ['Cough', 'Fever', 'Medicine', 'Doctor'],
      localizedOptions: {
        bn: ['কাশি', 'জ্বর', 'ওষুধ', 'ডাক্তার'],
        en: ['Cough', 'Fever', 'Medicine', 'Doctor'],
        it: ['Tosse', 'Febbre', 'Medicina', 'Medico'],
      },
      answer: 1,
      explanation: { bn: 'la febbre = জ্বর।', en: 'la febbre = fever.' },
    },
  ],
  tip: {
    bn: 'ইতালিতে সবুজ ক্রস চিহ্ন (croce verde) দেখলেই বুঝবেন সেটি ফার্মেসি (farmacia)।',
    en: 'Look for a glowing green cross sign to spot an Italian farmacia.',
  },
};

export const a1Unit5: Unit = {
  id: 'a1-u5',
  number: 5,
  title: 'In città',
  subtitle: { bn: 'শহর, যাতায়াত ও জরুরি সেবা', en: 'City, transport and essential services' },
  lessons: [lesson1, lesson2, lesson3],
};
