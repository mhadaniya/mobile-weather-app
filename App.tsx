import { StatusBar } from "react-native";
import { LogBox } from "react-native";
import { Home } from "./src/pages/home";
import {
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
  useFonts,
} from "@expo-google-fonts/roboto";

// Ignore all warnings
LogBox.ignoreAllLogs(true);

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <StatusBar barStyle="light-content" />
      <Home />
    </>
  );
}
