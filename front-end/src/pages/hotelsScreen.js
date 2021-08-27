import React from 'react'; 
import{View,StyleSheet,ScrollView ,Text, TouchableOpacity} from "react-native";  
import {LinearGradient} from "expo-linear-gradient";
import Icon from 'react-native-vector-icons/FontAwesome';
import { Card,Button ,Title} from 'react-native-paper';
export default function hotelsScreen({navigation}){ 
return(
    <View>
<LinearGradient colors={[colors.white, colors.green]} start={[-0.5,-0.5]} end={[1,1]}>
    <View style={{ marginHorizontal:20, paddingVertical:35}}>
    <Text style={{fontSize:25 ,color:'#fff',fontWeight:'bold'}}>Hotels</Text>
    </View>
    </LinearGradient>  
    <ScrollView > 
<View style={{margin:10}}>  
<Card style={{elevation:4}}>
<View style={{flexDirection:"row",justifyContent:'center',padding:10}}> 
    <View style={{flexdirection:'row',justifyContent:'center',padding:20}}>
        <Card.Content>
            <Title>Naran</Title>
            <Icon name="hotel" size={70} color="#04555c" />
        </Card.Content>
    </View> 
    </View>  
    <TouchableOpacity  onPress={() => navigation.navigate('NaranHotels')}>
        <View style={{flexDirection:'row',justifyContent:'center', padding:5}}>
    <Button  mode="contained" style={{backgroundColor:'#04555c' ,borderRadius:40}}>
    Hotels
    </Button>
</View>
</TouchableOpacity>
</Card>
</View>
<View style={{margin:5}}>  
<Card style={{elevation:4}}>
<View style={{flexDirection:"row",justifyContent:'center',padding:10}}> 
    <View style={{flexdirection:'row',justifyContent:'center',padding:20}}>
        <Card.Content>
            <Title>Hunza</Title>
            <Icon name="hotel" size={70} color="#04555c" />
        </Card.Content>
    </View> 
    </View>  
    <TouchableOpacity  onPress={() => navigation.navigate('HunzaHotels')}>
<View style={{flexDirection:'row',justifyContent:'center', padding:5}}>
    <Button  mode="contained" style={{backgroundColor:'#04555c' ,borderRadius:40}}>
    Hotels
    </Button>
</View>
</TouchableOpacity>
</Card>
</View>
<View style={{margin:5}}>  
<Card style={{elevation:4}}>
<View style={{flexDirection:"row",justifyContent:'center',padding:10}}> 
    <View style={{flexdirection:'row',justifyContent:'center',padding:20}}>
        <Card.Content>
            <Title>Lahore</Title>
            <Icon name="hotel" size={70} color="#04555c" />
        </Card.Content>
    </View> 
    </View>  
    <TouchableOpacity  onPress={() => navigation.navigate('LahoreHotels')}>
<View style={{flexDirection:'row',justifyContent:'center', padding:10}}>
    <Button  mode="contained" style={{backgroundColor:'#04555c' ,borderRadius:40}}>
    Hotels
    </Button>
</View>
</TouchableOpacity>
</Card>
</View>
<View style={{margin:5,marginBottom:120}}>  
<Card style={{elevation:4}}>
<View style={{flexDirection:"row",justifyContent:'center',padding:10}}> 
    <View style={{flexdirection:'row',justifyContent:'center',padding:20}}>
        <Card.Content>
            <Title>Peshawar</Title>
            <Icon name="hotel" size={70} color="#04555c" />
        </Card.Content>
    </View> 
    </View>
    <TouchableOpacity  onPress={() => navigation.navigate('PeshawarHotels')}>
<View style={{flexDirection:'row',justifyContent:'center', padding:10}}>
    <Button  mode="contained" style={{backgroundColor:'#04555c' ,borderRadius:40}}>
        Hotels
    </Button>
</View>
</TouchableOpacity>
</Card>
</View>
</ScrollView>
</View>
)
    }
 
const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
    },
})

export const colors={
    white: "#fff",
    green:"#04555c"
}
