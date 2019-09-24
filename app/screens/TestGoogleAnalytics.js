import React, { Component } from 'react';
import { Platform, StyleSheet, View, Text } from 'react-native';
import {
    GoogleAnalyticsTracker,
    GoogleTagManager,
    GoogleAnalyticsSettings
} from "react-native-google-analytics-bridge";

let tracker1 = new GoogleAnalyticsTracker('UA-210760683-1');

export default class TestGoogleAnalytics extends Component {
    state = {}

    componentDidMount() {
        tracker1.trackScreenView("TestGoogleAnalytics");
        GoogleAnalyticsSettings.setDispatchInterval(30);
    }

    render() {
        return (
            <View style={styles.mainContainer}>
                <Text style={styles.text}>Google Analytics</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        paddingTop: (Platform.OS=== "ios" ? 20 : 0),
        justifyContent: 'center',
        margin: 20
    },
    text: {
        textAlign: 'center'
    }
});

// https://reactnativecode.com/google-analytics-implement-in-react-native/