import {StyleSheet} from 'react-native';
import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
    loader: {
        backgroundColor: '#e5e5e5',
      },
});
