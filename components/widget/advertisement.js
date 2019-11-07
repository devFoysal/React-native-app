import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

const Advertisement = props => (
  <TouchableOpacity activeOpacity={0.8}>
    <View style={styles.advertisementWrap}>
      <Image
        imageStyle={{
          borderRadius: 10,
        }}
        style={styles.advertisement}
        resizeMode="contain"
        source={props.imageUri}
      />
    </View>
  </TouchableOpacity>
);
export default Advertisement;

const styles = StyleSheet.create({
  advertisementWrap: {
    paddingHorizontal: 15,
  },
  advertisement: {
    width: '100%',
  },
});
