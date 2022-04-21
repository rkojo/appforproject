import React from 'react';
import { StyleSheet, View, Text, Image, TouchableHighlight } from 'react-native';
import AppColor from './AppColor';
import AppText from './AppText';

function AppListItem({image, title, IconComponent, onPress, style}) {
  return (
    <TouchableHighlight onPress = {onPress} underlayColor = {AppColor.fourthColor} style = {style}>
    <View style = {styles.container}>
      {IconComponent}
      {image && <Image source = {image} style = {styles.image}/>}
        <AppText style = {styles.title}> {title}</AppText>
    </View>
    </TouchableHighlight>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  image: {
    height: 50,
    width: 50, 
    borderRadius: 36,
  },
  textContainer: {
    flexDirection: 'column',
    marginLeft: 20,
  },
  title: {
    marginVertical: 5,
    textAlignVertical: 'center',
    textAlign: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
    fontSize: 35,
    color: AppColor.secondaryColor,
  },

})
export default AppListItem;