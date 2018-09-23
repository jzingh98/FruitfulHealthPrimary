import React from 'react';
import { TouchableOpacity, StyleSheet, View, Button, Image, ImageBackground, TextInput} from 'react-native';
import { NavigationActions } from 'react-navigation';
import CustomText from '../common/CustomText';
import Disclaimer from './Disclaimer';


export default class Welcome extends React.Component {
    static navigationOptions = {
        header: null,
      };
    render() {
    return (
          <View style={styles.container}>
            <View>
             <CustomText
                   style={{
                     flex: 0.3,
                     fontFamily: 'Avenir-Light',
                     fontSize: 25,
                     color: 'white',
                     textAlign: 'center',
                     fontWeight: 'bold',
                     marginTop: 150,
                   }}
                >Welcome to {"\n"} Fruitful Health</CustomText>

            <Image
                   style={{
                     flex: 0.5,
                     marginLeft: '30%',
                     marginRight: '30%',
                     shadowColor: 'white',
                     shadowOffset: {width: 0, height: 0},
                     shadowOpacity: 1,
                     shadowRadius: 1,
                     resizeMode: 'contain',
                   }}
                source={require('../../images/fruitfulFriends.png')}/>

            <CustomText
                   style={{
                     flex: 0.3,
                     paddingTop: 15,
                     fontFamily: 'Avenir-Light',
                     fontSize: 20,
                     color: 'white',
                     textAlign: 'center',
                   }}
                >We're honored that you've chosen us {"\n"} to help you manage your health.</CustomText>

            <TouchableOpacity style={styles.understood}
                onPress={async () => {
                    this.props.navigation.navigate('Questions');
                }}
              >
            <CustomText
                style={{
                fontSize: 22,
                color: 'white',
                textAlign: 'center',
                fontWeight: 'bold',
                fontFamily: 'Avenir',
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
    flex: 1,
    backgroundColor: '#222644',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },
  understood: {
    flex: 0.2,
    borderRadius: 11,
    backgroundColor: '#57BDC1',
    marginBottom: 100,
    width: 270,
    height: 51,
    alignSelf: 'center', //puts button in center of area
    justifyContent: 'center'

  },
});
