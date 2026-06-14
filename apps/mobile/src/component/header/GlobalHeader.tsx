import { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import RenderIcon from '../../assets/svg/icon';
import { IconsEnum } from '../../assets/svg/icon/iconsMap';
import { useRTL } from '../../i18n/RTLContext';
import type { ScreenNavigationProp } from '../../navigation';
import { useTheme } from '../../themes/ThemeContext';
import { themes } from '../../themes/themes';
import SidebarMenu from '../sidebarMenu';
import styles from './styles';

interface GlobalHeaderProps {
  title: string;
  showBackButton?: boolean;
  navigation: ScreenNavigationProp;
}

const GlobalHeader: React.FC<GlobalHeaderProps> = ({
  title,
  showBackButton = false,
  navigation,
}) => {
  const [isMenuVisible, setMenuVisible] = useState(false);
  const { theme } = useTheme();
  const colors = themes[theme];
  const { isRTL } = useRTL();

  const toggleMenu = () => {
    setMenuVisible(!isMenuVisible);
  };

  const handleMenuItemPress = () => {
    setMenuVisible(false);
  };

  return (
    <View style={styles(colors, isRTL).headerContainer}>
      <TouchableOpacity
        style={styles(colors, isRTL).sideContainer}
        onPress={toggleMenu}>
        <RenderIcon name={IconsEnum.Menu} onPress={toggleMenu} />
      </TouchableOpacity>
      <View style={styles(colors, isRTL).headerTitleContainer}>
        <Text style={styles(colors, isRTL).headerTitle}>{title}</Text>
      </View>
      <View style={styles(colors, isRTL).sideContainer}>
        {showBackButton && (
          <RenderIcon
            name={IconsEnum.Back}
            onPress={() => navigation.goBack()}
            rtl
          />
        )}
      </View>
      <SidebarMenu
        isVisible={isMenuVisible}
        onClose={toggleMenu}
        onMenuItemPress={handleMenuItemPress}
        navigation={navigation}
      />
    </View>
  );
};

export default GlobalHeader;
