import React from 'react';
import { SafeAreaView, Image, Dimensions, Text, View, TouchableOpacity, TextInput, StyleSheet, } from "react-native";
import { ScrollView } from 'react-native-gesture-handler';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import AppHeader from '../component/AppHeader';

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height
export default class Addservices extends React.Component {

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



        <View style={{ backgroundColor: 'white', padding: wp('1%') }}>
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <Image resizeMode='contain' style={styles.back} source={require('../Assets/healer/backarrow.png')} />
          </TouchableOpacity>
        </View>

        <ScrollView>




          <Text style={{ fontSize: hp('2.5%'), fontWeight: 'bold', textAlign: 'center', marginVertical: hp('2%') }}>
            ADD SERVICES
     </Text>


          <Text style={{ fontSize: hp('2.8%'), fontWeight: 'bold', marginTop: hp('3%'), marginLeft: wp('5%'), }}>
            Service Information
     </Text>
          <Text style={styles.texthead} > service title</Text>
          <View style={styles.loginstyle}>
            <TextInput
              style={{ width: wp('40%') }}
              // placeholder="Name"
              placeholderTextColor='#6C7592'
              onChangeText={text => this.setState({ name: text })}
              defaultValue={this.state.code}
            />
          </View>


          <Text style={styles.texthead}>service amount</Text>
          <View style={styles.loginstyle}>
            <TextInput
              style={{ width: wp('40%') }}
              // placeholder="email"
              placeholderTextColor='#6C7592'
              onChangeText={text => this.setState({ Email: text })}
              defaultValue={this.state.code}
            />
          </View>


          <Text style={styles.texthead}>service Location</Text>
          <View style={styles.loginstyle}>
            <TextInput
              style={{ width: wp('30%') }}
              placeholder="enter Location"
              placeholderTextColor='#6C7592'
              onChangeText={text => this.setState({ Dob: text })}
              defaultValue={this.state.code}
            />
          </View>

          <Text style={{ fontSize: hp('2.8%'), fontWeight: 'bold', marginTop: hp('3%'), marginLeft: wp('5%'), }}>
            Service Category
     </Text>

          <Text style={styles.texthead}>Category</Text>

          <View style={styles.loginstyle}>
            <TextInput
              style={{ width: wp('40%') }}
              placeholder="........."
              placeholderTextColor='#6C7592'
              onChangeText={text => this.setState({ SErvice: text })}
              defaultValue={this.state.code}
            />
          </View>

          <Text style={styles.texthead}>Sub Category</Text>


          <View style={styles.loginstyle}>
            <TextInput
              style={{ width: wp('40%') }}
              placeholder="......"
              placeholderTextColor='#6C7592'
              onChangeText={text => this.setState({ Category: text })}
              defaultValue={this.state.code}
            />
          </View>


          <Text style={{ fontSize: hp('2.8%'), fontWeight: 'bold', marginTop: hp('3%'), marginLeft: wp('5%'), }}>
            Service Offer
     </Text>

          <Text style={styles.texthead}>Service Offered</Text>


          <View style={styles.loginstyle}>
            <TextInput
              style={{ width: wp('40%') }}
              placeholder="......"
              placeholderTextColor='#6C7592'
              onChangeText={text => this.setState({ Address: text })}
              defaultValue={this.state.code}
            />
          </View>


          <Text style={{ fontSize: hp('2.8%'), fontWeight: 'bold', marginTop: hp('3%'), marginLeft: wp('5%'), }}>
            Detail Information
     </Text>

          <Text style={styles.texthead}>Description</Text>


          <View style={styles.loginstyle}>
            <TextInput
              style={{ width: wp('90%'), height: hp('20%') }}
              // placeholder="......"
              placeholderTextColor='#6C7592'
              onChangeText={text => this.setState({ Country: text })}
              defaultValue={this.state.code}
            />
          </View>


          <Text style={{ fontSize: hp('2.8%'), fontWeight: 'bold', marginTop: hp('3%'), marginLeft: wp('5%'), }}>
            Service Gallery
     </Text>


          <View style={styles.loginstyle}>
            <TextInput
              style={{ width: wp('90%'), height: hp('20%') }}
              // placeholder="......"
              placeholderTextColor='#6C7592'
              onChangeText={text => this.setState({ State: text })}
              defaultValue={this.state.code}
            />
          </View>


          <TouchableOpacity style={styles.linearGradient} >
            <Text style={{ color: '#fff', fontSize: hp('2.3%'), textAlign: 'center', fontWeight: 'bold' }} >
              Submit
    </Text>
          </TouchableOpacity>

        </ScrollView>

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
    marginHorizontal: wp('3%'),
    borderWidth: 1,
    paddingHorizontal: wp('2%'),
    marginVertical: hp('4%')

  },

  imgstyle: {


    marginTop: hp('1%'),
    marginLeft: wp('2%'),
    height: hp('3%'),
    width: wp('5%'),
    tintColor: '#fff'

  },

  linearGradient: {

    backgroundColor: '#EA2E40',
    padding: hp('1.5%'),
    marginVertical: hp('4%'),
    width: wp('70%'),
    alignSelf: 'center',
    borderRadius: wp('1%'),


  },

  texthead: {
    fontSize: hp('2%'),
    marginHorizontal: wp('5%'),
    marginTop: hp('1%'),

  },

  back: {

    height: hp('3%'),
    width: wp('4%'),
    margin: wp('1%'),

},



}
)
