import React, { Component } from 'react';
import { View, StyleSheet, Image, Alert, TouchableOpacity, Text } from 'react-native';
import RNFetchBlob from 'rn-fetch-blob';
import { requestExternalWritePermission } from '../../utils/permissions';

export default class DownloadImage extends Component {
    static navigationOptions = {
        tabBarLabel: 'Download Image',
    };

    state = {
        permissionGranted: false,
    };

    componentDidMount = () => {
        if(!this.state.permissionGranted) {
            requestExternalWritePermission(() => {
                this.setState({
                    permissionGranted: true
                });
            });
        } else {
            this.setState({ permissionGranted: false });
        }
    }

    downloadImage = () => {
        var date = new Date();
        var image_URL = 'https://reactnativecode.com/wp-content/uploads/2018/02/motorcycle.jpg';
        var ext = this.getExtention(image_URL);
        ext = "." + ext[0];
        const { config, fs } = RNFetchBlob;
        let PictureDir = fs.dirs.PictureDir;
        let options = {
            fileCache: true,
            addAndroidDownloads: {
                useDownloadManager: true,
                notification: true,
                path: PictureDir + "/image_" + Math.floor(date.getTime() + date.getSeconds() / 2) + ext,
                description: 'Image'
            }
        }
        config(options).fetch('GET', image_URL).then((res) => {
            Alert.alert('Image Downloaded Successfully.');
        });
    }

    getExtention = (filename) => {
        return (/[.]/.exec(filename)) ? /[^.]+$/.exec(filename) : undefined;
    }

    render() {
        return (
            <View style={styles.MainContainer}>
                <Image 
                    source={{ uri: 'https://reactnativecode.com/wp-content/uploads/2018/02/motorcycle.jpg' }}
                    style={{ width: 300, height: 300, resizeMode: 'contain', margin: 5 }} 
                />
                <TouchableOpacity style={styles.button} onPress={this.downloadImage}>
                    <Text style={styles.text}>Download Above Image</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    MainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    button: {
        width: '80%',
        paddingTop: 3,
        paddingBottom: 3,
        backgroundColor: '#2E7D32',
        borderRadius: 7,
        margin: 10
    },
    text: {
        color: '#fff',
        fontSize: 20,
        textAlign: 'center',
        padding: 5
    }
});