import React from 'react';
import { View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import RootStackScreen from './screens/RootStackScreen';
const Stack = createStackNavigator();

const App = () =>{
  return(
   <NavigationContainer>
     <RootStackScreen />
     
   </NavigationContainer>
  )
};


 export default App;