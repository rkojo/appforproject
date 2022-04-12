import React from 'react';
import { StyleSheet, View } from 'react-native';
import Constants from 'expo-constants';

function AppView({children, style}) {
  return (
    <View style = {[styles.screen, style]}>
      {children}
    </View>
  );
}
const styles = StyleSheet.create({
  screen: {
    flex:1,
    marginTop: Constants.statusBarHeight
  }
})
export default AppView;