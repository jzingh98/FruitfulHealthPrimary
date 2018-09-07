import React from 'react';
import { TouchableOpacity, StyleSheet, View, Button, Image, ImageBackground, TextInput} from 'react-native';
import { NavigationActions } from 'react-navigation';
import CustomText from '../common/CustomText';
import Disclaimer from './Disclaimer';


export default class Welcome extends React.Component {
    static navigationOptions = {
    title: 'Welcome',
    };

    render() {
    return (
          <View style={styles.container}>

            <View>
             <CustomText
                   style={{
                     fontFamily: 'Avenir-Light',
                     fontSize: 25,
                     color: 'white',
                     textAlign: 'center',
                     fontWeight: 'bold',
                     marginTop: 30,
                   }}
                >Welcome to {"\n"} Fruitful Health</CustomText>

            <Image
                   style={{
                     paddingLeft: '100%',
                     paddingTop: '70%',
                     width: '15%',
                     height: '45%',
                   }}
                source={require('../../images/fruitfulFriends.png')}/>

            <CustomText
                   style={{
                     padding: 10,
                     paddingTop: 15,
                     fontFamily: 'Avenir-Light',
                     fontSize: 20,
                     color: 'white',
                     textAlign: 'center',
                   }}
                >We're honored that you've chosen us {"\n"} to help you manage your health.</CustomText>

            <TouchableOpacity style={styles.understood}
                onPress={async () => {
                    this.props.navigation.navigate('IntroApple'); // Redirect to StartApples
                }}
              >
            <CustomText
                style={{
                fontSize: 22,
                color: 'white',
                textAlign: 'center',
                fontWeight: 'bold',
                fontFamily: 'Avenir-Light',
                paddingLeft:'3%',
                paddingRight: '3%'
                }}
                >Get Started</CustomText>
              </TouchableOpacity>
            </View>

          </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: '#E56A58',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  understood: {
    borderRadius: 10,
    height: '14%',
    width: '100%',
    backgroundColor: '#57BDC1',
    justifyContent: 'center',
    marginLeft: '35%',
    width: '100%'
  },
});
