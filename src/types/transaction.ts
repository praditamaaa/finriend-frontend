//HANYA DUMMY SAJA

export type TransactionType = 'income' | 'expense';

export interface Transaction {
  id: string;
  title: string;
  amount: number;
  type: TransactionType;
  category: 'Makan' | 'Hiburan' | 'Belajar' | 'Lainnya';
  date: string;
}
