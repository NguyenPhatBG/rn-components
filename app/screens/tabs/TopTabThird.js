import React, { Component } from 'react';
import { View } from 'react-native';

export default class TopTabThird extends Component {
    static navigationOptions = {
        tabBarLabel: 'Tab 03',
    };

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#9b59b6' }} />
        );
    }
}