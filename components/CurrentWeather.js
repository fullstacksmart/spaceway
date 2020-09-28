import React from 'react';
import {
  FlatList,
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
  Dimensions,
} from 'react-native';

const image = require('../assets/marsbg.png');

const CurrentWeather = (props) => {
  console.log('MARS PROPS', props);
  const Mars = props.weather;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>MARS RIGHT NOW</Text>
      <Image source={image} style={styles.marsbg} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'center',
  },
});

export default MarsWeather;
