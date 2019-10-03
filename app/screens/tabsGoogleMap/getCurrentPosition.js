import React, { Component } from 'react'
import { View, Text, StyleSheet, Platform, Image, InteractionManager, ActivityIndicator } from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { requestLocationPermission } from '../../utils/permissions';

export default class GetCurrentPosition extends Component {
    state = {
        currentLongitude: '', // Initial Longitude
        currentLatitude: '', // Initial Latitude
    };

    componentDidMount() {
        var that = this;
        InteractionManager.runAfterInteractions(() => {
            if (Platform.OS === 'ios') {
                this.callLocation(that);
            } else {
                setTimeout(() => {
                    requestLocationPermission(() => {
                        that.callLocation(that);
                    });
                }, 500);
            }
        });
    }

    callLocation(that) {
        Geolocation.getCurrentPosition(
            (position) => {
                const currentLongitude = JSON.stringify(position.coords.longitude);
                const currentLatitude = JSON.stringify(position.coords.latitude);
                that.setState({ currentLongitude, currentLatitude });
            }, (error) => alert(error.message),
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
        );
        that.watchID = Geolocation.watchPosition(
            (position) => {
                const currentLongitude = JSON.stringify(position.coords.longitude);
                const currentLatitude = JSON.stringify(position.coords.latitude);
                that.setState({  currentLongitude, currentLatitude });
            }
        );
    }

    componentWillUnmount() {
        Geolocation.clearWatch(this.watchID);
    }

    render() {
        const { currentLatitude, currentLongitude } = this.state;
        return (
            <View style={styles.container}>
                <MapView
                    provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                    style={styles.map}
                    region={{
                        latitude: Number(currentLatitude),
                        longitude: Number(currentLongitude),
                        latitudeDelta: 0.015,
                        longitudeDelta: 0.0121,
                    }}
                >
                </MapView>
            </View>
        );
    }
}

const styles = StyleSheet.create ({
    container: {
        ...StyleSheet.absoluteFillObject,
        height: 400,
        width: 400,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
});
// https://console.cloud.google.com/apis/credentials
// https://github.com/novalabio/react-native-maps-super-cluster
// https://github.com/react-native-community/react-native-maps/issues/209#issuecomment-350907665