import React from 'react';
import { Platform, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';

import TestLoginApp from '../screens/TestAppLogin';
import TestAppIntro from '../screens/TestAppIntro';
import TestReCaptcha from '../screens/TestReCaptcha';
import TestMovieBooking from '../screens/TestMovieBooking';

// Tabs
import TopTabFirst from './../screens/tabs/TopTabFirst';
import TopTabSecond from './../screens/tabs/TopTabSecond';
import TopTabThird from './../screens/tabs/TopTabThird';
// Details
import SpoilerDetail from './../screens/details/spoilerDetail';
import MovieComfirm from './../components/movieTickets/Confirmation';

/** Flow 01 */
const StackRoute = createStackNavigator({
    Login: { screen: TestLoginApp },
    Intro: { screen: TestAppIntro }
}, {
    initialRouteName: 'Login',
    header: null,
    headerMode: 'none'
});

/** Flow Stack */
const TopTab = createMaterialTopTabNavigator({
  TopTabFirst,
  TopTabSecond,
  TopTabThird,
} ,{ 
  lazy: true,
  tabBarOptions: {
    style: { backgroundColor: '#5620E4' },
  },
  navigationOptions: ({ navigation }) => ({
    headerTitle: "Trang chủ",
    headerLeft: Platform.select({
      ios: null,
      android: (
        <Icon.Button
          name="md-menu"
          type="ionicon"
          size={25}
          color="black"
          backgroundColor="transparent"
          underlayColor="transparent"
          onPress={() => navigation.toggleDrawer()}
        />
      )
    })
  })
});

const StackSpoiler = createStackNavigator({
  TopTab,
  SpoilerDetail
}, {
  headerLayoutPreset: 'center',
  headerStatusBarHeight: Platform.OS === 'android' ? StatusBar.currentHeight || (Platform.Version < 23 ? 25 : 24) : 0
});

const StackCaptcha = createStackNavigator({
  TestReCaptcha
}, {
  headerLayoutPreset: 'center',
  headerStatusBarHeight: Platform.OS === 'android' ? StatusBar.currentHeight || (Platform.Version < 23 ? 25 : 24) : 0
});

const StackMovie = createStackNavigator({
  TestMovieBooking,
  MovieComfirm
}, {
  headerLayoutPreset: 'center',
  headerStatusBarHeight: Platform.OS === 'android' ? StatusBar.currentHeight || (Platform.Version < 23 ? 25 : 24) : 0
});

/** Flow Drawer */
const DrawerRoute = createDrawerNavigator({
    Spoiler: StackSpoiler,
    Captcha: StackCaptcha,
    Movie: StackMovie
  }, {
    initialRouteName: 'Spoiler',
    contentOptions: {
      activeTintColor: '#e91e63'
    }
});

export default SwitchRoute = createAppContainer(createSwitchNavigator({
    stackRouter: StackRoute,
    drawerRouter: DrawerRoute
}));