import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import styles from './style';
import Button from '../../controls/Button/Button';
import {CommonActions} from '@react-navigation/native';
import Images from '../../utils/Images';

export default class VerifyAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  componentDidMount = async () => {};

  render() {
    const {email, password} = this.state;
    return (
      <ImageBackground style={{flex: 1}} source={Images.bg}>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{flexGrow: 1}}>
          <View style={styles.container}>            
            <View style={styles.sectionForm}>
              <Text style={styles.label1}>Verify Account</Text>
              <Image source={Images.verify} style={styles.loginImg} />            
              <Text style={styles.label2}>
                Enter the verification code we just sent to your email address.
              </Text>
              <TextInput
                style={styles.inputText}
                placeholder="Email Address"
                placeholderTextColor={'grey'}
                value={email}
                onChangeText={value => this.setState({email: value})}
              />  
              <View style={{alignSelf: 'center', flexDirection: 'row'}}>
                <View style={{justifyContent: 'center'}}>
                  <Text style={{marginVertical: 20}}>
                    Don't recieve a code? |
                  </Text>
                </View>
                <View style={{justifyContent: 'center',marginLeft:5}}>
                  <TouchableOpacity>
                    <Text style={styles.registerPassTxt}>Resend</Text>
                  </TouchableOpacity>
                </View>
              </View>                          
              <Button
                style={styles.signinbtntxt}
                title="Verify"
                onPress={() =>
                  this.props.navigation.dispatch(
                    CommonActions.reset({
                      index: 1,
                      routes: [{name: 'appStack'}],
                    }),
                  )
                }
              />              
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    );
  }
}
