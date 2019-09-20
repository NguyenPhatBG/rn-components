import React, { PureComponent } from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import DrawerLayout from 'react-native-drawer-layout-polyfill'

import TestSpoiler from '../screens/TestSpoiler';
import TestReCaptcha from '../screens/TestReCaptcha';
import TestHorizontalCalendar from '../screens/TestHorizontalCalendar';

import Header from '../components/Header';
import MenuItem from '../components/MenuItem';
import { testID } from '../utils';

export default class DrawerContainer extends PureComponent {
  state = {
    index: 0,
    isDrawerOpen: false,
    routes: [
      TestReCaptcha,
      TestSpoiler,
      TestHorizontalCalendar
    ].filter(item => item),
  };

  getCurrentScene = () => this.state.routes[this.state.index];

  handleChangeTab = (index) => {
    this.drawer.closeDrawer();
    this.setState({ index });
  }

  handleDrawerRef = (node) => {
    this.drawer = node
  }

  handleMenuPress = () => {
    if (this.state.isDrawerOpen) {
      this.drawer.closeDrawer();
    } else {
      this.drawer.openDrawer();
    }
  }

  handleDrawerOpen = () => {
    this.setState({ isDrawerOpen: true });
  }

  handleDrawerClose = () => {
    this.setState({ isDrawerOpen: false });
  }

  /* eslint-disable react/no-array-index-key */
  renderNavigation = () => (
    <View style={styles.drawer}>
      {this.state.routes.map((Scene, index) => (
        <MenuItem
          key={index}
          title={Scene.title}
          active={this.state.index === index}
          onPress={() => this.handleChangeTab(index)}
          {...testID(Scene.title)}
        />
      ))}
    </View>
  );

  render () {
    const Scene = this.getCurrentScene();
    return (
      <View style={styles.container}>
        <View style={styles.statusbar} />
          <Header title={`App: ${Scene.title}`} onMenuPress={this.handleMenuPress} />
          <DrawerLayout
            drawerWidth={230}
            drawerPosition={DrawerLayout.positions.Left}
            renderNavigationView={this.renderNavigation}
            onDrawerOpen={this.handleDrawerOpen}
            onDrawerClose={this.handleDrawerClose}
            ref={this.handleDrawerRef}
          >
          <Scene />
        </DrawerLayout>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  statusbar: {
    height: Platform.select({ ios: 20, android: 0 }),
  },
  drawer: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});