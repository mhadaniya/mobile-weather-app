import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  useColorScheme,
} from "react-native";

import { useAtom } from "jotai";
import { colorSchemeAtom } from "../../atoms/ColorSchemeAtom";
import Modal from "react-native-modal";

export default function SettingsModal({
  isVisible,
  onClose,
  currentTime,
  setIsSettingsModalVisible,
}) {
  const [mode, setMode] = useState("default");
  const systemColorScheme = useColorScheme();
  const [colorScheme, setColorScheme] = useAtom(colorSchemeAtom);

  const handleModeChange = (newMode) => {
    if (newMode.type === "default") {
      setColorScheme({
        type: systemColorScheme,
        source: "default",
      });
    } else {
      setColorScheme({
        type: newMode.type,
        source: newMode.source,
      });
    }
    setIsSettingsModalVisible(false);
  };

  const modes = [
    {
      type: "dark",
      source: "forcedDark",
      label: "Modo Escuro",
    },
    {
      type: "light",
      source: "forcedLight",
      label: "Modo Claro",
    },
    {
      type: currentTime === "noite" ? "dark" : "light",
      source: "timeOfDay",
      label: `Momento do dia - ${currentTime === "noite" ? "Escuro" : "Claro"}`,
    },
    {
      type: "default",
      source: "default",
      label: `Automático - ${useColorScheme() === "dark" ? "Escuro" : "Claro"}`,
    },
  ];

  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={onClose}
      animationIn="slideInUp"
      animationOut="slideOutDown"
    >
      <View style={styles.container}>
        <Text style={styles.title}>Escolha o modo de exibição</Text>
        {modes.map((mode) => (
          <TouchableOpacity
            key={mode.source}
            style={styles.option}
            onPress={() => handleModeChange(mode)}
          >
            <Text style={styles.text(colorScheme.source === mode.source)}>
              {mode.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    fontFamily: "SFProDisplaySemiBold",
    marginBottom: 20,
  },
  option: {
    marginBottom: 10,
  },
  text: (isSelected) => ({
    fontSize: 18,
    fontFamily: "SFProDisplayRegular",
    color: isSelected ? "#1E90FF" : "black",
  }),
});
