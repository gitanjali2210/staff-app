import React, { setState } from 'react';
import { version } from 'react';
import { SafeAreaView, Image, Text, Dimensions, FlatList, StyleSheet, View, TouchableOpacity, } from "react-native";
import { ScrollView } from 'react-native-gesture-handler';
// import MaterialTabs from 'react-native-material-tabs';
import LinearGradient from 'react-native-linear-gradient';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import AppHeader from '../component/AppHeader';

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height


const Wallet = (props) => {


  return (

    <SafeAreaView
      style={{ flex: 1, backgroundColor: '#fff' }}
    >

      <AppHeader
        onPress={() => props.navigation.navigate('Notification')}
        onPress1={() => props.navigation.openDrawer()}
        onPress2={() => this.props.navigation.navigate('Addservices')}

      />

      <View style={{ borderWidth: .3, marginTop: hp('3%'), margin: wp('5%'), }} >

        <View style={{ marginVertical: hp('2%') }} >
          <Text style={styles.mainhead} >
            Wallet
            </Text>
          <Text style={{ fontSize: hp('2%'), marginHorizontal: wp('5%'), }} >
            Wallet Balance
            </Text>
          <Text style={{ fontSize: hp('3%'), marginHorizontal: wp('5%'), fontWeight: 'bold' }} >
            0/-
            </Text>




          <View style={{ flexDirection: 'row', marginTop: hp('5%'), justifyContent: 'space-between' }} >
            <View>
              <Text style={styles.total} >
                Total Credit
            </Text>
              <Text style={styles.total} >
                0/-
            </Text>
            </View>

            <View>
              <Text style={styles.total}>
                Total Debit
            </Text>
              <Text style={styles.total} >
                0/-
            </Text>
            </View>
          </View>
        </View>
      </View>

    </SafeAreaView>
  );


}

const styles = StyleSheet.create({


  mainhead: {

    marginTop: wp('5%'),
    marginLeft: wp('5%'),
    fontSize: hp('2.5%'),
    fontWeight: 'bold',
    // marginBottom: wp('2%'),

  },

  total: {

    fontSize: hp('2.3%'),
    marginHorizontal: wp('4%'),
    textAlign: 'center', 
    fontWeight:'bold'

  }

})

export default Wallet;