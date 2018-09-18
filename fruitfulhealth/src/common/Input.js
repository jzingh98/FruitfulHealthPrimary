import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

export default class Input extends React.Component {
  render() {
    return (
      <TextInput style={styles.container}
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
    borderColor: '#4FC4D1',
    borderBottomWidth: 1,
  }
})
