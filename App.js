import React from 'react';
import { SafeAreaView, View, StyleSheet, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Home from './Screens/Home';
import ShuttleEvent from './Components/ShuttleEvent';

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

// const headerSource = require('./assets/header.png');

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Spaceway" component={Home} />
        <Stack.Screen name="Details" component={ShuttleEvent} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  header: {
    resizeMode: 'contain',
    width: 105,
    top: 15, //fix stylying
  },
  body: {
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
