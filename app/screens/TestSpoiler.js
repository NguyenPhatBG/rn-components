import React, { Component } from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import dismissKeyboard from 'react-native/Libraries/Utilities/dismissKeyboard';
import Spoiler from './../components/Spoiler';
import { testID } from './../../app/utils';

const ContainerView = Platform.select({
    ios: KeyboardAvoidingView,
    android: View
});

export default class TestSpoiler extends Component {
    state = {
        params: {
            accountNumber: '000123456789', // required field
            countryCode: 'us', // required field
            currency: 'usd', // required field
            routingNumber: '110000000', // 9 digits
            accountHolderName: 'Test holder name',
            accountHolderType: 'company',
        },
        errorParams: {
            accountNumber: '000123456789', // required field
            countryCode: 'us', // required field
            currency: 'abc', // required field
            routingNumber: '110000000', // 9 digits
            accountHolderName: 'Test holder name',
            accountHolderType: 'company',
        }
    };
    
    renderMandatoryFields = params => (
        <View style={styles.params}>
            <Text style={styles.param}>
                Routing Number: {params.routingNumber}
            </Text>
            <Text style={styles.param}>
                Account Number: {params.accountNumber}
            </Text>
            <Text style={styles.param}>
                Country Code: {params.countryCode}
            </Text>
            <Text style={styles.param}>
                Currency: {params.currency}
            </Text>
        </View>
    );

    render() {
        const { params, errorParams } = this.state;
        return (
            <ContainerView 
                behavior="padding"
                onResponderGrant={dismissKeyboard}
                onStartShouldSetResponder={() => true}
                style={styles.container} 
                {...testID('testSpoilerContainer')}
            >
                <Spoiler title="Mandatory Fields">
                    {this.renderMandatoryFields(params)}
                </Spoiler>
                <Spoiler title="Mandatory Fields - Error case" defaultOpen={false}>
                    {this.renderMandatoryFields(errorParams)}
                </Spoiler>
            </ContainerView>
        );  
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    params: {
        backgroundColor: '#ffffff',
        borderRadius: 10,
        padding: 10,
        alignItems: 'flex-start',
        margin: 5,
    }
});