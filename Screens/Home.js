import React, { useState, useCallback, useEffect } from 'react';
import {
  FlatList,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
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
    <View>
      <FlatList
        data={shuttles.slice(0, 2)}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ShuttlePreview shuttle={item} />}
      />
      <TouchableOpacity style={styles.buttonStyle} title="BUTTON">
        <Text style={styles.buttonText}>Press Here</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    width: 160,
    height: 60,
    backgroundColor: 'grey',
    color: 'white',
    borderRadius: 5,
  },
  buttonText: {
    marginTop: 23,
    color: 'white',
    textAlign: 'center',
    justifyContent: 'center',
  },
});

export default Home;
