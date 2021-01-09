import React from 'react';
import { SafeAreaView, Image, ActivityIndicator, Dimensions, Text, View, StyleSheet, TouchableOpacity, FlatList, ImageBackground } from "react-native";
import AppHeader from '../component/AppHeader';


import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import react from 'react';
import { ScrollView } from 'react-native-gesture-handler';

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

export default class Details extends react.Component {

  constructor(props) {
    super(props);
    this.state = {
      visible: true,

      choose: [

        {
          id: 1,
          head: 'Deep cleaning',
          image: require('../Assets/commercial.jpg'),
          title: ' Phone (xxxxx..)',
          text: ' Address (home)',
          label: 'cleaning',
          price: 'amount',
        },
        {
          id: 2,
          head: 'services',
          image: require('../Assets/CLEANINGse.jpg'),
          title: ' Phone (xxxxx..)',
          text: ' Address (home) ',
          label: 'cleaning',
          price: 'amount'
        },
        {
          id: 3,
          head: 'Demo',
          image: require('../Assets/services.jpg'),
          title: ' Phone (xxxxx..)',
          text: ' Address (home)',
          label: 'cleaning',
          price: 'amount'
        },
        {
          id: 4,
          head: 'schoon maker',
          image: require('../Assets/handyman.jpg'),
          title: ' Phone (xxxxx..)',
          text: ' Address (home)',
          label: 'cleaning',
          price: 'amount'
        },

        {
          id: 5,
          head: 'dogwalking',
          image: require('../Assets/CLEANINGse.jpg'),
          title: ' Phone (xxxxx..)',
          text: ' Address (home)',
          label: 'cleaning',
          price: 'amount'
        },

        {
          id: 6,
          head: 'program',
          image: require('../Assets/services.jpg'),
          title: ' Phone (xxxxx..)',
          text: ' Address (home)',
          label: 'cleaning',
          price: 'amount'
        },
      ],
    };
  }



  renderchooseItem = ({ item, index }) => {

    return (

      <View style={styles.flatlist} >
        <ImageBackground imageStyle={{ borderTopLeftRadius: wp('2%'), borderTopRightRadius: wp('2%') }}
          style={{ height: hp('25%'), width: wp('70%'), alignSelf: 'center' }}
          source={item.image} >

          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }} >

            <View style={{ backgroundColor: '#EA2E40', marginTop: hp('20%'), width: wp('20%'), borderRadius: wp('4%'), marginLeft: wp('2%') }} >
              <Text style={{ color: '#fff', padding: wp('1%'), textAlign: 'center' }} >
                {item.price}
              </Text>
            </View>

            <View style={{ backgroundColor: '#EA2E40', marginTop: hp('20%'), width: wp('20%'), borderRadius: wp('4%'), marginRight: wp('2%') }} >
              <Text style={{ color: '#fff', padding: wp('1%'), textAlign: 'center' }} >
                {item.label}
              </Text>
            </View>
          </View>

        </ImageBackground>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Details')}  >
          <Text style={{ fontWeight: 'bold', fontSize: hp('2.2%'), marginTop: 10, marginLeft: 10 }}>
            {item.head}
          </Text>
        </TouchableOpacity>


        <View style={{ flexDirection: 'row', marginLeft: wp('2%'), marginTop: hp('1%') }} >
          <Image style={styles.star}
            source={require('../Assets/star.png')} />
          <Image style={styles.star}
            source={require('../Assets/star.png')} />
          <Image style={styles.star}
            source={require('../Assets/star.png')} />
          <Image style={styles.star}
            source={require('../Assets/star.png')} />
          <Image style={styles.star}
            source={require('../Assets/star.png')} />
          <Text >
            {'(0)'}
          </Text>
        </View>


        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: hp('1%'), marginVertical: hp('1%') }} >
          <Text>{item.title}
          </Text>
          <Text> {item.text}
          </Text>
        </View>

      </View>

    );
  }



  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }} >

        <AppHeader
          onPress={() => this.props.navigation.navigate('Notification')}
          onPress1={() => this.props.navigation.openDrawer()}
          onPress2={() => this.props.navigation.navigate('Addservices')}
        />

        <ScrollView>

          <Text style={{ fontSize: hp('2.8%'), fontWeight: 'bold', marginLeft: wp('2%'), marginTop: wp('2%') }} >
            Service Provider
          </Text>


          <View style={{ flexDirection: 'row', marginTop: hp('2%') }}  >
            <Image style={{ height: hp('8%'), width: wp('15%'), marginLeft: hp('2%'), tintColor: '#EA2E40' }}
              source={require('../Assets/profileuser.png')} />
            <View style={{ marginHorizontal: wp('1%') }}  >
              <Text style={{ fontSize: hp('2.3%'), fontWeight: 'bold', }} > USER NAME</Text>
              <Text style={{ fontSize: hp('1.7%') }} > <Text style={{ color: 'green' }} >{'\u2B24'}</Text> Online</Text>
              <Text style={{ fontSize: hp('1.7%') }} > Member since AUG 2020</Text>

              <Text style={{ fontSize: hp('1.7%') }} > *******@gmail.com</Text>
              <Text style={{ fontSize: hp('1.7%') }} > 9988665498</Text>



            </View>

          </View>


          <View style={{ marginHorizontal: wp('2%'), marginTop: hp('3%') }}>
            <Text style={{ fontSize: hp('2.8%'), fontWeight: 'bold', }} >
              Deep cleaning
                 </Text>
            <Text>
              amsterdam,netherland
                 </Text>

            <View style={{ flexDirection: 'row', marginTop: hp('1%') }} >
              <Image resizeMode='contain' style={styles.star}
                source={require('../Assets/star.png')} />
              <Image resizeMode='contain' style={styles.star}
                source={require('../Assets/star.png')} />
              <Image resizeMode='contain' style={styles.star}
                source={require('../Assets/star.png')} />
              <Image resizeMode='contain' style={styles.star}
                source={require('../Assets/star.png')} />
              <Image resizeMode='contain' style={styles.star}
                source={require('../Assets/star.png')} />
              <Text >
                {'(0)'}
              </Text>
            </View>



            <View style={{ backgroundColor: '#EA2E40', width: wp('23%'), borderRadius: wp('2%'), marginTop: hp('1%') }} >
              <Text style={{ color: '#fff', padding: wp('1%'), textAlign: 'center' }} >
                Cleaning
            </Text>
            </View>
          </View>

          <Image style={{ padding: wp('3%'), width: wp('95%'), marginTop: hp('2%'), marginLeft: wp('2%') }}
            source={require('../Assets/handwash.jpg')} />



          <View style={{ flexDirection: 'row', marginTop: hp('2%') }} >


            <TouchableOpacity>
              <Text style={styles.plan} >Overviews</Text>
            </TouchableOpacity>

            <TouchableOpacity>
              <Text style={styles.plan} >Service offered</Text>
            </TouchableOpacity>

            <TouchableOpacity>
              <Text style={styles.plan} >Reviews</Text>
            </TouchableOpacity>

          </View>

          <View style={{ borderWidth: 0.5, marginTop: hp('5%'), padding: wp('2%') }} >
            <Text style={{ fontSize: hp('2.3%'), marginHorizontal: wp('2%'), fontWeight: 'bold', }} >
              Service Details
        </Text>

            <Text style={{ fontSize: hp('2%'), marginHorizontal: wp('2%'), fontWeight: 'bold', }} >
              1BHK  house deep cleaning No harmful chemicals
        </Text>
          </View>

          <View style={{ borderWidth: 0.3, marginTop: hp('5%'), padding: wp('1%') }} >
            <Text style={{ fontSize: hp('2.3%'), marginHorizontal: wp('2%'), fontWeight: 'bold', marginVertical: hp('2%') }} >
              Service Availability
         </Text>

            <View style={{ marginHorizontal: wp('2%'), marginBottom: hp('1%') }} >
              <Text style={{ fontSize: hp('2%'), color: '#6C7592' }} >Monday                    <Text style={{ fontSize: hp('2%'), color: '#6C7592' }} >10:00AM - 09:00 PM</Text> </Text>
              <Text style={{ fontSize: hp('2%'), color: '#6C7592' }} >Tuesday                    <Text style={{ fontSize: hp('2%'), color: '#6C7592' }} >10:00AM - 09:00 PM</Text> </Text>
              <Text style={{ fontSize: hp('2%'), color: '#6C7592' }} >Wednesday              <Text style={{ fontSize: hp('2%'), color: '#6C7592' }} >10:00AM - 09:00 PM</Text> </Text>
              <Text style={{ fontSize: hp('2%'), color: '#6C7592' }} >Thursday                  <Text style={{ fontSize: hp('2%'), color: '#6C7592' }} >10:00AM - 09:00 PM</Text> </Text>
              <Text style={{ fontSize: hp('2%'), color: '#6C7592' }} >Friday                        <Text style={{ fontSize: hp('2%'), color: '#6C7592' }} >10:00AM - 09:00 PM</Text> </Text>
            </View>


          </View>

          <Text style={{ fontSize: hp('2.3%'), marginHorizontal: wp('2%'), fontWeight: 'bold', marginTop: hp('5%') }} >
            Related Services
        </Text>


          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal
            data={this.state.choose}
            renderItem={this.renderchooseItem}
            keyExtractor={item => item.id}
          // indicatorStyle={}
          />

        </ScrollView>

      </SafeAreaView>

    );
  }
}

const styles = StyleSheet.create({

  star: {

    height: hp('1.5%'),
    width: wp('3%'),
    margin: wp('.5%'),
    tintColor: '#ccc',

  },

  plan: {

    backgroundColor: '#EA2E40',
    fontWeight: 'bold',
    fontSize: hp('1.8%'),
    textAlign: 'center',
    color: '#fff',
    padding: wp('2%'),
    borderRadius: wp('1%'),
    marginHorizontal: wp('5%')


  },


  flatlist: {
    // backgroundColor: '#fff',
    borderRadius: wp('2%'),
    width: wp('70%'),
    alignSelf: 'center',
    marginTop: hp('2%'),
    borderWidth: 1,
    borderColor: '#ccc',
    marginHorizontal: wp('3%'),
    marginVertical: hp('2%'),
    // paddingVertical:hp('1%')
  }

})