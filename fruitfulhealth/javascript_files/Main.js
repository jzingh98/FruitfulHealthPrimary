import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RootStack from './Root'; //This holds all our app files together
import Exponent from 'expo';
import { Font } from 'expo';

export default class Main extends React.Component {

  componentDidMount() { //These are some fonts we might need and can change in the future
    Font.loadAsync({
      'Helvetica-Bold': require('./HELR65W.ttf'),
    });

    Font.loadAsync({
      'Baskerville-Bold': require('./HELR65W.ttf'),
    });

    Font.loadAsync({
      'Avenir-Light': require('./HELR65W.ttf'),
    });

  }

  render() {
    return (
      <RootStack/>
    );
  }
}
