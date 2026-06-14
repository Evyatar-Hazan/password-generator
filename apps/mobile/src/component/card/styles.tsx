import { StyleSheet } from 'react-native';

import type { ThemeType } from '../../themes/themes';

const styles = (colors: ThemeType, isRTL: boolean) =>
  StyleSheet.create({
    card: {
      paddingLeft: 16,
      paddingRight: 16,
      marginVertical: 10,
    },
    dominantTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      color: colors.text,
      marginBottom: 8,
      textAlign: isRTL ? 'right' : 'left',
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 8,
      color: colors.text,
      textAlign: isRTL ? 'right' : 'left',
    },
    content: {
      fontSize: 14,
      color: colors.text,
      lineHeight: 20,
      textAlign: isRTL ? 'right' : 'left',
    },
    link: {
      color: colors.mainLightPurple,
      textDecorationLine: 'underline',
    },
    childrenContainer: {
      marginTop: -10,
      marginLeft: -16,
      marginRight: -16,
    },
  });
export default styles;
