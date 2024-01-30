import React from 'react';
import {Text, TouchableOpacity, View, StyleSheet, Image} from 'react-native';

const MenuOptions = () => {
  return (
    <View>
      <TouchableOpacity style={menuOptionsStyle.optionView}>
        <Image style={menuOptionsStyle.optionIcon}></Image>
        <Text style={menuOptionsStyle.optionTitle}>Login with Google</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MenuOptions;

const menuOptionsStyle = StyleSheet.create({
  optionView: {
    height: 80,
    backgroundColor: '#F6F9FA',
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionIcon: {
    height: 40,
    width: 40,
    backgroundColor: 'red',
  },
  optionTitle: {
    fontSize: 16,
    color: '#000000',
  },
});
