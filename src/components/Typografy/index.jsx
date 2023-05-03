import React from 'react';
import { Text } from 'react-native';
import { theme } from "../../assets/theme";
const defaultVariantMapping = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  text: 'text',
  small: 'small',
  title: 'title'
};


const Typografy = ({
  children, 
  color, 
  size,
  style,
  bold,
  compressCenter = false,
  textAlign = 'center',
  onPress=null,
  gutten=false
}, props) => {
  
  
  const colorTypografy = (color) => {
    switch (color) {
      case 'red':
        return theme.colors.di_red
      case 'white':
        return theme.colors.di_white
      default:
        return theme.colors.di_black
    }
  }

  const fontSizeTypografy = (size) => {
    switch (size) {
      case 'h1':
        return theme.typography.h1.fontSize
      case 'h2':
        return theme.typography.h2.fontSize
      case 'h3':
        return theme.typography.h3.fontSize
      case 'text':
        return theme.typography.text.fontSize
      case 'small':
        return theme.typography.small.fontSize
      case 'title':
        return theme.typography.title.fontSize
      default:
        return theme.typography.h3.fontSize
    }
  }

  return (
    <Text
      onPress={onPress}
      style={[{
        color: colorTypografy(color),
        fontSize: fontSizeTypografy(size),
        textAlign: textAlign,
      }, 
      compressCenter && {paddingHorizontal: 30},
      bold && {fontWeight: "500"},
      gutten && {marginVertical: 20},
      style,
    ]}
    >
        {children}
    </Text>
    );
}

export default Typografy;