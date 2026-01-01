import { Transaction } from '@/src/types/transaction';

export const TRANSACTIONS: Transaction[] = [
  {
    id: '1',
    title: 'Makan Baso',
    amount: 15000,
    type: 'expense',
    category: 'Makan',
    date: '2025-10-24',
  },
  {
    id: '2',
    title: 'Top up ML',
    amount: 150000,
    type: 'expense',
    category: 'Hiburan',
    date: '2025-10-24',
  },
  {
    id: '3',
    title: 'Projek cair',
    amount: 20000000,
    type: 'income',
    category: 'Lainnya',
    date: '2025-10-21',
  },
  {
    id: '4',
    title: 'Transfer ortu',
    amount: 500000,
    type: 'income',
    category: 'Lainnya',
    date: '2025-10-15',
  },
];
