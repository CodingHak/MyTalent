import React, { Component } from 'react';
import {
  ImageBackground,
  Image,
  View,
  Text,
} from 'react-native';
import { CommonActions } from '@react-navigation/native';
import Images from '../../utils/Images';
import styles from './style';
import Button from '../../controls/Button/Button';
import NetInfo from '@react-native-community/netinfo';
import AsyncStorage from '@react-native-async-storage/async-storage';

class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isConnected: false,
    };
  }

  componentDidMount() {
    this.checkInternetConnection()
  }



    checkInternetConnection = () => {
      NetInfo.fetch().then(state => {
        if (state.isConnected) {
          this.setState({ isConnected: true });
          this.redirect();
        } else {
          this.setState({ isConnected: false });
        }
      });
    };



    redirect = () => {
      setTimeout(() => {
        this.props.navigation.dispatch(
          CommonActions.reset({
            index: 1,
            routes: [{ name: 'appStack' }],
          }),
        );
      }, 2000);
    };

    render() {

      return (
        <ImageBackground source={Images.splash} style={styles.container}>
          {/* <Image source={Images.beaanaLogo} style={styles.bottomLogo} />
          {!this.state.isConnected && (
            <View style={styles.txtView}>
              <Text style={styles.label}>Could not connect.</Text>
              <Button
                style={styles.btn}
                title="Retry"
                onPress={() => {
                  this.checkInternetConnection()
                }}
              />
            </View>
          )} */}
        </ImageBackground>
      );
    }
  }

export default Splash;