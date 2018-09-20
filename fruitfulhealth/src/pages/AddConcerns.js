import React from 'react';
import { FlatList, StyleSheet, Text, View, Button, Modal, TouchableHighlight, TouchableOpacity, TextInput} from 'react-native';
import CustomText from '../common/CustomText';
import Questions from './Questions';
import Container from '../components/Container';


export default class AddConcerns extends React.Component {
  static navigationOptions = {
        header: null,
      };
  constructor(props){
      super(props);
      this.state = {
          data: [
              {key: "1. ____________________"},
              {key: "2. ____________________"},
              {key: "3. ____________________"}
          ]
      };
  }

  _renderItem = data => {
    return <CustomText
                style={{
                fontSize: 22,
                color: 'white',
                textAlign: 'left',
                fontWeight: 'bold',
                fontFamily: 'Avenir-Light',
            }}> {data.item.key} </CustomText>;
  };
  render() {

    return (
      <View style={styles.container}>
      <View style={{flex:0.8}}>
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
        <FlatList style={{paddingTop:'10%'}} data={this.state.data} renderItem={this._renderItem}/>
        <Container style={{flex:0.1}}>
            <TextInput
            style={styles.textInput}
            placeholder='Type Concern Here'
            onChangeText={(key) => this.setState({input:key})}
            value={this.state.input}></TextInput>
        </Container>
        </View>
        <TouchableOpacity style={styles.next}
            onPress={async () => {
                this.props.navigation.navigate('HealthConcerns');
            }}
          >
        <CustomText //CANNOT put this in a stylesheet atm
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

});
