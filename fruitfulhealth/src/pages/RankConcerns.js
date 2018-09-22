import React from 'react';
import Slider from 'react-native-slider';
import { StyleSheet, Text, View, Button, Modal, TouchableHighlight, TouchableOpacity} from 'react-native';
import CustomText from '../common/CustomText';
import Questions from './Questions';

const CB_ENABLED_IMAGE = require('../../images/checked.png');
const CB_DISABLED_IMAGE = require('../../images/unchecked.png');


export default class RankConcerns extends React.Component {
    static navigationOptions = {
        header: null,
      };
    constructor(props) {
          super(props);
          this.state = { diabetes: 1,
                           bloodpressure: 1,
                      cholesterol: 1,
                     heartdisease: 1,
                            other: 1}
    };
    getVal(val){
      console.warn(val);
      }
  render() {

    return (
      <View style={styles.container}>
      <View>
      <CustomText
            style={{
              fontFamily: 'Avenir',
              fontSize: 35,
              color: '#FFFFFF',
              textAlign: 'left',
              fontWeight: 'bold',
              marginTop: '20%',
            }}
         >Rank your{"\n"}concerns</CustomText>
        <CustomText
            style={{
                fontFamily: 'Avenir',
                fontSize: 20,
                color: '#FFFFFF',
                textAlign: 'left',
                fontWeight: 'bold',
                marginTop: 15,
                marginBottom: 15
            }}
        > On a scale of {"1"} (low) to {"5"} (high) </CustomText>
        </View>

        <View>
        <Text style={styles.welcome}>
          Diabetes: {this.state.diabetes}
        </Text>
        <Slider
         style={{ width: 300 }}
         minimumValue={1}
         maximumValue={5}
         step={1}
         value={this.state.diabetes}
         onValueChange={val => this.setState({ diabetes: val })}
         onSlidingComplete={ val => this.getVal(val)}
         minimumTrackTintColor='#FFFFFF'
         maximumTrackTintColor='#FFFFFF'
        />
        </View>

        <View>
        <Text style={styles.welcome}>
          Blood Pressure: {this.state.bloodpressure}
        </Text>
        <Slider
         style={{ width: 300 }}
         minimumValue={1}
         maximumValue={5}
         step={1}
         value={this.state.bloodpressure}
         onValueChange={val => this.setState({ bloodpressure: val })}
         onSlidingComplete={ val => this.getVal(val)}
         minimumTrackTintColor='#FFFFFF'
         maximumTrackTintColor='#FFFFFF'
        />
        </View>

        <View>
        <Text style={styles.welcome}>
          Cholesterol: {this.state.cholesterol}
        </Text>
        <Slider
         style={{ width: 300 }}
         minimumValue={1}
         maximumValue={5}
         step={1}
         value={this.state.cholesterol}
         onValueChange={val => this.setState({ cholesterol: val })}
         onSlidingComplete={ val => this.getVal(val)}
         minimumTrackTintColor='#FFFFFF'
         maximumTrackTintColor='#FFFFFF'
        />
        </View>

        <View>
        <Text style={styles.welcome}>
          Heart Disease: {this.state.heartdisease}
        </Text>
        <Slider
         style={{ width: 300 }}
         minimumValue={1}
         maximumValue={5}
         step={1}
         value={this.state.heartdisease}
         onValueChange={val => this.setState({ heartdisease: val })}
         onSlidingComplete={ val => this.getVal(val)}
         minimumTrackTintColor='#FFFFFF'
         maximumTrackTintColor='#FFFFFF'
        />
        </View>

        <View>
        <Text style={styles.welcome}>
          Other: {this.state.other}
        </Text>
        <Slider
         style={{ width: 300 }}
         minimumValue={1}
         maximumValue={5}
         step={1}
         value={this.state.other}
         onValueChange={val => this.setState({ other: val })}
         onSlidingComplete={ val => this.getVal(val)}
         minimumTrackTintColor='#FFFFFF'
         maximumTrackTintColor='#FFFFFF'
        />
        </View>

        <TouchableOpacity style={styles.next}
            onPress={async () => {
                this.props.navigation.navigate('FindDoctor');
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
  welcome: {
    fontSize: 20,
    textAlign: 'left',
    margin: 10,
    color: 'white'
},
next: {
  borderRadius: 11,
  height: '5%',
  width: '35%',
  backgroundColor: '#57BDC1',
  justifyContent: 'center',
  marginTop: 50
},
checkbox: {
    width: 36,
    height: 36
},
labelContainer: {
    marginLeft: 10,
    marginRight: 10,
},
label: {
    fontSize: 15,
    fontFamily: 'Avenir',
    fontWeight: 'bold',
    color: 'white'
},
checkImage: CB_ENABLED_IMAGE,
uncheckedImage: CB_DISABLED_IMAGE,
});
