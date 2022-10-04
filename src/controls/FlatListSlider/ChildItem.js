import React from 'react';
import {TouchableOpacity, Image, StyleSheet,Text} from 'react-native';
import AppConstants from '../../utils/AppConstants';

export default (ChildItem = ({
  item,
  style,
  onPress,
  index,
  imageKey,
  local,
  height
}) => {  
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => onPress(item)}>        
      <Image
        style={[styles.image, style, {height: height}]}
        source={local ? item[imageKey] : {uri: item[imageKey]}}
      />
    </TouchableOpacity>
  );
});

const styles = StyleSheet.create({
  container: {},
  image: {
    height: 230,
    resizeMode: 'stretch',
  },
});