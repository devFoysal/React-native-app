import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

class Store extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Store</Text>
      </View>
    );
  }
}
export default Store;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
