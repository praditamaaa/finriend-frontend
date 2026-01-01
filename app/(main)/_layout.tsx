import { Tabs } from 'expo-router'

export default function MainLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: 'Beranda',
        }}
      />

      <Tabs.Screen
        name="transaction"
        options={{
          title: 'Transaksi',
        }}
      />
      
      <Tabs.Screen
        name="chat-ai"
        options={{
          title: 'AI',
        }}
      />

      <Tabs.Screen
        name="challenge"
        options={{
          title: 'Challenge',
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profil',
        }}
      />
    </Tabs>
  )
}
