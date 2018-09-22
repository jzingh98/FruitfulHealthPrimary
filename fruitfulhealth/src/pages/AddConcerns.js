import React from 'react';
import CheckBox from 'react-native-checkbox';
import {StyleSheet, Text, View, TouchableOpacity, Keyboard} from 'react-native';
import CustomText from '../common/CustomText';
import FormInput from '../common/FormInput';
import Questions from './Questions';

export default class AddConcerns extends React.Component {
  static navigationOptions = {
        header: null,
      };
      constructor(props){
          super(props);
          this.state = {
              checked: false
          };
      }
      checkBoxChanged(){
          this.state.checked?this.setState({checked: false}):this.setState({checked: true});
      }

  render() {
    return (
      <View style={styles.container}>
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
        > Please select all that apply. {"\n"} </CustomText>
        <CheckBox
          label='Diabetes/Pre-diabetes'
          onChange={this.checkBoxChanged.bind(this)}
        />


        <TouchableOpacity style={styles.next}
            onPress={async () => {
                this.props.navigation.navigate('RankConcerns');
            }}
          >
        <CustomText //CANNOT put this in a stylesheet
            style={{
            fontSize: 22,
            color: 'white',
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
  textInput: {
      height: 60,
      fontSize: 20,
      backgroundColor: '#FFF',
      fontFamily: 'Avenir',
      paddingLeft: '5%',
      borderRadius: 10,
      color: 'grey'
  },
  next: {
    borderRadius: 11,
    height: '10%',
    width: '50%',
    backgroundColor: '#57BDC1',
    justifyContent: 'center',
  },

});
