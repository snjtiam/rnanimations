import {View, Text, Image, Button} from 'react-native';
import React from 'react';
import {height, width} from '../utils';
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
  useDerivedValue,
} from 'react-native-reanimated';

const CARD_HEIGHT = height * 0.6 + 40;

const AnimatedCard = ({data, index, scrollPosition}) => {
  const animation = useDerivedValue(() => {
    return index - scrollPosition.value;
  });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateY: interpolate(
          animation.value,
          [1, 0, 1, 2],
          [50, 0, -CARD_HEIGHT * 0.55, -CARD_HEIGHT * 1.275],
        ),
      },

      {
        rotateX:
          interpolate(
            animation.value,
            [0, 1, 2],
            [0, 65, 85],
            Extrapolation.CLAMP,
          ) + 'deg',
      },
      {
        scaleX: interpolate(
          animation.value,
          [1, 0, 1, 2],
          [0.5, 1, 0.75, 0.7],
          Extrapolation.CLAMP,
        ),
      },
    ],
    zIndex: interpolate(
      animation.value,
      [-9, 0, 9],
      [10, 0, -10],
      Extrapolation.CLAMP,
    ),
    elevation: interpolate(
      animation.value,
      [0, 1],
      [4, 50],
      Extrapolation.CLAMP,
    ),
    opacity: interpolate(animation.value, [-1, 0], [0, 1], Extrapolation.CLAMP),
  }));

  return (
    <Animated.View
      style={[
        {
          height: CARD_HEIGHT - 40,
          width: width * 0.8,
          backgroundColor: 'pink',
          marginVertical: 20,
          borderRadius: 50,
          overflow: 'hidden',
        },
        animatedStyle,
      ]}>
      <Image
        style={{
          height: CARD_HEIGHT - 40,
          width: width * 0.8,
          borderRadius: 50,
        }}
        resizeMode="cover"
        source={data}
      />
    </Animated.View>
  );
};

export default AnimatedCard;
export {CARD_HEIGHT};
