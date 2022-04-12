import React from 'react';
import {StyleSheet, Text, View, Image } from 'react-native';
import AppText from './AppText';

function AppCard({image, title, subtitle}) {
  return (
    <View style = {styles.container}>
      <Image 
        style = {styles.image}
        source = {image}
      />
      <Text style={styles.title}>
      {title} </Text>
      <Text style={styles.subtitle}>
        {subtitle}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    marginBottom: 10, 
    backgroundColor: 'grey',
    height: 100,
    width: '100%',
  },
  image: {
    width: '100%',
    height: 200,

  },
  title: {
    fontSize: 20,
  },
  subtitle: {
    fontSize: 10,
    
  },
  
})
export default AppCard;