import React, {Component} from 'react';
import {View, Text} from 'react-native';

export default class CustomFont extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Text
          {...this.props}
          numberOfLines={
            this.props.numberOfLines ? this.props.numberOfLines : null
          }
          style={[this.props.style]}>
          {this.props.Text}
        </Text>
        {this.props.children}
      </View>
    );
  }
}
