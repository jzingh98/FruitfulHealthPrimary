import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView } from 'react-native';
import Container from '../components/Container';
import Button from '../components/Button';
import Label from '../components/Label';

export default class Login extends Component {
  render() {
    return (
        <ScrollView style={styles.scroll}>
            <Container>
                <Button
                label="Forgot Login/Pass"
                styles={{button: styles.alignRight, label: styles.label}}
                onPress={this.press.bind(this)} />
            </Container>
            <Container>
                <Label text="Username or Email" />
                <TextInput
                    style={styles.textInput}
                />
            </Container>
            <Container>
                <Label text="Password" />
                <TextInput
                    secureTextEntry={true}
                    style={styles.textInput}
                />
            </Container>
            <View style={styles.footer}>
                <Container>
                    <Button
                        label="Sign In"
                        styles={{button: styles.primaryButton, label: styles.buttonWhiteText}}
                        onPress={this.press.bind(this)} />
                </Container>
                <Container>
                    <Button
                        label="CANCEL"
                        styles={{label: styles.buttonBlackText}}
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
    backgroundColor: '#E1D7D8',
    padding: 30,
    flexDirection: 'column' // Optional, but good practice to explicitly define
},
label: {
    color: '#0d8898',
    fontSize: 20
},
alignRight: {
    alignSelf: 'flex-end' // Positions the element at the very end of the current line
},
textInput: {
    height: 80,
    fontSize: 30,
    backgroundColor: '#FFF'
},
buttonWhiteText: {
    fontSize: 20,
    color: '#FFF',
},
buttonBlackText: {
    fontSize: 20,
    color: '#595856'
},
primaryButton: {
    backgroundColor: '#34A853'
},
footer: {
   marginTop: 100
}});



/* ScrollView is very important if you want your app to be able to cater to all sorts
of device dimensions and screen orientations. */
