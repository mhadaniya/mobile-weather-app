import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Home() {
  const rainyGradient = ["#08244F", "#134CB5", "#0B42AB"];
  const sunnyGradient = ["#29B2DD", "#33AADD", "#2DC8EA"];
  return (
    <>
      <LinearGradient
        colors={rainyGradient}
        style={styles.background}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        locations={[0, 0.6, 1]}
      />
      <View style={styles.container}>
        <Text
          style={[styles.fontTest, { fontFamily: "AlegreyaSans_500Medium" }]}
        >
          AlegreyaSans_500Medium
        </Text>
        <Text style={[styles.fontTest, { fontFamily: "AlegreyaSans_700Bold" }]}>
          AlegreyaSans_700Bold
        </Text>
        <Text style={[styles.fontTest, { fontFamily: "SFProDisplayRegular" }]}>
          SFProDisplayRegular
        </Text>
        <Text style={[styles.fontTest, { fontFamily: "SFProDisplaySemiBold" }]}>
          SFProDisplaySemiBold
        </Text>
        <Text style={[styles.fontTest, { fontFamily: "SFProDisplayBold" }]}>
          SFProDisplayBold
        </Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: "100%",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  fontTest: {
    fontSize: 24,
    color: "#fff",
  },
});
