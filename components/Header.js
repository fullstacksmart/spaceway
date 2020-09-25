import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

const headerSource = require('../assets/header.png');

const Header = () => {
  return (
    <View>
      <Image source={headerSource} />
    </View>
  );
};

export default Header;
