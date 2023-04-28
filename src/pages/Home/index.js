import React, { useContext, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  useColorScheme,
  Image,
  ScrollView,
  FlatList,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { darkColors, lightColors } from "../../styles/colors";
import Forecast from "../../components/Forecast";
import Attributes from "../../components/Attributes";
import Header from "../../components/Header";
import WeatherInfo from "../../components/WeatherInfo";
import useWeatherData from "../../hooks/useWeatherData";
import { useAtom } from "jotai";
import { colorSchemeAtom } from "../../atoms";

export default function Home() {
  const [colorScheme] = useAtom(colorSchemeAtom);

  const colors = colorScheme.type === "dark" ? darkColors : lightColors;
  const insets = useSafeAreaInsets();

  const weatherData = useWeatherData();

  const todayForecast = weatherData.forecast[0];

  return (
    <>
      <LinearGradient
        colors={colors.gradient}
        style={styles(colors).background}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        locations={[0, 0.45, 1]}
      />
      <View
        style={[
          styles(colors).container,
          {
            paddingTop: insets.top,
            paddingBottom: insets.bottom,
          },
        ]}
      >
        <Header weatherData={weatherData} />
        <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
          <View style={styles(colors).mainContentContainer}>
            <Image
              source={
                colorScheme.type === "dark"
                  ? require("../../assets/images/Dark.png")
                  : require("../../assets/images/Light.png")
              }
              style={{ width: 300, height: 200 }}
            />
            <Text
              style={styles(colors).mainContentTitle}
            >{`${weatherData.temp}º`}</Text>
            <Text
              style={[
                styles(colors).regularText,
                {
                  textAlign: "center",
                  textShadowColor: "transparent",
                },
              ]}
            >
              {`${weatherData.description}\nMax.:${todayForecast.max}º   Min.:${todayForecast.min}º`}
            </Text>
          </View>
          <Attributes weatherData={weatherData} />
          <WeatherInfo weatherData={weatherData} />
          <Forecast weatherData={weatherData} />
        </ScrollView>
      </View>
    </>
  );
}

const styles = (colors) =>
  StyleSheet.create({
    background: {
      position: "absolute",
      left: 0,
      right: 0,
      top: 0,
      height: "100%",
    },
    container: {
      flex: 1,
      gap: 16,
    },
    generalContainer: {
      marginHorizontal: 36,
      marginTop: 24,
      paddingVertical: 12,
      backgroundColor: colors.background,
      borderRadius: 20,
      gap: 12,
    },
    mainContentContainer: {
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
    },
    mainContentTitle: {
      fontSize: 64,
      color: "#fff",
      fontFamily: "SFProDisplaySemiBold",
      textAlign: "center",
    },
    regularText: {
      fontSize: 18,
      color: "#fff",
      fontFamily: "SFProDisplayRegular",
      textShadowOffset: {
        width: -2,
        height: 3,
      },
      textShadowRadius: 4,
      textShadowColor: "rgba(0, 0, 0, 0.1)",
    },
  });
