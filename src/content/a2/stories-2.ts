import type { StoryItem } from '../academyTypes';
import { buildStory } from '../builders';

export const A2_STORIES_2: StoryItem[] = [
  buildStory({
    id: 'st-a2-12', level: 'A2', titleIt: 'Dal fruttivendolo di fiducia',
    title: { bn: 'পরিচিত ফল-সবজি বিক্রেতার দোকানে', en: 'At the local greengrocer’s' },
    topic: { bn: 'ci ও ne এবং কেনাকাটা', en: 'ci, ne & market shopping' },
    grammarIds: ['ci-ne', 'accordo-participio'],
    vocabKeys: ['w:A2:il fruttivendolo', 'w:A2:il chilo', "w:A2:l'etto"],
    paragraphs: [
      { it: 'Ogni mercoledì vado dal fruttivendolo sotto casa. Ci vado volentieri perché la frutta è sempre fresca e saporita.', tr: { bn: 'প্রতি বুধবার আমি বাড়ির নিচের ফল-সবজি বিক্রেতার কাছে যাই। সেখানে আনন্দে যাই কারণ ফল সবসময় তাজা ও সুস্বাদু থাকে।', en: 'Every Wednesday I go to the greengrocer downstairs. I gladly go there because the fruit is always fresh and tasty.' } },
      { it: '"Quante mele rosse desidera oggi?" "Me ne dia un chilo, per favore, e prenda anche tre etti di fragole."', tr: { bn: '"আজ কতগুলো লাল আপেল চান?" "অনুগ্রহ করে আমাকে এক কেজি দিন, আর তিনশো গ্রাম স্ট্রবেরিও দিন।"', en: '"How many red apples would you like today?" "Give me a kilo please, and also 300 grams of strawberries."' } },
      { it: 'Alla fine ho speso poco e ho portato due sacchetti pieni a casa: stasera ne mangeremo metà dopo cena!', tr: { bn: 'শেষ পর্যন্ত খরচ কম হলো এবং দুটি ভর্তি ব্যাগ বাড়িতে আনলাম: আজ রাতে খাবারের পর তার অর্ধেক খাব!', en: 'In the end I spent little and brought two full bags home: tonight we’ll eat half of them after dinner!' } },
    ],
    wordGlossary: [
      { word: 'di fiducia', base: 'fiducia', tr: { bn: 'বিশ্বস্ত / নিয়মিত', en: 'trusted / regular' }, pos: 'phrase' },
      { word: 'etto', base: 'l’etto', tr: { bn: '১০০ গ্রাম', en: '100 grams' }, pos: 'noun' },
    ],
    grammarBreakdown: [
      { sentenceIt: 'Ci vado volentieri / Me ne dia un chilo.', ruleTitle: { bn: 'স্থান বোঝাতে ci, পরিমাণে ne', en: 'ci for place, ne for quantity' }, explanation: { bn: 'ci = সেই দোকানে; ne = সেই আপেলের মধ্য থেকে এক কেজি।', en: 'ci replaces the shop; ne replaces "of apples".' }, grammarId: 'ci-ne' },
    ],
    mcq: [
      { id: 'st2-12-q1', prompt: { bn: 'tre etti কত গ্রাম?', en: 'How many grams is tre etti?' }, options: ['৩০ গ্রাম', '৩০০ গ্রাম', '১ কেজি', '৫০০ গ্রাম'], answer: 1, explanation: { bn: '১ etto = ১০০ গ্রাম → ৩ etti = ৩০০ গ্রাম।', en: '1 etto = 100g, so 300g.' } },
    ],
    trueFalse: [
      { id: 'st2-12-tf1', statementIt: 'Ha speso moltissimo al mercato.', statement: { bn: 'বাজারে তার খুব বেশি খরচ হয়েছে।', en: 'He spent a huge amount at the shop.' }, answer: false, explanation: { bn: 'ho speso poco (কম খরচ করেছে)।', en: 'He spent little.' } },
    ],
    fillBlank: [
      { id: 'st2-12-fb1', sentence: 'Vuoi delle arance? Sì, ___ prendo due chili.', options: ['ci', 'le', 'ne', 'lo'], answer: 2, explanation: { bn: 'সংখ্যাসহ অংশ বোঝাতে ne।', en: 'Quantities use ne.' } },
    ],
    shortAnswer: [
      { id: 'st2-12-sa1', question: { bn: 'কেন সে এই দোকানে যেতে পছন্দ করে?', en: 'Why does he like going to that shop?' }, sampleAnswerIt: 'Perché la frutta è sempre fresca e saporita.', keywords: ['fresca', 'saporita'] },
    ],
    practice: {
      retellPrompt: { bn: 'বাজারের দোকানে কথোপকথনের ৩টি বাক্য ci ও ne দিয়ে লিখুন।', en: 'Write 3 shop sentences using ci and ne.' },
      completeMissing: { promptIt: 'Quanti biglietti hai? ___ ho comprati due.', hint: { bn: 'Ne', en: 'partitive ne' }, sampleIt: 'Ne ho comprati due.' },
      buildSimilar: { patternIt: 'Ci vado ogni settimana perché è comodo.', prompt: { bn: 'আপনি প্রায়ই যান এমন একটি জায়গার কথা লিখুন।', en: 'Write about a place you go often.' }, sampleIt: 'Vado spesso in biblioteca: ci studio bene.' },
      altEndingPrompt: { bn: 'এই ফল দিয়ে তারা কোন ডেজার্ট বানাতে পারে লিখুন।', en: 'What dessert could they make with the fruit?' },
    },
  }),

  buildStory({
    id: 'st-a2-13', level: 'A2', titleIt: 'Una giornata in comune',
    title: { bn: 'পৌরসভা অফিসে একদিন', en: 'A morning at the town hall' },
    topic: { bn: 'আর্টিকেলযুক্ত অব্যয় ও নথি', en: 'Contracted prepositions & bureaucracy' },
    grammarIds: ['preposizioni-articolate', 'si-impersonale-a2'],
    vocabKeys: ['w:A2:il comune', 'w:A2:lo sportello', 'w:A2:la residenza'],
    paragraphs: [
      { it: 'Stamattina alle otto e mezza sono andato al comune per chiedere il cambio di residenza. C’era già una piccola fila davanti allo sportello.', tr: { bn: 'আজ সকাল সাড়ে আটটায় আমি বসবাস নিবন্ধনের ঠিকানা বদলের জন্য পৌরসভায় গিয়েছিলাম। কাউন্টারের সামনে ইতিমধ্যেই ছোট একটা লাইন ছিল।', en: 'This morning at 8:30 I went to the town hall to request a change of residence. There was already a short queue at the counter.' } },
      { it: 'Nell’attesa ho controllato tutti i documenti nella mia cartella: passaporto, contratto d’affitto e codice fiscale.', tr: { bn: 'অপেক্ষার সময় আমি ফাইলে থাকা সব কাগজপত্র পরীক্ষা করে নিলাম: পাসপোর্ট, বাসা ভাড়ার চুক্তি এবং ট্যাক্স কোড।', en: 'While waiting I checked all documents in my folder: passport, rental contract, and tax code.' } },
      { it: 'L’impiegata allo sportello tre è stata chiarissima: ha inserito i dati nel sistema e mi ha consegnato la ricevuta ufficiale.', tr: { bn: 'তিন নম্বর কাউন্টারের কর্মকর্তা খুব স্পষ্ট ছিলেন: তিনি সিস্টেমে তথ্য তুলে আমাকে আনুষ্ঠানিক রসিদ দিলেন।', en: 'The clerk at counter three was crystal clear: she entered the details and handed me the official receipt.' } },
    ],
    wordGlossary: [
      { word: 'attesa', base: 'l’attesa', tr: { bn: 'অপেক্ষা', en: 'waiting' }, pos: 'noun' },
      { word: 'inserito', base: 'inserire', tr: { bn: 'প্রবেশ করানো / এন্ট্রি করা', en: 'entered' }, pos: 'verb' },
    ],
    grammarBreakdown: [
      { sentenceIt: 'Davanti allo sportello / Nella cartella.', ruleTitle: { bn: 'preposizioni articolate', en: 'Contracted prepositions' }, explanation: { bn: 'a + lo = allo (s+ব্যঞ্জনে lo); in + la = nella।', en: 'a+lo=allo; in+la=nella.' }, grammarId: 'preposizioni-articolate' },
    ],
    mcq: [
      { id: 'st2-13-q1', prompt: { bn: 'সে কেন পৌরসভায় গিয়েছিল?', en: 'Why did he go to the town hall?' }, options: ['পাসপোর্ট নবায়ন', 'ঠিকানা বদলের নিবন্ধন', 'ব্যাংক অ্যাকাউন্ট', 'ড্রাইভিং লাইসেন্স'], answer: 1, explanation: { bn: 'per chiedere il cambio di residenza।', en: 'Change of residence.' } },
    ],
    trueFalse: [
      { id: 'st2-13-tf1', statementIt: 'Aveva dimenticato il codice fiscale a casa.', statement: { bn: 'সে বাড়িতে ট্যাক্স কোড ফেলে এসেছিল।', en: 'He forgot his tax code at home.' }, answer: false, explanation: { bn: 'সব কাগজই ফাইলে ছিল।', en: 'He had all documents ready.' } },
    ],
    fillBlank: [
      { id: 'st2-13-fb1', sentence: 'Ho consegnato il modulo ___ ufficio del primo piano.', options: ['nel', 'nell’', 'in l’', 'al'], answer: 1, explanation: { bn: 'in + l’ufficio = nell’ufficio।', en: 'in + l’ = nell’.' } },
    ],
    shortAnswer: [
      { id: 'st2-13-sa1', question: { bn: 'কর্মকর্তা শেষে তাকে কী দিলেন?', en: 'What did the clerk give him at the end?' }, sampleAnswerIt: 'Gli ha consegnato la ricevuta ufficiale.', keywords: ['ricevuta'] },
    ],
    practice: {
      retellPrompt: { bn: 'পৌরসভা বা অফিসে কাজের অভিজ্ঞতা ৩ বাক্যে লিখুন।', en: 'Describe an errand at a public office in 3 sentences.' },
      completeMissing: { promptIt: 'Le chiavi sono ___ zaino.', hint: { bn: 'in + lo', en: 'contract in + lo' }, sampleIt: 'Le chiavi sono nello zaino.' },
      buildSimilar: { patternIt: 'Ho controllato i documenti nella borsa.', prompt: { bn: 'al/nel/sul ব্যবহার করে একটি বাক্য লিখুন।', en: 'Write a sentence using al, nel, or sul.' }, sampleIt: 'La ricevuta è sul tavolo della cucina.' },
      altEndingPrompt: { bn: 'কাজ শেষ করে বাসায় ফেরার সময় কী হলো লিখুন।', en: 'What happened on the way home?' },
    },
  }),

  buildStory({
    id: 'st-a2-14', level: 'A2', titleIt: 'Indicazioni nel centro storico',
    title: { bn: 'পুরনো শহরের পথে দিকনির্দেশনা', en: 'Directions in the historic centre' },
    topic: { bn: 'আদেশ/নির্দেশ ও ক্রমবাচক সংখ্যা', en: 'Imperative & ordinals' },
    grammarIds: ['imperativo', 'numerali-ordinali'],
    vocabKeys: ['w:A2:il semaforo', "w:A2:l'incrocio", 'w:A2:la cartina'],
    paragraphs: [
      { it: 'Due turisti si sono persi vicino al ponte e chiedono aiuto a un poliziotto: "Scusi, come arriviamo alla stazione centrale?"', tr: { bn: 'দুজন পর্যটক সেতুর কাছে পথ হারিয়ে একজন পুলিশের সাহায্য চাইল: "মাফ করবেন, কেন্দ্রীয় স্টেশনে কীভাবে যাব?"', en: 'Two tourists got lost near the bridge and ask a police officer: "Excuse me, how do we reach central station?"' } },
      { it: '"È facile: andate sempre dritto fino al secondo semaforo, poi attraversate l’incrocio e girate alla prima strada a destra."', tr: { bn: '"সহজ: দ্বিতীয় ট্রাফিক লাইট পর্যন্ত সোজা যান, তারপর মোড় পার হয়ে ডানদিকের প্রথম রাস্তায় ঘুরুন।"', en: '"It’s easy: go straight to the second traffic light, cross the crossroads, and turn onto the first street on the right."' } },
      { it: '"Non prendete il vicolo stretto sulla sinistra! Seguite i cartelli gialli e vedrete subito la piazza."', tr: { bn: '"বামদিকের সরু গলিটা ধরবেন না! হলুদ সাইনবোর্ডগুলো অনুসরণ করুন, সাথে সাথে চত্বর দেখতে পাবেন।"', en: '"Don’t take the narrow alley on the left! Follow the yellow signs and you will see the square immediately."' } },
    ],
    wordGlossary: [
      { word: 'vicolo', base: 'il vicolo', tr: { bn: 'সরু গলি', en: 'narrow alley' }, pos: 'noun' },
      { word: 'cartelli', base: 'il cartello', tr: { bn: 'সাইনবোর্ড', en: 'signs' }, pos: 'noun' },
    ],
    grammarBreakdown: [
      { sentenceIt: 'Non prendete il vicolo / Seguite i cartelli.', ruleTitle: { bn: 'voi আদেশ (imperativo)', en: 'Plural voi imperative' }, explanation: { bn: 'একাধিক মানুষকে নির্দেশ দিতে বর্তমান কালের voi রূপ (andate, prendete, seguite) ব্যবহৃত হয়।', en: 'Addressing two or more people uses the voi form.' }, grammarId: 'imperativo' },
    ],
    mcq: [
      { id: 'st2-14-q1', prompt: { bn: 'কত নম্বর ট্রাফিক লাইটে থামতে বলেছে?', en: 'Up to which traffic light should they go?' }, options: ['প্রথম', 'দ্বিতীয়', 'তৃতীয়', 'চতুর্থ'], answer: 1, explanation: { bn: 'al secondo semaforo = দ্বিতীয় ট্রাফিক লাইট।', en: 'The second traffic light.' } },
    ],
    trueFalse: [
      { id: 'st2-14-tf1', statementIt: 'Devono entrare nel vicolo stretto.', statement: { bn: 'তাদের সরু গলিতে ঢুকতে হবে।', en: 'They must enter the narrow alley.' }, answer: false, explanation: { bn: 'পুলিশ বলেছে Non prendete il vicolo stretto।', en: 'He warned them not to take it.' } },
    ],
    fillBlank: [
      { id: 'st2-14-fb1', sentence: 'Luca, non ___ la chiave sul tavolo!', options: ['lascia', 'lasciare', 'lasci', 'lasciate'], answer: 1, explanation: { bn: 'তুমি (tu) না-বাচক আদেশে non + infinito (lasciare)।', en: 'Negative tu imperative takes the infinitive.' } },
    ],
    shortAnswer: [
      { id: 'st2-14-sa1', question: { bn: 'কোন রঙের সাইনবোর্ড অনুসরণ করতে বলা হয়েছে?', en: 'Which colour signs should they follow?' }, sampleAnswerIt: 'Devono seguire i cartelli gialli.', keywords: ['gialli'] },
    ],
    practice: {
      retellPrompt: { bn: 'কাউকে স্টেশন থেকে আপনার বাসায় আসার নির্দেশ ৩ বাক্যে লিখুন।', en: 'Give 3-step directions from the station to your home.' },
      completeMissing: { promptIt: 'Scusi, ___ dritto fino alla piazza.', hint: { bn: 'vada (Lei)', en: 'formal imperative' }, sampleIt: 'Scusi, vada dritto fino alla piazza.' },
      buildSimilar: { patternIt: 'Gira alla seconda strada a sinistra.', prompt: { bn: 'একটি দিকনির্দেশনা লিখুন।', en: 'Write a direction instruction.' }, sampleIt: 'Prendi l’autobus alla terza fermata.' },
      altEndingPrompt: { bn: 'স্টেশনে পৌঁছে পর্যটকরা কী করল লিখুন।', en: 'What did the tourists do upon reaching the station?' },
    },
  }),

  buildStory({
    id: 'st-a2-15', level: 'A2', titleIt: 'Una cena speciale al ristorante',
    title: { bn: 'রেস্টুরেন্টে বিশেষ রাতের খাবার', en: 'A special dinner at a restaurant' },
    topic: { bn: 'ভদ্র অনুরোধ ও খাবার', en: 'Polite requests & dining' },
    grammarIds: ['condizionale', 'volere-piacere-cortesia'],
    vocabKeys: ["w:A2:l'antipasto", 'w:A2:il contorno', 'w:A2:vegetariano'],
    paragraphs: [
      { it: 'Per festeggiare il compleanno di nostro padre, vorremmo prenotare un tavolo tranquillo per cinque persone sabato alle otto.', tr: { bn: 'বাবার জন্মদিন উদযাপন করতে আমরা শনিবার রাত আটটায় পাঁচজনের জন্য একটি শান্ত টেবিল বুক করতে চাই।', en: 'To celebrate our father’s birthday, we would like to book a quiet table for five on Saturday at eight.' } },
      { it: 'Al ristorante chiediamo con gentilezza: "Scusi, potrebbe portarci il menu e consigliarci un secondo piatto vegetariano?"', tr: { bn: 'রেস্টুরেন্টে ভদ্রভাবে জিজ্ঞেস করলাম: "মাফ করবেন, মেনুটা দেবেন এবং একটি নিরামিষ মূল খাবার পরামর্শ দেবেন কি?"', en: 'At the restaurant we politely ask: "Excuse me, could you bring us the menu and recommend a vegetarian main course?"' } },
      { it: 'Il cameriere risponde: "Volentieri! Vi piacerebbe assaggiare i funghi alla griglia con patate al forno come contorno?"', tr: { bn: 'ওয়েটার উত্তর দেন: "আনন্দের সাথে! আপনারা কি পার্শ্ব খাবার হিসেবে ওভেন-বেইকড আলুসহ গ্রিলড মাশরুম চেখে দেখতে চাইবেন?"', en: 'The waiter replies: "Gladly! Would you like to try grilled mushrooms with roast potatoes as a side dish?"' } },
    ],
    wordGlossary: [
      { word: 'consigliarci', base: 'consigliare + ci', tr: { bn: 'আমাদের পরামর্শ দেওয়া', en: 'recommend to us' }, pos: 'verb' },
      { word: 'alla griglia', base: 'griglia', tr: { bn: 'গ্রিল করা', en: 'grilled' }, pos: 'phrase' },
    ],
    grammarBreakdown: [
      { sentenceIt: 'Potrebbe portarci / Vi piacerebbe assaggiare?', ruleTitle: { bn: 'condizionale ভদ্র আলাপে', en: 'Conditional for polite offers' }, explanation: { bn: 'potrebbe, vorrei, piacerebbe ইত্যাদি অনুরোধ ও প্রস্তাবকে মার্জিত করে।', en: 'Conditionals soften both requests and invitations.' }, grammarId: 'condizionale' },
    ],
    mcq: [
      { id: 'st2-15-q1', prompt: { bn: 'তারা কয়জনের টেবিল বুক করতে চেয়েছিল?', en: 'For how many people did they want a table?' }, options: ['৩ জন', '৪ জন', '৫ জন', '৬ জন'], answer: 2, explanation: { bn: 'per cinque persone = ৫ জন।', en: 'Five people.' } },
    ],
    trueFalse: [
      { id: 'st2-15-tf1', statementIt: 'Il cameriere propone un piatto di carne.', statement: { bn: 'ওয়েটার মাংসের পদ প্রস্তাব করেছে।', en: 'The waiter suggests a meat dish.' }, answer: false, explanation: { bn: 'মাশরুম ও আলু (নিরামিষ) প্রস্তাব করেছে।', en: 'He suggests mushrooms and potatoes.' } },
    ],
    fillBlank: [
      { id: 'st2-15-fb1', sentence: 'Scusi, ___ pagare il conto con la carta?', options: ['posso', 'potrei', 'potrò', 'potevo'], answer: 1, explanation: { bn: 'ভদ্র অনুরোধে potrei।', en: 'Polite request takes potrei.' } },
    ],
    shortAnswer: [
      { id: 'st2-15-sa1', question: { bn: 'কেন তারা রেস্টুরেন্টে যাচ্ছে?', en: 'Why are they going to the restaurant?' }, sampleAnswerIt: 'Per festeggiare il compleanno del padre.', keywords: ['compleanno', 'padre'] },
    ],
    practice: {
      retellPrompt: { bn: 'রেস্টুরেন্টে অর্ডার দেওয়ার ৩টি ভদ্র বাক্য লিখুন।', en: 'Write 3 polite restaurant sentences.' },
      completeMissing: { promptIt: '___ avere un po’ di pane fresco, per favore?', hint: { bn: 'Potrei', en: 'polite conditional' }, sampleIt: 'Potrei avere un bicchiere d’acqua, per favore?' },
      buildSimilar: { patternIt: 'Vorremmo un tavolo vicino alla finestra.', prompt: { bn: 'vorrei বা vorremmo দিয়ে একটি অর্ডার লিখুন।', en: 'Write a request with vorrei/vorremmo.' }, sampleIt: 'Vorrei un antipasto di verdure.' },
      altEndingPrompt: { bn: 'জন্মদিনের কেক কেটে তারা কী করল লিখুন।', en: 'What happened when the birthday cake arrived?' },
    },
  }),

  buildStory({
    id: 'st-a2-16', level: 'A2', titleIt: 'La foto di famiglia',
    title: { bn: 'পরিবারের পুরনো ছবি', en: 'The family photograph' },
    topic: { bn: 'সম্বন্ধসূচক (possessivi) ও পরিবার', en: 'Possessives & family' },
    grammarIds: ['possessivi', 'imperfetto'],
    vocabKeys: ['w:A2:la fotografia', 'w:A2:il matrimonio', 'w:A2:il cugino'.replace('il cugino', 'la coppia'.replace('la coppia', 'la festa'))],
    paragraphs: [
      { it: 'Ieri mia zia mi ha mostrato le fotografie del matrimonio dei miei genitori. Nella foto mio padre aveva i capelli lunghi e sorrideva molto.', tr: { bn: 'গতকাল আমার খালা আমাকে আমার বাবা-মায়ের বিয়ের ছবি দেখিয়েছেন। ছবিতে আমার বাবার লম্বা চুল ছিল এবং তিনি খুব হাসছিলেন।', en: 'Yesterday my aunt showed me photos of my parents’ wedding. In the photo my father had long hair and was smiling brightly.' } },
      { it: 'Accanto a lui c’erano sua sorella maggiore e i loro cugini più giovani. La loro gioia era davvero contagiosa.', tr: { bn: 'তাঁর পাশে ছিলেন তাঁর বড় বোন এবং তাঁদের ছোট কাজিনরা। তাঁদের আনন্দ সত্যিই ছোঁয়াচে ছিল।', en: 'Next to him stood his older sister and their younger cousins. Their joy was truly contagious.' } },
      { it: 'Oggi i miei genitori festeggiano trent’anni insieme e tutte le nostre famiglie si riuniranno per cena!', tr: { bn: 'আজ আমার বাবা-মা একসাথে ত্রিশ বছর উদযাপন করছেন এবং আমাদের সব পরিবার রাতের খাবারে একত্রিত হবে!', en: 'Today my parents celebrate thirty years together and all our families will gather for dinner!' } },
    ],
    wordGlossary: [
      { word: 'contagiosa', base: 'contagioso', tr: { bn: 'ছোঁয়াচে / সংক্রামক (আনন্দ)', en: 'contagious' }, pos: 'adj' },
      { word: 'si riuniranno', base: 'riunirsi', tr: { bn: 'একত্রিত হবে', en: 'will gather' }, pos: 'verb' },
    ],
    grammarBreakdown: [
      { sentenceIt: 'Mio padre / I miei genitori / La loro gioia.', ruleTitle: { bn: 'possessivi ও আর্টিকেলের নিয়ম', en: 'Possessive article rules' }, explanation: { bn: 'একবচন পরিবারে আর্টিকেল নেই (mio padre); বহুবচনে আছে (i miei genitori); loro-তে সবসময় আছে (la loro gioia)।', en: 'Omit article for singular family nouns; keep for plural and always for loro.' }, grammarId: 'possessivi' },
    ],
    mcq: [
      { id: 'st2-16-q1', prompt: { bn: 'বাবা-মা একসাথে কত বছর উদযাপন করছেন?', en: 'How many years together are the parents celebrating?' }, options: ['১০ বছর', '২০ বছর', '২৫ বছর', '৩০ বছর'], answer: 3, explanation: { bn: 'trent’anni = ৩০ বছর।', en: 'Thirty years.' } },
    ],
    trueFalse: [
      { id: 'st2-16-tf1', statementIt: 'Si dice sempre "il mio padre" in italiano standard.', statement: { bn: 'প্রমিত ইতালিয়ানে সবসময় "il mio padre" বলা হয়।', en: 'Standard Italian always says "il mio padre".' }, answer: false, explanation: { bn: 'একবচন ঘনিষ্ঠ আত্মীয়ের আগে আর্টিকেল বাদ যায়: mio padre।', en: 'Singular unmodified family nouns drop the article: mio padre.' } },
    ],
    fillBlank: [
      { id: 'st2-16-fb1', sentence: 'Ecco ___ fratelli maggiori di Paolo.', options: ['i suoi', 'suoi', 'il suo', 'loro'], answer: 0, explanation: { bn: 'বহুবচন fratelli-র আগে আর্টিকেল বসে: i suoi।', en: 'Plural family nouns require the article.' } },
    ],
    shortAnswer: [
      { id: 'st2-16-sa1', question: { bn: 'কে বিয়ের ছবিগুলো দেখিয়েছেন?', en: 'Who showed the wedding photos?' }, sampleAnswerIt: 'Gliele ha mostrate sua zia.', keywords: ['zia'] },
    ],
    practice: {
      retellPrompt: { bn: 'আপনার পরিবার সম্পর্কে ৩টি বাক্য সঠিক আর্টিকেলসহ লিখুন।', en: 'Write 3 sentences about your family applying the article rules.' },
      completeMissing: { promptIt: '___ sorella lavora in banca, ma i ___ cugini studiano.', hint: { bn: 'Mia / miei', en: 'sg no article / pl article' }, sampleIt: 'Mia sorella lavora in banca, ma i miei cugini studiano.' },
      buildSimilar: { patternIt: 'La loro casa è piena di libri.', prompt: { bn: 'il loro / la loro দিয়ে একটি বাক্য লিখুন।', en: 'Write a sentence using il/la loro.' }, sampleIt: 'Il loro giardino è molto tranquillo.' },
      altEndingPrompt: { bn: 'পারিবারিক নৈশভোজে কে কী উপহার দিল লিখুন।', en: 'What gift might they give their parents?' },
    },
  }),

  buildStory({
    id: 'st-a2-17', level: 'A2', titleIt: 'Cinque anni in Italia',
    title: { bn: 'ইতালিতে পাঁচ বছর', en: 'Five years in Italy' },
    topic: { bn: 'সময় প্রকাশ (da, fa, fra, per)', en: 'Time expressions' },
    grammarIds: ['tempo', 'passato-prossimo'],
    vocabKeys: ['w:A2:la scadenza', "w:A2:l'esperienza", 'w:A2:fa'],
    paragraphs: [
      { it: 'Sono arrivato a Torino cinque anni fa per frequentare un corso universitario. All’inizio ho studiato italiano per sei mesi ogni pomeriggio.', tr: { bn: 'বিশ্ববিদ্যালয়ের কোর্স করতে পাঁচ বছর আগে আমি তুরিনে এসেছিলাম। শুরুতে ছয় মাস ধরে প্রতিদিন বিকেলে ইতালিয়ান পড়েছি।', en: 'I arrived in Turin five years ago to attend a university course. At first I studied Italian for six months every afternoon.' } },
      { it: 'Adesso lavoro in uno studio di architettura da quasi due anni e mi trovo benissimo con tutto il gruppo.', tr: { bn: 'এখন প্রায় দুই বছর ধরে আমি একটি স্থাপত্য স্টুডিওতে কাজ করছি এবং পুরো দলের সাথে খুব ভালো আছি।', en: 'Now I have worked at an architecture studio for nearly two years and get on great with the team.' } },
      { it: 'Fra pochi giorni scadrà il mio vecchio permesso di soggiorno, ma ho già preso l’appuntamento per il rinnovo!', tr: { bn: 'কয়েক দিনের মধ্যেই আমার পুরনো রেসিডেন্স পারমিটের মেয়াদ শেষ হবে, তবে নবায়নের জন্য ইতিমধ্যেই অ্যাপয়েন্টমেন্ট নিয়েছি!', en: 'In a few days my old residence permit will expire, yet I already booked my renewal appointment!' } },
    ],
    wordGlossary: [
      { word: 'frequentare', base: 'frequentare', tr: { bn: 'নিয়মিত উপস্থিত থাকা (কোর্সে)', en: 'to attend (a course)' }, pos: 'verb' },
      { word: 'rinnovo', base: 'il rinnovo', tr: { bn: 'নবায়ন', en: 'renewal' }, pos: 'noun' },
    ],
    grammarBreakdown: [
      { sentenceIt: 'Cinque anni fa / Per sei mesi / Da due anni / Fra pochi giorni.', ruleTitle: { bn: 'চারটি সময়ের অব্যয়', en: 'Four key time markers' }, explanation: { bn: 'fa = অতীতে আগে; per = সম্পন্ন মোট সময়কাল; da = এখনো চলমান সময়কাল; fra = ভবিষ্যতে আর কত পর।', en: 'fa = ago; per = completed span; da = still ongoing; fra = in (future).' }, grammarId: 'tempo' },
    ],
    mcq: [
      { id: 'st2-17-q1', prompt: { bn: 'সে কতদিন ধরে আর্কিটেকচার স্টুডিওতে কাজ করছে?', en: 'How long has he worked at the studio?' }, options: ['৬ মাস', 'প্রায় ২ বছর', '৫ বছর', 'কয়েক দিন'], answer: 1, explanation: { bn: 'da quasi due anni = প্রায় দুই বছর ধরে।', en: 'Nearly two years.' } },
    ],
    trueFalse: [
      { id: 'st2-17-tf1', statementIt: 'Non ha ancora chiesto l’appuntamento per il rinnovo.', statement: { bn: 'সে এখনো নবায়নের অ্যাপয়েন্টমেন্ট চায়নি।', en: 'He hasn’t booked the renewal appointment yet.' }, answer: false, explanation: { bn: 'ho già preso l’appuntamento (ইতিমধ্যে নিয়েছে)।', en: 'He already booked it.' } },
    ],
    fillBlank: [
      { id: 'st2-17-fb1', sentence: 'Partiremo per la Sicilia ___ due settimane.', options: ['fa', 'da', 'fra', 'per'], answer: 2, explanation: { bn: 'ভবিষ্যতে "দুই সপ্তাহ পর" → fra।', en: 'Future offset takes fra.' } },
    ],
    shortAnswer: [
      { id: 'st2-17-sa1', question: { bn: 'সে কোন শহরে থাকে?', en: 'Which city does he live in?' }, sampleAnswerIt: 'Abita e lavora a Torino.', keywords: ['torino'] },
    ],
    practice: {
      retellPrompt: { bn: 'da, fa, fra, per দিয়ে নিজের জীবন নিয়ে ৪টি বাক্য লিখুন।', en: 'Write 4 sentences about yourself using da, fa, fra, and per.' },
      completeMissing: { promptIt: 'Sono arrivato in questa città due anni ___.', hint: { bn: 'fa', en: 'ago' }, sampleIt: 'Sono arrivato qui due anni fa.' },
      buildSimilar: { patternIt: 'Studio italiano da otto mesi.', prompt: { bn: 'কতদিন ধরে ইতালিয়ান পড়ছেন লিখুন।', en: 'Write how long you have been learning Italian.' }, sampleIt: 'Studio italiano da un anno.' },
      altEndingPrompt: { bn: 'অ্যাপয়েন্টমেন্টের দিনে কী কাগজপত্র নিয়ে যাবে লিখুন।', en: 'Which documents will he take to the appointment?' },
    },
  }),

  buildStory({
    id: 'st-a2-18', level: 'A2', titleIt: 'Una giornata di pioggia e idee',
    title: { bn: 'বৃষ্টিভেজা দিন ও নতুন পরিকল্পনা', en: 'A rainy day and new plans' },
    topic: { bn: 'সংযোজক শব্দ (connettivi)', en: 'Linking clauses' },
    grammarIds: ['connettivi', 'imperfetto'],
    vocabKeys: ['w:A2:il temporale', 'w:A2:quindi', 'w:A2:invece'],
    paragraphs: [
      { it: 'Avevamo organizzato un picnic al lago, però stamattina è arrivato un forte temporale.', tr: { bn: 'আমরা হ্রদে পিকনিকের আয়োজন করেছিলাম, কিন্তু আজ সকালে প্রবল ঝড়বৃষ্টি চলে এলো।', en: 'We had organised a picnic at the lake, however a strong thunderstorm arrived this morning.' } },
      { it: 'Quindi siamo rimasti in casa. Anche se eravamo un po’ delusi, non ci siamo annoiati: mentre io preparavo il tè caldo, Elena cercava un film da guardare.', tr: { bn: 'তাই আমরা ঘরেই থাকলাম। একটু হতাশ হলেও আমরা বিরক্ত হইনি: আমি যখন গরম চা বানাচ্ছিলাম, এলেনা দেখার জন্য একটা সিনেমা খুঁজছিল।', en: 'So we stayed home. Even though we were slightly disappointed, we didn’t get bored: while I made hot tea, Elena looked for a film.' } },
      { it: 'Alla fine, invece di uscire al freddo, abbiamo passato un pomeriggio tranquillo e divertente sul divano!', tr: { bn: 'শেষ পর্যন্ত ঠান্ডার মধ্যে বের না হয়ে বরং আমরা সোফার ওপর শান্ত ও মজার একটা বিকেল কাটালাম!', en: 'In the end, instead of going out into the cold, we spent a cosy, fun afternoon on the sofa!' } },
    ],
    wordGlossary: [
      { word: 'delusi', base: 'deluso', tr: { bn: 'হতাশ', en: 'disappointed' }, pos: 'adj' },
      { word: 'ci siamo annoiati', base: 'annoiarsi', tr: { bn: 'বিরক্ত হওয়া', en: 'got bored' }, pos: 'verb' },
    ],
    grammarBreakdown: [
      { sentenceIt: 'Anche se eravamo delusi, non ci siamo annoiati.', ruleTitle: { bn: 'connettivi প্রবাহ', en: 'Connectors in context' }, explanation: { bn: 'anche se (যদিও), quindi (তাই), invece di (পরিবর্তে) ভাবনাগুলো স্পষ্টভাবে যুক্ত করে।', en: 'anche se, quindi, invece di structure contrast and consequence.' }, grammarId: 'connettivi' },
    ],
    mcq: [
      { id: 'st2-18-q1', prompt: { bn: 'পিকনিক কেন বাতিল হলো?', en: 'Why was the picnic cancelled?' }, options: ['অসুস্থতা', 'ঝড়বৃষ্টি', 'দেরি হওয়া', 'বাস না পাওয়া'], answer: 1, explanation: { bn: 'è arrivato un forte temporale।', en: 'A thunderstorm arrived.' } },
    ],
    trueFalse: [
      { id: 'st2-18-tf1', statementIt: 'Si sono annoiati tutto il pomeriggio.', statement: { bn: 'তারা সারাবিকেল বিরক্ত হয়েছিল।', en: 'They were bored all afternoon.' }, answer: false, explanation: { bn: 'non ci siamo annoiati।', en: 'They were not bored.' } },
    ],
    fillBlank: [
      { id: 'st2-18-fb1', sentence: 'Pioveva forte, ___ abbiamo preso l’ombrello.', options: ['però', 'quindi', 'mentre', 'anche se'], answer: 1, explanation: { bn: 'কারণ ও ফলের মাঝে quindi।', en: 'Consequence takes quindi.' } },
    ],
    shortAnswer: [
      { id: 'st2-18-sa1', question: { bn: 'ঘরে বসে তারা কী করেছিল?', en: 'What did they do at home instead?' }, sampleAnswerIt: 'Hanno bevuto il tè caldo e guardato un film.', keywords: ['tè', 'film'] },
    ],
    practice: {
      retellPrompt: { bn: 'però, quindi, mentre ব্যবহার করে আবহাওয়া ও পরিকল্পনা নিয়ে ৩ বাক্য লিখুন।', en: 'Write 3 sentences using però, quindi, and mentre.' },
      completeMissing: { promptIt: '___ faceva freddo, siamo usciti lo stesso.', hint: { bn: 'Anche se', en: 'even though' }, sampleIt: 'Anche se faceva freddo, siamo usciti lo stesso.' },
      buildSimilar: { patternIt: 'Invece di prendere il bus, camminiamo.', prompt: { bn: 'invece di দিয়ে একটি বাক্য লিখুন।', en: 'Write a sentence with invece di.' }, sampleIt: 'Invece di guardare la TV, leggo un libro.' },
      altEndingPrompt: { bn: 'বৃষ্টি থামার পর সন্ধ্যায় তারা কী করতে পারে লিখুন।', en: 'What might they do when the rain stops?' },
    },
  }),

  buildStory({
    id: 'st-a2-19', level: 'A2', titleIt: 'Una giornata piena di sorprese',
    title: { bn: 'চমকে ভরা একদিন', en: 'A day full of surprises' },
    topic: { bn: 'অনিয়মিত পাস্ট পার্টিসিপল', en: 'Irregular past participles' },
    grammarIds: ['passato-irregolari', 'passato-essere'],
    vocabKeys: ['w:A2:la mostra', 'w:A2:la ricevuta', 'w:A2:il giornale'],
    paragraphs: [
      { it: 'Oggi è successo qualcosa di strano! Stamattina ho aperto il giornale e ho letto che la nostra mostra preferita restava aperta fino a mezzanotte.', tr: { bn: 'আজ অদ্ভুত একটা ঘটনা ঘটেছে! সকালে পত্রিকা খুলে পড়লাম যে আমাদের প্রিয় প্রদর্শনী মধ্যরাত পর্যন্ত খোলা থাকবে।', en: 'Something strange happened today! This morning I opened the paper and read that our favourite exhibition stays open till midnight.' } },
      { it: 'Ho subito scritto a Luca, ma lui ha risposto solo due ore dopo perché aveva chiuso il telefono durante la lezione.', tr: { bn: 'সাথে সাথে লুকাকে লিখলাম, কিন্তু সে দুই ঘণ্টা পর উত্তর দিল কারণ ক্লাসের সময় সে ফোন বন্ধ রেখেছিল।', en: 'I immediately texted Luca, yet he replied only two hours later because he had switched his phone off during class.' } },
      { it: 'Alla fine siamo rimasti in centro fino alle dieci, abbiamo visto quadri splendidi e abbiamo detto: "Dobbiamo tornarci!"', tr: { bn: 'শেষ পর্যন্ত আমরা দশটা পর্যন্ত শহরের কেন্দ্রে ছিলাম, চমৎকার সব ছবি দেখলাম এবং বললাম: "আমাদের আবার আসতে হবে!"', en: 'In the end we stayed downtown until ten, saw splendid paintings, and said: "We must come back!"' } },
    ],
    wordGlossary: [
      { word: 'quadri', base: 'il quadro', tr: { bn: 'চিত্রকর্ম', en: 'paintings' }, pos: 'noun' },
      { word: 'splendidi', base: 'splendido', tr: { bn: 'চমৎকার / দারুণ', en: 'splendid' }, pos: 'adj' },
    ],
    grammarBreakdown: [
      { sentenceIt: 'Ho aperto, ho letto, ho scritto, ha risposto, abbiamo visto, abbiamo detto.', ruleTitle: { bn: 'অনিয়মিত পার্টিসিপল অনুশীলন', en: 'Irregular participle cluster' }, explanation: { bn: 'aprire→aperto, leggere→letto, scrivere→scritto, rispondere→risposto, vedere→visto, dire→detto।', en: 'Notice all six irregular participles in context.' }, grammarId: 'passato-irregolari' },
    ],
    mcq: [
      { id: 'st2-19-q1', prompt: { bn: 'লুকা কেন সাথে সাথে উত্তর দেয়নি?', en: 'Why didn’t Luca reply straight away?' }, options: ['ফোন হারিয়েছে', 'ক্লাসে ফোন বন্ধ রেখেছিল', 'ঘুমাচ্ছিল', 'ব্যাটারি ছিল না'], answer: 1, explanation: { bn: 'aveva chiuso il telefono durante la lezione।', en: 'He had turned it off during class.' } },
    ],
    trueFalse: [
      { id: 'st2-19-tf1', statementIt: 'La mostra chiudeva alle sei di sera.', statement: { bn: 'প্রদর্শনী সন্ধ্যা ছয়টায় বন্ধ হয়ে যাচ্ছিল।', en: 'The exhibition closed at 6 PM.' }, answer: false, explanation: { bn: 'fino a mezzanotte (মধ্যরাত পর্যন্ত খোলা)।', en: 'Open until midnight.' } },
    ],
    fillBlank: [
      { id: 'st2-19-fb1', sentence: 'Alla fine della festa noi siamo ___ fino a tardi.', options: ['rimanuto', 'rimasti', 'abbiamo rimasti', 'riposato'], answer: 1, explanation: { bn: 'rimanere → siamo rimasti।', en: 'rimanere takes essere + rimasti.' } },
    ],
    shortAnswer: [
      { id: 'st2-19-sa1', question: { bn: 'সে প্রদর্শনীর খবর কোথা থেকে পড়েছে?', en: 'Where did he read about the exhibition?' }, sampleAnswerIt: 'L’ha letto sul giornale.', keywords: ['giornale'] },
    ],
    practice: {
      retellPrompt: { bn: 'fatto, letto, scritto, visto, detto ব্যবহার করে আজকের দিনের বর্ণনা দিন।', en: 'Describe your day using fatto, letto, scritto, visto, detto.' },
      completeMissing: { promptIt: 'Ieri sera ho ___ una mail e ho ___ un film.', hint: { bn: 'scritto / visto', en: 'irregular participles' }, sampleIt: 'Ieri sera ho scritto una mail e ho visto un film.' },
      buildSimilar: { patternIt: 'Ho aperto la finestra e ho visto il sole.', prompt: { bn: 'aperto বা chiuso দিয়ে একটি বাক্য লিখুন।', en: 'Write a sentence with aperto or chiuso.' }, sampleIt: 'Il negozio ha chiuso alle otto.' },
      altEndingPrompt: { bn: 'পরদিন বন্ধুদের তারা কী বলবে লিখুন।', en: 'What will they tell their friends tomorrow?' },
    },
  }),

  buildStory({
    id: 'st-a2-20', level: 'A2', titleIt: 'Dov’è finita la ricevuta?',
    title: { bn: 'রসিদটা কোথায় গেল?', en: 'Where did the receipt go?' },
    topic: { bn: 'পার্টিসিপল মিল ও ডাকঘর', en: 'Participle agreement & errands' },
    grammarIds: ['accordo-participio', 'pronomi-diretti'],
    vocabKeys: ['w:A2:la ricevuta', 'w:A2:il portafoglio', 'w:A2:la spedizione'],
    paragraphs: [
      { it: 'Ieri mattina ho spedito un pacco importante alla mia famiglia in Bangladesh. L’impiegata mi ha dato una ricevuta bianca, ma oggi non la trovo!', tr: { bn: 'গতকাল সকালে আমি বাংলাদেশে পরিবারের কাছে একটি জরুরি পার্সেল পাঠিয়েছি। কর্মকর্তা আমাকে একটা সাদা রসিদ দিয়েছিলেন, কিন্তু আজ সেটা পাচ্ছি না!', en: 'Yesterday morning I sent an important parcel to my family in Bangladesh. The clerk gave me a white receipt, yet today I cannot find it!' } },
      { it: '"Non hai controllato lo zaino?" chiede mia sorella. "Sì, l’ho controllato tutto! Ho cercato anche le chiavi, e le ho trovate, ma della ricevuta nessuna traccia."', tr: { bn: '"ব্যাকপ্যাক দেখোনি?" বোন জিজ্ঞেস করে। "হ্যাঁ, পুরোটাই দেখেছি! চাবিও খুঁজেছিলাম, ওগুলো পেয়ে গেছি, কিন্তু রসিদের কোনো চিহ্ন নেই।"', en: '"Didn’t you check the backpack?" asks my sister. "Yes, I checked all of it! I looked for the keys too and found them, but no sign of the receipt."' } },
      { it: 'Poi apro la giacca blu e rido: eccola! L’avevo messa nella tasca interna per non perderla.', tr: { bn: 'তারপর নীল জ্যাকেট খুলে হেসে উঠলাম: এই তো! হারিয়ে না যাওয়ার জন্য ওটা ভেতরের পকেটে রেখেছিলাম।', en: 'Then I open the blue jacket and laugh: here it is! I had put it in the inside pocket so as not to lose it.' } },
    ],
    wordGlossary: [
      { word: 'nessuna traccia', base: 'traccia', tr: { bn: 'কোনো চিহ্ন নেই', en: 'no trace' }, pos: 'phrase' },
      { word: 'tasca interna', base: 'tasca', tr: { bn: 'ভেতরের পকেট', en: 'inside pocket' }, pos: 'noun' },
    ],
    grammarBreakdown: [
      { sentenceIt: 'Le ho trovate / L’avevo messa.', ruleTitle: { bn: 'সর্বনামের লিঙ্গ-বচন মিল', en: 'Agreement with lo/la/li/le' }, explanation: { bn: 'chiavi→le ho trovate; ricevuta→l’avevo messa।', en: 'Participle agrees with direct pronouns le and l’ (la).' }, grammarId: 'accordo-participio' },
    ],
    mcq: [
      { id: 'st2-20-q1', prompt: { bn: 'শেষ পর্যন্ত রসিদটা কোথায় পাওয়া গেল?', en: 'Where was the receipt found in the end?' }, options: ['ব্যাকপ্যাকে', 'মানিব্যাগে', 'জ্যাকেটের ভেতরের পকেটে', 'টেবিলের নিচে'], answer: 2, explanation: { bn: 'nella tasca interna della giacca।', en: 'Inside pocket of the jacket.' } },
    ],
    trueFalse: [
      { id: 'st2-20-tf1', statementIt: 'Ha perso sia le chiavi sia la ricevuta.', statement: { bn: 'সে চাবি ও রসিদ দুটোই হারিয়েছে।', en: 'He lost both keys and receipt.' }, answer: false, explanation: { bn: 'চাবি পেয়েছিল ও পরে রসিদও পকেটে পেল।', en: 'He found both.' } },
    ],
    fillBlank: [
      { id: 'st2-20-fb1', sentence: 'La lettera? L’ho già ___ stamattina.', options: ['spedito', 'spedita', 'spediti', 'spedite'], answer: 1, explanation: { bn: 'la lettera স্ত্রী একবচন → spedita।', en: 'la lettera → spedita.' } },
    ],
    shortAnswer: [
      { id: 'st2-20-sa1', question: { bn: 'পার্সেলটা সে কোথায় পাঠিয়েছিল?', en: 'Where did he send the parcel?' }, sampleAnswerIt: 'L’ha spedito alla sua famiglia in Bangladesh.', keywords: ['bangladesh', 'famiglia'] },
    ],
    practice: {
      retellPrompt: { bn: 'কোনো হারিয়ে যাওয়া জিনিস খুঁজে পাওয়ার গল্প ৩ বাক্যে লিখুন।', en: 'Write 3 sentences about misplacing and finding something.' },
      completeMissing: { promptIt: 'I biglietti? Li ho ___ sul tavolo.', hint: { bn: 'messi / lasciati', en: 'masc. plural' }, sampleIt: 'I biglietti? Li ho messi nello zaino.' },
      buildSimilar: { patternIt: 'L’ho messa nella tasca interna.', prompt: { bn: 'স্ত্রীলিঙ্গ কোনো বস্তু কোথায় রেখেছেন লিখুন।', en: 'Write where you put a feminine noun using l’ho.' }, sampleIt: 'La patente? L’ho messa nel portafoglio.' },
      altEndingPrompt: { bn: 'ডাকঘরের রসিদ কেন সংরক্ষণ করা জরুরি লিখুন।', en: 'Why is keeping postal receipts useful?' },
    },
  }),

  buildStory({
    id: 'st-a2-21', level: 'A2', titleIt: 'L’incontro in biblioteca',
    title: { bn: 'লাইব্রেরিতে অপ্রত্যাশিত দেখা', en: 'An unexpected meeting at the library' },
    topic: { bn: 'imperfetto বনাম passato prossimo', en: 'Background vs event' },
    grammarIds: ['imperfetto-vs-passato', 'tempo'],
    vocabKeys: ['w:A2:il compagno di corso', 'w:A2:la tesi', "w:A2:l'amicizia"],
    paragraphs: [
      { it: 'Mercoledì pomeriggio pioveva leggermente e l’aula studio era silenziosa. Io stavo leggendo un articolo difficile per la mia tesi e prendevo appunti.', tr: { bn: 'বুধবার বিকেলে হালকা বৃষ্টি হচ্ছিল এবং স্টাডি রুম নীরব ছিল। আমি আমার থিসিসের জন্য একটা কঠিন প্রবন্ধ পড়ছিলাম এবং নোট নিচ্ছিলাম।', en: 'Wednesday afternoon it was drizzling and the study room was quiet. I was reading a tough article for my thesis and taking notes.' } },
      { it: 'All’improvviso qualcuno mi ha toccato la spalla: era Tariq, un vecchio compagno di corso che non vedevo da due anni!', tr: { bn: 'হঠাৎ কেউ আমার কাঁধে হাত রাখল: তিনি ছিলেন তারিক, পুরনো কোর্স-সহপাঠী যাঁকে দুই বছর ধরে দেখিনি!', en: 'Suddenly someone tapped my shoulder: it was Tariq, an old coursemate I hadn’t seen for two years!' } },
      { it: 'Siamo usciti subito a prendere un caffè insieme e abbiamo parlato per un’ora della nostra amicizia e dei nuovi progetti.', tr: { bn: 'আমরা সাথে সাথে একসাথে কফি খেতে বের হলাম এবং এক ঘণ্টা ধরে আমাদের বন্ধুত্ব ও নতুন পরিকল্পনা নিয়ে কথা বললাম।', en: 'We stepped out straight away for a coffee together and talked for an hour about our friendship and new plans.' } },
    ],
    wordGlossary: [
      { word: 'all’improvviso', base: 'improvviso', tr: { bn: 'হঠাৎ করে', en: 'suddenly' }, pos: 'adv' },
      { word: 'spalla', base: 'la spalla', tr: { bn: 'কাঁধ', en: 'shoulder' }, pos: 'noun' },
    ],
    grammarBreakdown: [
      { sentenceIt: 'Prendevo appunti; all’improvviso qualcuno mi ha toccato.', ruleTitle: { bn: 'চলমান কাজ বনাম হঠাৎ ঘটনা', en: 'Ongoing vs sudden interruption' }, explanation: { bn: 'হঠাৎ ঘটা ঘটনায় all’improvviso-র সাথে passato prossimo (ha toccato) বসে।', en: 'all’improvviso triggers passato prossimo.' }, grammarId: 'imperfetto-vs-passato' },
    ],
    mcq: [
      { id: 'st2-21-q1', prompt: { bn: 'কতদিন ধরে তারিকের সাথে দেখা হয়নি?', en: 'How long hadn’t he seen Tariq?' }, options: ['৬ মাস', '১ বছর', '২ বছর', '৫ বছর'], answer: 2, explanation: { bn: 'da due anni।', en: 'For two years.' } },
    ],
    trueFalse: [
      { id: 'st2-21-tf1', statementIt: 'Hanno studiato insieme tutta la sera in silenzio.', statement: { bn: 'তারা সারাসন্ধ্যা নীরবে একসাথে পড়েছে।', en: 'They studied silently together all evening.' }, answer: false, explanation: { bn: 'কফি খেতে বের হয়ে এক ঘণ্টা গল্প করেছে।', en: 'They went for coffee and talked.' } },
    ],
    fillBlank: [
      { id: 'st2-21-fb1', sentence: 'Ieri mattina ___ quando ha suonato il corriere.', options: ['ho dormito', 'dormivo', 'dormirò', 'dormo'], answer: 1, explanation: { bn: 'হঠাৎ ঘটনার পটভূমি = dormivo।', en: 'Ongoing state when interrupted takes imperfetto.' } },
    ],
    shortAnswer: [
      { id: 'st2-21-sa1', question: { bn: 'তারিক কে ছিল?', en: 'Who was Tariq?' }, sampleAnswerIt: 'Era un vecchio compagno di corso.', keywords: ['compagno', 'corso'] },
    ],
    practice: {
      retellPrompt: { bn: 'বন্ধুর সাথে হঠাৎ দেখা হওয়ার ৩ বাক্যের একটি গল্প লিখুন।', en: 'Write a 3-sentence story of bumping into an old friend.' },
      completeMissing: { promptIt: 'Mentre ___ la musica, è arrivato un messaggio.', hint: { bn: 'ascoltavo', en: 'imperfetto' }, sampleIt: 'Mentre ascoltavo la musica, è arrivato un messaggio.' },
      buildSimilar: { patternIt: 'Pioveva e l’aula era silenziosa.', prompt: { bn: 'imperfetto দিয়ে পরিবেশের বর্ণনা দিন।', en: 'Set a scene using imperfetto.' }, sampleIt: 'Faceva fresco e la piazza era piena di luci.' },
      altEndingPrompt: { bn: 'পরের সপ্তাহে তারা আবার কী পরিকল্পনা করতে পারে লিখুন।', en: 'What might they plan for next week?' },
    },
  }),

  buildStory({
    id: 'st-a2-22', level: 'A2', titleIt: 'Attimo prima della partenza',
    title: { bn: 'রওনা হওয়ার ঠিক আগমুহূর্তে', en: 'Moments before departure' },
    topic: { bn: 'আসন্ন কাজ (stare per + infinito)', en: 'About to (stare per)' },
    grammarIds: ['stare-per', 'modali-passato'],
    vocabKeys: ['w:A2:il binario', 'w:A2:il volo', 'w:A2:il caricabatterie'],
    paragraphs: [
      { it: 'Sono le otto meno cinque e il treno per Venezia sta per partire dal binario nove! Io e Sara corriamo lungo il marciapiede con gli zaini.', tr: { bn: 'আটটা বাজতে পাঁচ মিনিট বাকি আর ভেনিসের ট্রেন নয় নম্বর প্ল্যাটফর্ম থেকে ছাড়তে যাচ্ছে! আমি আর সারা ব্যাকপ্যাক নিয়ে প্ল্যাটফর্ম ধরে দৌড়াচ্ছি।', en: 'It is 7:55 and the Venice train is about to depart from platform nine! Sara and I run along the platform with our backpacks.' } },
      { it: 'Proprio mentre stavamo per salire sulla carrozza, Sara controlla la borsa: "Oh no, stavo per dimenticare il caricabatterie sulla panchina!"', tr: { bn: 'ঠিক যখন আমরা বগিতে উঠতে যাচ্ছিলাম, সারা ব্যাগ পরীক্ষা করল: "ওহ না, আমি বেঞ্চেই চার্জার ফেলে আসছিলাম!"', en: 'Just as we were about to step onto the carriage, Sara checks her bag: "Oh no, I nearly left my charger on the bench!"' } },
      { it: 'Per fortuna siamo riusciti a recuperarlo in trenta secondi e ora il treno è partito puntuale.', tr: { bn: 'ভাগ্যক্রমে ত্রিশ সেকেন্ডের মধ্যেই ওটা ফেরত আনতে পেরেছি এবং এখন ট্রেন ঠিক সময়েই ছেড়েছে।', en: 'Luckily we managed to grab it back in thirty seconds and now the train has departed on time.' } },
    ],
    wordGlossary: [
      { word: 'carrozza', base: 'la carrozza', tr: { bn: 'ট্রেনের বগি', en: 'train carriage' }, pos: 'noun' },
      { word: 'panchina', base: 'la panchina', tr: { bn: 'বেঞ্চ', en: 'bench' }, pos: 'noun' },
    ],
    grammarBreakdown: [
      { sentenceIt: 'Sta per partire / Stavo per dimenticare.', ruleTitle: { bn: 'stare per + infinito', en: 'About to happen' }, explanation: { bn: 'বর্তমানে sta per = ঠিক এইমাত্র হবে; অতীতে stavo per = প্রায় করেই ফেলছিলাম।', en: 'Present = about to happen; imperfect = was about to / nearly did.' }, grammarId: 'stare-per' },
    ],
    mcq: [
      { id: 'st2-22-q1', prompt: { bn: 'কত নম্বর প্ল্যাটফর্ম থেকে ট্রেন ছাড়ছিল?', en: 'From which platform was the train leaving?' }, options: ['২', '৫', '৭', '৯'], answer: 3, explanation: { bn: 'dal binario nove = ৯ নম্বর।', en: 'Platform 9.' } },
    ],
    trueFalse: [
      { id: 'st2-22-tf1', statementIt: 'Hanno perso il caricabatterie e il treno.', statement: { bn: 'তারা চার্জার ও ট্রেন দুটোই হারিয়েছে।', en: 'They lost both the charger and the train.' }, answer: false, explanation: { bn: '৩০ সেকেন্ডে চার্জার নিয়ে ঠিক সময়েই ট্রেনে উঠেছে।', en: 'They recovered it and boarded on time.' } },
    ],
    fillBlank: [
      { id: 'st2-22-fb1', sentence: 'Prendi la giacca, noi ___ per uscire adesso.', options: ['siamo', 'stiamo', 'andiamo', 'facciamo'], answer: 1, explanation: { bn: 'noi stiamo per + infinito।', en: 'noi uses stiamo.' } },
    ],
    shortAnswer: [
      { id: 'st2-22-sa1', question: { bn: 'সারা কী জিনিস প্রায় ফেলে যাচ্ছিল?', en: 'What did Sara nearly leave behind?' }, sampleAnswerIt: 'Stava per dimenticare il caricabatterie.', keywords: ['caricabatterie'] },
    ],
    practice: {
      retellPrompt: { bn: 'stare per ব্যবহার করে ৩টি ছোট পরিস্থিতি লিখুন।', en: 'Write 3 mini-situations using stare per + infinitive.' },
      completeMissing: { promptIt: 'Il film ___ cominciare tra cinque minuti.', hint: { bn: 'sta per', en: 'about to' }, sampleIt: 'Il film sta per cominciare.' },
      buildSimilar: { patternIt: 'Stavo per uscire quando ha piovuto.', prompt: { bn: 'stavo per দিয়ে একটি বাক্য লিখুন।', en: 'Write a sentence with stavo per.' }, sampleIt: 'Stavo per chiamarti quando hai suonato.' },
      altEndingPrompt: { bn: 'ট্রেনের ভেতরে বসে তারা কী করবে লিখুন।', en: 'What will they do on the train?' },
    },
  }),
];
