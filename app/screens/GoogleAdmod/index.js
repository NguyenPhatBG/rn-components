import React, { Component } from 'react'
import { View } from 'react-native';
import { AdMobBanner } from 'react-native-admob';

export default class GoogleAdmod extends Component {
    state = {  }
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <AdMobBanner
                    adSize="fullBanner"
                    adUnitID="ca-app-pub-1473538949030553/1595078116"
                    testDevices={[AdMobBanner.simulatorId]}
                    onAdFailedToLoad={error => console.log(error)}
                />
            </View>
        );
    }
}
// https://dev-yakuza.github.io/en/react-native/react-native-admob/
// https://www.google.com/admob/
// ca-app-pub-1473538949030553~7537669936
// ca-app-pub-1473538949030553/1595078116 || ca-app-pub-1473538949030553/1921068095