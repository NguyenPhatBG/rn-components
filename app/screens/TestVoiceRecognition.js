import React, { Component } from 'react'
import { 
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableHighlight,
  ScrollView,
} from 'react-native';
import Voice from 'react-native-voice';

export default class TestVoiceRecognition extends Component {
    state = {
        pitch: '',
        error: '',
        end: '',
        started: '',
        results: [],
        partialResults: [],
    };

    constructor(props) {
        super(props);
        // Setting callbacks for the process status
        Voice.onSpeechStart = this.onSpeechStart;
        Voice.onSpeechEnd = this.onSpeechEnd;
        Voice.onSpeechError = this.onSpeechError;
        Voice.onSpeechResults = this.onSpeechResults;
        Voice.onSpeechPartialResults = this.onSpeechPartialResults;
        Voice.onSpeechVolumeChanged = this.onSpeechVolumeChanged;
    };

    componentWillUnmount() {
        // destroy the process after switching the screen 
        Voice.destroy().then(Voice.removeAllListeners);
      }
     
      onSpeechStart = e => {
        // Invoked when .start() is called without error
        this.setState({
          started: '√',
        });
      };
     
      onSpeechEnd = e => {
        // Invoked when SpeechRecognizer stops recognition
        this.setState({
          end: '√',
        });
      };
     
      onSpeechError = e => {
        // Invoked when an error occurs. 
        this.setState({
          error: JSON.stringify(e.error),
        });
      };
     
      onSpeechResults = e => {
        // Invoked when SpeechRecognizer is finished recognizing
        this.setState({
          results: e.value,
        });
      };
     
      onSpeechPartialResults = e => {
        // Invoked when any results are computed
        this.setState({
          partialResults: e.value,
        });
      };
     
      onSpeechVolumeChanged = e => {
        // Invoked when pitch that is recognized changed
        this.setState({
          pitch: e.value,
        });
    };
     
    _startRecognizing = async () => {
        // Starts listening for speech for a specific locale
        this.setState({
          pitch: '',
          error: '',
          started: '',
          results: [],
          partialResults: [],
          end: '',
        });
     
        try {
          await Voice.start('en-US');
        } catch (e) {
          console.error(e);
        }
    };
     
    _stopRecognizing = async () => {
        // Stops listening for speech
        try {
          await Voice.stop();
        } catch (e) {
          console.error(e);
        }
    };
     
    _cancelRecognizing = async () => {
        // Cancels the speech recognition
        try {
          await Voice.cancel();
        } catch (e) {
          console.error(e);
        }
    };
     
    _destroyRecognizer = async () => {
        // Destroys the current SpeechRecognizer instance
        try {
          await Voice.destroy();
        } catch (e) {
          console.error(e);
        }
        this.setState({
          pitch: '',
          error: '',
          started: '',
          results: [],
          partialResults: [],
          end: '',
        });
    };

    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={styles.container}>
                <Text style={styles.welcome}>
                  Speech to Text conversion / Voice Recognition
                </Text>
                <View style={styles.titleWrapper}>
                  <Text style={styles.startedText}>{`Started: ${this.state.started}`}</Text>
                  <Text style={styles.endText}>{`End: ${this.state.end}`}</Text>
                </View>
                <View style={styles.pitchWrapper}>
                  <Text style={styles.pitchText}>{`Pitch \n ${this.state.pitch}`}</Text>
                  <Text style={styles.errorText}>{`Error \n ${this.state.error}`}</Text>
                </View>
                <TouchableHighlight
                  onPress={this._startRecognizing}
                  style={{ marginVertical: 20 }}
                >
                  <Image
                    style={styles.button}
                    source={{ uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/microphone.png' }}
                  />
                </TouchableHighlight>
                <Text style={styles.partialWrapper}>Partial Results</Text>
                <ScrollView style={{ marginBottom: 30 }}>
                    {this.state.partialResults.map((result, index) => <Text key={`partial-result-${index}`} style={styles.listPartialText}>{result}</Text>)}
                </ScrollView>
                <Text style={[styles.stat, { fontSize: 30 }]}>Results</Text>
                <ScrollView style={{ marginBottom: 42 }}>
                    {this.state.results.map((result, index) => <Text key={`result-${index}`} style={styles.stat}>{result}</Text>)}
                </ScrollView>
                  <View style={styles.bottomWrapper}>
                    <TouchableHighlight
                      onPress={this._stopRecognizing}
                      style={styles.bottomButton}
                    >
                      <Text style={styles.action}>Stop</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                      onPress={this._cancelRecognizing}
                      style={styles.bottomButton}
                    >
                      <Text style={styles.action}>Cancel</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                      onPress={this._destroyRecognizer}
                      style={styles.bottomButton}
                    >
                      <Text style={styles.action}>Destroy</Text>
                    </TouchableHighlight>
                  </View>
                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    button: {
      width: 50,
      height: 50,
    },
    container: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    action: {
      width: '100%',
      textAlign: 'center',
      color: 'white',
      paddingVertical: 8,
      marginVertical: 5,
      fontWeight: 'bold',
    },
    stat: {
      textAlign: 'center',
      color: '#B0171F',
      marginBottom: 1,
      marginTop: 10,
    },
    titleWrapper: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 10
    },
    startedText: {
      flex: 1,
      textAlign: 'center',
      color: '#B0171F',
    },
    endText: {
      flex: 1,
      textAlign: 'center',
      color: '#B0171F',
    },
    pitchWrapper: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 10,
    },
    pitchText: {
      flex: 1,
      textAlign: 'center',
      color: '#B0171F',
    },
    errorText: {
      flex: 1,
      textAlign: 'center',
      color: '#B0171F',
    },
    partialWrapper: {
      textAlign: 'center',
      color: '#B0171F',
      marginBottom: 1,
      fontWeight: '700'
    },
    listPartialText: {
      textAlign: 'center',
      color: '#B0171F',
      fontWeight: '700',
      paddingVertical: 10
    },
    bottomWrapper: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      position: 'absolute',
      bottom: 0,
    },
    bottomButton: {
      flex: 1, 
      backgroundColor: 'red'
    }
});
// Speech to Text Conversion in React Native – Voice Recognition
// https://aboutreact.com/speech-to-text-conversion-in-react-native-voice-recognition/