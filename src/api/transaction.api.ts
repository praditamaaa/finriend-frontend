import { TRANSACTIONS } from '@/src/data/transaction.mock';
import { Transaction } from '@/src/types/transaction';

export const transactionApi = {
  getAll(): Promise<Transaction[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(TRANSACTIONS);
      }, 300);
    });
  },

  getByType(type: 'income' | 'expense'): Promise<Transaction[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(TRANSACTIONS.filter(t => t.type === type));
      }, 300);
    });
  },
};
