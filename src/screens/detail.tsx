import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Pressable, SafeAreaView, Text} from 'react-native';

function Detail({
  navigation,
}: NativeStackScreenProps<RootStackParamList, 'detail'>) {
  return (
    <SafeAreaView>
      <Pressable onPress={() => navigation.navigate('lounge')}>
        <Text>Details Screen Message</Text>
      </Pressable>
    </SafeAreaView>
  );
}

export default Detail;
