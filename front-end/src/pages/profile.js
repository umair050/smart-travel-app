import React, { useState,useEffect } from 'react';
import { View, Text, StyleSheet,Dimensions, Image,TouchableOpacity,Alert, Button } from 'react-native';
import { Title,TextInput,Card } from 'react-native-paper';
import {LinearGradient} from "expo-linear-gradient";
import * as ImagePicker from 'expo-image-picker';
const Dev_height=Dimensions.get("window").height
const Dev_width=Dimensions.get("window").width
import {Entypo } from '@expo/vector-icons';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import * as firebase from 'firebase';
function  profile({navigation}) {
      const [image, setImage] = useState('');
        const [name, setName] = useState("")
        const [email, setEmail] = useState("")
        const [password, setPassword] = useState("")
        let currentUser = firebase.auth().currentUser.uid;
    const [userData, setUserData] = useState(null);
    useEffect(()=>{
      async function getUserInfo(){
        try{
          let doc=await firebase.firestore()
          .collection('users')
        .doc(currentUser)
        .get();
        if(!doc.exists){
          Alert.alert('no user data found!')
        }
        else{
          let dataObj=doc.data();
          setName(dataObj.name)
          setEmail(dataObj.email)
          setPassword(dataObj.password)
        }
        }
        catch(err){
          Alert.alert('there is no error',err.message)
        }
      }
      getUserInfo();
    })
    const handleUpdate = () => {
      firebase.
      firestore()
      .collection('users')
      .doc(currentUser)
      .update({
        name:userData.name,
        email: userData.email,
        password:userData.password, 
      })
      .then(() => {
        console.log('User Updated!');
        Alert.alert(
          'Profile Updated!',
          'Your profile has been updated successfully.'
        );
      })
    }
    const showImagePicker = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("You've refused to allow this appp to access your photos!");
      return;
    }
    const image = await ImagePicker.launchImageLibraryAsync();
if (!image.cancelled) {
      setImage(image.uri);
    }
  }
  const openCamera = async () => {
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();
    if (permissionResult.granted === false) {
      alert("You've refused to allow this appp to access your camera!");
      return;
    }
    const image = await ImagePicker.launchCameraAsync();
    if (!image.cancelled) {
      setImage(image.uri);
    }
  }
  return (
    <KeyboardAwareScrollView>
    <View style={styles.container}>
      <LinearGradient
    colors={["#fff","#04555c"]}
    style={{height:"10%"}}
/>
      <View style={{alignItems:"center"}}>
        {
          image !=='' && <Image style={styles.imageContainer}
            source={{ uri:image }}
            style={styles.image}
          />
        }
      </View>
      <View style={{alignItems:"center",margin:5}}>
<Title>{email}</Title>
<Text style={{fontSize:18}}>{name}</Text>
</View>
<TextInput
      mode="outlined"
      label="Name"
      placeholder="Type something"
   value={userData ? userData.name :'' }
    onChangeText={(txt) => setUserData({...userData, name: txt})}
   />
      <TextInput
      mode="outlined"
      label="Email"
      placeholder="Type something"
    value={userData ? userData.email :'' }
    onChangeText={(txt) => setUserData({...userData, email: txt})}
    />
     <TextInput
      mode="outlined"
      label="Password"
      placeholder="Type something"
      secureTextEntry={true}
    value={userData ? userData.password :'' }
    onChangeText={(txt) => setUserData({...userData, password: txt})} 
    />
     <TouchableOpacity onPress={()=>navigation.navigate('Cities')}>
<Card style={styles.mycard}>
    <View style={styles.cardcontent}>
    <Entypo name="home" size={32} color="#04555c"/>
    <Text style={styles.mytext}>Home</Text> 
    </View>
</Card>
</TouchableOpacity>
 <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
<Card style={styles.mycard}>
    <View style={styles.cardcontent}>
    <Entypo name="log-out" size={32} color="#04555c"/>
    <Text style={styles.mytext}>Log-out</Text>
    </View>    
</Card>
</TouchableOpacity>
      <View style={styles.buttonContainer}>
        <Button onPress={showImagePicker} title="Select an image" />
        <Button onPress={openCamera} title="Open camera" />
      </View>
      <View style={styles.Donebtn}>
          <Button title="update" onPress={handleUpdate} /> 
      </View> 
    </View>
    </KeyboardAwareScrollView>
  );
}
export default profile;
const styles = StyleSheet.create({
  container:{
    height:Dev_height,
    width:Dev_width,
     backgroundColor:'#fff',
 },
  buttonContainer: {
    width: 400,
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding:20
  },
  imageContainer: {
    padding: 5
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
    borderRadius:140/1,
    marginTop:-60,
    backgroundColor:'#eee',
    borderWidth:1,
    borderColor:'#000'
  },
  mycard:{
    marginTop:2,
    marginBottom:2,
},
mytext:{
  fontSize:18,
  marginTop:3,
  marginLeft:5
},
cardcontent:{
    flexDirection:"row",
    padding:3
},
Donebtn: {
  width: 400,
  flexDirection: 'row',
  justifyContent: 'center',
  marginBottom:1
  },
});


