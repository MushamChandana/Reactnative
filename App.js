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



import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();



function App() {
  return (
    //<Chittidashboard/>
    // <Taskfunction/>
    // <Taskif/ >
    // <Taskadd/>
    //<Taskcount/>
    //<Usestate/>
    //<Dog />
    //<Cat/>
    //<Jsxexample/>
    // <Example2/>
    //<Example/>
    <NavigationContainer>

      <Stack.Navigator>


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





      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;