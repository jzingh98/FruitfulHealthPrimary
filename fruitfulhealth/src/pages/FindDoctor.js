import React from 'react';
import { TouchableOpacity, StyleSheet, View, ImageBackground, Platform} from 'react-native';
import FormInput from '../common/FormInput';
import HeaderText from '../common/HeaderText';
import CustomText from '../common/CustomText';
import HealthConcerns from './HealthConcerns';

export default class FindDoctor extends React.Component {
    static navigationOptions = {
        header: null,
      };
     constructor(props){
         super(props);
         this.state= {zip: ""};
     }
     _handleTextChange = event => {
         this.setState({zip: event.nativeEvent.text})
     }
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
         >Find your doctor</CustomText>
         <View style={styles.form}>
             <FormInput maxLength={28} placeholder="Doctor's First Name" onSubmitEditing={this._handleTextChange}
             />
             <FormInput maxLength={28} placeholder="Doctor's Last Name" onSubmitEditing={this._handleTextChange}
             />
             <FormInput maxLength={28} placeholder="Name of Hospital" onSubmitEditing={this._handleTextChange}
             />
             <FormInput maxLength={8} placeholder="ZIP Code" onSubmitEditing={this._handleTextChange}
             />
         </View>
         <View>
        <TouchableOpacity style={styles.button}
          onPress={() => this.props.navigation.navigate('GetStarted')}
        >
        <CustomText
            style={{
            fontSize: 22,
            color: 'white',
            textAlign: 'center',
            fontWeight: 'bold',
            fontFamily: 'Avenir-Light',
            }}
          >Submit</CustomText>
         </TouchableOpacity>
         </View>
         </View>
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
  button: {
    flex: 0.3,
    backgroundColor: '#57BDC1',
    width: '50%',
    height: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 11,
    marginLeft: '25%',
    paddingLeft: '10%',
    paddingRight: '10%',
  },
  form: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
  },
});
