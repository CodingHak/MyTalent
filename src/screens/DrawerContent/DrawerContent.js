import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, SafeAreaView, Alert } from 'react-native';
import Images from '../../utils/Images';
import styles from './style';
import * as RootNavigation from '../../RootNavigation';
import { connect } from 'react-redux';
import { clear } from '../../store/action';
import { CommonActions } from '@react-navigation/native';
import Button from '../../controls/Button/Button';

class DrawerContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
    };
  }

  tabs = [
    { id: 1, title: 'Account', image: Images.account },
    { id: 2, title: 'Orders', image: Images.orders },
    { id: 3, title: 'Categories', image: Images.categories },
    { id: 4, title: 'Wishlist', image: Images.wishlist },
    { id: 5, title: 'Notification', image: Images.notification },
    { id: 6, title: 'Setting', image: Images.setting },
    { id: 7, title: 'Support', image: Images.support },
    { id: 8, title: 'About', image: Images.about1 },
    { id: 9, title: 'Logout', image: Images.account },
  ];

  redirect = id => {
    const { navigate, replace } = this.props.navigation;
    switch (id) {
      case 1:
        if (this.props.user && this.props.user.id) {
          navigate('ACCOUNT');
        } else {
          replace('authStack');
        }
        break;
      case 2:
        navigate('ORDERS');
        break;
      case 3:
        navigate('CATEGORIES');
        break;
      case 4:
        navigate('wishlistScreen');
        break;
      case 5:
        navigate('Notification');
        break;
      case 6:
        navigate('SettingScreen');
        break;
      case 7:
        navigate('supportScreen');
        break;
      case 8:
        navigate('About');
        break;
      case 9:
        this.logOut();
    }
  };

  componentDidMount() {
    this.checkUserExist();
  }

  logOut = () => {
    Alert.alert(
      'Warning!',
      'Are you sure, do you want to logout?',
      [
        {
          text: 'Cancel',
          // onPress: () => this.props.navigation.goBack(null),
          style: 'cancel',
        },
        {
          text: 'Logout',
          onPress: () =>
            {this.clearAppData()}
        },
      ],
    );
  }

  clearAppData = async () => {
    this.props.clear();
    AsyncStorage.clear()
    this.props.navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: 'authStack' }],
      }),
    );
  };

  checkUserExist = () => {
    if (this.props.user.id) {
      this.setState({ isLogin: true });
    } else {
    }
  };

  render() {
    const userInfo = this.props.user;
    const { navigate } = this.props.navigation;

    const {user}=this.props
   
    const { profileImage, } = this.state
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <TouchableOpacity onPress={() => this.props.navigation.closeDrawer()}>
            <Image source={Images.cross1} style={styles.crossimg} />
          </TouchableOpacity>
          {this.state.isLogin ? (
            <TouchableOpacity
              style={styles.header}
              onPress={() => this.props.navigation.navigate('ACCOUNT')}>
              <View style={styles.profileImage}>
                <Image source={Images.profileIcon} style={styles.img} />
              </View>
              <Text style={styles.name}>{userInfo.username}</Text>
            </TouchableOpacity>
          ) :
            (
              <TouchableOpacity
                style={styles.header}>
                <View style={[styles.profileImage, { flexDirection: 'row' }]}>
                  <Image source={Images.profileIcon} style={styles.img} />
                </View>
                <Button
                  style={styles.signinbtntxt}
                  title="Login"
                  onPress={() => RootNavigation.navigate('authStack')}
                  loading={this.state.loading}
                  loadingColor="#fff"
                  textStyle={{ fontSize: 14,color:"black",textDecorationLine: 'underline' }}
                />
              </TouchableOpacity>
            )}
          <View style={styles.tabSection}>
            {this.tabs.map((item, index) => {
              if (this.state.isLogin ? item.title : item.title != 'Logout') {
                return (
                  <TouchableOpacity
                    key={index}
                    onPress={() => this.redirect(item.id)}
                    style={[
                      styles.tab,
                      index == this.tabs.length - 1 ? { borderBottomWidth: 0 } : {},
                    ]}>
                    <View style={styles.tabIconContainer}>
                      <Image source={item.image} style={styles.tabIcon} />
                    </View>
                    <View style={styles.tabLabelContainer}>
                      <Text style={styles.tabLabel}>{item.title}</Text>
                    </View>
                    <View style={styles.tabIconContainer}>
                      <Image source={Images.enter} style={styles.tabIcon1} />
                    </View>
                  </TouchableOpacity>
                );
              }
            })}
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
});

const mapDispatchToProps = { clear };

export default connect(mapStateToProps, mapDispatchToProps)(DrawerContent);
