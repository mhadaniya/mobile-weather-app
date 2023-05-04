/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View} from 'react-native';

type PrecipitationsProps = {
  max: number;
  min: number;
};

function Precipitations(props: PrecipitationsProps): JSX.Element {
  return (
    <View>
      <Text style={{textAlign: 'center', color: 'white', fontSize: 18}}>
        Precipitations
      </Text>
      <Text
        style={{
          textAlign: 'center',
          color: 'white',
          fontSize: 18,
        }}>
        Max.:{props.max}° &nbsp; Min.:{props.min}°
      </Text>
    </View>
  );
}

export default Precipitations;
