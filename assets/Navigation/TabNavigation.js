import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MemoriesScreen from '../Screens/MemoriesScreen'
import AccountNavigation from './AccountNavigation';
import AddScreen from '../Screens/AddScreen';
import currentUser from '../Settings/User';
import AppIcon from '../Components/AppIcon';

const AppTab = createBottomTabNavigator();


const TabNavigation = () => (
  <AppTab.Navigator>
    <AppTab.Screen name = 'Account' component={AccountNavigation}  options={{tabBarIcon: () => <AppIcon size={20} height ={30} width = {30}  name='home'/>, headerShown: false }}/>
    <AppTab.Screen name = 'Memories' component = {MemoriesScreen} initialParams= {{message: currentUser.showUser()}} options={{tabBarIcon: () => <AppIcon size={20} height ={30} width = {30} name='image'/>, headerShown: false }}/>
    <AppTab.Screen name = 'Addscreen' component = {AddScreen} initialParams= {{message: currentUser.showUser()}} options={{tabBarIcon: () => <AppIcon size={20} height ={30} width = {30}  name='image-plus'/>, headerShown: false }}/>
  </AppTab.Navigator>
)
export default TabNavigation;