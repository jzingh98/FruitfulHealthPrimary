import React from 'react';
import CustomText from './CustomText';

export default class HeaderText extends React.Component {
  render() {
    return (
      <CustomText style={{fontSize: 30}}>{this.props.children}</CustomText>
    );
  }
}
