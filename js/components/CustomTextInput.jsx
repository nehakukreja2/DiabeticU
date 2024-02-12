import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Animated,
  Easing,
  TouchableWithoutFeedback,
  Image,
} from 'react-native';

const CustomTextInput = props => {
  const [isFocused, setIsFocused] = useState(false);

  const handleInputFocus = () => {
    setIsFocused(true);
  };

  const handleInputBlur = () => {
    setIsFocused(false);
  };

  const inputRef = useRef();
  const focusAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(focusAnim, {
        toValue: isFocused || !!'' ? 1 : 0,
        duration: 200,
        easing: Easing.bezier(0.4, 0, 0.2, 1),
        useNativeDriver: true,
      }),
    ]).start();
  }, [focusAnim, isFocused]);

  return (
    <View style={textInputStyles.containerView}>
      <View
        style={{
          justifyContent: 'center',
        }}>
        <TextInput
          ref={inputRef}
          placeholderTextColor="#4F535E"
          style={textInputStyles.inputField}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          onChangeText={props.onChangeText}
        />
        {props.isPassword && (
          <Image
            style={{
              position: 'absolute',
              right: 20,
              height: 20,
              width: 20,
            }}
            source={require('../assets/images/PasswordInvisible/PasswordInvisible.png')}
          />
        )}
      </View>
      <TouchableWithoutFeedback onPress={() => inputRef.current?.focus()}>
        <Animated.View
          style={[
            {
              transform: [
                {
                  scale: focusAnim.interpolate({
                    inputRange: [0, 8],
                    outputRange: [1, 1],
                  }),
                },
                {
                  translateY: focusAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [-25, -55],
                  }),
                },
                {
                  translateX: focusAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [1, 0],
                  }),
                },
              ],
            },
          ]}>
          <Text style={textInputStyles.fieldTitle}>{props.floatingText}</Text>
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
  },
  inputField: {
    paddingLeft: 10,
    marginTop: 5,
    marginHorizontal: 10,
    height: 50,
    width: '80%',
  },
  fieldTitle: {
    position: 'absolute',
    color: '#4F535E',
    backgroundColor: 'white',
    padding: 4,
    marginLeft: 20,
    top: -14,
    fontSize: 16,
    fontWeight: '500',
    fontFamily: 'CircularStd-Light',
  },
});
