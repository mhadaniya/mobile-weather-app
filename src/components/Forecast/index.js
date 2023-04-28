import React from "react";
import { View, Text, StyleSheet, useColorScheme, Image } from "react-native";
import { darkColors, lightColors } from "../../styles/colors";
import { IconCalendar } from "../../assets/svg";
import { useAtom } from "jotai";
import { colorSchemeAtom } from "../../atoms";

const weekDayParser = (day) => {
  switch (day) {
    case "Dom":
      return "Domingo";
    case "Seg":
      return "Segunda";
    case "Ter":
      return "Terça";
    case "Qua":
      return "Quarta";
    case "Qui":
      return "Quinta";
    case "Sex":
      return "Sexta";
    case "Sáb":
      return "Sábado";
    default:
      return "Dia";
  }
};

export default function Forecast({ weatherData }) {
  const [colorScheme] = useAtom(colorSchemeAtom);

  const colors = colorScheme.type === "dark" ? darkColors : lightColors;

  const nextForecasts = weatherData.forecast.slice(
    1,
    weatherData.forecast.length
  );

  const ForecastRow = ({ forecast, position }) => {
    const randomBoolean = Math.random() >= 0.5;
    return (
      <View style={styles(colors).forecastRowContainer} key={position}>
        <Text style={styles(colors).forecastBoldText}>
          {weekDayParser(forecast.weekday)}
        </Text>
        {randomBoolean ? (
          <Image
            source={require("../../assets/images/CloudStorm.png")}
            style={{ width: 50, height: 50 }}
          />
        ) : (
          <Image
            source={require("../../assets/images/RainDrops.png")}
            style={{ width: 50, height: 50 }}
          />
        )}
        <View style={styles(colors).forecastTemperatureContainer}>
          <View flexDirection={"row"}>
            <Text style={styles(colors).forecastMediumText("#fff")}>
              {forecast.max}
            </Text>
            <Text style={styles(colors).forecastMediumTextSuperscript("#fff")}>
              ºC
            </Text>
          </View>
          <View flexDirection={"row"}>
            <Text
              style={styles(colors).forecastMediumText("rgba(255,255,255,0.5)")}
            >
              {forecast.min}
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
        <Text style={styles(colors).boldText}>Próximas Previsões</Text>
        <IconCalendar />
      </View>
      {nextForecasts.map((forecast, index) => (
        <ForecastRow forecast={forecast} key={index} />
      ))}
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
      width: "30%",
    },
    forecastTemperatureContainer: {
      flexDirection: "row",
      gap: 10,
      width: "30%",
      justifyContent: "flex-end",
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
