import React, {useEffect} from 'react';
import {View, Image, StyleSheet} from 'react-native';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('LandingPage');
    }, 3000);
  }, []);

  return (
    <View style={splashStyles.containerView}>
      <View style={splashStyles.topContainer}>
        <Image
          source={require('../assets/images/TopEclipseGroup/orangeCircle.png')}
          style={splashStyles.orangeCircle}
        />
        <Image
          source={require('../assets/images/TopEclipseGroup/semiCircle.png')}
        />
      </View>
      <Image
        source={require('../assets/images/DiabeticULogo/DiabeticULogo.png')}
      />
      <Image
        source={require('../assets/images/DiabeticU/BottomLogo.png')}
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
