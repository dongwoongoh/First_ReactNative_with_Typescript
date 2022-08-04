import React from 'react';
import {Pressable, Text, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

type Props = NativeStackScreenProps<RootStackParamList, 'terminal'>;
type Category = 'lounge' | 'details' | 'my';

function Terminal({navigation}: Props): JSX.Element {
  const navigateHandler = (category: Category) => () =>
    navigation.replace('topTabNavigate', {category});
  return (
    <View>
      <Pressable onPress={() => navigation.navigate('')}>
        <Text>Lounge</Text>
      </Pressable>
      <Pressable onPress={() => navigation.navigate('')}>
        <Text>Details</Text>
      </Pressable>
      <Pressable onPress={() => navigation.navigate('')}>
        <Text>My</Text>
      </Pressable>
    </View>
  );
}

export default Terminal;
