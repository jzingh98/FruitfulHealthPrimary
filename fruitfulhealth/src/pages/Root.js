import React from 'react';
import { createStackNavigator } from 'react-navigation';
import Login from './Login';
import Disclaimer from './Disclaimer';
import Welcome from './Welcome';
import GetStarted from './GetStarted';
import Questions from './Questions';
import HealthConcerns from './HealthConcerns';

const RootStack = createStackNavigator({
  Login: {
      screen: Login,
  },
  Disclaimer: {
      screen: Disclaimer,
  },
  Welcome: {
      screen: Welcome,
  },
  GetStarted: {
      screen: GetStarted,
  },
  Questions: {
      screen: Questions,
  },
  HealthConcerns: {
      screen: HealthConcerns,
  }
}, {
  initialRouteName: 'Login',
  navigationOptions: {
    headerStyle: {
      backgroundColor: 'white',
    },
  }
});

export default RootStack;
console.disableYellowBox = true;
