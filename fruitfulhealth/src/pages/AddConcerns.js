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
        <View styles={{alignItems:'center'}}>
        <CheckBox
          label='Diabetes/Pre-Diabetes'
          onChange={this.checkBoxChanged.bind(this)}
        />
        <CheckBox
          label='High Blood Pressure'
          onChange={this.checkBoxChanged.bind(this)}
        />
        <CheckBox
          label='High Cholesterol'
          onChange={this.checkBoxChanged.bind(this)}
        />
        <CheckBox
          label='Heart Disease'
          onChange={this.checkBoxChanged.bind(this)}
        />
        <CheckBox
          label='Other'
          onChange={this.checkBoxChanged.bind(this)}
        />
        </View>
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
  next: {
    borderRadius: 11,
    backgroundColor: '#57BDC1',
    justifyContent: 'center',
    marginTop: 90,
    width: 270,
    height: 51,
  },
  checkbox: {
      width: 36,
      height: 36
  },
  label: {
      fontSize: 15,
      fontFamily: 'Avenir',
      fontWeight: 'bold',
      color: 'white'
  }

});
