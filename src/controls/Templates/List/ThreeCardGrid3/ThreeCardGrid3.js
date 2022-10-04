import React, { Component } from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import styles from "./style";
import FlatListSlider from "../../../FlatListSlider/FlatListSlider";
import HeadingView from "../../../../screens/HeadingView/HeadingView";
import AppConstants from "../../../../utils/AppConstants";

export default class ThreeCardGrid3 extends Component {
  render() {
    return (
      <View style={styles.categoriesSection}>
        {this.props.data.attributes.showTitle == "yes" && (<HeadingView title={this.props.data.title} />)}
        <View style={styles.categories}>
          <View
            style={{
              flex: 1,
              justifyContent: "space-between",
            }}
          >
            <TouchableOpacity style={styles.img2} onPress={() => this.props.onPress(this.props.data.dataSourceType=='Dynamic'?this.props.data.drillLink:item.drillLink,this.props.data.data[0].Title,this.props.data.data[0].ID,this.props.data)}>
              {this.props.data.data && this.props.data.data[0] && (
                <Image
                  source={{
                    uri: this.props.data.data[0].Image,
                  }}
                  style={{ width: "100%", height: "100%", resizeMode: "cover" }}
                />
              )}
            </TouchableOpacity>
            <TouchableOpacity style={styles.img2} onPress={() => this.props.onPress(this.props.data.dataSourceType=='Dynamic'?this.props.data.drillLink:item.drillLink,this.props.data.data[1].Title,this.props.data.data[1].ID,this.props.data)}>
              {this.props.data.data && this.props.data.data[1] && (
                <Image
                  source={{
                    uri: this.props.data.data[1].Image,
                  }}
                  style={{ width: "100%", height: "100%", resizeMode: "cover" }}
                />
              )}
            </TouchableOpacity>
          </View>
          <View style={{ flex: 2, marginLeft: 5 }}>
            <TouchableOpacity style={styles.img1} onPress={() => this.props.onPress(this.props.data.dataSourceType=='Dynamic'?this.props.data.drillLink:item.drillLink,this.props.data.data[2].Title,this.props.data.data[2].ID,this.props.data)}>
              {this.props.data.data && this.props.data.data[2] && (
                <Image
                  source={{
                    uri: this.props.data.data[2].Image,
                  }}
                  style={{ width: "100%", height: "100%", resizeMode: "cover" }}
                />
              )}
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
