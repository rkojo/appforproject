import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import AccountScreen from '../Screens/AccountScreen';
import LoginScreen from '../Screens/LoginScreen';
import RegisterScreen from '../Screens/RegisterScreen';
import WelcomeScreen from '../Screens/WelcomeScreen';
import InformationScreen from '../Screens/InformationScreen';
import MemoriesScreen from '../Screens/MemoriesScreen'
import AccountNavigation from './AccountNavigation';
import TabNavigation from './TabNavigation';
import RegisterImage from '../Screens/RegisterImage';
const AppStack = createStackNavigator();

//used at the start of the page
const HomeNavigation = () => (
  <AppStack.Navigator>
    <AppStack.Screen name = 'Welcome' component={WelcomeScreen} options={{ headerShown: false }} />
    <AppStack.Screen name = 'Login' component = {LoginScreen} />
    <AppStack.Screen name = 'Register' component = {RegisterScreen}/>
    <AppStack.Screen name = "RegImage" component={RegisterImage}/>
    <AppStack.Screen name = 'Home' component={TabNavigation} options={{ headerShown: false }}/>
  </AppStack.Navigator>
)
export default HomeNavigation;