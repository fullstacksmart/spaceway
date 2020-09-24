import React from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';

const ShuttlePreview = ({ shuttle }) =>
  shuttle.segment.map((el) => (
    <View style={styles.shuttlePreview}>
      <Image style={styles.imageStyle} source={{ uri: el.image }} />
      <Text style={styles.destinationStyle}>Discover {el.destination}</Text>
      <Text style={styles.departureStyle}>
        Next shuttle on {el.departureTime}
      </Text>
      {/* <Button title="Reserve now" /> */}
    </View>
  ));

const styles = StyleSheet.create({
  shuttlePreview: {
    backgroundColor: '#242323',
    borderRadius: 10,
    width: 350,
    marginVertical: 5,
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
  imageStyle: {
    width: 350,
    height: 100,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
});

export default ShuttlePreview;
