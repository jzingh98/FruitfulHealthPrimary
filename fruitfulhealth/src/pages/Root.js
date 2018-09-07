import React from 'react';
import { StackNavigator } from 'react-navigation';
import Login from './Login';
import Disclaimer from './Disclaimer';

const RootStack = StackNavigator({
  Login: {
      screen: Login,
  },
  Disclaimer: {
      screen: Disclaimer,
  },
}, {
  initialRouteName: 'Disclaimer',
  navigationOptions: {
    headerStyle: {
      backgroundColor: 'white',
    },
  }
});

export default RootStack;
console.disableYellowBox = true;
