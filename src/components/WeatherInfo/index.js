import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { darkColors, lightColors } from "../../styles/colors";
import { IconCloudy, IconCloudyDay, IconCloudyMoon } from "../../assets/svg";
import { useAtom } from "jotai";
import { colorSchemeAtom } from "../../atoms/ColorSchemeAtom";

const generateMockData = (weatherData) => {
  if (!weatherData) {
    return [];
  }

  const { time, forecast } = weatherData;
  const [currentHour, currentMinute] = time
    .split(":")
    .map((t) => parseInt(t, 10));
  const { min, max } = forecast[0];

  const getTimeString = (hour) => {
    const hourString = hour.toString().padStart(2, "0");
    return `${hourString}:00`;
  };

  const getTemperature = () => {
    const temperature = Math.floor(Math.random() * (max - min + 1)) + min;
    return temperature;
  };

  const getIcon = (hour) => {
    if (hour < 6 || hour >= 18) {
      return <IconCloudyMoon />;
    } else if (hour < 12) {
      return <IconCloudyDay />;
    } else {
      return <IconCloudy />;
    }
  };

  const data = [];

  for (let i = -2; i < 6; i++) {
    const hour = (currentHour + i) % 24;
    const time = getTimeString(hour);
    const temperature = getTemperature(hour);
    const selected = i === 0;
    const icon = getIcon(hour);

    data.push({ time, temperature, selected, icon });
  }

  return data;
};

const formatDate = (date) => {
  const months = [
    "Jan",
    "Fev",
    "Mar",
    "Abr",
    "Mai",
    "Jun",
    "Jul",
    "Ago",
    "Set",
    "Out",
    "Nov",
    "Dez",
  ];

  const dateParts = date.split("/");
  const day = parseInt(dateParts[0], 10);
  const month = parseInt(dateParts[1], 10);
  const monthName = months[month - 1];

  return `${monthName}, ${day}`;
};

export default function WeatherInfo({ weatherData }) {
  const [colorScheme] = useAtom(colorSchemeAtom);
  const colors = colorScheme.type === "dark" ? darkColors : lightColors;
  const mockData = generateMockData(weatherData);

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
        colors={colors.selectedGradient}
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
        <Text style={styles(colors).boldText}>Hoje</Text>
        <Text style={styles(colors).regularText}>
          {formatDate(weatherData.date)}
        </Text>
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
      backgroundColor: selected ? colors.selectedBackground : "transparent",
      width: 70,
      borderRadius: 20,
      paddingVertical: 20,
      gap: 20,
    }),
  });
