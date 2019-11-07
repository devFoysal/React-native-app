import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import LinearGradient from 'react-native-linear-gradient';
const Featured = props => (
  <TouchableOpacity activeOpacity={0.8}>
    <View style={styles.featured}>
      <View>
        <ImageBackground
          source={props.imageUri}
          imageStyle={{
            borderRadius: 10,
          }}
          style={styles.backgroundImage}>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            colors={['rgba(0,0,0,0.2)', 'rgba(0,0,0,0.2)']}
            style={styles.gradient}>
            <View style={styles.liveWrap}>
              <Text style={styles.liveBtn}>Live</Text>
            </View>
          </LinearGradient>
        </ImageBackground>
      </View>
      <View style={styles.featuredInfo}>
        <View style={styles.view}>
          <Icon name={'eye'} size={20} />
          <Text style={styles.viewText}>18</Text>
        </View>
        <View>
          <Text style={styles.name}>Divine Dazzling</Text>
          <Text style={styles.nameText}>live on Facebook now.</Text>
        </View>
      </View>
    </View>
  </TouchableOpacity>
);
export default Featured;

const styles = StyleSheet.create({
  featured: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    padding: 5,
    borderRadius: 10,
    marginRight: 15,
  },
  featuredInfo: {
    padding: 7,
  },
  view: {
    flexDirection: 'row',
    paddingBottom: 10,
  },
  viewText: {
    fontFamily: 'Roboto-Bold',
    fontWeight: '700',
    fontSize: 14,
    marginLeft: 5,
  },
  name: {
    fontFamily: 'Poppins-SemiBold',
    fontWeight: '600',
    fontSize: 12,
    color: '#6390F9',
  },
  nameText: {
    fontFamily: 'Poppins-Regular',
    fontWeight: '400',
    fontSize: 12,
  },
  backgroundImage: {
    height: 100,
    width: 100,
  },
  gradient: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    borderRadius: 10,
    padding: 10,
  },
  liveWrap: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  liveBtn: {
    fontFamily: 'Poppins-SemiBold',
    fontWeight: '600',
    fontSize: 10,
    textTransform: 'uppercase',
    color: '#ffffff',
    letterSpacing: 3,
    backgroundColor: '#FA3E3E',
    borderRadius: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 3,
  },
});
