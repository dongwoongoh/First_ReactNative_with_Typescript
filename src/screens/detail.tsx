import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Pressable, Text, View} from 'react-native';

function Detail({
  navigation,
}: NativeStackScreenProps<RootStackParamList, 'detail'>) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Pressable onPress={() => navigation.navigate('lounge')}>
        <Text>Details Screen Message</Text>
      </Pressable>
    </View>
  );
}

export default Detail;
