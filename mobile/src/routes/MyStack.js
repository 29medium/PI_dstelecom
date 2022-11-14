import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Login from '../pages/Login';
import AR from '../pages/AR';
import Home from '../pages/Home';
import Notes from '../pages/Notes';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="AR" component={AR} />
        <Stack.Screen name="Notes" component={Notes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;