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
  TouchableOpacity,
  View,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
//import { Colors } from 'react-native/Libraries/NewAppScreen';

/*
type SectionProps = PropsWithChildren<{
  title: string;
}>;
*/

const baseUrl = 'https://api.hgbrasil.com/weather?key=581fed9e';
const LocationImage = require('./assets/local.png');

function App(): JSX.Element {
  const isDarkMode = true;
  const [data, setdata] = useState({});
  const [today, setToday] = useState({});
  const [forecast, setforecast] = useState([]);
  axios.get(`${baseUrl}`).then(async response => {
    await setdata(response.data.results);
    await setforecast(response.data.results.forecast);
    forecast.forEach(item => {
      if (item.date === data.date.slice(0, 5)) {
        setToday(item);
      }
    });
  });
  const [selectedValue, setSelectedValue] = useState(data.city_name);
  return (
    <LinearGradient
      style={{ height: '100%' }}
      colors={
        isDarkMode
          ? ['#08244F', '#134CB5', '#0B42AB']
          : ['#29B2DD', '#33AADD', '#2DC8EA']
      }>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={isDarkMode ? '#08244F' : '#29B2DD'}
      />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={{ marginVertical: 10, marginHorizontal: 25 }}>
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <Image style={styles.LocalIcon} source={LocationImage} />
            <Picker
              selectedValue={selectedValue}
              style={{ color: 'white', width: 155, height: 44 }}
              onValueChange={itemValue =>
                setSelectedValue(itemValue)
              }>
              <Picker.Item label={data.city_name} value={data.city} />
            </Picker>
            <TouchableOpacity style={{ marginLeft: 100 ,alignContent: 'flex-end' }}>
              <Image style={styles.notificationIcon} source={require('./assets/notify.png')} />
            </TouchableOpacity>
          </View>
          <Text style={styles.Temperature} >
            {data.temp}°
          </Text>
          <View>
            <Text style={{ textAlign: 'center', color:'white' }}>
              Precipitations
            </Text>
            <Text style={styles.Text}>
                Max.:{
                  today.max
              }°
              &nbsp;
              Min.:{
                today.min
              }°
            </Text>
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
    
  },
  WeatherIcons: {
    width: 18,
    height: 19,
    marginHorizontal:10,
  },
});

export default App;
