import React from 'react';
import {SafeAreaView, ScrollView,StatusBar,StyleSheet,View,Text,TextInput,ImageBackground,FlatList, Dimensions,TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
const {width} = Dimensions.get('screen');
import places from '../consts/places';
const Cities = ({navigation}) => { 
  const goTomapScreen=()=>{
    navigation.navigate('mapScreen');
  }  
  const goToprofile=()=>{
    navigation.navigate('profile');
  }
  const Card = ({place}) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8} 
         onPress={() => navigation.navigate('DetailScreen',place)}>
        <ImageBackground style={style.cardImage} source={place.image}>
          <Text
            style={{
              color: '#FFF',
              fontSize: 25,
              fontWeight: 'bold',
              marginTop: 10,
            }}>
            {place.name}
          </Text>
          <View
            style={{
              flex: 1,
              justifyContent: 'space-between',
              flexDirection: 'row',
              alignItems: 'flex-end',
            }}>
            <View style={{flexDirection: 'row'}} >
              <Icon name="place" size={25} color='#FFF' onPress={goTomapScreen}/>
              <Text style={{ color: '#FFF'}} >
                {place.location}
              </Text>
            </View>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    );
  };
  const RecommendedCard = ({place}) => {
    return (
      <ImageBackground style={style.rmCardImage} source={place.image}>
        <Text
          style={{
            color: '#FFF',
            fontSize: 22,
            fontWeight: 'bold',
            marginTop: 10,
          }} >
          {place.name}
        </Text>
        <View
          style={{
            flex: 1,
            justifyContent: 'space-between',
            alignItems: 'flex-end',
          }}>
          <View style={{width: '100%', flexDirection: 'row', marginTop: 10}}>
            <View style={{flexDirection: 'row'}}>
              <Icon name="place" size={25} color='#FFF'
          onPress={goTomapScreen}/>
              <Text style={{color: '#FFF', marginLeft: 5}} >
                {place.location} 
              </Text>
            </View>
          </View>
          
        </View>
      </ImageBackground>
    );
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#FFF'}}>
      <StatusBar translucent={false} backgroundColor='#04555c' />
      <View style={style.header}>
        <Icon name="menu" size={28} color='#FFF' onPress={goToprofile} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            backgroundColor: '#04555c',
            height: 100,
            paddingHorizontal: 20,
          }}>
          <View style={{flex: 1}}>
            <Text style={style.headerTitle}>Smart Travel Guide </Text>
            <View style={style.inputContainer}>
              <Icon name="search" size={28} />
              <TextInput
                placeholder="Search place"
                style={{color:'#000' }}
              />
            </View>
          </View>
        </View>
      
        <Text style={style.sectionTitle}>Places</Text>
        <View>
          <FlatList
            contentContainerStyle={{paddingLeft: 20}}
            horizontal
            showsHorizontalScrollIndicator={false}
            data={places}
            renderItem={({item}) => <Card place={item} />}
          />
          <Text style={style.sectionTitle}>Recommended</Text>
          <FlatList
            snapToInterval={width - 20}
            contentContainerStyle={{paddingLeft: 20, paddingBottom: 20}}
            showsHorizontalScrollIndicator={false}
            horizontal
            data={places}
            renderItem={({item}) => <RecommendedCard place={item} />}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  header: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#04555c',
  },
  headerTitle: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 23,
  },
  inputContainer: {
    height: 60,
    width: '100%',
    backgroundColor: '#FFF',
    borderRadius: 10,
    position: 'absolute',
    top: 70,
    flexDirection: 'row',
    paddingHorizontal: 20,
    alignItems: 'center',
    elevation: 12,
  },
  sectionTitle: {
    marginTop:40,
    marginHorizontal: 20,
    marginVertical: 20,
    fontWeight: 'bold',
    fontSize: 20,
  },
  cardImage: {
    height: 220,
    width: width / 2,
    marginRight: 20,
    padding: 10,
    overflow: 'hidden',
    borderRadius: 10,
  },
  rmCardImage: {
    width: width - 40,
    height: 200,
    marginRight: 20,
    borderRadius: 10,
    overflow: 'hidden',
    padding: 10,
  },
});
export default Cities;
