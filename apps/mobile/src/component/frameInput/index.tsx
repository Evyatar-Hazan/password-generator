import Clipboard from '@react-native-clipboard/clipboard';
import type { ViewStyle } from 'react-native';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';

import RenderIcon from '../../assets/svg/icon';
import { IconsEnum } from '../../assets/svg/icon/iconsMap';
import { useRTL } from '../../i18n/RTLContext';
import { useTheme } from '../../themes/ThemeContext';
import { themes } from '../../themes/themes';
import styles from './styles';

interface FrameInputProps {
  isInput: boolean;
  label: string;
  placeholder?: string;
  value: string;
  onChangeText?: (text: string) => void;
  strengthType?: string;
}

const FrameInput: React.FC<FrameInputProps> = ({
  isInput,
  label,
  placeholder,
  value,
  onChangeText,
  strengthType,
}) => {
  const { theme } = useTheme();
  const colors = themes[theme];
  const { isRTL } = useRTL();
  const handleCopy = () => {
    Clipboard.setString(value);
  };

  const getProgressStyle = () => {
    let width = 0;
    let color = 'transparent';

    switch (strengthType) {
      case 'veryWeak': {
        width = 20;
        color = colors.veryWeak;
        break;
      }
      case 'weak': {
        width = 40;
        color = colors.weak;
        break;
      }
      case 'medium': {
        width = 60;
        color = colors.medium;
        break;
      }
      case 'strong': {
        width = 80;
        color = colors.strong;
        break;
      }
      case 'veryStrong': {
        width = 100;
        color = colors.veryStrong;
        break;
      }
    }

    return { width: `${width}%`, backgroundColor: color } as ViewStyle;
  };

  const progressBarStyle = getProgressStyle();

  return (
    <View style={styles(colors, isRTL).container}>
      <Text style={styles(colors, isRTL).label}>{label}</Text>
      {isInput ? (
        <TextInput
          style={styles(colors, isRTL).input}
          placeholder={placeholder}
          placeholderTextColor={colors.text}
          value={value}
          onChangeText={onChangeText}
        />
      ) : (
        <>
          <TouchableOpacity
            onPress={handleCopy}
            style={styles(colors, isRTL).textWithCopyContainer}>
            <Text style={styles(colors, isRTL).fixedText}>{value}</Text>
            <RenderIcon name={IconsEnum.Copy} onPress={handleCopy} />
          </TouchableOpacity>
          <View style={styles(colors, isRTL).progressBarContainer}>
            <View
              style={[styles(colors, isRTL).progressBar, progressBarStyle]}
            />
          </View>
        </>
      )}
    </View>
  );
};

export default FrameInput;
