import React, { setState } from 'react';
import { version } from 'react';
import { SafeAreaView, Image, Text, Dimensions, FlatList, StyleSheet, View, TouchableOpacity, } from "react-native";
import { ScrollView } from 'react-native-gesture-handler';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import AppHeader from '../component/AppHeader';

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

const Payment = (props)  =>{

return(

     <SafeAreaView style={{flex:1, backgroundColor:'#fff'}}  >

         <AppHeader 
          onPress={() =>props.navigation.navigate('Notification')}
          onPress1={() =>props.navigation.openDrawer()}
          onPress2={() => this.props.navigation.navigate('Addservices')}
         />
 


         <Text style={{ fontSize: hp('2.8%'), fontWeight: 'bold', marginTop: hp('3%'), marginLeft: wp('5%'), }} >
             Payment History
         </Text>
     </SafeAreaView>

);

}

export default Payment;