import React, {useEffect} from 'react';
import {View, Image, StyleSheet} from 'react-native';
import AppImages from '../assets/images';

const SplashScreen = ({navigation}) => {
  console.log('....', AppImages.backArrow);
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('LandingPage');
    }, 3000);
  }, []);

  return (
    <View style={splashStyles.containerView}>
      <View style={splashStyles.topContainer}>
        <Image
          source={AppImages.topOrangeCircleSplash}
          style={splashStyles.orangeCircle}
        />
        <Image source={AppImages.topSemiCircleSplash} />
      </View>
      <Image source={AppImages.diabeticUSplashLogo} />
      <Image
        source={AppImages.diabeticUBottomLogo}
        style={splashStyles.bottomLogo}
      />
    </View>
  );
};

export default SplashScreen;

const splashStyles = StyleSheet.create({
  containerView: {
    alignItems: 'center',
    backgroundColor: 'white',
    justifyContent: 'center',
    flex: 1,
  },
  topContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
  orangeCircle: {
    top: 110,
    position: 'absolute',
    left: 8,
  },
  bottomLogo: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
});
