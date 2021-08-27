import React , {useState,useEffect} from 'react';
import { Text } from 'react-native';
import { StyleSheet,View,FlatList } from 'react-native';
import {getlahorehotels} from '../consts/lahorehotels';
import  ListItem from '../consts/ListItem';
export  default function LahoreHotels({navigation}) {
    const [lahoreHotel,setLahoreHotel]=useState(null)
    useEffect(()=>{
        const unsubscribe =getData() ;
        return unsubscribe
    },[])
    function  getData() {
        getlahorehotels(lahoreHotelRetrived)
    }
    function lahoreHotelRetrived(lahoreHotel) {
        setLahoreHotel(lahoreHotel)
    }
   return(
    <View>  
    <Text style={styles.text}>Lahore</Text>
       <View style={styles.content}>
       </View>
       <FlatList  style={styles.flatList}
data={lahoreHotel}
keyExtractor={(item)=>item.id}
renderItem={({item}) =>
<ListItem item={item}
/>}

/>
</View>
   ) 
}
const styles=StyleSheet.create({
    flatList:{
        backgroundColor:'#04555c',
        height:'100%',
        paddingTop:10,
        paddingBottom:10,
        paddingLeft:20,
        paddingRight:20,
        marginBottom:40,
        borderRadius:20,
        borderWidth:2,
        margin:5
    },
    content:{
        backgroundColor:'#fff',
        paddingBottom:0
    },
    text:{
        padding:30,
        backgroundColor:'#04555c',
        fontSize:20,
        justifyContent:'center',
        color:'#fff',
        fontWeight:'bold',
    }
})