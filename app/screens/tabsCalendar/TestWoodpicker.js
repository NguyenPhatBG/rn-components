import React, { Component } from 'react'
import { View } from 'react-native';
import { Picker, DatePicker } from 'react-native-woodpicker';

export default class TestWoodpicker extends Component {
    static navigationOptions = {
        tabBarLabel: 'Picker Data & Date',
    };

    state = {
        pickedData: null,
        pickedDate: null
    };

    handlePickerData = data => {
        this.setState({ pickedData: data });
    };

    handlePickerDate = data => {
        this.setState({ pickedDate: data });
    };

    handleDatePlaceholder = () => this.state.pickedDate ? this.state.pickedDate.toDateString() : "No value selected";

    render() {
        const data = [
            { label: "DataCat", value: 1 },
            { label: "DataDog", value: 2 },
            { label: "DataSnake", value: 3 },
            { label: "DataPlatypus", value: 4 },
            { label: "DataWhale", value: 5 }
        ];
        return (
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
                <Picker
                    onItemChange={this.handlePickerData}
                    items={data}
                    title="Data Picker"
                    value={this.state.pickedData}
                    placeholder="No value selected"
                    // androidPickerMode="dropdown"
                    // isNullable
                />
                <DatePicker
                    onDateChange={this.handlePickerDate}
                    value={this.state.pickedDate}
                    title="Date Picker"
                    placeholder={this.handleDatePlaceholder()}
                    iosPickerMode="date"
                    androidPickerMode="calendar"
                    locale="vi"
                    isNullable
                />
            </View>
        );
    }
}