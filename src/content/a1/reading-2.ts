import type { ReadingPassage } from '../academyTypes';
import { buildReading } from '../builders';

export const A1_READING_2: ReadingPassage[] = [
  buildReading({
    id: 'rd-a1-12',
    level: 'A1',
    kind: 'story',
    titleIt: 'La mia giornata tipo',
    title: { bn: 'আমার সাধারণ একটি দিন (পাঠ)', en: 'My typical day (Reader)' },
    storyId: 'st-a1-08',
    paragraphs: [
      {
        it: 'Dal lunedì al venerdì mi sveglio alle sette, mi lavo velocemente e faccio colazione con pane, burro e tè caldo.',
        tr: { bn: 'সোম থেকে শুক্রবার আমি সাতটায় ঘুম থেকে উঠি, তাড়াতাড়ি হাত-মুখ ধুয়ে নিই আর রুটি, মাখন ও গরম চা দিয়ে নাস্তা করি।', en: 'Monday through Friday I wake up at seven, wash quickly, and have breakfast with bread, butter, and hot tea.' },
      },
      {
        it: 'Alle otto e mezza prendo l’autobus numero ventiquattro per andare all’università. La sera studio un’ora e vado a dormire alle undici.',
        tr: { bn: 'সাড়ে আটটায় আমি বিশ্ববিদ্যালয়ে যেতে ২৪ নম্বর বাসে উঠি। সন্ধ্যায় এক ঘণ্টা পড়াশোনা করি আর ১১টায় ঘুমাতে যাই।', en: 'At 8:30 I take bus number 24 to go to university. In the evening I study for an hour and go to sleep at eleven.' },
      },
    ],
    vocabHighlights: [
      { it: 'velocemente', tr: { bn: 'তাড়াতাড়ি', en: 'quickly' } },
      { it: 'faccio colazione', tr: { bn: 'সকালের নাস্তা করি', en: 'I have breakfast' } },
      { it: 'vado a dormire', tr: { bn: 'ঘুমাতে যাই', en: 'I go to sleep' } },
    ],
    grammarHighlights: [
      { excerpt: 'mi sveglio / mi lavo', note: { bn: 'প্রতিফলক ক্রিয়া mi + ক্রিয়া।', en: 'Reflexive mi before verb.' }, grammarId: 'riflessivi-a1' },
      { excerpt: 'alle otto e mezza', note: { bn: 'সাড়ে ৮টা বোঝাতে e mezza।', en: 'Half past uses e mezza.' }, grammarId: 'ora-data' },
    ],
    relatedGrammarIds: ['riflessivi-a1', 'ora-data', 'irregolari'],
    questions: [
      { id: 'rd-a1-12-q1', prompt: { bn: 'সে বিশ্ববিদ্যালয়ে যায় কীভাবে?', en: 'How does the speaker go to university?' }, options: ['ট্রেনে', '২৪ নম্বর বাসে', 'সাইকেলে', 'হেঁটে'], answer: 1, explanation: { bn: 'prendo l’autobus numero ventiquattro।', en: 'Bus number 24.' } },
      { id: 'rd-a1-12-q2', prompt: { bn: 'সকালের নাস্তায় সে কী পান করে?', en: 'What does the speaker drink for breakfast?' }, options: ['কফি', 'দুধ', 'গরম চা', 'জুস'], answer: 2, explanation: { bn: 'tè caldo = গরম চা।', en: 'Hot tea.' } },
    ],
  }),

  buildReading({
    id: 'rd-a1-13',
    level: 'A1',
    kind: 'message',
    titleIt: 'Dove sei? Ti aspetto!',
    title: { bn: 'কোথায় আছো? অপেক্ষা করছি!', en: 'Where are you? Waiting for you!' },
    paragraphs: [
      {
        it: 'Ehi Amir, sono già davanti al cinema! Hai preso gli occhiali? Qui fa un po’ freddo e c’è molto vento oggi.',
        tr: { bn: 'এই আমির, আমি ইতিমধ্যে সিনেমাহলের সামনে আছি! তুমি কি চশমা নিয়েছ? এখানে আজ একটু ঠান্ডা আর খুব বাতাস বইছে।', en: 'Hey Amir, I am already in front of the cinema! Did you bring your glasses? It is a bit cold here and very windy today.' },
      },
      {
        it: 'Se sei ancora sull’autobus, scendi alla fermata dopo la banca e poi gira subito a sinistra. Il film inizia tra dieci minuti!',
        tr: { bn: 'তুমি যদি এখনো বাসে থাকো, ব্যাংকের পরের স্টপে নেমে সাথে সাথে বামে ঘোরো। সিনেমা দশ মিনিটের মধ্যে শুরু হবে!', en: 'If you are still on the bus, get off at the stop after the bank and turn left immediately. The film starts in ten minutes!' },
      },
    ],
    vocabHighlights: [
      { it: 'già', tr: { bn: 'ইতিমধ্যে', en: 'already' } },
      { it: 'scendi', tr: { bn: 'নামো (বাস থেকে)', en: 'get off' } },
      { it: 'tra dieci minuti', tr: { bn: 'দশ মিনিটের মধ্যে', en: 'in ten minutes' } },
    ],
    grammarHighlights: [
      { excerpt: 'davanti al cinema', note: { bn: 'অবস্থান: davanti a + il = davanti al।', en: 'davanti al = in front of.' }, grammarId: 'preposizioni-luogo' },
      { excerpt: 'c’è molto vento', note: { bn: 'একবচন প্রাকৃতিক অবস্থায় c’è।', en: 'Singular weather uses c’è.' }, grammarId: 'ce' },
    ],
    relatedGrammarIds: ['preposizioni-luogo', 'ce', 'domande'],
    questions: [
      { id: 'rd-a1-13-q1', prompt: { bn: 'বাস থেকে নেমে কোন দিকে ঘুরতে হবে?', en: 'Which way should Amir turn after getting off the bus?' }, options: ['ডানে', 'বামে', 'পেছনে', 'সোজা'], answer: 1, explanation: { bn: 'gira subito a sinistra।', en: 'Turn left immediately.' } },
      { id: 'rd-a1-13-q2', prompt: { bn: 'সিনেমা শুরু হতে আর কত মিনিট বাকি?', en: 'In how many minutes does the film start?' }, options: ['৫ মিনিট', '১০ মিনিট', '২০ মিনিট', '৩০ মিনিট'], answer: 1, explanation: { bn: 'tra dieci minuti।', en: 'In ten minutes.' } },
    ],
  }),

  buildReading({
    id: 'rd-a1-14',
    level: 'A1',
    kind: 'dialogue',
    titleIt: 'In un negozio di vestiti',
    title: { bn: 'কাপড়ের দোকানে', en: 'In a clothing shop' },
    paragraphs: [
      {
        it: 'Commessa: Buongiorno, desidera qualcosa? / Anna: Sì, cerco una giacca leggera per la primavera, magari blu o verde.',
        tr: { bn: 'বিক্রেতা: শুভ সকাল, কিছু সাহায্য করতে পারি? / আনা: হ্যাঁ, বসন্তের জন্য একটা হালকা জ্যাকেট খুঁজছি, নীল বা সবুজ হলে ভালো হয়।', en: 'Assistant: Good morning, would you like anything? / Anna: Yes, I am looking for a light jacket for spring, maybe blue or green.' },
      },
      {
        it: 'Commessa: Abbiamo questa giacca blu nella taglia media. Costa quarantacinque euro. Vuole provarla? I camerini sono lì a destra.',
        tr: { bn: 'বিক্রেতা: আমাদের কাছে মিডিয়াম সাইজে এই নীল জ্যাকেটটা আছে। দাম ৪৫ ইউরো। পরে দেখবেন? ট্রায়াল রুম ওই ডানে।', en: 'Assistant: We have this blue jacket in medium size. It costs 45 euros. Would you like to try it on? The fitting rooms are over there on the right.' },
      },
    ],
    vocabHighlights: [
      { it: 'leggera', tr: { bn: 'হালকা', en: 'lightweight' } },
      { it: 'taglia media', tr: { bn: 'মিডিয়াম সাইজ', en: 'medium size' } },
      { it: 'camerini', tr: { bn: 'ট্রায়াল রুম', en: 'fitting rooms' } },
    ],
    grammarHighlights: [
      { excerpt: 'blu', note: { bn: 'blu রংটি লিঙ্গ ও বচন ভেদে কখনো বদলায় না।', en: 'blu is invariable in gender and number.' }, grammarId: 'aggettivi' },
      { excerpt: 'cerco una giacca', note: { bn: 'cercare = খোঁজা (আর্টিকেল una স্ত্রীলিঙ্গ)।', en: 'cercare takes una giacca.' }, grammarId: 'presente-are' },
    ],
    relatedGrammarIds: ['aggettivi', 'dimostrativi', 'presente-are'],
    questions: [
      { id: 'rd-a1-14-q1', prompt: { bn: 'নীল জ্যাকেটটির দাম কত?', en: 'How much does the blue jacket cost?' }, options: ['৩০ ইউরো', '৪০ ইউরো', '৪৫ ইউরো', '৫৫ ইউরো'], answer: 2, explanation: { bn: 'Costa quarantacinque euro = ৪৫ ইউরো।', en: '45 euros.' } },
      { id: 'rd-a1-14-q2', prompt: { bn: 'ট্রায়াল রুমগুলো কোন দিকে?', en: 'Where are the fitting rooms?' }, options: ['ডানে', 'বামে', 'দোতলায়', 'প্রবেশপথে'], answer: 0, explanation: { bn: 'lì a destra = ওখানে ডানে।', en: 'On the right.' } },
    ],
  }),

  buildReading({
    id: 'rd-a1-15',
    level: 'A1',
    kind: 'letter',
    titleIt: 'La mia nuova casa a Torino',
    title: { bn: 'তুরিনে আমার নতুন বাসা', en: 'My new home in Turin' },
    paragraphs: [
      {
        it: 'Caro amico, finalmente abito nel mio nuovo appartamento a Torino! È piccolo ma molto luminoso, al secondo piano di un palazzo tranquillo.',
        tr: { bn: 'প্রিয় বন্ধু, অবশেষে আমি তুরিনে আমার নতুন অ্যাপার্টমেন্টে থাকছি! এটি ছোট তবে খুব আলোকিত, শান্ত একটি ভবনের দোতলায়।', en: 'Dear friend, I finally live in my new flat in Turin! It is small but very bright, on the second floor of a quiet building.' },
      },
      {
        it: 'Ci sono una cucina moderna, un soggiorno con un divano grigio, una camera da letto e un bagno. Davanti al palazzo c’è una fermata del tram.',
        tr: { bn: 'এখানে একটি আধুনিক রান্নাঘর, ধূসর সোফাসহ বসার ঘর, একটি শোবার ঘর এবং একটি বাথরুম আছে। ভবনের ঠিক সামনে একটি ট্রাম স্টপ আছে।', en: 'There is a modern kitchen, a living room with a grey sofa, a bedroom, and a bathroom. In front of the building there is a tram stop.' },
      },
    ],
    vocabHighlights: [
      { it: 'finalmente', tr: { bn: 'অবশেষে', en: 'finally' } },
      { it: 'al secondo piano', tr: { bn: 'দোতলায় (ইউরোপীয় গণনায়)', en: 'on the second floor' } },
      { it: 'tranquillo', tr: { bn: 'শান্ত / নিরিবিলি', en: 'quiet' } },
    ],
    grammarHighlights: [
      { excerpt: 'Ci sono una cucina, un soggiorno...', note: { bn: 'একাধিক জিনিস তালিকা করলে ci sono বসে।', en: 'A list of items uses ci sono.' }, grammarId: 'ce' },
      { excerpt: 'il mio nuovo appartamento', note: { bn: 'nuovo অর্থগতভাবে আগে বসেছে।', en: 'nuovo can precede the noun.' }, grammarId: 'possessivi-a1' },
    ],
    relatedGrammarIds: ['ce', 'possessivi-a1', 'preposizioni-luogo'],
    questions: [
      { id: 'rd-a1-15-q1', prompt: { bn: 'অ্যাপার্টমেন্টের সামনে কী আছে?', en: 'What is in front of the building?' }, options: ['পার্ক', 'ট্রাম স্টপ', 'হাসপাতাল', 'বাজার'], answer: 1, explanation: { bn: 'una fermata del tram।', en: 'A tram stop.' } },
      { id: 'rd-a1-15-q2', prompt: { bn: 'বসার ঘরের সোফাটির রং কী?', en: 'What colour is the sofa in the living room?' }, options: ['সাদা', 'লাল', 'ধূসর', 'নীল'], answer: 2, explanation: { bn: 'un divano grigio = ধূসর।', en: 'Grey.' } },
    ],
  }),

  buildReading({
    id: 'rd-a1-16',
    level: 'A1',
    kind: 'notice',
    titleIt: 'Corso serale di cucina italiana',
    title: { bn: 'সান্ধ্য ইতালিয়ান রান্নার কোর্স', en: 'Evening Italian cooking course' },
    paragraphs: [
      {
        it: 'SCUOLA DEL GUSTO — Impari a cucinare piatti semplici e buoni ogni mercoledì e venerdì dalle 18:30 alle 20:30.',
        tr: { bn: 'স্বাদের স্কুল — প্রতি বুধবার ও শুক্রবার সন্ধ্যা ৬:৩০ থেকে রাত ৮:৩০ পর্যন্ত সহজ ও সুস্বাদু খাবার রান্না করা শিখুন।', en: 'SCHOOL OF TASTE — Learn to cook simple and tasty dishes every Wednesday and Friday from 6:30 PM to 8:30 PM.' },
      },
      {
        it: 'Nel corso prepariamo la pasta fresca, la pizza margherita e il tiramisù. Non serve esperienza: gli ingredienti sono inclusi nel prezzo di 90 euro al mese.',
        tr: { bn: 'কোর্সে আমরা তাজা পাস্তা, পিজ্জা মারগেরিতা এবং তিরামিসু তৈরি করি। কোনো অভিজ্ঞতার দরকার নেই: মাসে ৯০ ইউরো ফিতে সব উপকরণ অন্তর্ভুক্ত।', en: 'In the course we prepare fresh pasta, margherita pizza, and tiramisù. No experience is needed: ingredients are included in the €90 monthly fee.' },
      },
    ],
    vocabHighlights: [
      { it: 'impari', tr: { bn: 'আপনি শিখুন / তুমি শেখো', en: 'you learn' } },
      { it: 'non serve esperienza', tr: { bn: 'অভিজ্ঞতার প্রয়োজন নেই', en: 'no experience needed' } },
      { it: 'inclusi nel prezzo', tr: { bn: 'দামের ভেতর অন্তর্ভুক্ত', en: 'included in the price' } },
    ],
    grammarHighlights: [
      { excerpt: 'prepariamo la pasta', note: { bn: 'আমরা = noi → prepariamo।', en: 'noi form prepariamo.' }, grammarId: 'presente-are' },
      { excerpt: 'piatti semplici e buoni', note: { bn: 'পুংলিঙ্গ বহুবচন বিশেষণ -i।', en: 'Masculine plural -i endings.' }, grammarId: 'genere-numero' },
    ],
    relatedGrammarIds: ['presente-are', 'genere-numero', 'ora-data'],
    questions: [
      { id: 'rd-a1-16-q1', prompt: { bn: 'ক্লাস সপ্তাহের কোন কোন দিন হয়?', en: 'Which days of the week is the class held?' }, options: ['সোম ও মঙ্গল', 'বুধ ও শুক্র', 'শনি ও রবি', 'বৃহস্পতি ও শনি'], answer: 1, explanation: { bn: 'ogni mercoledì e venerdì।', en: 'Wednesday and Friday.' } },
      { id: 'rd-a1-16-q2', prompt: { bn: 'উপকরণের জন্য কি আলাদা টাকা লাগে?', en: 'Do ingredients cost extra?' }, options: ['হ্যাঁ, ১০ ইউরো', 'না, দামের মধ্যেই আছে', 'নিজে আনতে হয়', 'শুধু প্রথম দিনে ফ্রি'], answer: 1, explanation: { bn: 'gli ingredienti sono inclusi nel prezzo।', en: 'Included in the price.' } },
    ],
  }),

  buildReading({
    id: 'rd-a1-17',
    level: 'A1',
    kind: 'travel',
    titleIt: 'Le quattro stagioni in Italia',
    title: { bn: 'ইতালির চারটি ঋতু', en: 'The four seasons in Italy' },
    paragraphs: [
      {
        it: 'In Italia le quattro stagioni sono molto diverse. In primavera ci sono molti fiori nei parchi e la temperatura è piacevole.',
        tr: { bn: 'ইতালিতে চারটি ঋতু বেশ আলাদা। বসন্তে পার্কে অনেক ফুল ফোটে এবং তাপমাত্রা আরামদায়ক থাকে।', en: 'In Italy the four seasons are very different. In spring there are many flowers in the parks and the temperature is pleasant.' },
      },
      {
        it: 'In estate fa molto caldo e molte persone vanno al mare. In autunno cade la pioggia, mentre in inverno sulle Alpi cade la neve.',
        tr: { bn: 'গ্রীষ্মে খুব গরম পড়ে আর অনেক মানুষ সমুদ্রে যায়। শরতে বৃষ্টি পড়ে, আর শীতে আল্পস পর্বতমালায় তুষারপাত হয়।', en: 'In summer it is very hot and many people go to the seaside. In autumn rain falls, while in winter snow falls in the Alps.' },
      },
    ],
    vocabHighlights: [
      { it: 'piacevole', tr: { bn: 'আরামদায়ক / মনোরম', en: 'pleasant' } },
      { it: 'al mare', tr: { bn: 'সমুদ্রে', en: 'to the seaside' } },
      { it: 'cade la neve', tr: { bn: 'তুষার পড়ে', en: 'snow falls' } },
    ],
    grammarHighlights: [
      { excerpt: 'fa molto caldo', note: { bn: 'আবহাওয়া বোঝাতে fare + caldo/freddo।', en: 'Weather uses fa caldo / fa freddo.' }, grammarId: 'irregolari' },
      { excerpt: 'In primavera / in estate', note: { bn: 'ঋতুর আগে সাধারণত in বসে।', en: 'Seasons normally take in.' }, grammarId: 'preposizioni' },
    ],
    relatedGrammarIds: ['irregolari', 'preposizioni', 'ce'],
    questions: [
      { id: 'rd-a1-17-q1', prompt: { bn: 'ইতালিতে গ্রীষ্মকালে অনেকে কোথায় যায়?', en: 'Where do many people go in summer?' }, options: ['লাইব্রেরিতে', 'সমুদ্রে', 'স্কুলে', 'কারখানায়'], answer: 1, explanation: { bn: 'molte persone vanno al mare।', en: 'To the sea.' } },
      { id: 'rd-a1-17-q2', prompt: { bn: 'আল্পস পর্বতে শীতকালে কী পড়ে?', en: 'What falls in the Alps in winter?' }, options: ['পাতা', 'ধুলো', 'তুষার', 'শিলা'], answer: 2, explanation: { bn: 'cade la neve = তুষার পড়ে।', en: 'Snow falls.' } },
    ],
  }),

  buildReading({
    id: 'rd-a1-18',
    level: 'A1',
    kind: 'email',
    titleIt: 'Richiesta di informazioni per un corso',
    title: { bn: 'ভাষা কোর্সের তথ্য চেয়ে ইমেইল', en: 'Email asking for course details' },
    paragraphs: [
      {
        it: 'Buongiorno, mi chiamo Farhan e abito a Bologna da due settimane. Vorrei iscrivermi a un corso di italiano di livello A1.',
        tr: { bn: 'শুভ সকাল, আমার নাম ফারহান এবং আমি দুই সপ্তাহ ধরে বোলোনিয়ায় আছি। আমি A1 লেভেলের একটি ইতালীয় ভাষা কোর্সে ভর্তি হতে চাই।', en: 'Good morning, my name is Farhan and I have lived in Bologna for two weeks. I would like to enrol in an A1 Italian course.' },
      },
      {
        it: 'Potete dirmi quanto costa il corso e quando iniziano le lezioni? Preferisco gli orari del pomeriggio. Grazie in anticipo!',
        tr: { bn: 'আপনারা কি জানাতে পারবেন কোর্সটির খরচ কত এবং ক্লাস কবে শুরু হবে? আমি বিকেলের সময় পছন্দ করি। আগাম ধন্যবাদ!', en: 'Could you tell me how much the course costs and when lessons start? I prefer afternoon hours. Thanks in advance!' },
      },
    ],
    vocabHighlights: [
      { it: 'iscrivermi', tr: { bn: 'নিবন্ধন/ভর্তি হতে', en: 'to enrol myself' } },
      { it: 'preferisco', tr: { bn: 'আমি পছন্দ করি', en: 'I prefer' } },
      { it: 'grazie in anticipo', tr: { bn: 'আগাম ধন্যবাদ', en: 'thanks in advance' } },
    ],
    grammarHighlights: [
      { excerpt: 'preferisco', note: { bn: 'preferire -ire (-isc-) দলভুক্ত ক্রিয়া।', en: 'preferire takes -isc- in singular/3rd plural.' }, grammarId: 'presente-ere-ire' },
      { excerpt: 'quando iniziano le lezioni?', note: { bn: 'lezioni বহুবচন বলে iniziano হয়েছে।', en: 'Plural subject le lezioni uses iniziano.' }, grammarId: 'domande' },
    ],
    relatedGrammarIds: ['presente-ere-ire', 'domande', 'modali'],
    questions: [
      { id: 'rd-a1-18-q1', prompt: { bn: 'ফারহান কোন লেভেলের কোর্সে ভর্তি হতে চায়?', en: 'Which level course does Farhan want?' }, options: ['A1', 'A2', 'B1', 'B2'], answer: 0, explanation: { bn: 'livello A1।', en: 'Level A1.' } },
      { id: 'rd-a1-18-q2', prompt: { bn: 'সে কোন সময়ের ক্লাস পছন্দ করে?', en: 'Which time of day does he prefer?' }, options: ['ভোরবেলা', 'দুপুর', 'বিকেল', 'মধ্যরাত'], answer: 2, explanation: { bn: 'gli orari del pomeriggio = বিকেলের সময়।', en: 'Afternoon.' } },
    ],
  }),

  buildReading({
    id: 'rd-a1-19',
    level: 'A1',
    kind: 'story',
    titleIt: 'Il compleanno di mia sorella',
    title: { bn: 'বোনের জন্মদিন (পাঠ)', en: 'My sister’s birthday (Reader)' },
    storyId: 'st-a1-14',
    paragraphs: [
      {
        it: 'Oggi è il diciotto ottobre, il compleanno di mia sorella Sofia. Lei compie ventidue anni e invita tutti i nostri amici a cena.',
        tr: { bn: 'আজ আঠারোই অক্টোবর, আমার বোন সোফিয়ার জন্মদিন। তার বয়স ২২ বছর হলো এবং সে আমাদের সব বন্ধুকে রাতের খাবারে আমন্ত্রণ জানায়।', en: 'Today is October 18th, my sister Sofia’s birthday. She turns 22 and invites all our friends to dinner.' },
      },
      {
        it: 'Io le regalo un libro di cucina italiana e un fiore giallo. Quando spegne le candeline sulla torta, cantiamo tutti con gioia.',
        tr: { bn: 'আমি তাকে একটি ইতালিয়ান রান্নার বই এবং একটি হলুদ ফুল উপহার দিই। যখন সে কেকের মোমবাতি নেভায়, আমরা সবাই আনন্দে গান গাই।', en: 'I give her an Italian cookbook and a yellow flower. When she blows out the candles on the cake, we all sing with joy.' },
      },
    ],
    vocabHighlights: [
      { it: 'compie', tr: { bn: 'বয়স পূর্ণ করে', en: 'turns (age)' } },
      { it: 'candeline', tr: { bn: 'ছোট মোমবাতি', en: 'candles' } },
      { it: 'torta', tr: { bn: 'কেক', en: 'cake' } },
    ],
    grammarHighlights: [
      { excerpt: 'il diciotto ottobre', note: { bn: 'তারিখ বলতে il + সংখ্যা + মাস।', en: 'Dates use il + number + month.' }, grammarId: 'ora-data' },
      { excerpt: 'tutti i nostri amici', note: { bn: 'tutti-র পরে আর্টিকেল ও সম্বন্ধসূচক আসে।', en: 'Article follows tutti before possessives.' }, grammarId: 'possessivi-a1' },
    ],
    relatedGrammarIds: ['ora-data', 'possessivi-a1', 'aggettivi'],
    questions: [
      { id: 'rd-a1-19-q1', prompt: { bn: 'সোফিয়ার জন্মদিন কবে?', en: 'When is Sofia’s birthday?' }, options: ['১৮ই অক্টোবর', '৮ই নভেম্বর', '১৮ই মে', '১লা অক্টোবর'], answer: 0, explanation: { bn: 'il diciotto ottobre = ১৮ই অক্টোবর।', en: 'October 18th.' } },
      { id: 'rd-a1-19-q2', prompt: { bn: 'বোনকে কী কী উপহার দেওয়া হয়?', en: 'What gifts are given to Sofia?' }, options: ['জ্যাকেট ও জুতা', 'রান্নার বই ও হলুদ ফুল', 'ঘড়ি ও কলম', 'কম্পিউটার'], answer: 1, explanation: { bn: 'un libro di cucina italiana e un fiore giallo।', en: 'An Italian cookbook and a yellow flower.' } },
    ],
  }),

  buildReading({
    id: 'rd-a1-20',
    level: 'A1',
    kind: 'dialogue',
    titleIt: 'Alla biglietteria del museo',
    title: { bn: 'জাদুঘরের টিকিট কাউন্টারে', en: 'At the museum ticket office' },
    paragraphs: [
      {
        it: 'Impiegata: Buongiorno! Quanti biglietti desidera? / Visitatore: Due biglietti per favore: uno intero e uno ridotto per studenti.',
        tr: { bn: 'কর্মী: শুভ সকাল! কয়টি টিকিট লাগবে? / দর্শনার্থী: দয়া করে দুটি টিকিট: একটি সাধারণ এবং একটি ছাত্রদের ছাড়ের টিকিট।', en: 'Clerk: Good morning! How many tickets would you like? / Visitor: Two tickets please: one full-price and one student discount.' },
      },
      {
        it: 'Impiegata: Ha la tessera universitaria? Perfetto. Sono diciotto euro in tutto. La mostra principale è al primo piano, a sinistra.',
        tr: { bn: 'কর্মী: আপনার বিশ্ববিদ্যালয়ের আইডি কার্ড আছে? চমৎকার। মোট আঠারো ইউরো। মূল প্রদর্শনী প্রথম তলার বাম দিকে।', en: 'Clerk: Do you have your student ID card? Perfect. That is eighteen euros in total. The main exhibition is on the first floor, on the left.' },
      },
    ],
    vocabHighlights: [
      { it: 'biglietto ridotto', tr: { bn: 'ছাড়ে টিকিট', en: 'reduced/discount ticket' } },
      { it: 'tessera universitaria', tr: { bn: 'বিশ্ববিদ্যালয় আইডি কার্ড', en: 'university card' } },
      { it: 'mostra principale', tr: { bn: 'মূল প্রদর্শনী', en: 'main exhibition' } },
    ],
    grammarHighlights: [
      { excerpt: 'Quanti biglietti desidera?', note: { bn: 'বহুবচন পুংলিঙ্গে quanto → quanti।', en: 'quanti agrees with masculine plural biglietti.' }, grammarId: 'domande' },
      { excerpt: 'al primo piano, a sinistra', note: { bn: 'তলা ও দিক নির্দেশ করতে a + আর্টিকেল।', en: 'Floors and directions use a / al.' }, grammarId: 'preposizioni-luogo' },
    ],
    relatedGrammarIds: ['domande', 'preposizioni-luogo', 'avere'],
    questions: [
      { id: 'rd-a1-20-q1', prompt: { bn: 'টিকিটের মোট দাম কত হয়েছে?', en: 'What is the total cost of the tickets?' }, options: ['১২ ইউরো', '১৫ ইউরো', '১৮ ইউরো', '২০ ইউরো'], answer: 2, explanation: { bn: 'Sono diciotto euro in tutto।', en: '18 euros.' } },
      { id: 'rd-a1-20-q2', prompt: { bn: 'ছাত্র ছাড় পেতে কী দেখাতে হয়েছে?', en: 'What did the visitor need to show for the student discount?' }, options: ['পাসপোর্ট', 'বিশ্ববিদ্যালয়ের কার্ড', 'ট্রেনের টিকিট', 'রসিদ'], answer: 1, explanation: { bn: 'la tessera universitaria।', en: 'The university ID card.' } },
    ],
  }),

  buildReading({
    id: 'rd-a1-21',
    level: 'A1',
    kind: 'message',
    titleIt: 'La lista della spesa',
    title: { bn: 'বাজারের তালিকা (চ্যাট)', en: 'The shopping list (Chat)' },
    paragraphs: [
      {
        it: 'Marco: Amore, sono già al supermercato davanti alla cassa. Cosa manca a casa per la cena di stasera?',
        tr: { bn: 'মার্কো: প্রিয়, আমি ইতিমধ্যে সুপারমার্কেটে ক্যাশের কাছে আছি। আজ রাতের খাবারের জন্য বাসায় কী কী নেই?', en: 'Marco: Dear, I am already at the supermarket near the checkout. What are we missing at home for dinner tonight?' },
      },
      {
        it: 'Elena: Controllo subito il frigorifero! Abbiamo ancora acqua e formaggio, ma mancano le uova, il riso e due bottiglie di succo d’arancia.',
        tr: { bn: 'এলেনা: আমি এক্ষুনি ফ্রিজ চেক করছি! আমাদের পানি আর পনির এখনো আছে, কিন্তু ডিম, চাল আর দুই বোতল কমলার জুস নেই।', en: 'Elena: Let me check the fridge right now! We still have water and cheese, but we need eggs, rice, and two bottles of orange juice.' },
      },
    ],
    vocabHighlights: [
      { it: 'cosa manca?', tr: { bn: 'কী কী নেই / ঘাটতি আছে?', en: 'what is missing?' } },
      { it: 'ancora', tr: { bn: 'এখনো', en: 'still' } },
      { it: 'stasera', tr: { bn: 'আজ রাতে', en: 'tonight' } },
    ],
    grammarHighlights: [
      { excerpt: 'mancano le uova', note: { bn: 'le uova স্ত্রীলিঙ্গ বহুবচন, তাই ক্রিয়া mancano বহুবচন হয়েছে।', en: 'le uova is feminine plural, so the verb is plural mancano.' }, grammarId: 'genere-numero' },
      { excerpt: 'controllo subito', note: { bn: 'ক্রিয়ার পরে subito বসানো হয়েছে।', en: 'Adverb subito follows the verb.' }, grammarId: 'struttura-frase' },
    ],
    relatedGrammarIds: ['genere-numero', 'struttura-frase', 'avere'],
    questions: [
      { id: 'rd-a1-21-q1', prompt: { bn: 'বাসার ফ্রিজে ইতিমধ্যে কী আছে?', en: 'What is already in the fridge at home?' }, options: ['ডিম ও চাল', 'পানি ও পনির', 'মাংস ও মাছ', 'কমলার জুস'], answer: 1, explanation: { bn: 'Abbiamo ancora acqua e formaggio।', en: 'Water and cheese.' } },
      { id: 'rd-a1-21-q2', prompt: { bn: 'কয় বোতল কমলার জুস কিনতে হবে?', en: 'How many bottles of orange juice are needed?' }, options: ['এক বোতল', 'দুই বোতল', 'তিন বোতল', 'চার বোতল'], answer: 1, explanation: { bn: 'due bottiglie di succo d’arancia।', en: 'Two bottles.' } },
    ],
  }),

  buildReading({
    id: 'rd-a1-22',
    level: 'A1',
    kind: 'story',
    titleIt: 'Piccola gita al mare',
    title: { bn: 'সমুদ্রে ছোট্ট ভ্রমণ (পাঠ)', en: 'A short trip to the sea (Reader)' },
    storyId: 'st-a1-24',
    paragraphs: [
      {
        it: 'Oggi c’è il sole e non c’è vento. Io e i miei amici andiamo al mare con il treno delle nove. Portiamo un grande asciugamano e molta acqua.',
        tr: { bn: 'আজ রোদ উঠেছে এবং বাতাস নেই। আমি আর আমার বন্ধুরা নয়টার ট্রেনে সমুদ্রে যাচ্ছি। আমরা একটি বড় তোয়ালে এবং অনেক পানি সাথে নিচ্ছি।', en: 'Today it is sunny and there is no wind. My friends and I are going to the sea on the 9 o’clock train. We bring a big towel and lots of water.' },
      },
      {
        it: 'Sulla spiaggia parliamo, ridiamo e giochiamo a palla. Alle cinque torniamo in città stanchi ma molto felici della giornata.',
        tr: { bn: 'সৈকতে আমরা গল্প করি, হাসি আর বল খেলি। পাঁচটায় আমরা ক্লান্ত কিন্তু দিনটা নিয়ে খুব খুশি হয়ে শহরে ফিরে আসি।', en: 'On the beach we talk, laugh, and play ball. At five we return to the city tired but very happy with the day.' },
      },
    ],
    vocabHighlights: [
      { it: 'asciugamano', tr: { bn: 'তোয়ালে', en: 'towel' } },
      { it: 'spiaggia', tr: { bn: 'সমুদ্রসৈকত', en: 'beach' } },
      { it: 'stanchi ma felici', tr: { bn: 'ক্লান্ত কিন্তু খুশি', en: 'tired but happy' } },
    ],
    grammarHighlights: [
      { excerpt: 'non c’è vento', note: { bn: 'c’è-র আগে non বসিয়ে না-বাচক করা হয়েছে।', en: 'Negate c’è with non c’è.' }, grammarId: 'negazione' },
      { excerpt: 'stanchi ma molto felici', note: { bn: 'পুংলিঙ্গ বহুবচনে stanco → stanchi (h যোগ হয়)।', en: 'Masculine plural stanchi keeps hard k with h.' }, grammarId: 'pronuncia' },
    ],
    relatedGrammarIds: ['negazione', 'pronuncia', 'presente-are'],
    questions: [
      { id: 'rd-a1-22-q1', prompt: { bn: 'বন্ধুরা কয়টার ট্রেনে সমুদ্রে যায়?', en: 'Which train do the friends take to the sea?' }, options: ['সাতটার', 'আটটার', 'নয়টার', 'দশটার'], answer: 2, explanation: { bn: 'il treno delle nove = ৯টার ট্রেন।', en: 'The 9 o’clock train.' } },
      { id: 'rd-a1-22-q2', prompt: { bn: 'তারা কয়টায় শহরে ফিরে আসে?', en: 'What time do they return to the city?' }, options: ['বিকেল ৩টায়', 'বিকেল ৫টায়', 'রাত ৮টায়', 'দুপুর ১২টায়'], answer: 1, explanation: { bn: 'Alle cinque torniamo in città।', en: 'At five o’clock.' } },
    ],
  }),
];
