import React, {Component} from 'react';
import { View } from 'react-native';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import Colors from '../../utils/Colors';
import styles from './style';

export default class Button extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View>
        {
          this.props.title="PLACE ORDER"?
          <TouchableOpacity
        style={[ this.props.style]}
        onPress={() => {
          if (!this.props.loading) {
            this.props.onPress();
          }
        }}>
        {!this.props.loading && (
          <Text style={[styles.label, this.props.textStyle]}>
            {this.props.title}
          </Text>
        )}
        {this.props.loading && (
          <ActivityIndicator color={this.props.loadingColor} />
        )}
      </TouchableOpacity>:
      <TouchableOpacity
      style={[styles.btn, this.props.style]}
      onPress={() => {
        if (!this.props.loading) {
          this.props.onPress();
        }
      }}>
      {!this.props.loading && (
        <Text style={[styles.label, this.props.textStyle]}>
          {this.props.title}
        </Text>
      )}
      {this.props.loading && (
        <ActivityIndicator color={this.props.loadingColor} />
      )}
    </TouchableOpacity>
        }
      
      </View>
    );
  }
}
