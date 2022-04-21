import React from 'react';
import { StyleSheet, Image, View } from 'react-native';

import AppColor from './AppColor';
import {MaterialCommunityIcons} from '@expo/vector-icons';

function AppIcon({name, size = 40, color = AppColor.white, style, width = 50,height = 50, backgroundColor =  AppColor.secondaryColor,}) {

  return (
    <View style = {[styles.container, style, height = {height}, width = {width}, backgroundColor = {backgroundColor}]}>
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
    borderRadius: 20,
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