import React, { Component } from 'react';
import { TextInput, StyleSheet, Text, View, TouchableOpacity, Alert, ScrollView, FlatList } from 'react-native';
import NotifService from '../PushNotification/PushController';
import appConfig from '../../../app.json';

export default class TopTabNoti01 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      senderId: appConfig.senderID,
      pushData: []
    };

    this.notif = new NotifService(this.onRegister.bind(this), this.onNotif.bind(this));
  }

  onRegister(token) {
    Alert.alert("Registered !", JSON.stringify(token));
    this.setState({ registerToken: token.token, gcmRegistered: true });
  }

  onNotif(notif) {
    this._addDataToList(notif);
  }

  handlePerm(perms) {
    Alert.alert("Permissions", JSON.stringify(perms));
  }

  _renderItem = ({ item }) => (
    <View key={item.title}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.message}>{item.message}</Text>
    </View>
  );

  _addDataToList(data) {
    let array = this.state.pushData;
    array.push(data);
    this.setState({
      pushData: array
    });
    console.log(this.state);
  }

  render() {
    return (
      <ScrollView scrollEnabled contentContainerStyle={styles.container}>
        <Text style={styles.title}>Example app react-native-push-notification</Text>
        <View style={styles.spacer}></View>
        <TextInput style={styles.textField} value={this.state.registerToken} placeholder="Register token" />
        <View style={styles.spacer}></View>

        <TouchableOpacity style={styles.button} onPress={() => { this.notif.localNotif() }}><Text>Local Notification (now)</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => { this.notif.scheduleNotif() }}><Text>Schedule Notification in 30s</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => { this.notif.cancelNotif() }}><Text>Cancel last notification (if any)</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => { this.notif.cancelAll() }}><Text>Cancel all notifications</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => { this.notif.checkPermission(this.handlePerm.bind(this)) }}><Text>Check Permission</Text></TouchableOpacity>

        <View style={styles.spacer}></View>
        <TextInput style={styles.textField} value={this.state.senderId} onChangeText={(e) => {this.setState({ senderId: e })}} placeholder="GCM ID" />
        <TouchableOpacity style={styles.button} onPress={() => { this.notif.configure(this.onRegister.bind(this), this.onNotif.bind(this), this.state.senderId) }}><Text>Configure Sender ID</Text></TouchableOpacity>
        {this.state.gcmRegistered && <Text>GCM Configured !</Text>}

        <View style={styles.spacer}></View>
        <View style={styles.listHeader}>
          <Text>Push Notifications</Text>
        </View>
        <View style={styles.body}>
          {(this.state.pushData.length != 0) && <FlatList
            data={this.state.pushData}
            renderItem={(item) => this._renderItem(item)}
            keyExtractor={(item) => item.title}
            extraData = {this.state}
          />
          }
          {(this.state.pushData.length == 0) &&
            <View style={styles.noData}>
              <Text style={styles.noDataText}>You don't have any push notification yet. Send some push to show it in the list</Text>
            </View>}
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  button: {
    borderWidth: 1,
    borderColor: "#000000",
    margin: 5,
    padding: 5,
    width: "70%",
    backgroundColor: "#DDDDDD",
    borderRadius: 5,
  },
  textField: {
    borderWidth: 1,
    borderColor: "#AAAAAA",
    margin: 5,
    padding: 5,
    width: "70%"
  },
  spacer: {
    height: 10,
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
  },
  listHeader: {
    backgroundColor: '#eee',
    color: "#222",
    height: 44,
    padding: 12
  },
  noData: {
    paddingVertical: 50,
  },
  noDataText: {
    fontSize: 14,
    textAlign: 'center',
  },
  message: {
    fontSize: 14,
    paddingBottom: 15,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1
  },
  body: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});