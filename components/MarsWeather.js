import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  Dimensions,
  ImageBackground,
} from 'react-native';

const image = require('../assets/marsbg.png');

const temp = require('../assets/temp.png');
const air = require('../assets/air.png');
const windIcon = require('../assets/wind.png');

const MarsWeather = (props) => {
  const temperature = props.weather.air.temperature;
  const pressure = props.weather.air.pressure;
  const wind = props.weather.wind.speed;
  const average = (5 / 9) * (temperature.average - 32);
  const minTemp = (5 / 9) * (temperature.minimum - 32);
  const maxTemp = (5 / 9) * (temperature.maximum - 32);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>MARS WEATHER FORECAST</Text>
      <Text style={styles.dataTitle}>Temperature</Text>
      <View style={styles.apContainer}>
        <View style={styles.data}>
          <Text style={styles.average}>Average: {average.toFixed(2)} Cº</Text>
          <Text style={styles.text}>Min: {minTemp.toFixed(2)} Cº</Text>
          <Text style={styles.text}>Max: {maxTemp.toFixed(2)} Cº</Text>
        </View>
        <Image source={temp} style={styles.tempIcon} />
      </View>
      <Text style={styles.dataTitle}>Air Pressure</Text>
      <View style={styles.apContainer}>
        <View style={styles.data}>
          <Text style={styles.average}>Average: {pressure.average} (Pa)</Text>
          <Text style={styles.text}>Min: {pressure.minimum} (Pa)</Text>
          <Text style={styles.text}>Max: {pressure.maximum} (Pa)</Text>
        </View>
        <Image source={air} style={styles.airIcon} />
      </View>
      <Text style={styles.dataTitle}>Wind Speed</Text>
      <View style={styles.apContainer}>
        <View style={styles.data}>
          <Text style={styles.average}>Average: {wind.average} mph</Text>
          <Text style={styles.text}>Min: {wind.minimum} mph</Text>
          <Text style={styles.text}>Max: {wind.maximum} mph</Text>
        </View>
        <Image source={windIcon} style={styles.windIcon} />
      </View>
      <ImageBackground source={image} style={styles.marsbg} />
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
    fontSize: 15,
    padding: 5,
  },
  dataTitle: {
    color: 'white',
    fontFamily: 'Avenir-Heavy',
    elevation: 1,
    fontSize: 18,
    padding: 5,
    marginTop: 10,
  },
  data: {
    paddingLeft: 5,
    margin: 10,
  },
  weatherContainer: {
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(232, 232, 232, 0.1)',
    borderRadius: 5,
  },
  apContainer: {
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(232, 232, 232, 0.1)',
    borderRadius: 5,
    height: 100,
    flexDirection: 'row',
  },
  average: {
    fontFamily: 'Avenir-Heavy',
    fontSize: 17,
    color: 'white',
    padding: 5,
  },
  marsbg: {
    position: 'absolute',
    width: Dimensions.get('window').width + 10,
    height: Dimensions.get('window').height + 200,
    marginLeft: -25,
    justifyContent: 'center',
    borderRadius: 10,
    opacity: 0.2,
    zIndex: 1,
  },
  tempIcon: {
    width: 55,
    height: 55,
    justifyContent: 'flex-end',
    marginLeft: 100,
  },
  airIcon: {
    width: 55,
    height: 55,
    justifyContent: 'flex-end',
    marginLeft: 90,
  },
  windIcon: {
    width: 55,
    height: 55,
    justifyContent: 'flex-end',
    marginLeft: 105,
  },
});

export default MarsWeather;
