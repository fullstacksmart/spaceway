import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  Dimensions,
  StatusBar,
} from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { Video } from 'expo-av';

const videoSource = require('../assets/mars.mp4');
const logoSource = require('../assets/logo.png');

const Spaceway = ({ navigation }) => {
  const goToHome = () => {
    setTimeout(() => {
      navigation.navigate('Home');
    }, 3000);
  };

  return (
    <SafeAreaView>
      <StatusBar barStyle="light-content" />
      <TouchableWithoutFeedback
        onPress={() => {
          goToHome();
        }}
      >
        <Image source={logoSource} style={styles.logo}></Image>
        <View>
          <Video
            style={styles.video}
            source={videoSource}
            rate={1.0}
            isMuted={true}
            resizeMode="cover"
            shouldPlay
            isLooping
            style={{
              width: Dimensions.get('window').width,
              height: Dimensions.get('window').height,
            }}
          />
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  video: {
    position: 'absolute',
    marginTop: 500,
  },
  logo: {
    resizeMode: 'contain',
    height: 60,
    marginTop: 50,
    alignSelf: 'center',
  },
});

export default Spaceway;
