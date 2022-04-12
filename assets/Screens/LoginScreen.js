import React from 'react';
import {View, StyleSheet, Text } from 'react-native';
import AppColor from '../Components/AppColor';
import AppText from '../Components/AppText';
import AppTextInput from '../Components/AppTextInput';
import AppView from '../Components/AppView';
import * as Yup from 'yup';
import {Formik} from 'formik';
import AppButton from '../Components/AppButton';

const schema = Yup.object().shape(
  {
    email: Yup.string().required().email("Must be a valid email"),
    password: Yup.string().required("Password required"),
  }
)

function LoginScreen(props) {
  return (
    <AppView>
      <AppView>
      <View style = {styles.textcontainer}>
      <Text style = {styles.title}>Login for</Text>
      <Text style = {styles.title}>your memories!</Text>
      </View>
      <View style = {styles.forms}>
      <Formik 
        initialValues={{email:' ', password: ' ',}}
        onSubmit = {values => console.log(values)}
        validationSchema = {schema}
        >
                {({handleChange, handleSubmit, errors}) => (
        <>
          <AppTextInput 
              placeholder='Email Address'
              style = {styles.input}
              icon = 'email'
              autoCapitalize = 'none'
              keyboardType = 'email-address'
              textContentType = 'emailAddress'
              onChangeText = {handleChange("email")}
          />
          <AppText>{errors.email}</AppText>
            <AppTextInput
              placeholder = 'Password'
              style = {styles.input}
              icon = 'lock'
              autoCapitalize = 'none'
              secureTextEntry = {true}
              textContentType = 'password'
              onChangeText = {handleChange("password")}
            />
            <AppButton style = {styles.button} title= 'Login' onPress={handleSubmit}/>
            </>
            )}
          </Formik>
          </View>
      </AppView>
    </AppView>
  );
}
const styles = StyleSheet.create({
  textcontainer: {
    width: '100%',
    height: '20%',
    backgroundColor: AppColor.black,
},
title: {
  fontSize: 40,
  textAlign: 'left',
  fontWeight: 'bold',
  color: AppColor.white,
},
input: {
  fontSize: 20,
},
forms: {
  marginTop:'25%',
  width: '100%',
  height: '50%',
  justifyContent: 'space-around',
  backgroundColor: AppColor.primaryColor,
},
button: {
  marginTop: '25%',
  marginBottom: '10%',
}
})
export default LoginScreen;