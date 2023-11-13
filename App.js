import React from 'react';
import { FlatList, StyleSheet, Text, View, Button } from 'react-native';
import { Provider } from 'react-redux';
import store from './components/StoreAndReducer/Store.js';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Cart from './components/Cart/Cart.js';
import Home from './components/Home.js/Home.js';
import Login from './components/Login/Login.js';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Cart" component={Cart} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
