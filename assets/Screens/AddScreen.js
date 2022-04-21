import React from 'react';
import {StyleSheet, View, Image, Text, TouchableOpacity  } from 'react-native';
import AppButton from '../Components/AppButton';
import AppColor from '../Components/AppColor';
import AppTextInput from '../Components/AppTextInput';
import AppView from '../Components/AppView';
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';
import users from '../Settings/AppData';
import currentUser from '../Settings/User';
import AppIcon from '../Components/AppIcon';

  
function AddScreen({route, navigation}) {
{/**method to open image - from https://docs.expo.dev/tutorial/image-picker/ */}
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

  {/** add the memory */}
  const addmemory = (photo, id, name) => {
    users.addMemory(photo, id, name);
  }
  {/**return back to account screen */}
  const returnBack = (name) => {
    navigation.navigate("Main", {message: name})
  }

  const [inputtext, setinputtext] = useState("");
  const [image, setImage] = useState(null);
  
  return (
    <AppView style = {styles.appview}>
      <View style = {styles.titleContainer}>
        <Text style = {styles.title}>Add a Memory Here!</Text>
      </View>
      <View style = {styles.view}>
        {/** input to provide name of image, image and button. */}
        <AppTextInput
          placeholder = "Image Name"
          style = {styles.input}
          icon = 'image'
          onChangeText = {(inputText) => setinputtext(inputText)}
          /> 
          <TouchableOpacity style = {styles.imagebutton} title ="select memory" onPress = {openImagePickerAsync} >
           <AppIcon style={styles.button} name = 'camera' width={90} height={90}  size= {60} color = {AppColor.thirdColor} />
          </TouchableOpacity>
          {image && <Image source = {{uri: image.path}} style = {{height:100, width: 100}}/>}
        <AppButton style = {styles.modalbutton} title = "submit" onPress={() => {addmemory(image.path, currentUser.id, inputtext); returnBack(currentUser.id)}}/> 
        </View>
    </AppView>
  );
}

const styles = StyleSheet.create({
  view: {
    justifyContent: 'space-around',
    marginTop: 50,
  },
  titleContainer: {
    marginTop: 40,
  },
  title: {
    fontSize: 40, 
    fontWeight: 'bold',
    textAlign: 'left',
    color: AppColor.black,
  },
  button: {
    marginLeft: '37%',
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