import React from 'react';
import { View } from 'react-native';

const SpaceBetween = ({children, style = {}}) => {
  return (
    <View
        style={[{ 
            flexDirection: "row"
        },
        style
      ]} >
        {children}
    </View>
  );
}

export default SpaceBetween;