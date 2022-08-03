import React from 'react';
import {Pressable, SafeAreaView, Text} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

function My({navigation}: NativeStackScreenProps<RootStackParamList, 'my'>) {
  return (
    <SafeAreaView>
      <Pressable onPress={() => navigation.navigate('lounge')}>
        <Text>lounge</Text>
      </Pressable>
    </SafeAreaView>
  );
}

export default My;
