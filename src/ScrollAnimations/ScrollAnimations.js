import {View} from 'react-native';
import React from 'react';
import AnimatedCard, {CARD_HEIGHT} from '../components/AnimatedCard';
import useScrollAnimation from './ScrollAnimationsController';
import Animated from 'react-native-reanimated';
import {data} from './data';

const ScrollAnimations = () => {
  const {animatedRef, scrollPosition, snapPoints} = useScrollAnimation({
    animatedComponentHeight: CARD_HEIGHT,
  });

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Animated.ScrollView
        contentContainerStyle={{
          alignItems: 'center',
          paddingBottom: 200,
          paddingTop: 100,
        }}
        decelerationRate={'fast'}
        ref={animatedRef}
        scrollEventThrottle={1}
        snapToOffsets={snapPoints}
        style={{flex: 1}}>
        {data.map((item, index) => (
          <AnimatedCard
            key={index + 'key'}
            data={item}
            index={index}
            scrollPosition={scrollPosition}
          />
        ))}
      </Animated.ScrollView>
    </View>
  );
};

export default ScrollAnimations;
