import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

const Input = props => {
  return <TextInput {...props} style={{...styles.Input, ...props.style}} />;
};

export default Input;
const styles = StyleSheet.create({
  Input: {
    height: 40,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    marginVertical: 10,
  },
});
