import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, Image } from 'react-native';
import Container from '../components/Container';
import Button from '../components/Button';
import Label from '../components/Label';

export default class Login extends Component {
constructor(props) {
    super(props);
    this.state = {password: 'Password' };
 }
  render() {
    return (
        <ScrollView style={styles.scroll}>
                <Image style={styles.logo} source={require('../../images/apple-touch-icon.png')} />
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
                    <Button
                    label="New User? Register Here"
                    styles={{button: styles.alignCenter, label: styles.newUser}}
                    onPress={this.press.bind(this)} />
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
newUser: {
    color: '#9F493D',
    fontSize: 20,
    fontFamily: 'Avenir'
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
        paddingTop: '85%',
        width: '50%',
        height: '40%',
        paddingLeft: '100%',
},
textlogo: {
    textAlign: 'center',
    fontFamily: 'Avenir-Light',
    color: 'white',
    fontWeight: '900',
    fontSize: 30
}});



/* ScrollView is very important if you want your app to be able to cater to all sorts
of device dimensions and screen orientations. */
