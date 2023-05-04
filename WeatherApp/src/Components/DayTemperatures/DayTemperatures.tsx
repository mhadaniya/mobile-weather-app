/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View} from 'react-native';

function getMonthInText(dateString: string): string {
  const [day, month] = dateString.split('/').map(str => parseInt(str, 10));
  const monthsInText = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  return monthsInText[month - 1] + ', ' + day;
}

type DayTemperaturesProps = {
  date: string;
  weather: string;
};

function DayTemperatures(props: DayTemperaturesProps): JSX.Element {
  return (
    <View
      style={{
        marginVertical: 20,
        padding: 15,
        borderRadius: 22,
        backgroundColor: props.weather === 'rain' ? '#001026' : '#1580ae',
      }}>
      <View style={{flex: 1, flexDirection: 'row', marginBottom: 10}}>
        <Text
          style={{
            textAlign: 'left',
            color: 'white',
            fontWeight: 'bold',
            marginRight: 170,
            fontSize: 20,
          }}>
          Today
        </Text>
        <Text style={{textAlign: 'right', color: 'white', fontSize: 19}}>
          {getMonthInText(props.date)}
        </Text>
      </View>
      <View />
    </View>
  );
}

export default DayTemperatures;
