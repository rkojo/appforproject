import React from 'react';
import {StyleSheet, View, Text, Image  } from 'react-native';
import AppText from '../Components/AppText';
import AppTextInput from '../Components/AppTextInput';
import {Formik} from 'formik';
import AppView from '../Components/AppView';
import AppButton from '../Components/AppButton';
import AppColor from '../Components/AppColor';
import * as Yup from 'yup';
import AppData from '../Settings/AppData';
import HomeNavigation from '../Navigation/HomeNavigation'
import { NavigationContainer } from '@react-navigation/native';
import users from '../Settings/AppData';
import currentUser from '../Settings/User';
//schema for yup
const schema = Yup.object().shape(
  {
    email: Yup.string().required().email("Must be a valid email"),
    password: Yup.string().required("Password required").min(6, "Password must be at least 6 values long"),
    name: Yup.string().required("Name is required"),
  }
)


const newRegister = (name, email, password, image)  => {
  users.addUser(name, email, password, image);
  //console.log(data);
}


const getLength = () => {
  return users.getLength();
}

function RegisterScreen({navigation}) {


  return (
    <AppView>
      <View style = {styles.textcontainer}>
      <Text style = {styles.title}>Sign up to see</Text>
      <Text style = {styles.title}>your memories!</Text>
      </View>

      <View style = {styles.forms}>
      <Formik 
        initialValues={{name: ' ', email:' ', password: ' ' }}
        onSubmit = {values => {
          console.log("before"+ values.name + values.email + values.password);
         
            navigation.navigate('RegImage', {
                        message: (getLength()),
                        name: values.name,
                        email: values.email,
                        password: values.password,
            });
          }
      }
        validationSchema = {schema}
        >
                {({handleChange, handleSubmit, errors}) => (
        <>
              <AppTextInput
                placeholder = 'Name'
                style = {styles.input}
                icon = 'account'
                autoCapitalize = 'words'
                onChangeText = {handleChange("name")}
              />
              <AppText>{errors.name}</AppText>
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
            <AppText>{errors.password}</AppText>

            <AppButton title= 'Register' onPress={handleSubmit}/>
            </>
            )}
          </Formik>
          </View>
      </AppView>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
  },
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
    marginTop:'15%',
    width: '100%',
    height: '60%',
    justifyContent: 'space-around',
    backgroundColor: AppColor.primaryColor,
  }
})
export default RegisterScreen;