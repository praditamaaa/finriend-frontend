import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function WalletSection() {
    const handleSeeAll = () => {
        console.log('See all wallets');
    };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Dompet Saya</Text>
        <Pressable onPress={handleSeeAll}>
            <Text style={styles.seeAll}>See All →</Text>
        </Pressable>
      </View>

      <View style={styles.row}>
        <Text>Cash</Text>
        <Text style={styles.amount}>RP 100.000,00</Text>
      </View>

      <View style={styles.row}>
        <Text>Bank A</Text>
        <Text style={styles.amount}>RP 100.000.000,00</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 16,
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
  },
  seeAll: {
    fontSize: 12,
    color: '#888',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 6,
  },
  amount: {
    fontWeight: '500',
  },
});
