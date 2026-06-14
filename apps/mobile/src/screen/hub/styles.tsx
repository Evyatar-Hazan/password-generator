import { StyleSheet } from 'react-native';

import type { ThemeType } from '../../themes/themes';

const styles = (colors: ThemeType) =>
  StyleSheet.create({
    inputContainer: {
      flex: 1,
      justifyContent: 'flex-start',
      padding: 20,
      backgroundColor: colors.background,
      paddingTop: '10%',
    },
    numButton: {
      textAlign: 'center',
      fontSize: 30,
      fontWeight: 'bold',
      fontFamily: 'Roboto',
      color: colors.text,
    },
  });

export default styles;
