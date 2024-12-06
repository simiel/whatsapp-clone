import Colors from "@/legacy/constants/Colors";
import { Stack, useRouter } from "expo-router";
import { ArrowCircleLeft2, ArrowLeft, Level } from "iconsax-react-native";
import { Text, TouchableOpacity } from "react-native";
export default function Layout() {
  const router = useRouter();

  return (
    <Stack>
      <Stack.Screen
        name="Welcome"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Language"
        options={{
          presentation: "modal",
          headerTitle: "App language",
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                router.back();
              }}
            >
              <ArrowLeft size={24} color="black" />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen name="Phone" options={{ headerShown: false }} />
    </Stack>
  );
}
