import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const CarouselCardItem = ({item, index}) => {
  return (
    <View key={index}>
      <Image source={{uri: item.imgUrl}} style={carouselCard.image} />
      <View style={[carouselCard.textContainerView]}>
        <Text style={carouselCard.customizedMealPlan}>{item.title}</Text>
        <Text style={carouselCard.personalizedMealPlan}>{item.body}</Text>
      </View>
    </View>
  );
};

export default CarouselCardItem;

const carouselCard = StyleSheet.create({
  image: {
    width: '100%',
    height: 300,
    alignItems: 'center',
    justifyContent: 'center',
    resizeMode: 'cover',
  },
  textContainerView: {
    paddingVertical: 10,
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
    fontFamily: 'CircularStd-Book',
  },
});
