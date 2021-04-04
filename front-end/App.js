
import React,{ Component } from 'react';
import { NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './src/pages/Login';
import SignUp from './src/pages/SignUp';
const Stack=createStackNavigator();
 function App(){
   return(
<NavigationContainer>
  <Stack.Navigator initialRouteName="Login">
    <Stack.Screen name="Login" component={Login}/>
    <Stack.Screen name="SignUp" component={SignUp}/>
  </Stack.Navigator>
</NavigationContainer>
   );
 }
export default App;
