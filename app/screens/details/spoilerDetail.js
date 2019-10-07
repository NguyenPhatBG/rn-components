import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class SpoilerDetail extends Component {
    render() {
        const { navigation } = this.props;
        const { getParam } = navigation;
        let title = getParam('title');
        let message = getParam('message');
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#27ae60' }}>
                <Text>{title}</Text>
                <Text>{message}</Text>
            </View>
        );
    }
}