import { createMaterialTopTabNavigator } from 'react-navigation-tabs';

// Tabs
import TopTabFirst from './../screens/tabs/TopTabFirst';
import TopTabSecond from './../screens/tabs/TopTabSecond';
import TopTabThird from './../screens/tabs/TopTabThird';
// Tabs Calendar
import TestHorizontalCalendar from '../screens/TestHorizontalCalendar';
import TestCalendarSelectPicker from '../screens/TestCalendarSelectPicker';

const topTabStyle = {
    lazy: true,
    swipeEnabled: true,
    tabBarOptions: {
        activeTintColor: '#FFFFFF',
        inactiveTintColor: '#F8F8F8',
        style: {
            backgroundColor: '#FF9800',
        },
        labelStyle: {
            textAlign: 'center',
        },
        indicatorStyle: {
            borderBottomColor: '#87B56A',
            borderBottomWidth: 2,
        }
    }
};

/** Flow TOP TABs Stack */
const TopTab = createMaterialTopTabNavigator({ TopTabFirst, TopTabSecond, TopTabThird } , topTabStyle);
const TopTabCalendar = createMaterialTopTabNavigator({ TestHorizontalCalendar, TestCalendarSelectPicker } , topTabStyle);

export {
    TopTab,
    TopTabCalendar
};