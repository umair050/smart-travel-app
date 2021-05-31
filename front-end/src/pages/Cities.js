
import React,{Component,useState} from 'react';
import{ StyleSheet,Text,View,Image,Imagebackground,ScrollView,TouchableOpacity,FlatList,TextInput} from 'react-native';
import {Feather} from '@expo/vector-icons';

class Cities extends Component{
  render(){
    const image = { uri: "https://images.pexels.com/photos/2274...​" };

 const [gallery] = useState(
        { image: {uri:' https://images.pexels.com/photos/6723...  '}, title: "Naran",  key: '1' },
        { image:{uri:'https://travel.usnews.com/static-trav...​'}, title: 'Hunza',key: '2' },
        { image:{uri:'https://travel.usnews.com/static-trav...'}, title: 'Kalam',key: '3' },
        { image:{uri:'https://travel.usnews.com/static-trav...​'}, title: 'Abbottabad', key: '4' },
      );
    return(
        <View>
            <View>
                <Imagebackground
                source={image}
                 style={{width:'100%',height:270}}
                 imageStyle={{borrderBottomRightRadius:65}}>
                 <View style={styles.DarkOverlay}></View>
                 <View style={styles.searchContainer}>
                     <Text style={styles.UserGreet}>welcome </Text>
                     <Text  style={styles.userText}>where would you like to go today?</Text>
                 </View>
                 <View>
                     <TextInput
                     styles={styles.searchBox}
                     placeholder='Search  Here'
                     placeholderTextColor='#666'
                     ></TextInput>
                     <Feather name='search' size={22} color='#666' 
                     style={{position:'absolute',top:30,right:60,opacity:0.6}}/>
                 </View>
                 <Feather name='menu' size={22} color='#fff' 
                     style={{position:'absolute',top:40,left:16}}/>
                 </Imagebackground>
                 </View>
                 <ScrollView>
                     <View style={{padding:20}}>
                     <Text  style={{fontSize:22, fontWeight:'bold'}}>Cities</Text>
</View>
<View>
<FlatList 
horizontal={true}
    data={gallery}
    renderItem={({item})=>{
    return (
        <View style={{paddingVertical:20,paddingLeft:16}}>
            <TouchableOpacity>
                <Image  source={item.image}
            style={{width:150,marginRight:8,height:250,borderRadius:10}}/>
            <View
            style={styles.ImageOverlay}></View>
            <Feather
                name='map-pin' size={16} color='white'
                style={styles.ImageLocation}
            />
            <Text style={styles.ImageText}>{item.title}</Text>
            </TouchableOpacity>
        </View>
     ) }}/>  
 </View>          
 </ScrollView>
 </View>
 );
}
}
 const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        alignItems:'center'
    },
    DarkOverlay:{
        fontSize:38,
        fontWeight:'bold',
        color:'white'
    },
    userText:{
        fontSize:16,
        fontWeight:'normal',
        color:'white'
    },
    searchContainer:{
        paddingTop:100,
        paddingLeft:16
    },
    title:{
        fontSize:22,
        fontWeight:"bold",
        color:"white",
        textAlign:"center",
    },
    UserGreet:{
        fontSize:38,
        fontWeight:'bold',
        color:'white'
    },
    searchBox:{
        marginTop:16,
        backgroundColor:'#fff',
        paddingLeft:24,
        padding:12,
        borderTopRightRadius:40,
        borderBottomRightRadius:40,
        width:'90'
    },
    ImageOverlay:{
        width:150,
        height:250,
        marginRight:8,
        borderRadius:10,
        position:'absolute',
        backgroundColor:'#000',
        opacity:0.2
    },
    ImageLocation:{
        position:'absolute',
        marginTop:4,
        left:10,
        bottom:10
    },
    ImageText:{
        position:'absolute',
        color:'white',
        marginTop:4,
        fontSize:14,
        left:30,
        bottom:10
    }
});
export default Cities;