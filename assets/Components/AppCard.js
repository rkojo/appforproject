import React from 'react';
import {StyleSheet, Text, View, Image } from 'react-native';
import AppColor from './AppColor';
import AppText from './AppText';
import { useState } from 'react';

//appcard used in account screen
function AppCard({image, title, subtitle, style}) {
  return (
    <View style = {[styles.container, style]}>
      {isFinite(image)? <Image 
        style = {styles.image}
        source = {image}
      />: <Image style= {styles.image} source = {{uri: image}}/>}
      <View style={styles.textView}>
      <Text style={styles.title}>
      {title} </Text>
      {subtitle &&<Text style={styles.subtitle}>
        {subtitle}
      </Text>}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderRadius: 20,
    marginBottom: 10, 
    backgroundColor: AppColor.thirdColor,
    height: '20%',
    width: '100%',
  },
  image: {
    width: '35%',
    height: '100%',

  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    color: AppColor.white,
  },
  subtitle: {
    fontSize: 10,
  },
  textView: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  
})
export default AppCard;