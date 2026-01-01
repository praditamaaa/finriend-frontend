import { ScrollView, StyleSheet, Text, View } from 'react-native';

import BalanceCardSection from '@/src/components/section/BalanceCardSection';
import MonthlyReportSection from '@/src/components/section/MonthlyReportSection';
import WalletSection from '@/src/components/section/WalletSection';
import AddTransactionButton from '@/src/components/ui/addTransactionButton';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {

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
  fab: {
    position: 'absolute',
    right: 24,
    bottom: 24,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#F5C542',
    justifyContent: 'center',
    alignItems: 'center',
  },
  fabText: {
    fontSize: 28,
  },
});
