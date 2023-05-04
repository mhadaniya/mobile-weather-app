/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

type WeekdayProps = {
  day: string;
  weather: string;
  max: number;
  min: number;
};

function Weekday(props: WeekdayProps): JSX.Element {
  return (
    <View style={{flex: 1, flexDirection: 'row', marginBottom: 10}}>
      <Text
        style={{
          textAlign: 'right',
          color: 'white',
          fontSize: 19,
          marginRight: '25%',
        }}>
        {props.day}
      </Text>
      <Image
        style={styles.WeatherIcons}
        source={
          props.weather === 'clear_day'
            ? require('../../assets/sol.png')
            : props.weather === 'cloudy_day'
            ? require('../../assets/Bigdrops.png')
            : require('../../assets/Cloud.png')
        }
      />
      <Text style={styles.Text}>{props.max}°ᶜ  </Text>
      <Text style={styles.Text}>{props.min}°ᶜ</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  WeatherIcons: {
    width: 35,
    height: 35,
    marginHorizontal: 10,
    marginRight: '25%',
  },
  Text: {
    textAlign: 'center',
    color: 'white',
    fontSize: 14,
  },
});

export default Weekday;
