import React, {useState} from 'react';
import {TextInput, View, StyleSheet} from 'react-native';

const OtpTextFields = props => {
  console.log(props.length);
  const [otp, setOtp] = useState(Array.from({length: props.length}, () => ''));
  console.log(otp);

  const handleOtpChange = (value, index) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    console.log(value);
    console.log(index);
    if (value && index < newOtp.length - 1) {
      this.inputs[index + 1].focus();
    }
  };
  const inputs = [];
  return (
    <View style={otpTextInput.containerView}>
      {otp.map((digit, index) => (
        <TextInput
          key={index}
          style={otpTextInput.textInputFields}
          maxLength={1}
          keyboardType="numeric"
          ref={input => {
            inputs[index] = input;
          }}
          value={digit}
          onChangeText={value => handleOtpChange(value, index)}
        />
      ))}
    </View>
  );
};

export default OtpTextFields;

const otpTextInput = StyleSheet.create({
  containerView: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-between',
    marginHorizontal: 20,
  },
  textInputFields: {
    height: 60,
    width: 60,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#E7EBF3',
  },
});
