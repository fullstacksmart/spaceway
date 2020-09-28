import React from 'react';
import {
  FlatList,
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  StatusBar,
  Dimensions,
} from 'react-native';

import ShuttlePreview from '../Components/ShuttlePreview';

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
      <TouchableOpacity
        style={styles.buttonStyle}
        title="ISSTracker"
        onPress={() => navigation.navigate('ISSTracker')}
      >
        <Text style={styles.buttonText}>ISS LIVE TRACKING</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonStyle}
        title="MarsWeather"
        onPress={() => navigation.navigate('MarsWeather')}
      >
        <Text style={styles.buttonText}>WEATHER IN MARS</Text>
      </TouchableOpacity>
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
});

export default Home;
