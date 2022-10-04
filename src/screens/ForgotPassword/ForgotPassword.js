import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  ScrollView,
  ImageBackground,
} from 'react-native';
import styles from './style';
import Button from '../../controls/Button/Button';
import {CommonActions} from '@react-navigation/native';
import Images from '../../utils/Images';
import { showMessage } from 'react-native-flash-message';
import AppviewModel from '../../utils/AppviewModel';

export default class ForgotPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      isLoading: false
    };
  }

  componentDidMount = async () => {};

  validation = () => {
    const {email} = this.state
    var regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if(email == ''){
      showMessage({
        message: "Please Enter Email Id",
        type: "danger",
      });
    }else if(email.match(regex) === false){
      showMessage({
        message: "Please Enter valid Email Id",
        type: "danger",
      });
    }else{
      this.forgotPassword()
    }
  }

  forgotPassword = () => {
    this.setState({ isLoading: true })
    let form = new FormData()
    form.append("login", this.state.email)
    AppviewModel.sendApiCall(
      `api/forgot_password.php`,
      form,
      null,
      (response)=>{
        this.setState({isLoading:false})
        if(response.code == "200"){
          alert(response.msg)
          this.props.navigation.dispatch(
            CommonActions.reset({
              index:1,
              routes: [{name: 'loginScreen'}]
            })
          )
        }else{
          this.setState({isLoading:false},()=>{alert(response.msg)})
        }
      },
      (error)=>{
        // console.log("the error issue is ===>",error)
      },
      true
    )
  }

  render() {
    const {email} = this.state;
    return (
      <ImageBackground style={{flex: 1}} source={Images.bg}>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{flexGrow: 1}}>
          <View style={styles.container}>            
            <View style={styles.sectionForm}>
              <Text style={styles.label1}>Forgot Password?</Text>
              <Image source={Images.forget} style={styles.loginImg} />
              <Text style={[styles.label1,{fontSize:14}]}>Enter the registered email address</Text>
              <Text style={styles.label2}>
                please enter your details below to continue
              </Text>
              <TextInput
                style={styles.inputText}
                placeholder="Email Address"
                placeholderTextColor={'grey'}
                value={email}
                onChangeText={value => this.setState({email: value})}
              />                            
              <Button
                style={styles.signinbtntxt}
                title="Send"
                onPress={()=>{this.validation()}}
                loading={this.state.isLoading}
                loadingColor="#fff"
              />              
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    );
  }
}
