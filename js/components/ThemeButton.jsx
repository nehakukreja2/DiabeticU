import React from 'react';
import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';

const ThemeButton = props => {
  return (
    <View style={!props.bgColor && themeButtonStyle.buttonShadow}>
      <TouchableOpacity
        onPress={props.onPress}
        activeOpacity={0.8}
        style={[
          themeButtonStyle.themeButton,
          props.bgColor && {
            backgroundColor: props.bgColor,
            borderColor: '#DCDCDC',
          },
        ]}>
        <Text
          style={[
            themeButtonStyle.titleText,
            props.textColor && {
              color: props.textColor || '#FFFFFF',
              fontFamily: 'CircularStd-Medium',
            },
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
    borderWidth: 1,
    borderColor: '#7575BA',
  },
  titleText: {
    fontSize: 16,
    color: '#FFFFFF',
    fontFamily: 'CircularStd-Bold',
  },
  buttonShadow: {
    backgroundColor: 'white',
    borderRadius: 16,
    shadowColor: '#7575BA',
    shadowOffset: {width: 2, height: 10},
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
});
