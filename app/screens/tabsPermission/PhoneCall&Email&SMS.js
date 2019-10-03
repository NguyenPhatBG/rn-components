import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Communications from 'react-native-communications';

export default class PhoneCallAndEmailAndSMS extends React.Component {
    static navigationOptions = {
        tabBarLabel: 'Phone, Email and SMS',
    };
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.headingStyle}>React Native Communication</Text>
                {/*To make a phone call phonecall(phoneNumber, prompt) */}
                <TouchableOpacity 
                    style = {styles.button}
                    onPress={() => Communications.phonecall('0123456789', true)}
                >
                    <Text style={styles.text}>Make Phone Call</Text>
                </TouchableOpacity>
                {/*To send the mail function(to, cc, bcc, subject, body)*/}
                <TouchableOpacity 
                    style = {styles.button}
                    onPress={() => Communications.email(
                        ['demo@gmail.com', 'hello@abcsoft.vn'],
                        null, 
                        null,
                        'Demo Subject',
                        'Demo Content for the mail'
                        )
                    }
                >
                {/*email(to, cc, bcc, subject, body)*/}
                    <Text style={styles.text}>Send an Email</Text>
                </TouchableOpacity>
                {/*To send the text message function(phoneNumber = null, body = null)*/}
                <TouchableOpacity 
                    style = {styles.button}
                    onPress={() => Communications.text('0123456789', 'Test Text Here')}
                >
                    <Text style={styles.text}>Send a Text/iMessage</Text>
                </TouchableOpacity>
                {/*To open a web URL function(address = null)*/}
                <TouchableOpacity 
                    style = {styles.button}
                    onPress={() => Communications.web('http://abcsoft.vn')}
                >
                    <Text style={styles.text}>Open http://abcsoft.vn</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'rgb(253,253,253)',
        padding: 16,
    },
    headingStyle: {
        fontSize: 25,
        textAlign: 'center',
        padding: 30,
    },
    button: {
        justifyContent: 'center',
        width : 300,
        backgroundColor:"#307cae",
        marginTop : 20,
    },
    text: {
        fontSize: 18,
        textAlign : 'center',
        padding : 10,
        color : '#ffffff',
    },
});