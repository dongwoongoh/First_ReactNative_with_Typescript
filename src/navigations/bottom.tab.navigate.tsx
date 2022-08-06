import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import lounge from '../screens/lounge/lounge';
import rooms from '../screens/rooms/rooms';
import profile from '../screens/profile/profile';
import {NavigationContainer} from '@react-navigation/native';
import TopTabBar from '../components/topTabBar/top.tab.bar';

const Bottom = createMaterialTopTabNavigator<RootNavigateStackParamList>();

function BottomTabNavigate() {
  return (
    <NavigationContainer>
      <Bottom.Navigator
        tabBar={props => <TopTabBar {...props} />}
        tabBarPosition="top">
        <Bottom.Screen name="lounge" component={lounge} />
        <Bottom.Screen name="rooms" component={rooms} />
        <Bottom.Screen name="profile" component={profile} />
      </Bottom.Navigator>
    </NavigationContainer>
  );
}

export default BottomTabNavigate;
