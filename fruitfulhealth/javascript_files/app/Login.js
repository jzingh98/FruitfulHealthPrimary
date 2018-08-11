import React from 'react';
import { TouchableOpacity, StyleSheet, View, Button, Image, ImageBackground, Platform, AsyncStorage } from 'react-native';
import { NavigationActions } from 'react-navigation';

export default class Login extends React.Component {
  static navigationOptions = {header: null};
  constructor(props) {
    super(props);
    this.state = {
      validating: true,
      token: null,
    }
  }

  render() {
    return (
      !this.state.validating ? (
        <View style={styles.container}>
        <Image source={require('./images/login/login.png')} style={styles.logo} resizeMode='contain'/>
        </View>

      ) : (
      )
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    marginTop: 60,
    alignItems: 'center',
    backgroundColor: 'white'
  },
  topContainer: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
    position: 'absolute'
  },
  logo: {
    maxHeight: '100%',
    maxWidth: '100%',
    justifyContent: 'center'
  },
  loginBox: {
    flex: 1,
    width: '90%',
  },
  newLogFB: {
    flex: 1,
    width: '100%',
    marginTop: '120%',
    position: 'absolute',
    alignItems: 'center'
  },
  loginNewContainer: {
    flex: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  newUser: {
    backgroundColor: 'transparent',
    width: '35%'
  },
  loginButton: {
    padding: 20,
    borderRadius: 25,
    height: 10,
    backgroundColor: '#4FC4D1',
    justifyContent: 'center',
    width: '30%',
  },
  facebookButton: {
    padding: 20,
    borderRadius: 25,
    width: '70%',
    height: '10%',
    backgroundColor: '#4DA1FF',
    justifyContent: 'center',
  },
});
