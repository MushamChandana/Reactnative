import React from 'react';
import { View, Text } from 'react-native';
import Example from './src/screens/Practies1';
import Example2 from './src/screens/Practies2';
import Jsxexample from './src/screens/Jsxexample';
import Cat from './src/screens/Multiplecustom';
import Dog from './src/screens/Multipleprops';
import Usestate from './src/screens/Usestate';
import Taskcount from './src/screens/Taskcount';
import Taskadd from './src/screens/Taskadd';
import Taskif from './src/screens/Taskif';
import Taskfunction from './src/screens/Taskfunction';
import Chittidashboard from './src/screens/Chittidashboard';
import Fivelakh from './src/screens/Fivelakh';
import Twolakh from './src/screens/Twolakh';
import Lakh from './src/screens/Lakh';
import FirstLakh from './src/screens/FirstLakh';
import Chitties from './src/screens/Chitties';
import Myemi from './src/screens/Myemi';
import Propsstate from './src/screens/Propsstate';
import Loginscreen from './src/screens/Loginscreen';
import ExFlatlist from './src/screens/ExFlatlist';
import Stacknav from './src/screens/Stacknav';
import Home from './src/screens/Home';
import Dashboard from './src/screens/Dashboard';
import Search from './src/screens/Search';
import Settings from './src/screens/Settings';
import Heart from './src/screens/Heart';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ClsFlatlist from './src/screens/ClsFlatlist';
import Youtube from './src/screens/Youtube';
import About from './src/screens/About';
import Terms from './src/screens/Terms';
import Singup from './src/screens/Vinx/Singup';
import SignupScreen from './src/screens/Vinx/SignupScreen';
import LoginScreen from './src/screens/Vinx/LoginScreen';
import OnboardingScreen from './src/screens/Vinx/OnboardingScreen';
import Permissions from './src/screens/Vinx/Permissions';
import Geolocations from './src/screens/Vinx/Geolocations';
import CreateScreen from './src/screens/Vinx/CreateScreen';
import Profilescreen from './src/screens/Vinx/Profilescreen';
import Profilescreenmap from './src/screens/Vinx/Profilescreenmap';
import GeolocationScreen from './src/screens/Vinx/GeolocationScreen';
import Optnumber from './src/screens/Vinx/Optnumber';
import auth from '@react-native-firebase/auth';
import PhoneNumber from './src/screens/Vinx/PhoneNumber';
import VerifyCode from './src/screens/Vinx/VerifyCode';
import Authenticated from './src/screens/Vinx/Authenticated';
import Wallet from './src/screens/Vinx/Wallet';
import Addmny from './src/screens/Vinx/Addmny';
import Transaction from './src/screens/Vinx/Transaction';
import All from './src/screens/Vinx/All';
import Money from './src/screens/Vinx/Money';
import Coins from './src/screens/Vinx/Coins';
import SettingScreen from './src/screens/Vinx/SettingScreen';




import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
 import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();



function App() {

 
  



  HomeModule = () => {
    return (
      <Tab.Navigator
        barStyle={{ backgroundColor: '#694fad' }}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = 'home'

            } else if (route.name === 'Search') {
              iconName = 'magnify'
            }
            else if (route.name === 'Heart') {
              iconName = 'heart-outline'
            } else if (route.name === 'Settings') {
              iconName = 'cog'
            } else if (route.name === 'ClsFlatlist') {
              iconName = 'account-multiple'
            }

            // You can return any compo nent that you like here!
            return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
          },

        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >

        {/* <Tab.Screen name="Dashboard" component={Dashboard} /> */}

        <Tab.Screen name="Home" component={Home} options={{ tabBarBadge: 4 }} />

        <Tab.Screen name="Search" component={SideModel} />
        <Tab.Screen name="Heart" component={Heart} />
        <Tab.Screen name="Settings" component={Settings} />

        <Tab.Screen name="ClsFlatlist" component={ClsFlatlist}
          options={{ headerShown: false, title: "people" }} />

      </Tab.Navigator>

    )
  }
  SideModel = () => {
    return (
      <Drawer.Navigator>
        <Drawer.Screen name="About" component={About} />
        <Drawer.Screen name="Terms" component={Terms} />
      </Drawer.Navigator>

    )

  }

  return (
    <NavigationContainer>
      <Stack.Navigator >
      <Stack.Screen name="SettingScreen" component={SettingScreen}
          options={{ headerShown: false }} />
    
   
      <Stack.Screen name="Transaction" component={Transaction}
          options={{ headerShown: false }} />
            <Stack.Screen name="All" component={All}
          options={{ headerShown: false }} />
            <Stack.Screen name="Money" component={Money}
          options={{ headerShown: false }} />
            <Stack.Screen name="Coins" component={Coins}
          options={{ headerShown: false }} />
           
    
      <Stack.Screen name="Addmny" component={Addmny}
          options={{ headerShown: false }} />
   
      <Stack.Screen name="Optnumber" component={Optnumber}
          options={{ headerShown: false }} />
      <Stack.Screen name="PhoneNumber" component={PhoneNumber}
          options={{ headerShown: false }} />
            <Stack.Screen name="VerifyCode" component={VerifyCode}
          options={{ headerShown: false }} />
            <Stack.Screen name="Authenticated" component={Authenticated}
          options={{ headerShown: false }} />
  
      <Stack.Screen name="OnboardingScreen" component={OnboardingScreen}
          options={{ headerShown: false }} />
   
              <Stack.Screen name="CreateScreen" component={CreateScreen}
          options={{ headerShown: false }} />
        
      <Stack.Screen name="Permissions" component={Permissions}
          options={{ headerShown: false }} />
      <Stack.Screen name="GeolocationScreen" component={GeolocationScreen}
          options={{ headerShown: false }} />
      
      <Stack.Screen name="Profilescreenmap" component={Profilescreenmap}
          options={{ headerShown: false }} />
      <Stack.Screen name="Profilescreen" component={Profilescreen}
          options={{ headerShown: false }} />
    
       
   <Stack.Screen name="Geolocations" component={Geolocations}
          options={{ headerShown: false }} />
      
        <Stack.Screen name="LoginScreen" component={LoginScreen}
          options={{ headerShown: false }} />
        <Stack.Screen name="SignupScreen" component={SignupScreen}
          options={{ headerShown: false }} />
        <Stack.Screen name="Singup" component={Singup}
          options={{ headerShown: false }} />
        <Stack.Screen name="Loginscreen" component={Loginscreen}
          options={{ headerShown: false }} />
        <Stack.Screen name="Youtube" component={Youtube}
          options={{ headerShown: false }} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="ExFlatlist" component={ExFlatlist}
          options={{ headerShown: false }} />
        <Stack.Screen name="ClsFlatlist" component={ClsFlatlist}
          options={{ headerShown: false }} />
        <Stack.Screen name="Stacknav" component={Stacknav}
          options={{ headerShown: false }} />
        <Stack.Screen name="Taskfunction" component={Taskfunction}
          options={{ headerShown: false }} />
        <Stack.Screen name="Taskif" component={Taskif}
          options={{ headerShown: false }} />
        <Stack.Screen name="Cat" component={Cat}
          options={{ headerShown: false }} />
        <Stack.Screen name="Taskadd" component={Taskadd}
          options={{ headerShown: false }} />
        <Stack.Screen name="Dog" component={Dog}
          options={{ headerShown: false }} />
        <Stack.Screen name="Usestate" component={Usestate}
          options={{ headerShown: false }} />
        <Stack.Screen name="Taskcount" component={Taskcount}
          options={{ headerShown: false }} />
        <Stack.Screen name="Propsstate" component={Propsstate}
          options={{ headerShown: false }} />
        <Stack.Screen name="Example" component={Example}
          options={{ headerShown: false }} />
        <Stack.Screen name="Jsxexample" component={Jsxexample}
          options={{ headerShown: false }} />
        <Stack.Screen name="Example2" component={Example2}
          options={{ headerShown: false }} />
        <Stack.Screen name="Chitties" component={Chitties}
          options={{ headerShown: false }} />
        <Stack.Screen name="Chittidashboard" component={Chittidashboard}
          options={{ headerShown: false }} />
        <Stack.Screen name=" Lakh" component={Lakh}
          options={{ headerShown: false }} />
        <Stack.Screen name="Twolakh" component={Twolakh}
          options={{ headerShown: false }} />
        <Stack.Screen name="Fivelakh" component={Fivelakh}
          options={{ headerShown: false }} />
        <Stack.Screen name="FirstLakh" component={FirstLakh}
          options={{ headerShown: false }} />
        <Stack.Screen name="Myemi" component={Myemi}
          options={{ headerShown: false }} />
      </Stack.Navigator >
    </NavigationContainer>
  )
}
export default App;