import React from 'react';
import {MaterialTopTabBarProps} from '@react-navigation/material-top-tabs';
import {Animated, SafeAreaView, TouchableOpacity} from 'react-native';

function TopTabBar({state, descriptors, navigation}: MaterialTopTabBarProps) {
  return (
    <SafeAreaView style={{flexDirection: 'row'}}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        let label: string;
        const isFocused = state.index === index;

        switch (route.name) {
          case 'lounge':
            label = '라운지';
            break;
          case 'rooms':
            label = '채팅방';
            break;
          default:
            label = '프로필';
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
            key={index}
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

export default TopTabBar;
