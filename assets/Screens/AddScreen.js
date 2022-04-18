import React from 'react';
import {StyleSheet, View, Image  } from 'react-native';
import AppButton from '../Components/AppButton';
import AppColor from '../Components/AppColor';
import AppTextInput from '../Components/AppTextInput';
import AppView from '../Components/AppView';
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';
import users from '../Settings/AppData';
import { NavigationContainer } from '@react-navigation/native';
import currentUser from '../Settings/User';
  
function AddScreen({route, navigation}) {
  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
  
    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }
  
    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    if (pickerResult.cancelled === true) {
      return;
    }
    setImage({path: pickerResult.uri});
  
    console.log(pickerResult);
  }

  const addmemory = (photo, id, name) => {
    users.addMemory(photo, id, name);
  }

  const returnBack = (name) => {
    navigation.navigate("Main", {message: name})
  }

  const [inputtext, setinputtext] = useState("");
  const [image, setImage] = useState(null);
  
  return (
    <AppView style = {styles.appview}>
      <View style = {styles.view}>
        <AppTextInput
          placeholder = "Image Name"
          style = {styles.input}
          icon = 'image'
          onChangeText = {(inputText) => setinputtext(inputText)}
          /> 
          <AppButton style = {styles.imagebutton} title ="select memory" onPress = {openImagePickerAsync} ></AppButton>
          {image && <Image source = {{uri: image.path}} style = {{height:100, width: 100}}/>}
        <AppButton style = {styles.modalbutton} title = "submit" onPress={() => {addmemory(image.path, currentUser.id, inputtext); returnBack(currentUser.id)}}/> 
        </View>
    </AppView>
  );
}

const styles = StyleSheet.create({
  appview: {
    backgroundColor: AppColor.fourthColor,
  },
  view: {
    flex: 1,
    justifyContent: 'space-around',
    marginTop: 50,
    backgroundColor: AppColor.fifthColor
  },
  input: {
      // marginTop: 30,
      // marginBottom: 30,
      // width: '100%',
      // height: 20,
  },
  imagebutton: {
    marginTop: 50,
    marginBottom: 50,
  },
  modalbutton: {
    marginTop: 50,
    marginBottom: 50,
  },

})

export default AddScreen;