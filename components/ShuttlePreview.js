import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Video } from 'expo-av';

const videoISS = require('../assets/isspreview.mp4');
const videoMars = require('../assets/mars1.mp4');

const ShuttlePreview = ({ shuttle }) =>
  shuttle.segment.map((el) => (
    <View style={styles.shuttlePreview}>
      <Video
        style={styles.videoStyle}
        source={el.destination === 'ISS' ? videoISS : videoMars}
        rate={1.0}
        volume={1.0}
        isMuted={true}
        resizeMode="cover"
        shouldPlay
        isLooping
      />
      <Text style={styles.destinationStyle}>
        {el.destination === 'ISS' ? 'Discover' : 'Explore'} {el.destination}
      </Text>
      <Text style={styles.departureStyle}>
        Next shuttle on {el.departureTime}
      </Text>
    </View>
  ));

const styles = StyleSheet.create({
  shuttlePreview: {
    backgroundColor: '#242323',
    borderRadius: 15,
    width: 350,
    marginVertical: 5,
    alignSelf: 'center',
  },
  destinationStyle: {
    fontFamily: 'Avenir-Medium',
    fontSize: 16,
    paddingTop: 5,
    color: 'white',
    paddingHorizontal: 15,
  },
  departureStyle: {
    fontFamily: 'Avenir',
    color: 'white',
    paddingHorizontal: 15,
    paddingBottom: 5,
  },
  videoStyle: {
    width: 350,
    height: 100,
  },
});

export default ShuttlePreview;
