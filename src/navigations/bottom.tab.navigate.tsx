import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import lounge from '../screens/lounge/lounge';
import rooms from '../screens/rooms/rooms';
import profile from '../screens/profile/profile';

const Bottom = createMaterialTopTabNavigator<RootNavigateStackParamList>();

function BottomTabNavigate() {
  return (
    <Bottom.Navigator tabBarPosition="bottom">
      <Bottom.Screen name="lounge" component={lounge} />
      <Bottom.Screen name="rooms" component={rooms} />
      <Bottom.Screen name="profile" component={profile} />
    </Bottom.Navigator>
  );
}

export default BottomTabNavigate;
