import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Pressable, SafeAreaView, Text} from 'react-native';
import * as React from 'react';

function Lounge({
  navigation,
}: NativeStackScreenProps<RootStackParamList, 'lounge'>) {
  return (
    <SafeAreaView>
      <Pressable onPress={() => navigation.navigate('detail')}>
        <Text>Home Screen</Text>
      </Pressable>
    </SafeAreaView>
  );
}

export default Lounge;
