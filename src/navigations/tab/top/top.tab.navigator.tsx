import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import my from '../../../screens/my';
import lounge from '../../../screens/lounge';
import detail from '../../../screens/detail';

const Tab = createMaterialTopTabNavigator<RootStackParamList>();

function TopTabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="lounge" component={lounge} />
      <Tab.Screen name="detail" component={detail} />
      <Tab.Screen name="my" component={my} />
    </Tab.Navigator>
  );
}

export default TopTabNavigator;
