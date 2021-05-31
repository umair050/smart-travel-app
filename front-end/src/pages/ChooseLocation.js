import React, { Component, useState} from 'react';
import{ View,StyleSheet,Text,ScrollView} from 'react-native';
import Addresspickup from '../consts/Addresspickup';
import {useNavigation} from '@react-navigation/native';
import Custombtn from '../consts/Custombtn';
const ChooseLocation =(props)=>{
    const navigation=useNavigation()
    const [state,setState]=useState({
        pickupCord:{}, 
        destinationCord:{}
    })
    const  {pickupCord, destinationCord} = state
    const onDone=()=>{
        props.route.params.getCordinates({
            pickupCord,
            destinationCord
        })
        navigation.goBack()
    }
    const fetchAddressCord=(lat,lng) => {
        setState({
            ...state, pickupCord:{
                lattitude:lat,
                longitude:lng
            }
        })
    }
    const fetchdestinationCord=(lat,lng) => {
        setState({
            ...state,destinationCord:{
                lattitude:lat,
                longitude:lng
            }
        })
    }
    console.log("props==>>>",props)
    //console.log("pickup cord===>>>",pickupCord)
    //console.log("pickup cord===>>>",destinationCord)
    return(
     <View style={styles.container}>
     <ScrollView
     keyboardShouldPersistTaps='always'
      style={{backgroundColor:'#fff', flex:1,padding:34}}>
     <Text style={{fontSize:25,fontWeight:'bold'}}>Search here</Text>
     <Addresspickup
         placeholderText="Enter starting location"
         fetchAddress={fetchAddressCord}
     />
     <View style={{marginBottom:16}}/>
     <Addresspickup
         placeholderText="Enter your destination location"
         fetchAddress={fetchdestinationCord}
     />
     <Custombtn
         btnText="Done"
         btnStyle={{ marginTop:24 }}
         onPress={onDone}
     />
      </ScrollView>
     </View>   
    );
}
export default ChooseLocation;
const styles=StyleSheet.create({
    container:{
        flex:1, 
    },
});
