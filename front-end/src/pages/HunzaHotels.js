import React , {useState,useEffect} from 'react';
import { Text } from 'react-native';
import { StyleSheet,View,FlatList } from 'react-native';
import {gethunzahotels} from '../consts/hunzahotels';
import  ListItem from '../consts/ListItem';
export  default function HunzaHotels({navigation}) {
    const [hunzaHotel,setHunzaHotel]=useState(null)
    useEffect(()=>{
        const unsubscribe =getData() ;
        return unsubscribe
    },[])
    function  getData() {
        gethunzahotels(hunzaHotelRetrived)
    }
    function hunzaHotelRetrived(hunzaHotel) {
        setHunzaHotel(hunzaHotel)
    }
   return(
    <View>  
    <Text style={styles.text}>Hunza</Text>
       <View style={styles.content}>
       </View>
       <FlatList  style={styles.flatList}
data={hunzaHotel}
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
        paddingTop:10,
        backgroundColor:'#fff'
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