import React, { Component} from 'react';
import { TouchableOpacity } from 'react-native';
import{ View,StyleSheet,Text} from 'react-native';
const Custombtn=({
    onPress=()=>{},
    btnStyle={},
    btnText
})=>{ 
    return(
        <TouchableOpacity onPress={onPress}
        style={{...styles.btnStyle,...btnStyle}}>
<Text>{btnText}</Text>
        </TouchableOpacity>
    ); 
};
const styles=StyleSheet.create({
    btnStyle:{
        height:48,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#fff',
        paddingHorizontal:16,
        borderWidth:1
    }
})
export  default Custombtn;