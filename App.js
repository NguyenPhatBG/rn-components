import React, { PureComponent } from 'react';
import { YellowBox } from 'react-native';
import SwitchRoute from './app/navigator/StackNavigator';

class App extends PureComponent {
  constructor(props) {
    super(props);
    YellowBox.ignoreWarnings([
      'Warning: componentWillMount is deprecated',
      'Warning: componentWillReceiveProps is deprecated',
      'Module RCTImageLoader requires'
    ]);
  }

  componentDidMount() {}

  render() {
    return <SwitchRoute />;
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
  * 4. Main app <Drawer, BottomTab, Normal>
  */

 /**
  * D. Other 
  * 1. Socket.io
  * 2. Websocket
  * 3. WebRTC
  * 4. SIP.js
  * 5. QRCode
  */