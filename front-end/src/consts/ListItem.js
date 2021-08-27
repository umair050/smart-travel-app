import React  from 'react';
import { StyleSheet,Text,TouchableOpacity,Image,View } from 'react-native';
const ListItem =props=>{
    
    const content=(
        <View style={styles.content}>
            <View style={styles.textView}>
            <Text style={styles.text}>{props.item.name}</Text>
            <Text style={styles.text}>Address:{props.item.address}</Text>
            </View>
            <View  style={styles.imageView}>
<Image style={styles.image} source={{uri:props.item.photo}} resizeMode="cover"/>
            </View>
            </View>
    )
 return <TouchableOpacity onPress={props.onPress}>{content}</TouchableOpacity>
 };
const styles=StyleSheet.create({
    content:{
        padding:10,
        flexDirection:'row',
        justifyContent:"space-between",
        borderBottomWidth:1,
        borderColor:'#fff',   
    },
    textView:{
        flex:1,
        justifyContent:'center'
    },
    text:{
        fontSize:15,
        color:"white", 
    },
    image:{
        height:150,
        width:150,
        borderWidth:2,
        borderRadius:20,
    }
})
export default ListItem;