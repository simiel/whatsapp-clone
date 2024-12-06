import { Stack } from 'expo-router';
import { MenuProvider } from 'react-native-popup-menu';

const RootLayout = () => {
  return (
    <MenuProvider>
      <Stack>
        {/* first screen to test out stuff */}
        <Stack.Screen name='index' />
        <Stack.Screen name='(welcome)' options={{ headerShown: false }} />
      </Stack>
    </MenuProvider>
  );
};

export default RootLayout;
