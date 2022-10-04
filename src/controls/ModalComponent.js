import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Modal,
  TouchableOpacity,
  TouchableNativeFeedback,
} from "react-native";


export default class ModalComponent extends Component {
  render() {
    const { ThemeColor ,modalVisible,onPress} = this.props;
    return (
      <Modal {...this.props}
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => this.props.onRequestClose()}
      >
        <TouchableOpacity style={[styles.centeredView,this.props.containerStyle]} onPress={()=>this.props.onRequestClose()}>
          <TouchableNativeFeedback>
          <View
            style={[{
              ...styles.modalView,
              // backgroundColor: 'white',
              marginHorizontal: 0,
            },this.props.modalView]}>
             {this.props.children }
            </View>
            </TouchableNativeFeedback>
          </TouchableOpacity>
       
      </Modal>
    );
  }
}


const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        elevation:10,
        backgroundColor:" rgba(0, 0, 0, 0.5)"
      },
      modalView: {        
        shadowColor: "rgba(0, 0, 0, 0.16)",
        shadowOffset: { width: 3, height: 0 },
        shadowRadius: 12,
        borderRadius: 20,
        backgroundColor: "white",
        marginVertical:20
      },

})

