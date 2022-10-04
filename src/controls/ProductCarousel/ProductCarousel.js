import React, { Component } from "react";
import { View, Text, ScrollView, Image } from "react-native";
import Images from '../../utils/Images';
import styles from "./style";
import FastImage from 'react-native-fast-image';
export default class ProductCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
      indicators: [],
    };
  }
  componentDidMount() {
    this.constructIndicators();
  }

  constructIndicators() {
    var k = 0;
    for (var i = 0; i < this.props.data.length; i += 3) {
      var row = { id: k };
  
      k++;
      this.state.indicators.push(row);
    }
    this.setState({ indicator: this.state.indicators });
  }

  render() {
    return (
      <View>
        <ScrollView
          horizontal={true}
          pagingEnabled
          scrollEventThrottle={16}
          showsHorizontalScrollIndicator={false}
          onScroll={(event) => {
            const slideSize = event.nativeEvent.layoutMeasurement.width;
            const index = event.nativeEvent.contentOffset.x / slideSize;
            const roundIndex = Math.round(index);
            this.setState({currentIndex:roundIndex});
          }}
        >
          {this.props.data.map((item, index) => {
            return (
              <View key={index} style={styles.item}>
                <View style={styles.itemImage}>                  
                <Image source={{uri:item.ImagePath}} style={{width:'100%',height:'100%',resizeMode:'cover'}}/>                  
                </View>
              </View>
            );
          })}
        </ScrollView>
        <View style={styles.indicatorSection}>
          {this.state.indicators.map((item, index) => {
            return (
              <View
                key={index}
                style={[
                  styles.indicator,
                  this.state.currentIndex == item.id
                    ? { backgroundColor: "#000" }
                    : {},
                ]}
              />
            );
          })}
        </View>
      </View>
    );
  }
}
