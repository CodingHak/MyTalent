import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
  },
  row: {flex: 1, justifyContent: 'center'},
  progressSection: {flexDirection: 'row'},
  step: {justifyContent: 'center', flex: 1},
  stepMiddle: {justifyContent: 'center'},
  line: {width: '100%', height: 1, backgroundColor: '#b5b2b2'},
  label: {fontSize: 12, textAlign: 'center'},
  icon: {width: 20, height: 20, resizeMode: 'contain'},
});
