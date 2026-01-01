import BalanceCardSection from '@/src/components/section/BalanceCardSection';
import MonthlyReportSection from '@/src/components/section/MonthlyReportSection';
import WalletSection from '@/src/components/section/WalletSection';
import AddTransactionButton from '@/src/components/ui/addTransactionButton';
import { useTransactionStore } from '@/src/store/transaction.store';
import { useEffect } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {

  const { transactions, fetchTransactions } = useTransactionStore();

  useEffect(() => {
    fetchTransactions();
  }, []);

  const income = transactions
    .filter(t => t.type === 'income')
    .reduce((sum, t) => sum + t.amount, 0);

  const expense = transactions
    .filter(t => t.type === 'expense')
    .reduce((sum, t) => sum + t.amount, 0);

    return (
        <SafeAreaView style={styles.container}>

            {/* Header */}
            <View style={styles.headerTop}>
            <Text style={styles.headerItem}>🔥 11</Text>
            <Text style={styles.headerItem}>💎 99</Text>
            <Text style={styles.headerItem}>task</Text>
            </View>

            <ScrollView contentContainerStyle={styles.scrollContent}>
                <BalanceCardSection />
                <WalletSection />
                <MonthlyReportSection />
            </ScrollView>

            <AddTransactionButton />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEEEEE',
  },
  scrollContent: {
    paddingBottom: 120,
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: '#386550',
  },
  headerItem: {
    color: 'white',
  },
});
