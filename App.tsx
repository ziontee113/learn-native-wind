import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

export default function App() {
  return (
    <View className="bg-white flex-1 items-center justify-center">
      <Text className="text-orange-600">Super Idol</Text>
      <Text className="text-orange-600 text-2xl">De Xiao Rong</Text>
      <StatusBar style="auto" />
    </View>
  );
}
