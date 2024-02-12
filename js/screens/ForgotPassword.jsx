import React from 'react';
import {
  View,
  Text,
  Image,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import BackButton from '../components/BackButton';
import AppImages from '../assets/images';
import CommonStyles from '../utils/commonStyles';

const ForgotPassword = ({navigation}) => {
  const backTapped = () => {
    navigation.goBack();
  };
  return (
    <SafeAreaView style={forgotPassword.safeAreaView}>
      <View style={{marginHorizontal: 30, marginTop: 16}}>
        <BackButton backTapped={backTapped} />
        <View style={{marginTop: 40}}>
          <Text style={CommonStyles.headingText}>Forgot Password</Text>
          <Text style={[CommonStyles.subHeadingText, {marginTop: 12}]}>
            Please select your reset mechanism to recover your password
          </Text>
        </View>
        <View style={forgotPassword.flexContainerView}>
          <View style={forgotPassword.greyContainer}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('ForgotPasswordEnterDetails', {
                  description:
                    'Please enter your email Address to reset your password',
                  floatingText: 'Email Address',
                });
              }}>
              <Image
                style={forgotPassword.forgotPasswordImg}
                source={AppImages.forgotPasswordEmail}
              />
              <Text style={forgotPassword.titleText}>Use Email ID</Text>
              <Text style={forgotPassword.descriptionText}>
                Send OTP on your email to reset your password
              </Text>
            </TouchableOpacity>
          </View>
          <View style={forgotPassword.greyContainer}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('ForgotPasswordEnterDetails', {
                  description:
                    'Please enter the credentials of account you want to reset password for',
                  floatingText: 'Phone Number',
                });
              }}>
              <Image
                style={forgotPassword.forgotPasswordImg}
                source={AppImages.forgotPasswordPhoneNo}
              />
              <Text style={forgotPassword.titleText}>Use Phone Number</Text>
              <Text style={forgotPassword.descriptionText}>
                Send OTP code to registered number to reset your password
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ForgotPassword;

const forgotPassword = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: 'white',
  },
  flexContainerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 56,
  },
  greyContainer: {
    backgroundColor: '#F6F9FA',
    paddingVertical: 24,
    paddingLeft: 16,
    width: '48%',
    borderRadius: 16,
    paddingRight: 10,
  },
  forgotPasswordImg: {
    marginTop: 16,
  },
  titleText: {
    fontFamily: 'CircularStd-Light',
    fontWeight: '500',
    fontSize: 16,
    color: '#0B152D',
    marginTop: 28,
  },
  descriptionText: {
    marginTop: 8,
    color: 'rgba(11, 21, 45, 0.6)',
    fontSize: 14,
    fontFamily: 'CircularStd-Light',
  },
});
