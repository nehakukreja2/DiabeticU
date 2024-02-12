import React, {useRef} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import CustomTextInput from '../components/CustomTextInput';
import LinearGradient from 'react-native-linear-gradient';
import ThemeButton from '../components/ThemeButton';
import AppImages from '../assets/images';
import CommonStyles from '../utils/commonStyles';

const Login = ({navigation}) => {
  const textInputRef = useRef(null);

  const handleTapOutside = () => {
    Keyboard.dismiss();
    if (textInputRef.current) {
      textInputRef.current.blur();
    }
  };

  const handleInputChange = text => {};
  return (
    <TouchableWithoutFeedback onPress={handleTapOutside}>
      <SafeAreaView style={loginScreen.safeAreaView}>
        <View style={loginScreen.containerView}>
          <Image
            style={loginScreen.diabeticULogo}
            source={AppImages.diabeticUAppLogo}></Image>
          <View style={loginScreen.loginText}>
            <Text style={CommonStyles.headingText}>Login</Text>
            <Text style={[CommonStyles.subHeadingText, {paddingTop: 10}]}>
              We missed you! Please login to continue using this app.
            </Text>
          </View>
          <View
            style={{
              paddingTop: 40,
            }}>
            <View style={{paddingBottom: 24}}>
              <CustomTextInput
                floatingText="Email ID"
                ref={textInputRef}
                onChangeText={text => {
                  handleInputChange(text);
                }}
              />
            </View>
            <View>
              <CustomTextInput
                floatingText="Password"
                isPassword={true}
                ref={textInputRef}
              />
            </View>
          </View>
          <View style={{alignItems: 'flex-end'}}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('ForgotPassword');
              }}
              style={loginScreen.forgotPasswordTouchable}>
              <Text style={loginScreen.forgotPasswordText}>
                Forgot Password?
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{marginTop: 32}}>
            <ThemeButton title="Login" />
          </View>
          <View style={loginScreen.createAnAccountContainer}>
            <Text style={loginScreen.createAnAccountText}>
              Create an account ?
            </Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('SignUp');
              }}>
              <Text style={loginScreen.signupTouchable}> Signup</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              paddingVertical: 10,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <LinearGradient
              colors={['#E5EBF5', '#FFFFFF']}
              style={loginScreen.linearGradient}
              start={{x: 1, y: 0}}
              end={{x: 0, y: 0}}></LinearGradient>
            <Text
              style={{
                backgroundColor: '#FFFFFF',
                paddingHorizontal: 20,
                color: '#7F879A',
                fontFamily: 'CircularStd-Light',
                fontWeight: '400',
                fontSize: 14,
              }}>
              {' '}
              or continue with{' '}
            </Text>
            <LinearGradient
              colors={['#E5EBF5', '#FFFFFF']}
              style={loginScreen.linearGradient}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}></LinearGradient>
          </View>
          <View style={loginScreen.socialMediaFlexContainer}>
            <TouchableOpacity style={loginScreen.socialMediaButton}>
              <Image
                style={loginScreen.socialMediaIcon}
                source={{
                  uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1024px-Google_%22G%22_logo.svg.png',
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity style={loginScreen.socialMediaButton}>
              <Image
                style={loginScreen.socialMediaIcon}
                source={{
                  uri: 'https://upload.wikimedia.org/wikipedia/commons/6/6c/Facebook_Logo_2023.png',
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity style={loginScreen.socialMediaButton}>
              <Image
                style={loginScreen.socialMediaIcon}
                source={{
                  uri: 'https://cdn3.iconfinder.com/data/icons/picons-social/57/16-apple-512.png',
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default Login;

const loginScreen = StyleSheet.create({
  safeAreaView: {
    backgroundColor: 'white',
    flex: 1,
  },
  containerView: {
    marginHorizontal: 30,
  },
  diabeticULogo: {
    marginTop: 30,
  },
  loginText: {
    marginTop: 60,
  },
  socialMediaButton: {
    width: Dimensions.get('screen').width / 3 - 30,
    height: 60,
    borderWidth: 1,
    borderColor: '#E7EBF3',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  forgotPasswordText: {
    fontSize: 14,
    color: '#0B152D',
    fontFamily: 'CircularStd-Light',
    fontWeight: '400',
  },
  forgotPasswordTouchable: {
    marginTop: 24,
    alignItems: 'flex-end',
  },
  createAnAccountContainer: {
    flexDirection: 'row',
    marginTop: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  createAnAccountText: {
    color: '#7F879A',
    fontFamily: 'CircularStd-Light',
    fontSize: 14,
    fontWeight: '400',
  },
  signupTouchable: {
    color: '#FF00A6',
    fontFamily: 'CircularStd-Medium',
    fontSize: 14,
  },
  socialMediaFlexContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  socialMediaIcon: {width: 34, height: 34},
  linearGradient: {
    height: 1,
    width: 80,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
    paddingTop: 2,
  },
});
