import AsyncStorage from '@react-native-async-storage/async-storage';
import type { StackNavigationProp } from '@react-navigation/stack';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import type { ImageSourcePropType } from 'react-native';
import { ActivityIndicator, Text, TouchableOpacity, View } from 'react-native';
import Animated from 'react-native-reanimated';

import Card from '../../component/card';
import { useRTL } from '../../i18n/RTLContext';
import type { RootStackParamList } from '../../navigation';
import { ScreenEnum } from '../../navigation';
import { useTheme } from '../../themes/ThemeContext';
import { themes } from '../../themes/themes';
import { useOnboardingAnimation } from './hooks/useOnboardingAnimation';
import { useOnboardingPages } from './hooks/useOnboardingPages';
import styles from './styles';

type Props = {
  navigation: StackNavigationProp<RootStackParamList, ScreenEnum.Intro>;
};

const OnboardingScreen: React.FC<Props> = ({ navigation }) => {
  const [pageIndex, setPageIndex] = useState(0);
  const pages = useOnboardingPages();
  const { animatedImageStyle, animatedTextStyle, animatedButtonsStyle } =
    useOnboardingAnimation(pageIndex);

  const { t } = useTranslation();
  const { theme } = useTheme();
  const { isRTL } = useRTL();
  const colors = themes[theme];
  const [loading, setLoading] = useState(true);

  const { title, subtitle, image } = pages[pageIndex];

  useEffect(() => {
    const checkStorage = async () => {
      const skip = await AsyncStorage.getItem('dontShowOnboarding');
      if (skip === 'true') {
        navigation.replace(ScreenEnum.Home);
      } else {
        setLoading(false);
      }
    };
    checkStorage();
  }, [navigation]);

  const next = () => {
    if (pageIndex < pages.length - 1) {
      setPageIndex((prev) => prev + 1);
    } else {
      navigation.replace(ScreenEnum.Home);
    }
  };

  const back = () => {
    if (pageIndex > 0) {
      setPageIndex((prev) => prev - 1);
    }
  };

  const skip = () => {
    AsyncStorage.setItem('dontShowOnboarding', 'true').then(() =>
      navigation.replace(ScreenEnum.Home),
    );
  };

  if (loading) {
    return (
      <View style={styles(colors, isRTL).loadingContainer}>
        <ActivityIndicator size="large" color={colors.mainLightPurple} />
      </View>
    );
  }

  return (
    <View style={styles(colors, isRTL).container}>
      <View style={styles(colors, isRTL).imageAndTextWrapper}>
        <Animated.Image
          source={image as ImageSourcePropType}
          style={[styles(colors, isRTL).image, animatedImageStyle]}
          accessible
          accessibilityLabel="Onboarding Image"
        />

        <Animated.View
          style={[styles(colors, isRTL).textContent, animatedTextStyle]}>
          <Card
            title={title}
            titleStyles={styles(colors, isRTL).title}
            content={subtitle}
            contentStyles={styles(colors, isRTL).subtitle}
          />
        </Animated.View>
      </View>

      <View style={styles(colors, isRTL).paginationContainer}>
        {pages.map((_, index) => (
          <View
            key={pages[index].title}
            style={[
              styles(colors, isRTL).dot,
              index === pageIndex && styles(colors, isRTL).activeDot,
            ]}
            accessibilityLabel={`${t('onboarding.general.page')} ${index + 1}`}
            accessible
          />
        ))}
      </View>

      <Animated.View
        style={[styles(colors, isRTL).footer, animatedButtonsStyle]}>
        <View style={styles(colors, isRTL).footerButton}>
          <TouchableOpacity onPress={back} disabled={pageIndex === 0}>
            <Text
              style={
                styles(colors, isRTL, pageIndex > 0 ? colors.text : colors.gray)
                  .next
              }>
              {t('onboarding.general.back')}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={skip}>
            <Text style={styles(colors, isRTL).skip}>
              {t('onboarding.general.dontShowAgain')}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={next}>
            <Text style={styles(colors, isRTL).next}>
              {pageIndex === pages.length - 1
                ? t('onboarding.general.done')
                : t('onboarding.general.next')}
            </Text>
          </TouchableOpacity>
        </View>
      </Animated.View>
    </View>
  );
};

export default OnboardingScreen;
