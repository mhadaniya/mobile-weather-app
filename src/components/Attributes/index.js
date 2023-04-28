import React from "react";
import { View, Text, StyleSheet, useColorScheme } from "react-native";
import { darkColors, lightColors } from "../../styles/colors";
import { IconHumidity, IconRain, IconWind } from "../../assets/svg";
import { useAtom } from "jotai";
import { colorSchemeAtom } from "../../atoms";

export default function Attributes({ weatherData }) {
  const [colorScheme] = useAtom(colorSchemeAtom);

  const colors = colorScheme.type === "dark" ? darkColors : lightColors;

  const todayForecast = weatherData.forecast[0];

  return (
    <View
      style={[
        styles(colors).generalContainer,
        {
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: 24,
        },
      ]}
    >
      <View style={styles(colors).attributeContainer}>
        <IconRain />
        <Text
          style={styles(colors).attributeText}
        >{`${todayForecast.rain_probability}%`}</Text>
      </View>
      <View style={styles(colors).attributeContainer}>
        <IconHumidity />
        <Text
          style={styles(colors).attributeText}
        >{`${weatherData.humidity}%`}</Text>
      </View>
      <View style={styles(colors).attributeContainer}>
        <IconWind />
        <Text style={styles(colors).attributeText}>
          {weatherData.wind_speedy}
        </Text>
      </View>
    </View>
  );
}

const styles = (colors) =>
  StyleSheet.create({
    generalContainer: {
      marginHorizontal: 36,
      marginTop: 24,
      paddingVertical: 12,
      backgroundColor: colors.background,
      borderRadius: 20,
      gap: 12,
    },
    attributeContainer: {
      flexDirection: "row",
      alignItems: "center",
      gap: 5,
    },
    attributeText: {
      fontSize: 14,
      color: "#fff",
      fontFamily: "SFProDisplayBold",
    },
  });
