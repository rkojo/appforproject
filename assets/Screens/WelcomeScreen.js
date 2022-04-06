import React from 'react';
import {View, Text, StyleSheet,  } from 'react-native';
import AppColors from '../Components/AppColors';
import AppIcon from '../Components/AppIcon';
import AppText from '../Components/AppText';
import Constants from 'expo-constants';


function WelcomeScreen(props) {
  return (
    <View style = {styles.container}>
      <AppText> Welcome to memories</AppText>
      <AppIcon name = "pencil-plus"
      size = {20}
      color = {AppColors.black}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    
    marginTop: Constants.statusBarHeight,
  }
})

export default WelcomeScreen;