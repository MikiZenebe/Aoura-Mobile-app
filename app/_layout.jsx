import { Slot, Stack } from "expo-router";
import { View, Text } from "react-native";
import "../global.css";
import { useEffect } from "react";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="/search/[query]" options={{ headerShown: false }} />
    </Stack>
  );
}
