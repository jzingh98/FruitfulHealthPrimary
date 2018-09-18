import React from 'react';
import { StyleSheet, Text, View, Button, Modal, TouchableHighlight, TouchableOpacity} from 'react-native';
import CustomText from '../common/CustomText';
import HealthConcerns from './HealthConcerns';

export default class FindDoctor extends React.Component {

  render() {

    return (
      <View style={styles.container}>
      <View>
      <CustomText
            style={{
              fontFamily: 'Avenir',
              fontSize: 35,
              color: 'white',
              textAlign: 'left',
              fontWeight: 'bold',
              marginTop: 30,
            }}
         >Find your doctor</CustomText>
        <CustomText
            style={{
                fontFamily: 'Avenir',
                fontSize: 20,
                color: 'white',
                textAlign: 'left',
                fontWeight: 'bold',
                marginTop: 15
            }}
        > On a scale of {"1"} (low) to {"5"} (high) </CustomText>
        </View>
        <TouchableOpacity style={styles.next}
            onPress={async () => {
                this.props.navigation.navigate('FindDoctor');
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
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222644',
    alignItems: 'center',
  },

});
