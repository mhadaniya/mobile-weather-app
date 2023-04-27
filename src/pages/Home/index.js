import React from "react";
import {
  View,
  Text,
  StyleSheet,
  useColorScheme,
  Image,
  ScrollView,
  FlatList,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { darkColors, lightColors } from "../../styles/colors";
import {
  IconCalendar,
  IconCloudy,
  IconCloudyDay,
  IconCloudyMoon,
  IconHumidity,
  IconMap,
  IconNotif,
  IconOpt,
  IconRain,
  IconWind,
} from "../../assets/svg";

// make mockdata a list with times, temperatures, and an icon based on the current time

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

const Header = () => {
  const colorScheme = useColorScheme();
  // const colors = colorScheme === "dark" ? darkColors : lightColors;
  const colors = darkColors;
  return (
    <View style={styles(colors).headerContainer}>
      <View style={styles(colors).locationContainer}>
        <IconMap />
        <Text style={styles(colors).semiBoldText}>São paulo</Text>
        <IconOpt />
      </View>
      <View>
        <View style={{ position: "absolute", top: 0, right: 0, zIndex: 1 }}>
          <View style={styles(colors).notificationMark} />
        </View>
        <IconNotif />
      </View>
    </View>
  );
};

const WeatherCard = ({ item, selected }) => {
  const colorScheme = useColorScheme();
  // const colors = colorScheme === "dark" ? darkColors : lightColors;
  const colors = darkColors;
  const CardContent = () => (
    <View style={styles(colors).weatherCardContainer(selected)}>
      <Text style={styles(colors).regularText}>{`${item.temperature}ºC`}</Text>
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

export default function Home() {
  const colorScheme = useColorScheme();
  // const colors = colorScheme === "dark" ? darkColors : lightColors;
  const colors = darkColors;
  const insets = useSafeAreaInsets();

  const MainContent = () => (
    <View style={styles(colors).mainContentContainer}>
      <Image
        source={
          colorScheme === "dark"
            ? require("../../assets/images/Dark.png")
            : require("../../assets/images/Light.png")
        }
        style={{ width: 300, height: 200 }}
      />
      <Text style={styles(colors).mainContentTitle}>{`30º`}</Text>
      <Text
        style={[
          styles(colors).regularText,
          {
            textAlign: "center",
            textShadowColor: "transparent",
          },
        ]}
      >
        {`Precipitations\nMax.:34º   Min.:28º`}
      </Text>
    </View>
  );

  return (
    <>
      <LinearGradient
        colors={colors.gradient}
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
        <ScrollView>
          <MainContent />
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
          <View
            style={[
              styles(colors).generalContainer,
              {
                flexDirection: "column",
              },
            ]}
          >
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
          <View
            style={[
              styles(colors).generalContainer,
              {
                flexDirection: "column",
              },
            ]}
          >
            <View style={styles(colors).titleContainer}>
              <Text style={styles(colors).boldText}>Next Forecast</Text>
              <IconCalendar />
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                paddingHorizontal: 24,
              }}
            >
              <Text>Monday</Text>
              {/* <Image source={require("../../assets/images/RainDrops.png")} /> */}
              <Image source={require("../../assets/images/CloudStorm.png")} />
              <View
                style={{
                  flexDirection: "row",
                  gap: 5,
                }}
              >
                <Text>13ºC</Text>
                <Text>10ºC</Text>
              </View>
            </View>
          </View>
        </ScrollView>
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
      gap: 16,
    },
    generalContainer: {
      marginHorizontal: 36,
      marginTop: 24,
      paddingVertical: 12,
      backgroundColor: colors.background,
      borderRadius: 20,
      gap: 12,
    },
    mainContentContainer: {
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
    },
    mainContentTitle: {
      fontSize: 64,
      color: "#fff",
      fontFamily: "SFProDisplaySemiBold",
      textAlign: "center",
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
    weatherCardContainer: (selected) => ({
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: selected ? "#11418D" : "transparent",
      width: 70,
      borderRadius: 20,
      paddingVertical: 20,
      gap: 20,
    }),
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
