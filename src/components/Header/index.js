import React from "react";
import {
  View,
  Text,
  StyleSheet,
  useColorScheme,
  TouchableOpacity,
} from "react-native";
import { darkColors, lightColors } from "../../styles/colors";
import {
  IconHumidity,
  IconMap,
  IconNotif,
  IconOpt,
  IconRain,
  IconWind,
} from "../../assets/svg";
import { FontAwesome } from "@expo/vector-icons";

export default function Header({ weatherData }) {
  const colorScheme = useColorScheme();
  // const colors = colorScheme === "dark" ? darkColors : lightColors;
  const colors = darkColors;

  return (
    <View style={styles(colors).headerContainer}>
      <View style={styles(colors).locationContainer}>
        <IconMap />
        <Text style={styles(colors).semiBoldText}>{weatherData.city_name}</Text>
        <IconOpt />
      </View>
      <View flexDirection={"row"} gap={20} alignItems={"center"}>
        <TouchableOpacity style={{ paddingHorizontal: 8 }}>
          <FontAwesome name="gear" size={25} color="white" />
        </TouchableOpacity>

        <View style={{ position: "absolute", top: 0, right: 0, zIndex: 1 }}>
          <View style={styles(colors).notificationMark} />
        </View>
        <IconNotif />
      </View>
    </View>
  );
}

const styles = (colors) =>
  StyleSheet.create({
    semiBoldText: {
      fontSize: 18,
      color: "#fff",
      fontFamily: "SFProDisplaySemiBold",
    },
    headerContainer: {
      flexDirection: "row",
      marginTop: 20,
      paddingHorizontal: 20,
      alignItems: "center",
      justifyContent: "space-between",
    },
    locationContainer: {
      flexDirection: "row",
      alignItems: "center",
      gap: 8,
    },
    notificationMark: {
      width: 11,
      height: 11,
      borderRadius: 100,
      borderWidth: 1.4,
      borderColor: "#47BBE1",
      backgroundColor: "#FF7C7C",
    },
  });
