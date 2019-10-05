import React, { PureComponent, useEffect } from 'react';
import { YellowBox, StatusBar, Platform, SafeAreaView } from 'react-native';
import RNBootSplash from "react-native-bootsplash";
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components/native';
import SwitchRoute from './app/navigator/RootNavigator';
import Themes from './app/shared/Themes';

const prefix = 'myapp://';

const Container = styled.View`
  flex: 1;
  padding-top: ${(props) => props.paddingTop}
`;

class App extends PureComponent {
  constructor(props) {
    super(props);
    YellowBox.ignoreWarnings([
      'Warning: componentWillMount is deprecated',
      'Warning: componentWillReceiveProps is deprecated',
      'Module RCTImageLoader requires'
    ]);
  }

  componentDidMount() {
    StatusBar.setTranslucent(true);
    StatusBar.setBackgroundColor('#30336b');
    RNBootSplash.hide({ duration: 250 });
  }

  render() {
    return (
      <ThemeProvider theme={Themes}>
        <Container paddingTop={(Platform.OS === 'android' ? StatusBar.currentHeight : 0)}>
          <SwitchRoute uriPrefix={prefix} />
        </Container>
      </ThemeProvider>
    );
  }
};

export default App;

/**
 * A. Authenticate
 * 1. Facebook Account Kit
 * 2. Facebook Authenticate
 * 3. Google Authenticate
 * 4. Email, Phone Authenticate
 * 5. PincodeView Authenticate
 * 6. Face ID, Touch ID, Fingerprint
 */

/**
 * B. Components
 * 1. Spoiler
 * 2. Captcha
 * 3. TextInput
 * 4. Card
 */

 /**
  * C. Screens
  * 1. Splash Screen <ic_laucher, backgroundImage>
  * 2. Authenticate <Login, Register, Forget password, Change password> 
  * 3. Intro app
  * 4. Main app <Drawer, BottomTab, TopTab, Normal>
  */

 /**
  * D. Other 
  * 1. Socket.io (done)
  * 2. Websocket (done)
  * 3. WebRTC
  * 4. SIP.js
  * 5. QRCode (done)
  * 6. Voice // https://github.com/dev-yakuza/react_native_voice_exercise/blob/master/src/App.tsx (done)
  * 7. Video
  * 8. Music (processing)
  */

  /**
   * Voice
   * Text to Speech
   */

  /** Phone
   * Get List Contacts
   * Show List Contacts
   * Add List Contacts
   */

  /** Camera
   * QRcode
   * Camera Kit
   * Download Image
   * Upload Image
   */

  // react-native unlink react-native-camera-kit
  // react-native unlink react-native-gesture-handler
  // react-native unlink react-native-google-analytics-bridge
  // react-native unlink react-native-reanimated
  // react-native unlink react-native-vector-icons
  // react-native unlink react-native-voice
  // react-native unlink react-native-webview
  // react-native unlink rn-fetch-blob