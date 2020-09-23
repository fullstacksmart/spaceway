import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';
import { Video } from 'expo-av';

const videoSource = require('./assets/mars.mp4');
const logoSource = require('./assets/logo.png');


export default function App() {

  return (
    <View style={styles.container}>
    <Image source={logoSource}  style={styles.logo}></Image>
    {/* <Text style={styles.text}>SPACEWAY</Text>
    <Text style={styles.slogan}>explore beyond.</Text> */}
     <Video style={styles.video}
      source={videoSource}
      rate={1.2}
      isMuted={true}
      resizeMode="cover"
      shouldPlay
      isLooping
      style={{ width: Dimensions.get('window').width, height:  Dimensions.get('window').height - 200 }}
    />
      <StatusBar style="auto" />
    </View>
  );
}

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
