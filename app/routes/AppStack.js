import React from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';

import SignIn from '../screens/SignIn';
import Medication from '../screens/Medication';
import AskVisitor from '../screens/AskVisitor';
import AppNav from './AppNav'

const Stack = createStackNavigator();

export default function AppStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown:false, ...TransitionPresets.SlideFromRightIOS}}>
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="AppNav" component={AppNav} />
      <Stack.Screen name="Medication" component={Medication} />
      <Stack.Screen name="AskVisitor" component={AskVisitor} />
    </Stack.Navigator>
  );
}