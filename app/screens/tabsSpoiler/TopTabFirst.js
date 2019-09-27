import React, { Component } from 'react';
import TestSpoiler from '../TestSpoiler';

export default class TopTabFirst extends Component {
    static navigationOptions = {
        tabBarLabel: 'Tab 01',
    };

    render() {
        return <TestSpoiler navigation={this.props.navigation} />;
    }
}