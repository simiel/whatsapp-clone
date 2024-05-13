import { Stack } from 'expo-router';
import { MenuProvider } from 'react-native-popup-menu';

export default function RootLayout() {
  return (
    <MenuProvider>
      <Stack>
        {/* first screen to test out stuff */}
        <Stack.Screen name='index' />
        <Stack.Screen name='welcome/Welcome' options={{ headerShown: false }} />
      </Stack>
    </MenuProvider>
  );
}
