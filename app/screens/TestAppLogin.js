import React, { Component } from 'react';
import { 
  View, 
  StyleSheet, 
  TextInput, 
  Text, 
  TouchableWithoutFeedback, 
  TouchableNativeFeedback, 
  TouchableOpacity, 
  Platform, 
  Animated,
  Easing,
  Linking,
  StatusBar 
} from 'react-native';
import dissmisKeyboard from 'react-native/Libraries/Utilities/dismissKeyboard';

const Button = Platform.select({
  android: TouchableNativeFeedback,
  ios: TouchableOpacity
});

class TestLoginApp extends Component {
  emailRef = React.createRef();
  passwordRef = React.createRef();
  spinValue = new Animated.Value(0);
  state = {
    email: '',
    password: ''
  }; 

  static helperUrl () {
    Linking.openURL('https://abcsoft.vn/');
  }

  componentDidMount() {
    this.spin();
    StatusBar.setTranslucent(true);
    StatusBar.setBackgroundColor('transparent');
  }

  spin () {
    this.spinValue.setValue(0)
    Animated.timing(
      this.spinValue,
      {
        toValue: 1,
        duration: 4000,
        easing: Easing.linear
      }
    ).start(() => this.spin());
  }

  onChangeText = (key, value) => {
    this.setState({
      [key]: value
    });
  }

  submitButon = () => {
    const { email, password } = this.state;
    this.props.navigation.navigate('drawerRouter');
  }

  render() {
    const { container, textTitle, inputStyle, buttonStyle, buttonTextStyle, buttonBottomStyle, horizontalButton, buttonBottomRightStyle, buttonTextSkip } = styles;
    const { email, password } = this.state;
    const { navigation } = this.props;
    const { navigate } = navigation;
    const spin = this.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg']
    });
    return (
      <TouchableWithoutFeedback onPress={dissmisKeyboard}>
        <View style={container}>
          <Animated.Image 
            source={{ uri: 'https://s3.amazonaws.com/media-p.slid.es/uploads/alexanderfarennikov/images/1198519/reactjs.png' }} 
            style={{
              width: 150,
              height: 150,
              transform: [{rotate: spin}]
            }}
            resizeMode="contain"
          />
          <Text style={textTitle}>Login App</Text>
          <TextInput 
            ref={this.emailRef}
            placeholder="Enter email"
            value={email}
            onChangeText={email => this.onChangeText('email', email)}
            style={inputStyle}
            selectionColor="white"
            keyboardType="email-address"
            returnKeyType="next"
            onSubmitEditing={() => this.passwordRef.current.focus()}
          />
          <TextInput 
            ref={this.passwordRef}
            placeholder="Enter password"
            value={password}
            onChangeText={password => this.onChangeText('password', password)}
            style={inputStyle}
            selectionColor="white"
            keyboardType="default"
            returnKeyType="done"
            onSubmitEditing={this.submitButon}
          />
          <View style={horizontalButton}>
            <Button>
              <View>
                <Text style={buttonTextStyle}>Create Account</Text>
              </View>
            </Button>
            <Button>
              <View>
                <Text style={buttonTextStyle}>Forget Password</Text>
              </View>
            </Button>
          </View>
          <Button
            background={TouchableNativeFeedback.SelectableBackground()}
            onPress={this.submitButon}
          >
            <View style={buttonStyle}>
              <Text style={buttonTextStyle}>Login Me.</Text>
            </View>
          </Button>
          <Button
            background={TouchableNativeFeedback.SelectableBackground()}
            onPress={() => TestLoginApp.helperUrl()}
          >
            <View style={buttonBottomStyle}>
              <Text style={buttonTextStyle}>Cần trợ giúp?</Text>
            </View>
          </Button>
          <Button
            background={TouchableNativeFeedback.SelectableBackground()}
            onPress={() => navigate('Intro')}
          >
            <View style={buttonBottomRightStyle}>
              <Text style={buttonTextSkip}>Skip</Text>
            </View>
          </Button>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 30, backgroundColor: '#5D8CAE' },
  textTitle: { color: 'white', fontSize: 30, fontStyle: "italic", fontWeight: '500', textAlign: 'center', paddingBottom: 30 },
  inputStyle: { width: '100%', borderRadius: 5, backgroundColor: 'white', marginTop: 10 },
  horizontalButton: { width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 5, marginVertical: 10 },
  buttonStyle: { width: '100%', height: 40, justifyContent: 'center', alignItems: 'center', borderRadius: 5, backgroundColor: '#1F4788' },
  buttonTextStyle: { color: 'white' },
  buttonBottomStyle: { width: '100%', paddingVertical: 5, justifyContent: 'center', alignItems: 'center', position: 'absolute', bottom: 0 },
  buttonBottomRightStyle: { paddingVertical: 5, paddingHorizontal: 10, backgroundColor: 'white', borderRadius: 5, borderWidth: 1, position: 'absolute', bottom: 0, right: 0, marginRight: 30, marginBottom: 5 },
  buttonTextSkip: { color: 'black' }
});

export default TestLoginApp;

