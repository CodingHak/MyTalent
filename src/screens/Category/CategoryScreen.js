import React, { Component } from "react";
import { View, Text, FlatList, TouchableOpacity, SafeAreaView, Image} from "react-native";
import MainHeader from "../MainHeader/MainHeader";
import styles from "./style";
import { connect } from "react-redux";
import ProgressDialog from "../../controls/ProgressDialog";
import Images from "../../utils/Images";

class CategoryScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      category: [],
    };
  }


  render() {
    return (
      <SafeAreaView style={styles.container}>
        <MainHeader />
        
        {/* {this.state.loading && <ProgressDialog size="large"/>} */}
      </SafeAreaView>
    );
  }
}


const mapStateToProps = (state) => ({
  category:state.category,
});
export default connect(mapStateToProps)(CategoryScreen);