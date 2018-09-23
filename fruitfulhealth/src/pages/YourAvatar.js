import React from 'react';
import { TouchableOpacity, StyleSheet, View, Button, Image, ImageBackground, TextInput} from 'react-native';
import { NavigationActions } from 'react-navigation';
import CustomText from '../common/CustomText';
import Welcome from './Welcome';


export default class YourAvatar extends React.Component {
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
                     shadowOffset: {width: 0, height: 0},
                     shadowOpacity: 1,
                     shadowRadius: 2,
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
                    this.props.navigation.navigate('Home');
                }}
              >
            <CustomText
                style={{
                fontSize: 22,
                color: 'white',
                paddingTop: '5%',
                textAlign: 'center',
                fontWeight: 'bold',
                fontFamily: 'Avenir',
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
    flex: 1,
    backgroundColor: '#222644',
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  next: {
      flex: 0.5,
      borderRadius: 11,
      backgroundColor: '#00cece',
      justifyContent: 'center',
      alignSelf: 'center', //keeps button in center
      marginTop: 25,
      width: 270,
      height: 51,
  },
});
