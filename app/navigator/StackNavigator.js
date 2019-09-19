import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';

import TestAppIntro from '../screens/TestAppIntro';
import TestSpoiler from '../screens/TestSpoiler';
import TestReCaptcha from '../screens/TestReCaptcha';

export const StackRoute = createStackNavigator({
    Intro: { screen: TestAppIntro }
}, {
    initialRouteName: 'Intro',
    header: null,
    headerMode: 'none'
});

export const DrawerRoute = createDrawerNavigator({
    Spoiler: TestSpoiler,
    Captcha: TestReCaptcha
  }, {
    initialRouteName: 'Spoiler',
    contentOptions: {
      activeTintColor: '#e91e63',
    },
});

export default SwitchRoute = createAppContainer(createSwitchNavigator({
    stackRouter: StackRoute,
    drawerRouter: DrawerRoute
}));