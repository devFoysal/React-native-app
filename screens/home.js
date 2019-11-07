import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  ScrollView,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import LinearGradient from 'react-native-linear-gradient';
// Component
import HeroCard from '../components/home/hero-card';
import Heading from '../components/widget/heading';
import Featured from '../components/home/featured';
import GoLive from '../components/widget/go-live-btn';
import Archive from '../components/home/archive';
import Advertisement from '../components/widget/advertisement';
import Store from '../components/home/store';
class Home extends Component {
  render() {
    return (
      <View style={styles.home}>
        <ScrollView>
          <HeroCard
            imageUri={require('../assets/img/videos/thumbnails/1.png')}
          />
          {/* Featured Video */}
          <View style={{paddingHorizontal: 15}}>
            <Heading name="Featured" seeAll="1/10" underLine={false} />
          </View>
          <View style={styles.featuredWrap}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <Featured imageUri={require('../assets/img/featured/1.png')} />
              <Featured imageUri={require('../assets/img/featured/1.png')} />
              <Featured imageUri={require('../assets/img/featured/1.png')} />
              <Featured imageUri={require('../assets/img/featured/1.png')} />
            </ScrollView>
          </View>

          {/* Go live Btn */}
          <GoLive />

          {/* Populer Archive */}
          <View style={{paddingHorizontal: 15}}>
            <Heading name="Popular Archive" seeAll="See all" underLine={true} />
          </View>

          <View style={styles.popularArchiveWrap}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <Archive
                imageUri={require('../assets/img/videos/thumbnails/1.png')}
              />
              <Archive
                imageUri={require('../assets/img/videos/thumbnails/1.png')}
              />

              <Archive
                imageUri={require('../assets/img/videos/thumbnails/1.png')}
              />
            </ScrollView>
          </View>

          {/* Advertisment */}
          <Advertisement
            imageUri={require('../assets/img/advertisement/1.png')}
          />
          {/* Product Collection */}
          {/* <View style={styles.populerCollectionWrap}>
            <View style={{paddingHorizontal: 15}}>
              <Heading name="Featured" seeAll="1/10" underLine={false} />
            </View>

            <View style={styles.colections}>
              <View style={styles.colection}></View>
            </View>
          </View> */}
          <View style={{paddingHorizontal: 15}}>
            <Heading
              name="Product Collection"
              seeAll="See all"
              underLine={true}
            />
          </View>
          <View style={styles.featuredWrap}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <Featured imageUri={require('../assets/img/featured/1.png')} />
              <Featured imageUri={require('../assets/img/featured/1.png')} />
              <Featured imageUri={require('../assets/img/featured/1.png')} />
              <Featured imageUri={require('../assets/img/featured/1.png')} />
            </ScrollView>
          </View>

          {/* Store */}
          <View style={styles.storeWrap}>
            <Heading name="Store" seeAll="See all" underLine={true} />
            <View style={styles.stores}>
              <Store imageUri={require('../assets/img/shop/1.png')} />
              <Store imageUri={require('../assets/img/shop/2.png')} />
              <Store imageUri={require('../assets/img/shop/3.png')} />
              <Store imageUri={require('../assets/img/shop/4.png')} />
              <Store imageUri={require('../assets/img/shop/1.png')} />
              <Store imageUri={require('../assets/img/shop/2.png')} />
              <Store imageUri={require('../assets/img/shop/3.png')} />
              <Store imageUri={require('../assets/img/shop/4.png')} />
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
export default Home;
const styles = new StyleSheet.create({
  home: {
    backgroundColor: '#FFFCFD',
  },
  featuredWrap: {
    paddingLeft: 15,
    width: '100%',
    marginBottom: 15,
  },
  popularArchiveWrap: {
    paddingLeft: 15,
    width: '100%',
  },
  storeWrap: {
    width: '100%',
    paddingHorizontal: 15,
  },
  stores: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});
