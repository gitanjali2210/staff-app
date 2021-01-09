import React, { setState } from 'react';
import { version } from 'react';
import { SafeAreaView, Image, Text, Dimensions, FlatList, StyleSheet, View, TouchableOpacity, } from "react-native";
import { ScrollView } from 'react-native-gesture-handler';
// import MaterialTabs from 'react-native-material-tabs';
import LinearGradient from 'react-native-linear-gradient';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height


const Setting = (props) => {

  const DATA = [              //(array generation)
    {
      id: '1',
      title: 'Dashboard',
      image: require('../Assets/housei.png')
    },
    {
      id: '2',
      title: 'My Services',
      image: require('../Assets/healer/avatar.png')
    },

    {
      id: '3',
      title: 'Booking list',
      image: require('../Assets/history.png')
    },

    {
      id: '4',
      title: 'Profile Setting',
      image: require('../Assets/share.png')
    },
    {
      id: '5',
      title: 'Wallet',
      image: require('../Assets/help.png')
    },
    {
      id: '6',
      title: 'Review',
      image: require('../Assets/comment.png')
    },
    {
      id: '7',
      title: 'Payment',
      image: require('../Assets/information.png')
    },

    {
      id: '8',
      title: 'Login',
      image: require('../Assets/team.png')
    },
    {
      id: '9',
      title: 'Change Password',
      image: require('../Assets/team.png')
    },
  ]


  const onClickMenu = (Id) => {

    switch (Id) {
      case '1':
        props.navigation.navigate('Hellopage')
        break
      case '2':
        props.navigation.navigate('Myservices')
        break
      case '3':
        props.navigation.navigate('Information')
        break
      case '4':
        props.navigation.navigate('Profile')
        break
      case '5':
        props.navigation.navigate('Wallet')
        break
      case '6':
        props.navigation.navigate('Review')
        break
      case '7':
        props.navigation.navigate('Payment')
        break
        case '8':
        props.navigation.navigate('Login')
        break
        case '9':
          props.navigation.navigate('Changepass')
          break
      default:
        return
    }
  }


  const renderItem = ({ item }) => (
    <View style={{ alignContent: 'center' }} >

      <TouchableOpacity style={styles.box}

        onPress={() => {
          onClickMenu(item.id)
          // alert(item.id)

        }}>
        <Image style={{ height: hp('3%'), width: wp('5.5%'), marginTop: hp('1%'),}} source={item.image} />
        <View style={styles.item}>
          <Text style={styles.title}>{item.title}</Text>
        </View>
        <Image resizeMode='contain' style={{ height: hp('2%'), width: wp('2%'),marginTop:hp('2%') }} source={require('../Assets/healer/forward.png')} />

      </TouchableOpacity>
      {/* <View                                    //horizontal line
        style={{
          borderWidth: 1,
          marginLeft: 6,
          marginRight: 10,
          width: wp('63%'),
          borderColor: '#ccc'
        }} /> */}
    </View>

  );


  return (

    <ScrollView>


      <SafeAreaView
        style={{
          flex: 1
        }}>


           
              <Image style={{ height: hp('8%'), width: wp('15%'),marginLeft:hp('2%'), marginTop:hp('2%'), tintColor:'#EA2E40'}} 
              source={require('../Assets/profileuser.png')} />
              <View>
                <Text style={{ fontSize: hp('2.5%'), fontWeight: 'bold', }} >      USER NAME</Text>
                <Text style={{ fontSize: hp('2%')}} >       Member since AUG 2020</Text>

              </View>

        

        <View style={{ flex: 1, }}>
          <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </View>


      </SafeAreaView>

    </ScrollView>

  );
}
const styles = StyleSheet.create({

  item: {
    justifyContent: "center",

    width: wp('50%'),
    marginHorizontal: 5,
    marginTop: 10,




  },
  title: {

    fontSize: hp('2.2%'),
    marginHorizontal: 5,
    fontWeight: 'bold',
    // marginTop:5
    marginLeft: 20

  },

  box: {
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: '#fff',
    paddingVertical: 10,
    padding: 10,
    borderRadius: 10,
    marginVertical: 5,
    // marginHorizontal: 25,
    marginTop: 10,
    marginBottom:10
  },

  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,

    elevation: 15,
  },

  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  },

});

export default Setting;