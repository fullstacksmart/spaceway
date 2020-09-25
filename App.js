import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import Home from './Screens/Home';
import ShuttleEvent from './Components/ShuttleEvent';
import Spaceway from './splashScreens/Spaceway';

import { Image, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
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
          component={Home}
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
        />
        <Stack.Screen
          name="ShuttleEvent"
          component={(props) => <ShuttleEvent {...props} />}
          options={{
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
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

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
