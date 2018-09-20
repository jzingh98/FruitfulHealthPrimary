import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

export default class Input extends React.Component {
  render() {
    return (
      <TextInput maxLength={20} style={styles.container}
        placeholder={this.props.placeholder}
        placeholderTextColor='white'
        onChangeText={this.props.onChangeText}
        secureTextEntry={this.props.secureTextEntry}
        underlineColorAndroid='transparent'
      >
      </TextInput>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    fontSize: 20,
    height: 40,
    width: 250, //fixes underline so that it doesn't expand
    borderColor: '#4FC4D1',
    borderBottomWidth: 1,
    color: 'white' //fixes input color to be white, always.
  }
})
