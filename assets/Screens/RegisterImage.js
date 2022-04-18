import * as ImagePicker from 'expo-image-picker';
import React from 'react';
import {Image, Text, StyleSheet  } from 'react-native';
import { useState } from 'react';
import users from '../Settings/AppData';
import currentUser from '../Settings/User';
import AppView from '../Components/AppView';
import AppButton from '../Components/AppButton';



function RegisterImage({route, navigation}) {
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

  const [image, setImage] = useState(null);

  const updateImage = (image) => {
    currentUser.updateImage(image);
  }
  const  updateall = (name, email, image, password) => {
    currentUser.updateall(users.getLength(), email, name, image);
    users.addUser(name, email, password, image);
  }
  
  return (
    <AppView>
            <AppButton style = {styles.imagebutton} title ="select memory" onPress = {openImagePickerAsync} ></AppButton>
             {image && <Image source = {{uri: image.path}} style = {{height:100, width: 100}}/>}
             <AppButton style = {styles.nextbutton} title = 'Next' onPress={() => {updateall(route.params.name, route.params.email, image.path, route.params.password), navigation.navigate('Home', {
                screen: 'Account',
                params: {
                    screen: 'Main',
                    params: {
                        message: (route.params.message),
                    }
                }
            })}} />
    </AppView>
  );
}

const styles = StyleSheet.create({
  
})

export default RegisterImage;