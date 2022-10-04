import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./style";

export default class IncDecCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value,
      max: this.props.max ? this.props.max : 1000,
    };
  }

  dec = () => {

    if (this.state.value > 0) {
      this.setState({ value: this.state.value - 1 }, () => {
        if (this.props.onValueChange) {
          this.props.onValueChange(this.state.value);
        }
      });
    }
  };

  inc = () => {
    if (this.state.value < this.state.max) {
      this.setState({ value: this.state.value + 1 }, () => {
        if (this.props.onValueChange) {
          this.props.onValueChange(this.state.value);
        }
      });
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.btn} onPress={() => this.dec()}>
          <Text style={styles.label1}>-</Text>
        </TouchableOpacity>
        <View style={styles.value}>
          <Text style={styles.label}>{this.state.value}</Text>
        </View>
        <TouchableOpacity style={styles.btn} onPress={() => this.inc()}>
          <Text style={styles.label1}>+</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
