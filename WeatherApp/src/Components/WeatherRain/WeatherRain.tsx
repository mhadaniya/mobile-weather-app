import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

type WeatherRainProps = {
  Weater: string;
  rain_probability: number;
  humidity: number;
  wind_speedy: string;
};

function WeatherRain(props: WeatherRainProps): JSX.Element {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        marginTop: 30,
        paddingHorizontal: 25,
        paddingVertical: 15,
        borderRadius: 22,
        backgroundColor: props.Weater === 'rain' ? '#001026' : '#1580ae',
      }}>
      <View style={{flex: 1, flexDirection: 'row'}}>
        <Image
          style={styles.WeatherIcons}
          source={require('../../assets/chuva.png')}
        />
        <Text style={styles.Text}>{props.rain_probability}%</Text>
      </View>
      <View style={{flex: 1, flexDirection: 'row'}}>
        <Image
          style={{width: 14, height: 20, marginHorizontal: 10}}
          source={require('../../assets/humidade.png')}
        />
        <Text style={styles.Text}>{props.humidity}%</Text>
      </View>
      <View style={{flex: 1, flexDirection: 'row'}}>
        <Image
          style={styles.WeatherIcons}
          source={require('../../assets/wind.png')}
        />
        <Text style={styles.Text}>{props.wind_speedy}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  WeatherIcons: {
    width: 19,
    height: 19,
    marginHorizontal: 10,
  },
  Text: {
    textAlign: 'center',
    color: 'white',
    fontSize: 14,
  },
});

export default WeatherRain;
