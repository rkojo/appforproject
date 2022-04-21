import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import AccountScreen from '../Screens/AccountScreen';
import InformationScreen from '../Screens/InformationScreen';
import MemoriesScreen from '../Screens/MemoriesScreen'
import HomeNavigation from './HomeNavigation';
import AddScreen from '../Screens/AddScreen';

const AppStack = createStackNavigator();


const AccountNavigation = () => (
  <AppStack.Navigator>
    <AppStack.Screen name = 'Main' component={AccountScreen} options={{ headerShown: false }}/>
    <AppStack.Screen name = 'Logout' component={HomeNavigation} options={{ headerShown: false }} />
    <AppStack.Screen name = 'Memories' component = {MemoriesScreen} options={{ headerShown: false, headerBackVisible: true, }}/>
    <AppStack.Screen name = 'info' component={InformationScreen} options={{ headerShown: false, headerBackVisible: true, }}/>
    <AppStack.Screen name = 'add' component={AddScreen} options={{ headerShown: false, headerBackVisible: true, }}/>
  </AppStack.Navigator>
)
export default AccountNavigation;