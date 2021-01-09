import React from 'react';
import { SafeAreaView, Image, ActivityIndicator, Dimensions, Text, View } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height
export default class Splash extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      visible: true
    };
  }

  UNSAFE_componentWillMount() {
    this.gotoNext();
  }


  async gotoNext() {
    try {
      setTimeout(() => {

        this.props.navigation.navigate('Hellopage');
        //  this.props.navigation.navigate('Flatlist');

      }, 1500);
    } catch (error) {
      Alert.alert("Something went wrong")
    }
  }


  render() {
    return (
      <SafeAreaView style={{
        flex: 1, backgroundColor:'#fff'
      }}>


        <Image resizeMode='contain'
          source={require('../Assets/hDpi.png')}
          style={{ height: hp('25%'), width: wp('60%'), margin: '50%', alignSelf: 'center' }}
        />

      </SafeAreaView>
    );
  }
}
