import React from 'react';
import {StyleSheet, View, Text  } from 'react-native';
import AppCard from '../Components/AppCard';
import AppColor from '../Components/AppColor';
import AppIcon from '../Components/AppIcon';
import AppListItem from '../Components/AppListItem';
import AppView from '../Components/AppView';
import { useNavigation } from '@react-navigation/native';
import AppData from '../Settings/AppData';
import AppText from '../Components/AppText';
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
            <View style = {styles.textcontainer}>
      {/* <Text style = {styles.title}>Hello</Text>
      <Text style = {styles.title}>User!</Text> */}
      </View>
      <AppCard image ={currentUser.image} title = {currentUser.name}/>
      <View style = {styles.profileContainer}>
        <AppListItem title = "Memories" IconComponent ={<AppIcon name = "book-open-variant" color = {AppColor.white} size = {30}/>}  onPress = {() => navigation.navigate('Memories', {message: id})}/>
        <AppListItem title = "Add Memory" IconComponent ={<AppIcon name = 'image-plus' color = {AppColor.white} size = {30}/>} onPress = {() => navigation.navigate('add', {message: id})}/>
        <AppListItem title = "Logout" IconComponent ={<AppIcon name = "logout" color = {AppColor.white} size = {30}/>} onPress = {() => navigation.reset({index: 0, routes: [{name: 'Logout'}]})}/>
      </View>
    
    </AppView>
  );
}
const styles = StyleSheet.create({
  container: {

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