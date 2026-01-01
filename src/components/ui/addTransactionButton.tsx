import { router } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function AddTransactionButton() {
  const handlePress = () => {
    router.push('/add-transaction');
  };

  return (
    <Pressable style={styles.wrapper} onPress={handlePress}>
      <View style={styles.button}>
        <Text style={styles.plus}>＋</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    right: 24,
    bottom: 24,
  },
  button: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#F5C542',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 6,
  },
  plus: {
    fontSize: 32,
    fontWeight: '600',
    color: '#FFF',
    marginTop: -2,
  },
});
