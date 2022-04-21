import React from 'react';
import {View, StyleSheet, Text, Alert } from 'react-native';
import AppColor from '../Components/AppColor';
import AppText from '../Components/AppText';
import AppTextInput from '../Components/AppTextInput';
import AppView from '../Components/AppView';
import * as Yup from 'yup';
import {Formik} from 'formik';
import AppButton from '../Components/AppButton';
import users from '../Settings/AppData';
import currentUser from '../Settings/User';

const schema = Yup.object().shape(
  {
    email: Yup.string().required().email("Must be a valid email"),
    password: Yup.string().required("Password required"),
  }
)

//used to find if the details are true
const validate = (email, password) => {
  let id = users.getID(email)
  if(id >= 0) {
  console.log(id +"  " +  users.getLength());
  if(users.getUserPassword(id) == password) {
    return true;
  } else {
    return false;
  }
} else {
  return 'error';
}
  
} 
//used to send id to account screen.
const find = (email) => {
  let value =  users.getID(email);
  if(value >= 0) {
    return value
  } else {
    return "Error"
  }
}

function LoginScreen({navigation}) {
  return (
    <AppView>
      <AppView>
      {/** Title*/}
      <View style = {styles.textcontainer}>
      <Text style = {styles.title}>Login for</Text>
      <Text style = {styles.title}>your memories!</Text>
      </View>
      <View style = {styles.forms}>
        {/** formik to use*/}
      <Formik 
        initialValues={{email:' ', password: ' ',}}
        onSubmit = {values => {
                console.log("Pre = " +values.email);
                if(validate(values.email, values.password)) {
                  //if password is the same, it updates the current user and then navigates. current user is static until logged in or registered again. 
                  let userID = users.getID(values.email);
                  currentUser.updateall(userID,values.email, users.getName(userID),users.getImage(userID)),
                  navigation.navigate("Home", { 
                    screen: 'Account',
                    params: {
                        screen: 'Main',
                        params: {
                          //sends id (incase currentuser has problems)
                            message: find(values.email),
                        }
                    }
                }); 
            } else {
              Alert.alert("Error", "Wrong Username or password");
          }
        }
      }
        validationSchema = {schema}
        >
                {({handleChange, handleSubmit, errors}) => (
        <>
        {/**input for email and passwords */}
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
    marginTop: 50,
},
title: {
  fontSize: 40,
  textAlign: 'left',
  fontWeight: 'bold',
  color: AppColor.secondaryColor,
},
input: {
  fontSize: 20,
},
forms: {
  marginTop:'10%',
  width: '100%',
  height: '70%',
  justifyContent: 'space-evenly',
},
button: {
  marginTop: '5%',
  marginBottom: '20%',
}
})
export default LoginScreen;