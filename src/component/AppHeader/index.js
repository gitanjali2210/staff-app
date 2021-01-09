import React from 'react';
import { SafeAreaView, Image, Text, Dimensions, FlatList, StyleSheet, StatusBar, View, TouchableOpacity, TextInput } from "react-native";
// import { WebView } from 'react-native-webview';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height



  const AppHeader =(props)=> {
    const{onPress, onPress1, onPress2} = props

    return (
         <View  style={[{flexDirection:'row',justifyContent:'space-between',backgroundColor:'#EA2E40',padding:wp('3%')},styles.shadow]}>
            <TouchableOpacity  onPress={onPress1} >
             <Image resizeMode='contain' style={styles.imgstyle}  source={require('../../Assets/healer/menu.png')} />
             </TouchableOpacity>


               
           <View  style={{flexDirection:'row'}} >
            <TouchableOpacity onPress={onPress2} >
            <Text style={{color:'#fff', fontSize:hp('2%'), marginHorizontal:wp('3%'), fontWeight:'bold'}} >
               Add Service
             </Text>
            </TouchableOpacity>
           <TouchableOpacity  onPress={onPress}>
             <Image source={require('../../Assets/healer/email.png')} /> 
             </TouchableOpacity>
           </View>

            </View>
    )
  }

const styles = StyleSheet.create({
 imgstyle:{

    height:hp('3%'),
    width:wp('7%'),

    },
 
    shadow:{
      shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 7,
  },
  shadowOpacity: 0.43,
  shadowRadius: 9.51,
  
  elevation: 15,
    },
});


export default AppHeader