import React, { useEffect, useState, useCallback } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Image, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './Screens/Home';
import ShuttleEvent from './Components/ShuttleEvent';
import Spaceway from './splashScreens/Spaceway';
import Listing from './Components/Listing';
import ISSTracker from './Components/ISSTracker';
import MarsWeather from './Components/MarsWeather';
import FormComp from './Components/FormComp';

console.disableYellowBox = true;

const Stack = createStackNavigator();

const URL = 'https://run.mocky.io/v3/89e34af2-3209-48aa-a5b7-2c175eb1df4b';
const ISSurl = 'http://api.open-notify.org/iss-now.json';
const MarsUrl = 'https://api.mars.spacexcompanion.app/v1/weather/latest';

const App = () => {
  const [shuttles, setShuttles] = useState([]);
  const [location, setLocation] = useState([]);
  const [weather, setWeather] = useState([]);

  //DATA FETCHING
  const handleFetchShuttles = useCallback(async () => {
    const result = await fetch(URL);
    if (result.ok) {
      const shuttles = await result.json();
      setShuttles(shuttles);
    }
  }, []);

  const handleFetchLocation = useCallback(async () => {
    const coordinates = await fetch(ISSurl);
    if (coordinates.ok) {
      const location = await coordinates.json();
      console.log('locationNOW', location);
      setLocation(location);
    }
  }, []);

  const handleFetchWeather = useCallback(async () => {
    const forecast = await fetch(MarsUrl);
    if (forecast.ok) {
      const weather = await forecast.json();
      console.log('weather NOW', weather);
      setWeather(weather);
    }
  }, []);

  useEffect(() => {
    // setInterval(() => {
    //   handleFetchLocation();
    // }, 1000);

    handleFetchShuttles();
    handleFetchLocation();
    handleFetchWeather();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: true,
          headerMode: 'float',
          cardStyle: { backgroundColor: 'black' },
        }}
      >
        <Stack.Screen
          name="Spaceway"
          component={Spaceway}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          options={{
            headerLeft: null,
            headerTitle: (props) => (
              <Image
                source={require('./assets/header.png')}
                style={styles.header}
                resizeMode={'contain'}
              />
            ),
            headerStyle: {
              backgroundColor: 'black',
              shadowOpacity: 0,
            },
          }}
        >
          {(props) => <Home shuttles={shuttles} {...props} />}
        </Stack.Screen>
        <Stack.Screen name="ShuttleEvent" options={headerOptions}>
          {(props) => <ShuttleEvent {...props} />}
        </Stack.Screen>
        <Stack.Screen name="Listing" options={headerOptions}>
          {(props) => <Listing shuttles={shuttles} {...props} />}
        </Stack.Screen>
        <Stack.Screen name="ISSTracker" options={headerOptions}>
          {(props) => <ISSTracker location={location} {...props} />}
        </Stack.Screen>
        <Stack.Screen name="MarsWeather" options={headerOptions}>
          {(props) => <MarsWeather weather={weather} {...props} />}
        </Stack.Screen>
        <Stack.Screen name="FormComp" options={headerOptions}>
          {(props) => <FormComp />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  header: {
    width: 130,
    backgroundColor: 'black',
    height: 25,
    justifyContent: 'center',
  },
  body: {
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const headerOptions = {
  headerTintColor: 'rgb(203, 215, 246)',
  headerBackTitleVisible: false,
  headerTitle: (props) => (
    <Image
      source={require('./assets/header.png')}
      style={styles.header}
      resizeMode={'contain'}
    />
  ),
  headerStyle: {
    backgroundColor: 'black',
    shadowOpacity: 0,
  },
};

export default App;
