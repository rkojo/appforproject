import React from 'react';
import {StyleSheet, View, Text  } from 'react-native';
import AppCard from '../Components/AppCard';
import AppColor from '../Components/AppColor';
import AppIcon from '../Components/AppIcon';
import AppListItem from '../Components/AppListItem';
import AppView from '../Components/AppView';

import users from '../Settings/AppData';
import currentUser from '../Settings/User';


const GetName = (id) => {
  currentUser.update(id);
  return users.getName(id);
}



function AccountScreen({navigation, route}) {
  let id = route.params.message;
  return (
    <AppView>
      {/*used to show current name + profile picture*/}
      <AppCard image ={currentUser.image} title = {currentUser.name} style = {styles.appcard}/>
      {/*list of options available to user. */}
      <View style = {styles.profileContainer}>
        <AppListItem title = "Memories" IconComponent ={<AppIcon name = "book-open-variant" backgroundColor = {AppColor.secondaryColor} color = {AppColor.white} size = {30}/>}  onPress = {() => navigation.navigate('Memories', {message: id})}/>
        <AppListItem title = "Add Memory" IconComponent ={<AppIcon name = 'image-plus' backgroundColor = {AppColor.secondaryColor} color = {AppColor.white} size = {30}/>} onPress = {() => navigation.navigate('add', {message: id})}/>
        <AppListItem title = "Logout" IconComponent ={<AppIcon name = "logout" backgroundColor = {AppColor.secondaryColor} color = {AppColor.white} size = {30}/>} onPress = {() => navigation.reset({index: 0, routes: [{name: 'Logout'}]})}/>
      </View>
    
    </AppView>
  );
}
const styles = StyleSheet.create({
  appcard: {
    marginTop: 0,
  },
  title: {
    fontSize: 30,
  },
  profileContainer: {
    marginTop: 50,
    height:'50%',
    justifyContent: 'space-evenly',
  },
})
export default AccountScreen;