import React, { Component } from 'react';
import { View , Dimensions, Text } from 'react-native';
import EventCalendar from 'react-native-events-calendar';

let { width } = Dimensions.get('window');

export default class TestSimplerEventCalendar extends Component {
    static navigationOptions = {
        tabBarLabel: 'Event Calendar',
    };

    constructor() {
        super();
        this.state = {
            events: [
                {
                  start: '2019-01-01 00:00:00',
                  end: '2019-01-01 02:00:00',
                  title: 'New Year Party',
                  summary: 'xyz Location',
                },{
                  start: '2019-01-01 01:00:00',
                  end: '2019-01-01 02:00:00',
                  title: 'New Year Wishes',
                  summary: 'Call to every one',
                },
                {
                  start: '2019-01-02 00:30:00',
                  end: '2019-01-02 01:30:00',
                  title: 'Parag Birthday Party',
                  summary: 'Call him',
                },
                {
                  start: '2019-01-03 01:30:00',
                  end: '2019-01-03 02:20:00',
                  title: 'My Birthday Party',
                  summary: 'Lets Enjoy',
                },
                {
                  start: '2019-02-04 04:10:00',
                  end: '2019-02-04 04:40:00',
                  title: 'Engg Expo 2019',
                  summary: 'Expoo Vanue not confirm',
                },
            ],
        };
    }

    eventClicked(event) {
        //On Click oC a event showing alert from here
        alert(JSON.stringify(event));
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <EventCalendar
                  eventTapped={this.eventClicked.bind(this)}
                  //Function on event press
                  events={this.state.events}
                  renderEvent={(event) => (
                    <View style={{ flex: 1, backgroundColor: 'tomato', padding: 0, margin: 0 }}>
                      <Text style={{ fontStyle: 'italic', fontSize: 15, fontWeight: 'bold' }}>{event.title}</Text>
                    </View>
                  )}
                  //passing the Array of event
                  width={width}
                  //Container width
                  size={60}
                  //number of date will render before and after initDate 
                  //(default is 30 will render 30 day before initDate and 29 day after initDate)
                  initDate={'2019-01-01'}
                  //show initial date (default is today)
                  scrollToFirst
                  //scroll to first event of the day (default true)
              />
          </View>
        );
    }
}