import React, { Component } from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import { WebView } from 'react-native-webview';

export default class TestWebView extends Component {
    state = { visible: true };

    showSpiner() {
        this.setState({ visible: true });
    }

    hideSpiner() {
        this.setState({ visible: false });
    }

    render() {
        const { styleOld, styleNew, webViewStyle, activityIndicatorStyle } = styles;
        const { visible } = this.state;
        return (
            <View style={visible === true ? styleOld : styleNew}>
                {
                    visible ? (
                        <ActivityIndicator color="#009688" size="large" style={activityIndicatorStyle} />
                    ) : null
                }
                <WebView 
                    style={webViewStyle}
                    source={{ uri: "http://abcsoft.vn" }}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    startInLoadingState={true}
                    onLoadStart={() => this.showSpiner()}
                    onLoad={() => this.hideSpiner()}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    styleOld: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    styleNew: { flex: 1 },
    webViewStyle: { flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 40 },
    activityIndicatorStyle: { flex: 1, justifyContent: 'center', alignItems: 'center', position: 'absolute' }
});