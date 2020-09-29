import React from 'react';
import {
  FlatList,
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
  ImageBackground,
} from 'react-native';

const shuttleIcon = require('../assets/transbordador.png');

const Listing = ({ navigation, shuttles }) => {
  return (
    <View>
      <FlatList
        data={shuttles}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.general}>
            <TouchableOpacity
              style={{
                position: 'relative',
                borderWidth: 1,
              }}
              title="button"
              onPress={() => navigation.navigate('ShuttleEvent', item)}
              shuttle={item}
            >
              <ImageBackground
                source={shuttleIcon}
                style={{
                  height: 75,
                  width: 75,
                  opacity: 0.6,
                  position: 'absolute',
                  marginLeft: 270,
                  marginTop: 10,
                }}
              />
              <View style={styles.detailCard}>
                <Text style={styles.ship}>{item.ship}</Text>
                <Text style={styles.company}>{item.company}</Text>
                <Text style={styles.duration}>
                  Duration: {item.segment[0].duration} days
                </Text>
                <Text style={styles.departure}>
                  Destination: {item.segment[0].destination}
                </Text>
                <Text style={styles.departure}>
                  Departure: {item.segment[0].departureTime}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  detailCard: {
    margin: 5,
    padding: 10,
    backgroundColor: 'rgba(232, 232, 232, 0.1)',
    borderColor: 'black',
    borderRadius: 10,
    marginHorizontal: 20,
    alignSelf: 'center',
    width: 350,
  },
  company: {
    fontFamily: 'Avenir-Heavy',
    fontSize: 15,
    color: 'white',
  },
  ship: {
    fontFamily: 'AvenirNext-Bold',
    fontSize: 15,
    color: 'white',
  },
  duration: {
    fontFamily: 'Avenir-Heavy',
    fontSize: 15,
    color: 'white',
  },
  destination: {
    fontFamily: 'Avenir-Heavy',
    fontSize: 15,
    color: 'white',
  },
  departure: {
    fontFamily: 'Avenir',
    fontSize: 15,
    color: 'white',
  },
  imagebg: {
    width: 400,
    height: 100,
    elevation: 1,
  },
  general: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default Listing;
