import { View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Link } from "expo-router";

export default function App() {
  return (
    <View>
      <Text style={{ fontSize: "25px", textAlign: "center" }}>This is App</Text>
      <StatusBar style="auto" />
      <Link style={{ color: "blue" }} href="/profile">
        Go to profile
      </Link>
    </View>
  );
}
