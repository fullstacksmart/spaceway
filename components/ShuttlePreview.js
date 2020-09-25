import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Video } from 'expo-av';

const videoSource = require('../assets/marspreview.mp4'); //hardcoded video

const ShuttlePreview = ({ shuttle }) =>
  shuttle.segment.map((el) => (
    <View style={styles.shuttlePreview}>
      <Video
        style={styles.videoStyle}
        source={videoSource}
        rate={1.0}
        volume={1.0}
        isMuted={true}
        resizeMode="cover"
        shouldPlay
        isLooping
      />
      <Text style={styles.destinationStyle}>Discover {el.destination}</Text>
      <Text style={styles.departureStyle}>
        Next shuttle on {el.departureTime}
      </Text>
    </View>
  ));

const styles = StyleSheet.create({
  shuttlePreview: {
    backgroundColor: '#242323',
    borderRadius: 10,
    width: 350,
    marginVertical: 5,
    alignSelf: 'center',
  },
  destinationStyle: {
    paddingTop: 5,
    color: 'white',
    paddingHorizontal: 15,
  },
  departureStyle: {
    color: 'white',
    paddingHorizontal: 15,
  },
  videoStyle: {
    width: 350,
    height: 100,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
});

export default ShuttlePreview;
