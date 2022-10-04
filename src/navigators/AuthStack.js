import React,{ Component } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/Login/Login';
import Signup from '../screens/SignUp/SignupScreen';
import ForgetPassword from '../screens/ForgotPassword/ForgotPassword';
import VerifyAccount from '../screens/VerifyAccount/VerifyAccount';

const Stack = createNativeStackNavigator();
function authStack() {
    return (
        <Stack.Navigator initialRouteName="loginScreen" headerMode="screen">
            <Stack.Screen name="loginScreen" component={Login} options={{title:'',headerShown:false}} />
            <Stack.Screen name="signupScreen" component={Signup} options={{title:'',headerShown:false}} />
            <Stack.Screen name="forgetPasswordScreen" component={ForgetPassword} options={{title:'',headerShown:false}} />
            <Stack.Screen name="verifyAccountScreen" component={VerifyAccount} options={{title:'',headerShown:false}} />
        </Stack.Navigator>
    )
}

export default authStack;
