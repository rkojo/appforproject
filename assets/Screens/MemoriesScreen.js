import React from 'react';
import { View, FlatList, Text, StyleSheet, Image, TouchableHighlight, Alert, Button, Modal, TouchableOpacity } from 'react-native';
import { Dimensions } from 'react-native';
import { useState } from 'react';
import AppColor from '../Components/AppColor';
import AppView from '../Components/AppView';
import users from '../Settings/AppData';
import currentUser from '../Settings/User';

//get initial list based on the user.
const getMemory = (id) => {
  return users.getMemory(id);
}

function MemoriesScreen({navigation, route}) {
  
  //alert function to confirm deletion, if yes, it moves to deleteproper
  const deleteAsk = (id) => {
    Alert.alert('Delete?', 'Are you sure you want to delete this memory? (This cannot be reverted)', 
    [{text: 'No',},{text: 'Yes', onPress: () => deleteProper(id)}], {cancelable: true,});
  }

  const [list, setList] = useState(getMemory(currentUser.showUser()));
  const[refreshing, setRefreshing] = useState(false);

  //function to delete
  const deleteProper = (id) => {
    let changelist = users.deleteMemory(id);
    setList(changelist);
  }
//refresh for flatlist
  const getMem = () => {
    //setRefreshing(true);
    return users.getMemory(currentUser.id);
  }
  
  return (
    

    <AppView>
      {/** flatlist showing the pictures*/}
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
    //allows images to be shown 3 in a row and 5 columns. 9 used for border.
    width: (Dimensions.get('window').width/3)-9,
    height: Dimensions.get('window').height/5,
    margin: 3,
  },
  listView: {
  }
})

export default MemoriesScreen;