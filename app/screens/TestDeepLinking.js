import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class TestDeepLinking extends Component {
    render() {
        return (
            <View>
                <Text>Hello from Articles id!</Text>
            </View>
        );
    }
}

// https://medium.com/hackernoon/react-native-deep-linking-for-ios-and-android-d33abfba7ef3
// https://www.reactnativeschool.com/handling-deep-links-with-react-navigation
// https://reactnavigation.org/docs/en/deep-linking.html
// https://github.com/react-navigation/react-navigation/issues/1527
// adb shell am start -W -a android.intent.action.VIEW -d "myapp://testdeeplinking/3" com.rnapp
