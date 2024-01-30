import React from 'react';
import {Image, SafeAreaView, Text, View, StyleSheet} from 'react-native';
import ThemeButton from '../components/ThemeButton';

const LandingPage = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View>
        <View style={landingPage.diabeticULogoView}>
          <Image
            source={require('../assets/images/DiabeticULogo/DiabeticULogo.png')}
            style={landingPage.diabeticULogoImg}
          />
        </View>
        <View style={{height: 300, backgroundColor: 'red', marginTop: 10}} />
        <View style={landingPage.textContainerView}>
          <Text style={landingPage.customizedMealPlan}>
            Customized Meal Plan
          </Text>
          <Text style={landingPage.personalizedMealPlan}>
            A personalized meal plan designed for individual preferences and
            goals.
          </Text>
        </View>
        <View style={{paddingVertical: 20}}>
          <ThemeButton
            title="Login with Social Media"
            bgColor="#FFFFFF"
            textColor="#60647C"
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 50,
            backgroundColor: 'grey',
          }}>
          <Image
            style={{transform: [{rotate: '180deg'}]}}
            source={require('../assets/images/GradientLine/GradientLine.png')}
          />
          <Text>or</Text>
          <Image
            style={{right: 0}}
            source={require('../assets/images/GradientLine/GradientLine.png')}
          />
        </View>
        <View style={{paddingVertical: 20}}>
          <ThemeButton title="Login" />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LandingPage;

const landingPage = StyleSheet.create({
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
  textContainerView: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  customizedMealPlan: {
    fontSize: 22,
    fontWeight: 700,
    fontFamily: 'CircularStd-Bold',
  },
  personalizedMealPlan: {
    color: '#5F5F5F',
    fontSize: 16,
    marginHorizontal: 55,
    paddingTop: 4,
    textAlign: 'center',
  },
});
