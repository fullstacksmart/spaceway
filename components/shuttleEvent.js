import React from 'react';
import { View, FlatList, SafeAreaView, Text, StyleSheet } from 'react-native';

const ShuttleEvent = ({ shuttle }) => {
  console.log('shuttle', shuttle.segment.destination);
  const destination = shuttle.segment.map((el) => (
    <Text>{el.destination}</Text>
  ));
  const departure = shuttle.segment.map((el) => (
    <Text>{el.departureTime}</Text>
  ));

  return (
    <View style={styles.ShuttleEvent}>
      <Text>{shuttle.company}</Text>
      <Text>{shuttle.ship}</Text>
      <Text>{destination}</Text>
      <Text>{departure}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 18,
    color: 'black',
  },
  ShuttleEvent: {
    backgroundColor: 'blue',
    borderColor: 'black',
  },
});

export default ShuttleEvent;
