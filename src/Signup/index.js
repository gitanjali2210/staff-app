import React from 'react';
import {SafeAreaView,Image,ActivityIndicator ,Dimensions,Text, View,TouchableOpacity,TextInput,StyleSheet} from "react-native";
// import { WebView } from 'react-native-webview';
import LinearGradient from 'react-native-linear-gradient';

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height
export default class Signup extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      visible: true,
      email:'', 
      password:'',
    };
  }




  render() {
    return (
        <SafeAreaView style={{
          
          flex:1, }}>
            <View>
            
               <Text style={{fontSize:30,fontWeight:'bold',alignSelf:'center',marginBottom:40,marginTop:100}}>
                 SIGN UP
               </Text>
            </View>
            <View>
            
                <View style={styles.loginstyle}>
                  <TextInput
                     style={{marginLeft:5}}
                     placeholder="Username"
                     placeholderTextColor='#484E57'
                     onChangeText={text => this.setState({email:text})}
                     defaultValue={this.state.email}
                    

                  />

                </View>
                      <View style={styles.loginstyle}>
                      <TextInput
                       style={{marginLeft:5}}
                       placeholder="Password"
                       placeholderTextColor='#484E57'
                       onChangeText={text=>this.setState({password:text})}
                       defaultValue={this.state.password}
                      
           
                      />
                      </View>
                      
                      <View style={styles.loginstyle}>
                      <TextInput
                       style={{marginLeft:5}}
                       placeholder="confirm password"
                       placeholderTextColor='#484E57'
                       onChangeText={text=>this.setState({password:text})}
                       defaultValue={this.state.password}
                      
           
                      />
                      </View>
                      

                      <View style={styles.loginstyle}>
                      <TextInput
                       style={{marginLeft:5}}
                       placeholder="email"
                       placeholderTextColor='#484E57'
                       onChangeText={text=>this.setState({password:text})}
                       defaultValue={this.state.password}
                      
           
                      />
                      </View>
                      

            </View>
       <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.linearGradient}>

                <Text  onPress={()=>this.props.navigation.navigate('Yourname')}
                
                style={{color:'white',fontWeight:'bold',fontSize:20,marginTop:10,marginBottom:10}}>

                SIGN UP
               </Text>
            </LinearGradient>


           
     <View style={{alignSelf:'center',marginTop:30}}>


    <Text style={{marginTop:60,fontSize:17}}>
       Have an account ? <Text onPress={()=>this.props.navigation.navigate('Login')} 
       
       style={{color:'blue'}}> SIGN IN</Text>
    </Text>

    </View>
   
    

         </SafeAreaView>
   );
  }
}
const styles = StyleSheet.create({

  loginstyle:{

    color:'white',
    backgroundColor:'white',
    borderRadius:20,
    marginTop:20,
    marginHorizontal:15,
    borderWidth:1,
    paddingHorizontal:10

  },

   imgstyle:{

    alignSelf:'flex-end',
    marginTop:20,
    marginLeft:180,
    marginRight:30,
    },


   remember:{

   marginLeft:20,
    marginTop:20,
    },


   linearGradient: {
    
    paddingLeft: 150,
    paddingRight: 150,
    borderRadius:20,
    marginTop:60,
    alignSelf:'center'
  }
  



}
)
