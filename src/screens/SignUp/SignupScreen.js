import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import styles from './style';
import Button from '../../controls/Button/Button';
import {CommonActions} from '@react-navigation/native';
import Images from '../../utils/Images';
import AppviewModel from '../../utils/AppviewModel';
import { showMessage, hideMessage } from "react-native-flash-message";
import { saveUserData } from '../../store/action';
import { connect } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

class SignupScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username:'',
      email: '',
      password: '',
      cnfrmPswrd:'',
      loading:false,
      nonceVal:''
    };
  }

  validation = async () => {
    const {
      username,
      email,
      password,
      cnfrmPswrd,
    } = this.state;
    var regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    if (username == "") {
      showMessage({
        message: "Please Enter Your Username",
        type: "danger",
      });
    } else if (email == "") {
      showMessage({
        message: "Please Enter Email Id",
        type: "danger",
      });
    } else if (email.match(regex) === false) {
      showMessage({
        message: "Please Enter valid  Email Id",
        type: "danger",
      });
    } else if (password == "") {
      showMessage({
        message: "Please Enter Your Password",
        type: "danger",
      });
    } else if (cnfrmPswrd == "") {
      showMessage({
        message: "Password Confirmation is Required",
        type: "danger",
      });
    } else if (cnfrmPswrd !== password) {
      showMessage({
        message: "Your Password and Confirm Password Not Match",
        type: "danger",
      });
    } else {
      this.nonceGenerate();
    }
  };

  nonceGenerate = () => {
    this.setState({loading:true})
    AppviewModel.sendApiCall(
      "api/get_nonce/?controller=user&method=register",
      null,
      "GET",
      (response) => {
          this.setState({nonceVal:response.nonce},()=>{
            this.doRegistration();
          })
      },
      (error) => {
        this.setState({loading:false})
      }
    )
  }

  doRegistration = () => {
    this.setState({ ...this.state });
    let payload = new FormData()
      payload.append("username", this.state.username)
      payload.append("email", this.state.email)
      payload.append("user_pass", this.state.password)
      payload.append("nonce", this.state.nonceVal)
      payload.append("display_name", this.state.username)

      AppviewModel.sendApiCall(
      "api/user/register",
      payload,
      null,
      (response) => {
        this.setState({loading: false});
        this.props.saveUserData(response)
        AsyncStorage.setItem("token",response.cookie); 
        this.props.navigation.dispatch(
          CommonActions.reset({
            index: 1,
            routes: [{name: 'appStack'}],
          }),
        )
      },
      (error) => {
        this.setState({loading:false})
        console.log("the error in registration page is ===>", error)
      },
      true
    );
  };

  render() {
    const {username, email, password, cnfrmPswrd} = this.state;
    return (
      <ImageBackground style={{flex: 1}} source={Images.bg}>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{flexGrow: 1}}>
            <KeyboardAvoidingView behavior={'padding'} style={{flex:1}}>
          <View style={styles.container}>
            <View style={styles.sectionImg}>
              <Image source={Images.login} style={styles.loginImg} />
            </View>
            <View style={styles.sectionForm}>
              <Text style={styles.label1}>Register</Text>
              <Text style={styles.label2}>
                Please enter your details below to continue
              </Text>
              <TextInput
                style={styles.inputText}
                placeholder="Username"
                placeholderTextColor={'grey'}
                value={username}
                onChangeText={value => this.setState({username: value})}
              />
              <TextInput
                style={styles.inputText}
                placeholder="Email"
                placeholderTextColor={'grey'}
                value={email}
                onChangeText={value => this.setState({email: value})}
              />
              <TextInput
                style={styles.inputText}
                placeholder="Password"
                placeholderTextColor={'grey'}
                secureTextEntry
                checVal
                value={password}
                onChangeText={value => this.setState({password: value})}
              />
              <TextInput
                style={styles.inputText}
                placeholder="Confirm Password"
                placeholderTextColor={'grey'}
                secureTextEntry
                checVal
                value={cnfrmPswrd}
                onChangeText={value => this.setState({cnfrmPswrd: value})}
              />              
              <Button
                style={styles.signinbtntxt}
                title="Sign Up"
                onPress={this.validation}
                loading={this.state.loading}
                loadingColor="#fff"
              />
              <View style={{alignSelf: 'center', flexDirection: 'row'}}>
                <View style={{justifyContent: 'center'}}>
                  <Text style={{marginVertical: 20}}>
                    Already have an account? |
                  </Text>
                </View>
                <View style={{justifyContent: 'center',marginLeft:5}}>
                  <TouchableOpacity
                    onPress={() =>
                      this.props.navigation.navigate('loginScreen')
                    }>
                    <Text style={styles.registerPassTxt}>Login</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
          </KeyboardAvoidingView>
        </ScrollView>
      </ImageBackground>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = dispatch => {
  return {
    saveUserData: data => {
      dispatch(saveUserData(data));
    },
  
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupScreen);
