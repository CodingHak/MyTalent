import React, { Component } from "react";
import { View, Linking, Image, FlatList, SafeAreaView, TouchableOpacity, Dimensions, ActivityIndicator } from "react-native";
import MainHeader from "../MainHeader/MainHeader";
import styles from "./style";
import Images from '../../utils/Images';
import { connect } from "react-redux";
import { CustomFont } from '../../controls';
import AppviewModel from '../../utils/AppviewModel'
import { addCardData, saveCategoryData } from "../../store/action";
import Button from '../../controls/Button/Button'
import Colors from "../../utils/Colors";
import ProgressDialog from '../../controls/ProgressDialog'
import AppConstants from "../../utils/AppConstants";
import AsyncStorage from "@react-native-async-storage/async-storage";

const contentWidth = Dimensions.get('window').width

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
    };
  }




  render() {
    return (
      <SafeAreaView style={styles.container}>
        <MainHeader />
        {/* {this.state.isLoading && <ProgressDialog size="large" />} */}
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state) => ({
  category: state.category,
  cart: state.cart
});

const mapDispatchToProps = dispatch => {
  return {
    saveCategoryData: data => {
      dispatch(saveCategoryData(data));
    },
    addCardData: data => {
      dispatch(addCardData(data));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

