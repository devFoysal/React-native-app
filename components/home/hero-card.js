import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import LinearGradient from 'react-native-linear-gradient';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

class HeroCard extends Component {
  render() {
    return (
      <TouchableOpacity activeOpacity={0.8}>
        <View style={styles.hero}>
          <ImageBackground
            imageStyle={{
              borderRadius: 10,
            }}
            style={styles.backgroundImage}
            source={this.props.imageUri}>
            <LinearGradient
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              colors={['rgba(0,0,0,0.2)', 'rgba(0,0,0,0.2)']}
              style={styles.gradient}>
              <View style={styles.liveWrap}>
                <View style={styles.liveBg}>
                  <Text style={styles.liveText}>Live</Text>
                </View>
                <View style={styles.viewWrap}>
                  <Icon name={'eye'} color="#ffffff" />
                  <Text style={styles.viewText}>17</Text>
                </View>
              </View>
              <View style={styles.playBtn}>
                <Icon name={'play-circle'} size={60} color="#ffffff"></Icon>
              </View>
              <View style={styles.infoWrap}>
                <View style={{flex: 6}}>
                  <Text style={styles.liverName}>KAYARA</Text>
                  <Text style={styles.liverText}>is live on Facebook now.</Text>
                </View>
                <View style={styles.expandWrap}>
                  <Icon name={'expand'} size={30} color="#ffffff" />
                </View>
              </View>
            </LinearGradient>
          </ImageBackground>
        </View>
      </TouchableOpacity>
    );
  }
}
export default HeroCard;

const styles = new StyleSheet.create({
  hero: {
    marginVertical: 20,
    paddingHorizontal: 15,
    borderRadius: 10,
  },
  backgroundImage: {
    height: 200,
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
    flex: 0.8,
    flexDirection: 'row',
  },
  liveBg: {
    backgroundColor: '#FA3E3E',
    borderRadius: 5,
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  liveText: {
    fontSize: 10,
    fontFamily: 'Pippins-Bold',
    fontWeight: '700',
    color: '#ffffff',
    textTransform: 'uppercase',
  },
  viewWrap: {
    backgroundColor: '#2A2D34',
    borderRadius: 5,
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  viewText: {
    fontSize: 10,
    fontFamily: 'Pippins-Bold',
    fontWeight: '700',
    color: '#ffffff',
    textTransform: 'uppercase',
    marginLeft: 5,
  },
  playBtn: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoWrap: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  liverName: {
    fontSize: 14,
    fontFamily: 'Roboot-Bold',
    fontWeight: '700',
    color: '#ffffff',
    textTransform: 'uppercase',
    textDecorationLine: 'underline',
  },
  liverText: {
    fontSize: 14,
    fontFamily: 'Roboot-Regualr',
    fontWeight: '400',
    color: '#ffffff',
  },
  expandWrap: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
