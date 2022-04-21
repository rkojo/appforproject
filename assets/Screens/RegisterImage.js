import * as ImagePicker from 'expo-image-picker';
import React from 'react';
import {Image, Text, StyleSheet, View, TouchableOpacity  } from 'react-native';
import { useState } from 'react';
import users from '../Settings/AppData';
import currentUser from '../Settings/User';
import AppView from '../Components/AppView';
import AppButton from '../Components/AppButton';
import AppColor from '../Components/AppColor';
import AppIcon from '../Components/AppIcon';



function RegisterImage({route, navigation}) {
  // image picker from https://docs.expo.dev/tutorial/image-picker/
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

  const [image, setImage] = useState(require('../images/user.bmp'));

  //updates current user and adds user to array
  const  updateall = (name, email, image, password) => {
    currentUser.updateall(users.getLength(), email, name, image);
    users.addUser(name, email, password, image);
  }

  
  return (
    <AppView>
      <View style = {styles.titlecontainer}>
        <Text style = {styles.title}>One more Step!</Text>
        <Text style = {styles.title}>Add a profile picture!</Text>
      </View>
      <View>
            <TouchableOpacity style = {styles.imagebutton} title ="select memory" onPress = {openImagePickerAsync} >
              <AppIcon style={styles.button} name = 'camera' width={120} height={120}  size= {80} color = {AppColor.thirdColor} />
            </TouchableOpacity>
            {/** shows if the image is there (once it has been selected) */}
             {image && <Image source = {{uri: image.path}} style = {{height:100, width: 100}}/>}
             {/**updates the person */}
             <AppButton style = {styles.nextbutton} title = 'Next' onPress={() => {updateall(route.params.name, route.params.email, image.path, route.params.password), navigation.navigate('Home', {
                screen: 'Account',
                params: {
                    screen: 'Main',
                    params: {
                        message: (route.params.message),
                    }
                }
            })}} />
        </View>
    </AppView>
  );
}

const styles = StyleSheet.create({
  titlecontainer: {
    marginTop: 0,
    marginBottom: 50,
  },
  title: {
    fontSize: 40,
    textAlign: 'left',
    fontWeight: 'bold',
    color: AppColor.secondaryColor
  },
  button: {
    marginLeft: '33%',
  },
  imagebutton: {
    justifyContent: 'center',
    marginBottom: 80,
    marginTop: '20%'
  },

})

export default RegisterImage;