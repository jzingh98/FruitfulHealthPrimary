import React from 'react';
import { TouchableOpacity, StyleSheet, View, Button, Image, ImageBackground, TextInput} from 'react-native';
import { NavigationActions } from 'react-navigation';
import CustomText from '../common/CustomText';
import RankConcerns from './RankConcerns';

export default class Earned10Coins extends React.Component {
    static navigationOptions = {
        header: null,
      };
    render() {
    return (
          <View style={styles.container}>
            <View>
            <Image
                   style={{
                     flex: 0.7,
                     resizeMode: 'contain',
                     marginTop: 100
                   }}
                source={require('../../images/earned10.png')}/>
             <CustomText
                   style={{
                     fontFamily: 'Avenir',
                     fontSize: 22,
                     color: 'white',
                     textAlign: 'center',
                     fontWeight: 'bold',
                     marginTop: 20,
                   }}
                >Great job!</CustomText>
            <CustomText
                   style={{
                     padding: 10,
                     fontFamily: 'Avenir',
                     fontSize: 22,
                     fontWeight: '400',
                     color: 'white',
                     textAlign: 'center',
                   }}
                >You just earned 10 coins!</CustomText>

            <TouchableOpacity style={styles.next}
                onPress={async () => {
                    this.props.navigation.navigate('YourAvatar');
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
      flex: 0.2,
      borderRadius: 11,
      backgroundColor: '#00cece',
      justifyContent: 'center',
      alignSelf: 'center', //keeps button in center
      marginTop: 25,
      marginBottom: 90,
      width: 270,
      height: 51,
  },
});
