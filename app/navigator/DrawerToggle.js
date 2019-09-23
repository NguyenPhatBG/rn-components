import React, { Component } from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

// Navigation Drawer Structure for all screen
export default class NavigationDrawerStructure extends Component {
    toggleDrawer = () => {
      this.props.navigationProps.toggleDrawer();
    };
    render() {
      return (
        <View style={{ flexDirection: 'row' }}>
          <Icon.Button
            name="md-menu"
            type="ionicon"
            size={25}
            color="black"
            backgroundColor="transparent"
            underlayColor="transparent"
            onPress={this.toggleDrawer.bind(this)}
          />
        </View>
      );
    }
}