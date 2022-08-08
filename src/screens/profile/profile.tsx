import React from 'react';
import {Button, Text, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

type Props = NativeStackScreenProps<RootNavigateParamListType, 'profile'>;

function Profile({navigation}: Props) {
  return (
    <View>
      <Text>Profile</Text>
      <Button title="Login" onPress={() => navigation.navigate('signIn')} />
    </View>
  );
}

export default Profile;
