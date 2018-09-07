import React from 'react';
import { StackNavigator } from 'react-navigation';
import Login from './Login';
import Disclaimer from './Disclaimer';
import Welcome from './Welcome';

const RootStack = StackNavigator({
  Login: {
      screen: Login,
  },
  Disclaimer: {
      screen: Disclaimer,
  },
  Welcome: {
      screen: Welcome,
  }
}, {
  initialRouteName: 'Welcome',
  navigationOptions: {
    headerStyle: {
      backgroundColor: 'white',
    },
  }
});

export default RootStack;
console.disableYellowBox = true;
