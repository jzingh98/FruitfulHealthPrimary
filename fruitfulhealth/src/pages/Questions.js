import React from 'react';
import { TouchableOpacity, StyleSheet, View, Button, Image, ImageBackground, TextInput} from 'react-native';
import { NavigationActions } from 'react-navigation';
import CustomText from '../common/CustomText';
import GetStarted from './GetStarted';


export default class Questions extends React.Component {
    static navigationOptions = {
        header: null,
      };
    render() {
    return (
          <View style={styles.container}>
            <View>
            <Image style={styles.logo} source={require('../../images/logo.png')} />
             <CustomText
                   style={{
                     fontFamily: 'Avenir-Light',
                     fontSize: 17,
                     color: 'white',
                     textAlign: 'center',
                     fontWeight: '200',
                     marginTop: 30,
                   }}
                >In order for us to do our best, {"\n"} we{"'"}re going to need you to {"\n"} answer a few questions.</CustomText>
            <CustomText
                   style={{
                     padding: 10,
                     paddingTop: 15,
                     fontFamily: 'Avenir-Light',
                     fontSize: 17,
                     color: 'white',
                     textAlign: 'center',
                     fontWeight: '150',
                   }}
                >For every answer,you earn 10 {"\n"} COINS to help get you started {"\n"} on your Fruitful Health {"\n"} journey!</CustomText>
            <Image style={styles.coin} source={require('../../images/coin.png')} />
            <TouchableOpacity style={styles.understood}
                onPress={async () => {
                    this.props.navigation.navigate('WhatConcerns');
                }}
              >
              <CustomText
                  style={{
                  fontSize: 22,
                  color: 'white',
                  paddingTop: '5%',
                  textAlign: 'center',
                  fontWeight: 'bold',
                  fontFamily: 'Avenir-Light',

                  }}
                  >Next</CustomText>
              </TouchableOpacity>
            </View>

          </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#222644',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
          width: '30%',
          height: '30%',
          paddingLeft: '100%',
          resizeMode: 'contain'
  },
  coin: {
          width: '10%',
          height: '10%',
          paddingLeft: '100%',
          resizeMode: 'contain'
  },
  understood: {
    backgroundColor: '#57BDC1',
    borderRadius: 11,
    height: '10%',
    width: '100%',
    justifyContent: 'center',
    marginLeft: '33%',
    marginTop: '10%',
    paddingLeft: '10%',
    paddingRight: '10%',
  },
});
