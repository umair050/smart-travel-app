import React, { useState} from 'react';
import {Text,View,Alert,StyleSheet,TextInput,TouchableOpacity} from 'react-native';
import {login} from '../consts/loginController';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
export default function Login ({navigation}) {
  const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    onLoginPress=()=>{
      if (!email) {
        Alert.alert('Email field is required.');
      }
      if (!password) {
        Alert.alert('Password field is required.');
      }
      login(email, password,loginComplete)
    }
    const loginComplete = () => {
      setEmail('');
      setPassword('');
      navigation.navigate("Cities")
    };
  
    return (
   <KeyboardAwareScrollView>
        <View style={styles.container}>
          <Text style={styles.headerTxt}>WELCOME</Text>
          <View style={styles.subView}>
            <Text style={styles.subTxt}>Login</Text>
            <TextInput style={styles.nameInput} placeholder="email"  
              onChangeText={(email) => setEmail(email)}
              value={email}/>
            <TextInput style={styles.nameInput} secureTextEntry={true}
             placeholder="Password"  onChangeText={(password) => setPassword(password)}
                    value={password}/>
            <TouchableOpacity
          onPress={()=>onLoginPress()}
        style={styles.btn} >
              <Text style={styles.btnTxt}>Login</Text>
            </TouchableOpacity>
            <View style={styles.endView}>
              <Text style={styles.endTxt}>Create an account?</Text>
              <TouchableOpacity
                style={styles.endBtn}
                onPress={()=>navigation.navigate('SignUp')}>
                <Text style={styles.loginTxt}>SignUp</Text>
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
      marginTop: 210,
      borderTopRightRadius: 40,
      borderTopLeftRadius: 40,
    },
    headerTxt: {
      fontSize: 40,
      marginLeft: 40,
      fontWeight: 'bold',
      color: 'white',
      position: 'absolute',
      marginTop: 140,
    },
    errorMsg: {
      color: '#FF0000',
      fontSize: 14,
      marginLeft:35,
    },
    subTxt: {
      color: 'black',
      marginTop: 30,
      fontSize: 30,
      fontWeight: 'bold',
      marginLeft: 40,
    },
    nameInput: {
      height: 40,
      width: 270,
      marginLeft: 45,
      borderBottomWidth: 1,
      marginTop: 50,
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
      fontSize: 15,
      marginTop: 30,
      marginLeft: 80,
      fontWeight: 'bold',
    },
    endBtn: {
      marginRight:130,
    },
    loginTxt: {
      fontSize: 20,
      fontWeight: 'bold',
      marginTop: 24,
    },
  })
