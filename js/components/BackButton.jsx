import React from 'react';
import {View, TouchableOpacity, Image, StyleSheet} from 'react-native';
import AppImages from '../assets/images';

const BackButton = props => {
  return (
    <View>
      <TouchableOpacity
        style={backButton.backButtonStyle}
        activeOpacity={0.8}
        onPress={props.backTapped}>
        <Image source={AppImages.backArrow} />
      </TouchableOpacity>
    </View>
  );
};

export default BackButton;

const backButton = StyleSheet.create({
  backButtonStyle: {
    width: 48,
    height: 48,
    backgroundColor: '#F6F6F6',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
