import type { StackNavigationProp } from '@react-navigation/stack';
import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import type { ImageSourcePropType } from 'react-native';
import {
  Animated,
  Dimensions,
  Image,
  Modal,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import titleIcon from '../../assets/images/appIcon/appIcon.jpeg';
import RenderIcon from '../../assets/svg/icon';
import { IconsEnum } from '../../assets/svg/icon/iconsMap';
import { appVersion } from '../../config/version';
import { useRTL } from '../../i18n/RTLContext';
import type { RootStackParamList } from '../../navigation';
import { ScreenEnum } from '../../navigation';
import { useTheme } from '../../themes/ThemeContext';
import { themes } from '../../themes/themes';
import Card from '../card';
import CustomLanguageSwitch from './languageSwitch';
import MenuItem from './menuItem/menuItem';
import styles from './styles';

type SidebarMenuNavigationProp = StackNavigationProp<
  RootStackParamList,
  'PrivacyPolicy'
>;

interface SidebarMenuProps {
  isVisible: boolean;
  onClose: () => void;
  onMenuItemPress: (item: string) => void;
  navigation: SidebarMenuNavigationProp;
}

const SidebarMenu: React.FC<SidebarMenuProps> = ({
  isVisible,
  onClose,
  onMenuItemPress,
  navigation,
}) => {
  const { t } = useTranslation();
  const { theme, setTheme } = useTheme();
  const colors = themes[theme];
  const { isRTL, toggleRTL } = useRTL();
  const screenWidth = Dimensions.get('window').width;
  const slideAnim = useRef(new Animated.Value(-screenWidth * 0.75)).current;
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const rotation = useRef(new Animated.Value(0)).current;

  const onPressNavigation = (screenName: keyof RootStackParamList) => {
    navigation.navigate(screenName);
    onMenuItemPress('');
  };

  useEffect(() => {
    if (isVisible) {
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(slideAnim, {
        toValue: isRTL ? screenWidth : -screenWidth * 0.75,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  }, [isVisible, slideAnim, screenWidth, isRTL]);

  const toggleSettings = () => {
    setIsSettingsOpen(!isSettingsOpen);

    Animated.timing(rotation, {
      toValue: isSettingsOpen ? 0 : 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    setTheme(!isDarkMode ? 'dark' : 'light');
  };

  const toggleLen = () => {
    toggleRTL(!isRTL);
  };

  const rotationInterpolate = rotation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg'],
  });

  return (
    <Modal
      visible={isVisible}
      animationType="none"
      transparent={true}
      onRequestClose={onClose}>
      <TouchableOpacity
        style={styles(colors, isRTL).overlay}
        onPress={onClose}
      />
      <Animated.View
        style={[
          styles(colors, isRTL).container,
          { transform: [{ translateX: slideAnim }] },
        ]}>
        {/* Title and Icon */}
        <View style={styles(colors, isRTL).titleContainer}>
          <Image
            source={titleIcon as ImageSourcePropType}
            style={styles(colors, isRTL).titleIcon}
          />
          <Text style={styles(colors, isRTL).title}>
            {t('general.appName')}
          </Text>
        </View>

        <View style={styles(colors, isRTL).menuItemsContainer}>
          <MenuItem
            icon={
              <RenderIcon
                name={IconsEnum.PrivacyPolicy}
                onPress={() => onPressNavigation(ScreenEnum.PrivacyPolicy)}
              />
            }
            text={t('general.privacyPolicy')}
            onPress={() => onPressNavigation(ScreenEnum.PrivacyPolicy)}
            isRTL={isRTL}
            textColor={colors.text}
          />
          <MenuItem
            icon={
              <RenderIcon
                name={IconsEnum.AboutTheApp}
                onPress={() => onPressNavigation(ScreenEnum.AboutApp)}
              />
            }
            text={t('general.aboutApp')}
            onPress={() => onPressNavigation(ScreenEnum.AboutApp)}
            isRTL={isRTL}
            textColor={colors.text}
          />

          <MenuItem
            icon={
              <RenderIcon
                name={IconsEnum.AboutUs}
                onPress={() => onPressNavigation(ScreenEnum.AboutUs)}
              />
            }
            text={t('general.aboutUs')}
            onPress={() => onPressNavigation(ScreenEnum.AboutUs)}
            isRTL={isRTL}
            textColor={colors.text}
          />

          <MenuItem
            icon={
              <RenderIcon
                name={IconsEnum.ShareApp}
                onPress={() => onMenuItemPress('Share App')}
              />
            }
            text={t('menu.shareApp')}
            onPress={() => onMenuItemPress('Share App')}
            isRTL={isRTL}
            textColor={colors.text}
          />

          {/* <MenuItem
            icon={
              <RenderIcon
                name={IconsEnum.SecurityKey}
                onPress={() => onMenuItemPress('Security Key')}
              />
            }
            text={t('menu.securityKey')}
            onPress={() => onMenuItemPress('Security Key')}
            isRTL={isRTL}
            textColor={colors.text}
          /> */}

          <MenuItem
            icon={
              <RenderIcon name={IconsEnum.Settings} onPress={toggleSettings} />
            }
            secondaryIcon={
              <Animated.View
                style={{ transform: [{ rotate: rotationInterpolate }] }}>
                {<RenderIcon name={IconsEnum.Down} onPress={toggleSettings} />}
              </Animated.View>
            }
            text={t('menu.settings')}
            onPress={toggleSettings}
            isRTL={isRTL}
            textColor={colors.text}>
            {isSettingsOpen && (
              <>
                <View style={styles(colors, isRTL).settingsContainer}>
                  {/* Dark Mode */}
                  <MenuItem
                    icon={
                      <RenderIcon
                        name={IconsEnum.DarkMode}
                        onPress={toggleDarkMode}
                      />
                    }
                    text={t('menu.darkMode')}
                    isRTL={isRTL}
                    textColor={colors.text}
                    onPress={toggleDarkMode}
                    switchIcon={
                      <Switch
                        value={theme !== 'light'}
                        onValueChange={toggleDarkMode}
                        thumbColor={
                          theme === 'light'
                            ? colors.background
                            : colors.mainPurple
                        }
                        trackColor={{
                          false: colors.gray,
                          true: colors.mainLightPurple,
                        }}
                      />
                    }
                  />

                  {/* Language */}
                  <MenuItem
                    icon={
                      <RenderIcon
                        name={IconsEnum.Language}
                        onPress={toggleLen}
                      />
                    }
                    text={t('menu.language')}
                    isRTL={isRTL}
                    textColor={colors.text}
                    onPress={toggleLen}
                    switchIcon={
                      <CustomLanguageSwitch
                        isRTL={isRTL}
                        onToggleLanguage={toggleLen}
                      />
                    }
                  />
                </View>
              </>
            )}
          </MenuItem>
        </View>

        {/* Privacy Policy Notice */}
        <View style={styles(colors, isRTL).privacyContainer}>
          <TouchableOpacity style={styles(colors, isRTL).iconContainer}>
            {<RenderIcon name={IconsEnum.PrivacyPolicyNotice} />}
          </TouchableOpacity>
          <Card
            content={t('menu.privacyNotice')}
            links={[
              {
                text: t('general.privacyPolicy'),
                url: t('privacyPolicy.sourceDocument.link'),
              },
            ]}
          />
        </View>
        <Card
          content={t('general.version', { version: appVersion })}
          contentStyles={styles(colors, isRTL).versionText}
        />
      </Animated.View>
    </Modal>
  );
};

export default SidebarMenu;
