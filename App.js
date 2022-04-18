import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import HomeNavigation from './assets/Navigation/HomeNavigation';
import AccountScreen from './assets/Screens/AccountScreen';
import AccountNavigation from './assets/Navigation/AccountNavigation';
import MemoriesScreen from './assets/Screens/MemoriesScreen';
import AddScreen from './assets/Screens/AddScreen';
import TabNavigation from './assets/Navigation/TabNavigation';
export default function App() {
  return (
    <NavigationContainer>
      <HomeNavigation/>
    </NavigationContainer>
    // <NavigationContainer>
    // <AccountNavigation/>
    // </NavigationContainer>
    // <NavigationContainer>
    //   <MemoriesScreen/>
    // </NavigationContainer>
    //<AddScreen/>
  );
}
