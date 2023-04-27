import React from "react";
import { View, Text, StyleSheet, useColorScheme, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { darkColors, lightColors } from "../../styles/colors";
import { IconMap, IconNotif, IconOpt } from "../../assets/svg";

const Header = () => (
  <View
    style={{
      flexDirection: "row",
      marginTop: 20,
      paddingHorizontal: 20,
      alignItems: "center",
      justifyContent: "space-between",
    }}
  >
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
      }}
    >
      <IconMap />
      <Text
        style={{
          fontSize: 18,
          color: "#fff",
          fontFamily: "SFProDisplaySemiBold",
        }}
      >
        Hello World
      </Text>
      <IconOpt />
    </View>
    <View>
      <View style={{ position: "absolute", top: 0, right: 0, zIndex: 1 }}>
        <View
          style={{
            width: 11,
            height: 11,
            borderRadius: 100,
            borderWidth: 1.4,
            borderColor: "#47BBE1",
            backgroundColor: "#FF7C7C",
          }}
        />
      </View>
      <IconNotif />
    </View>
  </View>
);

export default function Home() {
  const colorScheme = useColorScheme();
  // const colors = colorScheme === "dark" ? darkColors : lightColors;
  const colors = darkColors;
  const insets = useSafeAreaInsets();

  const MainContent = () => (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Image
        source={
          colorScheme === "dark"
            ? require("../../assets/images/Dark.png")
            : require("../../assets/images/Light.png")
        }
        style={{ width: 300, height: 200 }}
      />
      <Text
        style={{
          fontSize: 64,
          color: "#fff",
          fontFamily: "SFProDisplaySemiBold",
          textAlign: "center",
        }}
      >
        30º
      </Text>
      <Text
        style={{
          fontSize: 18,
          color: "#fff",
          fontFamily: "SFProDisplayRegular",
          textAlign: "center",
        }}
      >
        {`Precipitations\nMax.:34º   Min.:28º`}
      </Text>
    </View>
  );

  return (
    <>
      <LinearGradient
        colors={colors.gradient} // change later
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
        <Header />
        <MainContent />
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
      // alignItems: "center",
      // justifyContent: "center",
      gap: 10,
    },
    fontTest: {
      fontSize: 18,
      color: "#fff",
    },
  });
