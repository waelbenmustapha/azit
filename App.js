import { NavigationContainer } from "@react-navigation/native";
import MainStackScreen from "./navigation/MainStackScreen";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <MainStackScreen />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}


