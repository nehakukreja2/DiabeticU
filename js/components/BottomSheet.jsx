import React from 'react';
import {Text, View, StyleSheet, Dimensions, SafeAreaView} from 'react-native';

const BottomSheet = () => {
  return (
    <View style={bottomSheet.bottomSheetContainer}>
      <View style={bottomSheet.bottomSheetView}>
        <Text>BottomSheet </Text>
      </View>
    </View>
  );
};

export default BottomSheet;

const bottomSheet = StyleSheet.create({
  bottomSheetContainer: {
    height: Dimensions.get('screen').height,
    // flex: 1,
    backgroundColor: '#000000',
    // opacity: 0.6,
  },
  bottomSheetView: {
    borderRadius: 30,
    height: 100,
    bottom: 0,
    width: '100%',
    position: 'absolute',
    backgroundColor: 'red',
  },
});
