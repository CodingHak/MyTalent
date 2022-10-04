import React, { Component } from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import styles from "./style";
import FlatListSlider from "../../../FlatListSlider/FlatListSlider";
import HeadingView from "../../../../screens/HeadingView/HeadingView";
import AppConstants from "../../../../utils/AppConstants";

export default class HCard3 extends Component {
  getIndex = (i) => {
    switch (i) {
      case 0:
      case 3:
      case 4:
      case 7:
      case 8:
        return true;
      case 1:
      case 2:
      case 5:
      case 6:
      case 9:
      case 10:
        return false;
    }
  };
  renderCategory = (category, index) => {
    return (
      <TouchableOpacity
        // onPress={() => {
        //   this.props.navigation.navigate("subCategoryListScreen", {
        //     title: category.title,
        //     id: category.id,
        //   });
        // }}
        onPress={() => this.props.onPress(this.props.data.dataSourceType=='Dynamic'?this.props.data.drillLink:item.drillLink,category.Title,category.ID,this.props.data)}
        key={String(index)}
        style={this.getIndex(index) ? styles.category2 : styles.category1}
      >
        <View style={styles.catImage}>
          <Image
            source={{ uri: category.Image }}
            style={{ width: "100%", height: "100%", resizeMode: "cover" }}
          />
        </View>
      </TouchableOpacity>
    );
  };

  render() {
    return (
      <View style={styles.categoriesSection}>
        {this.props.data.attributes.showTitle == "yes" && (<HeadingView title={this.props.data.title} />)}
        <View style={styles.categories}>
          {this.props.data.data && this.props.data.data.map((item, index) => {
            return this.renderCategory(item, index);
          })}
        </View>
      </View>
    );
  }
}
