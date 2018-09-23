import React from 'react';
import { createStackNavigator } from 'react-navigation';
import Login from './Login';
import Disclaimer from './Disclaimer';
import Welcome from './Welcome';
import YourAvatar from './YourAvatar';
import Questions from './Questions';
import AddConcerns from './AddConcerns';
import RankConcerns from './RankConcerns';
import FindDoctor from './FindDoctor';
import Home from './Home';
import Earned10Coins from './Earned10Coins';

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
  YourAvatar: {
      screen: YourAvatar,
  },
  Questions: {
      screen: Questions,
  },
  AddConcerns: {
      screen: AddConcerns,
  },
  RankConcerns: {
      screen: RankConcerns,
  },
  FindDoctor: {
      screen: FindDoctor,
  },
  Home: {
      screen: Home,
  },
  Earned10Coins: {
      screen: Earned10Coins,
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
