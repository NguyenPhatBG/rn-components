import { Dimensions } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { 
  StackSpoiler, 
  StackCalendar, 
  StackCaptcha, 
  StackMovie, 
  StackWebView, 
  StackAuth, 
  StackGoogleMap,
  StackPermission, 
  StackNotifications,
  StackVideoAndSound,
  StackGoogleAnalytics,
  StackTestDeepLinking 
} from './StackNavigator';
import { CustomSideBarMenu, SideMenuSectioned } from './SideBarMenu';

/** Flow Drawer */
const DrawerRoute = createDrawerNavigator({
    Spoiler: StackSpoiler,
    Captcha: StackCaptcha,
    Movie: StackMovie,
    WebView: StackWebView,
    Calendar: StackCalendar,
    GoogleMap: StackGoogleMap,
    Permission: StackPermission,
    Notifications: StackNotifications,
    VideoAndSound: StackVideoAndSound,
    GoogleAnalytics: StackGoogleAnalytics,
    DeepLinking: StackTestDeepLinking
  }, {
    initialRouteName: 'Spoiler',
    contentOptions: {
      activeTintColor: '#e91e63'
    },
    drawerWidth: Dimensions.get('window').width - 130,
    contentComponent: CustomSideBarMenu 
});

export default SwitchRoute = createAppContainer(createSwitchNavigator({
  // stackRouter: StackAuth,
  drawerRouter: DrawerRoute
}));