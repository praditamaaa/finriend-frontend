import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
// import { FontProvider } from '@/src/providers/FontProviders';

export default function RootLayout() {
  return (
    <>
      <Stack>
        <Stack.Screen name="(main)" options={{ headerShown: false }} />
        <Stack.Screen
          name="modal"
          options={{ presentation: 'modal', headerShown: false }}
        />
      </Stack>

      <StatusBar 
        style="dark"
        backgroundColor="#386550"
        translucent={false} 
        />
    </>
  );
}
