import { View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Link } from "expo-router";
import "../global.css";

export default function App() {
  return (
    <View>
      <Text style={{ textAlign: "center" }}>This is App</Text>
      <StatusBar style="auto" />
      <Link style={{ color: "blue" }} href="/home">
        Go to Home
      </Link>
    </View>
  );
}
