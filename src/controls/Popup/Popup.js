import React, { Component } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";

export default class Popup extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TouchableOpacity
      activeOpacity={1}
        onPress={this.props.onClose}
        style={[
          styles.transparent_container,
          this.props.backgroundColor
            ? { backgroundColor: this.props.backgroundColor }
            : {},
          this.props.style,
        ]}
      >
        <TouchableWithoutFeedback>
          <View style={[styles.container, this.props.containerStyle]}>
            {this.props.children}
          </View>
        </TouchableWithoutFeedback>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  transparent_container: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
  },
  container: {
    width: "92%",
    backgroundColor: "#fff",
    alignSelf: "center",
    paddingVertical: 25,
    paddingHorizontal: 10,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 5,
  },
});
