import React, { Component } from 'react';
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
import { CommonActions, useNavigation } from '@react-navigation/native';
import Images from '../../utils/Images';
import { saveUserData } from '../../store/action';
import { connect } from "react-redux";
import AppviewModel from '../../utils/AppviewModel';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { showMessage, hideMessage } from "react-native-flash-message";
import Icon from '../../controls/IconNB';
import CustomHeader from '../CustomHeader/CustomHeader';


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      isLogin: false,
      loading: false
    };
  }



  validate_field = () => {
    const { email, password } = this.state;
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email.trim() == "") {
      showMessage({
        message: "Please Enter Email Id...",
        type: "danger",
      });
    } else if (reg.test(email.trim()) === false) {
      showMessage({
        message: "Please Enter Valid Email Id...",
        type: "danger",
      });
    } else if (password == "") {
      showMessage({
        message: "Please Enter Your Password...",
        type: "danger",
      });
    } else {
      this.login();
    }
  };


  login = () => {

    this.setState({ loading: true });
    let form = new FormData()
    form.append("username", this.state.email)
    form.append("password", this.state.password)
    
    AppviewModel.sendApiCall(
      `api/auth/generate_auth_cookie`,
      form,
      null,
      response => {
        this.setState({ loading: false });
        this.props.saveUserData(response.user)
        this.props.navigation.dispatch(
          CommonActions.reset({
            index: 1,
            routes: [{ name: 'appStack' }],
          }),
        )
      },
      error => {
        this.setState({ loading: false });
      },
      true
    );
  };

  render() {
    const { email, password } = this.state;
    return (
      <ImageBackground style={{ flex: 1 }} source={Images.bg}>

        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ flexGrow: 1 }}>
          <KeyboardAvoidingView style={{ flex: 1 }} behavior={'padding'}>
            <View style={styles.container}>

              <CustomHeader title="MyTalent" />
              <View style={styles.sectionImg}>
                <Image source={Images.login} style={styles.loginImg} />
              </View>
              <View style={styles.sectionForm}>
                <Text style={styles.label1}>Login Now</Text>
                <Text style={styles.label2}>
                  please enter your details below to continue
                </Text>
                <TextInput
                  style={styles.inputText}
                  placeholder="Email"
                  placeholderTextColor={'grey'}
                  value={email}
                  onChangeText={value => this.setState({ email: value })}
                />
                <TextInput
                  style={styles.inputText}
                  placeholder="Password"
                  placeholderTextColor={'grey'}
                  secureTextEntry
                  checVal
                  value={password}
                  onChangeText={value => this.setState({ password: value })}
                />
                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate('forgetPasswordScreen')
                  }
                  style={{ alignSelf: 'flex-end' }}>
                  <Text style={styles.forgetPassTxt}>Forgot password?</Text>
                </TouchableOpacity>
                <Button
                  style={styles.signinbtntxt}
                  title="Login"
                  onPress={() => this.validate_field()}
                  loading={this.state.loading}
                  loadingColor="#fff"
                />
                <View style={{ alignSelf: 'center', flexDirection: 'row' }}>
                  <View style={{ justifyContent: 'center' }}>
                    <Text style={{ marginVertical: 20 }}>
                      Don't have an account? |
                    </Text>
                  </View>
                  <View style={{ justifyContent: 'center', marginLeft: 5 }}>
                    <TouchableOpacity
                      onPress={() =>
                        this.props.navigation.navigate('signupScreen')
                      }>
                      <Text style={styles.registerPassTxt}>Register</Text>
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

export default connect(mapStateToProps, mapDispatchToProps)(Login);