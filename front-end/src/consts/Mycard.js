import React from 'react';
import {View, Image } from 'react-native';
import { Card, Paragraph, Title} from 'react-native-paper';
 export default function Mycard(props){
return(  
                <View style={{margin:5}}>
                    <Card style={{elevation:4}}>
                    <View style={{flexDirection:"row",padding:10}}>
                        <View style={{height:80,width:80,borderRadius:40}}>
                          <View>
                              <Image  source={require('../assets/Karimabad-Hunza-Valley.jpg')}
                              style={{height:80,width:80,borderRadius:40}}
                          />
                          </View>  
                        </View>
                        <View>
                            <Card.Content>
                                <Title>{props.name}</Title>
                                <Paragraph>pkg: 2500Rs</Paragraph>
                            </Card.Content>
                        </View>    
                    </View>
             </Card>
             </View>
           
        );
 
}