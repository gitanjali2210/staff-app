import React from 'react';
import {SafeAreaView,Image,ActivityIndicator ,Dimensions,Text, View,TouchableOpacity,TextInput,StyleSheet} from "react-native";
// import { WebView } from 'react-native-webview';
import LinearGradient from 'react-native-linear-gradient';


var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height
export default class OnBoarding extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      visible: true,
    };
  }




  render() {
    return (
        <SafeAreaView style={{
          backgroundColor:'white',
          flex:1, }}>


           <View >
          
             <Image style={{alignSelf:'center',marginTop:100}} source={require('../Assets/healer/medicineBook.png')}  />
             <Text style={{fontWeight:'bold',fontSize:20,alignSelf:'center',marginTop:100}}>
              APPOINTMENT
             </Text>

            <Text style={{fontSize:20,alignSelf:'center',marginTop:20,textAlign:'center',marginLeft:20,marginRight:20}}>

             kidney stones are very hard mineral deposits that happen to form 

            </Text>

            
            <TouchableOpacity onPress ={()=> this.props.navigation.navigate('Login')}
             style={{alignSelf:'center',marginTop:150,backgroundColor:'blue',borderRadius:20}}>
       
            <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.linearGradient}>

              <Text style={{color:'white',fontWeight:'bold',fontSize:20,marginTop:10,marginBottom:10}}>

                GET STARTED
              </Text>
              </LinearGradient>
            </TouchableOpacity>
           
           </View>
           
           
         
  
  </SafeAreaView>
    );
}

}
var styles = StyleSheet.create({
  linearGradient: {
    
    paddingLeft: 100,
    paddingRight: 100,
    borderRadius:20
  }
})
