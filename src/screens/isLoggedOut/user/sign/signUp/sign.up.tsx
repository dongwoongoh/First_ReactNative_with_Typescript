import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import signUpFirstFields from './firstFields/sign.up.first.fields';
import signUpSecondFields from './secondFields/sign.up.second.fields';
import TopTabBar from '../../../../../components/isLoggedOut/topTabBar/top.tab.bar';

const Tab = createMaterialTopTabNavigator<SignUpTopTabStackParamList>();

function SignUp() {
  return (
    <Tab.Navigator
      initialRouteName="firstFields"
      tabBar={props => <TopTabBar {...props} />}>
      <Tab.Screen name="firstFields" component={signUpFirstFields} />
      <Tab.Screen name="secondFields" component={signUpSecondFields} />
    </Tab.Navigator>
  );
}

export default SignUp;
