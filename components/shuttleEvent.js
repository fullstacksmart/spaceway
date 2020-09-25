import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';

const ShuttleEvent = (props) => {
  const shuttle = props.route.params;
  const destination = shuttle.segment.map((el) => (
    <Text>{el.destination}</Text>
  ));
  const departure = shuttle.segment.map((el) => (
    <Text>{el.departureTime}</Text>
  ));
  const imageUrl = shuttle.segment.map((el) => <Text>{el.image}</Text>);

  return (
    <View style={styles.detailsCard}>
      {/* <Button onPress={() => goBack()} title="Home" /> */}
      <Image
        style={styles.img}
        source={{
          uri:
            'https://www.teslarati.com/wp-content/uploads/2019/09/Crew-Dragon-DM-1-orbit-tall-pano-SpaceX-crop-3.jpg',
        }}
      />
      <View style={styles.detailWrapper}>
        <Text style={styles.company}>{shuttle.company}</Text>
        <Text style={styles.ship}>{shuttle.ship}</Text>
        <Text style={styles.destination}>{destination}</Text>
        <Text style={styles.departure}>{departure}</Text>
        <Text style={styles.duration}>{shuttle.duration} days</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 18,
    color: 'black',
  },
  detailsCard: {
    backgroundColor: '#242323',
    borderColor: 'black',
    borderRadius: 10,
    marginVertical: 20,
    marginHorizontal: 20,
    alignSelf: 'center',
    width: 350,
  },
  detailWrapper: {
    padding: 10,
  },
  img: {
    width: 350,
    height: 200,
    alignSelf: 'center',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  company: {
    fontSize: 15,
    color: 'white',
  },
  ship: {
    fontSize: 15,
    color: 'white',
  },
  destination: {
    fontSize: 15,
    color: 'white',
  },
  departure: {
    fontSize: 15,
    color: 'white',
  },
  duration: {
    fontSize: 15,
    color: 'white',
  },
});

export default ShuttleEvent;
