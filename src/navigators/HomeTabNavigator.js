import React, { Component, useEffect, useState } from 'react';
import { View, TouchableOpacity, Text, Image, StyleSheet, Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../screens/Home/Home';
import Category from '../screens/Category/CategoryScreen';
import OrderScreen from '../screens/Order/OrderScreen';
import AccountScreen from '../screens/Account/AccountScreen';
import Images from '../utils/Images';
import Colors from '../utils/Colors';
import { connect } from 'react-redux';
import AsyncStorage from "@react-native-async-storage/async-storage";

const Tab = createBottomTabNavigator();


function HomeTabNavigator({ state, descriptors, navigation, props }) {

  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }
  return (
    <View style={styles.MainContainer}>
      <View style={styles.mapView}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBrLabel
              : options.title !== undefined
                ? options.title
                : route.name;

          const isFocused = state.index === index;
          const setColor = isFocused ? '#FF2227' : 'BLACK';

          const onPress = (props) => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          let data =
            // label == 'HOME'
            //   ? '#ff5a2d'
            //   : label == 'PROGRESS'
            //   ? '#7e4ba9'
            //   : label == 'DOUBTS'
            //   ? '#fa7f02'
            //   : label == 'MY GOALS'
            //   ? '#20a994'
            //   : label == 'FEED WALL'
            //   ? '#4873d1'
            //   : 'black';
            label == 'HOME'
              ? '#FF2227'
              : label == 'CATEGORIES'
                ? '#FF2227'
                : label == 'ORDERS'
                  ? '#FF2227'
                  : label == 'ACCOUNT'
                    ? '#FF2227'
                    : 'black';

          return (
            <TouchableOpacity
              activeOpacity={0.9}
              key={index}
              accessibilityRole="button"
              accessibilityStates={isFocused ? ['selected'] : []}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              tabBarVisible={options.tabBarVisible}
              style={{ flex: 1, alignItems: 'center' }}>
              {!isFocused ?
                label == 'HOME' ? (
                  <Image style={styles.iconsStyle} source={Images.home1} />
                ) : label == 'CATEGORIES' ? (
                  <Image style={styles.iconsStyle} source={Images.categories} />
                ) : label == 'ORDERS' ? (
                  <Image
                    style={styles.iconsStyle}
                    source={Images.orders}
                  />
                ) : label == 'ACCOUNT' ? (
                  <Image style={styles.iconsStyle} source={Images.account} />
                )
                  : (
                    label == 'TUTORIAL' && (
                      <Image style={styles.iconsStyle} source={Images.tutorial} />
                    )
                  )


                :
                label == 'HOME' ? (
                  <Image style={styles.iconsStyle} source={Images.home} />
                ) : label == 'CATEGORIES' ? (
                  <Image style={styles.iconsStyle} source={Images.category1} />
                ) : label == 'ORDERS' ? (
                  <Image
                    style={styles.iconsStyle}
                    source={Images.order1}
                  />
                ) : label == 'ACCOUNT' ? (
                  <Image style={styles.iconsStyle} source={Images.profile1} />
                )
                  : (
                    label == 'TUTORIAL' && (
                      <Image style={styles.iconsStyle} source={Images.tutorial} />
                    )
                  )

              }


              <Text
                style={{
                  // marginBottom: 3,
                  fontSize: 10,
                  fontFamily: 'Nunito-Regular',
                  fontWeight: '700',
                  marginTop: 4,
                  color: isFocused ? data : 'black',
                  textAlign: 'center'
                }}>
                {label}
              </Text>
              <View
                style={{
                  width: 40,
                  height: 3,
                  // backgroundColor: setColor,
                  marginHorizontal: 10,
                }}
              />
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}
function BottamTabView() {
  const [token, setToken] = useState('')
  useEffect(async() => {
    var token = await AsyncStorage.getItem('token');
    setToken(token)
  }, [])
  return (
    <Tab.Navigator
      //backBehavior="none"
      tabBarOptions={{
        keyboardHidesTabBar: true,
      }}
      tabBar={props => <HomeTabNavigator {...props} />}
    >
      {/* <Tab.Screen name="HOME" component={DashboardScreen} />
        <Tab.Screen name="PROGRESS" component={MyProgressReport} />
        <Tab.Screen name="DOUBTS" component={CameraView} />
        <Tab.Screen name="MY GOALS" component={MyGoalsScreen} />
        <Tab.Screen name="FEED WALL" component={FeedWall} /> */}
      <Tab.Screen name="HOME" component={Home} options={{ tabBarVisible: true }} />
      {/* <Tab.Screen name="LEADERBOARD" component={ LeaderBoardScreen} options={{tabBarVisible:true}} /> */}
      <Tab.Screen name="CATEGORIES" component={Category} options={{ tabBarVisible: true }} />
      {/* <Tab.Screen name="REPORT AN ISSUE" component={ReportIssue}  options={{tabBarVisible:true}}/> */}
      <Tab.Screen name="ORDERS" component={OrderScreen} options={{ tabBarVisible: true }} />
      <Tab.Screen name="ACCOUNT" component={AccountScreen} options={{ tabBarVisible: true }} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  MainContainer: {
    position: 'absolute',
    bottom: 0,
    borderTopStartRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: 'white',
    flex: 1,
    width: '100%',
    elevation: 4,
    paddingBottom: Platform.OS == 'android' ? 0 : 10,
    borderWidth: 1,
    borderColor: '#EDF0F3'
  },
  bgContainer: {
    flex: 1,

  },
  mapView: {
    flexDirection: 'row',
    height: 71,
    alignItems: 'center',
  },
  iconsStyle: { width: 20, height: 20 },
});

// export default BottamTabView;

const mapStateToProps = (state) => ({
  user: state.user,
});


export default connect(mapStateToProps)(BottamTabView);
