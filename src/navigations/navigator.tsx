import React from 'react';
import lounge from '../screens/lounge';
import detail from '../screens/detail';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator<RootStackParamList>();

function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="lounge"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="lounge" component={lounge} />
        <Stack.Screen name="detail" component={detail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;
