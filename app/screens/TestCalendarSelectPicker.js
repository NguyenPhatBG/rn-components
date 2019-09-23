import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';

export default class TestCalendarSelectPicker extends Component {
    static navigationOptions = {
        tabBarLabel: 'Calendar Select',
    };
    
    constructor(props) {
        super(props);
        this.state = {
            selectedStartDate: null,
            selectedEndDate: null,
        };
        this.onDateChange = this.onDateChange.bind(this);
    }

    onDateChange(date, type) {
        // function to handle the date change 
        if (type === 'END_DATE') {
          this.setState({
            selectedEndDate: date,
          });
        } else {
          this.setState({
            selectedStartDate: date,
            selectedEndDate: null,
          });
        }
    }

    render() {
        const { selectedStartDate, selectedEndDate } = this.state;
        const minDate = new Date(2018, 1, 1); // Min date
        const maxDate = new Date(2050, 6, 3); // Max date
        const startDate = selectedStartDate ? selectedStartDate.toString() : ''; //Start date
        const endDate = selectedEndDate ? selectedEndDate.toString() : ''; //End date
        return (
            <View style={styles.container}>
                <CalendarPicker
                    startFromMonday={true}
                    allowRangeSelection={true}
                    minDate={minDate}
                    maxDate={maxDate}
                    weekdays={['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun']}
                    months={[
                        'January',
                        'Febraury',
                        'March',
                        'April',
                        'May',
                        'June',
                        'July',
                        'August',
                        'September',
                        'October',
                        'November',
                        'December',
                    ]}
                    previousTitle="Previous"
                    nextTitle="Next"
                    todayBackgroundColor="#e6ffe6"
                    selectedDayColor="#66ff33"
                    selectedDayTextColor="#000000"
                    scaleFactor={375}
                    textStyle={{ fontFamily: 'Cochin', color: '#000000' }}
                    onDateChange={this.onDateChange}
                />
                <View style={{padding:16}}>
                    <Text style={{padding:10}}>SELECTED START DATE :</Text>
                    <Text style={{padding:10}}>{startDate}</Text>
                    <Text style={{padding:10}}>SELECTED END DATE : </Text>
                    <Text style={{padding:10}}>{endDate}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    },
});