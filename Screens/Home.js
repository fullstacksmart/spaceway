import React from 'react';
import {
  FlatList,
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  StatusBar,
  Dimensions,
  ImageBackground,
} from 'react-native';

import ShuttlePreview from '../Components/ShuttlePreview';
const planeta = require('../assets/planeta.png');
const satel = require('../assets/satel.png');

const Home = ({ navigation, shuttles }) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Text style={styles.upcoming}>UPCOMING</Text>
      <FlatList
        data={shuttles.slice(0, 2)}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            title="button"
            onPress={() => navigation.navigate('ShuttleEvent', item)}
            shuttle={item}
          >
            <ShuttlePreview shuttle={item} />
          </TouchableOpacity>
        )}
      />
      <TouchableOpacity
        style={styles.buttonStyle}
        title="BUTTON"
        onPress={() => navigation.navigate('Listing')}
      >
        <Text style={styles.buttonText}>MORE DATES</Text>
      </TouchableOpacity>
      <View style={styles.buttons}>
        <TouchableOpacity
          style={styles.buttonComp}
          title="ISSTracker"
          onPress={() => navigation.navigate('ISSTracker')}
        >
          <ImageBackground
            source={satel}
            style={{
              height: 75,
              width: 75,
              opacity: 0.6,
              position: 'absolute',
              marginTop: 40,
              marginLeft: 50,
            }}
          />
          <Text style={styles.buttonText}>ISS LIVE TRACKING</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonComp}
          title="MarsWeather"
          onPress={() => navigation.navigate('MarsWeather')}
        >
          <ImageBackground
            source={planeta}
            style={{
              height: 60,
              width: 60,
              opacity: 0.6,
              position: 'absolute',
              marginTop: 40,
              marginLeft: 50,
            }}
          />
          <Text style={styles.buttonText}>WEATHER IN MARS</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    margin: 5,
    width: Dimensions.get('window').width - 25,
    height: 40,
    backgroundColor: 'rgba(232, 232, 232, 0.1)',
    color: 'white',
    borderRadius: 5,
    alignSelf: 'center',
  },
  buttonComp: {
    marginLeft: 11,
    marginTop: 5,
    width: 170,
    height: 130,
    backgroundColor: 'rgba(232, 232, 232, 0.1)',
    color: 'white',
    borderRadius: 5,
    alignSelf: 'center',
  },
  buttonText: {
    paddingTop: 10,
    color: 'white',
    textAlign: 'center',
    justifyContent: 'center',
    fontFamily: 'Avenir',
  },
  upcoming: {
    color: 'white',
    fontFamily: 'Avenir-Heavy',
    paddingLeft: 14,
  },
  buttons: {
    flexDirection: 'row',
  },
});

export default Home;
