import React from 'react';
import { View } from 'react-native';

const Center = ({children, style}) => {
  return (
    <View
        style={[{ 
            flex: 1, 
            alignItems: 'center', 
            justifyContent: 'center'
        }, style]}
    >
        {children}
    </View>
  );
}

export default Center;