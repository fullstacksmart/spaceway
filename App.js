import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';
import Dashboard from './containers/home';
// import { Spaceway } from './splashScreens/spaceway'

export default function App() {
  return (
    <View>
      <Text>SPACEWAY - explore beyond.</Text>
      <Dashboard></Dashboard>
    </View>
  );
}
