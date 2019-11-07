import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

class Collection extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Collection</Text>
      </View>
    );
  }
}
export default Collection;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
