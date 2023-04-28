import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import { useAtom } from "jotai";
import { colorSchemeAtom } from "../../atoms/ColorSchemeAtom";
import { darkColors, lightColors } from "../../styles/colors";
import { IconMap, IconNotif, IconOpt } from "../../assets/svg";
import { Ionicons } from "@expo/vector-icons";

import SettingsModal from "../../components/SettingsModal";

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
        <TouchableOpacity onPress={handleOpenSettingsModal}>
          {colorScheme.type === "dark" ? (
            <Ionicons name="ios-moon" size={25} color="white" />
          ) : (
            <Ionicons name="sunny" size={25} color="white" />
          )}
        </TouchableOpacity>

        <View style={styles(colors).notificationContainer}>
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
    notificationContainer: {
      position: "absolute",
      top: 0,
      right: 0,
      zIndex: 1,
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
