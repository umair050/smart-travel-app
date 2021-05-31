import React from 'react';
import {Text,View,ScrollView  } from 'react-native';
import Mycard from '../consts/Mycard';

 export default class hospitalScreen extends React.Component{
    render(){
        return(
            <View>
                <ScrollView >
                <Mycard name="hospital 1"/>
                <Mycard name="hospital 2"/>
                <Mycard name="hospital 3"/>
                <Mycard name="hospital 4"/>
                <Mycard name="hospital 5"/>
                <Mycard name="hospital 6"/>
                <Mycard name="hospital 7"/>
                <Mycard name="hospital 8"/>
                <Mycard name="hospital 9"/>
                </ScrollView>
             </View>
        );
    }
}