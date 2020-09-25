import React, { useState, useCallback, useEffect } from 'react';
import {
  FlatList,
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  StatusBar,
} from 'react-native';

import ShuttlePreview from '../Components/ShuttlePreview';

const URL = 'http://localhost:3000/shuttles';

const Home = ({ navigation }) => {
  const [shuttles, setShuttles] = useState([]);
  const handleFetchShuttles = useCallback(async () => {
    const result = await fetch(URL);
    if (result.ok) {
      const shuttles = await result.json();
      setShuttles(shuttles);
    }
  }, []);

  useEffect(() => {
    handleFetchShuttles();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <FlatList
        data={shuttles.slice(0, 2)}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            title="button"
            onPress={() => navigation.navigate('ShuttleEvent', item)}
            shuttle={item}
          >
            <ShuttlePreview shuttle={item} />
          </TouchableOpacity>
        )}
      />
      <TouchableOpacity
        style={styles.buttonStyle}
        title="BUTTON"
        onPress={() => navigation.navigate('Details')}
      >
        <Text style={styles.buttonText}>Press Here</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    width: 160,
    height: 60,
    backgroundColor: '#242323',
    color: 'white',
    borderRadius: 5,
    alignSelf: 'center',
  },
  buttonText: {
    marginTop: 23,
    color: 'white',
    textAlign: 'center',
    justifyContent: 'center',
  },
});

export default Home;
