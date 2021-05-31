import React, { Component } from 'react';
import {Text,View,StyleSheet,TextInput,TouchableOpacity} from 'react-native';
const profile = () => {
    
    return (
        <View style={style.container}>
        <Text>welcome to the {profile.name}</Text>
        </View>
    );
}
export default profile;

const style = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'grey',
        alignItems:'center',
        justifyContent:'center'
    }

})