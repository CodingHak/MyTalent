import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, Platform, StatusBar } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Colors from '../../utils/Colors';
import Images from '../../utils/Images';
import styles from './style';
import { withNavigation } from '@react-navigation/compat';
import Icon from '../../controls/IconNB';
import { connect } from 'react-redux';

class MainHeader extends Component {

  constructor(props) {
    super(props);
  }

  openDrawer() {
    // this.props.navigation.openDrawer();
  }

  render() {
    const { isBack } = this.props
    const { cart } = this.props
    return (
      <View style={styles.container}>
        {/* {Platform.OS == 'ios' && <View style={styles.iosMargin} />} */}
        <View style={styles.header}>
          {isBack == false ?
            <TouchableOpacity onPress={() => {
              this.props.navigation.goBack(null)
            }
            }
              style={styles.drawerOpenContainer}>
              <Image style={{ width: 30, height: 30, resizeMode: 'contain' }} source={Images.back} />
            </TouchableOpacity>

            : <TouchableOpacity onPress={() => this.openDrawer()} style={styles.drawerOpenContainer}>
              <Image source={Images.menu} style={styles.drawerIcon} />
            </TouchableOpacity>
          }

          <View style={styles.searchContainer}>
          </View>
          <TouchableOpacity 
          // onPress={() => this.props.navigation.navigate('cartScreen')} 
          style={styles.cartContainer}>
            <Icon name="shoppingcart" type="AntDesign" style={styles.cartIcon} size={20} />
          </TouchableOpacity>
          <TouchableOpacity 
          // onPress={() => this.props.navigation.navigate('wishlistScreen')} 
          style={styles.wishlistContainer}>
            <Image source={Images.wishlist} style={styles.wishlistIcon} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

// export default withNavigation( MainHeader );

const mapStateToProps = (state) => ({
  cart: state.cart,
  user: state.user,
});

// const mapDispatchToProps = dispatch => {
//   return {
//     removeCartItem: id => {
//       dispatch(removeCartItem(id));
//     },
//     decreaseCartQty: id => {
//       dispatch(decreaseCartQty(id));
//     },
//     increaseCartQty: id => {
//       dispatch(increaseCartQty(id));
//     },
//   };
// };

export default withNavigation(connect(mapStateToProps)(MainHeader));