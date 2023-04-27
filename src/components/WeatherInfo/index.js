import React from "react";
import { View, Text, StyleSheet, useColorScheme, FlatList } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { darkColors, lightColors } from "../../styles/colors";
import { IconCloudy, IconCloudyDay, IconCloudyMoon } from "../../assets/svg";

const mockData = [
  {
    time: "11:00",
    temperature: "24",
    selected: false,
    icon: <IconCloudy />,
  },
  {
    time: "12:00",
    temperature: "24",
    selected: false,
    icon: <IconCloudyDay />,
  },
  {
    time: "13:00",
    temperature: "24",
    selected: true,
    icon: <IconCloudyMoon />,
  },
  {
    time: "14:00",
    temperature: "24",
    selected: false,
    icon: <IconCloudy />,
  },
  {
    time: "15:00",
    temperature: "24",
    selected: false,
    icon: <IconCloudyDay />,
  },
  {
    time: "16:00",
    temperature: "24",
    selected: false,
    icon: <IconCloudyMoon />,
  },
  {
    time: "17:00",
    temperature: "24",
    selected: false,
    icon: <IconCloudyMoon />,
  },
  {
    time: "18:00",
    temperature: "24",
    selected: false,
    icon: <IconCloudyMoon />,
  },
];

export default function WeatherInfo() {
  const colorScheme = useColorScheme();
  // const colors = useColorScheme() === "dark" ? darkColors : lightColors;
  const colors = darkColors;

  const WeatherCard = ({ item, selected }) => {
    const CardContent = () => (
      <View style={styles(colors).weatherCardContainer(selected)}>
        <Text
          style={styles(colors).regularText}
        >{`${item.temperature}ºC`}</Text>
        {item.icon}
        <Text style={styles(colors).regularText}>{item.time}</Text>
      </View>
    );

    return selected ? (
      <LinearGradient
        colors={["#5096FF", "#0044AB"]}
        start={{ x: 1.5, y: 0.4 }}
        end={{ x: 0, y: 1.1 }}
        style={{
          overflow: "hidden",
          borderRadius: 20,
          padding: 1,
        }}
      >
        <CardContent />
      </LinearGradient>
    ) : (
      <CardContent />
    );
  };

  return (
    <View style={styles(colors).generalContainer} flexDirection={"column"}>
      <View style={styles(colors).titleContainer}>
        <Text style={styles(colors).boldText}>Today</Text>
        <Text style={styles(colors).regularText}>Mar, 9</Text>
      </View>
      <FlatList
        data={mockData}
        renderItem={({ item }) => (
          <WeatherCard item={item} selected={item.selected} />
        )}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{
          paddingLeft: 20,
        }}
        contentContainerStyle={{
          gap: 12,
          paddingRight: 40,
        }}
      />
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
    semiBoldText: {
      fontSize: 18,
      color: "#fff",
      fontFamily: "SFProDisplaySemiBold",
    },
    regularText: {
      fontSize: 18,
      color: "#fff",
      fontFamily: "SFProDisplayRegular",
      textShadowOffset: {
        width: -2,
        height: 3,
      },
      textShadowRadius: 4,
      textShadowColor: "rgba(0, 0, 0, 0.1)",
    },
    weatherCardContainer: (selected) => ({
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: selected ? "#11418D" : "transparent",
      width: 70,
      borderRadius: 20,
      paddingVertical: 20,
      gap: 20,
    }),
  });
