import { StyleSheet } from 'react-native';

import type { ThemeType } from '../../themes/themes';

const styles = (colors: ThemeType, isRTL: boolean) =>
  StyleSheet.create({
    container: {
      marginBottom: 30,
      width: '90%',
      alignSelf: 'center',
      color: colors.text,
    },
    label: {
      fontSize: 16,
      marginBottom: 5,
      fontWeight: 'bold',
      textAlign: isRTL ? 'right' : 'left',
      color: colors.text,
    },
    input: {
      borderColor: colors.mainLightPurple,
      borderWidth: 1,
      padding: 10,
      borderRadius: 10,
      backgroundColor: 'transparent',
      color: colors.text,
      textAlign: isRTL ? 'right' : 'left',
    },
    textWithCopyContainer: {
      flexDirection: isRTL ? 'row-reverse' : 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderColor: colors.mainLightPurple,
      borderWidth: 1,
      padding: 10,
      borderRadius: 10,
      color: colors.text,
    },
    fixedText: {
      fontSize: 16,
      flex: 1,
      color: colors.text,
      textAlign: isRTL ? 'right' : 'left',
    },
    progressBarContainer: {
      height: 6,
      width: '100%',
      backgroundColor: colors.background,
      borderRadius: 5,
      marginTop: 5,
    },
    progressBar: {
      height: '100%',
      borderRadius: 5,
      alignSelf: isRTL ? 'flex-end' : 'flex-start',
    },
  });
export default styles;
