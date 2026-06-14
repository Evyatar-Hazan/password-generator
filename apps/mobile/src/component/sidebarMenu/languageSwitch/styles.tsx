import { StyleSheet } from 'react-native';

import type { ThemeType } from '../../../themes/themes';

const styles = (colors: ThemeType, theme: 'light' | 'dark') =>
  StyleSheet.create({
    switchContainer: {
      width: 75,
      height: 36,
      justifyContent: 'center',
      position: 'relative',
    },
    flagsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 8,
      borderWidth: 2,
      borderColor:
        theme !== 'light' ? colors.background : colors.mainLightPurple,
      borderRadius: 18,
      backgroundColor:
        theme === 'light' ? colors.background : colors.mainLightPurple,
      height: 36,
    },
    flagIcon: {
      width: 22,
      height: 15,
      resizeMode: 'contain',
    },
    thumb: {
      width: 32,
      height: 32,
      borderRadius: 16,
      backgroundColor: 'white',
      position: 'absolute',
      top: 2,
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 2,
      borderColor: 'white',
      shadowColor: '#000',
      shadowOpacity: 0.1,
      shadowOffset: { width: 0, height: 1 },
      shadowRadius: 2,
      elevation: 3,
    },
    thumbImage: {
      width: 22,
      height: 15,
      resizeMode: 'contain',
    },
  });

export default styles;
