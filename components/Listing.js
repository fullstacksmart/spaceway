import React from 'react';
import {
  FlatList,
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';

const Listing = ({ navigation, shuttles }) => {
  console.log('props', shuttles);
  // const destination = shuttles.segment.map((el) => (
  //   <Text>{el.destination}</Text>
  // ));
  // const departure = shuttles.segment.map((el) => (
  //   <Text>{el.departureTime}</Text>
  // ));
  // const shuttle = props.shuttles;

  return (
    <View>
      <FlatList
        data={shuttles}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            title="button"
            onPress={() => navigation.navigate('ShuttleEvent', item)}
            shuttle={item}
          >
            <View style={styles.detailCard}>
              <Text style={styles.ship}>{item.ship}</Text>
              <Text style={styles.company}>{item.company}</Text>
              <Text style={styles.duration}>{item.duration} days</Text>
              <Text style={styles.destination}>Destination:</Text>
              <Text style={styles.departure}>Departure:</Text>
            </View>
          </TouchableOpacity>
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
    color: 'blue',
  },
  departure: {
    fontFamily: 'Avenir',
    fontSize: 15,
    color: 'red',
  },
});

export default Listing;
