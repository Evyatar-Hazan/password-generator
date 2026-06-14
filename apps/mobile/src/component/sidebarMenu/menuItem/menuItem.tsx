import type { StyleProp, TextStyle, ViewStyle } from 'react-native';
import { Text, TouchableOpacity, View } from 'react-native';

import styles from './styles';

interface MenuItemProps {
  icon: React.ReactNode;
  secondaryIcon?: React.ReactNode;
  switchIcon?: React.ReactNode;
  text: string;
  onPress?: () => void;
  isRTL: boolean;
  textColor: string;
  textStyle?: StyleProp<TextStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
}

const MenuItem: React.FC<MenuItemProps> = ({
  icon,
  secondaryIcon,
  switchIcon,
  text,
  onPress,
  isRTL,
  textColor,
  textStyle,
  containerStyle,
  children,
}) => (
  <TouchableOpacity
    onPress={onPress}
    style={[styles(isRTL).container, containerStyle]}
    activeOpacity={0.7}
    accessibilityRole="button"
    accessibilityLabel={text}>
    <View style={styles(isRTL).content}>
      <View style={styles(isRTL).icon}>{icon}</View>
      <Text style={[styles(isRTL).text, { color: textColor }, textStyle]}>
        {text}
      </Text>
      {secondaryIcon !== null && (
        <View style={styles(isRTL).secondaryIcon}>{secondaryIcon}</View>
      )}
      {switchIcon !== null && <View>{switchIcon}</View>}
    </View>
    {children !== null && (
      <View style={styles(isRTL).children}>{children}</View>
    )}
  </TouchableOpacity>
);

export default MenuItem;
