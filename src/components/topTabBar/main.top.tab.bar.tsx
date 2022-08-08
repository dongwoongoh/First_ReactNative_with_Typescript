import React from 'react';
import {Animated, SafeAreaView, TouchableOpacity} from 'react-native';
import {MaterialTopTabBarProps} from '@react-navigation/material-top-tabs';

function MainTopTabBar({
  state,
  navigation,
  descriptors,
}: MaterialTopTabBarProps) {
  return (
    <SafeAreaView style={{flexDirection: 'row'}}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        let label: string;
        const isFocused = state.index === index;

        switch (route.name) {
          case 'lounge':
            label = 'lounge';
            break;
          case 'friends':
            label = 'friends';
            break;
          case 'rooms':
            label = 'rooms';
            break;
          default:
            label = 'profile';
            break;
        }

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // @ts-ignore
            navigation.navigate({name: route.name, merge: true});
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{flex: 1}}>
            <Animated.Text>{label}</Animated.Text>
          </TouchableOpacity>
        );
      })}
    </SafeAreaView>
  );
}

export default MainTopTabBar;
