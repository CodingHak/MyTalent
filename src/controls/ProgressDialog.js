import React from "react";
import PropTypes from "prop-types";
import { View, ActivityIndicator } from "react-native";


import Colors from "../utils/Colors";

class ProgressDialog extends React.PureComponent {
  render() {
    return (
      <View
        style={{
          // justifyContent: "center",
          // alignItems: "center",
          // alignContent:"center",
          flex:1
        }}>

        <ActivityIndicator color={Colors.themeColor4} size={this.props.size} />

      </View>

    );
  }
}
ProgressDialog.defaultProps = {
  loading: false
};

ProgressDialog.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default ProgressDialog;
