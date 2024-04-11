import {
  useAnimatedRef,
  useDerivedValue,
  useScrollViewOffset,
} from 'react-native-reanimated';

const useScrollAnimation = ({animatedComponentHeight}) => {
  const animatedRef = useAnimatedRef();
  const scrollOffset = useScrollViewOffset(animatedRef);
  const scrollPosition = useDerivedValue(
    () => scrollOffset.value / animatedComponentHeight,
  );

  const snapPoints = Array(10)
    .fill(0)
    .map((_, index) => index * animatedComponentHeight);
  return {animatedRef, scrollPosition, snapPoints};
};

export default useScrollAnimation;
