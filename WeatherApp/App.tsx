/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import axios from 'axios';
//import type { PropsWithChildren } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Precipitations from './Components/Precipitations/Precipitations';
import HeaderWeather from './Components/Header/Header';
import WeatherRain from './Components/WeatherRain/WeatherRain';
//import { Colors } from 'react-native/Libraries/NewAppScreen';

/*
type SectionProps = PropsWithChildren<{
  title: string;
}>;
*/

const baseUrl = 'https://api.hgbrasil.com/weather?key=b9b40610';

function App(): JSX.Element {
  type dataT = {
    date: string;
    weekday: string;
    max: number;
    min: number;
    cloudiness: number;
    rain: number;
    rain_probability: number;
    wind_speedy: string;
    description: string;
    condition: string;
  }
  const [data, setdata] = useState({
    date:'',
    temp:'99',
    city_name: 'cidade x',
    humidity:0,
  });
  const [today, setToday] = useState({
    date: '01/01',
    weekday: 'Example',
    max: 99,
    min: 0,
    cloudiness: 100.0,
    rain: 0.0,
    rain_probability: 21,
    wind_speedy: '99 km/h',
    description: 'Tempo nublado',
    condition: 'cloudly_day',
  });
  const [forecast, setforecast] = useState([]);

  axios.get(`${baseUrl}`).then(async response => {
    await setdata(response.data.results);
    await setforecast(response.data.results.forecast);
    forecast.forEach((item:dataT) => {
      if (item.date === data.date.slice(0, 5)) {
        setToday(item);
      }
    });
  });

  function getMonthInText(dateString: string): string {
    const [day, month] = dateString.split('/').map(str => parseInt(str, 10));
    const monthsInText = [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul',
      'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
    ];

    return monthsInText[month - 1] + ', ' + day;
  }

  const isRaining = today.condition;
  return (
    <LinearGradient
      style={{ height: '100%' }}
      colors={
        isRaining === 'rain'
          ? ['#08244F', '#134CB5', '#0B42AB']
          : ['#29B2DD', '#33AADD', '#2DC8EA']
      }>
      <StatusBar
        barStyle={isRaining === 'rain' ? 'light-content' : 'dark-content'}
        backgroundColor={isRaining === 'rain' ? '#08244F' : '#29B2DD'}
      />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={{ marginVertical: 10, marginHorizontal: 25 }}>
          <HeaderWeather city_name={data.city_name} />
          <Text style={styles.Temperature} >
            {data.temp}°
          </Text>
          <Precipitations max={today.max} min={today.min} />
          <WeatherRain Weater={isRaining} rain_probability={today.rain_probability} humidity={data.humidity} wind_speedy={today.wind_speedy}/>
          <View style={{ marginVertical: 20, padding: 15, borderRadius: 22, backgroundColor: isRaining === 'rain' ? '#001026' : '#1580ae' }} >
            <View style={{ flex: 1, flexDirection: 'row', marginBottom: 10 }}>
              <Text style={{ textAlign: 'left', color: 'white', fontWeight: 'bold', marginRight: 170, fontSize: 20 }}>Today</Text>
              <Text style={{ textAlign: 'right', color: 'white', fontSize: 19 }}>{getMonthInText(today.date)}</Text>
            </View>
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <Image style={{ width: 14, height: 20, marginHorizontal: 10 }} source={require('./assets/humidade.png')} />
              <Text style={styles.Text}>{data.humidity}%</Text>
            </View>
            <View style={{ flex: 1, flexDirection: 'row', marginRight:10 }}>
              <Image style={styles.WeatherIcons} source={require('./assets/wind.png')} />
              <Text style={styles.Text}>{today.wind_speedy}</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  Temperature: {
    margin: 10,
    textAlign: 'center',
    color: 'white',
    fontSize: 64,
  },
  notificationIcon: {
    marginTop: 15,
    width: 15,
    height: 20,
  },
  LocalIcon: {
    marginTop: 15,
    width: 20,
    height: 20,
  },
  Text: {
    textAlign: 'center',
    color: 'white',
    fontSize: 14,
  },
  WeatherIcons: {
    width: 19,
    height: 19,
    marginHorizontal: 10,
  },
});

export default App;
