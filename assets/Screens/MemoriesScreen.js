import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { View, FlatList, Text, StyleSheet, Image, TouchableHighlight, Alert, Button, Modal, TouchableOpacity } from 'react-native';
import { Dimensions } from 'react-native';
import { useState } from 'react';
import AppColor from '../Components/AppColor';
import AppView from '../Components/AppView';
import users from '../Settings/AppData';
import { get, getPixelSizeForLayoutSize } from 'react-native/Libraries/Utilities/PixelRatio';
import AppButton from '../Components/AppButton';
import AppTextInput from '../Components/AppTextInput';
import * as ImagePicker from 'expo-image-picker';
import currentUser from '../Settings/User';

const getMemory = (id) => {
  return users.getMemory(id);
}

function MemoriesScreen({navigation, route}) {
  
  const deleteAsk = (id) => {
    Alert.alert('Delete?', 'Are you sure you want to delete this memory? (This cannot be reverted)', 
    [{text: 'No',},{text: 'Yes', onPress: () => deleteProper(id)}], {cancelable: true,});
    console.log(id);
  }

  const [list, setList] = useState(getMemory(currentUser.showUser()));
  const[refreshing, setRefreshing] = useState(false);

  const deleteProper = (id) => {
    //setList();
    let changelist = users.deleteMemory(id);
    setList(changelist);
    //setRefreshing(true);
    console.log(list);

  }

  const getMem = () => {
    //setRefreshing(true);
    return users.getMemory(currentUser.id);
  }
  
  return (
    

    <AppView>
      <FlatList
      style = {styles.list}
      numColumns={3}
      data = {list}
      keyExtractor = {list => list.id.toString()}
      renderItem = {({item}) => (
        <TouchableHighlight onPress ={() => navigation.navigate('info', {id: item.id, name:item.name, image: item.image, user: item.userid})} underlayColor = {AppColor.secondaryColor}
        onLongPress= {() => deleteAsk(item.id)}>
        <View style = {styles.listView}>
        {isFinite(item.image)? <Image style= {styles.images} source = {item.image}/> :<Image style= {styles.images} source = {{uri: item.image}}/>}
        <Text>{item.name}</Text>
        </View>
        </TouchableHighlight>
      )}
      extraData ={list}
      refreshing = {refreshing}
      onRefresh = {() => setList(getMem())}
      />
      </AppView>
  );
}
const styles = StyleSheet.create({
  list: {
    // width: '100%',
    // height: '100%',
    flex: 1,
  },
  images: {
    width: (Dimensions.get('window').width/3)-9,
    height: Dimensions.get('window').height/5,
    margin: 3,
  },
  listView: {
    // width: '30%',
    // maxHeight: '10%',
    // backgroundColor: AppColor.fifthColor,
  }
})

export default MemoriesScreen;