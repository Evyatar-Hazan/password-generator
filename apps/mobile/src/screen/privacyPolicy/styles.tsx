import { StyleSheet } from 'react-native';

import type { ThemeType } from '../../themes/themes';

const styles = (colors: ThemeType) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
  });

export default styles;
