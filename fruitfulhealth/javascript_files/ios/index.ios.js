import React, { Component } from 'react';
import { AppRegistry,StyleSheet,Text ,View} from 'react-native';
import Login from './app/Login';
import Login from './src/components/Login/Login';

export default class FruitfulLogin extends Component {
  render() {
    return (
     <Login />
    );
  }
}

AppRegistry.registerComponent('FruitfulLogin', () => FruitfulLogin);
