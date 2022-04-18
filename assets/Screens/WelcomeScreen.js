import React from 'react';
import {View, Text, StyleSheet,  } from 'react-native';
import AppColor from '../Components/AppColor';
import AppIcon from '../Components/AppIcon';
import AppText from '../Components/AppText';
import Constants from 'expo-constants';
import AppButton from '../Components/AppButton';
import {useNavigation} from '@react-navigation/native';


function WelcomeScreen({navigation}) {
  return (
    <View style = {styles.container}>
        <View style = {styles.textcontainer}>
      <Text style = {styles.title}> Welcome to</Text>
      <Text style = {styles.title}> memories!</Text>
         </View>
         <View style = {styles.benefits}>
         <Text style = {styles.benefitstext}> Keep your memories</Text>
         <Text style = {styles.benefitstext}> View your memories later</Text>
         <Text style = {styles.benefitstext}> Easy to use</Text>
         </View>
        <View style = {styles.buttons}>
          <Text style = {styles.buttontext}>Sign up to use memories</Text>
      <AppButton style = {styles.registerbutton}
      title={"Register"}
      onPress ={() =>navigation.navigate("Register")}
      />
      <Text style = {styles.buttontext}>Already have an account?</Text>
      <AppButton style = {styles.loginbutton}
      title = {"Login"}
      onPress ={() =>navigation.navigate("Login")}
      />
      </View>
      <View style = {styles.bottom}>
      <Text style = {styles.bottomtext}>Made by Example Company.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0,
    backgroundColor: AppColor.fourthColor,

  },
  title: {
    fontSize: 50,
    textAlign: 'left',
    fontWeight: 'bold',
    color: AppColor.white,
  },
  textcontainer: {
    marginBottom: 50,
    marginTop: 30,
  },
  bottom: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
  },
  bottomtext: {
    textAlign: 'center',
    fontSize: 15,
    color: AppColor.white,
  },
  buttons: {
    width: '100%',
    height: '40%',
    marginTop: 60,
    marginBottom: 50,
    justifyContent: 'space-between',
    backgroundColor: AppColor.thirdColor,
  },
  registerbutton: {
    marginTop: 20,
    marginBottom: 30,
  },
  loginbutton: {
    marginTop: 20,
    marginBottom: 50,
  },
  buttontext: {
    textAlign: 'center',
    fontSize: 20,
    color: AppColor.white,
  },
  benefitstext: {
    fontSize: 20,
    textAlign: 'left',
    color: AppColor.white,
  },
  benefits: {
    justifyContent: 'space-around',
    width: '100%',
    height: '10%',
    backgroundColor: AppColor.thirdColor,
  }

})

export default WelcomeScreen;