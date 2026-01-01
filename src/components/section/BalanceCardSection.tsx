import { StyleSheet, Text, View } from 'react-native';

export default function BalanceCardSection() {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.value}>RP 30.000.000,00</Text>
        <Text style={styles.eye}>👁</Text>
      </View>
      <Text style={styles.label}>JUMLAH UANG</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#B58A1F',
    margin: 16,
    borderRadius: 16,
    padding: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  value: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },
  eye: {
    color: 'white',
    fontSize: 16,
  },
  label: {
    color: 'white',
    fontSize: 12,
    marginTop: 4,
  },
});
