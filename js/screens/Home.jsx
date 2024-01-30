import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import CustomTextInput from '../components/CustomTextInput';

const Home = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View>
        <CustomTextInput />
      </View>
    </SafeAreaView>
  );
};

export default Home;
