import React, {Component} from 'react';
import {Image, View} from 'react-native';
import Colors from '../../utils/Colors';
import styles from './style';
import AppviewModel from '../../utils/AppviewModel';
import Shimmer from 'react-native-shimmer';
import FastImage from 'react-native-fast-image';

export default class ThumbnailImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: null,
      loading: false,
    };
  }

  componentDidMount() {    
    if (!this.props.source && this.props.id && this.props.id != 0) {
      this.getImages();
    }
  }

  getImages = () => {
    this.setState({loading: true});
    AppviewModel.sendApiCall(
      `wp-json/wp/v2/media/${this.props.id}`,
      null,
      'GET',
      response => {
        this.setState({loading: false});
        this.setState({url: response.guid.rendered});
      },
      error => {
        this.setState({loading: false});
      },
    );
  };

  render() {
    if (this.props.source) {
      return (
        <Image style={[this.props.style]} source={{uri: this.props.source}} />
      );
    } else {
      return (
        <View style={{width: '100%'}}>
          {this.state.loading && (
            <Shimmer style={[this.props.style]}>
              <Image
                style={[this.props.style]}
                source={{uri: this.state.url}}
              />
            </Shimmer>
          )}
          {!this.state.loading && (
            <Image style={[this.props.style,{resizeMode:'cover'}]} source={{uri: this.state.url}} />
          )}
        </View>
      );
    }
  }
}
