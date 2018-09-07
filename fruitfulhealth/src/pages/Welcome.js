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

            <View style={styles.messageBox}>
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
                     padding: 10,
                     paddingTop: 20,
                     fontFamily: 'Helvetica',
                     fontSize: 20,
                     color: 'grey',
                     textAlign: 'center',
                   }}
                source={require('../../images/apple-touch-icon.png')}/>

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

            <TextInput style={styles.ageBox} maxLength={3}  placeHolder="Age"></TextInput>

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
  },
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  characterBox: {
      borderWidth: 1,
      borderColor: 'black',
      height: '40%',
  },
  understood: {
    borderRadius: 10,
    height: '12%',
    width: '60%',
    backgroundColor: '#57BDC1',
    justifyContent: 'center',
    textAlign: 'center',
    marginLeft: '20%',
  },
  button: {
    borderRadius: 0,
    marginRight: 20,
    height: 50,
    backgroundColor: 'white',
    justifyContent: 'center',
    width: 70,
    marginTop: 10,
    marginLeft: 250,
  }
});
