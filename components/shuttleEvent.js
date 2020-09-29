import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Alert,
  Button,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import { ScrollView } from 'react-native-gesture-handler';

const shuttleIcon = require('../assets/transbordador.png');

const ShuttleEvent = (props) => {
  const shuttle = props.route.params;
  const destination = shuttle.segment.map((el) => (
    <Text>{el.destination}</Text>
  ));
  const departure = shuttle.segment.map((el) => (
    <Text>{el.departureTime}</Text>
  ));

  return (
    <View style={styles.detailsCard}>
      <View style={styles.upperCard}>
        <Text style={styles.flight}>BO894 | {shuttle.company}</Text>
        <Text style={styles.status}>Active</Text>
      </View>
      <Image
        style={styles.img}
        source={{
          uri:
            'https://www.teslarati.com/wp-content/uploads/2019/09/Crew-Dragon-DM-1-orbit-tall-pano-SpaceX-crop-3.jpg',
        }}
      />
      <LinearGradient
        colors={['rgba(0,0,0,1)', 'transparent']}
        style={styles.gradient}
      />
      <ScrollView>
        <View style={styles.orDes}>
          <View style={styles.origin}>
            <Text style={styles.textOr}>HT-54</Text>
            <Text style={styles.textDate}>23-SEP-2023</Text>
          </View>
          <View>
            <Image style={styles.icon} source={shuttleIcon} />
          </View>

          <View style={styles.destination}>
            <Text style={styles.textDes}>ISS</Text>
            <Text style={styles.textDate}>06-FEB-2024</Text>
          </View>
        </View>
        <View style={styles.detailWrapper}>
          <Text style={styles.text}>Craft: {shuttle.ship}</Text>
          <Text style={styles.text}>Departure: {departure}</Text>
          <Text style={styles.text}>Duration: 137 days</Text>
        </View>
        <Text style={styles.textInfo}>
          The information about the status of shuttles is update every 12 hours.
          All times shown are local times. The shuttle infromation is provided
          for guidance only and is subject to changes. Check-in times depend on
          the route and destination.
        </Text>
      </ScrollView>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.booking}>PROCEED TO RESERVATION</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.booking}>TERMS & CONDITIONS</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 18,
    color: 'black',
  },
  detailsCard: {
    backgroundColor: 'black',
    marginHorizontal: 20,
    alignSelf: 'center',
    width: Dimensions.get('window').width,
  },
  detailWrapper: {
    margin: 10,
    padding: 10,
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 5,
  },
  img: {
    width: Dimensions.get('window').width,
    height: 180,
    alignSelf: 'center',
    borderBottomLeftRadius: 60,
  },
  text: {
    fontFamily: 'Avenir-Heavy',
    fontSize: 15,
    color: 'white',
  },
  textOr: {
    fontFamily: 'Avenir-Heavy',
    fontSize: 25,
    color: 'white',
    paddingLeft: 5,
  },
  textDes: {
    fontFamily: 'Avenir-Heavy',
    fontSize: 25,
    color: 'white',
    alignSelf: 'center',
  },
  textDate: {
    fontFamily: 'Avenir-Light',
    fontSize: 13,
    color: 'white',
    paddingLeft: 5,
  },
  textInfo: {
    fontFamily: 'Avenir',
    fontSize: 15,
    color: 'white',
    paddingLeft: 5,
    margin: 5,
  },
  flight: {
    fontSize: 15,
    fontFamily: 'Avenir',
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  status: {
    fontSize: 15,
    fontFamily: 'Avenir-Heavy',
    fontWeight: 'bold',
    borderColor: '#52ffd1',
    borderWidth: 1,
    borderRadius: 4,
    color: '#52ffd1',
    textAlign: 'center',
    marginHorizontal: 10,
    paddingHorizontal: 5,
    justifyContent: 'flex-end',
  },
  upperCard: {
    flexDirection: 'row',
    height: 20,
    margin: 10,
  },
  orDes: {
    flexDirection: 'row',
    alignItems: 'stretch',
    alignSelf: 'center',
    height: 50,
    width: 330,
    paddingTop: 3,
    margin: 10,
    borderRadius: 0,
    paddingLeft: 30,
  },
  destination: {
    alignItems: 'flex-end',
  },
  gradient: {
    zIndex: 0,
    position: 'absolute',
    left: 0,
    right: 0,
    top: 40,
    width: Dimensions.get('window').width,
    height: 180,
    alignContent: 'center',
  },
  icon: {
    width: 45,
    height: 45,
    marginHorizontal: 30,
  },
  booking: {
    backgroundColor: '#0077ff',
    color: 'white',
    textAlign: 'center',
    alignSelf: 'center',
    paddingTop: 2,
    fontFamily: 'Avenir-Heavy',
  },
  button: {
    backgroundColor: '#0077ff',
    color: 'white',
    height: 30,
    width: Dimensions.get('window').width - 100,
    textAlign: 'center',
    alignSelf: 'center',
    paddingTop: 5,
    marginTop: 10,
    borderRadius: 5,
  },
});

export default ShuttleEvent;
