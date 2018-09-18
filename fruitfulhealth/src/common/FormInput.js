import React from 'react';
import { StyleSheet, View } from 'react-native';
import Input from './Input';
import CustomText from './CustomText';

export default class FormInput extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Input placeholder={this.props.placeholder}
          onChangeText={this.props.onChangeText}
          secureTextEntry={this.props.secureTextEntry}
        ></Input>
        <CustomText>{this.props.label}</CustomText>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  }
})
