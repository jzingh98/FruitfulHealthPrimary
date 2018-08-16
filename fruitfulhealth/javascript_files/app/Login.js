import React, {Component} from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

class Login extends React.Component {
  render() {
    return (
        <View style={styles.container}>
        <Image resizeMode="contain" style={styles.logo} source={require('/Users/itaquattrone/Desktop/Fruitful Health/FruitfulHealthPrimary/fruitfulhealth/images/login/login.png')} />
        <View style={styles.formContainer}>
            <LoginForm/>
        </View>
        </View>
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
  formContainer:{
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },
  logo: {
    maxHeight: '100%',
    maxWidth: '100%',
    justifyContent: 'center'
  },
});
