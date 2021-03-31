import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import AppStack from './app/routes/AppStack'


export default function App() {
  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  );
}
