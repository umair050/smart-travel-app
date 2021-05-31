import React, { Component, useState,useRef } from 'react';
import {Text,Dimensions,View,StyleSheet,TextInput,TouchableOpacity} from 'react-native';
import MapView ,{Marker} from 'react-native-maps';
const screen=Dimensions.get('window');
const ASPECT_RATIO=screen.width/screen.height;
const LATITUDE_DELTA= 0.0922;
const LONGITUDE_DELTA=LATITUDE_DELTA+ASPECT_RATIO
import MapViewDirections from 'react-native-maps-directions';
import imagePath from '../consts/imagePath';
import { LogBox } from 'react-native';
LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);
const mapScreen = ({navigation}) => {
    const GOOGLE_MAPS_APIKEY ='AIzaSyAjL_doMA-BBX1S-Lx_BJXrPAjQCFh3UrM';
    const mapRef=useRef()
    const[state,setState]=useState({
        startingCord:{
latitude:33.6007,
longitude:73.0679,
        },
        destinationCord:{
latitude:33.72148,
longitude:73.04329,
        }
    })
    const { startingCord,destinationCord} = state
    const onPressLocation=()=>{
        navigation.navigate('ChooseLocation',{getCordinates:fetchValue})
    }
    const fetchValue=(data)=>{
        setState({
            startingCord:{
     latitude:data.pickupCord.latitude,
     longitude:data.pickupCord.longitude,
            },
            destinationCord:{
            latitude:data.destinationCord.latitude,
                longitude:data.destinationCord.longitude,
            }
    })
     console.log("data===>>>",data)
    }
    return (
        <View style={{flex:1}}>
        <View style={{flex:1}}>
       <MapView
       ref={mapRef}
       style={StyleSheet.absoluteFill}
    initialRegion={{
        ...startingCord,
        latitudeDelta:LATITUDE_DELTA,
        longitudeDelta:LONGITUDE_DELTA,
    }}>
  <Marker
    image={imagePath.icGreenMarker}
      coordinate={startingCord}/>
  <Marker
   image={imagePath.icGreenMarker}
      coordinate={destinationCord}/>
  <MapViewDirections
    origin={{
        ...startingCord,
        latitudeDelta:LATITUDE_DELTA,
        longitudeDelta:LONGITUDE_DELTA,
    }}
    destination={destinationCord}
    apikey={GOOGLE_MAPS_APIKEY}
    strokeWidth={6}
    strokeColor={'red'}
    optimizeWaypoints={true}
    onReady={result=>{
        mapRef.current.fitToCoordinates(result.coordinates,{
            edgePadding:{
                right:30,
                bottom:300,
                left:30,
                top:100
            }
        })
    }}/>
  </MapView>
  </View>
  <View style={styles.bottomCard}>
      <Text>where you want to go</Text>
      <TouchableOpacity style={styles.inputstyle}
      onPress={onPressLocation}>
          <Text>Choose your location</Text>
      </TouchableOpacity>
  </View>
        </View>
    );
}
export default mapScreen;
const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    bottomCard:{
        backgroundColor:'#fff',
        width:'100%',
        padding:30,
        borderTopEndRadius:24,
        borderTopStartRadius:24
    },
    inputstyle:{
        borderTopColor:'#000',
        borderRadius:4,
        borderWidth:2,
        alignItems:'center',
        height:40,
        justifyContent:'center',
        marginTop:16
    }

})