import React, { Component } from 'react';
import { View, Platform, StyleSheet, TouchableOpacity, Text, Linking, Dimensions } from 'react-native';
import { CameraKitCameraScreen } from 'react-native-camera-kit';
import QRCode from 'react-native-qrcode-svg';
import { requestCameraPermission } from '../../utils/permissions';
const { width } = Dimensions.get("window");

export default class QRCodeScreen extends Component { // QRCode Scanner
    static navigationOptions = {
        tabBarLabel: 'QR Code',
    };

    state = {
        QR_Code_Value: '',
        Start_Scanner: false,
    };

    openLink_in_browser = () => {
        Linking.openURL(this.state.QR_Code_Value);
    }
    
    onQR_Code_Scan_Done = (QR_Code) => {
        this.setState({ QR_Code_Value: QR_Code, Start_Scanner: false  });
    }

    open_QR_Code_Scanner = () => {
        var that = this;
        if (Platform.OS === 'android') {
            requestCameraPermission(() => {
                that.setState({ QR_Code_Value: '', Start_Scanner: true });
            });
        } else {
            that.setState({ QR_Code_Value: '', Start_Scanner: true });
        }
    }

    onBottomButtonPressed = (event) => {
        if (event.type === 'left') {
            this.setState({ Start_Scanner: false });
        }
    }

    render() {
        if (!this.state.Start_Scanner) {
            return (
                <View style={styles.container}>
                    <Text style={styles.textResult}>Create QRCode: </Text>
                    <QRCode value={this.state.QR_Code_Value ? this.state.QR_Code_Value : "default" } />
                    <Text style={styles.textResult}>
                        {this.state.QR_Code_Value ? 'Scanned QR Code: ' + this.state.QR_Code_Value : ''}
                    </Text>
                    {this.state.QR_Code_Value.includes("http") ?
                        <TouchableOpacity onPress={this.openLink_in_browser} style={styles.button}>
                            <Text style={styles.text}>Open Link in default Browser</Text>
                        </TouchableOpacity> : null
                    }
                    <TouchableOpacity style={styles.button} onPress={this.open_QR_Code_Scanner}>
                        <Text style={styles.text}>
                            Open QR Scanner
                        </Text>
                    </TouchableOpacity>
                </View>
            );
        } else {
            return (
                <View style={{ flex: 1 }}>
                    <CameraKitCameraScreen 
                        actions={{ rightButtonText: "Continue", leftButtonText: "Cancel" }}
                        onBottomButtonPressed={event => this.onBottomButtonPressed(event)}
                        styles={StyleSheet.absoluteFill}
                        hideControls={false}
                        // showFrame={true}
                        offsetForScannerFrame={width * 0.1}
                        heightForScannerFrame={width * 0.8}
                        colorForScannerFrame={"red"}
                        scanBarcode={true} // THERE IS IMPORTANT
                        onReadCode={event => this.onQR_Code_Scan_Done(event.nativeEvent.codeStringValue)}
                    />
                </View>
            );
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === 'ios' ? 20 : 0,
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        backgroundColor: '#2979FF',
        alignItems: 'center',
        padding: 12,
        width: 300,
        marginTop: 14
    },
    textResult: {
        color: '#000',
        fontSize: 19,
        padding: 8,
        marginTop: 12,
    },
    text: {
        color: '#FFF', 
        fontSize: 14 
    }
});
    // https://reactnativecode.com/qr-code-scanner-app-using-camera/