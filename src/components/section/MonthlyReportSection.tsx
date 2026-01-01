import Button from '@/src/components/ui/Button';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';

type ReportType = 'income' | 'expense';

export default function MonthlyReportSection() {
  const [active, setActive] = useState<ReportType>('income');

  const isIncome = active === 'income';

  return (
    <View style={styles.container}>
      {/* Tabs */}
      <View style={styles.tabRow}>
        <View style={{ flex: 1 }}>
          <Button
            label="Pemasukan"
            layout="full"
            size="sm"
            backgroundColor={isIncome ? '#4C8C2B' : '#3A3A3A'}
            textColor="#FFFFFF"
            onPress={() => setActive('income')}
            />
        </View>
        <View style={{ flex: 1 }}>
          <Button
            label="Pengeluaran"
            layout="full"
            size="sm"
            backgroundColor={!isIncome ? '#FF4D4F' : '#3A3A3A'}
            textColor="#FFFFFF"
            onPress={() => setActive('expense')}
            />
        </View>
      </View>

      {/* Chart Placeholder */}
      <View style={styles.chartPlaceholder} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    marginHorizontal: 16,
  },

  tabRow: {
    flexDirection: 'row',
    gap: 4,
    marginBottom: 16,
  },

  chartPlaceholder: {
    height: 400,
    borderRadius: 12,
    backgroundColor: '#F2F2F2',
  },
});