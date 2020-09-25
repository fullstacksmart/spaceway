import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import Home from './Screens/Home';
import ShuttleEvent from './Components/ShuttleEvent';
import Header from './assets/header.png';

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

// const headerSource = require('./assets/header.png');

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          headerMode: 'screen',
          cardStyle: { backgroundColor: 'black' },
        }}
      >
        <Stack.Screen name="Spaceway" component={Home} />
        <Stack.Screen
          name="ShuttleEvent"
          component={(props) => <ShuttleEvent {...props} />}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   header: {
//     resizeMode: 'contain',
//     width: 105,
//     top: 15, //fix stylying
//   },
//   body: {
//     backgroundColor: 'black',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });
