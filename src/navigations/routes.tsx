import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import lounge from '../screens/lounge/lounge';

const RoutesNavigateStack =
  createNativeStackNavigator<RootNavigateParamListType>();

function Routes() {
  return (
    <NavigationContainer>
      <RoutesNavigateStack.Navigator initialRouteName="lounge">
        <RoutesNavigateStack.Screen name="lounge" component={lounge} />
      </RoutesNavigateStack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
