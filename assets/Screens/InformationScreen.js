import React, {useState} from 'react';
import {View, FlatList, Text, StyleSheet, Image, Modal, Button } from 'react-native';
import AppView from '../Components/AppView';
import AppTextInput from '../Components/AppTextInput';
import users from '../Settings/AppData';
import AppButton from '../Components/AppButton';
import AppColor from '../Components/AppColor';


const editMemory = (id, name) => {
  users.editMemname(id, name);
}


function InformationScreen({route}) {
  const [modalVisible, setModalVisible] = useState(false);
  const [inputtext, setinputtext] = useState("");  
  return (
    <>
    
    <AppView>
      <Button title='edit' onPress={() =>   setModalVisible(true)} style = {styles.button}/>
      {isFinite(route.params.image)? <Image style = {styles.image} source = {route.params.image}></Image> : <Image style = {styles.image} source = {{uri: route.params.image}}></Image>}
      <Text>Name:  {route.params.name}</Text>
      <Text>id: {route.params.id}</Text>
    </AppView>
          <Modal visible = {modalVisible} animationType = 'slide'>
          <Button title='close' onPress={() =>   setModalVisible(false)} style = {styles.button}/>
          <View style = {styles.modalView}>
            <Text>Change the name of memory</Text> 
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


  }
})

export default InformationScreen;