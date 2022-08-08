import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import lounge from '../screens/lounge/lounge';
import friends from '../screens/friends/friends';
import rooms from '../screens/rooms/rooms';
import profile from '../screens/profile/profile';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import MainTopTabBar from '../components/topTabBar/main.top.tab.bar';
import signIn from '../screens/auth/signIn/sign.in';
import signUp from '../screens/auth/signUp/sign.up';

const RoutesNavigateStack =
  createMaterialTopTabNavigator<RootNavigateParamListType>();

function Routes() {
  return (
    <NavigationContainer>
      <RoutesNavigateStack.Navigator
        initialRouteName="lounge"
        tabBar={props => <MainTopTabBar {...props} />}>
        <RoutesNavigateStack.Screen name="lounge" component={lounge} />
        <RoutesNavigateStack.Screen name="friends" component={friends} />
        <RoutesNavigateStack.Screen name="rooms" component={rooms} />
        <RoutesNavigateStack.Screen name="profile" component={profile} />
      </RoutesNavigateStack.Navigator>

      <RoutesNavigateStack.Group>
        <RoutesNavigateStack.Screen name="signIn" component={signIn} />
        <RoutesNavigateStack.Screen name="signUp" component={signUp} />
      </RoutesNavigateStack.Group>
    </NavigationContainer>
  );
}

export default Routes;
