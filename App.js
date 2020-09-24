import React from 'react';
import { SafeAreaView, View, StyleSheet } from 'react-native';
import Home from './Screens/Home';

const headerSource = require('./assets/header.png');

export default function App() {
  return (
    <SafeAreaView>
      <View style={styles.body}>
        <Home />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    resizeMode: 'contain',
    width: 110,
    top: 15, //fix stylying
  },
  body: {
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
