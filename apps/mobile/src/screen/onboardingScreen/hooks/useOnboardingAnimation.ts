import { useEffect } from 'react';
import {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

export const useOnboardingAnimation = (pageIndex: number) => {
  const imageOpacity = useSharedValue(0);
  const imageScale = useSharedValue(0.95);
  const textOpacity = useSharedValue(0);
  const textScale = useSharedValue(0.95);
  const buttonOpacity = useSharedValue(0);
  const buttonScale = useSharedValue(0.95);

  useEffect(() => {
    imageOpacity.value = 0;
    imageScale.value = 0.95;
    textOpacity.value = 0;
    textScale.value = 0.95;
    buttonOpacity.value = 0;
    buttonScale.value = 0.95;

    imageOpacity.value = withTiming(1, { duration: 500 });
    imageScale.value = withTiming(1, { duration: 500 });
    textOpacity.value = withTiming(1, { duration: 600 });
    textScale.value = withTiming(1, { duration: 600 });
    buttonOpacity.value = withTiming(1, { duration: 700 });
    buttonScale.value = withTiming(1, { duration: 700 });
  }, [
    buttonOpacity,
    buttonScale,
    imageOpacity,
    imageScale,
    pageIndex,
    textOpacity,
    textScale,
  ]);

  return {
    animatedImageStyle: useAnimatedStyle(() => ({
      opacity: imageOpacity.value,
      transform: [{ scale: imageScale.value }],
    })),
    animatedTextStyle: useAnimatedStyle(() => ({
      opacity: textOpacity.value,
      transform: [{ scale: textScale.value }],
    })),
    animatedButtonsStyle: useAnimatedStyle(() => ({
      opacity: buttonOpacity.value,
      transform: [{ scale: buttonScale.value }],
    })),
  };
};
