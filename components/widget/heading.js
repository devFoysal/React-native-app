import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Heading = props => (
  <View style={styles.headingWrap}>
    <Text style={styles.heading}>{props.name}</Text>
    <Text style={[styles.seeAll, props.underLine ? styles.underline : null]}>
      {props.seeAll}
    </Text>
  </View>
);
export default Heading;

const styles = StyleSheet.create({
  headingWrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 15,
  },
  heading: {
    fontSize: 18,
    fontWeight: '700',
    fontFamily: 'Roboto-Bold',
    textTransform: 'capitalize',
    color: '#2A2D34',
  },
  seeAll: {
    fontSize: 14,
    fontFamily: 'Poppins-SemiBold',
    fontWeight: '600',
    letterSpacing: 3,
  },
  underline: {
    textDecorationLine: 'underline',
  },
});
