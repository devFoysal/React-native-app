import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

// Router
import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createDrawerNavigator} from 'react-navigation-drawer';

// Screen
import Home from './screens/home';
import SingleView from './screens/single';

import Store from './screens/store';
import Collection from './screens/collection';
import Inbox from './screens/inbox';

const homeMenu = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {},
    },
    SingleView: {
      screen: SingleView,
      navigationOptions: {
        title: 'Single Page',
      },
    },
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerTitle: (
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            height: '100%',
            paddingHorizontal: 15,
          }}>
          <View
            style={{
              flex: 1,
              alignItems: 'flex-start',
              justifyContent: 'center',
            }}>
            <Image
              style={{
                width: 40,
                height: 40,
                resizeMode: 'stretch',
              }}
              source={require('./assets/img/logo.png')}
            />
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-end',
            }}>
            <Text
              style={{
                fontSize: 14,
                color: '#6390F9',
                fontWeight: '600',
                paddingRight: 20,
                fontFamily: 'Poppins-SemiBold',
              }}>
              Login
            </Text>
            <Icon name={'stream'} solid size={30} />
          </View>
        </View>
      ),
    },
  },
);

const storeMenu = createStackNavigator(
  {
    Store: {
      screen: Store,
    },
  },
  {
    initialRouteName: 'Store',
    defaultNavigationOptions: {},
  },
);

const collectionMenu = createStackNavigator(
  {
    Collection: {
      screen: Collection,
    },
  },
  {
    initialRouteName: 'Collection',
    defaultNavigationOptions: {},
  },
);

const inboxMenu = createStackNavigator(
  {
    Inbox: {
      screen: Inbox,
    },
  },
  {
    initialRouteName: 'Inbox',
    defaultNavigationOptions: {},
  },
);

const bottomTab = createBottomTabNavigator(
  {
    Home: {
      screen: homeMenu,
      navigationOptions: ({navigation}) => ({
        tabBarIcon: ({focused, tintColor}) => {
          return <Icon name={'home'} size={27} color="#ffffff" />;
        },
      }),
    },
    Store: {
      screen: storeMenu,
      navigationOptions: ({navigation}) => ({
        tabBarIcon: ({focused, tintColor}) => {
          return <Icon name={'store'} size={25} color="#ffffff" />;
        },
      }),
    },
    Collection: {
      screen: collectionMenu,
      navigationOptions: ({navigation}) => ({
        tabBarIcon: ({focused, tintColor}) => {
          return <Icon name={'heart'} size={30} color="#ffffff" />;
        },
      }),
    },
    Inbox: {
      screen: inboxMenu,
      navigationOptions: ({navigation}) => ({
        tabBarIcon: ({focused, tintColor}) => {
          return <Icon name={'envelope'} size={30} color="#ffffff" />;
        },
      }),
    },
  },
  {
    initialRouteName: 'Home',
    tabBarOptions: {
      activeTintColor: '#ffffff',
      labelStyle: {
        fontSize: 14,
        fontWeight: '600',
        fontFamily: 'Roboto-Medium',
        color: '#ffffff',
      },
      style: {
        backgroundColor: '#6390F9',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        height: 70,
        color: '#ffffff',
        paddingVertical: 5,
      },
    },
  },
);
export default createAppContainer(bottomTab);
