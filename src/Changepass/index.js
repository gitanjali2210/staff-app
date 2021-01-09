import React from 'react';
import { SafeAreaView, Image, ActivityIndicator, Dimensions, Text, View, TouchableOpacity, TextInput, StyleSheet, ImageBackground } from "react-native";
import { ScrollView } from 'react-native-gesture-handler';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import AppHeader from '../component/AppHeader';

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height


export default class Changepass extends React.Component {

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

        <AppHeader
         onPress={() => this.props.navigation.navigate('Notification')}
         onPress1={() => this.props.navigation.openDrawer()}
         onPress2={() => this.props.navigation.navigate('Addservices')}
        />

        <ScrollView>
      

            <Text style={{ fontSize: hp('2.5%'), fontWeight: 'bold', marginVertical: hp('3%'), marginLeft: wp('5%'), }}>
              Change Password
     </Text>

      
            <View style={{marginVertical:hp('2%')}} >
              
          <Text style={styles.texthead} >Current Password</Text>
          <View style={styles.loginstyle}>
            <TextInput
              style={{ width: wp('18%') }}
              // placeholder="Name"
              placeholderTextColor='#6C7592'
              onChangeText={text => this.setState({ pass: text })}
              defaultValue={this.state.code}
            />
          </View>
            </View>

            <View style={{marginVertical:hp('2%')}} >
              
          <Text style={styles.texthead} >New Password</Text>
          <View style={styles.loginstyle}>
            <TextInput
              style={{ width: wp('18%') }}
              // placeholder="email"
              placeholderTextColor='#6C7592'
              onChangeText={text => this.setState({ newpass: text })}
              defaultValue={this.state.code}
            />
          </View>
            </View>


          <View style={{marginVertical:hp('2%')}} >
          <Text style={styles.texthead} >Confirm Password</Text>
          <View style={styles.loginstyle}>
            <TextInput
              style={{ width: wp('18%') }}
              // placeholder="dd/mm/yy"
              placeholderTextColor='#6C7592'
              onChangeText={text => this.setState({ confirm: text })}
              defaultValue={this.state.code}
            />
          </View>
          </View>


          <TouchableOpacity style={styles.linearGradient} >
            <Text style={{ color: '#fff', fontSize: hp('2.3%'), textAlign: 'center', fontWeight: 'bold' }} >
             Change
    </Text>
          </TouchableOpacity>
      
        </ScrollView>

      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({

  loginstyle: {
    marginVertical: hp('1%'),
    marginHorizontal: wp('3%'),
    borderWidth: 1,
    paddingHorizontal: wp('1.5%')

  },

  linearGradient: {

    backgroundColor: '#EA2E40',
    padding: hp('1.5%'),
    marginTop: hp('7%'),
    width: wp('60%'),
    alignSelf: 'center',
    borderRadius: wp('2%'),
  },

  texthead:{
    fontSize: hp('2%'),
     marginHorizontal: wp('4%'), 
     marginTop: hp('1%') 
  }



}
)
