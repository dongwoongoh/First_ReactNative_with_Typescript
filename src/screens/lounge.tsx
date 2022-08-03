import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Pressable, Text, View} from 'react-native';
import * as React from 'react';

function Lounge({
  navigation,
}: NativeStackScreenProps<RootStackParamList, 'lounge'>) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Pressable onPress={() => navigation.navigate('detail')}>
        <Text>Home Screen</Text>
      </Pressable>
    </View>
  );
}

export default Lounge;
