import React, { useCallback } from "react";
import { NavigationContainer } from "@react-navigation/native";
import * as SplashScreen from "expo-splash-screen";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Routes from "./src/routes";

import {
  useFonts,
  AlegreyaSans_500Medium,
  AlegreyaSans_700Bold,
} from "@expo-google-fonts/alegreya-sans";

SplashScreen.preventAutoHideAsync();

export default function App() {
  let [fontsLoaded] = useFonts({
    AlegreyaSans_500Medium,
    AlegreyaSans_700Bold,
    SFProDisplaySemiBold: require("./assets/fonts/SF-Pro-Display-Semibold.otf"),
    SFProDisplayRegular: require("./assets/fonts/SF-Pro-Display-Regular.otf"),
    SFProDisplayBold: require("./assets/fonts/SF-Pro-Display-Bold.otf"),
  });
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <NavigationContainer onReady={onLayoutRootView}>
        <Routes />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
