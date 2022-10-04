import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  TouchableWithoutFeedback,
  ScrollView,
  Animated,
  SafeAreaView,
  FlatList,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './style';

// Props :
// selectedValue
// onValueChange
// Data
// style
// itemStyle
// listStyle
// listItemStyle
// listIconStyle
// showCaret

export default class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isListVisible: false,
    };
  }

  openPopup = () => {
    this.setState({isListVisible: true});
  };

  closePopup = () => {
    this.setState({isListVisible: false});
  };

  changeOption(item, index) {
    if (item.value != this.props.selectedValue) {
      this.props.onValueChange(item.value, index);
      this.closePopup();
    }
  }

  addOrRemoveOption(item, index, isExist) {
    this.props.onValueChange(item, index, isExist);
    if (this.props.Data.length <= 1) {
      this.closePopup();
    }
  }

  renderList = ({item, index}) => {
    return (
      <TouchableOpacity
        key={index}
        style={[
          styles.listItem,
          item.value == this.props.selectedValue
            ? {backgroundColor: 'rgba(0,0,0,0.1)'}
            : {},
        ]}
        onPress={() => {
          this.changeOption(item, index);
        }}>
        {this.props.showImage && (
          <View
            style={{
              width: 16,
              height: 16,
              marginRight: 10,
              marginTop: 2,
              justifyContent: 'center',
            }}>
            <Image
              source={item.Image}
              style={{width: '100%', height: '100%', resizeMode: 'contain'}}
            />
          </View>
        )}
        <View style={{flex: 1, justifyContent: 'center'}}>
          <Text
            style={[
              styles.label,
              this.props.listItemStyle,
              this.props.useFont ? {fontFamily: item.value} : {},
            ]}
            numberOfLines={1}>
            {item.label}
          </Text>
        </View>
        <View style={{justifyContent: 'center'}}>
          {item.value == this.props.selectedValue && (
            <Icon
              name="check"
              style={[
                styles.selectedIcon,
                this.props.listIconStyle,
                {
                  color: this.props.selectedIconColor
                    ? this.props.selectedIconColor
                    : 'green',
                },
              ]}
            />
          )}
        </View>
      </TouchableOpacity>
    );
  };

  render() {
    var enabled = this.props.enabled != undefined ? this.props.enabled : true;
    var selectedItem = null;
    var index = this.props.Data.findIndex(item => {
      return item.value == this.props.selectedValue;
    });
    if (index >= 0) {
      selectedItem = this.props.Data[index];
    } else {
      selectedItem = null;
    }
    return (
      <View style={this.props.mainContainerStyle}>
        {/* dropdown */}
        <TouchableOpacity
          style={[styles.dropdown, this.props.style]}
          onPress={() => {
            if (enabled) {
              this.openPopup();
            }
          }}
          activeOpacity={enabled ? 0 : 1}>
          <View style={{flexDirection: 'row'}}>
            {this.props.multiSelect && (
              <View style={{flex: 1, justifyContent: 'center'}}>
                {this.props.selectedValue.length > 0 && (
                  <Text
                    style={[styles.dropdownLabel, this.props.itemStyle]}
                    numberOfLines={this.props.textOverflow ? 1 : null}>
                    {this.props.selectedValue.map((item, index) => {
                      return (
                        <Text key={index}>
                          {index != 0 && <Text> , </Text>}
                          {item.label}
                        </Text>
                      );
                    })}
                  </Text>
                )}
                {this.props.selectedValue.length <= 0 && (
                  <Text
                    style={[styles.dropdownLabel, this.props.itemStyle]}
                    numberOfLines={1}>
                    {this.props.defaultText
                      ? this.props.defaultText
                      : 'Select Option'}
                  </Text>
                )}
              </View>
            )}
            {!this.props.multiSelect && (
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  flexDirection: 'row',
                }}>
                {selectedItem && this.props.showImage && (
                  <View
                    style={{
                      justifyContent: 'center',
                      width: 16,
                      height: 16,
                      marginRight: 5,
                      marginTop: 2,
                    }}>
                    <Image
                      source={selectedItem.Image}
                      style={{
                        width: '100%',
                        height: '100%',
                        resizeMode: 'contain',
                      }}
                    />
                  </View>
                )}
                <View style={{flex: 1, justifyContent: 'center'}}>
                  {selectedItem && (
                    <Text
                      style={[
                        styles.dropdownLabel,
                        this.props.itemStyle,
                        this.props.useFont
                          ? {fontFamily: selectedItem.value}
                          : {},
                      ]}
                      numberOfLines={1}>
                      {this.props.showIdInLabel && selectedItem.value}
                      {!this.props.showIdInLabel && selectedItem.label}
                    </Text>
                  )}
                  {!selectedItem && (
                    <Text
                      style={[
                        styles.dropdownLabel,
                        this.props.itemStyle,
                        {color: '#808080'},
                      ]}
                      numberOfLines={1}>
                      {this.props.defaultText
                        ? this.props.defaultText
                        : 'Select Option'}
                    </Text>
                  )}
                </View>
              </View>
            )}
            <View style={{justifyContent: 'center'}}>
              {this.props.showCaret && (
                <Icon
                  name={
                    this.props.caretIcon ? this.props.caretIcon : 'caret-down'
                  }
                  style={[styles.dropdownLabel, this.props.itemStyle]}
                />
              )}
            </View>
          </View>
        </TouchableOpacity>
        {/* dropdown */}

        {/* list */}
        {this.state.isListVisible && (
          <Modal
            transparent={true}
            animationType="fade"
            onRequestClose={() => {
              this.closePopup();
            }}>
            <TouchableOpacity
              onPress={() => {
                this.closePopup();
              }}
              style={styles.mainContainer}>
              <TouchableWithoutFeedback>
                <View style={[styles.popupContainer, this.props.listStyle]}>
                  <View
                    style={[
                      styles.listItem,
                      {
                        borderBottomWidth: 1,
                        borderBottomColor: '#e5e5e5',
                        marginTop: 5,
                      },
                    ]}>
                    <View style={{flex: 1, justifyContent: 'center'}}>
                      <Text
                        style={[
                          styles.label,
                          this.props.listItemStyle,
                          {fontWeight: '700'},
                        ]}>
                        {this.props.defaultText
                          ? this.props.defaultText
                          : 'Select Option'}
                      </Text>
                    </View>
                    <TouchableOpacity
                      style={{justifyContent: 'center'}}
                      onPress={() => {
                        this.closePopup();
                      }}>
                      <Icon
                        name="times"
                        style={[styles.closeButton, this.props.listIconStyle]}
                      />
                    </TouchableOpacity>
                  </View>
                  <View style={{maxHeight: 200}}>
                    {this.props.multiSelect && (
                      <FlatList
                        data={this.props.Data}
                        maxToRenderPerBatch={200}
                        renderItem={this.renderMultiSelectList}
                        keyExtractor={(item, index) => index.toString()}
                      />
                    )}
                    {!this.props.multiSelect && (
                      <FlatList
                        keyboardShouldPersistTaps={'handled'}
                        data={this.props.Data}
                        maxToRenderPerBatch={200}
                        renderItem={this.renderList}
                        keyExtractor={(item, index) => index.toString()}
                      />
                    )}
                  </View>
                </View>
              </TouchableWithoutFeedback>
            </TouchableOpacity>
          </Modal>
        )}
        {/* list */}
      </View>
    );
  }
}
