import React, { useEffect, useState, useCallback } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import Home from './Screens/Home';
import ShuttleEvent from './Components/ShuttleEvent';
import Spaceway from './splashScreens/Spaceway';
// import MarsWeather from './Components/MarsWeather';
import Listing from './Components/Listing';

import { Image, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import ISSTracker from './Components/ISSTracker';

const Stack = createStackNavigator();

const URL = 'http://localhost:3000/shuttles';
const ISSurl = 'http://api.open-notify.org/iss-now.json';

const App = () => {
  const [shuttles, setShuttles] = useState([]);
  const [location, setLocation] = useState([]);

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
      setLocation(location);
    }
  }, []);

  useEffect(() => {
    handleFetchShuttles();
    handleFetchLocation();
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
        {/* <Stack.Screen
          name="Spaceway"
          component={Spaceway}
          options={{ headerShown: false }}
        /> */}
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
        <Stack.Screen
          name="ShuttleEvent"
          component={(props) => <ShuttleEvent {...props} />}
          options={headerOptions}
        />
        <Stack.Screen
          name="Listing"
          component={(props) => <Listing shuttles={shuttles} {...props} />}
          options={headerOptions}
        />
        <Stack.Screen
          name="ISSTracker"
          component={(props) => <ISSTracker location={location} {...props} />}
          options={headerOptions}
        />
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
