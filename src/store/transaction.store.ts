import { transactionApi } from '@/src/api/transaction.api';
import { Transaction } from '@/src/types/transaction';
import { create } from 'zustand';

interface TransactionState {
  transactions: Transaction[];
  loading: boolean;

  fetchTransactions: () => Promise<void>;
}

export const useTransactionStore = create<TransactionState>((set) => ({
  transactions: [],
  loading: false,

  fetchTransactions: async () => {
    set({ loading: true });

    const data = await transactionApi.getAll();

    set({
      transactions: data,
      loading: false,
    });
  },
}));
