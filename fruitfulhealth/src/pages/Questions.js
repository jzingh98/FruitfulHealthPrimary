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
            <Image style={styles.logo} source={require('../../images/logo.png')} />
            <View style={styles.message}>
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
                     marginTop: 15,
                     fontFamily: 'Avenir-Light',
                     fontSize: 17,
                     color: 'white',
                     textAlign: 'center',
                     fontWeight: '200',
                   }}
                >For every answer, you will earn 10 {"\n"} coins to help get you started {"\n"} on your Fruitful Health journey.</CustomText>
                <CustomText
                       style={{
                         marginTop: 15,
                         fontFamily: 'Avenir-Light',
                         fontSize: 17,
                         color: 'white',
                         textAlign: 'center',
                         fontWeight: '200',
                       }}
                    >Coins are earned tokens you collect {"\n"} to enter the weekly lottery contest {"\n"} held every Sunday for our
mystery prize!</CustomText>
            </View>
            <Image style={styles.coin} source={require('../../images/coin.png')} />
            <TouchableOpacity style={styles.button}
                onPress={async () => {
                    this.props.navigation.navigate('AddConcerns');
                }}
              >
              <CustomText
                  style={{
                  fontSize: 22,
                  color: 'white',
                  textAlign: 'center',
                  fontWeight: '400',
                  fontFamily: 'Avenir-Light',
                  }}
                  >Continue</CustomText>
              </TouchableOpacity>
          </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor: '#222644',
  },
  logo: {
      flex: 1,
      resizeMode: 'contain',
      marginTop: '15%'
  },
  message: {
      flex: 1,
  },
  coin: {
      flex: 0.4,
      resizeMode: 'contain',
      marginTop: '25%',
      marginBottom: '15%'

  },
  button: {
      backgroundColor: '#57BDC1',
      height: '7%',
      padding: 10,
      borderRadius: 11,
      marginBottom: 100
  },
});
