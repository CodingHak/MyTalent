import React, { Component } from "react";
import { View, Dimensions, Image, TouchableOpacity } from "react-native";
import styles from "./style";
import HeadingView from "../../../../screens/HeadingView/HeadingView";
import AppConstants from "../../../../utils/AppConstants";
import Carousel from "react-native-snap-carousel";

export default class CardCTAType2 extends Component {
  constructor(props) {
    super(props);
  }

  _renderItem({ item, index }) {
    return (
      <TouchableOpacity
      onPress={() => this.props.onPress(this.props.data.dataSourceType=='Dynamic'?this.props.data.drillLink:item.drillLink,item.Title,item.ID,this.props.data)}
        style={{
          width: "100%",
          padding: 10,
        }}
      >
        <View
          style={{
            width: "100%",
            aspectRatio: 0.75 / 1,
            backgroundColor: "#e5e5e5",
            borderRadius: 5,
          }}
        >
          <Image
            source={{ uri: item.Image }}
            style={{ width: "100%", height: "100%", resizeMode: "cover" }}
          />
        </View>
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <View style={styles.categoriesSection}>
        {this.props.data.attributes.showTitle == "yes" && (<HeadingView title={this.props.data.title} />)}
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "center",
            paddingVertical: 20,
          }}
        >
          {this.props.data.data && (
            <Carousel
              layout={"default"}
              ref={(ref) => (this.carousel = ref)}
              data={this.props.data.data}
              sliderWidth={Dimensions.get("window").width}
              itemWidth={300}
              inactiveSlideScale={1}
              firstItem={1}
              renderItem={this._renderItem.bind(this)}
            />
          )}
        </View>
      </View>
    );
  }
}
