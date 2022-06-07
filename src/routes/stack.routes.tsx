import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '../screens/Home';
import { Details } from '../screens/Details';

const { Navigator, Screen } = createNativeStackNavigator();

export function StackRoutes() {
  return (
    <Navigator screenOptions={{headerShown: false}} initialRouteName="Home">
      <Screen 
        name='Home'
        component={Home}
      />
      <Screen 
        name='Details'
        component={Details}
      />
    </Navigator>
  )
}