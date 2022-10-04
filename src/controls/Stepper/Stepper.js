import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import Images from '../../utils/Images';
import styles from './style';

export default class Stepper extends Component {
  render() {
    return (
      <View style={styles.container}>
        {this.props.data.map((item, index) => {
          return (
            <View key={index} style={styles.row}>
              <View style={styles.progressSection}>
                <View style={styles.step}>
                  {index != 0 && <View style={styles.line} />}
                </View>
                <View style={styles.stepMiddle}>
                  {item[this.props.selectedKey]=="completed"&&
                   <Image
                   source={Images.check}
                   style={styles.icon}
                 />}
                  {item[this.props.selectedKey]!="completed"&&
                  <Image
                    source={item[this.props.selectedKey] ? Images.point1 : Images.point2}
                    style={styles.icon}
                  />
        }
                </View>
                <View style={styles.step}>
                  {index != this.props.data.length - 1 && (
                    <View style={styles.line} />
                  )}
                </View>
              </View>
              <View style={{marginTop: 5}}>
                <Text numberOfLines={1} style={styles.label}>
                  {item[this.props.labelKey]}
                </Text>
              </View>
            </View>
          );
        })}
      </View>
    );
  }
}
