import { Dimensions } from 'react-native';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
// Tabs
import TopTabFirst from '../screens/tabsSpoiler/TopTabFirst';
// Tabs Calendar
import TestHorizontalCalendar from '../screens/TestHorizontalCalendar';
import TestCalendarSelectPicker from '../screens/TestCalendarSelectPicker';
import TestSimplerEventCalendar from '../screens/TestSimplerEventCalendar';
// Tabs Permission
import UploadImageToServer from '../screens/tabsPermission/UploadImageToServer';
import DownloadImage from '../screens/tabsPermission/DownloadImage';
import QRCodeScreen from '../screens/tabsPermission/QRCodeScreen';
import CameraKitScreen from '../screens/tabsPermission/CameraKitScreen';
import VoiceRecognition from '../screens/tabsPermission/VoiceRecognition';
import TextToSpeechConversationWithNaturalVoices from '../screens/tabsPermission/TextToSpeechConversationWithNaturalVoices';
import PhoneCallAndEmailAndSMS from '../screens/tabsPermission/PhoneCall&Email&SMS';

const topTabStyle = {
    lazy: true,
    swipeEnabled: true,
    tabBarOptions: {
        activeTintColor: '#FFFFFF',
        inactiveTintColor: '#F8F8F8',
        scrollEnabled: true, 
        tabStyle: {
            width: (Dimensions.get('window').width / 3),
        },
        style: {
            backgroundColor: '#30336b',
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
const TopTab = createMaterialTopTabNavigator({ TopTabFirst } , topTabStyle);
const TopTabCalendar = createMaterialTopTabNavigator({ TestHorizontalCalendar, TestCalendarSelectPicker, TestSimplerEventCalendar } , topTabStyle);
const TopTabPermission = createMaterialTopTabNavigator({ UploadImageToServer, DownloadImage, CameraKitScreen, PhoneCallAndEmailAndSMS, QRCodeScreen, VoiceRecognition, TextToSpeechConversationWithNaturalVoices }, topTabStyle);

export {
    TopTab,
    TopTabCalendar,
    TopTabPermission
};