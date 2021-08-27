import React, { useState } from 'react';
import { View, Text, StyleSheet, Image,TouchableOpacity, Button } from 'react-native';
import { Title,TextInput } from 'react-native-paper';
import {LinearGradient} from "expo-linear-gradient";
import * as ImagePicker from 'expo-image-picker';
function  updateprofile({navigation}) {
  const [image, setImage] = useState('null');
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
    <View style={styles.screen}>
      <LinearGradient
    colors={["#fff","#04555c"]}
    style={{height:"20%"}}
/>
      <View style={{alignItems:"center"}}>
        {
          image !=='null' && <Image style={styles.imageContainer}
            source={{ uri:image }}
            style={styles.image}
          />
        }
      </View>
      <View style={{alignItems:"center",margin:5}}>
<Title>profile</Title>
<Text style={{fontSize:18}}> coder profile</Text>
</View>
<TextInput
      mode="outlined"
      label="Name"
      placeholder="Type something" />
      <TextInput
      mode="outlined"
      label="Email"
      placeholder="Type something"/>
     <TextInput
      mode="outlined"
      label="Password"
      placeholder="Type something"
      secureTextEntry={true}/>
      <View style={styles.buttonContainer}>
        <Button onPress={showImagePicker} title="Select an image" />
        <Button onPress={openCamera} title="Open camera" />
      </View>
      <TouchableOpacity>
<View style={styles.Donebtn}>
        <Button title="updated" onPress={()=>navigation.navigate('profile')} />
      </View>
      </TouchableOpacity>  
    </View>
  );
}
export default updateprofile;
const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  buttonContainer: {
    width: 400,
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding:35
  },
  imageContainer: {
    padding: 30
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
Donebtn: {
    width: 400,
    flexDirection: 'row',
    justifyContent: 'center',
    padding:35,
  },
});


