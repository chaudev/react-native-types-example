import React from 'react';
import {StyleSheet} from 'react-native';

const rootStyles = StyleSheet.create({
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  spaceBetween: {
    justifyContent: 'space-between',
  },
  row: {
    flexDirection: 'row',
  },
  column: {
    flexDirection: 'column',
  },
  redBackground: {
    backgroundColor: 'red',
  },
  greenBackground: {
    backgroundColor: 'green',
  },
  blueBackground: {
    backgroundColor: 'blue',
  },
  whiteBackground: {
    backgroundColor: 'white',
  },
});

export default rootStyles;
