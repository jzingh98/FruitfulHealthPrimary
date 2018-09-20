import React from 'react';
import { createStackNavigator } from 'react-navigation';
import Login from './Login';
import Disclaimer from './Disclaimer';
import Welcome from './Welcome';
import GetStarted from './GetStarted';
import Questions from './Questions';
import AddConcerns from './AddConcerns';
import HealthConcerns from './HealthConcerns';
import FindDoctor from './FindDoctor';
import Home from './Home';

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
  AddConcerns: {
      screen: AddConcerns,
  },
  HealthConcerns: {
      screen: HealthConcerns,
  },
  FindDoctor: {
      screen: FindDoctor,
  },
  Home: {
      screen: Home,
  },
}, {
  initialRouteName: 'AddConcerns',
  navigationOptions: {
    headerStyle: {
      backgroundColor: 'white',
    },
  }
});

export default RootStack;
console.disableYellowBox = true;
