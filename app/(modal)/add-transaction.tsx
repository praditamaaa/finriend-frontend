import { router } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function AddTransactionModal() {
  return (
    <SafeAreaView style={styles.root}>
      {/* Backdrop */}
      <Pressable style={styles.backdrop} onPress={() => router.back()} />

      {/* Bottom Sheet */}
      <View style={styles.sheet}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Transaksi Baru</Text>
          <Pressable onPress={() => router.back()}>
            <Text style={styles.close}>✕</Text>
          </Pressable>
        </View>

        {/* Mode Selector */}
        <View style={styles.modeRow}>
          <View style={[styles.modeButton, styles.modeActive]}>
            <Text style={styles.modeActiveText}>📷 Foto</Text>
          </View>
          <View style={styles.modeButton}>
            <Text style={styles.modeText}>🎤 Suara</Text>
          </View>
        </View>

        {/* Content */}
        <View style={styles.content}>
          <Text style={styles.contentTitle}>Ketuk Untuk Scan</Text>

          <Pressable style={styles.scanButton}>
            <Text style={styles.scanIcon}>📷</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },

  backdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.45)',
  },

  sheet: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 32,
  },

  /* Header */
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: '#1E4D3A',
  },
  close: {
    fontSize: 22,
    color: '#1E4D3A',
  },

  /* Mode */
  modeRow: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 24,
  },
  modeButton: {
    flex: 1,
    backgroundColor: '#1E4D3A',
    borderRadius: 12,
    paddingVertical: 12,
    alignItems: 'center',
  },
  modeActive: {
    backgroundColor: '#F5C542',
  },
  modeText: {
    color: 'white',
    fontWeight: '500',
  },
  modeActiveText: {
    color: '#1E4D3A',
    fontWeight: '600',
  },

  /* Content */
  content: {
    alignItems: 'center',
  },
  contentTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#1E4D3A',
    marginBottom: 24,
    textAlign: 'center',
  },
  scanButton: {
    width: 96,
    height: 96,
    borderRadius: 48,
    borderWidth: 4,
    borderColor: '#1E4D3A',
    justifyContent: 'center',
    alignItems: 'center',
  },
  scanIcon: {
    fontSize: 36,
  },
});
