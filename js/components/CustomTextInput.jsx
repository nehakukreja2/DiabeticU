import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Animated,
  Easing,
  TouchableWithoutFeedback,
} from 'react-native';

const CustomTextInput = () => {
  const [isFocused, setIsFocused] = useState(false);

  const inputRef = useRef();
  const focusAnim = useRef(new Animated.Value(0)).current;
  const opacityAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(focusAnim, {
        toValue: isFocused || !!'' ? 1 : 0,
        duration: 150,
        easing: Easing.bezier(0.4, 0, 0.2, 1),
        useNativeDriver: true,
      }),
      Animated.timing(opacityAnim, {
        toValue: isFocused || !!'' ? 1 : 0,
        duration: 150,
        easing: Easing.bezier(0.4, 0, 0.2, 1),
        useNativeDriver: true,
      }),
    ]).start();
  }, [focusAnim, isFocused, opacityAnim]);

  return (
    <View style={textInputStyles.containerView}>
      <TextInput
        ref={inputRef}
        placeholder="Phone Number/Email ID"
        placeholderTextColor="#4F535E"
        style={textInputStyles.inputField}
        onFocus={event => {
          setIsFocused(true);
        }}
      />
      <TouchableWithoutFeedback onPress={() => inputRef.current?.focus()}>
        <Animated.View
          style={[
            {
              transform: [
                {
                  scale: focusAnim.interpolate({
                    inputRange: [0, 14],
                    outputRange: [1, 0.75],
                  }),
                },
                {
                  translateY: focusAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [-12, -55],
                  }),
                },
                {
                  translateX: focusAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [1, 0],
                  }),
                },
              ],
              opacity: opacityAnim,
            },
          ]}>
          <Text style={textInputStyles.fieldTitle}>Phone Number</Text>
        </Animated.View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default CustomTextInput;

const textInputStyles = StyleSheet.create({
  containerView: {
    borderRadius: 16,
    borderWidth: 1,
    height: 60,
    borderColor: '#E7EBF3',
    marginHorizontal: 20,
  },
  inputField: {
    paddingLeft: 10,
    marginTop: 5,
    marginHorizontal: 10,
    height: 50,
  },
  fieldTitle: {
    position: 'absolute',
    color: '#7F879A',
    backgroundColor: 'white',
    padding: 4,
    marginLeft: 20,
    top: -14,
  },
});
