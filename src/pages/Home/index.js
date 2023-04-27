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
    temperature: "24°",
    icon: <IconCloudy />,
  },
  {
    time: "12:00",
    temperature: "24°",
    icon: <IconCloudyDay />,
  },
  {
    time: "13:00",
    temperature: "24°",
    icon: <IconCloudyMoon />,
  },
  {
    time: "14:00",
    temperature: "24°",
    icon: <IconCloudy />,
  },
  {
    time: "15:00",
    temperature: "24°",
    icon: <IconCloudyDay />,
  },
  {
    time: "16:00",
    temperature: "24°",
    icon: <IconCloudyMoon />,
  },
  {
    time: "17:00",
    temperature: "24°",
    icon: <IconCloudyMoon />,
  },
  {
    time: "18:00",
    temperature: "24°",
    icon: <IconCloudyMoon />,
  },
];

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

const WeatherCard = ({ item, selected }) => {
  const CardContent = () => (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: selected ? "#11418D" : "transparent",
        width: 70,
        borderRadius: 20,
        paddingVertical: 20,
        gap: 20,
      }}
    >
      <Text
        style={{
          fontSize: 18,
          color: "#fff",
          fontFamily: "SFProDisplaySemiBold",
        }}
      >
        {item.temperature}
      </Text>
      {item.icon}
      <Text
        style={{
          fontSize: 18,
          color: "#fff",
          fontFamily: "SFProDisplaySemiBold",
        }}
      >
        {item.time}
      </Text>
    </View>
  );

  return selected ? (
    <LinearGradient
      colors={["#5096FF", "#0044AB"]}
      start={{ x: 1, y: 0 }}
      end={{ x: 0, y: 1 }}
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
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginHorizontal: 36,
            marginTop: 24,
            paddingVertical: 8,
            paddingHorizontal: 24,
            backgroundColor: colors.background,
            borderRadius: 20,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
            }}
          >
            <IconRain />
            <Text
              style={{
                fontSize: 14,
                color: "#fff",
                fontFamily: "SFProDisplayBold",
              }}
            >
              {`30%`}
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
            }}
          >
            <IconHumidity />
            <Text
              style={{
                fontSize: 14,
                color: "#fff",
                fontFamily: "SFProDisplayBold",
              }}
            >
              {`90%`}
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
            }}
          >
            <IconWind />
            <Text
              style={{
                fontSize: 14,
                color: "#fff",
                fontFamily: "SFProDisplayBold",
              }}
            >
              {`19 km/h`}
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "column",
            // alignItems: "center",
            // justifyContent: "space-between",
            marginHorizontal: 36,
            marginTop: 24,
            paddingVertical: 12,
            // paddingHorizontal: 24,
            backgroundColor: colors.background,
            borderRadius: 20,
            gap: 12,
          }}
        >
          <View
            style={{
              paddingHorizontal: 24,
              flexDirection: "row",
              alignItems: "baseline",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{
                fontSize: 20,
                color: "#fff",
                fontFamily: "SFProDisplayBold",
              }}
            >
              Today
            </Text>
            <Text
              style={{
                fontSize: 18,
                color: "#fff",
                fontFamily: "SFProDisplayRegular",
              }}
            >
              Mar, 9
            </Text>
          </View>
          <FlatList
            data={mockData}
            renderItem={({ item }) => (
              <WeatherCard item={item} selected={true} />
            )}
            keyExtractor={(item, index) => index.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
            // ItemSeparatorComponent={() => <View style={{ width: 20 }} />}
            style={{
              paddingLeft: 20,
            }}
            contentContainerStyle={{
              gap: 20,
              paddingRight: 40,
            }}
          />
        </View>
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
    fontTest: {
      fontSize: 18,
      color: "#fff",
    },
  });
