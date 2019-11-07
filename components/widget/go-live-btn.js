import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
const GoLive = props => (
  <TouchableOpacity activeOpacity={0.8}>
    <View style={styles.goLive}>
      <Text style={styles.goliveText}>Go Live video</Text>
      <Icon name={'video'} size={25} color="#ffffff" />
    </View>
  </TouchableOpacity>
);
export default GoLive;

const styles = StyleSheet.create({
  goLive: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: '#6390F9',
    borderRadius: 50,
    marginHorizontal: 20,
    paddingVertical: 12,
    marginTop: 20,
    marginBottom: 30,
  },
  goliveText: {
    textTransform: 'uppercase',
    color: '#ffffff',
    fontWeight: '700',
    fontSize: 16,
    paddingRight: 10,
  },
});
