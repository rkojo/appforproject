import React from 'react';
import { StyleSheet, Image, View } from 'react-native';

import AppColor from './AppColor';
import {MaterialCommunityIcons} from '@expo/vector-icons';

function AppIcon({name, size, color}) {

  return (
    <View style = {styles.container}>
    <MaterialCommunityIcons
        name = {name}
        size = {size}
        color = {color}
        />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColor.secondaryColor,
    borderRadius: 10,
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    borderRadius: 10,
    height: 40,
    width: 40,
    

  }
})
export default AppIcon;