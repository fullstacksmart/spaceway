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
} from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { LinearGradient } from 'expo-linear-gradient';

const ShuttleEvent = (props) => {
  const shuttle = props.route.params;
  const destination = shuttle.segment.map((el) => (
    <Text>{el.destination}</Text>
  ));
  const departure = shuttle.segment.map((el) => (
    <Text>{el.departureTime}</Text>
  ));

  const { control, handleSubmit, errors } = useForm();
  const onSubmit = (data) => console.log(data);

  const createButtonAlert = () =>
    Alert.alert(
      'Important',
      'Keep in mind you will be exposed to multiple psychological and physical assesments before being selected as candidate.',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        { text: 'Accept', onPress: () => console.log('OK Pressed') },
      ],
      { cancelable: false },
    );

  return (
    <View style={styles.detailsCard}>
      <Image
        style={styles.img}
        source={{
          uri:
            'https://www.teslarati.com/wp-content/uploads/2019/09/Crew-Dragon-DM-1-orbit-tall-pano-SpaceX-crop-3.jpg',
        }}
      />
      <LinearGradient
        colors={['rgba(0,0,0,9.8)', 'transparent']}
        style={styles.gradient}
      />
      <View style={styles.detailWrapper}>
        <Text style={styles.company}>{shuttle.company}</Text>
        <Text style={styles.ship}>{shuttle.ship}</Text>
        <Text style={styles.destination}>{destination}</Text>
        <Text style={styles.departure}>{departure}</Text>
        <Text style={styles.duration}>{shuttle.duration} days</Text>
      </View>
      <View>
        <Button title="RESERVE" onPress={createButtonAlert}>
          <Controller
            control={control}
            render={({ onChange, onBlur, value }) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={(value) => onChange(value)}
                value={value}
              />
            )}
            name="firstName"
            rules={{ required: true }}
            defaultValue=""
          />
          {errors.firstName && <Text>This is required.</Text>}

          <Controller
            control={control}
            render={({ onChange, onBlur, value }) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={(value) => onChange(value)}
                value={value}
              />
            )}
            name="lastName"
            defaultValue=""
          />

          <Button title="Submit" onPress={handleSubmit(onSubmit)} />
        </Button>
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
    backgroundColor: 'rgba(232, 232, 232, 0.1)',
    borderColor: 'black',
    borderRadius: 10,
    marginHorizontal: 20,
    marginTop: 20,
    alignSelf: 'center',
    width: 350,
  },
  detailWrapper: {
    padding: 10,
  },
  img: {
    width: 330,
    height: 170,
    alignSelf: 'center',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
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
  gradient: {
    zIndex: 1,
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: Dimensions.get('window').width - 280,
  },
});

export default ShuttleEvent;
