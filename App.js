import React, { useCallback, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import * as SplashScreen from "expo-splash-screen";
import { atom, useAtom } from "jotai";
import axios from "axios";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Routes from "./src/routes";

import {
  useFonts,
  AlegreyaSans_500Medium,
  AlegreyaSans_700Bold,
} from "@expo-google-fonts/alegreya-sans";

export const weatherDataAtom = atom(null);

const fetchWeatherData = async (setWeatherData) => {
  try {
    const response = await axios.get("https://api.hgbrasil.com/weather");
    setWeatherData(response.data);
  } catch (error) {
    console.error("Error:", error);
  }
};

export default function App() {
  const [weatherData, setWeatherData] = useAtom(weatherDataAtom);
  let [fontsLoaded] = useFonts({
    AlegreyaSans_500Medium,
    AlegreyaSans_700Bold,
    SFProDisplaySemiBold: require("./assets/fonts/SF-Pro-Display-Semibold.otf"),
    SFProDisplayRegular: require("./assets/fonts/SF-Pro-Display-Regular.otf"),
    SFProDisplayBold: require("./assets/fonts/SF-Pro-Display-Bold.otf"),
  });

  const loadData = useCallback(async () => {
    await fetchWeatherData(setWeatherData);
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  useEffect(() => {
    SplashScreen.preventAutoHideAsync();
    loadData().catch((error) => console.error("Error2:", error));
  }, [loadData]);

  if (!fontsLoaded || !weatherData) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <NavigationContainer onReady={loadData}>
        <Routes />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
