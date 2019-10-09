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
      'Module RCTImageLoader requires',
      'Require cycle'
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
 * 5. Modal<Modal, Modal Picker>
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
  * 5. AR and VR 
  */

  /**
   * Voice
   * 1. Text to Speech Conversation
   * 2. Voice Recognition
   */

  /**
   * Video & Music
   * 1. Music
   * 2. Video
   */

  /** Phone
   * Get List Contacts
   * Show List Contacts
   * Add List Contacts
   */

  /** Camera
   * QRcode (Create & Scanner)
   * Camera Kit
   * Download Image
   * Upload Image
   */

  /**
   * Google Maps
   * 1. Display Google Map
   * 2. Custom Google Map
   */