import React, {useState} from 'react';
import {Picker} from '@react-native-picker/picker';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
type HeaderProps = {
  city_name: string;
};

function HeaderWeather(props: HeaderProps): JSX.Element {
  const [selectedValue, setSelectedValue] = useState('Cidade x');
  return (
    <View style={{flex: 1, flexDirection: 'row'}}>
      <Image
        style={styles.LocalIcon}
        source={require('../../assets/local.png')}
      />
      <Picker
        selectedValue={selectedValue}
        style={{color: 'white', width: 155, height: 44}}
        onValueChange={itemValue => setSelectedValue(itemValue)}>
        <Picker.Item label={props.city_name} value={props.city_name} />
      </Picker>
      <TouchableOpacity style={{marginLeft: 100, alignContent: 'flex-end'}}>
        <Image
          style={styles.notificationIcon}
          source={require('../../assets/notify.png')}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
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
});

export default HeaderWeather;
