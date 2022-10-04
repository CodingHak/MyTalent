import { StyleSheet } from 'react-native';
import Colors from '../../utils/Colors';
import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.themeColor6,
    marginBottom: '18%'
  },
  
});
