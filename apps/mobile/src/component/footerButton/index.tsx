import { useEffect, useState } from 'react';
import { Animated, TouchableOpacity, View } from 'react-native';

import { useRTL } from '../../i18n/RTLContext';
import { useTheme } from '../../themes/ThemeContext';
import { themes } from '../../themes/themes';
import styles from './styles';

type FooterButton = {
  icon: React.FC<{ onPress: () => void }>;
  onPress: () => void;
};

type FooterProps = {
  buttons: FooterButton[];
  defaultFocusedIndex?: number;
};

const Footer: React.FC<FooterProps> = ({
  buttons,
  defaultFocusedIndex = 0,
}) => {
  const { theme } = useTheme();
  const colors = themes[theme];
  const { isRTL } = useRTL();
  const [focusedIndex, setFocusedIndex] = useState<number>(defaultFocusedIndex);
  const [animations] = useState<Animated.Value[]>(
    (isRTL ? [...buttons].reverse() : buttons).map(() => new Animated.Value(0)),
  );

  useEffect(() => {
    animations.forEach((animation, i) => {
      Animated.timing(animation, {
        toValue: i === focusedIndex ? 1 : 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    });
  }, [focusedIndex, animations]);

  const handlePress = (index: number, onPress: () => void) => {
    setFocusedIndex(index);
    onPress();
  };

  return (
    <View style={styles(colors).footer}>
      {(isRTL ? [...buttons].reverse() : buttons).map((button, index) => {
        const actualIndex = isRTL ? buttons.length - 1 - index : index;

        const translateY = animations[actualIndex].interpolate({
          inputRange: [0, 1],
          outputRange: [0, -30],
        });

        const backgroundColor = animations[actualIndex].interpolate({
          inputRange: [0, 1],
          outputRange: ['transparent', colors.mainPurple],
        });

        return (
          <Animated.View
            key={button.icon.name}
            style={[
              styles(colors).buttonContainer,
              { transform: [{ translateY }] },
            ]}>
            {focusedIndex === actualIndex && (
              <View style={styles(colors).oval} />
            )}
            <Animated.View style={[styles(colors).button, { backgroundColor }]}>
              <TouchableOpacity
                onPress={() => handlePress(actualIndex, button.onPress)}>
                <button.icon
                  onPress={() => handlePress(actualIndex, button.onPress)}
                />
              </TouchableOpacity>
            </Animated.View>
          </Animated.View>
        );
      })}
    </View>
  );
};

export default Footer;
