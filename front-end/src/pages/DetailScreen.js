import React from 'react';
import { TouchableOpacity } from 'react-native';
import { ImageBackground,SafeAreaView,StatusBar,StyleSheet,View,Text,} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
const DetailScreen = ({navigation,route}) => {
 const place = route.params;
  return (
    <SafeAreaView style={{flex: 1, backgroundColor:'#fff'}}>
      <StatusBar translucent backgroundColor="rgba(0,0,0,0)" />
      <ImageBackground style={{flex: 0.9}} 
      source={place.image}>
        <View style={style.header}>
          <Icon
            name="arrow-back-ios"
            color='#fff'
            size={20} color='#fff' onPress={navigation.goBack}
          />
        </View>
        <View style={style.imageDetails}>
          <Text
            style={{
              width: '70%',
              fontSize: 40,
              fontWeight: 'bold',
              color: '#fff',
            }}>
            {place.name}
            </Text>
            <Text
             style={{
              flexDirection:'row',
              width: '50%',
              fontSize: 15,
              fontWeight: 'bold',
              color: '#fff', 
            }}>
         {place.location}
         </Text>
         <TouchableOpacity
         onPress={() => navigation.navigate('weather',place)}>
         <Text >Weather in {place.name} </Text>
         </TouchableOpacity>
         </View>
      </ImageBackground>
      <Text style={style.heading}>What you are looking for in {place.name} </Text>
      <View >
      <TouchableOpacity
      onPress={() => navigation.navigate('hospitalScreen')}>
        <ImageBackground source={place.hospital}
            style={style.image}>
         <Text style={style.hospital}>Hospitals</Text>
        </ImageBackground>
        </TouchableOpacity>
        </View>
        <View >
        <TouchableOpacity
         onPress={() => navigation.navigate('hotelsScreen')}>
         <ImageBackground  source={place.hotel}
            style={style.image}>
            <Text style={style.hotels}>Hotels </Text> 
            </ImageBackground>
            </TouchableOpacity>
    </View>
    </SafeAreaView>
  );
}
export default DetailScreen;
const style = StyleSheet.create({
  header:{
    flexDirection:'row',
    marginTop:30,
    paddingHorizontal:20,
    justifyContent:'space-between'
   },
   heading:{    
    fontSize:18,
    fontWeight:'bold',
    paddingLeft:35  
   },
   name:{
    flexDirection:'row',
    justifyContent:'space-between',
    position:'absolute',
    width:'100%'
},
   image:{
    marginLeft:30,
    width:300,
    height:150,
    marginTop:5,
    marginBottom:10
},
  imageDetails: {
    padding: 10,
    justifyContent: 'space-between',
    width: '100%',
    position: 'absolute',
    bottom: 5,
  },
  hospital:{
    color:'#fff',
    fontWeight:'bold',
    fontSize:18,
    padding:10
},
hotels:{
 color:'#fff',
 fontWeight:'bold',
 fontSize:18,
 padding:10
}
});

