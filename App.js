import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import HomeNavigation from './assets/Navigation/HomeNavigation';

export default function App() {
  return (
    <NavigationContainer>
      <HomeNavigation/>
    </NavigationContainer>

  );
}
