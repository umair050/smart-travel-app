import React,{ Component } from 'react';
import { NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import * as firebase from 'firebase';
import {firebaseConfig} from './config';
if (firebase.apps.length===0){
firebase.initializeApp(firebaseConfig);
}
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
import NaranHotels from './src/pages/NaranHotels';
import NaranHospitals from './src/pages/NaranHospitals';
import HunzaHotels from './src/pages/HunzaHotels';
import HunzaHospitals from './src/pages/HunzaHospitals';
import PeshawarHotels from './src/pages/PeshawarHotels';
import PeshawarHospitals from './src/pages/PeshawarHospitals';
import LahoreHotels from './src/pages/LahoreHotels';
import LahoreHospitals from './src/pages/LahoreHospitals';
import weather from './src/pages/weather';
import hotelsScreen from './src/pages/hotelsScreen';
import currencyconvertor from './src/pages/currencyconvertor';
import updateprofile from './src/pages/updateprofile';
const Stack = createStackNavigator();
const   App=()=>{
   return(
     <Provider store={store}>    
<NavigationContainer>
  <Stack.Navigator  
  screenOptions={{headerShown: false}}>
   <Stack.Screen name="Login" component={Login} />
   <Stack.Screen name="Cities" component={Cities} />
   <Stack.Screen name="mapScreen" component={mapScreen}/>
   <Stack.Screen name="ChooseLocation" component={ChooseLocation}/>
   <Stack.Screen name="DetailScreen" component={DetailScreen} />
   <Stack.Screen name="hospitalScreen" component={hospitalScreen} />
   <Stack.Screen name="NaranHotels" component={NaranHotels} />
   <Stack.Screen name="NaranHospitals" component={NaranHospitals} />
   <Stack.Screen name="HunzaHotels" component={HunzaHotels} />
   <Stack.Screen name="HunzaHospitals" component={HunzaHospitals} />
   <Stack.Screen name="PeshawarHotels" component={PeshawarHotels} />
   <Stack.Screen name="PeshawarHospitals" component={PeshawarHospitals} />
   <Stack.Screen name="LahoreHotels" component={LahoreHotels} />
   <Stack.Screen name="LahoreHospitals" component={LahoreHospitals} />
   <Stack.Screen name="weather" component={weather} />
   <Stack.Screen name="hotelsScreen" component={hotelsScreen} />
   <Stack.Screen name="currencyconvertor" component={currencyconvertor} />
   <Stack.Screen name="updateprofile" component={updateprofile} />
   <Stack.Screen name="profile" component={profile} />
    <Stack.Screen name="SignUp" component={SignUp}/> 
  </Stack.Navigator>
</NavigationContainer>
</Provider>
   );  
 }
export default App;  



