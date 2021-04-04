import React,{ Component } from 'react';
import { NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './src/pages/Login';
import SignUp from './src/pages/SignUp';
import {Provider} from "react-redux";
import store from "./src/config/store";
const Stack=createStackNavigator();
 function App(){
   return(
     <Provider store={store}>    
<NavigationContainer>
  <Stack.Navigator  initialRouteName="Login"
  screenOptions={{headerShown: false}}
>
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="SignUp" component={SignUp}/>
  </Stack.Navigator>
</NavigationContainer>
</Provider>
   );
 }
export default App;