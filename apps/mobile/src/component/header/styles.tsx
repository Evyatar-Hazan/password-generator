import { StyleSheet } from 'react-native';

import type { ThemeType } from '../../themes/themes';

const styles = (colors: ThemeType, isRTL: boolean) =>
  StyleSheet.create({
    headerContainer: {
      flexDirection: isRTL ? 'row-reverse' : 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: colors.mainLightPurple,
      height: 70,
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10,
      paddingHorizontal: 15,
    },
    headerTitleContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    headerTitle: {
      fontSize: 25,
      fontWeight: 'bold',
      fontFamily: 'Righteous-Regular',
      color: colors.text,
    },
    sideContainer: {
      width: 50,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default styles;
