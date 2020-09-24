import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, View, Dimensions, Image } from 'react-native';
import { Video } from 'expo-av';

const videoSource = require('../assets/mars.mp4');
const logoSource = require('../assets/logo.png');

const Spaceway = ({ navigation }) {

  return (
    <SafeAreaView>
      <View style={styles.container}>
         <Text style={styles.text}>SPACEWAY</Text>
      </View>
    </SafeAreaView>
  );
}

//<---- Styling -----> 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  video: {
    position: 'absolute',
  },
  logo: {
    resizeMode: 'contain',
    height: 90,
    marginTop: 50,
  }
});

export default Spaceway;