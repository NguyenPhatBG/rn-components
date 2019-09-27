import React, { Component } from 'react';
import { View, Platform, StyleSheet, TouchableOpacity, Alert, Text } from 'react-native';
import { CameraKitCameraScreen } from 'react-native-camera-kit';
import { requestCameraPermission, requestExternalWritePermission, requestExternalReadPermission } from '../../utils/permissions';

export default class TopTabThird extends Component {
    static navigationOptions = {
        tabBarLabel: 'Camera Kit',
    };

    state = {
        isPermitted: false
    };

    onPress() {
        var that = this;
        if (Platform.OS === 'android') {
            requestCameraPermission(() => {
                requestExternalWritePermission(() => {
                    requestExternalReadPermission((isPermitted) => {
                        that.setState({ isPermitted });
                    });
                });
            });
        } else {
            this.setState({ isPermitted: true });
        }
    }

    onBottomButtonPressed(event) {
        const captureImages = JSON.stringify(event.captureImages);
        if (event.type === 'left') {
          this.setState({ isPermitted: false });
        } else {
          Alert.alert(
            event.type,
            captureImages,
            [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
            { cancelable: false }
          );
        }
    }    

    render() {
    if (this.state.isPermitted) {
        return (
                <CameraKitCameraScreen
                    cameraOptions={{
                        flashMode: 'auto',             // on/off/auto(default)
                        focusMode: 'on',               // off/on(default)
                        zoomMode: 'on',                // off/on(default)
                        ratioOverlay:'1:1',            // optional, ratio overlay on the camera and crop the image seamlessly
                        ratioOverlayColor: '#00000077' // optional
                    }}
                    // Buttons to perform action done and cancel
                    actions={{ rightButtonText: 'Done', leftButtonText: 'Cancel' }}
                    onBottomButtonPressed={event => this.onBottomButtonPressed(event)}
                    flashImages={{
                        // Flash button images
                        on: require('../../assets/images/flashon.png'),
                        off: require('../../assets/images/flashoff.png'),
                        auto: require('../../assets/images/flashauto.png'),
                    }}
                    cameraFlipImage={require('../../assets/images/flip.png')}
                    captureButtonImage={require('../../assets/images/capture.png')}
                />
            );
        } else {
            return (
                <View style={styles.container}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={this.onPress.bind(this)}
                    >
                        <Text>Open Camera</Text>
                    </TouchableOpacity>
                </View>
            );
        }
    }}
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'white',
        },
        button: {
            alignItems: 'center',
            backgroundColor: '#DDDDDD',
            padding: 10,
            width: 300,
            marginTop: 16,
        },
    });

    // https://aboutreact.com/react-native-camera/