import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-3xl text-blue-600">
        <Link href="/sign-up-phone-number">Go to Auth</Link>
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}
