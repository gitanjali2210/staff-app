import React from 'react';
import { SafeAreaView, Image, ActivityIndicator, Dimensions, Text, View, TouchableOpacity, TextInput, StyleSheet, FlatList, ImageBackground } from "react-native";
import AppHeader from '../component/AppHeader';
// import { WebView } from 'react-native-webview';
// import LinearGradient from 'react-native-linear-gradient';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height
export default class Myservices extends React.Component {

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
          text: ' Address (home)' ,
          label:'cleaning',
          price:'amount',
        },
        {
          id: 2,
          head: 'services',
          image: require('../Assets/CLEANINGse.jpg'),
          title: ' Phone (xxxxx..)',
          text: ' Address (home) ',
          label:'cleaning',
          price:'amount'
        },
        {
          id: 3,
          head: 'Demo',
          image: require('../Assets/services.jpg'),
          title: ' Phone (xxxxx..)',
          text: ' Address (home)',
          label:'cleaning',
          price:'amount'
        },
        {
          id: 4,
          head: 'schoon maker',
          image: require('../Assets/handyman.jpg'),
          title: ' Phone (xxxxx..)',
          text: ' Address (home)',
          label:'cleaning',
          price:'amount'
        },

        {
          id: 5,
          head: 'dogwalking',
          image: require('../Assets/CLEANINGse.jpg'),
          title: ' Phone (xxxxx..)',
          text: ' Address (home)',
          label:'cleaning',
          price:'amount'
        },

        {
          id: 6,
          head: 'program',
          image: require('../Assets/services.jpg'),
          title: ' Phone (xxxxx..)',
          text: ' Address (home)',
          label:'cleaning',
          price:'amount'
        },


      ],
    };
  }

  renderchooseItem = ({ item, index }) => {

    return (

      <View style={styles.flatlist} >
        <ImageBackground imageStyle={{ borderTopLeftRadius: wp('2%'), borderTopRightRadius: wp('2%') }}
          style={{ height: hp('25%'), width: wp('90%'), alignSelf: 'center' }}
          source={item.image} >

         <View style={{flexDirection:'row', justifyContent:'space-between'}} >
  
         <View style={styles.buttonback} >
           <Text style={styles.button} >
           {item.price}
            </Text>
           </View>
            



         <View style={styles.buttonback} >
           <Text style={styles.button} >
           {item.label}
            </Text>
           </View>
         </View>

        </ImageBackground>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Details') }  >
        <Text style={{ fontWeight: 'bold', fontSize: hp('2.2%'), marginTop: hp('1%'), marginLeft: wp('2.5%') }}>
          {item.head}
        </Text>
        </TouchableOpacity>


        <View style={{ flexDirection: 'row', marginLeft: wp('2.5%'), marginTop:hp('1%') }} >
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






        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal:wp('2.5%')}} >
          <Text style={{ marginTop: 5, }} >{item.title}
          </Text>
          <Text style={{ marginTop: 5 }} > {item.text}
          </Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }} >
         <TouchableOpacity>

         <Text style={{ margin: hp('1%'), color: 'green', marginBottom: hp('2%'), marginLeft: wp('4%') }} >
            Edit
        </Text>
         </TouchableOpacity>
         <TouchableOpacity>

         <Text style={{ margin: hp('1%'), color: '#EA2E40', marginBottom: hp('2%'), marginRight: wp('4%') }} >
            inactive
        </Text>
         </TouchableOpacity>
        </View>

      </View>

    );
  }

  onClickTab(index) {
    this.setState({
      selectedTabIndex: index
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

        <Text style={styles.mainhead} >
          Myservices
          </Text>


        <FlatList
          showsHorizontalScrollIndicator={false}
          // horizontal
          data={this.state.choose}
          renderItem={this.renderchooseItem}
          keyExtractor={item => item.id}
        // indicatorStyle={}
        />

      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({

  star: {

    height: hp('1.5%'),
    width: wp('3%'),
    margin: wp('.5%'),
    tintColor: '#ccc'

  },

  mainhead: {

    marginTop: wp('5%'),
    marginLeft: wp('5%'),
    fontSize: hp('2.7%'),
    fontWeight: 'bold',
    // marginBottom: wp('2%'),

  },

  flatlist: {
    backgroundColor: '#fff',
    borderRadius: wp('2%'),
    width: wp('90%'),
    alignSelf: 'center',
    marginTop: hp('3%'),
    borderWidth: 1,
    borderColor: '#ccc'
  },

  button:{
    color:'#fff',
    padding:wp('1%') , 
    textAlign:'center',
    fontSize:hp('1.5%')
  },

  buttonback:{
    backgroundColor:'#EA2E40', 
    marginTop:hp('20%'), 
    width:wp('20%'), 
    borderRadius:wp('4%'),
     marginHorizontal:wp('3.2%')
  }
}
)
