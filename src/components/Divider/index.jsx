import React from 'react';
import { View } from 'react-native';


const Separator = ({ style }) => (
  <View
    style={[
      style,
      {
        width: '80%',
        borderTopWidth: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
      },
    ]}
  />
);

export default Separator;
