import React, { useState } from "react";
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
import { Ionicons } from "@expo/vector-icons";
import SettingsModal from "../../components/SettingsModal";
import { useAtom } from "jotai";
import { colorSchemeAtom } from "../../atoms";

export default function Header({ weatherData }) {
  const [colorScheme] = useAtom(colorSchemeAtom);

  const colors = colorScheme.type === "dark" ? darkColors : lightColors;

  const [isSettingsModalVisible, setIsSettingsModalVisible] = useState(false);

  const handleOpenSettingsModal = () => {
    setIsSettingsModalVisible(true);
  };

  const handleCloseSettingsModal = () => {
    setIsSettingsModalVisible(false);
  };

  return (
    <View style={styles(colors).headerContainer}>
      <View style={styles(colors).locationContainer}>
        <IconMap />
        <Text style={styles(colors).semiBoldText}>{weatherData.city_name}</Text>
        <IconOpt />
      </View>
      <View flexDirection={"row"} gap={20} alignItems={"center"}>
        <TouchableOpacity
          style={{ paddingHorizontal: 8 }}
          onPress={handleOpenSettingsModal}
        >
          {colorScheme.type === "dark" ? (
            <Ionicons name="ios-moon" size={25} color="white" />
          ) : (
            <Ionicons name="sunny" size={25} color="white" />
          )}
        </TouchableOpacity>

        <View style={{ position: "absolute", top: 0, right: 0, zIndex: 1 }}>
          <View style={styles(colors).notificationMark} />
        </View>
        <IconNotif />
      </View>
      <SettingsModal
        isVisible={isSettingsModalVisible}
        onClose={handleCloseSettingsModal}
        currentTime={weatherData.currently}
        setIsSettingsModalVisible={setIsSettingsModalVisible}
      />
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
