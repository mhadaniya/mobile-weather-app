import { Image, SafeAreaView, Text, View, PixelRatio, LogBox } from 'react-native';
import { styles } from './style';
import { EvilIcons, MaterialCommunityIcons, Feather, Ionicons, Fontisto } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import { Button, Menu, Divider, Provider } from 'react-native-paper';
LogBox.ignoreAllLogs();


const scale = PixelRatio.get();

export const Icon = ({ data, handleSetBackgroundColor }) => {
  if (data?.weather[0]?.description === 'scattered clouds' || data?.weather[0]?.description === 'moderate rain') {
    handleSetBackgroundColor('#08244F');
    return (<Image source={require('./assets/chovendo2.png')}
      resizeMode='cover' style={styles.imageConf} />)
  }
  else {
    handleSetBackgroundColor('#29B2DD');
    return (<Image source={require('./assets/ensolarado2.png')}
      resizeMode='cover' style={styles.imageConf} />)
  }
}

export const CloudIcon = ({ data }) => {
  if (data?.weather[0]?.description === 'clear sky') {
    return (<Feather name="sun" size={8 * scale} style={{ paddingBottom: 10 }} color="white" />)
  }
  else if (data?.weather[0]?.description === 'moderate rain') {
    return (<Fontisto name="day-rain" size={8 * scale} style={{ paddingBottom: 10 }} color="white" />)
  }
}

export default function App() {
  const [backgroundColor, setBackgroundColor] = useState('#29B2DD')
  const [data, setData] = useState();
  const API_KEY = '3297b65a92224be6a9b30139e2166cf7';
  const COUNTRY_CODE = "BR";
  const handleSetBackgroundColor = (bgColor) => {
    setBackgroundColor(bgColor);
  }
  const [city, setCity] = useState('Maceio');
  const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city},${COUNTRY_CODE}&appid=${API_KEY}&units=metric`;
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  useEffect(() => {
    fetch(API_URL)
      .then((res) => {
        res.json().then((responseData) => {
          setData(responseData);
          console.log(responseData);
        })
      })
  }, [city]);

  const [visible, setVisible] = useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  return (
    <Provider>
      <SafeAreaView style={[styles.container, { backgroundColor }]} >
        <View style={styles.header}>
          <View style={{ flexDirection: 'row', paddingTop: 10 }}>
            <Menu
              visible={visible}
              onDismiss={closeMenu}
              anchor={<Button textColor="white" onPress={openMenu}> <EvilIcons style={{ paddingLeft: 25 }} name="location" size={8 * scale} color="white" /> {data?.name}</Button>}>
              <Menu.Item onPress={() => { setCity('Brasilia') }} title="Brasilia" />
              <Menu.Item onPress={() => { setCity('Fortaleza') }} title="Fortaleza" />
              <Divider />
              <Menu.Item onPress={() => { setCity('Maceio') }} title="Maceió" />
            </Menu>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Ionicons name="notifications-outline" size={8 * scale} color="white" style={{ paddingRight: 15, paddingTop: 15 }} />
          </View>

        </View>
        <View style={{ alignItems: 'center', paddingBottom: 10 }}
        >
          <Icon data={data} handleSetBackgroundColor={handleSetBackgroundColor}></Icon>
          {/* <Image source={require('./assets/chovendo.svg')} style={{ width: 100, height: 100 }} /> */}

          {data?.main?.temp && <Text style={{ fontSize: 20 * scale, color: '#fff' }}>{Math.round(data?.main?.temp)}°</Text>}
          <Text style={{ color: '#fff', fontSize: 10 * scale }}>Precipitations</Text>
          <View style={{ alignItems: 'center', flexDirection: 'row' }}>
            {data?.main?.temp_max && <Text style={{ fontSize: 5 * scale, color: '#fff' }}>Max.: {Math.round(data?.main?.temp_max)}° </Text>}
            {data?.main?.temp_min && <Text style={{ fontSize: 5 * scale, color: '#fff' }}>Min.: {Math.round(data?.main?.temp_min)}°</Text>}
          </View>
        </View>
        <View style={{ paddingBottom: 20 }}>
          <View style={styles.buttons}>
            <View style={styles.buttonsIcons}>
              <Ionicons name="ios-rainy-outline" size={10 * scale} color="white" />
              {/* {data?.precipitation?.value && <Text style={{ fontSize: 6 * scale, color: '#fff', paddingLeft: 40, paddingRight: 20 }}>{data.precipitation.value}%</Text>} */}
              <Text style={{ fontSize: 6 * scale, color: '#fff', paddingLeft: 5, paddingRight: 10 }}>25 mm</Text>
            </View>

            <View style={styles.buttonsIcons}>
              <Feather name="thermometer" size={10 * scale} color="white" style={{ paddingLeft: 25 }} />
              {data?.main?.humidity && <Text style={{ fontSize: 6 * scale, color: '#fff', paddingLeft: 5, paddingRight: 10 }}>{data?.main?.humidity}%</Text>}
            </View>

            <View style={styles.buttonsIcons}>
              <Feather name="wind" size={10 * scale} color="white" style={{ paddingLeft: 25 }} />
              {data?.wind?.speed && <Text style={{ fontSize: 6 * scale, color: '#fff', paddingLeft: 5, paddingRight: 5 }}>{data.wind.speed} km/h</Text>}
            </View>


          </View>
        </View>

        <View style={{ paddingBottom: 20 }}>
          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <Text style={styles.textHeaderCard}>Today</Text>
              <Text style={styles.textHeaderCard}>{formattedDate}</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <View style={styles.cardWeather}>
                <Text style={{ color: "#fff", fontSize: 6 * scale, paddingBottom: 5 }}>{Math.round(data?.main?.temp)}°</Text>
                <CloudIcon data={data}></CloudIcon>
                <Text style={styles.textCard}>15.00</Text>
              </View>
              <View style={styles.cardWeather}>
                <Text style={{ color: "#fff", fontSize: 6 * scale, paddingBottom: 5 }}>{Math.round(data?.main?.temp)}°</Text>
                <CloudIcon data={data}></CloudIcon>
                <Text style={styles.textCard}>16.00</Text>
              </View>
              <View style={styles.cardWeather}>
                <Text style={{ color: "#fff", fontSize: 6 * scale, paddingBottom: 5 }}>{Math.round(data?.main?.temp)}°</Text>
                <CloudIcon data={data}></CloudIcon>
                <Text style={styles.textCard}>17.00</Text>
              </View>
              <View style={styles.cardWeather}>
                <Text style={{ color: "#fff", fontSize: 6 * scale, paddingBottom: 5 }}>{Math.round(data?.main?.temp)}°</Text>
                <CloudIcon data={data}></CloudIcon>
                <Text style={styles.textCard}>18.00</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={{ paddingBottom: 20 }}>
          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <Text style={styles.textHeaderCard}>Next Forecast</Text>
              <MaterialCommunityIcons name="calendar-today" size={8 * scale} color="white" />
            </View>

            <View style={styles.cardHeader}>
              <Text style={styles.textCard}>Monday</Text>
              <CloudIcon data={data}></CloudIcon>
              <View style={{ paddingLeft: 25, color: "#fff", fontSize: 10 * scale, flexDirection: 'row', }}>
                <Text style={{ color: "#fff", fontSize: 6 * scale }}>{Math.round(data?.main?.temp_max)}°C </Text>
                <Text style={{ color: "#fff", fontSize: 6 * scale, opacity: 0.3, paddingRight: 10 }}>{Math.round(data?.main?.temp_min)}°C</Text>
              </View>
            </View>

            <View style={styles.cardHeader}>
              <Text style={styles.textCard}>Tuesday</Text>
              <CloudIcon data={data}></CloudIcon>
              <View style={{ paddingLeft: 25, color: "#fff", fontSize: 10 * scale, flexDirection: 'row', }}>
                <Text style={{ color: "#fff", fontSize: 6 * scale }}>{Math.round(data?.main?.temp_max)}°C  </Text>
                <Text style={{ color: "#fff", fontSize: 6 * scale, opacity: 0.3, paddingRight: 10 }}>{Math.round(data?.main?.temp_min)}°C</Text>
              </View>
            </View>

          </View>
        </View>

      </SafeAreaView>
    </Provider>
  );
}