import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet, Text, View, TextInput, ScrollView, Image } from 'react-native';
import Container from '../components/Container';
import Button from '../components/Button';
import Label from '../components/Label';
import CustomText from '../common/CustomText.js';

export default class Login extends Component {
    static navigationOptions = {
        header: null,
      };
constructor(props) {
    super(props);
    this.state = {password: 'Password' };
 }

  render() {
    return (
        <ScrollView style={styles.scroll}>
                <Image style={styles.logo} source={require('../../images/logo.png')} />
                <Text style={styles.textlogo}> Fruitful </Text>
                <Text style={styles.textlogo}> Health </Text>
            <Container>
                <TextInput
                    style={styles.textInput} placeholder='Username'
                    onChangeText={(username) => this.setState({input: username})}
                    value={this.state.input}
                />
            </Container>
            <Container>
                <TextInput
                    placeholder='Password'
                    secureTextEntry={true}
                    style={styles.textInput}
                    onChangeText={() => this.setState({})}
                    value={this.state.password}
                />
            </Container>
            <View>
                <Container>
                    <Button
                        label="Login"
                        styles={{button: styles.loginButton, label: styles.loginText}}
                        onPress={this.press.bind(this)} />
                </Container>
                <Container>
                    <TouchableOpacity
                    onPress={async () => {
                    this.props.navigation.navigate('Disclaimer');}}>
                    <CustomText
                    style={{
                        color: 'white',
                        fontSize: 20,
                        fontFamily: 'Avenir',
                        textAlign: 'center'
                    }}>New User? Register Here</CustomText>
                    </TouchableOpacity>
                </Container>
            </View>
        </ScrollView>
    );
     }
     press() {
       //execute any code here
     }
}

const styles = StyleSheet.create({
scroll: {
    backgroundColor: '#E56A58',
    padding: 30,
    flexDirection: 'column' // Optional, but good practice to explicitly define
},
alignRight: {
    alignSelf: 'flex-end' // Positions the element at the very end of the current line
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
loginText: {
    fontSize: 20,
    color: '#FFF',
    fontFamily: 'Avenir'
},
buttonBlackText: {
    fontSize: 20,
    color: '#595856'
},
loginButton: {
    backgroundColor: '#57BDC1',
    borderRadius: 10
},
logo: {
    width: '40%',
    height: '40%',
    paddingLeft: '100%',
    marginTop: '10%', //Using this instead of paddingTop ensures size is kept constant
    resizeMode: 'contain'
},
textlogo: {
    textAlign: 'center',
    fontFamily: 'Avenir-Light',
    color: 'white',
    fontWeight: '900',
    fontSize: 50
}});



/* ScrollView is very important if you want your app to be able to cater to all sorts
of device dimensions and screen orientations. */
