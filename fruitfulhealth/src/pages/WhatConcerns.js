import React from 'react';
import { StyleSheet, Text, View, Button, Modal, TouchableHighlight, TouchableOpacity} from 'react-native';
import CustomText from '../common/CustomText';
import Questions from './Questions';

export default class WhatConcerns extends React.Component {
    static navigationOptions = {
        header: null,
      };
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
              marginTop: '50%',
            }}
         >What are your{"\n"}Health Concerns?</CustomText>
        <CustomText
            style={{
                fontFamily: 'Avenir',
                fontSize: 20,
                color: 'white',
                textAlign: 'left',
                fontWeight: 'bold',
                marginTop: 15
            }}
        > Add up to 3 and we{"'"}ll {"\n"} communicate these to your
        {"\n"} doctor to ensure they give
        {"\n"} you the best care. </CustomText>
        </View>
        <TouchableOpacity style={styles.next}
            onPress={async () => {
                this.props.navigation.navigate('HealthConcerns');
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
