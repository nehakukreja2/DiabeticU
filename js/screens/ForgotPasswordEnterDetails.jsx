import React from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import BackButton from '../components/BackButton';
import CustomTextInput from '../components/CustomTextInput';
import ThemeButton from '../components/ThemeButton';
import CommonStyles from '../utils/commonStyles';

const ForgotPasswordEnterDetails = ({route, navigation}) => {
  const params = route.params;
  const backTapped = () => {
    navigation.goBack();
  };
  return (
    <SafeAreaView style={forgotPasswordEnterDetailsStyle.safeAreaView}>
      <View style={{marginTop: 16, marginHorizontal: 30}}>
        <BackButton backTapped={backTapped} />
        <View style={{marginTop: 40}}>
          <Text style={CommonStyles.headingText}>Forgot Password</Text>
          <Text style={[CommonStyles.subHeadingText, {marginTop: 12}]}>
            {params.description}
          </Text>
        </View>
        <View style={{marginTop: 40}}>
          <CustomTextInput floatingText={params.floatingText} />
        </View>
        <View style={{marginTop: 40}}>
          <ThemeButton title="Verify" />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ForgotPasswordEnterDetails;

const forgotPasswordEnterDetailsStyle = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: 'white',
  },
});
