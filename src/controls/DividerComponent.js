import React, { Component } from "react";
import {
View,
StyleSheet,
} from "react-native";


export default class DividerComponent extends Component {
  render() {
    return (
     <View style={styles.divider}/>
    );
  }
}


const styles = StyleSheet.create({
   divider:{
    flex:1,
    borderWidth:1,
    borderColor:'#F3F3F3',
   }
})

