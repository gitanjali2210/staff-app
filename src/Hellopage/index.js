import React from 'react';
import { SafeAreaView, Image, ActivityIndicator, Dimensions, Text, View, TouchableOpacity, TextInput, FlatList, StyleSheet, ImageBackground } from "react-native";
import { ScrollView } from 'react-native-gesture-handler';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import AppHeader from '../component/AppHeader'
import Login from '../Login';

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height
export default class Hellopage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      visible: true,
      search: '',
      selectedIndex: null,

    };
  }

  onSelectTab(index) {
    this.setState({
      selectedIndex: index
    })
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

          <Text style={styles.mainhead} >
            DashBoard
          </Text>

         <TouchableOpacity  onPress={() => this.props.navigation.navigate('Details')}
          style={{backgroundColor:'#FF0080', flexDirection:'row', padding:wp('2.5%'),marginVertical:hp('1.5%')}} > 
 
         <View style={styles.numstyle} >
           <Text  style={styles.number} >
              23
            
            </Text>
           </View>
            <Text style={styles.heading} >
              Bookings
            </Text>

         </TouchableOpacity>

         
         <TouchableOpacity    onPress={() => this.props.navigation.navigate('Details')}
          style={{backgroundColor:'#323031', flexDirection:'row', padding:wp('2.5%'),marginVertical:hp('1.5%')}} > 
 
           <View style={styles.numstyle} >
           <Text  style={styles.number} >
              30
            
            </Text>
           </View>
            <Text style={styles.heading} >
              Services
            </Text>

         </TouchableOpacity>


         
         <TouchableOpacity onPress={() => this.props.navigation.navigate('Details')}
          style={{backgroundColor:'#D9C505', flexDirection:'row', padding:wp('2.5%'),marginVertical:hp('1.5%'),}} > 
 
         <View style={styles.numstyle} >
           <Text  style={styles.number} >
              00
            
            </Text>
           </View>
            <Text style={styles.heading} >
              Notification
            </Text>

         </TouchableOpacity>

           <View style={{borderWidth:1, borderRadius:wp('2%'), margin:wp('2%'), padding:wp('2%'), marginTop:hp('4%'), borderColor:'#ccc'}}  >
             <Text style={styles.text} >Plan Details</Text>

            <View style={{flexDirection:'row'}} >
            <Text style={styles.text} >Standard </Text>
             <Text style={styles.active}  >Active</Text>
            </View>

             <Text style={styles.text1} >Subscription ID :   xxxxxxx</Text>
             <Text style={styles.text1} >Starting dates      (eg: 17NOV, 2020) </Text>
             <Text style={styles.text} >Last Payment</Text>
             <Text style={styles.text1} >Paid date                paid $50</Text>

           <View style={{alignSelf:'center', marginTop:hp('3%')}} >

           <TouchableOpacity>
           <Text style={styles.plan} >Change Plan</Text>
           </TouchableOpacity>
             <Text style={[{marginTop:hp('1%')},styles.text1]} >Next Billing on 16MAY, 2021</Text>

           </View>

           </View>

           <Text style={styles.mainhead} >
            About Us
             </Text>
             <Text style={[{marginBottom:hp('5%')},styles.text1]} >
             We offer an 100% customized Services marketplace in effective way. 
             We provide basic startups, 
              as per your business needs.
             </Text>

             



        </ScrollView>


      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({

  text:{

    fontWeight:'bold',
     fontSize:hp('2%'),
     marginTop:hp('1%')
  },

  text1:{
    fontWeight:'bold',
     fontSize:hp('2%'),
     color:'#6C7592', 
    //  marginTop:hp('1%')
    marginHorizontal:wp('3%')
  },

  active:{

    backgroundColor:'green',
    color:'#fff' ,
    borderRadius:wp('3%'),
    width:wp('15%'),
    textAlign:'center',
    fontWeight:'bold',
    marginTop:hp('1%'),
    marginLeft:wp('1%')

  },

  plan:{
    backgroundColor:'#EA2E40',
    fontWeight:'bold',
    fontSize:hp('1.7%'),
    width:wp('30%'),
    textAlign:'center',
    color:'#fff',
    padding:wp('1%'),
    borderRadius:wp('1%'), 
    alignSelf:'center'

  },

   heading:{

    fontSize:hp('2.5%'), 
    color:'#fff',
    marginLeft:wp('5%'),
    marginTop:hp('2%'),
    fontWeight:'bold'
     
   },

   number:{

    fontSize:hp('2.3%'),
     color:'#fff',
      textAlign:'center',
       margin:wp('2%')
   },

   numstyle:{

    borderWidth:1, 
    borderColor:'#fff', 
    padding:wp('1%'),
     borderRadius:wp('8%'),
   },
   mainhead:{
     
    marginVertical:hp('2%'),
    marginLeft:wp('5%'),
    fontSize:hp('2.5%'), 
    fontWeight:'bold',
   
  
  }



}
)
