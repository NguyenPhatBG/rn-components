import React, { Component } from 'react'
import ListMusic from './ListMusic';

export default class SoundControl extends Component {
    static navigationOptions = {
        tabBarLabel: 'List Sound',
    };

    render() {
        return <ListMusic navigation={this.props.navigation} />;
    }
}