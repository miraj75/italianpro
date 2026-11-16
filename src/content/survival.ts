import type { Phrase, Tr } from './types';

export interface SurvivalTopic {
  id: string;
  icon: 'utensils' | 'train' | 'hospital' | 'landmark' | 'shopping' | 'home';
  title: Tr;
  phrases: Phrase[];
}

/** Level-appropriate (A1) phrases for real situations in Italy. */
export const SURVIVAL_TOPICS: SurvivalTopic[] = [
  {
    id: 'restaurant',
    icon: 'utensils',
    title: { bn: 'রেস্টুরেন্ট ও বার', en: 'Restaurant & bar' },
    phrases: [
      { id: 'r1', it: 'Un caffè, per favore.', tr: { bn: 'একটা কফি, প্লিজ।', en: 'A coffee, please.' } },
      { id: 'r2', it: 'Il conto, per favore.', tr: { bn: 'বিলটা দিন, প্লিজ।', en: 'The bill, please.' } },
      { id: 'r3', it: 'Posso pagare con la carta?', tr: { bn: 'কার্ডে পরিশোধ করতে পারি?', en: 'Can I pay by card?' } },
      { id: 'r4', it: 'Un tavolo per due, per favore.', tr: { bn: 'দুজনের জন্য একটা টেবিল, প্লিজ।', en: 'A table for two, please.' } },
    ],
  },
  {
    id: 'transport',
    icon: 'train',
    title: { bn: 'যাতায়াত', en: 'Transport' },
    phrases: [
      { id: 't1', it: 'Un biglietto per Milano, per favore.', tr: { bn: 'মিলানের একটা টিকিট, প্লিজ।', en: 'A ticket to Milan, please.' } },
      { id: 't2', it: 'A che ora parte il treno?', tr: { bn: 'ট্রেন কখন ছাড়বে?', en: 'What time does the train leave?' } },
      { id: 't3', it: 'Dov’è la fermata dell’autobus?', tr: { bn: 'বাস স্টপ কোথায়?', en: 'Where is the bus stop?' } },
      { id: 't4', it: 'Devo convalidare il biglietto?', tr: { bn: 'টিকিট কি ভ্যালিডেট করতে হবে?', en: 'Do I have to validate the ticket?' } },
    ],
  },
  {
    id: 'hospital',
    icon: 'hospital',
    title: { bn: 'হাসপাতাল ও ফার্মেসি', en: 'Hospital & pharmacy' },
    phrases: [
      { id: 'h1', it: 'Mi sento male.', tr: { bn: 'আমার শরীর খারাপ লাগছে।', en: 'I feel ill.' } },
      { id: 'h2', it: 'Ho mal di testa.', tr: { bn: 'আমার মাথা ব্যথা।', en: 'I have a headache.' } },
      { id: 'h3', it: 'Ho bisogno di un medico.', tr: { bn: 'আমার একজন ডাক্তার দরকার।', en: 'I need a doctor.' } },
      { id: 'h4', it: 'Dov’è la farmacia più vicina?', tr: { bn: 'সবচেয়ে কাছের ফার্মেসি কোথায়?', en: 'Where is the nearest pharmacy?' } },
    ],
  },
  {
    id: 'comune',
    icon: 'landmark',
    title: { bn: 'Comune ও সরকারি অফিস', en: 'Comune & public offices' },
    phrases: [
      { id: 'c1', it: 'Vorrei prendere un appuntamento.', tr: { bn: 'আমি একটা অ্যাপয়েন্টমেন্ট নিতে চাই।', en: 'I’d like to make an appointment.' } },
      { id: 'c2', it: 'Quali documenti servono?', tr: { bn: 'কী কী কাগজপত্র লাগবে?', en: 'Which documents are needed?' } },
      { id: 'c3', it: 'Può ripetere più lentamente, per favore?', tr: { bn: 'আরও ধীরে আবার বলবেন, প্লিজ?', en: 'Could you repeat more slowly, please?' } },
      { id: 'c4', it: 'Ecco il mio permesso di soggiorno.', tr: { bn: 'এই যে আমার পারমেসো দি সজর্নো (রেসিডেন্স পারমিট)।', en: 'Here is my residence permit.' } },
    ],
  },
  {
    id: 'shopping',
    icon: 'shopping',
    title: { bn: 'কেনাকাটা', en: 'Shopping' },
    phrases: [
      { id: 's1', it: 'Quanto costa?', tr: { bn: 'দাম কত?', en: 'How much does it cost?' } },
      { id: 's2', it: 'Sto solo guardando, grazie.', tr: { bn: 'শুধু দেখছি, ধন্যবাদ।', en: 'I’m just looking, thanks.' } },
      { id: 's3', it: 'Avete una taglia più grande?', tr: { bn: 'আরও বড় সাইজ আছে?', en: 'Do you have a bigger size?' } },
    ],
  },
  {
    id: 'housing',
    icon: 'home',
    title: { bn: 'বাসা ভাড়া', en: 'Housing' },
    phrases: [
      { id: 'a1', it: 'Cerco una stanza in affitto.', tr: { bn: 'আমি একটা রুম ভাড়া খুঁজছি।', en: 'I’m looking for a room to rent.' } },
      { id: 'a2', it: 'Quanto è l’affitto al mese?', tr: { bn: 'মাসিক ভাড়া কত?', en: 'How much is the rent per month?' } },
      { id: 'a3', it: 'Le spese sono incluse?', tr: { bn: 'বিল (খরচ) কি অন্তর্ভুক্ত?', en: 'Are the bills included?' } },
    ],
  },
];
