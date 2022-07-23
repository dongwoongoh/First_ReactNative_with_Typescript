import * as React from 'react';
import {Pressable, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';

type RootStackParamList = {
  Home: undefined;
  Details: {
    message: string;
  };
};

function HomeScreen({
  navigation,
}: NativeStackScreenProps<RootStackParamList, 'Home'>) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Pressable
        onPress={() =>
          navigation.navigate('Details', {message: 'Hello World!'})
        }>
        <Text>Home Screen</Text>
      </Pressable>
    </View>
  );
}

function DetailsScreen({
  route,
  navigation,
}: NativeStackScreenProps<RootStackParamList, 'Details'>) {
  const {message} = route.params;
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Pressable onPress={() => navigation.navigate('Home')}>
        <Text>Details Screen Message: {message}</Text>
      </Pressable>
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {backgroundColor: '#ff9900'},
          headerTitleStyle: {color: '#ffff'},
        }}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Robby',
          }}
        />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
