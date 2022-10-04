import React, { Component } from 'react';
import 'react-native-gesture-handler';
import { gestureHandlerRootHOC, GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from './screens/Splash/Splash';
import AppStack from './navigators/AppStack';
// import AuthStack from './navigators/AuthStack';

import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { store, persistor } from '../src/store';
import { navigationRef } from './RootNavigation';
import FlashMessage from "react-native-flash-message";


const Stack = createNativeStackNavigator();

function App() {

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NavigationContainer ref={navigationRef}>
          <Stack.Navigator initialRouteName="splashScreen" headerMode="screen">
            <Stack.Screen
              name="splashScreen"
              component={Splash}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="appStack"
              component={AppStack}
              options={{ headerShown: false }}
            />
            {/* <Stack.Screen
              name="authStack"
              component={AuthStack}
              options={{ headerShown: false }}
            /> */}

          </Stack.Navigator>
        </NavigationContainer>
        <FlashMessage position="top" icon="auto" style={{ borderBottomLeftRadius: 15, borderBottomRightRadius: 15 }} />
      </PersistGate>
    </Provider>
    </GestureHandlerRootView>
  );
}

export default App;