'use strict';
import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, AppRegistry } from 'react-native';
import Login from './src/pages/Login';


export default class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: "",
        email: "",
        password: ""
      }
  }
  render() {
    return (
        <Login/>
    );
  }
  submit() {
//Do Something
}
}

const styles = StyleSheet.create({
  input: {
    width: 250,
    margin: 5
},
  logintitle: {
      padding: 100,
      color: '#00C8B2',
      fontFamily: 'Baskerville'
}
});

AppRegistry.registerComponent('App', () => App);
