import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import LoginScreen from '../Screens/LoginScreen';
import RegisterScreen from '../Screens/RegisterScreen';
import WelcomeScreen from '../Screens/WelcomeScreen';
import TabNavigation from './TabNavigation';
import RegisterImage from '../Screens/RegisterImage';
const AppStack = createStackNavigator();

//used at the start of the page
const HomeNavigation = () => (
  <AppStack.Navigator>
    <AppStack.Screen name = 'Welcome' component={WelcomeScreen} options={{ headerShown: false }} />
    <AppStack.Screen name = 'Login' component = {LoginScreen} options={{ headerShown: false }}/>
    <AppStack.Screen name = 'Register' component = {RegisterScreen} options={{ headerShown: false }}/>
    <AppStack.Screen name = "RegImage" component={RegisterImage} options={{ headerShown: false }}/>
    <AppStack.Screen name = 'Home' component={TabNavigation} options={{ headerShown: false }}/>
  </AppStack.Navigator>
)
export default HomeNavigation;