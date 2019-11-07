import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

class SingView extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>SingView</Text>
      </View>
    );
  }
}
export default SingView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
