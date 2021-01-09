import React from 'react';
import { SafeAreaView, Image, ActivityIndicator, Dimensions, Text, View, TouchableOpacity, TextInput, StyleSheet, FlatList } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height
export default class Information extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      visible: true,
      email: '',
      password: '',

      data: [

        {
          id: 1,
          head: 'Deep cleaning',
          image: require('../Assets/commercial.jpg'),
          date: 'booking date',
          time: 'booking time',
          money: 'amount',
          number: 'Phone',
          address: 'Address (home) ',
          user: 'User',

          date1: '19 NOV 2020',
          time1: '11am - 12am',
          money1: '114$',
          number1: ' xxxxxxxxxx',
          address1: 'hyderabad',
          user1: 'Demo User',

        },
        {
          id: 2,
          head: 'services',
          image: require('../Assets/CLEANINGse.jpg'),
          date: 'booking date',
          time: 'booking time',
          money: 'amount',
          number: 'Phone',
          address: 'Address (home) ',
          user: 'User',

          date1: '19 NOV 2020',
          time1: '11am - 12am',
          money1: '114$',
          number1: ' xxxxxxxxxx',
          address1: 'hyderabad',
          user1: 'Demo User',

        },
        {
          id: 3,
          head: 'Demo',
          image: require('../Assets/services.jpg'),
          date: 'booking date',
          time: 'booking time',
          money: 'amount',
          number: 'Phone',
          address: 'Address (home)',
          user: 'User',

          date1: '19 NOV 2020',
          time1: '11am - 12am',
          money1: '114$',
          number1: ' xxxxxxxxxx',
          address1: 'hyderabad',
          user1: 'Demo User',

        },
        {
          id: 4,
          head: 'schoon maker',
          image: require('../Assets/handyman.jpg'),
          date: 'booking date',
          time: 'booking time',
          money: 'amount',
          number: 'Phone',
          address: 'Address (home)',
          user: 'User',

          date1: '19 NOV 2020',
          time1: '11am - 12am',
          money1: '114$',
          number1: ' xxxxxxxxxx',
          address1: 'hyderabad',
          user1: 'Demo User',

        },

        {
          id: 5,
          head: 'dogwalking',
          image: require('../Assets/CLEANINGse.jpg'),
          date: 'booking date',
          time: 'booking time',
          money: 'amount',
          number: 'Phone',
          address: 'Address (home)',
          user: 'User',

          date1: '19 NOV 2020',
          time1: '11am - 12am',
          money1: '114$',
          number1: ' xxxxxxxxxx',
          address1: 'hyderabad',
          user1: 'Demo User',

        },

        {
          id: 6,
          head: 'program',
          image: require('../Assets/services.jpg'),
          date: 'booking date',
          time: 'booking time',
          money: 'amount',
          number: 'Phone',
          address: 'Address (home)',
          user: 'User',

          date1: '19 NOV 2020',
          time1: '11am - 12am',
          money1: '114$',
          number1: ' xxxxxxxxxx',
          address1: 'hyderabad',
          user1: 'Demo User',

        },
      ]

    };
  }

  renderItem = ({ item }) => {

    return (

      <View style={{ borderWidth: 1, width: wp('95%'), alignSelf: 'center', borderRadius: wp('2%'), borderColor: '#ccc', marginBottom: hp('4%') }} >
        <View style={{ flexDirection: 'row' }} >
         <TouchableOpacity onPress={() => this.props.navigation.navigate('Details') }  >
         <Image style={{ height: hp('12%'), width: wp('25%'), marginTop: hp('1%'), marginLeft: wp('1%'), borderRadius: wp('2%') }} source={item.image} />
         </TouchableOpacity>

          <View style={{marginHorizontal:wp('5%'), marginTop:hp('1%')}} >

            <Text style={{ fontSize: hp('2.3%'), fontWeight: 'bold', }} > {item.head} </Text>

            <View style={{marginVertical:hp('2%') }} >
              
            <Text style={styles.font}  > {item.date}                <Text style={styles.font1} >{item.date1}</Text>   </Text>
            <Text style={styles.font}  > {item.time}                <Text style={styles.font1}  >{item.time1}</Text>  </Text>
            <Text style={styles.font}  > {item.money}                          <Text style={styles.font1}  >{item.money1}</Text>  </Text>
            <Text style={styles.font}  > {item.number}                            <Text style={styles.font1}  >{item.number1}</Text>  </Text>
            <Text style={styles.font}  > {item.address}          <Text style={styles.font1}  >{item.address1}</Text>   </Text>
            <Text style={styles.font}  > {item.user}                                <Text style={styles.font1}  >{item.user1}</Text>   </Text>
            </View>
          </View>
        </View>

      </View>


    );
  }


  render() {
    return (
      <SafeAreaView style={{

        flex: 1, backgroundColor: '#fff'
      }}>

        <View style={[{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: 'white' }, styles.shadow]}>
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <Image style={styles.imgstyle} source={require('../Assets/healer/backarrow.png')} />
          </TouchableOpacity>
        </View>



        <View>
          <Text style={{ fontWeight: 'bold', fontSize: hp('2.5%'), margin: wp('5%') }} >
            Booking List
          </Text>
        </View>

        <FlatList
          showsHorizontalScrollIndicator={false}
          // horizontal
          data={this.state.data}
          renderItem={this.renderItem}
          keyExtractor={item => item.id}
        // indicatorStyle={}
        />


      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({


  imgstyle: {

    height: hp('2%'),
    width: wp('5%'),
    margin: wp('2%')

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

  font: {

    fontSize: hp('1.7%')

  },

  font1: {

    color: '#6C7592',

  }

}
)
