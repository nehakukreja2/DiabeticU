import React, {useState} from 'react';
import {View, Text, SafeAreaView, StyleSheet, Image} from 'react-native';
import BackButton from '../components/BackButton';
import CustomTextInput from '../components/CustomTextInput';
import PhoneNumberTextField from '../components/PhoneNumberTextField';
import CheckBox from 'react-native-check-box';
import ThemeButton from '../components/ThemeButton';
import CommonStyles from '../utils/commonStyles';

const Signup = ({navigation}) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const backTapped = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={signUpScreen.safeAreaView}>
      <View style={signUpScreen.containerView}>
        <View style={signUpScreen.backButtonContainerView}>
          <BackButton backTapped={backTapped} />
        </View>
        <View style={{paddingTop: 40}}>
          <Text style={CommonStyles.headingText}>Create your Profile</Text>
          <View style={{paddingTop: 12}}>
            <Text style={CommonStyles.subHeadingText}>
              Complete your profile to unlock the full potential of the app and
              personalize your experience
            </Text>
          </View>
        </View>
        <View style={{marginTop: 40}}>
          <View style={{paddingBottom: 24}}>
            <CustomTextInput floatingText="Name" />
          </View>
          <View style={{paddingBottom: 24}}>
            <PhoneNumberTextField />
          </View>
          <View style={{paddingBottom: 24}}>
            <CustomTextInput floatingText="Email ID" />
          </View>
          <CustomTextInput floatingText="Password" isPassword={true} />
        </View>
        <View style={{position: 'absolute', bottom: 0, left: 0, right: 0}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <CheckBox
              style={{width: 18, height: 18}}
              isChecked={toggleCheckBox}
              onClick={() => {
                setToggleCheckBox(!toggleCheckBox);
              }}
              unCheckedImage={
                <Image
                  source={require('../assets/images/CheckBoxUnchecked/CheckBoxUnchecked.png')}
                  style={{backgroundColor: 'white', resizeMode: 'cover'}}
                />
              }
              checkedImage={
                <Image
                  source={require('/Users/admin/Desktop/DiabeticU/js/assets/images/CheckBoxChecked/CheckBoxChecked.png')}
                  style={{
                    backgroundColor: '#EE28A9',
                    padding: 10,
                    resizeMode: 'center',
                    borderRadius: 4,
                  }}
                />
              }
            />
            <Text
              style={{
                paddingLeft: 10,
                fontSize: 16,
                color: '#9CA0AB',
                fontFamily: 'CircularStd-Medium',
              }}>
              I agree to the{' '}
            </Text>
            <Text
              style={{
                color: '#000080',
                fontSize: 16,
                fontFamily: 'CircularStd-Medium',
              }}>
              terms of use.
            </Text>
          </View>
          <View style={{marginTop: 28}}>
            <ThemeButton title="Continue" />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Signup;

const signUpScreen = StyleSheet.create({
  safeAreaView: {
    backgroundColor: 'white',
    flex: 1,
  },
  containerView: {
    marginHorizontal: 30,
    paddingTop: 16,
    flex: 1,
  },
  backButtonContainerView: {
    marginTop: 16,
  },
  createYourProfile: {
    fontSize: 28,
    fontFamily: 'CircularStd-Bold',
    color: '#0B152D',
    marginTop: 40,
  },
  completeYourProfile: {
    marginTop: 12,
    fontWeight: '400',
    fontFamily: 'CircularStd-Light',
    color: '#9CA0AB',
  },
});
