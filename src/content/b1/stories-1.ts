import type { StoryItem } from '../academyTypes';
import { buildStory } from '../builders';

export const B1_STORIES_1: StoryItem[] = [
  buildStory({
    id: 'st-b1-01', level: 'B1', titleIt: 'Una proposta per il quartiere',
    title: { bn: 'পাড়ার জন্য একটি প্রস্তাব', en: 'A proposal for the neighbourhood' },
    topic: { bn: 'নাগরিক সভা ও বর্তমান সংযোজক ভাব', en: 'Civic assembly & present subjunctive' },
    grammarIds: ['congiuntivo', 'opinione'],
    vocabKeys: ['w:B1:la proposta', 'w:B1:efficace', 'w:B1:il cittadino'],
    paragraphs: [
      { it: 'Ieri sera nel salone comunale si è tenuta un’assemblea aperta a tutti gli abitanti. Molti pensano che il quartiere abbia bisogno di più aree verdi e di una biblioteca moderna.', tr: { bn: 'গতকাল সন্ধ্যায় পৌর মিলনায়তনে সব বাসিন্দার জন্য উন্মুক্ত একটি সভা অনুষ্ঠিত হয়েছে। অনেকেই মনে করেন পাড়াটিতে আরও সবুজ এলাকা ও একটি আধুনিক গ্রন্থাগার প্রয়োজন।', en: 'Last night an assembly open to all residents was held in the municipal hall. Many think the neighbourhood needs more green areas and a modern library.' } },
      { it: 'Durante l’incontro ho presentato una proposta concreta. Credo che sia efficace trasformare il vecchio magazzino abbandonato in uno spazio di studio per i giovani.', tr: { bn: 'সভা চলাকালীন আমি একটি সুনির্দিষ্ট প্রস্তাব উপস্থাপন করেছি। আমার বিশ্বাস পরিত্যক্ত পুরোনো গুদামটিকে তরুণদের পড়ার স্থানে রূপান্তর করা কার্যকর হবে।', en: 'During the meeting I presented a concrete proposal. I believe it is effective to turn the abandoned old warehouse into a study space for young people.' } },
      { it: 'Il presidente del comitato spera che il comune approvi il progetto entro l’estate e che ogni cittadino partecipi attivamente.', tr: { bn: 'কমিটির সভাপতি আশা করেন যে পৌরসভা গ্রীষ্মের মধ্যে প্রকল্পটি অনুমোদন করবে এবং প্রতিটি নাগরিক সক্রিয়ভাবে অংশ নেবে।', en: 'The committee chair hopes the municipality approves the project by summer and that every citizen participates actively.' } },
    ],
    wordGlossary: [
      { word: 'proposta', base: 'la proposta', tr: { bn: 'প্রস্তাব', en: 'proposal' }, pos: 'noun' },
      { word: 'efficace', base: 'efficace', tr: { bn: 'কার্যকর', en: 'effective' }, pos: 'adj' },
      { word: 'cittadino', base: 'il cittadino', tr: { bn: 'নাগরিক', en: 'citizen' }, pos: 'noun' },
    ],
    grammarBreakdown: [
      { sentenceIt: 'Credo che sia efficace trasformare il vecchio magazzino.', ruleTitle: { bn: 'Credo che + congiuntivo presente', en: 'Credo che + present subjunctive' }, explanation: { bn: 'মতামত প্রকাশক Credo che-এর পরে essere ক্রিয়ার সংযোজক রূপ sia বসেছে।', en: 'Credo che triggers the present subjunctive sia.' }, grammarId: 'congiuntivo' },
    ],
    mcq: [
      { id: 'stb1-1-q1', prompt: { bn: 'পুরোনো গুদামটিকে কিসে রূপান্তর করার প্রস্তাব দেওয়া হয়েছে?', en: 'What did the narrator propose turning the old warehouse into?' }, options: ['সুপারমার্কেট', 'তরুণদের পড়ার স্থান', 'গাড়ির গ্যারেজ', 'সিনেমা হল'], answer: 1, explanation: { bn: 'uno spazio di studio per i giovani।', en: 'A study space for young people.' } },
      { id: 'stb1-1-q2', prompt: { bn: 'কমিটির সভাপতি কবে নাগাদ অনুমোদনের আশা করছেন?', en: 'By when does the chair hope for approval?' }, options: ['শীতের মধ্যে', 'গ্রীষ্মের মধ্যে', 'আগামী সপ্তাহে', 'দুই বছর পর'], answer: 1, explanation: { bn: 'entro l’estate = গ্রীষ্মের মধ্যে।', en: 'By summer.' } },
    ],
    trueFalse: [
      { id: 'stb1-1-tf1', statementIt: 'L’assemblea era riservata solo ai consiglieri comunali.', statement: { bn: 'সভাটি কেবল পৌর কাউন্সিলরদের জন্য সংরক্ষিত ছিল।', en: 'The assembly was reserved only for municipal councillors.' }, answer: false, explanation: { bn: 'era aperta a tutti gli abitanti।', en: 'It was open to all residents.' } },
    ],
    fillBlank: [
      { id: 'stb1-1-fb1', sentence: 'Molti pensano che il quartiere ___ bisogno di aree verdi.', options: ['ha', 'abbia', 'avrà', 'aveva'], answer: 1, explanation: { bn: 'pensano che + abbia।', en: 'pensano che takes abbia.' } },
    ],
    shortAnswer: [
      { id: 'stb1-1-sa1', question: { bn: 'পাড়ায় কীসের প্রয়োজন বলে বাসিন্দারা মনে করেন?', en: 'What do residents think the neighbourhood needs?' }, sampleAnswerIt: 'Pensano che abbia bisogno di più aree verdi e di una biblioteca.', keywords: ['aree', 'verdi', 'biblioteca'] },
    ],
    practice: {
      retellPrompt: { bn: 'নাগরিক সভার প্রস্তাবটি ৩টি বাক্যে নিজের ভাষায় লিখুন।', en: 'Summarise the neighbourhood assembly proposal in 3 sentences.' },
      completeMissing: { promptIt: 'Spero che il comune ___ la nostra proposta.', hint: { bn: 'approvare সংযোজক রূপ: approvi', en: 'subjunctive of approvare: approvi' }, sampleIt: 'Spero che il comune approvi la nostra proposta.' },
      buildSimilar: { patternIt: 'Credo che sia efficace collaborare.', prompt: { bn: 'Credo che sia... দিয়ে একটি মতামত লিখুন।', en: 'Write an opinion starting with Credo che sia...' }, sampleIt: 'Credo che sia utile creare più spazi verdi.' },
      altEndingPrompt: { bn: 'পৌরসভা প্রকল্পটি অনুমোদন করলে কী হবে তা লিখুন।', en: 'Write what will happen once the municipality approves the project.' },
    },
  }),

  buildStory({
    id: 'st-b1-02', level: 'B1', titleIt: 'Lavorare da casa o in ufficio?',
    title: { bn: 'বাসা থেকে কাজ নাকি অফিসে?', en: 'Working from home or in the office?' },
    topic: { bn: 'স্মার্ট ওয়ার্কিং ও শর্তমূলক বাক্য', en: 'Smart working & conditionals' },
    grammarIds: ['periodo-ipotetico', 'periodo-ipotetico-2'],
    vocabKeys: ['w:B1:lo smart working', 'w:B1:il risparmio', 'w:B1:accettare'],
    paragraphs: [
      { it: 'Negli ultimi anni molte aziende italiane hanno introdotto lo smart working per alcuni giorni alla settimana. Per chi abita lontano dal centro, questa novità rappresenta un grande vantaggio.', tr: { bn: 'সাম্প্রতিক বছরগুলোতে অনেক ইতালীয় প্রতিষ্ঠান সপ্তাহে কয়েক দিনের জন্য স্মার্ট ওয়ার্কিং চালু করেছে। যারা কেন্দ্র থেকে দূরে থাকে তাদের জন্য এই নতুনত্ব একটি বড় সুবিধা।', en: 'In recent years many Italian companies have introduced remote working for a few days a week. For those living far from the centre, this innovation represents a big advantage.' } },
      { it: 'Se lavorassi da casa tre giorni su cinque, otterrei un notevole risparmio sui costi del carburante e dei mezzi pubblici.', tr: { bn: 'পাঁচ দিনের মধ্যে তিন দিন বাসা থেকে কাজ করলে জ্বালানি ও গণপরিবহনের খরচে উল্লেখযোগ্য সাশ্রয় পেতাম।', en: 'If I worked from home three days out of five, I would achieve significant savings on fuel and public transport costs.' } },
      { it: 'Tuttavia, se non vedessi mai i colleghi di persona, mi mancherebbe il confronto quotidiano. Perciò accetterei volentieri una formula mista.', tr: { bn: 'তবে সহকর্মীদের কখনো সরাসরি না দেখলে দৈনন্দিন মতবিনিময় মিস করতাম। তাই আমি সানন্দে একটি মিশ্র পদ্ধতি গ্রহণ করতাম।', en: 'However, if I never saw my colleagues in person, I would miss daily interaction. Therefore I would gladly accept a hybrid arrangement.' } },
    ],
    wordGlossary: [
      { word: 'smart working', base: 'lo smart working', tr: { bn: 'দূরবর্তী কাজ', en: 'remote working' }, pos: 'noun' },
      { word: 'risparmio', base: 'il risparmio', tr: { bn: 'সাশ্রয় / সঞ্চয়', en: 'saving' }, pos: 'noun' },
      { word: 'accettare', base: 'accettare', tr: { bn: 'গ্রহণ করা', en: 'to accept' }, pos: 'verb' },
    ],
    grammarBreakdown: [
      { sentenceIt: 'Se lavorassi da casa, otterrei un notevole risparmio.', ruleTitle: { bn: 'Se + congiuntivo imperfetto, condizionale', en: '2nd conditional structure' }, explanation: { bn: 'সম্ভাব্য বা কাল্পনিক শর্তে Se lavorassi এবং ফলাফলে otterrei ব্যবহৃত হয়েছে।', en: 'Hypothetical condition uses lavorassi and result uses otterrei.' }, grammarId: 'periodo-ipotetico' },
    ],
    mcq: [
      { id: 'stb1-2-q1', prompt: { bn: 'বাসা থেকে কাজ করলে কোন খরচে সাশ্রয় হতো?', en: 'What costs would working from home save on?' }, options: ['বাড়ি ভাড়া', 'জ্বালানি ও গণপরিবহন', 'ইন্টারনেট বিল', 'পোশাক'], answer: 1, explanation: { bn: 'costi del carburante e dei mezzi pubblici।', en: 'Fuel and public transport costs.' } },
    ],
    trueFalse: [
      { id: 'stb1-2-tf1', statementIt: 'Il narratore vorrebbe lavorare solo da casa senza mai andare in ufficio.', statement: { bn: 'বক্তা কখনো অফিসে না গিয়ে কেবল বাসা থেকেই কাজ করতে চান।', en: 'The narrator wants to work exclusively from home without ever going to the office.' }, answer: false, explanation: { bn: 'তিনি একটি মিশ্র পদ্ধতি (una formula mista) পছন্দ করেন।', en: 'He prefers a hybrid arrangement.' } },
    ],
    fillBlank: [
      { id: 'stb1-2-fb1', sentence: 'Se non ___ i colleghi, mi mancherebbe il confronto.', options: ['vedrò', 'vedessi', 'vedrei', 'vedo'], answer: 1, explanation: { bn: 'Se + congiuntivo imperfetto (vedessi)।', en: 'Se takes imperfect subjunctive vedessi.' } },
    ],
    shortAnswer: [
      { id: 'stb1-2-sa1', question: { bn: 'বক্তা কোন ধরনের কাজের পদ্ধতি গ্রহণ করতেন?', en: 'What kind of work arrangement would the narrator accept?' }, sampleAnswerIt: 'Accetterebbe volentieri una formula mista.', keywords: ['formula', 'mista'] },
    ],
    practice: {
      retellPrompt: { bn: 'স্মার্ট ওয়ার্কিংয়ের সুবিধা ও অসুবিধা ৩ বাক্যে লিখুন।', en: 'Write 3 sentences on the pros and cons of remote working.' },
      completeMissing: { promptIt: 'Se ___ più vicino, andrei al lavoro a piedi.', hint: { bn: 'abitare → abitassi', en: 'imperfect subjunctive abitassi' }, sampleIt: 'Se abitassi più vicino, andrei al lavoro a piedi.' },
      buildSimilar: { patternIt: 'Se lavorassi da casa, risparmierei tempo.', prompt: { bn: 'Se potessi... দিয়ে একটি কাল্পনিক বাক্য লিখুন।', en: 'Write a hypothetical sentence with Se potessi...' }, sampleIt: 'Se potessi scegliere, lavorerei da casa due giorni.' },
      altEndingPrompt: { bn: 'কোম্পানি নতুন চুক্তি দিলে কর্মীরা কী করবে তা লিখুন।', en: 'Write how employees will react to the hybrid contract.' },
    },
  }),

  buildStory({
    id: 'st-b1-03', level: 'B1', titleIt: 'La promessa mantenuta',
    title: { bn: 'রক্ষা করা প্রতিশ্রুতি', en: 'The kept promise' },
    topic: { bn: 'অতীতের ভবিষ্যৎ ও অনুশোচনা', en: 'Future-in-the-past & past wishes' },
    grammarIds: ['condizionale-passato'],
    vocabKeys: ['w:B1:partecipare', 'w:B1:il rimpianto'],
    paragraphs: [
      { it: 'Quando Tariq si trasferì a Torino per il politecnico, promise ai suoi genitori che li avrebbe chiamati ogni domenica sera e che avrebbe studiato con disciplina.', tr: { bn: 'তারিক যখন পলিটেকনিকের জন্য তুরিনে চলে আসে, তখন মা-বাবাকে কথা দিয়েছিল যে প্রতি রবিবার সন্ধ্যায় ফোন করবে এবং শৃঙ্খলার সাথে পড়াশোনা করবে।', en: 'When Tariq moved to Turin for the polytechnic, he promised his parents he would call them every Sunday evening and study with discipline.' } },
      { it: 'All’inizio non fu facile abituarsi al clima rigido. Spesso pensava che avrebbe voluto partecipare a più eventi culturali, ma gli esami richiedevano molte ore di laboratorio.', tr: { bn: 'শুরুতে তীব্র শীতের সাথে মানিয়ে নেওয়া সহজ ছিল না। প্রায়ই সে ভাবত আরও সাংস্কৃতিক অনুষ্ঠানে অংশ নিতে পারলে ভালো হতো, কিন্তু পরীক্ষার জন্য ল্যাবরেটরিতে অনেক ঘণ্টা দিতে হতো।', en: 'At first it was not easy getting used to the harsh climate. He often thought he would have liked to attend more cultural events, but exams required many hours in the lab.' } },
      { it: 'Alla fine si è laureato con il massimo dei voti, senza alcun rimpianto per i sacrifici fatti.', tr: { bn: 'শেষ পর্যন্ত কৃত ত্যাগের জন্য কোনো অনুশোচনা ছাড়াই সে সর্বোচ্চ নম্বর নিয়ে স্নাতক হয়েছে।', en: 'In the end he graduated with top marks, without any regret for the sacrifices made.' } },
    ],
    wordGlossary: [
      { word: 'partecipare', base: 'partecipare', tr: { bn: 'অংশগ্রহণ করা', en: 'to participate' }, pos: 'verb' },
      { word: 'rimpianto', base: 'il rimpianto', tr: { bn: 'অনুশোচনা / আক্ষেপ', en: 'regret' }, pos: 'noun' },
      { word: 'rigido', base: 'rigido', tr: { bn: 'কঠোর / তীব্র শীতল', en: 'harsh / cold' }, pos: 'adj' },
    ],
    grammarBreakdown: [
      { sentenceIt: 'Promise che li avrebbe chiamati ogni domenica.', ruleTitle: { bn: 'Condizionale passato (অতীতে ভবিষ্যৎ)', en: 'Past conditional for future-in-the-past' }, explanation: { bn: 'অতীতে দেওয়া প্রতিশ্রুতি বোঝাতে avrebbe chiamati ব্যবহৃত হয়েছে।', en: 'Future-in-the-past after promise uses avrebbe chiamati.' }, grammarId: 'condizionale-passato' },
    ],
    mcq: [
      { id: 'stb1-3-q1', prompt: { bn: 'তারিক কবে মা-বাবাকে ফোন করার প্রতিশ্রুতি দিয়েছিল?', en: 'When did Tariq promise he would call his parents?' }, options: ['প্রতিদিন সকালে', 'প্রতি রবিবার সন্ধ্যায়', 'মাসে একবার', 'শুক্রবার দুপুরে'], answer: 1, explanation: { bn: 'ogni domenica sera।', en: 'Every Sunday evening.' } },
    ],
    trueFalse: [
      { id: 'stb1-3-tf1', statementIt: 'Tariq ha molti rimpianti per gli anni universitari.', statement: { bn: 'বিশ্ববিদ্যালয়ের বছরগুলো নিয়ে তারিকের অনেক আক্ষেপ আছে।', en: 'Tariq has many regrets about his university years.' }, answer: false, explanation: { bn: 'senza alcun rimpianto = কোনো আক্ষেপ ছাড়া।', en: 'He graduated without any regret.' } },
    ],
    fillBlank: [
      { id: 'stb1-3-fb1', sentence: 'Pensava che ___ voluto partecipare a più eventi.', options: ['avrebbe', 'avrà', 'abbia', 'avesse'], answer: 0, explanation: { bn: 'avrebbe voluto partecipare।', en: 'avrebbe voluto.' } },
    ],
    shortAnswer: [
      { id: 'stb1-3-sa1', question: { bn: 'তারিক কেন তুরিনে গিয়েছিল?', en: 'Why did Tariq move to Turin?' }, sampleAnswerIt: 'Si trasferì a Torino per studiare al politecnico.', keywords: ['politecnico', 'studiare'] },
    ],
    practice: {
      retellPrompt: { bn: 'তারিকের প্রতিশ্রুতি ও সাফল্য ৩ বাক্যে লিখুন।', en: 'Retell Tariq’s promise and graduation in 3 sentences.' },
      completeMissing: { promptIt: 'Giulia ha detto che ___ arrivata alle otto.', hint: { bn: 'essere → sarebbe', en: 'past conditional sarebbe' }, sampleIt: 'Giulia ha detto che sarebbe arrivata alle otto.' },
      buildSimilar: { patternIt: 'Avrei voluto partecipare al concerto.', prompt: { bn: 'অতীতে আপনি কী করতে চেয়েছিলেন তা লিখুন।', en: 'Write something you would have liked to do in the past.' }, sampleIt: 'Avrei voluto visitare anche Venezia.' },
      altEndingPrompt: { bn: 'স্নাতক হওয়ার পর তারিক মা-বাবাকে কী বলল তা লিখুন।', en: 'Write what Tariq told his parents at graduation.' },
    },
  }),

  buildStory({
    id: 'st-b1-04', level: 'B1', titleIt: 'Il romanzo ritrovato',
    title: { bn: 'ফিরে পাওয়া উপন্যাস', en: 'The rediscovered novel' },
    topic: { bn: 'পুরাঘটিত অতীত (trapassato prossimo)', en: 'Pluperfect tense (trapassato prossimo)' },
    grammarIds: ['trapassato'],
    vocabKeys: ["w:B1:l'impegno", 'w:B1:il romanzo'],
    paragraphs: [
      { it: 'Sabato mattina sono tornato nella piccola libreria antiquaria vicino all’università. Cercavo un romanzo storico che avevo letto molti anni prima durante il liceo.', tr: { bn: 'শনিবার সকালে আমি বিশ্ববিদ্যালয়ের কাছের ছোট পুরোনো বইয়ের দোকানে ফিরে গিয়েছিলাম। আমি একটি ঐতিহাসিক উপন্যাস খুঁজছিলাম যা অনেক বছর আগে হাইস্কুলে থাকতে পড়েছিলাম।', en: 'On Saturday morning I returned to the small antiquarian bookshop near the university. I was looking for a historical novel that I had read many years earlier during high school.' } },
      { it: 'Il libraio mi ha sorriso perché aveva messo da parte proprio quell’edizione rara due giorni prima. Con grande impegno aveva restaurato la copertina originale.', tr: { bn: 'বইবিক্রেতা আমাকে দেখে হাসলেন কারণ তিনি দুই দিন আগেই ঠিক ওই দুর্লভ সংস্করণটি আলাদা করে রেখেছিলেন। প্রবল নিষ্ঠার সাথে তিনি মূল প্রচ্ছদটি সংস্কার করেছিলেন।', en: 'The bookseller smiled at me because he had set aside that very rare edition two days earlier. With great dedication he had restored the original cover.' } },
      { it: 'Quando ho aperto la prima pagina, ho sentito lo stesso entusiasmo che avevo provato da ragazzo.', tr: { bn: 'যখন প্রথম পৃষ্ঠাটি খুললাম, কিশোর বয়সে যে উদ্দীপনা অনুভব করেছিলাম ঠিক সেই একই অনুভূতি হলো।', en: 'When I opened the first page, I felt the same enthusiasm I had experienced as a boy.' } },
    ],
    wordGlossary: [
      { word: 'impegno', base: "l'impegno", tr: { bn: 'নিষ্ঠা / প্রচেষ্টা', en: 'commitment / effort' }, pos: 'noun' },
      { word: 'romanzo', base: 'il romanzo', tr: { bn: 'উপন্যাস', en: 'novel' }, pos: 'noun' },
      { word: 'copertina', base: 'la copertina', tr: { bn: 'প্রচ্ছদ', en: 'book cover' }, pos: 'noun' },
    ],
    grammarBreakdown: [
      { sentenceIt: 'Cercavo un romanzo che avevo letto molti anni prima.', ruleTitle: { bn: 'Trapassato prossimo (avevo letto)', en: 'Pluperfect tense' }, explanation: { bn: 'খোঁজারও অনেক আগে পড়া হয়ে গিয়েছিল বোঝাতে avevo letto বসেছে।', en: 'Action prior to cercavo uses avevo letto.' }, grammarId: 'trapassato' },
    ],
    mcq: [
      { id: 'stb1-4-q1', prompt: { bn: 'বক্তা উপন্যাসটি প্রথম কবে পড়েছিলেন?', en: 'When had the narrator first read the novel?' }, options: ['গত সপ্তাহে', 'হাইস্কুলে থাকতে', 'বিশ্ববিদ্যালয়ের শেষে', 'গত গ্রীষ্মে'], answer: 1, explanation: { bn: 'durante il liceo।', en: 'During high school.' } },
    ],
    trueFalse: [
      { id: 'stb1-4-tf1', statementIt: 'Il libraio aveva venduto il libro a un altro cliente.', statement: { bn: 'বইবিক্রেতা বইটি অন্য গ্রাহকের কাছে বিক্রি করে দিয়েছিলেন।', en: 'The bookseller had sold the book to another customer.' }, answer: false, explanation: { bn: 'তিনি বইটি আলাদা করে রেখেছিলেন (aveva messo da parte)।', en: 'He had set it aside for the narrator.' } },
    ],
    fillBlank: [
      { id: 'stb1-4-fb1', sentence: 'Il libraio ___ restaurato la copertina originale.', options: ['ha', 'aveva', 'avrà', 'avesse'], answer: 1, explanation: { bn: 'পূর্ববর্তী অতীত কাজ → aveva restaurato।', en: 'aveva restaurato.' } },
    ],
    shortAnswer: [
      { id: 'stb1-4-sa1', question: { bn: 'বইবিক্রেতা কী সংস্কার করেছিলেন?', en: 'What had the bookseller restored?' }, sampleAnswerIt: 'Aveva restaurato la copertina originale del romanzo.', keywords: ['copertina', 'originale'] },
    ],
    practice: {
      retellPrompt: { bn: 'পুরোনো বইয়ের দোকানের ঘটনাটি ৩ বাক্যে লিখুন।', en: 'Retell the bookshop story in 3 sentences.' },
      completeMissing: { promptIt: 'Quando sono arrivato, il treno ___ già partito.', hint: { bn: 'essere imperfetto: era', en: 'era già partito' }, sampleIt: 'Quando sono arrivato, il treno era già partito.' },
      buildSimilar: { patternIt: 'Ho ritrovato un libro che avevo letto anni fa.', prompt: { bn: 'আগে করেছিলেন এমন কোনো কাজের কথা trapassato দিয়ে লিখুন।', en: 'Write a sentence using trapassato prossimo.' }, sampleIt: 'Ho visitato il museo di cui mi avevi parlato.' },
      altEndingPrompt: { bn: 'বইটি কিনে বাসায় ফিরে বক্তা কী করলেন লিখুন।', en: 'Write what the narrator did after taking the book home.' },
    },
  }),

  buildStory({
    id: 'st-b1-05', level: 'B1', titleIt: 'Cambiare quartiere a Milano',
    title: { bn: 'মিলানে পাড়া বদল', en: 'Changing neighbourhood in Milan' },
    topic: { bn: 'বাসস্থান ও সম্বন্ধবাচক সর্বনাম (che / cui)', en: 'Housing & relative pronouns (che / cui)' },
    grammarIds: ['relativi'],
    vocabKeys: ['w:B1:il quartiere', 'w:B1:trasferirsi', "w:B1:l'argomento"],
    paragraphs: [
      { it: 'Il mese scorso io e la mia famiglia abbiamo deciso di trasferirci in una zona più verde. Il quartiere in cui abitavamo prima era molto centrale, ma troppo rumoroso.', tr: { bn: 'গত মাসে আমি ও আমার পরিবার আরও সবুজ একটি এলাকায় চলে যাওয়ার সিদ্ধান্ত নিয়েছি। আগে আমরা যে পাড়ায় থাকতাম সেটি খুব কেন্দ্রে ছিল, কিন্তু অতিরিক্ত কোলাহলপূর্ণ।', en: 'Last month my family and I decided to move to a greener area. The neighbourhood in which we used to live was very central, but too noisy.' } },
      { it: 'L’agenzia immobiliare a cui ci siamo rivolti ci ha mostrato un appartamento luminoso vicino al parco. Il proprietario con cui abbiamo firmato il contratto è una persona gentilissima.', tr: { bn: 'যে রিয়েল এস্টেট এজেন্সির শরণাপন্ন আমরা হয়েছিলাম তারা আমাদের পার্কের কাছে একটি আলোকিত ফ্ল্যাট দেখিয়েছে। যাঁর সাথে আমরা চুক্তিতে সই করেছি সেই মালিক অত্যন্ত ভদ্র মানুষ।', en: 'The real estate agency we turned to showed us a bright flat near the park. The landlord with whom we signed the contract is a very kind person.' } },
      { it: 'La qualità della vita è l’argomento di cui parliamo spesso con i nuovi vicini, che ci hanno accolto con calore.', tr: { bn: 'জীবনযাত্রার মান হলো সেই বিষয় যা নিয়ে আমরা নতুন প্রতিবেশীদের সাথে প্রায়ই কথা বলি, যাঁরা আমাদের আন্তরিকভাবে স্বাগত জানিয়েছেন।', en: 'Quality of life is the topic about which we often speak with our new neighbours, who welcomed us warmly.' } },
    ],
    wordGlossary: [
      { word: 'quartiere', base: 'il quartiere', tr: { bn: 'পাড়া / মহল্লা', en: 'neighbourhood' }, pos: 'noun' },
      { word: 'trasferirsi', base: 'trasferirsi', tr: { bn: 'বাসা বদলানো / স্থানান্তরিত হওয়া', en: 'to move house' }, pos: 'verb' },
      { word: 'argomento', base: "l'argomento", tr: { bn: 'বিষয় / প্রসঙ্গ', en: 'topic / subject' }, pos: 'noun' },
    ],
    grammarBreakdown: [
      { sentenceIt: 'Il proprietario con cui abbiamo firmato il contratto è gentilissimo.', ruleTitle: { bn: 'অব্যয় + cui', en: 'Preposition + cui' }, explanation: { bn: 'con প্রিপোজিশনের পরে সম্বন্ধবাচক সর্বনাম cui বসেছে।', en: 'After preposition con, use relative pronoun cui.' }, grammarId: 'relativi' },
    ],
    mcq: [
      { id: 'stb1-5-q1', prompt: { bn: 'আগের পাড়াটির সমস্যা কী ছিল?', en: 'What was the problem with the previous neighbourhood?' }, options: ['দোকান ছিল না', 'অতিরিক্ত কোলাহলপূর্ণ ছিল', 'মেট্রো থেকে দূরে ছিল', 'খুব ঠান্ডা ছিল'], answer: 1, explanation: { bn: 'troppo rumoroso = অতিরিক্ত কোলাহলপূর্ণ।', en: 'It was too noisy.' } },
    ],
    trueFalse: [
      { id: 'stb1-5-tf1', statementIt: 'Il nuovo appartamento si trova vicino al parco.', statement: { bn: 'নতুন ফ্ল্যাটটি পার্কের কাছে অবস্থিত।', en: 'The new flat is located near the park.' }, answer: true, explanation: { bn: 'un appartamento luminoso vicino al parco।', en: 'Near the park.' } },
    ],
    fillBlank: [
      { id: 'stb1-5-fb1', sentence: 'L’argomento ___ cui parliamo è importante.', options: ['che', 'di', 'chi', 'quale'], answer: 1, explanation: { bn: 'parlare di → di cui।', en: 'parlare di → di cui.' } },
    ],
    shortAnswer: [
      { id: 'stb1-5-sa1', question: { bn: 'নতুন প্রতিবেশীরা তাদের কীভাবে স্বাগত জানিয়েছে?', en: 'How did the new neighbours welcome them?' }, sampleAnswerIt: 'I nuovi vicini li hanno accolti con calore.', keywords: ['accolto', 'calore'] },
    ],
    practice: {
      retellPrompt: { bn: 'নতুন পাড়ায় বাসা বদলের গল্পটি ৩ বাক্যে লিখুন।', en: 'Summarise the move to the new neighbourhood in 3 sentences.' },
      completeMissing: { promptIt: 'La città in ___ vivo è ricca di storia.', hint: { bn: 'in + cui', en: 'cui' }, sampleIt: 'La città in cui vivo è ricca di storia.' },
      buildSimilar: { patternIt: 'Il quartiere in cui abitiamo è tranquillo.', prompt: { bn: 'in cui বা con cui দিয়ে একটি বাক্য লিখুন।', en: 'Write a sentence with in cui or con cui.' }, sampleIt: 'I colleghi con cui lavoro sono molto disponibili.' },
      altEndingPrompt: { bn: 'নতুন পার্কে সপ্তাহান্তে তারা কী করবে তা লিখুন।', en: 'Write what the family will do in the park at the weekend.' },
    },
  }),

  buildStory({
    id: 'st-b1-06', level: 'B1', titleIt: 'Documenti condivisi in ufficio',
    title: { bn: 'অফিসে শেয়ার করা নথিপত্র', en: 'Shared documents at the office' },
    topic: { bn: 'দাপ্তরিক কাজ ও যৌগিক সর্বনাম', en: 'Office workflow & combined pronouns' },
    grammarIds: ['pronomi-combinati'],
    vocabKeys: ['w:B1:il file', 'w:B1:allegare'],
    paragraphs: [
      { it: 'Stamattina la direttrice aveva bisogno urgente del bilancio trimestrale. Appena ho controllato il file definitivo, gliel’ho inviato per posta elettronica.', tr: { bn: 'আজ সকালে পরিচালিকার ত্রৈমাসিক হিসাব বিবরণী জরুরি প্রয়োজন ছিল। চূড়ান্ত ফাইলটি পরীক্ষা করা মাত্রই আমি তাঁকে সেটি ইমেইলে পাঠিয়ে দিয়েছি।', en: 'This morning the director urgently needed the quarterly balance sheet. As soon as I checked the final file, I sent it to her by email.' } },
      { it: 'Anche il cliente di Genova ci aveva chiesto le tabelle aggiornate; il mio collega Marco si è ricordato di allegare i grafici e gliele ha spedite prima di pranzo.', tr: { bn: 'জেনোভার গ্রাহকও আমাদের কাছে হালনাগাদ তালিকাগুলো চেয়েছিলেন; আমার সহকর্মী মার্কো গ্রাফগুলো সংযুক্ত করার কথা মনে রেখেছে এবং দুপুরের খাবারের আগেই তাঁকে সেগুলো পাঠিয়েছে।', en: 'The client in Genoa had also asked us for the updated tables; my colleague Marco remembered to attach the charts and sent them to him before lunch.' } },
      { it: 'Quando ti serviranno i modelli per la prossima riunione, dimmelo pure: te li preparo volentieri.', tr: { bn: 'পরবর্তী সভার জন্য তোমার যখন ফর্মগুলোর দরকার হবে, আমাকে নির্দ্বিধায় বোলো: আমি সানন্দে তোমাকে সেগুলো তৈরি করে দেব।', en: 'When you need the templates for the next meeting, just tell me: I will gladly prepare them for you.' } },
    ],
    wordGlossary: [
      { word: 'file', base: 'il file', tr: { bn: 'ফাইল', en: 'digital file' }, pos: 'noun' },
      { word: 'allegare', base: 'allegare', tr: { bn: 'সংযুক্ত করা', en: 'to attach' }, pos: 'verb' },
      { word: 'trimestrale', base: 'trimestrale', tr: { bn: 'ত্রৈমাসিক', en: 'quarterly' }, pos: 'adj' },
    ],
    grammarBreakdown: [
      { sentenceIt: 'Appena ho controllato il file, gliel’ho inviato.', ruleTitle: { bn: 'le + lo = glielo (gliel’)', en: 'Combined pronoun glielo' }, explanation: { bn: 'পরিচালিকাকে (le) ফাইলটি (lo) পাঠানো হয়েছে → gliel’ho inviato।', en: 'le + lo combines into glielo (elided to gliel’ before ho).' }, grammarId: 'pronomi-combinati' },
    ],
    mcq: [
      { id: 'stb1-6-q1', prompt: { bn: 'মার্কো কখন জেনোভার গ্রাহককে তালিকাগুলো পাঠিয়েছে?', en: 'When did Marco send the tables to the client in Genoa?' }, options: ['গতকাল রাতে', 'দুপুরের খাবারের আগে', 'সন্ধ্যায়', 'পরের সপ্তাহে'], answer: 1, explanation: { bn: 'prima di pranzo = দুপুরের খাবারের আগে।', en: 'Before lunch.' } },
    ],
    trueFalse: [
      { id: 'stb1-6-tf1', statementIt: 'Marco ha dimenticato di allegare i grafici.', statement: { bn: 'মার্কো গ্রাফ সংযুক্ত করতে ভুলে গেছে।', en: 'Marco forgot to attach the charts.' }, answer: false, explanation: { bn: 'si è ricordato di allegare i grafici।', en: 'He remembered to attach them.' } },
    ],
    fillBlank: [
      { id: 'stb1-6-fb1', sentence: 'Se ti servono i modelli, ___ preparo subito.', options: ['ti li', 'te li', 'me li', 'glieli'], answer: 1, explanation: { bn: 'ti + li = te li।', en: 'ti + li becomes te li.' } },
    ],
    shortAnswer: [
      { id: 'stb1-6-sa1', question: { bn: 'পরিচালিকার কী প্রয়োজন ছিল?', en: 'What did the director need?' }, sampleAnswerIt: 'Aveva bisogno del bilancio trimestrale.', keywords: ['bilancio', 'trimestrale'] },
    ],
    practice: {
      retellPrompt: { bn: 'অফিসে ফাইল পাঠানোর ঘটনাটি ৩ বাক্যে লিখুন।', en: 'Describe the office document exchange in 3 sentences.' },
      completeMissing: { promptIt: 'La ricevuta? ___ mando subito via mail.', hint: { bn: 'তোমাকে সেটি (স্ত্রী): Te la', en: 'Te la' }, sampleIt: 'La ricevuta? Te la mando subito via mail.' },
      buildSimilar: { patternIt: 'Dimmelo pure: te li preparo volentieri.', prompt: { bn: 'me lo বা te la দিয়ে একটি বাক্য লিখুন।', en: 'Write a sentence using me lo or te la.' }, sampleIt: 'Se trovi l’articolo, mandamelo per favore.' },
      altEndingPrompt: { bn: 'পরিচালিকা ইমেইল পেয়ে কী উত্তর দিলেন তা লিখুন।', en: 'Write the director’s reply after receiving the file.' },
    },
  }),

  buildStory({
    id: 'st-b1-07', level: 'B1', titleIt: 'Equilibrio tra lavoro e vita privata',
    title: { bn: 'কাজ ও ব্যক্তিগত জীবনের ভারসাম্য', en: 'Work-life balance' },
    topic: { bn: 'মানসিক চাপ ও নৈর্ব্যক্তিক si', en: 'Wellbeing & impersonal si' },
    grammarIds: ['si-impersonale'],
    vocabKeys: ['w:B1:adattarsi', 'w:B1:stressato', 'w:B1:la sfida'],
    paragraphs: [
      { it: 'Nella società contemporanea si corre continuamente e spesso non ci si ferma nemmeno durante il fine settimana. Quando si è troppo stressati, si perde facilmente la concentrazione.', tr: { bn: 'সমসাময়িক সমাজে মানুষ অবিরাম ছুটছে এবং প্রায়ই সপ্তাহান্তেও থামে না। অতিরিক্ত মানসিক চাপে থাকলে সহজেই মনোযোগ হারিয়ে যায়।', en: 'In contemporary society people are constantly rushing and often do not even stop at the weekend. When one is too stressed, concentration is easily lost.' } },
      { it: 'Per affrontare ogni nuova sfida professionale con serenità, bisogna imparare ad adattarsi senza trascurare il riposo e gli affetti.', tr: { bn: 'প্রতিটি নতুন পেশাগত চ্যালেঞ্জ প্রশান্তির সাথে মোকাবিলা করতে বিশ্রাম ও প্রিয়জনদের অবহেলা না করে খাপ খাইয়ে নিতে শিখতে হয়।', en: 'To face every new professional challenge calmly, one must learn to adapt without neglecting rest and loved ones.' } },
      { it: 'In molte città italiane oggi si promuovono corsi gratuiti di sport nei parchi, perché quando ci si muove all’aria aperta si vive molto meglio.', tr: { bn: 'অনেক ইতালীয় শহরে আজ পার্কে বিনামূল্যে খেলাধুলার কোর্স উৎসাহিত করা হয়, কারণ খোলা বাতাসে চলাফেরা করলে অনেক ভালো থাকা যায়।', en: 'In many Italian cities today free park sports courses are promoted, because when one exercises outdoors one lives much better.' } },
    ],
    wordGlossary: [
      { word: 'adattarsi', base: 'adattarsi', tr: { bn: 'খাপ খাইয়ে নেওয়া', en: 'to adapt' }, pos: 'verb' },
      { word: 'stressato', base: 'stressato', tr: { bn: 'মানসিক চাপে থাকা', en: 'stressed' }, pos: 'adj' },
      { word: 'sfida', base: 'la sfida', tr: { bn: 'চ্যালেঞ্জ / আহ্বান', en: 'challenge' }, pos: 'noun' },
    ],
    grammarBreakdown: [
      { sentenceIt: 'Quando si è troppo stressati, si perde la concentrazione.', ruleTitle: { bn: 'Si impersonale + পুংলিঙ্গ বহুবচন বিশেষণ', en: 'Impersonal si + plural adjective' }, explanation: { bn: 'নৈর্ব্যক্তিক si-এর সাথে essere বসলে পরের বিশেষণটি পুংলিঙ্গ বহুবচন (stressati) হয়।', en: 'After impersonal si è, adjectives take masculine plural (-i): stressati.' }, grammarId: 'si-impersonale' },
    ],
    mcq: [
      { id: 'stb1-7-q1', prompt: { bn: 'অনেক ইতালীয় শহরে পার্কে কী উৎসাহিত করা হচ্ছে?', en: 'What is promoted in parks in many Italian cities?' }, options: ['নৈশ বাজার', 'বিনামূল্যে খেলাধুলার কোর্স', 'গাড়ির প্রদর্শনী', 'বইমেলা'], answer: 1, explanation: { bn: 'corsi gratuiti di sport nei parchi।', en: 'Free sports courses in parks.' } },
    ],
    trueFalse: [
      { id: 'stb1-7-tf1', statementIt: 'Quando si è stressati, ci si concentra meglio.', statement: { bn: 'মানসিক চাপে থাকলে মনোযোগ আরও ভালো হয়।', en: 'When one is stressed, one concentrates better.' }, answer: false, explanation: { bn: 'si perde facilmente la concentrazione।', en: 'One easily loses concentration.' } },
    ],
    fillBlank: [
      { id: 'stb1-7-fb1', sentence: 'Quando ___ muove all’aria aperta, si vive meglio.', options: ['si si', 'ci si', 'se ci', 'vi si'], answer: 1, explanation: { bn: 'প্রতিফলক muoversi নৈর্ব্যক্তিক রূপে ci si muove হয়।', en: 'Reflexive muoversi becomes ci si muove.' } },
    ],
    shortAnswer: [
      { id: 'stb1-7-sa1', question: { bn: 'পেশাগত চ্যালেঞ্জ মোকাবিলায় কী অবহেলা করা উচিত নয়?', en: 'What should not be neglected when facing professional challenges?' }, sampleAnswerIt: 'Non bisogna trascurare il riposo e gli affetti.', keywords: ['riposo', 'affetti'] },
    ],
    practice: {
      retellPrompt: { bn: 'কাজ ও বিশ্রামের ভারসাম্য নিয়ে ৩ বাক্যে লিখুন।', en: 'Write 3 sentences about work-life balance using impersonal si.' },
      completeMissing: { promptIt: 'Quando si è ___, è meglio riposare.', hint: { bn: 'stanco বহুবচনে: stanchi', en: 'plural adjective stanchi' }, sampleIt: 'Quando si è stanchi, è meglio riposare.' },
      buildSimilar: { patternIt: 'Quando ci si muove all’aria aperta, si vive meglio.', prompt: { bn: 'Si vive bene quando... দিয়ে একটি বাক্য লিখুন।', en: 'Write a sentence with Si vive bene quando...' }, sampleIt: 'Si lavora meglio quando l’ambiente è sereno.' },
      altEndingPrompt: { bn: 'সপ্তাহান্তে ফোন বন্ধ রাখলে কী উপকার হয় তা লিখুন।', en: 'Write what happens when you switch off your phone at the weekend.' },
    },
  }),

  buildStory({
    id: 'st-b1-08', level: 'B1', titleIt: 'La nuova legge sul riciclo',
    title: { bn: 'রিসাইক্লিং বিষয়ক নতুন আইন', en: 'The new recycling law' },
    topic: { bn: 'পরিবেশ আইন ও কর্মবাচ্য (passivo)', en: 'Environmental policy & passive voice' },
    grammarIds: ['passivo'],
    vocabKeys: ['w:B1:la legge', 'w:B1:il parlamento', 'w:B1:pubblicare'],
    paragraphs: [
      { it: 'La settimana scorsa una nuova legge ambientale è stata approvata dal parlamento per ridurre l’uso della plastica monouso nelle mense e negli uffici pubblici.', tr: { bn: 'ক্যান্টিন ও সরকারি দপ্তরে একবার ব্যবহারযোগ্য প্লাস্টিকের ব্যবহার কমাতে গত সপ্তাহে সংসদ কর্তৃক একটি নতুন পরিবেশ আইন অনুমোদিত হয়েছে।', en: 'Last week a new environmental law was approved by parliament to reduce single-use plastic in canteens and public offices.' } },
      { it: 'I dati ufficiali sono stati pubblicati ieri dal ministero: grazie alla raccolta differenziata, milioni di tonnellate di carta e vetro vengono recuperati ogni anno.', tr: { bn: 'গতকাল মন্ত্রণালয় কর্তৃক সরকারি তথ্য প্রকাশ করা হয়েছে: পৃথক বর্জ্য সংগ্রহের কল্যাণে প্রতি বছর লক্ষ লক্ষ টন কাগজ ও কাচ পুনরুদ্ধার করা হয়।', en: 'Official data were published yesterday by the ministry: thanks to separate waste collection, millions of tonnes of paper and glass are recovered every year.' } },
      { it: 'Nei prossimi mesi saranno installate nuove fontanelle d’acqua potabile in tutte le piazze principali.', tr: { bn: 'আগামী মাসগুলোতে সব প্রধান চত্বরে সুপেয় পানির নতুন ফোয়ারা স্থাপন করা হবে।', en: 'In the coming months new drinking-water fountains will be installed in all main squares.' } },
    ],
    wordGlossary: [
      { word: 'legge', base: 'la legge', tr: { bn: 'আইন', en: 'law' }, pos: 'noun' },
      { word: 'parlamento', base: 'il parlamento', tr: { bn: 'সংসদ', en: 'parliament' }, pos: 'noun' },
      { word: 'pubblicare', base: 'pubblicare', tr: { bn: 'প্রকাশ করা', en: 'to publish' }, pos: 'verb' },
    ],
    grammarBreakdown: [
      { sentenceIt: 'Una nuova legge è stata approvata dal parlamento.', ruleTitle: { bn: 'Essere + participio passato + da', en: 'Passive voice with essere' }, explanation: { bn: 'স্ত্রীলিঙ্গ একবচন কর্তা (una nuova legge) অনুযায়ী è stata approvata এবং কর্তা বোঝাতে dal parlamento বসেছে।', en: 'Passive participle agrees feminine singular with una nuova legge.' }, grammarId: 'passivo' },
    ],
    mcq: [
      { id: 'stb1-8-q1', prompt: { bn: 'নতুন আইনটির লক্ষ্য কী কমানো?', en: 'What does the new law aim to reduce?' }, options: ['বিদ্যুৎ খরচ', 'একবার ব্যবহারযোগ্য প্লাস্টিক', 'কাগজের বই', 'ট্রেনের ভাড়া'], answer: 1, explanation: { bn: 'ridurre l’uso della plastica monouso।', en: 'Reduce single-use plastic.' } },
    ],
    trueFalse: [
      { id: 'stb1-8-tf1', statementIt: 'I dati ufficiali sono stati pubblicati dal ministero.', statement: { bn: 'সরকারি তথ্য মন্ত্রণালয় কর্তৃক প্রকাশিত হয়েছে।', en: 'Official data were published by the ministry.' }, answer: true, explanation: { bn: 'sono stati pubblicati ieri dal ministero।', en: 'Published by the ministry.' } },
    ],
    fillBlank: [
      { id: 'stb1-8-fb1', sentence: 'Nuove fontanelle ___ installate nelle piazze.', options: ['saranno', 'avranno', 'faranno', 'stanno'], answer: 0, explanation: { bn: 'ভবিষ্যৎ কর্মবাচ্য: saranno installate।', en: 'Future passive saranno installate.' } },
    ],
    shortAnswer: [
      { id: 'stb1-8-sa1', question: { bn: 'পৃথক বর্জ্য সংগ্রহের মাধ্যমে কী কী পুনরুদ্ধার করা হয়?', en: 'What materials are recovered through separate collection?' }, sampleAnswerIt: 'Vengono recuperati milioni di tonnellate di carta e vetro.', keywords: ['carta', 'vetro'] },
    ],
    practice: {
      retellPrompt: { bn: 'নতুন পরিবেশ আইনটি কর্মবাচ্য ব্যবহার করে ৩ বাক্যে লিখুন।', en: 'Summarise the new environmental law in 3 sentences using the passive voice.' },
      completeMissing: { promptIt: 'Il progetto è ___ presentato dagli studenti.', hint: { bn: 'stato', en: 'stato' }, sampleIt: 'Il progetto è stato presentato dagli studenti.' },
      buildSimilar: { patternIt: 'La legge è stata approvata dal parlamento.', prompt: { bn: 'è stato / è stata দিয়ে একটি কর্মবাচ্যের বাক্য লিখুন।', en: 'Write a passive sentence with è stato / è stata.' }, sampleIt: 'L’articolo è stato scritto da una giornalista esperta.' },
      altEndingPrompt: { bn: 'স্কুলগুলোতে এই আইন কীভাবে বাস্তবায়িত হবে তা লিখুন।', en: 'Write how schools will implement this initiative.' },
    },
  }),

  buildStory({
    id: 'st-b1-09', level: 'B1', titleIt: 'Allo sportello telematico',
    title: { bn: 'ডিজিটাল সেবা কাউন্টারে', en: 'At the digital service desk' },
    topic: { bn: 'দাপ্তরিক ফাইল ও পরোক্ষ উক্তি', en: 'Administrative files & indirect speech' },
    grammarIds: ['discorso-indiretto'],
    vocabKeys: ['w:B1:il codice identificativo', 'w:B1:la pratica'],
    paragraphs: [
      { it: 'Ieri mattina sono andato al patronato per controllare lo stato della mia pratica. L’impiegato mi ha chiesto se avessi portato il codice identificativo ricevuto via SMS.', tr: { bn: 'গতকাল সকালে আমার ফাইলের অবস্থা পরীক্ষা করতে আমি সহায়তা কেন্দ্রে গিয়েছিলাম। কর্মকর্তা আমাকে জিজ্ঞেস করলেন এসএমএসে পাওয়া শনাক্তকরণ কোডটি আমি এনেছি কি না।', en: 'Yesterday morning I went to the advisory centre to check the status of my application file. The clerk asked me whether I had brought the identification code received by SMS.' } },
      { it: 'Gli ho risposto che lo avevo salvato sul telefono. Dopo aver verificato nel sistema, mi ha spiegato che mancava solo una firma digitale.', tr: { bn: 'আমি তাঁকে উত্তর দিলাম যে সেটি ফোনে সেভ করে রেখেছি। সিস্টেমে যাচাই করার পর তিনি আমাকে ব্যাখ্যা করলেন যে কেবল একটি ডিজিটাল স্বাক্ষর বাকি ছিল।', en: 'I replied to him that I had saved it on my phone. After checking the system, he explained to me that only one digital signature was missing.' } },
      { it: 'Infine mi ha consigliato di scaricare la ricevuta dal portale e mi ha assicurato che la pratica sarebbe stata chiusa entro venerdì.', tr: { bn: 'সবশেষে তিনি আমাকে পোর্টাল থেকে রসিদ ডাউনলোড করার পরামর্শ দিলেন এবং আশ্বস্ত করলেন যে শুক্রবারের মধ্যে ফাইলটি সম্পন্ন হবে।', en: 'Finally he advised me to download the receipt from the portal and assured me that the file would be closed by Friday.' } },
    ],
    wordGlossary: [
      { word: 'codice identificativo', base: 'il codice identificativo', tr: { bn: 'শনাক্তকরণ কোড', en: 'identification code' }, pos: 'noun' },
      { word: 'pratica', base: 'la pratica', tr: { bn: 'দাপ্তরিক ফাইল / নথি প্রক্রিয়া', en: 'administrative file' }, pos: 'noun' },
      { word: 'patronato', base: 'il patronato', tr: { bn: 'নাগরিক সহায়তা কেন্দ্র', en: 'citizens’ assistance office' }, pos: 'noun' },
    ],
    grammarBreakdown: [
      { sentenceIt: 'Mi ha consigliato di scaricare la ricevuta.', ruleTitle: { bn: 'পরোক্ষ উপদেশ: di + infinito', en: 'Reported advice with di + infinitive' }, explanation: { bn: 'consigliare / dire / chiedere-র পরে পরামর্শ বা অনুরোধ রিপোর্ট করতে di + infinito বসে।', en: 'Reported requests and advice use di + infinitive.' }, grammarId: 'discorso-indiretto' },
    ],
    mcq: [
      { id: 'stb1-9-q1', prompt: { bn: 'সিস্টেমে কী বাকি ছিল?', en: 'What was missing in the system?' }, options: ['ছবি', 'একটি ডিজিটাল স্বাক্ষর', 'জন্মসনদ', 'ট্যাক্স স্ট্যাম্প'], answer: 1, explanation: { bn: 'mancava solo una firma digitale।', en: 'Only a digital signature was missing.' } },
    ],
    trueFalse: [
      { id: 'stb1-9-tf1', statementIt: 'Il narratore aveva dimenticato il codice a casa.', statement: { bn: 'বক্তা কোডটি বাসায় ভুলে রেখে এসেছিলেন।', en: 'The narrator had forgotten the code at home.' }, answer: false, explanation: { bn: 'lo avevo salvato sul telefono।', en: 'He had saved it on his phone.' } },
    ],
    fillBlank: [
      { id: 'stb1-9-fb1', sentence: 'L’impiegato mi ha chiesto ___ avessi il codice.', options: ['che', 'se', 'di', 'per'], answer: 1, explanation: { bn: 'হ্যাঁ/না পরোক্ষ প্রশ্নে se বসে।', en: 'Yes/no indirect questions use se.' } },
    ],
    shortAnswer: [
      { id: 'stb1-9-sa1', question: { bn: 'ফাইলটি কবে নাগাদ সম্পন্ন হওয়ার কথা?', en: 'By when would the file be closed?' }, sampleAnswerIt: 'La pratica sarebbe stata chiusa entro venerdì.', keywords: ['venerdì', 'chiusa'] },
    ],
    practice: {
      retellPrompt: { bn: 'সহায়তা কেন্দ্রে কথোপকথনটি পরোক্ষ উক্তিতে ৩ বাক্যে লিখুন।', en: 'Report the conversation at the assistance office in 3 sentences.' },
      completeMissing: { promptIt: 'La segretaria mi ha detto ___ aspettare cinque minuti.', hint: { bn: 'di', en: 'di' }, sampleIt: 'La segretaria mi ha detto di aspettare cinque minuti.' },
      buildSimilar: { patternIt: 'Mi ha chiesto se avessi il documento.', prompt: { bn: 'Mi ha chiesto se... দিয়ে একটি বাক্য লিখুন।', en: 'Write a sentence starting with Mi ha chiesto se...' }, sampleIt: 'Mi ha chiesto se conoscessi l’indirizzo dell’ufficio.' },
      altEndingPrompt: { bn: 'শুক্রবার পোর্টালে লগইন করে বক্তা কী দেখলেন লিখুন।', en: 'Write what the narrator saw when logging into the portal on Friday.' },
    },
  }),

  buildStory({
    id: 'st-b1-10', level: 'B1', titleIt: 'Piccoli gesti contro gli sprechi',
    title: { bn: 'অপচয় রোধে ছোট পদক্ষেপ', en: 'Small steps against waste' },
    topic: { bn: 'শক্তি সাশ্রয় ও অব্যয় + ইনফিনিটিভ', en: 'Energy saving & preposition + infinitive' },
    grammarIds: ['infinito'],
    vocabKeys: ['w:B1:sprecare', "w:B1:l'energia", "w:B1:l'elettrodomestico"],
    paragraphs: [
      { it: 'Negli ultimi mesi la nostra famiglia ha deciso di ridurre i consumi domestici. Invece di sprecare energia lasciando le luci accese, abbiamo installato lampadine a basso consumo in ogni stanza.', tr: { bn: 'সাম্প্রতিক মাসগুলোতে আমাদের পরিবার গৃহস্থালি খরচ কমানোর সিদ্ধান্ত নিয়েছে। বাতি জ্বালিয়ে রেখে শক্তি অপচয় না করে আমরা প্রতিটি ঘরে কম খরচের বাল্ব লাগিয়েছি।', en: 'In recent months our family has decided to reduce household consumption. Instead of wasting energy by leaving lights on, we installed low-energy bulbs in every room.' } },
      { it: 'Prima di uscire di casa la mattina, controlliamo sempre di aver spento ogni elettrodomestico non necessario.', tr: { bn: 'সকালে বাসা থেকে বের হওয়ার আগে আমরা সবসময় পরীক্ষা করি অপ্রয়োজনীয় প্রতিটি বৈদ্যুতিক যন্ত্র বন্ধ করেছি কি না।', en: 'Before leaving home in the morning, we always check that we have switched off every unnecessary appliance.' } },
      { it: 'Oltre a proteggere l’ambiente, questo cambiamento ci ha permesso di abbassare la bolletta elettrica del venti per cento senza rinunciare al comfort.', tr: { bn: 'পরিবেশ রক্ষা করার পাশাপাশি এই পরিবর্তন আমাদের আরাম ত্যাগ না করেই বিদ্যুৎ বিল বিশ শতাংশ কমাতে সাহায্য করেছে।', en: 'Besides protecting the environment, this change allowed us to lower our electricity bill by twenty per cent without giving up comfort.' } },
    ],
    wordGlossary: [
      { word: 'sprecare', base: 'sprecare', tr: { bn: 'অপচয় করা', en: 'to waste' }, pos: 'verb' },
      { word: 'energia', base: "l'energia", tr: { bn: 'শক্তি / বিদ্যুৎ', en: 'energy' }, pos: 'noun' },
      { word: 'elettrodomestico', base: "l'elettrodomestico", tr: { bn: 'গৃহস্থালি বৈদ্যুতিক যন্ত্র', en: 'household appliance' }, pos: 'noun' },
    ],
    grammarBreakdown: [
      { sentenceIt: 'Invece di sprecare energia, abbiamo installato lampadine a basso consumo.', ruleTitle: { bn: 'Invece di / Prima di / Senza + infinito', en: 'Preposition + infinitive clauses' }, explanation: { bn: 'একই কর্তা থাকলে invece di, prima di, oltre a, senza-র পরে সরাসরি ইনফিনিটিভ বসে।', en: 'Same-subject subordinate clauses use preposition + infinitive.' }, grammarId: 'infinito' },
    ],
    mcq: [
      { id: 'stb1-10-q1', prompt: { bn: 'বিদ্যুৎ বিল কত শতাংশ কমেছে?', en: 'By what percentage did the electricity bill drop?' }, options: ['৫ শতাংশ', '১০ শতাংশ', '২০ শতাংশ', '৫০ শতাংশ'], answer: 2, explanation: { bn: 'del venti per cento = ২০ শতাংশ।', en: 'Twenty per cent.' } },
    ],
    trueFalse: [
      { id: 'stb1-10-tf1', statementIt: 'La famiglia ha dovuto rinunciare a ogni comfort.', statement: { bn: 'পরিবারটিকে সব আরাম ত্যাগ করতে হয়েছে।', en: 'The family had to give up all comfort.' }, answer: false, explanation: { bn: 'senza rinunciare al comfort।', en: 'Without giving up comfort.' } },
    ],
    fillBlank: [
      { id: 'stb1-10-fb1', sentence: 'Prima di ___ di casa, spegniamo le luci.', options: ['usciamo', 'uscire', 'uscito', 'uscendo'], answer: 1, explanation: { bn: 'Prima di + infinito (uscire)।', en: 'Prima di takes the infinitive.' } },
    ],
    shortAnswer: [
      { id: 'stb1-10-sa1', question: { bn: 'প্রতিটি ঘরে তারা কী লাগিয়েছে?', en: 'What did they install in every room?' }, sampleAnswerIt: 'Hanno installato lampadine a basso consumo.', keywords: ['lampadine', 'basso', 'consumo'] },
    ],
    practice: {
      retellPrompt: { bn: 'বিদ্যুৎ সাশ্রয়ের উপায়গুলো ৩ বাক্যে লিখুন।', en: 'Describe 3 ways the family saves energy.' },
      completeMissing: { promptIt: 'Invece di ___ l’auto, prendo la bici.', hint: { bn: 'usare', en: 'infinitive usare' }, sampleIt: 'Invece di usare l’auto, prendo la bici.' },
      buildSimilar: { patternIt: 'Oltre a proteggere l’ambiente, risparmiamo denaro.', prompt: { bn: 'Oltre a... বা Senza... দিয়ে একটি বাক্য লিখুন।', en: 'Write a sentence with Oltre a... or Senza...' }, sampleIt: 'Oltre a studiare l’italiano, leggo i giornali locali.' },
      altEndingPrompt: { bn: 'প্রতিবেশীরাও এই উদ্যোগ দেখে কী করল তা লিখুন।', en: 'Write how the neighbours followed their example.' },
    },
  }),

  buildStory({
    id: 'st-b1-11', level: 'B1', titleIt: 'Mediazione in condominio',
    title: { bn: 'অ্যাপার্টমেন্ট ভবনে সমঝোতা', en: 'Mediation in the apartment building' },
    topic: { bn: 'প্রতিবেশীদের সম্পর্ক ও জেরুন্ড (gerundio)', en: 'Neighbourly relations & gerunds' },
    grammarIds: ['gerundio-b1'],
    vocabKeys: ['w:B1:collaborare', 'w:B1:risolvere', 'w:B1:il conflitto'],
    paragraphs: [
      { it: 'Per mesi nel nostro palazzo c’era stato un piccolo conflitto riguardo all’uso del cortile comune: alcuni volevano parcheggiare i motorini, altri desideravano uno spazio sicuro per i bambini.', tr: { bn: 'মাসের পর মাস আমাদের ভবনে যৌথ উঠান ব্যবহার নিয়ে একটি ছোট বিরোধ চলছিল: কেউ সেখানে স্কুটার পার্ক করতে চাইছিলেন, আবার কেউ শিশুদের জন্য নিরাপদ জায়গা চাইছিলেন।', en: 'For months in our building there had been a small conflict over the use of the shared courtyard: some wanted to park scooters, others wanted a safe space for children.' } },
      { it: 'Pur avendo punti di vista molto diversi, durante l’ultima assemblea abbiamo deciso di ascoltarci con calma, evitando toni polemici.', tr: { bn: 'খুব ভিন্ন দৃষ্টিভঙ্গি থাকা সত্ত্বেও গত সভায় আমরা তর্কের সুর এড়িয়ে শান্তভাবে একে অপরের কথা শোনার সিদ্ধান্ত নিয়েছি।', en: 'Despite having very different viewpoints, during the last meeting we decided to listen to one another calmly, avoiding argumentative tones.' } },
      { it: 'Collaborando tutti insieme, siamo riusciti a risolvere il problema: abbiamo diviso il cortile con delle fioriere di legno.', tr: { bn: 'সবাই মিলে সহযোগিতা করে আমরা সমস্যাটি সমাধান করতে পেরেছি: কাঠের টব দিয়ে উঠানটিকে ভাগ করে নিয়েছি।', en: 'By collaborating all together, we managed to solve the problem: we divided the courtyard with wooden planters.' } },
    ],
    wordGlossary: [
      { word: 'collaborare', base: 'collaborare', tr: { bn: 'সহযোগিতা করা', en: 'to collaborate' }, pos: 'verb' },
      { word: 'risolvere', base: 'risolvere', tr: { bn: 'সমাধান করা', en: 'to resolve / solve' }, pos: 'verb' },
      { word: 'conflitto', base: 'il conflitto', tr: { bn: 'বিরোধ / দ্বন্দ্ব', en: 'conflict' }, pos: 'noun' },
    ],
    grammarBreakdown: [
      { sentenceIt: 'Pur avendo punti di vista diversi, abbiamo deciso di ascoltarci.', ruleTitle: { bn: 'Pur + gerundio (সত্ত্বেও)', en: 'Concessive pur + gerund' }, explanation: { bn: 'pur + বর্তমান জেরুন্ড (avendo) দ্বারা "থাকা সত্ত্বেও" বোঝানো হয়েছে।', en: 'pur + gerund expresses "despite having".' }, grammarId: 'gerundio-b1' },
    ],
    mcq: [
      { id: 'stb1-11-q1', prompt: { bn: 'বাসিন্দারা কীভাবে উঠানটি ভাগ করেছেন?', en: 'How did the residents divide the courtyard?' }, options: ['দেয়াল তুলে', 'কাঠের ফুলের টব দিয়ে', 'লোহার গেট দিয়ে', 'রঙের দাগ দিয়ে'], answer: 1, explanation: { bn: 'con delle fioriere di legno।', en: 'With wooden planters.' } },
    ],
    trueFalse: [
      { id: 'stb1-11-tf1', statementIt: 'Durante l’assemblea tutti hanno litigato con toni polemici.', statement: { bn: 'সভায় সবাই তর্কের সুরে ঝগড়া করেছে।', en: 'During the meeting everyone argued polemically.' }, answer: false, explanation: { bn: 'evitando toni polemici।', en: 'They avoided polemical tones.' } },
    ],
    fillBlank: [
      { id: 'stb1-11-fb1', sentence: '___ tutti insieme, abbiamo risolto il problema.', options: ['Collaborare', 'Collaborando', 'Collaborato', 'Collaborano'], answer: 1, explanation: { bn: 'উপায় বোঝাতে জেরুন্ড: Collaborando।', en: 'Gerund of means: Collaborando.' } },
    ],
    shortAnswer: [
      { id: 'stb1-11-sa1', question: { bn: 'বিরোধটি কী নিয়ে ছিল?', en: 'What was the conflict about?' }, sampleAnswerIt: 'Il conflitto riguardava l’uso del cortile comune.', keywords: ['cortile', 'comune'] },
    ],
    practice: {
      retellPrompt: { bn: 'ভবনের উঠান সমস্যার সমাধানটি ৩ বাক্যে লিখুন।', en: 'Summarise how the courtyard dispute was resolved in 3 sentences.' },
      completeMissing: { promptIt: 'Pur ___ stanco, ha partecipato alla riunione.', hint: { bn: 'essere জেরুন্ড: essendo', en: 'gerund essendo' }, sampleIt: 'Pur essendo stanco, ha partecipato alla riunione.' },
      buildSimilar: { patternIt: 'Parlando con calma, si trova sempre un accordo.', prompt: { bn: 'জেরুন্ড (-ando/-endo) দিয়ে একটি বাক্য লিখুন।', en: 'Write a sentence starting with a gerund.' }, sampleIt: 'Ascoltando le ragioni degli altri, abbiamo trovato una soluzione.' },
      altEndingPrompt: { bn: 'নতুন উঠানে শিশুরা কীভাবে খেলছে তা লিখুন।', en: 'Describe how the courtyard looks now.' },
    },
  }),

  buildStory({
    id: 'st-b1-12', level: 'B1', titleIt: 'Corsi serali per adulti',
    title: { bn: 'প্রাপ্তবয়স্কদের জন্য সান্ধ্যকালীন কোর্স', en: 'Evening courses for adults' },
    topic: { bn: 'পেশাগত প্রশিক্ষণ ও মতামত প্রকাশ', en: 'Continuing education & expressing opinions' },
    grammarIds: ['opinione', 'congiuntivo'],
    vocabKeys: ['w:B1:il parere', 'w:B1:la formazione', 'w:B1:il vantaggio'],
    paragraphs: [
      { it: 'Quest’anno il comune ha organizzato nuovi corsi serali di informatica, contabilità e lingua italiana per chi lavora durante il giorno.', tr: { bn: 'এ বছর পৌরসভা দিনে কর্মরত মানুষদের জন্য কম্পিউটার, হিসাবরক্ষণ ও ইতালিয়ান ভাষার নতুন সান্ধ্যকালীন কোর্সের আয়োজন করেছে।', en: 'This year the municipality organised new evening courses in computing, accounting, and Italian for people who work during the day.' } },
      { it: 'A mio parere, la formazione continua offre un enorme vantaggio a chi desidera migliorare la propria posizione lavorativa.', tr: { bn: 'আমার মতে, নিয়মিত প্রশিক্ষণ তাদের জন্য বিশাল সুবিধা বয়ে আনে যারা নিজেদের কর্মসংস্থানের অবস্থান উন্নত করতে চায়।', en: 'In my view, continuous training offers a huge advantage to those who wish to improve their job position.' } },
      { it: 'Molti iscritti ritengono che le lezioni serali siano anche un’ottima occasione per conoscere persone con gli stessi interessi.', tr: { bn: 'অনেক নিবন্ধিত শিক্ষার্থী মনে করেন যে সান্ধ্যকালীন ক্লাসগুলো একই আগ্রহের মানুষদের সাথে পরিচিত হওয়ারও দারুণ সুযোগ।', en: 'Many enrolled students believe that evening classes are also a great opportunity to meet people with the same interests.' } },
    ],
    wordGlossary: [
      { word: 'parere', base: 'il parere', tr: { bn: 'মতামত / অভিমত', en: 'opinion / view' }, pos: 'noun' },
      { word: 'formazione', base: 'la formazione', tr: { bn: 'প্রশিক্ষণ', en: 'training / education' }, pos: 'noun' },
      { word: 'vantaggio', base: 'il vantaggio', tr: { bn: 'সুবিধা / সুফল', en: 'advantage' }, pos: 'noun' },
    ],
    grammarBreakdown: [
      { sentenceIt: 'A mio parere la formazione offre un vantaggio, e molti ritengono che le lezioni siano utili.', ruleTitle: { bn: 'A mio parere (+ indicativo) বনাম Ritengo che (+ congiuntivo)', en: 'Indicative vs subjunctive with opinions' }, explanation: { bn: 'A mio parere-র পরে সাধারণ indicativo (offre) বসে, কিন্তু ritengono che-র পরে congiuntivo (siano) বসে।', en: 'A mio parere takes indicative offre; ritengono che takes subjunctive siano.' }, grammarId: 'opinione' },
    ],
    mcq: [
      { id: 'stb1-12-q1', prompt: { bn: 'সান্ধ্যকালীন কোর্সগুলোতে কী কী শেখানো হচ্ছে?', en: 'Which subjects are taught in the evening courses?' }, options: ['চিত্রকলা ও সংগীত', 'কম্পিউটার, হিসাবরক্ষণ ও ইতালিয়ান', 'রান্না ও বাগান করা', 'স্থাপত্য'], answer: 1, explanation: { bn: 'informatica, contabilità e lingua italiana।', en: 'Computing, accounting, and Italian.' } },
    ],
    trueFalse: [
      { id: 'stb1-12-tf1', statementIt: 'I corsi sono pensati per chi è libero tutta la mattina.', statement: { bn: 'কোর্সগুলো তাদের জন্য যারা সারা সকাল ফ্রি থাকে।', en: 'The courses are designed for people who are free all morning.' }, answer: false, explanation: { bn: 'per chi lavora durante il giorno।', en: 'For those who work during the day.' } },
    ],
    fillBlank: [
      { id: 'stb1-12-fb1', sentence: 'A mio ___, questo corso è davvero utile.', options: ['parere', 'credo', 'penso', 'sembra'], answer: 0, explanation: { bn: 'A mio parere = আমার মতে।', en: 'A mio parere = in my opinion.' } },
    ],
    shortAnswer: [
      { id: 'stb1-12-sa1', question: { bn: 'নিয়মিত প্রশিক্ষণ কার জন্য বড় সুবিধা দেয়?', en: 'Who benefits from continuous training?' }, sampleAnswerIt: 'Offre un grande vantaggio a chi desidera migliorare la propria posizione lavorativa.', keywords: ['migliorare', 'posizione', 'lavorativa'] },
    ],
    practice: {
      retellPrompt: { bn: 'সান্ধ্যকালীন প্রশিক্ষণ কোর্সের গুরুত্ব ৩ বাক্যে লিখুন।', en: 'Write 3 sentences about the value of evening training courses.' },
      completeMissing: { promptIt: 'Ritengo che la formazione ___ fondamentale.', hint: { bn: 'essere সংযোজক রূপ: sia', en: 'subjunctive sia' }, sampleIt: 'Ritengo che la formazione sia fondamentale.' },
      buildSimilar: { patternIt: 'A mio parere, questo corso offre molti vantaggi.', prompt: { bn: 'A mio parere... দিয়ে নিজের একটি মতামত লিখুন।', en: 'Write an opinion starting with A mio parere...' }, sampleIt: 'A mio parere, conoscere due lingue apre molte porte.' },
      altEndingPrompt: { bn: 'কোর্স শেষে শিক্ষার্থীরা কী সনদ পাবে তা লিখুন।', en: 'Write what certificate students will receive at the end.' },
    },
  }),

  buildStory({
    id: 'st-b1-13', level: 'B1', titleIt: 'Vivere in una città universitaria',
    title: { bn: 'বিশ্ববিদ্যালয় শহরে বসবাস', en: 'Living in a university town' },
    topic: { bn: 'জীবনযাত্রার ব্যয় ও যৌক্তিক সংযোজক অব্যয়', en: 'Cost of living & logical connectors' },
    grammarIds: ['connettivi-b1'],
    vocabKeys: ['w:B1:tuttavia', 'w:B1:il costo della vita', 'w:B1:sereno'],
    paragraphs: [
      { it: 'Padova e Bologna sono città universitarie famose in tutta Europa. Da un lato attirano migliaia di ricercatori e studenti; dall’altro lato, negli ultimi anni il costo della vita è cresciuto sensibilmente.', tr: { bn: 'পাদোভা ও বোলোনিয়া সারা ইউরোপে বিখ্যাত বিশ্ববিদ্যালয় শহর। একদিকে এগুলো হাজার হাজার গবেষক ও শিক্ষার্থীকে আকর্ষণ করে; অন্যদিকে সাম্প্রতিক বছরগুলোতে জীবনযাত্রার ব্যয় উল্লেখযোগ্যভাবে বেড়েছে।', en: 'Padua and Bologna are university cities famous across Europe. On the one hand they attract thousands of researchers and students; on the other hand, in recent years the cost of living has risen noticeably.' } },
      { it: 'Trovare una stanza singola vicino alle facoltà non è semplice; tuttavia, chi si sposta in bicicletta può abitare nei quartieri periferici e raggiungere il centro in quindici minuti.', tr: { bn: 'অনুষদগুলোর কাছে সিঙ্গেল রুম পাওয়া সহজ নয়; তবুও যারা সাইকেলে চলাচল করে তারা শহরতলির পাড়ায় থেকে পনেরো মিনিটে কেন্দ্রে পৌঁছাতে পারে।', en: 'Finding a single room near the faculties is not easy; however, those who get around by bicycle can live in outer neighbourhoods and reach the centre in fifteen minutes.' } },
      { it: 'Inoltre, le biblioteche comunali e le mense offrono un ambiente sereno e accessibile a tutti.', tr: { bn: 'তাছাড়া পৌর গ্রন্থাগার ও ক্যান্টিনগুলো সবার জন্য শান্ত ও সাশ্রয়ী পরিবেশ প্রদান করে।', en: 'Furthermore, municipal libraries and canteens offer a calm environment accessible to all.' } },
    ],
    wordGlossary: [
      { word: 'tuttavia', base: 'tuttavia', tr: { bn: 'তবুও / তা সত্ত্বেও', en: 'however / nevertheless' }, pos: 'conj' },
      { word: 'costo della vita', base: 'il costo della vita', tr: { bn: 'জীবনযাত্রার ব্যয়', en: 'cost of living' }, pos: 'noun' },
      { word: 'sereno', base: 'sereno', tr: { bn: 'শান্ত / নির্মল', en: 'calm / serene' }, pos: 'adj' },
    ],
    grammarBreakdown: [
      { sentenceIt: 'Trovare una stanza non è semplice; tuttavia, chi usa la bici può abitare fuori.', ruleTitle: { bn: 'Tuttavia / Inoltre / Da un lato… dall’altro', en: 'Discourse connectors' }, explanation: { bn: 'বিপরীত যুক্তি যোগ করতে tuttavia এবং অতিরিক্ত তথ্য যোগ করতে inoltre ব্যবহৃত হয়েছে।', en: 'tuttavia introduces contrast and inoltre adds a supporting point.' }, grammarId: 'connettivi-b1' },
    ],
    mcq: [
      { id: 'stb1-13-q1', prompt: { bn: 'শহরতলি থেকে সাইকেলে কেন্দ্রে যেতে কত সময় লাগে?', en: 'How long does it take to cycle from outer neighbourhoods to the centre?' }, options: ['৫ মিনিট', '১৫ মিনিট', '১ ঘণ্টা', '৪৫ মিনিট'], answer: 1, explanation: { bn: 'in quindici minuti।', en: 'Fifteen minutes.' } },
    ],
    trueFalse: [
      { id: 'stb1-13-tf1', statementIt: 'Il costo della vita è diminuito negli ultimi anni.', statement: { bn: 'সাম্প্রতিক বছরগুলোতে জীবনযাত্রার ব্যয় কমেছে।', en: 'The cost of living has decreased in recent years.' }, answer: false, explanation: { bn: 'è cresciuto sensibilmente।', en: 'It has risen noticeably.' } },
    ],
    fillBlank: [
      { id: 'stb1-13-fb1', sentence: 'L’affitto è alto; ___, i servizi pubblici sono ottimi.', options: ['tuttavia', 'siccome', 'affinché', 'benché'], answer: 0, explanation: { bn: 'indicativo-সহ বিপরীত বাক্যে tuttavia।', en: 'tuttavia connects contrasting indicative clauses.' } },
    ],
    shortAnswer: [
      { id: 'stb1-13-sa1', question: { bn: 'গ্রন্থাগার ও ক্যান্টিনগুলো কেমন পরিবেশ দেয়?', en: 'What kind of environment do the libraries and canteens offer?' }, sampleAnswerIt: 'Offrono un ambiente sereno e accessibile a tutti.', keywords: ['ambiente', 'sereno', 'accessibile'] },
    ],
    practice: {
      retellPrompt: { bn: 'বিশ্ববিদ্যালয় শহরের সুবিধা ও চ্যালেঞ্জ ৩ বাক্যে লিখুন।', en: 'Describe the pros and cons of living in a university city in 3 sentences.' },
      completeMissing: { promptIt: 'Da un lato il lavoro è impegnativo; ___ lato dà grandi soddisfazioni.', hint: { bn: 'dall’altro', en: 'dall’altro' }, sampleIt: 'Da un lato il lavoro è impegnativo; dall’altro lato dà grandi soddisfazioni.' },
      buildSimilar: { patternIt: 'Il prezzo è alto; tuttavia la qualità è ottima.', prompt: { bn: 'tuttavia বা inoltre দিয়ে একটি বাক্য লিখুন।', en: 'Write a sentence using tuttavia or inoltre.' }, sampleIt: 'Il treno era pieno; tuttavia siamo arrivati puntuali.' },
      altEndingPrompt: { bn: 'নতুন শিক্ষার্থীদের জন্য আবাসন পরামর্শ লিখুন।', en: 'Write housing advice for incoming students.' },
    },
  }),

  buildStory({
    id: 'st-b1-14', level: 'B1', titleIt: 'Mattina all’ufficio immigrazione',
    title: { bn: 'অভিবাসন অফিসে এক সকাল', en: 'A morning at the immigration office' },
    topic: { bn: 'দাপ্তরিক যোগ্যতা ও congiuntivo imperfetto', en: 'Administrative requirements & imperfect subjunctive' },
    grammarIds: ['congiuntivo-imperfetto'],
    vocabKeys: ["w:B1:l'ufficio immigrazione", 'w:B1:il requisito'],
    paragraphs: [
      { it: 'Giovedì scorso ho accompagnato mio cugino Arif all’ufficio immigrazione per il rinnovo del suo permesso. Credevamo che lo sportello aprisse alle nove, invece era già aperto dalle otto.', tr: { bn: 'গত বৃহস্পতিবার আমি আমার চাচাতো ভাই আরিফকে তার পারমিট নবায়নের জন্য অভিবাসন অফিসে নিয়ে গিয়েছিলাম। আমরা ভেবেছিলাম কাউন্টারটি নয়টায় খোলে, অথচ সেটি আটটা থেকেই খোলা ছিল।', en: 'Last Thursday I accompanied my cousin Arif to the immigration office to renew his permit. We thought the counter opened at nine, whereas it had already been open since eight.' } },
      { it: 'Arif temeva che mancasse qualche requisito reddituale nella sua domanda, ma il funzionario ha controllato tutte le buste paga con molta cortesia.', tr: { bn: 'আরিফ আশঙ্কা করছিল তার আবেদনে হয়ত আয়ের কোনো যোগ্যতা ঘাটতি আছে, কিন্তু কর্মকর্তা অত্যন্ত ভদ্রতার সাথে সব বেতনের রসিদ পরীক্ষা করলেন।', en: 'Arif feared some income requirement might be missing in his application, but the official checked all his payslips very courteously.' } },
      { it: 'Siamo usciti sollevati: bastava che Arif tornasse dopo tre settimane per il ritiro della tessera elettronica.', tr: { bn: 'আমরা স্বস্তি নিয়ে বের হলাম: ইলেকট্রনিক কার্ডটি সংগ্রহের জন্য আরিফের তিন সপ্তাহ পরে ফিরে আসাই যথেষ্ট ছিল।', en: 'We walked out relieved: Arif only needed to come back three weeks later to collect the electronic card.' } },
    ],
    wordGlossary: [
      { word: 'ufficio immigrazione', base: "l'ufficio immigrazione", tr: { bn: 'অভিবাসন দপ্তর', en: 'immigration office' }, pos: 'noun' },
      { word: 'requisito', base: 'il requisito', tr: { bn: 'প্রয়োজনীয় যোগ্যতা / শর্ত', en: 'requirement' }, pos: 'noun' },
      { word: 'sollevato', base: 'sollevato', tr: { bn: 'স্বস্তিপ্রাপ্ত / ভারমুক্ত', en: 'relieved' }, pos: 'adj' },
    ],
    grammarBreakdown: [
      { sentenceIt: 'Credevamo che lo sportello aprisse alle nove.', ruleTitle: { bn: 'Credevamo che + congiuntivo imperfetto', en: 'Imperfect subjunctive after past belief' }, explanation: { bn: 'অতীতের ক্রিয়া Credevamo এবং temeva-র পরে সমসাময়িক কাজে aprisse ও mancasse বসেছে।', en: 'Past main verbs Credevamo and temeva trigger aprisse and mancasse.' }, grammarId: 'congiuntivo-imperfetto' },
    ],
    mcq: [
      { id: 'stb1-14-q1', prompt: { bn: 'কাউন্টারটি আসলে কয়টা থেকে খোলা ছিল?', en: 'What time had the counter actually been open from?' }, options: ['সকাল ৭টা', 'সকাল ৮টা', 'সকাল ৯টা', 'সকাল ১০টা'], answer: 1, explanation: { bn: 'era già aperto dalle otto।', en: 'Since eight o’clock.' } },
    ],
    trueFalse: [
      { id: 'stb1-14-tf1', statementIt: 'Mancavano le buste paga nella domanda di Arif.', statement: { bn: 'আরিফের আবেদনে বেতনের রসিদগুলো ছিল না।', en: 'Payslips were missing from Arif’s application.' }, answer: false, explanation: { bn: 'সব বেতনের রসিদ ঠিকঠাক ছিল।', en: 'All payslips were present and checked.' } },
    ],
    fillBlank: [
      { id: 'stb1-14-fb1', sentence: 'Arif temeva che ___ qualche documento.', options: ['manca', 'mancasse', 'mancherà', 'mancava'], answer: 1, explanation: { bn: 'temeva che + mancasse।', en: 'temeva che takes mancasse.' } },
    ],
    shortAnswer: [
      { id: 'stb1-14-sa1', question: { bn: 'ইলেকট্রনিক কার্ডটি নিতে আরিফকে কতদিন পর ফিরতে হতো?', en: 'How much later did Arif need to return for the card?' }, sampleAnswerIt: 'Bastava che tornasse dopo tre settimane.', keywords: ['tre', 'settimane'] },
    ],
    practice: {
      retellPrompt: { bn: 'অভিবাসন অফিসের অভিজ্ঞতাটি ৩ বাক্যে লিখুন।', en: 'Retell the visit to the immigration office in 3 sentences.' },
      completeMissing: { promptIt: 'Pensavo che l’ufficio ___ chiuso il giovedì.', hint: { bn: 'essere → fosse', en: 'imperfect subjunctive fosse' }, sampleIt: 'Pensavo che l’ufficio fosse chiuso il giovedì.' },
      buildSimilar: { patternIt: 'Credevamo che lo sportello aprisse alle nove.', prompt: { bn: 'Pensavo che... দিয়ে একটি অতীত ধারণার বাক্য লিখুন।', en: 'Write a sentence starting with Pensavo che...' }, sampleIt: 'Pensavo che servissero due marche da bollo.' },
      altEndingPrompt: { bn: 'তিন সপ্তাহ পর কার্ড হাতে পেয়ে আরিফ কী করল লিখুন।', en: 'Write what Arif did three weeks later when collecting his card.' },
    },
  }),
];
