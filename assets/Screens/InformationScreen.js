import React, {useState} from 'react';
import {View, FlatList, Text, StyleSheet, Image, Modal, Button, Alert } from 'react-native';
import AppView from '../Components/AppView';
import AppTextInput from '../Components/AppTextInput';
import users from '../Settings/AppData';
import AppButton from '../Components/AppButton';
import AppColor from '../Components/AppColor';

{/**allow the user to edit details of the memory. If they want to change the photo, they can delete and add again. */}
const editMemory = (id, name) => {
  users.editMemname(id, name);
  Alert.alert('Change Complete!', "Your memory has been changed", [{text: 'OK'}], {cancelable: true,} )
}


function InformationScreen({route}) {
  const [modalVisible, setModalVisible] = useState(false);
  const [inputtext, setinputtext] = useState("");  
  return (
    <>
    {/** shows the image once opened in memoriesScreen, opens a modal if the user wants to edit */}
    <AppView>
      <Button title='edit' onPress={() =>   setModalVisible(true)} style = {styles.button}/>
      {isFinite(route.params.image)? <Image style = {styles.image} source = {route.params.image}></Image> : <Image style = {styles.image} source = {{uri: route.params.image}}></Image>}
      <Text style = {styles.text}>Name:  {route.params.name}</Text>
      <Text style = {styles.text}>id: {route.params.id}</Text>
    </AppView>
          <Modal visible = {modalVisible} animationType = 'slide'>
          <Button title='close' onPress={() =>   setModalVisible(false)} style = {styles.button}/>
          <View style = {styles.modalView}>
            <Text styles = {styles.moadaltext}>Change the name of memory</Text> 
            <AppTextInput placeholder = {route.params.name} 
                          style = {styles.input} 
                          icon = 'image' 
                          onChangeText = {(inputText) => setinputtext(inputText)}/>
            <AppButton style = {styles.modalbutton} title = "submit" onPress={() => editMemory(route.params.id, inputtext)} />
            </View>
          </Modal>
    </>
  );
}
const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '50%',
  },
  button: {
    right: 20,
    height: 10,
    width: 12,
    color: AppColor.fourthColor,
  },
  modalView: {
    marginTop: 100,
  },
  text: {
    fontSize: 25,
  },
  input: {
    marginTop: 5,
  },
  modalbutton: {
    marginTop: 20,
  },
  moadaltext: {
    fontSize: 20,
  }
})

export default InformationScreen;