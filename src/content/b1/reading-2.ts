import type { ReadingPassage } from '../academyTypes';
import { buildReading } from '../builders';

export const B1_READING_2: ReadingPassage[] = [
  buildReading({
    id: 'rd-b1-22', level: 'B1', kind: 'message', titleIt: 'Messaggio prima dell’appello d’esame', title: { bn: 'পরীক্ষার সেশনের আগের বার্তা', en: 'Message before the exam sitting' },
    storyId: 'st-b1-22',
    paragraphs: [
      { it: 'Ciao Nadia, sono già davanti all’aula tre ma il professore non c’è ancora. Saranno le nove meno cinque: probabilmente avrà trovato traffico per la deviazione sul viale.', tr: { bn: 'হ্যালো নাদিয়া, আমি ইতিমধ্যে তিন নম্বর কক্ষের সামনে আছি কিন্তু অধ্যাপক এখনো আসেননি। হয়ত নয়টা বাজতে পাঁচ মিনিট বাকি: সম্ভবত বড় রাস্তায় ডাইভারশনের কারণে তিনি জ্যামে পড়েছেন।', en: 'Hi Nadia, I am already outside room three but the professor is not here yet. It must be five to nine: he has probably hit traffic due to the diversion on the avenue.' } },
      { it: 'Comunque ci sono già venti studenti iscritti a questo appello; ti tengo un posto in prima fila!', tr: { bn: 'যা হোক এই সেশনে ইতিমধ্যে বিশজন নিবন্ধিত শিক্ষার্থী এসেছে; তোমার জন্য সামনের সারিতে একটা সিট রাখছি!', en: 'Anyway there are already twenty students registered for this sitting; I am saving you a seat in the front row!' } },
    ],
    vocabHighlights: [{ it: 'prima fila', tr: { bn: 'সামনের সারি', en: 'front row' } }, { it: 'iscritti', tr: { bn: 'নিবন্ধিত শিক্ষার্থীরা', en: 'registered students' } }],
    grammarHighlights: [{ excerpt: 'Saranno le nove / avrà trovato traffico', note: { bn: 'অনুমানের ভবিষ্যৎ (futuro di probabilità)।', en: 'Future of probability.' }, grammarId: 'futuro-probabilita' }],
    relatedGrammarIds: ['futuro-probabilita'],
    questions: [
      { id: 'rd-b1-22-q1', prompt: { bn: 'পরীক্ষার সেশনে কতজন শিক্ষার্থী উপস্থিত আছে?', en: 'How many students are already there for the exam sitting?' }, options: ['৫ জন', '১০ জন', '২০ জন', '৫০ জন'], answer: 2, explanation: { bn: 'venti studenti।', en: 'Twenty students.' } },
    ],
  }),
  buildReading({
    id: 'rd-b1-23', level: 'B1', kind: 'essay', titleIt: 'L’eredità culturale del Rinascimento', title: { bn: 'রেনেসাঁসের সাংস্কৃতিক উত্তরাধিকার', en: 'The cultural legacy of the Renaissance' },
    storyId: 'st-b1-23',
    paragraphs: [
      { it: 'Tra il Quattrocento e il Cinquecento il Rinascimento italiano cambiò il modo di concepire l’arte, la scienza e l’architettura. Artisti come Leonardo e Michelangelo unirono studio scientifico e bellezza artistica.', tr: { bn: 'পঞ্চদশ ও ষোড়শ শতাব্দীর মধ্যে ইতালীয় রেনেসাঁস শিল্পকলা, বিজ্ঞান ও স্থাপত্যকে দেখার দৃষ্টিভঙ্গি বদলে দিয়েছিল। লিওনার্দো ও মিকেলাঞ্জেলোর মতো শিল্পীরা বৈজ্ঞানিক অধ্যয়ন ও শৈল্পিক সৌন্দর্যকে একত্র করেছিলেন।', en: 'Between the fifteenth and sixteenth centuries the Italian Renaissance changed the way art, science, and architecture were conceived. Artists like Leonardo and Michelangelo united scientific study and artistic beauty.' } },
      { it: 'Anche la stampa a caratteri mobili favorì la diffusione dei libri, permettendo a ogni scrittore di raggiungere lettori in tutta Europa.', tr: { bn: 'চলমান অক্ষরের মুদ্রণযন্ত্রও বইয়ের প্রসারকে ত্বরান্বিত করেছিল, যা প্রতিটি লেখককে সারা ইউরোপের পাঠকের কাছে পৌঁছাতে সাহায্য করেছিল।', en: 'Movable-type printing also fostered the spread of books, allowing every writer to reach readers across Europe.' } },
    ],
    vocabHighlights: [{ it: 'concepire', tr: { bn: 'ধারণা করা / কল্পনা করা', en: 'to conceive' } }, { it: 'diffusione', tr: { bn: 'প্রসার / বিস্তার', en: 'spread / diffusion' } }],
    grammarHighlights: [{ excerpt: 'cambiò / unirono / favorì', note: { bn: 'ঐতিহাসিক প্রবন্ধে passato remoto।', en: 'Passato remoto in historical essays.' }, grammarId: 'passato-remoto-b1' }],
    relatedGrammarIds: ['passato-remoto-b1'],
    questions: [
      { id: 'rd-b1-23-q1', prompt: { bn: 'কোন প্রযুক্তি ইউরোপ জুড়ে বইয়ের প্রসার বাড়িয়েছিল?', en: 'What technology helped spread books across Europe?' }, options: ['চলমান অক্ষরের মুদ্রণযন্ত্র (stampa a caratteri mobili)', 'টেলিগ্রাফ', 'রেডিও', 'ফটোগ্রাফি'], answer: 0, explanation: { bn: 'la stampa a caratteri mobili।', en: 'Movable-type printing.' } },
    ],
  }),
  buildReading({
    id: 'rd-b1-24', level: 'B1', kind: 'email', titleIt: 'Consegna dei certificati richiesti', title: { bn: 'প্রয়োজনীয় সনদপত্র জমা দেওয়া', en: 'Delivery of requested certificates' },
    storyId: 'st-b1-24',
    paragraphs: [
      { it: 'Gentile Dottor Rinaldi, i certificati che ci aveva chiesto sono pronti: l’ufficio dell’anagrafe ce li ha rilasciati stamattina con timbro digitale.', tr: { bn: 'মাননীয় ডক্টর রিনালদি, আপনি আমাদের কাছে যে সনদগুলো চেয়েছিলেন সেগুলো প্রস্তুত: নাগরিক নিবন্ধন দপ্তর আজ সকালে ডিজিটাল সিলসহ আমাদের সেগুলো প্রদান করেছে।', en: 'Dear Dr Rinaldi, the certificates you asked us for are ready: the civil registry office issued them to us this morning with a digital stamp.' } },
      { it: 'Anche la raccomandata dell’assicurazione è arrivata; mia moglie me l’ha consegnata poco fa e gliela invio in copia.', tr: { bn: 'বিমা কোম্পানির রেজিস্টার্ড চিঠিটিও এসেছে; আমার স্ত্রী কিছুক্ষণ আগে আমাকে সেটি দিয়েছেন এবং আমি আপনাকে তার কপি পাঠাচ্ছি।', en: 'The registered letter from the insurance company has also arrived; my wife handed it to me just now and I am sending a copy to you.' } },
    ],
    vocabHighlights: [{ it: 'timbro digitale', tr: { bn: 'ডিজিটাল সিল', en: 'digital stamp' } }, { it: 'in copia', tr: { bn: 'অনুলিপি হিসেবে', en: 'as a copy' } }],
    grammarHighlights: [{ excerpt: 'ce li ha rilasciati / me l’ha consegnata', note: { bn: 'অতীতে যৌগিক সর্বনাম ও পার্টিসিপল মিল।', en: 'Combined pronouns with past participle agreement.' }, grammarId: 'pronomi-doppi-passato' }],
    relatedGrammarIds: ['pronomi-doppi-passato'],
    questions: [
      { id: 'rd-b1-24-q1', prompt: { bn: 'রেজিস্টার্ড চিঠিটি কোথা থেকে এসেছে?', en: 'Where did the registered letter come from?' }, options: ['বিমা কোম্পানি থেকে (dell’assicurazione)', 'স্কুল থেকে', 'হাসপাতাল থেকে', 'বিমানবন্দর থেকে'], answer: 0, explanation: { bn: 'la raccomandata dell’assicurazione।', en: 'From the insurance company.' } },
    ],
  }),
  buildReading({
    id: 'rd-b1-25', level: 'B1', kind: 'travel', titleIt: 'Vantaggi dell’alta velocità per i pendolari', title: { bn: 'নিত্যযাত্রীদের জন্য উচ্চগতির ট্রেনের সুবিধা', en: 'High-speed rail benefits for commuters' },
    storyId: 'st-b1-25',
    paragraphs: [
      { it: 'Per migliaia di professionisti italiani, la rete ferroviaria ad alta velocità ha rivoluzionato il modo di lavorare. Tra Firenze e Bologna ci vogliono solo trentacinque minuti.', tr: { bn: 'হাজার হাজার ইতালীয় পেশাজীবীর জন্য উচ্চগতির রেল নেটওয়ার্ক কাজের ধরনে বিপ্লব এনেছে। ফ্লোরেন্স ও বোলোনিয়ার মধ্যে মাত্র পঁয়ত্রিশ মিনিট সময় লাগে।', en: 'For thousands of Italian professionals, the high-speed rail network has revolutionised working life. Between Florence and Bologna it takes only thirty-five minutes.' } },
      { it: 'Anche se l’abbonamento mensile per il pendolare è più costoso rispetto al treno regionale, si risparmia molta fatica e ne vale davvero la pena.', tr: { bn: 'আঞ্চলিক ট্রেনের তুলনায় নিত্যযাত্রীর মাসিক পাস বেশি ব্যয়বহুল হলেও এতে অনেক ক্লান্তি বাঁচে এবং তা সত্যিই সার্থক।', en: 'Even though the monthly commuter pass is more expensive than the regional train, it saves a lot of fatigue and is really worth it.' } },
    ],
    vocabHighlights: [{ it: 'rivoluzionare', tr: { bn: 'বিপ্লব ঘটানো / আমূল বদলে দেওয়া', en: 'to revolutionise' } }, { it: 'abbonamento mensile', tr: { bn: 'মাসিক পাস', en: 'monthly pass' } }],
    grammarHighlights: [{ excerpt: 'ci vogliono / ne vale davvero la pena', note: { bn: 'volerci এবং valerne la pena।', en: 'Idiomatic volerci and valerne la pena.' }, grammarId: 'ci-ne-idiomatici' }],
    relatedGrammarIds: ['ci-ne-idiomatici'],
    questions: [
      { id: 'rd-b1-25-q1', prompt: { bn: 'উচ্চগতির ট্রেনে ফ্লোরেন্স থেকে বোলোনিয়া যেতে কত সময় লাগে?', en: 'How long does it take between Florence and Bologna by high-speed train?' }, options: ['১৫ মিনিট', '৩৫ মিনিট', '১ ঘণ্টা ৩০ মিনিট', '২ ঘণ্টা'], answer: 1, explanation: { bn: 'trentacinque minuti।', en: 'Thirty-five minutes.' } },
    ],
  }),
  buildReading({
    id: 'rd-b1-26', level: 'B1', kind: 'notice', titleIt: 'Istruzioni per la detrazione fiscale', title: { bn: 'কর ছাড়ের নির্দেশাবলি', en: 'Instructions for tax deductions' },
    storyId: 'st-b1-26',
    paragraphs: [
      { it: 'Si ricorda ai contribuenti che ogni ricevuta fiscale relativa a spese sanitarie o scolastiche va conservata insieme alla copia del pagamento elettronico.', tr: { bn: 'করদাতাদের মনে করিয়ে দেওয়া হচ্ছে যে স্বাস্থ্য বা স্কুল খরচ সংক্রান্ত প্রতিটি কর রসিদ ইলেকট্রনিক পেমেন্টের কপির সাথে সংরক্ষণ করতে হবে।', en: 'Taxpayers are reminded that every tax receipt for medical or school expenses must be kept together with the copy of the electronic payment.' } },
      { it: 'I documenti vengono controllati dagli operatori del CAF prima dell’invio definitivo entro la scadenza fiscale.', tr: { bn: 'করের শেষ সময়সীমার মধ্যে চূড়ান্ত প্রেরণের আগে CAF-এর কর্মীদের দ্বারা নথিগুলো পরীক্ষা করা হয়।', en: 'Documents are checked by tax centre operators before final submission by the tax deadline.' } },
    ],
    vocabHighlights: [{ it: 'contribuente', tr: { bn: 'করদাতা', en: 'taxpayer' } }, { it: 'detrazione', tr: { bn: 'কর ছাড়', en: 'tax deduction' } }],
    grammarHighlights: [{ excerpt: 'va conservata / vengono controllati', note: { bn: 'andare + participio (আবশ্যকতা) এবং venire + participio।', en: 'Passive with andare and venire.' }, grammarId: 'passivo-venire-andare' }],
    relatedGrammarIds: ['passivo-venire-andare'],
    questions: [
      { id: 'rd-b1-26-q1', prompt: { bn: 'কর রসিদের সাথে আর কী সংরক্ষণ করতে হবে?', en: 'What must be kept together with the tax receipt?' }, options: ['ইলেকট্রনিক পেমেন্টের কপি', 'ট্রেনের টিকিট', 'পরিচয়পত্রের মূল কপি', 'চিকিৎসকের ছবি'], answer: 0, explanation: { bn: 'la copia del pagamento elettronico।', en: 'The copy of the electronic payment.' } },
    ],
  }),
  buildReading({
    id: 'rd-b1-27', level: 'B1', kind: 'news', titleIt: 'Esito del dibattito ambientale cittadino', title: { bn: 'নগর পরিবেশ বিতর্কের ফলাফল', en: 'Outcome of the city environmental debate' },
    storyId: 'st-b1-27',
    paragraphs: [
      { it: 'Nel corso del dibattito pubblico di giovedì si sono esaminate le proposte dei comitati di quartiere per migliorare la qualità dell’aria.', tr: { bn: 'বৃহস্পতিবারের উন্মুক্ত বিতর্ক চলাকালীন বাতাসের মান উন্নয়নে পাড়া কমিটিগুলোর প্রস্তাব পরীক্ষা করা হয়েছে।', en: 'During Thursday’s public debate the neighbourhood committees’ proposals to improve air quality were examined.' } },
      { it: 'Dopo tre ore di confronto costruttivo, si è scelta una soluzione ambientale che prevede nuovi autobus elettrici e alberature lungo i viali.', tr: { bn: 'তিন ঘণ্টা গঠনমূলক আলোচনার পর একটি পরিবেশগত সমাধান বেছে নেওয়া হয়েছে যাতে নতুন বৈদ্যুতিক বাস ও রাস্তার ধারে বৃক্ষরোপণের ব্যবস্থা রয়েছে।', en: 'After three hours of constructive discussion, an environmental solution was chosen providing for new electric buses and tree-lined avenues.' } },
    ],
    vocabHighlights: [{ it: 'costruttivo', tr: { bn: 'গঠনমূলক', en: 'constructive' } }, { it: 'alberature', tr: { bn: 'সারিবদ্ধ গাছপালা', en: 'rows of trees' } }],
    grammarHighlights: [{ excerpt: 'si sono esaminate / si è scelta', note: { bn: 'অতীতে si passivante।', en: 'Past passive si.' }, grammarId: 'si-passivante-tempi' }],
    relatedGrammarIds: ['si-passivante-tempi'],
    questions: [
      { id: 'rd-b1-27-q1', prompt: { bn: 'বিতর্কটি কতক্ষণ চলেছিল?', en: 'How long did the discussion last?' }, options: ['১ ঘণ্টা', '৩ ঘণ্টা', '৫ ঘণ্টা', 'সারাদিন'], answer: 1, explanation: { bn: 'Dopo tre ore di confronto।', en: 'Three hours.' } },
    ],
  }),
  buildReading({
    id: 'rd-b1-28', level: 'B1', kind: 'article', titleIt: 'Digitalizzazione e meno burocrazia', title: { bn: 'ডিজিটাল সেবা ও কম আমলাতন্ত্র', en: 'Digitalisation and less bureaucracy' },
    storyId: 'st-b1-28',
    paragraphs: [
      { it: 'Grazie all’identità digitale e ai portali comunali, oggi la burocrazia fa molta meno paura rispetto a dieci anni fa. Anche chi non è esperto di informatica riesce a cavarsela in pochi clic.', tr: { bn: 'ডিজিটাল পরিচয় ও পৌর পোর্টালের কল্যাণে আজ দশ বছর আগের তুলনায় আমলাতন্ত্র অনেক কম ভীতিকর। এমনকি যারা কম্পিউটারে বিশেষজ্ঞ নয় তারাও কয়েকটি ক্লিকেই কাজ সামলে নিতে পারে।', en: 'Thanks to digital identity and municipal portals, today bureaucracy is much less daunting than ten years ago. Even those who are not computer experts manage to get by in a few clicks.' } },
      { it: 'Quando sorge un dubbio, invece di arrangiarsi da soli si può prenotare una videochiamata gratuita con un operatore.', tr: { bn: 'কোনো সন্দেহ দেখা দিলে একা চেষ্টা না করে একজন কর্মীর সাথে বিনামূল্যে ভিডিও কল বুক করা যায়।', en: 'When a doubt arises, instead of making do alone one can book a free video call with an operator.' } },
    ],
    vocabHighlights: [{ it: 'identità digitale', tr: { bn: 'ডিজিটাল পরিচয় (SPID/CIE)', en: 'digital identity' } }, { it: 'in pochi clic', tr: { bn: 'কয়েকটি ক্লিকেই', en: 'in a few clicks' } }],
    grammarHighlights: [{ excerpt: 'cavarsela / arrangiarsi', note: { bn: 'সর্বনামযুক্ত বাগধারামূলক ক্রিয়া।', en: 'Pronominal verbs.' }, grammarId: 'verbi-pronominali-b1' }],
    relatedGrammarIds: ['verbi-pronominali-b1', 'si-impersonale'],
    questions: [
      { id: 'rd-b1-28-q1', prompt: { bn: 'পোর্টালে কোনো সন্দেহ দেখা দিলে কী বুক করা যায়?', en: 'What can you book if a doubt arises on the portal?' }, options: ['কর্মীর সাথে বিনামূল্যে ভিডিও কল', 'ট্যাক্সি', 'হোটেল', 'ভাষা কোর্স'], answer: 0, explanation: { bn: 'una videochiamata gratuita con un operatore।', en: 'A free video call with an operator.' } },
    ],
  }),
  buildReading({
    id: 'rd-b1-29', level: 'B1', kind: 'article', titleIt: 'Bonus casa e lavori di efficientamento', title: { bn: 'গৃহ সংস্কার ও জ্বালানি দক্ষতা বৃদ্ধি', en: 'Home renovation and energy efficiency works' },
    storyId: 'st-b1-29',
    paragraphs: [
      { it: 'Molte famiglie che accendono un mutuo per la prima casa scelgono di far riparare subito il tetto e gli infissi per migliorare l’isolamento termico.', tr: { bn: 'প্রথম বাড়ির জন্য যারা গৃহঋণ নেয় এমন অনেক পরিবার তাপীয় সুরক্ষা বাড়াতে সাথে সাথেই ছাদ ও জানালা মেরামত করানোর সিদ্ধান্ত নেয়।', en: 'Many families taking out a mortgage for their first home choose to have the roof and window frames repaired right away to improve thermal insulation.' } },
      { it: 'Facendo installare una caldaia moderna o i pannelli solari, si riducono i consumi invernali fin dal primo anno.', tr: { bn: 'আধুনিক বয়লার বা সৌর প্যানেল বসালে প্রথম বছর থেকেই শীতকালীন খরচ কমে যায়।', en: 'By having a modern boiler or solar panels installed, winter consumption is reduced from the very first year.' } },
    ],
    vocabHighlights: [{ it: 'isolamento termico', tr: { bn: 'তাপীয় সুরক্ষা / ইনসুলেশন', en: 'thermal insulation' } }, { it: 'pannelli solari', tr: { bn: 'সৌর প্যানেল', en: 'solar panels' } }],
    grammarHighlights: [{ excerpt: 'far riparare / Facendo installare', note: { bn: 'প্রেরণার্থক fare + infinito।', en: 'Causative fare + infinitive.' }, grammarId: 'causativi-fare-lasciare' }],
    relatedGrammarIds: ['causativi-fare-lasciare'],
    questions: [
      { id: 'rd-b1-29-q1', prompt: { bn: 'ছাদ ও জানালা মেরামত করালে কী উন্নত হয়?', en: 'What improves when the roof and windows are repaired?' }, options: ['তাপীয় সুরক্ষা (isolamento termico)', 'ইন্টারনেট গতি', 'লিফটের গতি', 'বাগানের আয়তন'], answer: 0, explanation: { bn: 'migliorare l’isolamento termico।', en: 'Thermal insulation.' } },
    ],
  }),
  buildReading({
    id: 'rd-b1-30', level: 'B1', kind: 'news', titleIt: 'Riapertura di viale Mazzini dopo i lavori', title: { bn: 'সংস্কার শেষে ভিয়ালে মাৎসিনি পুনরায় চালু', en: 'Reopening of Viale Mazzini after roadworks' },
    storyId: 'st-b1-30',
    paragraphs: [
      { it: 'Nella sua dichiarazione alla stampa locale, il sindaco aveva promesso che il grande cantiere stradale di viale Mazzini si sarebbe concluso prima dell’inizio delle scuole.', tr: { bn: 'স্থানীয় সংবাদমাধ্যমে দেওয়া ঘোষণায় মেয়র কথা দিয়েছিলেন যে স্কুল শুরু হওয়ার আগেই ভিয়ালে মাৎসিনির বড় রাস্তার কাজ শেষ হবে।', en: 'In his statement to the local press, the mayor had promised that the major roadworks on Viale Mazzini would finish before schools started.' } },
      { it: 'Gli ingegneri comunali hanno confermato che gli operai avevano lavorato anche di sabato per rispettare i tempi.', tr: { bn: 'পৌর প্রকৌশলীরা নিশ্চিত করেছেন যে সময়সীমা রক্ষা করতে শ্রমিকেরা শনিবারেও কাজ করেছিলেন।', en: 'Municipal engineers confirmed that workers had also worked on Saturdays to meet the schedule.' } },
    ],
    vocabHighlights: [{ it: 'stampa locale', tr: { bn: 'স্থানীয় সংবাদমাধ্যম', en: 'local press' } }, { it: 'rispettare i tempi', tr: { bn: 'সময়সীমা মেনে চলা', en: 'to meet the schedule' } }],
    grammarHighlights: [{ excerpt: 'aveva promesso che… si sarebbe concluso', note: { bn: 'অতীতে পরোক্ষ উক্তি ও condizionale passato।', en: 'Past indirect speech and past conditional.' }, grammarId: 'discorso-indiretto-passato' }],
    relatedGrammarIds: ['discorso-indiretto-passato'],
    questions: [
      { id: 'rd-b1-30-q1', prompt: { bn: 'সময়সীমা রক্ষা করতে শ্রমিকেরা কোন দিনেও কাজ করেছিলেন?', en: 'On which day had the workers also worked to meet the deadline?' }, options: ['শনিবারেও', 'শুধু সোমবারে', 'বছরের প্রথম দিনে', 'রাতে'], answer: 0, explanation: { bn: 'anche di sabato।', en: 'On Saturdays too.' } },
    ],
  }),
  buildReading({
    id: 'rd-b1-31', level: 'B1', kind: 'letter', titleIt: 'Relazione finale di tirocinio', title: { bn: 'ইন্টার্নশিপের চূড়ান্ত প্রতিবেদন', en: 'Final internship report' },
    storyId: 'st-b1-31',
    paragraphs: [
      { it: 'Dopo aver svolto trecento ore di tirocinio presso il laboratorio chimico, ho imparato ad analizzare i dati sperimentali con strumenti di alta precisione.', tr: { bn: 'রাসায়নিক ল্যাবরেটরিতে তিনশ ঘণ্টা ইন্টার্নশিপ সম্পন্ন করার পর আমি উচ্চ নির্ভুলতার যন্ত্র দিয়ে পরীক্ষামূলক তথ্য বিশ্লেষণ করতে শিখেছি।', en: 'After completing three hundred hours of internship at the chemical laboratory, I learned to analyse experimental data with high-precision instruments.' } },
      { it: 'Ringrazio il mio tutor aziendale per avermi guidato nella stesura del riassunto tecnico allegato alla tesi.', tr: { bn: 'থিসিসের সাথে সংযুক্ত কারিগরি সারাংশ লেখায় আমাকে পথ দেখানোর জন্য আমার প্রাতিষ্ঠানিক টিউটরকে ধন্যবাদ জানাই।', en: 'I thank my company tutor for having guided me in drafting the technical summary attached to my thesis.' } },
    ],
    vocabHighlights: [{ it: 'alta precisione', tr: { bn: 'উচ্চ নির্ভুলতা', en: 'high precision' } }, { it: 'stesura', tr: { bn: 'খসড়া রচনা / লেখা', en: 'drafting / writing' } }],
    grammarHighlights: [{ excerpt: 'Dopo aver svolto / per avermi guidato', note: { bn: 'অতীত ইনফিনিটিভ (infinito passato)।', en: 'Past infinitive.' }, grammarId: 'infinito-passato' }],
    relatedGrammarIds: ['infinito-passato'],
    questions: [
      { id: 'rd-b1-31-q1', prompt: { bn: 'ইন্টার্নশিপটি কত ঘণ্টার ছিল?', en: 'How many hours was the internship?' }, options: ['৫০ ঘণ্টা', '১০০ ঘণ্টা', '৩০০ ঘণ্টা', '১,০০০ ঘণ্টা'], answer: 2, explanation: { bn: 'trecento ore di tirocinio।', en: 'Three hundred hours.' } },
    ],
  }),
  buildReading({
    id: 'rd-b1-32', level: 'B1', kind: 'travel', titleIt: 'Check-in digitale e bagaglio a mano', title: { bn: 'ডিজিটাল চেক-ইন ও হাতব্যাগ', en: 'Digital check-in and hand luggage' },
    storyId: 'st-b1-32',
    paragraphs: [
      { it: 'Avendo effettuato il check-in online ventiquattro ore prima del volo, i passeggeri con il solo bagaglio a mano possono recarsi direttamente ai controlli di sicurezza.', tr: { bn: 'ফ্লাইটের চব্বিশ ঘণ্টা আগে অনলাইন চেক-ইন সম্পন্ন করায় কেবল হাতব্যাগ থাকা যাত্রীরা সরাসরি নিরাপত্তা তল্লাশিতে যেতে পারেন।', en: 'Having completed online check-in twenty-four hours before the flight, passengers with hand luggage only can go straight to security checks.' } },
      { it: 'Qualora si dovesse smarrire la carta d’imbarco cartacea, il documento resta sempre disponibile a lungo nell’applicazione mobile.', tr: { bn: 'কাগুজে বোর্ডিং পাস হারিয়ে গেলেও মোবাইল অ্যাপে নথিটি সবসময় দীর্ঘক্ষণ উপলব্ধ থাকে।', en: 'Should one misplace the paper boarding pass, the document always remains available in the mobile app.' } },
    ],
    vocabHighlights: [{ it: 'bagaglio a mano', tr: { bn: 'হাতব্যাগ / কেবিন ব্যাগেজ', en: 'hand luggage' } }, { it: 'controlli di sicurezza', tr: { bn: 'নিরাপত্তা তল্লাশি', en: 'security checks' } }],
    grammarHighlights: [{ excerpt: 'Avendo effettuato il check-in', note: { bn: 'যৌগিক জেরুন্ড (gerundio composto)।', en: 'Compound gerund.' }, grammarId: 'gerundio-composto' }],
    relatedGrammarIds: ['gerundio-composto'],
    questions: [
      { id: 'rd-b1-32-q1', prompt: { bn: 'ফ্লাইটের কত ঘণ্টা আগে অনলাইন চেক-ইন করার কথা বলা হয়েছে?', en: 'How many hours before the flight was online check-in completed?' }, options: ['২ ঘণ্টা', '১২ ঘণ্টা', '২৪ ঘণ্টা', '৭২ ঘণ্টা'], answer: 2, explanation: { bn: 'ventiquattro ore prima del volo।', en: 'Twenty-four hours before.' } },
    ],
  }),
  buildReading({
    id: 'rd-b1-33', level: 'B1', kind: 'article', titleIt: 'Gestire il bilancio domestico con metodo', title: { bn: 'পদ্ধতিগতভাবে পারিবারিক বাজেট পরিচালনা', en: 'Managing the household budget methodically' },
    storyId: 'st-b1-33',
    paragraphs: [
      { it: 'Ottenuto un contratto stabile e il permesso di lavoro, molte famiglie decidono di pianificare con cura le entrate e le uscite mensili.', tr: { bn: 'স্থায়ী চুক্তি ও কাজের অনুমতি পাওয়ার পর অনেক পরিবার মাসিক আয়-ব্যয় যত্নসহকারে পরিকল্পনা করার সিদ্ধান্ত নেয়।', en: 'Once a stable contract and work permit are obtained, many families decide to carefully plan monthly income and expenditure.' } },
      { it: 'Pagate puntualmente l’affitto e le spese condominiali all’inizio del mese, diventa più semplice accantonare una quota fissa per gli imprevisti.', tr: { bn: 'মাসের শুরুতে ভাড়া ও ভবনের খরচ সময়মতো পরিশোধ করার পর অপ্রত্যাশিত প্রয়োজনের জন্য নির্দিষ্ট অংশ জমিয়ে রাখা সহজ হয়।', en: 'Once rent and building charges are punctually paid at the start of the month, it becomes easier to set aside a fixed share for emergencies.' } },
    ],
    vocabHighlights: [{ it: 'entrate e uscite', tr: { bn: 'আয় ও ব্যয়', en: 'income and expenditure' } }, { it: 'accantonare', tr: { bn: 'আলাদা করে জমিয়ে রাখা', en: 'to set aside / save' } }],
    grammarHighlights: [{ excerpt: 'Ottenuto un contratto… Pagate le spese', note: { bn: 'participio passato assoluto।', en: 'Absolute past participle.' }, grammarId: 'participio-passato-assoluto' }],
    relatedGrammarIds: ['participio-passato-assoluto'],
    questions: [
      { id: 'rd-b1-33-q1', prompt: { bn: 'মাসের শুরুতে কী পরিশোধ করার কথা বলা হয়েছে?', en: 'What is paid at the start of the month?' }, options: ['ভাড়া ও ভবনের রক্ষণাবেক্ষণ খরচ', 'ছুটির টিকিট', 'নতুন গাড়ি', 'রেস্তোরাঁর বিল'], answer: 0, explanation: { bn: 'l’affitto e le spese condominiali।', en: 'Rent and building charges.' } },
    ],
  }),
  buildReading({
    id: 'rd-b1-34', level: 'B1', kind: 'article', titleIt: 'Volontariato culturale e ricerca locale', title: { bn: 'সাংস্কৃতিক স্বেচ্ছাসেবা ও স্থানীয় গবেষণা', en: 'Cultural volunteering and local research' },
    storyId: 'st-b1-34',
    paragraphs: [
      { it: 'La biblioteca civica ospita un’associazione culturale il cui scopo è raccogliere fotografie e lettere storiche delle famiglie del territorio.', tr: { bn: 'পৌর গ্রন্থাগারটি এমন একটি সাংস্কৃতিক সংগঠনকে জায়গা দিয়েছে যার উদ্দেশ্য অঞ্চলের পরিবারগুলোর ঐতিহাসিক ছবি ও চিঠি সংগ্রহ করা।', en: 'The civic library hosts a cultural association whose purpose is to collect historical photos and letters from local families.' } },
      { it: 'I ricercatori con i quali collaborano gli studenti hanno creato un archivio digitale aperto gratuitamente a tutte le scuole.', tr: { bn: 'শিক্ষার্থীরা যে গবেষকদের সাথে কাজ করে তাঁরা সব স্কুলের জন্য বিনামূল্যে উন্মুক্ত একটি ডিজিটাল আর্কাইভ তৈরি করেছেন।', en: 'The researchers with whom the students collaborate have created a digital archive open free of charge to all schools.' } },
    ],
    vocabHighlights: [{ it: 'archivio digitale', tr: { bn: 'ডিজিটাল আর্কাইভ/সংগ্রহশালা', en: 'digital archive' } }, { it: 'territorio', tr: { bn: 'অঞ্চল / এলাকা', en: 'local area / territory' } }],
    grammarHighlights: [{ excerpt: 'il cui scopo / con i quali', note: { bn: 'সম্বন্ধসূচক il cui এবং অব্যয় + i quali।', en: 'Possessive il cui and preposition + i quali.' }, grammarId: 'relativi-il-quale-cui' }],
    relatedGrammarIds: ['relativi-il-quale-cui'],
    questions: [
      { id: 'rd-b1-34-q1', prompt: { bn: 'ডিজিটাল আর্কাইভটি কাদের জন্য বিনামূল্যে উন্মুক্ত?', en: 'Who is the digital archive open to for free?' }, options: ['সব স্কুলের জন্য', 'কেবল ব্যাংকের জন্য', 'বিমানবন্দরের জন্য', 'সুপারমার্কেটের জন্য'], answer: 0, explanation: { bn: 'aperto gratuitamente a tutte le scuole।', en: 'Open free of charge to all schools.' } },
    ],
  }),
  buildReading({
    id: 'rd-b1-35', level: 'B1', kind: 'opinion', titleIt: 'Tutelare le risorse del pianeta', title: { bn: 'পৃথিবীর সম্পদ রক্ষা করা', en: 'Protecting the planet’s resources' },
    storyId: 'st-b1-35',
    paragraphs: [
      { it: 'Ciò che emerge dagli studi climatici più recenti è la necessità urgente di ridurre lo spreco di acqua, cibo ed energia elettrica.', tr: { bn: 'সাম্প্রতিকতম জলবায়ু গবেষণা থেকে যা উঠে আসছে তা হলো পানি, খাদ্য ও বিদ্যুতের অপচয় কমানোর জরুরি প্রয়োজনীয়তা।', en: 'What emerges from the latest climate studies is the urgent need to reduce waste of water, food, and electricity.' } },
      { it: 'Chi sceglie prodotti locali e ripara gli oggetti invece di buttarli contribuisce concretamente a preservare le risorse per le prossime generazioni.', tr: { bn: 'যারা স্থানীয় পণ্য বেছে নেয় এবং জিনিসপত্র ফেলে না দিয়ে মেরামত করে তারা পরবর্তী প্রজন্মের জন্য সম্পদ রক্ষায় বাস্তব অবদান রাখে।', en: 'Those who choose local products and repair items instead of throwing them away contribute concretely to preserving resources for future generations.' } },
    ],
    vocabHighlights: [{ it: 'emergere', tr: { bn: 'উঠে আসা / প্রকাশ পাওয়া', en: 'to emerge' } }, { it: 'preservare', tr: { bn: 'সংরক্ষণ / রক্ষা করা', en: 'to preserve' } }],
    grammarHighlights: [{ excerpt: 'Ciò che emerge / Chi sceglie… contribuisce', note: { bn: 'Ciò che এবং Chi + ৩য় পুরুষ একবচন ক্রিয়া।', en: 'Ciò che and Chi + singular verb.' }, grammarId: 'chi-quello-che-cio-che' }],
    relatedGrammarIds: ['chi-quello-che-cio-che'],
    questions: [
      { id: 'rd-b1-35-q1', prompt: { bn: 'জিনিসপত্র ফেলে না দিয়ে কী করার কথা বলা হয়েছে?', en: 'What should people do instead of throwing items away?' }, options: ['মেরামত করা (riparare gli oggetti)', 'লুকিয়ে রাখা', 'পুড়িয়ে ফেলা', 'রঙ করা'], answer: 0, explanation: { bn: 'ripara gli oggetti invece di buttarli।', en: 'Repair them.' } },
    ],
  }),
  buildReading({
    id: 'rd-b1-36', level: 'B1', kind: 'notice', titleIt: 'Nuova ZTL nel centro storico', title: { bn: 'ঐতিহাসিক কেন্দ্রে নতুন সীমিত যানবাহন অঞ্চল (ZTL)', en: 'New limited-traffic zone in the historic centre' },
    storyId: 'st-b1-36',
    paragraphs: [
      { it: 'Siccome il traffico privato danneggiava i monumenti antichi, l’amministrazione ha esteso la zona a traffico limitato a tutto il centro storico.', tr: { bn: 'যেহেতু ব্যক্তিগত যানবাহনের ভিড় প্রাচীন স্মৃতিস্তম্ভগুলোর ক্ষতি করছিল, প্রশাসন পুরো ঐতিহাসিক কেন্দ্রে সীমিত যানবাহন অঞ্চল (ZTL) সম্প্রসারিত করেছে।', en: 'Since private traffic was damaging ancient monuments, the administration extended the limited-traffic zone across the entire historic centre.' } },
      { it: 'Dato che le telecamere agli ingressi sono attive ventiquattro ore su ventiquattro, i residenti devono registrare la propria targa sul portale comunale.', tr: { bn: 'যেহেতু প্রবেশপথের ক্যামেরাগুলো চব্বিশ ঘণ্টাই সচল থাকে, বাসিন্দাদের পৌর পোর্টালে নিজেদের গাড়ির নম্বরপ্লেট নিবন্ধন করতে হবে।', en: 'Given that entry cameras are active 24/7, residents must register their licence plate on the municipal portal.' } },
    ],
    vocabHighlights: [{ it: 'zona a traffico limitato (ZTL)', tr: { bn: 'সীমিত যানবাহন অঞ্চল', en: 'limited-traffic zone' } }, { it: 'targa', tr: { bn: 'গাড়ির নম্বরপ্লেট', en: 'licence plate' } }],
    grammarHighlights: [{ excerpt: 'Siccome… danneggiava / Dato che… sono attive', note: { bn: 'কারণবাচক সংযোজক Siccome ও Dato che।', en: 'Causal connectors Siccome and Dato che.' }, grammarId: 'connettivi-causali-b1' }],
    relatedGrammarIds: ['connettivi-causali-b1'],
    questions: [
      { id: 'rd-b1-36-q1', prompt: { bn: 'বাসিন্দাদের পৌর পোর্টালে কী নিবন্ধন করতে হবে?', en: 'What must residents register on the municipal portal?' }, options: ['গাড়ির নম্বরপ্লেট (la propria targa)', 'টেলিফোন নম্বর', 'বাগানের মাপ', 'কুকুরের নাম'], answer: 0, explanation: { bn: 'registrare la propria targa।', en: 'Their licence plate.' } },
    ],
  }),
  buildReading({
    id: 'rd-b1-37', level: 'B1', kind: 'essay', titleIt: 'Riqualificazione professionale a ogni età', title: { bn: 'যেকোনো বয়সে পেশাগত দক্ষতা নবায়ন', en: 'Professional retraining at any age' },
    storyId: 'st-b1-37',
    paragraphs: [
      { it: 'Sebbene cambiare settore lavorativo dopo i trentacinque anni possa sembrare rischioso, oggi esistono molti percorsi regionali gratuiti per acquisire una nuova competenza.', tr: { bn: 'পঁয়ত্রিশ বছর বয়সের পর কাজের খাত বদলানো ঝুঁকিপূর্ণ মনে হতে পারলেও আজ নতুন দক্ষতা অর্জনের জন্য অনেক বিনামূল্যে আঞ্চলিক কোর্স রয়েছে।', en: 'Although changing career sector after thirty-five may seem risky, today there are many free regional pathways to acquire a new skill.' } },
      { it: 'Benché lo studio richieda costanza, l’esperienza maturata nei lavori precedenti aiuta ad affrontare i corsi pratici con grande maturità.', tr: { bn: 'পড়াশোনায় অধ্যবসায় লাগা সত্ত্বেও আগের কাজের অর্জিত অভিজ্ঞতা ব্যবহারিক কোর্সগুলো পরিণতভাবে মোকাবিলা করতে সাহায্য করে।', en: 'Even though studying requires perseverance, experience gained in previous jobs helps tackle practical courses with great maturity.' } },
    ],
    vocabHighlights: [{ it: 'riqualificazione', tr: { bn: 'পুনঃপ্রশিক্ষণ / দক্ষতা নবায়ন', en: 'retraining / upskilling' } }, { it: 'maturata', tr: { bn: 'অর্জিত / পরিপক্ব', en: 'gained / matured' } }],
    grammarHighlights: [{ excerpt: 'Sebbene… possa / Benché… richieda', note: { bn: 'স্বীকারোক্তিমূলক সংযোজক + congiuntivo।', en: 'Concessive conjunctions + subjunctive.' }, grammarId: 'connettivi-concessivi-b1' }],
    relatedGrammarIds: ['connettivi-concessivi-b1'],
    questions: [
      { id: 'rd-b1-37-q1', prompt: { bn: 'নতুন দক্ষতা অর্জনের জন্য আঞ্চলিক কোর্সগুলোর খরচ কেমন?', en: 'What do the regional pathways for acquiring new skills cost?' }, options: ['বিনামূল্যে (gratuiti)', 'খুব ব্যয়বহুল', 'মাসে হাজার ইউরো', 'কেবল ঋণে'], answer: 0, explanation: { bn: 'percorsi regionali gratuiti।', en: 'They are free of charge.' } },
    ],
  }),
  buildReading({
    id: 'rd-b1-38', level: 'B1', kind: 'notice', titleIt: 'Come funziona lo sportello unico digitale', title: { bn: 'ডিজিটাল একক কাউন্টার যেভাবে কাজ করে', en: 'How the digital one-stop desk works' },
    storyId: 'st-b1-38',
    paragraphs: [
      { it: 'Il portale dello sportello unico è stato progettato affinché imprese e cittadini possano inviare pratiche edilizie e commerciali da un solo sito web.', tr: { bn: 'একক কাউন্টারের পোর্টালটি এমনভাবে নকশা করা হয়েছে যাতে প্রতিষ্ঠান ও নাগরিকেরা একটিমাত্র ওয়েবসাইট থেকে নির্মাণ ও বাণিজ্যিক ফাইল পাঠাতে পারেন।', en: 'The one-stop desk portal was designed so that businesses and citizens can submit building and commercial applications from a single website.' } },
      { it: 'La ricevuta protocollata viene generata immediatamente, purché tutti i campi obbligatori siano compilati correttamente.', tr: { bn: 'সব বাধ্যতামূলক ঘর সঠিকভাবে পূরণ করার শর্তে সাথে সাথেই প্রটোকলযুক্ত রসিদ তৈরি হয়।', en: 'The registered receipt is generated immediately, provided all mandatory fields are filled in correctly.' } },
    ],
    vocabHighlights: [{ it: 'campi obbligatori', tr: { bn: 'বাধ্যতামূলক ঘরগুলো', en: 'mandatory fields' } }, { it: 'protocollata', tr: { bn: 'দাপ্তরিকভাবে নিবন্ধিত/প্রটোকলযুক্ত', en: 'officially logged/registered' } }],
    grammarHighlights: [{ excerpt: 'affinché… possano / purché… siano compilati', note: { bn: 'affinché ও purché + congiuntivo।', en: 'affinché and purché + subjunctive.' }, grammarId: 'connettivi-finali-condizionali' }],
    relatedGrammarIds: ['connettivi-finali-condizionali'],
    questions: [
      { id: 'rd-b1-38-q1', prompt: { bn: 'কখন সাথে সাথেই প্রটোকলযুক্ত রসিদ তৈরি হয়?', en: 'When is the logged receipt generated immediately?' }, options: ['সব বাধ্যতামূলক ঘর সঠিকভাবে পূরণ করলে', 'ডাকযোগে পাঠালে', 'তিন দিন পরে', 'ফোন করলে'], answer: 0, explanation: { bn: 'purché tutti i campi obbligatori siano compilati correttamente।', en: 'Provided all mandatory fields are filled in correctly.' } },
    ],
  }),
  buildReading({
    id: 'rd-b1-39', level: 'B1', kind: 'article', titleIt: 'Corsa nei parchi e benessere sociale', title: { bn: 'পার্কে দৌড় ও সামাজিক কল্যাণ', en: 'Park running and social wellbeing' },
    storyId: 'st-b1-39',
    paragraphs: [
      { it: 'I gruppi di cammino e corsa nei parchi cittadini dimostrano che lo sport gratuito favorisce la salute e l’integrazione. Più persone partecipano agli incontri settimanali, più i parchi diventano luoghi sicuri e vissuti.', tr: { bn: 'শহরের পার্কে হাঁটা ও দৌড়ানোর দলগুলো প্রমাণ করে যে বিনামূল্যে খেলাধুলা স্বাস্থ্য ও সমন্বয় বাড়ায়। সাপ্তাহিক আয়োজনের যত বেশি মানুষ অংশ নেয়, পার্কগুলো তত বেশি নিরাপদ ও প্রাণবন্ত হয়ে ওঠে।', en: 'Walking and running groups in city parks show that free sport promotes health and integration. The more people take part in weekly meetups, the safer and livelier parks become.' } },
      { it: 'Chiunque voglia iniziare ad allenarsi può unirsi al gruppo del sabato mattina senza bisogno di iscrizione.', tr: { bn: 'যে কেউ শরীরচর্চা শুরু করতে চাইলে নিবন্ধন ছাড়াই শনিবার সকালের দলে যোগ দিতে পারে।', en: 'Anyone who wishes to start training can join the Saturday morning group without needing to register.' } },
    ],
    vocabHighlights: [{ it: 'gruppi di cammino', tr: { bn: 'হাঁটার দল', en: 'walking groups' } }, { it: 'vissuti', tr: { bn: 'প্রাণবন্ত / মানুষের পদচারণায় মুখর', en: 'lively / lived-in' } }],
    grammarHighlights: [{ excerpt: 'Più persone partecipano… più i parchi diventano', note: { bn: 'আনুপাতিক তুলনা (Più… più…)।', en: 'Proportional comparison.' }, grammarId: 'comparativi-proporzionali' }],
    relatedGrammarIds: ['comparativi-proporzionali', 'indefiniti-negativi-b1'],
    questions: [
      { id: 'rd-b1-39-q1', prompt: { bn: 'শনিবার সকালের দলে যোগ দিতে কি আগে নিবন্ধন লাগে?', en: 'Is prior registration needed to join the Saturday morning group?' }, options: ['না, নিবন্ধন ছাড়াই যোগ দেওয়া যায়', 'হ্যাঁ, এক মাস আগে', 'ফি দিতে হয়', 'কেবল সদস্যদের জন্য'], answer: 0, explanation: { bn: 'senza bisogno di iscrizione।', en: 'No registration needed.' } },
    ],
  }),
  buildReading({
    id: 'rd-b1-40', level: 'B1', kind: 'article', titleIt: 'La rete del volontariato civico', title: { bn: 'নাগরিক স্বেচ্ছাসেবার নেটওয়ার্ক', en: 'The civic volunteering network' },
    storyId: 'st-b1-40',
    paragraphs: [
      { it: 'Nella nostra città il volontariato civico coinvolge studenti, lavoratori e pensionati. Chiunque desideri sostenere gli anziani soli o aiutare nel doposcuola trova un progetto adatto.', tr: { bn: 'আমাদের শহরে নাগরিক স্বেচ্ছাসেবা শিক্ষার্থী, কর্মজীবী ও অবসরপ্রাপ্তদের যুক্ত করে। যে কেউ নিঃসঙ্গ প্রবীণদের সহায়তা করতে বা স্কুল-পরবর্তী কোচিংয়ে সাহায্য করতে চাইলে উপযুক্ত প্রকল্প খুঁজে পায়।', en: 'In our city civic volunteering involves students, workers, and pensioners. Anyone who wishes to support lonely seniors or help with after-school tutoring finds a suitable project.' } },
      { it: 'I formatori insegnano che, qualunque difficoltà si presenti, bisogna agire con empatia e mantenere sempre la calma.', tr: { bn: 'প্রশিক্ষকেরা শেখান যে যেকোনো জটিলতাই সামনে আসুক না কেন, সহমর্মিতার সাথে কাজ করতে হবে এবং সবসময় শান্ত থাকতে হবে।', en: 'Trainers teach that whatever difficulty arises, one must act with empathy and always keep calm.' } },
    ],
    vocabHighlights: [{ it: 'doposcuola', tr: { bn: 'স্কুল-পরবর্তী শিক্ষা সহায়তা', en: 'after-school club / tutoring' } }, { it: 'empatia', tr: { bn: 'সহমর্মিতা', en: 'empathy' } }],
    grammarHighlights: [{ excerpt: 'Chiunque desideri / qualunque difficoltà si presenti', note: { bn: 'Chiunque ও qualunque + congiuntivo।', en: 'Chiunque and qualunque + subjunctive.' }, grammarId: 'indefiniti-negativi-b1' }],
    relatedGrammarIds: ['indefiniti-negativi-b1'],
    questions: [
      { id: 'rd-b1-40-q1', prompt: { bn: 'নাগরিক স্বেচ্ছাসেবায় কারা যুক্ত হয়?', en: 'Who is involved in civic volunteering?' }, options: ['শিক্ষার্থী, কর্মজীবী ও অবসরপ্রাপ্তরা', 'কেবল চিকিৎসকেরা', 'কেবল মেয়র', 'কেবল বিদেশিরা'], answer: 0, explanation: { bn: 'studenti, lavoratori e pensionati।', en: 'Students, workers, and pensioners.' } },
    ],
  }),
  buildReading({
    id: 'rd-b1-41', level: 'B1', kind: 'opinion', titleIt: 'Diritti dei consumatori e preventivi chiari', title: { bn: 'ভোক্তা অধিকার ও স্পষ্ট প্রাক্কলন', en: 'Consumer rights and clear quotes' },
    storyId: 'st-b1-41',
    paragraphs: [
      { it: 'Quando si richiede una riparazione urgente in casa, spesso per la fretta si accetta il primo prezzo proposto. In realtà avremmo sempre dovuto chiedere un preventivo scritto prima dell’inizio dei lavori.', tr: { bn: 'বাসায় জরুরি মেরামতের প্রয়োজন হলে প্রায়ই তাড়াহুড়োয় প্রথম প্রস্তাবিত দামই মেনে নেওয়া হয়। আসলে কাজ শুরু হওয়ার আগে আমাদের সবসময় লিখিত প্রাক্কলন চাওয়া উচিত ছিল।', en: 'When requesting an urgent home repair, out of haste people often accept the first price offered. In reality we should always have asked for a written quote before work began.' } },
      { it: 'Le associazioni dei consumatori ricordano che il professionista avrebbe dovuto avvertire il cliente qualora fossero emersi costi aggiuntivi.', tr: { bn: 'ভোক্তা সংগঠনগুলো মনে করিয়ে দেয় যে অতিরিক্ত খরচ দেখা দিলে পেশাজীবীর উচিত ছিল গ্রাহককে আগেভাগে সতর্ক করা।', en: 'Consumer associations remind us that the tradesperson should have warned the customer if additional costs emerged.' } },
    ],
    vocabHighlights: [{ it: 'consumatori', tr: { bn: 'ভোক্তা', en: 'consumers' } }, { it: 'costi aggiuntivi', tr: { bn: 'অতিরিক্ত খরচ', en: 'additional costs' } }],
    grammarHighlights: [{ excerpt: 'avremmo dovuto chiedere / avrebbe dovuto avvertire', note: { bn: 'অতীত মডাল (condizionale passato di dovere)।', en: 'Past conditional of modal dovere.' }, grammarId: 'modali-condizionale-passato' }],
    relatedGrammarIds: ['modali-condizionale-passato'],
    questions: [
      { id: 'rd-b1-41-q1', prompt: { bn: 'কাজ শুরু হওয়ার আগে গ্রাহকের কী চাওয়া উচিত?', en: 'What should a customer ask for before repair work begins?' }, options: ['একটি লিখিত প্রাক্কলন (preventivo scritto)', 'একটি উপহার', 'দোকানের চাবি', 'ব্যাংক ঋণ'], answer: 0, explanation: { bn: 'un preventivo scritto।', en: 'A written quote.' } },
    ],
  }),
  buildReading({
    id: 'rd-b1-42', level: 'B1', kind: 'email', titleIt: 'Richiesta formale di certificato e rimborso', title: { bn: 'সনদ ও অর্থ ফেরতের আনুষ্ঠানিক আবেদন', en: 'Formal request for certificate and refund' },
    storyId: 'st-b1-42',
    paragraphs: [
      { it: 'Egregio Direttore, Le scrivo in riferimento al seminario tecnico del quindici ottobre. Le trasmetto nell’allegato il modulo di rimborso compilato e la ricevuta digitale della quota d’iscrizione.', tr: { bn: 'মাননীয় পরিচালক, পনেরোই অক্টোবরের কারিগরি সেমিনারের পরিপ্রেক্ষিতে আপনাকে লিখছি। সংযুক্তিতে আপনাকে পূরণকৃত অর্থ ফেরতের ফর্ম এবং নিবন্ধন ফি-র ডিজিটাল রসিদ পাঠাচ্ছি।', en: 'Dear Director, I am writing to you with reference to the technical seminar of October fifteenth. Attached I send you the completed reimbursement form and the digital receipt for the registration fee.' } },
      { it: 'La ringrazio per la cortese collaborazione e resto a Sua completa disposizione per ogni eventuale chiarimento. Distinti saluti.', tr: { bn: 'সদয় সহযোগিতার জন্য আপনাকে ধন্যবাদ জানাচ্ছি এবং যেকোনো স্পষ্টীকরণের জন্য আপনার পূর্ণ সেবায় প্রস্তুত আছি। সশ্রদ্ধ শুভেচ্ছা।', en: 'I thank you for your kind cooperation and remain at your full disposal for any further clarification. Yours faithfully.' } },
    ],
    vocabHighlights: [{ it: 'quota d’iscrizione', tr: { bn: 'নিবন্ধন ফি', en: 'registration fee' } }, { it: 'a Sua disposizione', tr: { bn: 'আপনার সেবায় প্রস্তুত', en: 'at your disposal' } }],
    grammarHighlights: [{ excerpt: 'Le scrivo / Le trasmetto / La ringrazio', note: { bn: 'আনুষ্ঠানিক সর্বনাম Le ও La।', en: 'Formal pronouns Le and La.' }, grammarId: 'registro-formale-b1' }],
    relatedGrammarIds: ['registro-formale-b1'],
    questions: [
      { id: 'rd-b1-42-q1', prompt: { bn: 'সেমিনারটি কবে অনুষ্ঠিত হয়েছিল?', en: 'When did the technical seminar take place?' }, options: ['১৫ই অক্টোবর', '১লা জানুয়ারি', '২০শে মে', '১০ই আগস্ট'], answer: 0, explanation: { bn: 'del quindici ottobre।', en: 'October fifteenth.' } },
    ],
  }),
];
