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
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
//import { Colors } from 'react-native/Libraries/NewAppScreen';

/*
type SectionProps = PropsWithChildren<{
  title: string;
}>;
*/

const baseUrl = 'https://api.hgbrasil.com/weather';


function App(): JSX.Element {
  const isDarkMode = true;
  const [data, setdata] = useState({});
  axios.get(`${baseUrl}`).then(response => {
    setdata(response.data.results);
  });
  const [selectedValue, setSelectedValue] = useState(data.city);
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
        <View style={{ margin: 30, height: '100%' }}>
          <View>
            <Picker
              selectedValue={selectedValue}
              style={{ height: 50, width: 150, color: '#000'}}
              onValueChange={(itemValue: any) => setSelectedValue(itemValue)}
            >
              <Picker.Item value={data.city} />
              <Picker.Item value={data.city} />
            </Picker>
          </View>
          <Text style={styles.Temperature} >
            {data.temp}°
          </Text>
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
});

export default App;
