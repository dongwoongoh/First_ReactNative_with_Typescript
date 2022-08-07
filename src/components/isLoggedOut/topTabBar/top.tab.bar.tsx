import React from 'react';
import {
  Animated,
  SafeAreaView,
  StyleProp,
  StyleSheet,
  TextStyle,
  TouchableOpacity,
} from 'react-native';
import {MaterialTopTabBarProps} from '@react-navigation/material-top-tabs';

function TopTabBar({state, descriptors}: MaterialTopTabBarProps) {
  return (
    <SafeAreaView style={{flexDirection: 'row'}}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        let label: string;
        let focusStyle: StyleProp<TextStyle>;
        const isFocused = state.index === index;

        switch (route.name) {
          case 'firstFields':
            label = 'first';
            focusStyle = isFocused && styles.label_color;
            break;
          default:
            label = 'secondFields';
            focusStyle = isFocused && styles.label_color;
            break;
        }

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            style={{flex: 1}}>
            <Animated.Text style={focusStyle}>{label}</Animated.Text>
          </TouchableOpacity>
        );
      })}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  label_color: {
    fontWeight: 'bold',
  },
});

export default TopTabBar;
