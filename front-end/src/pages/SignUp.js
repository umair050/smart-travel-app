import React, { Component } from 'react';
import {Text,View,StyleSheet,TextInput,TouchableOpacity} from 'react-native';
const SignUp = ({navigation}) => {
      return (
        <View style={styles.cantainer}>
          <Text style={styles.headerTxt}>WELCOME</Text>
          <View style={styles.subView}>
            <Text style={styles.subTxt}>Signup</Text>
            <TextInput style={styles.nameInput} placeholder="Name" />
            <TextInput style={styles.nameInput} placeholder="Email"  />
            <TextInput style={styles.nameInput} placeholder="Phone no"  />
            <TextInput style={styles.nameInput}  secureTextEntry={true}  placeholder="Password"  />
            <TextInput style={styles.nameInput}  secureTextEntry={true}  placeholder=" Confirm Password"  />
            <TouchableOpacity style={styles.btn}>
              <Text style={styles.btnTxt}>Register</Text>
            </TouchableOpacity>
            <View style={styles.endView}>
              <Text style={styles.endTxt}>Already have an account?</Text>
              <TouchableOpacity
                style={styles.endBtn}
                onPress={() =>navigation.goBack('Login')}>
                <Text style={styles.loginTxt}>Login</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      );
    }
  const styles = StyleSheet.create({
    cantainer: {
      backgroundColor: '#04555c',
      height: 700,
    },
    subView: {
      backgroundColor: 'white',
      height: 440,
      marginTop: 160,
      borderTopRightRadius: 40,
      borderTopLeftRadius: 40,
    },
    headerTxt: {
      fontSize: 30,
      marginLeft: 40,
      fontWeight: 'bold',
      color: 'white',
      position: 'absolute',
      marginTop: 100,
    },
    subTxt: {
      color: 'black',
      fontSize: 30,
      fontWeight: 'bold',
      marginLeft: 40,
    },
    nameInput: {
      height: 40,
      width: 270,
      marginLeft: 40,
      borderBottomWidth: 1,
      marginTop: 10,
    },
    btn: {
      height: 50,
      width: 200,
      backgroundColor: '#04555c',
      borderRadius: 80,
      borderWidth: 2,
      marginLeft: 70,
      marginTop: 30,
      justifyContent: 'center',
      alignItems: 'center',
    },
    btnTxt: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 20,
    },
    endView: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    endTxt: {
      fontSize: 16,
      marginTop: 10,
      marginLeft: 55,
      fontWeight: 'bold',
    },
    endBtn: {
      marginRight: 100,
    },
    loginTxt: {
      fontSize: 20,
      fontWeight: 'bold',
      marginTop: 5,
    },
  });
  export default SignUp;