import React, { useEffect, useState, useCallback } from "react";
import { NavigationContainer } from "@react-navigation/native";
import * as SplashScreen from "expo-splash-screen";
import axios from "axios";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Routes from "./src/routes";
import WeatherDataContext from "./src/context/WeatherDataContext";

import {
  useFonts,
  AlegreyaSans_500Medium,
  AlegreyaSans_700Bold,
} from "@expo-google-fonts/alegreya-sans";

const fetchWeatherData = async (setWeatherData) => {
  try {
    const response = await axios.get("https://api.hgbrasil.com/weather");
    setWeatherData(response.data.results);
  } catch (error) {
    console.error("Error setting WeatherData:", error);
  }
};

export default function App() {
  const [weatherData, setWeatherData] = useState(null);
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
    loadData().catch((error) => console.error("Error loading data:", error));
  }, [loadData]);

  if (!fontsLoaded || !weatherData) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <WeatherDataContext.Provider value={weatherData}>
        <NavigationContainer onReady={loadData}>
          <Routes />
        </NavigationContainer>
      </WeatherDataContext.Provider>
    </SafeAreaProvider>
  );
}
