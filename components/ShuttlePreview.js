import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { Video } from 'expo-av';
import { LinearGradient } from 'expo-linear-gradient';

const videoISS = require('../assets/isspreview.mp4');
const videoMars = require('../assets/mars2.mp4');

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
      >
        <LinearGradient
          colors={['rgba(0,0,0,9.8)', 'transparent']}
          style={styles.gradient}
        />
      </Video>
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
    backgroundColor: 'rgba(232, 232, 232, 0.1)',
    borderRadius: 5,
    width: Dimensions.get('window').width - 25,
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
    width: Dimensions.get('window').width - 25,
    height: Dimensions.get('window').width - 265,
  },
  gradient: {
    zIndex: 1,
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: Dimensions.get('window').width - 280,
  },
});

export default ShuttlePreview;
