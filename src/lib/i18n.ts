import type { ExplainLang, Tr } from '../content/types';
import { useProgress } from '../state/ProgressContext';

/** Interface strings. Italian learning content lives in src/content, not here. */
const STRINGS = {
  tagline: {
    bn: 'Learn Italian. Live Italian.',
    en: 'Learn Italian. Live Italian.',
    it: 'Impara l’italiano. Vivi l’italiano.',
  },
  greetingSub: {
    bn: 'আজকের {n} মিনিটের ইতালিয়ান শেখা শুরু করি?',
    en: 'Ready for today’s {n} minutes of Italian?',
    it: 'Pronto per i {n} minuti di italiano di oggi?',
  },
  minutes: { bn: 'মিনিট', en: 'min', it: 'min' },
  dailyGoal: { bn: 'দৈনিক লক্ষ্য', en: 'Daily goal', it: 'Obiettivo giornaliero' },
  goalReached: { bn: 'আজকের লক্ষ্য পূর্ণ!', en: 'Goal reached today!', it: 'Obiettivo di oggi raggiunto!' },
  continueLearning: { bn: 'শেখা চালিয়ে যান', en: 'Continue learning', it: 'Continua a imparare' },
  todaysPlan: { bn: 'আজকের শেখার পরিকল্পনা', en: 'Today’s learning plan', it: 'Piano di studio di oggi' },
  home: { bn: 'হোম', en: 'Home', it: 'Home' },
  courses: { bn: 'কোর্স', en: 'Courses', it: 'Corsi' },
  practice: { bn: 'অনুশীলন', en: 'Practice', it: 'Pratica' },
  profile: { bn: 'প্রোফাইল', en: 'Profile', it: 'Profilo' },
  coursesSub: {
    bn: 'A1 থেকে B2 পর্যন্ত সম্পূর্ণ ইতালিয়ান কোর্স',
    en: 'Complete Italian course from A1 to B2',
    it: 'Corso completo di italiano da A1 a B2',
  },
  lessonsDone: { bn: '{d}/{t} পাঠ সম্পন্ন', en: '{d} of {t} lessons done', it: '{d} di {t} lezioni completate' },
  unlockAfter: {
    bn: '{level} সম্পূর্ণ করলে আনলক হবে',
    en: 'Unlocks after completing {level}',
    it: 'Si sblocca dopo il livello {level}',
  },
  inPreparation: { bn: 'কনটেন্ট তৈরি হচ্ছে', en: 'Content in preparation', it: 'Contenuti in preparazione' },
  unit: { bn: 'ইউনিট', en: 'Unit', it: 'Unità' },
  lesson: { bn: 'পাঠ', en: 'Lesson', it: 'Lezione' },
  locked: { bn: 'আগের পাঠ শেষ করুন', en: 'Finish the previous lesson', it: 'Completa la lezione precedente' },
  completed: { bn: 'সম্পন্ন', en: 'Completed', it: 'Completato' },
  phrases: { bn: 'বাক্যাংশ', en: 'Phrases', it: 'Frasi' },
  grammar: { bn: 'ব্যাকরণ', en: 'Grammar', it: 'Grammatica' },
  dialogue: { bn: 'সংলাপ', en: 'Dialogue', it: 'Dialogo' },
  quiz: { bn: 'কুইজ', en: 'Quiz', it: 'Quiz' },
  objectives: { bn: 'এই পাঠে আপনি শিখবেন', en: 'In this lesson you will', it: 'In questa lezione imparerai' },
  keyPhrases: { bn: 'মূল বাক্যাংশ', en: 'Key phrases', it: 'Frasi chiave' },
  pronTip: { bn: 'উচ্চারণ টিপস', en: 'Pronunciation tip', it: 'Consiglio di pronuncia' },
  next: { bn: 'পরবর্তী ধাপে যান', en: 'Next step', it: 'Prossimo passo' },
  playAll: { bn: 'পুরো সংলাপ শুনুন', en: 'Play whole dialogue', it: 'Ascolta tutto il dialogo' },
  stop: { bn: 'থামান', en: 'Stop', it: 'Ferma' },
  showTranslation: { bn: 'অনুবাদ দেখান', en: 'Show translation', it: 'Mostra traduzione' },
  hideTranslation: { bn: 'অনুবাদ লুকান', en: 'Hide translation', it: 'Nascondi traduzione' },
  check: { bn: 'যাচাই করুন', en: 'Check', it: 'Verifica' },
  continue: { bn: 'চালিয়ে যান', en: 'Continue', it: 'Continua' },
  correct: { bn: 'সঠিক!', en: 'Correct!', it: 'Corretto!' },
  incorrect: { bn: 'সঠিক নয়', en: 'Not quite', it: 'Non proprio' },
  correctAnswer: { bn: 'সঠিক উত্তর', en: 'Correct answer', it: 'Risposta corretta' },
  quizPassed: { bn: 'অভিনন্দন! পাঠ সম্পন্ন হয়েছে', en: 'Well done! Lesson completed', it: 'Ottimo! Lezione completata' },
  quizFailed: {
    bn: 'পাস করতে কমপক্ষে ৭০% দরকার। আবার চেষ্টা করুন।',
    en: 'You need at least 70% to pass. Try again.',
    it: 'Serve almeno il 70% per superare. Riprova.',
  },
  score: { bn: 'স্কোর', en: 'Score', it: 'Punteggio' },
  retry: { bn: 'আবার চেষ্টা', en: 'Try again', it: 'Riprova' },
  backToCourses: { bn: 'কোর্সে ফিরুন', en: 'Back to courses', it: 'Torna ai corsi' },
  practiceHub: { bn: 'প্র্যাকটিস হাব', en: 'Practice Hub', it: 'Centro di pratica' },
  practiceSub: { bn: 'ভাষার দক্ষতা বাড়ানোর জন্য বিভিন্ন অনুশীলন', en: 'Exercises to build every skill', it: 'Esercizi per ogni abilità' },
  comingSoon: { bn: 'শীঘ্রই আসছে', en: 'Coming soon', it: 'In arrivo' },
  myProfile: { bn: 'আমার প্রোফাইল', en: 'My Profile', it: 'Il mio profilo' },
  learner: { bn: 'শিক্ষার্থী', en: 'Learner', it: 'Studente' },
  explainLang: { bn: 'ব্যাখ্যার ভাষা', en: 'Explanation language', it: 'Lingua di interfaccia' },
  myProgress: { bn: 'আমার অগ্রগতি', en: 'My progress', it: 'I miei progressi' },
  saved: { bn: 'সংরক্ষিত বাক্যাংশ', en: 'Saved phrases', it: 'Frasi salvate' },
  about: { bn: 'অ্যাপ সম্পর্কে', en: 'About the app', it: 'Informazioni sull’app' },
  resetProgress: { bn: 'অগ্রগতি মুছে ফেলুন', en: 'Reset progress', it: 'Azzera progressi' },
  resetConfirm: {
    bn: 'সত্যিই সব অগ্রগতি মুছে ফেলবেন? এটি ফেরানো যাবে না।',
    en: 'Really delete all progress? This cannot be undone.',
    it: 'Cancellare davvero tutti i progressi? L’operazione non è reversibile.',
  },
  noDue: {
    bn: 'এখন রিভিশনের কোনো কার্ড নেই। নতুন পাঠের বাক্যাংশ দেখলে কার্ড যোগ হবে।',
    en: 'No cards due. Cards are added when you study a lesson’s phrases.',
    it: 'Nessuna carta da ripassare. Studia le frasi di una lezione per aggiungerne.',
  },
  remembered: { bn: 'মনে আছে', en: 'I knew it', it: 'La sapevo' },
  forgot: { bn: 'ভুলে গেছি', en: 'Forgot', it: 'Dimenticata' },
  reveal: { bn: 'উত্তর দেখুন', en: 'Show answer', it: 'Mostra risposta' },
  sessionDone: { bn: 'রিভিশন সেশন শেষ!', en: 'Review session finished!', it: 'Sessione di ripasso completata!' },
  noMistakes: { bn: 'কোনো ভুল জমা নেই — দারুণ!', en: 'No outstanding mistakes — great!', it: 'Nessun errore in sospeso — ottimo!' },
  start: { bn: 'শুরু করুন', en: 'Start', it: 'Inizia' },
  ttsUnavailable: {
    bn: 'এই ডিভাইসে ইতালিয়ান ভয়েস পাওয়া যায়নি',
    en: 'Italian voice not available on this device',
    it: 'Voce italiana non disponibile su questo dispositivo',
  },
  storageWarning: {
    bn: 'অগ্রগতি সংরক্ষণ করা যাচ্ছে না — ডিভাইসের স্টোরেজ পরীক্ষা করুন',
    en: 'Progress can’t be saved — check device storage',
    it: 'Impossibile salvare i progressi — controlla la memoria del dispositivo',
  },
  wordBank: { bn: 'শব্দভাণ্ডার', en: 'Vocabulary', it: 'Vocabolario' },
  wordBankSub: { bn: '{level}: {n}টি শব্দ', en: '{level}: {n} words', it: '{level}: {n} parole' },
  searchWords: {
    bn: 'ইতালিয়ান বা বাংলায় খুঁজুন',
    en: 'Search Italian or English',
    it: 'Cerca in italiano',
  },
  all: { bn: 'সব', en: 'All', it: 'Tutto' },
  wordsShown: { bn: '{n}টি শব্দ', en: '{n} words', it: '{n} parole' },
  addAllCards: { bn: 'সব কার্ডে যোগ ({n})', en: 'Add all to cards ({n})', it: 'Aggiungi tutto ({n})' },
  flashcards: { bn: 'ফ্ল্যাশকার্ড', en: 'Flashcards', it: 'Flashcard' },
  inDeck: { bn: 'কার্ডে আছে', en: 'In your cards', it: 'Nelle tue carte' },
  addCard: { bn: 'কার্ডে যোগ করুন', en: 'Add to cards', it: 'Aggiungi alle carte' },
  sentences: { bn: 'বাক্য', en: 'Sentences', it: 'Frasi' },
  sentencesSub: { bn: '{level}: {n}টি নমুনা বাক্য', en: '{level}: {n} model sentences', it: '{level}: {n} frasi modello' },
  puzzle: { bn: 'বাক্য গঠন পাজল', en: 'Sentence puzzle', it: 'Puzzle di frasi' },
  puzzleSub: {
    bn: 'শব্দ সাজিয়ে সঠিক বাক্য বানান',
    en: 'Arrange the words into a correct sentence',
    it: 'Ordina le parole per formare una frase corretta',
  },
  phrasesExpr: { bn: 'প্রবাদ ও এক্সপ্রেশন (B1)', en: 'Idioms & expressions (B1)', it: 'Modi di dire ed espressioni (B1)' },
  phrasesExprSub: { bn: '{n}টি প্রচলিত ইতালিয়ান এক্সপ্রেশন', en: '{n} common Italian expressions', it: '{n} espressioni italiane comuni' },
  allGrammar: { bn: 'সব গ্রামার', en: 'All grammar', it: 'Tutta la grammatica' },
  newRound: { bn: 'নতুন রাউন্ড', en: 'New round', it: 'Nuovo turno' },
  buildSentence: { bn: 'ইতালিয়ানে বাক্যটি গঠন করুন', en: 'Build this sentence in Italian', it: 'Costruisci questa frase in italiano' },
  yourAnswer: { bn: 'আপনার উত্তর', en: 'Your answer', it: 'La tua risposta' },
  tapWords: { bn: 'নিচের শব্দগুলো ক্রমানুসারে চাপুন', en: 'Tap the words below in order', it: 'Tocca le parole nell’ordine giusto' },
  openGrammar: { bn: 'গ্রামার পাঠ খুলুন', en: 'Open grammar lesson', it: 'Apri lezione di grammatica' },
  hint: { bn: 'ইঙ্গিত', en: 'Hint', it: 'Suggerimento' },
  grammarSub: { bn: '{level}: {n}টি গ্রামার টপিক', en: '{level}: {n} grammar topics', it: '{level}: {n} argomenti di grammatica' },
  examplesCount: { bn: '{n}টি উদাহরণ', en: '{n} examples', it: '{n} esempi' },
  examples: { bn: 'উদাহরণ বাক্য', en: 'Example sentences', it: 'Frasi di esempio' },
  wordsLabel: { bn: 'শব্দ', en: 'words', it: 'parole' },
  sentencesLabel: { bn: 'বাক্য', en: 'sentences', it: 'frasi' },
  levelLockedNote: {
    bn: 'এই লেভেলের পাঠ আগের লেভেল শেষ হলে খুলবে। শব্দ ও বাক্য এখনই দেখতে পারেন।',
    en: 'Lessons open after finishing the previous level. You can browse words and sentences now.',
    it: 'Le lezioni si sbloccano completando il livello precedente. Puoi già consultare parole e frasi.',
  },
  stories: { bn: 'গল্পভিত্তিক শিক্ষা', en: 'Stories', it: 'Storie' },
  storiesSub: {
    bn: 'গল্প পড়ে গ্রামার, শব্দ ও বোঝাপড়া শিখুন',
    en: 'Learn grammar, vocabulary and comprehension through stories',
    it: 'Impara grammatica, lessico e comprensione attraverso le storie',
  },
  listeningLab: { bn: 'লিসেনিং ল্যাব', en: 'Listening Lab', it: 'Laboratorio d’ascolto' },
  listeningLabSub: {
    bn: 'সংলাপ, ঘোষণা ও আলোচনা শুনে কুইজ দিন (ডিভাইস TTS)',
    en: 'Listen to dialogues, announcements & quizzes (device TTS)',
    it: 'Ascolta dialoghi e annunci e rispondi ai quiz (TTS)',
  },
  readingAcademy: { bn: 'রিডিং একাডেমি', en: 'Reading Academy', it: 'Accademia di lettura' },
  readingAcademySub: {
    bn: 'গল্প, চিঠি, ইমেইল, বিজ্ঞপ্তি ও প্রবন্ধ পড়ুন',
    en: 'Read stories, letters, emails, notices & essays',
    it: 'Leggi storie, lettere, email, avvisi e articoli',
  },
  writingAcademy: { bn: 'রাইটিং একাডেমি', en: 'Writing Academy', it: 'Accademia di scrittura' },
  writingAcademySub: {
    bn: 'নির্দেশনা মেনে লিখুন এবং রুব্রিক চেক পান',
    en: 'Practise guided writing with structure & keyword checks',
    it: 'Esercitati nella scrittura guidata con controllo struttura',
  },
  speakingStudio: { bn: 'স্পিকিং ও উচ্চারণ', en: 'Speaking & Pronunciation', it: 'Parlato e pronuncia' },
  speakingStudioSub: {
    bn: 'শুনে বলুন, মাইক্রোফোন দিয়ে উচ্চারণ মিলিয়ে নিন',
    en: 'Listen, repeat & check words using your microphone',
    it: 'Ascolta, ripeti e controlla la pronuncia col microfono',
  },
  assessmentsTitle: { bn: 'ইউনিট ও লেভেল পরীক্ষা', en: 'Unit & Level Assessments', it: 'Verifiche di unità e livello' },
  normalSpeed: { bn: 'স্বাভাবিক গতি', en: 'Normal speed', it: 'Velocità normale' },
  slowSpeed: { bn: 'ধীর গতি (০.৭x)', en: 'Slow (0.7x)', it: 'Lento (0.7x)' },
  ttsNotice: {
    bn: 'ব্রাউজার/ডিভাইস TTS ভয়েস ব্যবহার করে অডিও চালানো হচ্ছে',
    en: 'Audio is generated via device/browser Italian TTS',
    it: 'Audio generato tramite sintesi vocale italiana',
  },
  showTranscript: { bn: 'ট্রান্সক্রিপ্ট দেখুন', en: 'Show transcript', it: 'Mostra trascrizione' },
  hideTranscript: { bn: 'ট্রান্সক্রিপ্ট লুকান', en: 'Hide transcript', it: 'Nascondi trascrizione' },
  bookmark: { bn: 'বুকমার্ক', en: 'Bookmark', it: 'Segnalibro' },
  bookmarked: { bn: 'বুকমার্ক করা হয়েছে', en: 'Bookmarked', it: 'Salvato nei segnalibri' },
  markDone: { bn: 'সম্পন্ন হিসেবে চিহ্নিত করুন', en: 'Mark completed', it: 'Segna come completato' },
  glossaryHint: {
    bn: 'শব্দার্থ জানতে হাইলাইট করা শব্দে চাপুন',
    en: 'Tap a glossary word to inspect & save to flashcards',
    it: 'Tocca una parola del glossario per vederla e salvarla',
  },
  grammarBreakdown: { bn: 'গল্পের গ্রামার বিশ্লেষণ', en: 'Story grammar breakdown', it: 'Analisi grammaticale' },
  comprehensionCheck: { bn: 'বোঝাপড়া যাচাই', en: 'Comprehension check', it: 'Verifica di comprensione' },
  storyPractice: { bn: 'সৃজনশীল অনুশীলন', en: 'Writing & retell practice', it: 'Pratica creativa' },
  ruleSummary: { bn: 'মূল নিয়ম', en: 'Core rule', it: 'Regola principale' },
  exceptionsLabel: { bn: 'ব্যতিক্রম ও সতর্কতা', en: 'Exceptions & notes', it: 'Eccezioni e note' },
  commonMistakes: { bn: 'সাধারণ ভুল', en: 'Common mistakes', it: 'Errori comuni' },
  quickPractice: { bn: 'তাৎক্ষণিক অনুশীলন', en: 'Quick practice', it: 'Pratica rapida' },
  relatedStories: { bn: 'সম্পর্কিত গল্প', en: 'Related stories', it: 'Storie correlate' },
  relatedVocab: { bn: 'সম্পর্কিত শব্দ', en: 'Related vocabulary', it: 'Vocabolario correlato' },
  evaluateWriting: { bn: 'রুব্রিক যাচাই করুন', en: 'Check structure & keywords', it: 'Verifica struttura e parole chiave' },
  showModelAnswer: { bn: 'মডেল উত্তর দেখুন', en: 'Compare model answer', it: 'Mostra risposta modello' },
  hideModelAnswer: { bn: 'মডেল উত্তর লুকান', en: 'Hide model answer', it: 'Nascondi risposta modello' },
  startMic: { bn: 'মাইক্রোফোনে বলুন', en: 'Speak into mic', it: 'Parla al microfono' },
  stopMic: { bn: 'রেকর্ডিং থামান', en: 'Stop listening', it: 'Ferma microfono' },
  micUnsupported: {
    bn: 'এই ব্রাউজারে স্পিচ রিকগনিশন সমর্থিত নয় — মডেল অডিও শুনে নিজে মিলিয়ে নিন।',
    en: 'Speech recognition is unavailable in this browser — listen to the model and self-check below.',
    it: 'Riconoscimento vocale non supportato — ascolta il modello e confronta.',
  },
  takeAssessment: { bn: 'পরীক্ষা শুরু করুন', en: 'Start assessment', it: 'Inizia verifica' },
  passedLabel: { bn: 'উত্তীর্ণ', en: 'Passed', it: 'Superato' },
  a1AcademyTitle: { bn: 'A1 সম্পূর্ণ লার্নিং একাডেমি', en: 'A1 Complete Learning Academy', it: 'Accademia Completa A1' },
  a1AcademySub: { bn: 'ধাপে ধাপে CEFR A1 কাঠামোবদ্ধ পাঠ্যক্রম', en: 'Structured CEFR A1 step-by-step path', it: 'Percorso strutturato CEFR A1' },
  academyStudiedOf: { bn: 'সম্পন্ন: {done}/{total} · বাকি: {rem}', en: 'Studied: {done}/{total} · Remaining: {rem}', it: 'Studiati: {done}/{total} · Rimanenti: {rem}' },
  academyUnlockExamHint: {
    bn: 'সেকশন পরীক্ষা খুলতে সব {total}টি আইটেম অধ্যয়ন করুন ({rem}টি বাকি)।',
    en: 'Study all {total} items to unlock the section exam ({rem} remaining).',
    it: 'Studia tutti i {total} elementi per sbloccare l’esame ({rem} rimanenti).',
  },
  academyExamReady: {
    bn: 'সব আইটেম অধ্যয়ন সম্পন্ন! এখন পরীক্ষা দিতে পারেন।',
    en: 'All required items studied! You are ready for the section exam.',
    it: 'Tutti gli elementi studiati! Sei pronto per l’esame.',
  },
  academyModuleLocked: {
    bn: 'এই মডিউলটি আনলক করতে আগের মডিউলের পরীক্ষায় পাস করুন।',
    en: 'Pass the previous module exam to unlock this module.',
    it: 'Supera l’esame del modulo precedente per sbloccare questo modulo.',
  },
  academyPassRule: {
    bn: 'পাস করতে সর্বোচ্চ {max}টি ভুল গ্রহণযোগ্য ({total} প্রশ্নের মধ্যে)।',
    en: 'Maximum {max} incorrect answers allowed to pass ({total} questions).',
    it: 'Massimo {max} errori consentiti su {total} domande.',
  },
  academyExamPassed: {
    bn: 'অভিনন্দন! মডিউল সম্পন্ন হয়েছে ও পরবর্তী ধাপ আনলক হয়েছে।',
    en: 'Exam passed! Module completed and next module unlocked.',
    it: 'Esame superato! Modulo completato e successivo sbloccato.',
  },
  academyExamFailed: {
    bn: 'পাস হয়নি — শেখার অংশটি আবার মনোযোগ দিয়ে দেখুন এবং নতুন প্রশ্নে পুনরায় পরীক্ষা দিন।',
    en: 'Not passed — review the learning content carefully and retake with a fresh set of questions.',
    it: 'Non superato — rivedi il materiale di studio e riprova con nuove domande.',
  },
  academyReviewContent: { bn: 'পাঠ পুনরায় দেখুন', en: 'Review learning content', it: 'Rivedi i contenuti' },
  academyRetakeExam: { bn: 'নতুন প্রশ্নে পুনরায় পরীক্ষা', en: 'Retake randomized exam', it: 'Ripeti esame casuale' },
  academyNextModule: { bn: 'পরবর্তী মডিউলে যান', en: 'Go to next module', it: 'Vai al modulo successivo' },
  academyHistoryTitle: { bn: 'পূর্ববর্তী পরীক্ষার ফলাফল', en: 'Attempt history', it: 'Cronologia tentativi' },
  academyBestScore: { bn: 'সর্বোচ্চ স্কোর', en: 'Best score', it: 'Punteggio migliore' },
  academyFailedAttempts: { bn: 'অকৃতকার্য চেষ্টা', en: 'Failed attempts', it: 'Tentativi falliti' },
  academyMarkStudied: { bn: 'অধ্যয়ন সম্পন্ন চিহ্নিত করুন', en: 'Mark as studied', it: 'Segna come studiato' },
  academyStudiedBadge: { bn: 'অধ্যয়ন সম্পন্ন', en: 'Studied', it: 'Studiato' },
  academyPhaseNext: { bn: 'পরবর্তী ধাপে যুক্ত হবে (Phase {phase})', en: 'Coming in Phase {phase}', it: 'In arrivo nella Fase {phase}' },
  startLearning: { bn: 'শেখা শুরু করুন', en: 'Start Learning', it: 'Inizia a imparare' },
  activeCourse: { bn: 'সক্রিয় কোর্স', en: 'Active course', it: 'Corso attivo' },
  setActiveCourse: { bn: 'সক্রিয় করুন', en: 'Set active', it: 'Attiva corso' },
  learningPath: { bn: 'লার্নিং পাথ', en: 'Learning Path', it: 'Percorso di studio' },
  modulesProgress: { bn: '{done}/{total} মডিউল সম্পন্ন', en: '{done}/{total} modules completed', it: '{done}/{total} moduli completati' },
  lessonsProgress: { bn: '{done}/{total} পাঠ সম্পন্ন', en: '{done}/{total} lessons completed', it: '{done}/{total} lezioni completate' },
  currentLabel: { bn: 'চলমান', en: 'Current', it: 'Attuale' },
  lockedLabel: { bn: 'লকড', en: 'Locked', it: 'Bloccato' },
  activeLabel: { bn: 'সক্রিয়', en: 'Active', it: 'Attivo' },
  nextUpLabel: { bn: 'পরবর্তী ধাপ', en: 'Next up', it: 'Prossimo' },
  openLearningHub: { bn: 'লার্নিং হাব খুলুন', en: 'Open Learning Hub', it: 'Apri centro studi' },
  unlockAfterPrevModule: { bn: 'আগের মডিউল সম্পন্ন করলে খুলবে', en: 'Complete the previous module to unlock', it: 'Completa il modulo precedente per sbloccare' },
  unlockAfterPrevLesson: { bn: 'আগের পাঠ সম্পন্ন করলে খুলবে', en: 'Complete the previous lesson to unlock', it: 'Completa la lezione precedente per sbloccare' },
  currentModuleLabel: { bn: 'বর্তমান মডিউল', en: 'Current Module', it: 'Modulo attuale' },
  progressLabel: { bn: 'অগ্রগতি', en: 'Progress', it: 'Progresso' },
  showAllLockedModules: { bn: 'লক করা সব মডিউল দেখান', en: 'Show All Locked Modules', it: 'Mostra tutti i moduli bloccati' },
  showAllLockedSub: {
    bn: 'ডেভেলপার টেস্টিং অ্যাক্সেস · সংরক্ষিত অগ্রগতি পরিবর্তন হবে না',
    en: 'Developer testing access · Does not alter saved progress',
    it: 'Accesso test sviluppatore · Non modifica i progressi salvati',
  },
  testingModeOn: { bn: 'টেস্টিং মোড চালু', en: 'Testing Mode ON', it: 'Modalità test ATTIVA' },
  testingModePreviewBanner: {
    bn: 'টেস্টিং মোড চালু — লক করা মডিউল প্রিভিউ মোডে খোলা হয়েছে। এখানে কোনো সম্পূর্ণতা বা পরীক্ষার রেকর্ড সেভ হবে না।',
    en: 'Testing Mode ON — Previewing a locked module. No completion or exam records will be saved.',
    it: 'Modalità test ATTIVA — Anteprima di un modulo bloccato. Nessun completamento o esame verrà salvato.',
  },
  testingOpenLabel: { bn: 'টেস্ট করুন', en: 'Test', it: 'Prova' },
  statsActiveLevel: { bn: 'সক্রিয় লেভেল', en: 'Active Level', it: 'Livello attivo' },
  statsCompletedModules: { bn: 'সম্পন্ন মডিউল', en: 'Modules Done', it: 'Moduli completati' },
  statsStudyTime: { bn: 'মোট অধ্যয়ন', en: 'Study Time', it: 'Tempo di studio' },
  vocabModeBrowseDesc: { bn: 'সব শব্দ ও অর্থ দেখুন', en: 'Browse all words', it: 'Esplora tutte le parole' },
  vocabModeListenTitle: { bn: 'শুনে বাছাই', en: 'Listen & Choose', it: 'Ascolta e scegli' },
  vocabModeListenDesc: { bn: 'শুনে সঠিক উত্তর বাছুন', en: 'Listen and pick answer', it: 'Ascolta e scegli risposta' },
  vocabModeMatchTitle: { bn: 'জোড়া মেলান', en: 'Match Pairs', it: 'Abbina coppie' },
  vocabModeMatchDesc: { bn: 'শব্দ ও অর্থ মেলান', en: 'Match words & meanings', it: 'Abbina parole e sensi' },
  vocabModeRecallTitle: { bn: 'শব্দ স্মরণ', en: 'Word Recall', it: 'Richiamo parole' },
  vocabModeRecallDesc: { bn: 'মনে করে উত্তর দিন', en: 'Recall from memory', it: 'Ricorda a memoria' },
  vocabQuickStart: { bn: 'অনুশীলন শুরু', en: 'Quick Start', it: 'Avvio rapido' },
  vocabPlayAudio: { bn: 'অডিও শুনুন', en: 'Play audio', it: 'Ascolta audio' },
  vocabNextQuestion: { bn: 'পরবর্তী প্রশ্ন', en: 'Next question', it: 'Prossima domanda' },
  vocabMatchedCount: { bn: 'মিলেছে {done}/{total}', en: 'Matched {done}/{total}', it: 'Abbinate {done}/{total}' },
  vocabMatchWrong: { bn: 'মেলেনি — আরেকটি চেষ্টা করুন', en: 'Not a match — try again', it: 'Non corrisponde — riprova' },
  vocabMatchGood: { bn: 'সঠিক জোড়া!', en: 'Matched!', it: 'Abbinato!' },
  vocabKnow: { bn: 'জানা আছে', en: 'Know', it: 'La so' },
  vocabReviewAgain: { bn: 'রিভিউ করুন', en: 'Review', it: 'Ripassa' },
  vocabPracticeReview: { bn: 'রিভিউ শব্দ ({n})', en: 'Practise review ({n})', it: 'Ripassa parole ({n})' },
  vocabBookmarked: { bn: 'বুকমার্ক', en: 'Bookmarked', it: 'Preferiti' },
  vocabBookmarkWord: { bn: 'বুকমার্ক করুন', en: 'Bookmark word', it: 'Salva parola' },
  vocabRemoveBookmark: { bn: 'বুকমার্ক সরান', en: 'Remove bookmark', it: 'Rimuovi segnalibro' },
  vocabClearFilters: { bn: 'ফিল্টার মুছুন', en: 'Clear filters', it: 'Cancella filtri' },
  vocabEmptySearch: { bn: 'কোনো শব্দ পাওয়া যায়নি', en: 'No matching words found', it: 'Nessuna parola trovata' },
  vocabRevealAnswer: { bn: 'উত্তর দেখুন', en: 'Reveal answer', it: 'Mostra risposta' },
  vocabMistakesLabel: { bn: 'ভুল', en: 'Mistakes', it: 'Errori' },
  clear: { bn: 'মুছুন', en: 'Clear', it: 'Pulisci' },
  micListening: {
    bn: 'শুনছি (it-IT)… পরিষ্কারভাবে বলুন',
    en: 'Listening (it-IT)… Speak clearly',
    it: 'In ascolto (it-IT)… Parla chiaramente',
  },
  micReadyNote: {
    bn: 'মাইক্রোফোন প্রস্তুত — ট্যাপ করে ইতালিয়ান বাক্যটি বলুন।',
    en: 'Microphone ready — tap to speak the Italian phrase.',
    it: 'Microfono pronto — tocca per pronunciare la frase.',
  },
} satisfies Record<string, Required<Tr>>;

export type StringKey = keyof typeof STRINGS;

/**
 * Strictly resolves a Tr object or plain string into the exact selected language (`en`, `bn`, or `it`).
 * Never leaks Bengali into English/Italian modes and never falls back to English in Italian mode.
 */
export function getLocalizedText(item: string | Tr, lang: ExplainLang): string {
  if (typeof item === 'string') return item;
  if (lang === 'bn') return item.bn;
  if (lang === 'it') return item.it ?? '';
  return item.en;
}

/** Alias preserving existing call sites while delegating to strict getLocalizedText. */
export function resolveTr(lang: ExplainLang, text: string | Tr): string {
  return getLocalizedText(text, lang);
}

/** Checks whether a search query matches the Italian text, extras, or ONLY the active UI language meaning. */
export function matchesLocalizedSearch(
  query: string,
  lang: ExplainLang,
  italianText: string,
  trText: Tr,
  extras: readonly (string | undefined)[] = [],
): boolean {
  const q = query.trim().toLowerCase();
  if (!q) return true;
  if (italianText.toLowerCase().includes(q)) return true;
  if (getLocalizedText(trText, lang).toLowerCase().includes(q)) return true;
  return extras.some((extra) => Boolean(extra && extra.toLowerCase().includes(q)));
}

/** Resolves per-language options array strictly in the active language without falling back to English. */
export function resolveExamOptions(
  q: { options: string[]; localizedOptions?: { bn: string[]; en: string[]; it?: string[] } },
  lang: ExplainLang,
): string[] {
  if (!q.localizedOptions) return q.options;
  if (lang === 'bn') return q.localizedOptions.bn ?? q.options;
  if (lang === 'it') return q.localizedOptions.it ?? q.options;
  return q.localizedOptions.en ?? q.options;
}

export function translate(lang: ExplainLang, key: StringKey, vars?: Record<string, string | number>): string {
  const entry = STRINGS[key];
  let text = lang === 'bn' ? entry.bn : lang === 'it' ? entry.it : entry.en;
  if (vars) for (const [k, v] of Object.entries(vars)) text = text.replace(`{${k}}`, String(v));
  return text;
}

/** Returns helpers bound to the learner's chosen explanation language. */
export function useI18n() {
  const { state } = useProgress();
  const lang = state.settings.explainLang;
  return {
    lang,
    t: (key: StringKey, vars?: Record<string, string | number>) => translate(lang, key, vars),
    tr: (text: string | Tr) => getLocalizedText(text, lang),
  };
}
