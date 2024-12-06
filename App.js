import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import ToDoScreen from './screens/ToDoScreen';

export default function App() {
  return (
    <NavigationContainer>
      <ToDoScreen />
    </NavigationContainer>
  );
}
