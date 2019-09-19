import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, TouchableNativeFeedback, TextInput, Image, Alert } from 'react-native';

export default class TestReCaptcha extends React.PureComponent {
    static title = 'Test ReCaptcha'

    state = {
        text_input: 0,
        sum_holder: 0,
        random_number_1: 0,
        random_number_2: 0,
    };

    componentDidMount() {
        this.generate_captcha();
    }

    generate_captcha = () => {
        let number_1 = Math.floor(Math.random() * 100) + 1;
        let number_2 = Math.floor(Math.random() * 100) + 1;
        let sum = number_1 + number_2;
        this.setState({ random_number_1: number_1, random_number_2: number_2 });
        this.setState({ sum_holder: sum });
    }

    run_captcha_function = () => {
        let temp = this.state.random_number_1 + this.state.random_number_2;
        if (this.state.text_input == temp) {
            // Write code here which our want to execute on RIGHT Captcha Entered.
            Alert.alert('Captcha Metched');
        } else {
            // Write code here which our want to execute on WRONG Captcha Entered.
            Alert.alert('Captcha NOT Matched');
        }
        // Calling captcha function, So each time new captcha number generates on button clicks
        this.generate_captcha();
    }

    render() {
        return (
            <View style={styles.MainContainer}>
                <View style={styles.captcha_view}>
                    <Text style={{ fontSize: 22, textAlign: 'center', color: '#000' }}>
                        {this.state.random_number_1} {"+"} {this.state.random_number_2} {"= "}
                    </Text>
                    <TextInput
                        placeholder="Enter result here."
                        onChangeText={data => this.setState({ text_input: data })}
                        style={styles.textInputStyle}
                        keyboardType="number-pad"
                        underlineColorAndroid='transparent'
                    />
                    <TouchableOpacity onPress={this.generate_captcha}>
                        <Image 
                            source={{ uri: 'https://reactnativecode.com/wp-content/uploads/2019/08/reload_image.jpg' }}
                            style={{ width: 42, height: 42, resizeMode: 'contain', margin: 5 }} 
                        />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.button} onPress={this.run_captcha_function}>
                    <Text style={styles.text}>Check Captcha Result</Text>
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
    },
    captcha_view: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      margin: 10,
      borderColor: '#000',
      width: '80%',
      height: 100,
      borderWidth: 1,
      borderRadius: 7,
      padding: 5,
      backgroundColor: '#fff'
    },
    textInputStyle: {
      textAlign: 'center',
      height: 40,
      width: '50%',
      borderWidth: 1,
      borderColor: '#4CAF50',
      borderRadius: 7,
    },
    button: {
      width: '80%',
      paddingTop: 2,
      paddingBottom: 2,
      backgroundColor: '#BF360C',
      borderRadius: 3,
      marginTop: 20
    },
    text: {
      color: '#fff',
      fontSize: 18,
      textAlign: 'center',
      padding: 5
    }
});