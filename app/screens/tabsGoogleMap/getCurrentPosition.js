import React, { Component } from 'react'
import { View, Text, StyleSheet, Platform, Image, InteractionManager, ActivityIndicator } from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import { requestLocationPermission } from '../../utils/permissions';

export default class GetCurrentPosition extends Component {
    state = {
        isLoading: true,
        currentLongitude: 'unknown', // Initial Longitude
        currentLatitude: 'unknown', // Initial Latitude
    };

    componentDidMount() {
        var that = this;
        this.setState({ isLoading: false });
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
                console.log(position);
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
        if (this.state.isLoading) {
            return <ActivityIndicator size="large" animating={this.state.isLoading} />
        } else {
            return (
                <View style = {styles.container}>
                    <Image
                        source={{uri:'https://png.icons8.com/dusk/100/000000/compass.png'}}
                        style={{width: 100, height: 100}}
                    />
                    <Text style = {styles.boldText}>
                        You are Here
                    </Text>
                    <Text style={{justifyContent:'center',alignItems: 'center',marginTop:16}}>
                        Longitude: {this.state.currentLongitude}
                    </Text>
                    <Text style={{justifyContent:'center',alignItems: 'center',marginTop:16}}>
                        Latitude: {this.state.currentLatitude}
                    </Text>
                </View>
            );
        }
    }
}

const styles = StyleSheet.create ({
    container: {
       flex: 1,
       alignItems: 'center',
       justifyContent:'center',
       marginTop: 50,
       padding:16,
       backgroundColor:'white'
    },
    boldText: {
       fontSize: 30,
       color: 'red',
    }
});