import { StyleSheet } from 'react-native';

import type { ThemeType } from '../../themes/themes';

const styles = (colors: ThemeType, isRTL: boolean) =>
  StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: isRTL ? 'row-reverse' : 'row',
      paddingHorizontal: 16,
      paddingTop: 16,
      paddingBottom: 32,
    },
    scrollView: {
      flex: 1,
    },
    scrollViewContent: {
      paddingRight: 16,
    },
    scrollBarContainer: {
      width: 8,
      borderRadius: 4,
      overflow: 'hidden',
    },
    scrollBar: {
      width: '100%',
      borderRadius: 4,
      overflow: 'hidden',
    },
    gradient: {
      flex: 1,
    },
  });

export default styles;
