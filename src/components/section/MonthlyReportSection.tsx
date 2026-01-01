import Button from '@/src/components/ui/Button';
import { useTransactionStore } from '@/src/store/transaction.store';
import { useMemo, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { BarChart } from 'react-native-gifted-charts';

type ReportType = 'income' | 'expense';

export default function MonthlyReportSection() {
  const [active, setActive] = useState<ReportType>('income');

  const transactions = useTransactionStore(
    (state) => state.transactions
  );

  const isIncome = active === 'income';

  const chartData = useMemo(() => {
    const filtered = transactions.filter(
      (t) => t.type === active
    );

    const grouped = filtered.reduce<Record<string, number>>(
      (acc, t) => {
        acc[t.category] = (acc[t.category] || 0) + t.amount;
        return acc;
      },
      {}
  );

  return Object.entries(grouped).map(([label, value]) => ({
      label,
      value,
      frontColor: isIncome ? '#4C8C2B' : '#FF4D4F',
    }));
  }, [transactions, active]);

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
        {chartData.length === 0 ? (
        <view>
          <Text>
            Belum ada data
          </Text>
        </view>
      ) : (
        <BarChart
          data={chartData}
          barWidth={32}
          spacing={24}
          roundedTop
          hideRules
          yAxisThickness={0}
          xAxisThickness={0}
          noOfSections={4}
          isAnimated
        />
      )}
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

  emptyText: {
    textAlign: 'center',
    color: '#999',
    paddingVertical: 40,
  },
});