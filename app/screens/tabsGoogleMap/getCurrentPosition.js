import React, { Component } from 'react'
import { View, StyleSheet, Platform, InteractionManager, Alert } from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import MapView, { PROVIDER_GOOGLE, AnimatedRegion } from 'react-native-maps';
import { requestLocationPermission } from '../../utils/permissions';

const LATITUDE_DELTA = 0.01;
const LONGITUDE_DELTA = 0.01;
const initialRegion = {
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421
};

export default class GetCurrentPosition extends Component {
    state = {
        initialRegion: {
            latitude: 0,
            longitude: 0,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
        },
        ready: true  
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
                let region = {
                    latitude: parseFloat(position.coords.latitude),
                    longitude: parseFloat(position.coords.longitude),
                    latitudeDelta: LATITUDE_DELTA,
                    longitudeDelta: LONGITUDE_DELTA
                };
                if (this.state.ready) {
                    that.setState({ initialRegion: region });
                }   
            }, (error) => {
                //TODO: better design
                switch (error.code) {
                    case 1:
                            if (Platform.OS === "ios") {
                                Alert.alert("", "Để xác định vị trí của bạn, hãy cho phép ứng dụng trong Cài đặt - Quyền riêng tư - Vị trí");
                            } else {
                                Alert.alert("", "Để xác định vị trí của bạn, hãy cho phép ứng dụng trong Cài đặt - Ứng dụng - Ví dụ ứng dụng - Vị trí");
                            }
                        break;
                    default:
                        Alert.alert("", "Lỗi phát hiện vị trí của bạn");
                }
            },
            { 
                enableHighAccuracy: true,
                timeout: 20000,
                maximumAge: 1000 
            }
        );
        that.watchID = Geolocation.watchPosition(
            (position) => {
                let region = {
                    latitude: parseFloat(position.coords.latitude),
                    longitude: parseFloat(position.coords.longitude),
                    latitudeDelta: LATITUDE_DELTA,
                    longitudeDelta: LONGITUDE_DELTA
                };
                that.setState({  initialRegion: region });
            }
        );
    }

    componentWillUnmount() {
        Geolocation.clearWatch(this.watchID);
    }

    goToInitialLocation() {
        if(!this.state.ready) {
            this.setState({ ready: true });
            let initialRegion = Object.assign({}, this.state.initialRegion);
            initialRegion["latitudeDelta"] = 0.0922;
            initialRegion["longitudeDelta"] = 0.0421;
            this.mapView.animateToRegion(initialRegion, 10);
        }
      }

    render() {
        return (
            <View style={styles.container}>
                <MapView
                    ref={ref => (this.mapView = ref)}
                    provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                    style={styles.map}
                    mapType={"hybrid"}
                    followsUserLocation={true}
                    zoomEnabled={true}
                    showsUserLocation={true}
                    onMapReady={this.goToInitialLocation.bind(this)}
                    initialRegion={initialRegion}
                    region={this.state.initialRegion}
                    loadingEnabled
                    loadingIndicatorColor="#666666"
                    loadingBackgroundColor="#eeeeee"
                >
                    <MapView.Marker
                        coordinate={{
                            latitude: this.state.initialRegion.latitude,
                            longitude: this.state.initialRegion.longitude
                        }}
                    />
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