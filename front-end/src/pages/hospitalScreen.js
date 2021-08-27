import React from 'react'; 
import{View,StyleSheet,ScrollView ,TouchableOpacity,Text} from "react-native";  
import {LinearGradient} from "expo-linear-gradient";
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Card,Button ,Title} from 'react-native-paper';
export default function hospitalScreen({navigation}){ 
return(
    <View>
<LinearGradient colors={[colors.white, colors.green]} start={[-0.5,-0.5]} end={[1,1]}>
    <View style={{ marginHorizontal:20, paddingVertical:35}}>
    <Text style={{fontSize:25 ,color:'#fff',fontWeight:'bold'}}>Hospital</Text>
    </View>
    </LinearGradient>  
    <ScrollView > 
<View style={{margin:10}}>  
<Card style={{elevation:4}}>
<View style={{flexDirection:"row",justifyContent:'center',padding:10}}> 
    <View style={{flexdirection:'row',justifyContent:'center',padding:20}}>
        <Card.Content>
            <Title>Naran</Title>
            <Icon name="hospital" size={70} color="#04555c" />
        </Card.Content>
    </View> 
    </View>  
    <TouchableOpacity  onPress={() => navigation.navigate('NaranHospitals')}>
<View style={{flexDirection:'row',justifyContent:'center', padding:5}}>
    <Button  mode="contained" style={{backgroundColor:'#04555c' ,borderRadius:40}}>
        Hospitals
    </Button>
</View>
</TouchableOpacity >
</Card>
</View>
<View style={{margin:5}}>  
<Card style={{elevation:4}}>
<View style={{flexDirection:"row",justifyContent:'center',padding:10}}> 
    <View style={{flexdirection:'row',justifyContent:'center',padding:20}}>
        <Card.Content>
            <Title>Hunza</Title>
            <Icon name="hospital" size={70} color="#04555c" />
        </Card.Content>
    </View> 
    </View>  
    <TouchableOpacity  onPress={() => navigation.navigate('HunzaHospitals')}>
<View style={{flexDirection:'row',justifyContent:'center', padding:5}}>
    <Button  mode="contained" style={{backgroundColor:'#04555c' ,borderRadius:40}}>
        Hospitals
    </Button>
</View>
</TouchableOpacity >
</Card>
</View>
<View style={{margin:5}}>  
<Card style={{elevation:4}}> 

<View style={{flexDirection:"row",justifyContent:'center',padding:10}}> 
    <View style={{flexdirection:'row',justifyContent:'center',padding:20}}>
        <Card.Content>
            <Title>Lahore</Title>
            <Icon name="hospital" size={70} color="#04555c" />
        </Card.Content>
    </View> 
    </View>  
    <TouchableOpacity  onPress={() => navigation.navigate('LahoreHospitals')}>
<View style={{flexDirection:'row',justifyContent:'center', padding:10}}>
    <Button  mode="contained" style={{backgroundColor:'#04555c' ,borderRadius:40}}>
        Hospitals
    </Button>
</View></TouchableOpacity>
</Card>
</View>
<View style={{margin:5,marginBottom:120}}>  
<Card style={{elevation:4}}>
<View style={{flexDirection:"row",justifyContent:'center',padding:10}}> 
    <View style={{flexdirection:'row',justifyContent:'center',padding:20}}>
        <Card.Content>
            <Title>Peshawar</Title>
            <Icon name="hospital" size={70} color="#04555c" />
        </Card.Content>
    </View> 
    </View>  
    <TouchableOpacity  onPress={() => navigation.navigate('PeshawarHospitals')}>
<View style={{flexDirection:'row',justifyContent:'center', padding:10}}>
    <Button  mode="contained" style={{backgroundColor:'#04555c' ,borderRadius:40}}>
        Hospitals
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
