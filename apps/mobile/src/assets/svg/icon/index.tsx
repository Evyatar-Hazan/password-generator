import type { GestureResponderEvent } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { Path, Svg } from 'react-native-svg';

import { useRTL } from '../../../i18n/RTLContext';
import { useTheme } from '../../../themes/ThemeContext';
import { themes } from '../../../themes/themes';
import type { IconsEnum } from './iconsMap';
import { iconsMap } from './iconsMap';
import styles from './styles';

interface RenderIconProps {
  name: IconsEnum;
  onPress?: (event: GestureResponderEvent) => void;
  rtl?: boolean;
}

const RenderIcon: React.FC<RenderIconProps> = ({
  name,
  onPress,
  rtl = false,
}) => {
  const { theme } = useTheme();
  const colors = themes[theme];
  const { isRTL } = useRTL();
  const { d, width, height } = iconsMap[name];

  return (
    <TouchableOpacity onPress={onPress}>
      <Svg
        width={width}
        height={height}
        viewBox="0 -960 960 960"
        style={rtl ? styles(isRTL).svg : undefined}>
        <Path fill={colors.text} d={d} />
      </Svg>
    </TouchableOpacity>
  );
};

export default RenderIcon;
