import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';

import TestLoginApp from '../screens/TestAppLogin';
import TestAppIntro from '../screens/TestAppIntro';
import TestReCaptcha from '../screens/TestReCaptcha';
import TestMovieBooking from '../screens/TestMovieBooking';
import TestWebView from '../screens/TestWebView';

// Top Tab && Drawer Toggle
import NavigationDrawerStructure from './DrawerToggle';
import { TopTab, TopTabCalendar } from './TopTabNavigator';

// Details
import SpoilerDetail from './../screens/details/spoilerDetail';
import MovieComfirm from './../components/movieTickets/Confirmation';

global.currentScreenIndex = 0;

/** Stack Navigator */
const StackAuth = createStackNavigator({
    Login: { screen: TestLoginApp },
    Intro: { screen: TestAppIntro }
}, {
    initialRouteName: 'Login',
    header: null,
    headerMode: 'none'
});

const StackSpoiler = createStackNavigator({
  TopTab: { 
    screen: TopTab,
    navigationOptions: ({ navigation }) => ({
      headerTitle: "Trang chủ",
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#FF9800',
      },
      headerTintColor: '#fff',
    })
  },
  SpoilerDetail
}, {
  headerLayoutPreset: 'center'
});

const StackCaptcha = createStackNavigator({
  TestReCaptcha: { 
    screen: TestReCaptcha,
    navigationOptions: ({ navigation }) => ({
      headerTitle: "Captcha Screen",
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#FF9800',
      },
      headerTintColor: '#fff',
    }) 
  }
}, {
  headerLayoutPreset: 'center'
});

const StackMovie = createStackNavigator({
  TestMovieBooking: {
    screen: TestMovieBooking,
    navigationOptions: ({ navigation }) => ({
      headerTitle: "Movie Screen",
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#FF9800',
      },
      headerTintColor: '#fff',
    })
  },
  MovieComfirm
}, {
  headerLayoutPreset: 'center'
});

const StackWebView = createStackNavigator({
  TestWebView: {
    screen: TestWebView,
    navigationOptions: ({ navigation }) => ({
      headerTitle: "WebView Screen",
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#FF9800',
      },
      headerTintColor: '#fff',
    })
  }
}, {
  headerLayoutPreset: 'center'
});

const StackCalendar = createStackNavigator({
  TopTabCalendar: { 
    screen: TopTabCalendar,
    navigationOptions: ({ navigation }) => ({
      headerTitle: "Trang chủ",
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#FF9800',
      },
      headerTintColor: '#fff',
    })
  }
}, {
  headerLayoutPreset: 'center'
});

export {
  StackAuth,
  StackSpoiler,
  StackCaptcha,
  StackMovie,
  StackWebView,
  StackCalendar
};