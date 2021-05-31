import React, { Component} from 'react';
import{ View,StyleSheet,Text} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
const Addresspickup =({placeholderText,fetchAddress})=>{
    const GOOGLE_MAPS_APIKEY ='AIzaSyAjL_doMA-BBX1S-Lx_BJXrPAjQCFh3UrM';
    const onPressAddress =(data,details)=>{
        //console.log("details===>>>",details)
      const lat = details.geometry.location.lat
        const lng = details.geometry.location.lng
        fetchAddress(lat,lng) 
    }
    return(
     <View style={styles.container}>
      <GooglePlacesAutocomplete
          placeholder={placeholderText}
          onPress={onPressAddress} 
          fetchDetails={true}
          query={{
              key:GOOGLE_MAPS_APIKEY,
              language:'en',
          }}
          styles={{
              textInputContainer:styles.containerStyle,
              textInput:styles.textInputStyle
          }}
      />
     </View>   
    );
}
export default Addresspickup;
const styles=StyleSheet.create({
    container:{
        flex:1,   
    },
    containerStyle:{
        backgroundColor:'#fff'
    },
    textInputStyle:{
        height:48,
        color:'#000',
        fontSize:16,
        backgroundColor:'#F3F3F3'
    }
});
