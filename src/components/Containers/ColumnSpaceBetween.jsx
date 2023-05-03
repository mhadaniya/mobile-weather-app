import React from 'react';
import { View } from 'react-native';

const ColumnSpaceBetween = ({children, style}) => {
  return (
    <View
      style={[{
        flexDirection: 'column',
        justifyContent: 'space-between',
        flex: 1,
        marginVertical: 30,
      }, style]}
    >
      {children}
    </View>
  );
}

export default ColumnSpaceBetween;