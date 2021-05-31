import React, { Component } from 'react';
import {Text,View,StyleSheet,TextInput,TouchableOpacity} from 'react-native';
const Login = ({navigation}) => {
  const [data, setData] = React.useState({
    username: '',
    password: '',
    check_textInputChange: false,
    secureTextEntry: true,
    isValidUser: true,
    isValidPassword: true,  
});
const goToCities=()=>{
  navigation.navigate('Cities');
}
 return (
        <View style={styles.cantainer}>
          <Text style={styles.headerTxt}>WELCOME</Text>
          <View style={styles.subView}>
            <Text style={styles.subTxt}>Login</Text>
            <TextInput style={styles.nameInput} placeholder="Username"  
             />
            {data.isValidUser ? null:
            <Animatable.View animation="fadeinleft" duration={500}>
            <Text style={styles.errorMsg}>Username must be 4 character long</Text>
            </Animatable.View>
            }
            <TextInput style={styles.nameInput} secureTextEntry={true}
             placeholder="Password"  />
            {data.isValidPassword ? null:
            <Animatable.View animation="fadeinleft" duration={500}>
            <Text style={styles.errorMsg}>Password must be 8 character long</Text>
            </Animatable.View>
            }
            <TouchableOpacity
            onPress={goToCities}
        style={styles.btn} >
              <Text style={styles.btnTxt}>Login</Text>
            </TouchableOpacity>
            <View style={styles.endView}>
              <Text style={styles.endTxt}>Create an account?</Text>
              <TouchableOpacity
                style={styles.endBtn}
                onPress={() => navigation.navigate('SignUp')}>
                <Text style={styles.loginTxt}>SignUp</Text>
              </TouchableOpacity>
            </View>
          </View>
         
        </View>
      );
    }
    export default Login;
  const styles = StyleSheet.create({
    cantainer: {
      backgroundColor: '#04555c',
      height: 700,
    },
    subView: {
      backgroundColor: 'white',
      height: 430,
      marginTop: 200,
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
      marginTop: 20,
      fontSize: 30,
      fontWeight: 'bold',
      marginLeft: 40,
    },
    nameInput: {
      height: 40,
      width: 270,
      marginLeft: 40,
      borderBottomWidth: 1,
      marginTop: 30,
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
      marginLeft: 60,
      fontWeight: 'bold',
    },
    endBtn: {
      marginRight:110,
    },
    loginTxt: {
      fontSize: 20,
      fontWeight: 'bold',
      marginTop: 24,
    },
  })
