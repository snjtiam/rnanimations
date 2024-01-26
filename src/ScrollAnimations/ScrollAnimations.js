import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import {height, width} from '../utils';

const ScrollAnimations = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'black'}}>
      <ScrollView
        style={{flex: 1}}
        contentContainerStyle={{alignItems: 'center', paddingVertical: 25}}>
        {Array(10)
          .fill(0)
          .map((_, index) => (
            <View
              key={index + 'key'}
              style={{
                height: height * 0.85,
                width: width * 0.9,
                backgroundColor: 'pink',
                marginVertical: 20,
                borderRadius: 20,
              }}
            />
          ))}
      </ScrollView>
    </View>
  );
};

export default ScrollAnimations;
