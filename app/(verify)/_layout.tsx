import React from "react";
import { Slot, Stack, Tabs } from "expo-router";

const _layout = () => {
  return (
    <Stack>
      <Stack.Screen name="phone" options={{ headerShown: false }} />
      <Stack.Screen name="otp" options={{ headerShown: false }} />
    </Stack>
  );
};

export default _layout;
