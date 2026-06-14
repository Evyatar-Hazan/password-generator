import { useEffect, useRef } from 'react';
import type { ImageSourcePropType } from 'react-native';
import { Animated, Image, TouchableWithoutFeedback, View } from 'react-native';

import EN from '../../../assets/images/flags/EN.png';
import IL from '../../../assets/images/flags/IL.png';
import { useTheme } from '../../../themes/ThemeContext';
import { themes } from '../../../themes/themes';
import styles from './styles';

interface Props {
  isRTL: boolean;
  onToggleLanguage: () => void;
}

const CustomLanguageSwitch: React.FC<Props> = ({ isRTL, onToggleLanguage }) => {
  const animatedValue = useRef(new Animated.Value(isRTL ? 1 : 0)).current;

  const { theme } = useTheme();
  const colors = themes[theme];

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: isRTL ? 1 : 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
  }, [animatedValue, isRTL]);

  const thumbPosition = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [2, 40],
  });

  return (
    <TouchableWithoutFeedback onPress={onToggleLanguage}>
      <View style={styles(colors, theme).switchContainer}>
        <View style={styles(colors, theme).flagsContainer}>
          <Image
            source={EN as ImageSourcePropType}
            style={styles(colors, theme).flagIcon}
          />
          <Image
            source={IL as ImageSourcePropType}
            style={styles(colors, theme).flagIcon}
          />
        </View>
        <Animated.View
          style={[styles(colors, theme).thumb, { left: thumbPosition }]}>
          <Image
            source={
              isRTL ? (IL as ImageSourcePropType) : (EN as ImageSourcePropType)
            }
            style={styles(colors, theme).thumbImage}
          />
        </Animated.View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CustomLanguageSwitch;
