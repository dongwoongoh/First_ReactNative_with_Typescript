import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import signIn from '../../screens/isLoggedOut/user/sign/signIn/sign.in';
import signUp from '../../screens/isLoggedOut/user/sign/signUp/sign.up';

const LoggedOutStack =
  createNativeStackNavigator<IsLoggedOutNavigateStackParamList>();

function IsLoggedOutNavigate() {
  return (
    <NavigationContainer>
      <LoggedOutStack.Navigator
        initialRouteName="signIn"
        screenOptions={{headerShown: false}}>
        <LoggedOutStack.Screen name="signIn" component={signIn} />
        <LoggedOutStack.Screen name="signUp" component={signUp} />
      </LoggedOutStack.Navigator>
    </NavigationContainer>
  );
}

export default IsLoggedOutNavigate;
