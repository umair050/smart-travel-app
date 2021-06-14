import React from 'react';
import {Text,View,ScrollView  } from 'react-native';
import Mycard from '../consts/Mycard';
import Header from '../consts/Header';
 export default class hotelsScreen extends React.Component{  
    render(){  
        return(
            <View> 
            <Header name="Hotels"/>  
                <ScrollView >
                <Mycard name="hotels 1"/>
                <Mycard name="hotels 2"/>
                <Mycard name="hotels 3"/>
                <Mycard name="hotels 4"/>
                <Mycard name="hotels 5"/>
                <Mycard name="hotels 6"/>
                <Mycard name="hotels 7"/>
                <Mycard name="hotels 8"/>
                <Mycard name="hotels 9"/>
                </ScrollView>
             </View>
        );
    }
}