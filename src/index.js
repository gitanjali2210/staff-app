import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Splash from './Splash';
import Appointment from './Appointment';
import Login from './Login';
import Signup from './Signup';
import Information from './Information';
import Hellopage from './Hellopage';
import Myservices from './Myservices';
import Setting from './Setting';
import Details from './Details';
import Profile from './Profile';
import Wallet from './Wallet';
import Payment from './Payment';
import Review from './Review';
import Notification from './Notification';
import Changepass from './Changepass';
import Addservices from './Addservices';

const Stack = createStackNavigator();


const Tab = createBottomTabNavigator();
const TabScreen = () => (
  <Tab.Navigator
    initialRouteName={'healer'}
    tabBarOptions={{
      showLabel: true,
      activeTintColor: '#0468F6',
      inactiveTintColor: '#ccc',
      style: {
        //  backgroundColor: Colors.AppColor,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        backgroundColor: '#F1F1F1'
        // height: h(10),
        // paddingBottom: h(1)
      }
    }}>
    <Tab.Screen
      title='Home'
      name="Home"
      component={Drugs}
      navigationOptions={
        gesturesEnabled = false,
        title = 'Header title'
      }
      options={{
        tabBarIcon: ({ focused }) => (
          (focused) ?
            <Image resizeMode='contain' source={require('./Assets/healer/drugs.png')}
              style={{ height: 30, width: 30, tintColor: 'blue' }}
            /> :
            <Image resizeMode='contain' source={require('./Assets/healer/drugs.png')}
              style={{ height: 30, width: 30, }}
            />
        ),
        tabBarLabel: () => {
          <Text>Home</Text>
        },
      }}
    />

    <Tab.Screen

      name="doctors"
      component={Doctors}

      options={{
        tabBarIcon: ({ focused }) => (
          (focused) ?
            <Image resizeMode='contain' source={require('./Assets/healer/doctors.png')}
              style={{ height: 30, width: 30, tintColor: 'blue' }}
            /> :
            <Image resizeMode='contain' source={require('./Assets/healer/doctors.png')}
              style={{ height: 30, width: 30, }}
            />
        ),
        tabBarLabel: () => {
          <Text>Home</Text>
        },
      }}
    />

    <Tab.Screen
      name="healer"
      component={Hellopage}

      options={{
        tabBarIcon: ({ focused }) => (
          (focused) ?
            <View style={{ padding: 10, backgroundColor: 'blue', position: 'absolute', top: -15, borderRadius: 25 }}><Image resizeMode='contain' source={require('./Assets/healer/stethoscope.png')}
              style={{ height: 30, width: 30, tintColor: '#fff' }}
            /></View> :
            <View style={{ padding: 10, backgroundColor: '#F1F1F1', position: 'absolute', top: -15, borderRadius: 25, borderWidth: 1 }} >
              <Image resizeMode='contain' source={require('./Assets/healer/stethoscope.png')}
                style={{ height: 30, width: 30, }}
              />
            </View>
        ),

      }}
    />


    <Tab.Screen
      name="Indicator"
      component={Indicator}

      options={{
        tabBarIcon: ({ focused }) => (
          (focused) ?
            <Image resizeMode='contain' source={require('./Assets/healer/dashboard.png')}
              style={{ height: 30, width: 30, tintColor: 'blue' }}
            /> :
            <Image resizeMode='contain' source={require('./Assets/healer/dashboard.png')}
              style={{ height: 30, width: 30 }}
            />
        ),

      }}
    />

    <Tab.Screen
      name="profile"
      component={Login}

      options={{
        tabBarIcon: ({ focused }) => (
          (focused) ?
            <Image resizeMode='contain' source={require('./Assets/healer/avatar.png')}
              style={{ height: 30, width: 30, tintColor: 'blue' }}
            /> :
            <Image resizeMode='contain' source={require('./Assets/healer/avatar.png')}
              style={{ height: 30, width: 30 }}
            />
        ),

      }}
    />

  </Tab.Navigator>
)


const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={Setting}

        screenOptions={{
          headerShown: false
        }}>

        <Drawer.Screen gesturesEnabled={false} name="Splash" component={Splash} />
        {/* <Drawer.Screen name="Splash" component={Splash} /> */}
        <Drawer.Screen name="Appointment" component={Appointment} />
        <Drawer.Screen name="Login" component={Login} />
        <Drawer.Screen name="Signup" component={Signup} />
        <Drawer.Screen name="Information" component={Information} />
        <Drawer.Screen name="Myservices" component={Myservices} />
        <Drawer.Screen name="Details" component={Details} />
        <Drawer.Screen name="Profile" component={Profile} />
        <Drawer.Screen name="Payment" component={Payment} />
        <Drawer.Screen name="Review" component={Review} />
        <Drawer.Screen name="Wallet" component={Wallet} />
        <Drawer.Screen name="Changepass" component={Changepass} />
        <Drawer.Screen name="Addservices" component={Addservices} />
        <Drawer.Screen name="Notification" component={Notification} />
        <Drawer.Screen name="Setting" component={Setting} />
        <Drawer.Screen name="Hellopage" component={Hellopage} />

      </Drawer.Navigator>
    </NavigationContainer>

  )
}
export default App;


