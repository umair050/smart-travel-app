
import React from 'react';
import {LinearGradient} from "expo-linear-gradient";
import {View,StyleSheet,Image, TouchableOpacity} from "react-native";
import { Title,Text,Card } from 'react-native-paper';
import {MaterialCommunityIcons,Entypo } from '@expo/vector-icons';
const profile=({navigation})=>{
   
    return (
        <View style={styles.root}>
<LinearGradient
    colors={["#fff","#04555c"]}
    style={{height:"20%"}}
/>
<View style={{alignItems:"center"}}>
<Image 
style={{width:110,height:110,borderRadius:140/2,marginTop:-60}}
source={{uri:"https://images.unsplash.com/photo-1549492423-400259a2e574?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=277&q=80"}}/>
</View>
<View style={{alignItems:"center",margin:5}}>
<Title>profile</Title>
<Text style={{fontSize:18}}> coder profile</Text>
</View>
<TouchableOpacity onPress={()=>navigation.navigate('Cities')}>
<Card style={styles.mycard}>
    <View style={styles.cardcontent}>
    <Entypo name="home" size={32} color="#04555c"/>
    <Text style={styles.mytext}>Home</Text>
    </View>
</Card>
</TouchableOpacity>
<TouchableOpacity onPress={()=>navigation.navigate('weather')}>
<Card style={styles.mycard}>
    <View style={styles.cardcontent}>
    <MaterialCommunityIcons name="weather-cloudy" size={32} color="#04555c"/>
    <Text style={styles.mytext}>weather</Text>
    </View>
</Card>
</TouchableOpacity>
<TouchableOpacity onPress={()=>navigation.navigate('Login')}>
<Card style={styles.mycard}>
    <View style={styles.cardcontent}>
    <MaterialCommunityIcons name="clock" size={32} color="#04555c"/>
    <Text style={styles.mytext}>world clock</Text>
    </View>
</Card>
</TouchableOpacity>
<TouchableOpacity onPress={()=>navigation.navigate('Login')}>
<Card style={styles.mycard}>
    <View style={styles.cardcontent}>
    <Entypo name="log-out" size={32} color="#04555c"/>
    <Text style={styles.mytext}>Log-out</Text>
    </View>    
</Card>
</TouchableOpacity>
        </View>  
    );
}
const styles=StyleSheet.create({
    root:{
        flex:1
    },
    mycard:{
        marginBottom:3,
    },
    cardcontent:{
        flexDirection:"row",
        padding:8
    },
    mytext:{
        fontSize:18,
        marginTop:3,
        marginLeft:5
    }
})
export default profile;

