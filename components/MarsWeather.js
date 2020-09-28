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

const MarsWeather = (props) => {
  console.log('MARS PROPS', props.weather);

  // C = (5/9) * (F - 32)
  const temperature = props.weather.air.temperature;

  const average = (5 / 9) * (temperature.average - 32);
  const minTemp = (5 / 9) * (temperature.minimum - 32);
  const maxTemp = (5 / 9) * (temperature.maximum - 32);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>MARS RIGHT NOW</Text>
      <View style={styles.weatherContainer}>
        <Text style={styles.text}>Average: {average.toFixed(2)} Cº</Text>
        <Text style={styles.text}>Minimum: {minTemp.toFixed(2)} Cº</Text>
        <Text style={styles.text}>Maximum: {maxTemp.toFixed(2)} Cº</Text>
      </View>
      <Image source={image} style={styles.marsbg} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
  },
  text: {
    color: 'white',
    fontFamily: 'Avenir-Heavy',
    elevation: 1,
  },
  weatherContainer: {
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(232, 232, 232, 0.1)',
    borderRadius: 5,
    maxWidth: 250,
  },
  marsbg: {
    width: Dimensions.get('window').width - 25,
    height: Dimensions.get('window').height - 200,
    justifyContent: 'center',
    borderRadius: 10,
    opacity: 0.2,
  },
});

export default MarsWeather;
