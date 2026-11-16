import type { StoryItem } from '../academyTypes';
import { buildStory } from '../builders';

export const B2_STORIES_2: StoryItem[] = [
  buildStory({
    id: 'st-b2-19', level: 'B2', titleIt: 'La cartella clinica sul tavolo',
    title: { bn: 'টেবিলে চিকিৎসা নথি ও মুক্ত পরোক্ষ উক্তি', en: 'The medical chart on the desk' },
    topic: { bn: 'সাহিত্যিক আখ্যান ও মুক্ত পরোক্ষ উক্তি', en: 'Literary prose & free indirect speech' },
    grammarIds: ['discorso-indiretto-libero'],
    vocabKeys: ['w:B2:la cartella clinica', 'w:B2:la voce narrante'],
    paragraphs: [
      { it: 'La dottoressa Conti chiuse lentamente la cartella clinica e guardò fuori dalla finestra del reparto di cardiologia. I lampioni del cortile si stavano accendendo sotto una pioggia sottile. Come avrebbe spiegato alla famiglia che servivano ulteriori accertamenti diagnostici?', tr: { bn: 'ডাক্তার কন্তি ধীরে ধীরে চিকিৎসা নথিটি বন্ধ করলেন এবং কার্ডিওলজি বিভাগের জানালার বাইরে তাকালেন। হালকা বৃষ্টির নিচে উঠানের ল্যাম্পপোস্টগুলো জ্বলে উঠছিল। কীভাবে তিনি পরিবারকে বোঝাবেন যে আরও রোগনির্ণয় পরীক্ষা প্রয়োজন?', en: 'Dr Conti slowly closed the medical chart and looked out the window of the cardiology ward. Courtyard streetlamps were lighting up under a fine rain. How would she explain to the family that further diagnostic tests were needed?' } },
      { it: 'Forse sarebbe stato meglio attendere l’esito dell’ecocardiogramma l’indomani mattina; oppure parlarne subito con delicatezza, evitando ogni allarmismo? La voce narrante di un medico oscilla spesso tra rigore scientifico ed empatia umana.', tr: { bn: 'হয়তো পরদিন সকালে ইকোকার্ডিওগ্রামের ফলাফলের জন্য অপেক্ষা করাই ভালো হতো; নাকি কোনো আতঙ্ক না ছড়িয়ে এখনই কোমলভাবে কথা বলা উচিত? একজন চিকিৎসকের অন্তর্গত কণ্ঠস্বর প্রায়ই বৈজ্ঞানিক কঠোরতা ও মানবিক সহমর্মিতার মাঝে দোলাচল করে।', en: 'Perhaps it would have been better to wait for the echocardiogram result the next morning; or to speak about it gently right away, avoiding any alarmism? A doctor’s inner voice often oscillates between scientific rigour and human empathy.' } },
      { it: 'Raccolse gli appunti, fece un respiro profondo e aprì la porta dello studio con passo sicuro.', tr: { bn: 'তিনি নোটগুলো গুছিয়ে নিলেন, একটি গভীর শ্বাস নিলেন এবং দৃঢ় পদক্ষেপে কক্ষের দরজা খুললেন।', en: 'She gathered her notes, took a deep breath, and opened the office door with a steady step.' } },
    ],
    wordGlossary: [
      { word: 'cartella clinica', base: 'la cartella clinica', tr: { bn: 'চিকিৎসা নথি', en: 'medical chart' }, pos: 'noun' },
      { word: 'voce narrante', base: 'la voce narrante', tr: { bn: 'আখ্যানের কথক/অন্তর্গত স্বর', en: 'narrative voice' }, pos: 'noun' },
    ],
    grammarBreakdown: [
      { sentenceIt: 'Come avrebbe spiegato alla famiglia che servivano ulteriori accertamenti?', ruleTitle: { bn: 'মুক্ত পরোক্ষ উক্তি (Discorso indiretto libero)', en: 'Free indirect speech' }, explanation: { bn: '«Si chiese» বা উদ্ধৃতি চিহ্ন ছাড়াই তৃতীয় পুরুষে condizionale passato ব্যবহার করে চরিত্রের অন্তর্গত ভাবনা সরাসরি ফুটিয়ে তোলা হয়েছে।', en: 'Character’s thoughts flow seamlessly into third-person narrative via past conditional and imperfect.' }, grammarId: 'discorso-indiretto-libero' },
    ],
    mcq: [
      { id: 'stb2-19-q1', prompt: { bn: 'ডাক্তার কন্তি কোন বিভাগের চিকিৎসক?', en: 'Which hospital ward does Dr Conti work in?' }, options: ['শিশু বিভাগ', 'হৃদ্‌রোগ (কার্ডিওলজি) বিভাগ', 'অর্থোপেডিক্স', 'চক্ষু বিভাগ'], answer: 1, explanation: { bn: 'del reparto di cardiologia।', en: 'Cardiology ward.' } },
    ],
    trueFalse: [
      { id: 'stb2-19-tf1', statementIt: 'Il brano usa il discorso indiretto libero senza virgolette.', statement: { bn: 'পাঠ্যাংশটি উদ্ধৃতি চিহ্ন ছাড়াই মুক্ত পরোক্ষ উক্তি ব্যবহার করেছে।', en: 'The passage uses free indirect speech without quotation marks.' }, answer: true, explanation: { bn: 'চরিত্রের প্রশ্নগুলো সরাসরি আখ্যানে মিশে আছে।', en: 'True.' } },
    ],
    fillBlank: [
      { id: 'stb2-19-fb1', sentence: 'Fissò l’orologio: cosa ___ fatto se l’esame avesse dato esito incerto?', options: ['avrà', 'avrebbe', 'ha', 'abbia'], answer: 1, explanation: { bn: 'অতীতের আখ্যানে মুক্ত পরোক্ষ উক্তিতে avrebbe বসে।', en: 'Free indirect speech in past narrative uses avrebbe.' } },
    ],
    shortAnswer: [
      { id: 'stb2-19-sa1', question: { bn: 'চিকিৎসকের অন্তর্গত স্বর কোন দুটি বিষয়ের মধ্যে দোলাচল করে?', en: 'Between which two poles does the doctor’s inner voice oscillate?' }, sampleAnswerIt: 'Tra rigore scientifico ed empatia umana.', keywords: ['rigore', 'empatia'] },
    ],
    practice: {
      retellPrompt: { bn: 'মুক্ত পরোক্ষ উক্তিতে একটি প্রশ্ন রেখে ২-৩ বাক্যে অনুচ্ছেদ লিখুন।', en: 'Write a 3-sentence literary paragraph featuring a free indirect question.' },
      completeMissing: { promptIt: 'Elena chiuse la lettera: dove ___ trovare il coraggio?', hint: { bn: 'condizionale passato: avrebbe potuto', en: 'avrebbe potuto' }, sampleIt: 'Elena chiuse la lettera: dove avrebbe potuto trovare il coraggio?' },
      buildSimilar: { patternIt: 'Guardò il treno partire. E ora come sarebbe tornato?', prompt: { bn: 'মুক্ত পরোক্ষ উক্তিতে একটি চরিত্রের দ্বিধা লিখুন।', en: 'Write a character’s inner dilemma in free indirect style.' }, sampleIt: 'Marco osservò il fascicolo. Come avrebbe convinto i soci il giorno dopo?' },
      altEndingPrompt: { bn: 'পরিবারের সাথে ডাক্তার কন্তির সহমর্মী কথোপকথন লিখুন।', en: 'Write Dr Conti’s empathetic conversation with the family.' },
    },
  }),

  buildStory({
    id: 'st-b2-20', level: 'B2', titleIt: 'Una riforma le cui ripercussioni durano',
    title: { bn: 'সুদূরপ্রসারী সংস্কার ও আনুষ্ঠানিক সম্বন্ধবাচক সর্বনাম', en: 'A lasting reform & formal relative pronouns' },
    topic: { bn: 'বিজ্ঞান নীতি ও আনুষ্ঠানিক সম্বন্ধবাচক সর্বনাম', en: 'Science policy & formal relatives' },
    grammarIds: ['relativi-formali-b2'],
    vocabKeys: ['w:B2:la ripercussione', 'w:B2:a lungo termine', "w:B2:l'ipotesi scientifica"],
    paragraphs: [
      { it: 'Il decreto sul finanziamento della ricerca di base è una riforma le cui ripercussioni si osserveranno soprattutto a lungo termine. L’istituto fisico i cui ricercatori avevano formulato l’ipotesi scientifica originaria ha ricevuto un laboratorio potenziato.', tr: { bn: 'মৌলিক গবেষণা অর্থায়নের ডিক্রিটি এমন একটি সংস্কার যার প্রভাব মূলত দীর্ঘমেয়াদে লক্ষ্য করা যাবে। যে পদার্থবিজ্ঞান ইনস্টিটিউটের গবেষকেরা প্রাথমিক বৈজ্ঞানিক অনুমানটি দাঁড় করিয়েছিলেন সেটি একটি উন্নত গবেষণাগার পেয়েছে।', en: 'The decree on funding basic research is a reform whose repercussions will be seen mainly in the long term. The physics institute whose researchers had formulated the original scientific hypothesis received an upgraded laboratory.' } },
      { it: 'La commissione ha inoltre pubblicato l’elenco dei progetti, tra i quali spiccano tre studi dedicati all’energia pulita. Mancava però una copertura triennale certa per i giovani assegnisti, ragion per cui gli atenei hanno chiesto un’integrazione.', tr: { bn: 'পর্ষদ প্রকল্পগুলোর তালিকাও প্রকাশ করেছে, যেগুলোর মধ্যে পরিচ্ছন্ন শক্তি বিষয়ক তিনটি গবেষণা বিশেষভাবে নজর কাড়ে। তবে তরুণ ফেলোদের জন্য নিশ্চিত তিন বছরের অর্থায়নের অভাব ছিল, যে কারণে বিশ্ববিদ্যালয়গুলো অতিরিক্ত বরাদ্দ চেয়েছে।', en: 'The committee also published the list of projects, among which three studies dedicated to clean energy stand out. However, guaranteed three-year funding for young fellows was lacking, which is why universities requested top-up funds.' } },
      { it: 'Ciò che conta, hanno ricordato i presidi, è offrire stabilità a chi intraprende la carriera scientifica.', tr: { bn: 'ডিনেরা স্মরণ করিয়ে দিয়েছেন যে মূল বিষয়টি হলো বিজ্ঞান গবেষণায় আসা তরুণদের স্থিতিশীলতা দেওয়া।', en: 'What matters, deans recalled, is offering stability to those embarking on a scientific career.' } },
    ],
    wordGlossary: [
      { word: 'ripercussione', base: 'la ripercussione', tr: { bn: 'প্রভাব / প্রতিক্রিয়া', en: 'repercussion' }, pos: 'noun' },
      { word: 'a lungo termine', base: 'a lungo termine', tr: { bn: 'দীর্ঘমেয়াদে', en: 'in the long term' }, pos: 'phrase' },
      { word: 'ipotesi scientifica', base: "l'ipotesi scientifica", tr: { bn: 'বৈজ্ঞানিক অনুমান', en: 'scientific hypothesis' }, pos: 'noun' },
    ],
    grammarBreakdown: [
      { sentenceIt: 'Una riforma le cui ripercussioni / i progetti tra i quali / ragion per cui.', ruleTitle: { bn: 'il cui, il quale ও ragion per cui', en: 'Possessive cui and formal relatives' }, explanation: { bn: 'le ripercussioni স্ত্রী বহুবচন → le cui; tra i quali পুং বহুবচনে স্পষ্টতা দেয়; ragion per cui = যার ফলে।', en: 'Gender/number agreement on article + cui and preposition + il quale.' }, grammarId: 'relativi-formali-b2' },
    ],
    mcq: [
      { id: 'stb2-20-q1', prompt: { bn: 'বিশ্ববিদ্যালয়গুলো কেন অতিরিক্ত বরাদ্দ চেয়েছিল?', en: 'Why did universities request top-up funding?' }, options: ['নতুন ক্যান্টিন বানাতে', 'তরুণ ফেলোদের তিন বছরের অর্থায়ন নিশ্চিত করতে', 'ক্রীড়া স্টেডিয়াম গড়তে', 'যানবাহন কিনতে'], answer: 1, explanation: { bn: 'Mancava una copertura triennale certa per i giovani assegnisti।', en: 'Stable three-year funding for fellows was lacking.' } },
    ],
    trueFalse: [
      { id: 'stb2-20-tf1', statementIt: 'L’effetto principale della riforma è previsto soltanto nel brevissimo periodo.', statement: { bn: 'সংস্কারটির মূল প্রভাব কেবল স্বল্পতম সময়ের জন্যই প্রত্যাশিত।', en: 'The reform’s main impact is expected only in the very short term.' }, answer: false, explanation: { bn: 'a lungo termine = দীর্ঘমেয়াদে।', en: 'Repercussions will be seen in the long term.' } },
    ],
    fillBlank: [
      { id: 'stb2-20-fb1', sentence: 'L’azienda ___ bilanci sono stati certificati entrerà in borsa.', options: ['di cui', 'i cui', 'il cui', 'le cui'], answer: 1, explanation: { bn: 'i bilanci পুং বহুবচন → i cui bilanci।', en: 'Masculine plural i bilanci takes i cui.' } },
    ],
    shortAnswer: [
      { id: 'stb2-20-sa1', question: { bn: 'ডিনদের মতে সবচেয়ে গুরুত্বপূর্ণ বিষয়টি কী?', en: 'What matters most according to the deans?' }, sampleAnswerIt: 'Offrire stabilità a chi intraprende la carriera scientifica.', keywords: ['stabilità', 'carriera'] },
    ],
    practice: {
      retellPrompt: { bn: 'il cui / le cui এবং ragion per cui ব্যবহার করে গল্পটি ৩ বাক্যে লিখুন।', en: 'Summarise the research reform using il cui / le cui and ragion per cui.' },
      completeMissing: { promptIt: 'Lo studioso ___ teorie hanno convinto la giuria è stato premiato.', hint: { bn: 'le teorie (f. pl.): le cui', en: 'le cui' }, sampleIt: 'Lo studioso le cui teorie hanno convinto la giuria è stato premiato.' },
      buildSimilar: { patternIt: 'La ditta i cui prodotti sono certificati esporta molto.', prompt: { bn: 'আর্টিকেল + cui + বিশেষ্য দিয়ে একটি বাক্য লিখুন।', en: 'Write a sentence with article + cui + noun.' }, sampleIt: 'È un decreto i cui vantaggi si vedranno a lungo termine.' },
      altEndingPrompt: { bn: 'তরুণ ফেলোদের গবেষণাগারে প্রথম কাজের দিন বর্ণনা করুন।', en: 'Describe the fellows’ first day in the upgraded lab.' },
    },
  }),

  buildStory({
    id: 'st-b2-21', level: 'B2', titleIt: 'Quanti operano per l’economia reale',
    title: { bn: 'অর্থনীতির বাস্তব চিত্র ও যুগ্ম সম্বন্ধবাচক সর্বনাম', en: 'Double relatives & economic purchasing power' },
    topic: { bn: 'অর্থনীতি ও quanto / quanti / chi', en: 'Economics & double relatives' },
    grammarIds: ['doppi-relativi'],
    vocabKeys: ["w:B2:il potere d'acquisto", 'w:B2:diminuire'],
    paragraphs: [
      { it: 'Secondo quanto emerge dall’ultima indagine annuale sulle famiglie, l’aumento dei prezzi energetici ha fatto diminuire sensibilmente il potere d’acquisto dei salari medi. Chi lavora con contratti precari risente più rapidamente dell’inflazione sui beni alimentari.', tr: { bn: 'পরিবারগুলোর ওপর সাম্প্রতিক বার্ষিক সমীক্ষা থেকে যা উঠে এসেছে তা অনুযায়ী, জ্বালানির মূল্যবৃদ্ধি গড় মজুরির ক্রয়ক্ষমতা উল্লেখযোগ্যভাবে কমিয়ে দিয়েছে। যাঁরা অস্থায়ী চুক্তিতে কাজ করেন তাঁরা খাদ্যপণ্যের মূল্যস্ফীতির প্রভাব আরও দ্রুত অনুভব করেন।', en: 'According to what emerges from the latest annual household survey, rising energy prices have noticeably decreased the purchasing power of average wages. Those working on precarious contracts feel food inflation much more rapidly.' } },
      { it: 'L’osservatorio economico ha quindi rivolto un appello a quanti operano nelle piccole e medie imprese affinché adottino piani di welfare aziendale condivisi. Quanto proposto dai sindacati include buoni pasto, trasporti agevolati e contributi sanitari.', tr: { bn: 'অর্থনৈতিক পর্যবেক্ষণ সংস্থা তাই ক্ষুদ্র ও মাঝারি শিল্পে কর্মরত সবার প্রতি আহ্বান জানিয়েছে যাতে তাঁরা যৌথ কর্মীকল্যাণ পরিকল্পনা গ্রহণ করেন। শ্রমিক ইউনিয়ন যা প্রস্তাব করেছে তার মধ্যে রয়েছে খাবারের ভাউচার, ভর্তুকিযুক্ত যাতায়াত এবং স্বাস্থ্য অনুদান।', en: 'The economic observatory therefore issued an appeal to all those operating in SMEs to adopt shared corporate welfare plans. What was proposed by the unions includes meal vouchers, subsidised transit, and health contributions.' } },
      { it: 'Chiunque investa nella stabilità occupazionale rafforza l’intero mercato interno.', tr: { bn: 'যে কেউ কর্মসংস্থানের স্থিতিশীলতায় বিনিয়োগ করে সে পুরো অভ্যন্তরীণ বাজারকে শক্তিশালী করে।', en: 'Whoever invests in job stability strengthens the entire domestic market.' } },
    ],
    wordGlossary: [
      { word: "potere d'acquisto", base: "il potere d'acquisto", tr: { bn: 'ক্রয়ক্ষমতা', en: 'purchasing power' }, pos: 'noun' },
      { word: 'diminuire', base: 'diminuire', tr: { bn: 'হ্রাস করা / কমে যাওয়া', en: 'to decrease' }, pos: 'verb' },
    ],
    grammarBreakdown: [
      { sentenceIt: 'Secondo quanto emerge / a quanti operano / Chi lavora con contratti precari.', ruleTitle: { bn: 'quanto, quanti ও chi-এর পার্থক্য', en: 'Distinguishing quanto, quanti, chi' }, explanation: { bn: 'quanto (একবচন = যা কিছু), quanti (বহুবচন = যাঁরা সবাই), chi (একবচন = যে ব্যক্তি/যারা)।', en: 'quanto = all that which (sg.); quanti = all those who (pl.); chi = whoever (+ sg. verb).' }, grammarId: 'doppi-relativi' },
    ],
    mcq: [
      { id: 'stb2-21-q1', prompt: { bn: 'সমীক্ষা অনুযায়ী কীসের কারণে ক্রয়ক্ষমতা কমেছে?', en: 'According to the survey, what caused purchasing power to decrease?' }, options: ['জ্বালানির মূল্যবৃদ্ধি', 'রপ্তানি বন্ধ', 'পর্যটন বৃদ্ধি', 'ব্যাংক ছুটি'], answer: 0, explanation: { bn: 'l’aumento dei prezzi energetici।', en: 'Rising energy prices.' } },
    ],
    trueFalse: [
      { id: 'stb2-21-tf1', statementIt: 'Le proposte dei sindacati comprendono solo aumenti del salario fisso.', statement: { bn: 'ইউনিয়নের প্রস্তাবে কেবল স্থায়ী বেতন বৃদ্ধির কথাই আছে।', en: 'Union proposals include only base salary increases.' }, answer: false, explanation: { bn: 'খাবারের ভাউচার, যাতায়াত ও স্বাস্থ্য অনুদান অন্তর্ভুক্ত।', en: 'They include meal vouchers, transit, and health benefits.' } },
    ],
    fillBlank: [
      { id: 'stb2-21-fb1', sentence: 'Ringraziamo ___ hanno contribuito alla raccolta dei dati.', options: ['chi', 'quanti', 'quanto', 'colui'], answer: 1, explanation: { bn: 'বহুবচন ক্রিয়া hanno থাকায় বহুবচন সর্বনাম quanti বসে।', en: 'Plural verb hanno requires plural quanti.' } },
    ],
    shortAnswer: [
      { id: 'stb2-21-sa1', question: { bn: 'ইউনিয়নের প্রস্তাবে কর্মীকল্যাণের কী কী সুবিধা রয়েছে?', en: 'What benefits are included in the unions’ welfare proposal?' }, sampleAnswerIt: 'Buoni pasto, trasporti agevolati e contributi sanitari.', keywords: ['buoni', 'trasporti'] },
    ],
    practice: {
      retellPrompt: { bn: 'quanto ও quanti ব্যবহার করে অর্থনৈতিক সমীক্ষার সারাংশ লিখুন।', en: 'Summarise the economic survey using quanto and quanti.' },
      completeMissing: { promptIt: 'Confermiamo ___ è emerso dal verbale.', hint: { bn: 'তথ্য/বিষয়বস্তু একবচনে: quanto', en: 'quanto' }, sampleIt: 'Confermiamo quanto è emerso dal verbale.' },
      buildSimilar: { patternIt: 'L’appello è rivolto a quanti lavorano nel settore.', prompt: { bn: 'quanti + বহুবচন ক্রিয়া দিয়ে একটি আনুষ্ঠানিক আহ্বান লিখুন।', en: 'Write a formal appeal using quanti + plural verb.' }, sampleIt: 'Il corso è aperto a quanti desiderano perfezionare l’italiano professionale.' },
      altEndingPrompt: { bn: 'একটি ক্ষুদ্র প্রতিষ্ঠানে কল্যাণ পরিকল্পনা চালুর প্রভাব লিখুন।', en: 'Describe the effect of adopting a welfare plan in an SME.' },
    },
  }),

  buildStory({
    id: 'st-b2-22', level: 'B2', titleIt: 'La perizia tecnica e i fondi strutturali',
    title: { bn: 'কারিগরি প্রতিবেদন ও বামে কর্ম স্থানান্তর', en: 'Technical survey & structural funds' },
    topic: { bn: 'প্রকল্প ব্যবস্থাপনা ও dislocazione a sinistra', en: 'Project management & left dislocation' },
    grammarIds: ['dislocazione-sinistra'],
    vocabKeys: ['w:B2:la perizia tecnica', 'w:B2:i fondi strutturali', 'w:B2:stanziare', 'w:B2:la clausola vessatoria'],
    paragraphs: [
      { it: 'Nel municipio di Bari i lavori per il nuovo ponte pedonale procedevano tra mille domande dei cittadini. «I fondi strutturali europei li abbiamo già stanziati nel bilancio triennale — assicurò l’assessore — e la perizia tecnica l’abbiamo depositata ieri in segreteria».', tr: { bn: 'বারি পৌরসভায় নতুন পথচারী সেতুর কাজ নাগরিকদের নানা প্রশ্নের মধ্য দিয়ে এগোচ্ছিল। «ইউরোপীয় কাঠামোগত তহবিলগুলো আমরা ইতিমধ্যে তিন বছরের বাজেটে বরাদ্দ করেছি — কাউন্সিলর আশ্বস্ত করলেন — এবং কারিগরি প্রতিবেদনটি আমরা গতকাল সচিবালয়ে জমা দিয়েছি»।', en: 'In Bari city hall, works on the new pedestrian bridge progressed amid citizens’ questions. "The European structural funds, we have already allocated them in the three-year budget," assured the councillor, "and the technical survey, we filed it yesterday with the secretariat."' } },
      { it: 'Un’avvocata dell’osservatorio civico intervenne però sul capitolato d’appalto: «Le clausole vessatorie nei subappalti le abbiamo contestate subito, perché di rischi per i lavoratori non ne vogliamo correre nessuno».', tr: { bn: 'তবে নাগরিক পর্যবেক্ষণ সংস্থার একজন আইনজীবী দরপত্রের শর্তাবলি নিয়ে হস্তক্ষেপ করলেন: «উপ-চুক্তির অন্যায় ধারাগুলোর আমরা সাথে সাথেই আপত্তি জানিয়েছি, কারণ শ্রমিকদের নিরাপত্তার কোনো ঝুঁকিই আমরা নিতে চাই না»।', en: 'A civic watchdog lawyer intervened on the tender specs: "Unfair clauses in subcontracts, we contested them right away, because of risks to workers we don’t want to run any."' } },
      { it: 'L’amministrazione accolse il rilievo e integrò il bando prima della gara ufficiale.', tr: { bn: 'প্রশাসন আপত্তিটি গ্রহণ করল এবং আনুষ্ঠানিক নিলামের আগেই বিজ্ঞপ্তিটি সংশোধন করল।', en: 'The administration accepted the objection and amended the tender before the official bidding.' } },
    ],
    wordGlossary: [
      { word: 'perizia tecnica', base: 'la perizia tecnica', tr: { bn: 'কারিগরি প্রতিবেদন', en: 'technical survey / appraisal' }, pos: 'noun' },
      { word: 'fondi strutturali', base: 'i fondi strutturali', tr: { bn: 'কাঠামোগত তহবিল', en: 'structural funds' }, pos: 'noun' },
      { word: 'clausola vessatoria', base: 'la clausola vessatoria', tr: { bn: 'অন্যায় শর্ত', en: 'unfair clause' }, pos: 'noun' },
    ],
    grammarBreakdown: [
      { sentenceIt: 'La perizia tecnica l’abbiamo depositata / Le clausole le abbiamo contestate.', ruleTitle: { bn: 'বামে কর্ম স্থানান্তর (Dislocazione a sinistra)', en: 'Left dislocation with clitic agreement' }, explanation: { bn: 'বাক্যের শুরুতে আসা কর্মের সাথে ক্রিয়ার আগে সর্বনাম (li, l’, le, ne) ও পাস্ট পার্টিসিপলের লিঙ্গ-বচন মেলে।', en: 'Resumptive pronouns agree in gender/number with the fronted object.' }, grammarId: 'dislocazione-sinistra' },
    ],
    mcq: [
      { id: 'stb2-22-q1', prompt: { bn: 'নাগরিক সংস্থার আইনজীবী কোন বিষয়ে আপত্তি জানিয়েছিলেন?', en: 'What did the civic watchdog lawyer object to?' }, options: ['সেতুর রঙ', 'উপ-চুক্তির অন্যায় ধারাগুলো', 'ইউরোপীয় তহবিল', 'সচিবালয়ের সময়'], answer: 1, explanation: { bn: 'Le clausole vessatorie nei subappalti।', en: 'The unfair clauses in subcontracts.' } },
    ],
    trueFalse: [
      { id: 'stb2-22-tf1', statementIt: 'L’amministrazione ha rifiutato di modificare il bando prima della gara.', statement: { bn: 'নিলামের আগে প্রশাসন বিজ্ঞপ্তি সংশোধন করতে অস্বীকার করেছিল।', en: 'The administration refused to amend the tender before bidding.' }, answer: false, explanation: { bn: 'accolse il rilievo e integrò il bando।', en: 'It accepted the point and amended the tender.' } },
    ],
    fillBlank: [
      { id: 'stb2-22-fb1', sentence: 'I progetti esecutivi ___ già approvati la settimana scorsa.', options: ['li abbiamo', 'le abbiamo', 'ne ha', 'la abbiamo'], answer: 0, explanation: { bn: 'I progetti পুং বহুবচন হওয়ায় li abbiamo approvati।', en: 'Masculine plural i progetti takes li.' } },
    ],
    shortAnswer: [
      { id: 'stb2-22-sa1', question: { bn: 'কারিগরি প্রতিবেদনটি কবে এবং কোথায় জমা দেওয়া হয়েছিল?', en: 'When and where was the technical survey filed?' }, sampleAnswerIt: 'Ieri in segreteria.', keywords: ['ieri', 'segreteria'] },
    ],
    practice: {
      retellPrompt: { bn: 'বামে কর্ম স্থানান্তর (lo/la/li/le + পার্টিসিপল) ব্যবহার করে বারি পৌরসভার খবরটি লিখুন।', en: 'Summarise the Bari tender meeting using left dislocation.' },
      completeMissing: { promptIt: 'La pratica urgente ___ già protocollata stamattina.', hint: { bn: 'la pratica f. sg.: l’abbiamo', en: 'l’abbiamo' }, sampleIt: 'La pratica urgente l’abbiamo già protocollata stamattina.' },
      buildSimilar: { patternIt: 'Le fatture le abbiamo pagate puntualmente.', prompt: { bn: 'বামে কর্ম স্থানান্তর করে একটি বাক্য লিখুন।', en: 'Write a left-dislocated sentence with past participle agreement.' }, sampleIt: 'I fondi strutturali il ministero li ha distribuiti alle regioni.' },
      altEndingPrompt: { bn: 'এক বছর পর নতুন পথচারী সেতুর উদ্বোধনী অনুষ্ঠান লিখুন।', en: 'Describe the ribbon-cutting ceremony for the new footbridge.' },
    },
  }),

  buildStory({
    id: 'st-b2-23', level: 'B2', titleIt: 'L’assemblea sulla ripartizione delle spese',
    title: { bn: 'ফ্ল্যাট মালিকদের সভা ও ডানে কর্ম স্থানান্তর', en: 'Condominium meeting & right dislocation' },
    topic: { bn: 'আবাসন ও dislocazione a destra', en: 'Housing & right dislocation' },
    grammarIds: ['dislocazione-destra'],
    vocabKeys: ['w:B2:la ripartizione delle spese', 'w:B2:il reclamo formale'],
    paragraphs: [
      { it: 'L’assemblea condominiale di via Mazzini durò quasi tre ore a causa dei lavori straordinari alla facciata. «L’hai poi letto con attenzione, il consuntivo annuale?» domandò la signora Bruni al vicino di pianerottolo.', tr: { bn: 'ভায়া মাতৎসিনির ফ্ল্যাট মালিকদের সাধারণ সভা ভবনের সামনের দিকের বিশেষ সংস্কার কাজের কারণে প্রায় তিন ঘণ্টা স্থায়ী হয়েছিল। «তুমি কি তারপর মনোযোগ দিয়ে পড়েছ, বার্ষিক চূড়ান্ত হিসাবটা?» মিসেস ব্রুনি পাশের ফ্ল্যাটের প্রতিবেশীকে জিজ্ঞাসা করলেন।', en: 'The condominium meeting on Via Mazzini lasted nearly three hours because of extraordinary facade works. "Did you read it carefully after all, the annual final statement?" Mrs Bruni asked her landing neighbour.' } },
      { it: '«Sì, e ne abbiamo discusso a lungo anche ieri sera, della ripartizione delle spese per l’ascensore» rispose lui mostrando la tabella millesimale. Alcuni proprietari minacciavano persino di inviare un reclamo formale se non fosse stato chiarito il preventivo.', tr: { bn: '«হ্যাঁ, আর আমরা গতকাল রাতেও এটা নিয়ে দীর্ঘক্ষণ আলোচনা করেছি, লিফটের খরচের বণ্টন নিয়ে» প্রতিবেশী মালিকানার আনুপাতিক তালিকা দেখিয়ে উত্তর দিলেন। প্রাক্কলন স্পষ্ট না করলে কয়েকজন মালিক এমনকি আনুষ্ঠানিক অভিযোগ পাঠানোর হুমকিও দিচ্ছিলেন।', en: '"Yes, and we talked about it at length last night too, the apportionment of lift costs," he replied showing the millesimal table. Some owners even threatened to send a formal complaint if the quote were not clarified.' } },
      { it: 'Alla fine l’amministratore presentò tre preventivi comparativi e l’assemblea li approvò quasi all’unanimità.', tr: { bn: 'শেষ পর্যন্ত ব্যবস্থাপক তিনটি তুলনামূলক প্রাক্কলন পেশ করলেন এবং সভা প্রায় সর্বসম্মতিক্রমে সেগুলো অনুমোদন করল।', en: 'Eventually the building manager presented three comparative quotes and the assembly approved them almost unanimously.' } },
    ],
    wordGlossary: [
      { word: 'ripartizione delle spese', base: 'la ripartizione delle spese', tr: { bn: 'খরচের বণ্টন', en: 'cost apportionment' }, pos: 'noun' },
      { word: 'reclamo formale', base: 'il reclamo formale', tr: { bn: 'আনুষ্ঠানিক লিখিত অভিযোগ', en: 'formal complaint' }, pos: 'noun' },
    ],
    grammarBreakdown: [
      { sentenceIt: 'L’hai poi letto, il consuntivo annuale? / Ne abbiamo discusso, della ripartizione.', ruleTitle: { bn: 'ডানে কর্ম স্থানান্তর (Dislocazione a destra)', en: 'Right dislocation' }, explanation: { bn: 'প্রাক-সর্বনাম (L’, Ne) ক্রিয়ার আগে বসে এবং কমা-র পরে মূল বিশেষ্য পদটি স্পষ্ট করার জন্য শেষে বসে।', en: 'Anticipatory clitic precedes the verb; the clarified noun phrase follows a comma.' }, grammarId: 'dislocazione-destra' },
    ],
    mcq: [
      { id: 'stb2-23-q1', prompt: { bn: 'ফ্ল্যাট মালিকদের সভা প্রায় তিন ঘণ্টা চলেছিল কেন?', en: 'Why did the condominium meeting last nearly three hours?' }, options: ['পার্কিং নিয়ে', 'ভবনের সম্মুখভাগের বিশেষ সংস্কার কাজের কারণে', 'বাগান কাটা নিয়ে', 'ইন্টারনেট নিয়ে'], answer: 1, explanation: { bn: 'a causa dei lavori straordinari alla facciata।', en: 'Because of major facade works.' } },
    ],
    trueFalse: [
      { id: 'stb2-23-tf1', statementIt: 'L’amministratore portò tre preventivi diversi per risolvere i dubbi.', statement: { bn: 'সন্দেহ মেটাতে ব্যবস্থাপক তিনটি ভিন্ন প্রাক্কলন নিয়ে এসেছিলেন।', en: 'The manager brought three comparative quotes to settle doubts.' }, answer: true, explanation: { bn: 'presentò tre preventivi comparativi।', en: 'True.' } },
    ],
    fillBlank: [
      { id: 'stb2-23-fb1', sentence: '___ hai già inviato tramite PEC, il reclamo formale?', options: ['La', 'L’', 'Ne', 'Gli'], answer: 1, explanation: { bn: 'il reclamo পুং একবচন হওয়ায় hai-এর আগে L’ (Lo) বসে।', en: 'Masculine singular il reclamo takes L’ before hai.' } },
    ],
    shortAnswer: [
      { id: 'stb2-23-sa1', question: { bn: 'প্রতিবেশী কোন তালিকা দেখিয়েছিলেন?', en: 'Which table did the neighbour show?' }, sampleAnswerIt: 'La tabella millesimale.', keywords: ['tabella', 'millesimale'] },
    ],
    practice: {
      retellPrompt: { bn: 'ডানে কর্ম স্থানান্তর ব্যবহার করে সভার কথোপকথনের সারাংশ লিখুন।', en: 'Summarise the meeting using right dislocation.' },
      completeMissing: { promptIt: '___ conosci bene, il regolamento condominiale?', hint: { bn: 'il regolamento m. sg.: Lo', en: 'Lo' }, sampleIt: 'Lo conosci bene, il regolamento condominiale?' },
      buildSimilar: { patternIt: 'Li hai già controllati, i conti?', prompt: { bn: 'ডানে কর্ম স্থানান্তর করে একটি প্রশ্ন লিখুন।', en: 'Write a question using right dislocation.' }, sampleIt: 'L’avete poi firmata, la delibera dell’assemblea?' },
      altEndingPrompt: { bn: 'ভবন সংস্কার কাজ শেষ হওয়ার পর বাসিন্দাদের সন্তুষ্টি লিখুন।', en: 'Describe residents’ satisfaction once the facade work finishes.' },
    },
  }),

  buildStory({
    id: 'st-b2-24', level: 'B2', titleIt: 'La delega e il contrasto all’evasione',
    title: { bn: 'কর ফাঁকি প্রতিরোধ ও বিভক্ত বাক্য', en: 'Tackling tax evasion & cleft sentences' },
    topic: { bn: 'রাজস্ব ও অর্থনীতি — বিভক্ত বাক্য', en: 'Taxation & cleft sentences' },
    grammarIds: ['frase-scissa'],
    vocabKeys: ["w:B2:l'evasione fiscale", 'w:B2:la delega', 'w:B2:il nesso causale'],
    paragraphs: [
      { it: 'Durante il convegno sulla finanza pubblica, i relatori hanno analizzato l’impatto economico dell’evasione fiscale sui servizi essenziali. «È proprio il sommerso che sottrae risorse vitali agli ospedali e alle scuole» ha affermato l’economista aprendo la tavola rotonda.', tr: { bn: 'সরকারি অর্থব্যবস্থা বিষয়ক সম্মেলনে বক্তারা অত্যাবশ্যক সেবার ওপর কর ফাঁকির অর্থনৈতিক প্রভাব বিশ্লেষণ করেন। গোলটেবিল বৈঠক উদ্বোধন করে অর্থনীতিবিদ বলেন, «অপ্রাতিষ্ঠানিক কালো অর্থনীতিই হাসপাতাল ও স্কুল থেকে অত্যাবশ্যক সম্পদ সরিয়ে নেয়»।', en: 'During the conference on public finance, speakers analysed the economic impact of tax evasion on essential services. "It is precisely the shadow economy that drains vital resources from hospitals and schools," stated the economist opening the round table.' } },
      { it: 'Sono state poi le tecnologie digitali — come la fatturazione elettronica e i pagamenti tracciabili — a dimostrare il nesso causale tra trasparenza contabile e recupero del gettito. Ciò che manca ancora in alcuni settori, secondo gli esperti, è la semplificazione per le microimprese.', tr: { bn: 'এরপর ডিজিটাল প্রযুক্তিগুলো — যেমন ইলেকট্রনিক চালান এবং শনাক্তযোগ্য পেমেন্ট — হিসাবের স্বচ্ছতা ও রাজস্ব পুনরুদ্ধারের মধ্যকার কার্যকারণ সম্পর্ক প্রমাণ করেছে। বিশেষজ্ঞদের মতে, কিছু খাতে এখনো যা অভাব রয়েছে তা হলো অতি ক্ষুদ্র ব্যবসার জন্য প্রক্রিয়ার সরলীকরণ।', en: 'It was then digital technologies — such as e-invoicing and traceable payments — that proved the causal link between accounting transparency and recovered revenue. What is still lacking in some sectors, according to experts, is simplification for micro-enterprises.' } },
      { it: 'Per questo il Parlamento ha approvato una delega fiscale mirata a premiare i contribuenti puntuali e ridurre gli adempimenti ripetitivi.', tr: { bn: 'এ কারণেই সংসদ সময়নিষ্ঠ করদাতাদের পুরস্কৃত করতে এবং পুনরাবৃত্তিমূলক আনুষ্ঠানিকতা কমাতে একটি কর সংস্কার ম্যান্ডেট অনুমোদন করেছে।', en: 'For this reason Parliament passed a tax reform mandate aimed at rewarding punctual taxpayers and reducing repetitive paperwork.' } },
    ],
    wordGlossary: [
      { word: 'evasione fiscale', base: "l'evasione fiscale", tr: { bn: 'কর ফাঁকি', en: 'tax evasion' }, pos: 'noun' },
      { word: 'delega', base: 'la delega', tr: { bn: 'ক্ষমতা/দায়িত্ব অর্পণ', en: 'mandate / delegation' }, pos: 'noun' },
      { word: 'nesso causale', base: 'il nesso causale', tr: { bn: 'কার্যকারণ সম্পর্ক', en: 'causal link' }, pos: 'noun' },
    ],
    grammarBreakdown: [
      { sentenceIt: 'È il sommerso che sottrae risorse / Sono state le tecnologie a dimostrare… / Ciò che manca è…', ruleTitle: { bn: 'বিভক্ত ও ছদ্ম-বিভক্ত বাক্য (Frase scissa)', en: 'Cleft & pseudo-cleft sentences' }, explanation: { bn: 'নির্দিষ্ট উপাদানে জোর দিতে È... che, কর্তা জোর দিতে Sono state... a + infinito, এবং প্রচ্ছন্ন জোরে Ciò che... è... বসে।', en: 'Explicit cleft (che), implicit subject cleft (a + infinitive), and pseudo-cleft (Ciò che… è).' }, grammarId: 'frase-scissa' },
    ],
    mcq: [
      { id: 'stb2-24-q1', prompt: { bn: 'অর্থনীতিবিদের মতে কী হাসপাতাল ও স্কুলের সম্পদ কমিয়ে দেয়?', en: 'According to the economist, what drains resources from hospitals and schools?' }, options: ['বিদেশি পর্যটন', 'অপ্রাতিষ্ঠানিক কালো অর্থনীতি ও কর ফাঁকি', 'অধিক ছুটি', 'রেলওয়ে'], answer: 1, explanation: { bn: 'È proprio il sommerso che sottrae risorse vitali।', en: 'The shadow economy / tax evasion.' } },
    ],
    trueFalse: [
      { id: 'stb2-24-tf1', statementIt: 'La fatturazione elettronica non ha prodotto alcun effetto sul gettito.', statement: { bn: 'ইলেকট্রনিক চালান রাজস্ব আদায়ে কোনো প্রভাব ফেলেনি।', en: 'E-invoicing had no effect on tax revenue.' }, answer: false, explanation: { bn: 'স্বচ্ছতা ও রাজস্ব পুনরুদ্ধারের কার্যকারণ সম্পর্ক প্রমাণিত হয়েছে।', en: 'It demonstrated a clear causal link to recovered revenue.' } },
    ],
    fillBlank: [
      { id: 'stb2-24-fb1', sentence: 'Sono stati gli analisti ___ individuare la discrepanza.', options: ['che a', 'a', 'di', 'per'], answer: 1, explanation: { bn: 'কর্তা জোর দেওয়া অসমাপিকা বিভক্ত বাক্যে a + ইনফিনিটিভ।', en: 'Subject-focus implicit cleft uses a + infinitive.' } },
    ],
    shortAnswer: [
      { id: 'stb2-24-sa1', question: { bn: 'বিশেষজ্ঞদের মতে অতি ক্ষুদ্র ব্যবসার জন্য এখনো কী প্রয়োজন?', en: 'What is still lacking for micro-enterprises according to experts?' }, sampleAnswerIt: 'La semplificazione degli adempimenti.', keywords: ['semplificazione'] },
    ],
    practice: {
      retellPrompt: { bn: 'È... che এবং Sono stati... a... ব্যবহার করে সম্মেলনের মূল বক্তব্য লিখুন।', en: 'Summarise the public finance conference using cleft sentences.' },
      completeMissing: { promptIt: '___ la prevenzione che riduce i costi futuri.', hint: { bn: 'È', en: 'È' }, sampleIt: 'È la prevenzione che riduce i costi futuri.' },
      buildSimilar: { patternIt: 'Ciò che serve ora è un piano triennale.', prompt: { bn: 'Ciò che... è... দিয়ে একটি ছদ্ম-বিভক্ত বাক্য লিখুন।', en: 'Write a pseudo-cleft sentence with Ciò che… è…' }, sampleIt: 'Ciò che garantisce l’equità fiscale è la trasparenza dei bilanci.' },
      altEndingPrompt: { bn: 'নতুন কর সরলীকরণ চালুর পর ক্ষুদ্র ব্যবসায়ীদের প্রতিক্রিয়া লিখুন।', en: 'Describe small business owners’ reaction to simplified digital filing.' },
    },
  }),

  buildStory({
    id: 'st-b2-25', level: 'B2', titleIt: 'Dal vertice scaturiscono nuove intese',
    title: { bn: 'আন্তঃসরকারি শীর্ষ সম্মেলন ও কর্তার বিপর্যয়', en: 'Intergovernmental summit & subject inversion' },
    topic: { bn: 'আন্তর্জাতিক সম্পর্ক ও inversione del soggetto', en: 'International summits & subject inversion' },
    grammarIds: ['inversione-soggetto'],
    vocabKeys: ['w:B2:il vertice intergovernativo', 'w:B2:scaturire', 'w:B2:il rettore'],
    paragraphs: [
      { it: 'Si è concluso stamane a Trieste il vertice intergovernativo dedicato alla ricerca mediterranea e ai corridoi marittimi sostenibili. Alla sessione inaugurale hanno preso parte il rettore dell’ateneo ospitante, diversi ministri e numerose delegazioni tecniche.', tr: { bn: 'ভূমধ্যসাগরীয় গবেষণা ও টেকসই সামুদ্রিক করিডোর বিষয়ক আন্তঃসরকারি শীর্ষ সম্মেলন আজ সকালে ত্রিয়েস্তেতে সমাপ্ত হয়েছে। উদ্বোধনী অধিবেশনে আয়োজক বিশ্ববিদ্যালয়ের উপাচার্য, বেশ কয়েকজন মন্ত্রী এবং বহু কারিগরি প্রতিনিধিদল অংশগ্রহণ করেন।', en: 'The intergovernmental summit on Mediterranean research and sustainable maritime corridors concluded this morning in Trieste. Taking part in the opening session were the host university’s rector, several ministers, and numerous technical delegations.' } },
      { it: 'Dagli incontri bilaterali sono scaturite tre intese operative per la sicurezza portuale e lo scambio di studenti di dottorato. Alla cerimonia di chiusura è seguito un dibattito aperto ai rappresentanti delle imprese navali.', tr: { bn: 'দ্বিপাক্ষিক বৈঠকগুলো থেকে বন্দর নিরাপত্তা ও পিএইচডি শিক্ষার্থী বিনিময়ের তিনটি কার্যকরী সমঝোতা উদ্ভূত হয়েছে। সমাপনী অনুষ্ঠানের পরে জাহাজ শিল্পের প্রতিনিধিদের জন্য উন্মুক্ত একটি বিতর্ক অনুষ্ঠিত হয়।', en: 'From the bilateral meetings arose three operational agreements on port security and PhD student exchange. Following the closing ceremony was an open debate for maritime business representatives.' } },
      { it: 'Restano tuttavia aperti due capitoli tecnici riguardanti i dazi doganali, sui quali si riunirà un gruppo misto il mese prossimo.', tr: { bn: 'তবে শুল্ক সংক্রান্ত দুটি কারিগরি অধ্যায় এখনো অমীমাংসিত রয়ে গেছে, যার ওপর আগামী মাসে একটি যৌথ দল বৈঠকে বসবে।', en: 'Two technical chapters concerning customs duties nevertheless remain open, on which a joint panel will meet next month.' } },
    ],
    wordGlossary: [
      { word: 'vertice intergovernativo', base: 'il vertice intergovernativo', tr: { bn: 'আন্তঃসরকারি শীর্ষ সম্মেলন', en: 'intergovernmental summit' }, pos: 'noun' },
      { word: 'scaturire', base: 'scaturire', tr: { bn: 'উৎসারিত হওয়া / উদ্ভূত হওয়া', en: 'to stem / arise' }, pos: 'verb' },
      { word: 'rettore', base: 'il rettore', tr: { bn: 'বিশ্ববিদ্যালয়ের উপাচার্য', en: 'rector / vice-chancellor' }, pos: 'noun' },
    ],
    grammarBreakdown: [
      { sentenceIt: 'Alla sessione hanno preso parte il rettore e diversi ministri / Sono scaturite tre intese.', ruleTitle: { bn: 'কর্তা ক্রিয়ার পরে (Inversione del soggetto)', en: 'Post-verbal subject agreement' }, explanation: { bn: 'অকর্মক বা উপস্থাপনমূলক ক্রিয়ার (scaturire, seguire, restare, prendere parte) পরে আসা কর্তা বহুবচন হলে ক্রিয়াও বহুবচন হয়।', en: 'Verb agrees in number and gender with the post-verbal subject.' }, grammarId: 'inversione-soggetto' },
    ],
    mcq: [
      { id: 'stb2-25-q1', prompt: { bn: 'সম্মেলনটি কোন শহরে অনুষ্ঠিত হয়েছিল?', en: 'In which city was the summit held?' }, options: ['জেনোয়া', 'ত্রিয়েস্তে', 'নাপোলি', 'ভেনিস'], answer: 1, explanation: { bn: 'a Trieste।', en: 'In Trieste.' } },
    ],
    trueFalse: [
      { id: 'stb2-25-tf1', statementIt: 'Tutti i capitoli sui dazi doganali sono già stati chiusi definitivamente.', statement: { bn: 'শুল্ক সংক্রান্ত সব অধ্যায় ইতিমধ্যে চূড়ান্তভাবে নিষ্পত্তি হয়ে গেছে।', en: 'All customs chapters have been definitively closed.' }, answer: false, explanation: { bn: 'Restano tuttavia aperti due capitoli tecnici।', en: 'Two technical chapters remain open.' } },
    ],
    fillBlank: [
      { id: 'stb2-25-fb1', sentence: 'Dall’indagine ___ dati statistici molto chiari.', options: ['è emerso', 'sono emersi', 'ha emerso', 'emerse'], answer: 1, explanation: { bn: 'dati পুং বহুবচন হওয়ায় sono emersi বসে।', en: 'Post-verbal plural dati requires sono emersi.' } },
    ],
    shortAnswer: [
      { id: 'stb2-25-sa1', question: { bn: 'দ্বিপাক্ষিক বৈঠক থেকে কোন দুটি বিষয়ে তিনটি সমঝোতা হয়েছে?', en: 'On which two topics did three operational deals emerge?' }, sampleAnswerIt: 'Sicurezza portuale e scambio di studenti di dottorato.', keywords: ['portuale', 'dottorato'] },
    ],
    practice: {
      retellPrompt: { bn: 'Sono emersi / Sono scaturite / Alla cerimonia è seguito কাঠামোতে সম্মেলনটি লিখুন।', en: 'Summarise the Trieste summit using post-verbal subjects.' },
      completeMissing: { promptIt: 'Nell’archivio ___ numerosi documenti inediti.', hint: { bn: 'mancare বহুবচন: mancano', en: 'mancano' }, sampleIt: 'Nell’archivio mancano numerosi documenti inediti.' },
      buildSimilar: { patternIt: 'Alla conferenza hanno partecipato tre atenei.', prompt: { bn: 'ক্রিয়ার পরে কর্তা বসিয়ে একটি বাক্য লিখুন।', en: 'Write a sentence with a post-verbal subject.' }, sampleIt: 'Dal dibattito sono nate proposte concrete per la mobilità studentesca.' },
      altEndingPrompt: { bn: 'আগামী মাসের যৌথ দলের বৈঠকের ফলাফল লিখুন।', en: 'Write the outcome of next month’s joint panel on customs duties.' },
    },
  }),

  buildStory({
    id: 'st-b2-26', level: 'B2', titleIt: 'La digitalizzazione degli sportelli',
    title: { bn: 'জনপ্রশাসনের ডিজিটাল রূপান্তর ও বিশেষ্যীকরণ', en: 'Digitising public offices & nominalisation' },
    topic: { bn: 'জনপ্রশাসন ও nominalizzazione', en: 'Public administration & nominalisation' },
    grammarIds: ['nominalizzazione-b2'],
    vocabKeys: ['w:B2:digitalizzare', 'w:B2:agevolare', 'w:B2:lo scioglimento dei ghiacciai'],
    paragraphs: [
      { it: 'Negli ultimi cinque anni, la decisione di digitalizzare gli archivi anagrafici ha trasformato il rapporto fra cittadini e Comune. L’introduzione dell’identità digitale unica ha agevolato l’ottenimento immediato dei certificati senza code agli sportelli.', tr: { bn: 'গত পাঁচ বছরে নাগরিক নিবন্ধন আর্কাইভ ডিজিটাল করার সিদ্ধান্ত নাগরিক ও পৌরসভার সম্পর্ক বদলে দিয়েছে। একক ডিজিটাল পরিচয় চালু করায় কাউন্টারে লাইন না দাঁড়িয়েই তাৎক্ষণিকভাবে সনদপত্র পাওয়া সহজতর হয়েছে।', en: 'Over the last five years, the decision to digitise registry archives transformed relations between citizens and the municipality. The introduction of a single digital ID has facilitated immediate certificate retrieval without queues.' } },
      { it: 'La semplificazione delle procedure non implica tuttavia l’abbandono dell’assistenza in presenza. Al contrario, la riduzione dei tempi burocratici consente agli operatori di dedicare maggiore ascolto alle persone anziane o con difficoltà informatiche.', tr: { bn: 'তবে প্রক্রিয়ার সরলীকরণ মানে সরাসরি উপস্থিত সহায়তা পরিত্যাগ করা নয়। বিপরীতে, আমলাতান্ত্রিক সময় কমে যাওয়ায় কর্মীরা প্রবীণ বা কম্পিউটার ব্যবহারে অসুবিধা থাকা মানুষদের প্রতি আরও বেশি মনোযোগ দিতে পারেন।', en: 'Simplifying procedures does not imply abandoning in-person assistance, however. On the contrary, the reduction in bureaucratic turnaround enables staff to devote greater attention to elderly citizens or those facing IT difficulties.' } },
      { it: 'La progressiva eliminazione dei moduli cartacei contribuisce infine all’abbattimento dei consumi energetici dell’intera macchina amministrativa.', tr: { bn: 'কাগজের ফর্মের ক্রমান্বয়ে বিলোপ শেষ পর্যন্ত পুরো প্রশাসনিক ব্যবস্থার জ্বালানি ও কাগজের খরচ কমাতে অবদান রাখে।', en: 'The progressive elimination of paper forms ultimately contributes to cutting resource consumption across the administrative apparatus.' } },
    ],
    wordGlossary: [
      { word: 'digitalizzare', base: 'digitalizzare', tr: { bn: 'ডিজিটাল রূপ দেওয়া', en: 'to digitise' }, pos: 'verb' },
      { word: 'agevolare', base: 'agevolare', tr: { bn: 'সহজতর করা', en: 'to facilitate' }, pos: 'verb' },
    ],
    grammarBreakdown: [
      { sentenceIt: 'L’introduzione dell’identità / La semplificazione delle procedure / L’abbattimento dei consumi.', ruleTitle: { bn: 'বিশেষ্যীকরণ (Nominalizzazione)', en: 'Academic/formal nominalisation' }, explanation: { bn: 'ক্রিয়াপদের বদলে introdurre → l’introduzione, semplificare → la semplificazione, ridurre → la riduzione ব্যবহার করে ঘন ও মার্জিত গদ্য তৈরি হয়েছে।', en: 'Abstract nouns compress verbose verb clauses into dense formal phrasing.' }, grammarId: 'nominalizzazione-b2' },
    ],
    mcq: [
      { id: 'stb2-26-q1', prompt: { bn: 'একক ডিজিটাল পরিচয় চালু হওয়ায় কোন সুবিধা হয়েছে?', en: 'What benefit did the single digital ID bring?' }, options: ['লাইন ছাড়াই তাৎক্ষণিক সনদপত্র পাওয়া', 'বিনামূল্যে বাস ভ্রমণ', 'কর মওকুফ', 'নতুন পাসপোর্ট'], answer: 0, explanation: { bn: 'l’ottenimento immediato dei certificati senza code।', en: 'Immediate certificates without queues.' } },
    ],
    trueFalse: [
      { id: 'stb2-26-tf1', statementIt: 'Con i servizi online il Comune ha chiuso tutti gli sportelli fisici per gli anziani.', statement: { bn: 'অনলাইন সেবার কারণে পৌরসভা প্রবীণদের জন্য সব সরাসরি কাউন্টার বন্ধ করে দিয়েছে।', en: 'With online services the city closed all physical desks for seniors.' }, answer: false, explanation: { bn: 'কর্মীরা এখন প্রবীণদের প্রতি আরও বেশি সময় দিতে পারেন।', en: 'Staff now dedicate greater in-person support to seniors.' } },
    ],
    fillBlank: [
      { id: 'stb2-26-fb1', sentence: '«Dopo che è entrata in vigore la legge» si nominalizza in: ___ della legge.', options: ['Dopo l’entrata in vigore', 'Dopo il entrare', 'Per entrata', 'Entrando'], answer: 0, explanation: { bn: 'entrata বিশেষ্য রূপে: Dopo l’entrata in vigore della legge।', en: 'Nominalised form is Dopo l’entrata in vigore della legge.' } },
    ],
    shortAnswer: [
      { id: 'stb2-26-sa1', question: { bn: 'কাগজের ফর্ম কমিয়ে ফেলার পরোক্ষ পরিবেশগত ফল কী?', en: 'What environmental benefit comes from eliminating paper forms?' }, sampleAnswerIt: 'L’abbattimento dei consumi dell’amministrazione.', keywords: ['abbattimento', 'consumi'] },
    ],
    practice: {
      retellPrompt: { bn: 'l’introduzione / la riduzione / la semplificazione ব্যবহার করে নিবন্ধটি লিখুন।', en: 'Summarise the digitisation article using nominalised nouns.' },
      completeMissing: { promptIt: '___ delle emissioni migliora la qualità dell’aria.', hint: { bn: 'ridurre → La riduzione', en: 'La riduzione' }, sampleIt: 'La riduzione delle emissioni migliora la qualità dell’aria.' },
      buildSimilar: { patternIt: 'L’approvazione del bilancio ha rassicurato i soci.', prompt: { bn: 'ক্রিয়ার বদলে বিশেষ্য পদ দিয়ে একটি বাক্য রূপান্তর করুন।', en: 'Convert a verb clause into a nominalised noun phrase.' }, sampleIt: 'L’aumento dell’efficienza ha agevolato l’accesso ai servizi comunali.' },
      altEndingPrompt: { bn: 'গ্রামীণ এলাকাতেও ডিজিটাল সহায়তা কেন্দ্র খোলার পরিকল্পনা লিখুন।', en: 'Describe expanding assisted digital hubs to rural districts.' },
    },
  }),

  buildStory({
    id: 'st-b2-27', level: 'B2', titleIt: 'La siccità e le riserve idriche',
    title: { bn: 'দীর্ঘস্থায়ী খরা ও যুক্তিমূলক সংযোজক', en: 'Prolonged drought & argumentative connectors' },
    topic: { bn: 'পরিবেশ ও connettivi argomentativi', en: 'Environment & argumentative connectors' },
    grammarIds: ['connettivi-argomentativi'],
    vocabKeys: ['w:B2:pertanto', "w:B2:tant'è vero che", 'w:B2:la siccità prolungata'],
    paragraphs: [
      { it: 'La pianura padana affronta una siccità prolungata che dura ormai da quattro stagioni consecutive, tant’è vero che la portata dei principali affluenti è scesa ai minimi storici. Poiché le perdite della rete idrica superano ancora il trenta per cento in alcuni tratti, la crisi non dipende soltanto dal clima.', tr: { bn: 'পো সমভূমি টানা চার মৌসুম ধরে চলমান এক দীর্ঘস্থায়ী খরার মুখোমুখি, যার বাস্তব প্রমাণ হলো প্রধান উপনদীগুলোর প্রবাহ সর্বকালের সর্বনিম্ন পর্যায়ে নেমে এসেছে। যেহেতু কিছু অংশে পানি সরবরাহ লাইনের অপচয় এখনো ত্রিশ শতাংশের বেশি, তাই সংকটটি কেবল জলবায়ুর ওপর নির্ভরশীল নয়।', en: 'The Po Valley faces a prolonged drought lasting four consecutive seasons now, so much so that major tributaries have dropped to historic lows. Since water-network losses still exceed thirty per cent in some stretches, the crisis does not depend on climate alone.' } },
      { it: 'Giacché l’agricoltura assorbe la quota maggiore dell’acqua dolce disponibile, un sistema d’irrigazione obsoleto compromette l’intera filiera alimentare; pertanto la regione ha vincolato i nuovi contributi alla sostituzione delle condotte colabrodo.', tr: { bn: 'যেহেতু কৃষিই লভ্য মিঠা পানির বৃহত্তম অংশ ব্যবহার করে, সেহেতু একটি সেকেলে সেচ ব্যবস্থা পুরো খাদ্য সরবরাহ শৃঙ্খলকে ঝুঁকিতে ফেলে; অতএব অঞ্চলটি নতুন অনুদানকে ছিদ্রযুক্ত পুরোনো পাইপ প্রতিস্থাপনের সাথে শর্তযুক্ত করেছে।', en: 'Inasmuch as agriculture absorbs the largest share of available fresh water, an obsolete irrigation system jeopardises the entire food chain; therefore the region tied new grants to replacing leaky pipes.' } },
      { it: 'Ne consegue che l’innovazione idrica e la tutela del suolo diventano un investimento strategico non più rinviabile.', tr: { bn: 'এর থেকে স্পষ্ট হয় যে পানি ব্যবস্থাপনার উদ্ভাবন ও মাটি সংরক্ষণ এখন এমন এক কৌশলগত বিনিয়োগ যা আর পিছিয়ে দেওয়া যায় না।', en: 'It follows that water innovation and soil protection become a strategic investment that can no longer be postponed.' } },
    ],
    wordGlossary: [
      { word: 'siccità prolungata', base: 'la siccità prolungata', tr: { bn: 'দীর্ঘস্থায়ী খরা', en: 'prolonged drought' }, pos: 'noun' },
      { word: 'pertanto', base: 'pertanto', tr: { bn: 'অতএব / সুতরাং', en: 'therefore' }, pos: 'adv' },
      { word: "tant'è vero che", base: "tant'è vero che", tr: { bn: 'এতটাই সত্য যে', en: 'so much so that' }, pos: 'conj' },
    ],
    grammarBreakdown: [
      { sentenceIt: 'tant’è vero che la portata è scesa / Giacché l’agricoltura assorbe…; pertanto…; Ne consegue che…', ruleTitle: { bn: 'কারণ, প্রমাণ ও অনুসিদ্ধান্তের সংযোজক', en: 'Connectors of proof and logical deduction' }, explanation: { bn: 'tant’è vero che প্রমাণ দেয়, giacché কারণ দর্শায়, এবং pertanto / ne consegue che যৌক্তিক ফলাফল টানে।', en: 'Structures logical proof concisely across sentences.' }, grammarId: 'connettivi-argomentativi' },
    ],
    mcq: [
      { id: 'stb2-27-q1', prompt: { bn: 'নতুন অনুদান পাওয়ার জন্য কৃষকদের কোন শর্ত মানতে হবে?', en: 'What condition did the region attach to new water grants?' }, options: ['কৃষিজমি বিক্রি করা', 'ছিদ্রযুক্ত পুরোনো পাইপ প্রতিস্থাপন করা', 'শীতকালীন ফসল বন্ধ করা', 'বিদ্যুৎ বিল দ্বিগুণ করা'], answer: 1, explanation: { bn: 'la sostituzione delle condotte colabrodo।', en: 'Replacing leaky water pipes.' } },
    ],
    trueFalse: [
      { id: 'stb2-27-tf1', statementIt: 'Le perdite delle reti idriche sono inferiori all’uno per cento ovunque.', statement: { bn: 'সর্বত্র পানি সরবরাহ নেটওয়ার্কের অপচয় এক শতাংশের নিচে।', en: 'Water network losses are below one per cent everywhere.' }, answer: false, explanation: { bn: 'কিছু অংশে ত্রিশ শতাংশেরও বেশি (superano il trenta per cento)।', en: 'They exceed thirty per cent in some sections.' } },
    ],
    fillBlank: [
      { id: 'stb2-27-fb1', sentence: 'La pratica manca della firma; ___ viene respinta.', options: ['pertanto', 'tuttavia', 'benché', 'qualora'], answer: 0, explanation: { bn: 'কার্যকারণ/ফলাফল বোঝাতে pertanto বসে।', en: 'Logical consequence uses pertanto.' } },
    ],
    shortAnswer: [
      { id: 'stb2-27-sa1', question: { bn: 'পানি সংকট কেন কেবল জলবায়ুর কারণে নয়?', en: 'Why is the water crisis not caused solely by climate?' }, sampleAnswerIt: 'Perché le perdite della rete idrica superano il trenta per cento.', keywords: ['perdite', 'rete'] },
    ],
    practice: {
      retellPrompt: { bn: 'giacché, tant’è vero che ও pertanto দিয়ে খরা সংকটটি লিখুন।', en: 'Summarise the drought report using giacché, tant’è vero che, and pertanto.' },
      completeMissing: { promptIt: 'Il piano è efficace, ___ i consumi si sono dimezzati.', hint: { bn: 'বাস্তব প্রমাণ: tant’è vero che', en: 'tant’è vero che' }, sampleIt: 'Il piano è efficace, tant’è vero che i consumi si sono dimezzati.' },
      buildSimilar: { patternIt: 'Mancano i fondi; pertanto i lavori sono rinviati.', prompt: { bn: 'pertanto দিয়ে একটি কারণ-ফল বাক্য লিখুন।', en: 'Write a logical deduction sentence using pertanto.' }, sampleIt: 'Le temperature salgono; ne consegue che servono colture più resistenti.' },
      altEndingPrompt: { bn: 'নতুন ড্রিপ সেচ ব্যবস্থা বসানোর পর ফসলের অবস্থা বর্ণনা করুন।', en: 'Describe crop resilience after upgrading to drip irrigation.' },
    },
  }),

  buildStory({
    id: 'st-b2-28', level: 'B2', titleIt: 'Coesione sociale e welfare aziendale',
    title: { bn: 'সামাজিক সংহতি ও প্রবন্ধ-বিন্যাস সংযোজক', en: 'Social cohesion & discourse organisation' },
    topic: { bn: 'শ্রম ও কল্যাণ — রীফর্মুলেশন সংযোজক', en: 'Welfare & reformulation markers' },
    grammarIds: ['connettivi-riformulazione'],
    vocabKeys: ['w:B2:in primo luogo', 'w:B2:in ultima analisi', 'w:B2:la coesione sociale', 'w:B2:il trattamento di fine rapporto'],
    paragraphs: [
      { it: 'Come conciliare competitività economica e coesione sociale nelle regioni industriali? In primo luogo occorre valorizzare la contrattazione collettiva, affinché i salari seguano la produttività reale; in secondo luogo bisogna tutelare il trattamento di fine rapporto, vale a dire la somma accantonata a favore del lavoratore al termine del servizio.', tr: { bn: 'শিল্পাঞ্চলগুলোতে কীভাবে অর্থনৈতিক প্রতিযোগিতা সক্ষমতা এবং সামাজিক সংহতির মধ্যে সমন্বয় ঘটানো যায়? প্রথমত, যৌথ দর-কষাকষির গুরুত্ব বাড়াতে হবে যাতে মজুরি প্রকৃত উৎপাদনশীলতাকে অনুসরণ করে; দ্বিতীয়ত, কর্ম-সমাপ্তি ভাতা (টিএফআর) সুরক্ষিত রাখতে হবে, অর্থাৎ চাকরির মেয়াদ শেষে কর্মীর জন্য সঞ্চিত অর্থ রক্ষা করতে হবে।', en: 'How can economic competitiveness and social cohesion be reconciled in industrial regions? Firstly, collective bargaining must be strengthened so wages track real productivity; secondly, severance pay (TFR) must be safeguarded, namely the sum accrued for the worker at the end of service.' } },
      { it: 'In altre parole, quando le imprese investono nella formazione continua anziché nella compressione dei costi salariali, riducono il ricambio forzato di personale e trattengono i talenti giovani.', tr: { bn: 'অন্য কথায়, প্রতিষ্ঠানগুলো যখন বেতন কমানোর বদলে ধারাবাহিক প্রশিক্ষণে বিনিয়োগ করে, তখন কর্মী বদলের হার কমে এবং তরুণ মেধাবীরা প্রতিষ্ঠানে থেকে যায়।', en: 'In other words, when firms invest in continuous training instead of squeezing wage costs, they reduce forced staff turnover and retain young talent.' } },
      { it: 'In ultima analisi, un mercato del lavoro equo non è un freno allo sviluppo, bensì la sua infrastruttura morale più solida.', tr: { bn: 'চূড়ান্ত বিশ্লেষণে, একটি ন্যায্য শ্রমবাজার উন্নয়নের কোনো বাধা নয়, বরং তার সবচেয়ে মজবুত নৈতিক ভিত্তি।', en: 'Ultimately, a fair labour market is not a brake on development, but rather its strongest moral infrastructure.' } },
    ],
    wordGlossary: [
      { word: 'coesione sociale', base: 'la coesione sociale', tr: { bn: 'সামাজিক সংহতি', en: 'social cohesion' }, pos: 'noun' },
      { word: 'trattamento di fine rapporto', base: 'il trattamento di fine rapporto', tr: { bn: 'কর্ম-সমাপ্তি ভাতা (টিএফআর)', en: 'severance pay (TFR)' }, pos: 'noun' },
    ],
    grammarBreakdown: [
      { sentenceIt: 'In primo luogo…; in secondo luogo… vale a dire…; In altre parole…; In ultima analisi…', ruleTitle: { bn: 'ক্রম, ব্যাখ্যা ও উপসংহারের সংযোজক', en: 'Ordering, reformulation & synthesis markers' }, explanation: { bn: 'প্রবন্ধের ধাপ স্পষ্ট করতে In primo/secondo luogo, পরিভাষা বোঝাতে vale a dire, এবং সারসংক্ষেপে In ultima analisi বসেছে।', en: 'Guides the reader cleanly through thesis, explanation, and synthesis.' }, grammarId: 'connettivi-riformulazione' },
    ],
    mcq: [
      { id: 'stb2-28-q1', prompt: { bn: '«il trattamento di fine rapporto» বলতে কী বোঝানো হয়েছে?', en: 'How does the text define trattamento di fine rapporto?' }, options: ['বাৎসরিক উৎসব ভাতা', 'চাকরি শেষে কর্মীর জন্য সঞ্চিত অর্থ', 'ব্যাংক ঋণ', 'ভ্রমণ ভাতা'], answer: 1, explanation: { bn: 'la somma accantonata al termine del servizio।', en: 'The sum accrued for the worker at end of service.' } },
    ],
    trueFalse: [
      { id: 'stb2-28-tf1', statementIt: 'Investire nella formazione continua aiuta a trattenere i giovani talenti.', statement: { bn: 'ধারাবাহিক প্রশিক্ষণে বিনিয়োগ তরুণ মেধাবীদের ধরে রাখতে সাহায্য করে।', en: 'Investing in training helps retain young talent.' }, answer: true, explanation: { bn: 'riducono il ricambio e trattengono i talenti giovani।', en: 'True.' } },
    ],
    fillBlank: [
      { id: 'stb2-28-fb1', sentence: 'Il bando prevede la PEC, ___ la posta elettronica certificata.', options: ['ossia', 'pertanto', 'qualora', 'malgrado'], answer: 0, explanation: { bn: 'ossia / vale a dire ব্যাখ্যা বা পূর্ণরূপ প্রবর্তন করে।', en: 'ossia introduces a definition or clarification.' } },
    ],
    shortAnswer: [
      { id: 'stb2-28-sa1', question: { bn: 'প্রশিক্ষণে বিনিয়োগ করলে কর্মীদের ক্ষেত্রে কী ইতিবাচক ফল আসে?', en: 'What positive staff effect comes from investing in continuous training?' }, sampleAnswerIt: 'Si riduce il ricambio forzato e si trattengono i talenti giovani.', keywords: ['ricambio', 'talenti'] },
    ],
    practice: {
      retellPrompt: { bn: 'In primo luogo, vale a dire এবং In ultima analisi দিয়ে নিবন্ধের সারাংশ লিখুন।', en: 'Summarise the article using In primo luogo, vale a dire, and In ultima analisi.' },
      completeMissing: { promptIt: '___, nessuna riforma funziona senza consenso sociale.', hint: { bn: 'উপসংহার: In ultima analisi', en: 'In ultima analisi' }, sampleIt: 'In ultima analisi, nessuna riforma funziona senza consenso sociale.' },
      buildSimilar: { patternIt: 'In primo luogo serve ascolto; in secondo luogo servono fondi.', prompt: { bn: 'একটি দ্বি-ধাপ প্রস্তাবনা লিখুন।', en: 'Write a two-step structured proposal.' }, sampleIt: 'In primo luogo occorre chiarezza normativa; in secondo luogo controlli costanti.' },
      altEndingPrompt: { bn: 'যৌথ প্রশিক্ষণ তহবিল চালু করার পর একটি স্থানীয় কারখানার পরিবর্তন লিখুন।', en: 'Describe a local factory’s progress after launching its training fund.' },
    },
  }),

  buildStory({
    id: 'st-b2-29', level: 'B2', titleIt: 'La sicurezza sul lavoro prima di tutto',
    title: { bn: 'কর্মক্ষেত্রের নিরাপত্তা ও যৌগিক প্রিপোজিশন', en: 'Workplace safety & complex prepositions' },
    topic: { bn: 'শ্রম সুরক্ষা ও locuzioni preposizionali', en: 'Occupational safety & complex prepositions' },
    grammarIds: ['locuzioni-preposizionali-b2'],
    vocabKeys: ['w:B2:a scapito di', 'w:B2:la sicurezza sul lavoro', 'w:B2:alla luce di', 'w:B2:a prescindere da'],
    paragraphs: [
      { it: 'Alla luce dei dati pubblicati dall’ispettorato, un consorzio edile del Veneto ha rinnovato integralmente il proprio protocollo per la sicurezza sul lavoro. «A prescindere dai ritmi serrati delle consegne — ha dichiarato l’amministratore — non accetteremo mai scorciatoie a scapito dell’incolumità degli operai».', tr: { bn: 'শ্রম পরিদর্শন দপ্তরের প্রকাশিত তথ্যের আলোকে ভেনেতোর একটি নির্মাণ কনসোর্টিয়াম কর্মক্ষেত্রের নিরাপত্তার প্রোটোকল সম্পূর্ণভাবে নবায়ন করেছে। «কাজ হস্তান্তরের দ্রুত সময়সীমা নির্বিশেষে — ব্যবস্থাপক ঘোষণা করেছেন — শ্রমিকদের নিরাপত্তার ক্ষতি করে আমরা কখনোই কোনো শর্টকাট মেনে নেব না»।', en: 'In the light of figures published by the inspectorate, a Veneto construction consortium overhauled its workplace safety protocol. "Regardless of tight delivery schedules," declared the manager, "we will never accept shortcuts at the expense of workers’ safety."' } },
      { it: 'In conformità con le direttive europee, ogni cantiere è stato dotato di sensori di carico e corsi pratici mensili in più lingue per facilitare la piena comprensione delle norme da parte di tutti i colleghi stranieri.', tr: { bn: 'ইউরোপীয় নির্দেশনা অনুসারে, প্রতিটি নির্মাণ সাইটে লোড সেন্সর এবং সব বিদেশি সহকর্মীর জন্য নিয়মগুলো সম্পূর্ণ বোঝা সহজ করতে একাধিক ভাষায় মাসিক ব্যবহারিক প্রশিক্ষণের ব্যবস্থা করা হয়েছে।', en: 'In accordance with European directives, every site was equipped with load sensors and monthly practical courses in multiple languages to ensure full understanding among all foreign colleagues.' } },
      { it: 'Grazie a questo impegno, gli infortuni si sono ridotti drasticamente a beneficio di tutto il settore.', tr: { bn: 'এই অঙ্গীকারের ফলে পুরো খাতের কল্যাণে দুর্ঘটনার হার নাটকীয়ভাবে কমে এসেছে।', en: 'Thanks to this commitment, accidents dropped sharply for the benefit of the entire sector.' } },
    ],
    wordGlossary: [
      { word: 'alla luce di', base: 'alla luce di', tr: { bn: 'আলোকে', en: 'in the light of' }, pos: 'phrase' },
      { word: 'a prescindere da', base: 'a prescindere da', tr: { bn: 'নির্বিশেষে', en: 'regardless of' }, pos: 'phrase' },
      { word: 'a scapito di', base: 'a scapito di', tr: { bn: 'ক্ষতি বা বিনিময়ে', en: 'at the expense of' }, pos: 'phrase' },
    ],
    grammarBreakdown: [
      { sentenceIt: 'Alla luce dei dati / A prescindere dai ritmi / a scapito dell’incolumità / a beneficio di tutto il settore.', ruleTitle: { bn: 'যৌগিক প্রিপোজিশনাল পদগুচ্ছ', en: 'Complex prepositional phrases' }, explanation: { bn: 'প্রতিটি পদগুচ্ছের শেষ প্রিপোজিশন (di, da, con) আর্টিকেলের সাথে যুক্ত হয়ে সূক্ষ্ম সম্পর্ক প্রকাশ করে।', en: 'Pay close attention to the exact governing preposition (alla luce di, a prescindere da).' }, grammarId: 'locuzioni-preposizionali-b2' },
    ],
    mcq: [
      { id: 'stb2-29-q1', prompt: { bn: 'বিদেশি কর্মীদের জন্য প্রশিক্ষণ কেমন ছিল?', en: 'How were practical safety courses delivered for foreign workers?' }, options: ['শুধু অনলাইনে', 'একাধিক ভাষায় মাসিক ব্যবহারিক প্রশিক্ষণ', 'বছরে একবার লিখিত পরীক্ষা', 'কোনো প্রশিক্ষণ ছিল না'], answer: 1, explanation: { bn: 'corsi pratici mensili in più lingue।', en: 'Monthly practical courses in multiple languages.' } },
    ],
    trueFalse: [
      { id: 'stb2-29-tf1', statementIt: 'Il consorzio accelera le consegne anche riducendo le misure di sicurezza.', statement: { bn: 'দ্রুত কাজ শেষ করতে কনসোর্টিয়াম নিরাপত্তা ব্যবস্থা কমিয়ে দেয়।', en: 'The consortium speeds deliveries by cutting safety rules.' }, answer: false, explanation: { bn: 'non accetteremo scorciatoie a scapito dell’incolumità।', en: 'It never compromises safety.' } },
    ],
    fillBlank: [
      { id: 'stb2-29-fb1', sentence: '___ difficoltà iniziali, il progetto è stato completato in sicurezza.', options: ['A prescindere dalle', 'A prescindere delle', 'Alla luce dalle', 'Ai sensi dalle'], answer: 0, explanation: { bn: 'a prescindere সর্বদা da প্রিপোজিশন নেয় → dalle।', en: 'a prescindere governs da → dalle.' } },
    ],
    shortAnswer: [
      { id: 'stb2-29-sa1', question: { bn: 'প্রতিটি নির্মাণ সাইটে প্রযুক্তিগতভাবে কী বসানো হয়েছিল?', en: 'What technology was installed on every construction site?' }, sampleAnswerIt: 'Sensori di carico.', keywords: ['sensori', 'carico'] },
    ],
    practice: {
      retellPrompt: { bn: 'alla luce di, a prescindere da ও a scapito di দিয়ে নিরাপত্তার গল্পটি লিখুন।', en: 'Summarise the safety initiative using three complex prepositional phrases.' },
      completeMissing: { promptIt: '___ legge regionale, il casco è sempre obbligatorio.', hint: { bn: 'আইন অনুযায়ী: Ai sensi della', en: 'Ai sensi della' }, sampleIt: 'Ai sensi della legge regionale, il casco è sempre obbligatorio.' },
      buildSimilar: { patternIt: 'Non risparmiare a scapito della qualità.', prompt: { bn: 'a scapito di ব্যবহার করে একটি নীতিবাক্য লিখুন।', en: 'Write a rule using a scapito di.' }, sampleIt: 'Non bisogna accelerare i tempi a scapito della salute dei lavoratori.' },
      altEndingPrompt: { bn: 'পুরস্কারপ্রাপ্ত নির্মাণ দলের অভিজ্ঞতা লিখুন।', en: 'Describe the safety award received by the site team.' },
    },
  }),

  buildStory({
    id: 'st-b2-30', level: 'B2', titleIt: 'Chiarire un malinteso in ufficio',
    title: { bn: 'অফিসের ভুল বোঝাবুঝি ও সর্বনামযুক্ত ক্রিয়া', en: 'Clearing a workplace misunderstanding' },
    topic: { bn: 'কর্মক্ষেত্র ও verbi procomplementari', en: 'Office diplomacy & procomplementary verbs' },
    grammarIds: ['verbi-procomplementari'],
    vocabKeys: ["w:B2:l'allusione velata", 'w:B2:il malinteso'],
    paragraphs: [
      { it: 'Dopo la riunione settimanale, Davide si accorse che Valeria era rimasta fredda nei suoi confronti. «Non capisco proprio perché ce l’abbia con me — confidò a Sara davanti alla macchinetta del caffè — forse ha colto come un’allusione velata la mia battuta sui ritardi delle consegne».', tr: { bn: 'সাপ্তাহিক সভার পর দাভিদে লক্ষ্য করলেন যে ভালেরিয়া তাঁর প্রতি বেশ শীতল আচরণ করছেন। «আমি সত্যিই বুঝতে পারছি না সে কেন আমার ওপর রাগ করে আছে — কফি মেশিনের সামনে সারাকে বললেন — হয়তো ডেলিভারি দেরি হওয়া নিয়ে আমার রসিকতাকে সে প্রচ্ছন্ন ইঙ্গিত ভেবেছে»।', en: 'After the weekly meeting, Davide noticed Valeria remained cold towards him. "I really don’t get why she has it in for me," he confided to Sara by the coffee machine. "Maybe she took my joke about delivery delays as a veiled allusion."' } },
      { it: '«Ma no, cosa c’entra la tua battuta!» rispose Sara sorridendo. «Si tratta solo di un banale malinteso sull’assegnazione del nuovo cliente. Parlale con franchezza: vedrai che non se la prenderà affatto».', tr: { bn: '«আরে না, তোমার রসিকতা এখানে আসবে কেন!» সারা হেসে উত্তর দিলেন। «এটা কেবল নতুন গ্রাহক বণ্টন নিয়ে একটা সামান্য ভুল বোঝাবুঝি। ওর সাথে খোলাখুলি কথা বলো: দেখবে ও মোটেও মনে কষ্ট নেবে না»।', en: '"Not at all, what does your joke have to do with it!" Sara smiled. "It’s just a trivial misunderstanding over the new client assignment. Talk to her openly: you’ll see she won’t take offence at all."' } },
      { it: 'Davide seguì il consiglio: in cinque minuti chiarirono ogni dettaglio e tornarono a collaborare come prima.', tr: { bn: 'দাভিদে পরামর্শটি মানলেন: পাঁচ মিনিটেই তাঁরা প্রতিটি বিষয় স্পষ্ট করলেন এবং আগের মতোই একসাথে কাজ শুরু করলেন।', en: 'Davide took the advice: in five minutes they cleared up every detail and went back to collaborating smoothly.' } },
    ],
    wordGlossary: [
      { word: 'allusione velata', base: "l'allusione velata", tr: { bn: 'প্রচ্ছন্ন ইঙ্গিত', en: 'veiled allusion' }, pos: 'noun' },
      { word: 'malinteso', base: 'il malinteso', tr: { bn: 'ভুল বোঝাবুঝি', en: 'misunderstanding' }, pos: 'noun' },
    ],
    grammarBreakdown: [
      { sentenceIt: 'Perché ce l’abbia con me / Cosa c’entra la tua battuta / Non se la prenderà.', ruleTitle: { bn: 'সর্বনামযুক্ত ক্রিয়া (Verbi procomplementari)', en: 'Procomplementary verbs' }, explanation: { bn: 'avercela con (রাগ থাকা), entrarci (প্রাসঙ্গিক হওয়া), prendersela (মনে কষ্ট নেওয়া) — সর্বনামগুলো স্থির অর্থ তৈরি করে।', en: 'Fixed clitic combinations carry idiomatic meanings.' }, grammarId: 'verbi-procomplementari' },
    ],
    mcq: [
      { id: 'stb2-30-q1', prompt: { bn: 'ভুল বোঝাবুঝির আসল কারণ কী ছিল?', en: 'What was the real cause of the misunderstanding?' }, options: ['কফি মেশিন নষ্ট হওয়া', 'নতুন গ্রাহক বণ্টন', 'বেতন কাটা', 'অফিস বদল'], answer: 1, explanation: { bn: 'un banale malinteso sull’assegnazione del nuovo cliente।', en: 'The new client assignment.' } },
    ],
    trueFalse: [
      { id: 'stb2-30-tf1', statementIt: 'Davide e Valeria non sono riusciti a chiarirsi e hanno litigato.', statement: { bn: 'দাভিদে ও ভালেরিয়া বিষয়টি মেটাতে পারেননি এবং ঝগড়া করেছেন।', en: 'Davide and Valeria failed to clear the air.' }, answer: false, explanation: { bn: 'পাঁচ মিনিটেই সব স্পষ্ট হয়ে যায়।', en: 'They cleared it up in five minutes.' } },
    ],
    fillBlank: [
      { id: 'stb2-30-fb1', sentence: 'Questo argomento non ___ nulla con il tema della riunione.', options: ['ci ha', 'c’entra', 'se la cava', 'ne può'], answer: 1, explanation: { bn: 'non c’entra nulla = এর সাথে কোনো সম্পর্ক নেই।', en: 'entrarci means to be relevant.' } },
    ],
    shortAnswer: [
      { id: 'stb2-30-sa1', question: { bn: 'সারা দাভিদকে কী পরামর্শ দিয়েছিলেন?', en: 'What advice did Sara give Davide?' }, sampleAnswerIt: 'Di parlarle con franchezza.', keywords: ['parlarle', 'franchezza'] },
    ],
    practice: {
      retellPrompt: { bn: 'avercela, entrarci এবং prendersela দিয়ে ঘটনাটি লিখুন।', en: 'Retell the office story using avercela, entrarci, and prendersela.' },
      completeMissing: { promptIt: 'Non ___ prendere: era solo un malinteso!', hint: { bn: 'prendersela নেতিবাচক অনুজ্ঞায়: te la', en: 'te la' }, sampleIt: 'Non te la prendere: era solo un malinteso!' },
      buildSimilar: { patternIt: 'Che c’entra questo con il bilancio?', prompt: { bn: 'entrarci দিয়ে একটি প্রশ্ন লিখুন।', en: 'Write a question using entrarci.' }, sampleIt: 'Non capisco cosa c’entri quella clausola con il nostro progetto.' },
      altEndingPrompt: { bn: 'দাভিদে ও ভালেরিয়ার মধ্যকার পাঁচ মিনিটের সংলাপ লিখুন।', en: 'Write the five-minute conversation between Davide and Valeria.' },
    },
  }),

  buildStory({
    id: 'st-b2-31', level: 'B2', titleIt: 'Aliquote fiscali e aspettativa di vita',
    title: { bn: 'করের হার, আয়ুষ্কাল ও দ্বি-সহায়ক ক্রিয়া', en: 'Tax rates, life expectancy & dual auxiliaries' },
    topic: { bn: 'জনসংখ্যাতত্ত্ব ও verbi con doppio ausiliare', en: 'Demographics & dual-auxiliary verbs' },
    grammarIds: ['verbi-doppio-ausiliare'],
    vocabKeys: ["w:B2:l'aliquota", 'w:B2:diminuire', "w:B2:l'aspettativa di vita"],
    paragraphs: [
      { it: 'Il rapporto demografico annuale fotografa un Paese in profonda trasformazione. Negli ultimi trent’anni l’aspettativa di vita è cresciuta costantemente grazie ai progressi della medicina preventiva, mentre il numero di nuove nascite è diminuito in quasi tutte le regioni.', tr: { bn: 'বার্ষিক জনসংখ্যা প্রতিবেদন এক গভীর রূপান্তরশীল দেশের চিত্র তুলে ধরে। গত ত্রিশ বছরে প্রতিরোধমূলক চিকিৎসার অগ্রগতির ফলে গড় আয়ুষ্কাল ধারাবাহিকভাবে বৃদ্ধি পেয়েছে, অন্যদিকে প্রায় সব অঞ্চলেই নতুন জন্মের সংখ্যা কমে গেছে।', en: 'The annual demographic report captures a country in deep transformation. Over the past thirty years life expectancy has steadily grown thanks to advances in preventive medicine, while the number of new births has decreased in almost all regions.' } },
      { it: 'Per sostenere le giovani famiglie e i servizi sanitari per gli anziani, alcuni comuni hanno diminuito le aliquote locali per gli asili nido e hanno migliorato l’assistenza domiciliare. Di conseguenza la qualità complessiva dei servizi di quartiere è migliorata sensibilmente.', tr: { bn: 'তরুণ পরিবার ও প্রবীণদের স্বাস্থ্যসেবা সহায়তায় কিছু পৌরসভা শিশু দিবাযত্ন কেন্দ্রের স্থানীয় করের হার কমিয়েছে এবং গৃহভিত্তিক সেবা উন্নত করেছে। ফলস্বরূপ পাড়ার সেবার সামগ্রিক মান উল্লেখযোগ্যভাবে উন্নত হয়েছে।', en: 'To support young families and elderly healthcare, some municipalities lowered local tax rates for nurseries and improved home care. Consequently, the overall quality of neighbourhood services has noticeably improved.' } },
      { it: 'Quando la politica locale interviene con lungimiranza, l’equilibrio sociale cambia in positivo.', tr: { bn: 'যখন স্থানীয় রাজনীতি দূরদর্শিতার সাথে পদক্ষেপ নেয়, তখন সামাজিক ভারসাম্য ইতিবাচকভাবে বদলে যায়।', en: 'When local policy intervenes with foresight, social balance changes positively.' } },
    ],
    wordGlossary: [
      { word: 'aliquota', base: "l'aliquota", tr: { bn: 'করের হার', en: 'tax rate' }, pos: 'noun' },
      { word: 'diminuire', base: 'diminuire', tr: { bn: 'কমানো / কমে যাওয়া', en: 'to decrease' }, pos: 'verb' },
      { word: 'aspettativa di vita', base: "l'aspettativa di vita", tr: { bn: 'গড় আয়ুষ্কাল', en: 'life expectancy' }, pos: 'noun' },
    ],
    grammarBreakdown: [
      { sentenceIt: 'I comuni hanno diminuito le aliquote / il numero è diminuito / la qualità è migliorata.', ruleTitle: { bn: 'কর্মভেদে avere ও essere', en: 'Transitive avere vs intransitive essere' }, explanation: { bn: 'কর্ম (le aliquote, l’assistenza) থাকলে avere, আর কর্মহীন অবস্থায় কর্তার পরিবর্তন বোঝালে essere বসে।', en: 'Direct object → avere; intransitive change → essere with agreement.' }, grammarId: 'verbi-doppio-ausiliare' },
    ],
    mcq: [
      { id: 'stb2-31-q1', prompt: { bn: 'প্রতিবেদনে আয়ুষ্কাল বৃদ্ধির কারণ কী বলা হয়েছে?', en: 'What reason is given for rising life expectancy?' }, options: ['শীতকালীন ছুটি', 'প্রতিরোধমূলক চিকিৎসার অগ্রগতি', 'কর বৃদ্ধি', 'নতুন মহাসড়ক'], answer: 1, explanation: { bn: 'grazie ai progressi della medicina preventiva।', en: 'Advances in preventive medicine.' } },
    ],
    trueFalse: [
      { id: 'stb2-31-tf1', statementIt: 'Alcuni comuni hanno ridotto le aliquote locali per sostenere gli asili nido.', statement: { bn: 'শিশু দিবাযত্ন কেন্দ্রকে সহায়তা করতে কিছু পৌরসভা স্থানীয় করের হার কমিয়েছে।', en: 'Some municipalities lowered local rates to support nurseries.' }, answer: true, explanation: { bn: 'hanno diminuito le aliquote locali per gli asili nido।', en: 'True.' } },
    ],
    fillBlank: [
      { id: 'stb2-31-fb1', sentence: 'La banca centrale ___ aumentato i tassi di interesse.', options: ['è', 'ha', 'sono', 'siano'], answer: 1, explanation: { bn: 'সরাসরি কর্ম i tassi থাকায় সহায়ক ha বসে।', en: 'Transitive object i tassi triggers auxiliary ha.' } },
    ],
    shortAnswer: [
      { id: 'stb2-31-sa1', question: { bn: 'আয়ুষ্কাল বৃদ্ধির পাশাপাশি জনসংখ্যায় কী কমেছে?', en: 'Along with rising life expectancy, what has declined?' }, sampleAnswerIt: 'Il numero di nuove nascite.', keywords: ['numero', 'nascite'] },
    ],
    practice: {
      retellPrompt: { bn: 'crescere, diminuire এবং migliorare-এর সকর্মক ও অকর্মক জোড়া বাক্য লিখুন।', en: 'Write transitive and intransitive pairs using crescere, diminuire, migliorare.' },
      completeMissing: { promptIt: 'La qualità dell’aria ___ migliorata dopo la pedonalizzazione.', hint: { bn: 'অকর্মক (la qualità f. sg.): è', en: 'è' }, sampleIt: 'La qualità dell’aria è migliorata dopo la pedonalizzazione.' },
      buildSimilar: { patternIt: 'L’azienda ha ridotto i prezzi e le vendite sono cresciute.', prompt: { bn: 'একই বাক্যে সকর্মক avere ও অকর্মক essere ব্যবহার করুন।', en: 'Combine a transitive avere verb and an intransitive essere verb.' }, sampleIt: 'Il Comune ha aumentato le corse dei bus e l’uso dell’auto è diminuito.' },
      altEndingPrompt: { bn: 'পৌরসভার দিবাযত্ন কেন্দ্র সম্প্রসারণের খবর লিখুন।', en: 'Describe the expansion of municipal nursery places.' },
    },
  }),

  buildStory({
    id: 'st-b2-32', level: 'B2', titleIt: 'Farsi valere durante la trattativa',
    title: { bn: 'সমঝোতা আলোচনা ও প্রতিফলক প্রযোজক ক্রিয়া', en: 'Standing firm in negotiation & reflexive causatives' },
    topic: { bn: 'ভোক্তা ও কূটনৈতিক আলোচনা — farsi/lasciarsi', en: 'Negotiations & reflexive causatives' },
    grammarIds: ['causativi-riflessivi'],
    vocabKeys: ['w:B2:la sostituzione gratuita', 'w:B2:il prodotto difettoso', 'w:B2:il negoziato di pace'],
    paragraphs: [
      { it: 'Quando la stampante industriale del laboratorio si guastò per la terza volta, Lucia decise di non lasciarsi scoraggiare dalle risposte evasive del rivenditore. Si fece inviare dal produttore la scheda tecnica ufficiale e scoprì che si trattava di un lotto difettoso.', tr: { bn: 'ল্যাবের ইন্ডাস্ট্রিয়াল প্রিন্টারটি যখন তৃতীয়বারের মতো নষ্ট হলো, লুচিয়া বিক্রেতার এড়িয়ে যাওয়া উত্তরে নিরুৎসাহিত না হওয়ার সিদ্ধান্ত নিলেন। তিনি উৎপাদকের কাছ থেকে অফিশিয়াল কারিগরি তথ্যপত্র আনিয়ে নিলেন এবং জানতে পারলেন যে এটি একটি ত্রুটিপূর্ণ ব্যাচ ছিল।', en: 'When the lab’s industrial printer broke down for the third time, Lucia decided not to let herself be discouraged by the dealer’s evasive replies. She had the official technical sheet sent by the manufacturer and found out it was a defective batch.' } },
      { it: 'Forte di quel documento, si fece assistere dall’ufficio legale dell’associazione artigiani e ottenne in quarantott’ore la sostituzione gratuita del prodotto difettoso. «Anche nelle vertenze piccole bisogna farsi rispettare senza cedere all’arroganza» spiegò ai colleghi.', tr: { bn: 'সেই নথির জোরে তিনি কারিগর সমিতির আইনি দপ্তরের সহায়তা নিলেন এবং আটচল্লিশ ঘণ্টার মধ্যে ত্রুটিপূর্ণ পণ্যটির বিনামূল্যে পরিবর্তন আদায় করলেন। তিনি সহকর্মীদের বললেন, «ছোট বিবাদেও দাম্ভিকতায় নতি স্বীকার না করে নিজের মর্যাদা রক্ষা করতে জানতে হয়»।', en: 'Armed with that document, she had herself assisted by the artisans’ association legal office and secured a free replacement of the defective product within 48 hours. "Even in small disputes you must command respect without giving in," she told colleagues.' } },
      { it: 'La stessa fermezza serena caratterizzò mesi dopo anche un negoziato ben più ampio tra consorzi regionali.', tr: { bn: 'মাস কয়েক পর আঞ্চলিক কনসোর্টিয়ামগুলোর মধ্যকার অনেক বড় একটি সমঝোতা আলোচনাতেও একই শান্ত দৃঢ়তা দেখা গিয়েছিল।', en: 'The same calm firmness characterised a far broader negotiation between regional consortia months later.' } },
    ],
    wordGlossary: [
      { word: 'sostituzione gratuita', base: 'la sostituzione gratuita', tr: { bn: 'বিনামূল্যে পণ্য পরিবর্তন', en: 'free replacement' }, pos: 'noun' },
      { word: 'prodotto difettoso', base: 'il prodotto difettoso', tr: { bn: 'ত্রুটিপূর্ণ পণ্য', en: 'defective product' }, pos: 'noun' },
    ],
    grammarBreakdown: [
      { sentenceIt: 'Decise di non lasciarsi scoraggiare / Si fece inviare / Si fece assistere.', ruleTitle: { bn: 'প্রতিফলক প্রযোজক ক্রিয়া (farsi / lasciarsi)', en: 'Reflexive causatives' }, explanation: { bn: 'নিজের জন্য করানো (farsi inviare/assistere) এবং নিজেকে প্রভাবিত হতে না দেওয়া (non lasciarsi scoraggiare) যৌগিক কালে essere নেয়।', en: 'farsi/lasciarsi + infinitive take auxiliary essere in compound tenses.' }, grammarId: 'causativi-riflessivi' },
    ],
    mcq: [
      { id: 'stb2-32-q1', prompt: { bn: 'লুচিয়া কারিগরি তথ্যপত্র পরীক্ষা করে কী জানতে পারেন?', en: 'What did Lucia discover from the official technical sheet?' }, options: ['বিদ্যুৎ ভোল্টেজ কম ছিল', 'যন্ত্রটি একটি ত্রুটিপূর্ণ ব্যাচের অংশ ছিল', 'ওয়ারেন্টি শেষ হয়েছিল', 'ভুল কালি ব্যবহার হয়েছে'], answer: 1, explanation: { bn: 'si trattava di un lotto difettoso।', en: 'It belonged to a defective batch.' } },
    ],
    trueFalse: [
      { id: 'stb2-32-tf1', statementIt: 'Lucia ha dovuto pagare l’intero importo per la nuova stampante.', statement: { bn: 'নতুন প্রিন্টারের জন্য লুচিয়াকে পুরো দাম দিতে হয়েছিল।', en: 'Lucia had to pay full price for the replacement printer.' }, answer: false, explanation: { bn: 'ottenne la sostituzione gratuita।', en: 'She obtained a free replacement.' } },
    ],
    fillBlank: [
      { id: 'stb2-32-fb1', sentence: 'L’impresa ___ rilasciare il certificato di conformità.', options: ['ha fatto', 'si è fatta', 'si ha fatto', 'l’è fatta'], answer: 1, explanation: { bn: 'l’impresa (স্ত্রী একবচন) + farsi → si è fatta rilasciare।', en: 'Feminine subject l’impresa takes si è fatta.' } },
    ],
    shortAnswer: [
      { id: 'stb2-32-sa1', question: { bn: 'লুচিয়া কত সময়ের মধ্যে বিনামূল্যে নতুন প্রিন্টার পেলেন?', en: 'Within how many hours did Lucia obtain the free replacement?' }, sampleAnswerIt: 'In quarantott’ore.', keywords: ['quarantott', 'ore'] },
    ],
    practice: {
      retellPrompt: { bn: 'si è fatta... এবং non lasciarsi... ব্যবহার করে লুচিয়ার অভিজ্ঞতা লিখুন।', en: 'Summarise Lucia’s negotiation using farsi and lasciarsi.' },
      completeMissing: { promptIt: 'Il cliente ___ rimborsare l’intera somma.', hint: { bn: 'farsi (m. sg.): si è fatto', en: 'si è fatto' }, sampleIt: 'Il cliente si è fatto rimborsare l’intera somma.' },
      buildSimilar: { patternIt: 'Non ti lasciare ingannare dalle apparenze.', prompt: { bn: 'lasciarsi + ইনফিনিটিভ দিয়ে একটি উপদেশ লিখুন।', en: 'Write a piece of advice using lasciarsi + infinitive.' }, sampleIt: 'Non lasciarti intimidire quando difendi un diritto legittimo.' },
      altEndingPrompt: { bn: 'নতুন প্রিন্টার আসার পর কর্মশালার কাজের গতি বর্ণনা করুন।', en: 'Describe workshop operations once the new printer arrives.' },
    },
  }),

  buildStory({
    id: 'st-b2-33', level: 'B2', titleIt: 'Il diritto di recesso e le clausole',
    title: { bn: 'চুক্তি বাতিলের অধিকার ও অলংকারিক non', en: 'Right of withdrawal & pleonastic negation' },
    topic: { bn: 'বাণিজ্য আইন ও negazione pleonastica', en: 'Commercial law & pleonastic non' },
    grammarIds: ['negazione-pleonastica'],
    vocabKeys: ['w:B2:la transizione ecologica', 'w:B2:il diritto di recesso', 'w:B2:a meno che non'],
    paragraphs: [
      { it: 'La transizione ecologica delle reti domestiche è più complessa di quanto non appaia negli opuscoli pubblicitari. Quando Marco ordinò online un sistema di accumulo domestico, verificò subito i termini sul diritto di recesso.', tr: { bn: 'গৃহস্থালি বিদ্যুৎ নেটওয়ার্কের পরিবেশগত রূপান্তর বিজ্ঞাপনের পুস্তিকায় যতটা সহজ মনে হয় তার চেয়েও বেশি জটিল। মার্কো যখন অনলাইনে একটি গৃহস্থালি ব্যাটারি স্টোরেজ সিস্টেম অর্ডার করলেন, তখনই তিনি ক্রয় বাতিলের অধিকারের শর্তাবলি যাচাই করে নিলেন।', en: 'The ecological transition of home grids is more complex than appears in advertising brochures. When Marco ordered a home storage system online, he immediately checked the right-of-withdrawal terms.' } },
      { it: 'Il contratto resta pienamente annullabile entro quattordici giorni, a meno che il cliente non abbia richiesto espressamente l’avvio anticipato dell’installazione. Inoltre, il fornitore non addebita alcun costo finché l’apparecchio non viene effettivamente collaudato.', tr: { bn: 'চৌদ্দ দিনের মধ্যে চুক্তিটি সম্পূর্ণভাবে বাতিলযোগ্য থাকে, যদি না গ্রাহক স্পষ্টভাবে আগাম স্থাপনের অনুরোধ করে থাকেন। তাছাড়া, যন্ত্রটি প্রকৃতপক্ষে পরীক্ষিত না হওয়া পর্যন্ত সরবরাহকারী কোনো খরচ চার্জ করে না।', en: 'The contract remains fully cancellable within fourteen days, unless the customer has expressly requested early installation. Moreover, the supplier charges no fee until the device is actually tested and approved.' } },
      { it: 'Conoscere i propri diritti prima di firmare evita contenziosi più lunghi di quanto non si immagini.', tr: { bn: 'সই করার আগে নিজের অধিকার জানা মানুষ যতটা কল্পনা করে তার চেয়েও দীর্ঘ মামলা-মোকদ্দমা এড়াতে সাহায্য করে।', en: 'Knowing one’s rights before signing prevents disputes longer than one might imagine.' } },
    ],
    wordGlossary: [
      { word: 'transizione ecologica', base: 'la transizione ecologica', tr: { bn: 'পরিবেশগত রূপান্তর', en: 'ecological transition' }, pos: 'noun' },
      { word: 'diritto di recesso', base: 'il diritto di recesso', tr: { bn: 'বাতিল করার অধিকার', en: 'right of withdrawal' }, pos: 'noun' },
    ],
    grammarBreakdown: [
      { sentenceIt: 'Più complessa di quanto non appaia / a meno che non abbia richiesto / finché non viene collaudato.', ruleTitle: { bn: 'অলংকারিক non', en: 'Pleonastic negation' }, explanation: { bn: 'এখানে non নেতিবাচক অর্থ বদলায় না, বরং তুলনা (di quanto non), ব্যতিক্রম (a meno che non = যদি না) এবং সীমা (finché non = যতক্ষণ না) জোরালো করে।', en: 'Pleonastic non strengthens comparisons and marks "unless" / "until".' }, grammarId: 'negazione-pleonastica' },
    ],
    mcq: [
      { id: 'stb2-33-q1', prompt: { bn: 'কত দিনের মধ্যে ক্রয় বাতিলের অধিকার বহাল থাকে?', en: 'Within how many days does the right of withdrawal apply?' }, options: ['৭ দিন', '১৪ দিন', '৩০ দিন', '৯০ দিন'], answer: 1, explanation: { bn: 'entro quattordici giorni।', en: 'Within fourteen days.' } },
    ],
    trueFalse: [
      { id: 'stb2-33-tf1', statementIt: 'Il fornitore addebita subito l’intero prezzo prima del collaudo.', statement: { bn: 'সরবরাহকারী পরীক্ষার আগেই পুরো দাম কেটে নেয়।', en: 'The supplier charges the full price before testing.' }, answer: false, explanation: { bn: 'non addebita alcun costo finché non viene collaudato।', en: 'No charge is billed until testing.' } },
    ],
    fillBlank: [
      { id: 'stb2-33-fb1', sentence: 'L’abbonamento si rinnova automaticamente a meno che l’utente ___ disdetta.', options: ['non invii', 'invia', 'non invierà', 'inviava'], answer: 0, explanation: { bn: 'a meno che non + congiuntivo (invii)।', en: 'a meno che non governs the subjunctive invii.' } },
    ],
    shortAnswer: [
      { id: 'stb2-33-sa1', question: { bn: 'কখন চৌদ্দ দিনের মধ্যেও বাতিলের অধিকার প্রযোজ্য না হতে পারে?', en: 'When might the withdrawal exception apply?' }, sampleAnswerIt: 'Se il cliente ha richiesto espressamente l’avvio anticipato dell’installazione.', keywords: ['avvio', 'anticipato'] },
    ],
    practice: {
      retellPrompt: { bn: 'di quanto non, a meno che non এবং finché non দিয়ে নিয়মটি লিখুন।', en: 'Summarise the consumer rule using di quanto non, a meno che non, and finché non.' },
      completeMissing: { promptIt: 'Aspettiamo in sala ___ venga chiamato il nostro turno.', hint: { bn: 'যতক্ষণ না: finché non', en: 'finché non' }, sampleIt: 'Aspettiamo in sala finché non venga chiamato il nostro turno.' },
      buildSimilar: { patternIt: 'La procedura è più veloce di quanto non credessi.', prompt: { bn: 'di quanto non + congiuntivo দিয়ে একটি তুলনা লিখুন।', en: 'Write a clausal comparison using di quanto non.' }, sampleIt: 'La normativa è più chiara di quanto non sembrasse all’inizio.' },
      altEndingPrompt: { bn: 'যন্ত্রটি সফলভাবে পরীক্ষিত ও চালু হওয়ার পরের বিবরণ লিখুন।', en: 'Describe the system going online smoothly after inspection.' },
    },
  }),

  buildStory({
    id: 'st-b2-34', level: 'B2', titleIt: 'La ripresa e l’intervento chirurgico',
    title: { bn: 'চিকিৎসা, অর্থনৈতিক পুনরুদ্ধার ও কাল্পনিক তুলনা', en: 'Recovery, surgery & hypothetical comparisons' },
    topic: { bn: 'স্বাস্থ্য ও অর্থনীতি — come se / più di quanto', en: 'Health & comparisons with come se' },
    grammarIds: ['comparativi-analogici'],
    vocabKeys: ['w:B2:la ripresa economica', 'w:B2:ipotizzare', "w:B2:l'intervento chirurgico"],
    paragraphs: [
      { it: 'Dopo un delicato intervento chirurgico al ginocchio, l’atleta affrontò la riabilitazione con tale serenità da comportarsi come se non avesse mai subito un infortunio grave. Ogni mattina si allenava in piscina seguendo il protocollo del fisioterapista con disciplina impeccabile.', tr: { bn: 'হাঁটুতে একটি সূক্ষ্ম অস্ত্রোপচারের পর ক্রীড়াবিদ এমন প্রশান্তির সাথে পুনর্বাসন প্রক্রিয়ার মুখোমুখি হলেন যেন তাঁর কখনোই কোনো গুরুতর চোট লাগেনি। প্রতিদিন সকালে তিনি ফিজিওথেরাপিস্টের প্রোটোকল অনুসরণ করে সুইমিং পুলে নিখুঁত শৃঙ্খলায় অনুশীলন করতেন।', en: 'After delicate knee surgery, the athlete tackled rehabilitation with such calm as if she had never suffered a serious injury. Every morning she trained in the pool following the physiotherapist’s protocol with impeccable discipline.' } },
      { it: 'Il recupero muscolare fu molto più rapido di quanto i medici stessi avessero ipotizzato all’inizio della stagione. Allo stesso modo, la piccola azienda ortopedica che produceva i tutori registrò una ripresa economica più vivace del previsto grazie alle esportazioni.', tr: { bn: 'পেশির পুনর্গঠন মৌসুমের শুরুতে চিকিৎসকেরা নিজেরা যতটা অনুমান করেছিলেন তার চেয়ে অনেক দ্রুত হয়েছিল। একইভাবে, স্প্লিন্ট তৈরিকারী ছোট অর্থোপেডিক কোম্পানিটিও রপ্তানির কারণে প্রত্যাশার চেয়ে প্রাণবন্ত অর্থনৈতিক পুনরুদ্ধার অর্জন করেছে।', en: 'Muscle recovery was much faster than doctors themselves had hypothesised at the start of the season. Likewise, the small orthopaedic firm making the braces recorded a livelier economic recovery than expected thanks to exports.' } },
      { it: 'Costanza e ricerca scientifica avevano trasformato un ostacolo critico in un punto di rilancio.', tr: { bn: 'অধ্যবসায় এবং বৈজ্ঞানিক গবেষণা একটি কঠিন বাধাকে নতুন সূচনার বিন্দুতে পরিণত করেছিল।', en: 'Perseverance and scientific research had turned a critical hurdle into a springboard.' } },
    ],
    wordGlossary: [
      { word: 'intervento chirurgico', base: "l'intervento chirurgico", tr: { bn: 'অস্ত্রোপচার', en: 'surgery' }, pos: 'noun' },
      { word: 'ipotizzare', base: 'ipotizzare', tr: { bn: 'অনুমান / প্রকল্প করা', en: 'to hypothesise' }, pos: 'verb' },
      { word: 'ripresa economica', base: 'la ripresa economica', tr: { bn: 'অর্থনৈতিক পুনরুদ্ধার', en: 'economic recovery' }, pos: 'noun' },
    ],
    grammarBreakdown: [
      { sentenceIt: 'Come se non avesse mai subito / più rapido di quanto i medici avessero ipotizzato.', ruleTitle: { bn: 'come se ও di quanto + congiuntivo', en: 'Subjunctive in come se and clausal comparisons' }, explanation: { bn: 'come se সর্বদা congiuntivo imperfetto বা trapassato নেয়; di quanto-ও অতীত/অবাস্তব তুলনায় congiuntivo নেয়।', en: 'come se and clausal inequalities govern the subjunctive.' }, grammarId: 'comparativi-analogici' },
    ],
    mcq: [
      { id: 'stb2-34-q1', prompt: { bn: 'ক্রীড়াবিদের পুনর্বাসন প্রক্রিয়া কেমন হয়েছিল?', en: 'How fast was the athlete’s recovery?' }, options: ['অনেক ধীরগতির', 'চিকিৎসকদের অনুমানের চেয়ে অনেক দ্রুত', 'এক বছর স্থগিত', 'অসফল'], answer: 1, explanation: { bn: 'molto più rapido di quanto i medici avessero ipotizzato।', en: 'Much faster than doctors had hypothesised.' } },
    ],
    trueFalse: [
      { id: 'stb2-34-tf1', statementIt: 'L’azienda ortopedica ha migliorato i ricavi grazie alle esportazioni.', statement: { bn: 'রপ্তানির কারণে অর্থোপেডিক কোম্পানিটির আয় বেড়েছে।', en: 'The orthopaedic company improved thanks to exports.' }, answer: true, explanation: { bn: 'grazie alle esportazioni।', en: 'True.' } },
    ],
    fillBlank: [
      { id: 'stb2-34-fb1', sentence: 'Il paziente parlava con tranquillità, come se non ___ alcuna paura.', options: ['ha', 'avesse', 'avrà', 'abbia'], answer: 1, explanation: { bn: 'come se + congiuntivo imperfetto (avesse)।', en: 'come se requires imperfect subjunctive avesse.' } },
    ],
    shortAnswer: [
      { id: 'stb2-34-sa1', question: { bn: 'ক্রীড়াবিদ প্রতিদিন সকালে কোথায় অনুশীলন করতেন?', en: 'Where did the athlete train every morning?' }, sampleAnswerIt: 'In piscina seguendo il protocollo del fisioterapista.', keywords: ['piscina', 'fisioterapista'] },
    ],
    practice: {
      retellPrompt: { bn: 'come se ও più... di quanto... ব্যবহার করে গল্পটি লিখুন।', en: 'Retell the recovery story using come se and più… di quanto…' },
      completeMissing: { promptIt: 'L’esito fu migliore di quanto tutti ___.', hint: { bn: 'sperare congiuntivo trapassato: avessero sperato', en: 'avessero sperato' }, sampleIt: 'L’esito fu migliore di quanto tutti avessero sperato.' },
      buildSimilar: { patternIt: 'Agisce come se conoscesse già la risposta.', prompt: { bn: 'come se + congiuntivo দিয়ে একটি বাক্য লিখুন।', en: 'Write a comparison with come se + subjunctive.' }, sampleIt: 'Lavorava al prototipo come se il tempo non fosse mai un limite.' },
      altEndingPrompt: { bn: 'মৌসুমের প্রথম প্রতিযোগিতায় ক্রীড়াবিদের প্রত্যাবর্তন লিখুন।', en: 'Describe the athlete’s return to her first race.' },
    },
  }),

  buildStory({
    id: 'st-b2-35', level: 'B2', titleIt: 'Una stagione celeberrima al teatro lirico',
    title: { bn: 'অপেরা থিয়েটারে বিখ্যাত মৌসুম ও তৎসম সুপারলেটিভ', en: 'A celebrated opera season & learned superlatives' },
    topic: { bn: 'শিল্প ও সংগীত — superlativo sintetico', en: 'Arts & learned superlatives' },
    grammarIds: ['superlativo-sintetico'],
    vocabKeys: ["w:B2:il direttore d'orchestra", "w:B2:l'opera lirica"],
    paragraphs: [
      { it: 'Il celeberrimo teatro lirico della città inaugurò la stagione invernale con un nuovo allestimento di un’opera lirica ottocentesca. Sul podio salì un direttore d’orchestra celebre per la cura meticolosa della partitura e per l’integerrima fedeltà al testo originale.', tr: { bn: 'শহরের অতি প্রসিদ্ধ অপেরা থিয়েটারটি উনিশ শতকের একটি অপেরার নতুন মঞ্চায়ন দিয়ে শীতকালীন মৌসুম উদ্বোধন করল। মঞ্চে উঠলেন এমন একজন অর্কেস্ট্রা পরিচালক যিনি স্বরলিপির সূক্ষ্ম পরিচর্যা এবং মূল পাঠ্যের প্রতি অবিচল বিশ্বস্ততার জন্য সুপরিচিত।', en: 'The city’s exceedingly famous opera house opened the winter season with a new production of a nineteenth-century opera. Onto the podium stepped a conductor renowned for meticulous care of the score and utterly upright fidelity to the original text.' } },
      { it: 'Persino due critici musicali tradizionalmente acerrimi avversari sulle pagine dei quotidiani espressero un giudizio unanime sulla prova generale. La platea risultava stracolma di giovani studenti provenienti dal conservatorio.', tr: { bn: 'এমনকি সংবাদপত্রের পাতায় ঐতিহ্যগতভাবে ঘোর প্রতিদ্বন্দ্বী দুই সংগীত সমালোচকও চূড়ান্ত মহড়ার ওপর সর্বসম্মত প্রশংসাসূচক মত দেন। দর্শকসারি সংগীত একাডেমির তরুণ শিক্ষার্থীদের ভিড়ে কানায় কানায় পূর্ণ ছিল।', en: 'Even two music critics who were traditionally bitter adversaries in newspaper columns expressed a unanimous judgement on the dress rehearsal. The stalls were packed with young students from the conservatory.' } },
      { it: 'Al calare del sipario, l’applauso prolungato premiò mesi di prove dietro le quinte.', tr: { bn: 'পর্দা নামার সাথে সাথে দীর্ঘ করতালি নেপথ্যের মাসের পর মাস ধরে চলা মহড়াকে পুরস্কৃত করল।', en: 'As the curtain fell, prolonged applause rewarded months of rehearsals behind the scenes.' } },
    ],
    wordGlossary: [
      { word: "direttore d'orchestra", base: "il direttore d'orchestra", tr: { bn: 'অর্কেস্ট্রা পরিচালক', en: 'orchestra conductor' }, pos: 'noun' },
      { word: 'opera lirica', base: "l'opera lirica", tr: { bn: 'অপেরা সংগীতনাট্য', en: 'opera' }, pos: 'noun' },
    ],
    grammarBreakdown: [
      { sentenceIt: 'Il celeberrimo teatro / l’integerrima fedeltà / acerrimi avversari / stracolma di studenti.', ruleTitle: { bn: 'তৎসম সুপারলেটিভ (-errimo) ও উপসর্গ', en: 'Learned superlatives & prefixes' }, explanation: { bn: 'celebre → celeberrimo, integro → integerrimo, acre → acerrimo এবং উপসর্গ stra- (stracolma)।', en: 'Classical -errimo superlatives and intensifying prefix stra-.' }, grammarId: 'superlativo-sintetico' },
    ],
    mcq: [
      { id: 'stb2-35-q1', prompt: { bn: 'দর্শকসারিতে কোন শিক্ষার্থীদের ভিড় ছিল?', en: 'Who filled the stalls at the theatre?' }, options: ['প্রকৌশল শিক্ষার্থী', 'সংগীত একাডেমির (কনজারভেটরির) তরুণ শিক্ষার্থী', 'আইনজীবী', 'খেলোয়াড়'], answer: 1, explanation: { bn: 'giovani studenti provenienti dal conservatorio।', en: 'Young students from the conservatory.' } },
    ],
    trueFalse: [
      { id: 'stb2-35-tf1', statementIt: 'I due critici rivali hanno bocciato lo spettacolo all’unanimità.', statement: { bn: 'প্রতিদ্বন্দ্বী দুই সমালোচক সর্বসম্মতিক্রমে পরিবেশনাটি প্রত্যাখ্যান করেছেন।', en: 'The two rival critics unanimously panned the show.' }, answer: false, explanation: { bn: 'তাঁরা সর্বসম্মত ইতিবাচক রায় দিয়েছিলেন।', en: 'They praised the dress rehearsal unanimously.' } },
    ],
    fillBlank: [
      { id: 'stb2-35-fb1', sentence: 'Il magistrato è noto per la sua condotta ___.', options: ['integrissima', 'integerrima', 'più integra', 'straintegra'], answer: 1, explanation: { bn: 'integro-এর প্রমিত সুপারলেটিভ integerrima।', en: 'Superlative of integro is integerrimo/a.' } },
    ],
    shortAnswer: [
      { id: 'stb2-35-sa1', question: { bn: 'অর্কেস্ট্রা পরিচালক কীসের জন্য সুপরিচিত ছিলেন?', en: 'What was the conductor renowned for?' }, sampleAnswerIt: 'Per la cura meticolosa della partitura e la fedeltà al testo originale.', keywords: ['partitura', 'fedeltà'] },
    ],
    practice: {
      retellPrompt: { bn: 'celeberrimo, integerrimo ও stracolmo ব্যবহার করে অপেরা রাতের বিবরণ লিখুন।', en: 'Summarise the opera night using -errimo superlatives and stra- prefixes.' },
      completeMissing: { promptIt: 'Dopo la tempesta l’aria alpina era ___.', hint: { bn: 'salubre → saluberrima', en: 'saluberrima' }, sampleIt: 'Dopo la tempesta l’aria alpina era saluberrima.' },
      buildSimilar: { patternIt: 'Quel museo conserva un manoscritto celeberrimo.', prompt: { bn: '-errimo বা উপসর্গ iper-/ultra- দিয়ে একটি বাক্য লিখুন।', en: 'Write a sentence with an -errimo superlative or ultra-/iper- prefix.' }, sampleIt: 'La sala era stracolma per la conferenza del celeberrimo storico.' },
      altEndingPrompt: { bn: 'পরদিন সকালের পত্রিকার সমালোচনা অংশ লিখুন।', en: 'Write an excerpt of the next morning’s newspaper review.' },
    },
  }),
];
