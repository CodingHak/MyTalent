import React,{Component} from 'react';
import {View,Text, Image, TouchableOpacity,Platform, StatusBar} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Colors from '../../utils/Colors';
import Images from '../../utils/Images';
import styles from './style';
import {withNavigation} from '@react-navigation/compat';
import { CommonActions } from '@react-navigation/native';

 class CustomHeader extends Component {
    constructor(props){
        super(props);
    }
    render(){
      const {headertxt, isSelected} = this.props;
        return (
          <View style={styles.container}>                        
            <View style={styles.header}>
              {
                this.props.title==="MyTalent"?
                <TouchableOpacity style={styles.searchContainer} onPress={()=>{
                  this.props.navigation.dispatch(
                    CommonActions.reset({
                      index: 1,
                      routes: [{ name: 'appStack' }],
                    }),
                  )
                  }}>
                <Image source={Images.back} style={styles.logo} />
                </TouchableOpacity>
                :
                <TouchableOpacity style={styles.searchContainer} 
              onPress={() => this.props.navigation.goBack(null)}>
              <Image source={Images.back} style={styles.logo} />
              </TouchableOpacity>
              }
              
            <Text style={styles.title}>{headertxt}</Text>
            </View>
          </View>
        );
    }
}
export default withNavigation(CustomHeader);