import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RootStack from './pages/Root.js';
import Exponent from 'expo';
import { Font } from 'expo';

export default class Main extends React.Component {
  render() {
    return (
      <RootStack />
    );
  }
}
