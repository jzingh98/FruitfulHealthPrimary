import React from 'react';
import Login from './app/Login'; //Any new files we need to add, add like this


// Comment from James: StackNavigator seems to be pretty slow when transitioning between screens.
// May need to find an alternative routing library.
const RootStack = StackNavigator({
  Login: {
      screen: Login, // Each of these is a separate file that would be called above.
  },
}, {
  initialRouteName: 'Login',
  navigationOptions: {
    headerStyle: {
      backgroundColor: 'white',
    },
  }
});*/

export default RootStack;
console.disableYellowBox = true;
