import React, {useState} from 'react';
import {
  Image,
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import ThemeButton from '../components/ThemeButton';
import PagerView from '../components/PagerView';
import BottomSheet from '../components/BottomSheet';
import AppImages from '../assets/images';

const LandingPage = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleClose = () => {
    setModalVisible(false);
  };

  return (
    <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
      <SafeAreaView style={landingPage.safeAreaView}>
        <>
          <View style={landingPage.diabeticULogoView}>
            <Image
              source={AppImages.diabeticUSplashLogo}
              style={landingPage.diabeticULogoImg}
            />
          </View>
          <View style={landingPage.pagerContainer}>
            <PagerView />
          </View>
          <View style={landingPage.loginWithSocialMediaView}>
            <ThemeButton
              title="Login with Social Media"
              bgColor="#FFFFFF"
              textColor="#60647C"
              onPress={() => {
                setModalVisible(true);
              }}
            />
          </View>
          <View style={landingPage.gradientLineOrContainer}>
            <Image
              style={{transform: [{rotate: '180deg'}]}}
              source={require('../assets/images/GradientLine/GradientLine.png')}
            />
            <Text style={landingPage.orTextStyle}>or</Text>
            <Image
              source={require('../assets/images/GradientLine/GradientLine.png')}
            />
          </View>
          <View style={landingPage.loginWithSocialMediaView}>
            <ThemeButton
              title="Login"
              onPress={() => {
                navigation.navigate('Login');
              }}
            />
          </View>
          <View style={landingPage.createAnAccountView}>
            <Text style={landingPage.createAnAccount}>Create an account ?</Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('SignUp');
              }}>
              <Text style={landingPage.signUp}> Signup</Text>
            </TouchableOpacity>
          </View>
        </>
        <BottomSheet modalVisible={modalVisible} handleClose={handleClose} />
      </SafeAreaView>
    </ScrollView>
  );
};

export default LandingPage;

const landingPage = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: 'white',
  },
  pagerContainer: {
    marginTop: 10,
  },
  loginWithSocialMediaView: {
    marginHorizontal: 30,
    paddingVertical: 20,
  },
  gradientLineOrContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 40,
    alignItems: 'center',
    height: 20,
  },
  orTextStyle: {
    top: 0,
    color: '#7F879A',
    fontFamily: 'CircularStd-Medium',
    fontSize: 14,
  },
  diabeticULogoView: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 23,
  },
  diabeticULogoImg: {
    width: 207,
    height: 60,
  },
  createAnAccountView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  createAnAccount: {
    color: '#7F879A',
    fontFamily: 'CircularStd-Bold',
  },
  signUp: {
    color: '#FF00A6',
    fontFamily: 'CircularStd-Medium',
  },
});
