import React from 'react';
import { SafeAreaView, Image, Dimensions, Text, View, TouchableOpacity, TextInput, StyleSheet, } from "react-native";
import { ScrollView } from 'react-native-gesture-handler';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import AppHeader from '../component/AppHeader';

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height
export default class Profile extends React.Component {

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






          <View style={{ flexDirection: 'row', marginVertical: hp('3%'), }}  >
            <Image style={{ height: hp('8%'), width: wp('15%'), marginLeft: hp('2%'), tintColor: '#EA2E40' }}
              source={require('../Assets/profileuser.png')} />
            <View style={{ marginHorizontal: wp('1%') }}  >
              <Text style={{ fontSize: hp('2.5%'), fontWeight: 'bold', }} > USER NAME</Text>

              <Text style={{ fontSize: hp('2%') }} > Member since AUG 2020</Text>



            </View>

          </View>

          <View style={{ marginVertical: hp('3%'), marginLeft: wp('5%'),  }} >

            <Text style={{ fontSize: hp('2.5%'), fontWeight: 'bold',}}>
              Profile Settings
     </Text>

            <Text style={{ fontSize: hp('2%'),}}>
              Basic Information
     </Text>

          </View>

          <Text style={styles.texthead} > Name</Text>
          <View style={styles.loginstyle}>
            <TextInput
              style={{ width: wp('18%') }}
              placeholder="Name"
              placeholderTextColor='#6C7592'
              onChangeText={text => this.setState({ name: text })}
              defaultValue={this.state.code}
            />
          </View>


          <Text style={styles.texthead}>Email</Text>
          <View style={styles.loginstyle}>
            <TextInput
              style={{ width: wp('18%') }}
              placeholder="email"
              placeholderTextColor='#6C7592'
              onChangeText={text => this.setState({ Email: text })}
              defaultValue={this.state.code}
            />
          </View>



          <Text style={styles.texthead}>Mobile Number</Text>

          <View style={{ flexDirection: 'row' }} >

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
                style={{ width: wp('61%') }}
                placeholder="enter Mobile number"
                placeholderTextColor='#6C7592'
                onChangeText={text => this.setState({ number: text })}
                defaultValue={this.state.number}
              />
            </View>
          </View>

          <Text style={styles.texthead}>Date of Birth</Text>
          <View style={styles.loginstyle}>
            <TextInput
              style={{ width: wp('18%') }}
              placeholder="dd/mm/yy"
              placeholderTextColor='#6C7592'
              onChangeText={text => this.setState({ Dob: text })}
              defaultValue={this.state.code}
            />
          </View>

          <Text style={{ fontSize: hp('2.8%'), fontWeight: 'bold', marginTop: hp('3%'), marginLeft: wp('5%'), }}>
            Service Info
     </Text>

          <Text style={styles.texthead}>What Service do you Provide?</Text>

          <View style={styles.loginstyle}>
            <TextInput
              style={{ width: wp('18%') }}
              placeholder="........."
              placeholderTextColor='#6C7592'
              onChangeText={text => this.setState({ SErvice: text })}
              defaultValue={this.state.code}
            />
          </View>

          <Text style={styles.texthead}>Sub Category</Text>


          <View style={styles.loginstyle}>
            <TextInput
              style={{ width: wp('18%') }}
              placeholder="......"
              placeholderTextColor='#6C7592'
              onChangeText={text => this.setState({ Category: text })}
              defaultValue={this.state.code}
            />
          </View>


          <Text style={{ fontSize: hp('2.8%'), fontWeight: 'bold', marginTop: hp('3%'), marginLeft: wp('5%'), }}>
            Address
     </Text>

          <Text style={styles.texthead}>Address</Text>


          <View style={styles.loginstyle}>
            <TextInput
              style={{ width: wp('18%') }}
              placeholder="......"
              placeholderTextColor='#6C7592'
              onChangeText={text => this.setState({ Address: text })}
              defaultValue={this.state.code}
            />
          </View>

          <Text style={styles.texthead}>Country</Text>


          <View style={styles.loginstyle}>
            <TextInput
              style={{ width: wp('18%') }}
              placeholder="......"
              placeholderTextColor='#6C7592'
              onChangeText={text => this.setState({ Country: text })}
              defaultValue={this.state.code}
            />
          </View>

          <Text style={styles.texthead}>State</Text>


          <View style={styles.loginstyle}>
            <TextInput
              style={{ width: wp('18%') }}
              placeholder="......"
              placeholderTextColor='#6C7592'
              onChangeText={text => this.setState({ State: text })}
              defaultValue={this.state.code}
            />
          </View>

          <Text style={styles.texthead}>City</Text>


          <View style={styles.loginstyle}>
            <TextInput
              style={{ width: wp('18%') }}
              placeholder="......"
              placeholderTextColor='#6C7592'
              onChangeText={text => this.setState({ City: text })}
              defaultValue={this.state.code}
            />
          </View>

          <Text style={styles.texthead}>Postal Code</Text>


          <View style={styles.loginstyle}>
            <TextInput
              style={{ width: wp('18%') }}
              placeholder="......"
              placeholderTextColor='#6C7592'
              onChangeText={text => this.setState({ PostalCode: text })}
              defaultValue={this.state.code}
            />
          </View>

          <TouchableOpacity style={styles.linearGradient} >
            <Text style={{ color: '#fff', fontSize: hp('2.3%'), textAlign: 'center', fontWeight: 'bold' }} >
              Update
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
    marginVertical:hp('4%') 

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

  texthead:{
    fontSize: hp('2%'), 
    marginHorizontal: wp('5%'), 
    marginTop: hp('1%'),
    
  }



}
)
