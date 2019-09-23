import React, { Component } from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

// Custom SideBar Drawer
class CustomSideBarMenu extends Component {
    constructor(props) {
      super(props);
      this.proileImage = 'https://aboutreact.com/wp-content/uploads/2018/07/sample_img.png';
      this.items = [
        {
          navOptionThumb: 'md-stats',
          navOptionName: 'Spoiler Screen',
          screenToNavigate: 'Spoiler',
        },
        {
          navOptionThumb: 'md-document',
          navOptionName: 'Captcha Screen',
          screenToNavigate: 'Captcha',
        },
        {
          navOptionThumb: 'md-videocam',
          navOptionName: 'Movie Screen',
          screenToNavigate: 'Movie',
        },
        {
          navOptionThumb: 'md-camera',
          navOptionName: 'WebView Screen',
          screenToNavigate: 'WebView',
        },
        {
          navOptionThumb: 'md-calendar',
          navOptionName: 'Calendar Screen',
          screenToNavigate: 'Calendar',
        },
        {
          navOptionThumb: 'md-key',
          navOptionName: 'Permission Screen',
          screenToNavigate: 'Permission',
        },
      ];
    }
    render () {
      const { sideMenuContainer, sideMenuDivider, sideMenuOptionContainer, sideMenuOptions, sideMenuIconContainer, sideMenuText, sideMenuProfileIcon } = styles;
      return (
        <View style={sideMenuContainer}>
          {/** Top Large Image */}
          <Image
            source={{ uri: this.proileImage }}
            style={styles.sideMenuProfileIcon}
          />
          {/** Divider Top Image and SideBar Options */}
          <View style={sideMenuDivider} />
          {/** SideBar Options */}
          <View style={sideMenuOptionContainer}>
            {
              this.items.map((item, key) => (
                <View key={key} style={[sideMenuOptions, { backgroundColor: global.currentScreenIndex === key ? '#e0dbdb' : '#ffffff' }]}>
                  <View style={sideMenuIconContainer}>
                    <Icon name={item.navOptionThumb} size={25} color="#808080" />
                  </View>
                  <Text 
                    style={[sideMenuText, { color: global.currentScreenIndex === key ? 'red' : 'black' }]}
                    onPress={() => {
                      global.currentScreenIndex = key;
                      this.props.navigation.navigate(item.screenToNavigate);
                    }}
                  >
                    {item.navOptionName}
                  </Text>
                </View>
              ))
            }
          </View>
        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    sideMenuContainer: {
      width: '100%',
      height: '100%',
      backgroundColor: '#fff',
      alignItems: 'center',
      paddingTop: 20,
    },
    sideMenuProfileIcon: {
      resizeMode: 'center',
      width: 150,
      height: 150,
      marginTop: 20,
      borderRadius: 150 / 2,
    },
    sideMenuDivider: {
      width: '100%',
      height: 1,
      backgroundColor: '#e2e2e2',
      marginTop: 15,
    },
    sideMenuOptionContainer: { 
      width: '100%' 
    },
    sideMenuOptions: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingTop: 10,
      paddingBottom: 10,
    },
    sideMenuIconContainer: {
      marginRight: 10, 
      marginLeft: 20 
    },
    sideMenuText: {
      fontSize: 15
    }
});

// Custom SideBar Drawer Sectioned:
class SideMenuSectioned extends Component {
    constructor(props) {
      super(props);
      this.options = [
        {
          mainHeading: 'Main Heading 1',
          subOptions: [
            { secondaryHeading: 'Spoiler Screen', navigationPath: 'Spoiler' },
          ],
        },
        {
          mainHeading: 'Main Heading 2',
          subOptions: [
            { secondaryHeading: 'Captcha Screen', navigationPath: 'Captcha' },
            { secondaryHeading: 'Movie Screen', navigationPath: 'Movie' },
            { secondaryHeading: 'WebView Screen', navigationPath: 'WebView' },
          ],
        },
      ];
    }
  
    navigateToScreen = route => {
      this.props.navigation.navigate(route);
    }
  
    render() {
      const { container, secondaryHeading, mainHeading, footerContainer } = stylesSectioned;
      return (
        <View style={container}>
          <ScrollView>
            <View>
              {
                this.options.map((option, key) => (
                  <View key={key}>
                    <Text style={mainHeading}>{option.mainHeading}</Text>
                    {
                      option.subOptions.map((item, key) => (
                        <View style={secondaryHeading} key={key}>
                          <Text onPress={() => this.navigateToScreen(item.navigationPath)}>
                            {item.secondaryHeading}
                          </Text>
                        </View>
                      ))
                    }
                  </View>
                ))
              }
            </View>
          </ScrollView>
          <View style={footerContainer}>
              <Text>This is my fixed footer</Text>
          </View>
        </View>
      );
    }
}
  
const stylesSectioned = StyleSheet.create({
    container: {
      paddingTop: 20,
      flex: 1,
    },
    secondaryHeading: {
      padding: 10,
    },
    mainHeading: {
      paddingVertical: 10,
      paddingHorizontal: 5,
      backgroundColor: 'lightgrey',
    },
    footerContainer: {
      padding: 20,
      backgroundColor: 'lightgrey',
    }
});

export {
    CustomSideBarMenu,
    SideMenuSectioned
};
  