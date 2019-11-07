import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

const Store = props => (
  <View style={styles.store}>
    <TouchableOpacity activeOpacity={0.8}>
      <Image resizeMode="cover" source={props.imageUri} style={styles.image} />
    </TouchableOpacity>
  </View>
);
export default Store;

const styles = StyleSheet.create({
  store: {
    width: 85,
    height: 85,
    overflow: 'hidden',
    marginBottom: 15,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
