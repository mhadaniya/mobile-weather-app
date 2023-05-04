/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import api from '../../services/api';
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
import Precipitations from '../../Components/Precipitations/Precipitations';
import WeatherRain from '../../Components/WeatherRain/WeatherRain';
import {Picker} from '@react-native-picker/picker';
import DayTemperatures from '../../Components/DayTemperatures/DayTemperatures';
import Weekday from '../../Components/Weekday/Weekday';

export const Home = () => {
  const cidades = [
    {
      nome: 'Maceió',
      code: '455880',
    },
    {
      nome: 'Fortaleza',
      code: '455830',
    },
  ];
  const [forecast, setforecast] = useState([]);
  const [SelectedValue, setSelectedValue] = React.useState('455880');

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
  };

  const [ApiData, setData] = useState({
    date: '',
    temp: '99',
    city_name: 'cidade x',
    humidity: 0,
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

  const getWeather = async () => {
    try {
      const {data} = await api.get(
        `/weather?woeid=${SelectedValue}&key=b9f0051b`,
      );
      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  const [isRaining, setIsRaining] = useState('');

  async function handleWeather() {
    const response = await getWeather();
    setData(response?.results);
    setforecast(response?.results?.forecast);
    forecast.forEach((item: dataT) => {
      if (item.date === ApiData.date.slice(0, 5)) {
        setToday(item);
        setIsRaining(today.condition);
      }
    });
  }

  useEffect(() => {
    handleWeather();
  }, [SelectedValue]);

  return (
    <LinearGradient
      style={{height: '100%'}}
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
        <View style={{marginVertical: 10, marginHorizontal: 25}}>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <Image
              style={styles.LocalIcon}
              source={require('../../assets/local.png')}
            />
            <Picker
              selectedValue={SelectedValue}
              style={{color: 'white', width: 155, height: 44}}
              onValueChange={itemValue => setSelectedValue(itemValue)}>
              {cidades.map((cidade, i) => {
                return (
                  <Picker.Item
                    label={cidade.nome}
                    value={cidade.code}
                    key={i}
                  />
                );
              })}
            </Picker>
            <TouchableOpacity
              style={{marginLeft: 100, alignContent: 'flex-end'}}>
              <Image
                style={styles.notificationIcon}
                source={require('../../assets/notify.png')}
              />
            </TouchableOpacity>
          </View>
          <Image
            style={styles.MainImage}
            source={
              isRaining === 'rain'
                ? require('../../assets/raining.png')
                : require('../../assets/Suncloud.png')
            }
          />
          <Text style={styles.Temperature}>{ApiData.temp}°</Text>
          <Precipitations max={today.max} min={today.min} />
          <WeatherRain
            Weater={isRaining}
            rain_probability={today.rain_probability}
            humidity={ApiData.humidity}
            wind_speedy={today.wind_speedy}
          />
          <DayTemperatures weather={isRaining} date={today.date} />
          <View
            style={{
              padding: 15,
              borderRadius: 22,
              backgroundColor: isRaining === 'rain' ? '#001026' : '#1580ae',
            }}>
            <View style={{flex: 1, flexDirection: 'row', marginBottom: 10}}>
              <Text
                style={{
                  textAlign: 'left',
                  color: 'white',
                  fontWeight: 'bold',
                  marginRight: 130,
                  fontSize: 20,
                  marginBottom: 10,
                }}>
                Next Forecast
              </Text>
              <Image source={require('../../assets/calendar.png')} />
            </View>
            {forecast.map(Week => {
              return (
                <Weekday
                  weather={Week.condition}
                  day={Week.weekday}
                  max={Week.max}
                  min={Week.min}
                />
              );
            })}
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

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
    marginHorizontal: 10,
    textAlign: 'center',
    color: 'white',
    fontSize: 64,
  },
  notificationIcon: {
    marginTop: 15,
    width: 17,
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
  MainImage: {
    marginVertical: -45,
  },
});
