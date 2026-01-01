import { transactionApi } from './transaction.api';

export const reportApi = {
  async getMonthlySummary() {
    const transactions = await transactionApi.getAll();

    const income = transactions
      .filter(t => t.type === 'income')
      .reduce((sum, t) => sum + t.amount, 0);

    const expense = transactions
      .filter(t => t.type === 'expense')
      .reduce((sum, t) => sum + t.amount, 0);

    return {
      income,
      expense,
    };
  },

  async getExpenseByCategory() {
    const transactions = await transactionApi.getByType('expense');

    return transactions.reduce<Record<string, number>>((acc, t) => {
      acc[t.category] = (acc[t.category] || 0) + t.amount;
      return acc;
    }, {});
  },
};
