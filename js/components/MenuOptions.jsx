import React from 'react';
import {Text, TouchableOpacity, View, StyleSheet, Image} from 'react-native';

const MenuOptions = props => {
  return (
    <View style={menuOptionsStyle.containerView}>
      <TouchableOpacity activeOpacity={0.8} style={menuOptionsStyle.optionView}>
        <View
          style={{
            width: '100%',
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <Image
            source={{uri: props.iconImg}}
            style={menuOptionsStyle.optionIcon}
          />
          <Text style={menuOptionsStyle.optionTitle}>{props.title}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default MenuOptions;

const menuOptionsStyle = StyleSheet.create({
  containerView: {
    marginHorizontal: 30,
    marginVertical: 5,
  },
  optionView: {
    height: 80,
    backgroundColor: '#F6F9FA',
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionIcon: {
    marginLeft: 30,
    height: 30,
    width: 30,
  },
  optionTitle: {
    marginLeft: 30,
    fontSize: 16,
    color: '#000000',
    fontFamily: 'CircularStd-Bold',
    fontWeight: '400',
  },
});
