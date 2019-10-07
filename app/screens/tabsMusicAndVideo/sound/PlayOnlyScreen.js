import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, ScrollView, SafeAreaView } from 'react-native';
import Sound from 'react-native-sound';

const audioList = [
  {
    title: 'Play mp3 sound from Local',
    isRequire: true,
    url: require('./mv_iu.mp3'),
  },
  {
    title: 'Play mp3 sound from remote URL',
    url:
      'https://raw.githubusercontent.com/zmxv/react-native-sound-demo/master/advertising.mp3',
  },
  {
    title: 'Play aac sound from Local',
    isRequire: true,
    url: require('./mv_iu.mp3'),
  },
  {
    title: 'Play aac sound from remote URL',
    url:
      'https://raw.githubusercontent.com/zmxv/react-native-sound-demo/master/pew2.aac',
  },
  {
    title: 'Play wav sound from Local',
    isRequire: true,
    url: require('./mv_iu.mp3'),
  },
  {
    title: 'Play wav sound from remote URL',
    url:
      'https://raw.githubusercontent.com/zmxv/react-native-sound-demo/master/frog.wav',
  },
];
 
var sound1, sound2, sound3, sound4, sound5, sound6;
 
function playSound(item, index) {
  if (index == 0) {
    sound1 = new Sound(item.url, (error, sound) => {
      if (error) {
        alert('error' + error.message);
        return;
      }
      sound1.play(() => {
        sound1.release();
      });
    });
  } else if (index == 1) {
    sound2 = new Sound(item.url, '', (error, sound) => {
      if (error) {
        alert('error' + error.message);
        return;
      }
      sound2.play(() => {
        sound2.release();
      });
    });
  } else if (index == 2) {
    sound3 = new Sound(item.url, (error, sound) => {
      if (error) {
        alert('error' + error.message);
        return;
      }
      sound3.play(() => {
        sound3.release();
      });
    });
  } else if (index == 3) {
    sound4 = new Sound(item.url, '', (error, sound) => {
      if (error) {
        alert('error' + error.message);
        return;
      }
      sound4.play(() => {
        sound4.release();
      });
    });
  } else if (index == 4) {
    sound5 = new Sound(item.url, (error, sound) => {
      if (error) {
        alert('error' + error.message);
        return;
      }
      sound5.play(() => {
        sound5.release();
      });
    });
  } else if (index == 5) {
    sound6 = new Sound(item.url, '', (error, sound) => {
      if (error) {
        alert('error' + error.message);
        return;
      }
      sound6.play(() => {
        sound6.release();
      });
    });
  }
}
 
function stopSound(item, index) {
  if (index == 0 && sound1) {
    sound1.stop(() => {
      console.log('Stop');
    });
  } else if (index == 1 && sound2) {
    sound2.stop(() => {
      console.log('Stop');
    });
  } else if (index == 2 && sound3) {
    sound3.stop(() => {
      console.log('Stop');
    });
  } else if (index == 3 && sound4) {
    sound4.stop(() => {
      console.log('Stop');
    });
  } else if (index == 4 && sound5) {
    sound5.stop(() => {
      console.log('Stop');
    });
  } else if (index == 5 && sound6) {
    sound6.stop(() => {
      console.log('Stop');
    });
  }
}
 
function componentWillUnmount() {
  sound1.release();
  sound2.release();
  sound3.release();
  sound4.release();
  sound5.release();
  sound6.release();
}
 
class PlayOnlyScreen extends Component {
  constructor(props) {
    super(props);
    Sound.setCategory('Playback', true); // true = mixWithOthers
    this.state = {
      tests: {},
    };
  }
 
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <ScrollView style={styles.container}>
            {audioList.map((item, index) => {
              return (
                <View style={styles.feature} key={item.title}>
                  <Text style={{ flex: 1, fontSize: 14 }}>{item.title}</Text>
                  <TouchableOpacity
                    onPress={() => {
                      return playSound(item, index);
                    }}>
                    <Text style={styles.buttonPlay}>Play</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      return stopSound(item, index);
                    }}>
                    <Text style={styles.buttonStop}>Stop</Text>
                  </TouchableOpacity>
                </View>
              );
            })}
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    headerTitle: {
      fontSize: 16,
      color: 'white',
      fontWeight: 'bold',
      paddingVertical: 20,
      textAlign: 'center',
      backgroundColor: 'rgba(00,00,80,1)',
    },
    buttonPlay: {
      fontSize: 16,
      color: 'white',
      backgroundColor: 'rgba(00,80,00,1)',
      borderWidth: 1,
      borderColor: 'rgba(80,80,80,0.5)',
      overflow: 'hidden',
      paddingHorizontal: 15,
      paddingVertical: 7,
    },
    buttonStop: {
      fontSize: 16,
      color: 'white',
      backgroundColor: 'rgba(80,00,00,1)',
      borderWidth: 1,
      borderColor: 'rgba(80,80,80,0.5)',
      overflow: 'hidden',
      paddingHorizontal: 15,
      paddingVertical: 7,
    },
    feature: {
      flexDirection: 'row',
      padding: 10,
      alignSelf: 'stretch',
      alignItems: 'center',
      borderTopWidth: 1,
      borderTopColor: 'rgb(180,180,180)',
      borderBottomWidth: 1,
      borderBottomColor: 'rgb(230,230,230)',
    },
});
 
export default PlayOnlyScreen;
 
