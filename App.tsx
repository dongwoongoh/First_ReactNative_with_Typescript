import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from 'react-native-splash-screen';
import detail from './src/screens/detail';
import lounge from './src/screens/lounge';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  React.useEffect(() => {
    SplashScreen.hide();
  }, []);
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
