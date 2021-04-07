
import React,{ Component } from 'react';
import { NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './src/pages/Login';
import Cities from './src/pages/Cities';
import SignUp from './src/pages/SignUp';
const Stack=createStackNavigator();
 function App(){
   return(
<NavigationContainer>
  <Stack.Navigator initialRouteName="Cities">
  <Stack.Screen name="Cities" component={Cities}/>
 
  </Stack.Navigator>
</NavigationContainer>
   );
 }
export default App;
