import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import lounge from '../../screens/isLoggedIn/lounge/lounge';
import rooms from '../../screens/isLoggedIn/rooms/rooms';
import profile from '../../screens/isLoggedIn/profile/profile';
import {NavigationContainer} from '@react-navigation/native';
import TopTabBar from '../../components/isLoggedIn/topTabBar/top.tab.bar';

const Top = createMaterialTopTabNavigator<IsLoggedInNavigateStackParamList>();

function IsLoggedInTopTabNavigate() {
  return (
    <NavigationContainer>
      <Top.Navigator
        tabBar={props => <TopTabBar {...props} />}
        tabBarPosition="top">
        <Top.Screen name="lounge" component={lounge} />
        <Top.Screen name="rooms" component={rooms} />
        <Top.Screen name="profile" component={profile} />
      </Top.Navigator>
    </NavigationContainer>
  );
}

export default IsLoggedInTopTabNavigate;
