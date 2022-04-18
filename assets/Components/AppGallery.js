import React from 'react';
import { StyleSheet, View, Image, Text, TouchableHighlight } from 'react-native';
import AppText from './AppText';

function AppGallery({image, title, onPress, style}) {
  return (
    <TouchableHighlight onPress = {onPress} > 
    <View style = {[styles.container, style]}>
        <Image source = {image} style = {styles.image}/>
        <AppText style = {styles.title}> {title}</AppText>
    </View>
    </TouchableHighlight>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: '10%',
    height: '10%',
  },
  title: {
    flexDirection: 'row',
  },
})
export default AppGallery;