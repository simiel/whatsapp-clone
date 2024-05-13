import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      {/* first screen to test out stuff */}
      <Stack.Screen name='index' />
      <Stack.Screen name='welcome/Welcome' options={{ headerShown: false }} />
    </Stack>
  );
}
