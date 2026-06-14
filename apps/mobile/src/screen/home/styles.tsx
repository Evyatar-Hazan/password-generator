import { StyleSheet } from 'react-native';

import type { ThemeType } from '../../themes/themes';

const styles = (colors: ThemeType) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    contentContainer: {
      flex: 1,
    },
    innerContainer: {
      flexGrow: 1,
      justifyContent: 'space-between',
      paddingTop: 16,
      paddingLeft: 16,
      paddingRight: 16,
    },
    keyboardVisibleContainer: {
      paddingBottom: 20,
    },
    inputContainer: {
      flex: 1,
      justifyContent: 'flex-end',
      paddingBottom: 16,
      paddingLeft: 16,
      paddingRight: 16,
    },
  });
export default styles;
