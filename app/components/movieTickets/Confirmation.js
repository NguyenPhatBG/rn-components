import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image
} from 'react-native';
import { days, times } from '../../shared/dummy/MovieTickets';

export default class Confirmation extends Component {
  state = {
    chosenDay: '',
    chosenTime: ''
  };

  componentDidMount() {
    const { navigation } = this.props;
    const { getParam } = navigation;
    const chosenTime = getParam('chosenTime');
    const chosenDay = getParam('chosenDay');
    let day = days[chosenDay];  
    let time = times[chosenTime];
    this.setState({
      chosenDay: day,
      chosenTime: time
    });
  }

  render() {
    // movie, chosenDay, chosenTime
    const movie = this.props.navigation.getParam('movie');
    const { title, genre, poster } = movie;
    const { chosenDay, chosenTime } = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Movie Detail Information</Text>
        <Text style={styles.header}>{chosenDay}</Text>
        <Text style={styles.header}>{chosenTime}</Text>
        <Text style={styles.header}>{title}</Text>
        <Text style={styles.header}>{genre}</Text>
        <Image source={{ uri: poster }} resizeMode="contain" style={styles.image} />
        <TouchableOpacity
          style={styles.buttonContainer}
          // Go back when pressed
          onPress={() => this.props.navigation.pop() }
        >
          <Text style={styles.button}>Done</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    color: '#333',
    fontSize: 20,
  },
  code: {
    color: '#333',
    fontSize: 36,
  },
  buttonContainer: {
    alignItems: 'center',
    backgroundColor: '#673AB7',
    borderRadius: 100,
    margin: 20,
    paddingVertical: 10,
    paddingHorizontal: 30,
  },
  button: {
    color: '#FFFFFF',
    fontSize: 18,
  },
  image: {
    width: 120, 
    height: 250
  }
});