import React from 'react';
import { TouchableOpacity, StyleSheet, View, Button, Image, ImageBackground, TextInput} from 'react-native';
import { NavigationActions } from 'react-navigation';
import CustomText from '../common/CustomText';
import Welcome from './Welcome';


export default class GetStarted extends React.Component {
    static navigationOptions = {
        header: null,
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
                >Your Health Avatar {"\n"}</CustomText>

            <Image
                   style={{
                     paddingLeft: '70%',
                     paddingRight: '20%',
                     paddingTop: '30%',
                     width: '32%',
                     height: '42%',
                     resizeMode: 'contain',
                     shadowColor: 'white',
                     shadowOffset: {width: 1, height: 2},
                     shadowOpacity: 1,
                     shadowRadius: 1,
                   }}
                source={require('../../images/yourAvatar.png')}/>

            <CustomText
                   style={{
                     padding: 10,
                     paddingTop: 15,
                     fontFamily: 'Avenir-Light',
                     fontSize: 20,
                     fontWeight: '400',
                     color: 'white',
                     textAlign: 'center',
                   }}
                >Your fruitful avatar is here to help.{"\n"}
It is a visual representation of you.{"\n"}
Its expressions let you know how
you’ve been keeping on track. Earn
COINS to feed it and stay healthy!</CustomText>

            <TouchableOpacity style={styles.next}
                onPress={async () => {
                    this.props.navigation.navigate('Login');
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
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  next: {
    borderRadius: 11,
    paddingLeft: '10%',
    paddingRight: '10%',
    height: '10%',
    width: '100%',
    backgroundColor: '#57BDC1',
    justifyContent: 'center',
    marginTop: '10%',
    marginLeft: '28%',
  },
});
