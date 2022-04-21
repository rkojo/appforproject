import React from 'react';
import {View, Text, StyleSheet,  } from 'react-native';
import AppColor from '../Components/AppColor';
import AppButton from '../Components/AppButton';
import AppView from '../Components/AppView';


function WelcomeScreen({navigation}) {
  return (
    <AppView>
        <View style = {styles.textcontainer}>
      <Text style = {styles.title}>Welcome to</Text>
      <Text style = {styles.title}>memories!</Text>
         </View>
         <View style = {styles.benefits}>
         <Text style = {styles.benefitstext}>Keep your memories</Text>
         <Text style = {styles.benefitstext}>View your memories</Text>
         <Text style = {styles.benefitstext}>Add your memories</Text>
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
    </AppView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0,
  },
  title: {
    // marginTop: 20,
    fontSize: 60,
    textAlign: 'left',
    fontWeight: 'bold',
    color: AppColor.secondaryColor,
  },
  textcontainer: {
    marginBottom: 10,
    marginTop: 10,
  },
  bottom: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    color: AppColor.secondaryColor,
  },
  bottomtext: {
    textAlign: 'center',
    fontSize: 20,
    color: AppColor.secondaryColor,
  },
  buttons: {
    width: '100%',
    height: '40%',
    marginTop: 60,
    marginBottom: 50,
    justifyContent: 'space-between',
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
    color: AppColor.primaryColor,
  },
  benefitstext: {
    fontSize: 25,
    fontWeight:'bold',
    textAlign: 'left',
    color: AppColor.secondaryColor,
  },
  benefits: {
    justifyContent: 'space-evenly',
    width: '100%',
    height: '15%',
  }

})

export default WelcomeScreen;