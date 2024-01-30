import React from 'react';
import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import BottomSheet from './BottomSheet';

const ThemeButton = props => {
  return (
    <View style={themeButtonStyle.buttonShadow}>
      <TouchableOpacity
        onPress={() => {
          console.log('Press');
          return <BottomSheet />;
        }}
        activeOpacity={0.8}
        style={[
          themeButtonStyle.themeButton,
          {backgroundColor: props.bgColor || '#000080'},
        ]}>
        <Text
          style={[
            themeButtonStyle.titleText,
            {color: props.textColor || '#FFFFFF'},
          ]}>
          {props.title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ThemeButton;

const themeButtonStyle = StyleSheet.create({
  themeButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000080',
    height: 60,
    borderRadius: 16,
  },
  titleText: {
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: 700,
  },
  buttonShadow: {
    shadowColor: '#7575BA',
    shadowOffset: {width: 2, height: 10},
    shadowOpacity: 0.3,
    shadowRadius: 3,
    marginHorizontal: 20,
  },
});
