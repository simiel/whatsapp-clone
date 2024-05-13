import { Stack } from 'expo-router';
export default function Layout() {
  return (
    <Stack>
      <Stack.Screen
        name='Welcome'
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name='Language'
        options={{
          // Set the presentation mode to modal for our modal route.
          presentation: 'modal',
        }}
      />
    </Stack>
  );
}
