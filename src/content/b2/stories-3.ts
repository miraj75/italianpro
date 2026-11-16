import type { StoryItem } from '../academyTypes';
import { buildStory } from '../builders';

export const B2_STORIES_3: StoryItem[] = [
  buildStory({
    id: 'st-b2-36', level: 'B2', titleIt: 'Certe notizie e notizie certe',
    title: { bn: 'ভিত্তিহীন গুজব ও বিশেষণের অবস্থান', en: 'Unfounded rumours & adjective position' },
    topic: { bn: 'গণমাধ্যম ও aggettivo-posizione-b2', en: 'Media literacy & adjective placement' },
    grammarIds: ['aggettivo-posizione-b2'],
    vocabKeys: ['w:B2:la notizia infondata', 'w:B2:infondato'],
    paragraphs: [
      { it: 'Un vecchio collaboratore della redazione ci ricordava sempre una regola semplice: non bisogna mai confondere certe notizie circolanti in rete con le notizie certe verificate sul campo. Spesso una notizia infondata nasce da un titolo ambiguo copiato senza controllo.', tr: { bn: 'বার্তাকক্ষের একজন পুরোনো সহকর্মী আমাদের সবসময় একটি সহজ নিয়ম মনে করিয়ে দিতেন: অনলাইনে ঘুরে বেড়ানো কিছু খবরকে মাঠপর্যায়ে যাচাই করা নিশ্চিত খবরের সাথে কখনোই গুলিয়ে ফেলা উচিত নয়। প্রায়ই একটি ভিত্তিহীন খবর জন্ম নেয় যাচাই ছাড়া কপি করা দ্ব্যর্থবোধক শিরোনাম থেকে।', en: 'An old colleague in the newsroom always reminded us of a simple rule: one must never confuse certain rumours circulating online with verified news checked on the ground. Often an unfounded news story is born from an ambiguous headline copied unchecked.' } },
      { it: 'La settimana scorsa diverse fonti avevano annunciato l’aumento improvviso dei biglietti ferroviari; tuttavia, consultando fonti diverse ma ufficiali, abbiamo scoperto che l’allarme era del tutto infondato.', tr: { bn: 'গত সপ্তাহে বেশ কয়েকটি সূত্র হঠাৎ রেলের টিকিটের দাম বৃদ্ধির ঘোষণা দিয়েছিল; তবুও ভিন্ন কিন্তু দাপ্তরিক সূত্র পরীক্ষা করে আমরা দেখতে পেয়েছি যে সতর্কবার্তাটি সম্পূর্ণ ভিত্তিহীন ছিল।', en: 'Last week several sources had announced a sudden hike in rail fares; however, by consulting different yet official sources, we found the alarm was completely unfounded.' } },
      { it: 'Un buon giornalista distingue sempre l’urgenza del clic dalla responsabilità dell’informazione.', tr: { bn: 'একজন ভালো সাংবাদিক সর্বদা ক্লিকের তাড়াহুড়ো থেকে তথ্যের দায়িত্বশীলতাকে আলাদা রাখেন।', en: 'A good journalist always separates click urgency from responsibility in reporting.' } },
    ],
    wordGlossary: [
      { word: 'notizia infondata', base: 'la notizia infondata', tr: { bn: 'ভিত্তিহীন খবর', en: 'unfounded news' }, pos: 'noun' },
      { word: 'infondato', base: 'infondato', tr: { bn: 'ভিত্তিহীন', en: 'unfounded' }, pos: 'adj' },
    ],
    grammarBreakdown: [
      { sentenceIt: 'Un vecchio collaboratore / certe notizie vs notizie certe / diverse fonti vs fonti diverse.', ruleTitle: { bn: 'বিশেষণের অবস্থানে অর্থভেদ', en: 'Pre-nominal vs post-nominal adjective meaning' }, explanation: { bn: 'আগে বসলে certe (কিছু), diverse (বেশ কয়েকটি), vecchio (দীর্ঘদিনের); পরে বসলে certe (নিশ্চিত), diverse (ভিন্ন ভিন্ন)।', en: 'Position flips meaning between quantifying/figurative and literal/restrictive.' }, grammarId: 'aggettivo-posizione-b2' },
    ],
    mcq: [
      { id: 'stb2-36-q1', prompt: { bn: '«fonti diverse» বলতে এখানে কী বোঝানো হয়েছে?', en: 'What does "fonti diverse" mean in this passage?' }, options: ['অনেক সূত্র', 'ভিন্ন ভিন্ন সূত্র', 'ভুল সূত্র', 'পুরোনো সূত্র'], answer: 1, explanation: { bn: 'বিশেষ্যের পরে diverse = ভিন্ন ভিন্ন।', en: 'Post-nominal diverse means different.' } },
    ],
    trueFalse: [
      { id: 'stb2-36-tf1', statementIt: 'L’annuncio dell’aumento ferroviario si è rivelato privo di fondamento.', statement: { bn: 'রেল ভাড়া বৃদ্ধির ঘোষণাটি ভিত্তিহীন প্রমাণিত হয়েছে।', en: 'The rail fare hike report proved unfounded.' }, answer: true, explanation: { bn: 'বাক্যটি সত্য — গল্পের তথ্যানুযায়ী: «গত সপ্তাহে বেশ কয়েকটি সূত্র হঠাৎ রেলের টিকিটের দাম বৃদ্ধির ঘোষণা দিয়েছিল; তবুও ভিন্ন কিন্তু দাপ্তরিক সূত্র পরীক্ষা করে আমরা দেখতে পেয়েছি যে সতর্কবার্তাটি সম্পূর্ণ ভিত্তিহীন ছিল।» (l’allarme era del tutto infondato)।', en: 'True.' } },
    ],
    fillBlank: [
      { id: 'stb2-36-fb1', sentence: 'Un ___ funzionario del ministero ha smentito la voce.', options: ['funzionario alto', 'alto funzionario', 'certo funzionario alto', 'grande molto'], answer: 1, explanation: { bn: 'উচ্চপদস্থ কর্মকর্তা = un alto funzionario।', en: 'Pre-nominal alto means high-ranking.' } },
    ],
    shortAnswer: [
      { id: 'stb2-36-sa1', question: { bn: 'প্রায়ই ভিত্তিহীন খবরের জন্ম কীভাবে হয়?', en: 'How do unfounded stories often originate?' }, sampleAnswerIt: 'Da un titolo ambiguo copiato senza controllo.', keywords: ['titolo', 'controllo'] },
    ],
    practice: {
      retellPrompt: { bn: 'certe/diverse-এর দুই ধরনের অবস্থান ব্যবহার করে অনুচ্ছেদটি সংক্ষেপে লিখুন।', en: 'Summarise the media lesson contrasting pre- and post-nominal adjectives.' },
      completeMissing: { promptIt: 'Non abbiamo ancora ___ sulla data del decreto.', hint: { bn: 'নিশ্চিত খবর: notizie certe', en: 'notizie certe' }, sampleIt: 'Non abbiamo ancora notizie certe sulla data del decreto.' },
      buildSimilar: { patternIt: 'Ho incontrato un vecchio amico in una casa vecchia.', prompt: { bn: 'একই বিশেষণ আগে ও পরে বসিয়ে একটি বাক্য লিখুন।', en: 'Use the same adjective pre- and post-nominally to contrast meaning.' }, sampleIt: 'Diverse persone hanno espresso opinioni diverse durante il dibattito.' },
      altEndingPrompt: { bn: 'সংবাদপত্রে প্রকাশিত আনুষ্ঠানিক খণ্ডন বিজ্ঞপ্তিটি লিখুন।', en: 'Write the brief retraction published to correct the rumour.' },
    },
  }),

  buildStory({
    id: 'st-b2-37', level: 'B2', titleIt: 'Un fraintendimento nello studio notarile',
    title: { bn: 'নোটারি অফিসে ভুল বোঝাবুঝি ও মডাল অনুমান', en: 'A misunderstanding at the notary’s office' },
    topic: { bn: 'যুক্তি ও modali epistemici', en: 'Deduction & epistemic modals' },
    grammarIds: ['modali-epistemici'],
    vocabKeys: ['w:B2:il fraintendimento', 'w:B2:il notaio'],
    paragraphs: [
      { it: 'Alle cinque del pomeriggio le luci dello studio erano ancora accese, quindi il notaio doveva trovarsi ancora al lavoro per ultimare gli atti. Quando entrò l’acquirente, però, scoprì che mancava la procura speciale dell’altro socio.', tr: { bn: 'বিকেল পাঁচটায় অফিসের বাতিগুলো এখনো জ্বলছিল, তাই দলিলগুলো চূড়ান্ত করতে নোটারি নিশ্চয়ই তখনো কাজে ছিলেন। কিন্তু ক্রেতা ভেতরে ঢুকে দেখলেন অন্য অংশীদারের বিশেষ আমমোক্তারনামা নেই।', en: 'At five in the afternoon the office lights were still on, so the notary had to still be working to finalise the deeds. When the buyer came in, however, he discovered the other partner’s special power of attorney was missing.' } },
      { it: '«I dati non coincidono: deve esserci stato un fraintendimento nella trasmissione degli allegati via mail» ipotizzò il notaio controllando la ricevuta. L’assistente aggiunse che il file potrebbe essere rimasto nella bozza della posta certificata.', tr: { bn: '«তথ্যগুলো মিলছে না: ইমেইলে সংযুক্তি পাঠানোর সময় নিশ্চয়ই কোনো ভুল বোঝাবুঝি হয়েছে» রসিদ পরীক্ষা করে নোটারি অনুমান করলেন। সহকারী যোগ করলেন যে ফাইলটি হয়তো সার্টিফায়েড ইমেইলের ড্রাফটে রয়ে গেছে।', en: '"The details don’t match: there must have been a misunderstanding in emailing the attachments," surmised the notary checking the receipt. The assistant added that the file might have stayed in the certified email drafts.' } },
      { it: 'Con una telefonata rapida al collega di Torino, recuperarono il documento mancante in dieci minuti.', tr: { bn: 'তুরিনের সহকর্মীকে দ্রুত একটি ফোন করে তাঁরা দশ মিনিটের মধ্যে হারানো নথিটি উদ্ধার করে ফেললেন।', en: 'With a quick phone call to the colleague in Turin, they recovered the missing document in ten minutes.' } },
    ],
    wordGlossary: [
      { word: 'fraintendimento', base: 'il fraintendimento', tr: { bn: 'ভুল বোঝাবুঝি', en: 'misunderstanding' }, pos: 'noun' },
      { word: 'notaio', base: 'il notaio', tr: { bn: 'নোটারি পাবলিক', en: 'notary' }, pos: 'noun' },
    ],
    grammarBreakdown: [
      { sentenceIt: 'Deve esserci stato un fraintendimento / Il file potrebbe essere rimasto in bozza.', ruleTitle: { bn: 'মডাল ক্রিয়ার যৌক্তিক অনুমান', en: 'Epistemic modals' }, explanation: { bn: 'উচ্চ নিশ্চয়তায় অনুমান (deve esserci stato) এবং সম্ভাবনায় অনুমান (potrebbe essere rimasto)।', en: 'dovere expresses strong deduction; potere expresses possibility.' }, grammarId: 'modali-epistemici' },
    ],
    mcq: [
      { id: 'stb2-37-q1', prompt: { bn: 'দলিল সম্পূর্ণ করার জন্য কোন কাগজটির অভাব ছিল?', en: 'Which document was initially missing?' }, options: ['বিদ্যুৎ বিল', 'অন্য অংশীদারের বিশেষ আমমোক্তারনামা', 'গাড়ির লাইসেন্স', 'হোটেল রসিদ'], answer: 1, explanation: { bn: 'সঠিক উত্তর: অন্য অংশীদারের বিশেষ আমমোক্তারনামা — পাঠ্যাংশে বলা হয়েছে: «বিকেল পাঁচটায় অফিসের বাতিগুলো এখনো জ্বলছিল, তাই দলিলগুলো চূড়ান্ত করতে নোটারি নিশ্চয়ই তখনো কাজে ছিলেন। কিন্তু ক্রেতা ভেতরে ঢুকে দেখলেন অন্য অংশীদারের বিশেষ আমমোক্তারনামা নেই।» (la procura speciale dell’altro socio)।', en: 'The other partner’s special power of attorney.' } },
    ],
    trueFalse: [
      { id: 'stb2-37-tf1', statementIt: 'L’appuntamento è stato rimandato al mese successivo per mancanza del file.', statement: { bn: 'ফাইল না থাকায় সাক্ষাৎকারটি পরের মাসে পিছিয়ে দেওয়া হয়েছিল।', en: 'The appointment was postponed by a month.' }, answer: false, explanation: { bn: 'দশ মিনিটের মধ্যেই নথিটি উদ্ধার করা হয়।', en: 'They recovered it within ten minutes.' } },
    ],
    fillBlank: [
      { id: 'stb2-37-fb1', sentence: 'Le strade sono bagnate: stanotte ___ piovuto forte.', options: ['deve aver', 'ha dovuto', 'dovrebbe', 'avrebbe'], answer: 0, explanation: { bn: 'প্রমাণ দেখে অতীত অনুমান: deve aver piovuto।', en: 'Epistemic deduction about past: deve aver + participle.' } },
    ],
    shortAnswer: [
      { id: 'stb2-37-sa1', question: { bn: 'সহকারীর অনুমান অনুযায়ী ফাইলটি কোথায় আটকে থাকতে পারত?', en: 'Where did the assistant think the file might be stuck?' }, sampleAnswerIt: 'Nella bozza della posta certificata.', keywords: ['bozza', 'posta'] },
    ],
    practice: {
      retellPrompt: { bn: 'deve esserci stato ও potrebbe essere ব্যবহার করে নোটারি অফিসের ঘটনাটি লিখুন।', en: 'Retell the notary episode using epistemic dovere and potere.' },
      completeMissing: { promptIt: 'Non risponde nessuno: gli impiegati ___ già usciti.', hint: { bn: 'potere বা ভবিষ্যৎ অনুমান: saranno / potrebbero essere', en: 'potrebbero essere' }, sampleIt: 'Non risponde nessuno: gli impiegati potrebbero essere già usciti.' },
      buildSimilar: { patternIt: 'Deve aver dimenticato l’allegato nella mail.', prompt: { bn: 'অতীত ঘটনা নিয়ে একটি যৌক্তিক অনুমান লিখুন।', en: 'Write an epistemic deduction about a past event.' }, sampleIt: 'La pratica deve essere rimasta bloccata per un errore di codice.' },
      altEndingPrompt: { bn: 'দলিল স্বাক্ষর সম্পন্ন হওয়ার পর ক্রেতা ও নোটারির সংলাপ লিখুন।', en: 'Write the closing exchange once the deed is signed.' },
    },
  }),

  buildStory({
    id: 'st-b2-38', level: 'B2', titleIt: 'Dal dirigente scolastico per la tutela legale',
    title: { bn: 'অধ্যক্ষের দপ্তরে আনুষ্ঠানিক অনুজ্ঞা ও সর্বনাম', en: 'Formal imperatives at the principal’s office' },
    topic: { bn: 'শিক্ষা প্রশাসন ও imperativo formale', en: 'School administration & formal imperatives' },
    grammarIds: ['imperativo-formale-pronomi'],
    vocabKeys: ['w:B2:il dirigente scolastico', 'w:B2:la tutela legale'],
    paragraphs: [
      { it: '«Signora, si accomodi pure nel mio ufficio» accolse gentilmente il dirigente scolastico ricevendo la madre di una studentessa. La signora chiedeva chiarimenti sulla tutela legale prevista in caso di infortunio durante lo stage curricolare.', tr: { bn: '«ম্যাডাম, অনুগ্রহ করে আমার কক্ষে এসে বসুন» এক ছাত্রীর মাকে স্বাগত জানিয়ে অধ্যক্ষ বিনীতভাবে বললেন। ভদ্রমহিলা পাঠ্যক্রমভুক্ত ইন্টার্নশিপের সময় দুর্ঘটনার ক্ষেত্রে আইনি সুরক্ষা সম্পর্কে স্পষ্ট ধারণা চাইছিলেন।', en: '"Madam, please have a seat in my office," the school principal kindly welcomed a student’s mother. The mother was asking for clarification on legal protection during a curricular internship.' } },
      { it: '«Non se ne preoccupi affatto — la rassicurò il preside — la polizza dell’istituto copre ogni attività autorizzata. Se desidera leggere l’estratto completo, me lo dica e glielo stampo subito; oppure ce ne dia conferma via mail e glielo trasmettiamo in formato digitale».', tr: { bn: '«এ নিয়ে মোটেও চিন্তা করবেন না — অধ্যক্ষ তাঁকে আশ্বস্ত করলেন — প্রতিষ্ঠানের বিমা অনুমোদিত প্রতিটি কার্যক্রম কভার করে। আপনি পূর্ণাঙ্গ অংশটি পড়তে চাইলে আমাকে বলুন, আমি এখনই প্রিন্ট করে দিচ্ছি; অথবা ইমেইলে নিশ্চিত করলে আমরা ডিজিটাল ফরম্যাটে পাঠিয়ে দেব»।', en: '"Do not worry about it at all," the principal reassured her, "the school policy covers every authorised activity. If you wish to read the full extract, just tell me and I’ll print it right away; or let us know by email and we will send it digitally."' } },
      { it: 'La madre lo ringraziò per la disponibilità e chiese che gliene inviassero una copia prima della partenza della classe.', tr: { bn: 'মা তাঁর সহযোগিতার জন্য ধন্যবাদ জানালেন এবং শ্রেণির যাত্রার আগেই একটি কপি পাঠাতে অনুরোধ করলেন।', en: 'The mother thanked him for his helpfulness and asked that a copy be sent before the class departure.' } },
    ],
    wordGlossary: [
      { word: 'dirigente scolastico', base: 'il dirigente scolastico', tr: { bn: 'প্রধান শিক্ষক / অধ্যক্ষ', en: 'school principal' }, pos: 'noun' },
      { word: 'tutela legale', base: 'la tutela legale', tr: { bn: 'আইনি সুরক্ষা', en: 'legal protection' }, pos: 'noun' },
    ],
    grammarBreakdown: [
      { sentenceIt: 'Si accomodi pure / Non se ne preoccupi / Me lo dica / Ce ne dia conferma.', ruleTitle: { bn: 'আনুষ্ঠানিক Lei অনুজ্ঞায় সর্বনাম', en: 'Proclitic pronouns in formal imperatives' }, explanation: { bn: 'Lei অনুজ্ঞায় (congiuntivo presente) সর্বনাম ক্রিয়ার আগে বসে: si accomodi, non se ne preoccupi, me lo dica।', en: 'Formal Lei imperatives always place pronouns before the verb.' }, grammarId: 'imperativo-formale-pronomi' },
    ],
    mcq: [
      { id: 'stb2-38-q1', prompt: { bn: 'ছাত্রীর মা কী বিষয়ে জানতে এসেছিলেন?', en: 'What did the mother come to ask about?' }, options: ['স্কুল ক্যান্টিন', 'ইন্টার্নশিপে আইনি সুরক্ষা ও বিমা', 'ফুটবল দল', 'গ্রীষ্মের ছুটি'], answer: 1, explanation: { bn: 'সঠিক উত্তর: ইন্টার্নশিপে আইনি সুরক্ষা ও বিমা — পাঠ্যাংশে বলা হয়েছে: ««ম্যাডাম, অনুগ্রহ করে আমার কক্ষে এসে বসুন» এক ছাত্রীর মাকে স্বাগত জানিয়ে অধ্যক্ষ বিনীতভাবে বললেন। ভদ্রমহিলা পাঠ্যক্রমভুক্ত ইন্টার্নশিপের সময় দুর্ঘটনার ক্ষেত্রে আইনি সুরক্ষা সম্পর্কে স্পষ্ট ধারণা চাইছিলেন।» (la tutela legale durante lo stage curricolare)।', en: 'Legal protection during the curricular internship.' } },
    ],
    trueFalse: [
      { id: 'stb2-38-tf1', statementIt: 'La polizza scolastica copre tutte le attività di stage autorizzate.', statement: { bn: 'স্কুলের বিমা অনুমোদিত সব ইন্টার্নশিপ কার্যক্রম কভার করে।', en: 'The school policy covers authorised internship activities.' }, answer: true, explanation: { bn: 'বাক্যটি সত্য — গল্পের তথ্যানুযায়ী: ««এ নিয়ে মোটেও চিন্তা করবেন না — অধ্যক্ষ তাঁকে আশ্বস্ত করলেন — প্রতিষ্ঠানের বিমা অনুমোদিত প্রতিটি কার্যক্রম কভার করে। আপনি পূর্ণাঙ্গ অংশটি পড়তে চাইলে আমাকে বলুন, আমি এখনই প্রিন্ট করে দিচ্ছি; অথবা ইমেইলে নিশ্চিত করলে আমরা ডিজিটাল ফরম্যাটে পাঠিয়ে দেব»।» (copre ogni attività autorizzata)।', en: 'True.' } },
    ],
    fillBlank: [
      { id: 'stb2-38-fb1', sentence: 'Direttore, ___ pure tramite mail appena firma l’atto.', options: ['inviamelo', 'me lo invii', 'inviali', 'lo inviati'], answer: 1, explanation: { bn: 'আনুষ্ঠানিক Lei অনুজ্ঞা: me lo invii।', en: 'Formal Lei imperative places clitics first: me lo invii.' } },
    ],
    shortAnswer: [
      { id: 'stb2-38-sa1', question: { bn: 'মা কপিটি কখন পাঠানোর অনুরোধ করলেন?', en: 'When did the mother ask for the copy to be sent?' }, sampleAnswerIt: 'Prima della partenza della classe.', keywords: ['partenza', 'classe'] },
    ],
    practice: {
      retellPrompt: { bn: 'Si accomodi, Non se ne preoccupi, Me lo invii দিয়ে আনুষ্ঠানিক সংলাপ লিখুন।', en: 'Write a short formal dialogue using three Lei imperatives with pronouns.' },
      completeMissing: { promptIt: 'Avvocato, ___ leggere con calma prima della firma.', hint: { bn: 'আনুষ্ঠানিক ভদ্র অনুজ্ঞায় me la lasci ব্যবহার করুন', en: 'me la lasci' }, sampleIt: 'Avvocato, me la lasci leggere con calma prima della firma.' },
      buildSimilar: { patternIt: 'Non se la prenda per questa osservazione.', prompt: { bn: 'Lei-তে নেতিবাচক আনুষ্ঠানিক অনুজ্ঞা লিখুন।', en: 'Write a negative formal imperative with clitic pronouns.' }, sampleIt: 'Gentile Signora, non se ne dimentichi quando compila la domanda.' },
      altEndingPrompt: { bn: 'শিক্ষার্থীদের নিরাপদ ইন্টার্নশিপ সপ্তাহের অভিজ্ঞতা লিখুন।', en: 'Describe the students’ smooth internship week.' },
    },
  }),

  buildStory({
    id: 'st-b2-39', level: 'B2', titleIt: 'Rallentare la dispersione scolastica',
    title: { bn: 'স্কুল ঝরে পড়া রোধ ও নৈর্ব্যক্তিক কাঠামো', en: 'Curbing school dropouts & impersonal prose' },
    topic: { bn: 'শিক্ষানীতি ও costrutti impersonali', en: 'Education policy & impersonal constructions' },
    grammarIds: ['costrutti-impersonali-b2'],
    vocabKeys: ['w:B2:rallentare', 'w:B2:la tempestività', 'w:B2:la dispersione scolastica'],
    paragraphs: [
      { it: 'Dalla relazione annuale pubblicata dall’istituto di statistica si evince che negli ultimi quattro anni il tasso di abbandono precoce degli studi sta iniziando a rallentare, seppur con forti divari regionali. Preme sottolineare che i risultati migliori coincidono con le scuole dotate di laboratori pomeridiani e sportelli d’ascolto.', tr: { bn: 'পরিসংখ্যান ইনস্টিটিউটের প্রকাশিত বার্ষিক প্রতিবেদন থেকে স্পষ্ট বোঝা যায় যে গত চার বছরে পড়াশোনা মাঝপথে ছেড়ে দেওয়ার হার ধীরগতির হতে শুরু করেছে, যদিও আঞ্চলিক বৈষম্য এখনো প্রবল। এটি জোর দিয়ে বলা জরুরি যে সেরা ফল এসেছে সেই স্কুলগুলোতে যেখানে বিকেলের ল্যাব ও পরামর্শ কেন্দ্র রয়েছে।', en: 'From the annual report published by the statistics institute it is inferred that early school leaving has begun slowing over the last four years, albeit with sharp regional gaps. It is crucial to stress that the best results coincide with schools offering afternoon workshops and counselling desks.' } },
      { it: 'Si ritiene pertanto opportuno che il ministero potenzi l’orientamento universitario e professionale già dalla scuola secondaria. Urge intervenire con tempestività soprattutto nei quartieri dove la dispersione scolastica supera ancora la media europea.', tr: { bn: 'অতএব এটি সমীচীন মনে করা হচ্ছে যে মন্ত্রণালয় মাধ্যমিক স্তর থেকেই বিশ্ববিদ্যালয় ও পেশাগত দিকনির্দেশনা জোরদার করুক। বিশেষত যে পাড়াগুলোতে স্কুল থেকে ঝরে পড়ার হার এখনো ইউরোপীয় গড়ের চেয়ে বেশি, সেখানে দ্রুত পদক্ষেপ নেওয়া জরুরি।', en: 'It is therefore deemed appropriate that the ministry strengthen university and career guidance starting in secondary school. It is urgent to intervene promptly especially in districts where dropout rates still exceed the European average.' } },
      { it: 'Occorre inoltre coinvolgere le famiglie e le associazioni educative del territorio in un patto educativo permanente.', tr: { bn: 'এছাড়াও এলাকার পরিবারগুলো ও শিক্ষা সংগঠনগুলোকে একটি স্থায়ী শিক্ষা চুক্তিতে সম্পৃক্ত করা প্রয়োজন।', en: 'It is also necessary to involve families and local educational associations in a permanent learning pact.' } },
    ],
    wordGlossary: [
      { word: 'rallentare', base: 'rallentare', tr: { bn: 'ধীরগতি করা/হওয়া', en: 'to slow down' }, pos: 'verb' },
      { word: 'tempestività', base: 'la tempestività', tr: { bn: 'সময়োপযোগী দ্রুততা', en: 'timeliness' }, pos: 'noun' },
      { word: 'dispersione scolastica', base: 'la dispersione scolastica', tr: { bn: 'স্কুল থেকে ঝরে পড়া', en: 'school dropout rate' }, pos: 'noun' },
    ],
    grammarBreakdown: [
      { sentenceIt: 'Si evince che sta rallentando / Si ritiene opportuno che potenzi / Urge intervenire.', ruleTitle: { bn: 'একাডেমিক নৈর্ব্যক্তিক কাঠামো', en: 'Academic impersonal constructions' }, explanation: { bn: 'তথ্য প্রমাণিত হলে si evince che + নির্দেশক; নীতিগত মতামতে si ritiene che + সংযোজক (potenzi); জরুরি প্রয়োজনে urge / occorre + ইনফিনিটিভ।', en: 'Distinguish factual inference (indicative), policy judgement (subjunctive), and urgency (infinitive).' }, grammarId: 'costrutti-impersonali-b2' },
    ],
    mcq: [
      { id: 'stb2-39-q1', prompt: { bn: 'কোন ধরনের স্কুলে ঝরে পড়া রোধে সেরা ফল দেখা গেছে?', en: 'Which schools showed the best results?' }, options: ['কেবল অনলাইন স্কুলে', 'বিকেলের ল্যাব ও পরামর্শ কেন্দ্র থাকা স্কুলে', 'যেখানে পরীক্ষা নেই', 'বেসরকারি ক্রীড়া ক্লাবে'], answer: 1, explanation: { bn: 'সঠিক উত্তর: বিকেলের ল্যাব ও পরামর্শ কেন্দ্র থাকা স্কুলে — পাঠ্যাংশে বলা হয়েছে: «পরিসংখ্যান ইনস্টিটিউটের প্রকাশিত বার্ষিক প্রতিবেদন থেকে স্পষ্ট বোঝা যায় যে গত চার বছরে পড়াশোনা মাঝপথে ছেড়ে দেওয়ার হার ধীরগতির হতে শুরু করেছে, যদিও আঞ্চলিক বৈষম্য এখনো প্রবল। এটি জোর দিয়ে বলা জরুরি যে সেরা ফল এসেছে সেই স্কুলগুলোতে যেখানে বিকেলের ল্যাব ও পরামর্শ কেন্দ্র রয়েছে।» (laboratori pomeridiani e sportelli d’ascolto)।', en: 'Afternoon workshops and counselling desks.' } },
    ],
    trueFalse: [
      { id: 'stb2-39-tf1', statementIt: 'Le differenze regionali nel tasso di abbandono sono ormai scomparse del tutto.', statement: { bn: 'ঝরে পড়ার হারে আঞ্চলিক বৈষম্য এখন সম্পূর্ণ দূর হয়ে গেছে।', en: 'Regional disparities in dropout rates have disappeared completely.' }, answer: false, explanation: { bn: 'seppur con forti divari regionali = প্রবল আঞ্চলিক বৈষম্য রয়েই গেছে।', en: 'Strong regional gaps remain.' } },
    ],
    fillBlank: [
      { id: 'stb2-39-fb1', sentence: 'Si ritiene necessario che il bando ___ prorogato di due settimane.', options: ['viene', 'venga', 'verrà', 'veniva'], answer: 1, explanation: { bn: 'Si ritiene che-র পরে congiuntivo (venga)।', en: 'Impersonal opinion takes subjunctive venga.' } },
    ],
    shortAnswer: [
      { id: 'stb2-39-sa1', question: { bn: 'স্থায়ী শিক্ষা চুক্তিতে কাদের সম্পৃক্ত করা প্রয়োজন?', en: 'Who should be involved in the permanent learning pact?' }, sampleAnswerIt: 'Le famiglie e le associazioni educative del territorio.', keywords: ['famiglie', 'associazioni'] },
    ],
    practice: {
      retellPrompt: { bn: 'Si evince che, Si ritiene che ও Urge দিয়ে শিক্ষানীতির সারসংক্ষেপ লিখুন।', en: 'Summarise the education policy brief using impersonal academic formulas.' },
      completeMissing: { promptIt: '___ investire nei laboratori scolastici pomeridiani.', hint: { bn: 'Occorre বা Urge', en: 'Occorre' }, sampleIt: 'Occorre investire nei laboratori scolastici pomeridiani.' },
      buildSimilar: { patternIt: 'Dai dati si evince che il divario diminuisce.', prompt: { bn: 'Dai dati si evince che... দিয়ে একটি একাডেমিক বাক্য লিখুন।', en: 'Write an academic inference using Dai dati si evince che…' }, sampleIt: 'Dall’indagine si evince che l’orientamento precoce riduce l’abbandono.' },
      altEndingPrompt: { bn: 'একটি পৌর স্কুলে চালু হওয়া বিকেলের প্রোগ্রামের বিবরণ দিন।', en: 'Describe an afternoon workshop programme launched in a municipal school.' },
    },
  }),

  buildStory({
    id: 'st-b2-40', level: 'B2', titleIt: 'Il seminario e il colloquio orale',
    title: { bn: 'আন্তঃবিষয়ক সেমিনার ও ক্রিয়ার প্রিপোজিশন', en: 'Interdisciplinary seminar & verbal government' },
    topic: { bn: 'বিশ্ববিদ্যালয় ও reggenze verbali', en: 'Academia & verbal prepositions' },
    grammarIds: ['reggenze-verbali-b2'],
    vocabKeys: ['w:B2:attenersi', 'w:B2:ottemperare', 'w:B2:il colloquio orale', 'w:B2:il seminario interdisciplinare'],
    paragraphs: [
      { it: 'Prima dell’inizio del seminario interdisciplinare sul diritto digitale, la coordinatrice ha ricordato ai dottorandi le regole della sessione. Tutti i relatori devono attenersi rigorosamente ai quindici minuti assegnati per non ritardare la discussione generale.', tr: { bn: 'ডিজিটাল আইন বিষয়ক আন্তঃবিষয়ক সেমিনার শুরুর আগে সমন্বয়ক পিএইচডি গবেষকদের সেশনের নিয়মাবলি স্মরণ করিয়ে দিলেন। সাধারণ আলোচনা বিলম্বিত না করতে সব বক্তাকে নির্ধারিত পনেরো মিনিট কঠোরভাবে মেনে চলতে হবে।', en: 'Before the interdisciplinary seminar on digital law began, the coordinator reminded PhD students of the session rules. All speakers must adhere strictly to the allotted fifteen minutes so as not to delay general discussion.' } },
      { it: 'Al termine dei lavori, il colloquio orale finale verterà sugli argomenti approfonditi nei gruppi di ricerca. Chi non ottempera all’obbligo di consegnare l’elaborato scritto preliminare non può accedere alla valutazione conclusiva.', tr: { bn: 'কার্যক্রম শেষে চূড়ান্ত মৌখিক পরীক্ষাটি গবেষণাদলগুলোতে আলোচিত বিষয়গুলোর ওপর ভিত্তি করে অনুষ্ঠিত হবে। যাঁরা প্রাথমিক লিখিত প্রবন্ধ জমা দেওয়ার বাধ্যবাধকতা পালন করেন না তাঁরা চূড়ান্ত মূল্যায়নে অংশ নিতে পারবেন না।', en: 'At the end of the sessions, the final oral exam will focus on the topics explored in the research groups. Whoever fails to comply with the obligation to submit the preliminary written paper cannot enter the final assessment.' } },
      { it: 'Un’analisi rigorosa non può infatti prescindere dal confronto tra fonti giuridiche, dati tecnici e riflessione etica.', tr: { bn: 'একটি নিখুঁত বিশ্লেষণ আসলে আইনি উৎস, কারিগরি তথ্য এবং নৈতিক চিন্তাভাবনার তুলনাকে বাদ দিয়ে চলতে পারে না।', en: 'A rigorous analysis cannot indeed disregard comparing legal sources, technical data, and ethical reflection.' } },
    ],
    wordGlossary: [
      { word: 'attenersi', base: 'attenersi', tr: { bn: 'মেনে চলা (a)', en: 'to abide by' }, pos: 'verb' },
      { word: 'ottemperare', base: 'ottemperare', tr: { bn: 'পালন করা (a)', en: 'to comply with' }, pos: 'verb' },
      { word: 'colloquio orale', base: 'il colloquio orale', tr: { bn: 'মৌখিক পরীক্ষা', en: 'oral examination' }, pos: 'noun' },
    ],
    grammarBreakdown: [
      { sentenceIt: 'Attenersi ai minuti / verterà sugli argomenti / ottempera all’obbligo / prescindere dal confronto.', ruleTitle: { bn: 'B2 ক্রিয়ার নির্দিষ্ট প্রিপোজিশন', en: 'Prepositional government' }, explanation: { bn: 'attenersi a, ottemperare a, vertere su, prescindere da — এই স্থির অব্যয়গুলো নির্ভুল রাখা জরুরি।', en: 'Verbs govern fixed prepositions: attenersi a, ottemperare a, vertere su, prescindere da.' }, grammarId: 'reggenze-verbali-b2' },
    ],
    mcq: [
      { id: 'stb2-40-q1', prompt: { bn: 'প্রতিটি বক্তা সেমিনারে কত মিনিট সময় পান?', en: 'How many minutes is each speaker allotted?' }, options: ['১০ মিনিট', '১৫ মিনিট', '৩০ মিনিট', '৪৫ মিনিট'], answer: 1, explanation: { bn: 'সঠিক উত্তর: ১৫ মিনিট — পাঠ্যাংশে বলা হয়েছে: «ডিজিটাল আইন বিষয়ক আন্তঃবিষয়ক সেমিনার শুরুর আগে সমন্বয়ক পিএইচডি গবেষকদের সেশনের নিয়মাবলি স্মরণ করিয়ে দিলেন। সাধারণ আলোচনা বিলম্বিত না করতে সব বক্তাকে নির্ধারিত পনেরো মিনিট কঠোরভাবে মেনে চলতে হবে।» (ai quindici minuti assegnati)।', en: 'Fifteen minutes.' } },
    ],
    trueFalse: [
      { id: 'stb2-40-tf1', statementIt: 'Chi dimentica l’elaborato scritto può sostenere comunque il colloquio orale.', statement: { bn: 'লিখিত প্রবন্ধ না দিলেও প্রার্থীরা মৌখিক পরীক্ষা দিতে পারবেন।', en: 'Students who omit the written paper may still take the oral exam.' }, answer: false, explanation: { bn: 'বাক্যটি মিথ্যা — গল্পে আসলে বলা হয়েছে: «কার্যক্রম শেষে চূড়ান্ত মৌখিক পরীক্ষাটি গবেষণাদলগুলোতে আলোচিত বিষয়গুলোর ওপর ভিত্তি করে অনুষ্ঠিত হবে। যাঁরা প্রাথমিক লিখিত প্রবন্ধ জমা দেওয়ার বাধ্যবাধকতা পালন করেন না তাঁরা চূড়ান্ত মূল্যায়নে অংশ নিতে পারবেন না।» (non può accedere alla valutazione conclusiva)।', en: 'They cannot access the final assessment.' } },
    ],
    fillBlank: [
      { id: 'stb2-40-fb1', sentence: 'Chi dichiara dati falsi incorre ___ sanzioni previste dal regolamento.', options: ['sulle', 'nelle', 'dalle', 'con le'], answer: 1, explanation: { bn: 'incorrere সর্বদা in প্রিপোজিশন নেয় → nelle sanzioni।', en: 'incorrere governs preposition in.' } },
    ],
    shortAnswer: [
      { id: 'stb2-40-sa1', question: { bn: 'একটি নিখুঁত বিশ্লেষণ কোন তিনটি বিষয়ের তুলনা বাদ দিতে পারে না?', en: 'Which three elements can a rigorous analysis not disregard?' }, sampleAnswerIt: 'Fonti giuridiche, dati tecnici e riflessione etica.', keywords: ['fonti', 'dati'] },
    ],
    practice: {
      retellPrompt: { bn: 'attenersi a, ottemperare a, vertere su ও prescindere da ব্যবহার করে সেমিনার নির্দেশিকা লিখুন।', en: 'Write seminar rules using attenersi a, ottemperare a, vertere su, and prescindere da.' },
      completeMissing: { promptIt: 'L’esame finale verterà ___ bibliografia del corso.', hint: { bn: 'vertere ক্রিয়ার সাথে su + la যুক্ত হয়ে sulla বসবে', en: 'sulla' }, sampleIt: 'L’esame finale verterà sulla bibliografia del corso.' },
      buildSimilar: { patternIt: 'Tutti devono attenersi alle regole dell’archivio.', prompt: { bn: 'কোনো একটি B2 ক্রিয়ার সঠিক অব্যয়সহ বাক্য লিখুন।', en: 'Write a sentence showcasing a B2 verb + preposition.' }, sampleIt: 'I candidati devono ottemperare alle scadenze indicate nel bando.' },
      altEndingPrompt: { bn: 'একজন গবেষকের সফল মৌখিক পরীক্ষার দৃশ্য লিখুন।', en: 'Describe a candidate’s successful oral examination.' },
    },
  }),

  buildStory({
    id: 'st-b2-41', level: 'B2', titleIt: 'Una giornataccia prima dell’opera',
    title: { bn: 'অপেরার আগে ক্লান্তিকর দিন ও ভাবব্যঞ্জক প্রত্যয়', en: 'An awful day before the opera & evaluative suffixes' },
    topic: { bn: 'দৈনন্দিন সূক্ষ্মতা ও suffissi alterativi', en: 'Pragmatic nuances & evaluative suffixes' },
    grammarIds: ['suffissi-alterativi-b2'],
    vocabKeys: ["w:B2:il libretto d'opera", "w:B2:la serenità d'animo"],
    paragraphs: [
      { it: 'Dopo una giornataccia tra ritardi ferroviari, tempaccio autunnale e riunioni interminabili, Andrea tornò a casa cercando solo un po’ di serenità d’animo. Aveva però promesso alla sorella di accompagnarla al teatro dove avevano prenotato due posti per una prima assoluta.', tr: { bn: 'রেলের বিলম্ব, বাজে শরতের আবহাওয়া আর অন্তহীন সভার মাঝে একটি ভীষণ বাজে দিন কাটানোর পর আন্দ্রেয়া শুধু একটু মানসিক প্রশান্তি খুঁজতে বাসায় ফিরলেন। তবে তিনি বোনকে কথা দিয়েছিলেন একটি প্রথম প্রদর্শনীতে থিয়েটারে নিয়ে যাবেন।', en: 'After a dreadful day of train delays, foul autumn weather, and endless meetings, Andrea returned home only seeking some peace of mind. However, he had promised his sister to accompany her to a premiere at the theatre.' } },
      { it: 'Arrivati in foyer, un giovane impiegato gli porse con garbo il libretto d’opera: «Mi scusi, avrei una domandina rapida sul Suo abbonamento digitale» disse mitigando l’interruzione con un sorriso cortese. Un quarto d’ora dopo si aprì il sipario e l’acquisto di quei biglietti scontati si rivelò un vero affarone culturale.', tr: { bn: 'ফয়েতে পৌঁছাতেই একজন তরুণ কর্মী বিনয়ের সাথে তাঁর হাতে অপেরার গীতিনাট্য বইটি তুলে দিলেন: «ক্ষমা করবেন, আপনার ডিজিটাল সিজন টিকিট নিয়ে আমার একটি ছোট্ট প্রশ্ন ছিল» ভদ্র হাসিতে কথার তীব্রতা কমিয়ে বললেন। পনেরো মিনিট পর পর্দা উঠল এবং ছাড়ে কেনা ওই টিকিটগুলো দারুণ এক সাংস্কৃতিক সওদা প্রমাণিত হলো।', en: 'In the foyer, a young attendant politely handed him the opera libretto: "Excuse me, I just had one quick little question about your digital pass," he said softening the interruption with a polite smile. Fifteen minutes later the curtain rose and those discounted tickets turned out to be a cultural bargain.' } },
      { it: 'L’armonia della musica cancellò all’istante la stanchezza accumulata fin dal mattino.', tr: { bn: 'সংগীতের সুরেলা মূর্ছনা সকাল থেকে জমে থাকা সমস্ত ক্লান্তি মুহূর্তেই মুছে দিল।', en: 'The harmony of the music instantly erased all the fatigue built up since morning.' } },
    ],
    wordGlossary: [
      { word: "libretto d'opera", base: "il libretto d'opera", tr: { bn: 'অপেরার গীতিনাট্য বই', en: 'opera libretto' }, pos: 'noun' },
      { word: "serenità d'animo", base: "la serenità d'animo", tr: { bn: 'মানসিক প্রশান্তি', en: 'peace of mind' }, pos: 'noun' },
    ],
    grammarBreakdown: [
      { sentenceIt: 'Una giornataccia / tempaccio / libretto d’opera / una domandina / un vero affarone.', ruleTitle: { bn: 'ভাবব্যঞ্জক প্রত্যয় (Alterazione morfologica)', en: 'Evaluative & lexicalised suffixes' }, explanation: { bn: '-accia/-accio বিরক্তি, -ina বিনয়ী সংকোচ কমানো, -one বড়/দারুণ সওদা, এবং libretto স্থায়ী বিশেষ্য।', en: 'Suffixes encode attitude: -accio (negative), -ina (polite hedging), -one (augmentative).' }, grammarId: 'suffissi-alterativi-b2' },
    ],
    mcq: [
      { id: 'stb2-41-q1', prompt: { bn: '«avrei una domandina»-তে প্রত্যয়টি কেন ব্যবহার করা হয়েছে?', en: 'Why did the attendant use the diminutive "una domandina"?' }, options: ['অবজ্ঞা করতে', 'বিনয়ীভাবে প্রশ্নটি হালকা বা সহজ করতে', 'রাগ প্রকাশ করতে', 'বড় আকার বোঝাতে'], answer: 1, explanation: { bn: 'ভদ্রভাবে অনুরোধের তীব্রতা কমাতে (mitigazione)।', en: 'To politely soften the interruption.' } },
    ],
    trueFalse: [
      { id: 'stb2-41-tf1', statementIt: 'Il termine «libretto d’opera» indica semplicemente qualsiasi libro tascabile.', statement: { bn: '«libretto d’opera» বলতে যেকোনো ছোট পকেট বই বোঝায়।', en: 'Libretto d’opera just means any tiny book.' }, answer: false, explanation: { bn: 'এটি অপেরার গীতিনাট্যের নির্দিষ্ট স্থায়ী পারিভাষিক শব্দ।', en: 'It is a lexicalised noun meaning the text of an opera.' } },
    ],
    fillBlank: [
      { id: 'stb2-41-fb1', sentence: 'Acquistare quel palazzo storico a metà prezzo è stato un vero ___.', options: ['affaruccio', 'affarone', 'affaraccio', 'affaretto'], answer: 1, explanation: { bn: 'দারুণ লাভজনক সুযোগ = un vero affarone।', en: 'Augmentative affarone means a great bargain.' } },
    ],
    shortAnswer: [
      { id: 'stb2-41-sa1', question: { bn: 'সকাল থেকে জমে থাকা ক্লান্তি কীভাবে দূর হয়েছিল?', en: 'What erased Andrea’s fatigue?' }, sampleAnswerIt: 'L’armonia della musica durante lo spettacolo.', keywords: ['musica', 'armonia'] },
    ],
    practice: {
      retellPrompt: { bn: 'giornataccia, domandina এবং affarone ব্যবহার করে সন্ধ্যাটির সারাংশ লিখুন।', en: 'Summarise the theatre evening using giornataccia, domandina, and affarone.' },
      completeMissing: { promptIt: 'Con questo ___ conviene rimandare la partenza.', hint: { bn: 'tempo খারাপ অর্থে: tempaccio', en: 'tempaccio' }, sampleIt: 'Con questo tempaccio conviene rimandare la partenza.' },
      buildSimilar: { patternIt: 'Le porto un pensierino simbolico per ringraziarLa.', prompt: { bn: 'কোনো স্নেহ বা বিনয়ী প্রত্যয়সহ একটি বাক্য লিখুন।', en: 'Write a sentence with a polite or affectionate diminutive.' }, sampleIt: 'Ho soltanto una domandina rapida riguardo al libretto universitario.' },
      altEndingPrompt: { bn: 'অনুষ্ঠান শেষে বোন ও ভাইয়ের রাতের খাবারের আড্ডা লিখুন।', en: 'Describe their cheerful post-opera supper.' },
    },
  }),

  buildStory({
    id: 'st-b2-42', level: 'B2', titleIt: 'L’interoperabilità e i diritti sul lavoro',
    title: { bn: 'আন্তঃকার্যক্ষমতা, শ্রম অধিকার ও শব্দগঠন', en: 'Interoperability, labour rights & word formation' },
    topic: { bn: 'শ্রম আইন ও formazione delle parole', en: 'Labour law & derivation/prefixes' },
    grammarIds: ['formazione-parole-b2'],
    vocabKeys: ['w:B2:irreversibile', 'w:B2:irrilevante', "w:B2:l'interoperabilità", 'w:B2:il licenziamento illegittimo'],
    paragraphs: [
      { it: 'Una recente sentenza del tribunale del lavoro ha annullato un licenziamento illegittimo disposto tramite algoritmo automatizzato senza supervisione umana. Secondo il giudice, l’assenza di trasparenza nelle valutazioni automatiche non è un dettaglio irrilevante, bensì una lesione della dignità professionale.', tr: { bn: 'শ্রম আদালতের সাম্প্রতিক এক রায় মানব তদারকি ছাড়াই স্বয়ংক্রিয় অ্যালগরিদমের মাধ্যমে জারি করা একটি অবৈধ বরখাস্তের আদেশ বাতিল করেছে। বিচারকের মতে, স্বয়ংক্রিয় মূল্যায়নে স্বচ্ছতার অভাব কোনো অপ্রাসঙ্গিক বিষয় নয়, বরং পেশাগত মর্যাদার লঙ্ঘন।', en: 'A recent labour-court ruling annulled an unlawful dismissal issued by an automated algorithm without human supervision. According to the judge, lack of transparency in automated scoring is not an irrelevant detail, but an injury to professional dignity.' } },
      { it: 'Per evitare distorsioni simili e danni irreversibili alla reputazione dei dipendenti, la nuova direttiva impone l’interoperabilità dei registri aziendali verificabili. Ogni sistema di monitoraggio deve restare comprensibile e contestabile in sede sindacale.', tr: { bn: 'অনুরূপ বিকৃতি ও কর্মীদের সুনামের অপরিবর্তনীয় ক্ষতি এড়াতে নতুন নির্দেশনা যাচাইযোগ্য প্রাতিষ্ঠানিক নথির আন্তঃকার্যক্ষমতা বাধ্যতামূলক করেছে। প্রতিটি নজরদারি ব্যবস্থা ইউনিয়ন পর্যায়ে বোধগম্য ও চ্যালেঞ্জযোগ্য থাকতে হবে।', en: 'To prevent similar distortions and irreversible harm to employees’ reputations, the new directive mandates interoperability of auditable corporate records. Every monitoring system must remain intelligible and challengeable by unions.' } },
      { it: 'Riconoscere i prefissi e i suffissi di questi termini aiuta anche il lettore a orientarsi rapidamente nei testi normativi europei.', tr: { bn: 'এই শব্দগুলোর উপসর্গ ও প্রত্যয় চিনতে পারা পাঠককেও ইউরোপীয় আইনি পাঠ্যে দ্রুত পথ খুঁজে পেতে সাহায্য করে।', en: 'Recognising the prefixes and suffixes of these terms also helps readers navigate European legal texts swiftly.' } },
    ],
    wordGlossary: [
      { word: 'licenziamento illegittimo', base: 'il licenziamento illegittimo', tr: { bn: 'অবৈধ বরখাস্ত', en: 'unlawful dismissal' }, pos: 'noun' },
      { word: 'interoperabilità', base: "l'interoperabilità", tr: { bn: 'আন্তঃকার্যক্ষমতা', en: 'interoperability' }, pos: 'noun' },
      { word: 'irreversibile', base: 'irreversibile', tr: { bn: 'অপরিবর্তনীয়', en: 'irreversible' }, pos: 'adj' },
    ],
    grammarBreakdown: [
      { sentenceIt: 'illegittimo (in+legittimo) / irrilevante (in+rilevante) / irreversibile / interoperabilità.', ruleTitle: { bn: 'উপসর্গ সমীভবন ও প্রত্যয়', en: 'Negative assimilation & nominal suffixes' }, explanation: { bn: 'l-এর আগে in → il (illegittimo); r-এর আগে in → ir (irreversibile); বিমূর্ত বিশেষণে -ibile + -ità = -ibilità।', en: 'Prefix in- assimilates to il- before l and ir- before r; -ità builds abstract nouns.' }, grammarId: 'formazione-parole-b2' },
    ],
    mcq: [
      { id: 'stb2-42-q1', prompt: { bn: 'শ্রম আদালত কেন বরখাস্তের আদেশ বাতিল করেছেন?', en: 'Why did the labour court annul the dismissal?' }, options: ['বেতন বেশি ছিল', 'মানব তদারকিহীন অস্বচ্ছ অ্যালগরিদম ব্যবহারের কারণে', 'সাক্ষী অনুপস্থিত ছিল', 'কোম্পানি বন্ধ হয়েছে'], answer: 1, explanation: { bn: 'সঠিক উত্তর: মানব তদারকিহীন অস্বচ্ছ অ্যালগরিদম ব্যবহারের কারণে — পাঠ্যাংশে বলা হয়েছে: «শ্রম আদালতের সাম্প্রতিক এক রায় মানব তদারকি ছাড়াই স্বয়ংক্রিয় অ্যালগরিদমের মাধ্যমে জারি করা একটি অবৈধ বরখাস্তের আদেশ বাতিল করেছে। বিচারকের মতে, স্বয়ংক্রিয় মূল্যায়নে স্বচ্ছতার অভাব কোনো অপ্রাসঙ্গিক বিষয় নয়, বরং পেশাগত মর্যাদার লঙ্ঘন।» (disposto tramite algoritmo senza supervisione umana e senza trasparenza)।', en: 'Because of an opaque automated algorithm without human oversight.' } },
    ],
    trueFalse: [
      { id: 'stb2-42-tf1', statementIt: 'La nuova direttiva consente sistemi automatici non verificabili dai sindacati.', statement: { bn: 'নতুন নির্দেশনা ইউনিয়নের অজানা অযাচাইকৃত স্বয়ংক্রিয় ব্যবস্থার অনুমতি দেয়।', en: 'The directive allows non-auditable automated systems.' }, answer: false, explanation: { bn: 'প্রতিটি ব্যবস্থা বোধগম্য ও চ্যালেঞ্জযোগ্য থাকতে হবে।', en: 'Systems must remain intelligible and challengeable.' } },
    ],
    fillBlank: [
      { id: 'stb2-42-fb1', sentence: 'L’inquinamento delle falde ha causato un danno ___.', options: ['inreversibile', 'irreversibile', 'sreversibile', 'disreversibile'], answer: 1, explanation: { bn: 'সঠিক রূপান্তর: «in- + reversibile» থেকে পরিবর্তিত হয়ে «irreversibile» ব্যবহৃত হয়।', en: 'in- assimilates to ir- before r.' } },
    ],
    shortAnswer: [
      { id: 'stb2-42-sa1', question: { bn: 'বিচারকের মতে স্বচ্ছতার অভাব কীসের লঙ্ঘন?', en: 'What does the lack of transparency injure according to the judge?' }, sampleAnswerIt: 'Una lesione della dignità professionale.', keywords: ['dignità', 'professionale'] },
    ],
    practice: {
      retellPrompt: { bn: 'illegittimo, irrilevante ও interoperabilità ব্যবহার করে রায়ের সারাংশ লিখুন।', en: 'Summarise the ruling using illegittimo, irrilevante, and interoperabilità.' },
      completeMissing: { promptIt: 'La fonte anonima è risultata del tutto ___.', hint: { bn: 'attendibile-এর বিপরীত: inattendibile', en: 'inattendibile' }, sampleIt: 'La fonte anonima è risultata del tutto inattendibile.' },
      buildSimilar: { patternIt: 'La semplificazione evita ritardi evitabili.', prompt: { bn: '-zione বা -ità যুক্ত দুটি বিশেষ্য দিয়ে বাক্য লিখুন।', en: 'Write a sentence combining -zione and -ità nouns.' }, sampleIt: 'La digitalizzazione garantisce tracciabilità e trasparenza amministrativa.' },
      altEndingPrompt: { bn: 'বরখাস্ত বাতিল হওয়া কর্মীর কর্মক্ষেত্রে প্রত্যাবর্তন লিখুন।', en: 'Describe the worker’s reinstatement and new human-review safeguards.' },
    },
  }),

  buildStory({
    id: 'st-b2-43', level: 'B2', titleIt: 'L’autocertificazione e il referendum',
    title: { bn: 'স্ব-ঘোষণাপত্র ও আইনি দাপ্তরিক পরিভাষা', en: 'Self-certification & legal-bureaucratic prose' },
    topic: { bn: 'নাগরিক অধিকার ও আইনি শব্দভাণ্ডার', en: 'Civic rights & legal-administrative Italian' },
    grammarIds: ['lessico-giuridico-burocratico'],
    vocabKeys: ["w:B2:l'autocertificazione", 'w:B2:il referendum abrogativo', 'w:B2:ottemperare'],
    paragraphs: [
      { it: 'Nell’ordinamento italiano, il cittadino che presenta un’istanza a un ente pubblico può ricorrere all’autocertificazione per attestare residenza, stato di famiglia e titoli di studio, senza produrre certificati cartacei a pagamento. Chi sottoscrive la dichiarazione deve tuttavia ottemperare rigorosamente all’obbligo di veridicità, pena la decadenza dai benefici ottenuti.', tr: { bn: 'ইতালীয় আইন ব্যবস্থায়, সরকারি প্রতিষ্ঠানে আবেদন জমাদানকারী নাগরিক বিনা মূল্যে আবাসন, পারিবারিক অবস্থা ও শিক্ষাগত যোগ্যতা প্রমাণ করতে স্ব-ঘোষণাপত্র ব্যবহার করতে পারেন, আলাদা কাগজের সনদ না দিয়েই। তবে স্বাক্ষরকারীকে অবশ্যই সত্যতার বাধ্যবাধকতা কঠোরভাবে মেনে চলতে হবে, নইলে প্রাপ্ত সুবিধা বাতিল হবে।', en: 'In the Italian legal system, a citizen submitting an application to a public body can use self-certification to declare residence, family status, and qualifications without paying for paper certificates. Signatories must nevertheless comply strictly with truthfulness obligations under penalty of forfeiting benefits.' } },
      { it: 'Allo stesso modo, la partecipazione diretta alle scelte legislative trova espressione nel referendum abrogativo, qualora cinquecentomila elettori o cinque consigli regionali intendano abrogare in tutto o in parte una legge ordinaria.', tr: { bn: 'একইভাবে, আইন প্রণয়ন সংক্রান্ত সিদ্ধান্তে সরাসরি অংশগ্রহণ প্রকাশিত হয় আইন বাতিলের গণভোটের মাধ্যমে, যদি পাঁচ লক্ষ ভোটার বা পাঁচটি আঞ্চলিক পরিষদ কোনো সাধারণ আইন আংশিক বা সম্পূর্ণভাবে বাতিল করতে চান।', en: 'Similarly, direct participation in legislative choices finds expression in the abrogative referendum, whenever five hundred thousand voters or five regional councils intend to repeal an ordinary statute in whole or part.' } },
      { it: 'La conoscenza del lessico amministrativo permette così a ciascuno di esercitare consapevolmente i propri diritti senza timore dei moduli ufficiali.', tr: { bn: 'দাপ্তরিক পরিভাষা জানা এভাবে প্রতিটি নাগরিককে সরকারি ফর্মের ভয় ছাড়াই সচেতনভাবে নিজের অধিকার প্রয়োগ করতে সক্ষম করে।', en: 'Mastering administrative terminology thus enables everyone to exercise their rights knowingly without fear of official forms.' } },
    ],
    wordGlossary: [
      { word: 'autocertificazione', base: "l'autocertificazione", tr: { bn: 'স্ব-ঘোষণাপত্র', en: 'self-certification' }, pos: 'noun' },
      { word: 'referendum abrogativo', base: 'il referendum abrogativo', tr: { bn: 'আইন বাতিলের গণভোট', en: 'abrogative referendum' }, pos: 'noun' },
      { word: 'ottemperare', base: 'ottemperare', tr: { bn: 'মেনে চলা / পালন করা', en: 'to comply with' }, pos: 'verb' },
    ],
    grammarBreakdown: [
      { sentenceIt: 'Presenta un’istanza / produrre certificati / ottemperare all’obbligo / abrogare una legge.', ruleTitle: { bn: 'আইনি-দাপ্তরিক পরিভাষা ও সরল অর্থ', en: 'Bureaucratic vs plain Italian' }, explanation: { bn: 'সঠিক উত্তর ও ব্যাকরণ সূত্র: «istanza (= domanda), produrre (= presentare), ottemperare (= rispettare), diniego (= rifiuto), altresì (= inoltre)» (Mapping formal administrative lexemes to everyday synonyms)।', en: 'Mapping formal administrative lexemes to everyday synonyms.' }, grammarId: 'lessico-giuridico-burocratico' },
    ],
    mcq: [
      { id: 'stb2-43-q1', prompt: { bn: 'আইন বাতিলের গণভোট ডাকতে কতজন ভোটারের স্বাক্ষর প্রয়োজন?', en: 'How many voters’ signatures are needed to call an abrogative referendum?' }, options: ['১ লক্ষ', '৫ লক্ষ', '১০ লক্ষ', '৫০ হাজার'], answer: 1, explanation: { bn: 'সঠিক উত্তর: ৫ লক্ষ — পাঠ্যাংশে বলা হয়েছে: «একইভাবে, আইন প্রণয়ন সংক্রান্ত সিদ্ধান্তে সরাসরি অংশগ্রহণ প্রকাশিত হয় আইন বাতিলের গণভোটের মাধ্যমে, যদি পাঁচ লক্ষ ভোটার বা পাঁচটি আঞ্চলিক পরিষদ কোনো সাধারণ আইন আংশিক বা সম্পূর্ণভাবে বাতিল করতে চান।» (cinquecentomila elettori)।', en: 'Five hundred thousand voters.' } },
    ],
    trueFalse: [
      { id: 'stb2-43-tf1', statementIt: 'L’autocertificazione esenta il cittadino dall’obbligo di dire il vero.', statement: { bn: 'স্ব-ঘোষণাপত্র নাগরিককে সত্য বলার বাধ্যবাধকতা থেকে অব্যাহতি দেয়।', en: 'Self-certification exempts citizens from telling the truth.' }, answer: false, explanation: { bn: 'অসত্য তথ্যে প্রাপ্ত সুবিধা বাতিল (decadenza) এবং শাস্তি হয়।', en: 'False declarations lead to forfeiture and penalties.' } },
    ],
    fillBlank: [
      { id: 'stb2-43-fb1', sentence: 'L’ente ha opposto un ___ motivato alla domanda incompleta.', options: ['diniego', 'profitto', 'raccolto', 'doppiaggio'], answer: 0, explanation: { bn: 'দাপ্তরিক ভাষায় প্রত্যাখ্যান = diniego।', en: 'Formal refusal is diniego.' } },
    ],
    shortAnswer: [
      { id: 'stb2-43-sa1', question: { bn: 'স্ব-ঘোষণাপত্রের মাধ্যমে নাগরিক কোন তিনটি তথ্য প্রমাণ করতে পারেন?', en: 'Which three things can a citizen certify by autocertificazione?' }, sampleAnswerIt: 'Residenza, stato di famiglia e titoli di studio.', keywords: ['residenza', 'famiglia'] },
    ],
    practice: {
      retellPrompt: { bn: 'istanza, autocertificazione ও ottemperare ব্যবহার করে দাপ্তরিক প্রক্রিয়াটি লিখুন।', en: 'Summarise civic procedures using istanza, autocertificazione, and ottemperare.' },
      completeMissing: { promptIt: 'Le domande vanno presentate ___ e non oltre venerdì.', hint: { bn: 'সময়ের সীমা: entro', en: 'entro' }, sampleIt: 'Le domande vanno presentate entro e non oltre venerdì.' },
      buildSimilar: { patternIt: 'Il cittadino può presentare un’istanza via PEC.', prompt: { bn: 'দাপ্তরিক দুটি শব্দের সমার্থক ব্যবহার দেখিয়ে একটি বাক্য লিখুন।', en: 'Write an administrative sentence using formal register.' }, sampleIt: 'Qualora il richiedente non ottemperi alla diffida, l’ufficio opporrà un diniego.' },
      altEndingPrompt: { bn: 'পৌরসভার নতুন সহজবোধ্য ফর্ম চালুর সংবাদ লিখুন।', en: 'Describe the launch of a plain-Italian guide at city hall.' },
    },
  }),

  buildStory({
    id: 'st-b2-44', level: 'B2', titleIt: 'La diversificazione del portafoglio',
    title: { bn: 'পোর্টফোলিও বহুমুখীকরণ ও অর্থনৈতিক ভাষা', en: 'Portfolio diversification & financial register' },
    topic: { bn: 'অর্থায়ন ও কর্পোরেট পরিভাষা', en: 'Corporate finance & collocations' },
    grammarIds: ['lessico-economico-finanziario'],
    vocabKeys: ['w:B2:il fatturato annuo', "w:B2:il portafoglio d'investimento", 'w:B2:la diversificazione', 'w:B2:il consiglio di amministrazione'],
    paragraphs: [
      { it: 'Riunito a Milano per approvare il consuntivo, il consiglio di amministrazione di una media impresa meccatronica ha analizzato la crescita del fatturato annuo, salito del nove per cento grazie alle commesse verdi. Per consolidare la liquidità senza esporsi a un solo settore, i dirigenti hanno scelto la diversificazione del portafoglio d’investimento.', tr: { bn: 'বার্ষিক চূড়ান্ত হিসাব অনুমোদনের জন্য মিলানে মিলিত হয়ে একটি মাঝারি মেকাট্রনিক্স কোম্পানির পরিচালনা পর্ষদ বার্ষিক বিক্রয়ের প্রবৃদ্ধি বিশ্লেষণ করেছে, যা সবুজ অর্ডারের কারণে নয় শতাংশ বেড়েছে। একটিমাত্র খাতের ঝুঁকিতে না থেকে তারল্য মজবুত করতে পরিচালকেরা বিনিয়োগ পোর্টফোলিওর বহুমুখীকরণ বেছে নিয়েছেন।', en: 'Meeting in Milan to approve the final balance, the board of directors of a medium mechatronics firm analysed annual turnover growth, up nine per cent thanks to green orders. To consolidate liquidity without overexposure to a single sector, executives chose portfolio diversification.' } },
      { it: 'Inoltre, per ammortizzare i costi della transizione digitale in tre esercizi, la società ha evitato di contrarre debiti a tasso variabile e ha destinato parte degli utili alle borse di formazione per giovani tecnici.', tr: { bn: 'এছাড়াও, তিন অর্থবছরে ডিজিটাল রূপান্তরের ব্যয় সমন্বয় করতে কোম্পানিটি পরিবর্তনশীল সুদে ঋণ নেওয়া এড়িয়ে গেছে এবং মুনাফার একটি অংশ তরুণ টেকনিশিয়ানদের প্রশিক্ষণ বৃত্তিতে বরাদ্দ করেছে।', en: 'Furthermore, to amortise digital-transition costs over three financial years, the firm avoided taking on variable-rate debt and allocated part of earnings to training grants for young technicians.' } },
      { it: 'Questo equilibrio tra prudenza finanziaria e investimento nell’innovazione ha rafforzato la fiducia delle banche partner.', tr: { bn: 'আর্থিক বিচক্ষণতা এবং উদ্ভাবনে বিনিয়োগের মধ্যকার এই ভারসাম্য অংশীদার ব্যাংকগুলোর আস্থা বাড়িয়েছে।', en: 'This balance between financial prudence and investment in innovation strengthened partner banks’ confidence.' } },
    ],
    wordGlossary: [
      { word: 'fatturato annuo', base: 'il fatturato annuo', tr: { bn: 'বার্ষিক মোট বিক্রয়', en: 'annual turnover' }, pos: 'noun' },
      { word: "portafoglio d'investimento", base: "il portafoglio d'investimento", tr: { bn: 'বিনিয়োগ পোর্টফোলিও', en: 'investment portfolio' }, pos: 'noun' },
      { word: 'consiglio di amministrazione', base: 'il consiglio di amministrazione', tr: { bn: 'পরিচালনা পর্ষদ', en: 'board of directors' }, pos: 'noun' },
    ],
    grammarBreakdown: [
      { sentenceIt: 'Analizzato la crescita del fatturato / ammortizzare i costi / contrarre debiti.', ruleTitle: { bn: 'অর্থনৈতিক ও কর্পোরেট শব্দজোড়', en: 'Financial & corporate collocations' }, explanation: { bn: 'fare-এর বদলে registrare un fatturato, stanziare fondi, ammortizzare i costi, contrarre un debito ব্যবহৃত হয়।', en: 'High-register verbs replace generic fare/prendere in financial Italian.' }, grammarId: 'lessico-economico-finanziario' },
    ],
    mcq: [
      { id: 'stb2-44-q1', prompt: { bn: 'কোম্পানিটির বার্ষিক বিক্রয় কত শতাংশ বেড়েছে?', en: 'By how much did the firm’s annual turnover grow?' }, options: ['৩ শতাংশ', '৯ শতাংশ', '১৫ শতাংশ', '২০ শতাংশ'], answer: 1, explanation: { bn: 'সঠিক উত্তর: ৯ শতাংশ — পাঠ্যাংশে বলা হয়েছে: «বার্ষিক চূড়ান্ত হিসাব অনুমোদনের জন্য মিলানে মিলিত হয়ে একটি মাঝারি মেকাট্রনিক্স কোম্পানির পরিচালনা পর্ষদ বার্ষিক বিক্রয়ের প্রবৃদ্ধি বিশ্লেষণ করেছে, যা সবুজ অর্ডারের কারণে নয় শতাংশ বেড়েছে। একটিমাত্র খাতের ঝুঁকিতে না থেকে তারল্য মজবুত করতে পরিচালকেরা বিনিয়োগ পোর্টফোলিওর বহুমুখীকরণ বেছে নিয়েছেন।» (salito del nove per cento)।', en: 'Up nine per cent.' } },
    ],
    trueFalse: [
      { id: 'stb2-44-tf1', statementIt: 'L’azienda ha finanziato la transizione con un grosso mutuo a tasso variabile.', statement: { bn: 'কোম্পানিটি পরিবর্তনশীল সুদের বড় ঋণ নিয়ে রূপান্তরের অর্থায়ন করেছে।', en: 'The firm funded its transition with variable-rate debt.' }, answer: false, explanation: { bn: 'বাক্যটি মিথ্যা — গল্পে আসলে বলা হয়েছে: «এছাড়াও, তিন অর্থবছরে ডিজিটাল রূপান্তরের ব্যয় সমন্বয় করতে কোম্পানিটি পরিবর্তনশীল সুদে ঋণ নেওয়া এড়িয়ে গেছে এবং মুনাফার একটি অংশ তরুণ টেকনিশিয়ানদের প্রশিক্ষণ বৃত্তিতে বরাদ্দ করেছে।» (ha evitato di contrarre debiti a tasso variabile)।', en: 'It avoided taking on variable-rate debt.' } },
    ],
    fillBlank: [
      { id: 'stb2-44-fb1', sentence: 'La società ha ___ un fatturato annuo record.', options: ['fatto', 'registrato', 'stagionato', 'abrogato'], answer: 1, explanation: { bn: 'বিক্রয় বা আয় নথিভুক্ত করা = registrare un fatturato।', en: 'Economic register uses registrare un fatturato.' } },
    ],
    shortAnswer: [
      { id: 'stb2-44-sa1', question: { bn: 'কেন পর্ষদ পোর্টফোলিও বহুমুখীকরণের সিদ্ধান্ত নিয়েছে?', en: 'Why did the board choose portfolio diversification?' }, sampleAnswerIt: 'Per consolidare la liquidità senza esporsi a un solo settore.', keywords: ['liquidità', 'settore'] },
    ],
    practice: {
      retellPrompt: { bn: 'consiglio di amministrazione, fatturato ও ammortizzare দিয়ে প্রতিবেদনটি লিখুন।', en: 'Summarise the board meeting using corporate finance collocations.' },
      completeMissing: { promptIt: 'Il piano permette di ___ i costi entro tre anni.', hint: { bn: 'ব্যয় তুলে আনা: ammortizzare', en: 'ammortizzare' }, sampleIt: 'Il piano permette di ammortizzare i costi entro tre anni.' },
      buildSimilar: { patternIt: 'Stanziare fondi per la ricerca aumenta il valore dell’impresa.', prompt: { bn: 'অর্থনৈতিক দুটি শব্দজোড় দিয়ে একটি বাক্য লিখুন।', en: 'Write a sentence with two economic collocations.' }, sampleIt: 'La diversificazione del portafoglio riduce il rischio senza frenare il fatturato.' },
      altEndingPrompt: { bn: 'তরুণ টেকনিশিয়ানদের প্রশিক্ষণ বৃত্তির প্রভাব বর্ণনা করুন।', en: 'Describe the impact of the firm’s youth technical grants.' },
    },
  }),

  buildStory({
    id: 'st-b2-45', level: 'B2', titleIt: 'Revisione paritaria e verifica empirica',
    title: { bn: 'পিয়ার রিভিউ ও বৈজ্ঞানিক গদ্যের রীতি', en: 'Peer review & scientific prose' },
    topic: { bn: 'গবেষণা পদ্ধতি ও lessico scientifico', en: 'Scientific method & academic register' },
    grammarIds: ['lessico-scientifico-accademico'],
    vocabKeys: ['w:B2:la verifica empirica', 'w:B2:la pubblicazione accademica', 'w:B2:la revisione paritaria', "w:B2:l'attendibilità dei dati"],
    paragraphs: [
      { it: 'Prima di giungere alla pubblicazione accademica su una rivista internazionale, ogni articolo scientifico supera una rigorosa revisione paritaria anonima. I revisori indipendenti esaminano innanzi tutto l’attendibilità dei dati raccolti e la chiarezza del campione statistico selezionato.', tr: { bn: 'একটি আন্তর্জাতিক জার্নালে একাডেমিক প্রকাশনায় পৌঁছানোর আগে প্রতিটি বৈজ্ঞানিক নিবন্ধ কঠোর বেনামি পিয়ার রিভিউ অতিক্রম করে। স্বাধীন পর্যালোচকেরা সবার আগে সংগৃহীত তথ্যের নির্ভরযোগ্যতা এবং নির্বাচিত পরিসংখ্যানগত নমুনার স্পষ্টতা পরীক্ষা করেন।', en: 'Before reaching academic publication in an international journal, every scientific paper passes rigorous anonymous peer review. Independent reviewers examine first of all the reliability of collected data and clarity of the selected statistical sample.' } },
      { it: 'Nel caso di uno studio medico condotto a Padova, gli autori hanno sottoposto la propria ipotesi iniziale a una verifica empirica di diciotto mesi, distinguendo con prudenza tra semplice correlazione e vero nesso causale.', tr: { bn: 'পাদোয়ায় পরিচালিত একটি চিকিৎসা গবেষণার ক্ষেত্রে লেখকেরা তাঁদের প্রাথমিক অনুমানকে আঠারো মাসের অভিজ্ঞতালব্ধ যাচাইয়ের মুখোমুখি করেছেন এবং নিছক পারস্পরিক সম্পর্ক ও প্রকৃত কার্যকারণ সম্পর্কের মধ্যে সতর্কতার সাথে পার্থক্য দেখিয়েছেন।', en: 'In the case of a medical study conducted in Padua, the authors subjected their initial hypothesis to an eighteen-month empirical verification, carefully distinguishing between mere correlation and true causal link.' } },
      { it: 'Quando tutte le obiezioni metodologiche vengono risolte con trasparenza, la comunità scientifica riconosce pieno valore ai risultati.', tr: { bn: 'যখন পদ্ধতিগত সব আপত্তি স্বচ্ছতার সাথে সমাধান করা হয়, তখন বৈজ্ঞানিক সমাজ ফলাফলের পূর্ণ মূল্য স্বীকৃতি দেয়।', en: 'When all methodological objections are transparently resolved, the scientific community recognises the full value of the results.' } },
    ],
    wordGlossary: [
      { word: 'revisione paritaria', base: 'la revisione paritaria', tr: { bn: 'পিয়ার রিভিউ', en: 'peer review' }, pos: 'noun' },
      { word: 'verifica empirica', base: 'la verifica empirica', tr: { bn: 'অভিজ্ঞতালব্ধ যাচাই', en: 'empirical verification' }, pos: 'noun' },
      { word: 'attendibilità dei dati', base: "l'attendibilità dei dati", tr: { bn: 'তথ্যের নির্ভরযোগ্যতা', en: 'data reliability' }, pos: 'noun' },
    ],
    grammarBreakdown: [
      { sentenceIt: 'Sottoporre l’ipotesi a verifica empirica / distinguendo tra correlazione e nesso causale.', ruleTitle: { bn: 'বৈজ্ঞানিক গদ্যের রীতি', en: 'Scientific prose conventions' }, explanation: { bn: 'বস্তুনিষ্ঠ কর্মবাচ্য ও নৈর্ব্যক্তিক ক্রিয়ার সাথে নির্ভুল বৈজ্ঞানিক শব্দজোড় ব্যবহৃত হয়েছে।', en: 'Impersonal framing and exact research collocations define academic Italian.' }, grammarId: 'lessico-scientifico-accademico' },
    ],
    mcq: [
      { id: 'stb2-45-q1', prompt: { bn: 'পাদোয়ার গবেষণাটির অভিজ্ঞতালব্ধ যাচাই কত মাস চলেছিল?', en: 'How many months did the empirical verification in Padua last?' }, options: ['৬ মাস', '১২ মাস', '১৮ মাস', '৩৬ মাস'], answer: 2, explanation: { bn: 'সঠিক উত্তর: ১৮ মাস — পাঠ্যাংশে বলা হয়েছে: «পাদোয়ায় পরিচালিত একটি চিকিৎসা গবেষণার ক্ষেত্রে লেখকেরা তাঁদের প্রাথমিক অনুমানকে আঠারো মাসের অভিজ্ঞতালব্ধ যাচাইয়ের মুখোমুখি করেছেন এবং নিছক পারস্পরিক সম্পর্ক ও প্রকৃত কার্যকারণ সম্পর্কের মধ্যে সতর্কতার সাথে পার্থক্য দেখিয়েছেন।» (una verifica empirica di diciotto mesi)।', en: 'Eighteen months.' } },
    ],
    trueFalse: [
      { id: 'stb2-45-tf1', statementIt: 'Una correlazione statistica dimostra sempre automaticamente un nesso causale.', statement: { bn: 'একটি পরিসংখ্যানগত সম্পর্ক সর্বদা স্বয়ংক্রিয়ভাবে কার্যকারণ সম্পর্ক প্রমাণ করে।', en: 'Statistical correlation always automatically proves causation.' }, answer: false, explanation: { bn: 'দুটির মধ্যে সতর্কতার সাথে পার্থক্য করতে হয়।', en: 'Researchers must carefully distinguish correlation from causation.' } },
    ],
    fillBlank: [
      { id: 'stb2-45-fb1', sentence: 'Lo studio confuta la ___ precedente mediante nuovi esperimenti.', options: ['tesi', 'visura', 'aliquota', 'stagionatura'], answer: 0, explanation: { bn: 'পূর্বের তত্ত্ব খণ্ডন করা = confutare la tesi।', en: 'confutare la tesi = to refute the thesis.' } },
    ],
    shortAnswer: [
      { id: 'stb2-45-sa1', question: { bn: 'স্বাধীন পর্যালোচকেরা নিবন্ধের কোন দুটি দিক সবার আগে পরীক্ষা করেন?', en: 'What two aspects do reviewers examine first?' }, sampleAnswerIt: 'L’attendibilità dei dati raccolti e la chiarezza del campione statistico.', keywords: ['attendibilità', 'campione'] },
    ],
    practice: {
      retellPrompt: { bn: 'revisione paritaria, verifica empirica ও correlazione ব্যবহার করে পদ্ধতিটি লিখুন।', en: 'Summarise peer review using exact scientific collocations.' },
      completeMissing: { promptIt: 'I dati raccolti garantiscono la piena ___ dei risultati.', hint: { bn: 'বিমূর্ত বৈজ্ঞানিক বিশেষ্য attendibilità / replicabilità বসান', en: 'attendibilità' }, sampleIt: 'I dati raccolti garantiscono la piena attendibilità dei risultati.' },
      buildSimilar: { patternIt: 'Lo studio sottopone l’ipotesi a verifica empirica.', prompt: { bn: 'বৈজ্ঞানিক দুটি শব্দজোড় দিয়ে একটি বাক্য লিখুন।', en: 'Write a sentence with two academic collocations.' }, sampleIt: 'Solo dopo la revisione paritaria l’articolo è stato ammesso alla pubblicazione accademica.' },
      altEndingPrompt: { bn: 'নিবন্ধটি প্রকাশিত হওয়ার পর আন্তর্জাতিক সম্মেলনে আমন্ত্রণের খবর লিখুন।', en: 'Describe the authors’ invitation to an international symposium.' },
    },
  }),

  buildStory({
    id: 'st-b2-46', level: 'B2', titleIt: 'Il giornalismo d’inchiesta e i titoli',
    title: { bn: 'অনুসন্ধানী সাংবাদিকতা ও শিরোনামের শৈলী', en: 'Investigative journalism & headline syntax' },
    topic: { bn: 'সংবাদমাধ্যম ও lessico giornalistico', en: 'Journalism & headline syntax' },
    grammarIds: ['lessico-giornalistico'],
    vocabKeys: ["w:B2:il giornalismo d'inchiesta", 'w:B2:imprescindibile', 'w:B2:la libertà di stampa'],
    paragraphs: [
      { it: '«Caro affitti, varato il decreto: nuovi fondi per le residenze universitarie». Chi sfoglia un quotidiano italiano nota subito lo stile nominale dei titoli: poche parole dense, verbi ellittici e i due punti per separare il tema dalla notizia principale.', tr: { bn: '«চড়া বাড়ি ভাড়া, ডিক্রি অনুমোদিত: বিশ্ববিদ্যালয় ছাত্রাবাসের জন্য নতুন তহবিল»। যে কেউ একটি ইতালীয় দৈনিক উল্টে দেখলে সাথে সাথেই শিরোনামের বিশেষ্য শৈলী লক্ষ্য করবেন: অল্প কটি ঘন শব্দ, উহ্য ক্রিয়া এবং মূল বিষয় থেকে সংবাদটি আলাদা করতে কোলন।', en: '"High rents, decree launched: new funds for university halls." Anyone browsing an Italian daily notices headline nominal style: dense words, elliptical verbs, and a colon separating topic from core news.' } },
      { it: 'Dietro un’inchiesta seria, però, c’è un lavoro silenzioso di mesi. Il giornalismo d’inchiesta resta infatti un presidio imprescindibile per la trasparenza democratica e la libertà di stampa, purché ogni articolo poggi sulla verifica scrupolosa di documenti e testimonianze incrociate.', tr: { bn: 'তবে একটি নিষ্ঠাবান অনুসন্ধানী প্রতিবেদনের পেছনে থাকে মাসের পর মাস নীরব পরিশ্রম। অনুসন্ধানী সাংবাদিকতা আসলে গণতান্ত্রিক স্বচ্ছতা ও সংবাদপত্রের স্বাধীনতার জন্য একটি অপরিহার্য রক্ষাকবচ, শর্ত হলো প্রতিটি প্রতিবেদন নথিপত্র ও পরস্পর-যাচাইকৃত সাক্ষ্যের নিখুঁত পরীক্ষার ওপর দাঁড়াবে।', en: 'Behind serious investigation lies months of quiet work. Investigative journalism remains an indispensable safeguard for democratic transparency and press freedom, provided every piece rests on scrupulous verification of documents and cross-checked testimonies.' } },
      { it: 'Altrettanto essenziale è garantire il diritto di replica, affinché l’informazione rimanga sempre corretta ed equilibrata.', tr: { bn: 'তথ্য যেন সর্বদা সঠিক ও ভারসাম্যপূর্ণ থাকে সেজন্য উত্তর দেওয়ার অধিকার নিশ্চিত করাও সমান গুরুত্বপূর্ণ।', en: 'Equally essential is guaranteeing the right of reply, so reporting always remains fair and balanced.' } },
    ],
    wordGlossary: [
      { word: "giornalismo d'inchiesta", base: "il giornalismo d'inchiesta", tr: { bn: 'অনুসন্ধানী সাংবাদিকতা', en: 'investigative journalism' }, pos: 'noun' },
      { word: 'imprescindibile', base: 'imprescindibile', tr: { bn: 'অপরিহার্য', en: 'indispensable' }, pos: 'adj' },
      { word: 'libertà di stampa', base: 'la libertà di stampa', tr: { bn: 'সংবাদপত্রের স্বাধীনতা', en: 'freedom of the press' }, pos: 'noun' },
    ],
    grammarBreakdown: [
      { sentenceIt: 'Caro affitti, varato il decreto: nuovi fondi per le residenze.', ruleTitle: { bn: 'শিরোনামের বিশেষ্য শৈলী (Stile nominale)', en: 'Elliptical headline syntax' }, explanation: { bn: '«è stato varato»-এর è stato উহ্য রেখে কেবল varato এবং বিষয়-সংবাদ ভাগ করতে কোলন (:) ব্যবহৃত হয়েছে।', en: 'Auxiliaries are omitted and colons split topic from predicate.' }, grammarId: 'lessico-giornalistico' },
    ],
    mcq: [
      { id: 'stb2-46-q1', prompt: { bn: 'ইতালীয় সংবাদ শিরোনামে কোলন (:) কী কাজ করে?', en: 'What role does the colon play in Italian headlines?' }, options: ['বাক্য শেষ করে', 'মূল বিষয় থেকে প্রধান সংবাদটি আলাদা করে', 'প্রশ্ন করে', 'সংখ্যা গণনা করে'], answer: 1, explanation: { bn: 'সঠিক উত্তর: মূল বিষয় থেকে প্রধান সংবাদটি আলাদা করে — পাঠ্যাংশে বলা হয়েছে: ««চড়া বাড়ি ভাড়া, ডিক্রি অনুমোদিত: বিশ্ববিদ্যালয় ছাত্রাবাসের জন্য নতুন তহবিল»। যে কেউ একটি ইতালীয় দৈনিক উল্টে দেখলে সাথে সাথেই শিরোনামের বিশেষ্য শৈলী লক্ষ্য করবেন: অল্প কটি ঘন শব্দ, উহ্য ক্রিয়া এবং মূল বিষয় থেকে সংবাদটি আলাদা করতে কোলন।» (per separare il tema dalla notizia principale)।', en: 'It separates the topic from the main news.' } },
    ],
    trueFalse: [
      { id: 'stb2-46-tf1', statementIt: 'L’articolo sottolinea l’importanza del diritto di replica per l’equilibrio informativo.', statement: { bn: 'নিবন্ধটি ভারসাম্যপূর্ণ তথ্যের জন্য উত্তর দেওয়ার অধিকারের গুরুত্ব তুলে ধরেছে।', en: 'The piece stresses the right of reply for balanced journalism.' }, answer: true, explanation: { bn: 'বাক্যটি সত্য — গল্পের তথ্যানুযায়ী: «তথ্য যেন সর্বদা সঠিক ও ভারসাম্যপূর্ণ থাকে সেজন্য উত্তর দেওয়ার অধিকার নিশ্চিত করাও সমান গুরুত্বপূর্ণ।» (garantire il diritto di replica)।', en: 'True.' } },
    ],
    fillBlank: [
      { id: 'stb2-46-fb1', sentence: 'La verifica incrociata delle fonti è un dovere ___ per il cronista.', options: ['imprescindibile', 'trascurabile', 'obsoleto', 'superficiale'], answer: 0, explanation: { bn: 'imprescindibile = অপরিহার্য।', en: 'imprescindibile means indispensable.' } },
    ],
    shortAnswer: [
      { id: 'stb2-46-sa1', question: { bn: 'অনুসন্ধানী সাংবাদিকতা কীসের অপরিহার্য রক্ষাকবচ?', en: 'What is investigative journalism an indispensable safeguard for?' }, sampleAnswerIt: 'Per la trasparenza democratica e la libertà di stampa.', keywords: ['trasparenza', 'libertà'] },
    ],
    practice: {
      retellPrompt: { bn: 'বিস্তারিত বাক্যকে সংক্ষিপ্ত ইতালীয় সংবাদ শিরোনামে (stile nominale) রূপান্তর করুন।', en: 'Rewrite two full news sentences into Italian nominal headlines.' },
      completeMissing: { promptIt: 'Clima, ___ a Roma: intesa sulle rinnovabili.', hint: { bn: 'শীর্ষ সম্মেলন: vertice', en: 'vertice' }, sampleIt: 'Clima, vertice a Roma: intesa sulle rinnovabili.' },
      buildSimilar: { patternIt: 'Trasporti, guasto sulla linea: ritardi di un’ora.', prompt: { bn: 'কোলন ব্যবহার করে একটি সংবাদ শিরোনাম লিখুন।', en: 'Write an Italian newspaper headline using nominal style and a colon.' }, sampleIt: 'Università, approvato il piano: più borse di dottorato nel Nord-Est.' },
      altEndingPrompt: { bn: 'একজন তরুণ অনুসন্ধানী সাংবাদিকের প্রথম পুরস্কার প্রাপ্তির গল্প লিখুন।', en: 'Describe a young investigative reporter winning a press ethics award.' },
    },
  }),

  buildStory({
    id: 'st-b2-47', level: 'B2', titleIt: 'La fuga dei cervelli e le bolle informative',
    title: { bn: 'মেধা পাচার, তথ্য বুদ্বুদ ও অলংকার', en: 'Brain drain, echo chambers & rhetoric' },
    topic: { bn: 'সমাজ ও figure retoriche', en: 'Society & rhetorical figures' },
    grammarIds: ['figure-retoriche-b2'],
    vocabKeys: ['w:B2:trascurabile', 'w:B2:la fuga dei cervelli', 'w:B2:la bolla informativa'],
    paragraphs: [
      { it: 'Nel saggio pubblicato sulla rivista sociologica, l’autrice definisce la fuga dei cervelli «un’emorragia silenziosa» che sottrae energie vitali ai laboratori nazionali. Non è affatto trascurabile il costo economico di formare migliaia di ricercatori che poi proseguono la carriera altrove.', tr: { bn: 'সমাজতত্ত্বের জার্নালে প্রকাশিত প্রবন্ধে লেখিকা মেধা পাচারকে «এক নীরব রক্তক্ষরণ» হিসেবে অভিহিত করেছেন যা জাতীয় গবেষণাগারগুলো থেকে জীবনীশক্তি সরিয়ে নেয়। হাজার হাজার গবেষককে প্রশিক্ষিত করে তোলার আর্থিক ব্যয়—যাঁরা পরে অন্যত্র কর্মজীবন গড়েন—তা মোটেও উপেক্ষণীয় নয়।', en: 'In the essay published in the sociology journal, the author defines brain drain as "a silent haemorrhage" draining vital energy from national labs. The economic cost of training thousands of researchers who then pursue careers elsewhere is by no means negligible.' } },
      { it: 'Altrettanto insidiosa è la bolla informativa creata dagli algoritmi digitali, in cui ogni utente sente soltanto l’eco delle proprie convinzioni. Quando scoppia una polemica, sui social scende talvolta una pioggia di critiche frettolose, mentre nei luoghi di lavoro reali cala un silenzio assordante sui problemi strutturali.', tr: { bn: 'ডিজিটাল অ্যালগরিদমগুলোর তৈরি তথ্য বুদ্বুদও সমান বিপজ্জনক, যেখানে প্রতিটি ব্যবহারকারী কেবল নিজের বিশ্বাসের প্রতিধ্বনিই শুনতে পান। কোনো বিতর্ক শুরু হলে সামাজিক মাধ্যমে কখনো কখনো তাড়াহুড়ো করা সমালোচনার বর্ষণ নামে, অথচ বাস্তব কর্মক্ষেত্রে কাঠামোগত সমস্যাগুলো নিয়ে বধির করা নীরবতা বিরাজ করে।', en: 'Equally insidious is the information bubble created by digital algorithms, in which every user hears only an echo of their own convictions. When a controversy breaks, a hail of hasty criticism rains down on social media, while in real workplaces a deafening silence falls on structural problems.' } },
      { it: 'Riconoscere queste figure retoriche aiuta a leggere oltre le apparenze e a cogliere la forza argomentativa dello stile B2.', tr: { bn: 'এই অলংকারগুলো চেনা বাহ্যিক আবরণের আড়াল ভেদ করে পড়তে এবং B2 শৈলীর যুক্তিগত শক্তি ধরতে সাহায্য করে।', en: 'Recognising these rhetorical figures helps one read beneath the surface and grasp B2 argumentative force.' } },
    ],
    wordGlossary: [
      { word: 'fuga dei cervelli', base: 'la fuga dei cervelli', tr: { bn: 'মেধা পাচার', en: 'brain drain' }, pos: 'noun' },
      { word: 'bolla informativa', base: 'la bolla informativa', tr: { bn: 'তথ্য বুদ্বুদ', en: 'information bubble' }, pos: 'noun' },
      { word: 'trascurabile', base: 'trascurabile', tr: { bn: 'উপেক্ষণীয়', en: 'negligible' }, pos: 'adj' },
    ],
    grammarBreakdown: [
      { sentenceIt: 'Non è affatto trascurabile (litote) / emorragia silenziosa (metafora) / silenzio assordante (ossimoro).', ruleTitle: { bn: 'অলংকার: লিটোটেস, রূপক ও অক্সিমোরন', en: 'Litotes, metaphor & oxymoron' }, explanation: { bn: 'non trascurabile = অতি গুরুত্বপূর্ণ (লিটোটেস); silenzio assordante = পরস্পরবিরোধী অক্সিমোরন।', en: 'Litotes intensifies via negation of opposite; oxymoron pairs contradictory terms.' }, grammarId: 'figure-retoriche-b2' },
    ],
    mcq: [
      { id: 'stb2-47-q1', prompt: { bn: '«un silenzio assordante» কোন অলংকারের উদাহরণ?', en: 'Which rhetorical figure is "un silenzio assordante"?' }, options: ['লিটোটেস', 'অক্সিমোরন (বিরোধাভাস)', 'অনুপ্রাস', 'সম্বোধন'], answer: 1, explanation: { bn: 'নীরবতা এবং বধির করা শব্দ — পরস্পরবিরোধী দুই ধারণার মিলন = অক্সিমোরন।', en: 'Contrasting silence and deafening forms an oxymoron.' } },
    ],
    trueFalse: [
      { id: 'stb2-47-tf1', statementIt: 'Dire «un costo non trascurabile» significa che la spesa è molto piccola.', statement: { bn: '«un costo non trascurabile» বললে খরচ খুব সামান্য বোঝায়।', en: 'Saying "a not negligible cost" means it is tiny.' }, answer: false, explanation: { bn: 'এটি লিটোটেস, যার অর্থ খরচটি বেশ বড় ও উল্লেখযোগ্য।', en: 'It is litotes meaning very significant.' } },
    ],
    fillBlank: [
      { id: 'stb2-47-fb1', sentence: 'L’esito dell’indagine rappresenta un segnale non ___ per il governo.', options: ['indifferente', 'fittizio', 'sconosciuto', 'assente'], answer: 0, explanation: { bn: 'non indifferente = অতি তাৎপর্যপূর্ণ (লিটোটেস)।', en: 'Litotes non indifferente means considerable.' } },
    ],
    shortAnswer: [
      { id: 'stb2-47-sa1', question: { bn: 'তথ্য বুদ্বুদের ভেতর ব্যবহারকারী কেবল কী শুনতে পান?', en: 'What does a user hear inside an information bubble?' }, sampleAnswerIt: 'Soltanto l’eco delle proprie convinzioni.', keywords: ['eco', 'convinzioni'] },
    ],
    practice: {
      retellPrompt: { bn: 'একটি লিটোটেস ও একটি রূপক ব্যবহার করে প্রবন্ধের মূল ভাব লিখুন।', en: 'Summarise the essay using one litotes and one metaphor.' },
      completeMissing: { promptIt: 'La biblioteca civica funge da ___ culturale per il quartiere.', hint: { bn: 'আলোকবর্তিকা (রূপক): faro', en: 'faro' }, sampleIt: 'La biblioteca civica funge da faro culturale per il quartiere.' },
      buildSimilar: { patternIt: 'Un impegno non indifferente per tutta la squadra.', prompt: { bn: 'non + বিপরীত বিশেষণ দিয়ে একটি লিটোটেস লিখুন।', en: 'Write a litotes sentence.' }, sampleIt: 'Il contributo dei ricercatori ha avuto un impatto non trascurabile sulla medicina.' },
      altEndingPrompt: { bn: 'তরুণ গবেষকদের দেশে ফিরিয়ে আনার সফল নীতির কথা লিখুন।', en: 'Describe policies that reverse brain drain and bring researchers home.' },
    },
  }),

  buildStory({
    id: 'st-b2-48', level: 'B2', titleIt: 'La ratifica e l’arte della punteggiatura',
    title: { bn: 'আন্তর্জাতিক চুক্তি ও যতিচিহ্নের যুক্তি', en: 'Treaty ratification & logical punctuation' },
    topic: { bn: 'কূটনৈতিক সম্পাদনা ও punteggiatura stilistica', en: 'Editorial craft & logical punctuation' },
    grammarIds: ['punteggiatura-stilistica'],
    vocabKeys: ['w:B2:ratificare', 'w:B2:il bando di concorso'],
    paragraphs: [
      { it: 'Prima di trasmettere l’edizione definitiva del bollettino diplomatico, Lucia ricontrollò ogni singolo segno d’interpunzione. Un testo istituzionale non tollera ambiguità: la collocazione di una virgola o di un punto e virgola chiarisce l’esatta gerarchia logica delle clausole.', tr: { bn: 'কূটনৈতিক বুলেটিনের চূড়ান্ত সংস্করণ পাঠানোর আগে লুচিয়া প্রতিটি যতিচিহ্ন পুনরায় পরীক্ষা করলেন। একটি প্রাতিষ্ঠানিক পাঠ্য কোনো দ্ব্যর্থতা সহ্য করে না: একটি কমা বা সেমিকোলনের অবস্থান ধারাগুলোর সঠিক যৌক্তিক ক্রম স্পষ্ট করে।', en: 'Before sending the final edition of the diplomatic bulletin, Lucia double-checked every punctuation mark. An institutional text tolerates no ambiguity: the placement of a comma or semicolon clarifies the exact logical hierarchy of clauses.' } },
      { it: '«L’intesa commerciale — precisò nella nota — entrerà in vigore solo dopo che tutti gli Stati avranno provveduto a ratificare l’allegato». Il bando di concorso per i nuovi interpreti, tuttavia, era già stato pubblicato il mese precedente; pertanto la commissione iniziò i lavori senza alcun rinvio.', tr: { bn: '«বাণিজ্য সমঝোতাটি — নোটে তিনি স্পষ্ট করলেন — কেবল তখনই কার্যকর হবে যখন সব রাষ্ট্র সংযুক্তিটি অনুমোদন করবে»। নতুন দোভাষীদের নিয়োগ বিজ্ঞপ্তিটি, অবশ্য, আগের মাসেই প্রকাশিত হয়েছিল; অতএব পর্ষদ কোনো বিলম্ব ছাড়াই কাজ শুরু করল।', en: '"The trade agreement," she clarified in the memo, "will enter into force only after all States have acted to ratify the annex." The competition notice for new interpreters, however, had already been published the prior month; therefore the board began work without delay.' } },
      { it: 'Due regole restano d’oro nella scrittura formale: non separare mai con una virgola singola il soggetto dal verbo, e usare i due punti per introdurre cause o spiegazioni.', tr: { bn: 'আনুষ্ঠানিক লেখায় দুটি নিয়ম চিরন্তন: কখনোই একক কমা দিয়ে কর্তা ও ক্রিয়াকে আলাদা না করা, এবং কারণ বা ব্যাখ্যা শুরু করতে কোলন ব্যবহার করা।', en: 'Two rules remain golden in formal writing: never separate subject from verb with a single comma, and use a colon to introduce causes or explanations.' } },
    ],
    wordGlossary: [
      { word: 'ratificare', base: 'ratificare', tr: { bn: 'অনুমোদন করা (চুক্তি)', en: 'to ratify' }, pos: 'verb' },
      { word: 'bando di concorso', base: 'il bando di concorso', tr: { bn: 'নিয়োগ বিজ্ঞপ্তি', en: 'competition notice' }, pos: 'noun' },
    ],
    grammarBreakdown: [
      { sentenceIt: 'Il bando, tuttavia, era uscito; pertanto… / Non tollera ambiguità: la collocazione…', ruleTitle: { bn: 'কোলন, সেমিকোলন ও জোড়া কমা', en: 'Colon, semicolon & paired commas' }, explanation: { bn: 'inciso (tuttavia) জোড়া কমায় থাকে; semicolon (;) pertanto-র আগে বসে; colon (:) ব্যাখ্যা যোগ করে।', en: 'Punctuation marks clarify logical structure rather than just breathing pauses.' }, grammarId: 'punteggiatura-stilistica' },
    ],
    mcq: [
      { id: 'stb2-48-q1', prompt: { bn: 'লেখার কোন দুটি পদে কখনোই একটিমাত্র কমা বসে না?', en: 'Which two elements must never be separated by a single comma?' }, options: ['বিশেষ্য ও বিশেষণ', 'কর্তা ও ক্রিয়া', 'দুটি বাক্য', 'নাম ও পদবি'], answer: 1, explanation: { bn: 'সঠিক উত্তর: কর্তা ও ক্রিয়া — পাঠ্যাংশে বলা হয়েছে: «আনুষ্ঠানিক লেখায় দুটি নিয়ম চিরন্তন: কখনোই একক কমা দিয়ে কর্তা ও ক্রিয়াকে আলাদা না করা, এবং কারণ বা ব্যাখ্যা শুরু করতে কোলন ব্যবহার করা।» (non separare mai con una virgola singola il soggetto dal verbo)।', en: 'Subject and verb.' } },
    ],
    trueFalse: [
      { id: 'stb2-48-tf1', statementIt: 'La commissione ha dovuto rinviare i lavori perché il bando non era ancora uscito.', statement: { bn: 'বিজ্ঞপ্তি বের না হওয়ায় পর্ষদকে কাজ পিছিয়ে দিতে হয়েছিল।', en: 'The board had to postpone work because the notice was not out.' }, answer: false, explanation: { bn: 'বাক্যটি মিথ্যা — গল্পে আসলে বলা হয়েছে: ««বাণিজ্য সমঝোতাটি — নোটে তিনি স্পষ্ট করলেন — কেবল তখনই কার্যকর হবে যখন সব রাষ্ট্র সংযুক্তিটি অনুমোদন করবে»। নতুন দোভাষীদের নিয়োগ বিজ্ঞপ্তিটি, অবশ্য, আগের মাসেই প্রকাশিত হয়েছিল; অতএব পর্ষদ কোনো বিলম্ব ছাড়াই কাজ শুরু করল।» (il bando era già stato pubblicato il mese precedente)।', en: 'The notice was already out.' } },
    ],
    fillBlank: [
      { id: 'stb2-48-fb1', sentence: 'Il ricorso è respinto ___ mancava la firma autenticata.', options: [':', '; inoltre,', 'tuttavia', '?'], answer: 0, explanation: { bn: 'কারণ বা ব্যাখ্যা শুরু করতে কোলন (:) বসে।', en: 'Colon introduces the cause/explanation.' } },
    ],
    shortAnswer: [
      { id: 'stb2-48-sa1', question: { bn: 'বাণিজ্য সমঝোতাটি কখন কার্যকর হওয়ার কথা ছিল?', en: 'When was the trade agreement set to enter into force?' }, sampleAnswerIt: 'Solo dopo che tutti gli Stati avranno provveduto a ratificare l’allegato.', keywords: ['Stati', 'ratificare'] },
    ],
    practice: {
      retellPrompt: { bn: 'কোলন, সেমিকোলন ও জোড়া কমা প্রয়োগ করে ৩ বাক্যের একটি আনুষ্ঠানিক নোট লিখুন।', en: 'Write a 3-sentence formal memo using colon, semicolon, and paired commas.' },
      completeMissing: { promptIt: 'La legge ___ entrerà in vigore lunedì.', hint: { bn: 'জোড়া কমায় tuttavia: , tuttavia,', en: ', tuttavia,' }, sampleIt: 'La legge, tuttavia, entrerà in vigore lunedì.' },
      buildSimilar: { patternIt: 'I costi sono alti; tuttavia il ritorno è garantito.', prompt: { bn: 'সেমিকোলন ও কোলন ব্যবহার করে একটি বাক্য লিখুন।', en: 'Write a sentence with semicolon or colon punctuation.' }, sampleIt: 'L’obiettivo è chiaro: ridurre le emissioni; pertanto servono investimenti immediati.' },
      altEndingPrompt: { bn: 'সব রাষ্ট্র চুক্তিটি অনুমোদন করার দিনের প্রেস বিবৃতি লিখুন।', en: 'Write the press note announcing final treaty ratification.' },
    },
  }),

  buildStory({
    id: 'st-b2-49', level: 'B2', titleIt: 'L’efficacia del decreto e la coesione',
    title: { bn: 'ডিক্রির কার্যকারিতা ও অ্যানাফোরিক সংহতি', en: 'Decree efficacy & anaphoric cohesion' },
    topic: { bn: 'নীতি বিশ্লেষণ ও coesione anaforica', en: 'Policy cohesion & encapsulators' },
    grammarIds: ['coesione-anaforica'],
    vocabKeys: ["w:B2:l'efficacia", 'w:B2:entrare in vigore'],
    paragraphs: [
      { it: 'Sei mesi dopo essere entrato in vigore, il decreto sul risparmio idrico ha già dimezzato gli sprechi negli edifici pubblici. Tale risultato dimostra concretamente l’efficacia degli incentivi mirati rispetto ai soli divieti generici.', tr: { bn: 'কার্যকর হওয়ার ছয় মাস পর, পানি সাশ্রয় সংক্রান্ত ডিক্রিটি ইতিমধ্যেই সরকারি ভবনগুলোতে অপচয় অর্ধেকে নামিয়ে এনেছে। এই ফলাফল কেবল সাধারণ নিষেধাজ্ঞার তুলনায় লক্ষ্যভিত্তিক প্রণোদনার কার্যকারিতা বাস্তবিকভাবে প্রমাণ করে।', en: 'Six months after coming into force, the water-saving decree has already halved waste in public buildings. This result concretely demonstrates the effectiveness of targeted incentives compared to generic bans alone.' } },
      { it: 'Il documento istituisce due strumenti principali: un fondo per il monitoraggio digitale e una cabina di regia regionale. Questa coordina gli acquisti comuni dei municipi, mentre quello segnala in tempo reale eventuali perdite nelle tubature.', tr: { bn: 'নথিটি দুটি প্রধান উপকরণ প্রতিষ্ঠা করে: ডিজিটাল পর্যবেক্ষণের জন্য একটি তহবিল এবং একটি আঞ্চলিক নিয়ন্ত্রণ কক্ষ। শেষোক্তটি পৌরসভাগুলোর যৌথ ক্রয় সমন্বয় করে, আর প্রথমটি তাৎক্ষণিকভাবে পাইপের যেকোনো লিক সংকেত দেয়।', en: 'The document establishes two main instruments: a digital monitoring fund and a regional steering committee. The latter coordinates joint municipal purchases, while the former flags any pipe leaks in real time.' } },
      { it: 'Evitare inutili ripetizioni lessicali grazie a simili incapsulatori rende l’argomentazione fluida e professionale.', tr: { bn: 'এ ধরনের সংহতিসূচক পদগুচ্ছের সাহায্যে অপ্রয়োজনীয় শব্দ পুনরাবৃত্তি এড়ানো যুক্তিকে সাবলীল ও পেশাদার করে তোলে।', en: 'Avoiding needless lexical repetition via such encapsulators makes argumentation fluid and professional.' } },
    ],
    wordGlossary: [
      { word: 'efficacia', base: "l'efficacia", tr: { bn: 'কার্যকারিতা', en: 'effectiveness' }, pos: 'noun' },
      { word: 'entrare in vigore', base: 'entrare in vigore', tr: { bn: 'কার্যকর হওয়া', en: 'to come into force' }, pos: 'verb' },
    ],
    grammarBreakdown: [
      { sentenceIt: 'Tale risultato dimostra… / Questa coordina…, mentre quello segnala… / simili incapsulatori.', ruleTitle: { bn: 'অ্যানাফোরিক সংহতি ও quest’ultimo', en: 'Anaphoric encapsulators & questo/quello' }, explanation: { bn: 'Tale risultato পূর্বের পুরো বাক্যকে ধারণ করে; questo (কাছের/দ্বিতীয়) ও quello (দূরের/প্রথম) দুটি বিষয়ের ক্রম বজায় রাখে।', en: 'questo refers to the latter item; quello refers to the former.' }, grammarId: 'coesione-anaforica' },
    ],
    mcq: [
      { id: 'stb2-49-q1', prompt: { bn: '«Questa coordina gli acquisti…»-তে Questa কাকে নির্দেশ করছে?', en: 'In "Questa coordina gli acquisti…", what does Questa refer to?' }, options: ['তহবিলকে (il fondo)', 'আঞ্চলিক নিয়ন্ত্রণ কক্ষকে (una cabina di regia)', 'ডিক্রিকে', 'পৌরসভাকে'], answer: 1, explanation: { bn: 'questa নিকটবর্তী/শেষোক্ত স্ত্রী বিশেষ্য cabina di regia-কে নির্দেশ করে।', en: 'Questa refers to the latter noun cabina di regia.' } },
    ],
    trueFalse: [
      { id: 'stb2-49-tf1', statementIt: 'Il decreto ha già dimezzato gli sprechi idrici negli edifici pubblici.', statement: { bn: 'ডিক্রিটি সরকারি ভবনগুলোতে পানির অপচয় ইতিমধ্যে অর্ধেকে নামিয়ে এনেছে।', en: 'The decree has already halved water waste in public buildings.' }, answer: true, explanation: { bn: 'বাক্যটি সত্য — গল্পের তথ্যানুযায়ী: «কার্যকর হওয়ার ছয় মাস পর, পানি সাশ্রয় সংক্রান্ত ডিক্রিটি ইতিমধ্যেই সরকারি ভবনগুলোতে অপচয় অর্ধেকে নামিয়ে এনেছে। এই ফলাফল কেবল সাধারণ নিষেধাজ্ঞার তুলনায় লক্ষ্যভিত্তিক প্রণোদনার কার্যকারিতা বাস্তবিকভাবে প্রমাণ করে।» (ha già dimezzato gli sprechi)।', en: 'True.' } },
    ],
    fillBlank: [
      { id: 'stb2-49-fb1', sentence: 'L’azienda ha rinnovato il parco mezzi; ___ scelta ha abbattuto le emissioni.', options: ['tale', 'costoro', 'altrui', 'testé'], answer: 0, explanation: { bn: 'পূর্ববর্তী সিদ্ধান্ত নির্দেশ করতে tale scelta বসে।', en: 'tale scelta encapsulates the prior action.' } },
    ],
    shortAnswer: [
      { id: 'stb2-49-sa1', question: { bn: 'ডিজিটাল পর্যবেক্ষণ তহবিলটি কী কাজ করে?', en: 'What does the digital monitoring fund do?' }, sampleAnswerIt: 'Segnala in tempo reale eventuali perdite nelle tubature.', keywords: ['perdite', 'tubature'] },
    ],
    practice: {
      retellPrompt: { bn: 'tale + বিশেষ্য ও questo/quello ব্যবহার করে প্রবন্ধের সারাংশ লিখুন।', en: 'Summarise the policy results using tale and questo/quello.' },
      completeMissing: { promptIt: 'Il Parlamento ha approvato l’emendamento; ___ entrerà in vigore lunedì.', hint: { bn: 'সর্বশেষ উল্লিখিত পুংলিঙ্গ একবচন বিশেষ্য নির্দেশ করতে quest’ultimo বসান', en: 'quest’ultimo' }, sampleIt: 'Il Parlamento ha approvato l’emendamento; quest’ultimo entrerà in vigore lunedì.' },
      buildSimilar: { patternIt: 'I costi salgono; tale incremento riduce i risparmi.', prompt: { bn: 'একটি ঘটনা লিখে পরের বাক্যে tale + বিশেষ্য দিয়ে তা ধরে রাখুন।', en: 'Write two sentences linked by an anaphoric encapsulator (tale… / questo…).' }, sampleIt: 'Molti giovani scelgono percorsi tecnici; tale tendenza risponde alla domanda delle imprese.' },
      altEndingPrompt: { bn: 'এক বছর পর নতুন পানিসাশ্রয়ী ভবনগুলোর বার্ষিক প্রতিবেদন লিখুন।', en: 'Describe the annual water-saving report a year later.' },
    },
  }),

  buildStory({
    id: 'st-b2-50', level: 'B2', titleIt: 'Standard o neostandard? Questione di contesto',
    title: { bn: 'প্রমিত ও নব্য-প্রমিত ইতালিয়ান: প্রেক্ষাপটের শিল্প', en: 'Standard vs neostandard Italian' },
    topic: { bn: 'ভাষাতত্ত্ব ও varietà dell’italiano', en: 'Sociolinguistics & language registers' },
    grammarIds: ['varieta-italiano'],
    vocabKeys: ['w:B2:prevalere', 'w:B2:qualora', 'w:B2:ottemperare'],
    paragraphs: [
      { it: 'Durante il laboratorio di scrittura professionale a Bologna, la docente mostrò due versioni dello stesso messaggio. Nel parlato quotidiano tra colleghi spesso si sente: «Se arrivavi prima, gli spiegavamo tutto subito»; tuttavia, in un verbale ufficiale prevale l’italiano standard: «Qualora fossero giunti in orario, avremmo illustrato loro la procedura».', tr: { bn: 'বোলোনিয়ার পেশাগত লেখার কর্মশালায় শিক্ষিকা একই বার্তার দুটি রূপ দেখালেন। সহকর্মীদের দৈনন্দিন কথোপকথনে প্রায়ই শোনা যায়: «আগে এলে এখনই ওদের সব বুঝিয়ে বলতাম»; কিন্তু একটি সরকারি কার্যবিবরণীতে প্রমিত ইতালিয়ান প্রাধান্য পায়: «তাঁরা সময়মতো উপস্থিত হলে আমরা তাঁদের প্রক্রিয়াটি ব্যাখ্যা করতাম»।', en: 'During the professional writing workshop in Bologna, the lecturer showed two versions of the same message. In daily speech among colleagues one often hears: "Se arrivavi prima, gli spiegavamo tutto subito"; yet in official minutes standard Italian prevails: "Qualora fossero giunti in orario, avremmo illustrato loro la procedura."' } },
      { it: 'Non si tratta di lingue diverse, bensì di registri differenti: chi sa adattare lessico e sintassi alla situazione evita errori di tono. Così, in un bando si legge «qualora gli interessati non ottemperino», mentre al bar si dice semplicemente «se non fanno come previsto».', tr: { bn: 'এগুলো ভিন্ন কোনো ভাষা নয়, বরং ভিন্ন রেজিস্টার: যিনি পরিস্থিতি অনুযায়ী শব্দভাণ্ডার ও বাক্যগঠন মানিয়ে নিতে পারেন তিনি সুরের ভুল এড়ান। তাই বিজ্ঞপ্তিতে লেখা থাকে «আগ্রহীরা বিধান পালন না করলে», আর ক্যাফেতে সহজভাবে বলা হয় «নিয়মমতো না করলে»।', en: 'These are not different languages, but different registers: whoever adapts lexis and syntax to the setting avoids tonal mistakes. Thus a public call reads "qualora gli interessati non ottemperino", while at a café one says simply "se non fanno come previsto".' } },
      { it: 'Padroneggiare entrambi i livelli significa comprendere davvero l’italiano contemporaneo in tutta la sua ricchezza.', tr: { bn: 'উভয় স্তরেই দক্ষতা অর্জনের অর্থ সমসাময়িক ইতালিয়ানকে তার সম্পূর্ণ সমৃদ্ধিসহ প্রকৃতভাবে বোঝা।', en: 'Mastering both levels means truly understanding contemporary Italian in all its richness.' } },
    ],
    wordGlossary: [
      { word: 'prevalere', base: 'prevalere', tr: { bn: 'প্রাধান্য পাওয়া', en: 'to prevail' }, pos: 'verb' },
      { word: 'qualora', base: 'qualora', tr: { bn: 'যদি (আনুষ্ঠানিক)', en: 'should / if' }, pos: 'conj' },
      { word: 'ottemperare', base: 'ottemperare', tr: { bn: 'পালন করা', en: 'to comply' }, pos: 'verb' },
    ],
    grammarBreakdown: [
      { sentenceIt: 'Gli spiegavamo (parlato neostandard) vs Avremmo illustrato loro (standard formale).', ruleTitle: { bn: 'প্রমিত ও নব্য-প্রমিত রেজিস্টার', en: 'Standard formal vs spoken neostandard' }, explanation: { bn: 'আলাপচারিতায় gli (তাদেরকে) ও শর্তবাচক imperfetto প্রচলিত, কিন্তু আনুষ্ঠানিক লেখায় loro ও congiuntivo/condizionale ব্যবহৃত হয়।', en: 'Spoken neostandard favours gli and hypothetical imperfect; formal prose keeps loro and subjunctive.' }, grammarId: 'varieta-italiano' },
    ],
    mcq: [
      { id: 'stb2-50-q1', prompt: { bn: 'আনুষ্ঠানিক লিখিত ইতালিয়ানে «তাদেরকে জানিয়েছি» কীভাবে লেখা হয়?', en: 'How is "we informed them" written in formal standard Italian?' }, options: ['Gli abbiamo detto a loro', 'Abbiamo comunicato loro', 'Ci abbiamo detto', 'A loro gli diciamo'], answer: 1, explanation: { bn: 'আনুষ্ঠানিক রীতিতে তাদেরকে অর্থে loro বসে: Abbiamo comunicato loro।', en: 'Formal standard uses loro.' } },
    ],
    trueFalse: [
      { id: 'stb2-50-tf1', statementIt: 'L’imperfetto ipotetico («Se venivi prima, andavamo») è raccomandato nei verbali legali.', statement: { bn: 'আইনি কার্যবিবরণীতে শর্তবাচক অপূর্ণ অতীত ব্যবহারের পরামর্শ দেওয়া হয়।', en: 'The hypothetical imperfect is recommended in legal minutes.' }, answer: false, explanation: { bn: 'এটি কেবল অনানুষ্ঠানিক কথোপকথনের বৈশিষ্ট্য।', en: 'It belongs to informal speech, not legal minutes.' } },
    ],
    fillBlank: [
      { id: 'stb2-50-fb1', sentence: 'In una tesi accademica, sostituisci «a me mi pare» con ___.', options: ['«a mio avviso»', '«a me stesso mi»', '«che ci posso fare»', '«il giorno che»'], answer: 0, explanation: { bn: 'একাডেমিক লেখায় «a mio avviso» বা «ritengo che» ব্যবহৃত হয়।', en: 'Academic style replaces colloquial pleonasms with «a mio avviso».' } },
    ],
    shortAnswer: [
      { id: 'stb2-50-sa1', question: { bn: 'সঠিক রেজিস্টার বেছে নিতে পারা লেখককে কোন ভুল থেকে বাঁচায়?', en: 'What mistake do writers avoid by matching register to context?' }, sampleAnswerIt: 'Evitano errori di tono.', keywords: ['errori', 'tono'] },
    ],
    practice: {
      retellPrompt: { bn: 'একই কথা আনুষ্ঠানিক ও অনানুষ্ঠানিক দুই রীতিতে রূপান্তর করে লিখুন।', en: 'Write one message in both formal standard and spoken neostandard register.' },
      completeMissing: { promptIt: 'Abbiamo comunicato ___ la decisione del comitato.', hint: { bn: 'আনুষ্ঠানিক বহুবচন: loro', en: 'loro' }, sampleIt: 'Abbiamo comunicato loro la decisione del comitato.' },
      buildSimilar: { patternIt: 'Formale: Qualora piova, rinvieremo. | Informale: Se piove, rimandiamo.', prompt: { bn: 'নিজের একটি উদাহরণে দুই রীতির তুলনা দেখান।', en: 'Contrast formal and informal equivalents in your own example.' }, sampleIt: 'Formale: Il giorno in cui è arrivato. | Neostandard: Nel parlato spesso si usa un registro più diretto.' },
      altEndingPrompt: { bn: 'কর্মশালার শেষে শিক্ষার্থীদের লেখা মূল্যায়নের অংশ লিখুন।', en: 'Describe students passing the final register-switching workshop exercise.' },
    },
  }),

  buildStory({
    id: 'st-b2-51', level: 'B2', titleIt: 'L’arte della mitigazione in riunione',
    title: { bn: 'সভায় কূটনৈতিক শিষ্টাচার ও ভদ্র দ্বিমত', en: 'Diplomatic hedging in meetings' },
    topic: { bn: 'পেশাগত যোগাযোগ ও pragmatica', en: 'Workplace diplomacy & hedging' },
    grammarIds: ['pragmatica-mitigazione'],
    vocabKeys: ['w:B2:sottolineare', 'w:B2:approfondire', 'w:B2:a lungo termine'],
    paragraphs: [
      { it: 'Durante una riunione tesa sul bilancio trimestrale, il nuovo consulente doveva segnalare che le previsioni di vendita erano irrealistiche. Invece di contraddire bruscamente il direttore, aprì con garbo: «Pur apprezzando l’ambizione del piano, mi permetterei di sottolineare alcuni rischi a lungo termine».', tr: { bn: 'ত্রৈমাসিক বাজেট নিয়ে এক উত্তেজনাপূর্ণ সভায় নতুন পরামর্শদাতাকে জানাতে হচ্ছিল যে বিক্রয়ের পূর্বাভাসগুলো অবাস্তব। পরিচালককে রূঢ়ভাবে খণ্ডন করার বদলে তিনি বিনয়ের সাথে শুরু করলেন: «পরিকল্পনার উচ্চাকাঙ্ক্ষার প্রশংসা করলেও আমি দীর্ঘমেয়াদি কিছু ঝুঁকির ওপর জোর দেওয়ার অনুমতি চাইব»।', en: 'During a tense meeting on the quarterly budget, the new consultant had to point out that sales forecasts were unrealistic. Instead of bluntly contradicting the director, he opened tactfully: "While appreciating the plan’s ambition, I would venture to highlight a few long-term risks."' } },
      { it: 'Poi aggiunse con tono collaborativo: «Non crede che sarebbe opportuno approfondire ancora i dati sui costi energetici prima di assumere impegni vincolanti? Temo infatti che quella stima sia leggermente ottimistica».', tr: { bn: 'তারপর সহযোগিতাপূর্ণ সুরে যোগ করলেন: «বাধ্যতামূলক অঙ্গীকারে যাওয়ার আগে জ্বালানি ব্যয়ের তথ্যগুলো আরও গভীরভাবে খতিয়ে দেখা কি সমীচীন হবে বলে আপনার মনে হয় না? আমার আশঙ্কা ওই অনুমানটি সামান্য বেশি আশাবাদী»।', en: 'Then he added collaboratively: "Don’t you think it would be advisable to examine the energy-cost data further before making binding commitments? I fear that estimate may be slightly optimistic."' } },
      { it: 'Grazie a questa strategia di mitigazione, il direttore non si sentì attaccato e accolse volentieri la verifica supplementare.', tr: { bn: 'এই কূটনৈতিক শিষ্টাচারের কারণে পরিচালক নিজেকে আক্রান্ত বোধ করলেন না এবং সানন্দে অতিরিক্ত যাচাইয়ের প্রস্তাবটি গ্রহণ করলেন।', en: 'Thanks to this hedging strategy, the director did not feel attacked and gladly welcomed the extra review.' } },
    ],
    wordGlossary: [
      { word: 'sottolineare', base: 'sottolineare', tr: { bn: 'গুরুত্বারোপ / জোর দেওয়া', en: 'to highlight / underline' }, pos: 'verb' },
      { word: 'approfondire', base: 'approfondire', tr: { bn: 'গভীরভাবে পর্যালোচনা করা', en: 'to examine in depth' }, pos: 'verb' },
      { word: 'a lungo termine', base: 'a lungo termine', tr: { bn: 'দীর্ঘমেয়াদে', en: 'in the long term' }, pos: 'phrase' },
    ],
    grammarBreakdown: [
      { sentenceIt: 'Pur apprezzando…, mi permetterei di… / Non crede che sarebbe opportuno…? / leggermente ottimistica.', ruleTitle: { bn: 'কূটনৈতিক শিষ্টাচার (Mitigazione)', en: 'Diplomatic hedging & politeness' }, explanation: { bn: 'Pur + জেরুন্ড দিয়ে প্রশংসা, কন্ডিশনাল (mi permetterei), নেতিবাচক প্রশ্ন (Non crede che...) এবং কোমল বিশেষণ (leggermente) দ্বিমতকে ভদ্র রাখে।', en: 'Softens critique so professional collaboration stays intact.' }, grammarId: 'pragmatica-mitigazione' },
    ],
    mcq: [
      { id: 'stb2-51-q1', prompt: { bn: 'পরামর্শদাতার ভদ্র উপস্থাপনার ফলে পরিচালকের প্রতিক্রিয়া কেমন ছিল?', en: 'How did the director react to the consultant’s polite framing?' }, options: ['সভা ছেড়ে বেরিয়ে যান', 'আক্রান্ত বোধ না করে সানন্দে অতিরিক্ত যাচাই মেনে নেন', 'প্রস্তাব ছিঁড়ে ফেলেন', 'পরামর্শদাতাকে বরখাস্ত করেন'], answer: 1, explanation: { bn: 'সঠিক উত্তর: আক্রান্ত বোধ না করে সানন্দে অতিরিক্ত যাচাই মেনে নেন — পাঠ্যাংশে বলা হয়েছে: «এই কূটনৈতিক শিষ্টাচারের কারণে পরিচালক নিজেকে আক্রান্ত বোধ করলেন না এবং সানন্দে অতিরিক্ত যাচাইয়ের প্রস্তাবটি গ্রহণ করলেন।» (non si sentì attaccato e accolse volentieri la verifica)।', en: 'He did not feel attacked and welcomed the review.' } },
    ],
    trueFalse: [
      { id: 'stb2-51-tf1', statementIt: 'Il consulente disse apertamente al direttore che le sue cifre erano assurde.', statement: { bn: 'পরামর্শদাতা সরাসরি পরিচালককে বললেন যে তাঁর হিসাবগুলো হাস্যকর।', en: 'The consultant openly called the director’s figures absurd.' }, answer: false, explanation: { bn: 'তিনি বিনয় ও কূটনৈতিক কৌশল ব্যবহার করেছিলেন।', en: 'He used diplomatic hedging throughout.' } },
    ],
    fillBlank: [
      { id: 'stb2-51-fb1', sentence: 'Non crede che ___ prudente verificare nuovamente il preventivo?', options: ['è', 'sarebbe', 'fu', 'sarà stato'], answer: 1, explanation: { bn: 'কূটনৈতিক প্রশ্নে condizionale (sarebbe prudente)।', en: 'Diplomatic suggestion uses conditional sarebbe.' } },
    ],
    shortAnswer: [
      { id: 'stb2-51-sa1', question: { bn: 'কোন বিষয়টি আরও গভীরভাবে খতিয়ে দেখার প্রস্তাব দেওয়া হয়েছিল?', en: 'Which figures did the consultant propose examining further?' }, sampleAnswerIt: 'I dati sui costi energetici.', keywords: ['costi', 'energetici'] },
    ],
    practice: {
      retellPrompt: { bn: 'একটি রূঢ় সমালোচনাকে কূটনৈতিক B2 ভাষায় রূপান্তর করে লিখুন।', en: 'Rewrite a blunt criticism using B2 diplomatic hedging.' },
      completeMissing: { promptIt: '___ le Sue riserve, vorrei proporre una soluzione intermedia.', hint: { bn: 'Pur + জেরুন্ড: Pur comprendendo', en: 'Pur comprendendo' }, sampleIt: 'Pur comprendendo le Sue riserve, vorrei proporre una soluzione intermedia.' },
      buildSimilar: { patternIt: 'Mi permetterei di osservare che manca un allegato.', prompt: { bn: 'mi permetterei di... দিয়ে একটি ভদ্র পরামর্শ লিখুন।', en: 'Write a polite suggestion starting with mi permetterei di…' }, sampleIt: 'Mi permetterei di suggerire un approfondimento sui vantaggi a lungo termine.' },
      altEndingPrompt: { bn: 'সংশোধিত ও বাস্তবসম্মত নতুন বাজেট অনুমোদনের মুহূর্ত লিখুন।', en: 'Describe the board approving the revised, realistic budget.' },
    },
  }),

  buildStory({
    id: 'st-b2-52', level: 'B2', titleIt: 'L’architettura dell’argomentazione e la confutazione',
    title: { bn: 'যুক্তিনির্ভর প্রবন্ধের কাঠামো ও খণ্ডন', en: 'Essay architecture & refutation' },
    topic: { bn: 'একাডেমিক ও CILS/CELI B2 রচনা', en: 'Argumentative essays & refutation' },
    grammarIds: ['argomentazione-saggio-b2'],
    vocabKeys: ['w:B2:osteggiare', 'w:B2:compensare', 'w:B2:la confutazione', "w:B2:l'argomentazione logica"],
    paragraphs: [
      { it: 'Scrivere un saggio argomentativo efficace richiede un’architettura chiara e un’argomentazione logica rigorosa. Nella premessa si inquadra il tema e si enuncia la tesi: ad esempio, la necessità di trasformare i centri storici in aree a bassa emissione per tutelare salute e patrimonio artistico.', tr: { bn: 'একটি কার্যকর যুক্তিনির্ভর প্রবন্ধ লিখতে হলে স্পষ্ট কাঠামো এবং নিখুঁত যৌক্তিক উপস্থাপনা প্রয়োজন। ভূমিকায় বিষয়বস্তুর প্রেক্ষাপট ও মূল দাবি (থিসিস) তুলে ধরা হয়: যেমন, স্বাস্থ্য ও শিল্পঐতিহ্য রক্ষায় ঐতিহাসিক নগরকেন্দ্রগুলোকে কম-নির্গমন এলাকায় রূপান্তরের প্রয়োজনীয়তা।', en: 'Writing an effective argumentative essay requires clear architecture and rigorous logical reasoning. The premise frames the topic and states the thesis: for instance, the need to convert historic centres into low-emission zones to protect health and artistic heritage.' } },
      { it: 'Il passaggio decisivo è tuttavia l’antitesi accompagnata dalla confutazione. Chi osteggia tali zone sostiene che esse penalizzino i negozi locali; tuttavia gli studi urbani dimostrano che l’aumento dei pedoni e dei trasporti elettrici riesce a compensare ampiamente il calo delle auto private.', tr: { bn: 'তবে নির্ধারণী ধাপ হলো প্রতিযুক্তি (অ্যান্টিথিসিস) এবং তার সাথে খণ্ডন (কনফিউটেশন)। যাঁরা এ ধরনের এলাকার বিরোধিতা করেন তাঁরা দাবি করেন যে এটি স্থানীয় দোকানগুলোকে ক্ষতিগ্রস্ত করে; কিন্তু নগর গবেষণা প্রমাণ করে যে পথচারী ও বৈদ্যুতিক পরিবহনের বৃদ্ধি ব্যক্তিগত গাড়ির সংখ্যা কমে যাওয়াকে যথেষ্ট পুষিয়ে দিতে সক্ষম।', en: 'The decisive step, however, is the counter-argument paired with refutation. Those who oppose such zones claim they penalise local shops; yet urban studies show that increased footfall and electric transit more than compensate for fewer private cars.' } },
      { it: 'Nella sintesi finale, integrando dati oggettivi e concessioni equilibrate, l’autore dimostra la solidità della propria proposta davanti a qualsiasi lettore critico.', tr: { bn: 'চূড়ান্ত উপসংহারে, বস্তুনিষ্ঠ তথ্য ও ভারসাম্যপূর্ণ স্বীকারোক্তি সমন্বয় করে লেখক যেকোনো সমালোচক পাঠকের সামনে নিজের প্রস্তাবের দৃঢ়তা প্রমাণ করেন।', en: 'In the final synthesis, by integrating objective data and balanced concessions, the author demonstrates the soundness of their proposal to any critical reader.' } },
    ],
    wordGlossary: [
      { word: 'osteggiare', base: 'osteggiare', tr: { bn: 'বিরোধিতা করা', en: 'to oppose' }, pos: 'verb' },
      { word: 'compensare', base: 'compensare', tr: { bn: 'পুষিয়ে দেওয়া / ভারসাম্য করা', en: 'to offset / compensate' }, pos: 'verb' },
      { word: 'confutazione', base: 'la confutazione', tr: { bn: 'যুক্তি খণ্ডন', en: 'refutation' }, pos: 'noun' },
      { word: 'argomentazione logica', base: "l'argomentazione logica", tr: { bn: 'যৌক্তিক উপস্থাপনা', en: 'logical argumentation' }, pos: 'noun' },
    ],
    grammarBreakdown: [
      { sentenceIt: 'Chi osteggia… sostiene che…; tuttavia gli studi dimostrano che… compensa…', ruleTitle: { bn: 'প্রবন্ধের ৪ স্তম্ভ (Tesi → Antitesi → Confutazione → Sintesi)', en: '4-stage essay structure' }, explanation: { bn: 'বিরোধী মত (Chi osteggia) ভদ্রভাবে উপস্থাপন করে অভিজ্ঞতালব্ধ তথ্য দিয়ে তা খণ্ডন (confutazione) করাই B2 প্রবন্ধের মূল শক্তি।', en: 'Fairly stating and refuting counter-arguments makes B2 essays persuasive.' }, grammarId: 'argomentazione-saggio-b2' },
    ],
    mcq: [
      { id: 'stb2-52-q1', prompt: { bn: 'প্রবন্ধে কোন বিষয়টি শহরের দোকানগুলোর বিক্রি ধরে রাখতে সাহায্য করে?', en: 'What offsets fewer private cars in low-emission historic centres?' }, options: ['রাতের বাজার বন্ধ করা', 'পথচারী ও বৈদ্যুতিক গণপরিবহন বৃদ্ধি', 'পার্কিং ফি বাড়ানো', 'দোকান ছোট করা'], answer: 1, explanation: { bn: 'সঠিক উত্তর: পথচারী ও বৈদ্যুতিক গণপরিবহন বৃদ্ধি — পাঠ্যাংশে বলা হয়েছে: «তবে নির্ধারণী ধাপ হলো প্রতিযুক্তি (অ্যান্টিথিসিস) এবং তার সাথে খণ্ডন (কনফিউটেশন)। যাঁরা এ ধরনের এলাকার বিরোধিতা করেন তাঁরা দাবি করেন যে এটি স্থানীয় দোকানগুলোকে ক্ষতিগ্রস্ত করে; কিন্তু নগর গবেষণা প্রমাণ করে যে পথচারী ও বৈদ্যুতিক পরিবহনের বৃদ্ধি ব্যক্তিগত গাড়ির সংখ্যা কমে যাওয়াকে যথেষ্ট পুষিয়ে দিতে সক্ষম।» (l’aumento dei pedoni e dei trasporti elettrici)।', en: 'Increased footfall and electric transit.' } },
    ],
    trueFalse: [
      { id: 'stb2-52-tf1', statementIt: 'In un saggio B2 è meglio ignorare completamente eventuali obiezioni contrarie.', statement: { bn: 'একটি B2 প্রবন্ধে সম্ভাব্য বিরোধী আপত্তিগুলো সম্পূর্ণ এড়িয়ে যাওয়াই শ্রেয়।', en: 'In a B2 essay it is better to ignore opposing objections.' }, answer: false, explanation: { bn: 'অ্যান্টিথিসিস উল্লেখ করে তা তথ্যসহ খণ্ডন করাই নির্ধারণী ধাপ।', en: 'Addressing and refuting the counter-argument is decisive.' } },
    ],
    fillBlank: [
      { id: 'stb2-52-fb1', sentence: 'La ___ dell’obiezione si basa su dati statistici verificabili.', options: ['confutazione', 'stagionatura', 'prescrizione', 'celiachia'], answer: 0, explanation: { bn: 'যুক্তি বা আপত্তি খণ্ডন করা = la confutazione।', en: 'la confutazione means refutation.' } },
    ],
    shortAnswer: [
      { id: 'stb2-52-sa1', question: { bn: 'প্রবন্ধের ভূমিকায় (premessa) কী কী করা হয়?', en: 'What is done in an essay’s introductory premise?' }, sampleAnswerIt: 'Si inquadra il tema e si enuncia la tesi.', keywords: ['tema', 'tesi'] },
    ],
    practice: {
      retellPrompt: { bn: 'প্রবন্ধের ৪টি ধাপ সংক্ষেপে ৩-৪ বাক্যে লিখুন।', en: 'Summarise the 4 stages of a B2 argumentative essay.' },
      completeMissing: { promptIt: 'Chi ___ la misura teme i costi; tuttavia i dati dimostrano il contrario.', hint: { bn: 'বিরোধিতা করা: osteggia', en: 'osteggia' }, sampleIt: 'Chi osteggia la misura teme i costi; tuttavia i dati dimostrano il contrario.' },
      buildSimilar: { patternIt: 'Se da un lato si obietta che…, dall’altro va rilevato che…', prompt: { bn: 'একটি প্রতিযুক্তি ও খণ্ডনের জোড়া বাক্য লিখুন।', en: 'Write a counter-argument and refutation pair.' }, sampleIt: 'Se da un lato il restauro richiede investimenti, dall’altro valorizza il turismo sostenibile a lungo termine.' },
      altEndingPrompt: { bn: 'ঐতিহাসিক কেন্দ্রে নতুন বৈদ্যুতিক শাটল বাস চালুর ফলাফল লিখুন।', en: 'Describe the historic centre one year after launching electric shuttle buses.' },
    },
  }),
];
