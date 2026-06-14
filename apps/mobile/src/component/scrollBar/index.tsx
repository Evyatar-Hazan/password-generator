import { useRef, useState } from 'react';
import type { LayoutChangeEvent } from 'react-native';
import { Animated, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { useRTL } from '../../i18n/RTLContext';
import { useTheme } from '../../themes/ThemeContext';
import { themes } from '../../themes/themes';
import styles from './styles';

interface scrollBarProps {
  children: React.ReactNode[];
}

const scrollBar: React.FC<scrollBarProps> = ({ children }) => {
  const scrollY = useRef(new Animated.Value(0)).current;
  const [contentHeight, setContentHeight] = useState(1);
  const [containerHeight, setContainerHeight] = useState(1);
  const { theme } = useTheme();
  const colors = themes[theme];
  const { isRTL } = useRTL();

  const handleContentSizeChange = (width: number, height: number) => {
    setContentHeight(height);
  };

  const handleLayout = (event: LayoutChangeEvent) => {
    setContainerHeight(event.nativeEvent.layout.height);
  };

  const minScrollBarHeight = 40;

  const scrollBarHeight = scrollY.interpolate({
    inputRange: [0, Math.max(contentHeight - containerHeight, 1)],
    outputRange: [minScrollBarHeight, containerHeight],
    extrapolate: 'clamp',
  });

  return (
    <View style={styles(colors, isRTL).container} onLayout={handleLayout}>
      <Animated.ScrollView
        style={styles(colors, isRTL).scrollView}
        contentContainerStyle={styles(colors, isRTL).scrollViewContent}
        showsVerticalScrollIndicator={false}
        onContentSizeChange={handleContentSizeChange}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false },
        )}
        scrollEventThrottle={16}>
        {children}
      </Animated.ScrollView>
      <View style={styles(colors, isRTL).scrollBarContainer}>
        <Animated.View
          style={[
            styles(colors, isRTL).scrollBar,
            {
              height: scrollBarHeight,
            },
          ]}>
          <LinearGradient
            colors={[colors.mainLightPurple, colors.mainPurple]}
            style={styles(colors, isRTL).gradient}
          />
        </Animated.View>
      </View>
    </View>
  );
};

export default scrollBar;
