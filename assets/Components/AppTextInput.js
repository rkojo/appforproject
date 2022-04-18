import React from 'react';
import {View, StyleSheet, TextInput } from 'react-native';
import{MaterialCommunityIcons} from '@expo/vector-icons';
import AppColor from './AppColor';


function AppTextInput({icon, ...otherProps}) {
  return (
    <View style = {styles.container}>
      <MaterialCommunityIcons name = {icon} size ={20}/>
      <TextInput style = {styles.input} {...otherProps}/>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E0E0DF',
    flexDirection: 'row',
    borderRadius: 25,
    padding: 15,
    alignContent: 'space-around',
    width: '100%',
  },
  input: {
    color: AppColor.black,
  },
})
export default AppTextInput;