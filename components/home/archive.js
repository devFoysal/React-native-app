import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome5';
const Archive = props => (
  <TouchableOpacity activeOpacity={0.8}>
    <View style={styles.archive}>
      <ImageBackground
        imageStyle={{
          borderRadius: 10,
        }}
        source={props.imageUri}
        style={styles.backgroundImage}>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={['rgba(0,0,0,0.2)', 'rgba(0,0,0,0.2)']}
          style={styles.gradient}>
          <View style={styles.infoWrap}>
            <View style={styles.viewCount}>
              <View style={styles.groupCount}>
                <Icon name={'eye'} size={18} color="#ffffff" />
                <Text style={styles.count}>178</Text>
              </View>
            </View>
            <View style={styles.info}>
              <Text style={styles.name}>KARA</Text>
              <Text style={styles.date}>16 Aug 2019</Text>
            </View>
          </View>
        </LinearGradient>
      </ImageBackground>
    </View>
  </TouchableOpacity>
);
export default Archive;

const styles = StyleSheet.create({
  archive: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    borderRadius: 10,
    marginRight: 15,
  },
  backgroundImage: {
    width: 200,
    height: 200,
  },
  gradient: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    borderRadius: 10,
    paddingTop: 15,
    paddingBottom: 10,
    paddingLeft: 15,
    paddingRight: 15,
  },
  infoWrap: {},
  viewCount: {
    height: '80%',
    position: 'relative',
  },
  groupCount: {
    position: 'absolute',
    flexDirection: 'row',
    backgroundColor: '#2A2D34',
    alignItems: 'center',
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 7,
    paddingBottom: 5,
    borderRadius: 20,
  },
  count: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '600',
    fontFamily: 'Poppins-SemiBold',
    paddingLeft: 10,
    textTransform: 'uppercase',
    letterSpacing: 2,
  },
  info: {
    height: '20%',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  name: {
    color: '#ffffff',
    fontWeight: '700',
    fontFamily: 'Poppins-Bold',
    fontSize: 16,
  },
  date: {
    color: '#ffffff',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 12,
  },
});
