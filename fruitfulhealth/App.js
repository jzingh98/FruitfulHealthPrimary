'use strict';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: "",
        email: "",
        password: ""
      }
  }
  render() {
    return (
        <View>
        <Text style={styles.logintitle}>
            LOGIN
        </Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => this.setState({name: text})}
          placeholder="Name"
        />
        <TextInput
          style={styles.input}
          onChangeText={(text) => this.setState({email: text})}
          placeholder="E-Mail"
        />
        <TextInput
          style={styles.input}
          onChangeText={(text) => this.setState({password:text})}
          secureTextEntry={true}
          placeholder="Password"
        />
        <Button
          onPress={this.submit}
          title="Submit"
          color="#841584"
        />
      </View>
    );
  }
  submit() {
//Do Something
}
}

const styles = StyleSheet.create({
  input: {
    width: 250,
    margin: 5
},
  logintitle: {
      padding: 100,
      color: '#00C8B2',
      fontFamily: 'Baskerville'
}
});
