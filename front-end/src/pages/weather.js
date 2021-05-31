import React from 'react';
import { View,Text,SafeAreaView,Dimensions,StyleSheet,Image,StatusBar,TouchableOpacity,TextInput } from "react-native";
const Dev_height=Dimensions.get("window").height
const Dev_width=Dimensions.get("window").width
import Icon from "react-native-vector-icons/AntDesign"
export default class weather extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            data:[],
            isLoading:true,
            temp:"",
            city:"Rawalpindi",
            icon:"",
            city_display:"",
            desc:"",
            main:"",
            humidity:"",
            pressure:"",
            visibility:"",
        }
        this.fetch_weather()
    }
    fetch_weather=()=>{
        fetch('http://api.openweathermap.org/data/2.5/weather?q='+this.state.city+'&appid=381e67ed6934c612ca3a3ed0d4a21f88')
   .then((response)=>response.json())
   .then((json)=>{
       this.setState({data:json});
       this.setState({temp:(json.main.temp-273.15).toFixed(2)+"°C"})
       this.setState({city_display:json.name})
       this.setState({icon:json.weather[0].icon})
       this.setState({desc:json.weather[0].description})
       this.setState({main:json.weather[0].main})
       this.setState({humidity:json.main.humidity+"%"})
       this.setState({pressure:json.main.pressure+"hPa"})
       this.setState({visibility:(json.visibility/1000).toFixed(2)+"km"})
   })
   .catch((error)=>console.error(error))
.finally(()=>{
    this.setState({isLoading:false});
});     
    }
    render(){
return(
<SafeAreaView style={styles.container}>
<StatusBar translucent={true} backgroundColor="#000"/>
<View style={styles.Seacrh_Box_View}>
<TextInput placeholder="Search" placeholderTextColor='#FFF' style={styles.Seacrh_Box} onChangeText={(text)=>this.setState({city:text})} />
<TouchableOpacity style={styles.button_touch} onPress={this.fetch_weather}>
<Icon name="search1" size={24} color="#FFF"/>
</TouchableOpacity>
</View>
<View style={styles.Weather_Box_Main}>
<View style={styles.Weather_Holder_View}>
    <Image source={{uri:"http://openweathermap.org/img/wn/"+this.state.icon+"@2x.png",}} style={styles.Weather_Image}/>
    <View>
        <Text style={styles.temprature_text}>{this.state.temp}</Text>
        <Text style={styles.city_text}>{this.state.city_display}</Text>
    </View>
</View>
</View>
<View style={styles.Info_Box_View}>
<View style={styles.Info_Holder_View}>
<Text style={styles.Main_Weather_Text}>{this.state.main}</Text>
<Text style={styles.description_text}>{this.state.desc}</Text>
<Text style={styles.humidity_text}>humidity:{this.state.humidity}</Text>
<Text style={styles.other_text}>pressure:{this.state.pressure}</Text>
<Text style={styles.other_text}>visibility:{this.state.visibility}</Text>
</View>
</View>
</SafeAreaView>
)
}
}
const styles = StyleSheet.create({
    container:{
       height:Dev_height,
       width:Dev_width,
        backgroundColor:'#04555c',
    },
    Seacrh_Box_View:{
        height:"20%",
        width:"100%",
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"row"
    },
    Seacrh_Box:{
        height:"35%",
        width:"80%",
        borderColor:"#FFF",
        borderWidth:1,
        borderRadius:15,
        color:"#FFF",
        paddingHorizontal:15
    },
    button_touch:{
        marginLeft:"5%",
        height:"35%",
        width:"8%",
        justifyContent:"center",
        alignItems:"center"
    },
    Weather_Box_Main:{
        height:"30%",
        width:"100%",
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"row"
    },
    Weather_Holder_View:{
        height:"80%",
        width:"90%",
        backgroundColor:'rgba(255,255,255,0.3)',
        borderRadius:15,
        alignItems:"center",
        flexDirection:"row"
    },
    Weather_Image:{
        height:"80%",
        width:"50%"
    },
    temprature_text:{
        fontSize:30,
        color:"#FFF",
        marginLeft:"5%"
    },
    city_text:{
        fontSize:20,
        color:"#FFF",
        marginLeft:"5%",
        marginTop:"3%"
    },
    Info_Box_View:{
        height:"45%",
        width:"100%",
        justifyContent:"center",
        alignItems:"center"
    },
    Info_Holder_View:{
        height:"80%",
        width:"90%",
        backgroundColor:'rgba(255,255,255,0.92)',
        borderRadius:15
    },
    Main_Weather_Text:{
        fontSize:28,
        color:"#464646",
        marginLeft:"8%",
        marginTop:"8%",
        fontWeight:"bold"
    },
    description_text:{
        fontSize:20,
        color:"#121212",
        marginLeft:"8%",
        marginTop:"3%"
    },
    humidity_text:{
        fontSize:18,
        color:"#121212",
        marginLeft:"8%",
        marginTop:"5%"
    },
    other_text:{
        fontSize:18,
        color:"#121212",
        marginLeft:"8%",
        marginTop:"2%"
    }
})