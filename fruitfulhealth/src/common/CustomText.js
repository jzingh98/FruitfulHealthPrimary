import React from 'react';
import { StyleSheet, Text } from 'react-native';

export default class CustomText extends React.Component {
  render() {
    const styles = {
      fontSize: 20,
      ...this.props.style
    };

    return (
      <Text style={styles}>{this.props.children}</Text>
    );
  }
}
