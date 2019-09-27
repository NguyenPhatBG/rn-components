import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Image, PixelRatio, TextInput, KeyboardAvoidingView, Vibration } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import RNFetchBlob from 'rn-fetch-blob';

const DURATION = 1000 ;
const PATTERN = [ 1000, 2000, 3000, 4000];

const options = {
    title: 'Select Avatar',
    quality: 1.0,
    maxWidth: 500,
    maxHeight: 500,
    storageOptions: {
      skipBackup: true,
    },
};

export default class UploadImageToServer extends Component {
    static navigationOptions = {
        tabBarLabel: 'Upload Image',
    };

    state = {
        ImageSource: null,
        data: null,
        Image_TAG: '',
    };

    vibrationDevice = (msg) => {
        Vibration.vibrate(DURATION);
        setTimeout(() => {
            Vibration.cancel();
            alert(msg);
        }, 1000);
    }

    selectPhotoTapped = () => {
        ImagePicker.showImagePicker(options, (response) => {
            if (response.didCancel) {
                this.vibrationDevice('User cancelled photo picker');
            } else if (response.error) {
                this.vibrationDevice(`ImagePicker Error: ${response.error}`);
            } else if (response.customButton) {
                this.vibrationDevice(`User tapped custom button: ${response.customButton}`);
            } else {
                let source = { uri: response.uri };
                this.setState({ ImageSource: source, data: response.data });
            }
        });
    }

    uploadImageToServer = () => {
        RNFetchBlob.fetch('POST', 'http://', {
            Authorization: 'Bearer access-token',
            otherHeader: 'foo',
            'Content-Type': 'multipart/form-data',
        }, [
            { name: 'image', filename: 'image.png', type: 'image/png', data: this.state.data },
            { name: 'image_tag', data: this.state.Image_TAG }
        ]).then((resp) => {
            var tempMSG = resp.data;
            tempMSG = tempMSG.replace(/^"|"$/g, '');
            alert(tempMSG);
        }).catch((error) => {
            alert('Error', error);
        });
    }
    
    render() {
        return (
            <KeyboardAvoidingView behavior="position" style={styles.container}>
                <TouchableOpacity onPress={this.selectPhotoTapped.bind(this)}>
                    <View style={styles.ImageContainer}>
                        {this.state.ImageSource === null 
                            ? <Text>Select a Photo</Text> 
                            : <Image style={styles.ImageContainer} source={this.state.ImageSource} />
                        }
                    </View>
                </TouchableOpacity>
                <View style={{ height: 40, marginVertical: 20 }}>
                    <TextInput
                        placeholder="Enter Image Name"
                        onChangeText={data => this.setState({ Image_TAG: data })}
                        underlineColorAndroid='transparent'
                        style={styles.TextInputStyle}
                    />
                </View>
                <TouchableOpacity onPress={this.uploadImageToServer} activeOpacity={0.6} style={styles.button}>
                    <Text style={styles.TextStyle}> UPLOAD IMAGE TO SERVER </Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: '#FFF8E1',
      paddingTop: 20
    },
    ImageContainer: {
      borderRadius: 10,
      width: 250,
      height: 250,
      borderColor: '#9B9B9B',
      borderWidth: 1 / PixelRatio.get(),
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#CDDC39',
    },
    TextInputStyle: {
      textAlign: 'center',
      height: 40,
      width: '100%',
      borderRadius: 10,
      borderWidth: 1,
      borderColor: '#028b53'
    },
    button: {
      width: '100%',
      margin: 0,
      padding: 0,
      backgroundColor: '#00BCD4',
      borderRadius: 7
    },
    TextStyle: {
      color: '#fff',
      textAlign: 'center',
      padding: 10
    }
});
