import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer} from '@react-navigation/native';
import { Home } from '../screens/Home';
import { LoginUser } from '../screens/Login';
import { Register } from '../screens/Register';

const {Navigator, Screen} = createStackNavigator();

export default function AppNavigation() {
    return (
        <NavigationContainer>
        <Navigator initialRouteName="Login"
        screenOptions={{
            headerShown: false
          }}>
            <Screen name="Login" component={LoginUser}></Screen>
            <Screen name="Home" component={Home}></Screen>
            <Screen name="Register" component={Register}></Screen>
        </Navigator>
    </NavigationContainer>
    )
}

