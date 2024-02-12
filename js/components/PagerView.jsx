import React, {startTransition} from 'react';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {StyleSheet, View, Dimensions} from 'react-native';
import CarouselCardItem from './CarouselCardItem';

const PagerView = () => {
  const [index, setIndex] = React.useState(0);
  const data = [
    {
      title: 'Customized Meal Plan',
      body: 'A personalised meal plan designed for individual preferences and goals.',
      imgUrl: 'https://cdn-icons-png.flaticon.com/256/4861/4861715.png',
    },
    {
      title: 'Customized Meal Plan',
      body: 'A personalised meal plan designed for individual preferences and goals.',
      imgUrl:
        'https://png.pngtree.com/png-clipart/20230918/ourmid/pngtree-photo-men-doctor-physician-chest-smiling-png-image_10132895.png',
    },
    {
      title: 'Customized Meal Plan',
      body: 'A personalised meal plan designed for individual preferences and goals.',
      imgUrl: 'https://freepngimg.com/convert-png/12974-health-png-image',
    },
    {
      title: 'Customized Meal Plan',
      body: 'A personalised meal plan designed for individual preferences and goals.',
      imgUrl:
        'https://www.pngkey.com/png/full/499-4992047_healthy-lifestyle-png-free-download-sport-for-healthy.png',
    },
  ];

  return (
    <View style={styles.container}>
      <Carousel
        data={data}
        renderItem={CarouselCardItem}
        sliderWidth={Dimensions.get('window').width}
        itemWidth={Dimensions.get('window').width}
        windowSize={1}
        onSnapToItem={index => setIndex(index)}
      />
      <View style={styles.paginationContainerView}>
        <Pagination
          dotsLength={data.length}
          activeDotIndex={index}
          containerStyle={styles.paginationContainer}
          dotStyle={styles.paginationDot}
          inactiveDotStyle={styles.inactiveDotStyle}
          inactiveDotScale={1}
        />
      </View>
    </View>
  );
};

export default PagerView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  paginationContainerView: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  paginationContainer: {
    paddingTop: 10,
    paddingBottom: 10,
    width: 56,
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#FF00A6',
  },
  inactiveDotStyle: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#CAD0EA',
    borderRadius: 10,
  },
});
