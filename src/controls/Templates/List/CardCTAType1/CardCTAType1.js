import React, { Component } from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import styles from "./style";
import FlatListSlider from "../../../FlatListSlider/FlatListSlider";
import HeadingView from "../../../../screens/HeadingView/HeadingView";
import AppConstants from "../../../../utils/AppConstants";

export default class CardCTAType1 extends Component {
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
        style={styles.category}
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
        <ScrollView horizontal={true} style={styles.categories} showsHorizontalScrollIndicator={false}>
          {this.props.data.data && this.props.data.data.map((item, index) => {
            return this.renderCategory(item, index);
          })}
        </ScrollView>
      </View>
    );
  }
}
