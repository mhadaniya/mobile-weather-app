import React from "react";
import { View, Text, StyleSheet, useColorScheme, Image } from "react-native";
import { darkColors, lightColors } from "../../styles/colors";
import { IconCalendar } from "../../assets/svg";

export default function Forecast() {
  const colorScheme = useColorScheme();
  // const colors = useColorScheme() === "dark" ? darkColors : lightColors;
  const colors = darkColors;

  const ForecastRow = () => {
    return (
      <View style={styles(colors).forecastRowContainer}>
        <Text style={styles(colors).forecastBoldText}>Monday</Text>
        <Image
          source={require("../../assets/images/CloudStorm.png")}
          style={{ width: 50, height: 50 }}
        />
        <View style={styles(colors).forecastTemperatureContainer}>
          <View flexDirection={"row"}>
            <Text style={styles(colors).forecastMediumText("#fff")}>13</Text>
            <Text style={styles(colors).forecastMediumTextSuperscript("#fff")}>
              ºC
            </Text>
          </View>
          <View flexDirection={"row"}>
            <Text
              style={styles(colors).forecastMediumText("rgba(255,255,255,0.5)")}
            >
              10
            </Text>
            <Text
              style={styles(colors).forecastMediumTextSuperscript(
                "rgba(255,255,255,0.5)"
              )}
            >
              ºC
            </Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles(colors).generalContainer} flexDirection={"column"}>
      <View style={styles(colors).titleContainer}>
        <Text style={styles(colors).boldText}>Next Forecast</Text>
        <IconCalendar />
      </View>
      <ForecastRow />
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
    titleContainer: {
      paddingHorizontal: 24,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
    boldText: {
      fontSize: 20,
      color: "#fff",
      fontFamily: "SFProDisplayBold",
      textShadowOffset: {
        width: -2,
        height: 3,
      },
      textShadowRadius: 4,
      textShadowColor: "rgba(0, 0, 0, 0.1)",
    },
    forecastRowContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingHorizontal: 24,
    },
    forecastBoldText: {
      fontFamily: "AlegreyaSans_700Bold",
      fontSize: 18,
      color: "#fff",
    },
    forecastTemperatureContainer: {
      flexDirection: "row",
      gap: 10,
    },
    forecastMediumText: (color) => ({
      fontFamily: "AlegreyaSans_500Medium",
      fontSize: 18,
      lineHeight: 22,
      color: color,
    }),
    forecastMediumTextSuperscript: (color) => ({
      fontFamily: "AlegreyaSans_500Medium",
      fontSize: 10,
      lineHeight: 22,
      color: color,
    }),
  });
