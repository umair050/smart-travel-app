import React from 'react'
import {StyleSheet,View} from 'react-native';
import {createStackNavigator} from 'react-navigation-stack'
import{createAppContainer} from "react-navigation";
 const mystack=createStackNavigator({
  home:mystack   
},{
  defaultNavigationOptions:{
    title:'travel guide',
    headerStyle:{
      backgroundColor:'#047a6c',
    },
    headerTintColor:'#fff',
    headerTitleStyle:{
      fontWeight:'bold'
    },
    
  }
})
 export default createAppContainer(mystack);
 const styles=StyleSheet.create({
   container:{
     flex:1,
     backgroundColor:'#f9f9f9',
   },
 })