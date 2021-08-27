import React from "react";  
import{View,StyleSheet,Text} from "react-native";  
import {LinearGradient} from "expo-linear-gradient"
export default function Header(props){ 
return(
<LinearGradient colors={[colors.white, colors.green]} start={[-0.5,-0.5]} end={[1,1]}>
    <View style={{ marginHorizontal:20, paddingVertical:35}}>
    <Text style={{fontSize:25 ,color:'#fff',fontWeight:'bold'}}>{props.name}</Text>
    </View>
    </LinearGradient>  
)
    }
 
const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
    },
})

export const colors={
    white: "#fff",
    green:"#04555c"
}