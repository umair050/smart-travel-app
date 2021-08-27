import React, { Component,useState } from 'react';
// import * as firebase from 'firebase';
// import { Alert } from 'react-native';
import {Text,View,StyleSheet,TextInput,TouchableOpacity} from 'react-native';
import {signUp}from '../consts/loginController';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
export default function  SignUp({navigation}){
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('') 
    const  onRegisterPress=()=>{
      signUp(email, password,name, signUpComplete)
    }
  
    const signUpComplete = () => {
      navigation.navigate("Cities")
      // firebase.auth().createUserWithEmailAndPassword(email, password)
      //       .then(()=>{
      //         navigation.navigate('Login')
      //       }).catch(error=>{
      //         Alert.alert(error.message)
      //       })
          } 
  return (
    <KeyboardAwareScrollView>
        <View style={styles.container}>
          <Text style={styles.headerTxt}>WELCOME</Text>
          <View style={styles.subView}>
            <Text style={styles.subTxt}>Signup</Text>
            <TextInput style={styles.nameInput} placeholder="Name"  onChangeText={(text) => setName(text)}
                    value={name}/>
            <TextInput style={styles.nameInput} placeholder="Email" onChangeText={(text) => setEmail(text)}
                    value={email}  />
            <TextInput style={styles.nameInput}  secureTextEntry={true}  placeholder="Password" onChangeText={(text) => setPassword(text)}
                    value={password} />
            <TextInput style={styles.nameInput}  secureTextEntry={true}  placeholder=" Confirm Password"  onChangeText={(text) => setConfirmPassword(text)}
                    value={confirmPassword} />
            <TouchableOpacity style={styles.btn} 
         onPress={() => onRegisterPress()}>
              <Text style={styles.btnTxt}>Register</Text>
            </TouchableOpacity>
            <View style={styles.endView}>
              <Text style={styles.endTxt}>Already have an account?</Text>
              <TouchableOpacity
                style={styles.endBtn}
                onPress={() =>navigation.navigate('Login')}>
                <Text style={styles.loginTxt}>Login</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        </KeyboardAwareScrollView>
      );
    }
  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#04555c',  
      height: 600,
    },
    subView: {
      backgroundColor: 'white',
      height: 450,
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
      height: 35,
      width: 270,
      marginLeft: 40,
      borderBottomWidth: 1,
      marginTop: 20,
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
      marginRight: 130,
    },
    loginTxt: {
      fontSize: 20,
      fontWeight: 'bold',
      marginTop: 5,
    },
  });
