import React from "react";
import { View, Text, StyleSheet, useColorScheme } from "react-native";
import { darkColors, lightColors } from "../../styles/colors";
import { IconHumidity, IconRain, IconWind } from "../../assets/svg";

export default function Attributes() {
  const colorScheme = useColorScheme();
  // const colors = useColorScheme() === "dark" ? darkColors : lightColors;
  const colors = darkColors;

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
        <Text style={styles(colors).attributeText}>{`30%`}</Text>
      </View>
      <View style={styles(colors).attributeContainer}>
        <IconHumidity />
        <Text style={styles(colors).attributeText}>{`90%`}</Text>
      </View>
      <View style={styles(colors).attributeContainer}>
        <IconWind />
        <Text style={styles(colors).attributeText}>{`19 km/h`}</Text>
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
