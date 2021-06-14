import React,{ Component } from 'react';
import { NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './src/pages/Login';
import Cities from './src/pages/Cities';
import mapScreen from './src/pages/mapScreen';
import ChooseLocation from './src/pages/ChooseLocation';
import SignUp from './src/pages/SignUp';
import profile from './src/pages/profile';
import {Provider} from "react-redux";
import store from "./src/config/store";
import DetailScreen from './src/pages/DetailScreen';
import hospitalScreen from './src/pages/hospitalScreen';

import weather from './src/pages/weather';
import hotelsScreen from './src/pages/hotelsScreen';
const Stack = createStackNavigator();
const   App=()=>{
   return(
     <Provider store={store}>    
<NavigationContainer>
  <Stack.Navigator  
  screenOptions={{headerShown: false}}>
   <Stack.Screen name="Login" component={Login} />
   <Stack.Screen name="Cities" component={Cities} />
   <Stack.Screen name="profile" component={profile} />
   <Stack.Screen name="mapScreen" component={mapScreen}/>
   <Stack.Screen name="ChooseLocation" component={ChooseLocation}/>
   <Stack.Screen name="DetailScreen" component={DetailScreen} />
   <Stack.Screen name="hospitalScreen" component={hospitalScreen} />
   
   <Stack.Screen name="weather" component={weather} />
   <Stack.Screen name="hotelsScreen" component={hotelsScreen} />
    <Stack.Screen name="SignUp" component={SignUp}/> 
  </Stack.Navigator>
</NavigationContainer>
</Provider>
   );  
 }
export default App;  