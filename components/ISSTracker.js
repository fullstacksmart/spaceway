import React, { useEffect, useState } from 'react';
import { Text, View, TouchableOpacity, Dimensions } from 'react-native';

const ISSTracker = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://api.open-notify.org/iss-now.json')
      .then((response) => response.json())
      .then((json) => setData(json.iss_position))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);
  return (
    <View style={{ flex: 1 }}>
      <Text style={{ fontSize: 40, color: 'white' }}>
        latitude:{data.latitude}, longitude:{data.longitude}
      </Text>
    </View>
  );
};
export default ISSTracker;
