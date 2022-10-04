import React,{ Component } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeTabNavigator from './HomeTabNavigator';
import About from '../screens/About/AboutScreen';


const Stack = createNativeStackNavigator();
function AppStack() {
    return (
        <Stack.Navigator  initialRouteName="homeTabNavigator" headerMode="screen">
            <Stack.Screen name="homeTabNavigator" component={HomeTabNavigator} options={{title:'',headerShown:false,}} />
             <Stack.Screen name="About" component={About} options={{title:'',headerShown:false}} />
            

        </Stack.Navigator>
    )
}

export default AppStack;
