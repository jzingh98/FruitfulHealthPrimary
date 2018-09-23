import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import { TouchableOpacity, StyleSheet, Text, View, TextInput, ScrollView, Image, ImageBackground } from 'react-native';
import Container from '../components/Container';
import Button from '../components/Button';
import Label from '../components/Label';
import CustomText from '../common/CustomText';

export default class Disclaimer extends React.Component {
    static navigationOptions = {
        header: null,
      };
render() {
   return (
       <View style={styles.container}>
       <CustomText
             style={{
               fontFamily: 'Avenir-Light',
               fontSize: 25,
               color: 'white',
               textAlign: 'center',
               fontWeight: 'bold',
               marginTop: '50%'
             }}
          >DISCLAIMER</CustomText>

      <CustomText
             style={{
               paddingLeft: '10%',
               paddingRight: '10%',
               paddingTop: '10%',
               fontFamily: 'Avenir',
               fontSize: 22,
               color: 'white',
               textAlign: 'justify',
             }}
          >The Content is not intended to be a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health professionals with any questions you may have.</CustomText>

      <TouchableOpacity style={styles.understood}
          onPress={async () => {
              this.props.navigation.navigate('Welcome');
          }}
        >
      <CustomText
          style={{
          fontSize: 25,
          color: 'white',
          textAlign: 'center',
          fontWeight: 'bold',
          fontFamily: 'Avenir-Light'
          }}
          >GOT IT</CustomText>
        </TouchableOpacity>
    </View>);
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: '#222644'
  },
  understood: {
    borderRadius: 11,
    height: '10%',
    width: '60%',
    backgroundColor: '#00cece',
    justifyContent: 'center',
    left: '20%',
    top: '5%',
  },
});
