import AddTransactionButton from '@/src/components/ui/addTransactionButton';
import { useState } from 'react';
import {
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ChallengeScreen() {
  const [search, setSearch] = useState('');

  const challenges = [
    {
      title: 'Liburan ke Bali',
      status: 'On Progress',
      progress: 20,
      participants: 30,
    },
    {
      title: 'Menabung untuk umroh',
      status: 'Done',
      progress: 100,
      participants: 5,
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
          placeholder="Search Group"
          value={search}
          onChangeText={setSearch}
          style={styles.searchInput}
        />
      </View>

      {/* CTA */}
      <View style={styles.ctaRow}>
        <Pressable style={[styles.ctaBtn, styles.ctaPrimary]}>
          <Text style={styles.ctaTextPrimary}>Gabung Grup</Text>
        </Pressable>
        <Pressable style={[styles.ctaBtn, styles.ctaSecondary]}>
          <Text style={styles.ctaTextSecondary}>Buat Grup</Text>
        </Pressable>
      </View>

      {/* List */}
      <ScrollView contentContainerStyle={styles.list}>
        {challenges.map((item, index) => (
          <ChallengeCard key={index} {...item} />
        ))}
      </ScrollView>

        <AddTransactionButton />
    </SafeAreaView>
  );
}

/* =======================
   Challenge Card
   (LOCAL, BELUM UI GLOBAL)
   ======================= */

function ChallengeCard({
  title,
  status,
  progress,
  participants,
}: {
  title: string;
  status: 'On Progress' | 'Done';
  progress: number;
  participants: number;
}) {
  const isDone = status === 'Done';

  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{title}</Text>

      <View style={styles.statusRow}>
        <View
          style={[
            styles.statusDot,
            { backgroundColor: isDone ? 'green' : '#F5C542' },
          ]}
        />
        <Text style={styles.statusText}>{status}</Text>
      </View>

      {/* Progress */}
      <View style={styles.progressBar}>
        <View style={[styles.progressFill, { width: `${progress}%` }]} />
      </View>

      <View style={styles.cardFooter}>
        <Text style={styles.participantText}>{participants} Peserta</Text>
        <Text style={styles.detailText}>Lihat Detail →</Text>
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
    padding: 16,
  },
  searchInput: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },

  /* CTA */
  ctaRow: {
    flexDirection: 'row',
    gap: 12,
    paddingHorizontal: 16,
    marginBottom: 8,
  },
  ctaBtn: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: 'center',
  },
  ctaPrimary: {
    backgroundColor: '#F5C542',
  },
  ctaSecondary: {
    backgroundColor: '#4C8C2B',
  },
  ctaTextPrimary: {
    fontWeight: '600',
  },
  ctaTextSecondary: {
    color: 'white',
    fontWeight: '600',
  },

  /* List */
  list: {
    padding: 16,
    paddingBottom: 120,
  },

  /* Card */
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  statusRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 8,
  },
  statusDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
  },
  statusText: {
    fontSize: 12,
    color: '#555',
  },
  progressBar: {
    height: 8,
    borderRadius: 4,
    backgroundColor: '#E5E5E5',
    overflow: 'hidden',
    marginBottom: 12,
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#F5C542',
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  participantText: {
    fontSize: 12,
    color: '#555',
  },
  detailText: {
    fontSize: 12,
    color: '#F5C542',
    fontWeight: '500',
  },
});
