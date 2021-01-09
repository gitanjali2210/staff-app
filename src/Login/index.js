import React from 'react';
import { SafeAreaView, Image, ActivityIndicator, Dimensions, Text, View, TouchableOpacity, TextInput, StyleSheet, ImageBackground } from "react-native";
// import { WebView } from 'react-native-webview';
import LinearGradient from 'react-native-linear-gradient';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height
export default class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      visible: true,
      email: '',
      password: '',
    };
  }




  render() {
    return (
      <SafeAreaView style={{

        flex: 1, backgroundColor: '#fff'
      }}>

        <TouchableOpacity style={{ backgroundColor: '#000' }} onPress={() => this.props.navigation.goBack()} >
          <Image style={styles.imgstyle} source={require('../Assets/healer/backarrow.png')} />
        </TouchableOpacity>



        <ImageBackground style={{ height: hp('100%'), width: wp('100%'), }} source={require('../Assets/Maintenance.jpg')}  >
          <View style={{ backgroundColor: 'rgba(0,0,0,0.60)', flex: 1 }} >
            <View>

              <Text style={{ fontSize: hp('2.8%'), fontWeight: 'bold', marginTop: hp('3%'), marginLeft: wp('5%'), color: '#fff' }}>
                LOGIN
     </Text>

              <Text style={{ fontSize: hp('2.6%'), marginLeft: wp('5%'), color: '#D9C505' }}>
                Access to our Application
     </Text>
              <Text style={{ fontSize: hp('2.6%'), marginLeft: wp('5%'), marginTop: hp('5%'), color: '#D9C505' }}>
                Mobile Number
     </Text>
            </View>


            <View style={{ flexDirection: 'row', marginLeft: wp('3%') }} >

              <View style={styles.loginstyle}>
                <TextInput
                  style={{ width: wp('18%') }}
                  placeholder="India(+91)"
                  placeholderTextColor='#6C7592'
                  onChangeText={text => this.setState({ code: text })}
                  defaultValue={this.state.code}
                />
              </View>

              <View style={styles.loginstyle}>
                <TextInput
                  style={{ width: wp('60%') }}
                  placeholder="enter Mobile number"
                  placeholderTextColor='#6C7592'
                  onChangeText={text => this.setState({ number: text })}
                  defaultValue={this.state.number}
                />
              </View>
            </View>

            <TouchableOpacity style={styles.linearGradient} >
              <Text style={{ color: '#fff', fontSize: hp('2.5%'), textAlign: 'center', fontWeight: 'bold' }} >
                LOGIN
    </Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>



      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({

  loginstyle: {

    // color:'white',
    // backgroundColor:'white',
    // borderRadius:20,
    marginTop: hp('1%'),
    marginHorizontal: wp('2%'),
    borderWidth: 1,
    paddingHorizontal: wp('1.5%')

  },

  imgstyle: {


    marginTop: hp('1%'),
    marginLeft: wp('2%'),
    height: hp('3%'),
    width: wp('5%'),
    tintColor: '#fff'

  },

  linearGradient: {

    backgroundColor: '#0400FF',
    padding: hp('2%'),
    marginTop: hp('7%'),
    width: wp('90%'),
    alignSelf: 'center',
    borderRadius: wp('1%'),


  },



}
)
