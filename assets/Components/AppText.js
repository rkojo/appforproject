import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { Platform } from 'react-native-web';


function AppText({children}) {
  return (
    <Text style = {styles.text}>
      {children}
    </Text>
  );
}
const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontFamily:'normal',
  }
})

export default AppText;