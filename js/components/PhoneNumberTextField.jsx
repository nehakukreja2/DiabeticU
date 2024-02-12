import React from 'react';
import {View, TouchableOpacity, Image, Text, StyleSheet} from 'react-native';
import CustomTextInput from './CustomTextInput';

const PhoneNumberTextField = () => {
  return (
    <View style={phoneNumberTextField.containerView}>
      <View style={phoneNumberTextField.dropDownContainer}>
        <TouchableOpacity style={phoneNumberTextField.dropDownTouchableView}>
          <View style={phoneNumberTextField.imageContainer}>
            <Image
              style={phoneNumberTextField.countryFlag}
              source={{
                uri: 'https://cdn.pixabay.com/photo/2017/01/07/16/55/usa-1960922_640.jpg',
              }}
            />
          </View>
          <Text style={phoneNumberTextField.countryCodeText}>+1</Text>
          <Image
            source={require('../assets/images/DropDownArrow/DropDownArrow.png')}
          />
        </TouchableOpacity>
      </View>
      <View style={{width: 245}}>
        <CustomTextInput floatingText="Phone Number" />
      </View>
    </View>
  );
};

export default PhoneNumberTextField;

const phoneNumberTextField = StyleSheet.create({
  containerView: {
    flexDirection: 'row',
  },
  dropDownContainer: {
    paddingRight: 12,
  },
  dropDownTouchableView: {
    height: 60,
    borderWidth: 1,
    borderColor: '#E7EBF3',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  imageContainer: {
    paddingRight: 8,
  },
  countryFlag: {
    width: 22,
    height: 22,
    borderRadius: 11,
  },
  countryCodeText: {
    paddingRight: 8,
  },
});
