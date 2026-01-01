import AddTransactionButton from '@/src/components/ui/addTransactionButton';
import { useState } from 'react';
import {
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    View
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function TransactionScreen() {
  const [search, setSearch] = useState('');

  const transactions = [
    {
      title: 'Makan Baso',
      amount: -15000,
      date: '24 Oktober 2025',
    },
    {
      title: 'Top up ML',
      amount: -150000,
      date: '24 Oktober 2025',
    },
    {
      title: 'Projek cair',
      amount: 20000000,
      date: '21 Oktober 2025',
    },
    {
      title: 'Transfer ortu',
      amount: 500000,
      date: '15 Oktober 2025',
    },
    {
      title: 'Makan Baso',
      amount: -15000,
      date: '24 Oktober 2025',
    },
    {
      title: 'Top up ML',
      amount: -150000,
      date: '24 Oktober 2025',
    },
    {
      title: 'Projek cair',
      amount: 20000000,
      date: '21 Oktober 2025',
    },
    {
      title: 'Transfer ortu',
      amount: 500000,
      date: '15 Oktober 2025',
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
        {/* Header */}
        <View style={styles.headerTop}>
            <Text style={styles.headerItem}>🔥 3</Text>
            <Text style={styles.headerItem}>💎 99</Text>
            <Text style={styles.headerItem}>task</Text>
        </View>

        {/* Search */}
        <View style={styles.searchWrapper}>
            <TextInput
            placeholder="Search Transaction"
            value={search}
            onChangeText={setSearch}
            style={styles.searchInput}
            />
        </View>

        {/* List */}
        <ScrollView contentContainerStyle={styles.list}>
            {transactions.map((item, index) => (
            <TransactionItem key={index} {...item} />
            ))}
        </ScrollView>

        <AddTransactionButton />
    </SafeAreaView>
  );
}

/* =======================
   Transaction Item
   (LOCAL, BELUM UI GLOBAL)
   ======================= */

function TransactionItem({
  title,
  amount,
  date,
}: {
  title: string;
  amount: number;
  date: string;
}) {
  const isIncome = amount > 0;

  return (
    <View style={styles.item}>
      <View>
        <Text style={styles.itemTitle}>{title}</Text>
        <Text style={styles.itemDate}>{date}</Text>
      </View>

      <View style={styles.itemRight}>
        <Text
          style={[
            styles.amount,
            isIncome ? styles.income : styles.expense,
          ]}
        >
          {isIncome ? '+' : '-'} RP {Math.abs(amount).toLocaleString('id-ID')}
        </Text>
        <Text style={styles.arrow}>›</Text>
      </View>
    </View>
  );
}

/* =======================
   STYLES
   ======================= */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEEEEE',
  },

  /* Header */
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: '#386550',
  },
  headerItem: {
    color: 'white',
  },

  /* Search */
  searchWrapper: {
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    elevation: 4,
  },
  searchInput: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderWidth: 1.5,
    borderColor: '#386550',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },

  /* List */
  list: {
    paddingHorizontal: 16,
    paddingBottom: 120,
  },

  item: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: '500',
  },
  itemDate: {
    fontSize: 12,
    color: '#888',
    marginTop: 4,
  },
  itemRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  amount: {
    fontWeight: '600',
  },
  income: {
    color: 'green',
  },
  expense: {
    color: 'red',
  },
  arrow: {
    fontSize: 20,
    color: '#999',
  },
});
